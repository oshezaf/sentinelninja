# Sentinel One - Admin login from new location

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects admin user login from new location (IP address).

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SentinelOne](../solutions/sentinelone.md) |
| **ID** | `382f37b3-b49a-492f-b436-a4717c8c5c3e` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, PrivilegeEscalation |
| **Techniques** | T1078 |
| **Required Connectors** | [SentinelOne](../connectors/sentinelone.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelOne/Analytic%20Rules/SentinelOneAdminLoginNewIP.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md) | — | — |
| [`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md) | — | — |
| [`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md) | — | — |
| [`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md) | — | — |
| [`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md) | — | — |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) | — | — |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SentinelOne](../solutions/sentinelone.md)

