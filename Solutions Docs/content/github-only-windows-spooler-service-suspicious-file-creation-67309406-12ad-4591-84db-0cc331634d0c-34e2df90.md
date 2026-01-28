# Windows Spooler Service Suspicious File Creation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The query digs in Windows print spooler drivers folder for any file creations, MANY OF THE FILES THAT SHOULD COME UP HERE MAY BE LEGIT. Suspicious DLL is load from Spooler Service backup folder.  This behavior is used from PoC Exploit of CVE-2021-34527, CVE-2021-1675 or CVE-2022-21999.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `67309406-12ad-4591-84db-0cc331634d0c` |
| **Tactics** | Privilege escalation, Lateral movement, Exploit |
| **Techniques** | t1574 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Exploits/print-pooler-service-suspicious-file-creation.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`DeviceFileEvents`](../tables/devicefileevents.md) | `ActionType == "FileCreated"` | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

