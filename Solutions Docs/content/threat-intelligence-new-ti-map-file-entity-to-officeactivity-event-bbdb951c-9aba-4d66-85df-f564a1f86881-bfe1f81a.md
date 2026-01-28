# TI Map File Entity to OfficeActivity Event

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query finds matches in OfficeActivity Event data for known FileName Indicators of Compromise from Threat Intelligence sources. FileName matches may produce false positives, so use this for hunting rather than real-time detection.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md) |
| **ID** | `bbdb951c-9aba-4d66-85df-f564a1f86881` |
| **Tactics** | Impact |
| **Required Connectors** | [Office365](../connectors/office365.md), [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence%20%28NEW%29/Hunting%20Queries/FileEntity_OfficeActivity.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`OfficeActivity`](../tables/officeactivity.md) | ✓ | ✗ |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)

