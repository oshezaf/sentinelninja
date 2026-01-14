# CYFIRMA - High severity TOR Node Network Indicators - Monitor Recommended Rule

This KQL query identifies network-based indicators from CYFIRMA intelligence that are associated with the role 'TOR'.  These indicators may include IP addresses, domains, and URLs related to Tor network activity.  Threat actors often use Tor for anonymous communication, command and control, data exfiltration, and evasion of network defenses.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md) |
| **ID** | `6f107cf8-02f9-4440-b5d8-1235293e5ad7` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl, Exfiltration, InitialAccess, Persistence, Reconnaissance |
| **Techniques** | T1090, T1572, T1048, T1071, T1189, T1505, T1595, T1090.003, T1048.002, T1071.001, T1505.003, T1595.002 |
| **Required Connectors** | [CyfirmaCyberIntelligenceDC](../connectors/cyfirmacyberintelligencedc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Cyber%20Intelligence/Analytic%20Rules/TORNodeNetworkIndicatorsMonitorHighSeverityRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md)

