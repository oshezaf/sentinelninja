# Corelight - Repetitive DNS Failures

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Query searches for repetitive DNS resolution failures from single host.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Corelight](../solutions/corelight.md) |
| **ID** | `1ea3a384-77a4-4b0d-8e42-74d26b38ab5b` |
| **Severity** | Medium |
| **Tactics** | CommandAndControl |
| **Techniques** | T1094, T1043 |
| **Required Connectors** | [Corelight](../connectors/corelight.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Corelight/Hunting%20Queries/CorelightRepetitiveDnsFailures.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`Corelight_v2_dns_CL`](../tables/corelight-v2-dns-cl.md) | — | — |
| [`Corelight_v2_dns_red_CL`](../tables/corelight-v2-dns-red-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Corelight](../solutions/corelight.md)

