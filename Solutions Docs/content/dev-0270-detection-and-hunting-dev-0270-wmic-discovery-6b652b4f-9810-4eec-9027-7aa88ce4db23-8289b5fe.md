# Dev-0270 WMIC  Discovery

The query below identifies dllhost.exe using WMIC to discover additional hosts and associated domains in the environment.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Dev 0270 Detection and Hunting](../solutions/dev-0270-detection-and-hunting.md) |
| **ID** | `6b652b4f-9810-4eec-9027-7aa88ce4db23` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1482 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dev%200270%20Detection%20and%20Hunting/Analytic%20Rules/Dev-0270WMICDiscoverySep2022.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)
- [`SecurityEvent`](../tables/securityevent.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Dev 0270 Detection and Hunting](../solutions/dev-0270-detection-and-hunting.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

