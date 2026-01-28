# DNS lookups for commonly abused TLDs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Some top level domains (TLDs) are more commonly associated with malware for a range of  reasons - including how easy domains on these TLDs are to obtain. Many of these may be undesirable  from an enterprise policy perspective. You can update and extend the list of TLD's  you wish to search for. The NameCount column provides an initial insight into how widespread the domain usage is across the environment.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Windows Server DNS](../solutions/windows-server-dns.md) |
| **ID** | `8e9c4680-8c0b-4885-b183-3b09efd8fc2c` |
| **Tactics** | CommandAndControl, Exfiltration |
| **Techniques** | T1568, T1008, T1048 |
| **Required Connectors** | [DNS](../connectors/dns.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Server%20DNS/Hunting%20Queries/DNS_CommonlyAbusedTLDs.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`DnsEvents`](../tables/dnsevents.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Windows Server DNS](../solutions/windows-server-dns.md)

