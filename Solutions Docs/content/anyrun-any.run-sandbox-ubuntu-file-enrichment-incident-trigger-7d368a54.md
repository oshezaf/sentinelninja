# ANY.RUN Sandbox - Ubuntu File Enrichment - Incident Trigger

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

On a Microsoft Sentinel incident, collects File and Host entities, uploads files to Azure Blob Storage via the ANYRUN-Submit-File-to-Blob child playbook, and detonates them in ANY.RUN Sandbox on an Ubuntu environment. Adds analysis comments and uploads IOCs to Threat Intelligence.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ANYRUN](../solutions/anyrun.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ANYRUN/Playbooks/Sandbox-File-Ubuntu/azuredeploy.json) |

## Logic App Connectors

This playbook uses **6** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azureblob`](../logic-apps/managed-azureblob.md) | Managed | 1 | 1 |
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 9 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 1 | 1 |
| [`function`](../logic-apps/builtin-function.md) | Built-in | 0 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 3 |
| [`workflow`](../logic-apps/builtin-workflow.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azureblob`](../logic-apps/managed-azureblob.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_blob_content_(V2) | get | `/v2/datasets/@{encodeURIComponent(encodeURIComponent(variables('Storage Account Name')))}/files/@{encodeURIComponent(encodeURIComponent('/',variables('Container Name'),'/',item()['fileName']))}/content` | — |

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_Hosts | post | `/entities/host` | — |
| Add_comment_to_incident_-_Analysis_Started | post | `/Incidents/Comment` | — |
| Update_incident_-_Add_Tags_to_Incident_File | put | `/Incidents` | — |
| Threat_Intelligence_-_Upload_Indicators_of_Compromise_(V2)_-_Malicious_IOCs | post | `/V2/ThreatIntelligence/@{encodeURIComponent(triggerBody()?['workspaceId'])}/UploadIndicators/` | — |
| Threat_Intelligence_-_Upload_Indicators_of_Compromise_(V2)_-_Suspicious_IOCs | post | `/V2/ThreatIntelligence/@{encodeURIComponent(triggerBody()?['workspaceId'])}/UploadIndicators/` | — |
| Add_comment_to_incident_(V3)_-_ANY.RUN_Output | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3)_-_Clean_Scan_File_ANY.RUN_Output | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3)_-_entities_uploaded_with_error | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3)_-_Entity_is_empty | post | `/Incidents/Comment` | — |

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_secret_-_ANYRUN | get | `/secrets/@{encodeURIComponent('ANYRUN-APIKey')}/value` | — |

#### [`function`](../logic-apps/builtin-function.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| ANYRUN-Sentinel-FA_Ubuntu_File_Analysis | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('connectFunctionAppName'), '/functions/ANYRUN-Sentinel-FA')]` |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP-CheckFile-Result | GET | `https://api.any.run/v1/analysis/monitor/@{variables('UUID')}` | — |
| HTTP-Full-JSON-Report | GET | `https://api.any.run/v1/analysis/@{variables('UUID')}` | — |
| HTTP-GetIOC | GET | `https://api.any.run/report/@{variables('UUID')}/ioc/json` | — |

#### [`workflow`](../logic-apps/builtin-workflow.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| ANYRUN-Submit-File-to-Blob | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Logic/workflows/', parameters('Child Logic App Name'))]`<br>triggerName=`When_a_HTTP_request_is_received` |

</details>

## Additional Documentation

> 📄 *Source: [Sandbox-File-Ubuntu/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ANYRUN/Playbooks/Sandbox-File-Ubuntu/readme.md)*

# ANY.RUN — Sandbox File Ubuntu

![ANY.RUN](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ANYRUN.svg)

## Summary

> **Note:** This playbook is required **only** if you need to analyze files from Ubuntu endpoints **and** you do **not** have Microsoft Defender for Endpoint (MDE).  
> If you have MDE, use the [Sandbox-File-Defender](../Sandbox-File-Defender/README.md) playbook instead. It collects files directly via MDE Live Response and does not require the child playbook.

