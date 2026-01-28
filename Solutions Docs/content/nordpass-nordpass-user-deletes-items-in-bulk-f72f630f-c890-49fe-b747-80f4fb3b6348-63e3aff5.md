# NordPass - User deletes items in bulk

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This will alert you if a user deletes items in bulk, namely, more than 10 items or in the span of 10 minutes.  If a mix of bulk and one-off deletions were performed, this will group all actions and report the total number of items deleted.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [NordPass](../solutions/nordpass.md) |
| **ID** | `f72f630f-c890-49fe-b747-80f4fb3b6348` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Impact, Collection |
| **Techniques** | T1485, T1074 |
| **Required Connectors** | [NordPass](../connectors/nordpass.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordPass/Analytics%20Rules/nordpass_items_bulk_delete.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to NordPass](../solutions/nordpass.md)

