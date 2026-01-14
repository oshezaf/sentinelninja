# Anomalous High-Privileged Role Assignment

Adversaries may manipulate accounts to maintain access to victim systems. These actions include adding new accounts to high-privilege groups. Dragonfly 2.0, for example, added newly created accounts to the administrators group to maintain elevated access. The query below generates an output of all high-privilege users performing Add member to priveleged role, or where one or more features of the activity deviate from the user, his peers, or the tenant profile.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [UEBA Essentials](../solutions/ueba-essentials.md) |
| **ID** | `5aa5083c-1de6-42bb-a128-2ec2aba1de39` |
| **Tactics** | Persistence |
| **Techniques** | T1098 |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials/Hunting%20Queries/Anomalous%20High-Privileged%20Role%20Assignment.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AuditLogs`](../tables/auditlogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to UEBA Essentials](../solutions/ueba-essentials.md)

