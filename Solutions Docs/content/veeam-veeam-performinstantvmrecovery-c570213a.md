# Veeam-PerformInstantVMRecovery

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This Microsoft Sentinel playbook performs instant VM recovery on the vm specified by MachineDisplayName custom field of Microsoft Sentinel's incident custom fields. The playbook automatically finds the latest clean restore point, initiates the instant recovery monitor for its state and indicates results as incident comments.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Playbooks/Veeam-PerformInstantVMRecovery/PerformInstantVMRecovery.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 3 |
| `function` | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`

**`function`** (builtin):
- *GetLastCleanRestorePointForVMAsync*: functionId=`[concat(variables('functionAppId'), '/functions/GetCleanRestorePointsAsync')]`
- *StartInstantVMRecoveryAsync*: functionId=`[concat(variables('functionAppId'), '/functions/StartInstantVMRecoveryAsync')]`
- *GetSession_*: functionId=`[concat(variables('functionAppId'), '/functions/GetSessionAsync')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Veeam](../solutions/veeam.md)

