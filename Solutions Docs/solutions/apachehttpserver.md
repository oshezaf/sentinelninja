# ApacheHTTPServer

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/ApacheHTTPServer/Workbooks/Images/Logo/apache.svg" alt="ApacheHTTPServer Logo" width="75" height="75">

The Apache HTTP Server solution provides the capability to ingest [Apache HTTP Server](http://httpd.apache.org/) events into Microsoft Sentinel. Refer to [Apache Logs documentation](https://httpd.apache.org/docs/2.4/logs.html) for more information.

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
| **First Published** | 2021-10-27 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ApacheHTTPServer](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ApacheHTTPServer) |
| **Dependencies** | [CustomLogsAma](customlogsama.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Apache HTTP Server](../connectors/apachehttpserver.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) | [[Deprecated] Apache HTTP Server](../connectors/apachehttpserver.md) | - |

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
| [Apache - Apache 2.4.49 flaw CVE-2021-41773](../content/apachehttpserver-apache-apache-2.4.49-flaw-cve-2021-41773-767f9dc4-3b01-11ec-8d3d-0242ac130003-0ca20cc4.md) | High | InitialAccess, LateralMovement | - |
| [Apache - Command in URI](../content/apachehttpserver-apache-command-in-uri-54da6a42-3b00-11ec-8d3d-0242ac130003-e8de0502.md) | High | InitialAccess | - |
| [Apache - Known malicious user agent](../content/apachehttpserver-apache-known-malicious-user-agent-e9edfe1c-3afd-11ec-8d3d-0242ac130003-2c4bafcb.md) | High | InitialAccess | - |
| [Apache - Multiple client errors from single IP](../content/apachehttpserver-apache-multiple-client-errors-from-single-ip-15f5a956-3af9-11ec-8d3d-0242ac130003-cb481a14.md) | Medium | InitialAccess | - |
| [Apache - Multiple server errors from single IP](../content/apachehttpserver-apache-multiple-server-errors-from-single-ip-1bf246a2-3af9-11ec-8d3d-0242ac130003-897fd531.md) | Medium | Impact, InitialAccess | - |
| [Apache - Private IP in URL](../content/apachehttpserver-apache-private-ip-in-url-db5f16f0-3afe-11ec-8d3d-0242ac130003-fe445c48.md) | Medium | InitialAccess | - |
| [Apache - Put suspicious file](../content/apachehttpserver-apache-put-suspicious-file-c5d69e46-3b00-11ec-8d3d-0242ac130003-6d3641ad.md) | Medium | InitialAccess, Exfiltration | - |
| [Apache - Request from private IP](../content/apachehttpserver-apache-request-from-private-ip-a0077556-3aff-11ec-8d3d-0242ac130003-aab89050.md) | Medium | Impact, InitialAccess | - |
| [Apache - Request to sensitive files](../content/apachehttpserver-apache-request-to-sensitive-files-d1c52578-3afc-11ec-8d3d-0242ac130003-bde340ab.md) | Medium | InitialAccess | - |
| [Apache - Requests to rare files](../content/apachehttpserver-apache-requests-to-rare-files-14d7e15e-3afb-11ec-8d3d-0242ac130003-4ca207f0.md) | Medium | InitialAccess | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Apache - Rare URLs requested](../content/apachehttpserver-apache-rare-urls-requested-4c1a164e-3ae9-11ec-8d3d-0242ac130003-e7e235de.md) | InitialAccess | - |
| [Apache - Rare files requested](../content/apachehttpserver-apache-rare-files-requested-ae48a600-3ae9-11ec-8d3d-0242ac130003-154f06bb.md) | InitialAccess | - |
| [Apache - Rare user agents](../content/apachehttpserver-apache-rare-user-agents-d2e85f1a-3ae8-11ec-8d3d-0242ac130003-af20410c.md) | InitialAccess | - |
| [Apache - Rare user agents with client errors](../content/apachehttpserver-apache-rare-user-agents-with-client-errors-5ce3f2ed-0c81-407f-ae12-6ea00a6d9873-622d3504.md) | InitialAccess | - |
| [Apache - Requests to unexisting files](../content/apachehttpserver-apache-requests-to-unexisting-files-017d1bee-3aea-11ec-8d3d-0242ac130003-99a9b641.md) | InitialAccess | - |
| [Apache - Top Top files requested](../content/apachehttpserver-apache-top-top-files-requested-456ab502-38b8-11ec-8d3d-0242ac130003-b6051fd0.md) | InitialAccess | - |
| [Apache - Top URLs with client errors](../content/apachehttpserver-apache-top-urls-with-client-errors-28961fc8-3892-11ec-8d3d-0242ac130003-c3caf0ed.md) | Impact, InitialAccess | - |
| [Apache - Top URLs with server errors](../content/apachehttpserver-apache-top-urls-with-server-errors-ccdd22c6-3896-11ec-8d3d-0242ac130003-1ded7119.md) | Impact, InitialAccess | - |
| [Apache - Top files requested with errors](../content/apachehttpserver-apache-top-files-requested-with-errors-afe13b7c-38b8-11ec-8d3d-0242ac130003-552d4bde.md) | InitialAccess | - |
| [Apache - Unexpected Post Requests](../content/apachehttpserver-apache-unexpected-post-requests-c21ea046-3ae7-11ec-8d3d-0242ac130003-e7427332.md) | Persistence, CommandAndControl | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ApacheHTTPServer](../content/apachehttpserver-apachehttpserver-112ebf76.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ApacheHTTPServer](../content/apachehttpserver-apachehttpserver-51034895-bea7-44a9-b7b0-b3cca70253f4-0c9e20c5.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 05-12-2024                     | Removed Deprecated **Data connectors**                             |
| 3.0.0       | 13-08-2024                     | Deprecating data connectors                                        |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

