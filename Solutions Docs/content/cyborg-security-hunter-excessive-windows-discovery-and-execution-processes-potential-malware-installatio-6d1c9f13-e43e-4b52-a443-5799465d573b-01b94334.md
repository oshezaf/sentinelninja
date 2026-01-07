# Excessive Windows Discovery and Execution Processes - Potential Malware Installation

Utilizes a list of commonly abused LOLB an attacker or malware would execute in quick succession. The presence of multiple executions of the programs within the list can be indicative of an infection or malicious activity occurring on a victim host.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md) |
| **ID** | `6d1c9f13-e43e-4b52-a443-5799465d573b` |
| **Tactics** | Discovery |
| **Techniques** | T1016 |
| **Required Connectors** | [SecurityEvent](../connectors/securityevent.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyborg%20Security%20HUNTER/Hunting%20Queries/Excessive%20Windows%20Discovery%20and%20Execution%20Processes%20-%20Potential%20Malware%20Installation.yaml) |

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
