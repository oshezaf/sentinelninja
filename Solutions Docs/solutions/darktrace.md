# Darktrace for Microsoft Sentinel

*Solution: Darktrace*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Darktrace.svg" alt="Darktrace Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Darktrace |
| **Support Tier** | Partner |
| **Support Link** | [https://www.darktrace.com/contact/](https://www.darktrace.com/contact/) |
| **Categories** | Security - Threat Protection |
| **Source Vendor** | Darktrace *(basis: publisher)* |
| **Version** | 3.0.0 |
| **Author** | Darktrace - customers@darktrace.com |
| **First Published** | 2022-05-02 |
| **Last Updated** | 2026-06-18 |
| **Solution Folder** | [Darktrace](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/darktrace1655286944672.darktrace_for_sentinel) · Popularity: 🟢 High (83%) |

The [Darktrace](https://darktrace.com/) Microsoft Sentinel Solution lets users connect Darktrace AI-based alerting in real-time with Microsoft Sentinel, allowing creation of custom Dashboards, Workbooks, Notebooks and Custom Alerts to improve investigation. Microsoft Sentinel's enhanced visibility into Darktrace logs enables monitoring and mitigation of security threats. 

**Underlying Microsoft Technologies used:**

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

a. [Microsoft Sentinel Data Collector API](https://docs.microsoft.com/azure/sentinel/connect-rest-api-template)

 For more details about this solution refer to https://www.darktrace.com/microsoft/sentinel/

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **2 data connector(s)**:

- [Darktrace ActiveAI Security Platform Connector](../connectors/darktraceactiveaisecurityplatform.md)
- [Darktrace Connector for Microsoft Sentinel REST API (Legacy)](../connectors/darktracerestconnector.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **7 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DarktraceASM_CL`](../tables/darktraceasm-cl.md) | [Darktrace ActiveAI Security Platform Connector](../connectors/darktraceactiveaisecurityplatform.md) | Workbooks |
| [`DarktraceEMAIL_CL`](../tables/darktraceemail-cl.md) | [Darktrace ActiveAI Security Platform Connector](../connectors/darktraceactiveaisecurityplatform.md) | Workbooks |
| [`DarktraceIncidents_CL`](../tables/darktraceincidents-cl.md) | [Darktrace ActiveAI Security Platform Connector](../connectors/darktraceactiveaisecurityplatform.md) | Analytics, Workbooks |
| [`DarktraceModelAlerts_CL`](../tables/darktracemodelalerts-cl.md) | [Darktrace ActiveAI Security Platform Connector](../connectors/darktraceactiveaisecurityplatform.md) | Analytics, Workbooks |
| [`DarktraceResponseActions_CL`](../tables/darktraceresponseactions-cl.md) | [Darktrace ActiveAI Security Platform Connector](../connectors/darktraceactiveaisecurityplatform.md) | Workbooks |
| [`DarktraceSystemStatusAlerts_CL`](../tables/darktracesystemstatusalerts-cl.md) | [Darktrace ActiveAI Security Platform Connector](../connectors/darktraceactiveaisecurityplatform.md) | Workbooks |
| [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md) 🔶 | [Darktrace Connector for Microsoft Sentinel REST API (Legacy)](../connectors/darktracerestconnector.md) | Analytics, Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **7 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 5 |
| Workbooks | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Darktrace AI Analyst (Legacy)](../content/darktrace-darktrace-ai-analyst-legacy-ffa2977f-3077-4bba-b1bf-f3417699cbb0-9433455e.md) | High | InitialAccess, Execution, LateralMovement, CommandAndControl | [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md) |
| [Darktrace Incident Event](../content/darktrace-darktrace-incident-event-05de0eaf-01bc-4615-99fc-2ec769864b34-b25377f2.md) | High | InitialAccess, Execution, LateralMovement, CommandAndControl | [`DarktraceIncidents_CL`](../tables/darktraceincidents-cl.md) |
| [Darktrace Model Alert](../content/darktrace-darktrace-model-alert-9392a06f-63a4-4a5d-8ca3-647064b13c28-1430c4d3.md) | High | InitialAccess, Execution, LateralMovement, CommandAndControl | [`DarktraceModelAlerts_CL`](../tables/darktracemodelalerts-cl.md) |
| [Darktrace Model Breach (Legacy)](../content/darktrace-darktrace-model-breach-legacy-a3c7b8ed-56a9-47b7-98e5-2555c16e17c9-2d80a016.md) | Medium | InitialAccess, Execution, LateralMovement, CommandAndControl | [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md) |
| [Darktrace System Status (Legacy)](../content/darktrace-darktrace-system-status-legacy-2e629769-60eb-4a14-8bfc-bde9be66ebeb-b842cc6c.md) | Informational | Discovery, Impact | [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DarktraceActiveAISecurityPlatformWorkbook](../content/darktrace-darktraceactiveaisecurityplatformworkbook-d9b62600.md) | [`DarktraceASM_CL`](../tables/darktraceasm-cl.md)<br>[`DarktraceEMAIL_CL`](../tables/darktraceemail-cl.md)<br>[`DarktraceIncidents_CL`](../tables/darktraceincidents-cl.md)<br>[`DarktraceModelAlerts_CL`](../tables/darktracemodelalerts-cl.md)<br>[`DarktraceResponseActions_CL`](../tables/darktraceresponseactions-cl.md)<br>[`DarktraceSystemStatusAlerts_CL`](../tables/darktracesystemstatusalerts-cl.md) |
| [DarktraceWorkbook](../content/darktrace-darktraceworkbook-b6b8de88.md) | [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 06-03-2026                     | Added new Darktrace ActiveAI Security Platform CCF data connector, DCR, custom tables, workbook, and two new analytic rules; relabeled legacy REST API connector, workbook, and analytic rules as (Legacy)                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

