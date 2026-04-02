# Baseline Comparison

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Baseline Comparison. Author: miflower. The purpose of this query is to perform a comparison between "known good" machines and suspected bad machines. The original concept for this query was born due to reapplying the same 'whitelist' filters over and over. It brings deltas between a baseline and another machine quickly to the analyst's view. This query supports multiple suspected bad machines and multiple "known good" machines. It also supports providing a timeframe for how far back in time to b

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `4d17ae75-87e8-4272-9aec-16448b1430bc` |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/General%20queries/Baseline%20Comparison.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AlertEvidence`](../tables/alertevidence.md) |  | ✓ | ✗ | ✓ |
| [`AlertInfo`](../tables/alertinfo.md) |  | ✓ | ✗ | ? |
| [`DeviceEvents`](../tables/deviceevents.md) |  | ✓ | ✗ | ✓ |
| [`DeviceFileEvents`](../tables/devicefileevents.md) |  | ✓ | ✗ | ? |
| [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) |  | ✓ | ✗ | ? |
| [`DeviceInfo`](../tables/deviceinfo.md) |  | ✓ | ✗ | ? |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) |  | ✓ | ✗ | ? |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |  | ✓ | ✗ | ? |
| [`DeviceNetworkInfo`](../tables/devicenetworkinfo.md) |  | ✓ | ✗ | ? |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | `ActionType == "PowerShellCommand"` | ✓ | ✗ | ? |
| [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) |  | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

