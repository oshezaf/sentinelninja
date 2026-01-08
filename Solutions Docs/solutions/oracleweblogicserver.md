# OracleWebLogicServer

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="OracleWebLogicServer Logo" width="75" height="75">

The [Oracle](https://www.oracle.com/index.html) WebLogic Server solution for Microsoft Sentinel provides the capability to ingest [Oracle Web Logic Server](https://docs.oracle.com/en/middleware/standalone/weblogic-server/index.html) events into Microsoft Sentinel. Oracle WebLogic Server is a server for building and deploying enterprise Java EE applications with support for new features for lowering cost of operations, improving performance, enhancing scalability, and supporting the Oracle Applications portfolio.

 This solution is dependent on the Custom logs via AMA connector to collect the logs. The Custom logs solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Custom logs via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/azure/sentinel/ama-migrate?WT.mc_id=Portal-fx).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-01-06 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OracleWebLogicServer](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OracleWebLogicServer) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Oracle WebLogic Server](../connectors/oracleweblogicserver.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`OracleWebLogicServer_CL`](../tables/oracleweblogicserver-cl.md) | [[Deprecated] Oracle WebLogic Server](../connectors/oracleweblogicserver.md) | - |

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
| [Oracle - Command in URI](../content/oracleweblogicserver-oracle-command-in-uri-6ae36a5e-573f-11ec-bf63-0242ac130002-be93cbec.md) | High | InitialAccess | - |
| [Oracle - Malicious user agent](../content/oracleweblogicserver-oracle-malicious-user-agent-51d050ee-5740-11ec-bf63-0242ac130002-7d04739d.md) | High | InitialAccess | - |
| [Oracle - Multiple client errors from single IP](../content/oracleweblogicserver-oracle-multiple-client-errors-from-single-ip-41775080-5740-11ec-bf63-0242ac130002-336c64ba.md) | Medium | InitialAccess | - |
| [Oracle - Multiple server errors from single IP](../content/oracleweblogicserver-oracle-multiple-server-errors-from-single-ip-268f4fde-5740-11ec-bf63-0242ac130002-6fc1a6eb.md) | Medium | Impact, InitialAccess | - |
| [Oracle - Multiple user agents for single source](../content/oracleweblogicserver-oracle-multiple-user-agents-for-single-source-44c7d12a-573f-11ec-bf63-0242ac130002-2c896ca5.md) | Medium | InitialAccess | - |
| [Oracle - Oracle WebLogic Exploit CVE-2021-2109](../content/oracleweblogicserver-oracle-oracle-weblogic-exploit-cve-2021-2109-67950168-5740-11ec-bf63-0242ac130002-0147f6e7.md) | High | InitialAccess | - |
| [Oracle - Private IP in URL](../content/oracleweblogicserver-oracle-private-ip-in-url-153ce6d8-5740-11ec-bf63-0242ac130002-f7d8820f.md) | Medium | InitialAccess | - |
| [Oracle - Put file and get file from same IP address](../content/oracleweblogicserver-oracle-put-file-and-get-file-from-same-ip-address-033e98d2-5740-11ec-bf63-0242ac130002-3a782d67.md) | Medium | InitialAccess | - |
| [Oracle - Put suspicious file](../content/oracleweblogicserver-oracle-put-suspicious-file-edc2f2b4-573f-11ec-bf63-0242ac130002-ad5063a6.md) | Medium | InitialAccess, Exfiltration | - |
| [Oracle - Request to sensitive files](../content/oracleweblogicserver-oracle-request-to-sensitive-files-9cc9ed36-573f-11ec-bf63-0242ac130002-d086dba1.md) | High | InitialAccess | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Oracle - Abnormal request size](../content/oracleweblogicserver-oracle-abnormal-request-size-419a91d4-5741-11ec-bf63-0242ac130002-e2be3c41.md) | Exfiltration, Collection | - |
| [Oracle - Critical event severity](../content/oracleweblogicserver-oracle-critical-event-severity-877125e6-5779-11ec-bf63-0242ac130002-25c60ae0.md) | InitialAccess | - |
| [Oracle - Error messages](../content/oracleweblogicserver-oracle-error-messages-41aec744-5778-11ec-bf63-0242ac130002-6a135c99.md) | DefenseEvasion | - |
| [Oracle - Rare URLs requested](../content/oracleweblogicserver-oracle-rare-urls-requested-f917b23e-5740-11ec-bf63-0242ac130002-863f8177.md) | InitialAccess | - |
| [Oracle - Rare user agents](../content/oracleweblogicserver-oracle-rare-user-agents-e6c42fe0-5740-11ec-bf63-0242ac130002-0304aefd.md) | InitialAccess | - |
| [Oracle - Rare user agents with client errors](../content/oracleweblogicserver-oracle-rare-user-agents-with-client-errors-0a58d21c-5741-11ec-bf63-0242ac130002-02a76951.md) | InitialAccess | - |
| [Oracle - Request to forbidden files](../content/oracleweblogicserver-oracle-request-to-forbidden-files-5c2f090d-2072-4ad9-a749-394593d7091b-bdd12128.md) | InitialAccess | - |
| [Oracle - Top URLs client errors](../content/oracleweblogicserver-oracle-top-urls-client-errors-b89b3474-5740-11ec-bf63-0242ac130002-ea4c0610.md) | Impact, InitialAccess | - |
| [Oracle - Top URLs server errors](../content/oracleweblogicserver-oracle-top-urls-server-errors-a5767caa-5740-11ec-bf63-0242ac130002-e3d9c452.md) | Impact, InitialAccess | - |
| [Oracle - Top files requested by users with error](../content/oracleweblogicserver-oracle-top-files-requested-by-users-with-error-34d32bf0-5741-11ec-bf63-0242ac130002-c2e1d6cd.md) | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [OracleWorkbook](../content/oracleweblogicserver-oracleworkbook-2039f357.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [OracleWebLogicServerEvent](../content/oracleweblogicserver-oracleweblogicserverevent-3ff1473b-60af-4392-afbf-c0f9d25481c4-dfb03af0.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                           |
|-------------|--------------------------------|------------------------------------------------------------------------------|
| 3.0.2       | 23-12-2024                     | Removed Deprecated **Data connector**                                        |
| 3.0.1       | 09-08-2024                     | Deprecating data connectors                                                  |
| 3.0.0       | 15-12-2023                     | Updated the **Parser** field TreadId to ThreadId                             |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
