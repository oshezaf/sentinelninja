# Infoblox - SOC Insight Detected - API Source

Infoblox SOC Insight detected in logs sourced via REST API. Customize scheduling, responses and more. This rule depends on a parser based on a Kusto Function to work as expected called [**InfobloxInsight**](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Parsers/InfobloxInsight.yaml).

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Infoblox](../solutions/infoblox.md) |
| **ID** | `a5e2df87-f0c9-4540-8715-96e71b608986` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1498, T1565 |
| **Required Connectors** | [InfobloxSOCInsightsDataConnector_API](../connectors/infobloxsocinsightsdataconnector-api.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Analytic%20Rules/Infoblox-SOCInsight-Detected-APISource.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Infoblox](../solutions/infoblox.md)

