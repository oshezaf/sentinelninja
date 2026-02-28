# Sonrai_Tickets_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (36 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Sonrai_Tickets_CL.json)

| Column Name | Type |
|:------------|:-----|
| action_d | real |
| actor_s | string |
| digest_account_s | string |
| digest_actionClassification_s | string |
| digest_assignedTo_s | string |
| digest_createdBy_s | string |
| digest_createdDate_d | real |
| digest_criticalResourceName_s | string |
| digest_criticalResourceSRN_s | string |
| digest_description_s | string |
| digest_envidence_path_s | string |
| digest_evidence_conditions_s | string |
| digest_evidence_count_d | real |
| digest_evidence_resourceSet_s | string |
| digest_evidence_userAgentSet_s | string |
| digest_lastReopenDate_d | real |
| digest_lastSeenDate_d | real |
| digest_org_s | string |
| digest_resourceLabel_s | string |
| digest_resourceType_s | string |
| digest_severity_d | real |
| digest_severityCategory_s | string |
| digest_severityNumeric_d | real |
| digest_status_s | string |
| digest_swimlanes_s | string |
| digest_ticketKey_s | string |
| digest_ticketKeyDescription_s | string |
| digest_ticketKeyName_s | string |
| digest_ticketSignature_s | string |
| digest_ticketSrn_s | string |
| digest_ticketType_s | string |
| digest_timestamp_s | string |
| digest_title_s | string |
| digest_transitionDate_d | real |
| digest_transitionedBy_s | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [SonraiSecurity](../solutions/sonraisecurity.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Sonrai Data Connector](../connectors/sonraidataconnector.md) |  |

---

## Content Items Using This Table (10)

### Analytic Rules (9)

**In solution [SonraiSecurity](../solutions/sonraisecurity.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [New Sonrai Ticket](../content/sonraisecurity-new-sonrai-ticket-bcc3362d-b6f9-4de0-b41c-707fafd5a416-2812a685.md) |  |
| [Sonrai Ticket Assigned](../content/sonraisecurity-sonrai-ticket-assigned-37a8d052-a3db-4dc6-9dca-9390cac6f486-2ee6e4d0.md) |  |
| [Sonrai Ticket Closed](../content/sonraisecurity-sonrai-ticket-closed-f5d467de-b5a2-4b4f-96db-55e27c733594-09bc4d60.md) |  |
| [Sonrai Ticket Escalation Executed](../content/sonraisecurity-sonrai-ticket-escalation-executed-0d29c93e-b83f-4dfb-bbbb-76824b77eeca-67fd1e6c.md) |  |
| [Sonrai Ticket Escalation Executed](../content/sonraisecurity-sonrai-ticket-escalation-executed-822fff15-ea68-4d0f-94ee-b4482ddb6f3a-4c0b067a.md) |  |
| [Sonrai Ticket Reopened](../content/sonraisecurity-sonrai-ticket-reopened-b60129ab-ce22-4b76-858d-3204932a13cc-26283b06.md) |  |
| [Sonrai Ticket Risk Accepted](../content/sonraisecurity-sonrai-ticket-risk-accepted-080191e8-271d-4ae6-85ce-c7bcd4b06b40-ec666763.md) |  |
| [Sonrai Ticket Snoozed](../content/sonraisecurity-sonrai-ticket-snoozed-10e6c454-5cad-4f86-81ce-800235cb050a-186cfa44.md) |  |
| [Sonrai Ticket Updated](../content/sonraisecurity-sonrai-ticket-updated-af9b8eb1-a8ef-40aa-92a4-1fc73a1479c7-12412c0f.md) |  |

### Workbooks (1)

**In solution [SonraiSecurity](../solutions/sonraisecurity.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Sonrai](../content/sonraisecurity-sonrai-6abc78da.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

