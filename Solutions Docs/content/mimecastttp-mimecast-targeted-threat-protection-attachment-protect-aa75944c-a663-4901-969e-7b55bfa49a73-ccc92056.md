# Mimecast Targeted Threat Protection - Attachment Protect

Detects a threat for an unsafe attachment in an email

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [MimecastTTP](../solutions/mimecastttp.md) |
| **ID** | `aa75944c-a663-4901-969e-7b55bfa49a73` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Discovery |
| **Techniques** | T0865 |
| **Required Connectors** | [MimecastTTPAPI](../connectors/mimecastttpapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastTTP/Analytic%20Rules/MimecastTTPAttachment.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`MimecastTTPAttachment_CL`](../tables/mimecastttpattachment-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to MimecastTTP](../solutions/mimecastttp.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

