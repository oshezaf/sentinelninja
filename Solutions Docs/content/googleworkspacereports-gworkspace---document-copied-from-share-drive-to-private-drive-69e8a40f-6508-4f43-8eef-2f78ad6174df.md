# GWorkspace - Document Copied from Share Drive to Private Drive

This hunting query searches for document copy activity from shared drive to a private drive, potential sign of data exfiltration. https://www.mitiga.io/blog/mitiga-security-advisory-lack-of-forensic-visibility-with-the-basic-license-in-google-drive

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [GoogleWorkspaceReports](../solutions/googleworkspacereports.md) |
| **ID** | `69e8a40f-6508-4f43-8eef-2f78ad6174df` |
| **Severity** | Medium |
| **Tactics** | Exfiltration, Impact |
| **Techniques** | T1537, T1565 |
| **Required Connectors** | [GoogleWorkspaceReportsAPI](../connectors/googleworkspacereportsapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleWorkspaceReports/Hunting%20Queries/GWorkspaceDocumentCopiedToPrivateDrive.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to GoogleWorkspaceReports](../solutions/googleworkspacereports.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
