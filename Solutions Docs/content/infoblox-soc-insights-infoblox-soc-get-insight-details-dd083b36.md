# Infoblox SOC Get Insight Details

Leverages the Infoblox SOC Insights API to enrich a Microsoft Sentinel Incident triggered by an Infoblox SOC Insight & ingest Insight details into custom InfobloxInsight tables. The tables are used to build the Infoblox SOC Insights Workbook. This playbook can be configured to run automatically when an incident occurs (recommended) or run on demand.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights/Playbooks/Infoblox-SOC-Get-Insight-Details/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`InfobloxInsightAssets_CL`](../tables/infobloxinsightassets-cl.md) | write |
| [`InfobloxInsightComments_CL`](../tables/infobloxinsightcomments-cl.md) | write |
| [`InfobloxInsightEvents_CL`](../tables/infobloxinsightevents-cl.md) | write |
| [`InfobloxInsightIndicators_CL`](../tables/infobloxinsightindicators-cl.md) | write |
| [`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) | write |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Infoblox SOC Insights](../solutions/infoblox-soc-insights.md)

