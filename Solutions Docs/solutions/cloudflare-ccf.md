# Cloudflare CCF

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Cloudflare CCF Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Cloudflare](https://www.cloudflare.com/) solution provides the capability to ingest [Cloudflare logs](https://developers.cloudflare.com/logs/) into Microsoft Sentinel using the Codeless Connector Framework (CCF) and Azure Blob Storage. Refer to [Cloudflare documentation](https://developers.cloudflare.com/logs/about/) for more information.

**Underlying Microsoft Technologies used:**

  a. [Codeless Connector Framework](https://learn.microsoft.com/en-us/azure/sentinel/create-codeless-connector)

  b. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api) (for reference, legacy support)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cloudflare |
| **Support Tier** | Partner |
| **Support Link** | [https://support.cloudflare.com](https://support.cloudflare.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Cloudflare - support@cloudflare.com |
| **First Published** | 2025-09-30 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloudflare%20CCF](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloudflare%20CCF) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cloudflare (Using Blob Container) (via Codeless Connector Framework)](../connectors/cloudflaredefinition.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md) | [Cloudflare (Using Blob Container) (via Codeless Connector Framework)](../connectors/cloudflaredefinition.md) | Analytics, Hunting, Workbooks |
| [`Cloudflare_CL`](../tables/cloudflare-cl.md) | - | Analytics, Hunting, Workbooks |

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
| [Cloudflare - Bad client IP](../content/cloudflare-ccf-cloudflare-bad-client-ip-a7ce6135-9d55-4f14-b058-adc2e920a4fb-c9cbdeda.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Client request from country in blocklist](../content/cloudflare-ccf-cloudflare-client-request-from-country-in-blocklist-40554544-6e4a-4413-8d14-bf2de939c5d0-7513ce22.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Empty user agent](../content/cloudflare-ccf-cloudflare-empty-user-agent-729c6d21-fad9-4a6a-9c7f-482393c95958-775bd8fd.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Multiple error requests from single source](../content/cloudflare-ccf-cloudflare-multiple-error-requests-from-single-source-ef877d68-755f-4cf1-ac1d-f336e395667d-cc6b36ac.md) | Low | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Multiple user agents for single source](../content/cloudflare-ccf-cloudflare-multiple-user-agents-for-single-source-fc50076a-0275-43d5-b9dd-38346c061f68-139b38f6.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Unexpected POST requests](../content/cloudflare-ccf-cloudflare-unexpected-post-requests-7313352a-09f6-4a84-88bd-6f17f1cbeb88-5c20ac7d.md) | Medium | Persistence, CommandAndControl | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Unexpected URI](../content/cloudflare-ccf-cloudflare-unexpected-uri-dcb797cd-a4cd-4306-897b-7991f71d7e28-54984760.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Unexpected client request](../content/cloudflare-ccf-cloudflare-unexpected-client-request-f32142b1-4bcb-45c0-92e4-2ddc18768523-993692f2.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - WAF Allowed threat](../content/cloudflare-ccf-cloudflare-waf-allowed-threat-f53fe2a9-96b5-454c-827e-cf1764a67fb1-2846dbee.md) | High | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - XSS probing pattern in request](../content/cloudflare-ccf-cloudflare-xss-probing-pattern-in-request-4d9d00b9-31a6-49e4-88c1-9e68277053ad-3d9d3245.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Cloudflare - Client TLS errors](../content/cloudflare-ccf-cloudflare-client-tls-errors-20ef3865-fd1f-44a4-ac8f-8d026cf954e2-abdbb160.md) | InitialAccess, Impact | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Client errors](../content/cloudflare-ccf-cloudflare-client-errors-5d72f483-929a-498a-b840-dff7deed2117-b06fd403.md) | InitialAccess, Impact | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Files requested](../content/cloudflare-ccf-cloudflare-files-requested-d72d0055-ae52-43b5-859e-db72e5ef183a-1f2533c9.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Rare user agents](../content/cloudflare-ccf-cloudflare-rare-user-agents-a6f1938f-2f87-446c-83ac-624c277cfd33-6e33b9bb.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Server TLS errors](../content/cloudflare-ccf-cloudflare-server-tls-errors-e1a9febc-6b37-47e6-b5a7-0eec7638ba83-9a2508f3.md) | InitialAccess, Impact | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Server errors](../content/cloudflare-ccf-cloudflare-server-errors-7c8f0bed-b25c-4d48-9afa-c505e141bf4c-9f4f0e8d.md) | InitialAccess, Impact | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Top Network rules](../content/cloudflare-ccf-cloudflare-top-network-rules-eb7b88ab-47b1-483f-95b3-2b315d98d466-7794b849.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Top WAF rules](../content/cloudflare-ccf-cloudflare-top-waf-rules-8a72cdb0-97d9-4547-9eca-1bdea2ccd797-8025afb4.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Unexpected countries](../content/cloudflare-ccf-cloudflare-unexpected-countries-9fc7d945-0e82-4664-aca0-dc121a5cd7bf-36a738f7.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Unexpected edge response](../content/cloudflare-ccf-cloudflare-unexpected-edge-response-0be3ddc1-99db-4153-ba3c-2c1e5c82560e-bf320a11.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Cloudflare](../content/cloudflare-ccf-cloudflare-fc7a6590.md) | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Cloudflare](../content/cloudflare-ccf-cloudflare-fa3baaab-10b6-452c-9d07-76aa3f1c592e-0126a93f.md) | - | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md) *(read)*<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|------------|-------------------------------|--------------------|
| 3.0.1      | 08-12-2025                    | Fixed invalid GUIDs, updated analytic rules, aligned URL entity mappings with legacy Cloudflare solution |
| 3.0.0      | 02-10-2025                    | Includes all CCF connector definitions and configurations. |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

