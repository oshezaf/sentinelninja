# Block IP - Azure Firewall IP groups - Entity trigger

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook interacts with relevant stackholders, such incident response team, to approve blocking/allowing IPs in Azure Firewall. Playbook also involves TI statistics from VirusTotal. It allows to make changes on IP groups, which are attached to rules, instead of make direct changes on Azure Firewall. It also allows using the same IP group for multiple firewalls. [Learn more about IP Groups in Azure Firewall](https://docs.microsoft.com/azure/firewall/ip-groups)

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Azure Firewall](../solutions/azure-firewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Playbooks/AzureFirewall-BlockIP-addToIPGroup/entity-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 3 |
| `teams` | Managed | 1 | 2 |
| `virustotal` | Managed | 1 | 1 |
| `AzureFirewallConnector` | Custom | 1 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_with_the_Virus_Total_report_and_the_action_taken_*: method=`post`, path=`/Incidents/Comment`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`

**`teams`** (managedApi):
- *Post_message_in_a_chat_or_channel*: method=`post`, path=`/beta/teams/conversation/message/poster/@{encodeURIComponent('User')}/location/@{encodeURIComponent('Channel')}`
- *Post_deny_message_in_a_chat_or_channel*: method=`post`, path=`/beta/teams/conversation/message/poster/@{encodeURIComponent('User')}/location/@{encodeURIComponent('Channel')}`

**`virustotal`** (managedApi):
- *Get_an_IP_report*: method=`get`, path=`/api/v3/ip_addresses/connectorV2/@{encodeURIComponent(triggerBody()?['Entity']?['properties']?['Address'])}`

**`AzureFirewallConnector`** (customApi):
- *Creates_or_updates_an_ipGroups_in_a_specified_resource_group*: method=`put`, path=`/subscriptions/@{encodeURIComponent(parameters('SubscriptionID'))}/resourceGroups/@{encodeURIComponent(parameters('ResourceGroupName'))}/providers/Microsoft.Network/ipGroups/@{encodeURIComponent(body('Post_an_Adaptive_Card_to_a_Teams_channel_and_wait_for_a_response')?['data']?['IPGroupSelectedVal'])}`
- *Gets_the_specified_ipGroups*: method=`get`, path=`/subscriptions/@{encodeURIComponent(parameters('SubscriptionID'))}/resourceGroups/@{encodeURIComponent(parameters('ResourceGroupName'))}/providers/Microsoft.Network/ipGroups/@{encodeURIComponent(body('Post_an_Adaptive_Card_to_a_Teams_channel_and_wait_for_a_response')?['data']?['IPGroupSelectedVal'])}`
- *Gets_all_IpGroups_in_a_resource_group*: method=`get`, path=`/subscriptions/@{encodeURIComponent(parameters('SubscriptionID'))}/resourceGroups/@{encodeURIComponent(parameters('ResourceGroupName'))}/providers/Microsoft.Network/ipGroups`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Azure Firewall](../solutions/azure-firewall.md)

