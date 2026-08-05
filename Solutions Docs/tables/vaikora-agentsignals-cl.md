# Vaikora_AgentSignals_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the following solutions: [Vaikora-Sentinel](../solutions/vaikora-sentinel.md), [VaikoraSecurityCenter](../solutions/vaikorasecuritycenter.md). It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
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

## Schema (13 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-Sentinel%5CData%20Connectors%5CVaikoraSentinel_CCF/Vaikora_Table.json)

| Column Name | Type |
|:------------|:-----|
| action_id_s | string |
| action_type_s | string |
| agent_id_s | string |
| anomaly_reason_s | string |
| anomaly_score_d | real |
| is_anomaly_b | bool |
| log_hash_s | string |
| policy_decision_s | string |
| policy_id_s | string |
| resource_type_s | string |
| severity_s | string |
| status_s | string |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (2)

This table is used by the following solutions:

- [Vaikora-Sentinel](../solutions/vaikora-sentinel.md)
- [VaikoraSecurityCenter](../solutions/vaikorasecuritycenter.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Vaikora AI Agent Behavioral Signals](../connectors/vaikorasentinel.md) |  |

---

## Content Items Using This Table (8)

### Analytic Rules (6)

**In solution [Vaikora-Sentinel](../solutions/vaikora-sentinel.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Vaikora - Agent policy violation](../content/vaikora-sentinel-vaikora-agent-policy-violation-54262ad1-f346-4246-a13f-9557595ff7bd-946b4697.md) |  |
| [Vaikora - Behavioral anomaly detected](../content/vaikora-sentinel-vaikora-behavioral-anomaly-detected-e61258ec-1a7f-454c-95b5-458a6edb1ea4-7a520c0a.md) |  |
| [Vaikora - High severity AI agent action detected](../content/vaikora-sentinel-vaikora-high-severity-ai-agent-action-detected-15c49777-7cb7-4746-8064-6fa4c7a73df8-39a65e3c.md) |  |

**In solution [VaikoraSecurityCenter](../solutions/vaikorasecuritycenter.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Vaikora - Behavioral anomaly detected](../content/vaikorasecuritycenter-vaikora-behavioral-anomaly-detected-c0984707-0855-430e-9c36-5e2d0d0ce56f-89d50910.md) |  |
| [Vaikora - Feed outage detection](../content/vaikorasecuritycenter-vaikora-feed-outage-detection-5f7789fa-0a6b-4dff-a2da-dfa4b682f3af-c7fc740b.md) |  |
| [Vaikora - High severity AI agent action](../content/vaikorasecuritycenter-vaikora-high-severity-ai-agent-action-ac3ec787-fd49-4e93-88cc-aaa9b31061ac-31cd3c0a.md) |  |

### Workbooks (1)

**In solution [Vaikora-Sentinel](../solutions/vaikora-sentinel.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [VaikoraAgentSignalsDashboard](../content/vaikora-sentinel-vaikoraagentsignalsdashboard-310774ee.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

