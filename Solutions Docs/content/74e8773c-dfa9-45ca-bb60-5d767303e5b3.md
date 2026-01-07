# Possible DNS Tunneling or Data Exfiltration Activity (ASIM DNS Solution)

Typical domain name lengths are short, whereas domain name queries used for data exfiltration or tunneling can often be very large in size. The hunting query looks for DNS queries that are more than 150 characters long.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [DNS Essentials](../solutions/dns-essentials.md) |
| **ID** | `74e8773c-dfa9-45ca-bb60-5d767303e5b3` |
| **Tactics** | CommandAndControl, Exfiltration |
| **Techniques** | T1568, T1008, T1048 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Hunting%20Queries/PossibleDNSTunnelingOrDataExfiltrationActivity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)
- [`AZFWDnsQuery`](../tables/azfwdnsquery.md)
- [`AzureDiagnostics`](../tables/azurediagnostics.md)
- [`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)
- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`Corelight_CL`](../tables/corelight-cl.md)
- [`DnsEvents`](../tables/dnsevents.md)
- [`Event`](../tables/event.md)
- [`GCP_DNS_CL`](../tables/gcp-dns-cl.md)
- [`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)
- [`SentinelOne_CL`](../tables/sentinelone-cl.md)
- [`Syslog`](../tables/syslog.md)
- [`VectraStream_CL`](../tables/vectrastream-cl.md)
- [`WindowsEvent`](../tables/windowsevent.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to DNS Essentials](../solutions/dns-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
