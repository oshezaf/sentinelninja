# CYFIRMA - High severity File Hash Indicators with Block Action Rule

This query retrieves file hash indicators marked for blocking, with no assigned role, from the CyfirmaIndicators_CL table.  It extracts MD5, SHA1, and SHA256 hashes and includes threat metadata for use in preventive security controls such as EDRs, threat intel platforms, or automated blocklists.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md) |
| **ID** | `7cb829b2-915a-42c2-adb9-725e9ce9bf43` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Execution, InitialAccess, DefenseEvasion, Impact |
| **Techniques** | T1204, T1566, T1027, T1486, T1566.001 |
| **Required Connectors** | [CyfirmaCyberIntelligenceDC](../connectors/cyfirmacyberintelligencedc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Cyber%20Intelligence/Analytic%20Rules/FileHashIndicatorsBlockHighSeverityRule.yaml) |

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

