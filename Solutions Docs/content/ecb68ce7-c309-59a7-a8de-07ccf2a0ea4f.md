# ThreatConnect TI map Email entity to SigninLogs

Identifies a match in SigninLogs table from any Email IOC from ThreatConnect TI

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ThreatConnect](../solutions/threatconnect.md) |
| **ID** | `ecb68ce7-c309-59a7-a8de-07ccf2a0ea4f` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ThreatConnect/Analytic%20Rules/ThreatConnect_EmailEntity_SigninLogs.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)
- [`aadFunc`](../tables/aadfunc.md)

---

**Browse:**

- [← Back to Analytic Rules](../analytic-rules.md)
- [← Back to ThreatConnect](../solutions/threatconnect.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
