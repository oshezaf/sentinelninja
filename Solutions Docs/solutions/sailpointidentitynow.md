# SailPointIdentityNow

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="SailPointIdentityNow Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | SailPointIdentityNow |
| **First Published** | 2021-10-26 |
| **Solution Folder** | [SailPointIdentityNow](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SailPointIdentityNow) |

The [SailPoint Integration](https://www.sailpoint.com/) solution provides the capability to ingest SailPoint IdentityNow search events into Microsoft Sentinel through the REST API. The solution includes two data connectors: a legacy Azure Function-based connector and a Codeless Connector Framework (CCF) based connector. 

 ** Underlying Microsoft Technologies used: ** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

 a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api) *(used by the Azure Function-based connector)* 

 b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview) *(used by the Azure Function-based connector)* 

 c. [Microsoft Sentinel Codeless Connector Framework](https://learn.microsoft.com/azure/sentinel/create-codeless-connector) *(used by the CCF-based connector)*

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **2 data connector(s)**:

- [SailPoint IdentityNow](../connectors/sailpointidentitynow.md) 🔶
- [SailPoint IdentityNow (via Codeless Connector Framework)](../connectors/sailpointidentitynowconnector.md)

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SailPointIDN_EventsV2_CL`](../tables/sailpointidn-eventsv2-cl.md) | [SailPoint IdentityNow (via Codeless Connector Framework)](../connectors/sailpointidentitynowconnector.md) | - |
| [`SailPointIDN_Events_CL`](../tables/sailpointidn-events-cl.md) 🔶 | [SailPoint IdentityNow](../connectors/sailpointidentitynow.md) | - |
| [`SailPointIDN_Triggers_CL`](../tables/sailpointidn-triggers-cl.md) 🔶 | [SailPoint IdentityNow](../connectors/sailpointidentitynow.md) | Analytics |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 6 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [SailPointIdentityNowAlertForTriggers](../content/sailpointidentitynow-sailpointidentitynowalertfortriggers-08330c3d-487e-4f5e-a539-1e7d06dea786-9d60dbe5.md) | Informational | InitialAccess, Collection | [`SailPointIDN_Triggers_CL`](../tables/sailpointidn-triggers-cl.md) |
| [SailPointIdentityNowEventType](../content/sailpointidentitynow-sailpointidentitynoweventtype-48bb92e2-bad4-4fd4-9684-26cb188299b7-bbc83429.md) | High | InitialAccess | - |
| [SailPointIdentityNowEventTypeTechnicalName](../content/sailpointidentitynow-sailpointidentitynoweventtypetechnicalname-2151e8ea-4838-4c74-be12-4d6a950dde7a-679f873f.md) | High | InitialAccess | - |
| [SailPointIdentityNowFailedEvents](../content/sailpointidentitynow-sailpointidentitynowfailedevents-c3835197-fd07-447e-a0ac-7540d51a1f64-dc29bee3.md) | High | InitialAccess | - |
| [SailPointIdentityNowFailedEventsBasedOnTime](../content/sailpointidentitynow-sailpointidentitynowfailedeventsbasedontime-175b79ef-0fc3-4b27-b92a-89b2db6c85c2-086ffffa.md) | High | InitialAccess | - |
| [SailPointIdentityNowUserWithFailedEvent](../content/sailpointidentitynow-sailpointidentitynowuserwithfailedevent-2a215222-bfc5-4858-a530-6d4088ebfa15-2928054a.md) | High | InitialAccess | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
| 3.0.1       | 11-05-2026                     | Added CCF **Data Connector** support with one  **Parser** for backward compatibility and new schema for SailPoint IdentityNow events; updated **Analytic Rules** to use the parser alias and new connector ID |
| 3.0.0       | 28-08-2024                     | **Data Connector** instruction updated      |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

