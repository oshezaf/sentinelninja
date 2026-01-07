# PCI DSS Compliance

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="PCI DSS Compliance Logo" width="75" height="75">

This Solution enables Microsoft Sentinel users to harness the power of their SIEM to assist in meeting PCI-DSS 3.2.1 requirements. This Solution comes with pre-defined dashboards, visualizations, and reports, providing users with immediate insights in their PCI environment.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-29 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PCI%20DSS%20Compliance](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PCI%20DSS%20Compliance) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **2 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`Heartbeat`](../tables/heartbeat.md) | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PCIDSSCompliance](../content/pci-dss-compliance-pcidsscompliance-b201eb3d.md) | [`Heartbeat`](../tables/heartbeat.md)<br>[`SecurityEvent`](../tables/securityevent.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.0       | 16-10-2024                     |   Updated solution to fix content issue and data type for **Workbook** issue                                        |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
