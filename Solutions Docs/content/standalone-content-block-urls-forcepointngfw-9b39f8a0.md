# Block URLs - ForcepointNGFW

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook checks if malicious URL is blocked or unblocked by SMC firewall.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/ForcepointNGFW/Playbooks/BlockURL-ForcepointNGFW/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 3 |
| [`forcepointsmcapiconnector`](../logic-apps/managed-forcepointsmcapiconnector.md) | Managed | 0 | 4 |
| [`ForcepointSMC-Connector`](../logic-apps/custom-forcepointsmc-connector.md) | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Update_incident | put | `/Incidents` | — |
| Entities_-_Get_URLs | post | `/entities/url` | — |

#### [`forcepointsmcapiconnector`](../logic-apps/managed-forcepointsmcapiconnector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_URL_address | get | `/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/url_list_application/@{encodeURIComponent(last(split(body('Get_URL_List')?['result']?[0]?['href'],'/')))}` | — |
| Upload_URL_to_URL_list | put | `/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/url_list_application/@{encodeURIComponent(last(split(body('Get_URL_List')?['result']?[0]?['href'],'/')))}` | — |
| Get_URL_List | get | `/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/url_list_application` | — |
| Login | post | `/@{encodeURIComponent(variables('SMC Api Version Number'))}/login` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

