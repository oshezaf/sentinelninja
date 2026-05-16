# Combined Collection Method Classifications — Investigation Report

**Browse:** [🏠](../README.md) · [Methods](../methods-index.md) · [Connectors](../connectors-index.md) · [📊](../statistics.md)

This report tracks data connectors that the Solutions Analyzer has classified into *combined* (`A|B`) collection methods. Combined classifications mean the detector matched more than one collection-method signal for the same connector. They warrant manual review because:

- They sometimes reflect a legitimate dual-route design.
- More often they reflect leftover code in the solution package, an unlisted parallel connector, or an over-broad heuristic.

Status legend: 🟥 false positive (heuristic too broad) · 🟧 leftover / parallel connector (the second method belongs to a *different*, separately-listed connector) · 🟩 genuinely two routes.

---

## 1. `CCF | Azure Function` — 8 connectors  🟧

**Pattern:** A modern CCF/CCP connector definition lives in a sub-folder (e.g. `Data Connectors/<name>_ccp/`), while the *parent* `Data Connectors/` folder still contains a complete legacy Azure Function connector — its connector-definition JSON, ARM template, and Function App code. The mapper's "scan sibling ARM templates" heuristic walks the parent folder and finds the legacy Function App resources, then attaches an `Azure Function` tag to the CCF connector.

**Conclusion:** In every case the Function App belongs to a **separate, already-listed legacy Azure Function connector** in the same solution. The CCF connector itself is codeless and does not host a function. The `|Azure Function` tag is therefore a misattribution caused by parent-folder scanning. A planned source fix is to scope the ARM-template scan to the connector's own folder when the connector is CCF.

| CCF connector | CCF definition | Sibling Function-App ARM template | Separate legacy AF connector also present |
|:--|:--|:--|:--|
| [1PasswordCCPDefinition](../connectors/1passwordccpdefinition.md) | [1Password_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/1Password/Data%20Connectors/1Password_ccpv2/1Password_DataConnectorDefinition.json) | [azuredeploy_1Password_API_FunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/1Password/Data%20Connectors/azuredeploy_1Password_API_FunctionApp.json), [azuredeploy.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/1Password/Data%20Connectors/azuredeploy.json) | [`1Password`](../connectors/1password.md) (active, Azure Function) |
| [JiraAuditCCPDefinition](../connectors/jiraauditccpdefinition.md) | [JiraAudit_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit/Data%20Connectors/JiraAuditAPISentinelConnector_ccpv2/JiraAudit_DataConnectorDefinition.json) | [azuredeploy_Connector_JiraAuditAPI_AzureFunction.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit/Data%20Connectors/azuredeploy_Connector_JiraAuditAPI_AzureFunction.json) | [`JiraAuditAPI`](../connectors/jiraauditapi.md) (Azure Function) |
| [CyberArkAuditCCPDefinition](../connectors/cyberarkauditccpdefinition.md) | [CyberArkAudit_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkAudit/Data%20Connectors/CyberArkAudit_CCP/CyberArkAudit_DataConnectorDefinition.json) | [azuredeploy_CyberArkAudit_MainTemplate.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkAudit/Data%20Connectors/azuredeploy_CyberArkAudit_MainTemplate.json) | [`CyberArkAudit`](../connectors/cyberarkaudit.md) (Azure Function) |
| [IllumioSaasCCFDefinition](../connectors/illumiosaasccfdefinition.md) | [IllumioSaasLogs_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IllumioSaaS/Data%20Connectors/IllumioSaasLogs_ccf/IllumioSaasLogs_ConnectorDefinition.json) | [azuredeploy_IllumioSaaS_FunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IllumioSaaS/Data%20Connectors/azuredeploy_IllumioSaaS_FunctionApp.json) | [`IllumioSaaSDataConnector`](../connectors/illumiosaasdataconnector.md) (Azure Function) |
| [OCI-Connector-CCP-Definition](../connectors/oci-connector-ccp-definition.md) | [OCI_DataConnector_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Oracle%20Cloud%20Infrastructure/Data%20Connectors/Oracle_Cloud_Infrastructure_CCP/OCI_DataConnector_DataConnectorDefinition.json) | [azuredeploy_OCI_logs_API_FunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Oracle%20Cloud%20Infrastructure/Data%20Connectors/azuredeploy_OCI_logs_API_FunctionApp.json) | [`OracleCloudInfrastructureLogsConnector`](../connectors/oraclecloudinfrastructurelogsconnector.md) (Azure Function) |
| [OracleCloudInfraConnector](../connectors/oraclecloudinfraconnector.md) | (same CCF folder as above) | (same ARM template as above) | (same legacy AF connector as above) |
| [SalesforceServiceCloudCCPDefinition](../connectors/salesforceservicecloudccpdefinition.md) | [SalesforceServiceCloud_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud/Data%20Connectors/SalesforceSentinelConnector_CCP/SalesforceServiceCloud_DataConnectorDefinition.json) | [azuredeploy_Connector_Salesforce_Service_Cloud_AzureFunction.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud/Data%20Connectors/azuredeploy_Connector_Salesforce_Service_Cloud_AzureFunction.json) | [`SalesforceServiceCloud`](../connectors/salesforceservicecloud.md) (Azure Function) |
| [SophosEndpointProtectionCCPDefinition](../connectors/sophosendpointprotectionccpdefinition.md) | [SophosEP_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Sophos%20Endpoint%20Protection/Data%20Connectors/SophosEP_ccp/SophosEP_DataConnectorDefinition.json) | [azuredeploy_SophosEP_API_FunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Sophos%20Endpoint%20Protection/Data%20Connectors/azuredeploy_SophosEP_API_FunctionApp.json) | [`SophosEP`](../connectors/sophosep.md) (Azure Function) |

