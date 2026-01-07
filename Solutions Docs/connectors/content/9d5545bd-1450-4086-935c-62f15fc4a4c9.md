# Mimecast Targeted Threat Protection - URL Protect

Detects malicious scan results and actions which are not allowed

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [MimecastTTP](../solutions/mimecastttp.md) |
| **ID** | `9d5545bd-1450-4086-935c-62f15fc4a4c9` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Discovery |
| **Techniques** | T0865 |
| **Required Connectors** | [MimecastTTPAPI](../connectors/mimecastttpapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastTTP/Analytic%20Rules/MimecastTTPUrl.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`MimecastTTPUrl_CL`](../tables/mimecastttpurl-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to MimecastTTP](../solutions/mimecastttp.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
