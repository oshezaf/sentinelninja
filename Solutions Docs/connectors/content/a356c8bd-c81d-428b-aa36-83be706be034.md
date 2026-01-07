# Microsoft Entra ID Local Device Join Information and Transport Key Registry Keys Access

'This detection uses Windows security events to detect suspicious access attempts by the same process to registry keys that provide information about an Microsoft Entra ID joined or registered devices and Transport keys (tkpub / tkpriv).  This information can be used to export the Device Certificate (dkpub / dkpriv) and Transport key (tkpub/tkpriv).  These set of keys can be used to impersonate existing Microsoft Entra ID joined devices.  This detection requires an access control entry (ACE) on

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Windows Security Events](../solutions/windows-security-events.md) |
| **ID** | `a356c8bd-c81d-428b-aa36-83be706be034` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1012 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Security%20Events/Analytic%20Rules/LocalDeviceJoinInfoAndTransportKeyRegKeysAccess.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityEvent`](../tables/securityevent.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Windows Security Events](../solutions/windows-security-events.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
