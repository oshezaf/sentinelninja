# CrowdSecurity-Suspicious-Login-Detection

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This PlayBook / Logic App automatically create an alert when a successful login is performed from a suspicious or malicious IP.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | GitHub Only |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/CrowdSecurity-Suspicious-Login-Detection/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 0 | 5 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`
- *Create_incident*: method=`put`, path=`[concat('/Incidents/subscriptions/', subscription().subscriptionId, '/resourceGroups/',  resourceGroup().name, '/workspaces/', parameters('sentinelWorkspaceName'))]`
- *Add_alert_to_incident*: method=`post`, path=`/Incidents/Relation/Create`
- *Add_CTI_link_to_incident_as_comment*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`

**`http`** (builtin):
- *HTTP*: method=`GET`, uri=`https://cti.api.crowdsec.net/v2/smoke/@{items('For_each_IPs')?['Address']}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

