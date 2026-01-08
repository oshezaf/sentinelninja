# GWorkspace - License Revoke and Assignment to User

This hunting query searches for license revoke and assignment in quick succession to user, potential sign of data exfiltration. https://www.mitiga.io/blog/mitiga-security-advisory-lack-of-forensic-visibility-with-the-basic-license-in-google-drive

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [GoogleWorkspaceReports](../solutions/googleworkspacereports.md) |
| **ID** | `b1235ce0-06a0-446b-baad-852874f57bd4` |
| **Severity** | Medium |
| **Tactics** | Exfiltration |
| **Techniques** | T1537 |
| **Required Connectors** | [GoogleWorkspaceReportsAPI](../connectors/googleworkspacereportsapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleWorkspaceReports/Hunting%20Queries/GWorkspaceLicenseRevokeAndAssignmentToUser.yaml) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to GoogleWorkspaceReports](../solutions/googleworkspacereports.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
