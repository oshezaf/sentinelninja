# Sensitive Data Discovered in the Last 24 Hours - Customized

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Customized query used to identify specific classifications and parameters that have been discovered on assets in the last 24 hours by Microsoft Purview. By default, the query identifies Social Security Numbers detected, but the specific classification monitored along with other data fields can be adjusted. A list of supported Microsoft Purview classifications can be found here: https://docs.microsoft.com/azure/purview/supported-classifications

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Purview](../solutions/microsoft-purview.md) |
| **ID** | `79f296d9-e6e4-45dc-9ca7-1770955435fa` |
| **Severity** | Informational |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1087 |
| **Required Connectors** | [MicrosoftAzurePurview](../connectors/microsoftazurepurview.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Purview/Analytic%20Rules/MicrosoftPurviewSensitiveDataDiscoveredCustom.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`PurviewDataSensitivityLogs`](../tables/purviewdatasensitivitylogs.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Purview](../solutions/microsoft-purview.md)

