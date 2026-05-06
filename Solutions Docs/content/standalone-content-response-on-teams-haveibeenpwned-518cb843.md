# Response on Teams - HaveIBeenPwned

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook checks if user accounts are breached, sends email to breached user account and closes incident based on action taken by SOC.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/HaveIBeenPwned/Playbooks/HaveIBeenPwned_ResponseOnTeams/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 3 |
| `office365` | Managed | 1 | 1 |
| `teams` | Managed | 1 | 0 |
| `HaveIBeenPwnedConnector` | Custom | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Update_incident*: method=`put`, path=`/Incidents`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`

**`office365`** (managedApi):
- *Send_an_email_of_breach_information_to_user*: method=`post`, path=`/v2/Mail`

**`HaveIBeenPwnedConnector`** (customApi):
- *Get_all_breaches_for_an_account*: method=`get`, path=`/api/v3/breachedaccount/@{encodeURIComponent(items('For_each_account')?['Name'])}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

