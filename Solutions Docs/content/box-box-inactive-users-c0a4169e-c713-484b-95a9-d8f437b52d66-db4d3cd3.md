# Box - Inactive users

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Query shows inactive user accounts (users which last login time is more than 30 days).

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Box](../solutions/box.md) |
| **ID** | `c0a4169e-c713-484b-95a9-d8f437b52d66` |
| **Severity** | Medium |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [BoxDataConnector](../connectors/boxdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Box/Hunting%20Queries/BoxInactiveUsers.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`BoxEventsV2_CL`](../tables/boxeventsv2-cl.md) | — | — |
| [`BoxEvents_CL`](../tables/boxevents-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Box](../solutions/box.md)

