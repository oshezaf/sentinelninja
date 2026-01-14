# Lumen TI IPAddress indicator in CommonSecurityLog

This query searches for matches between Lumen threat intelligence IPAddress indicators and security log events.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md) |
| **ID** | `4e329d3a-9fc0-4be7-9000-e092e7f68011` |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [ThreatIntelIndicators](../connectors/threatintelindicators.md), [CEF](../connectors/cef.md), [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Lumen%20Defender%20Threat%20Feed/Hunting%20Queries/Lumen_IPIndicator_CommonSecurityLog.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`ThreatIntelIndicators`](../tables/threatintelindicators.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)

