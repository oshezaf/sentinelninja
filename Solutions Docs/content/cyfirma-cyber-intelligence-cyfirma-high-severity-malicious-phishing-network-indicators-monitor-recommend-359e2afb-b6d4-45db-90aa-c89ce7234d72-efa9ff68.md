# CYFIRMA - High severity Malicious Phishing Network Indicators - Monitor Recommended Rule

"This analytics rule identifies network-based indicators such as URLs, IP addresses, and domains related to phishing campaigns, as reported by CYFIRMA threat intelligence.  These indicators are flagged with a recommended action to block and are categorized under the 'Phishing' role. Such infrastructure is often used to deliver phishing emails, host fake login portals, or redirect victims to credential-harvesting pages.  monitoring these indicators proactively helps prevent user compromise and da

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md) |
| **ID** | `359e2afb-b6d4-45db-90aa-c89ce7234d72` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution, CredentialAccess, Exfiltration |
| **Techniques** | T1566, T1204, T1556, T1110, T1041, T1566.001, T1566.002, T1204.001, T1556.002, T1110.003 |
| **Required Connectors** | [CyfirmaCyberIntelligenceDC](../connectors/cyfirmacyberintelligencedc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Cyber%20Intelligence/Analytic%20Rules/PhishingNetworkIndicatorsMonitorHighSeverityRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md)

