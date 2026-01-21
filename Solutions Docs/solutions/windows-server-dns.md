# Windows Server DNS

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/DNS.svg" alt="Windows Server DNS Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [DNS](https://docs.microsoft.com/windows-server/networking/dns/dns-top) solution for Microsoft Sentinel allows you to ingest DNS analytic and audit logs into Microsoft Sentinel. The DNS logs are collected only from Windows agents.

Installing this solution will deploy two data connectors,

1. DNS via AMA - This data connector helps in ingesting Windows DNS logs into your Log Analytics Workspace using the new Azure Monitor Agent. Learn more about ingesting using the new Azure Monitor Agent [here](https://learn.microsoft.com/en-us/azure/sentinel/connect-dns-ama). Microsoft recommends using this Data Connector.

2. DNS via Legacy Agent - This data connector helps in ingesting Windows DNS logs into your Log Analytics Workspace using the legacy Log Analytics agent.

<P style="color:red">**NOTE**: Microsoft recommends Installation of DNS via AMA. Legacy connector uses the Log Analytics agent which is about to be deprecated by **Aug 31, 2024,** and thus should only be installed where AMA is not supported.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-11 |
| **Solution Folder** | [Windows Server DNS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Server%20DNS) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Windows DNS Events via AMA](../connectors/asimdnsactivitylogs.md)
- [DNS](../connectors/dns.md)

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) | [Windows DNS Events via AMA](../connectors/asimdnsactivitylogs.md) | - |
| [`DnsEvents`](../tables/dnsevents.md) | [DNS](../connectors/dns.md) | Analytics, Hunting, Workbooks |
| [`DnsInventory`](../tables/dnsinventory.md) | [DNS](../connectors/dns.md) | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | - | Hunting |

## Content Items

This solution includes **15 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 9 |
| Analytic Rules | 5 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [DNS events related to ToR proxies](../content/windows-server-dns-dns-events-related-to-tor-proxies-a83ef0f4-dace-4767-bce3-ebd32599d2a0-144d141a.md) | Low | Exfiltration | [`DnsEvents`](../tables/dnsevents.md) |
| [DNS events related to mining pools](../content/windows-server-dns-dns-events-related-to-mining-pools-0d76e9cf-788d-4a69-ac7d-f234826b5bed-54471aa6.md) | Low | Impact | [`DnsEvents`](../tables/dnsevents.md) |
| [NRT DNS events related to mining pools](../content/windows-server-dns-nrt-dns-events-related-to-mining-pools-d5b32cd4-2328-43da-ab47-cd289c1f5efc-8dd1a5ad.md) | Low | Impact | [`DnsEvents`](../tables/dnsevents.md) |
| [Potential DGA detected](../content/windows-server-dns-potential-dga-detected-a0907abe-6925-4d90-af2b-c7e89dc201a6-678f161d.md) | Medium | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md) |
| [Rare client observed with high reverse DNS lookup count](../content/windows-server-dns-rare-client-observed-with-high-reverse-dns-lookup-count-15ae38a2-2e29-48f7-883f-863fb25a5a06-e3f85e2d.md) | Medium | Discovery | [`DnsEvents`](../tables/dnsevents.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Abnormally long DNS URI queries](../content/windows-server-dns-abnormally-long-dns-uri-queries-a0954a17-cc66-4d47-9651-8bf524bbdcc8-2ac71219.md) | CommandAndControl, Exfiltration | [`DnsEvents`](../tables/dnsevents.md) |
| [DNS - domain anomalous lookup increase](../content/windows-server-dns-dns-domain-anomalous-lookup-increase-1d9951b7-51f0-4aa7-af0c-654359aadfff-26eb2bc8.md) | CommandAndControl, Exfiltration | [`DnsEvents`](../tables/dnsevents.md) |
| [DNS Domains linked to WannaCry ransomware campaign](../content/windows-server-dns-dns-domains-linked-to-wannacry-ransomware-campaign-aaf84b80-7764-420c-98eb-239b5e194b3d-74157fd9.md) | Impact | [`DnsEvents`](../tables/dnsevents.md) |
| [DNS Full Name anomalous lookup increase](../content/windows-server-dns-dns-full-name-anomalous-lookup-increase-81b478a7-46e2-4f7f-a1aa-aba5e541232b-21ae26d6.md) | CommandAndControl, Exfiltration | [`DnsEvents`](../tables/dnsevents.md) |
| [DNS lookups for commonly abused TLDs](../content/windows-server-dns-dns-lookups-for-commonly-abused-tlds-8e9c4680-8c0b-4885-b183-3b09efd8fc2c-5cb006c9.md) | CommandAndControl, Exfiltration | [`DnsEvents`](../tables/dnsevents.md) |
| [High reverse DNS count by host](../content/windows-server-dns-high-reverse-dns-count-by-host-fda90754-4e22-4bb1-8b99-2bb49a991eae-98bb4c25.md) | Discovery | [`DnsEvents`](../tables/dnsevents.md) |
| [Potential DGA detected](../content/windows-server-dns-potential-dga-detected-543e1ec6-ee5e-4368-aaa6-405f0551ba5c-d483d155.md) | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md) |
| [Solorigate DNS Pattern](../content/windows-server-dns-solorigate-dns-pattern-0fb54a5c-5599-4ff9-80a2-f788c3ed285e-42e0ed66.md) | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md) |
| [Solorigate Encoded Domain in URL](../content/windows-server-dns-solorigate-encoded-domain-in-url-29a1815a-3ada-4182-a178-e52c483d2f95-55f1aaa9.md) | CommandAndControl | [`SigninLogs`](../tables/signinlogs.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Dns](../content/windows-server-dns-dns-ed7f9abb.md) | [`DnsEvents`](../tables/dnsevents.md)<br>[`DnsInventory`](../tables/dnsinventory.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 19-03-2024                     | Updated Entity Mappings of **Analytic Rules**    										|	
| 3.0.0       | 18-09-2023                     | Windows DNS Events via AMA **Data Connector** now General Availability   |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

