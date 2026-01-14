# Mimecast Secure Email Gateway - URL Protect

Detect threat when potentially malicious url found.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Mimecast](../solutions/mimecast.md) |
| **ID** | `80f244cd-b0d6-404e-9aed-37f7a66eda9f` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Discovery, Execution |
| **Techniques** | T1566 |
| **Required Connectors** | [MimecastSEGAPI](../connectors/mimecastsegapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Mimecast/Analytic%20Rules/MimecastSEG/MimecastCG_Url_Protect.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Seg_Cg_CL`](../tables/seg-cg-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Mimecast](../solutions/mimecast.md)

