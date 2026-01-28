# Microsoft Defender for Cloud Apps

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Microsoft Defender for Cloud Apps Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Microsoft Defender for Cloud Apps](https://docs.microsoft.com/defender-cloud-apps/) solution for Microsoft Sentinel enables you to ingest security alerts and discovery logs from the Defender for Cloud Apps platform, providing visibility into threats in your cloud app environment, including coverage for shadow IT, impossible travel, ransomware, and data exfiltration use cases.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 2.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [Microsoft Defender for Cloud Apps](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20for%20Cloud%20Apps) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Microsoft Defender for Cloud Apps](../connectors/microsoftcloudappsecurity.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`McasShadowItReporting`](../tables/mcasshadowitreporting.md) | [Microsoft Defender for Cloud Apps](../connectors/microsoftcloudappsecurity.md) | Workbooks |
| [`StorageBlobLogs`](../tables/storagebloblogs.md) | - | Analytics |
| [`StorageFileLogs`](../tables/storagefilelogs.md) | - | Analytics |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | [Microsoft Defender for Cloud Apps](../connectors/microsoftcloudappsecurity.md) | Analytics, Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Linked Malicious Storage Artifacts](../content/microsoft-defender-for-cloud-apps-linked-malicious-storage-artifacts-b9e3b9f8-a406-4151-9891-e5ff1ddd8c1d-6de5b72c.md) | Medium | CommandAndControl, Exfiltration | [`StorageBlobLogs`](../tables/storagebloblogs.md)<br>[`StorageFileLogs`](../tables/storagefilelogs.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MicrosoftCloudAppSecurity](../content/microsoft-defender-for-cloud-apps-microsoftcloudappsecurity-0234df86.md) | [`McasShadowItReporting`](../tables/mcasshadowitreporting.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                     |
|-------------|--------------------------------|----------------------------------------|
| 3.0.0       | 07-04-2025                     | Updated ConnectivityCriteria Type in **Data Connector**.				   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

