# ApacheHTTPServer

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-10-27 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ApacheHTTPServer](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ApacheHTTPServer) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Apache HTTP Server](../connectors/apachehttpserver.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) | [[Deprecated] Apache HTTP Server](../connectors/apachehttpserver.md) | Analytics, Hunting, Workbooks |

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
| [Apache - Apache 2.4.49 flaw CVE-2021-41773](../content/767f9dc4-3b01-11ec-8d3d-0242ac130003.md) | High | InitialAccess, LateralMovement | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Command in URI](../content/54da6a42-3b00-11ec-8d3d-0242ac130003.md) | High | InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Known malicious user agent](../content/e9edfe1c-3afd-11ec-8d3d-0242ac130003.md) | High | InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Multiple client errors from single IP](../content/15f5a956-3af9-11ec-8d3d-0242ac130003.md) | Medium | InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Multiple server errors from single IP](../content/1bf246a2-3af9-11ec-8d3d-0242ac130003.md) | Medium | Impact, InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Private IP in URL](../content/db5f16f0-3afe-11ec-8d3d-0242ac130003.md) | Medium | InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Put suspicious file](../content/c5d69e46-3b00-11ec-8d3d-0242ac130003.md) | Medium | InitialAccess, Exfiltration | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Request from private IP](../content/a0077556-3aff-11ec-8d3d-0242ac130003.md) | Medium | Impact, InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Request to sensitive files](../content/d1c52578-3afc-11ec-8d3d-0242ac130003.md) | Medium | InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Requests to rare files](../content/14d7e15e-3afb-11ec-8d3d-0242ac130003.md) | Medium | InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Apache - Rare URLs requested](../content/4c1a164e-3ae9-11ec-8d3d-0242ac130003.md) | InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Rare files requested](../content/ae48a600-3ae9-11ec-8d3d-0242ac130003.md) | InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Rare user agents](../content/d2e85f1a-3ae8-11ec-8d3d-0242ac130003.md) | InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Rare user agents with client errors](../content/5ce3f2ed-0c81-407f-ae12-6ea00a6d9873.md) | InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Requests to unexisting files](../content/017d1bee-3aea-11ec-8d3d-0242ac130003.md) | InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Top Top files requested](../content/456ab502-38b8-11ec-8d3d-0242ac130003.md) | InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Top URLs with client errors](../content/28961fc8-3892-11ec-8d3d-0242ac130003.md) | Impact, InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Top URLs with server errors](../content/ccdd22c6-3896-11ec-8d3d-0242ac130003.md) | Impact, InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Top files requested with errors](../content/afe13b7c-38b8-11ec-8d3d-0242ac130003.md) | InitialAccess | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |
| [Apache - Unexpected Post Requests](../content/c21ea046-3ae7-11ec-8d3d-0242ac130003.md) | Persistence, CommandAndControl | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ApacheHTTPServer](../content/apachehttpserver-apachehttpserver.md) | [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ApacheHTTPServer](../content/51034895-bea7-44a9-b7b0-b3cca70253f4.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 05-12-2024                     | Removed Deprecated **Data connectors**                             |
| 3.0.0       | 13-08-2024                     | Deprecating data connectors                                        |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
