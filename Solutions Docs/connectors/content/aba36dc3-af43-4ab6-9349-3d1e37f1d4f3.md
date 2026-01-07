# CYFIRMA - Medium severity TOR Node Network Indicators - Block Recommended Rule

This KQL query identifies network-based indicators from CYFIRMA intelligence that are associated with the role 'TOR'.  These indicators may include IP addresses, domains, and URLs related to Tor network activity.  Threat actors often use Tor for anonymous communication, command and control, data exfiltration, and evasion of network defenses.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md) |
| **ID** | `aba36dc3-af43-4ab6-9349-3d1e37f1d4f3` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl, Exfiltration, InitialAccess, Persistence, Reconnaissance |
| **Techniques** | T1090, T1572, T1048, T1071, T1189, T1505, T1595, T1090.003, T1048.002, T1071.001, T1505.003, T1595.002 |
| **Required Connectors** | [CyfirmaCyberIntelligenceDC](../connectors/cyfirmacyberintelligencedc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Cyber%20Intelligence/Analytic%20Rules/TORNodeNetworkIndicatorsBlockMediumSeverityRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
