# Enrich Dynatrace Application Security Attack with related Microsoft Sentinel Security Alerts

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will enrich Dynatrace Application Security Attack with related Microsoft Sentinel Security Alerts.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Dynatrace](../solutions/dynatrace.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace/Playbooks/Enrich-DynatraceAppSecAttackWithSecurityAlerts/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SecurityAlert`](../tables/securityalert.md) | `VendorName == "Dynatrace"` | ✓ | ✗ | ? |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 1 |
| `azuresentinel` | Managed | 1 | 0 |
| `keyvault` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Get_Related_Security_Alerts*: method=`post`, path=`/queryData`

**`keyvault`** (managedApi):
- *Get_Dynatrace_Access_Token*: method=`get`, path=`/secrets/@{encodeURIComponent('DynatraceAccessToken')}/value`

**`http`** (builtin):
- *Get_Dynatrace_Attack_Details*: method=`GET`, uri=`https://@{parameters('Tenant')}/api/v2/attacks/@{first(body('Parse_Incident_Alert_Custom_Body_JSON')?['AttackIdentifier'])}`
- *Ingest_Dynatrace_Log_Entries*: method=`POST`, uri=`https://@{parameters('Tenant')}/api/v2/logs/ingest`

</details>

## Additional Documentation

> 📄 *Source: [Enrich-DynatraceAppSecAttackWithSecurityAlerts/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace/Playbooks/Enrich-DynatraceAppSecAttackWithSecurityAlerts/readme.md)*

# Enrich-DynatraceAppSecAttackWithSecurityAlerts
author: Dynatrace

This playbook will Report all Microsoft Sentinel Security Alerts related to a Dynatrace Application Security Attack back to Dynatrace. You need a valid Dynatrace tenant with [Application Security](https://www.dynatrace.com/platform/application-security/) enabled, you will also need to install the relevant Microsoft Sentinel Connectors which would generated security alerts consumed by this playbook. To learn more about the Dynatrace platform [Start your free trial](https://www.dynatrace.com/trial)

** Prerequisites ** 
- Follow [these instructions](https://docs.dynatrace.com/docs/shortlink/token#create-api-token) to generate a Dynatrace access token, the token should have Read attacks (attacks.read) and Ingest logs (logs.ingest) scopes.
- [Important step]Store the Dynatrace Access Token as a [secret in Azure Key vault](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-portal) and provide the key vault name during playbook deployment, by convention the secret name should be 'DynatraceAccessToken'.

** Post Install Notes:**

Authorize the Azure Monitor Logs API Connection associated with the logic app deployed into the ResourceGroup.

The Logic App uses a Managed System Identity (MSI) to query the Log Analytics Workspace. 

Assign RBAC 'Microsoft Sentinel Reader' role to the Logic App at the Resource Group level of the Log Analytics Workspace.

Assign access policy on key vault for Playbook to fetch the secret key

## Initial Setup

A Microsoft Sentinel playbook is utilized by automation rules, therefore to automatically trigger this playbook you must setup a new automation rule. If you have not set permissions yet, [review here](https://docs.microsoft.com/azure/sentinel/automate-incident-handling-with-automation-rules#permissions-for-automation-rules-to-run-playbooks)

Basic steps for setup of the playbook and automation rule are as follows :

1. Go to the Automation blade in Microsoft Sentinel.
2. Create a new playbook from the 'Enrich Dynatrace Application Security Attack with related Microsoft Sentinel Security Alerts' [playbook template](https://learn.microsoft.com/en-us/azure/sentinel/use-playbook-templates)
- KeyvaultName: The name of the keyvault created as pre-requisite
- DynatraceTenant: xyz.dynatrace.com
3. Create a new [automation rule](https://learn.microsoft.com/en-us/azure/sentinel/create-manage-use-automation-rules)
- Name : Enrich Dynatrace Application Security Attack with related Microsoft Sentinel Security Alerts
- Trigger : When incident is created
- Conditions : If Analytic rule name contains 'Dynatrace Application Security - Attack detection'
- Actions : Run playbook EnrichDynatraceAppSecAttackWithSecurityAlerts

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Dynatrace](../solutions/dynatrace.md)

