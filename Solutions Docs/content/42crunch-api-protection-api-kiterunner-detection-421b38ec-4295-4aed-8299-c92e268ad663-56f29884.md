# API - Kiterunner detection

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

42Crunch API protection against Kiterunner enumeration

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [42Crunch API Protection](../solutions/42crunch-api-protection.md) |
| **ID** | `421b38ec-4295-4aed-8299-c92e268ad663` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Reconnaissance, Discovery |
| **Techniques** | T1595, T1580, T1083 |
| **Required Connectors** | [42CrunchAPIProtection](../connectors/42crunchapiprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/42Crunch%20API%20Protection/Analytic%20Rules/APIKiterunnerDetection.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to 42Crunch API Protection](../solutions/42crunch-api-protection.md)

