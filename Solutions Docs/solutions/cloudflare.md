# Cloudflare

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cloudflare |
| **Support Tier** | Partner |
| **Support Link** | [https://support.cloudflare.com](https://support.cloudflare.com) |
| **Categories** | domains |
| **First Published** | 2021-10-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloudflare](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloudflare) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[DEPRECATED] Cloudflare](../connectors/cloudflaredataconnector.md)
- [Cloudflare (Using Blob Container) (via Codeless Connector Framework)](../connectors/cloudflaredefinition.md)

## Tables Reference

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
| [Cloudflare - Bad client IP](../content/a7ce6135-9d55-4f14-b058-adc2e920a4fa.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Client request from country in blocklist](../content/40554544-6e4a-4413-8d14-bf2de939c5d9.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Empty user agent](../content/729c6d21-fad9-4a6a-9c7f-482393c95957.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Multiple error requests from single source](../content/ef877d68-755f-4cf1-ac1d-f336e395667c.md) | Low | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Multiple user agents for single source](../content/fc50076a-0275-43d5-b9dd-38346c061f67.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Unexpected POST requests](../content/7313352a-09f6-4a84-88bd-6f17f1cbeb8f.md) | Medium | Persistence, CommandAndControl | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Unexpected URI](../content/dcb797cd-a4cd-4306-897b-7991f71d7e27.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Unexpected client request](../content/f32142b1-4bcb-45c0-92e4-2ddc18768522.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - WAF Allowed threat](../content/f53fe2a9-96b5-454c-827e-cf1764a67fb0.md) | High | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - XSS probing pattern in request](../content/4d9d00b9-31a6-49e4-88c1-9e68277053ac.md) | Medium | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Cloudflare - Client TLS errors](../content/20ef3865-fd1f-44a4-ac8f-8d026cf954e0.md) | InitialAccess, Impact | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Client errors](../content/5d72f483-929a-498a-b840-dff7deed2116.md) | InitialAccess, Impact | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Files requested](../content/d72d0055-ae52-43b5-859e-db72e5ef183a.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Rare user agents](../content/a6f1938f-2f87-446c-83ac-624c277cfd32.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Server TLS errors](../content/e1a9febc-6b37-47e6-b5a7-0eec7638ba82.md) | InitialAccess, Impact | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Server errors](../content/7c8f0bed-b25c-4d48-9afa-c505e141bf4b.md) | InitialAccess, Impact | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Top Network rules](../content/eb7b88ab-47b1-483f-95b3-2b315d98d465.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Top WAF rules](../content/8a72cdb0-97d9-4547-9eca-1bdea2ccd796.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Unexpected countries](../content/9fc7d945-0e82-4664-aca0-dc121a5cd7be.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |
| [Cloudflare - Unexpected edge response](../content/0be3ddc1-99db-4153-ba3c-2c1e5c82560d.md) | InitialAccess | [`CloudflareV2_CL`](../tables/cloudflarev2-cl.md)<br>[`Cloudflare_CL`](../tables/cloudflare-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Cloudflare](../content/cloudflare-cloudflare.md) | [`Cloudflare_CL`](../tables/cloudflare-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Cloudflare](../content/fa3baaab-10b6-452c-9d07-76aa3f1c592e.md) | - | - |

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**                                                                         |
|------------|-------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.2      | 05-09-2024                    | Updated the python runtime version to 3.11                                                |
| 3.0.1      | 01-08-2023                    | Updated logic in **Data Connector** to handle broken events.                              |
| 3.0.0      | 24-07-2023                    | Updated logic in **Hunting Query** (Cloudflare - Client errors,Cloudflare - Server errors)|

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
