# BlockIP-Azure Firewall New Rule - Entity trigger

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook uses the Azure Firewall connector to add IP Address to the Deny Network Rules collection based on the Microsoft Sentinel Incident

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Azure Firewall](../solutions/azure-firewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Playbooks/AzureFirewall-BlockIP-addNewRule/entity-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 3 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 2 |
| [`virustotal`](../logic-apps/managed-virustotal.md) | Managed | 1 | 1 |
| [`AzureFirewallConnector`](../logic-apps/custom-azurefirewallconnector.md) | Custom | 1 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_with_the_endpoint_info_and_action_taken | post | `/Incidents/Comment` | — |
| Update_incident | put | `/Incidents` | — |
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |

#### [`teams`](../logic-apps/managed-teams.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Post_action_taken_in_channel | post | `/beta/teams/conversation/message/poster/@{encodeURIComponent('User')}/location/@{encodeURIComponent('Channel')}` | — |
| Post_message_in_a_chat_or_channel | post | `/beta/teams/conversation/message/poster/@{encodeURIComponent('User')}/location/@{encodeURIComponent('Channel')}` | — |

#### [`virustotal`](../logic-apps/managed-virustotal.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_an_IP_report | get | `/api/v3/ip_addresses/connectorV2/@{encodeURIComponent(triggerBody()?['Entity']?['properties']?['Address'])}` | — |

#### [`AzureFirewallConnector`](../logic-apps/custom-azurefirewallconnector.md) (Custom)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Creates_or_updates_the_specified_Azure_Firewall | put | `/subscriptions/@{encodeURIComponent(parameters('SubscriptionID'))}/resourceGroups/@{encodeURIComponent(outputs('Resource_Group_name'))}/providers/Microsoft.Network/azureFirewalls/@{encodeURIComponent(outputs('Firewall_name'))}` | — |
| Gets_the_specified_Azure_Firewall | get | `/subscriptions/@{encodeURIComponent(parameters('SubscriptionID'))}/resourceGroups/@{encodeURIComponent(outputs('Resource_Group_name'))}/providers/Microsoft.Network/azureFirewalls/@{encodeURIComponent(outputs('Firewall_name'))}` | — |
| Gets_all_the_Azure_Firewalls_in_a_subscription | get | `/subscriptions/@{encodeURIComponent(parameters('SubscriptionID'))}/providers/Microsoft.Network/azureFirewalls` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Azure Firewall](../solutions/azure-firewall.md)

