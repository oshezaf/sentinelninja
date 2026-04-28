# ⚠️ Censys

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Censys.svg" alt="Censys Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Censys Support |
| **Support Tier** | Partner |
| **Support Link** | [https://docs.censys.com](https://docs.censys.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Censys - support@censys.com |
| **First Published** | 2026-03-05 |
| **Last Updated** | 2026-03-05 |
| **Solution Folder** | [Censys](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Censys) |

Leverage playbooks to enrich alerts and incidents with Censys Internet data. Analyst can lookup known information about IPs, domains, certificate SHAs in Censys.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **19 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`CensysCertificateAlert_CL`](../tables/censyscertificatealert-cl.md) | Playbooks (writes) |
| [`CensysCertificate_CL`](../tables/censyscertificate-cl.md) | Playbooks (writes) |
| [`CensysHostAlert_CL`](../tables/censyshostalert-cl.md) | Playbooks (writes) |
| [`CensysHost_CL`](../tables/censyshost-cl.md) | Playbooks (writes) |
| [`CensysRescanHostAlert_CL`](../tables/censysrescanhostalert-cl.md) | Playbooks (writes) |
| [`CensysRescanHost_CL`](../tables/censysrescanhost-cl.md) | Playbooks (writes) |
| [`CensysRescanWebPropertyAlert_CL`](../tables/censysrescanwebpropertyalert-cl.md) | Playbooks (writes) |
| [`CensysRescanWebProperty_CL`](../tables/censysrescanwebproperty-cl.md) | Playbooks (writes) |
| [`CensysWebPropertyAlert_CL`](../tables/censyswebpropertyalert-cl.md) | Playbooks (writes) |
| [`CensysWebProperty_CL`](../tables/censyswebproperty-cl.md) | Playbooks (writes) |
| [`Censys_Certificate_IOC_CL`](../tables/censys-certificate-ioc-cl.md) | Workbooks |
| [`Censys_Host_History_Data_CL`](../tables/censys-host-history-data-cl.md) | Workbooks |
| [`Censys_Host_IOC_CL`](../tables/censys-host-ioc-cl.md) | Workbooks |
| [`Censys_Host_Services_CL`](../tables/censys-host-services-cl.md) | Workbooks |
| [`Censys_Web_Property_Endpoint_CL`](../tables/censys-web-property-endpoint-cl.md) | Workbooks |
| [`Censys_Web_Property_IOC_CL`](../tables/censys-web-property-ioc-cl.md) | Workbooks |
| [`Censys_Web_Property_Threat_CL`](../tables/censys-web-property-threat-cl.md) | Workbooks |
| [`Censys_Web_Property_Vuln_CL`](../tables/censys-web-property-vuln-cl.md) | Workbooks |
| [`Incident_Enrich_Data_CL`](../tables/incident-enrich-data-cl.md) | Workbooks |

### Internal Tables

The following **3 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`CensysRelatedInfrastructure_CL`](../tables/censysrelatedinfrastructure-cl.md) | Playbooks (writes), Workbooks |
| [`SecurityAlert`](../tables/securityalert.md) | Playbooks, Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | Playbooks, Workbooks |

## Content Items

