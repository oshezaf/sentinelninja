# Rubrik Ransomware Discovery and File Recovery

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook interacts with Rubrik Security Cloud to (1) optionally preserve evidence by creating an on-demand snapshot of the object, (2) identify a potential recovery point by scanning backups for specified IOCs, and (3) supporting file level recovery.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [RubrikSecurityCloud](../solutions/rubriksecuritycloud.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RubrikSecurityCloud/Playbooks/RubrikRansomwareDiscoveryAndFileRecovery/azuredeploy.json) |

## Logic App Connectors

This playbook uses **6** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `keyvault` | Managed | 1 | 0 |
| `keyvault_1` | Managed | 0 | 2 |
| `teams` | Managed | 1 | 0 |
| `RubrikCustomConnector` | Custom | 1 | 1 |
| `http` | Built-in | 0 | 4 |
| `workflow` | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`keyvault_1`** (managedApi):
- *Get_ClientId*: method=`get`, path=`/secrets/@{encodeURIComponent('Rubrik-AS-Int-clientId')}/value`
- *Get_ClientSecret*: method=`get`, path=`/secrets/@{encodeURIComponent('Rubrik-AS-Int-ClientSecret')}/value`

**`RubrikCustomConnector`** (customApi):
- *Authentication*: method=`post`, path=`/api/client_token`

**`http`** (builtin):
- *Create_Snapshot_for_evidence*: method=`POST`, uri=`@{triggerBody()?['BaseUrl']}/api/graphql`
- *Recover_snapshot_files*: method=`POST`, uri=`@{triggerBody()?['BaseUrl']}/api/graphql`
- *List_all_Snapshots*: method=`POST`, uri=`@{triggerBody()?['BaseUrl']}/api/graphql`
- *Fetch_Yara_rule(s)_from_file_URLs*: method=`GET`, uri=`@body('Collect_IOC_Scan_Data')?['data']?['ioc Yara rule file URL ']`

**`workflow`** (builtin):
- *RubrikPollAsyncResult*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/RubrikPollAsyncResult')]`, triggerName=`manual`
- *RubrikPollAsyncResult_2*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/RubrikPollAsyncResult')]`, triggerName=`manual`
- *RubrikIOCScan*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/RubrikIOCScan')]`, triggerName=`manual`

</details>

## Additional Documentation

> 📄 *Source: [RubrikRansomwareDiscoveryAndFileRecovery/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RubrikSecurityCloud/Playbooks/RubrikRansomwareDiscoveryAndFileRecovery/readme.md)*

## Summary

This playbook interacts with Rubrik Security Cloud to (1) optionally preserve evidence by creating an on-demand snapshot of the object, (2) identify a potential recovery point by scanning backups for specified IOCs, and (3) supporting file level recovery.

### Prerequisites

1. The Rubrik Security Cloud data connector should be configured to send appropriate events to Microsoft Sentinel.
2. The Rubrik Security Cloud solution should be configured to [connect to Rubrik Security Cloud API end points using a Service Account](https://docs.rubrik.com/en-us/saas/saas/polaris_api_access_with_service_accounts.html), the service account should be assigned a role that includes the relevant privileges necessary to perform the desired operations (see [Roles and Permissions](https://docs.rubrik.com/en-us/saas/saas/common/roles_and_permissions.html) in the Rubrik Security Cloud user guide).
3. To perform an IOC scan the IOC YARA rule should be available as a URL.
4. Obtain Teams group id and channel id.
5. Store Service account credentials in Key Vault and obtain keyvault name and tenantId
    a. Create a Key Vault with unique name
    b. Go to KeyVault -> secrets -> Generate/import and create 'Rubrik-AS-Int-ClientId' & 'Rubrik-AS-Int-ClientSecret' for storing client_id and client_secret respectively
6. Make sure that RubrikIOCScan and RubrikPollAsyncResult playbook is deployed before deploying RubrikRansomwareDiscoveryAndFileRecovery playbook.

### Deployment instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here
    * Teams Group Id: Id of the Teams Group where the adaptive card will be posted
    * Teams Channel Id: Id of the Teams Channel where the adaptive card will be posted
    * keyvaultname: Name of keyvault where secrets are stored.
    * tenantId: TenantId where keyvault is located.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FRubrikSecurityCloud%2FPlaybooks%2FRubrikRansomwareDiscoveryAndFileRecovery%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FRubrikSecurityCloud%2FPlaybooks%2FRubrikRansomwareDiscoveryAndFileRecovery%2Fazuredeploy.json)

### Post-Deployment instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.

1. Click the Custom connector connection resource
2. Click edit API connection
3. Click Authorize
4. Sign in
5. Click Save
6. Repeat steps for other connections

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to RubrikSecurityCloud](../solutions/rubriksecuritycloud.md)

