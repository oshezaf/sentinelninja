# TI Map File Entity to Security Event

This query finds matches in Security Event data for known FileName Indicators of Compromise from Threat Intelligence sources. FileName matches may produce false positives, so use this for hunting rather than real-time detection.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Threat Intelligence](../solutions/threat-intelligence.md) |
| **ID** | `233441b9-cc92-4c9b-87fa-73b855fcd4b8` |
| **Tactics** | Impact |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence/Hunting%20Queries/FileEntity_SecurityEvent.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityEvent`](../tables/securityevent.md)
- [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Threat Intelligence](../solutions/threat-intelligence.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
