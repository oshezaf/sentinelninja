# Mimecast Secure Email Gateway - Internal Email Protect

Detects threats from internal email threat protection

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [MimecastSEG](../solutions/mimecastseg.md) |
| **ID** | `5b66d176-e344-4abf-b915-e5f09a6430ef` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement, Persistence, Exfiltration |
| **Techniques** | T1534, T1546 |
| **Required Connectors** | [MimecastSIEMAPI](../connectors/mimecastsiemapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastSEG/Analytic%20Rules/MimecastSIEM_Internal_Mail_Protect.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to MimecastSEG](../solutions/mimecastseg.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
