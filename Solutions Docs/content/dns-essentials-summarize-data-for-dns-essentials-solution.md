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

## Additional Documentation

> 📄 *Source: [SummarizeData_DNSEssentials/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Playbooks/SummarizeData_DNSEssentials/readme.md)*

# DNS Essentials Summarization capability

This logic app helps to ingest summarized DNS data into custom tables. Please note - enabling this playbook would incur additional cost.

 ## Summary
 To ensure good performance of DNS Domain solution, summarization capability can be used. This would create two custom tables containing analytics based on different parameters of ASIM DNS Schema. This playbook will create the following two tables in your Log Analytics Workspace:
 * DNS_Summarized_Logs_sourceInfo_CL
 * DNS_Summarized_Logs_ip_CL

### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/deployDNSDataSummarizationPlaybookPublic)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://aka.ms/deployDNSDataSummarizationPlaybookGov)

2. Fill in the required parameter:
    * Playbook Name: Enter the playbook name here (Ex: SummarizeDNSData)

### Post-Deployment instructions 
#### a. Authorize connections (Perform this action if needed)
Once deployment is complete, you will need to authorize each connection.
1.	Click the Azure Monitor Logs
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.  Click the Azure Log Analytics Data Collector
7.	Click edit API connection
8.	Add value for workspace id and key which is associated with the Sentinel instance
9.	Click Save

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to DNS Essentials](../solutions/dns-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
