# Forcepoint CSG

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Forcepoint CSG Logo" width="75" height="75">

[Forcepoint Cloud Security Gateway](https://www.forcepoint.com/product/cloud-security-gateway) (CSG) Solution for Microsoft Sentinel exports web and/or email logs so that custom dashboards can be created using Workbooks to visualize events and insights on activities of Forcepoint Cloud Security Gateway.

For more details about this solution refer to [integration documentation](https://forcepoint.github.io/docs/csg_and_sentinel/).

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors were deprecated on **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Community |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/Azure/Azure-Sentinel/issues](https://github.com/Azure/Azure-Sentinel/issues) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Forcepoint |
| **First Published** | 2022-05-10 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Forcepoint%20CSG](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Forcepoint%20CSG) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Forcepoint CSG via Legacy Agent](../connectors/forcepointcsg.md) ⚠️
- [[Deprecated] Forcepoint CSG via AMA](../connectors/forcepointcsgama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Forcepoint CSG via AMA](../connectors/forcepointcsgama.md), [[Deprecated] Forcepoint CSG via Legacy Agent](../connectors/forcepointcsg.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ForcepointCloudSecuirtyGateway](../content/forcepoint-csg-forcepointcloudsecuirtygateway-3685ea15.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.3       | 19-11-2024                     |    Removed Deprecated **Data Connectors**                          |
| 3.0.2       | 15-07-2024                     |	Deprecating data connectors                                     |
| 3.0.1       | 19-12-2023                     |	Workbook moved from standalone to solution and repackage        |
| 3.0.0       | 11-09-2023                     |	Addition of new Forcepoint CSG AMA **Data Connector**           |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
