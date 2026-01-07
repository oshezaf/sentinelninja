# Dev-0270 Registry IOC - September 2022

The query below identifies modification of registry by Dev-0270 actor to disable security feature as well as to add ransom notes

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Dev 0270 Detection and Hunting](../solutions/dev-0270-detection-and-hunting.md) |
| **ID** | `2566e99f-ad0f-472a-b9ac-d3899c9283e6` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1486 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dev%200270%20Detection%20and%20Hunting/Analytic%20Rules/Dev-0270RegistryIOCSep2022.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Dev 0270 Detection and Hunting](../solutions/dev-0270-detection-and-hunting.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
