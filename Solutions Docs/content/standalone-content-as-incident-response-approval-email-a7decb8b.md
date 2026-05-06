# AS-Incident-Response-Approval-Email

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is intended to be run from a Microsoft Sentinel incident. It will facilitate incident response by sending an approval email to the manager(s) of the user(s) associated with the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-Incident-Response-Approval-Email/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 3 |
| `keyvault` | Managed | 1 | 1 |
| `office365` | Managed | 1 | 0 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`
- *Update_incident_-_Close_as_benign_positive*: method=`put`, path=`/Incidents`
- *Add_comment_to_incident_(V3)_-_Indicate_true_positive*: method=`post`, path=`/Incidents/Comment`

**`keyvault`** (managedApi):
- *Get_Secret*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('SecretName'), ''')}/value')]`

**`http`** (builtin):
- *HTTP_-_Get_User_Manager*: method=`GET`, uri=`https://graph.microsoft.com/v1.0/users/@{items('For_each_-_User_account')?['AadUserId']}/manager`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

