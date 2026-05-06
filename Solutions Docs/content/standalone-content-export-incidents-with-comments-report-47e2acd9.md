# Export-Incidents-With-Comments-Report

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Bridewell Consulting - Robert Kitching

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Export-Incidents-With-Comments/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `office365` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`office365`** (managedApi):
- *Send_an_email_from_a_shared_mailbox_(V2)*: method=`post`, path=`/v2/SharedMailbox/Mail`

**`http`** (builtin):
- *Get_Incident_Comments*: method=`GET`, uri=`https://management.azure.com/subscriptions/@{variables('Settings')['subscriptionId']}/resourcegroups/@{variables('Settings')['resourceGroup']}/providers/Microsoft.OperationalInsights/workspaces/@{variables('Settings')['logWorkspace']}/providers/Microsoft.SecurityInsights/incidents/@{items('For_each')?['name']}/comments?api-version=2019-01-01-preview`
- *Get_incidents*: method=`GET`, uri=`@variables('requestUrl')`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

