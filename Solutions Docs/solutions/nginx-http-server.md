# NGINX HTTP Server

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-12-16 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NGINX%20HTTP%20Server](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NGINX%20HTTP%20Server) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] NGINX HTTP Server](../connectors/nginxhttpserver.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`NGINX_CL`](../tables/nginx-cl.md) | [[Deprecated] NGINX HTTP Server](../connectors/nginxhttpserver.md) | - |

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
| [NGINX - Command in URI](../content/d84739ce-2f46-4391-b25e-a2edbea19d7e.md) | High | InitialAccess | - |
| [NGINX - Core Dump](../content/9a7f5a97-354b-4eac-b407-a1cc7fc4b4ec.md) | High | Impact | - |
| [NGINX - Known malicious user agent](../content/a10c6551-bbf2-492c-aa8a-fe6efd8c9cc1.md) | High | InitialAccess | - |
| [NGINX - Multiple client errors from single IP address](../content/42771afe-edb3-4330-bc4a-abf6a5714454.md) | Medium | InitialAccess | - |
| [NGINX - Multiple server errors from single IP address](../content/b3ae0033-552e-4c3c-b493-3edffb4473bb.md) | Medium | Impact, InitialAccess | - |
| [NGINX - Multiple user agents for single source](../content/83a0b48f-1cb7-4b4f-a018-23c3203a239b.md) | Medium | InitialAccess | - |
| [NGINX - Private IP address in URL](../content/1aa6bfed-f11b-402f-9007-0dccc1152ede.md) | Medium | InitialAccess | - |
| [NGINX - Put file and get file from same IP address](../content/e04fa38e-9fb7-438d-887a-381d5dd235e6.md) | Medium | InitialAccess | - |
| [NGINX - Request to sensitive files](../content/2141ef6c-d158-4d44-b739-b145a4c21947.md) | Medium | InitialAccess | - |
| [NGINX - Sql injection patterns](../content/3bac451d-f919-4c92-9be7-694990e0ca4b.md) | High | InitialAccess | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [NGINX - Abnormal request size](../content/930f8b54-3bef-11ec-8d3d-0242ac130003.md) | Exfiltration, Collection | - |
| [NGINX - Rare URLs requested](../content/fd2ae5f6-3bea-11ec-8d3d-0242ac130003.md) | InitialAccess | - |
| [NGINX - Rare files requested](../content/aaacb354-3bea-11ec-8d3d-0242ac130003.md) | InitialAccess | - |
| [NGINX - Requests from bots and crawlers](../content/39406080-fd5f-4236-99bf-7f26ea9a89d6.md) | InitialAccess | - |
| [NGINX - Requests to unexisting files](../content/51d7d596-3beb-11ec-8d3d-0242ac130003.md) | InitialAccess | - |
| [NGINX - Top URLs client errors](../content/d8dd00ec-3bec-11ec-8d3d-0242ac130003.md) | Impact, InitialAccess | - |
| [NGINX - Top URLs server errors](../content/58ad26ee-3bed-11ec-8d3d-0242ac130003.md) | Impact, InitialAccess | - |
| [NGINX - Top files requested](../content/168428b8-3bec-11ec-8d3d-0242ac130003.md) | InitialAccess | - |
| [NGINX - Top files with error requests](../content/a7d4b6f2-3bec-11ec-8d3d-0242ac130003.md) | InitialAccess | - |
| [NGINX - Uncommon user agent strings](../content/c8b5ce46-6f84-4944-ac89-ecaac8749b98.md) | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [NGINX](../content/nginx-nginx-http-server.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [NGINXHTTPServer](../content/e0c8017b-1115-45fc-b070-5556276c8471.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       |  13-12-2024                    | Removed Deprecated **Data connector**       |
| 3.0.0       |  08-08-2024                    | Deprecating data connectors                 |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
