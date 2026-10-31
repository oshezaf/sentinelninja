# SecurityScorecardRatingsHistory_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (7 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SecurityScorecard%20Cybersecurity%20Ratings%5CData%20Connectors%5CSecurityScorecardRatings_ccp/SecurityScorecardRatings_tables.json)

| Column Name | Type |
|:------------|:-----|
| domain | string |
| industry | string |
| portfolio_id | string |
| portfolio_name | string |
| score | long |
| score_date | datetime |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [SecurityScorecard Cybersecurity Ratings](../solutions/securityscorecard-cybersecurity-ratings.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SecurityScorecard Ratings (via Codeless Connector Framework)](../connectors/securityscorecardratingsccpdefinition.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [SecurityScorecard Cybersecurity Ratings](../solutions/securityscorecard-cybersecurity-ratings.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SecurityScorecardWorkbook](../content/securityscorecard-cybersecurity-ratings-securityscorecardworkbook-305a0f99.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [SecurityScorecardRatings](../parsers/securityscorecardratings.md) | [SecurityScorecard Cybersecurity Ratings](../solutions/securityscorecard-cybersecurity-ratings.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

