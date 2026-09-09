# Google Threat Intelligence - URLScan Incident Enrichment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Triggered by a Microsoft Sentinel incident, extracts URL entities, submits each to the GTI private API, polls analysis with progressive back-off (30s→60s→120s, max 30 min), retrieves the full URL report using the URL ID from the analysis meta, ingests the complete data object into GTI_URLScan_CL via DCE/DCR, then calls GTIAddCommentToIncident with the full response and playbook name.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Playbooks/GTIURLScanIncidentEnrichment/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 1 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 4 |
| [`workflow`](../logic-apps/builtin-workflow.md) | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_URL_Entities | post | `/entities/url` | — |

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Secret | get | `[concat('/secrets/@{encodeURIComponent(''', parameters('KeyVaultSecretName'), ''')}/value')]` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Submit_Uri | POST | `@{concat(parameters('GTIBaseUri'), '/api/v3/private/urls')}` | — |
| Get_Analysis | GET | `@{concat(parameters('GTIBaseUri'), '/api/v3/private/analyses/', variables('AnalysisId'))}` | — |
| Get_URL_Report | GET | `@{concat(parameters('GTIBaseUri'), '/api/v3/private/urls/', variables('UrlId'))}` | — |
| Ingest_URL_Scan_Result | POST | `@parameters('DCEIngestionEndpoint')` | — |

#### [`workflow`](../logic-apps/builtin-workflow.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Call_GTIAddCommentToIncident | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Logic/workflows/', parameters('GTIAddCommentPlaybookName'))]`<br>triggerName=`manual` |
| Call_GTIAddCommentToIncident_Error | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Logic/workflows/', parameters('GTIAddCommentPlaybookName'))]`<br>triggerName=`manual` |

</details>

## Additional Documentation

> 📄 *Source: [GTIURLScanIncidentEnrichment/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Playbooks/GTIURLScanIncidentEnrichment/readme.md)*

## Summary

This playbook is triggered manually or automatically from an incident in Microsoft Sentinel. It extracts all URL entities from the incident and, for each URL, submits it to the Google Threat Intelligence (GTI) private API for scanning, polls the analysis until completion, and retrieves the full URL report. The complete scan result is ingested into the GTI_URLScan_CL table via a Data Collection Endpoint/Rule, and a consolidated enrichment comment is posted on the incident via the GTIAddCommentToIncident sub-playbook.

### Prerequisites

1. Deploy the GTIAddCommentToIncident playbook before deploying this playbook.
2. Obtain a GTI (VirusTotal) API key and store it in Azure Key Vault as a secret named 'GTIApiKey' (parameter: KeyVaultSecretName).
3. Create or identify an Azure Key Vault and note its name. The Key Vault must have 'enabledForTemplateDeployment' set to true.
4. Ensure you have a Log Analytics Workspace configured for Microsoft Sentinel; this playbook creates the GTI_URLScan_CL table and its ingestion DCE/DCR in that workspace.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   * PlaybookName: Enter the playbook name here (default: GTIURLScanIncidentEnrichment).
   * KeyVaultName: Name of the Azure Key Vault that stores the GTI API key.
   * KeyVaultSecretName: Name of the Key Vault secret that holds the GTI (VirusTotal) API key (default: GTIApiKey).
   * WorkspaceName: Name of the Log Analytics workspace where GTI_URLScan_CL is created and ingested.
   * GTIAddCommentPlaybookName: Name of the deployed GTIAddCommentToIncident playbook (default: GTIAddCommentToIncident).

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FGoogle%2520Threat%2520Intelligence%2FPlaybooks%2FGTIURLScanIncidentEnrichment%2Fazuredeploy.json) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovernbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FGoogle%2520Threat%2520Intelligence%2FPlaybooks%2FGTIURLScanIncidentEnrichment%2Fazuredeploy.json)

### Post-Deployment Instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.
1. Go to your logic app → API connections → Select Microsoft Sentinel connection resource.
2. Go to General → edit API connection.
3. Click Authorize.
4. Sign in.
5. Click Save.
6. Repeat steps for Key Vault connection.

#### b. Add Access policy in Keyvault

Add access policy for the playbook's managed identity to read secrets from Key Vault.
1. Go to logic app → *your logic app* → identity → System assigned Managed identity and copy Object (principal) ID.
2. Go to keyvaults → *your keyvault* → Access policies → create.
3. Select Get and List permissions for Secrets. Click next.
4. In the principal section, search by copied object ID. Click next.
5. Click review + create.

#### c. Attach to Automation Rule or Manual Trigger

Configure how this playbook will be triggered:
1. **For Automatic Enrichment**: Create an automation rule in Microsoft Sentinel that triggers this playbook when incidents are created or updated.
2. **For Manual Enrichment**: Run the playbook manually from the incident page by selecting "Run playbook" and choosing GTIURLScanIncidentEnrichment.
3. Verify that the GTIAddCommentToIncident sub-playbook is accessible and properly configured.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Google Threat Intelligence](../solutions/google-threat-intelligence.md)

