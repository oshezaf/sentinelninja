# FortyTwoCrunchAPIProtectionV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (18 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/42Crunch%20API%20Protection/Data%20Connectors/42Crunch_CCF/table_FortyTwoCrunchAPIProtectionV2.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ApiId | string | Unique identifier of the API definition in the 42Crunch platform |
| DestinationPort | int | Destination port number on the API server |
| ErrorMessage | string | Error message returned by the API firewall when the request is blocked or fails validation |
| Errors | string | Detailed error information in JSON format from the API firewall |
| EventType | string | Type of the log event recorded by the API firewall (e.g., request, block, error) |
| Hostname | string | Hostname of the API server receiving the request |
| InstanceName | string | Name of the 42Crunch API Firewall instance that processed the request |
| NonBlockingMode | bool | Indicates whether the 42Crunch firewall is running in non-blocking (observation) mode. True means requests are logged but not blocked. |
| Query | string | Query string parameters of the API request |
| RequestHeader | string | HTTP request headers in JSON format |
| ResponseHeader | string | HTTP response headers in JSON format |
| SourceIp | string | Source IP address of the API client |
| SourcePort | int | Source port number of the API client connection |
| Status | int | HTTP response status code returned by the API firewall (e.g., 200, 401, 429, 500) |
| TimeGenerated | datetime |  |
| Timestamp | datetime | Timestamp of the API request recorded by the 42Crunch firewall |
| UriPath | string | URI path of the API request |
| Uuid | string | Unique identifier (UUID) for the log event |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [42Crunch API Protection](../solutions/42crunch-api-protection.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [42Crunch API Protection (Push Connector via Codeless Connector Framework)](../connectors/fortytwocrunchapiprotection.md) |  |

---

## Content Items Using This Table (12)

### Analytic Rules (11)

**In solution [42Crunch API Protection](../solutions/42crunch-api-protection.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [API - API Scraping](../content/42crunch-api-protection-api-api-scraping-d944d564-b6fa-470d-b5ab-41b341878c5e-a52c8975.md) |  |
| [API - Account Takeover](../content/42crunch-api-protection-api-account-takeover-25c86f99-0a91-4b7f-88f3-599a008e5ab8-6d2b117c.md) |  |
| [API - Anomaly Detection](../content/42crunch-api-protection-api-anomaly-detection-2c59e609-e0a0-4e8e-adc5-ab4224be8a36-33e8704d.md) |  |
| [API - BOLA](../content/42crunch-api-protection-api-bola-1b047dc3-a879-4f99-949b-d1dc867efc83-209dd431.md) |  |
| [API - Invalid host access](../content/42crunch-api-protection-api-invalid-host-access-28500be7-cfcf-40e1-bad4-bc524e9283e2-d314655b.md) |  |
| [API - JWT validation](../content/42crunch-api-protection-api-jwt-validation-bbd163f4-1f56-434f-9c23-b06713c119c2-c3a5eaee.md) |  |
| [API - Kiterunner detection](../content/42crunch-api-protection-api-kiterunner-detection-421b38ec-4295-4aed-8299-c92e268ad663-56f29884.md) |  |
| [API - Password Cracking](../content/42crunch-api-protection-api-password-cracking-d951d64d-0ecd-4675-8c79-6c870d5f72ac-693d5746.md) |  |
| [API - Rate limiting](../content/42crunch-api-protection-api-rate-limiting-c6258d51-7b82-4942-8293-94c1dcf91595-4ec87f01.md) |  |
| [API - Rate limiting](../content/42crunch-api-protection-api-rate-limiting-b808063b-07d5-432c-95d0-8900da61cce9-3103815b.md) |  |
| [API - Suspicious Login](../content/42crunch-api-protection-api-suspicious-login-7bdc10d6-aa24-4ca9-9a93-802cd8761354-d5428b70.md) |  |

### Workbooks (1)

**In solution [42Crunch API Protection](../solutions/42crunch-api-protection.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [42CrunchAPIProtectionWorkbook](../content/42crunch-api-protection-42crunchapiprotectionworkbook-5ba91507.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [FortyTwoCrunchAPIProtection](../parsers/fortytwocrunchapiprotection.md) | [42Crunch API Protection](../solutions/42crunch-api-protection.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

