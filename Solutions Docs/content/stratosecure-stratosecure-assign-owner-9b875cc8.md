# StratoSecure - Assign Owner

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

When a Microsoft Sentinel incident is created from a StratoSecure finding, this playbook calls the StratoSecure API to assign the finding to the SOC team and writes an audit record to StratoSecure_PlaybookRuns_CL. Human approval is always required before the action executes.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [StratoSecure](../solutions/stratosecure.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure/Playbooks/StratoSecure-AssignOwner/azuredeploy.json) |

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
| Action_AssignOwner | PATCH | `[variables('HttpEndpoint')]` | — |

</details>

## Additional Documentation

> 📄 *Source: [StratoSecure-AssignOwner/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure/Playbooks/StratoSecure-AssignOwner/readme.md)*

# StratoSecure — Assign Owner

Assigns a finding owner in StratoSecure based on incident triage in Microsoft Sentinel. When an incident is created, this playbook calls the StratoSecure API to assign the finding to the SOC team and writes an audit record to `StratoSecure_PlaybookRuns_CL`.

## Prerequisites

- Microsoft Sentinel workspace
- StratoSecure Platform API key with finding-assign permission (generated at client.stratocode.io)

## Post-Deployment Steps

1. Grant the Logic App system-assigned managed identity the **Microsoft Sentinel Responder** role on the Sentinel workspace.
2. Store the `StratoApiKey` in Azure Key Vault and reference it in the parameter.
3. Configure the Sentinel automation rule to trigger this playbook on new incident creation.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| PlaybookName | string | Logic App resource name |
| StratoApiBaseUrl | string | StratoSecure platform API base URL (default: https://api.stratocode.io) |
| StratoApiKey | securestring | StratoSecure API key |
| LogAnalyticsWorkspaceId | string | Workspace ID for audit logging |
| LogAnalyticsWorkspaceKey | securestring | Workspace primary key for audit logging |
| RequireApproval | bool | When true, actions execute only after approval condition evaluates (default: true) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to StratoSecure](../solutions/stratosecure.md)

