# Ngrok Reverse Proxy on Network (ASIM DNS Solution)

This detection identifies the top four Ngrok domains from DNS resolution. Ngrok reverse proxy can bypass network defense. While not inherently harmful, it has been used for malicious activities recently.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [DNS Essentials](../solutions/dns-essentials.md) |
| **ID** | `50b0dfb7-2c94-4eaf-a332-a5936d78c263` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1572, T1090, T1102 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Analytic%20Rules/NgrokReverseProxyOnNetwork.yaml) |

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

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to DNS Essentials](../solutions/dns-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
