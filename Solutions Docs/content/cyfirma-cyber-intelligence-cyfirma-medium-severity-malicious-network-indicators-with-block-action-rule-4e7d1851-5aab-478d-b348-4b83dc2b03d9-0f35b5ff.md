# CYFIRMA - Medium severity Malicious Network Indicators with Block Action Rule

This rule detects network-based indicators such as IP addresses, domains, and URLs reported by CYFIRMA threat intelligence with a recommended action of 'Block' and no specified role.  These indicators may be associated with infrastructure used in phishing campaigns, malware, or initial access via watering hole or drive-by compromise techniques.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md) |
| **ID** | `4e7d1851-5aab-478d-b348-4b83dc2b03d9` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution, Reconnaissance, Impact |
| **Techniques** | T1566, T1189, T1204, T1595, T1498, T1566.002, T1204.001, T1595.002 |
| **Required Connectors** | [CyfirmaCyberIntelligenceDC](../connectors/cyfirmacyberintelligencedc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Cyber%20Intelligence/Analytic%20Rules/NetworkIndicatorsBlockMediumSeverityRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md)

