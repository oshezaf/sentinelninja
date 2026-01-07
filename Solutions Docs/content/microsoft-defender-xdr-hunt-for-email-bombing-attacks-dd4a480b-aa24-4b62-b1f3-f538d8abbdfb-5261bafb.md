# Hunt for email bombing attacks

This query helps to hunt for possible email bombing attacks in Microsoft Defender for Office 365.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `dd4a480b-aa24-4b62-b1f3-f538d8abbdfb` |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Solution JSON** | ⚠️ Not listed |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Hunting%20Queries/Email%20and%20Collaboration%20Queries/Hunting/Hunt%20for%20email%20bombing%20attacks.yaml) |

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
