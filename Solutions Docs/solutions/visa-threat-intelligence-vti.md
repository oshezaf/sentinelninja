# ⚠️ Visa Threat Intelligence (VTI)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Visa_VTI_Logo.svg" alt="Visa Threat Intelligence (VTI) Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Visa Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://developer.visa.com/capabilities/visa_threat_intelligence](https://developer.visa.com/capabilities/visa_threat_intelligence) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Visa Inc. - GDLVTIPSupport@visa.com |
| **First Published** | 2026-02-20 |
| **Last Updated** | 2026-02-20 |
| **Solution Folder** | [Visa Threat Intelligence (VTI)](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Visa%20Threat%20Intelligence%20%28VTI%29) |

Visa Threat Intelligence (VTI) is a Microsoft Sentinel solution that provides insights into global cyber threats, leveraging Visa's extensive threat intelligence data. This solution enables security teams to proactively identify and respond to emerging threats, enhancing their overall security posture. By integrating VTI with Microsoft Sentinel, organizations can benefit from real-time threat intelligence, advanced analytics, and automated response capabilities to protect their digital assets effectively.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Visa Threat Intelligence](../connectors/visathreatintelligenceccp.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DeviceFileEvents`](../tables/devicefileevents.md) | - | Analytics |
| [`EmailUrlInfo`](../tables/emailurlinfo.md) | - | Analytics |
| [`VisaThreatIntelligenceIOC_CL`](../tables/visathreatintelligenceioc-cl.md) | [Visa Threat Intelligence](../connectors/visathreatintelligenceccp.md) | Analytics, Workbooks |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [VTI - High Severity Domain Collision Detection](../content/visa-threat-intelligence-vti-vti-high-severity-domain-collision-detection-7be47078-657a-43cf-9c93-b4705a9f6134-72918c13.md) | High | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md)<br>[`VisaThreatIntelligenceIOC_CL`](../tables/visathreatintelligenceioc-cl.md) |
| [VTI - High Severity SHA1 Collision Detection](../content/visa-threat-intelligence-vti-vti-high-severity-sha1-collision-detection-dbd9e28f-973d-47f3-a8c3-9e18da846870-1dd78c47.md) | High | Execution | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`VisaThreatIntelligenceIOC_CL`](../tables/visathreatintelligenceioc-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [VTI_IOC_Feed](../content/visa-threat-intelligence-vti-vti-ioc-feed-33721f01.md) | [`VisaThreatIntelligenceIOC_CL`](../tables/visathreatintelligenceioc-cl.md) |

## Release Notes

# Visa Threat Intelligence Plugin for Microsoft Sentinel

## Content

1. Data Connectors – the data connector json files
   * VisaThreatIntelligenceConnector.json
2. Workbooks – workbook json files and black and white preview images of the workbook
   * VTI_IOC_Feed.json
   * Imagaes/Preview/VTIOverview_black.png
   * Imagaes/Preview/VTIOverview_white.png

3. Analytic Rules – yaml file templates of analytic rules
   * VTIP_high_severrity_domain.yaml
   * VTIP_high_severrity_sha1.yaml

### Copyright 2026 Visa Inc.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.3 | 04/21/2026 | Updated **createUiDefinition** to include connector information|
| 3.0.2 | 04/21/2026 | Fixed issue with the zip file|
| 3.0.1 | 03/10/2026 | Fixed missing data connector information from **mainTemplate** file |
| 3.0.0 | 12/16/2025 | Initial release with **Data Connector**, **Workbook**, and **Analytic Rules** for Visa Threat Intelligence |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

