# EgressDefend_v4_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
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

## Schema (16 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/EgressDefend_v4_CL.json)

| Column Name | Type |
|:------------|:-----|
| email_attachments_s | string |
| email_firstTimeSender_b | bool |
| email_linksClicked_d | real |
| email_mailFrom_s | string |
| email_messageId_s | string |
| email_payload_Type_s | string |
| email_phishType_s | string |
| email_rcptTo_s | string |
| email_senderIp_s | string |
| email_subject_s | string |
| email_threat_s | string |
| email_trust_s | string |
| event_s | string |
| linkClicked_s | string |
| time_t | datetime |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Egress Defend](../solutions/egress-defend.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Egress Defend v2](../connectors/egressdefendaudit.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (2)

**In solution [Egress Defend](../solutions/egress-defend.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Egress Defend - Dangerous Attachment Detected](../content/egress-defend-egress-defend-dangerous-attachment-detected-a0e55dd4-8454-4396-91e6-f28fec3d2cab-f2c1e438.md) |  |
| [Egress Defend - Dangerous Link Click](../content/egress-defend-egress-defend-dangerous-link-click-a896123e-03a5-4a4d-a7e3-fd814846dfb2-cd7508b8.md) |  |

### Hunting Queries (1)

**In solution [Egress Defend](../solutions/egress-defend.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Dangerous emails with links clicked](../content/egress-defend-dangerous-emails-with-links-clicked-57ada8d5-7a26-4440-97fd-32c5c3fd0421-6c714e87.md) |  |

### Workbooks (1)

**In solution [Egress Defend](../solutions/egress-defend.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DefendMetrics](../content/egress-defend-defendmetrics-35b2f8e1.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [DefendAuditData_v4](../parsers/defendauditdata-v4.md) | [Egress Defend](../solutions/egress-defend.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

