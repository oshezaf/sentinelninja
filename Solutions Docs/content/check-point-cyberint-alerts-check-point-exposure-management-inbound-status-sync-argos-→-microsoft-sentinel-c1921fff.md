# Check Point Exposure Management - Inbound Status Sync (Argos → Microsoft Sentinel)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Runs on a schedule and mirrors Argos alert status changes onto the Microsoft Sentinel incidents created for them. It reads the latest Argos state from the argsentdc_CL table, finds the incident through the ref_id Custom Detail, and updates the incident status and classification when Argos changed more recently than the incident. Newest change wins.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Check Point Cyberint Alerts](../solutions/check-point-cyberint-alerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20Alerts/Playbooks/Sync/CPEM_InboundStatusSync/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Find_incidents_out_of_sync | POST | `@{parameters('ArmEndpoint')}@{parameters('WorkspacePath')}/query?api-version=2017-10-01` | — |
| Get_incident | GET | `@{parameters('ArmEndpoint')}@{parameters('WorkspacePath')}/providers/Microsoft.SecurityInsights/incidents/@{items('For_each_incident')['IncidentName']}?api-version=2024-03-01` | — |
| Update_incident | PUT | `@{parameters('ArmEndpoint')}@{parameters('WorkspacePath')}/providers/Microsoft.SecurityInsights/incidents/@{items('For_each_incident')['IncidentName']}?api-version=2024-03-01` | — |
| Add_sync_comment | PUT | `@{parameters('ArmEndpoint')}@{parameters('WorkspacePath')}/providers/Microsoft.SecurityInsights/incidents/@{items('For_each_incident')['IncidentName']}/comments/@{guid()}?api-version=2024-03-01` | — |

</details>

## Additional Documentation

> 📄 *Source: [Sync/CPEM_InboundStatusSync/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20Alerts/Playbooks/Sync/CPEM_InboundStatusSync/readme.md)*

## Summary

Runs on a schedule and mirrors Argos alert status changes onto the Microsoft Sentinel incidents created for them. Together with the **Check_Point_EM_Exporter** playbook, it keeps alert and incident status identical in both systems.

**Flow:**
1. Runs every `Polling_Interval_Minutes` (default 5).
2. Queries the workspace for alerts that received a new row in `argsentdc_CL` recently. The look-back is three times the polling interval, and at least 30 minutes. History and incident matching go back `Lookback_Days` (default 30).
3. For each such alert:
   - takes its current Argos status and the time that status was set, from the alert's row history
   - finds the incident through the `ref_id` Custom Detail on the incident's alert
   - takes the incident's current status and the time it was last changed
4. Keeps only incidents whose status differs from Argos **and** whose last status change is older than the Argos change. Newest change wins. An incident whose status has not changed since it was created always takes the Argos state.
5. For each remaining incident:
   - reads it
   - skips it if its status already matches, which covers the few minutes before the `SecurityIncident` table catches up
   - otherwise updates its status and, on close, its classification and classification comment
   - adds a comment describing the change

Changes applied here fire the **Check_Point_EM_AutomationRules** rule. The Exporter then finds Argos already in that state and sends nothing, so no loop occurs.

## Prerequisites

1. The **Check Point Cyberint Alerts** data connector, connected under solution 3.2.0 or later so that it polls on `update_date`. A connector connected under 3.1.x only ingests new alerts and must be reconnected.
2. Incidents created by the **Check Point Exposure Management - Argos alerts to incidents** analytic rule, which provides the `ref_id` Custom Detail.
3. The Microsoft Sentinel workspace in the resource group given by `Workspace_Resource_Group`.

## Deployment

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCheck%2520Point%2520Cyberint%2520Alerts%2FPlaybooks%2FSync%2FCPEM_InboundStatusSync%2Fazuredeploy.json)

### Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| **PlaybookName** | No | Name of the Logic App (default: `Check_Point_EM_InboundStatusSync`) |
| **Workspace_Name** | Yes | Name of the Log Analytics workspace where Microsoft Sentinel is enabled |
| **Workspace_Resource_Group** | No | Resource group of the workspace (default: the playbook's resource group) |
| **Polling_Interval_Minutes** | No | How often to check for Argos status changes, in minutes (default: `5`, minimum `5`) |
| **Lookback_Days** | No | How far back to look for an alert's status history and its incident, in days (default: `30`, maximum `90`). Lower values scan less data |

The playbook needs no API token or API connection. It calls the Azure Monitor query API and the Microsoft Sentinel incidents API with its managed identity.

## Post-Deployment

1. Grant the Logic App managed identity the **Microsoft Sentinel Responder** role on the workspace resource group. The role covers both the log query and the incident updates. Until it is granted, every run fails with 403 on `Find_incidents_out_of_sync`.

## Status Mapping

| Argos status | Argos closure reason | Microsoft Sentinel status | Classification / reason |
|---|---|---|---|
| `open` | — | New | — |
| `acknowledged` | — | Active | — |
| `closed` | `resolved` | Closed | True Positive / Suspicious activity |
| `closed` | `false_positive` | Closed | False Positive / Incorrect alert logic |
| `closed` | `irrelevant_alert_subtype` | Closed | False Positive / Inaccurate data |
| `closed` | `no_longer_a_threat`, `irrelevant`, `asset_should_not_be_monitored`, `asset_belongs_to_my_organization`, `asm_no_longer_detected`, `asm_manually_closed` | Closed | Benign Positive / Suspicious but expected |
| `closed` | `other` or none | Closed | Undetermined |

On close, the classification comment is the Argos `closure_reason_description`, or `Closed in Check Point Exposure Management (closure reason: <reason>)` when there is none.

## Limitations

- **It only sees what the connector ingests.** The connector reads an alert's current state when it polls. If another integration rewrites the same Argos alerts more often than every 5 minutes, or the token's Argos quota (5,000 requests per day) is used up by other clients, changes can arrive late or not at all. See **Known Limitations** in the solution README.
- **Only status is mirrored.** A different closure reason on an alert that is already closed on both sides is not re-synced.

*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Check Point Cyberint Alerts](../solutions/check-point-cyberint-alerts.md)

