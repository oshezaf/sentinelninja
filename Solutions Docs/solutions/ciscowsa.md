# CiscoWSA

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="CiscoWSA Logo" width="75" height="75">

The [Cisco Web Security Appliance (WSA)](https://www.cisco.com/c/en/us/products/security/web-security-appliance/index.html) solution provides the capability to ingest [Cisco WSA Access Logs](https://www.cisco.com/c/en/us/td/docs/security/wsa/wsa_14-0/User-Guide/b_WSA_UserGuide_14_0/b_WSA_UserGuide_11_7_chapter_010101.html) into Microsoft Sentinel.

 This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog solution will be installed as part of this solution installation.

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector.Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-06-29 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoWSA](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoWSA) |
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Cisco Web Security Appliance](../connectors/ciscowsa.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | - | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **23 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 11 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Cisco WSA - Access to unwanted site](../content/ciscowsa-cisco-wsa-access-to-unwanted-site-38029e86-030c-46c4-8a91-a2be7c74d74c-3d994899.md) | High | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Internet access from public IP](../content/ciscowsa-cisco-wsa-internet-access-from-public-ip-4250b050-e1c6-4926-af04-9484bbd7e94f-70c85e5f.md) | Medium | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Multiple attempts to download unwanted file](../content/ciscowsa-cisco-wsa-multiple-attempts-to-download-unwanted-file-46b6c6fc-2c1a-4270-be10-9d444d83f027-c3b3d95a.md) | Medium | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Multiple errors to URL](../content/ciscowsa-cisco-wsa-multiple-errors-to-url-1db49647-435c-41ad-bf8c-7130ba75429d-e0440300.md) | Medium | CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Multiple errors to resource from risky category](../content/ciscowsa-cisco-wsa-multiple-errors-to-resource-from-risky-category-ebf9db0c-ba7b-4249-b9ec-50a05fa7c7c9-c9d41318.md) | Medium | InitialAccess, CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Multiple infected files](../content/ciscowsa-cisco-wsa-multiple-infected-files-93186e3d-5dc2-4a00-a993-fa1448db8734-31d6d3c5.md) | High | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Suspected protocol abuse](../content/ciscowsa-cisco-wsa-suspected-protocol-abuse-6f756792-4888-48a5-97cf-40d9430dc932-4baf9484.md) | Medium | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Unexpected URL](../content/ciscowsa-cisco-wsa-unexpected-url-010644fd-2830-4451-9e0e-606cc192f2e7-b38bbadd.md) | Medium | CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Unexpected file type](../content/ciscowsa-cisco-wsa-unexpected-file-type-8e9d1f70-d529-4598-9d3e-5dd5164d1d02-7ddbfd79.md) | Medium | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Unexpected uploads](../content/ciscowsa-cisco-wsa-unexpected-uploads-32c460ad-2d40-43e9-8ead-5cdd1d7a3163-56bd9766.md) | High | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Unscannable file or scan error](../content/ciscowsa-cisco-wsa-unscannable-file-or-scan-error-9b61a945-ebcb-4245-b6e4-51f3addb5248-11903546.md) | Medium | InitialAccess | [`Syslog`](../tables/syslog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Cisco WSA - Blocked files](../content/ciscowsa-cisco-wsa-blocked-files-ebbd2b87-44c6-481a-8e4f-eaf5aa76e017-c8c3deae.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Potentially risky resources](../content/ciscowsa-cisco-wsa-potentially-risky-resources-8c35faed-a8cf-4d8d-8c67-f14f2ff6e7e9-51d7d5f5.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Rare URL with error](../content/ciscowsa-cisco-wsa-rare-url-with-error-88edb5d8-3ad9-4004-aefa-43c289483935-b66ea2f1.md) | InitialAccess, CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Rare aplications](../content/ciscowsa-cisco-wsa-rare-aplications-686ec2d3-fdbb-4fa2-b834-ff1d0f2486fb-ba5bc5d5.md) | CommandAndControl, Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Top URLs](../content/ciscowsa-cisco-wsa-top-urls-aaf6ba04-7a00-401e-a650-06e213f3bfbc-0cb5da27.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Top aplications](../content/ciscowsa-cisco-wsa-top-aplications-6d4d7689-5e1d-4687-b1fc-eb0b7340c9a3-4c669894.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - URL shorteners](../content/ciscowsa-cisco-wsa-url-shorteners-04582ef2-42be-4371-9ecf-635337c92ddb-7234b2bf.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Uncategorized URLs](../content/ciscowsa-cisco-wsa-uncategorized-urls-deddf5e8-8fee-4ec5-9121-415eb954c34d-f9f36aaa.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Uploaded files](../content/ciscowsa-cisco-wsa-uploaded-files-9d08418d-e21e-4fd6-b9bc-d80ce786d2da-f56bd319.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - User errors](../content/ciscowsa-cisco-wsa-user-errors-77ec347d-db28-4556-8a5a-dbc2ec7c9461-9488ff9c.md) | InitialAccess, CommandAndControl | [`Syslog`](../tables/syslog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CiscoWSA](../content/ciscowsa-ciscowsa-ad840075.md) | [`Syslog`](../tables/syslog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CiscoWSAEvent](../content/ciscowsa-ciscowsaevent-32aa549f-5c46-4bd0-acd1-81f0d862da32-e0f65045.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       | 19-12-2024                     | Removed Deprecated **Data connector**       |
| 3.0.1       | 24-07-2024                     | Deprecating data connectors                 |
| 3.0.0       | 16-08-2023                     | Optimize the **Parser** by replacing the legacy code that uses regex with a more efficient algorithm to reduce the time taken to parse data. |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

