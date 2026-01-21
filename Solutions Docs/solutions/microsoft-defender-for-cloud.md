# Microsoft Defender for Cloud

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Microsoft Defender for Cloud Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Microsoft Defender for Cloud](https://docs.microsoft.com/azure/defender-for-cloud/) solution for Microsoft Sentinel allows you to ingest Security alerts reported in Microsoft Defender for Cloud on assessing your hybrid cloud workload's security posture. 

**Underlying Microsoft Technologies used:**

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

 a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-17 |
| **Solution Folder** | [Microsoft Defender for Cloud](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20for%20Cloud) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Subscription-based Microsoft Defender for Cloud (Legacy)](../connectors/azuresecuritycenter.md)
- [Tenant-based Microsoft Defender for Cloud](../connectors/microsoftdefenderforcloudtenantbased.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CoreAzureBackup`](../tables/coreazurebackup.md) | - | Analytics |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | [Subscription-based Microsoft Defender for Cloud (Legacy)](../connectors/azuresecuritycenter.md), [Tenant-based Microsoft Defender for Cloud](../connectors/microsoftdefenderforcloudtenantbased.md) | Analytics |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Detect CoreBackUp Deletion Activity from related Security Alerts](../content/microsoft-defender-for-cloud-detect-corebackup-deletion-activity-from-related-security-alerts-011c84d8-85f0-4370-b864-24c13455aa94-595b66d7.md) | Medium | Impact | [`CoreAzureBackup`](../tables/coreazurebackup.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYY)** | **Change History**                              |
|-------------|-------------------------------|-------------------------------------------------|
| 3.0.3       |	06-12-2025	                  |Moved MicrosoftDefenderForCloudTenantBased's **Data Connector** from public preview to Global Availability | 
| 3.0.2       |	15-04-2024	                  |Updated **Data Connector** MicrosoftDefenderForCloudTenantBased's kind as GenericUI | 
| 3.0.1       | 03-04-2024                    |Corrected the standard tier in **Data Connector** and Updated MicrosoftDefenderForCloudTenantBased.json to support FFX  |
| 3.0.0       | 08-11-2023                    |New **Data Connector** included		        |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

