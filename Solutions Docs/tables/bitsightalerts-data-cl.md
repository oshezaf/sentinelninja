# BitsightAlerts_data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (15 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/BitsightAlerts_data_CL.json)

| Column Name | Type |
|:------------|:-----|
| AlertDate | string |
| AlertType | string |
| CompanyGUID | string |
| CompanyName | string |
| CompanyURL | string |
| EventProduct | string |
| EventVendor | string |
| FolderGUID | string |
| FolderName | string |
| GUID | real |
| Severity | string |
| StartDate | string |
| TimeGenerated | datetime |
| Trigger | string |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [BitSight](../solutions/bitsight.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Bitsight data connector](../connectors/bitsight.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [BitSight](../solutions/bitsight.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [BitSight - new alert found](../content/bitsight-bitsight-new-alert-found-a1275c5e-0ff4-4d15-a7b7-96018cd979f5-773a55bf.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [BitSightAlerts](../parsers/bitsightalerts.md) | [BitSight](../solutions/bitsight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

