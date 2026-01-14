# DNS Full Name anomalous lookup increase

Checking for a threefold increase or more in Full Name lookups per Client IP for the current day as compared to the daily average for the previous week. This can potentially identify excessive traffic to a given location that could be indicative of data transfer out of your network. This is only for Name lookups, so it would be recommended to review the firewall and web proxy logs in relation to the ClientIP making the interesting requests.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Windows Server DNS](../solutions/windows-server-dns.md) |
| **ID** | `81b478a7-46e2-4f7f-a1aa-aba5e541232b` |
| **Tactics** | CommandAndControl, Exfiltration |
| **Techniques** | T1568, T1008, T1048 |
| **Required Connectors** | [DNS](../connectors/dns.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Server%20DNS/Hunting%20Queries/DNS_FullNameAnomalousLookupIncrease.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DnsEvents`](../tables/dnsevents.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Windows Server DNS](../solutions/windows-server-dns.md)

