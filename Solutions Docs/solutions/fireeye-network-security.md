# FireEye Network Security

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="FireEye Network Security Logo" width="75" height="75">

The [FireEye Network Security (NX)](https://www.fireeye.com/products/network-security.html) solution provides the capability to ingest FireEye Network Security logs into Microsoft Sentinel.

This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors were deprecated on **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FireEye%20Network%20Security](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FireEye%20Network%20Security) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] FireEye Network Security (NX) via Legacy Agent](../connectors/fireeyenx.md) ⚠️
- [[Deprecated] FireEye Network Security (NX) via AMA](../connectors/fireeyenxama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] FireEye Network Security (NX) via AMA](../connectors/fireeyenxama.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [FireEyeNXEvent](../content/fireeye-network-security-fireeyenxevent-742dcaba-a8fc-428c-b9f9-1ad2cf5c7b20-cedc5103.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.2       | 21-11-2024                     | Removed Deprecated **Data Connectors**                             |
| 3.0.1 	  | 10-07-2024 					   | Deprecated **Data Connector** 										|
| 3.0.0       | 01-09-2023                     |	Addition of new FireEye Network Security AMA **Data Connector** |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

