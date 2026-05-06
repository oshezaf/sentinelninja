# Isolate-AzureVMtoNSG

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Nathan Swift

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Isolate-AzureVMtoNSG/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 3 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 0 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 7 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Alert_-_Get_hosts | post | `/entities/host` | — |
| Alert_-_Get_incident | get | `/Cases/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}` | — |
| Add_comment_to_incident_(V2) | put | `/Comment/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/@{encodeURIComponent('Alert')}/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_2 | POST | `https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2018-09-01-preview` | — |
| HTTP_3 | GET | `https://management.azure.com/@{variables('vmid')}?api-version=2019-07-01` | — |
| HTTP_4 | GET | `https://management.azure.com/@{body('HTTP_3')?['properties']?['networkProfile']?['networkInterfaces'][0]?['id']}?api-version=2019-07-01` | — |
| HTTP_5 | PUT | `https://management.azure.com/subscriptions/@{split(body('Parse_JSON')?['id'], '/')[add(length(split(body('Parse_JSON')?['id'], '/')), -7)]}/resourceGroups/@{split(body('Parse_JSON')?['id'], '/')[add(length(split(body('Parse_JSON')?['id'], '/')), -5)]}/providers/Microsoft.Network/networkSecurityGroups/@{guid()}?api-version=2019-11-01` | — |
| HTTP_6 | PUT | `https://management.azure.com/@{body('HTTP_3')?['properties']?['networkProfile']?['networkInterfaces'][0]?['id']}?api-version=2019-11-01` | — |
| HTTP_7 | POST | `https://management.azure.com/@{variables('vmid')}/restart?api-version=2019-07-01` | — |
| HTTP | GET | `https://management.azure.com/subscriptions?api-version=2016-06-01` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

