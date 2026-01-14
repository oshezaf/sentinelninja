# Microsoft Exchange Security - Exchange Online

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Microsoft Exchange Security - Exchange Online Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Exchange Security Audit and Configuration Insight solution analyze Exchange Online configuration and logs from a security lens to provide insights and alerts.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Custom logs ingestion via Data Collector REST API](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-collector-api?tabs=powershell)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Community |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/Azure/Azure-Sentinel/issues](https://github.com/Azure/Azure-Sentinel/issues) |
| **Categories** | domains |
| **Version** | 3.1.7 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-12-21 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20Online](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20Online) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Exchange Security Insights Online Collector](../connectors/esi-exchangeonlinecollector.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ESIExchangeOnlineConfig_CL`](../tables/esiexchangeonlineconfig-cl.md) | [Exchange Security Insights Online Collector](../connectors/esi-exchangeonlinecollector.md) | Workbooks |
| [`Event`](../tables/event.md) | - | Workbooks |
| [`OfficeActivity`](../tables/officeactivity.md) | - | Workbooks |

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
| [ExchangeConfiguration](../content/microsoft-exchange-security-exchange-online-exchangeconfiguration-f2ae482d-999c-452e-b108-31880aa99620-0563d5d5.md) | The list of section to query. Default is all. | - |
| [ExchangeEnvironmentList](../content/microsoft-exchange-security-exchange-online-exchangeenvironmentlist-fa748dc3-00ee-41cb-b54e-8acd56041b2a-852d1447.md) | The target environment to query. Valid values are "On-Premises" or "Online". Default is "On-Premises... | - |
| [MESCheckOnlineVIP](../content/microsoft-exchange-security-exchange-online-mescheckonlinevip-9b864a03-5db6-4cf0-aef1-17ac0cc34195-78b91c0a.md) | The user to verifiy if is a VIP or not. Default value is "all". | - |
| [MESCompareDataMRA](../content/microsoft-exchange-security-exchange-online-mescomparedatamra-39f51672-8c63-4600-882a-5db8275f798f-41c76693.md) | The Section to compare. Default value is "". | [`ESIExchangeOnlineConfig_CL`](../tables/esiexchangeonlineconfig-cl.md) *(read)* |
| [MESOfficeActivityLogs](../content/microsoft-exchange-security-exchange-online-mesofficeactivitylogs-2be516a9-f8fd-4357-a839-cafcb5a6d73a-a47fdf2d.md) | - | [`OfficeActivity`](../tables/officeactivity.md) *(read)* |

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

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

