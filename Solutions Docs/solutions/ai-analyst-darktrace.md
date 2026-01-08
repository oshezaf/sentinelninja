# AI Analyst Darktrace

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Darktrace.svg" alt="AI Analyst Darktrace Logo" width="75" height="75">

The [AI Analyst Darktrace](https://www.darktrace.com/en/cyber-ai-analyst/) Solution for Microsoft Sentinel lets users connect Darktrace Model Breaches in real-time with Microsoft Sentinel, allowing creation of custom Dashboards, Workbooks, Notebooks and Custom Alerts to improve investigation. Microsoft Sentinel's enhanced visibility into Darktrace logs enables monitoring and mitigation of security threats.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors are about to be deprecated by **Aug 31, 2024.**

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Darktrace |
| **Support Tier** | Partner |
| **Support Link** | [https://www.darktrace.com/en/contact/](https://www.darktrace.com/en/contact/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Darktrace |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AI%20Analyst%20Darktrace](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AI%20Analyst%20Darktrace) |
| **Dependencies** | azuresentinel.azure-sentinel-solution-commoneventformat |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] AI Analyst Darktrace via Legacy Agent](../connectors/darktrace.md)
- [[Deprecated] AI Analyst Darktrace via AMA](../connectors/darktraceama.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] AI Analyst Darktrace via AMA](../connectors/darktraceama.md), [[Deprecated] AI Analyst Darktrace via Legacy Agent](../connectors/darktrace.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AIA-Darktrace](../content/ai-analyst-darktrace-aia-darktrace-c99f20ad.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 11-07-2024                     |    Deprecating data connectors                                     |
| 3.0.0       | 18-09-2023                     |	Addition of new AI Analyst Darktrace AMA **Data Connector**     |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
