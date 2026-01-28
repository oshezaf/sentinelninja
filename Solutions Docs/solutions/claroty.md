# Claroty

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Claroty Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Claroty](https://claroty.com/) solution for Microsoft Sentinel enables ingestion of  [Continuous Threat Detection](https://claroty.com/resources/datasheets/continuous-threat-detection) and [Secure Remote Access](https://claroty.com/industrial-cybersecurity/sra) events into Microsoft Sentinel. 

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
| **First Published** | 2021-10-23 |
| **Solution Folder** | [Claroty](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Claroty) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Claroty via Legacy Agent](../connectors/claroty.md) ⚠️
- [[Deprecated] Claroty via AMA](../connectors/clarotyama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Claroty via AMA](../connectors/clarotyama.md), [[Deprecated] Claroty via Legacy Agent](../connectors/claroty.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **22 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Claroty - Asset Down](../content/claroty-claroty-asset-down-fd6e3416-0421-4166-adb9-186e555a7008-cba265d2.md) | High | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - Critical baseline deviation](../content/claroty-claroty-critical-baseline-deviation-9a8b4321-e2be-449b-8227-a78227441b2a-96c7d22a.md) | High | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - Login to uncommon location](../content/claroty-claroty-login-to-uncommon-location-e7dbcbc3-b18f-4635-b27c-718195c369f1-286dbcdd.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - Multiple failed logins by user](../content/claroty-claroty-multiple-failed-logins-by-user-4b5bb3fc-c690-4f54-9a74-016213d699b4-4fbe665b.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - Multiple failed logins to same destinations](../content/claroty-claroty-multiple-failed-logins-to-same-destinations-1c2310ef-19bf-4caf-b2b0-a4c983932fa5-2c96b616.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - New Asset](../content/claroty-claroty-new-asset-6c29b611-ce69-4016-bf99-eca639fee1f5-83fc6e1d.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - Policy violation](../content/claroty-claroty-policy-violation-3b22ac47-e02c-4599-a37a-57f965de17be-0b548fc4.md) | High | Discovery | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - Suspicious activity](../content/claroty-claroty-suspicious-activity-99ad9f3c-304c-44c5-a61f-3a17f8b58218-64471eca.md) | High | Discovery | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - Suspicious file transfer](../content/claroty-claroty-suspicious-file-transfer-5cf35bad-677f-4c23-8927-1611e7ff6f28-b144365c.md) | High | Discovery | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - Treat detected](../content/claroty-claroty-treat-detected-731e5ac4-7fe1-4b06-9941-532f2e008bb3-e573bc69.md) | High | Discovery | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Claroty - Baseline deviation](../content/claroty-claroty-baseline-deviation-6b24f3aa-01db-4d26-9d60-538dd9a56391-8531ba45.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - Conflict assets](../content/claroty-claroty-conflict-assets-8038c683-f4dc-481e-94c6-f906d880b0ec-65ea2c65.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - Critical Events](../content/claroty-claroty-critical-events-a81f3a44-049c-409d-8b98-b78aa256dacf-39a2f0b4.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - Network scan sources](../content/claroty-claroty-network-scan-sources-6c43a50e-2e59-48d9-848b-825f50927bbf-07e5f692.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - Network scan targets](../content/claroty-claroty-network-scan-targets-8e70ddf9-32c3-4acd-9cb9-59570344335e-d9fbab3a.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - PLC logins](../content/claroty-claroty-plc-logins-15569b45-4c34-4693-bf99-841e76b5da65-ce51ab47.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - Unapproved access](../content/claroty-claroty-unapproved-access-de0fca32-85f3-45df-872e-41e980e5d8d3-d0ee72f9.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - Unresolved alerts](../content/claroty-claroty-unresolved-alerts-fad6cb81-9a05-4acb-9c5b-a7c62af28034-0c927404.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - User failed logins](../content/claroty-claroty-user-failed-logins-917364b7-2925-4c5d-a27c-64137a3b75b5-050519b3.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Claroty - Write and Execute operations](../content/claroty-claroty-write-and-execute-operations-3882ffbf-6228-4e1f-ab8f-8d79a26da0fb-6e35713e.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ClarotyOverview](../content/claroty-clarotyoverview-724141ff.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ClarotyEvent](../content/claroty-clarotyevent-c90f5245-c214-47ea-9436-f7bbe38b2d8b-52b57754.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.0.3       | 18-11-2024                     | Removed Deprecated **Data Connectors**         |  
| 3.0.2 	  | 10-07-2024 					   | Deprecated **Data Connector** 					|
| 3.0.1       | 11-09-2023                     | Addition of new Claroty AMA **Data Connector** |
| 3.0.0       | 27-07-2023                     | Corrected the links in the solution.           |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

