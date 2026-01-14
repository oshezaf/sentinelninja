# Darktrace

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Darktrace.svg" alt="Darktrace Logo" width="75" height="75">

The [Darktrace](https://darktrace.com/) Sentinel Solution lets users connect Darktrace AI-based alerting in real-time with Microsoft Sentinel, allowing creation of custom Dashboards, Workbooks, Notebooks and Custom Alerts to improve investigation. Microsoft Sentinel's enhanced visibility into Darktrace logs enables monitoring and mitigation of security threats. 

**Underlying Microsoft Technologies used:**

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

a. [Microsoft Sentinel Data Collector API](https://docs.microsoft.com/azure/sentinel/connect-rest-api-template)

 For more details about this solution refer to https://www.darktrace.com/microsoft/sentinel/

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Darktrace |
| **Support Tier** | Partner |
| **Support Link** | [https://www.darktrace.com/en/contact/](https://www.darktrace.com/en/contact/) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | Darktrace |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Darktrace Connector for Microsoft Sentinel REST API](../connectors/darktracerestconnector.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Alert`](../tables/alert.md) | - | Workbooks |
| [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md) | [Darktrace Connector for Microsoft Sentinel REST API](../connectors/darktracerestconnector.md) | Analytics, Workbooks |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Darktrace AI Analyst](../content/darktrace-darktrace-ai-analyst-ffa2977f-3077-4bba-b1bf-f3417699cbb0-c8c73532.md) | High | - | [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md) |
| [Darktrace Model Breach](../content/darktrace-darktrace-model-breach-a3c7b8ed-56a9-47b7-98e5-2555c16e17c9-0057eb81.md) | Medium | - | [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md) |
| [Darktrace System Status](../content/darktrace-darktrace-system-status-2e629769-60eb-4a14-8bfc-bde9be66ebeb-cc05125a.md) | Informational | - | [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DarktraceWorkbook](../content/darktrace-darktraceworkbook-b6b8de88.md) | [`Alert`](../tables/alert.md)<br>[`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md) |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

