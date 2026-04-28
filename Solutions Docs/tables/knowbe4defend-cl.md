# KnowBe4Defend_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (15 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/KnowBe4Defend_CL.json)

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
| TimeGenerated | datetime |

## Solutions (3)

This table is used by the following solutions:

- [Egress Defend](../solutions/egress-defend.md)
- [Egress Iris](../solutions/egress-iris.md)
- [KnowBe4 Defend](../solutions/knowbe4-defend.md)

## Connectors (3)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Egress Defend](../connectors/egressdefendpolling.md) |  |
| [Egress Iris Connector](../connectors/egresssiempolling.md) |  |
| [KnowBe4 Defend](../connectors/knowbe4defendpolling.md) |  |

---

## Content Items Using This Table (7)

### Analytic Rules (4)

**In solution [Egress Defend](../solutions/egress-defend.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Egress Defend - Dangerous Attachment Detected](../content/egress-defend-egress-defend-dangerous-attachment-detected-a0e55dd4-8454-4396-91e6-f28fec3d2cab-f2c1e438.md) |  |
| [Egress Defend - Dangerous Link Click](../content/egress-defend-egress-defend-dangerous-link-click-a896123e-03a5-4a4d-a7e3-fd814846dfb2-cd7508b8.md) |  |

**In solution [KnowBe4 Defend](../solutions/knowbe4-defend.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [KnowBe4 Defend - Dangerous Attachment Detected](../content/knowbe4-defend-knowbe4-defend-dangerous-attachment-detected-b75a4a7a-dedb-47be-b7e6-344f4d50af19-fa41ceab.md) |  |
| [KnowBe4 Defend - Dangerous Link Click](../content/knowbe4-defend-knowbe4-defend-dangerous-link-click-af90173d-cc27-4166-a9b1-8c4347b1f4ac-18f4a752.md) |  |

### Hunting Queries (1)

**In solution [KnowBe4 Defend](../solutions/knowbe4-defend.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Dangerous emails with links clicked](../content/knowbe4-defend-dangerous-emails-with-links-clicked-40a3d172-79ec-4e46-95bd-21114ee0f863-eb38a85c.md) |  |

### Workbooks (2)

**In solution [Egress Defend](../solutions/egress-defend.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DefendMetrics](../content/egress-defend-defendmetrics-35b2f8e1.md) |  |

**In solution [KnowBe4 Defend](../solutions/knowbe4-defend.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [KnowBe4DefendMetrics](../content/knowbe4-defend-knowbe4defendmetrics-2e05a83a.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [DefendAuditData](../parsers/defendauditdata.md) | [KnowBe4 Defend](../solutions/knowbe4-defend.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

