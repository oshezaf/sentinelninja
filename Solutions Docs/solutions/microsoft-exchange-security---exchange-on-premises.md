# Microsoft Exchange Security - Exchange On-Premises

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Microsoft Exchange Security - Exchange On-Premises Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Exchange Security Audit and Configuration Insight solution analyze Exchange On-Premises configuration and logs from a security lens to provide insights and alerts.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Windows Event logs collection, including MS Exchange Management Event logs](https://learn.microsoft.com/azure/azure-monitor/agents/data-sources-windows-events)

b. [Custom logs ingestion via Data Collector REST API](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-collector-api?tabs=powershell)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Community |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/Azure/Azure-Sentinel/issues](https://github.com/Azure/Azure-Sentinel/issues) |
| **Categories** | domains |
| **Version** | 3.3.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-12-21 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20On-Premises](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20On-Premises) |

## Data Connectors

This solution provides **8 data connector(s)**:

- [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md)
- [Exchange Security Insights On-Premises Collector](../connectors/esi-exchangeonpremisescollector.md)
- [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md)
- [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md)
- [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md)
- [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md)
- [Microsoft Exchange Message Tracking Logs](../connectors/esi-opt6exchangemessagetrackinglogs.md)
- [Microsoft Exchange HTTP Proxy Logs](../connectors/esi-opt7exchangehttpproxylogs.md)

## Tables Used

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ESIExchangeConfig_CL`](../tables/esiexchangeconfig-cl.md) | [Exchange Security Insights On-Premises Collector](../connectors/esi-exchangeonpremisescollector.md) | Workbooks |
| [`Event`](../tables/event.md) | [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md), [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) | Analytics, Workbooks |
| [`ExchangeHttpProxy_CL`](../tables/exchangehttpproxy-cl.md) | [Microsoft Exchange HTTP Proxy Logs](../connectors/esi-opt7exchangehttpproxylogs.md), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) | - |
| [`MessageTrackingLog_CL`](../tables/messagetrackinglog-cl.md) | [Microsoft Exchange Message Tracking Logs](../connectors/esi-opt6exchangemessagetrackinglogs.md), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) | - |
| [`SecurityEvent`](../tables/securityevent.md) | [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) | Workbooks |
| [`W3CIISLog`](../tables/w3ciislog.md) | [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) | Workbooks |

## Content Items

This solution includes **13 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 5 |
| Workbooks | 4 |
| Analytic Rules | 2 |
| Watchlists | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Server Oriented Cmdlet And User Oriented Cmdlet used](../content/microsoft-exchange-security-exchange-on-premises-server-oriented-cmdlet-and-user-oriented-cmdlet-used-7bce901b-9bc8-4948-8dfc-8f68878092d5-0bb5de2e.md) | High | Exfiltration, Persistence, Collection | [`Event`](../tables/event.md) |
| [VIP Mailbox manipulation](../content/microsoft-exchange-security-exchange-on-premises-vip-mailbox-manipulation-5170c3c4-b8c9-485c-910d-a21d965ee181-521c4b8b.md) | Medium | Exfiltration, Persistence, Collection | [`Event`](../tables/event.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Microsoft Exchange Admin Activity](../content/microsoft-exchange-security-exchange-on-premises-microsoft-exchange-admin-activity-dd1fad82.md) | [`Event`](../tables/event.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`W3CIISLog`](../tables/w3ciislog.md) |
| [Microsoft Exchange Least Privilege with RBAC](../content/microsoft-exchange-security-exchange-on-premises-microsoft-exchange-least-privilege-with-rbac-b2849cd8.md) | [`ESIExchangeConfig_CL`](../tables/esiexchangeconfig-cl.md) |
| [Microsoft Exchange Search AdminAuditLog](../content/microsoft-exchange-security-exchange-on-premises-microsoft-exchange-search-adminauditlog-fcf38c03.md) | [`Event`](../tables/event.md) |
| [Microsoft Exchange Security Review](../content/microsoft-exchange-security-exchange-on-premises-microsoft-exchange-security-review-435fb5ce.md) | [`ESIExchangeConfig_CL`](../tables/esiexchangeconfig-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ExchangeAdminAuditLogs](../content/microsoft-exchange-security-exchange-on-premises-exchangeadminauditlogs-f79a3a19-bb9f-4f06-a109-3e3ac2001be9-f57cf0cf.md) | - | [`Event`](../tables/event.md) *(read)* |
| [ExchangeConfiguration](../content/microsoft-exchange-security-exchange-on-premises-exchangeconfiguration-f2ae482d-999c-452e-b108-31880aa99620-9b72b1b2.md) | The list of section to query. Default is all. | - |
| [ExchangeEnvironmentList](../content/microsoft-exchange-security-exchange-on-premises-exchangeenvironmentlist-fa748dc3-00ee-41cb-b54e-8acd56041b2a-9abc248f.md) | The target environment to query. Valid values are "On-Premises" or "Online". Default is "On-Premises... | - |
| [MESCheckVIP](../content/microsoft-exchange-security-exchange-on-premises-mescheckvip-9f0e2122-f511-4e51-83a0-51fbd86d3121-9828634d.md) | The user to verifiy if is a VIP or not. Default value is "all". | - |
| [MESCompareDataOnPMRA](../content/microsoft-exchange-security-exchange-on-premises-mescomparedataonpmra-0a0f4ea0-6b94-4420-892e-41ca985f2f01-77766893.md) | The Section to compare. Default value is "". | [`ESIExchangeConfig_CL`](../tables/esiexchangeconfig-cl.md) *(read)* |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ExchangeServicesMonitoring](../content/microsoft-exchange-security-exchange-on-premises-exchangeservicesmonitoring-0009df44.md) | - | - |
| [ExchangeVIP](../content/microsoft-exchange-security-exchange-on-premises-exchangevip-ea783afe.md) | - | - |

## Additional Documentation

> 📄 *Source: [Microsoft Exchange Security - Exchange On-Premises/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20On-Premises/README.md)*

## Overview

We have published Public Contents for the Microsoft Exchange Security Sentinel Solution. The contents can be found here:

* [General Documentation & Artifacts](./%23%20-%20General%20Content/README.md)

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.3.2       | 26-03-2025                     | Update documentation link to new repository     |
| 3.3.0       | 26-08-2024                     | Add Compare in Exchange Security Review. Create DataConnectors for Azure Monitor Agent. Correct bugs      |
| 3.2.0       | 09-04-2024                     | Explode "ExchangeAdminAuditLogEvents" dataconnector to multiple simplier dataconnectors      |
| 3.1.5       | 26-04-2024                     | Fix Typpo in DataConnector                  |
|             |                                | Repackaged for fix on parser in maintemplate to have old parsername and parentid                    |
| 3.1.4       | 18-04-2024                     | Repackaged for parser issue while redeployment      |
| 3.1.3       | 10-04-2024                     | Updated DataConnector last Log indicator and IsConnected queries by including Application and System Log Event Types      |
| 3.1.2       | 20-02-2024                     | Correct DataConnector last Log indicator and IsConnected queries      |
| 3.1.1       | 18-12-2023                     | Update Parsers parameters         |
| 3.1.0       | 01-11-2023                     | Added **Watchlist** to track activities on VIPs' Mailboxes. Change ExchangeAuditLog parser to work without watchlist and searching all type of VIP information         |
| 3.0.1       | 13-09-2023                     | Readme file for **Parsers** and typo correction                      |
| 3.0.0       | 23-08-2023                     | ExchangeEnvironmentList parser name corrected in **Workbooks**. |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

