# Create-Incident-Logic-App

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will help to create an incident in Microsoft Sentinle when an email is sent to the configured email address.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Create%20Incidents%20with%20Email/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`microsoftsentinelconnection`](../logic-apps/managed-microsoftsentinelconnection.md) | Managed | 0 | 1 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 0 |
| [`office365connection`](../logic-apps/managed-office365connection.md) | Managed | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`microsoftsentinelconnection`](../logic-apps/managed-microsoftsentinelconnection.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Create_incident | put | `[concat('/Incidents/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/workspaces/',parameters('WorkspaceName'))]` | — |

#### [`office365connection`](../logic-apps/managed-office365connection.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| When_a_new_email_arrives | get | `/Mail/OnNewEmail` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

