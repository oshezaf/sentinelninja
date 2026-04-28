# Entity_Scoring_Data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (28 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Entity_Scoring_Data_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| active_detection_types | dynamic |
| attack_rating | real |
| breadth_contrib | real |
| category | string |
| Computer | string |
| entity_id | real |
| entity_type | string |
| event_timestamp | datetime |
| id | real |
| importance | real |
| is_prioritized | bool |
| last_detection | dynamic |
| last_detection_id | real |
| last_detection_type | string |
| last_detection_url | string |
| ManagementGroupName | string |
| MG | string |
| name | string |
| RawData | string |
| severity | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| urgency_score | real |
| url | string |
| velocity_contrib | real |

## Solutions (1)

This table is used by the following solutions:

- [Vectra XDR](../solutions/vectra-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Vectra XDR](../connectors/vectraxdr.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Vectra XDR](../solutions/vectra-xdr.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [VectraXDR](../content/vectra-xdr-vectraxdr-67eeec96.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [VectraEntityScoring](../parsers/vectraentityscoring.md) | [Vectra XDR](../solutions/vectra-xdr.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

