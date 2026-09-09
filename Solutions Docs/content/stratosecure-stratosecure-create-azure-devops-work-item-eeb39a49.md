# StratoSecure - Create Azure DevOps Work Item

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

When a Microsoft Sentinel incident is created from a StratoSecure finding, this playbook creates an Azure DevOps Task work item and writes an audit record to StratoSecure_PlaybookRuns_CL. Human approval is always required before the action executes.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [StratoSecure](../solutions/stratosecure.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure/Playbooks/StratoSecure-CreateADOWorkItem/azuredeploy.json) |

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
| Action_CreateADOWorkItem | POST | `[variables('HttpEndpoint')]` | — |

</details>

## Additional Documentation

> 📄 *Source: [StratoSecure-CreateADOWorkItem/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure/Playbooks/StratoSecure-CreateADOWorkItem/readme.md)*

# StratoSecure — Create Azure DevOps Work Item

Creates an Azure DevOps Task work item for tracking finding remediation when a Microsoft Sentinel incident is triggered from a StratoSecure finding. The work item is tagged `sentinel; stratosecure; appsec` with Priority 1.

## Prerequisites

- Microsoft Sentinel workspace
- Azure DevOps organization and project
- Azure DevOps Personal Access Token with Work Items (Read & Write) scope
- StratoSecure Platform API key (generated at client.stratocode.io)

## Post-Deployment Steps

1. Grant the Logic App system-assigned managed identity the **Microsoft Sentinel Responder** role on the Sentinel workspace.
2. Store the `AdoPat` in Azure Key Vault and reference it in the parameter.
3. Verify the `AdoOrganization` and `AdoProject` values match your ADO environment.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| PlaybookName | string | Logic App resource name |
| AdoOrganization | string | Azure DevOps organization name |
| AdoProject | string | Azure DevOps project name |
| AdoPat | securestring | Personal Access Token with Work Items (Read & Write) scope |
| LogAnalyticsWorkspaceId | string | Workspace ID for audit logging |
| LogAnalyticsWorkspaceKey | securestring | Workspace primary key for audit logging |
| RequireApproval | bool | When true, actions execute only after approval condition evaluates (default: true) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to StratoSecure](../solutions/stratosecure.md)

