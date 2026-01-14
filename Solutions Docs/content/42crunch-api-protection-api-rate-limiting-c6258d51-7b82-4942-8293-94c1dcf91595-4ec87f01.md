# API - Rate limiting

42Crunch API protection against first-time access

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [42Crunch API Protection](../solutions/42crunch-api-protection.md) |
| **ID** | `c6258d51-7b82-4942-8293-94c1dcf91595` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery, InitialAccess |
| **Techniques** | T1087, T1190 |
| **Required Connectors** | [42CrunchAPIProtection](../connectors/42crunchapiprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/42Crunch%20API%20Protection/Analytic%20Rules/APIFirstTimeAccess.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to 42Crunch API Protection](../solutions/42crunch-api-protection.md)

