# Get-MDEInvestigationPackage-Entity-Trigger

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will call the collect invesitgation package in MDE based on Host entity. It will then loop until thats complete, once complete it will add a comment to the incident (in case we invoke this playbook from the incident context) and post a message in teams with the URL to download the package.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Get-MDEInvestigationPackage/entity-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 1 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 1 |
| [`wdatp`](../logic-apps/managed-wdatp.md) | Managed | 1 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |

#### [`teams`](../logic-apps/managed-teams.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Post_a_message_(V3) | post | `/v3/beta/teams/@{encodeURIComponent(parameters('TeamsId'))}/channels/@{encodeURIComponent(parameters('TeamsChannelId'))}/messages` | — |

#### [`wdatp`](../logic-apps/managed-wdatp.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Actions_-_Collect_investigation_package | post | `/api/machines/@{encodeURIComponent(body('Machines_-_Get_single_machine')?['id'])}/collectInvestigationPackage` | — |
| Actions_-_Get_investigation_package_download_URI | get | `/api/machineactions/@{encodeURIComponent(body('Actions_-_Collect_investigation_package')?['id'])}/getPackageUri` | — |
| Machines_-_Get_single_machine | get | `/api/machines/@{encodeURIComponent(triggerBody()?['Entity']?['properties']?['HostName'])}` | — |
| Actions_-_Get_single_machine_action | get | `/api/machineactions/@{encodeURIComponent(body('Actions_-_Collect_investigation_package')?['id'])}` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

