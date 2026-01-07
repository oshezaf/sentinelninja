# 42Crunch API Protection

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | 42Crunch API Protection |
| **Support Tier** | Partner |
| **Support Link** | [https://42crunch.com/](https://42crunch.com/) |
| **Categories** | domains |
| **First Published** | 2022-09-21 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/42Crunch%20API%20Protection](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/42Crunch%20API%20Protection) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [API Protection](../connectors/42crunchapiprotection.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md) | [API Protection](../connectors/42crunchapiprotection.md) | Analytics, Workbooks |

## Content Items

This solution includes **12 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 11 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [API - API Scraping](../content/42crunch-api-protection-api---api-scraping-d944d564-b6fa-470d-b5ab-41b341878c5e.md) | High | Reconnaissance, Collection | [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md) |
| [API - Account Takeover](../content/42crunch-api-protection-api---account-takeover-25c86f99-0a91-4b7f-88f3-599a008e5ab8.md) | High | CredentialAccess, Discovery | [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md) |
| [API - Anomaly Detection](../content/42crunch-api-protection-api---anomaly-detection-2c59e609-e0a0-4e8e-adc5-ab4224be8a36.md) | Low | Reconnaissance | [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md) |
| [API - BOLA](../content/42crunch-api-protection-api---bola-1b047dc3-a879-4f99-949b-d1dc867efc83.md) | Medium | Exfiltration | [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md) |
| [API - Invalid host access](../content/42crunch-api-protection-api---invalid-host-access-28500be7-cfcf-40e1-bad4-bc524e9283e2.md) | Low | Reconnaissance | [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md) |
| [API - JWT validation](../content/42crunch-api-protection-api---jwt-validation-bbd163f4-1f56-434f-9c23-b06713c119c2.md) | Low | InitialAccess, CredentialAccess | [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md) |
| [API - Kiterunner detection](../content/42crunch-api-protection-api---kiterunner-detection-421b38ec-4295-4aed-8299-c92e268ad663.md) | Medium | Reconnaissance, Discovery | [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md) |
| [API - Password Cracking](../content/42crunch-api-protection-api---password-cracking-d951d64d-0ecd-4675-8c79-6c870d5f72ac.md) | High | CredentialAccess | [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md) |
| [API - Rate limiting](../content/42crunch-api-protection-api---rate-limiting-c6258d51-7b82-4942-8293-94c1dcf91595.md) | Low | Discovery, InitialAccess | [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md) |
| [API - Rate limiting](../content/42crunch-api-protection-api---rate-limiting-b808063b-07d5-432c-95d0-8900da61cce9.md) | Medium | Impact | [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md) |
| [API - Suspicious Login](../content/42crunch-api-protection-api---suspicious-login-7bdc10d6-aa24-4ca9-9a93-802cd8761354.md) | High | CredentialAccess, InitialAccess | [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [42CrunchAPIProtectionWorkbook](../content/42crunch-api-protection-42crunchapiprotectionworkbook.md) | [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.0       | 15-07-2024                     |	Missing Tactics and Techniques added     						|

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
