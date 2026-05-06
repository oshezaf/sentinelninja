# IBMResilient-Incidents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Create-IBMResilientIncident/alert-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 4 |
| [`Resilient-Incidents`](../logic-apps/custom-resilient-incidents.md) | Custom | 1 | 5 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Alert_-_Get_incident | get | `/Incidents/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/alerts/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}` | — |
| Entities_-_Get_Accounts | post | `/entities/account` | — |
| Entities_-_Get_Hosts | post | `/entities/host` | — |
| Entities_-_Get_IPs | post | `/entities/ip` | — |

#### [`Resilient-Incidents`](../logic-apps/custom-resilient-incidents.md) (Custom)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| create_IncidentArtifact | post | `/incidents/@{encodeURIComponent(body('create_incident')?['id'])}/artifacts` | — |
| create_IncidentArtifact_2 | post | `/incidents/@{encodeURIComponent(body('create_incident')?['id'])}/artifacts` | — |
| create_IncidentArtifact_3 | post | `/incidents/@{encodeURIComponent(body('create_incident')?['id'])}/artifacts` | — |
| create_IncidentArtifact_4 | post | `/incidents/@{encodeURIComponent(body('create_incident')?['id'])}/artifacts` | — |
| create_incident | post | `/incidents` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

