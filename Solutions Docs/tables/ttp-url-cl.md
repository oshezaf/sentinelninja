# Ttp_Url_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (43 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Mimecast_TTP_Url_CL.json)

| Column Name | Type |
|:------------|:-----|
| action | string |
| actions | dynamic |
| adminOverride | string |
| advancedPhishingResult_CredentialTheftBrands | string |
| advancedPhishingResult_CredentialTheftEvidence | string |
| advancedPhishingResult_CredentialTheftTags | string |
| Category | string |
| creationMethod | string |
| Date | string |
| emailPartsDescription | dynamic |
| fromUserEmailAddress | string |
| messageId | string |
| mimecastEventCategory | string |
| mimecastEventId | string |
| route | string |
| scanResult | string |
| sendingIp | string |
| subject | string |
| tagMap_AdvancedPhishing_CredentialTheftEvidence | string |
| tagMap_AdvancedPhishing_CredentialTheftTags | string |
| tagMap_AvScanning_ContentCheck_AvSignatureFileExts | string |
| tagMap_AvScanning_ContentCheck_AvSignatureName | string |
| tagMap_AvScanning_ContentCheck_UrlFileDownloadFilename | string |
| tagMap_AvScanning_ScannerInfo_CategoryTrigger | string |
| tagMap_ContentCheck_DangerousExtsUrlFileDownload | string |
| tagMap_ContentCheck_DangerousMimetypesUrlFileDownload | string |
| tagMap_CustomerManagedUrls_Blocklisted | string |
| tagMap_CustomerManagedUrls_ManagedUrlEntry | string |
| tagMap_CustomerManagedUrls_Status | string |
| tagMap_DangerousFileExt_ContentCheck_ContentScannersBlocked | string |
| tagMap_DangerousFileExt_Inspect_FileExts | string |
| tagMap_DangerousFileExt_Inspect_MimeTypes | string |
| tagMap_DangerousFileExt_Status | string |
| tagMap_UrlReputationScan_Status | string |
| tagMap_UrlReputationScan_Type | string |
| tagMap_UrlReputationScan_Url | string |
| tagMap_UrlReputationScan_UrlBlock | string |
| TimeGenerated | datetime |
| ttpDefinition | string |
| url | string |
| userAwarenessAction | string |
| userEmailAddress | string |
| userOverride | string |

## Solutions (1)

This table is used by the following solutions:

- [Mimecast](../solutions/mimecast.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Mimecast Targeted Threat Protection](../connectors/mimecastttpapi.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Mimecast](../solutions/mimecast.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast Targeted Threat Protection - URL Protect](../content/mimecast-mimecast-targeted-threat-protection-url-protect-952faed4-c6a6-4873-aeb9-b348e9ce5aba-ebe7c38c.md) |  |

### Workbooks (1)

**In solution [Mimecast](../solutions/mimecast.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast_TTP_Workbook](../content/mimecast-mimecast-ttp-workbook-c40cabd0.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [MimecastTTPUrl](../parsers/mimecastttpurl.md) | [Mimecast](../solutions/mimecast.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

