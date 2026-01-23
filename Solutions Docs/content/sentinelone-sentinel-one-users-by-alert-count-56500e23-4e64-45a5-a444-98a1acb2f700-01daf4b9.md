# Sentinel One - Users by alert count

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Query shows users by alert count.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [SentinelOne](../solutions/sentinelone.md) |
| **ID** | `56500e23-4e64-45a5-a444-98a1acb2f700` |
| **Severity** | High |
| **Tactics** | InitialAccess |
| **Techniques** | T1204 |
| **Required Connectors** | [SentinelOne](../connectors/sentinelone.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelOne/Hunting%20Queries/SentinelOneUsersByAlertCount.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`AlertInfo`](../tables/alertinfo.md) | ✓ | ✗ |
| [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md) | — | — |
| [`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md) | — | — |
| [`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md) | — | — |
| [`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md) | — | — |
| [`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md) | — | — |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) | — | — |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to SentinelOne](../solutions/sentinelone.md)

