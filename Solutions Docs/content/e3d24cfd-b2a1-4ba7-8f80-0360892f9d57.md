# SharePointFileOperation via previously unseen IPs

Shows SharePoint upload/download volume by IPs with high-risk ASNs. New IPs with volume spikes may be unauthorized and exfiltrating documents.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft 365](../solutions/microsoft-365.md) |
| **ID** | `e3d24cfd-b2a1-4ba7-8f80-0360892f9d57` |
| **Tactics** | Exfiltration |
| **Techniques** | T1030 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [Office365](../connectors/office365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365/Hunting%20Queries/new_sharepoint_downloads_by_IP.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OfficeActivity`](../tables/officeactivity.md)
- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft 365](../solutions/microsoft-365.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
