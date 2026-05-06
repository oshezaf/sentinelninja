# Logic Apps Custom Connector and Playbook templates - HaveIBeenPwned

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This is a consolidated json file for deploying Have I Been Pwned custom connector + 4 playbooks.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/HaveIBeenPwned/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 10 |
| `office365` | Managed | 1 | 1 |
| `teams` | Managed | 1 | 0 |
| `HaveIBeenPwnedConnector` | Custom | 1 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_URLs*: method=`post`, path=`/entities/url`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`

**`office365`** (managedApi):
- *Send_an_email_of_breach_information_to_user*: method=`post`, path=`/v2/Mail`

**`HaveIBeenPwnedConnector`** (customApi):
- *Get_breached_site_information*: method=`get`, path=`/api/v3/breaches`
- *Get_all_breaches_for_an_account*: method=`get`, path=`/api/v3/breachedaccount/@{encodeURIComponent(items('For_each_account')?['Name'])}`
- *Get_all_breaches_for_an_account*: method=`get`, path=`/api/v3/breachedaccount/@{encodeURIComponent(items('For_each_account')?['Name'])}`
- *Get_all_breaches_for_an_account*: method=`get`, path=`/api/v3/breachedaccount/@{encodeURIComponent(items('For_each_account')?['Name'])}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

