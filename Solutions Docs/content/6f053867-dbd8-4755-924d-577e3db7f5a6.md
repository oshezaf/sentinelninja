# CYFIRMA - High severity Malicious Phishing Network Indicators - Block Recommended Rule

"This analytics rule identifies network-based indicators such as URLs, IP addresses, and domains related to phishing campaigns, as reported by CYFIRMA threat intelligence.  These indicators are flagged with a recommended action to block and are categorized under the 'Phishing' role. Such infrastructure is often used to deliver phishing emails, host fake login portals, or redirect victims to credential-harvesting pages.  Blocking these indicators proactively helps prevent user compromise and data

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md) |
| **ID** | `6f053867-dbd8-4755-924d-577e3db7f5a6` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution, CredentialAccess, Exfiltration |
| **Techniques** | T1566, T1204, T1556, T1110, T1041, T1566.001, T1566.002, T1204.001, T1556.002, T1110.003 |
| **Required Connectors** | [CyfirmaCyberIntelligenceDC](../connectors/cyfirmacyberintelligencedc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Cyber%20Intelligence/Analytic%20Rules/PhishingNetworkIndicatorsBlockHighSeverityRule.yaml) |

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
