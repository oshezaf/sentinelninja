# Infoblox - SOC Insight Detected - API Source

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Infoblox SOC Insight detected in logs sourced via REST API. Customize scheduling, responses and more. This rule depends on a parser based on a Kusto Function to work as expected called [**InfobloxInsight**](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights/Parsers/InfobloxInsight.yaml).

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) |
| **ID** | `cf9847bb-ab46-4050-bb81-75cab3f893dc` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1498, T1565 |
| **Required Connectors** | [InfobloxSOCInsightsDataConnector_API](../connectors/infobloxsocinsightsdataconnector-api.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights/Analytic%20Rules/Infoblox-SOCInsightDetected-APISource.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) | — | ✗ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Infoblox SOC Insights](../solutions/infoblox-soc-insights.md)

