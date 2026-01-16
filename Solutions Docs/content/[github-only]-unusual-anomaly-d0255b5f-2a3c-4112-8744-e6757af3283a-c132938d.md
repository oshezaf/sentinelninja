# Unusual Anomaly

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Anomaly Rules generate events in the Anomalies table. This scheduled rule tries to detect Anomalies that are not usual, they could be a type of Anomaly that has recently been activated, or an infrequent type. The detected Anomaly should be reviewed, if it is relevant enough, eventually a separate scheduled Analytics Rule could be created specifically for that Anomaly Type, so an alert and/or incident is generated everytime that type of Anomaly happens.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [[GitHub Only]](../solutions/[github-only].md) |
| **ID** | `d0255b5f-2a3c-4112-8744-e6757af3283a` |
| **Severity** | Medium |
| **Kind** | Scheduled |

## Tables Used

This content item queries data from the following tables:

- [`Anomalies`](../tables/anomalies.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to [GitHub Only]](../solutions/[github-only].md)

