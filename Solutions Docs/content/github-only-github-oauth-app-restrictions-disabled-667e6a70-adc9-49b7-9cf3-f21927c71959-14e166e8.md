# GitHub OAuth App Restrictions Disabled

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query identifies GitHub OAuth Apps that have restrictions disabled that may be a sign of compromise. Attacker will want to disable such security tools in order to go undetected. 

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `667e6a70-adc9-49b7-9cf3-f21927c71959` |
| **Tactics** | Persistence, DefenseEvasion |
| **Techniques** | T1505, T1562 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/GitHub/Oauth%20App%20Restrictions%20Disabled.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md) | — | ✗ | ✓ |
| [`GitHubAuditLogsV2_CL`](../tables/githubauditlogsv2-cl.md) | — | ✗ | ✓ |
| [`ImpactedUser`](../tables/impacteduser.md) | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

