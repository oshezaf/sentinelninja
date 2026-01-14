# NGINX HTTP Server

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="NGINX HTTP Server Logo" width="75" height="75">

The [NGINX](https://nginx.org/) HTTP Server data connector provides the capability to ingest [NGINX HTTP Server](https://nginx.org/#basic_http_features) events into Microsoft Sentinel. Refer to [NGINX Logs documentation](https://nginx.org/en/docs/http/ngx_http_log_module.html) for more information.

 This solution is dependent on the Custom logs via AMA connector to collect the logs. The Custom logs solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Custom logs via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/azure/sentinel/ama-migrate?WT.mc_id=Portal-fx).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-12-16 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NGINX%20HTTP%20Server](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NGINX%20HTTP%20Server) |
| **Dependencies** | [CustomLogsAma](customlogsama.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] NGINX HTTP Server](../connectors/nginxhttpserver.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`NGINX_CL`](../tables/nginx-cl.md) | [[Deprecated] NGINX HTTP Server](../connectors/nginxhttpserver.md) | Analytics, Hunting, Workbooks |

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
| [NGINX - Command in URI](../content/nginx-http-server-nginx-command-in-uri-d84739ce-2f46-4391-b25e-a2edbea19d7e-3ba09d43.md) | High | InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Core Dump](../content/nginx-http-server-nginx-core-dump-9a7f5a97-354b-4eac-b407-a1cc7fc4b4ec-6203a6f6.md) | High | Impact | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Known malicious user agent](../content/nginx-http-server-nginx-known-malicious-user-agent-a10c6551-bbf2-492c-aa8a-fe6efd8c9cc1-c8ea7b2d.md) | High | InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Multiple client errors from single IP address](../content/nginx-http-server-nginx-multiple-client-errors-from-single-ip-address-42771afe-edb3-4330-bc4a-abf6a5714454-a9f1d27f.md) | Medium | InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Multiple server errors from single IP address](../content/nginx-http-server-nginx-multiple-server-errors-from-single-ip-address-b3ae0033-552e-4c3c-b493-3edffb4473bb-0700c1e8.md) | Medium | Impact, InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Multiple user agents for single source](../content/nginx-http-server-nginx-multiple-user-agents-for-single-source-83a0b48f-1cb7-4b4f-a018-23c3203a239b-831eaeeb.md) | Medium | InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Private IP address in URL](../content/nginx-http-server-nginx-private-ip-address-in-url-1aa6bfed-f11b-402f-9007-0dccc1152ede-8b1bf9df.md) | Medium | InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Put file and get file from same IP address](../content/nginx-http-server-nginx-put-file-and-get-file-from-same-ip-address-e04fa38e-9fb7-438d-887a-381d5dd235e6-e2c9edd8.md) | Medium | InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Request to sensitive files](../content/nginx-http-server-nginx-request-to-sensitive-files-2141ef6c-d158-4d44-b739-b145a4c21947-563a14f1.md) | Medium | InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Sql injection patterns](../content/nginx-http-server-nginx-sql-injection-patterns-3bac451d-f919-4c92-9be7-694990e0ca4b-5af0860e.md) | High | InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [NGINX - Abnormal request size](../content/nginx-http-server-nginx-abnormal-request-size-930f8b54-3bef-11ec-8d3d-0242ac130003-1293beec.md) | Exfiltration, Collection | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Rare URLs requested](../content/nginx-http-server-nginx-rare-urls-requested-fd2ae5f6-3bea-11ec-8d3d-0242ac130003-186d0095.md) | InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Rare files requested](../content/nginx-http-server-nginx-rare-files-requested-aaacb354-3bea-11ec-8d3d-0242ac130003-f6d57f25.md) | InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Requests from bots and crawlers](../content/nginx-http-server-nginx-requests-from-bots-and-crawlers-39406080-fd5f-4236-99bf-7f26ea9a89d6-de346549.md) | InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Requests to unexisting files](../content/nginx-http-server-nginx-requests-to-unexisting-files-51d7d596-3beb-11ec-8d3d-0242ac130003-6eb6a9c8.md) | InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Top URLs client errors](../content/nginx-http-server-nginx-top-urls-client-errors-d8dd00ec-3bec-11ec-8d3d-0242ac130003-074d3e22.md) | Impact, InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Top URLs server errors](../content/nginx-http-server-nginx-top-urls-server-errors-58ad26ee-3bed-11ec-8d3d-0242ac130003-a5b070ac.md) | Impact, InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Top files requested](../content/nginx-http-server-nginx-top-files-requested-168428b8-3bec-11ec-8d3d-0242ac130003-f5e4b1a1.md) | InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Top files with error requests](../content/nginx-http-server-nginx-top-files-with-error-requests-a7d4b6f2-3bec-11ec-8d3d-0242ac130003-30589f20.md) | InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |
| [NGINX - Uncommon user agent strings](../content/nginx-http-server-nginx-uncommon-user-agent-strings-c8b5ce46-6f84-4944-ac89-ecaac8749b98-0734f87c.md) | InitialAccess | [`NGINX_CL`](../tables/nginx-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [NGINX](../content/nginx-http-server-nginx-b8b7e921.md) | [`NGINX_CL`](../tables/nginx-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [NGINXHTTPServer](../content/nginx-http-server-nginxhttpserver-e0c8017b-1115-45fc-b070-5556276c8471-b9bb4112.md) | - | [`NGINX_CL`](../tables/nginx-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       |  13-12-2024                    | Removed Deprecated **Data connector**       |
| 3.0.0       |  08-08-2024                    | Deprecating data connectors                 |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

