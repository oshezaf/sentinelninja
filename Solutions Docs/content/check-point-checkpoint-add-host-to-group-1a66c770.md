# checkpoint-add-host-to-group

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will create Check Point objects and add to block group

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Check Point](../solutions/check-point.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point/Playbooks/add-host-to-group/deployCPplaybook.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 1 |
| `CheckPointMgmtConnector` | Custom | 1 | 8 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`

**`CheckPointMgmtConnector`** (customApi):
- *add-host*: method=`post`, path=`/add-host`
- *set-group*: method=`post`, path=`/set-group`
- *show-task_install-policy*: method=`post`, path=`/show-task`
- *show-task_publish*: method=`post`, path=`/show-task`
- *install-policy*: method=`post`, path=`/install-policy`
- *login*: method=`post`, path=`/login`
- *logout*: method=`post`, path=`/logout`
- *publish*: method=`post`, path=`/publish`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Check Point](../solutions/check-point.md)

