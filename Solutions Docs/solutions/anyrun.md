# ANY.RUN Interactive Sandbox for Microsoft Sentinel

*Solution: ANYRUN*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ANYRUN.svg" alt="ANYRUN Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ANY.RUN |
| **Support Tier** | Partner |
| **Support Link** | [https://app.any.run/contact-us/](https://app.any.run/contact-us/) |
| **Categories** | Security - Threat Protection,Security - Automation (SOAR) |
| **Version** | 3.0.0 |
| **Author** | ANY.RUN - techsupport@any.run |
| **First Published** | 2026-04-27 |
| **Last Updated** | 2026-10-22 |
| **Solution Folder** | [ANYRUN](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ANYRUN) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/anyrunfzco1780325080395.azure-sentinel-solution-anyrun) · Popularity: 🔵 Medium (61%) |

ANY.RUN Malware Sandbox Integration with Microsoft Sentinel. Enrich incidents with sandbox analysis of URLs and files, extract IOCs and automate threat investigation.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **1 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Playbooks |

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 6 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ANY.RUN Sandbox - Debian File Enrichment - Incident Trigger](../content/anyrun-any.run-sandbox-debian-file-enrichment-incident-trigger-04b5650e.md) | On a Microsoft Sentinel incident, collects File and Host entities, uploads files to Azure Blob Stora... | - |
| [ANY.RUN Sandbox - File and URL Enrichment - Incident Trigger](../content/anyrun-any.run-sandbox-file-and-url-enrichment-incident-trigger-9fb6c007.md) | On a Microsoft Sentinel incident, enriches File, and URL entities using Microsoft Defender for Endpo... | [`DeviceFileEvents`](../tables/devicefileevents.md) *(read)* |
| [ANY.RUN Sandbox - URL Enrichment - Incident Trigger](../content/anyrun-any.run-sandbox-url-enrichment-incident-trigger-52d34934.md) | On a Microsoft Sentinel incident, collects URL entities and submits each URL to ANY.RUN Sandbox. Add... | - |
| [ANY.RUN Sandbox - Ubuntu File Enrichment - Incident Trigger](../content/anyrun-any.run-sandbox-ubuntu-file-enrichment-incident-trigger-7d368a54.md) | On a Microsoft Sentinel incident, collects File and Host entities, uploads files to Azure Blob Stora... | - |
| [ANY.RUN Sandbox - Windows File Enrichment - Incident Trigger](../content/anyrun-any.run-sandbox-windows-file-enrichment-incident-trigger-14b3c37f.md) | On a Microsoft Sentinel incident, collects File and Host entities, uploads files to Azure Blob Stora... | - |
| [ANY.RUN Submit File to Blob](../content/anyrun-any.run-submit-file-to-blob-dfc44a99.md) | Child Logic App called by ANY.RUN file playbooks. Returns per-file status to the parent playbook. | [`DeviceFileEvents`](../tables/devicefileevents.md) *(read)* |

## Additional Documentation

> 📄 *Source: [ANYRUN/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ANYRUN/README.md)*

<p align="center">
    <a href="#readme">
        <img alt="ANY.RUN logo" src="https://raw.githubusercontent.com/anyrun/anyrun-sdk/b3dfde1d3aa018d0a1c3b5d0fa8aaa652e80d883/static/logo.svg">
    </a>
</p>

______________________________________________________________________

# ANY.RUN Malware Sandbox Integration with Microsoft Sentinel 

## Overview

This solution folder contains resources required for integrating Microsoft Sentinel with ANY.RUN Sandbox. 

The connectors enrich Microsoft Sentinel incidents by analyzing URLs or files associated with them in the sandbox. As a result, your Microsoft Sentinel incidents will include detailed info on threats. You will also be able to explore the object's behavior in a real infrastructure environment. 

Additionally, your Threat Intelligence portal in Sentinel will be enriched with Indicators of Compromise (IOCs) extracted during the sandbox analysis. You can try out the connectors for free by [getting 14-day trial](https://any.run/demo/?utm_source=anyrungithub&utm_medium=documentation&utm_campaign=sentinel&utm_content=linktodemo) of ANY.RUN Sandbox’s Enterprise plan. 

## Integration capabilities

- Enrichment of incidents with:
  - Analysis verdict (malicious, suspicious, unknown) 
  - Threat score (from 0 to 100) 
  - Malware tags (e.g. threat family) 
  - Table with IOC's detected during the analysis 
  - Link to the analysis session in the sandbox 
- Uploading IOC's detected during the analysis to Sentinel Threat Intelligence portal 

## Analyze URLs from Microsoft Sentinel Incidents via ANY.RUN Sandbox

**Latest Version:** 1.0.0  
**Release Date:** 10/09/2025

This playbook extracts URLs from incidents and submits them for analysis in ANY.RUN Sandbox to enrich the incident with a verdict using a single Azure Logic App.

[Open connector's page](https://github.com/Azure/Azure-Sentinel/tree/master/Solutions/ANYRUN/Playbooks/Sandbox-URL)

## Analyze Files from Microsoft Sentinel Incidents via ANY.RUN Sandbox

**Latest Version:** 1.0.1  
**Release Date:** 25/09/2025

This playbook allows you to send files from incidents for analysis in ANY.RUN Sandbox. It uploads the file from the endpoint to Azure Blob Storage and then forwards it to ANY.RUN Sandbox using Azure Logic App and Azure Function App.

Templates are provided for endpoints running the following operating systems:
- Windows
- Ubuntu
- Debian

[Open Playbooks folder](https://github.com/Azure/Azure-Sentinel/tree/master/Solutions/ANYRUN/Playbooks)

## Analyze All Entities from Microsoft Sentinel Incidents via ANY.RUN Sandbox and Microsoft Defender for Endpoint

**Latest Version:** 1.0.1  
**Release Date:** 25/09/2025

This playbook makes the incident enrichment process in Microsoft Sentinel even more automated if you are also using Microsoft Defender for Endpoint (MDE). In this case, the entire automation mechanism can be combined into Azure Logic App and Azure Function App, leveraging MDE's capabilities to extract files from endpoints via API.

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                     |
|-------------|--------------------------------|----------------------------------------|
| 3.0.0       | 19-10-2026                     | Initial Solution Release.              |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

