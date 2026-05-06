# AS-IAM-Master-Playbook

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is intended to be run from a Microsoft Sentinel incident with account and/or IP entities. It will take the IP and account entities and run four separate playbooks to indicate compromise and revoke access to Okta and Microsoft Entra ID.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-IAM-Master-Playbook/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 2 |
| `workflow` | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`

**`workflow`** (builtin):
- *AS-IP-Blocklist-HTTP*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Logic/workflows/', parameters('FirstNestedPlaybook'))]`, triggerName=`manual`
- *AS-Microsoft-Entra-ID-Revoke-User-Sessions-HTTP*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Logic/workflows/', parameters('SecondNestedPlaybook'))]`, triggerName=`manual`
- *AS-Okta-NetworkZoneUpdate-HTTP*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Logic/workflows/', parameters('ThirdNestedPlaybook'))]`, triggerName=`manual`
- *AS-Okta-Terminate-User-Sessions-HTTP*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Logic/workflows/', parameters('FourthNestedPlaybook'))]`, triggerName=`manual`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

