# ⚠️ Forescout eyeInspect for OT Security

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/forescout-logo.svg" alt="Forescout eyeInspect for OT Security Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

Forescout eyeInspect is a cybersecurity platform designed for Operational Technology (OT) and Industrial Control Systems (ICS) environments. It provides visibility into network devices, threat detection, and risk management for critical infrastructure like power grids and manufacturing plants. eyeInspect uses deep packet inspection of OT/ICS protocols to establish a baseline of network behavior and identify potential threats and vulnerabilities.  Forescout eyeInspect helps OT/ICS industry customers to achieve end-to-end cyber resiliency of OT/ICS network with a comprehensive asset risk framework and threat detection through deep packet inspection of all industrial network protocols. Forescout eyeInspect defends customers’ most critical infrastructure, with thousands of OT-specific threat indicators and powerful anomaly detection through a platform that enables organizations across the globe to act on identified risks and detect cyber threats before they lead to operational downtime.  This solution integrates Forescout eyeInspect with Microsoft Sentinel. This integration facilitates comprehensive view of OT Asset data and Alerts, and helps with enhanced security analysis with Microsoft Sentinel tools.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Forescout Technologies |
| **Support Tier** | Partner |
| **Support Link** | [https://www.forescout.com/support](https://www.forescout.com/support) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Rao Peraka - rao.peraka@forescout.com |
| **First Published** | 2025-07-10 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Forescout%20eyeInspect%20for%20OT%20Security](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Forescout%20eyeInspect%20for%20OT%20Security) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [Forescout eyeInspect for OT Security](../connectors/forescout-eyeinspect-for-ot-security.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ForescoutOtAlert_CL`](../tables/forescoutotalert-cl.md) | [Forescout eyeInspect for OT Security](../connectors/forescout-eyeinspect-for-ot-security.md) | Workbooks |
| [`ForescoutOtAsset_CL`](../tables/forescoutotasset-cl.md) | [Forescout eyeInspect for OT Security](../connectors/forescout-eyeinspect-for-ot-security.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [eyeInspectOTSecurityWorkbook](../content/forescout-eyeinspect-for-ot-security-eyeinspectotsecurityworkbook-bab522c8.md) | [`ForescoutOtAlert_CL`](../tables/forescoutotalert-cl.md)<br>[`ForescoutOtAsset_CL`](../tables/forescoutotasset-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------| 
| 3.0.0       | 14-07-2025                     |	Initial Solution Release                                        |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

