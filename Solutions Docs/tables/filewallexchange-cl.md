# FilewallExchange_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Filewall *(basis: projected)* |
| **Source Product** | Microsoft 365 *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (18 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Filewall%20for%20Microsoft%20365/Data%20Connectors/FilewallM365Logs_CCP/FilewallM365_DCR.json)

| Column Name | Type |
|:------------|:-----|
| application | string |
| attachments | dynamic |
| event_id | string |
| event_type | string |
| mail_id | string |
| policy_id | string |
| policy_name | string |
| recipient | string |
| release_by_admin | string |
| release_reason | string |
| release_timestamp | string |
| sender | string |
| state | string |
| status | string |
| subject | string |
| summary | string |
| TimeGenerated | datetime |
| timestamp | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Filewall for Microsoft 365](../solutions/filewall-for-microsoft-365.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Filewall for Microsoft 365](../connectors/filewallm365.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Filewall for Microsoft 365](../solutions/filewall-for-microsoft-365.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Filewall - Blocked emails](../content/filewall-for-microsoft-365-filewall-blocked-emails-9b784b65-2d16-4c9f-9f59-2a5d4c659f42-395f5a5b.md) |  |

### Workbooks (1)

**In solution [Filewall for Microsoft 365](../solutions/filewall-for-microsoft-365.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [FilewallM365Overview](../content/filewall-for-microsoft-365-filewallm365overview-90daf6a7.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [FilewallM365ExchangeEvent](../parsers/filewallm365exchangeevent.md) | [Filewall for Microsoft 365](../solutions/filewall-for-microsoft-365.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

