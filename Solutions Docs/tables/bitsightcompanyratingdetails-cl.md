# BitSightCompanyRatingDetails_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Microsoft *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (15 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight%5CData%20Connectors%5CBitSight_CCF/table_BitSightCompanyRatingDetails.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Beta | bool | Indicates if this risk vector is in beta status. |
| CategoryOrder | int | Display order of the category. |
| CompanyGuid | string | GUID of the company. |
| CompanyName | string | Name of the company. |
| ConnectorName | string | Connection name identifier for multi-instance tracking. |
| DisplayUrl | string | URL to the risk vector detail page in BitSight portal. |
| Grade | string | Letter grade for this risk vector. |
| GradeColor | string | Hex color code associated with the grade for UI display (e.g., '#239563'). |
| Percentile | int | Percentile rank compared to peers for this risk vector (0-100). |
| Rating | int | Numeric score for this risk vector. |
| RiskCategory | string | Parent risk category for the risk vector (API field: category). |
| RiskVectorLabel | string | Human-readable name of the risk vector (API field: name). |
| RiskVectorOrder | int | Display order of the risk vector within its category. |
| RiskVectorSlug | string | URL-friendly identifier for the risk vector (dict key — always null due to CCF JSONPath limitation; use RiskVectorLabel). |
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

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [BitSightCompanyRatingDetails](../parsers/bitsightcompanyratingdetails.md) | [BitSight](../solutions/bitsight.md) |  |
| [BitSightCompanyRatings](../parsers/bitsightcompanyratings.md) | [BitSight](../solutions/bitsight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

