# TI Map File Entity to Syslog Event

This query finds matches in Syslog Event data for known FileName Indicators of Compromise from Threat Intelligence sources. FileName matches may produce false positives, so use this for hunting rather than real-time detection.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Threat Intelligence](../solutions/threat-intelligence.md) |
| **ID** | `18f7de84-de55-4983-aca3-a18bc846b4e0` |
| **Tactics** | Impact |
| **Required Connectors** | [Syslog](../connectors/syslog.md), [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence/Hunting%20Queries/FileEntity_Syslog.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)
- [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Threat Intelligence](../solutions/threat-intelligence.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
