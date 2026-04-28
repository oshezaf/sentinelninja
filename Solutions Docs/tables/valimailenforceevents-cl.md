# ValimailEnforceEvents_CL

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

## Schema (11 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ValimailEnforce%5CData%20Connectors%5CValimailEnforceEventLogs_ccp/ValimailEnforceEventLogs_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Computer | string | Constant: ValimailReportingAPI |
| EventCategory | string | Event category: User, Domain or Service management, DMARC, SPF, DKIM and policy changes |
| EventChange | string | Detail of the action performed |
| EventSeverity | string | Impact of the change: high, medium,low or informational |
| EventType | string | Action perfomed on the subject |
| IsHighValueEvent | bool | True if the event can impact email deliverability |
| PerformedAt | datetime | Date and time (UTC) when the action was performed |
| SourceSystem | string | Constant: ValimailEnforce |
| Subject | string | Subject of the performed action. Currently domains and application users |
| TimeGenerated | datetime | Date and time (UTC) when the event was registered |
| User | string | email address or organization that performed the action |

## Solutions (1)

This table is used by the following solutions:

- [ValimailEnforce](../solutions/valimailenforce.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Valimail Enforce Configuration Events](../connectors/valimailenforceeventsconnector.md) |  |

---

## Content Items Using This Table (8)

### Analytic Rules (4)

**In solution [ValimailEnforce](../solutions/valimailenforce.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Valimail Enforce - DMARC Policy Weakened to None](../content/valimailenforce-valimail-enforce-dmarc-policy-weakened-to-none-44ec1fa4-a502-41ae-879a-3aad3557edce-ba6726ed.md) |  |
| [Valimail Enforce - Email Authentication Key Deleted](../content/valimailenforce-valimail-enforce-email-authentication-key-deleted-483078c6-d029-40f3-931a-30af0032008b-737952e9.md) |  |
| [Valimail Enforce - High-Value User Management Event](../content/valimailenforce-valimail-enforce-high-value-user-management-event-e960f5b0-cd80-474a-996a-013ff3989772-199686de.md) |  |
| [Valimail Enforce - Unusual Rate of Configuration Changes or User Additions](../content/valimailenforce-valimail-enforce-unusual-rate-of-configuration-changes-or-user-additions-3cbb78d9-81ac-42c9-b3cd-7e6baea7d9ff-19771ced.md) |  |

### Hunting Queries (4)

**In solution [ValimailEnforce](../solutions/valimailenforce.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Valimail Enforce - Bulk Domain Changes by Single User](../content/valimailenforce-valimail-enforce-bulk-domain-changes-by-single-user-85db7cdc-378e-48b9-b6cf-77fd622aa617-4970dc01.md) |  |
| [Valimail Enforce - Configuration Change Rate Trend](../content/valimailenforce-valimail-enforce-configuration-change-rate-trend-ce30ce49-2eaf-483c-85cd-c27a645d5355-83699391.md) |  |
| [Valimail Enforce - DMARC Policy Change History](../content/valimailenforce-valimail-enforce-dmarc-policy-change-history-ad6df9bc-5c1d-4dcd-8df9-516bc35f4dfe-df562b72.md) |  |
| [Valimail Enforce - High Value Event Summary](../content/valimailenforce-valimail-enforce-high-value-event-summary-a2be34b7-e841-471a-aaac-142be8a74cab-8dcb669f.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

