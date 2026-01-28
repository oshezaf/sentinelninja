# VirusTotal

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="VirusTotal Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [VirusTotal](https://www.virustotal.com/gui/) solution for Microsoft Sentinel contains Playbooks that can help enrich incident information with threat information and intelligence for IPs, file hashes and URLs from VirusTotal. Enriched information can help drive focused investigations in Security Operations.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-07-31 |
| **Solution Folder** | [VirusTotal](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VirusTotal) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **4 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`VTDomainReport_CL`](../tables/vtdomainreport-cl.md) | Playbooks (writes) |
| [`VTFileReport_CL`](../tables/vtfilereport-cl.md) | Playbooks (writes) |
| [`VTIPReport_CL`](../tables/vtipreport-cl.md) | Playbooks (writes) |
| [`VTURLReport_CL`](../tables/vturlreport-cl.md) | Playbooks (writes) |

## Content Items

This solution includes **9 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 9 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [FileHash Enrichment - Virus Total Report - Alert Triggered](../content/virustotal-filehash-enrichment-virus-total-report-alert-triggered-cb0a6f29.md) | This playbook will take each File Hash entity and query VirusTotal for file report (https://develope... | [`VTFileReport_CL`](../tables/vtfilereport-cl.md) *(write)* |
| [FileHash Enrichment - Virus Total Report - Incident Triggered](../content/virustotal-filehash-enrichment-virus-total-report-incident-triggered-4f1b5957.md) | This playbook will take each File Hash entity and query VirusTotal for file report (https://develope... | [`VTFileReport_CL`](../tables/vtfilereport-cl.md) *(write)* |
| [IP Enrichment - Virus Total Report  - Incident Triggered](../content/virustotal-ip-enrichment-virus-total-report-incident-triggered-1c22517c.md) | This playbook will take each IP entity and query VirusTotal for IP Address Report (https://developer... | [`VTIPReport_CL`](../tables/vtipreport-cl.md) *(write)* |
| [IP Enrichment - Virus Total Report - Alert Triggered](../content/virustotal-ip-enrichment-virus-total-report-alert-triggered-8db8d703.md) | This playbook will take each IP entity and query VirusTotal for IP Address Report (https://developer... | [`VTIPReport_CL`](../tables/vtipreport-cl.md) *(write)* |
| [IP Enrichment - Virus Total Report - Entity Trigger](../content/virustotal-ip-enrichment-virus-total-report-entity-trigger-6bf78945.md) | This playbook will query VirusTotal Report for the selected IP Address (https://developers.virustota... | - |
| [URL Enrichment - Virus Total Domain Report - Alert Triggered](../content/virustotal-url-enrichment-virus-total-domain-report-alert-triggered-9a5688ac.md) | This playbook will take each URL entity and query VirusTotal for Domain info (https://developers.vir... | [`VTDomainReport_CL`](../tables/vtdomainreport-cl.md) *(write)* |
| [URL Enrichment - Virus Total Domain Report - Incident Triggered](../content/virustotal-url-enrichment-virus-total-domain-report-incident-triggered-54a7a026.md) | This playbook will take each URL entity and query VirusTotal for Domain Report (https://developers.v... | [`VTDomainReport_CL`](../tables/vtdomainreport-cl.md) *(write)* |
| [URL Enrichment - Virus Total Report - Alert Triggered](../content/virustotal-url-enrichment-virus-total-report-alert-triggered-c62db7db.md) | This playbook will take each URL entity and query VirusTotal for info (https://developers.virustotal... | [`VTURLReport_CL`](../tables/vturlreport-cl.md) *(write)* |
| [URL Enrichment - Virus Total Report - Incident Triggered](../content/virustotal-url-enrichment-virus-total-report-incident-triggered-3d66ea5b.md) | This playbook will take each URL entity and query VirusTotal for info (https://developers.virustotal... | [`VTURLReport_CL`](../tables/vturlreport-cl.md) *(write)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 02-06-2025                     | Updated Playbook instructions for clarity                          |
| 3.0.0       | 11-01-2024                     | Updated solution to 3.0.0 to fix IP Enrichment - Virus Total report playbook|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

