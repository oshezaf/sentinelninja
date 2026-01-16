# ADFS DKM Master Key Export

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Identifies an export of the ADFS DKM Master Key from Active Directory. References: https://blogs.microsoft.com/on-the-issues/2020/12/13/customers-protect-nation-state-cyberattacks/,  https://cloud.google.com/blog/topics/threat-intelligence/evasive-attacker-leverages-solarwinds-supply-chain-compromises-with-sunburst-backdoor To understand further the details behind this detection, please review the details in the original PR and subequent PR update to this: https://github.com/Azure/Azure-Sentine

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `18e6a87e-9d06-4a4e-8b59-3469cd49552d` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Collection |
| **Techniques** | T1005 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Detections/Analytic%20Rules/MultipleDataSources/ADFS-DKM-MasterKey-Export.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceEvents`](../tables/deviceevents.md)
- [`SecurityEvent`](../tables/securityevent.md)
- [`WindowsEvent`](../tables/windowsevent.md)
- [`event`](../tables/event.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Standalone Content](../solutions/standalone-content.md)

