# Get-MDEInvestigationPackage-Entity-Trigger

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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
| `azuresentinel` | Managed | 1 | 1 |
| `teams` | Managed | 1 | 1 |
| `wdatp` | Managed | 1 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`

**`teams`** (managedApi):
- *Post_a_message_(V3)*: method=`post`, path=`/v3/beta/teams/@{encodeURIComponent(parameters('TeamsId'))}/channels/@{encodeURIComponent(parameters('TeamsChannelId'))}/messages`

**`wdatp`** (managedApi):
- *Actions_-_Collect_investigation_package*: method=`post`, path=`/api/machines/@{encodeURIComponent(body('Machines_-_Get_single_machine')?['id'])}/collectInvestigationPackage`
- *Actions_-_Get_investigation_package_download_URI*: method=`get`, path=`/api/machineactions/@{encodeURIComponent(body('Actions_-_Collect_investigation_package')?['id'])}/getPackageUri`
- *Machines_-_Get_single_machine*: method=`get`, path=`/api/machines/@{encodeURIComponent(triggerBody()?['Entity']?['properties']?['HostName'])}`
- *Actions_-_Get_single_machine_action*: method=`get`, path=`/api/machineactions/@{encodeURIComponent(body('Actions_-_Collect_investigation_package')?['id'])}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

