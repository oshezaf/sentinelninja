# AD FS Remote Auth Sync Connection

'This detection uses Security events from the "AD FS Auditing" provider to detect suspicious authentication events on an AD FS server. The results then get correlated with events from the Windows Filtering Platform (WFP) to detect suspicious incoming network traffic on port 80 on the AD FS server. This could be a sign of a threat actor trying to use replication services on the AD FS server to get its configuration settings and extract sensitive information such as AD FS certificates. In order to

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Windows Security Events](../solutions/windows-security-events.md) |
| **ID** | `2f4165a6-c4fb-4e94-861e-37f1b4d6c0e6` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection |
| **Techniques** | T1005 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Security%20Events/Analytic%20Rules/ADFSRemoteAuthSyncConnection.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityEvent`](../tables/securityevent.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Windows Security Events](../solutions/windows-security-events.md)

