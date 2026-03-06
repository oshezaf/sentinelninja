# PostgreSQL

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="PostgreSQL Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-27 |
| **Solution Folder** | [PostgreSQL](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PostgreSQL) |
| **Pre-requisites** | [CustomLogsAma](customlogsama.md) |

The PostgreSQL solution provides the capability to ingest [PostgreSQL](https://www.postgresql.org/) events into Microsoft Sentinel. Refer to [PostgreSQL documentation](https://www.postgresql.org/docs/current/index.html) for more information.

 This solution is dependent on the Custom logs via AMA connector to collect the logs. The Custom logs solution will be installed as part of this solution installation.

 **NOTE**: Microsoft recommends installation of Custom logs via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Contents

- [Pre-requisites](#pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Pre-requisites

This solution depends on **1 other solution(s)**:

| Solution |
|:---------|
| [CustomLogsAma](customlogsama.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] PostgreSQL Events](../connectors/postgresql.md) ⚠️ 🔶

Connectors from dependency solutions:

- [Custom logs via AMA](../connectors/customlogsviaama.md) 🔶 *(dependency on [CustomLogsAma](customlogsama.md))*

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **16 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`JBossEvent_CL`](../tables/jbossevent-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`JuniperIDP_CL`](../tables/juniperidp-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`MarkLogicAudit_CL`](../tables/marklogicaudit-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`MongoDBAudit_CL`](../tables/mongodbaudit-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`NGINX_CL`](../tables/nginx-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`OracleWebLogicServer_CL`](../tables/oracleweblogicserver-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`PostgreSQL_CL`](../tables/postgresql-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency), [[Deprecated] PostgreSQL Events](../connectors/postgresql.md) | - |
| [`SecurityBridgeLogs_CL`](../tables/securitybridgelogs-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`Tomcat_CL`](../tables/tomcat-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`Ubiquiti_CL`](../tables/ubiquiti-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`ZPA_CL`](../tables/zpa-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`meraki_CL`](../tables/meraki-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`vcenter_CL`](../tables/vcenter-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PostgreSQLEvent](../parsers/postgresqlevent.md) | - | [`PostgreSQL_CL`](../tables/postgresql-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                           |
|-------------|--------------------------------|------------------------------------------------------------------------------|
| 3.0.1       | 12-12-2024                     | Removed Deprecated **Data connectors**                                       |
| 3.0.0       | 09-08-2024                     | Deprecating data connectors                                                  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Solutions Index](../solutions-index.md)

