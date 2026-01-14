# Sentinel One - User viewed agent's passphrase

Detects when a user viewed agent's passphrase.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SentinelOne](../solutions/sentinelone.md) |
| **ID** | `51999097-60f4-42c0-bee8-fa28160e5583` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1555 |
| **Required Connectors** | [SentinelOne](../connectors/sentinelone.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelOne/Analytic%20Rules/SentinelOneViewAgentPassphrase.yaml) |

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

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SentinelOne](../solutions/sentinelone.md)

