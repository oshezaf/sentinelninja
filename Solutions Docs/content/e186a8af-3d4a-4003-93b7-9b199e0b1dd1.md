# PowerShell Pastebin Download

Detects PowerShell commands downloading and execute code hosted on Pastebin and other services. This technique has been used by malicious actors to distribute malware, in particular it has been used by the EvilCorp Ransomware variants such as Sodinokibi.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md) |
| **ID** | `e186a8af-3d4a-4003-93b7-9b199e0b1dd1` |
| **Tactics** | CommandandControl |
| **Techniques** | T1102 |
| **Required Connectors** | [SecurityEvent](../connectors/securityevent.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyborg%20Security%20HUNTER/Hunting%20Queries/PowerShell%20Pastebin%20Download.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityEvent`](../tables/securityevent.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
