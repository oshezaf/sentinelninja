# Darktrace

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Darktrace |
| **Support Tier** | Partner |
| **Support Link** | [https://www.darktrace.com/en/contact/](https://www.darktrace.com/en/contact/) |
| **Categories** | domains |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Darktrace Connector for Microsoft Sentinel REST API](../connectors/darktracerestconnector.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
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
| [Darktrace AI Analyst](../content/ffa2977f-3077-4bba-b1bf-f3417699cbb0.md) | High | - | [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md) |
| [Darktrace Model Breach](../content/a3c7b8ed-56a9-47b7-98e5-2555c16e17c9.md) | Medium | - | [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md) |
| [Darktrace System Status](../content/2e629769-60eb-4a14-8bfc-bde9be66ebeb.md) | Informational | - | [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DarktraceWorkbook](../content/darktraceworkbook-darktrace.md) | [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md) |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
