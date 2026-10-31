# VirusTotal

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="VirusTotal Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | Security - Automation (SOAR) |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-07-31 |
| **Last Updated** | 2026-09-07 |
| **Solution Folder** | [VirusTotal](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VirusTotal) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-virustotal) · Rating: ★☆☆☆☆ 1.0/5 (1 ratings) · Popularity: 🔵 Medium (78%) |

The [VirusTotal](https://www.virustotal.com/gui/) solution for Microsoft Sentinel contains Playbooks that can help enrich incident information with threat information and intelligence for IPs, file hashes and URLs from VirusTotal. Enriched information can help drive focused investigations in Security Operations. **NOTE: This solution includes a few playbooks that use the legacy HTTP data collector API to ingest data. Since that API is about to be deprecated, we recommend using the logingestionapi playbooks instead.**

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

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

This solution includes **17 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 17 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [FileHash Enrichment - Virus Total Report - Alert Triggered using Log Ingestion API](../content/virustotal-filehash-enrichment-virus-total-report-alert-triggered-using-log-ingestion-api-d8cbea41.md) | This playbook will take each File Hash entity and query VirusTotal for file report (https://develope... | - |
| [FileHash Enrichment - Virus Total Report - Incident Triggered using Log Ingestion API](../content/virustotal-filehash-enrichment-virus-total-report-incident-triggered-using-log-ingestion-api-a87c73a6.md) | This playbook will take each File Hash entity and query VirusTotal for file report (https://develope... | - |
| [IP Enrichment - Virus Total Report  - Incident Triggered using Log Ingestion API](../content/virustotal-ip-enrichment-virus-total-report-incident-triggered-using-log-ingestion-api-7d47e0b2.md) | This playbook will take each IP entity and query VirusTotal for IP Address Report (https://developer... | - |
| [IP Enrichment - Virus Total Report - Alert Triggered using Log Ingestion API](../content/virustotal-ip-enrichment-virus-total-report-alert-triggered-using-log-ingestion-api-d8973213.md) | This playbook will take each IP entity and query VirusTotal for IP Address Report (https://developer... | - |
| [IP Enrichment - Virus Total Report - Entity Trigger](../content/virustotal-ip-enrichment-virus-total-report-entity-trigger-6bf78945.md) | This playbook will query VirusTotal Report for the selected IP Address (https://developers.virustota... | - |
| [URL Enrichment - Virus Total Domain Report - Alert Triggered using Log Ingestion API](../content/virustotal-url-enrichment-virus-total-domain-report-alert-triggered-using-log-ingestion-api-4c5e4687.md) | This playbook will take each URL entity and query VirusTotal for Domain info (https://developers.vir... | - |
| [URL Enrichment - Virus Total Domain Report - Incident Triggered using Log Ingestion API](../content/virustotal-url-enrichment-virus-total-domain-report-incident-triggered-using-log-ingestion-api-bc339f3d.md) | This playbook will take each URL entity and query VirusTotal for Domain Report (https://developers.v... | - |
| [URL Enrichment - Virus Total Report - Alert Triggered using Log Ingestion API](../content/virustotal-url-enrichment-virus-total-report-alert-triggered-using-log-ingestion-api-4c819672.md) | This playbook will take each URL entity and query VirusTotal for info (https://developers.virustotal... | - |
| [URL Enrichment - Virus Total Report - Incident Triggered using Log Ingestion API](../content/virustotal-url-enrichment-virus-total-report-incident-triggered-using-log-ingestion-api-781e576b.md) | This playbook will take each URL entity and query VirusTotal for info (https://developers.virustotal... | - |
| [[Deprecated] FileHash Enrichment - Virus Total Report - Alert Triggered](../content/virustotal-[deprecated]-filehash-enrichment-virus-total-report-alert-triggered-b9ad6b97.md) | This playbook will take each File Hash entity and query VirusTotal for file report (https://develope... | [`VTFileReport_CL`](../tables/vtfilereport-cl.md) *(write)* |
| [[Deprecated] FileHash Enrichment - Virus Total Report - Incident Triggered](../content/virustotal-[deprecated]-filehash-enrichment-virus-total-report-incident-triggered-6d5d0cbf.md) | This playbook will take each File Hash entity and query VirusTotal for file report (https://develope... | [`VTFileReport_CL`](../tables/vtfilereport-cl.md) *(write)* |
| [[Deprecated] IP Enrichment - Virus Total Report  - Incident Triggered](../content/virustotal-[deprecated]-ip-enrichment-virus-total-report-incident-triggered-87c5cd22.md) | This playbook will take each IP entity and query VirusTotal for IP Address Report (https://developer... | [`VTIPReport_CL`](../tables/vtipreport-cl.md) *(write)* |
| [[Deprecated] IP Enrichment - Virus Total Report - Alert Triggered](../content/virustotal-[deprecated]-ip-enrichment-virus-total-report-alert-triggered-0491fa54.md) | This playbook will take each IP entity and query VirusTotal for IP Address Report (https://developer... | [`VTIPReport_CL`](../tables/vtipreport-cl.md) *(write)* |
| [[Deprecated] URL Enrichment - Virus Total Domain Report - Alert Triggered](../content/virustotal-[deprecated]-url-enrichment-virus-total-domain-report-alert-triggered-1cb6ad32.md) | This playbook will take each URL entity and query VirusTotal for Domain info (https://developers.vir... | [`VTDomainReport_CL`](../tables/vtdomainreport-cl.md) *(write)* |
| [[Deprecated] URL Enrichment - Virus Total Domain Report - Incident Triggered](../content/virustotal-[deprecated]-url-enrichment-virus-total-domain-report-incident-triggered-310ec6f8.md) | This playbook will take each URL entity and query VirusTotal for Domain Report (https://developers.v... | [`VTDomainReport_CL`](../tables/vtdomainreport-cl.md) *(write)* |
| [[Deprecated] URL Enrichment - Virus Total Report - Alert Triggered](../content/virustotal-[deprecated]-url-enrichment-virus-total-report-alert-triggered-d7cf3a74.md) | This playbook will take each URL entity and query VirusTotal for info (https://developers.virustotal... | [`VTURLReport_CL`](../tables/vturlreport-cl.md) *(write)* |
| [[Deprecated] URL Enrichment - Virus Total Report - Incident Triggered](../content/virustotal-[deprecated]-url-enrichment-virus-total-report-incident-triggered-0a69c2a9.md) | This playbook will take each URL entity and query VirusTotal for info (https://developers.virustotal... | [`VTURLReport_CL`](../tables/vturlreport-cl.md) *(write)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.2       | 04-09-2026                     |Added playbooks for using the log ingestion API to send data. |
| 3.0.1       | 02-06-2025                     | Updated Playbook instructions for clarity                          |
| 3.0.0       | 11-01-2024                     | Updated solution to 3.0.0 to fix IP Enrichment - Virus Total report playbook|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

