# CybleVisionAlert_Status_Update

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This Logic App updates Cyble alert status and severity based on Microsoft Sentinel incident changes. It supports automatic updates via automation rules and interprets user-applied tags to determine the correct status mapping.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Cyble Vision](../solutions/cyble-vision.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision/Playbooks/CybleVisionAlert_Status_Update/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 0 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`http`** (builtin):
- *post_comment-copy*: method=`POST`, uri=`https://bifrost.cyble.ai/engine/api/v1/y/tpi/sentinel/alerts/@{variables('var_alertId')}/comments`
- *update_alert_details*: method=`PUT`, uri=`https://bifrost.cyble.ai/engine/api/v1/y/tpi/sentinel/alerts`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Cyble Vision](../solutions/cyble-vision.md)

