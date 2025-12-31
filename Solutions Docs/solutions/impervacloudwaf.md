# ImpervaCloudWAF

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-09-28 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ImpervaCloudWAF](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ImpervaCloudWAF) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Imperva Cloud WAF](../connectors/impervacloudwaflogsccfdefinition.md)
- [Imperva Cloud WAF](../connectors/impervawafcloudapi.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md) | [Imperva Cloud WAF](../connectors/impervawafcloudapi.md), [Imperva Cloud WAF](../connectors/impervacloudwaflogsccfdefinition.md) | Analytics, Hunting, Workbooks |
| [`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) | [Imperva Cloud WAF](../connectors/impervawafcloudapi.md) | Analytics, Hunting, Workbooks |

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
| [Imperva - Abnormal protocol usage](../content/363307f6-09ba-4926-ad52-03aadfd24b5e.md) | Medium | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Critical severity event not blocked](../content/4d365217-f96a-437c-9c57-53594fa261c3.md) | High | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Forbidden HTTP request method in request](../content/7ebc9e24-319c-4786-9151-c898240463bc.md) | Medium | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Malicious Client](../content/2ff35ed4-b26a-4cad-93a6-f67adb00e919.md) | High | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Malicious user agent](../content/905794a9-bc46-42b9-974d-5a2dd58110c5.md) | High | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Multiple user agents from same source](../content/4e8032eb-f04d-4a30-85d3-b74bf2c8f204.md) | Medium | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Possible command injection](../content/6214f187-5840-4cf7-a174-0cf9a72bfd29.md) | High | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Request from unexpected IP address to admin panel](../content/427c025d-c068-4844-8205-66879e89bcfa.md) | High | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Request from unexpected countries](../content/58300723-22e0-4096-b33a-aa9b992c3564.md) | High | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Request to unexpected destination port](../content/0ba78922-033c-468c-82de-2974d7b1797d.md) | High | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Imperva - Applications with insecure web protocol version](../content/4cf72a93-537a-4c1f-83a3-0a5b743fe93e.md) | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Non HTTP/HTTPs applications](../content/1f99e54f-0e75-474e-8232-90963207f02b.md) | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Rare applications](../content/426a8b59-41ad-4022-bb01-cf914fd5687a.md) | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Rare client applications](../content/4a8a88af-4f40-40bd-aca8-e016dd6960de.md) | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Rare destination ports](../content/e68c3b84-7895-41d5-a9af-4ef776e82408.md) | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Top applications with error requests](../content/934f19a5-f4bc-47eb-a213-db918b097434.md) | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Top destinations with blocked requests](../content/e360c980-b515-4c27-921c-19d411bd059d.md) | InitialAccess, Impact | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Top sources with blocked requests](../content/ec5b9eb6-f43a-40fc-ae65-2af9ae1e77ae.md) | InitialAccess, Impact | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - Top sources with error requests](../content/c359e40f-3a56-4e75-8dbb-41e5057bba64.md) | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |
| [Imperva - request from known bots](../content/4cb3088c-445a-4a99-a90f-d583fe253a7d.md) | InitialAccess | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Imperva WAF Cloud Overview](../content/imperva-waf-cloud-overview-impervacloudwaf.md) | [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md)<br>[`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ImpervaWAFCloud](../content/ebd38cc1-5c07-4d25-8ae5-7b40cdc6fa6e.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                               |
|-------------|--------------------------------|------------------------------------------------- |  
| 3.0.2       | 06-06-2025                     |  Migrated the **Function app** connector to **CCF** Data connector and updated **Parser**     |
| 3.0.1       | 07-11-2024                     |  Added existing ***Parser* into the solution     | 
| 3.0.0       | 22-08-2024                     |  Updated the python runtime version to **3.11**  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
