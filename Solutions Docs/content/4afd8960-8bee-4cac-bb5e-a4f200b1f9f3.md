# CYFIRMA - High severity Trojan File Hash Indicators with Monitor Action Rule

This KQL query extracts file hash indicators associated with Trojan activity from the CyfirmaIndicators_CL table.  It specifically targets indicators containing file hashes linked to Trojan behavior and retrieves MD5, SHA1, and SHA256 values.  The query also includes contextual threat intelligence such as threat actors, tags, sources, and geolocation information.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md) |
| **ID** | `4afd8960-8bee-4cac-bb5e-a4f200b1f9f3` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution, Persistence, DefenseEvasion, CommandAndControl, CredentialAccess |
| **Techniques** | T1566, T1204, T1547, T1027, T1071, T1003, T1566.001, T1547.001 |
| **Required Connectors** | [CyfirmaCyberIntelligenceDC](../connectors/cyfirmacyberintelligencedc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Cyber%20Intelligence/Analytic%20Rules/TrojanFileHashIndicatorsMonitorHighSeverityRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](../analytic-rules.md)
- [← Back to Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
