# Potential beaconing activity (ASIM DNS Solution)

This query identifies beaconing patterns from DNS logs based on recurrent frequency patterns. Such a potential outbound beaconing pattern to untrusted public networks should be investigated for any malware callbacks or data exfiltration attempts.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [DNS Essentials](../solutions/dns-essentials.md) |
| **ID** | `c4956c0b-4527-406c-b135-ef44002e1e70` |
| **Tactics** | CommandAndControl |
| **Techniques** | T1095, T1573, T1008, T1571, T1219 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Hunting%20Queries/PotentialBeaconingActivity.yaml) |

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
