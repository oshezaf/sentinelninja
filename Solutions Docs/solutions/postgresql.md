# PostgreSQL

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="PostgreSQL Logo" width="75" height="75">

The PostgreSQL solution provides the capability to ingest [PostgreSQL](https://www.postgresql.org/) events into Microsoft Sentinel. Refer to [PostgreSQL documentation](https://www.postgresql.org/docs/current/index.html) for more information.

 This solution is dependent on the Custom logs via AMA connector to collect the logs. The Custom logs solution will be installed as part of this solution installation.

 **NOTE**: Microsoft recommends installation of Custom logs via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-27 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PostgreSQL](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PostgreSQL) |
| **Dependencies** | [CustomLogsAma](customlogsama.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] PostgreSQL Events](../connectors/postgresql.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`PostgreSQL_CL`](../tables/postgresql-cl.md) | [[Deprecated] PostgreSQL Events](../connectors/postgresql.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PostgreSQLEvent](../content/postgresql-postgresqlevent-5c5c1f7e-ec64-46b1-9d50-3cea65a6edce-231b8b3f.md) | - | [`PostgreSQL_CL`](../tables/postgresql-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                           |
|-------------|--------------------------------|------------------------------------------------------------------------------|
| 3.0.1       | 12-12-2024                     | Removed Deprecated **Data connectors**                                       |
| 3.0.0       | 09-08-2024                     | Deprecating data connectors                                                  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

