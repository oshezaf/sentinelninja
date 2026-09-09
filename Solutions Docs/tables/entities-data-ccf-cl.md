# Entities_Data_CCF_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (34 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR%5CData%20Connectors%5CVectraCCFConnector/VectraRUX_Table_Entities.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| account_type | dynamic | Account type details |
| assignment | dynamic | Raw assignment object |
| assignment_assigned_by | dynamic | Assigned by user object |
| assignment_assigned_by_id | real | Assigned by user ID |
| assignment_assigned_by_username | string | Assigned by username |
| assignment_assigned_to | dynamic | Assigned to user object |
| assignment_assigned_to_id | real | Assigned to user ID |
| assignment_assigned_to_username | string | Assigned to username |
| assignment_date_assigned | datetime | Date assignment was made |
| assignment_id | real | Assignment ID |
| attack_profile | string | Attack profile |
| attack_rating | real | Attack rating score |
| breadth_contrib | real | Breadth contribution to threat score |
| detection_set | dynamic | Associated detections |
| entity_type | string | Entity type (host or account) |
| host_type | dynamic | Host type details |
| id | real | Entity ID |
| importance | real | Entity importance score |
| ip | string | IP address |
| is_prioritized | bool | Whether entity is prioritized |
| last_detection_timestamp | datetime | Timestamp of most recent detection |
| last_modified_timestamp | datetime | Timestamp of last modification (used as checkpoint) |
| name | string | Entity name |
| notes | dynamic | Analyst notes |
| privilege_category | string | Privilege category |
| privilege_level | real | Privilege level |
| sensors | dynamic | Associated sensors |
| severity | string | Severity level |
| state | string | Entity state |
| tags | dynamic | Tags |
| TimeGenerated | datetime |  |
| urgency_score | real | Urgency score |
| url | string | Entity URL |
| velocity_contrib | real | Velocity contribution to threat score |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Vectra XDR](../solutions/vectra-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Vectra RUX Security Data Connector (via Codeless Connector Framework)](../connectors/vectraruxconnector.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Vectra XDR](../solutions/vectra-xdr.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [VectraRUXSecurityDashboard](../content/vectra-xdr-vectraruxsecuritydashboard-3f089ed1.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [VectraEntities](../parsers/vectraentities.md) | [Vectra XDR](../solutions/vectra-xdr.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

