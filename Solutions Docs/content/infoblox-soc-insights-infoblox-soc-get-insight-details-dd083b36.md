# Infoblox SOC Get Insight Details

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Leverages the Infoblox SOC Insights API to enrich a Microsoft Sentinel Incident triggered by an Infoblox SOC Insight & ingest Insight details into custom InfobloxInsight tables. The tables are used to build the Infoblox SOC Insights Workbook. This playbook can be configured to run automatically when an incident occurs (recommended) or run on demand.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights/Playbooks/Infoblox-SOC-Get-Insight-Details/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`InfobloxInsightAssets_CL`](../tables/infobloxinsightassets-cl.md) 🔶 | ? | ✓ | ? |
| [`InfobloxInsightComments_CL`](../tables/infobloxinsightcomments-cl.md) 🔶 | ? | ✓ | ? |
| [`InfobloxInsightEvents_CL`](../tables/infobloxinsightevents-cl.md) 🔶 | ? | ✓ | ? |
| [`InfobloxInsightIndicators_CL`](../tables/infobloxinsightindicators-cl.md) 🔶 | ? | ✓ | ? |
| [`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) 🔶 | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureloganalyticsdatacollector` | Managed | 1 | 5 |
| `azuresentinel` | Managed | 1 | 2 |
| `http` | Built-in | 0 | 6 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureloganalyticsdatacollector`** (managedApi):
- *Send_Summary_(Insight)_Data*: method=`post`, path=`/api/logs`
- *Send_Asset_Data*: method=`post`, path=`/api/logs`
- *Send_Comment_Data*: method=`post`, path=`/api/logs`
- *Send_Event_Data*: method=`post`, path=`/api/logs`
- *Send_Indicator_Data*: method=`post`, path=`/api/logs`

**`azuresentinel`** (managedApi):
- *Add_InfobloxInsightID_Tag*: method=`put`, path=`/Incidents`
- *Update_Incident_Tags*: method=`put`, path=`/Incidents`

**`http`** (builtin):
- *Test_Connection_to_Infoblox_CSP*: method=`GET`, uri=`https://csp.infoblox.com/api/v1/insights/@{items('For_each')?['properties']?['objectGuid']}`
- *Get_Summary_Data*: method=`GET`, uri=`https://csp.infoblox.com/api/v1/insights/@{items('For_each_Insight_ID')?['properties']?['objectGuid']}`
- *Get_Asset_Data*: method=`GET`, uri=`https://csp.infoblox.com/api/v1/insights/@{items('For_each_Insight_ID')?['properties']?['objectGuid']}/assets`
- *Get_Comment_Data*: method=`GET`, uri=`https://csp.infoblox.com/api/v1/insights/@{items('For_each_Insight_ID')?['properties']?['objectGuid']}/comments`
- *Get_Event_Data*: method=`GET`, uri=`https://csp.infoblox.com/api/v1/insights/@{items('For_each_Insight_ID')?['properties']?['objectGuid']}/events`
- *Get_Indicator_Data*: method=`GET`, uri=`https://csp.infoblox.com/api/v1/insights/@{items('For_each_Insight_ID')?['properties']?['objectGuid']}/indicators`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Infoblox SOC Insights](../solutions/infoblox-soc-insights.md)

