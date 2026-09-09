# StratoSecure - Notify Microsoft Teams

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

When a Microsoft Sentinel incident is created from a StratoSecure finding, this playbook posts an adaptive card notification to a Microsoft Teams channel via incoming webhook. Human approval is always required before the action executes.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [StratoSecure](../solutions/stratosecure.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure/Playbooks/StratoSecure-NotifyTeams/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`StratoSecure_PlaybookRuns_CL`](../tables/stratosecure-playbookruns-cl.md) | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) | Managed | 1 | 1 |
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Action_AuditLog | post | `/api/logs` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Action_PostToTeams | POST | `[parameters('TeamsWebhookUrl')]` | — |

</details>

## Additional Documentation

> 📄 *Source: [StratoSecure-NotifyTeams/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure/Playbooks/StratoSecure-NotifyTeams/readme.md)*

# StratoSecure — Notify Teams

Sends a Microsoft Teams notification with a summary of the triggered security incident and links to the StratoSecure finding detail.

## Prerequisites

- Microsoft Sentinel workspace
- Microsoft Teams incoming webhook URL
- StratoSecure Platform API key (generated at client.stratocode.io)

## Post-Deployment Steps

1. Grant the Logic App system-assigned managed identity the **Microsoft Sentinel Responder** role on the Sentinel workspace.
2. Configure the Teams webhook URL as a Sentinel automation rule trigger.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| PlaybookName | string | Logic App resource name |
| TeamsWebhookUrl | securestring | Microsoft Teams incoming webhook URL |
| LogAnalyticsWorkspaceId | string | Workspace ID for audit logging |
| LogAnalyticsWorkspaceKey | securestring | Workspace primary key for audit logging |
| RequireApproval | bool | When true, actions execute only after approval condition evaluates (default: true) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to StratoSecure](../solutions/stratosecure.md)

