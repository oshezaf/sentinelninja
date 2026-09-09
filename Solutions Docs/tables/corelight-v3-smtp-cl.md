# Corelight_v3_smtp_CL

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

## Schema (33 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_smtp_CL.json)

| Column Name | Type |
|:------------|:-----|
| cc | dynamic |
| domains | dynamic |
| email_to | dynamic |
| first_received | string |
| from | string |
| fuids | dynamic |
| helo | string |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| in_reply_to | string |
| is_webmail | bool |
| last_reply | string |
| log_date | string |
| mailfrom | string |
| msg_id | string |
| path | string |
| rcptto | dynamic |
| reply_to | string |
| second_received | string |
| subject | string |
| system_name | string |
| TimeGenerated | datetime |
| tls | bool |
| trans_depth | long |
| ts | datetime |
| Type | string |
| uid | string |
| urls | dynamic |
| user_agent | string |
| write_ts | datetime |
| x_originating_ip | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Corelight](../solutions/corelight.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (1)

**In solution [Corelight](../solutions/corelight.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Corelight - SMTP Email containing NON Ascii Characters within the Subject](../content/corelight-corelight-smtp-email-containing-non-ascii-characters-within-the-subject-50c61708-9824-46f3-87cf-22490796fae2-fc7b03e6.md) |  |

### Hunting Queries (1)

**In solution [Corelight](../solutions/corelight.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Corelight - Abnormal Email Subject](../content/corelight-corelight-abnormal-email-subject-e9441d57-39f4-41fb-aaad-d02e47783d1a-637876de.md) |  |

### Workbooks (2)

**In solution [Corelight](../solutions/corelight.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Corelight_Data_Explorer](../content/corelight-corelight-data-explorer-258d9f06.md) |  |
| [Corelight_Security_Workflow](../content/corelight-corelight-security-workflow-7c756761.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_smtp](../parsers/corelight-smtp.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

