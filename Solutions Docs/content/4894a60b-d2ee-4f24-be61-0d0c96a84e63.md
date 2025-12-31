# LSASS Memory Dumping using WerFault.exe - Command Identification

Identifies WerFault.exe creating a memory dump of lsass.exe (Local Security Authority Subsystem Service, a process responsible for the enforcement of security policies on Windows systems, which generates and stores credentials in its process memory).

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md) |
| **ID** | `4894a60b-d2ee-4f24-be61-0d0c96a84e63` |
| **Tactics** | CredentialAccess |
| **Techniques** | T1003 |
| **Required Connectors** | [SecurityEvent](../connectors/securityevent.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyborg%20Security%20HUNTER/Hunting%20Queries/LSASS%20Memory%20Dumping%20using%20WerFault.exe%20-%20Command%20Identification.yaml) |

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
