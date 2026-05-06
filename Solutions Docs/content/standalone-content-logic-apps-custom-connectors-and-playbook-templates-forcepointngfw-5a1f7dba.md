# Logic Apps Custom Connectors and Playbook templates - ForcepointNGFW

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This is a consolidated json file for deploying ForcepointSMC custom connector + ForcepointFUID custom connector + 6 playbooks.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/ForcepointNGFW/ConsolidatedTemplate.json) |

## Logic App Connectors

This playbook uses **5** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 17 |
| `forcepointsmcapiconnector` | Managed | 0 | 25 |
| `teams` | Managed | 1 | 2 |
| `ForcepointFUIDConnector` | Custom | 1 | 1 |
| `ForcepointSMC-Connector` | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Update_incident_2*: method=`put`, path=`/Incidents`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Entities_-_Get_URLs*: method=`post`, path=`/entities/url`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_URLs*: method=`post`, path=`/entities/url`

**`forcepointsmcapiconnector`** (managedApi):
- *Add_IP_Address_into_IP_List*: method=`post`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list/@{encodeURIComponent(last(split(body('Get_IP_List_Element')?['result']?[0]?['href'],'/')))}/ip_address_list`
- *Get_IP_address*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list/@{encodeURIComponent(last(split(body('Get_IP_List_Element')?['result']?[0]?['href'],'/')))}/ip_address_list`
- *Get_IP_List_Element*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list`
- *Login*: method=`post`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/login`
- *Add_IP_Address_into_IP_List*: method=`post`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list/@{encodeURIComponent(last(split(body('Get_IP_List_Element')?['result']?[0]?['href'],'/')))}/ip_address_list`
- *Get_IP_address*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list/@{encodeURIComponent(last(split(body('Get_IP_List_Element')?['result']?[0]?['href'],'/')))}/ip_address_list`
- *Get_IP_List_Element*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list`
- *Login*: method=`post`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/login`
- *Add_IP_Address_into_IP_List*: method=`post`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list/@{encodeURIComponent(last(split(body('Get_IP_List_Element')?['result']?[0]?['href'],'/')))}/ip_address_list`
- *Get_IP_address*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list/@{encodeURIComponent(last(split(body('Get_IP_List_Element')?['result']?[0]?['href'],'/')))}/ip_address_list`
- *Get_IP_List_Element*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list`
- *Login*: method=`post`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/login`
- *Get_URL_address*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/url_list_application/@{encodeURIComponent(last(split(body('Get_URL_List')?['result']?[0]?['href'],'/')))}`
- *Upload_URL_to_URL_list*: method=`put`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/url_list_application/@{encodeURIComponent(last(split(body('Get_URL_List')?['result']?[0]?['href'],'/')))}`
- *Get_URL_List*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/url_list_application`
- *Login*: method=`post`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/login`
- *Get_Host*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/host`
- *Get_IP_address*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list/@{encodeURIComponent(last(split(items('For_each_IP_list')?['href'],'/')))}/ip_address_list`
- *Find_IP_or_URL_in_SMC*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements`
- *Get_IP_List_Element*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/ip_list`
- *Login*: method=`post`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/login`
- *Get_URLs_from_URL_list*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/url_list_application/@{encodeURIComponent(last(split(items('For_each_URL_list')?['href'],'/')))}`
- *Find_IP_or_URL_in_SMC*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements`
- *Get_URL_List*: method=`get`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/elements/url_list_application`
- *Login*: method=`post`, path=`/@{encodeURIComponent(variables('SMC Api Version Number'))}/login`

**`teams`** (managedApi):
- *Post_adaptive_card_in_a_chat_or_channel_2*: method=`post`, path=`/v1.0/teams/conversation/adaptivecard/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Post_adaptive_card_in_a_chat_or_channel*: method=`post`, path=`/v1.0/teams/conversation/adaptivecard/poster/Flow bot/location/@{encodeURIComponent('Channel')}`

**`ForcepointFUIDConnector`** (customApi):
- *Get_IP_Address_by_Domain_and_Username_-_Forcepoint_FUID*: method=`get`, path=`/api/uid/@{encodeURIComponent(variables('FUID Version'))}/user/ntlm-identity/@{encodeURIComponent(split(last(split(items('Appending_Usernames')?['AadUserId'],'@')),'.')[0],outputs('Seperator'),split(items('Appending_Usernames')?['AadUserId'],'@')[0])}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

