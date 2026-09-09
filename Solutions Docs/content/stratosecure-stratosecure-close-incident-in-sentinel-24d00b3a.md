# StratoSecure - Close Incident in Sentinel

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

When a StratoSecure finding is resolved or accepted, this playbook closes the corresponding Microsoft Sentinel incident as BenignPositive and writes an audit record to StratoSecure_PlaybookRuns_CL. Human approval is always required before the action executes.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [StratoSecure](../solutions/stratosecure.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure/Playbooks/StratoSecure-CloseInSentinel/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`StratoSecure_PlaybookRuns_CL`](../tables/stratosecure-playbookruns-cl.md) | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) | Managed | 1 | 1 |
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Action_AuditLog | post | `/api/logs` | — |

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Action_CloseIncident | put | `/Incidents/subscriptions/@{triggerBody()?['workspaceInfo']?['SubscriptionId']}/resourceGroups/@{triggerBody()?['workspaceInfo']?['ResourceGroupName']}/providers/Microsoft.OperationalInsights/workspaces/@{parameters('WorkspaceName')}/providers/Microsoft.SecurityInsights/Incidents/@{triggerBody()?['object']?['name']}/close` | — |

</details>

## Additional Documentation

> 📄 *Source: [StratoSecure-CloseInSentinel/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure/Playbooks/StratoSecure-CloseInSentinel/readme.md)*

# StratoSecure — Close In Sentinel

Closes a Microsoft Sentinel incident after a StratoSecure finding is remediated or accepted. The incident is closed as `BenignPositive - SuspiciousButExpected` and an audit record is written to `StratoSecure_PlaybookRuns_CL`.

## Prerequisites

- Microsoft Sentinel workspace with Contributor access
- StratoSecure Platform API key (generated at client.stratocode.io)

## Post-Deployment Steps

1. Grant the Logic App system-assigned managed identity the **Microsoft Sentinel Responder** role on the Sentinel workspace.
2. Configure the Sentinel automation rule to trigger this playbook when a finding is marked as remediated in StratoSecure.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| PlaybookName | string | Logic App resource name |
| WorkspaceName | string | Microsoft Sentinel Log Analytics workspace name |
| LogAnalyticsWorkspaceId | string | Workspace ID for audit logging |
| LogAnalyticsWorkspaceKey | securestring | Workspace primary key for audit logging |
| RequireApproval | bool | When true, actions execute only after approval condition evaluates (default: true) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to StratoSecure](../solutions/stratosecure.md)

