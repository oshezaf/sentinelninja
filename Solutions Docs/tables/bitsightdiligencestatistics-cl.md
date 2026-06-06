# BitSightDiligenceStatistics_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (16 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight%5CData%20Connectors%5CBitSight_CCF/table_BitSightDiligenceStatistics.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Bad | int | Count of bad findings. |
| BitFlip | int | [domain_squatting] Count of bit-flip lookalike domains. |
| CompanyGuid | string | GUID of the company. |
| CompanyName | string | Name of the company. |
| ConnectorName | string | Connection name identifier for multi-instance tracking. |
| Fair | int | Count of fair findings. |
| Good | int | Count of good findings. |
| Neutral | int | Count of neutral findings. |
| RiskVector | string | Risk vector slug (dict key — always null due to CCF JSONPath limitation). |
| SpearPhishing | int | [domain_squatting] Count of spear-phishing lookalike domains. |
| TimeGenerated | datetime |  |
| TldVariant | int | [domain_squatting] Count of TLD-variant lookalike domains. |
| TotalCount | int | [domain_squatting] Total count of all lookalike domain types. |
| TypographicalErrors | int | [domain_squatting] Count of typographical-error lookalike domains. |
| Unknown | int | Count of findings with unknown severity. |
| Warn | int | Count of warn findings. |

## Solutions (1)

This table is used by the following solutions:

- [BitSight](../solutions/bitsight.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [BitSight Security Statistics (via Codeless Connector Framework)](../connectors/bitsightstatisticsconnector.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [BitSightDiligenceStatistics](../parsers/bitsightdiligencestatistics.md) | [BitSight](../solutions/bitsight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

