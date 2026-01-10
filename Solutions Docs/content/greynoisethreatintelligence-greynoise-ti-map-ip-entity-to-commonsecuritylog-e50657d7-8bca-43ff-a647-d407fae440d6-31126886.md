# GreyNoise TI Map IP Entity to CommonSecurityLog

This query maps GreyNoise IP indicators of compromise (IOCs) from threat intelligence (TI), by searching for matches in CommonSecurityLog.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md) |
| **ID** | `e50657d7-8bca-43ff-a647-d407fae440d6` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [ThreatIntelligence](../connectors/threatintelligence.md), [CEF](../connectors/cef.md), [CefAma](../connectors/cefama.md), [GreyNoise2SentinelAPI](../connectors/greynoise2sentinelapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GreyNoiseThreatIntelligence/Analytic%20Rules/GreyNoise_IPEntity_CustomSecurityLog.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

