# GitHub Two Factor Auth Disable

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Two-factor authentication is a process where a user is prompted during the sign-in process for an additional form of identification, such as to enter a code on their cellphone or to provide a fingerprint scan. Two factor authentication reduces the risk of account takeover. Attacker will want to disable such security tools in order to go undetected. 

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GitHub](../solutions/github.md) |
| **ID** | `3ff0fffb-d963-40c0-b235-3404f915add7` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub/Analytic%20Rules/GitHub%20-%20Two%20Factor%20Authentication%20Disabled%20in%20GitHub.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md) | — | ✗ | ✓ |
| [`GitHubAuditLogsV2_CL`](../tables/githubauditlogsv2-cl.md) | — | ✗ | ✓ |
| [`ImpactedUser`](../tables/impacteduser.md) | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to GitHub](../solutions/github.md)

