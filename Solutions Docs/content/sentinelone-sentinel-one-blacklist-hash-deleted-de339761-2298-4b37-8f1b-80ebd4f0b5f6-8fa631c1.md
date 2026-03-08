# Sentinel One - Blacklist hash deleted

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when blacklist hash was deleted.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SentinelOne](../solutions/sentinelone.md) |
| **ID** | `de339761-2298-4b37-8f1b-80ebd4f0b5f6` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1070 |
| **Required Connectors** | [SentinelOne](../connectors/sentinelone.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelOne/Analytic%20Rules/SentinelOneBlacklistHashDeleted.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md) 🔶 | ✓ | ✓ | ✓ |
| [`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md) 🔶 | ✓ | ✓ | ✓ |
| [`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md) 🔶 | ✓ | ✓ | ✓ |
| [`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md) 🔶 | ✓ | ✓ | ✓ |
| [`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md) 🔶 | ✓ | ✓ | ✓ |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) 🔶 | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SentinelOne](../solutions/sentinelone.md)

