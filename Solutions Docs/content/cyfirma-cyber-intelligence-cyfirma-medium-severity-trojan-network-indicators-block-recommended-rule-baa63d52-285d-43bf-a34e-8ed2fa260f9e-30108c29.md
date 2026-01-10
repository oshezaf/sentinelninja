# CYFIRMA - Medium severity Trojan Network Indicators - Block Recommended Rule

This analytics rule detects network-based indicators flagged by CYFIRMA threat intelligence as associated with Command & Control (C2) infrastructure.  These indicators may represent attacker-controlled endpoints used for persistence, data exfiltration, or command delivery to compromised systems.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md) |
| **ID** | `baa63d52-285d-43bf-a34e-8ed2fa260f9e` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Impact, Persistence, DefenseEvasion, CredentialAccess, CommandAndControl, Execution, InitialAccess |
| **Techniques** | T1496, T1053, T1555, T1090, T1071, T1204, T1189, T1053.005, T1555.003, T1071.001, T1204.001 |
| **Required Connectors** | [CyfirmaCyberIntelligenceDC](../connectors/cyfirmacyberintelligencedc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Cyber%20Intelligence/Analytic%20Rules/TrojanNetworkIndicatorsBlockMediumSeverityRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

