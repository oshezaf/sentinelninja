# Increase in DNS Requests by client than the daily average count (ASIM DNS Solution)

Checking for a threefold increase or more in Full Name lookups per client IP for today vs. the daily average for the previous week.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [DNS Essentials](../solutions/dns-essentials.md) |
| **ID** | `b31b5d70-4c75-4a5f-8af7-6a83f6eb372c` |
| **Tactics** | CommandAndControl, Exfiltration |
| **Techniques** | T1568, T1008, T1048 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Hunting%20Queries/IncreaseInDNSRequestsByClientThanTheDailyAverageCount.yaml) |

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
