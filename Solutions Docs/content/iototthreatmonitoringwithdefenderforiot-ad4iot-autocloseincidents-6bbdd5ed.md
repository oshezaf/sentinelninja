# AD4IoT-AutoCloseIncidents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

In some cases, maintenance activities generate alerts in Microsoft Sentinel which distracts the SOC team from handling the real problems. This playbook allows to input the time period in which the maintenance is expected and the assets IP (Excel file can be found). The playbook requires a watchlist which includes all the IP addresses of the assets on which alerts will handled automatically. This playbook parses explicitly the IoT device entity fields. For more information, see [AD4IoT-AutoCloseI

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IoTOTThreatMonitoringwithDefenderforIoT/Playbooks/AutoCloseIncidents/AutoCloseIncidents.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 1 |
| `azuresentinel` | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Run_query_and_list_results*: method=`post`, path=`/queryData`

**`azuresentinel`** (managedApi):
- *Update_incident*: method=`put`, path=`/Incidents`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md)

