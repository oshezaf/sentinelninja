# Forcepoint CASB

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Forcepoint CASB Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Forcepoint CASB](https://www.forcepoint.com/product/casb-cloud-access-security-broker) (Cloud Access Security Broker) Solution for Microsoft Sentinel allows you to automatically export CASB logs and events into Microsoft Sentinel in real-time. This enriches visibility into user activities across locations and cloud applications, enables further correlation with data from Azure workloads and other feeds, and improves monitoring capability with Workbooks inside Microsoft Sentinel. 

For more details about this solution refer to [integration documentation](https://forcepoint.github.io/docs/casb_and_azure_sentinel/). 

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors were deprecated on **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Community |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/Azure/Azure-Sentinel/issues](https://github.com/Azure/Azure-Sentinel/issues) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Forcepoint |
| **First Published** | 2022-05-19 |
| **Solution Folder** | [Forcepoint CASB](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Forcepoint%20CASB) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Forcepoint CASB via Legacy Agent](../connectors/forcepointcasb.md) ⚠️
- [[Deprecated] Forcepoint CASB via AMA](../connectors/forcepointcasbama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Forcepoint CASB via AMA](../connectors/forcepointcasbama.md), [[Deprecated] Forcepoint CASB via Legacy Agent](../connectors/forcepointcasb.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ForcepointCASB](../content/forcepoint-casb-forcepointcasb-d5d7df21.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.2       | 27-11-2024                     |    Removed Deprecated **Data Connectors**                          |
| 3.0.1       | 15-07-2024                     |	Deprecating data connectors                                     |
| 3.0.0       | 31-08-2023                     |	Addition of new Forcepoint CASB AMA **Data Connector**          |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

