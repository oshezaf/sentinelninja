# Rubrik Anomaly Analysis

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook queries Rubrik Security Cloud to enrich the Anomaly event with additional information regarding the Ransomware analysis, results from sensitive data scans, (to aid in incident prioritization), and additional information about the Rubrik cluster. Also it retrieves suspiciousFiles information associated with anomalous snapshot and internally calls RubrikAnomalyGenerateDownloadableLink playbook to get downloadable links and enrich the anomaly incident and RubrikUpdateAnomalyStatus pla

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [RubrikSecurityCloud](../solutions/rubriksecuritycloud.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RubrikSecurityCloud/Playbooks/RubrikAnomalyAnalysis/azuredeploy.json) |

## Logic App Connectors

This playbook uses **6** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 2 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 1 | 0 |
| [`keyvault_1`](../logic-apps/managed-keyvault-1.md) | Managed | 0 | 2 |
| [`RubrikCustomConnector`](../logic-apps/custom-rubrikcustomconnector.md) | Custom | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 9 |
| [`workflow`](../logic-apps/builtin-workflow.md) | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Close_Incident_Due_To_Anomaly_Is_Already_Resolved | put | `/Incidents` | — |
| Close_incident_due_to_resolve_anomaly_or_report_false_positive | put | `/Incidents` | — |

#### [`keyvault_1`](../logic-apps/managed-keyvault-1.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Client_Id_ | get | `/secrets/@{encodeURIComponent('Rubrik-AS-Int-ClientId')}/value` | — |
| Get_secret | get | `/secrets/@{encodeURIComponent('Rubrik-AS-Int-ClientSecret')}/value` | — |

#### [`RubrikCustomConnector`](../logic-apps/custom-rubrikcustomconnector.md) (Custom)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Authentication | post | `/api/client_token` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Determine_the_status_of_the_Rubrik_Radar_analysis_process | POST | `@{triggerBody()?['BaseUrl']}/api/graphql` | — |
| sonar_sensitive_hits(Object_Details) | POST | `@{triggerBody()?['BaseUrl']}/api/graphql` | — |
| Get_Suspicious_files_for_a_latest_snpshot_of_given_object | POST | `@{triggerBody()?['BaseUrl']}/api/graphql` | — |
| Get_cdm_snapshotid_for_latest_snapshotfid | POST | `@{triggerBody()?['BaseUrl']}/api/graphql` | — |
| Gather_the_final_Radar_Analysis_results | POST | `@{triggerBody()?['BaseUrl']}/api/graphql` | — |
| GenericPolling | POST | `@{triggerBody()?['BaseUrl']}/api/graphql` | — |
| rubrik-cdm-cluster-connection-state | POST | `@{triggerBody()?['BaseUrl']}/api/graphql` | — |
| rubrik-cdm-cluster-location | POST | `@{triggerBody()?['BaseUrl']}/api/graphql` | — |
| rubrik-sonar-sensitive-hits(Object_List) | POST | `@{triggerBody()?['BaseUrl']}/api/graphql` | — |

#### [`workflow`](../logic-apps/builtin-workflow.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| RubrikGenerateDownloadableLink | — | — | workflowId=`[concat('/subscriptions/',subscription().subscriptionId,'/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',parameters('DownloadableLinkGeneratePlaybookName'))]`<br>triggerName=`manual` |
| RubrikUpdateAnomalyStatus | — | — | workflowId=`[concat('/subscriptions/',subscription().subscriptionId,'/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',parameters('UpdateAnomalyStatusPlaybookName'))]`<br>triggerName=`manual` |

</details>

## Additional Documentation

> 📄 *Source: [RubrikAnomalyAnalysis/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RubrikSecurityCloud/Playbooks/RubrikAnomalyAnalysis/readme.md)*

## Summary

This playbook queries Rubrik Security Cloud to enrich the Anomaly event with additional information regarding the Ransomware analysis, results from sensitive data scans, (to aid in incident prioritization), and additional information about the Rubrik cluster. Also it retrieves suspiciousFiles information associated with anomalous snapshot and internally calls RubrikAnomalyGenerateDownloadableLink playbook to get downloadable links and enrich the anomaly incident and RubrikUpdateAnomalyStatus playbook to resolve or report false positive unresolved anomaly.

### Prerequisites

1. The Rubrik Security Cloud data connector should be configured to send appropriate events to Microsoft Sentinel.
2. The Rubrik Security Cloud solution should be configured to [connect to Rubrik Security Cloud API end points using a Service Account](https://docs.rubrik.com/en-us/saas/saas/polaris_api_access_with_service_accounts.html), the service account should be assigned a role that includes the relevant privileges necessary to perform the desired operations (see [Roles and Permissions](https://docs.rubrik.com/en-us/saas/saas/common/roles_and_permissions.html) in the Rubrik Security Cloud user guide).
3. Rubrik custom connector needs to be deployed prior to the deployment of this playbook, in the same resource group and region. Relevant instructions can be found in the connector doc page.
4. Store Service account credentials in Key Vault and obtain keyvault name and tenantId
    a. Create a Key Vault with unique name
    b. Go to KeyVault -> secrets -> Generate/import and create 'Rubrik-AS-Int-ClientId' & 'Rubrik-AS-Int-ClientSecret' for storing client_id and client_secret respectively
5. Make sure that RubrikAnomalyGenerateDownloadableLink and RubrikUpdateAnomalyStatus playbook are deployed before deploying RubrikAnomalyAnalysis playbook.

### Deployment instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here
    * Rubrik Connector name: Name of the Rubrik Custom Connector deployed previously
    * keyvaultname: Name of keyvault where secrets are stored.
    * tenantId: TenantId where keyvault is located.
    * DownloadableLinkGeneratePlaybookName: Playbook name which is deployed as part of prerequisites
    * UpdateAnomalyStatusPlaybookName: Playbook name which is deployed as part of prerequisites

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FRubrikSecurityCloud%2FPlaybooks%2FRubrikAnomalyAnalysis%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FRubrikSecurityCloud%2FPlaybooks%2FRubrikAnomalyAnalysis%2Fazuredeploy.json)

### Post-Deployment instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection like keyvault.

1. Click the connection resource
2. Click edit API connection
3. Click Authorize
4. Sign in
5. Click Save
6. Repeat steps for other connections

#### b. Assign Role to close incident
Assign role to this playbook.
1. Go to Log Analytics Workspace → <your workspace> → Access Control → Add
2. Add role assignment
3. Assignment type: Job function roles -> Add 'Microsoft Sentinel Contributor' as a Role
4. Members: select managed identity for assigned access to and add your logic app as member
5. Click on review+assign

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to RubrikSecurityCloud](../solutions/rubriksecuritycloud.md)

