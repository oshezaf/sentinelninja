# Sentinel One - Multiple alerts on host

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when multiple alerts received from same host.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SentinelOne](../solutions/sentinelone.md) |
| **ID** | `47e427e6-61bc-4e24-8d16-a12871b9f939` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Required Connectors** | [SentinelOne](../connectors/sentinelone.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelOne/Analytic%20Rules/SentinelOneMultipleAlertsOnHost.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AlertInfo`](../tables/alertinfo.md)
- [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)
- [`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)
- [`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)
- [`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)
- [`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)
- [`SentinelOne_CL`](../tables/sentinelone-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SentinelOne](../solutions/sentinelone.md)

