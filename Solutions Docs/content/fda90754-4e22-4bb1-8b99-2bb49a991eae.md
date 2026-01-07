# High reverse DNS count by host

Clients with a high reverse DNS count could be carrying out reconnaissance or discovery activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Windows Server DNS](../solutions/windows-server-dns.md) |
| **ID** | `fda90754-4e22-4bb1-8b99-2bb49a991eae` |
| **Tactics** | Discovery |
| **Techniques** | T1046 |
| **Required Connectors** | [DNS](../connectors/dns.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Server%20DNS/Hunting%20Queries/DNS_HighReverseDNSCount.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DnsEvents`](../tables/dnsevents.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Windows Server DNS](../solutions/windows-server-dns.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
