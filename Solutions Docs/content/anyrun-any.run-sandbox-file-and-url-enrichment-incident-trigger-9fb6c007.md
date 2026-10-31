# ANY.RUN Sandbox - File and URL Enrichment - Incident Trigger

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

On a Microsoft Sentinel incident, enriches File, and URL entities using Microsoft Defender for Endpoint Live Response and ANY.RUN Sandbox. Files are located via DeviceFileEvents, collected from the endpoint, uploaded to Azure Blob Storage, and detonated in Windows or Linux sandbox. URLs are submitted directly to ANY.RUN. Results are added as incident comments and IOCs are uploaded to Threat Intelligence.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ANYRUN](../solutions/anyrun.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ANYRUN/Playbooks/Sandbox-File-Defender/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`DeviceFileEvents`](../tables/devicefileevents.md) | `ActionType == "FileCreated"` | ✓ | ✗ | ✓ |

## Logic App Connectors

This playbook uses **7** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azureblob`](../logic-apps/managed-azureblob.md) | Managed | 1 | 1 |
| [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) | Managed | 1 | 1 |
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 20 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 1 | 1 |
| [`wdatp`](../logic-apps/managed-wdatp.md) | Managed | 1 | 5 |
| [`function`](../logic-apps/builtin-function.md) | Built-in | 0 | 3 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 9 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azureblob`](../logic-apps/managed-azureblob.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_blob_content_(V2) | get | `/v2/datasets/@{encodeURIComponent(encodeURIComponent(variables('Storage Account Name')))}/files/@{encodeURIComponent(encodeURIComponent('/',variables('Container Name'),'/',variables('Suspicious File - FileName')))}/content` | — |

#### [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| KQL_-_Get_FilePath | post | `/queryData` | — |

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_Hosts | post | `/entities/host` | — |
| Add_comment_to_incident_(V3)_-_File_Does_not_upload_to_Blob | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_-_Analysis_Started | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3)_-_Unsupported_OS_for_analysis | post | `/Incidents/Comment` | — |
| Update_incident_-_Add_Tags | put | `/Incidents` | — |
| Threat_Intelligence_-_Upload_Indicators_of_Compromise_(V2)_-_Malicious_IOCs | post | `/V2/ThreatIntelligence/@{encodeURIComponent(triggerBody()?['workspaceId'])}/UploadIndicators/` | — |
| Threat_Intelligence_-_Upload_Indicators_of_Compromise_(V2)_-_Suspicious_IOCs | post | `/V2/ThreatIntelligence/@{encodeURIComponent(triggerBody()?['workspaceId'])}/UploadIndicators/` | — |
| Add_comment_to_incident_(V3)_-_ANY.RUN_Output | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3)_-_CleanScan_ANY.RUN_Output | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_-_Pending_Live_Response_Response | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3)_-_KQL_Result_is_empty | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3)_-_Pending_Anti_Virus_Scan | post | `/Incidents/Comment` | — |
| Entities_-_Get_URLs | post | `/entities/url` | — |
| Add_comment_to_incident_-_Analysis_Started_URL | post | `/Incidents/Comment` | — |
| Update_incident_-_Add_Tags_URL | put | `/Incidents` | — |
| Threat_Intelligence_-_Upload_Indicators_of_Compromise_(V2)_-_Malicious_IOCs_URL | post | `/V2/ThreatIntelligence/@{encodeURIComponent(triggerBody()?['workspaceId'])}/UploadIndicators/` | — |
| Threat_Intelligence_-_Upload_Indicators_of_Compromise_(V2)_-_Suspicious_IOCs_URL | post | `/V2/ThreatIntelligence/@{encodeURIComponent(triggerBody()?['workspaceId'])}/UploadIndicators/` | — |
| Add_comment_to_incident_(V3)_-_ANY.RUN_Output_-_URL | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3)_-_Clean_Scan_URL_ANY.RUN_Output | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_-_OS_versions_unsupported | post | `/Incidents/Comment` | — |

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_secret_-_ANYRUN | get | `/secrets/@{encodeURIComponent('ANYRUN-APIKey')}/value` | — |

