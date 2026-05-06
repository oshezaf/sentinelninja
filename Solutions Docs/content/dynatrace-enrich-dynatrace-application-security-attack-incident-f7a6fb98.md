# Enrich Dynatrace Application Security Attack Incident

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will enriche Dynatrace Application Security Attack Incidents with additional information when new incident is opened.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Dynatrace](../solutions/dynatrace.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace/Playbooks/Enrich_DynatraceApplicationSecurityAttackIncident/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 0 |
| `keyvault` | Managed | 1 | 1 |
| `microsoftsentinel` | Managed | 0 | 1 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`keyvault`** (managedApi):
- *Get_Dynatrace_Access_Token*: method=`get`, path=`/secrets/@{encodeURIComponent('DynatraceAccessToken')}/value`

**`microsoftsentinel`** (managedApi):
- *Update_incident_with_tags*: method=`put`, path=`/Incidents`

**`http`** (builtin):
- *Get_Dynatrace_Attack_Details*: method=`GET`, uri=`https://@{parameters('Tenant')}/api/v2/attacks/@{first(body('Parse_Incident_Alert_Custom_Body_JSON')?['attackIdentifier'])}`

</details>

## Additional Documentation

> 📄 *Source: [Enrich_DynatraceApplicationSecurityAttackIncident/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace/Playbooks/Enrich_DynatraceApplicationSecurityAttackIncident/readme.md)*

# Enrich_DynatraceApplicationSecurityAttackIncident
author: Dynatrace

This playbook uses the Dynatrace REST APIs to automatically enrich incidents created by Microsoft Sentinel. You need a valid Dynatrace tenant with [Application Security](https://www.dynatrace.com/platform/application-security/) enabled. To learn more about the Dynatrace platform [Start your free trial](https://www.dynatrace.com/trial)


** Prerequisites ** 
- Follow [these instructions](https://docs.dynatrace.com/docs/shortlink/token#create-api-token) to generate a Dynatrace access token, the token should have Read attacks (attacks.read) scope.
- [Important step]Store the Dynatrace Access Token as a [secret in Azure Key vault](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-portal) and provide the key vault name during playbook deployment, by convention the secret name should be 'DynatraceAccessToken'.

** Post Install Notes:**

The Logic App uses a Managed System Identity (MSI) to update the Microsoft Sentinel Incident. 

Assign RBAC 'Microsoft Sentinel Responder' role to the Logic App at the Resource Group level of the Log Analytics Workspace.

Assign access policy on key vault for Playbook to fetch the secret key

## Initial Setup

A Microsoft Sentinel playbook is utilized by automation rules, therefore to automatically trigger this playbook you must setup a new automation rule. If you have not set permissions yet, [review here](https://docs.microsoft.com/azure/sentinel/automate-incident-handling-with-automation-rules#permissions-for-automation-rules-to-run-playbooks)

Basic steps for setup of the playbook and automation rule are as follows :

1. Go to the Automation blade in Microsoft Sentinel.
2. Create a new playbook from the 'Enrich Dynatrace Application Security Attack Incident' [playbook template](https://learn.microsoft.com/en-us/azure/sentinel/use-playbook-templates)
- KeyvaultName: The name of the keyvault created as pre-requisite
- DynatraceTenant: xyz.dynatrace.com
3. Create a new [automation rule](https://learn.microsoft.com/en-us/azure/sentinel/create-manage-use-automation-rules)
- Name : Enrich Dynatrace Application Security Attack Incident
- Trigger : When incident is created
- Conditions : If Analytic rule name contains 'Dynatrace Application Security - Attack detection'
- Actions : Run playbook EnrichDynatraceApplicationSecurityAttackIncident

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Dynatrace](../solutions/dynatrace.md)

