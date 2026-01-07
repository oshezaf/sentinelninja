# Abnormally long DNS URI queries

'The length of a DNS query can often be an indicator of suspicious activity. Typical domain name lengths are short, whereas the domain name query used for data exfiltration or tunneling can often be very large in size. This is because they could be encoded using base 64/32 etc. The hunting query looks for Names that are more than 150 characters in length. Due to a lot of services using long DNS to communicate via procedurally generated long domain names, this can be problematic, so a number of k

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Windows Server DNS](../solutions/windows-server-dns.md) |
| **ID** | `a0954a17-cc66-4d47-9651-8bf524bbdcc8` |
| **Tactics** | CommandAndControl, Exfiltration |
| **Techniques** | T1568, T1008, T1048 |
| **Required Connectors** | [DNS](../connectors/dns.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Server%20DNS/Hunting%20Queries/DNS_LongURILookup.yaml) |

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
