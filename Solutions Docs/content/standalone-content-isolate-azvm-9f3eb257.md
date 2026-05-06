# Isolate-AzVM

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" width="75px" height="75px"> **Note:** Please refer to the following before installing the playbook: • Review the [README](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Isolate-AzVM/readme.md) • This playbook is intended to be run from a Microsoft Sentinel incident that has one or more Host entity mappings. The playbook will immediately execute against all Host entities in the associa

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Isolate-AzVM/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 3 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 14 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_Hosts | post | `/entities/host` | — |
| Update_IR_-_success | post | `/Incidents/Comment` | — |
| Update_IR_-_fail | post | `/Incidents/Comment` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_-_Get_Subs | GET | `@{parameters('ResourceMgrURL')}/subscriptions` | — |
| HTTP_-_Query_ARG | POST | `@{parameters('ResourceMgrURL')}/providers/Microsoft.ResourceGraph/resources` | — |
| HTTP_-_Get_VM | GET | `@{parameters('ResourceMgrURL')}@{variables('vmid')}` | — |
| HTTP_-_Get_NIC | GET | `@{parameters('ResourceMgrURL')}@{body('HTTP_-_Get_VM')?['properties']?['networkProfile']?['networkInterfaces'][0]?['id']}` | — |
| HTTP_-_Create_NSG | PUT | `@{parameters('ResourceMgrURL')}/subscriptions/@{split(body('Parse_JSON_-_NIC')?['id'], '/')[add(length(split(body('Parse_JSON_-_NIC')?['id'], '/')), -7)]}/resourceGroups/@{split(body('Parse_JSON_-_NIC')?['id'], '/')[add(length(split(body('Parse_JSON_-_NIC')?['id'], '/')), -5)]}/providers/Microsoft.Network/networkSecurityGroups/@{variables('NSG')}` | — |
| HTTP_-_Get_NSG | GET | `@{parameters('ResourceMgrURL')}/subscriptions/@{split(body('Parse_JSON_-_NIC')?['id'], '/')[add(length(split(body('Parse_JSON_-_NIC')?['id'], '/')), -7)]}/resourceGroups/@{split(body('Parse_JSON_-_NIC')?['id'], '/')[add(length(split(body('Parse_JSON_-_NIC')?['id'], '/')), -5)]}/providers/Microsoft.Network/networkSecurityGroups/@{variables('NSG')}` | — |
| HTTP_-_Assign_NSG | PUT | `@{parameters('ResourceMgrURL')}@{body('HTTP_-_Get_VM')?['properties']?['networkProfile']?['networkInterfaces'][0]?['id']}` | — |
| HTTP_-_Test_NIC_NSG | GET | `@{parameters('ResourceMgrURL')}@{body('HTTP_-_Get_VM')?['properties']?['networkProfile']?['networkInterfaces'][0]?['id']}` | — |
| HTTP_-_Test_NIC_State | GET | `@{parameters('ResourceMgrURL')}@{body('HTTP_-_Get_VM')?['properties']?['networkProfile']?['networkInterfaces'][0]?['id']}` | — |
| HTTP_-_Shutdown_VM | POST | `@{parameters('ResourceMgrURL')}@{variables('vmid')}/deallocate` | — |
| HTTP_-_Snap_DataDisk | PUT | `@{parameters('ResourceMgrURL')}/subscriptions/@{parameters('SnapshotSubscriptionId')}/resourceGroups/@{parameters('SnapshotRG')}/providers/Microsoft.Compute/snapshots/@{variables('VMName')}_LUN@{variables('LUN')}_@{variables('DTG')}` | — |
| HTTP_-_Test_Data_Snap | GET | `@{parameters('ResourceMgrURL')}/subscriptions/@{parameters('SnapshotSubscriptionId')}/resourceGroups/@{parameters('SnapshotRG')}/providers/Microsoft.Compute/snapshots/@{variables('VMName')}_LUN@{variables('LUN')}_@{variables('DTG')}` | — |
| HTTP_-_Test_OS_Snap | GET | `@{parameters('ResourceMgrURL')}/subscriptions/@{parameters('SnapshotSubscriptionId')}/resourceGroups/@{parameters('SnapshotRG')}/providers/Microsoft.Compute/snapshots/@{variables('VMName')}_DiskOS_@{variables('DTG')}` | — |
| HTTP_-_Snapshot_OS | PUT | `@{parameters('ResourceMgrURL')}/subscriptions/@{parameters('SnapshotSubscriptionId')}/resourceGroups/@{parameters('SnapshotRG')}/providers/Microsoft.Compute/snapshots/@{variables('VMName')}_DiskOS_@{variables('DTG')}` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