**Take-away:** Most of these solutions ship *both* the legacy Function-App connector and the new CCF connector side by side (a transitional pattern during the CCF migration). The Solutions Analyzer is correctly listing both as separate connectors; the only issue is that the CCF connector additionally gets a spurious `|Azure Function` tag. Until the source fix lands, the CCF entries in `statistics.md` should be read as **CCF only**.

---

## 2. `Azure Function (TI Upload API) | Azure Function` — 13 connectors  🟥 → fixed

**Pattern:** The TI Upload API method is itself implemented as an Azure Function. When the TI-Upload-API detector matched, it appended `Azure Function (TI Upload API)` to the existing `Azure Function` classification without removing the generic tag.

**Action taken (source fix, commit pending):** The classifier now strips the generic `Azure Function` tag whenever it adds `Azure Function (TI Upload API)`. After regeneration these 13 connectors are classified as `Azure Function (TI Upload API)` only.

Affected connectors (no follow-up needed — these are correct, just over-tagged):

`CofenseIntelligence`, `CofenseTriage`, `CognyteLuminar`, `CrowdStrikeFalconAdversaryIntelligence`, `CyjaxIOCAPI`, `DataminrPulseAlerts`, `GreyNoise2SentinelAPI`, `InfobloxDataConnector`, `JoeSandbox`, `LumenThreatFeedConnectorV2`, `LumenThreatFeedConnectorV2PrivateNetworking`, `MimecastTIRegionalConnectorAzureFunctions`, `VMRay`.

---

## 3. `Azure Function (TI Upload API) | REST Push API` — 1 connector  🟥

| Connector | Solution | Definition file |
|:--|:--|:--|
| [MISP2SentinelConnector](../connectors/misp2sentinelconnector.md) | [MISP2Sentinel](../solutions/misp2sentinel.md) | [MISP2SentinelConnector_UploadIndicatorsAPI.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MISP2Sentinel/Data%20Connectors/MISP2SentinelConnector_UploadIndicatorsAPI.json) |

**Findings:**

- The connector definition JSON contains **no** workspace `sharedKeys`, `WorkspaceId`, or HTTP Data Collector API references — i.e. there is no legitimate REST Push API code path.
- The TI Upload classification is correct: the file name suffix `_UploadIndicatorsAPI` plus the description (`...push threat indicators from MISP to Microsoft Sentinel via the Upload Indicators REST API`) both match the STIX 2.1 Upload Indicators API.
- The extra `REST Push API` tag comes from the text-heuristic rule *"Title/description mentions REST API"* in [`map_solutions_connectors_tables.py`](https://github.com/Azure/Azure-Sentinel/blob/tools/solutions-analyzer/telemetry/Tools/Solutions%20Analyzer/map_solutions_connectors_tables.py). The literal substring *"REST API"* in the description here refers to the *Upload Indicators REST API* — i.e. it is referring to the same TI Upload API, not a second route.

**Conclusion:** Not two routes. The `|REST Push API` tag is a false positive from an over-broad text classifier and should be suppressed whenever the more specific `Azure Function (TI Upload API)` classification is already present.

---

*Generated as part of the May 2026 Solutions Analyzer review.*
