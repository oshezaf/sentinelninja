# FilewallFile_CL

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
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (26 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/FilewallFile_CL.json)

| Column Name | Type |
|:------------|:-----|
| application | string |
| block_reason | string |
| drive_name | string |
| event_id | string |
| event_type | string |
| file_type | string |
| name | string |
| new_sha1 | string |
| new_sha256 | string |
| original_sha1 | string |
| original_sha256 | string |
| owner | string |
| path | string |
| policy_id | string |
| policy_name | string |
| release_by_admin | string |
| release_reason | string |
| release_timestamp | string |
| site_name | string |
| size | string |
| state | string |
| status | string |
| summary | string |
| TimeGenerated | datetime |
| timestamp | string |
| version | string |

## Solutions (1)

This table is used by the following solutions:

- [Filewall for Microsoft 365](../solutions/filewall-for-microsoft-365.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Filewall for Microsoft 365](../connectors/filewallm365.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (1)

**In solution [Filewall for Microsoft 365](../solutions/filewall-for-microsoft-365.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Filewall - Blocked files](../content/filewall-for-microsoft-365-filewall-blocked-files-86e7f6fd-5c29-4a3a-bced-3eca3fb0c621-7c0054b4.md) |  |

### Workbooks (2)

**In solution [Filewall for Microsoft 365](../solutions/filewall-for-microsoft-365.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [FilewallM365Overview](../content/filewall-for-microsoft-365-filewallm365overview-90daf6a7.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [FilewallM365Overview](../content/github-only-filewallm365overview-0b6e3b68.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [FilewallM365FileEvent](../parsers/filewallm365fileevent.md) | [Filewall for Microsoft 365](../solutions/filewall-for-microsoft-365.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

