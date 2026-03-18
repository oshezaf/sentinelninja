# Seg_Dlp_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (9 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Mimecast_Seg_Dlp_CL.json)

| Column Name | Type |
|:------------|:-----|
| action | string |
| eventTime | datetime |
| messageId | string |
| policy | string |
| recipientAddress | string |
| route | string |
| senderAddress | string |
| subject | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Mimecast](../solutions/mimecast.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Mimecast Secure Email Gateway](../connectors/mimecastsegapi.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [Mimecast](../solutions/mimecast.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast Data Leak Prevention - Hold](../content/mimecast-mimecast-data-leak-prevention-hold-8e52bcf1-4f50-4c39-8678-d9efad64e379-67109c1d.md) |  |
| [Mimecast Data Leak Prevention - Notifications](../content/mimecast-mimecast-data-leak-prevention-notifications-cfd67598-ad0d-430a-a793-027eb4dbe967-9d8dd373.md) |  |

### Workbooks (1)

**In solution [Mimecast](../solutions/mimecast.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast_SEG_Workbook](../content/mimecast-mimecast-seg-workbook-c2026bf1.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [MimecastDLP](../parsers/mimecastdlp.md) | [Mimecast](../solutions/mimecast.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

