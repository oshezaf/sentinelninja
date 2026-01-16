# Missing Domain Controller Heartbeat

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This detection will go over the heartbeats received from the agents of Domain Controllers over the last hour, and will create alerts if the last heartbeats were received an hour ago.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `b8b8ba09-1e89-45a1-8bd7-691cd23bfa32` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Impact, DefenseEvasion |
| **Techniques** | T1499, T1564 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Detections/Analytic%20Rules/Heartbeat/MissingDCHearbeat.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Heartbeat`](../tables/heartbeat.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Standalone Content](../solutions/standalone-content.md)