#### [`wdatp`](../logic-apps/managed-wdatp.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Actions_-_Get_single_machine_action | get | `/api/machineactions/@{encodeURIComponent(body('Actions_-_Run_live_response')?['id'])}` | — |
| Actions_-_Run_live_response | post | `/api/machines/@{encodeURIComponent(body('Parse_JSON_-_Each_Host')?['additionalData']?['MdatpDeviceId'])}/runliveresponse` | — |
| Actions_-_Get_live_response_command_result_download_URI | get | `/api/machineactions/@{encodeURIComponent(body('Actions_-_Get_single_machine_action')?['id'])}/GetLiveResponseResultDownloadLink(index=@{encodeURIComponent('0')})` | — |
| Machines_-_Get_single_machine | get | `/api/machines/@{encodeURIComponent(body('Parse_JSON_-_Each_Host')?['additionalData']?['MdatpDeviceId'])}` | — |
| Actions_-_Run_antivirus_scan | post | `/api/machines/@{encodeURIComponent(body('Parse_JSON_-_Each_Host')?['additionalData']?['MdatpDeviceId'])}/runAntiVirusScan` | — |

#### [`function`](../logic-apps/builtin-function.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| ANYRUN-Sentinel-FA_Windows_File_Analysis | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('connectFunctionAppName'), '/functions/ANYRUN-Sentinel-FA')]` |
| ANYRUN-Sentinel-FA_Ubuntu_File_Analysis | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('connectFunctionAppName'), '/functions/ANYRUN-Sentinel-FA')]` |
| ANYRUN-Sentinel-FA_Debian_File_Analysis | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('connectFunctionAppName'), '/functions/ANYRUN-Sentinel-FA')]` |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_-_Download_Response_Body | GET | `@body('Actions_-_Get_live_response_command_result_download_URI')?['value']` | — |
| HTTP-CheckFile-Result | GET | `https://api.any.run/v1/analysis/monitor/@{variables('UUID')}` | — |
| HTTP-Full-JSON-Report | GET | `https://api.any.run/v1/analysis/@{variables('UUID')}` | — |
| HTTP-GetIOC | GET | `https://api.any.run/report/@{variables('UUID')}/ioc/json` | — |
| HTTP_-_Generate_SAS_Token | POST | `[uri(environment().resourceManager, variables('listServiceSasRelativePath'))]` | — |
| HTTP-RunNewURLAnalysis | POST | `https://api.any.run/v1/analysis` | — |
| HTTP-CheckURL-Result | GET | `https://api.any.run/v1/analysis/monitor/@{variables('UUID')}` | — |
| HTTP-Full-JSON-Report_URL | GET | `https://api.any.run/v1/analysis/@{variables('UUID')}` | — |
| HTTP-GetIOC_URL | GET | `https://api.any.run/report/@{variables('UUID')}/ioc/json` | — |

</details>

## Additional Documentation

> 📄 *Source: [Sandbox-File-Defender/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ANYRUN/Playbooks/Sandbox-File-Defender/readme.md)*

# ANY.RUN — Sandbox File Defender

![ANY.RUN](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ANYRUN.svg)

## Summary

When a Microsoft Sentinel incident is created, this playbook:

- Extracts File, URL, and Host entities from the incident.
- Uses Microsoft Defender for Endpoint (MDE) Live Response to collect files from endpoints and upload them to Azure Blob Storage.
- Submits files and URLs to ANY.RUN Sandbox via the Function App `ANYRUN-Sentinel-FA`.
- Adds a comment to the incident with the analysis verdict, threat score, malware tags, IOC table, and a link to the analysis session.
- Uploads detected IOCs to the Microsoft Sentinel Threat Intelligence portal.

