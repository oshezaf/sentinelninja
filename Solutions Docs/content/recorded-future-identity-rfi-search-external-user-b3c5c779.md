# RFI-search-external-user

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook searches the Recorded Future Identity Intelligence Module for compromised external (customer) users. This playbook depends on: - RFI-add-EntraID-security-group-user - RFI-confirm-EntraID-risky-user - RFI-lookup-and-save-user Those playbooks need to be installed **manually** before installing current playbook.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Recorded Future Identity](../solutions/recorded-future-identity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future%20Identity/Playbooks/v3.0/RFI-search-external-user/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureloganalyticsdatacollector` | Managed | 1 | 1 |
| `azuremonitorlogs` | Managed | 1 | 1 |
| `recordedfutureidenti` | Managed | 1 | 1 |
| `workflow` | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureloganalyticsdatacollector`** (managedApi):
- *Send_Data_-_Save_new_Malware_log_exposures_into_Log_Analytics_Custom_Log*: method=`post`, path=`/api/logs`

**`azuremonitorlogs`** (managedApi):
- *Query_Log_Analytics_for_Malware_log_exposures*: method=`post`, path=`/queryData`

**`recordedfutureidenti`** (managedApi):
- *Credential_Search_-_Search_credential_data_for_one_or_more_domains*: method=`post`, path=`/credentials/search`

**`workflow`** (builtin):
- *RFI-add-EntraID-security-group-user*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Logic/workflows/', parameters('Playbook-Name-add-EntraID-security-group-user'))]`, triggerName=`manual`
- *RFI-confirm-EntraID-risky-user*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Logic/workflows/', parameters('Playbook-Name-confirm-EntraID-risky-user'))]`, triggerName=`manual`
- *RFI-lookup-and-save-user*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Logic/workflows/', parameters('Playbook-Name-lookup-and-save-user'))]`, triggerName=`manual`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Recorded Future Identity](../solutions/recorded-future-identity.md)

