# AD FS Remote HTTP Network Connection

This detection uses Sysmon events (NetworkConnect events) to detect incoming network traffic on port 80 on AD FS servers. This could be a sign of a threat actor trying to use replication services on the AD FS server to get its configuration settings and extract sensitive information such as AD FS certificates. In order to use this query you need to enable Sysmon telemetry on the AD FS Server. Reference: https://twitter.com/OTR_Community/status/1387038995016732672 

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Windows Security Events](../solutions/windows-security-events.md) |
| **ID** | `d57c33a9-76b9-40e0-9dfa-ff0404546410` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection |
| **Techniques** | T1005 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Security%20Events/Analytic%20Rules/ADFSRemoteHTTPNetworkConnection.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Event`](../tables/event.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Windows Security Events](../solutions/windows-security-events.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

