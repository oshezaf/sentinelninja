# DNS Essentials

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="DNS Essentials Logo" width="75" height="75">

This is a [domain solution](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.microsoft.com%2Fazure%2Fsentinel%2Fsentinel-solutions-catalog%23domain-solutions&data=05%7C01%7Ckavishbakshi%40microsoft.com%7Cbe2a496082b24caa4b8c08da9cefacca%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637994850502413731%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=OJegu%2B2EqD7rmYmK9pm9QniD6YWp5ooloZ6tHzcwVi0%3D&reserved=0) and does not include any data connectors. The content in this solution requires one of the product solutions below, as well as any other connector or data source normalized to the [ASIM](https://aka.ms/AboutASIM).

**Prerequisite :-**

 Install one or more of the listed solutions, or develop your custom ASIM parsers to unlock the value provided by this solution.
 1. Windows Server DNS 
 2. Azure Firewall 
 3. Cisco Umbrella 
 4. Corelight Zeek 
 5. Google Cloud Platform DNS 
 6. Infoblox NIOS 
 7. ISC Bind 
 8. Vectra AI 
 9. Zscaler Internet Access 

**Underlying Microsoft Technologies used:** 

This solution takes a dependency on the following technologies, and some of these dependencies either may be in Preview state or might result in additional ingestion or operational costs: 
 1. Product solutions as described above 
 2. Logic app for data summarization

**Recommendation :-**

It is highly recommended to use the **Summarize Data for DNS Essentials Solution** logic app playbook provided with this solution as it will significantly improve the performance of the Workbook, Analytic rules & Hunting queries.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.4 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2023-01-14 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **14 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) | Analytics, Hunting, Playbooks, Workbooks |
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) | Analytics, Hunting, Playbooks, Workbooks |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Analytics, Hunting, Playbooks, Workbooks |
| [`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md) | Analytics, Hunting, Playbooks, Workbooks |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Analytics, Hunting, Playbooks, Workbooks |
| [`Corelight_CL`](../tables/corelight-cl.md) | Analytics, Hunting, Playbooks, Workbooks |
| [`DnsEvents`](../tables/dnsevents.md) | Analytics, Hunting, Playbooks, Workbooks |
| [`Event`](../tables/event.md) | Analytics, Hunting, Playbooks, Workbooks |
| [`GCP_DNS_CL`](../tables/gcp-dns-cl.md) | Analytics, Hunting, Playbooks, Workbooks |
| [`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md) | Analytics, Hunting, Playbooks, Workbooks |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) | Analytics, Hunting, Playbooks, Workbooks |
| [`Syslog`](../tables/syslog.md) | Analytics, Hunting, Playbooks, Workbooks |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) | Analytics, Hunting, Playbooks, Workbooks |
| [`WindowsEvent`](../tables/windowsevent.md) | Analytics, Hunting, Playbooks, Workbooks |

### Internal Tables

The following **2 table(s)** are used internally by this solution's playbooks:

| Table | Used By Content |
|-------|----------------|
| [`DNS_Summarized_Logs_ip_CL`](../tables/dns-summarized-logs-ip-cl.md) | Analytics, Hunting, Playbooks (writes), Workbooks |
| [`DNS_Summarized_Logs_sourceInfo_CL`](../tables/dns-summarized-logs-sourceinfo-cl.md) | Playbooks (writes), Workbooks |

## Content Items

