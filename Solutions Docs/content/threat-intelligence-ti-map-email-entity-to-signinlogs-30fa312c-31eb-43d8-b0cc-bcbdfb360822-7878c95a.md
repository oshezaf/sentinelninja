# TI map Email entity to SigninLogs

Identifies a match in SigninLogs table from any Email IOC from TI

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Threat Intelligence](../solutions/threat-intelligence.md) |
| **ID** | `30fa312c-31eb-43d8-b0cc-bcbdfb360822` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence/Analytic%20Rules/EmailEntity_SigninLogs.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)
- [`SigninLogs`](../tables/signinlogs.md)
- [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Threat Intelligence](../solutions/threat-intelligence.md)

