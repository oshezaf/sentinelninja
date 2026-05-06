# Block IP addresses by Username - ForcepointNGFW

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This is forcepoint FUID playbook for blocking IP addresses by username ForcepointNGFW.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/ForcepointNGFW/Playbooks/BlockIPbyUsername-ForcepointNGFW/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 3 |
| [`forcepointsmcapiconnector`](../logic-apps/managed-forcepointsmcapiconnector.md) | Managed | 0 | 4 |
| [`ForcepointFUIDConnector`](../logic-apps/custom-forcepointfuidconnector.md) | Custom | 1 | 1 |
| [`ForcepointSMC-Connector`](../logic-apps/custom-forcepointsmc-connector.md) | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Update_incident | put | `/Incidents` | — |
| Entities_-_Get_Accounts | post | `/entities/account` | — |

#### [`forcepointsmcapiconnector`](../logic-apps/managed-forcepointsmcapiconnector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_IP_Address_into_IP_List | post | `/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list/@{encodeURIComponent(last(split(body('Get_IP_List_Element')?['result']?[0]?['href'],'/')))}/ip_address_list` | — |
| Get_IP_address | get | `/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list/@{encodeURIComponent(last(split(body('Get_IP_List_Element')?['result']?[0]?['href'],'/')))}/ip_address_list` | — |
| Get_IP_List_Element | get | `/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list` | — |
| Login | post | `/@{encodeURIComponent(variables('SMC Api Version Number'))}/login` | — |

#### [`ForcepointFUIDConnector`](../logic-apps/custom-forcepointfuidconnector.md) (Custom)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_IP_Address_by_Domain_and_Username_-_Forcepoint_FUID | get | `/api/uid/@{encodeURIComponent(variables('FUID Version'))}/user/ntlm-identity/@{encodeURIComponent(split(last(split(items('Appending_Usernames')?['AadUserId'],'@')),'.')[0],outputs('Seperator'),split(items('Appending_Usernames')?['AadUserId'],'@')[0])}` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

