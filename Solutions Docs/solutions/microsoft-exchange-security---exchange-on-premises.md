# Microsoft Exchange Security - Exchange On-Premises

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Community |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/Azure/Azure-Sentinel/issues](https://github.com/Azure/Azure-Sentinel/issues) |
| **Categories** | domains |
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

## Tables Reference

This solution uses **11 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AlldataUnique`](../tables/alldataunique.md) | - | Workbooks |
| [`AllnotinAfterData`](../tables/allnotinafterdata.md) | - | Workbooks |
| [`ESIExchangeConfig_CL`](../tables/esiexchangeconfig-cl.md) | [Exchange Security Insights On-Premises Collector](../connectors/esi-exchangeonpremisescollector.md) | Workbooks |
| [`Event`](../tables/event.md) | [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md), [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) | - |
| [`ExchangeConfiguration`](../tables/exchangeconfiguration.md) | - | Analytics, Workbooks |
| [`ExchangeEnvironmentList`](../tables/exchangeenvironmentlist.md) | - | Workbooks |
| [`ExchangeHttpProxy_CL`](../tables/exchangehttpproxy-cl.md) | [Microsoft Exchange HTTP Proxy Logs](../connectors/esi-opt7exchangehttpproxylogs.md), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) | - |
| [`MessageTrackingLog_CL`](../tables/messagetrackinglog-cl.md) | [Microsoft Exchange Message Tracking Logs](../connectors/esi-opt6exchangemessagetrackinglogs.md), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) | - |
| [`SecurityEvent`](../tables/securityevent.md) | [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) | - |
| [`Server`](../tables/server.md) | - | Workbooks |
| [`W3CIISLog`](../tables/w3ciislog.md) | [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) | - |

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
| [Server Oriented Cmdlet And User Oriented Cmdlet used](../content/7bce901b-9bc8-4948-8dfc-8f68878092d5.md) | High | Exfiltration, Persistence, Collection | [`ExchangeConfiguration`](../tables/exchangeconfiguration.md) |
| [VIP Mailbox manipulation](../content/5170c3c4-b8c9-485c-910d-a21d965ee181.md) | Medium | Exfiltration, Persistence, Collection | [`ExchangeConfiguration`](../tables/exchangeconfiguration.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Microsoft Exchange Admin Activity](../content/microsoft-exchange-admin-activity-microsoft-exchange-security---exchange-on-premises.md) | [`ExchangeConfiguration`](../tables/exchangeconfiguration.md) |
| [Microsoft Exchange Least Privilege with RBAC](../content/microsoft-exchange-least-privilege-with-rbac-microsoft-exchange-security---exchange-on-premises.md) | [`ESIExchangeConfig_CL`](../tables/esiexchangeconfig-cl.md)<br>[`ExchangeEnvironmentList`](../tables/exchangeenvironmentlist.md) |
| [Microsoft Exchange Search AdminAuditLog](../content/microsoft-exchange-search-adminauditlog-microsoft-exchange-security---exchange-on-premises.md) | [`ExchangeConfiguration`](../tables/exchangeconfiguration.md) |
| [Microsoft Exchange Security Review](../content/microsoft-exchange-security-review-microsoft-exchange-security---exchange-on-premises.md) | [`AlldataUnique`](../tables/alldataunique.md)<br>[`AllnotinAfterData`](../tables/allnotinafterdata.md)<br>[`ESIExchangeConfig_CL`](../tables/esiexchangeconfig-cl.md)<br>[`ExchangeConfiguration`](../tables/exchangeconfiguration.md)<br>[`ExchangeEnvironmentList`](../tables/exchangeenvironmentlist.md)<br>[`Server`](../tables/server.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ExchangeAdminAuditLogs](../content/f79a3a19-bb9f-4f06-a109-3e3ac2001be9.md) | - | - |
| [ExchangeConfiguration](../content/f2ae482d-999c-452e-b108-31880aa99620.md) | - | - |
| [ExchangeEnvironmentList](../content/fa748dc3-00ee-41cb-b54e-8acd56041b2a.md) | - | - |
| [MESCheckVIP](../content/9f0e2122-f511-4e51-83a0-51fbd86d3121.md) | - | - |
| [MESCompareDataOnPMRA](../content/0a0f4ea0-6b94-4420-892e-41ca985f2f01.md) | - | - |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ExchangeServicesMonitoring](../content/exchangeservicesmonitoring-microsoft-exchange-security---exchange-on-premises.md) | - | - |
| [ExchangeVIP](../content/exchangevip-microsoft-exchange-security---exchange-on-premises.md) | - | - |

## Additional Documentation

> 📄 *Source: [Microsoft Exchange Security - Exchange On-Premises/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft Exchange Security - Exchange On-Premises/README.md)*

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

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
