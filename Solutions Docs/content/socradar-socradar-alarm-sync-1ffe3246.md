# SOCRadar-Alarm-Sync

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Syncs closed incidents from Microsoft Sentinel back to SOCRadar platform. Uses Synced tag to prevent duplicate syncs. Filters by: SOCRadar tag + Closed status + lastModified. Now with pagination for 1000+ incidents.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SOCRadar](../solutions/socradar.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOCRadar/Playbooks/SOCRadar-Alarm-Sync/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Query_Closed_Page | GET | `@variables('closed_next_link')` | — |
| Update_SOCRadar_Status | POST | `https://platform.socradar.com/api/company/@{parameters('CompanyId')}/alarms/status/change` | — |
| Update_SOCRadar_Severity | POST | `https://platform.socradar.com/api/company/@{parameters('CompanyId')}/alarm/severity` | — |
| Add_Synced_Tag | PUT | `[concat(variables('_managementBaseUrl'), 'subscriptions/', subscription().subscriptionId, '/resourceGroups/', parameters('WorkspaceResourceGroup'), '/providers/Microsoft.OperationalInsights/workspaces/', parameters('WorkspaceName'), '/providers/Microsoft.SecurityInsights/incidents/@{items(''For_Each_Incident'')?[''name'']}?api-version=2023-11-01')]` | — |

</details>

## Additional Documentation

> 📄 *Source: [SOCRadar-Alarm-Sync/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOCRadar/Playbooks/SOCRadar-Alarm-Sync/readme.md)*

# SOCRadar Alarm Sync

Syncs closed Microsoft Sentinel incidents back to SOCRadar with classification mapping.

## Features

- Monitors recently closed SOCRadar-tagged incidents
- Maps Microsoft Sentinel classification to SOCRadar status
- Synced tag prevents duplicate sync operations
- Configurable polling interval

## Classification Mapping

| Microsoft Sentinel Classification | SOCRadar Status |
|------------------------|-----------------|
| FalsePositive | FALSE_POSITIVE |
| BenignPositive | MITIGATED |
| TruePositive | RESOLVED |
| Undetermined | RESOLVED |

## Deployment

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSOCRadar%2FPlaybooks%2FSOCRadar-Alarm-Sync%2Fazuredeploy.json)

You can also install this playbook via **Microsoft Sentinel Content Hub**.

## Prerequisites

- SOCRadar XTI Platform API Key
- Microsoft Sentinel workspace with SOCRadar incidents
- Managed Identity with Microsoft Sentinel Responder role (default, Contributor optional)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SOCRadar](../solutions/socradar.md)

