# Export-Report-CSV

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

---- Author: Matt Egen

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | GitHub Only |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Export-Report-CSV/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 0 | 6 |
| `smtp` | Managed | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Run_daily_report_query_and_list_results*: method=`post`, path=`/queryData`
- *Get_Daily_Report_List*: method=`post`, path=`/queryData`
- *Run_monthly_queries_and_list_results*: method=`post`, path=`/queryData`
- *Get_Monthly_Report_List*: method=`post`, path=`/queryData`
- *Run_weekly_queries_and_list_results*: method=`post`, path=`/queryData`
- *Get_Weekly_Report_List*: method=`post`, path=`/queryData`

**`smtp`** (managedApi):
- *Send_Daily_Emails*: method=`post`, path=`/SendEmailV3`
- *Send_Monthly_Emails*: method=`post`, path=`/SendEmailV3`
- *Send_Weekly_Emails*: method=`post`, path=`/SendEmailV3`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

