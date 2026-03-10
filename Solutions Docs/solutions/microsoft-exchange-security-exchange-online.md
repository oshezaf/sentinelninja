# Microsoft Exchange Security for Exchange Online

*Solution: Microsoft Exchange Security - Exchange Online*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Microsoft Exchange Security - Exchange Online Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Community |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/Azure/Azure-Sentinel/issues](https://github.com/Azure/Azure-Sentinel/issues) |
| **Categories** | domains |
| **Version** | 3.1.7 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-12-21 |
| **Solution Folder** | [Microsoft Exchange Security - Exchange Online](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20Online) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoftsentinelcommunity.azure-sentinel-solution-esionline) |
| **Popularity** | 🟢 High (95%) |

The Exchange Security Audit and Configuration Insight solution analyze Exchange Online configuration and logs from a security lens to provide insights and alerts.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Custom logs ingestion via Data Collector REST API](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-collector-api?tabs=powershell)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Exchange Security Insights Online Collector](../connectors/esi-exchangeonlinecollector.md) 🔶

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ESIExchangeOnlineConfig_CL`](../tables/esiexchangeonlineconfig-cl.md) 🔶 | [Exchange Security Insights Online Collector](../connectors/esi-exchangeonlinecollector.md) | Workbooks |
| [`Event`](../tables/event.md) | - | Workbooks |
| [`OfficeActivity`](../tables/officeactivity.md) | - | Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.
## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 5 |
| Workbooks | 4 |
| Watchlists | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Microsoft Exchange Admin Activity - Online](../content/microsoft-exchange-security-exchange-online-microsoft-exchange-admin-activity-online-c51be957.md) | [`OfficeActivity`](../tables/officeactivity.md) |
| [Microsoft Exchange Least Privilege with RBAC - Online](../content/microsoft-exchange-security-exchange-online-microsoft-exchange-least-privilege-with-rbac-online-e1522c02.md) | [`ESIExchangeOnlineConfig_CL`](../tables/esiexchangeonlineconfig-cl.md)<br>[`Event`](../tables/event.md) |
| [Microsoft Exchange Search AdminAuditLog - Online](../content/microsoft-exchange-security-exchange-online-microsoft-exchange-search-adminauditlog-online-11d0bde2.md) | [`OfficeActivity`](../tables/officeactivity.md) |
| [Microsoft Exchange Security Review - Online](../content/microsoft-exchange-security-exchange-online-microsoft-exchange-security-review-online-bf15f919.md) | [`ESIExchangeOnlineConfig_CL`](../tables/esiexchangeonlineconfig-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ExchangeConfiguration](../parsers/exchangeconfiguration.md) | The list of section to query. Default is all. | - |
| [ExchangeEnvironmentList](../parsers/exchangeenvironmentlist.md) | The target environment to query. Valid values are "On-Premises" or "Online". Default is "On-Premises... | - |
| [MESCheckOnlineVIP](../parsers/mescheckonlinevip.md) | The user to verifiy if is a VIP or not. Default value is "all". | - |
| [MESCompareDataMRA](../parsers/mescomparedatamra.md) | The Section to compare. Default value is "". | [`ESIExchangeOnlineConfig_CL`](../tables/esiexchangeonlineconfig-cl.md) *(read)* |
| [MESOfficeActivityLogs](../parsers/mesofficeactivitylogs.md) | - | [`OfficeActivity`](../tables/officeactivity.md) *(read)* |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ExchOnlineVIP](../content/microsoft-exchange-security-exchange-online-exchonlinevip-20613a40.md) | - | - |

## Additional Documentation

> 📄 *Source: [Microsoft Exchange Security - Exchange Online/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20Online/README.md)*

## Overview

We have published Public Contents for the Microsoft Exchange Security Sentinel Solution. The contents can be found here:

* [General Documentation & Artifacts](./%23%20-%20General%20Content/README.md)

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.1.7       | 26-03-2025                     | Update documentation link to new repository     |
| 3.1.6       | 30-08-2024                     | Correct bug on LasdtReceivedData of DataConnector. and change parser     |
| 3.1.5       | 15-05-2024                     | Enhancement in existing **Parser**       |
| 3.1.4       | 30-04-2024                     | Repackaged for parser issue       |
| 3.1.3       | 25-04-2024                     | Repackaged for parser issue with old names       |
| 3.1.2       | 18-04-2024                     | Repackaged for parser issue while update       |
| 3.1.1       | 19-03-2024                     | Manually updated package content       |
| 3.0.5       | 20-02-2024                     | Correct DataConnector last Log indicator       |
| 3.0.4       | 18-12-2023                     | Correct Parser parameters and force version update       |
| 3.0.3       | 05-12-2023                     | Added parameters in **Parser** to fix default values issue.        |
| 3.0.2       | 01-11-2023                     | Added a **Parser** to verify if user is Microsoft Exchange Security VIP (Watchlist)          |
| 3.0.1       | 13-09-2023                     | Readme file for parsers added and typo correction                      |
| 3.0.0       | 23-08-2023                     | ExchangeEnvironmentList parser name  corrected in **Workbooks**.  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

