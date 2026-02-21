# NozomiNetworks

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="NozomiNetworks Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Nozomi Networks](https://www.nozominetworks.com/) solution provides the capability to ingest Nozomi Networks Events into Microsoft Sentinel. Refer to the Nozomi Networks [PDF documentation](https://www.nozominetworks.com/resources/data-sheets-brochures-learning-guides/) for more information.

This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors were deprecated on **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-07-12 |
| **Solution Folder** | [NozomiNetworks](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NozomiNetworks) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Dependencies

This solution depends on **1 other solution(s)**:

| Solution | Dependency Type | Details |
|:---------|:----------------|:--------|
| [Common Event Format](common-event-format.md) | explicit | ID: azuresentinel.azure-sentinel-solution-commoneventformat |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Nozomi Networks N2OS via Legacy Agent](../connectors/nozominetworksn2os.md) ⚠️
- [[Deprecated] Nozomi Networks N2OS via AMA](../connectors/nozominetworksn2osama.md) ⚠️
- [Common Event Format (CEF)](../connectors/cef.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) *(dependency on [Common Event Format](common-event-format.md))*

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Common Event Format (CEF)](../connectors/cef.md) (dependency), [Common Event Format (CEF) via AMA](../connectors/cefama.md) (dependency), [[Deprecated] Nozomi Networks N2OS via AMA](../connectors/nozominetworksn2osama.md), [[Deprecated] Nozomi Networks N2OS via Legacy Agent](../connectors/nozominetworksn2os.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [NozomiNetworksEvents](../content/nozominetworks-nozominetworksevents-a058c0dd-449b-4083-bbd7-4d34f0510592-c0c01341.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.3       | 21-11-2024                     | Removed Deprecated **Data Connectors**                             |
| 3.0.2 	  | 12-07-2024 					   | Deprecated **Data Connector** 										|
| 3.0.1       | 22-12-2023                     | Query issue fixed in AMA **Data Connector**                     	|
| 3.0.0       | 13-09-2023                     | Addition of new NozomiNetworks AMA **Data Connector**           	|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

