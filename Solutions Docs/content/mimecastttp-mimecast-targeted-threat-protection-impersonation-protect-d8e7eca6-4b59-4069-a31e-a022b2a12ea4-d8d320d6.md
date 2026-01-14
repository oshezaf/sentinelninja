# Mimecast Targeted Threat Protection - Impersonation Protect

Detects a maliciously tagged impersonation

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [MimecastTTP](../solutions/mimecastttp.md) |
| **ID** | `d8e7eca6-4b59-4069-a31e-a022b2a12ea4` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration, Collection, Discovery |
| **Techniques** | T1114 |
| **Required Connectors** | [MimecastTTPAPI](../connectors/mimecastttpapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastTTP/Analytic%20Rules/MimecastTTPImpersonation.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`MimecastTTPImpersonation_CL`](../tables/mimecastttpimpersonation-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to MimecastTTP](../solutions/mimecastttp.md)

