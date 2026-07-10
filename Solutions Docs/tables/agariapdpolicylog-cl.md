# AgariAPDPolicyLog_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Microsoft *(basis: projected)* |
| **Source Product** | Fortra Agari |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (10 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Agari%5CData%20Connectors%5CAgari_CCF/table_AgariAPDPolicyLog.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AdminRecipients | dynamic | Array of admin email addresses notified about this policy event |
| AlertDefinitionName | string | Name of the alert definition associated with the policy event |
| CreatedAt | datetime | Timestamp when the policy event was created |
| Id | long | Unique identifier for the policy event |
| NotifiedOriginalRecipients | bool | Whether the original email recipients were notified about this policy event |
| PolicyAction | string | Action taken by the policy (deliver, mark-spam, move, inbox, delete, none) |
| PolicyEnabled | bool | Whether the policy that triggered this event is enabled |
| Summary | bool | Policy Event Summary flag |
| TimeGenerated | datetime |  |
| UpdatedAt | datetime | Timestamp when the policy event was last updated |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

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