This solution includes **21 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 10 |
| Analytic Rules | 9 |
| Workbooks | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Detect DNS queries reporting multiple errors from different clients - Anomaly Based (ASIM DNS Solution)](../content/dns-essentials-detect-dns-queries-reporting-multiple-errors-from-different-clients-anomaly-based-asim-dn-cf687598-5a2c-46f8-81c8-06b15ed489b1-e7ae2b7d.md) | Medium | CommandAndControl | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`DNS_Summarized_Logs_ip_CL`](../tables/dns-summarized-logs-ip-cl.md) |
| [Detect DNS queries reporting multiple errors from different clients - Static threshold based (ASIM DNS Solution)](../content/dns-essentials-detect-dns-queries-reporting-multiple-errors-from-different-clients-static-threshold-base-5b8344eb-fa28-4ac3-bcff-bc19d5d63089-d16106dc.md) | Medium | CommandAndControl | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Detect excessive NXDOMAIN DNS queries - Anomaly based (ASIM DNS Solution)](../content/dns-essentials-detect-excessive-nxdomain-dns-queries-anomaly-based-asim-dns-solution-02f23312-1a33-4390-8b80-f7cd4df4dea0-980141b9.md) | Medium | CommandAndControl | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`DNS_Summarized_Logs_ip_CL`](../tables/dns-summarized-logs-ip-cl.md) |
| [Detect excessive NXDOMAIN DNS queries - Static threshold based (ASIM DNS Solution)](../content/dns-essentials-detect-excessive-nxdomain-dns-queries-static-threshold-based-asim-dns-solution-4ab8b09e-3c23-4974-afbe-7e653779eb2b-b0da6e00.md) | Medium | CommandAndControl | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Ngrok Reverse Proxy on Network (ASIM DNS Solution)](../content/dns-essentials-ngrok-reverse-proxy-on-network-asim-dns-solution-50b0dfb7-2c94-4eaf-a332-a5936d78c263-4a9c6d43.md) | Medium | CommandAndControl | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Anomaly based (ASIM DNS Solution)](../content/dns-essentials-potential-dga-domain-generation-algorithm-detected-via-repetitive-failures-anomaly-based--01191239-274e-43c9-b154-3a042692af06-1a7b8167.md) | Medium | CommandAndControl | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`DNS_Summarized_Logs_ip_CL`](../tables/dns-summarized-logs-ip-cl.md) |
| [Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Static threshold based (ASIM DNS Solution)](../content/dns-essentials-potential-dga-domain-generation-algorithm-detected-via-repetitive-failures-static-thresho-89ba52fa-96a7-4653-829a-ca49bb13336c-71c9371c.md) | Medium | CommandAndControl | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Rare client observed with high reverse DNS lookup count - Anomaly based (ASIM DNS Solution)](../content/dns-essentials-rare-client-observed-with-high-reverse-dns-lookup-count-anomaly-based-asim-dns-solution-0fe6bde4-b215-480c-99b4-84a96edcdbd7-c30ddd41.md) | Medium | Reconnaissance | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Rare client observed with high reverse DNS lookup count - Static threshold based (ASIM DNS Solution)](../content/dns-essentials-rare-client-observed-with-high-reverse-dns-lookup-count-static-threshold-based-asim-dns-s-77b7c820-5f60-4779-8bdb-f06e21add5f1-4a01cdd0.md) | Medium | Reconnaissance | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [CVE-2020-1350 (SIGRED) exploitation pattern (ASIM DNS Solution)](../content/dns-essentials-cve-2020-1350-sigred-exploitation-pattern-asim-dns-solution-0a8f5777-f38a-4c37-b531-411bdecef976-beaf980e.md) | DefenseEvasion, PrivilegeEscalation | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Connection to Unpopular Website Detected (ASIM DNS Solution)](../content/dns-essentials-connection-to-unpopular-website-detected-asim-dns-solution-83e70a34-d96f-419d-815b-43d1499e88ed-193019cc.md) | CommandAndControl | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`DNS_Summarized_Logs_ip_CL`](../tables/dns-summarized-logs-ip-cl.md) |
| [Increase in DNS Requests by client than the daily average count (ASIM DNS Solution)](../content/dns-essentials-increase-in-dns-requests-by-client-than-the-daily-average-count-asim-dns-solution-b31b5d70-4c75-4a5f-8af7-6a83f6eb372c-150365d8.md) | CommandAndControl, Exfiltration | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Possible DNS Tunneling or Data Exfiltration Activity (ASIM DNS Solution)](../content/dns-essentials-possible-dns-tunneling-or-data-exfiltration-activity-asim-dns-solution-74e8773c-dfa9-45ca-bb60-5d767303e5b3-4f04fe19.md) | CommandAndControl, Exfiltration | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Potential beaconing activity (ASIM DNS Solution)](../content/dns-essentials-potential-beaconing-activity-asim-dns-solution-c4956c0b-4527-406c-b135-ef44002e1e70-2cb4ba7f.md) | CommandAndControl | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Top 25 DNS queries with most failures in last 24 hours (ASIM DNS Solution)](../content/dns-essentials-top-25-dns-queries-with-most-failures-in-last-24-hours-asim-dns-solution-4717929b-121d-4d90-b7ba-e3259ef16aca-f88092fc.md) | CommandAndControl | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Top 25 Domains with large number of Subdomains (ASIM DNS Solution)](../content/dns-essentials-top-25-domains-with-large-number-of-subdomains-asim-dns-solution-5366b848-0886-439f-b312-0b94bb687d06-95f74336.md) | CommandAndControl, Exfiltration | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Top 25 Sources(Clients) with high number of errors in last 24hours (ASIM DNS Solution)](../content/dns-essentials-top-25-sources-clients-with-high-number-of-errors-in-last-24hours-asim-dns-solution-b35f6633-0d18-494c-a5e4-2828daf442bf-dd4cdd6a.md) | CommandAndControl | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Unexpected top level domains (ASIM DNS Solution)](../content/dns-essentials-unexpected-top-level-domains-asim-dns-solution-4c8d6412-5a48-42c3-8b5e-1f29fb15c749-c748185b.md) | CommandAndControl | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [[Anomaly] Anomalous Increase in DNS activity by clients (ASIM DNS Solution)](../content/dns-essentials-[anomaly]-anomalous-increase-in-dns-activity-by-clients-asim-dns-solution-50f0cdfb-8b01-4eca-823d-2bbe6b8a5b95-eb2b2313.md) | CommandAndControl, Exfiltration | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`DNS_Summarized_Logs_ip_CL`](../tables/dns-summarized-logs-ip-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DNSSolutionWorkbook](../content/dns-essentials-dnssolutionworkbook-9b8ac8e7.md) | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`DNS_Summarized_Logs_ip_CL`](../tables/dns-summarized-logs-ip-cl.md)<br>[`DNS_Summarized_Logs_sourceInfo_CL`](../tables/dns-summarized-logs-sourceinfo-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Summarize Data for DNS Essentials Solution](../content/dns-essentials-summarize-data-for-dns-essentials-solution-bd44274c.md) | This playbook summarizes data for DNS Essentials Solution and ingests into custom tables. | [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) *(read)*<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md) *(read)*<br>[`AzureDiagnostics`](../tables/azurediagnostics.md) *(read)*<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md) *(read)*<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)*<br>[`Corelight_CL`](../tables/corelight-cl.md) *(read)*<br>[`DnsEvents`](../tables/dnsevents.md) *(read)*<br>[`Event`](../tables/event.md) *(read)*<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md) *(read)*<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md) *(read)*<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md) *(read)*<br>[`Syslog`](../tables/syslog.md) *(read)*<br>[`VectraStream_CL`](../tables/vectrastream-cl.md) *(read)*<br>[`WindowsEvent`](../tables/windowsevent.md) *(read)*<br>*Internal use:*<br>[`DNS_Summarized_Logs_ip_CL`](../tables/dns-summarized-logs-ip-cl.md) *(read/write)*<br>[`DNS_Summarized_Logs_sourceInfo_CL`](../tables/dns-summarized-logs-sourceinfo-cl.md) *(write)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 								|
|-------------|--------------------------------|----------------------------------------------------------------------------------------------------|
| 3.0.4		  | 02-07-2025					   | Updated new ThreatIntelIndicators table references using **parser**.								|
| 3.0.3       | 28-11-2024                     | Update **Analytic Rule** MultipleErrorsReportedForSameDNSQueryStaticThresholdBased.yaml to fix bug.|
| 3.0.2       | 29-07-2024                     | Update **Hunting Queries** to fix TTP.						        								|
| 3.0.1       | 31-01-2023                     | Updated the solution to fix **Analytic Rules** deployment issue.        							|
| 3.0.2		  | 12-03-2024					   | Added new **Analytic rule** and repackaged solution.												|

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
