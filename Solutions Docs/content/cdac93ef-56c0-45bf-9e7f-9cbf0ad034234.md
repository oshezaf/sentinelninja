# Spoofing attempts from Specific Domains

This query identifies potential phishing or spoofing attempts originating from specific domains with authentication failures.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `cdac93ef-56c0-45bf-9e7f-9cbf0ad034234` |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [OfficeATP](../connectors/officeatp.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Hunting%20Queries/Check%20for%20spoofing%20attempts%20on%20the%20domain%20with%20Authentication%20failures.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`EmailEvents`](../tables/emailevents.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
