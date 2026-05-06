# Security workflow: alert verification with workload owners

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook can reduce burden on the SOC by offloading alert verification to IT admins for specific analytics rules. It is triggered when a Microsoft Sentinel alert is generated, creates a message (and associated notification email) in the workload owner's Microsoft Teams channel containing details of the alert. If the workload owner responds that the activity is not authorized, the alert will be converted to an incident in Microsoft Sentinel for the SOC to handle.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Playbooks/MSBizApps-Incident-From-Alert-Teams/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`azuresentinel_1`](../logic-apps/managed-azuresentinel-1.md) | Managed | 0 | 2 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 3 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel_1`](../logic-apps/managed-azuresentinel-1.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_alert_to_incident | post | `/Incidents/Relation/Create` | — |
| Create_incident | put | `/Incidents/subscriptions/@{triggerBody()?['workspaceInfo']?['SubscriptionId']}/resourceGroups/@{triggerBody()?['workspaceInfo']?['ResourceGroupName']}/workspaces/@{triggerBody()?['workspaceInfo']?['WorkspaceName']}` | — |

#### [`office365`](../logic-apps/managed-office365.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_an_email_escalation_due_to_timeout | post | `/v2/SharedMailbox/Mail` | — |
| Send_an_email_from_a_shared_mailbox_(V2) | post | `/v2/SharedMailbox/Mail` | — |
| Send_an_email_notification_of_failure | post | `/v2/SharedMailbox/Mail` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)

