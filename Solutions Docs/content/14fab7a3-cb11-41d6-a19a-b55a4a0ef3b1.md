# Windows System Shutdown/Reboot(Sysmon)

This hunting query uses Sysmon telemetry to detect System Shutdown/Reboot (MITRE Technique: T1529).

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Windows Security Events](../solutions/windows-security-events.md) |
| **ID** | `14fab7a3-cb11-41d6-a19a-b55a4a0ef3b1` |
| **Tactics** | Impact |
| **Techniques** | T1529 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Security%20Events/Hunting%20Queries/WindowsSystemShutdownReboot.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Event`](../tables/event.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Windows Security Events](../solutions/windows-security-events.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
