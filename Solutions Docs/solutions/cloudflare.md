# Cloudflare

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Cloudflare Logo" width="75" height="75">

The [Cloudflare](https://www.cloudflare.com/) solution provides the capability to ingest [Cloudflare logs](https://developers.cloudflare.com/logs/) into Microsoft Sentinel using the Cloudflare Logpush and Azure Blob Storage. Refer to [Cloudflare documentation](https://developers.cloudflare.com/logs/about/) for more information.
 
  **Underlying Microsoft Technologies used:** 
 
 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api) 

 b.[Azure Functions](https://azure.microsoft.com/services/functions/#overview) 

 c. [Codeless Connector Framework](https://learn.microsoft.com/en-us/azure/sentinel/create-codeless-connector)

<p><span style='color:red; font-weight:bold;'>NOTE</span>: Microsoft recommends installation of "CloudflareDefinition" (via Codeless Connector Framework). This connector is build on the Codeless Connector Framework (CCF), which uses the Log Ingestion API, which replaces ingestion via the <a href='https://aka.ms/Sentinel-Logs_migration' style='color:#1890F1;'>deprecated HTTP Data Collector API</a>. CCF-based data connectors also support <a href='https://aka.ms/Sentinel-DCR_Overview' style='color:#1890F1;'>Data Collection Rules</a> (DCRs) offering transformations and enrichment.</p>

<p><span style='color:red; font-weight:bold;'>Important</span>: While the updated connector(s) can coexist with their legacy versions, running them together will result in duplicated data ingestion. You can disable the older versions of these connectors to avoid duplication of data..</p>

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cloudflare |
| **Support Tier** | Partner |
| **Support Link** | [https://support.cloudflare.com](https://support.cloudflare.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-10-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloudflare](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloudflare) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[DEPRECATED] Cloudflare](../connectors/cloudflaredataconnector.md)
- [Cloudflare (Using Blob Container) (via Codeless Connector Framework)](../connectors/cloudflaredefinition.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md) | [Cloudflare (Using Blob Container) (via Codeless Connector Framework)](../connectors/cloudflaredefinition.md) | Analytics, Hunting |
| [`Cloudflare_CL`](../tables/cloudflare-cl.md) | [[DEPRECATED] Cloudflare](../connectors/cloudflaredataconnector.md) | Analytics, Hunting, Workbooks |

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
| [Cloudflare - Bad client IP](../content/cloudflare-cloudflare-bad-client-ip-a7ce6135-9d55-4f14-b058-adc2e920a4fa-e8c60cea.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Client request from country in blocklist](../content/cloudflare-cloudflare-client-request-from-country-in-blocklist-40554544-6e4a-4413-8d14-bf2de939c5d9-6c55ff65.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Empty user agent](../content/cloudflare-cloudflare-empty-user-agent-729c6d21-fad9-4a6a-9c7f-482393c95957-247a8d68.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Multiple error requests from single source](../content/cloudflare-cloudflare-multiple-error-requests-from-single-source-ef877d68-755f-4cf1-ac1d-f336e395667c-f4754265.md) | Low | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Multiple user agents for single source](../content/cloudflare-cloudflare-multiple-user-agents-for-single-source-fc50076a-0275-43d5-b9dd-38346c061f67-3b2a6159.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Unexpected POST requests](../content/cloudflare-cloudflare-unexpected-post-requests-7313352a-09f6-4a84-88bd-6f17f1cbeb8f-a7e9cc98.md) | Medium | Persistence, CommandAndControl | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Unexpected URI](../content/cloudflare-cloudflare-unexpected-uri-dcb797cd-a4cd-4306-897b-7991f71d7e27-19b10fd2.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Unexpected client request](../content/cloudflare-cloudflare-unexpected-client-request-f32142b1-4bcb-45c0-92e4-2ddc18768522-72285e78.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - WAF Allowed threat](../content/cloudflare-cloudflare-waf-allowed-threat-f53fe2a9-96b5-454c-827e-cf1764a67fb0-3f6f7a35.md) | High | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - XSS probing pattern in request](../content/cloudflare-cloudflare-xss-probing-pattern-in-request-4d9d00b9-31a6-49e4-88c1-9e68277053ac-2957f168.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Cloudflare - Client TLS errors](../content/cloudflare-cloudflare-client-tls-errors-20ef3865-fd1f-44a4-ac8f-8d026cf954e0-9983cefc.md) | InitialAccess, Impact | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Client errors](../content/cloudflare-cloudflare-client-errors-5d72f483-929a-498a-b840-dff7deed2116-1bde1650.md) | InitialAccess, Impact | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Files requested](../content/cloudflare-cloudflare-files-requested-d72d0055-ae52-43b5-859e-db72e5ef183a-ab31ca50.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Rare user agents](../content/cloudflare-cloudflare-rare-user-agents-a6f1938f-2f87-446c-83ac-624c277cfd32-39532c83.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Server TLS errors](../content/cloudflare-cloudflare-server-tls-errors-e1a9febc-6b37-47e6-b5a7-0eec7638ba82-61464440.md) | InitialAccess, Impact | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Server errors](../content/cloudflare-cloudflare-server-errors-7c8f0bed-b25c-4d48-9afa-c505e141bf4b-5dbc517e.md) | InitialAccess, Impact | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Top Network rules](../content/cloudflare-cloudflare-top-network-rules-eb7b88ab-47b1-483f-95b3-2b315d98d465-c2f97f4a.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Top WAF rules](../content/cloudflare-cloudflare-top-waf-rules-8a72cdb0-97d9-4547-9eca-1bdea2ccd796-db855572.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Unexpected countries](../content/cloudflare-cloudflare-unexpected-countries-9fc7d945-0e82-4664-aca0-dc121a5cd7be-e55d503a.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Unexpected edge response](../content/cloudflare-cloudflare-unexpected-edge-response-0be3ddc1-99db-4153-ba3c-2c1e5c82560d-96da6298.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Cloudflare](../content/cloudflare-cloudflare-8543aee9.md) | [`Cloudflare_CL`](../tables/cloudflare-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Cloudflare](../content/cloudflare-cloudflare-fa3baaab-10b6-452c-9d07-76aa3f1c592e-3419b726.md) | - | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md) *(read)*<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) *(read)* |

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**                                                                         |
|------------|-------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.2      | 05-09-2024                    | Updated the python runtime version to 3.11                                                |
| 3.0.1      | 01-08-2023                    | Updated logic in **Data Connector** to handle broken events.                              |
| 3.0.0      | 24-07-2023                    | Updated logic in **Hunting Query** (Cloudflare - Client errors,Cloudflare - Server errors)|

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

