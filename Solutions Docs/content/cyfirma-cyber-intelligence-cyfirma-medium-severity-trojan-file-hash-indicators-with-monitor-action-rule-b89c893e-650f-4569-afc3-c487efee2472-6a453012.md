# CYFIRMA - Medium severity Trojan File Hash Indicators with Monitor Action Rule

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This KQL query extracts file hash indicators associated with Trojan activity from the CyfirmaIndicators_CL table.  It specifically targets indicators containing file hashes linked to Trojan behavior and retrieves MD5, SHA1, and SHA256 values.  The query also includes contextual threat intelligence such as threat actors, tags, sources, and geolocation information.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md) |
| **ID** | `b89c893e-650f-4569-afc3-c487efee2472` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution, Persistence, DefenseEvasion, CommandAndControl, CredentialAccess |
| **Techniques** | T1566, T1204, T1547, T1027, T1071, T1003, T1566.001, T1547.001 |
| **Required Connectors** | [CyfirmaCyberIntelligenceDC](../connectors/cyfirmacyberintelligencedc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Cyber%20Intelligence/Analytic%20Rules/TrojanFileHashIndicatorsMonitorMediumSeverityRule.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) | — | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md)