## Prerequisites

Shared prerequisites (Key Vault secret `ANYRUN-APIKey`, App Registration, API permissions, role assignments, and Storage Account) are described in the [solution README](../../README.md).

Additional requirements for this playbook:

- Microsoft Defender for Endpoint must be enabled and devices must be onboarded.
- The Function App `ANYRUN-Sentinel-FA` must be deployed in the same subscription and resource group.
- Microsoft Sentinel incidents must contain File, URL, or Host entities.

## Deployment

Click below to deploy Azure Logic App with **Flex Consumption plan**

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FANYRUN%2FPlaybooks%2FSandbox-File-Defender%2Fazuredeploy.json)

![logic_app_deployment](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ANYRUN/Playbooks/Sandbox-File-Defender/Images/7_001.png)

Enter the parameters required for deploying the Logic App and click **Review + create**.

Description of the required parameters:

| Parameter | Description |
|-----------|-------------|
| PlaybookName | Logic App name (default `ANYRUN-Sandbox-Defender`). |
| Azure Tenant ID | Tenant ID for authentication in connections. |
| Azure Client ID | Client ID of the App Registration created for the solution. |
| Azure Blob Storage Account Name | Storage account used to store files before they are submitted to ANY.RUN. |
| Azure Blob Storage Container Name | Container name in the storage account. |
| Azure Blob Storage Connection String | Connection string of the storage account. |
| Log Analytics Workspace | Log Analytics workspace name. |
| functionAppName | Name of the deployed Function App. |

## Post-deployment

### Authorize API connections

After deployment, open the Logic App and authorize the API connections created by the template:

- **Microsoft Sentinel**
- **Key Vault**
- **Azure Blob Storage**
- **Azure Monitor Logs**
- **Microsoft Defender for Endpoint (WDATP)**

Edit each connection, sign in, and save.

## Playbook steps

1. The playbook is triggered when a Microsoft Sentinel incident is created.
2. It retrieves File, URL, and Host entities from the incident.
3. For files it uses MDE Live Response to collect the file from the endpoint and upload it to Azure Blob Storage.
4. It obtains the ANY.RUN API key from Key Vault.
5. It calls the Function App to submit files and URLs for analysis in ANY.RUN Sandbox.
6. After analysis completes, it adds a comment to the incident containing the verdict, threat score, tags, IOC table, and a link to the analysis session.
7. Detected IOCs are uploaded to the Microsoft Sentinel Threat Intelligence portal.

## Storage Account Configuration

To generate an SAS token for Azure Blob Storage, you need to assign the appropriate role directly to the Logic App.

Open your Storage Account.  
Navigate to **Access Control (IAM)** and click **Add**.

![storage_logic_app](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ANYRUN/Playbooks/Sandbox-File-Defender/Images/4_002.png)

Specify the Logic App `ANYRUN-Sandbox-Defender`.  
Select the following role:

| Name | Description |
| --- | --- |
| Storage Account Contributor | Lets you manage storage accounts, including accessing storage account keys which provide full access to storage account data. |

## Microsoft Defender for Endpoint configuration and additional script

> **Note:**  
> To allow the connector to extract all files of interest from endpoints (including potentially dangerous ones), we recommend setting **Quarantine** as the default action for your MDE.

### Enable Live Response Sessions

Open your [MDE portal](https://security.microsoft.com).  
Navigate to **System** > **Settings** > **Endpoints** > **General** > **Advanced features**.  
Enable the following settings: **Live Response**, **Live Response for Servers**, and **Live Response unsigned script execution**.

![enable_live_response](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ANYRUN/Playbooks/Sandbox-File-Defender/Images/Defender_002.png)

### Upload Helper Scripts to the Local Library of Your Endpoints

Open your MDE portal.  
Navigate to **Assets** > **Devices**.  

*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to ANYRUN](../solutions/anyrun.md)

