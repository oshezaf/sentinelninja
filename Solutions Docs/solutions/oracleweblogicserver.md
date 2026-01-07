# OracleWebLogicServer

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-01-06 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OracleWebLogicServer](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OracleWebLogicServer) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Oracle WebLogic Server](../connectors/oracleweblogicserver.md)

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
| [Oracle - Command in URI](../content/oracleweblogicserver-oracle---command-in-uri-6ae36a5e-573f-11ec-bf63-0242ac130002.md) | High | InitialAccess | - |
| [Oracle - Malicious user agent](../content/oracleweblogicserver-oracle---malicious-user-agent-51d050ee-5740-11ec-bf63-0242ac130002.md) | High | InitialAccess | - |
| [Oracle - Multiple client errors from single IP](../content/oracleweblogicserver-oracle---multiple-client-errors-from-single-ip-41775080-5740-11ec-bf63-0242ac130002.md) | Medium | InitialAccess | - |
| [Oracle - Multiple server errors from single IP](../content/oracleweblogicserver-oracle---multiple-server-errors-from-single-ip-268f4fde-5740-11ec-bf63-0242ac130002.md) | Medium | Impact, InitialAccess | - |
| [Oracle - Multiple user agents for single source](../content/oracleweblogicserver-oracle---multiple-user-agents-for-single-source-44c7d12a-573f-11ec-bf63-0242ac130002.md) | Medium | InitialAccess | - |
| [Oracle - Oracle WebLogic Exploit CVE-2021-2109](../content/oracleweblogicserver-oracle---oracle-weblogic-exploit-cve-2021-2109-67950168-5740-11ec-bf63-0242ac130002.md) | High | InitialAccess | - |
| [Oracle - Private IP in URL](../content/oracleweblogicserver-oracle---private-ip-in-url-153ce6d8-5740-11ec-bf63-0242ac130002.md) | Medium | InitialAccess | - |
| [Oracle - Put file and get file from same IP address](../content/oracleweblogicserver-oracle---put-file-and-get-file-from-same-ip-address-033e98d2-5740-11ec-bf63-0242ac130002.md) | Medium | InitialAccess | - |
| [Oracle - Put suspicious file](../content/oracleweblogicserver-oracle---put-suspicious-file-edc2f2b4-573f-11ec-bf63-0242ac130002.md) | Medium | InitialAccess, Exfiltration | - |
| [Oracle - Request to sensitive files](../content/oracleweblogicserver-oracle---request-to-sensitive-files-9cc9ed36-573f-11ec-bf63-0242ac130002.md) | High | InitialAccess | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Oracle - Abnormal request size](../content/oracleweblogicserver-oracle---abnormal-request-size-419a91d4-5741-11ec-bf63-0242ac130002.md) | Exfiltration, Collection | - |
| [Oracle - Critical event severity](../content/oracleweblogicserver-oracle---critical-event-severity-877125e6-5779-11ec-bf63-0242ac130002.md) | InitialAccess | - |
| [Oracle - Error messages](../content/oracleweblogicserver-oracle---error-messages-41aec744-5778-11ec-bf63-0242ac130002.md) | DefenseEvasion | - |
| [Oracle - Rare URLs requested](../content/oracleweblogicserver-oracle---rare-urls-requested-f917b23e-5740-11ec-bf63-0242ac130002.md) | InitialAccess | - |
| [Oracle - Rare user agents](../content/oracleweblogicserver-oracle---rare-user-agents-e6c42fe0-5740-11ec-bf63-0242ac130002.md) | InitialAccess | - |
| [Oracle - Rare user agents with client errors](../content/oracleweblogicserver-oracle---rare-user-agents-with-client-errors-0a58d21c-5741-11ec-bf63-0242ac130002.md) | InitialAccess | - |
| [Oracle - Request to forbidden files](../content/oracleweblogicserver-oracle---request-to-forbidden-files-5c2f090d-2072-4ad9-a749-394593d7091b.md) | InitialAccess | - |
| [Oracle - Top URLs client errors](../content/oracleweblogicserver-oracle---top-urls-client-errors-b89b3474-5740-11ec-bf63-0242ac130002.md) | Impact, InitialAccess | - |
| [Oracle - Top URLs server errors](../content/oracleweblogicserver-oracle---top-urls-server-errors-a5767caa-5740-11ec-bf63-0242ac130002.md) | Impact, InitialAccess | - |
| [Oracle - Top files requested by users with error](../content/oracleweblogicserver-oracle---top-files-requested-by-users-with-error-34d32bf0-5741-11ec-bf63-0242ac130002.md) | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [OracleWorkbook](../content/oracleweblogicserver-oracleworkbook.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [OracleWebLogicServerEvent](../content/oracleweblogicserver-oracleweblogicserverevent-3ff1473b-60af-4392-afbf-c0f9d25481c4.md) | - | - |

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
