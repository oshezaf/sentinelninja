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
| [`Tomcat_CL`](../tables/tomcat-cl.md) | [[Deprecated] Apache Tomcat](../connectors/apachetomcat.md) | Analytics, Hunting, Workbooks |

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
| [Tomcat - Commands in URI](../content/91f59cea-486f-11ec-81d3-0242ac130003.md) | High | InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Known malicious user agent](../content/5e77a818-5825-4ff6-a901-80891c4774d1.md) | High | InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Multiple client errors from single IP address](../content/4fa66058-4870-11ec-81d3-0242ac130003.md) | Medium | InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Multiple empty requests from same IP](../content/7c9a1026-4872-11ec-81d3-0242ac130003.md) | Medium | InitialAccess, Impact | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Multiple server errors from single IP address](../content/de9df79c-4872-11ec-81d3-0242ac130003.md) | Medium | Impact, InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Put file and get file from same IP address](../content/103d5ada-4874-11ec-81d3-0242ac130003.md) | Medium | InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Request from localhost IP address](../content/a45dd6ea-4874-11ec-81d3-0242ac130003.md) | Medium | InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Request to sensitive files](../content/0c851bd4-4875-11ec-81d3-0242ac130003.md) | High | InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Server errors after multiple requests from same IP](../content/875da588-4875-11ec-81d3-0242ac130003.md) | Medium | Impact, InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Sql injection patterns](../content/ce84741e-4875-11ec-81d3-0242ac130003.md) | High | InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Tomcat - Abnormal request size](../content/d5e1eb24-487a-11ec-81d3-0242ac130003.md) | Exfiltration, Collection | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Catalina errors](../content/7be944be-487f-11ec-81d3-0242ac130003.md) | DefenseEvasion | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Rare URLs requested](../content/ed6686b4-4880-11ec-81d3-0242ac130003.md) | InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Rare files requested](../content/c2e8ad40-4880-11ec-81d3-0242ac130003.md) | InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Rare user agents with client errors](../content/033d672c-4882-11ec-81d3-0242ac130003.md) | InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Rare user agents with server errors](../content/2be563f0-4882-11ec-81d3-0242ac130003.md) | InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Request to forbidden file](../content/72ae8a54-4879-11ec-81d3-0242ac130003.md) | InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Top URLs client errors](../content/60725e58-4881-11ec-81d3-0242ac130003.md) | Impact, InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Top URLs server errors](../content/919725a4-4881-11ec-81d3-0242ac130003.md) | Impact, InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Top files with error requests](../content/191bd49e-4881-11ec-81d3-0242ac130003.md) | InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |
| [Tomcat - Uncommon user agent strings](../content/d214c244-4881-11ec-81d3-0242ac130003.md) | InitialAccess | [`Tomcat_CL`](../tables/tomcat-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Tomcat](../content/tomcat-tomcat.md) | [`Tomcat_CL`](../tables/tomcat-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TomcatEvent](../content/77583cb4-f731-4228-9cfc-79933dc10b57.md) | - | - |

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
