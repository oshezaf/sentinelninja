# Windows Reserved Filenames staged on Office file services

This identifies Windows Reserved Filenames on Office services like SharePoint and OneDrive. It also detects when a user uploads these files to another user's workspace, which may indicate malicious activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft 365](../solutions/microsoft-365.md) |
| **ID** | `61c28cd7-3139-4731-8ea7-2cbbeabb4684` |
| **Tactics** | CommandAndControl |
| **Techniques** | T1105 |
| **Required Connectors** | [Office365](../connectors/office365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365/Hunting%20Queries/WindowsReservedFileNamesOnOfficeFileServices.yaml) |

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