When a Microsoft Sentinel incident is created, this playbook:

- Extracts File and Host entities from the incident.
- Calls the child Logic App `Submit-File-to-Blob` to upload the file from the endpoint to Azure Blob Storage.
- Submits the file to ANY.RUN Sandbox (Ubuntu environment) via the Function App `ANYRUN-Sentinel-FA`.
- Adds a comment to the incident with the analysis verdict, threat score, malware tags, IOC table, and a link to the analysis session.
- Uploads detected IOCs to the Microsoft Sentinel Threat Intelligence portal.

## Prerequisites

Shared prerequisites (Key Vault secret `ANYRUN-APIKey`, App Registration, API permissions, role assignments, and Storage Account) are described in the [solution README](../../README.md).

Additional requirements for this playbook:

- The Function App `ANYRUN-Sentinel-FA` must be deployed in the same subscription and resource group.
- The child Logic App `Submit-File-to-Blob` must be deployed first. Note its name — you will enter it as the **Child Logic App Name** parameter.
- Microsoft Sentinel incidents must contain File (and preferably Host) entities.
- An Automation Rule must be configured to run this playbook when an incident is created.

## Deployment

Click below to deploy Parent Azure Logic App with **Flex Consumption plan**

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FANYRUN%2FPlaybooks%2FSandbox-File-Ubuntu%2Fazuredeploy.json)

![parent_logic_app_deployment_ubuntu](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ANYRUN/Playbooks/Sandbox-File-Ubuntu/Images/4_001.png)

Enter the parameters required for deploying the Logic App and click **Review + create**.

Description of the required parameters:

| Parameter | Description |
|-----------|-------------|
| PlaybookName | Logic App name (default `ANYRUN-Sandbox-File-Ubuntu`). |
| Azure Tenant ID | Tenant ID for authentication in connections. |
| Azure Client ID | Client ID of the App Registration created for the solution. |
| Azure Blob Storage Account Name | Storage account used to store files before they are submitted to ANY.RUN. |
| Azure Blob Storage Container Name | Container name in the storage account. |
| Azure Blob Storage Connection String | Connection string of the storage account. |
| Child Logic App Name | Name of the deployed `Submit-File-to-Blob` Logic App (default `ANYRUN-Submit-File-to-Blob`). |
| functionAppName | Name of the deployed Function App. |

## Post-deployment

### Authorize API connections

After deployment, open the Logic App and authorize the API connections created by the template:

- **Microsoft Sentinel**
- **Key Vault**
- **Azure Blob Storage**

Edit each connection, sign in, and save.

## Playbook steps

1. The playbook is triggered when a Microsoft Sentinel incident is created.
2. It retrieves File and Host entities from the incident.
3. It calls the child Logic App `Submit-File-to-Blob` to upload the file from the endpoint to Azure Blob Storage.
4. It obtains the ANY.RUN API key from Key Vault.
5. It calls the Function App to submit the file for analysis in ANY.RUN Sandbox (Ubuntu environment).
6. After analysis completes, it adds a comment to the incident containing the verdict, threat score, tags, IOC table, and a link to the analysis session.
7. Detected IOCs are uploaded to the Microsoft Sentinel Threat Intelligence portal.

## Storage Account Configuration

To generate an SAS token for Azure Blob Storage, you need to assign the appropriate role directly to the Logic App.

Open your Storage Account.  
Navigate to **Access Control (IAM)** and click **Add**.

![storage_child_logic_app_ubuntu](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ANYRUN/Playbooks/Sandbox-File-Ubuntu/Images/4_002.png)

Specify the child Logic App `ANYRUN-Submit-File-to-Blob`.  
Select the following role:

| Name | Description |
| --- | --- |
| Storage Account Contributor | Lets you manage storage accounts, including accessing storage account keys which provide full access to storage account data. |

## Logic App configuration (Optional)

### ANY.RUN Sandbox analysis parameters


*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to ANYRUN](../solutions/anyrun.md)

