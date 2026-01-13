# ImpervaCloudWAF

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Imperva_DarkGrey_final_75x75.svg" alt="ImpervaCloudWAF Logo" width="75" height="75">

[Imperva Cloud WAF](https://www.imperva.com/resources/resource-library/datasheets/imperva-cloud-waf/) offers the industry's leading web application security firewall, providing enterprise-class protection against the most sophisticated security threats. As a cloud-based WAF, it ensures that your website is always protected against any type of application layer hacking attempt. Imperva Cloud WAF is a key component of Imperva's market-leading, full stack application security solution which brings defence-in-depth to a new level.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

c. [Codeless Connector Framework (CCF)](https://learn.microsoft.com/en-us/azure/sentinel/create-codeless-connector)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 2.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-09-28 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ImpervaCloudWAF](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ImpervaCloudWAF) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Imperva Cloud WAF](../connectors/impervacloudwaflogsccfdefinition.md)
- [Imperva Cloud WAF](../connectors/impervawafcloudapi.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ImpervaWAFCloudV2_CL`](../tables/impervawafcloudv2-cl.md) | [Imperva Cloud WAF](../connectors/impervacloudwaflogsccfdefinition.md) | - |
| [`ImpervaWAFCloud_CL`](../tables/impervawafcloud-cl.md) | [Imperva Cloud WAF](../connectors/impervawafcloudapi.md) | - |

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
| [Imperva - Abnormal protocol usage](../content/impervacloudwaf-imperva-abnormal-protocol-usage-363307f6-09ba-4926-ad52-03aadfd24b5e-608dd6d1.md) | Medium | InitialAccess | - |
| [Imperva - Critical severity event not blocked](../content/impervacloudwaf-imperva-critical-severity-event-not-blocked-4d365217-f96a-437c-9c57-53594fa261c3-92c36a8a.md) | High | InitialAccess | - |
| [Imperva - Forbidden HTTP request method in request](../content/impervacloudwaf-imperva-forbidden-http-request-method-in-request-7ebc9e24-319c-4786-9151-c898240463bc-263ced93.md) | Medium | InitialAccess | - |
| [Imperva - Malicious Client](../content/impervacloudwaf-imperva-malicious-client-2ff35ed4-b26a-4cad-93a6-f67adb00e919-fbe5c7e5.md) | High | InitialAccess | - |
| [Imperva - Malicious user agent](../content/impervacloudwaf-imperva-malicious-user-agent-905794a9-bc46-42b9-974d-5a2dd58110c5-227b4f7f.md) | High | InitialAccess | - |
| [Imperva - Multiple user agents from same source](../content/impervacloudwaf-imperva-multiple-user-agents-from-same-source-4e8032eb-f04d-4a30-85d3-b74bf2c8f204-1941af4e.md) | Medium | InitialAccess | - |
| [Imperva - Possible command injection](../content/impervacloudwaf-imperva-possible-command-injection-6214f187-5840-4cf7-a174-0cf9a72bfd29-6559c17f.md) | High | InitialAccess | - |
| [Imperva - Request from unexpected IP address to admin panel](../content/impervacloudwaf-imperva-request-from-unexpected-ip-address-to-admin-panel-427c025d-c068-4844-8205-66879e89bcfa-660e22b0.md) | High | InitialAccess | - |
| [Imperva - Request from unexpected countries](../content/impervacloudwaf-imperva-request-from-unexpected-countries-58300723-22e0-4096-b33a-aa9b992c3564-5720b4f7.md) | High | InitialAccess | - |
| [Imperva - Request to unexpected destination port](../content/impervacloudwaf-imperva-request-to-unexpected-destination-port-0ba78922-033c-468c-82de-2974d7b1797d-c749ee63.md) | High | InitialAccess | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Imperva - Applications with insecure web protocol version](../content/impervacloudwaf-imperva-applications-with-insecure-web-protocol-version-4cf72a93-537a-4c1f-83a3-0a5b743fe93e-fe436403.md) | InitialAccess | - |
| [Imperva - Non HTTP/HTTPs applications](../content/impervacloudwaf-imperva-non-http-https-applications-1f99e54f-0e75-474e-8232-90963207f02b-66fb02b4.md) | InitialAccess | - |
| [Imperva - Rare applications](../content/impervacloudwaf-imperva-rare-applications-426a8b59-41ad-4022-bb01-cf914fd5687a-809a8cc4.md) | InitialAccess | - |
| [Imperva - Rare client applications](../content/impervacloudwaf-imperva-rare-client-applications-4a8a88af-4f40-40bd-aca8-e016dd6960de-7c21c8ad.md) | InitialAccess | - |
| [Imperva - Rare destination ports](../content/impervacloudwaf-imperva-rare-destination-ports-e68c3b84-7895-41d5-a9af-4ef776e82408-86772308.md) | InitialAccess | - |
| [Imperva - Top applications with error requests](../content/impervacloudwaf-imperva-top-applications-with-error-requests-934f19a5-f4bc-47eb-a213-db918b097434-9172946a.md) | InitialAccess | - |
| [Imperva - Top destinations with blocked requests](../content/impervacloudwaf-imperva-top-destinations-with-blocked-requests-e360c980-b515-4c27-921c-19d411bd059d-8a8f6785.md) | InitialAccess, Impact | - |
| [Imperva - Top sources with blocked requests](../content/impervacloudwaf-imperva-top-sources-with-blocked-requests-ec5b9eb6-f43a-40fc-ae65-2af9ae1e77ae-b6c19538.md) | InitialAccess, Impact | - |
| [Imperva - Top sources with error requests](../content/impervacloudwaf-imperva-top-sources-with-error-requests-c359e40f-3a56-4e75-8dbb-41e5057bba64-ca203e65.md) | InitialAccess | - |
| [Imperva - request from known bots](../content/impervacloudwaf-imperva-request-from-known-bots-4cb3088c-445a-4a99-a90f-d583fe253a7d-2db1a351.md) | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Imperva WAF Cloud Overview](../content/impervacloudwaf-imperva-waf-cloud-overview-84f383d0.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ImpervaWAFCloud](../content/impervacloudwaf-impervawafcloud-ebd38cc1-5c07-4d25-8ae5-7b40cdc6fa6e-dec50d88.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                               |
|-------------|--------------------------------|------------------------------------------------- |  
| 3.0.2       | 06-06-2025                     |  Migrated the **Function app** connector to **CCF** Data connector and updated **Parser**     |
| 3.0.1       | 07-11-2024                     |  Added existing ***Parser* into the solution     | 
| 3.0.0       | 22-08-2024                     |  Updated the python runtime version to **3.11**  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

