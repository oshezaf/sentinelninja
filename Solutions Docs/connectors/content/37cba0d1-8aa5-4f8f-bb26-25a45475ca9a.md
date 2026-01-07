# Metasploit / Impacket PsExec Process Creation Activity

Meant to detect process creations containing names consistent with the schema used by Metasploit or Impacket's PsExec tool. Metasploit and Impacket's PsExec tooling is used by malicious actors for lateral movement & performing actions on remote systems.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md) |
| **ID** | `37cba0d1-8aa5-4f8f-bb26-25a45475ca9a` |
| **Tactics** | Execution |
| **Techniques** | T1569.002 |
| **Required Connectors** | [SecurityEvent](../connectors/securityevent.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyborg%20Security%20HUNTER/Hunting%20Queries/Metasploit%20Impacket%20PsExec%20Process%20Creation%20Activity.yaml) |

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
