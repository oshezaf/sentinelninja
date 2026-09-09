# Google Threat Intelligence - FileScan Blob Enrichment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook monitors an Azure Blob Storage container and automatically submits newly added or modified files to Google Threat Intelligence (GTI/VirusTotal) for scanning. Analysis results are ingested into a custom Log Analytics table (GTI_FileScan_CL) via the Log Ingestion API for further investigation in Microsoft Sentinel.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Playbooks/GTIFileScanBlobEnrichment/azuredeploy.json) |

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
| Get_Blob_Content | get | `/v2/datasets/@{encodeURIComponent(encodeURIComponent(parameters('StorageAccountName')))}/files/@{encodeURIComponent(encodeURIComponent(triggerBody()?['Path']))}/content` | — |
| When_a_blob_is_added_or_modified | get | `/v2/datasets/@{encodeURIComponent(encodeURIComponent(parameters('StorageAccountName')))}/triggers/batch/onupdatedfile` | — |

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Secret | get | `/secrets/@{encodeURIComponent(parameters('KeyVaultSecretName'))}/value` | — |

#### [`function`](../logic-apps/builtin-function.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Upload_Large_File_Via_Function | — | — | functionId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Web/sites/', variables('FunctionAppResourceName'), '/functions/GTIUploadLargeFile')]` |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Submit_File | POST | `@{variables('GTIBaseUrl')}/api/v3/private/files` | — |
| Get_Analysis_Status | GET | `@{concat(variables('GTIBaseUrl'), '/api/v3/private/analyses/', variables('AnalysisId'))}` | — |
| Get_File_Report | GET | `@{concat(variables('GTIBaseUrl'), '/api/v3/private/files/', variables('SHA256'))}` | — |
| Ingest_To_LogAnalytics | POST | `@parameters('DCEIngestionEndpoint')` | — |

</details>

## Additional Documentation

> 📄 *Source: [GTIFileScanBlobEnrichment/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Playbooks/GTIFileScanBlobEnrichment/readme.md)*

## Summary

This playbook is triggered when a file is added or modified in a monitored Azure Blob Storage container (`When_a_blob_is_added_or_modified`). Files up to 32MB are read directly and submitted to Google Threat Intelligence (GTI/VirusTotal) for file scanning; files larger than 32MB are handed off to the shared GTIFileUpload Azure Function, which uploads them to GTI on the playbook's behalf. The playbook then polls the analysis until it completes, retrieves the file report, and ingests the results into the custom Log Analytics table `GTI_FileScan_CL` via a Data Collection Endpoint/Data Collection Rule (DCE/DCR) for further investigation in Microsoft Sentinel.

### Prerequisites

1. Deploy the GTIFileUpload Function App playbook (`Solutions/Google Threat Intelligence/Playbooks/CustomConnector/GTIFileUpload_FunctionAppConnector/azuredeploy.json`) to this resource group before deploying this playbook, since files larger than 32MB are uploaded to GTI by that Function rather than by this Logic App.
2. Obtain a Google Threat Intelligence API key and store it in Azure Key Vault as a secret (default secret name: `GTIApiKey`).
3. Create or identify an Azure Key Vault and note its name.
4. Ensure you have a Log Analytics Workspace configured for Microsoft Sentinel; the `GTI_FileScan_CL` custom table and its DCE/DCR are created automatically by this template.
5. Identify the Azure Storage Account and container to monitor for new or modified blobs.
6. The Logic App's managed identity requires the 'Storage Blob Data Reader' role on the Storage Account (the `azureblob` connection uses Managed Identity authentication) and the 'Key Vault Secrets User' role on the Key Vault. The GTIFileUpload Function's managed identity also requires 'Storage Blob Data Reader' on the Storage Account.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   * PlaybookName: Enter the playbook name here (default: GTIFileScanBlobEnrichment).
   * KeyVaultName: Name of the Azure Key Vault containing the GTI API key.
   * KeyVaultSecretName: Name of the Key Vault secret that holds the GTI API key (default: GTIApiKey).
   * StorageAccountName: Name of the Azure Storage Account to monitor for new blobs.
   * ContainerName: Name of the blob container to monitor.
   * TriggerFrequencyMinutes: How often (in minutes) the playbook polls the container for new or modified blobs (default: 5).
   * WorkspaceName: Name of the Log Analytics workspace where GTI_FileScan_CL data will be ingested.
   * FunctionAppName: Name of the shared GTIFileUpload Azure Function App used to upload files larger than 32MB to GTI (default: gtifileupload).
   * DisableSandbox: If true, files will not be detonated in sandbox environments (default: false; allowed: false, true).
   * StorageRegion: GTI storage region for uploaded files; keep 'default' to use the group's private_scanning.storage_region preference (default: default; allowed: default, US, CA, EU, GB).

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FGoogle%2520Threat%2520Intelligence%2FPlaybooks%2FGTIFileScanBlobEnrichment%2Fazuredeploy.json) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovernbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FGoogle%2520Threat%2520Intelligence%2FPlaybooks%2FGTIFileScanBlobEnrichment%2Fazuredeploy.json)

### Post-Deployment Instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.
1. Go to your logic app → API connections → Select Keyvault connection resource.
2. Go to General → edit API connection.
3. Click Authorize.
4. Sign in.
5. Click Save.
6. Repeat steps for the azureblob connection.

#### b. Add Access policy in Keyvault

Add access policy for the playbook's managed identity to read secrets from Key Vault.
1. Go to logic app → *your logic app* → identity → System assigned Managed identity and copy Object (principal) ID.
2. Go to keyvaults → *your keyvault* → Access policies → create.
3. Select Get and List permissions for Secrets. Click next.
4. In the principal section, search by copied object ID. Click next.
5. Click review + create.

#### c. RBAC propagation

The ARM template grants the Logic App's managed identity the Monitoring Metrics Publisher role on the Data Collection Rule automatically. This can take 1-3 minutes to propagate — if the first run returns a 403 on ingestion, wait a few minutes and retry.

#### d. Enable the Blob Trigger


*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Google Threat Intelligence](../solutions/google-threat-intelligence.md)

