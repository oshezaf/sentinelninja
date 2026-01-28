# CYFIRMA - Medium severity File Hash Indicators with Monitor Action Rule

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query retrieves file hash indicators marked for Monitoring, with no assigned role, from the CyfirmaIndicators_CL table.  It extracts MD5, SHA1, and SHA256 hashes and includes threat metadata for use in preventive security controls such as EDRs, threat intel platforms.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md) |
| **ID** | `5347c581-eb36-4bf5-a7e5-be1fb2d617f5` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Execution, InitialAccess, DefenseEvasion, Impact |
| **Techniques** | T1204, T1566, T1027, T1486, T1566.001 |
| **Required Connectors** | [CyfirmaCyberIntelligenceDC](../connectors/cyfirmacyberintelligencedc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Cyber%20Intelligence/Analytic%20Rules/FileHashIndicatorsMonitorMediumSeverityRule.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`CyfirmaIndicators_CL`](../tables/cyfirmaindicators-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md)

