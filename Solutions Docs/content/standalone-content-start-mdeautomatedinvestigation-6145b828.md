# Start-MDEAutomatedInvestigation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will call the start automated investigation in MDE. It will then add a comment to the incident and post a message in Teams.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Start-MDEAutomatedInvestigation/incident-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 2 |
| `teams` | Managed | 1 | 1 |
| `wdatp` | Managed | 1 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_Hosts*: method=`post`, path=`/entities/host`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`

**`teams`** (managedApi):
- *Post_a_message_(V3)*: method=`post`, path=`[concat('/v3/beta/teams/@{encodeURIComponent(', variables('SingleQuote'), parameters('TeamsId'), variables('SingleQuote'), ')}/channels/@{encodeURIComponent(', variables('SingleQuote'), parameters('TeamsChannelId'), variables('SingleQuote'),')}/messages')]`

**`wdatp`** (managedApi):
- *Actions_-_Start_automated_investigation_on_a_machine*: method=`post`, path=`/api/machines/@{encodeURIComponent(body('Machines_-_Get_single_machine')?['id'])}/startInvestigation`
- *Machines_-_Get_single_machine*: method=`get`, path=`/api/machines/@{encodeURIComponent(items('For_each')?['HostName'])}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

