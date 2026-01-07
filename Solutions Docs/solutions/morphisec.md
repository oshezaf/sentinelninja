# Morphisec

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Morphisec_Logo.svg" alt="Morphisec Logo" width="75" height="75">

The [Morphisec](https://www.morphisec.com/) solution for Microsoft Sentinel enables you to integrate vital insights from your security products with the Morphisec Data Connector for Microsoft Sentinel and expand your analytical capabilities with search and correlation, threat intelligence, and customized alerts. With a single, cross-product view, you can make real-time, data-backed decisions to protect your most important assets.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Morphisec |
| **Support Tier** | Partner |
| **Support Link** | [https://support.morphisec.com/support/home](https://support.morphisec.com/support/home) |
| **Categories** | domains |
| **Version** | 3.1.0 |
| **Author** | Morphisec |
| **First Published** | 2022-05-05 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Morphisec](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Morphisec) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Morphisec API Data Connector (via Codeless Connector Framework)](../connectors/morphisecccf.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`MorphisecAlerts_CL`](../tables/morphisecalerts-cl.md) | [Morphisec API Data Connector (via Codeless Connector Framework)](../connectors/morphisecccf.md) | Analytics |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Critical Severity Incident](../content/morphisec-critical-severity-incident-4f1c9e6e-8b6b-4d2a-9f3e-123456789abc-ecbf5667.md) | High | Execution, DefenseEvasion | [`MorphisecAlerts_CL`](../tables/morphisecalerts-cl.md) |
| [Device Alert Surge](../content/morphisec-device-alert-surge-5c8e1f2e-9d6b-4f4a-8f3e-123456789abc-7d970dee.md) | High | Execution, DefenseEvasion | [`MorphisecAlerts_CL`](../tables/morphisecalerts-cl.md) |
| [Process-Level Anomaly](../content/morphisec-process-level-anomaly-3fa85f64-5717-4562-b3fc-2c963f66afa6-0c57c06c.md) | Medium | Execution, DefenseEvasion | [`MorphisecAlerts_CL`](../tables/morphisecalerts-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Morphisec](../content/morphisec-morphisec-a68a352c-7f90-49ca-b5a0-36178788f43c-0256b13f.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                |
|-------------|--------------------------------|---------------------------------------------------|
| 3.1.0       | 10-09-2025                     | 	Adding CCF connector                             |
| 3.0.1       | 26-06-2024                     | 	Deprecating data connectors                      |
| 3.0.0       | 07-09-2023                     | 	Addition of new Morphisec AMA **Data Connector** |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
