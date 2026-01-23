# Contrast ADR - DLP SQL Injection Correlation

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects successful SQL injection attacks identified by Contrast ADR and correlates them with WAF/DLP logs. This rule identifies critical database security breaches that have bypassed initial defenses and may result in data exfiltration or unauthorized database access.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ContrastADR](../solutions/contrastadr.md) |
| **ID** | `1aac7737-d52f-483d-b225-6a27c1b29a9e` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CredentialAccess, Collection, Exfiltration, CommandAndControl, Reconnaissance, CredentialAccess, LateralMovement, Discovery |
| **Techniques** | T1190, T1552, T1005, T1041, T1008, T1590, T1571, T1528, T1021, T1046 |
| **Required Connectors** | [ContrastADR](../connectors/contrastadr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContrastADR/Analytic%20Rules/Contrast_ADR_SQL_Injection_Alert_with_DLP_alerts.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`ContrastADR_CL`](../tables/contrastadr-cl.md) | — | — |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to ContrastADR](../solutions/contrastadr.md)

