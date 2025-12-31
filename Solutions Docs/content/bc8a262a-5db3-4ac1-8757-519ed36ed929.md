# Lumen TI IPAddress in CommonSecurityLog

This query maps Lumen IP indicators of compromise (IOCs) from threat intelligence (TI), by searching for matches in CommonSecurityLog.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md) |
| **ID** | `bc8a262a-5db3-4ac1-8757-519ed36ed929` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [LumenThreatFeedConnector](../connectors/lumenthreatfeedconnector.md), [ThreatIntelligenceUploadIndicatorsAPI](../connectors/threatintelligenceuploadindicatorsapi.md), [CEF](../connectors/cef.md), [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Lumen%20Defender%20Threat%20Feed/Analytic%20Rules/Lumen_IPEntity_CommonSecurityLog.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`ThreatIntelIndicators`](../tables/threatintelindicators.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
