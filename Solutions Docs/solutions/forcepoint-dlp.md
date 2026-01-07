# Forcepoint DLP

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Forcepoint DLP Logo" width="75" height="75">

The [Forcepoint DLP (Data Loss Prevention)](https://www.forcepoint.com/product/dlp-data-loss-prevention) Solution for Microsoft Sentinel allows you to automatically export DLP incident data from Forcepoint DLP into Microsoft Sentinel in real-time. This enriches visibility into user activities and data loss incidents, enables further correlation with data from Azure workloads and other feeds, and improves monitoring capability with Workbooks inside Microsoft Sentinel.

For more details about this solution refer to [integration documentation](https://forcepoint.github.io/docs/dlp_and_azure_sentinel/)

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

- [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Community |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/Azure/Azure-Sentinel/issues](https://github.com/Azure/Azure-Sentinel/issues) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | Forcepoint - isv@email.com |
| **First Published** | 2022-05-09 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Forcepoint%20DLP](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Forcepoint%20DLP) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Forcepoint DLP](../connectors/forcepoint-dlp.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ForcepointDLPEvents_CL`](../tables/forcepointdlpevents-cl.md) | [Forcepoint DLP](../connectors/forcepoint-dlp.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ForcepointDLP](../content/forcepoint-dlp-forcepointdlp-aa61cdb9.md) | [`ForcepointDLPEvents_CL`](../tables/forcepointdlpevents-cl.md) |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
