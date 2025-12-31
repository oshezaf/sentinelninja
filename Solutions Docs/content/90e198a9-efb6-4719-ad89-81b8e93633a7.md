# Files uploaded to teams and access summary

This hunting queries identifies files uploaded to SharePoint via a Teams chat and summarizes users and IP addresses that have accessed these files. This allows for  identification of anomolous file sharing patterns.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft 365](../solutions/microsoft-365.md) |
| **ID** | `90e198a9-efb6-4719-ad89-81b8e93633a7` |
| **Tactics** | InitialAccess, Exfiltration |
| **Techniques** | T1199, T1102, T1078 |
| **Required Connectors** | [Office365](../connectors/office365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365/Hunting%20Queries/TeamsFilesUploaded.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OfficeActivity`](../tables/officeactivity.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft 365](../solutions/microsoft-365.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
