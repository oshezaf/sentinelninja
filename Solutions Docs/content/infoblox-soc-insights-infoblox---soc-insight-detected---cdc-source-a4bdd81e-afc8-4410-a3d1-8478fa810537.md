# Infoblox - SOC Insight Detected - CDC Source

Infoblox SOC Insight detected in logs sourced via Infoblox CDC. Customize scheduling, responses and more. This rule depends on a parser based on a Kusto Function to work as expected called [**InfobloxCDC_SOCInsights**](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights/Parsers/InfobloxCDC_SOCInsights.yaml).

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) |
| **ID** | `a4bdd81e-afc8-4410-a3d1-8478fa810537` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1498, T1565 |
| **Required Connectors** | [InfobloxSOCInsightsDataConnector_Legacy](../connectors/infobloxsocinsightsdataconnector-legacy.md), [InfobloxSOCInsightsDataConnector_AMA](../connectors/infobloxsocinsightsdataconnector-ama.md), [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights/Analytic%20Rules/Infoblox-SOCInsightDetected-CDCSource.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Infoblox SOC Insights](../solutions/infoblox-soc-insights.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
