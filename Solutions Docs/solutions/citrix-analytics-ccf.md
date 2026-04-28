# ⚠️ Citrix Analytics CCF

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/citrix_logo.svg" alt="Citrix Analytics CCF Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Citrix Systems, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.citrix.com/support/](https://www.citrix.com/support/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Citrix Systems, Inc. |
| **First Published** | 2026-01-21 |
| **Solution Folder** | [Citrix Analytics CCF](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20Analytics%20CCF) |

[Citrix Analytics](https://www.citrix.com/solutions/analytics/) Solution for Microsoft Sentinel helps you to export data analyzed for the events(SPA, Security) from Citrix Analytics into Microsoft Sentinel environment. You can create custom dashboards, analyze data from other sources along with that from Citrix Analytics and create custom workflows using Logic Apps to monitor and mitigate the events. 
For more details about this solution refer to https://docs.citrix.com/en-us/security-analytics/siem-integration/azure-sentinel-integration.html 

**Underlying Microsoft Technologies used:**

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 
 a.[Azure Monitor HTTP Logs Ingestion API](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/logs-ingestion-api-overview)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Citrix Analytics (via Codeless Connector Framework)](../connectors/citrixanalyticsdefinition.md)

## Tables Used

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CitrixAnalytics_CVAD_Events_V1_CL`](../tables/citrixanalytics-cvad-events-v1-cl.md) | [Citrix Analytics (via Codeless Connector Framework)](../connectors/citrixanalyticsdefinition.md) | Workbooks |
| [`CitrixAnalytics_SPA_Events_V1_CL`](../tables/citrixanalytics-spa-events-v1-cl.md) | [Citrix Analytics (via Codeless Connector Framework)](../connectors/citrixanalyticsdefinition.md) | Workbooks |
| [`CitrixAnalytics_indicatorEventDetails_V1_CL`](../tables/citrixanalytics-indicatoreventdetails-v1-cl.md) | [Citrix Analytics (via Codeless Connector Framework)](../connectors/citrixanalyticsdefinition.md) | Workbooks |
| [`CitrixAnalytics_indicatorSummary_V1_CL`](../tables/citrixanalytics-indicatorsummary-v1-cl.md) | [Citrix Analytics (via Codeless Connector Framework)](../connectors/citrixanalyticsdefinition.md) | Workbooks |
| [`CitrixAnalytics_riskScoreChange_V1_CL`](../tables/citrixanalytics-riskscorechange-v1-cl.md) | [Citrix Analytics (via Codeless Connector Framework)](../connectors/citrixanalyticsdefinition.md) | Workbooks |
| [`CitrixAnalytics_userProfile_V1_CL`](../tables/citrixanalytics-userprofile-v1-cl.md) | [Citrix Analytics (via Codeless Connector Framework)](../connectors/citrixanalyticsdefinition.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CitrixAnalytics](../content/citrix-analytics-ccf-citrixanalytics-e5da2e00.md) | [`CitrixAnalytics_CVAD_Events_V1_CL`](../tables/citrixanalytics-cvad-events-v1-cl.md)<br>[`CitrixAnalytics_SPA_Events_V1_CL`](../tables/citrixanalytics-spa-events-v1-cl.md)<br>[`CitrixAnalytics_indicatorEventDetails_V1_CL`](../tables/citrixanalytics-indicatoreventdetails-v1-cl.md)<br>[`CitrixAnalytics_indicatorSummary_V1_CL`](../tables/citrixanalytics-indicatorsummary-v1-cl.md)<br>[`CitrixAnalytics_riskScoreChange_V1_CL`](../tables/citrixanalytics-riskscorechange-v1-cl.md)<br>[`CitrixAnalytics_userProfile_V1_CL`](../tables/citrixanalytics-userprofile-v1-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                      |
|-------------|--------------------------------|---------------------------------------------------------|
| 3.0.0       | 26-03-2026                     | Initial release of the Citrix Analytics CCF connector.  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

