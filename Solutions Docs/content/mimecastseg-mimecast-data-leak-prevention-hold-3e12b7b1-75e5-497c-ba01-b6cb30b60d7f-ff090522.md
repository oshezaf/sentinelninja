# Mimecast Data Leak Prevention - Hold

Detects threat for data leak when action is hold

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [MimecastSEG](../solutions/mimecastseg.md) |
| **ID** | `3e12b7b1-75e5-497c-ba01-b6cb30b60d7f` |
| **Severity** | Informational |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1030 |
| **Required Connectors** | [MimecastSIEMAPI](../connectors/mimecastsiemapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastSEG/Analytic%20Rules/MimecastDLP_Hold.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`MimecastDLP_CL`](../tables/mimecastdlp-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to MimecastSEG](../solutions/mimecastseg.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

