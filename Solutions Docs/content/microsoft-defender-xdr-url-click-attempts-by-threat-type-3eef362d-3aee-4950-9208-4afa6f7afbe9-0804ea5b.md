# URL Click attempts by threat type

Visualises the total amount of click attempts on URLs with detections, split by the different threat types identified. Based on Defender for Office 365 workbook: https://techcommunity.microsoft.com/blog/microsoftdefenderforoffice365blog/part-2-build-custom-email-security-reports-and-dashboards-with-workbooks-in-micr/4411303

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `3eef362d-3aee-4950-9208-4afa6f7afbe9` |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Hunting%20Queries/Email%20and%20Collaboration%20Queries/URL/URL%20Click%20attempts%20by%20threat%20type.yaml) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Tables Used

This content item queries data from the following tables:

- [`UrlClickEvents`](../tables/urlclickevents.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
