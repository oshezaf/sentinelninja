# AS-Add-Machine-Logon-Users-to-Incident

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is intended to be run from a Microsoft Sentinel incident. It will match the hosts from a Microsoft Sentinel incident with Microsoft Defender machines and add the logon users for each machine as a comment on the Microsoft Sentinel incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-Add-Machine-Logon-Users-to-Incident/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 2 |
| `keyvault` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_Hosts*: method=`post`, path=`/entities/host`

**`keyvault`** (managedApi):
- *Get_Client_Secret*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('KeyVaultSecretName'), ''')}/value')]`

**`http`** (builtin):
- *HTTP_-_Get_machine_logon_users*: method=`GET`, uri=`https://api.securitycenter.microsoft.com/api/machines/@{items('For_each_-_Host')?['additionalData']?['MdatpDeviceId']}/logonusers`
- *HTTP_-_Authenticate*: method=`POST`, uri=`[concat('https://login.microsoftonline.com/', subscription().tenantId, '/oauth2/v2.0/token')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

