# Infoblox SOC Get Open Insights API

Leverages the Infoblox SOC Insights API to ingest all Open/Active SOC Insights at time of run into the custom InfobloxInsight table. This playbook is scheduled to run on a daily basis.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights/Playbooks/Infoblox-SOC-Get-Open-Insights-API/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) | write |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Infoblox SOC Insights](../solutions/infoblox-soc-insights.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
