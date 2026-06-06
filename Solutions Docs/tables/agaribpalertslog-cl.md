# AgariBPAlertsLog_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (12 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Agari%5CData%20Connectors%5CAgari_CCF/table_AgariBPAlertsLog.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AlertType | string | Type of alert (e.g., authentication_spike, phishing) |
| CreatedAt | datetime | Timestamp when the alert was created |
| DkimFailHosts | dynamic | Array of hosts with DKIM authentication failures |
| Domain | string | Domain associated with the alert |
| Id | long | Unique identifier for the alert |
| LastNotifiedAt | datetime | Timestamp when the alert was last notified |
| Links | dynamic | Related API links for failure stats and samples |
| ResolvedAt | datetime | Timestamp when the alert was resolved |
| SpfFailHosts | dynamic | Array of hosts with SPF authentication failures |
| Summary | string | Human-readable summary of the alert |
| TimeGenerated | datetime |  |
| UpdatedAt | datetime | Timestamp when the alert was last updated |

## Solutions (1)

This table is used by the following solutions:

- [Agari](../solutions/agari.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Fortra Agari Data Connector (via Codeless Connector Framework)](../connectors/agariconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

