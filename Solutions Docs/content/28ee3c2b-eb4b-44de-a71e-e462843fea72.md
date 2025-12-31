# Infoblox - TI - Syslog Match Found - URL

Syslog URL match found in your Infoblox TIDE Threat Intelligence. Customize query count, scheduling, responses and more. Modify data sources, types and threat properties as desired.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md) |
| **ID** | `28ee3c2b-eb4b-44de-a71e-e462843fea72` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1498, T1565 |
| **Required Connectors** | [Syslog](../connectors/syslog.md), [ThreatIntelligence](../connectors/threatintelligence.md), [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20Cloud%20Data%20Connector/Analytic%20Rules/Infoblox-TI-SyslogMatchFound-URL.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)
- [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
