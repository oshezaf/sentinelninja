# OneTrustMetadataV3_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (50 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OneTrust/Data%20Connectors/OneTrustLogs_CCF/OneTrustLogs_DCR.json)

| Column Name | Type |
|:------------|:-----|
| AADTenantID | string |
| AdditionalFields | dynamic |
| ASN | string |
| AssetID | string |
| AssetName | string |
| AssetOwner | dynamic |
| AssetPath | string |
| AssetPermissions | dynamic |
| AssetSize | string |
| AssetSource | string |
| AssetType | string |
| Classification | string |
| ClassificationLastScanDateTime | datetime |
| CreatedDateTime | datetime |
| DeviceName | string |
| DomainName | string |
| Extension | string |
| ExternalUserWithPermissionCount | int |
| FeedType | string |
| IdentityDirectorySource | string |
| IngestionTime | datetime |
| InternalUserWithPermissionCount | int |
| IPAddress | string |
| IsAssetRemoved | boolean |
| ISP | string |
| IsProtectedByDlp | boolean |
| LastAccessDateTime | datetime |
| LastModifiedDateTime | datetime |
| Location | string |
| MD5 | string |
| Provider | string |
| Region | string |
| RelatedIndicators | string |
| RequestDestinationIP | string |
| RequestSourceIP | string |
| Risks | string |
| SensitivityLabel | string |
| SHA1 | string |
| SHA256 | string |
| SignatureStatus | string |
| Subdomain | string |
| SubWorkload | string |
| ThreatCategory | dynamic |
| ThreatDetected | boolean |
| ThreatName | dynamic |
| TimeGenerated | datetime |
| TopLevelDomain | string |
| URL | string |
| UserName | string |
| Workload | string |

## Solutions (1)

This table is used by the following solutions:

- [OneTrust](../solutions/onetrust.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [OneTrust](../connectors/onetrustpush.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

