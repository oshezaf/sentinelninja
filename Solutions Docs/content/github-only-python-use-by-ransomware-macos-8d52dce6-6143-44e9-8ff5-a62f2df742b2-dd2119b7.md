# python-use-by-ransomware-macos

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query was originally published in the threat analytics report, EvilQuest signals the rise of Mac ransomware. As of the time of this writing (October 2020), ransomware designed to target macOS is relatively rare. EvilQuest is one of the few examples of this kind of malware on the platform. The query below can help locate an attempt to run Python in service of malicious activity by a remote operator. The command the query searches for is associated with, but not definitely indicative of, Evil

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `8d52dce6-6143-44e9-8ff5-a62f2df742b2` |
| **Tactics** | Execution, Command and control |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Command%20and%20Control/python-use-by-ransomware-macos.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`DeviceFileEvents`](../tables/devicefileevents.md) | ✓ | ✗ |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