This solution includes **12 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 11 |
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Censys](../content/censys-censys-21c23ffd.md) | [`Censys_Certificate_IOC_CL`](../tables/censys-certificate-ioc-cl.md)<br>[`Censys_Host_History_Data_CL`](../tables/censys-host-history-data-cl.md)<br>[`Censys_Host_IOC_CL`](../tables/censys-host-ioc-cl.md)<br>[`Censys_Host_Services_CL`](../tables/censys-host-services-cl.md)<br>[`Censys_Web_Property_Endpoint_CL`](../tables/censys-web-property-endpoint-cl.md)<br>[`Censys_Web_Property_IOC_CL`](../tables/censys-web-property-ioc-cl.md)<br>[`Censys_Web_Property_Threat_CL`](../tables/censys-web-property-threat-cl.md)<br>[`Censys_Web_Property_Vuln_CL`](../tables/censys-web-property-vuln-cl.md)<br>[`Incident_Enrich_Data_CL`](../tables/incident-enrich-data-cl.md)<br>*Internal use:*<br>[`CensysRelatedInfrastructure_CL`](../tables/censysrelatedinfrastructure-cl.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Censys Ad-Hoc IOC Lookup](../content/censys-censys-ad-hoc-ioc-lookup-640123fb.md) | This playbook will be triggered from the workbook. This will fetch associated IPs, Host(Domains) and... | - |
| [Censys Add Incident Comment](../content/censys-censys-add-incident-comment-92f657fd.md) | This playbook is triggered via HTTP request and is designed to be used as a sub-playbook by other Ce... | - |
| [Censys Alert Enrichment](../content/censys-censys-alert-enrichment-65242474.md) | This playbook is triggered by a Microsoft Sentinel Alert. It extracts IP addresses, domains, and cer... | [`CensysCertificateAlert_CL`](../tables/censyscertificatealert-cl.md) *(write)*<br>[`CensysHostAlert_CL`](../tables/censyshostalert-cl.md) *(write)*<br>[`CensysWebPropertyAlert_CL`](../tables/censyswebpropertyalert-cl.md) *(write)* |
| [Censys Alert Rescan](../content/censys-censys-alert-rescan-19e1ad3a.md) | This playbook is triggered manually via HTTP request from a workbook or automation. It accepts input... | [`CensysRescanHostAlert_CL`](../tables/censysrescanhostalert-cl.md) *(write)*<br>[`CensysRescanWebPropertyAlert_CL`](../tables/censysrescanwebpropertyalert-cl.md) *(write)*<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)*<br>[`SecurityIncident`](../tables/securityincident.md) *(read)* |
| [Censys Entity Enrichment - Certificate](../content/censys-censys-entity-enrichment-certificate-ea0d81ab.md) | This playbook is triggered automatically when a FileHash entity is detected in a Microsoft Sentinel ... | - |
| [Censys Entity Enrichment - Host](../content/censys-censys-entity-enrichment-host-c2bc1894.md) | This playbook is triggered automatically when an IP entity is detected in a Microsoft Sentinel incid... | - |
| [Censys Entity Enrichment - Web Property](../content/censys-censys-entity-enrichment-web-property-e7db98e8.md) | This playbook is triggered automatically when a DNS entity (domain name) is detected in a Microsoft ... | - |
| [Censys Host History](../content/censys-censys-host-history-62dd7b98.md) | This playbook is triggered manually via HTTP request, typically invoked from a Microsoft Sentinel wo... | - |
| [Censys Incident Enrichment](../content/censys-censys-incident-enrichment-099adc62.md) | This playbook will be triggered when any automation rule is attached or manually invoked. This will ... | [`CensysCertificate_CL`](../tables/censyscertificate-cl.md) *(write)*<br>[`CensysHost_CL`](../tables/censyshost-cl.md) *(write)*<br>[`CensysWebProperty_CL`](../tables/censyswebproperty-cl.md) *(write)* |
| [Censys Related Infrastructure](../content/censys-censys-related-infrastructure-23870661.md) | This playbook retrieves related infrastructure details for Censys entities (hosts, certificates, or ... | *Internal use:*<br>[`CensysRelatedInfrastructure_CL`](../tables/censysrelatedinfrastructure-cl.md) *(write)* |
| [Censys Rescan](../content/censys-censys-rescan-51275b90.md) | This playbook will be triggered manually. This will fetch associated IPs from the incident and make ... | [`CensysRescanHost_CL`](../tables/censysrescanhost-cl.md) *(write)*<br>[`CensysRescanWebProperty_CL`](../tables/censysrescanwebproperty-cl.md) *(write)*<br>*Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                |
|-------------|--------------------------------|-------------------------------------------------------------------|
| 3.0.0       | 06-04-2026                     | Added Support for Related Infrastructure Playbook and Workbook    |
| 3.0.0       | 05-03-2026                     | Initial Solution for Censys with Playbooks and Workbook           |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

