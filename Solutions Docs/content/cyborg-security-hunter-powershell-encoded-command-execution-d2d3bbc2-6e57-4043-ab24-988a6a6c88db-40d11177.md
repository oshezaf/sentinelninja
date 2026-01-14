# Powershell Encoded Command Execution

Looks for valid variations of the -EncodedCommand parameter. Commonly used to encode or obfuscate commands, and not all occurrences are malicious.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md) |
| **ID** | `d2d3bbc2-6e57-4043-ab24-988a6a6c88db` |
| **Tactics** | DefenseEvasion, Execution |
| **Techniques** | T1027, T1059.001 |
| **Required Connectors** | [SecurityEvent](../connectors/securityevent.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyborg%20Security%20HUNTER/Hunting%20Queries/Powershell%20Encoded%20Command%20Execution.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityEvent`](../tables/securityevent.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md)

