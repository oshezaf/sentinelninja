# Trend Micro Vision One

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Trend_Micro_Logo.svg" alt="Trend Micro Vision One Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Trend Micro |
| **Support Tier** | Partner |
| **Support Link** | [https://success.trendmicro.com/dcx/s/?language=en_US](https://success.trendmicro.com/dcx/s/?language=en_US) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Trend Micro |
| **First Published** | 2022-05-11 |
| **Last Updated** | 2024-07-16 |
| **Solution Folder** | [Trend Micro Vision One](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20Vision%20One) |

The [Trend Vision One](https://www.trendmicro.com/en_us/business/products/detection-response/xdr.html) solution for Microsoft Sentinel enables you to ingest security alerts and detection data reported in the Trend Vision One platform into Microsoft Sentinel.
  
  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/sentinel/connect-syslog)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Trend Vision One](../connectors/trendmicroxdr.md) 🔶

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`TrendMicro_XDR_OAT_CL`](../tables/trendmicro-xdr-oat-cl.md) 🔶 | [Trend Vision One](../connectors/trendmicroxdr.md) | - |
| [`TrendMicro_XDR_RCA_Result_CL`](../tables/trendmicro-xdr-rca-result-cl.md) 🔶 | [Trend Vision One](../connectors/trendmicroxdr.md) | - |
| [`TrendMicro_XDR_RCA_Task_CL`](../tables/trendmicro-xdr-rca-task-cl.md) 🔶 | [Trend Vision One](../connectors/trendmicroxdr.md) | - |
| [`TrendMicro_XDR_WORKBENCH_CL`](../tables/trendmicro-xdr-workbench-cl.md) 🔶 | [Trend Vision One](../connectors/trendmicroxdr.md) | Analytics, Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Create Incident for XDR Alerts](../content/trend-micro-vision-one-create-incident-for-xdr-alerts-0febd8cc-1b8d-45ed-87b3-e1e8a57d14cd-cbe34215.md) | High | - | [`TrendMicro_XDR_WORKBENCH_CL`](../tables/trendmicro-xdr-workbench-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TrendMicroXDROverview](../content/trend-micro-vision-one-trendmicroxdroverview-d7791cc7.md) | [`TrendMicro_XDR_WORKBENCH_CL`](../tables/trendmicro-xdr-workbench-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       | 30-01-2025                     | Updated hyperlink in **Data Connector**     |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Solutions Index](../solutions-index.md)

