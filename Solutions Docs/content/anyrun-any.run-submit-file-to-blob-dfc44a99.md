# ANY.RUN Submit File to Blob

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Child Logic App called by ANY.RUN file playbooks. Returns per-file status to the parent playbook.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ANYRUN](../solutions/anyrun.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ANYRUN/Playbooks/Submit-File-to-Blob/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`DeviceFileEvents`](../tables/devicefileevents.md) | `ActionType == "FileCreated"`<br>`FolderPath !contains "ANYRUN_Temp"` | ✓ | ✗ | ✓ |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) | Managed | 1 | 1 |
| [`wdatp`](../logic-apps/managed-wdatp.md) | Managed | 1 | 4 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| KQL_-_Get_FilePath | post | `/queryData` | — |

#### [`wdatp`](../logic-apps/managed-wdatp.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Actions_-_Run_live_response | post | `/api/machines/@{encodeURIComponent(variables('Machine ID'))}/runliveresponse` | — |
| Actions_-_Get_single_machine_action | get | `/api/machineactions/@{encodeURIComponent(body('Actions_-_Run_live_response')?['id'])}` | — |
| Actions_-_Get_live_response_command_result_download_URI | get | `/api/machineactions/@{encodeURIComponent(body('Actions_-_Run_live_response')?['id'])}/GetLiveResponseResultDownloadLink(index=@{encodeURIComponent('0')})` | — |
| Machines_-_Get_single_machine | get | `/api/machines/@{encodeURIComponent(variables('Machine ID'))}` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_-_Download_Response_Body | GET | `@body('Actions_-_Get_live_response_command_result_download_URI')?['value']` | — |
| HTTP_-_Generate_SAS_Token | POST | `[uri(environment().resourceManager, variables('listServiceSasRelativePath'))]` | — |

</details>

## Additional Documentation

> 📄 *Source: [Submit-File-to-Blob/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ANYRUN/Playbooks/Submit-File-to-Blob/readme.md)*

# ANY.RUN — Submit File to Blob

![ANY.RUN](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ANYRUN.svg)

## Summary

> **Note:** This is a **child** Logic App. It is required **only** if you need to analyze files **and** you do **not** have Microsoft Defender for Endpoint (MDE).  
> If you have MDE, use the [Sandbox-File-Defender](../Sandbox-File-Defender/README.md) playbook instead. It collects files directly via MDE Live Response and does not require this child playbook.

This playbook is invoked by the parent file analysis playbooks (`Sandbox-File-Windows`, `Sandbox-File-Ubuntu`, `Sandbox-File-Debian`). It uploads a file from an endpoint to Azure Blob Storage so the parent can submit it to ANY.RUN Sandbox.

It is not triggered by Microsoft Sentinel incidents directly.

## Prerequisites

Shared prerequisites (Key Vault secret `ANYRUN-APIKey`, App Registration, API permissions, role assignments, and Storage Account) are described in the [solution README](../../README.md).

Additional requirements for this playbook:

- An existing Azure Storage Account and container for temporary file storage.
- An existing Log Analytics workspace.
- The Function App `ANYRUN-Sentinel-FA` must be deployed if you plan to analyze the uploaded files.
- This playbook must be deployed **before** the parent file playbooks (`Sandbox-File-Windows`, `Sandbox-File-Ubuntu`, `Sandbox-File-Debian`). Note its name — you will enter it as the Child Logic App Name parameter in the parent templates.

## Deployment

Click below to deploy Child Azure Logic App with **Flex Consumption plan**

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FANYRUN%2FPlaybooks%2FSubmit-File-to-Blob%2Fazuredeploy.json)

![child_logic_app_deployment](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ANYRUN/Playbooks/Submit-File-to-Blob/Images/3_001.png)

Enter the parameters required for deploying the Logic App and click **Review + create**.

Description of the required parameters:

| Parameter | Description |
|-----------|-------------|
| PlaybookName | Logic App name (default `ANYRUN-Submit-File-to-Blob`). |
| Log Analytics Workspace | Log Analytics workspace name. |
| Azure Blob Storage Account Name | Storage account used to store files before they are submitted to ANY.RUN. |

## Post-deployment

### Authorize API connections

After deployment, open the Logic App and authorize the API connections created by the template:

- **Azure Monitor Logs**
- **Azure Blob Storage**

Edit each connection, sign in, and save.

## Playbook steps

1. The playbook is triggered by an HTTP request from a parent file analysis playbook.
2. It receives file information (path, machine, etc.).
3. It uploads the file from the endpoint to the specified Azure Blob Storage container.
4. It returns the blob location (or an error) to the parent playbook so the parent can submit the file to ANY.RUN Sandbox via the Function App.

This playbook does not analyze files itself and does not write comments to incidents. Those actions are performed by the parent playbooks.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to ANYRUN](../solutions/anyrun.md)

