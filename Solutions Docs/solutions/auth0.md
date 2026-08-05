# Auth0

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Auth0.svg" alt="Auth0 Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | Identity |
| **Version** | 3.1.5 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-08-18 |
| **Last Updated** | 2026-04-27 |
| **Solution Folder** | [Auth0](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-auth0) · Popularity: 🟢 High (85%) |

The [Auth0 Access Management](https://auth0.com/access-management) solution for Microsoft Sentinel provides the capability to ingest [Auth0 log events](https://auth0.com/docs/api/management/v2/#!/Logs/get_logs) into your Microsoft Sentinel workspace.
  
  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

 b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)



## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **2 data connector(s)**:

- [[DEPRECATED] Auth0 Logs (using Azure Function)](../connectors/auth0.md) 🔶
- [Auth0 Logs (via Codeless Connector Framework)](../connectors/auth0connectorccpdefinition.md)

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Auth0AM_CL`](../tables/auth0am-cl.md) 🔶 | [[DEPRECATED] Auth0 Logs (using Azure Function)](../connectors/auth0.md) | - |
| [`Auth0Logs_CL`](../tables/auth0logs-cl.md) | [Auth0 Logs (via Codeless Connector Framework)](../connectors/auth0connectorccpdefinition.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 2 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Auth0](../parsers/auth0.md) | - | [`Auth0AM_CL`](../tables/auth0am-cl.md) *(read)*<br>[`Auth0_CL`](../tables/auth0-cl.md) *(read)* |
| [Auth0AM](../parsers/auth0am.md) | - | [`Auth0AM_CL`](../tables/auth0am-cl.md) *(read)*<br>[`Auth0Logs_CL`](../tables/auth0logs-cl.md) *(read)* |

## Additional Documentation

> 📄 *Source: [Auth0/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0/README.md)*

# Upgrading to the multi-host (multi-domain) Auth0 Logs connector

Starting with solution version **3.2.0**, the **Auth0 Logs (via Codeless Connector Framework)** data connector supports collecting logs from **multiple Auth0 hosts** from a single connector. Each ingested record is tagged with an **Auth0Domain** column so you can tell the hosts apart (for example: `Auth0Logs_CL | summarize count() by Auth0Domain`).

**What happens when you upgrade:**

1. Update the **Auth0** solution to 3.2.0 (or later) from Content Hub. Your existing Auth0 log collection keeps running during and after the update — no data is lost.
2. Upgrading the solution only refreshes the connector *definition*. It does **not** change the data collection rule or poller already running in your workspace, so the new multi-host experience and the `Auth0Domain` column are **not** applied automatically.
3. To enable multi-host collection, open **Microsoft Sentinel > Data connectors > Auth0 Logs (via Codeless Connector Framework)**, then **reconnect**:
   - In the connection grid, add each Auth0 host as its own connection using **Add Auth0 host**, providing that host's **Domain**, **Client ID**, and **Client Secret**.
   - Reconnecting re-provisions the data collection rule (now including the `Auth0Domain` column) and starts a separate poller per host.
4. New host connections take a cycle or two to warm up (initial token fetch, first backfill window, then ingestion), so a newly added host may lag the first one before data appears.

> **Note:** Records collected before the upgrade remain in `Auth0Logs_CL` with an empty `Auth0Domain`. Records collected after you reconnect a host are tagged with that host's domain.

---

# Steps to Configure Auth0 app
The following are steps to be followed in Auth0 App.

1. Please go to applications and select application from auth0 side, Please find below screen shot for reference :-

![](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0/Images/Applications.png%3Fraw%3Dtrue)

2. Click on settings of the App and note down the credentials
<br>***a. Copy the domain
    b. Get the client id value
    c. Get the client secret***<br>

3. Under Application properties --> Select Application type as Machine to Machine. Please find below screen shot for reference :-

![](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0/Images/ApplicationProperties.png%3Fraw%3Dtrue)

4. Under credentials tab --> Select client secret (Post). Please find below screen shot for reference :-

![](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0/Images/Credentials.png%3Fraw%3Dtrue)

5. Under API tab, please make sure Authorized to scopes, Please find below screen shot for reference :-

![](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0/Images/API.png%3Fraw%3Dtrue)


*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                     |
|-------------|--------------------------------|--------------------------------------------------------|
| 3.2.0       | 20-07-2026                     | Auth0 Logs (via Codeless Connector Framework) **Data Connector** now supports collecting from multiple Auth0 hosts (multi-domain) and tags each record with the **Auth0Domain** column |
| 3.1.5       | 13-04-2026                     | Deprecate Auth0 Logs (using Azure Function) |
| 3.1.4       | 30-03-2026                     | Fix space in name, Rename to Auth0 Logs (via Codeless Connector Framework)|
| 3.1.3       | 20-03-2026                     | Rename to Auth0 Logs(via Codeless Connector Framework)|
| 3.1.2       | 10-02-2025                     | Advancing CCP **Data Connector** from Public preview to Global Availability.           |
| 3.1.1       | 22-01-2025                     | Added Preview tag to CCP **Data Connector**                                            |
| 3.1.0       | 13-12-2024                     | Added new CCP **Data Connector** to the Solution                                       |
| 3.0.0       | 24-08-2024                     | Updated the **Data Connector** Function app python runtime version to 3.11             |
|             | 11-12-2023                     | Added new **Parser** (Auth0AM)                                                         |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

