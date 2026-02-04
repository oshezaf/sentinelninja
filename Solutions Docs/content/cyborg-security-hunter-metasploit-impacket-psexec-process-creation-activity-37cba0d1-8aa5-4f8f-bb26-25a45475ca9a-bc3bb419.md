# Metasploit / Impacket PsExec Process Creation Activity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

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

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SecurityEvent`](../tables/securityevent.md) | `EventID == "4688"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md)

