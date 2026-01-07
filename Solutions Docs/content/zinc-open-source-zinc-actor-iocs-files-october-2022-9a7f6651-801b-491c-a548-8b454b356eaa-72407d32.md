# Zinc Actor IOCs files - October 2022

Identifies a match across filename and commandline IOC's related to an actor tracked by Microsoft as Zinc. Reference: https://www.microsoft.com/security/blog/2022/09/29/zinc-weaponizing-open-source-software/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Zinc Open Source](../solutions/zinc-open-source.md) |
| **ID** | `9a7f6651-801b-491c-a548-8b454b356eaa` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1546 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zinc%20Open%20Source/Analytic%20Rules/ZincOctober2022_Filename_Commandline_IOC.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Zinc Open Source](../solutions/zinc-open-source.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
