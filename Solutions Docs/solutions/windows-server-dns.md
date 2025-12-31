# Windows Server DNS

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-05-11 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Server%20DNS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Server%20DNS) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Windows DNS Events via AMA](../connectors/asimdnsactivitylogs.md)
- [DNS](../connectors/dns.md)

## Tables Reference

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) | [Windows DNS Events via AMA](../connectors/asimdnsactivitylogs.md) | - |
| [`DnsEvents`](../tables/dnsevents.md) | [DNS](../connectors/dns.md) | Analytics, Hunting, Workbooks |
| [`DnsInventory`](../tables/dnsinventory.md) | [DNS](../connectors/dns.md) | Workbooks |
| [`FilterOnIPThreshold_MainTable`](../tables/filteronipthreshold-maintable.md) | - | Hunting |
| [`SigninLogs`](../tables/signinlogs.md) | - | Hunting |
| [`quartileFunctionForIPThreshold`](../tables/quartilefunctionforipthreshold.md) | - | Hunting |

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
| [DNS events related to ToR proxies](../content/a83ef0f4-dace-4767-bce3-ebd32599d2a0.md) | Low | Exfiltration | [`DnsEvents`](../tables/dnsevents.md) |
| [DNS events related to mining pools](../content/0d76e9cf-788d-4a69-ac7d-f234826b5bed.md) | Low | Impact | [`DnsEvents`](../tables/dnsevents.md) |
| [NRT DNS events related to mining pools](../content/d5b32cd4-2328-43da-ab47-cd289c1f5efc.md) | Low | Impact | [`DnsEvents`](../tables/dnsevents.md) |
| [Potential DGA detected](../content/a0907abe-6925-4d90-af2b-c7e89dc201a6.md) | Medium | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md) |
| [Rare client observed with high reverse DNS lookup count](../content/15ae38a2-2e29-48f7-883f-863fb25a5a06.md) | Medium | Discovery | [`DnsEvents`](../tables/dnsevents.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Abnormally long DNS URI queries](../content/a0954a17-cc66-4d47-9651-8bf524bbdcc8.md) | CommandAndControl, Exfiltration | [`DnsEvents`](../tables/dnsevents.md) |
| [DNS - domain anomalous lookup increase](../content/1d9951b7-51f0-4aa7-af0c-654359aadfff.md) | CommandAndControl, Exfiltration | [`DnsEvents`](../tables/dnsevents.md) |
| [DNS Domains linked to WannaCry ransomware campaign](../content/aaf84b80-7764-420c-98eb-239b5e194b3d.md) | Impact | [`DnsEvents`](../tables/dnsevents.md) |
| [DNS Full Name anomalous lookup increase](../content/81b478a7-46e2-4f7f-a1aa-aba5e541232b.md) | CommandAndControl, Exfiltration | [`DnsEvents`](../tables/dnsevents.md) |
| [DNS lookups for commonly abused TLDs](../content/8e9c4680-8c0b-4885-b183-3b09efd8fc2c.md) | CommandAndControl, Exfiltration | [`DnsEvents`](../tables/dnsevents.md) |
| [High reverse DNS count by host](../content/fda90754-4e22-4bb1-8b99-2bb49a991eae.md) | Discovery | [`DnsEvents`](../tables/dnsevents.md) |
| [Potential DGA detected](../content/543e1ec6-ee5e-4368-aaa6-405f0551ba5c.md) | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md)<br>[`FilterOnIPThreshold_MainTable`](../tables/filteronipthreshold-maintable.md)<br>[`quartileFunctionForIPThreshold`](../tables/quartilefunctionforipthreshold.md) |
| [Solorigate DNS Pattern](../content/0fb54a5c-5599-4ff9-80a2-f788c3ed285e.md) | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md) |
| [Solorigate Encoded Domain in URL](../content/29a1815a-3ada-4182-a178-e52c483d2f95.md) | CommandAndControl | [`SigninLogs`](../tables/signinlogs.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Dns](../content/dns-windows-server-dns.md) | [`DnsEvents`](../tables/dnsevents.md)<br>[`DnsInventory`](../tables/dnsinventory.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 19-03-2024                     | Updated Entity Mappings of **Analytic Rules**    										|	
| 3.0.0       | 18-09-2023                     | Windows DNS Events via AMA **Data Connector** now General Availability   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
