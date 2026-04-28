# ⚠️ Vaikora-Sentinel

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/vaikora_logo.svg" alt="Vaikora-Sentinel Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Data443 Risk Mitigation, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://data443.com/support](https://data443.com/support) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Data443 Risk Mitigation, Inc. - support@data443.com |
| **First Published** | 2026-04-03 |
| **Last Updated** | 2026-04-03 |
| **Solution Folder** | [Vaikora-Sentinel](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-Sentinel) |

The [Vaikora AI Agent Behavioral Signals](https://vaikora.com) solution integrates Vaikora AI agent behavioral data into Microsoft Sentinel using the Codeless Connector Framework (CCF). The solution deploys a REST API poller connector, a custom log table (Vaikora_AgentSignals_CL), analytics rules, and visualization workbook to help security teams monitor AI agent activity, detect behavioral anomalies, and investigate policy violations.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Vaikora AI Agent Behavioral Signals](../connectors/vaikorasentinel.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Vaikora_AgentSignals_CL`](../tables/vaikora-agentsignals-cl.md) 🔶 | [Vaikora AI Agent Behavioral Signals](../connectors/vaikorasentinel.md) | Analytics, Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Vaikora - Agent policy violation](../content/vaikora-sentinel-vaikora-agent-policy-violation-54262ad1-f346-4246-a13f-9557595ff7bd-946b4697.md) | Medium | Impact, DefenseEvasion | [`Vaikora_AgentSignals_CL`](../tables/vaikora-agentsignals-cl.md) |
| [Vaikora - Behavioral anomaly detected](../content/vaikora-sentinel-vaikora-behavioral-anomaly-detected-e61258ec-1a7f-454c-95b5-458a6edb1ea4-7a520c0a.md) | Medium | DefenseEvasion, Execution | [`Vaikora_AgentSignals_CL`](../tables/vaikora-agentsignals-cl.md) |
| [Vaikora - High severity AI agent action detected](../content/vaikora-sentinel-vaikora-high-severity-ai-agent-action-detected-15c49777-7cb7-4746-8064-6fa4c7a73df8-39a65e3c.md) | High | Impact, Execution, PrivilegeEscalation | [`Vaikora_AgentSignals_CL`](../tables/vaikora-agentsignals-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [VaikoraAgentSignalsDashboard](../content/vaikora-sentinel-vaikoraagentsignalsdashboard-310774ee.md) | [`Vaikora_AgentSignals_CL`](../tables/vaikora-agentsignals-cl.md) |

## Additional Documentation

> 📄 *Source: [Vaikora-Sentinel/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-Sentinel/README.md)*

This solution ingests AI agent behavioral data from the [Vaikora](https://vaikora.com) API into Microsoft Sentinel. It deploys a REST API poller connector, a custom log table, data collection rules, analytics rules, and a visualization workbook.

## What Gets Deployed

| Component | Description |
|-----------|-------------|
| Data connector | REST API poller — polls `https://api.vaikora.com/api/v1/actions` every 6 hours |
| Custom table | `Vaikora_AgentSignals_CL` — 17-column schema for agent signals |
| Analytic rule | Vaikora - High Risk AI Agent Action |
| Analytic rule | Vaikora - Behavioral Anomaly Detected |
| Analytic rule | Vaikora - Agent Policy Violation |
| Workbook | Vaikora AI Agent Signals Dashboard |

## Prerequisites

- Microsoft Sentinel workspace
- Vaikora API key (obtain from your Vaikora account)
- Agent ID from your Vaikora deployment

## Data Connector Setup

After deploying the solution:

1. Go to **Microsoft Sentinel > Data connectors**
2. Find **Vaikora AI Agent Behavioral Signals** and open it
3. Click **Open connector page**
4. Enter your Vaikora API key and agent ID
5. Click **Connect**

The connector polls the Vaikora API every 6 hours. Data appears in `Vaikora_AgentSignals_CL` within the first polling window.

## Custom Table Schema

| Column | Type | Description |
|--------|------|-------------|
| TimeGenerated | datetime | Timestamp of the agent action |
| action_id_s | string | Unique action identifier |
| action_type_s | string | Type of action performed |
| agent_id_s | string | Agent identifier |
| status_s | string | Action status (success, failure, blocked) |
| severity_s | string | Severity level (low, medium, high, critical) |
| policy_decision_s | string | Policy enforcement decision (allow, block, warn) |
| policy_id_s | string | Policy that evaluated the action |
| risk_score_d | int | Risk score 0-100 |
| risk_level_s | string | Risk level label |
| is_anomaly_b | bool | Whether Vaikora flagged this as anomalous |
| anomaly_score_d | real | Anomaly score 0.0-1.0 |
| anomaly_reason_s | string | Human-readable anomaly explanation |
| threat_detected_b | bool | Whether a threat was detected |
| threat_score_d | int | Threat score 0-100 |
| resource_type_s | string | Type of resource the agent accessed |
| log_hash_s | string | Unique hash for deduplication |

## Analytic Rules

All three rules are deployed in disabled state. Enable them from **Analytics > Rule templates** after confirming data is flowing.

**Vaikora - High Risk AI Agent Action** — fires when an action has `risk_score_d >= 75` and severity is `high` or `critical`. Severity: High. Frequency: 1h.

**Vaikora - Behavioral Anomaly Detected** — fires when `is_anomaly_b == true` and `anomaly_score_d >= 0.7`. Severity: Medium. Frequency: 30m.

**Vaikora - Agent Policy Violation** — fires when `policy_decision_s == 'block'`. Severity: Medium. Frequency: 15m.

## Workbook


*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|-------------------|
| 3.0.0       | 18-04-2026                     | Initial Vaikora AI Agent Behavioral Signals **CCF solution** package with data connector, analytics rules and workbook. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

