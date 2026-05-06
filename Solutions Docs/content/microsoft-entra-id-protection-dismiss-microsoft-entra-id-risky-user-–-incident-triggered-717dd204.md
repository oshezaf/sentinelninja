# Dismiss Microsoft Entra ID Risky User – Incident Triggered

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will dismiss the Risky User property in Microsoft Entra ID using Microsoft Entra ID Connectors.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID%20Protection/Playbooks/Dismiss-EntraIDRiskyUser/Dismiss-EntraIDRisky-Userincident-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuread` | Managed | 1 | 1 |
| `azureadip` | Managed | 1 | 1 |
| `azuresentinel` | Managed | 1 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuread`** (managedApi):
- *Get_user*: method=`get`, path=`/v1.0/users/@{encodeURIComponent(concat(items('For_each')?['Name'], '@', items('For_each')?['UPNSuffix']))}`

**`azureadip`** (managedApi):
- *Dismiss_a_risky_user*: method=`post`, path=`/beta/riskyUsers/dismiss`

**`azuresentinel`** (managedApi):
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md)

