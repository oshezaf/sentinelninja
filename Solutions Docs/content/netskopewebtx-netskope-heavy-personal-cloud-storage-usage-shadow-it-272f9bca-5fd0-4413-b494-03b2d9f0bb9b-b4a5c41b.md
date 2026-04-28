# Netskope - Heavy Personal Cloud Storage Usage (Shadow IT)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects heavy usage of personal cloud storage applications like personal Dropbox, Google Drive, OneDrive personal, etc. Indicates potential Shadow IT or data leakage risk.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [NetskopeWebTx](../solutions/netskopewebtx.md) |
| **ID** | `272f9bca-5fd0-4413-b494-03b2d9f0bb9b` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration, Collection |
| **Techniques** | T1567, T1530 |
| **Required Connectors** | [NetskopeWebTxConnector](../connectors/netskopewebtxconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeWebTx/Analytic%20Rules/NetskopeWebtx_Rule4.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetskopeWebTransactions_CL`](../tables/netskopewebtransactions-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to NetskopeWebTx](../solutions/netskopewebtx.md)

