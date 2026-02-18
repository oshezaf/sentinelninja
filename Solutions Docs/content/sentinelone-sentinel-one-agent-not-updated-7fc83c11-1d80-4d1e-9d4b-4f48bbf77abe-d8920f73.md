# Sentinel One - Agent not updated

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Query shows agent which are not updated to the latest version.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [SentinelOne](../solutions/sentinelone.md) |
| **ID** | `7fc83c11-1d80-4d1e-9d4b-4f48bbf77abe` |
| **Severity** | Medium |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1070 |
| **Required Connectors** | [SentinelOne](../connectors/sentinelone.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelOne/Hunting%20Queries/SentinelOneAgentNotUpdated.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md) | ✓ | ✗ | ✓ |
| [`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md) | ✓ | ✗ | ✓ |
| [`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md) | ✓ | ✗ | ✓ |
| [`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md) | ✓ | ✗ | ✓ |
| [`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md) | ✓ | ✗ | ✓ |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to SentinelOne](../solutions/sentinelone.md)

