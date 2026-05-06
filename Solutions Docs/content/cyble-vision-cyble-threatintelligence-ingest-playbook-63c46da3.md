# Cyble-ThreatIntelligence-Ingest-Playbook

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook imports IoC lists from Cyble and stores them as Threat Intelligence Indicators in Microsoft Sentinel, for detection purposes. This playbook depends on Cyble-ThreatIntelligence-Ingest that need to be installed **manually** before installing this playbook.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Cyble Vision](../solutions/cyble-vision.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision/Playbooks/TI-Ingest/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 1 |
| `azuresentinel` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *GetExistingIoCs*: method=`post`, path=`/queryData`

**`azuresentinel`** (managedApi):
- *Upload_Indicators_v2*: method=`post`, path=`/V2/ThreatIntelligence/@{encodeURIComponent(parameters('WorkspaceID'))}/UploadIndicators/`

**`http`** (builtin):
- *HTTP_Get_IOC_Data*: method=`GET`, uri=`@concat('https://api.cyble.ai/engine/api/v2/y/iocs?sortBy=last_seen&order=desc&limit=100&startDate=', variables('StartDateTimeFull'), '&endDate=', variables('EndDateTimeFull'))`
- *HTTP_Get_Iocs_Per_Page*: method=`GET`, uri=`@concat('https://api.cyble.ai/engine/api/v2/y/iocs?sortBy=last_seen&order=desc&limit=', string(variables('Limit')), '&page=', string(variables('PageNumber')), '&startDate=', variables('StartDateTimeFull'), '&endDate=', variables('EndDateTimeFull'))`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Cyble Vision](../solutions/cyble-vision.md)

