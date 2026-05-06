# AS-Delete-App-Registration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is intended to be run from a Microsoft Sentinel incident. If any app registration entities are found (i.e., any entities where kind == CloudApplication), they will be deleted. This playbook matches by name, since a unique app registration ID cannot currently be pulled into the entity list, so if there are multiple app registrations exactly matching the name(s) of the CloudApplication entities, all will be deleted.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-Delete-App-Registration/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 1 |
| `keyvault` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`

**`keyvault`** (managedApi):
- *Get_Secret*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('SecretName'), ''')}/value')]`

**`http`** (builtin):
- *HTTP_-_Delete_App_Registration*: method=`DELETE`, uri=`https://graph.microsoft.com/v1.0/applications/@{items('For_each_-_App_Registration')?['id']}`
- *HTTP_-_Get_App_Registrations*: method=`GET`, uri=`https://graph.microsoft.com/v1.0/applications?$select=id,displayName`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

