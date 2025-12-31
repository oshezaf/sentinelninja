# Dev-0270 Malicious Powershell usage

DEV-0270 heavily uses powershell to achieve their objective at various stages of their attack. To locate powershell related activity tied to the actor, Microsoft Sentinel customers can run the following query.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Dev 0270 Detection and Hunting](../solutions/dev-0270-detection-and-hunting.md) |
| **ID** | `422ca2bf-598b-4872-82bb-5f7e8fa731e7` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration, DefenseEvasion |
| **Techniques** | T1048, T1562 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dev%200270%20Detection%20and%20Hunting/Analytic%20Rules/Dev-0270PowershellSep2022.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Dev 0270 Detection and Hunting](../solutions/dev-0270-detection-and-hunting.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
