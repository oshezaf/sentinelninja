# Mimecast Secure Email Gateway - Attachment Protect

Detect threat for mail attachment under the targeted threat protection

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [MimecastSEG](../solutions/mimecastseg.md) |
| **ID** | `72264f4f-61fb-4f4f-96c4-635571a376c2` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Collection, Exfiltration, Discovery, InitialAccess, Execution |
| **Techniques** | T1114, T1566, T0865 |
| **Required Connectors** | [MimecastSIEMAPI](../connectors/mimecastsiemapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastSEG/Analytic%20Rules/MimecastSIEM_Attachment.yaml) |

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
