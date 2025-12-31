# Credential Dumping Tools - Service Installation

This query detects the installation of a Windows service that contains artifacts from credential dumping tools such as Mimikatz.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md) |
| **ID** | `4ebbb5c2-8802-11ec-a8a3-0242ac120002` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1003.001 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Attacker%20Tools%20Threat%20Protection%20Essentials/Analytic%20Rules/CredentialDumpingServiceInstallation.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Event`](../tables/event.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
