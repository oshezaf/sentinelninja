# SquidProxy

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="SquidProxy Logo" width="75" height="75">

The [Squid Proxy](http://www.squid-cache.org/) solution for Microsoft Sentinel enables you to ingest Squid Proxy logs into Microsoft Sentinel.

 This solution is dependent on the Custom logs via AMA connector to collect the logs. The Custom logs solution will be installed as part of this solution installation.

 **NOTE**: Microsoft recommends installation of Custom logs via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.**. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-16 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SquidProxy](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SquidProxy) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Squid Proxy](../connectors/squidproxy.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) | [[Deprecated] Squid Proxy](../connectors/squidproxy.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SquidProxy](../content/squidproxy-squidproxy-db566028-abef-4941-b659-0a560a4dd7ac-b851439d.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                          |
|-------------|--------------------------------|-------------------------------------------------------------|
| 3.0.2       | 16-05-2025                     | Optimized **Parser** for improved performance and parsing accuracy                       |
| 3.0.1       | 16-12-2024                     | Removed Deprecated **Data Connector**                       |
| 3.0.0       | 12-08-2024                     | Deprecating **Data Connector**                              |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
