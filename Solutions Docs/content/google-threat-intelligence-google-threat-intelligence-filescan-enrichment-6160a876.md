# Google Threat Intelligence - FileScan Enrichment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook accepts a blob path posted from an Azure Workbook, retrieves the file from Azure Blob Storage, submits it to Google Threat Intelligence (VirusTotal) for scanning (handling both standard and large files >32 MB), polls until analysis is complete, ingests the result into GTI_FileScan_CL via DCE/DCR, and returns a verdict with threat assessment details.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Playbooks/GTIFileScanEnrichment/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azureblob`](../logic-apps/managed-azureblob.md) | Managed | 1 | 2 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 1 | 1 |
| [`function`](../logic-apps/builtin-function.md) | Built-in | 0 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azureblob`](../logic-apps/managed-azureblob.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Blob_Metadata | get | `/v2/datasets/@{encodeURIComponent(encodeURIComponent(parameters('StorageAccountName')))}/files/@{encodeURIComponent(encodeURIComponent(concat('/', triggerBody()?['containerName'], '/', triggerBody()?['blobPath'])))}` | — |
| Get_Blob_Content | get | `/v2/datasets/@{encodeURIComponent(encodeURIComponent(parameters('StorageAccountName')))}/files/@{encodeURIComponent(encodeURIComponent(concat('/', triggerBody()?['containerName'], '/', triggerBody()?['blobPath'])))}/content` | — |

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Secret | get | `[concat('/secrets/@{encodeURIComponent(''', parameters('KeyVaultSecretName'), ''')}/value')]` | — |

#### [`function`](../logic-apps/builtin-function.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Upload_Large_File_Via_Function | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('FunctionAppResourceName'), '/functions/GTIUploadLargeFile')]` |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Submit_File | POST | `@{variables('GTIBaseUrl')}/api/v3/private/files` | — |
| Get_Analysis | GET | `@{variables('GTIBaseUrl')}/api/v3/private/analyses/@{variables('AnalysisId')}` | — |
| Get_File_Report | GET | `@{variables('GTIBaseUrl')}/api/v3/private/files/@{body('Get_Analysis')?['meta']?['file_info']?['sha256']}` | — |
| Ingest_File_Scan_Result | POST | `@parameters('DCEIngestionEndpoint')` | — |

</details>

## Additional Documentation

> 📄 *Source: [GTIFileScanEnrichment/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Playbooks/GTIFileScanEnrichment/readme.md)*

## Summary

This playbook is triggered via HTTP request from the Google Threat Intelligence Workbook and accepts a container name and blob path pointing to a file in Azure Blob Storage. It retrieves the file (uploading it through the shared GTIFileUpload Function App if larger than 32 MB), submits it to Google Threat Intelligence (VirusTotal) for scanning, and polls the analysis until it completes. The resulting file report, including the GTI threat verdict, severity, and contributing factors, is ingested into the GTI_FileScan_CL table via a Data Collection Endpoint/Rule, giving analysts an on-demand file reputation and threat assessment view directly in the workbook.

### Prerequisites

1. Deploy the GTIFileUpload_FunctionAppConnector (Solutions/Google Threat Intelligence/Playbooks/CustomConnector/GTIFileUpload_FunctionAppConnector) before deploying this playbook, since files larger than 32 MB are uploaded to GTI by that Function App rather than by this Logic App.
2. Obtain a Google Threat Intelligence (VirusTotal) API key and store it in Azure Key Vault as a secret (default secret name: 'GTIApiKey').
3. Create or identify an Azure Key Vault, and confirm enabledForTemplateDeployment is set to true.
4. Ensure you have a Log Analytics Workspace configured for Microsoft Sentinel where the GTI_FileScan_CL table will be created.
5. Identify the Azure Storage Account that contains the files to be scanned; this playbook is bound to a single storage account at deploy time.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   * PlaybookName: Enter the playbook name here (default: GTIFileScanEnrichment).
   * KeyVaultName: Name of the Azure Key Vault that contains the GTI API key secret.
   * KeyVaultSecretName: Name of the secret in Key Vault that holds the GTI (VirusTotal) API key (default: GTIApiKey).
   * WorkspaceName: Name of the Log Analytics workspace where the GTI_FileScan_CL table resides.
   * StorageAccountName: Name of the Azure Storage Account containing the files to be scanned.
   * FunctionAppName: Name of the shared GTIFileUpload Azure Function App used to upload files larger than 32MB to GTI (default: gtifileupload).

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FGoogle%2520Threat%2520Intelligence%2FPlaybooks%2FGTIFileScanEnrichment%2Fazuredeploy.json) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovernbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FGoogle%2520Threat%2520Intelligence%2FPlaybooks%2FGTIFileScanEnrichment%2Fazuredeploy.json)

### Post-Deployment Instructions

#### a. Authorize connections

Once deployment is complete, authorize the connections that require sign-in.
1. Go to your logic app → API connections → Select the keyvault connection resource.
2. Go to General → edit API connection.
3. Click Authorize.
4. Sign in.
5. Click Save.

Note: the azureblob connection authenticates via the Logic App's Managed Identity rather than OAuth sign-in, so it does not need to be authorized here; see step c below instead.

#### b. Grant the Key Vault role to the managed identity

1. Go to logic app → *your logic app* → identity → System assigned Managed identity and copy Object (principal) ID.
2. Go to key vaults → *your key vault* → Access control (IAM) → Add role assignment.
3. Select the 'Key Vault Secrets User' role and assign it to the copied Object ID.

#### c. Grant the Storage Account role to the managed identity

1. Go to Storage accounts → *your storage account* → Access control (IAM) → Add role assignment.
2. Select the 'Storage Blob Data Reader' role and assign it to the Logic App's managed identity Object ID (copied in step b). This is required for the azureblob (Managed Identity) connection to read blob content.
3. The 'Monitoring Metrics Publisher' role on the Data Collection Rule is assigned automatically by this template, so no action is needed for DCR ingestion.

#### d. Wire Up the Trigger

Configure the Google Threat Intelligence Workbook to call this playbook.
1. Go to Logic App → *your Logic App* → Logic app designer.
2. Copy the HTTP POST URL from the trigger.
3. Configure the Google Threat Intelligence Workbook's FileScan tab to call this URL, passing containerName, blobPath, and storageAccountName (matching the StorageAccountName parameter above) for each file to be scanned.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Google Threat Intelligence](../solutions/google-threat-intelligence.md)

