# Ivanti Unified Endpoint Management

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Ivanti Unified Endpoint Management Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Ivanti Unified Endpoint Management](https://www.ivanti.com/products/endpoint-manager) data connector provides the capability to ingest [Ivanti UEM Alerts](https://help.ivanti.com/ld/help/en_US/LDMS/11.0/Windows/alert-c-monitoring-overview.htm) into Microsoft Sentinel. 

This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector.Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-07-05 |
| **Solution Folder** | [Ivanti Unified Endpoint Management](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Ivanti%20Unified%20Endpoint%20Management) |
| **Dependencies** | [Syslog](syslog.md) |

## Dependencies

This solution depends on **1 other solution(s)**:

| Solution | Dependency Type | Details |
|:---------|:----------------|:--------|
| [Syslog](syslog.md) | explicit | - |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Ivanti Unified Endpoint Management](../connectors/ivantiuem.md) ⚠️
- [Syslog via Legacy Agent](../connectors/syslog.md) *(dependency on [Syslog](syslog.md))*
- [Syslog via AMA](../connectors/syslogama.md) *(dependency on [Syslog](syslog.md))*

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [Syslog via AMA](../connectors/syslogama.md) (dependency), [Syslog via Legacy Agent](../connectors/syslog.md) (dependency), [[Deprecated] Ivanti Unified Endpoint Management](../connectors/ivantiuem.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [IvantiUEMEvent](../content/ivanti-unified-endpoint-management-ivantiuemevent-0a1bef4b-5f78-4b1a-927d-e4383e0f741e-30b98c5e.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       | 27-12-2024                     | Removed Deprecated **Data Connectors**      |
| 3.0.0       | 24-07-2024                     | Deprecated Data Connectors                  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

