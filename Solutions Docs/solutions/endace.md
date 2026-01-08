# Endace

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/endace_vert_logo_black.svg" alt="Endace Logo" width="75" height="75">

The Endace (https://www.endace.com) solution for Microsoft Sentinel enables you to create Pivot-to-Vision URL links from alerts in your CEF logs.

 Pivot-to-Vision links take you directly from an alert to viewing the related packets of interest in EndaceVision, Endace's traffic analysis application. In EndaceVision, you can further analyze the incident and zoom in to inspect decoded, full packet data.

 The KQL in this example can be easily adapted to be used for other advanced features associated with threat hunting, such as in tickets, workbooks, and wherever KQL can be leveraged.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Endace |
| **Support Tier** | Partner |
| **Support Link** | [https://endace.com](https://endace.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Endace - support@endace.com |
| **First Published** | 2025-03-24 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Endace](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Endace) |
| **Dependencies** | azuresentinel.azure-sentinel-solution-commoneventformat |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **1 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Hunting |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 1 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Endace - Pivot-to-Vision](../content/endace-endace-pivot-to-vision-b70b02bd-fe1f-4466-8c4d-64d42adc59b3-2f1bf7f0.md) | ResourceDevelopment, InitialAccess, Discovery, LateralMovement, CommandandControl, Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                              |
|-------------|--------------------------------|-------------------------------------------------|
| 3.0.0       | 30-06-2025                     | Initial Release                                 |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
