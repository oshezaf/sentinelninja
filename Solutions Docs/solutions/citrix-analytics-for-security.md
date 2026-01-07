# Citrix Analytics for Security

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/citrix-logo-circle-black.svg" alt="Citrix Analytics for Security Logo" width="75" height="75">

[Citrix Analytics (Security)](https://www.citrix.com/solutions/analytics/) Solution for Microsoft Sentinel helps you to export data analyzed for risky events from Citrix Analytics (Security) into Microsoft Sentinel environment. You can create custom dashboards, analyze data from other sources along with that from Citrix Analytics (Security) and create custom workflows using Logic Apps to monitor and mitigate security events. 
For more details about this solution refer to https://docs.citrix.com/en-us/security-analytics/siem-integration/azure-sentinel-integration.html 

**Underlying Microsoft Technologies used:**

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 
 a.[Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Citrix Systems |
| **Support Tier** | Partner |
| **Support Link** | [https://www.citrix.com/support/](https://www.citrix.com/support/) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | Citrix Systems |
| **First Published** | 2022-05-06 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20Analytics%20for%20Security](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20Analytics%20for%20Security) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [CITRIX SECURITY ANALYTICS](../connectors/citrix.md)

## Tables Reference

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CitrixAnalytics_indicatorEventDetails_CL`](../tables/citrixanalytics-indicatoreventdetails-cl.md) | [CITRIX SECURITY ANALYTICS](../connectors/citrix.md) | Workbooks |
| [`CitrixAnalytics_indicatorSummary_CL`](../tables/citrixanalytics-indicatorsummary-cl.md) | [CITRIX SECURITY ANALYTICS](../connectors/citrix.md) | Workbooks |
| [`CitrixAnalytics_riskScoreChange_CL`](../tables/citrixanalytics-riskscorechange-cl.md) | [CITRIX SECURITY ANALYTICS](../connectors/citrix.md) | Workbooks |
| [`CitrixAnalytics_userProfile_CL`](../tables/citrixanalytics-userprofile-cl.md) | [CITRIX SECURITY ANALYTICS](../connectors/citrix.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Citrix](../content/citrix-analytics-for-security-citrix-7f228429.md) | [`CitrixAnalytics_indicatorEventDetails_CL`](../tables/citrixanalytics-indicatoreventdetails-cl.md)<br>[`CitrixAnalytics_indicatorSummary_CL`](../tables/citrixanalytics-indicatorsummary-cl.md)<br>[`CitrixAnalytics_riskScoreChange_CL`](../tables/citrixanalytics-riskscorechange-cl.md)<br>[`CitrixAnalytics_userProfile_CL`](../tables/citrixanalytics-userprofile-cl.md) |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
