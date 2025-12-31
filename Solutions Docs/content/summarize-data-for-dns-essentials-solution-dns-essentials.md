# Summarize Data for DNS Essentials Solution

This playbook summarizes data for DNS Essentials Solution and ingests into custom tables.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [DNS Essentials](../solutions/dns-essentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Playbooks/SummarizeData_DNSEssentials/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) | read |
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) | read |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | read |
| [`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md) | read |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | read |
| [`Corelight_CL`](../tables/corelight-cl.md) | read |
| [`DNS_Summarized_Logs_ip_CL`](../tables/dns-summarized-logs-ip-cl.md) | read/write |
| [`DNS_Summarized_Logs_sourceInfo_CL`](../tables/dns-summarized-logs-sourceinfo-cl.md) | write |
| [`DnsEvents`](../tables/dnsevents.md) | read |
| [`Event`](../tables/event.md) | read |
| [`GCP_DNS_CL`](../tables/gcp-dns-cl.md) | read |
| [`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md) | read |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) | read |
| [`Syslog`](../tables/syslog.md) | read |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) | read |
| [`WindowsEvent`](../tables/windowsevent.md) | read |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to DNS Essentials](../solutions/dns-essentials.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
