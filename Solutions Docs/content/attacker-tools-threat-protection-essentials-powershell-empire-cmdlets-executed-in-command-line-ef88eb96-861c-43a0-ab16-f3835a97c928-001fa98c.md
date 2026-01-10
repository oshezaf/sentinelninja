# Powershell Empire Cmdlets Executed in Command Line

This query identifies use of PowerShell Empire's cmdlets within the command line data of the PowerShell process, indicating potential use of the post-exploitation tool.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md) |
| **ID** | `ef88eb96-861c-43a0-ab16-f3835a97c928` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, LateralMovement, Persistence, PrivilegeEscalation |
| **Techniques** | T1548.002, T1134, T1134.002, T1134.005, T1087.001, T1087.002, T1557.001, T1071.001, T1560, T1547.001, T1547.005, T1547.009, T1217, T1115, T1059, T1059.001, T1059.003, T1136.001, T1136.002, T1543.003, T1555.003, T1484.001, T1482, T1114.001, T1573.002, T1546.008, T1041, T1567.001, T1567.002, T1068, T1210, T1083, T1615, T1574.001, T1574.004, T1574.007, T1574.008, T1574.009, T1070.006, T1105, T1056.001, T1056.004, T1106, T1046, T1135, T1040, T1027, T1003.001, T1057, T1055, T1021.003, T1021.004, T1053.005, T1113, T1518.001, T1558.002, T1558.003, T1082, T1016, T1049, T1569.002, T1127.001, T1552.001, T1552.004, T1550.002, T1125, T1102.002, T1047 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Attacker%20Tools%20Threat%20Protection%20Essentials/Analytic%20Rules/powershell_empire.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityEvent`](../tables/securityevent.md)
- [`WindowsEvent`](../tables/windowsevent.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

