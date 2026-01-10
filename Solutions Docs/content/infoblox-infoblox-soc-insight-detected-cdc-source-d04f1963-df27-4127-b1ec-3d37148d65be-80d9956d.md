# Infoblox - SOC Insight Detected - CDC Source

Infoblox SOC Insight detected in logs sourced via Infoblox CDC. Customize scheduling, responses and more. This rule depends on a parser based on a Kusto Function to work as expected called [**InfobloxCDC_SOCInsights**](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Parsers/InfobloxCDC_SOCInsights.yaml).

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Infoblox](../solutions/infoblox.md) |
| **ID** | `d04f1963-df27-4127-b1ec-3d37148d65be` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1498, T1565 |
| **Required Connectors** | [InfobloxSOCInsightsDataConnector_Legacy](../connectors/infobloxsocinsightsdataconnector-legacy.md), [InfobloxSOCInsightsDataConnector_AMA](../connectors/infobloxsocinsightsdataconnector-ama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Analytic%20Rules/Infoblox-SOCInsight-Detected-CDCSource.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Infoblox](../solutions/infoblox.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

