# DNS events related to mining pools

Identifies IP addresses that may be performing DNS lookups associated with common currency mining pools.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Windows Server DNS](../solutions/windows-server-dns.md) |
| **ID** | `0d76e9cf-788d-4a69-ac7d-f234826b5bed` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1496 |
| **Required Connectors** | [DNS](../connectors/dns.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Server%20DNS/Analytic%20Rules/DNS_Miners.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DnsEvents`](../tables/dnsevents.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Windows Server DNS](../solutions/windows-server-dns.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

