# iboss

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/iboss/Workbooks/Images/Logo/iboss_full-logo_2020_vector_black.svg" alt="iboss Logo" width="75" height="75">

The iboss Solution provides means to connect your Threat Console to Microsoft Sentinel and enrich your instance with iboss URL event logs. Our logs are forwarded in Common Event Format (CEF) over Syslog and the configuration required can be completed on the iboss platform without the use of a proxy. Take advantage of our connector to garner critical data points and gain insight into security threats.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.**

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | iboss |
| **Support Tier** | Partner |
| **Support Link** | [https://www.iboss.com/contact-us/](https://www.iboss.com/contact-us/) |
| **Categories** | domains |
| **Version** | 3.1.2 |
| **Author** | iboss |
| **First Published** | 2022-02-15 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/iboss](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/iboss) |
| **Dependencies** | azuresentinel.azure-sentinel-solution-commoneventformat |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[Deprecated] iboss via Legacy Agent](../connectors/iboss.md) ⚠️
- [iboss via AMA](../connectors/ibossama.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] iboss via Legacy Agent](../connectors/iboss.md), [iboss via AMA](../connectors/ibossama.md) | - |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 2 |
| Parsers | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ibossMalwareAndC2](../content/iboss-ibossmalwareandc2-0213a927.md) | - |
| [ibossWebUsage](../content/iboss-ibosswebusage-5b4fbb25.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ibossUrlEvent](../content/iboss-ibossurlevent-0902cd9b-3b2b-4ad4-a480-e5e960b6a77d-2c14b8b6.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.1.2       | 07-01-2025                     |    Removed Deprecated **Data connector**                           |
| 3.1.1       | 18-09-2024                     |    Updated AMA and legacy OMS connector to use new iboss field     |
| 3.1.0       | 05-09-2024                     |    Updated AMA connector with iboss specific instructions          |
| 3.0.1       | 12-07-2024                     |    Deprecating data connectors                                     |
| 3.0.0       | 20-09-2023                     |	Addition of new Iboss AMA **Data Connector**                    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
