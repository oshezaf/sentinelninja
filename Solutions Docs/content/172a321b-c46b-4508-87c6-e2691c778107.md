# TI Map File Entity to VMConnection Event

This query finds matches in VMConnection Event data for known FileName Indicators of Compromise from Threat Intelligence sources. FileName matches may produce false positives, so use this for hunting rather than real-time detection.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Threat Intelligence](../solutions/threat-intelligence.md) |
| **ID** | `172a321b-c46b-4508-87c6-e2691c778107` |
| **Tactics** | Impact |
| **Required Connectors** | [AzureMonitor(VMInsights)](../connectors/azuremonitor%28vminsights%29.md), [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence/Hunting%20Queries/FileEntity_VMConnection.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)
- [`VMConnection`](../tables/vmconnection.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Threat Intelligence](../solutions/threat-intelligence.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
