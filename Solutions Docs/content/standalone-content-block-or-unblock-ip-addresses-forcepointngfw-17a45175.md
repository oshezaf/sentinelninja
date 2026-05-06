# Block or Unblock IP addresses - ForcepointNGFW

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook checks if malicious IP address is blocked or unblocked by SMC firewall.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/ForcepointNGFW/Playbooks/ResponseOnTeamsBlockIP-ForcepointNGFW/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 4 |
| `forcepointsmcapiconnector` | Managed | 0 | 4 |
| `teams` | Managed | 1 | 2 |
| `ForcepointSMC-Connector` | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Update_incident_2*: method=`put`, path=`/Incidents`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`

**`forcepointsmcapiconnector`** (managedApi):
- *Add_IP_Address_into_IP_List*: method=`post`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list/@{encodeURIComponent(last(split(body('Get_IP_List_Element')?['result']?[0]?['href'],'/')))}/ip_address_list`
- *Get_IP_address*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list/@{encodeURIComponent(last(split(body('Get_IP_List_Element')?['result']?[0]?['href'],'/')))}/ip_address_list`
- *Get_IP_List_Element*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list`
- *Login*: method=`post`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/login`

**`teams`** (managedApi):
- *Post_adaptive_card_in_a_chat_or_channel_2*: method=`post`, path=`/v1.0/teams/conversation/adaptivecard/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Post_adaptive_card_in_a_chat_or_channel*: method=`post`, path=`/v1.0/teams/conversation/adaptivecard/poster/Flow bot/location/@{encodeURIComponent('Channel')}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

