# Enrichment IP - Forcepoint

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook checks if malicious IP address is blocked or unblocked by SMC firewall.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/ForcepointNGFW/Playbooks/Enrichment-IP-ForcepointNGFW/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 2 |
| [`forcepointsmcapiconnector`](../logic-apps/managed-forcepointsmcapiconnector.md) | Managed | 0 | 5 |
| [`ForcepointSMC-Connector`](../logic-apps/custom-forcepointsmc-connector.md) | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Entities_-_Get_IPs | post | `/entities/ip` | — |

#### [`forcepointsmcapiconnector`](../logic-apps/managed-forcepointsmcapiconnector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Host | get | `/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/host` | — |
| Get_IP_address | get | `/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list/@{encodeURIComponent(last(split(items('For_each_IP_list')?['href'],'/')))}/ip_address_list` | — |
| Find_IP_or_URL_in_SMC | get | `/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements` | — |
| Get_IP_List_Element | get | `/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list` | — |
| Login | post | `/@{encodeURIComponent(variables('SMC Api Version Number'))}/login` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

