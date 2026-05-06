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
| `azuresentinel` | Managed | 1 | 3 |
| `http` | Built-in | 0 | 14 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_Hosts*: method=`post`, path=`/entities/host`
- *Update_IR_-_success*: method=`post`, path=`/Incidents/Comment`
- *Update_IR_-_fail*: method=`post`, path=`/Incidents/Comment`

**`http`** (builtin):
- *HTTP_-_Get_Subs*: method=`GET`, uri=`@{parameters('ResourceMgrURL')}/subscriptions`
- *HTTP_-_Query_ARG*: method=`POST`, uri=`@{parameters('ResourceMgrURL')}/providers/Microsoft.ResourceGraph/resources`
- *HTTP_-_Get_VM*: method=`GET`, uri=`@{parameters('ResourceMgrURL')}@{variables('vmid')}`
- *HTTP_-_Get_NIC*: method=`GET`, uri=`@{parameters('ResourceMgrURL')}@{body('HTTP_-_Get_VM')?['properties']?['networkProfile']?['networkInterfaces'][0]?['id']}`
- *HTTP_-_Create_NSG*: method=`PUT`, uri=`@{parameters('ResourceMgrURL')}/subscriptions/@{split(body('Parse_JSON_-_NIC')?['id'], '/')[add(length(split(body('Parse_JSON_-_NIC')?['id'], '/')), -7)]}/resourceGroups/@{split(body('Parse_JSON_-_NIC')?['id'], '/')[add(length(split(body('Parse_JSON_-_NIC')?['id'], '/')), -5)]}/providers/Microsoft.Network/networkSecurityGroups/@{variables('NSG')}`
- *HTTP_-_Get_NSG*: method=`GET`, uri=`@{parameters('ResourceMgrURL')}/subscriptions/@{split(body('Parse_JSON_-_NIC')?['id'], '/')[add(length(split(body('Parse_JSON_-_NIC')?['id'], '/')), -7)]}/resourceGroups/@{split(body('Parse_JSON_-_NIC')?['id'], '/')[add(length(split(body('Parse_JSON_-_NIC')?['id'], '/')), -5)]}/providers/Microsoft.Network/networkSecurityGroups/@{variables('NSG')}`
- *HTTP_-_Assign_NSG*: method=`PUT`, uri=`@{parameters('ResourceMgrURL')}@{body('HTTP_-_Get_VM')?['properties']?['networkProfile']?['networkInterfaces'][0]?['id']}`
- *HTTP_-_Test_NIC_NSG*: method=`GET`, uri=`@{parameters('ResourceMgrURL')}@{body('HTTP_-_Get_VM')?['properties']?['networkProfile']?['networkInterfaces'][0]?['id']}`
- *HTTP_-_Test_NIC_State*: method=`GET`, uri=`@{parameters('ResourceMgrURL')}@{body('HTTP_-_Get_VM')?['properties']?['networkProfile']?['networkInterfaces'][0]?['id']}`
- *HTTP_-_Shutdown_VM*: method=`POST`, uri=`@{parameters('ResourceMgrURL')}@{variables('vmid')}/deallocate`
- *HTTP_-_Snap_DataDisk*: method=`PUT`, uri=`@{parameters('ResourceMgrURL')}/subscriptions/@{parameters('SnapshotSubscriptionId')}/resourceGroups/@{parameters('SnapshotRG')}/providers/Microsoft.Compute/snapshots/@{variables('VMName')}_LUN@{variables('LUN')}_@{variables('DTG')}`
- *HTTP_-_Test_Data_Snap*: method=`GET`, uri=`@{parameters('ResourceMgrURL')}/subscriptions/@{parameters('SnapshotSubscriptionId')}/resourceGroups/@{parameters('SnapshotRG')}/providers/Microsoft.Compute/snapshots/@{variables('VMName')}_LUN@{variables('LUN')}_@{variables('DTG')}`
- *HTTP_-_Test_OS_Snap*: method=`GET`, uri=`@{parameters('ResourceMgrURL')}/subscriptions/@{parameters('SnapshotSubscriptionId')}/resourceGroups/@{parameters('SnapshotRG')}/providers/Microsoft.Compute/snapshots/@{variables('VMName')}_DiskOS_@{variables('DTG')}`
- *HTTP_-_Snapshot_OS*: method=`PUT`, uri=`@{parameters('ResourceMgrURL')}/subscriptions/@{parameters('SnapshotSubscriptionId')}/resourceGroups/@{parameters('SnapshotRG')}/providers/Microsoft.Compute/snapshots/@{variables('VMName')}_DiskOS_@{variables('DTG')}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

