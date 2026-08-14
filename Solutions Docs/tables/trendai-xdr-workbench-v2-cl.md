# TrendAI_XDR_WORKBENCH_V2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (56 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TrendAI%20Vision%20One%28CCF%29%5CData%20Connectors%5CTrendAIVisionOneWorkbench_ccp/TrendAIVisionOneWorkbench_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| accountCount_d | real |  |
| alertProvider_s | string | Product that generated the alert. |
| alertStatus_s | string | Alert status (e.g. new, in_progress, resolved). |
| alertTriggerTimestamp_t | datetime |  |
| cloudIdentityCount_d | real |  |
| cloudWorkloadCount_d | real |  |
| Computer | string |  |
| containerCount_d | real |  |
| createdTime_t | datetime | Time the alert was created. |
| description_s | string | Human-readable description of the alert. |
| desktopCount_d | real |  |
| DomainName_s | string | Extracted domain IOC. |
| emailAddressCount_d | real |  |
| entities | dynamic | Impacted entities array. |
| FileDirectory_s | string | Extracted file path IOC. |
| FileHashValue_s | string | Extracted file hash IOC (SHA1/SHA256/MD5). |
| FileName_s | string | Extracted file name IOC (populated by parser). |
| HostHostName_s | string | Impacted host name (populated by parser). |
| impactScope_s | string |  |
| impactScope_Summary_s | string |  |
| incidentId_s | string |  |
| indicators | dynamic | Indicators array (IOC objects with type and value). |
| indicators_s | string | Serialized indicators array for legacy compatibility. |
| investigationResult_s | string |  |
| investigationStatus_s | string | Current investigation status of the alert. |
| IPAddress | string | Extracted IP address IOC. |
| MailboxPrimaryAddress_s | string | Impacted mailbox email address. |
| MalwareName_s | string | Extracted malware/detection name IOC. |
| ManagementGroupName | string |  |
| matchedRules | dynamic | Matched detection rules array. |
| matchedRules_s | string |  |
| MG | string |  |
| model_s | string | Detection model name. |
| modelId_g | string |  |
| modelId_s | string | Detection model identifier. |
| modelType_s | string |  |
| priorityScore_d | real | Priority score (0-100). |
| ProcessCommandLine_s | string | Extracted process command line IOC. |
| RawData | string | Raw indicators JSON string for fallback parsing. |
| RegistryKey_s | string | Extracted registry key IOC. |
| RegistryValue_s | string | Extracted registry value data IOC. |
| RegistryValueName_s | string | Extracted registry value name IOC. |
| schemaVersion_s | string |  |
| serverCount_d | real |  |
| severity_s | string | Alert severity: low, medium, high, or critical. |
| SourceSystem | string |  |
| TimeGenerated | datetime | The timestamp (UTC) when the alert was created. |
| updatedTime_t | datetime | Time the alert was last updated. |
| URL_s | string | Extracted URL IOC. |
| UserAccountName_s | string | Extracted username from impacted account entity. |
| UserAccountNTDomain_s | string | Extracted NT domain from impacted account entity. |
| workbenchCompleteTimestamp_t | datetime |  |
| workbenchId_s | string | Unique Workbench alert identifier. |
| workbenchLink_s | string | Deep link to the Workbench alert in the Vision One console. |
| workbenchName_s | string | Display name of the Workbench alert. |
| xdrCustomerID_g | string |  |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [TrendAI Vision One(CCF)](../solutions/trendai-vision-one-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [TrendAI Vision One™ - Workbench Alerts (via Codeless Connector Framework)](../connectors/trendaivisiononeworkbench.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [TrendAI Vision One(CCF)](../solutions/trendai-vision-one-ccf.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [TrendAI Vision One - Create Incident for Workbench Alerts](../content/trendai-vision-one-ccf-trendai-vision-one-create-incident-for-workbench-alerts-2f668615-c372-4673-a5cd-773e4da715b9-1df6fda9.md) |  |

### Workbooks (1)

**In solution [TrendAI Vision One(CCF)](../solutions/trendai-vision-one-ccf.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [TrendAIVisionOneWorkbenchOverview](../content/trendai-vision-one-ccf-trendaivisiononeworkbenchoverview-7ffcf600.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [TrendAIWorkbench_Complete](../parsers/trendaiworkbench-complete.md) | [TrendAI Vision One(CCF)](../solutions/trendai-vision-one-ccf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

