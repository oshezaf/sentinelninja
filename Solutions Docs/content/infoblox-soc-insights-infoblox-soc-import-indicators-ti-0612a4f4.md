# Infoblox SOC Import Indicators TI

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Imports each Indicator of a Microsoft Sentinel Incident triggered by an Infoblox SOC Insight into the ThreatIntelligenceIndicator table. You must run the Infoblox-SOC-Get-Insight-Details playbook on a SOC Insight Incident before running this playbook.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights/Playbooks/Infoblox-SOC-Import-Indicators-TI/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 2 |
| `azuresentinel` | Managed | 1 | 0 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Get_Domains*: method=`post`, path=`/queryDataV2`
- *Get_IPs*: method=`post`, path=`/queryDataV2`

**`http`** (builtin):
- *Send_IPs_to_Sentinel*: method=`POST`, uri=`https://graph.microsoft.com/beta/security/tiIndicators`
- *Send_Domains_to_Sentinel*: method=`POST`, uri=`https://graph.microsoft.com/beta/security/tiIndicators`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Infoblox SOC Insights](../solutions/infoblox-soc-insights.md)

