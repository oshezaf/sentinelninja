# DynamicThreatModeling&Response

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [ThreatAnalysis&Response](../solutions/threatanalysis&response.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ThreatAnalysis%26Response/Workbooks/DynamicThreatModeling%26Response.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AzureActivity`](../tables/azureactivity.md) |  | ✗ | ✗ | ✗ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | `ResourceType == "PUBLICIPADDRESSES"` | ✗ | ✗ | ✗ |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ | ✓ |
| [`SecurityBaseline`](../tables/securitybaseline.md) |  | ✓ | ✗ | ? |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ | ✓ |
| [`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) |  | ✓ | ✗ | ? |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Workbooks](workbooks.md) · [Back to ThreatAnalysis&Response](../solutions/threatanalysis&response.md)

