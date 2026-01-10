# DNS - domain anomalous lookup increase

'Checking for a threefold increase or more of domain lookups per client IP address for the current day compared to the daily average for the previous week. This can potentially identify excessive traffic to a given location that could be indicative of data transfer out of your network to a group of systems based on the same second level domain. For example, if one client is sending requests for test1.badguy.com and another client is sending requests for test2.badguy.com, you may not see a high e

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Windows Server DNS](../solutions/windows-server-dns.md) |
| **ID** | `1d9951b7-51f0-4aa7-af0c-654359aadfff` |
| **Tactics** | CommandAndControl, Exfiltration |
| **Techniques** | T1568, T1008, T1048 |
| **Required Connectors** | [DNS](../connectors/dns.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Server%20DNS/Hunting%20Queries/DNS_DomainAnomalousLookupIncrease.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DnsEvents`](../tables/dnsevents.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Windows Server DNS](../solutions/windows-server-dns.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

