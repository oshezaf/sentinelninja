# BitsightVulnerabilitiesFindingsSummary_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | BitSight *(basis: projected)* |
| **Event Type** | Statistics |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (6 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight%5CData%20Connectors%5CBitSight_CCF/table_BitsightVulnerabilitiesFindingsSummary.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ConnectorName | string | Connection name identifier for multi-instance tracking. |
| Description | string | Description of what the vulnerability type measures. |
| DisplayName | string | Human-readable name of the vulnerability type. |
| Name | string | Slug identifier for the vulnerability type (e.g., 'patching_cadence'). |
| Severity | string | Severity level of the vulnerability type (e.g., 'high', 'medium', 'low'). |
| TimeGenerated | datetime |  |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [BitSight](../solutions/bitsight.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [BitSight Security Statistics (via Codeless Connector Framework)](../connectors/bitsightstatisticsconnector.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [BitSight](../solutions/bitsight.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [BitSightWorkbook](../content/bitsight-bitsightworkbook-85beb528.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [BitSightFindingsSummary](../parsers/bitsightfindingssummary.md) | [BitSight](../solutions/bitsight.md) |  |
| [BitSightVulnerabilitiesFindingsSummary](../parsers/bitsightvulnerabilitiesfindingssummary.md) | [BitSight](../solutions/bitsight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

