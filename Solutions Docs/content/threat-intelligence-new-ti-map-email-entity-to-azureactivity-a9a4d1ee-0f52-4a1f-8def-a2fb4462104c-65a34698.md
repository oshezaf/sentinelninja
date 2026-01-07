# TI map Email entity to AzureActivity

Identifies a match in AzureActivity table from any Email IOC from TI

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md) |
| **ID** | `a9a4d1ee-0f52-4a1f-8def-a2fb4462104c` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md), [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence%20%28NEW%29/Analytic%20Rules/EmailEntity_AzureActivity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureActivity`](../tables/azureactivity.md)
- [`ThreatIntelIndicators`](../tables/threatintelindicators.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
