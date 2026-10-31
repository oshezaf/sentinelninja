# WhoisFreaksThreat_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (12 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WhoisFreaks%5CData%20Connectors%5CWhoisFreaks_CCF/WhoisFreaks_WhoisFreaksThreat_table.json)

| Column Name | Type |
|:------------|:-----|
| confidence | string |
| domain | string |
| first_seen | string |
| is_dropped | string |
| is_extrapolated | string |
| is_parked | string |
| is_seed | string |
| last_seen | string |
| matched_pivots | string |
| parked_reason | string |
| threat_type | string |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [WhoisFreaks](../solutions/whoisfreaks.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [WhoisFreaks Threat & NRD Feeds (via Codeless Connector Framework)](../connectors/whoisfreaks.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [WhoisFreaks](../solutions/whoisfreaks.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [WhoisFreaks - high confidence threat domains](../content/whoisfreaks-whoisfreaks-high-confidence-threat-domains-0eb4df70-418e-4f7d-9b5a-cfe35034ec11-010c476d.md) |  |
| [WhoisFreaks - newly registered domain seen in threat feed](../content/whoisfreaks-whoisfreaks-newly-registered-domain-seen-in-threat-feed-d2deed97-6c0c-4a57-95fd-675d3c6fb949-54db08c2.md) |  |
| [WhoisFreaks - parked threat domains](../content/whoisfreaks-whoisfreaks-parked-threat-domains-3c6be532-dfa0-42ee-87ea-cf3d9e6772bb-7a1bd3b4.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

