# CYFIRMA - Medium severity Command & Control Network Indicators with Monitor Recommendation Rule

This analytics rule detects network-based indicators identified by CYFIRMA threat intelligence as associated with Command & Control (C2) infrastructure. These may represent attacker-controlled endpoints used to maintain persistence, exfiltrate data, or receive commands from malware-infected hosts.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md) |
| **ID** | `75931755-27cd-4e4b-a51c-efcca452e2ff` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl, InitialAccess, Exfiltration |
| **Techniques** | T1071, T1090, T1573, T1105, T1568, T1566, T1041, T1071.001, T1573.001, T1568.002, T1566.002 |
| **Required Connectors** | [CyfirmaCyberIntelligenceDC](../connectors/cyfirmacyberintelligencedc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Cyber%20Intelligence/Analytic%20Rules/C2NetworkIndicatorsMonitorMediumSeverityRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md)

