# Top outbound recipient domains sending inbound emails with threats

This query helps hunting for top outbound recipient domains which are sending inbound emails with threats

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `38d6e2fb-a804-4170-8d32-d251ecd6bcd2` |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Solution JSON** | ⚠️ Not listed |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Hunting%20Queries/Email%20and%20Collaboration%20Queries/Hunting/Top%20outbound%20recipient%20domains%20sending%20inbound%20emails%20with%20threats.yaml) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

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
