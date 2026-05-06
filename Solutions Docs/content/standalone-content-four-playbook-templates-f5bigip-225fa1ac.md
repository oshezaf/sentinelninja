# Four Playbook templates - F5BigIP

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This is a consolidated json file for deploying 4 playbooks.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/F5BigIP/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 8 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 7 |
| [`workflow`](../logic-apps/builtin-workflow.md) | Built-in | 0 | 5 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Update_incident | put | `/Incidents` | — |
| Entities_-_Get_IPs | post | `/entities/ip` | — |
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Update_incident | put | `/Incidents` | — |
| Entities_-_Get_URLs | post | `/entities/url` | — |
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Entities_-_Get_IPs | post | `/entities/ip` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_-_Get_Access_Token | POST | `@{parameters('F5BigIPHost')}/mgmt/shared/authn/login` | — |
| HTTP-Add_IP_to_Address_List | PATCH | `@{body('F5BigIP_Base_call')?['F5BigIPHost']}/mgmt/tm/security/firewall/address-list/@{parameters('AddressListName')}` | — |
| HTTP-Get_specific_Address_list | GET | `@{body('F5BigIP_Base')?['F5BigIPHost']}/mgmt/tm/security/firewall/address-list/@{parameters('AddressListName')}` | — |
| HTTP-Add_URL_to_URL_Block_List_category | PATCH | `@{body('F5BigIP_Base_call')?['F5BigIPHost']}/mgmt/tm/sys/url-db/url-category/@{parameters('URLBlocklistcategoryName')}` | — |
| HTTP-Get_specific_URL_Block_list_category | GET | `@{body('F5BigIP_Base')?['F5BigIPHost']}/mgmt/tm/sys/url-db/url-category/@{parameters('URLBlocklistcategoryName')}` | — |
| HTTP-Get_Global_Firewall_Policy_Rules | GET | `@{body('F5BigIP_Base')?['F5BigIPHost']}/mgmt/tm/security/firewall/policy/~Common~global_fwpolicy/rules/` | — |
| HTTP-Get_specific_Address_list | GET | `@{body('F5BigIP_Base')?['F5BigIPHost']}/mgmt/tm/security/firewall/address-list/@{parameters('AddressListName')}` | — |

#### [`workflow`](../logic-apps/builtin-workflow.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| F5BigIP_Base_call | — | — | workflowId=`[variables('F5BigIP_Base_id')]`<br>triggerName=`manual` |
| F5BigIP_Base | — | — | workflowId=`[variables('F5BigIP_Base_id')]`<br>triggerName=`manual` |
| F5BigIP_Base_call | — | — | workflowId=`[variables('F5BigIP_Base_id')]`<br>triggerName=`manual` |
| F5BigIP_Base | — | — | workflowId=`[variables('F5BigIP_Base_id')]`<br>triggerName=`manual` |
| F5BigIP_Base | — | — | workflowId=`[variables('F5BigIP_Base_id')]`<br>triggerName=`manual` |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

