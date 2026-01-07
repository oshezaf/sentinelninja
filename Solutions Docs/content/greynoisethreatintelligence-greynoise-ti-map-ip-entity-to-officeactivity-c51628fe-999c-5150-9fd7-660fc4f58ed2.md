# GreyNoise TI map IP entity to OfficeActivity

This query maps any GreyNoise IP indicators of compromise (IOCs) from threat intelligence (TI), by searching for matches in OfficeActivity.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md) |
| **ID** | `c51628fe-999c-5150-9fd7-660fc4f58ed2` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md), [Office365](../connectors/office365.md), [GreyNoise2SentinelAPI](../connectors/greynoise2sentinelapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GreyNoiseThreatIntelligence/Analytic%20Rules/GreyNoise_IPEntity_OfficeActivity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OfficeActivity`](../tables/officeactivity.md)
- [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
