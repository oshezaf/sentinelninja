# StratoSecure_ApiInventory_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (13 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure/Data%20Connectors/StratoSecure_PUSH_CCP/StratoSecure_DCR.json)

| Column Name | Type |
|:------------|:-----|
| AuthType | string |
| DataClassification | string |
| DiscoverySource | string |
| DormantFlag | boolean |
| EndpointId | string |
| InternetExposure | boolean |
| Method | string |
| Path | string |
| ScanId | string |
| ServiceName | string |
| Status | string |
| StraTenantId | string |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [StratoSecure](../solutions/stratosecure.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [StratoSecure Security Platform](../connectors/stratosecurepush.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [StratoSecure](../solutions/stratosecure.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Unauthenticated API Endpoint with Sensitive Data](../content/stratosecure-unauthenticated-api-endpoint-with-sensitive-data-479bc6ef-ecb3-496f-9a2a-38c9635d77d3-46d961ff.md) |  |

### Workbooks (1)

**In solution [StratoSecure](../solutions/stratosecure.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [StratoSecure_APIInventory](../content/stratosecure-stratosecure-apiinventory-1e864274.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

