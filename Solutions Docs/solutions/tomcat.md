# Tomcat

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-01-31 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tomcat](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tomcat) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Apache Tomcat](../connectors/apachetomcat.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Tomcat_CL`](../tables/tomcat-cl.md) | [[Deprecated] Apache Tomcat](../connectors/apachetomcat.md) | - |

## Content Items

This solution includes **23 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 11 |
| Analytic Rules | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Tomcat - Commands in URI](../content/tomcat-tomcat---commands-in-uri-91f59cea-486f-11ec-81d3-0242ac130003.md) | High | InitialAccess | - |
| [Tomcat - Known malicious user agent](../content/tomcat-tomcat---known-malicious-user-agent-5e77a818-5825-4ff6-a901-80891c4774d1.md) | High | InitialAccess | - |
| [Tomcat - Multiple client errors from single IP address](../content/tomcat-tomcat---multiple-client-errors-from-single-ip-address-4fa66058-4870-11ec-81d3-0242ac130003.md) | Medium | InitialAccess | - |
| [Tomcat - Multiple empty requests from same IP](../content/tomcat-tomcat---multiple-empty-requests-from-same-ip-7c9a1026-4872-11ec-81d3-0242ac130003.md) | Medium | InitialAccess, Impact | - |
| [Tomcat - Multiple server errors from single IP address](../content/tomcat-tomcat---multiple-server-errors-from-single-ip-address-de9df79c-4872-11ec-81d3-0242ac130003.md) | Medium | Impact, InitialAccess | - |
| [Tomcat - Put file and get file from same IP address](../content/tomcat-tomcat---put-file-and-get-file-from-same-ip-address-103d5ada-4874-11ec-81d3-0242ac130003.md) | Medium | InitialAccess | - |
| [Tomcat - Request from localhost IP address](../content/tomcat-tomcat---request-from-localhost-ip-address-a45dd6ea-4874-11ec-81d3-0242ac130003.md) | Medium | InitialAccess | - |
| [Tomcat - Request to sensitive files](../content/tomcat-tomcat---request-to-sensitive-files-0c851bd4-4875-11ec-81d3-0242ac130003.md) | High | InitialAccess | - |
| [Tomcat - Server errors after multiple requests from same IP](../content/tomcat-tomcat---server-errors-after-multiple-requests-from-same-ip-875da588-4875-11ec-81d3-0242ac130003.md) | Medium | Impact, InitialAccess | - |
| [Tomcat - Sql injection patterns](../content/tomcat-tomcat---sql-injection-patterns-ce84741e-4875-11ec-81d3-0242ac130003.md) | High | InitialAccess | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Tomcat - Abnormal request size](../content/tomcat-tomcat---abnormal-request-size-d5e1eb24-487a-11ec-81d3-0242ac130003.md) | Exfiltration, Collection | - |
| [Tomcat - Catalina errors](../content/tomcat-tomcat---catalina-errors-7be944be-487f-11ec-81d3-0242ac130003.md) | DefenseEvasion | - |
| [Tomcat - Rare URLs requested](../content/tomcat-tomcat---rare-urls-requested-ed6686b4-4880-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [Tomcat - Rare files requested](../content/tomcat-tomcat---rare-files-requested-c2e8ad40-4880-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [Tomcat - Rare user agents with client errors](../content/tomcat-tomcat---rare-user-agents-with-client-errors-033d672c-4882-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [Tomcat - Rare user agents with server errors](../content/tomcat-tomcat---rare-user-agents-with-server-errors-2be563f0-4882-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [Tomcat - Request to forbidden file](../content/tomcat-tomcat---request-to-forbidden-file-72ae8a54-4879-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [Tomcat - Top URLs client errors](../content/tomcat-tomcat---top-urls-client-errors-60725e58-4881-11ec-81d3-0242ac130003.md) | Impact, InitialAccess | - |
| [Tomcat - Top URLs server errors](../content/tomcat-tomcat---top-urls-server-errors-919725a4-4881-11ec-81d3-0242ac130003.md) | Impact, InitialAccess | - |
| [Tomcat - Top files with error requests](../content/tomcat-tomcat---top-files-with-error-requests-191bd49e-4881-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [Tomcat - Uncommon user agent strings](../content/tomcat-tomcat---uncommon-user-agent-strings-d214c244-4881-11ec-81d3-0242ac130003.md) | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Tomcat](../content/tomcat-tomcat.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TomcatEvent](../content/tomcat-tomcatevent-77583cb4-f731-4228-9cfc-79933dc10b57.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                  |
|-------------|--------------------------------|-------------------------------------------------------------------------------------|
| 3.0.1       | 09-12-2024                     | Removed Deprecated **Data connector**                                               |
| 3.0.0       | 13-08-2024                     | Deprecating data connectors |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
