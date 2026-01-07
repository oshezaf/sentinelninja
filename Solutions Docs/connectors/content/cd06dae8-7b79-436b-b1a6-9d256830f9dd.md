# CYFIRMA - Medium severity File Hash Indicators with Block Action Rule

This query retrieves file hash indicators marked for blocking, with no assigned role, from the CyfirmaIndicators_CL table.  It extracts MD5, SHA1, and SHA256 hashes and includes threat metadata for use in preventive security controls such as EDRs, threat intel platforms, or automated blocklists.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md) |
| **ID** | `cd06dae8-7b79-436b-b1a6-9d256830f9dd` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Execution, InitialAccess, DefenseEvasion, Impact |
| **Techniques** | T1204, T1566, T1027, T1486, T1566.001 |
| **Required Connectors** | [CyfirmaCyberIntelligenceDC](../connectors/cyfirmacyberintelligencedc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Cyber%20Intelligence/Analytic%20Rules/FileHashIndicatorsBlockMediumSeverityRule.yaml) |

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
