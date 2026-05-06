# Get-AD4IoTDeviceCVEs - Alert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

For each IoT device entity included in the alert, this playbook will get CVEs from the Azure Defender for IoT Sensor.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Get-AD4IoTDeviceCVEs/alert-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureblob` | Managed | 1 | 2 |
| `azuresentinel` | Managed | 1 | 3 |
| `keyvault` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureblob`** (managedApi):
- *Create_SAS_URI_by_path_(V2)*: method=`post`, path=`[concat('/v2/datasets/@{encodeURIComponent(', variables('singlequote'), variables('AzureStorageName'), variables('singlequote'),')}/CreateSharedLinkByPath')]`
- *Create_blob_(V2)*: method=`post`, path=`[concat('/v2/datasets/@{encodeURIComponent(encodeURIComponent(', variables('singlequote'), variables('AzureStorageName'), variables('singlequote'),'))}/files')]`

**`azuresentinel`** (managedApi):
- *Alert_-_Get_incident*: method=`get`, path=`/Incidents/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/alerts/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)_2*: method=`post`, path=`/Incidents/Comment`

**`keyvault`** (managedApi):
- *Get_secret*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(', variables('singlequote'), variables('KeyName'), variables('singlequote'), ')}/value')]`

**`http`** (builtin):
- *HTTP*: method=`GET`, uri=`@{variables('Server')}/api/v1/devices/@{items('For_each')?['IpAddress']?['Address']}/cves`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

