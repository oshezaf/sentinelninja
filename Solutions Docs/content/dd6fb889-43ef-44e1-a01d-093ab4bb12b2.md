# Suspicious Enumeration using Adfind Tool

Query detects Adfind tool use for domain reconnaissance, regardless of executable name, focusing on DC and ADFS servers, to spot potential adversary activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Windows Security Events](../solutions/windows-security-events.md) |
| **ID** | `dd6fb889-43ef-44e1-a01d-093ab4bb12b2` |
| **Tactics** | Execution, Discovery, Collection |
| **Techniques** | T1059, T1087, T1482, T1201, T1069, T1074 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Security%20Events/Hunting%20Queries/Suspicious_enumeration_using_adfind.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityEvent`](../tables/securityevent.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Windows Security Events](../solutions/windows-security-events.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
