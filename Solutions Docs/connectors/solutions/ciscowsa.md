# CiscoWSA

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-06-29 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoWSA](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoWSA) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Cisco Web Security Appliance](../connectors/ciscowsa.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Cisco Web Security Appliance](../connectors/ciscowsa.md) | Analytics, Hunting, Workbooks |

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
| [Cisco WSA - Access to unwanted site](../content/38029e86-030c-46c4-8a91-a2be7c74d74c.md) | High | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Internet access from public IP](../content/4250b050-e1c6-4926-af04-9484bbd7e94f.md) | Medium | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Multiple attempts to download unwanted file](../content/46b6c6fc-2c1a-4270-be10-9d444d83f027.md) | Medium | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Multiple errors to URL](../content/1db49647-435c-41ad-bf8c-7130ba75429d.md) | Medium | CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Multiple errors to resource from risky category](../content/ebf9db0c-ba7b-4249-b9ec-50a05fa7c7c9.md) | Medium | InitialAccess, CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Multiple infected files](../content/93186e3d-5dc2-4a00-a993-fa1448db8734.md) | High | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Suspected protocol abuse](../content/6f756792-4888-48a5-97cf-40d9430dc932.md) | Medium | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Unexpected URL](../content/010644fd-2830-4451-9e0e-606cc192f2e7.md) | Medium | CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Unexpected file type](../content/8e9d1f70-d529-4598-9d3e-5dd5164d1d02.md) | Medium | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Unexpected uploads](../content/32c460ad-2d40-43e9-8ead-5cdd1d7a3163.md) | High | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Unscannable file or scan error](../content/9b61a945-ebcb-4245-b6e4-51f3addb5248.md) | Medium | InitialAccess | [`Syslog`](../tables/syslog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Cisco WSA - Blocked files](../content/ebbd2b87-44c6-481a-8e4f-eaf5aa76e017.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Potentially risky resources](../content/8c35faed-a8cf-4d8d-8c67-f14f2ff6e7e9.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Rare URL with error](../content/88edb5d8-3ad9-4004-aefa-43c289483935.md) | InitialAccess, CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Rare aplications](../content/686ec2d3-fdbb-4fa2-b834-ff1d0f2486fb.md) | CommandAndControl, Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Top URLs](../content/aaf6ba04-7a00-401e-a650-06e213f3bfbc.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Top aplications](../content/6d4d7689-5e1d-4687-b1fc-eb0b7340c9a3.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - URL shorteners](../content/04582ef2-42be-4371-9ecf-635337c92ddb.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Uncategorized URLs](../content/deddf5e8-8fee-4ec5-9121-415eb954c34d.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - Uploaded files](../content/9d08418d-e21e-4fd6-b9bc-d80ce786d2da.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [Cisco WSA - User errors](../content/77ec347d-db28-4556-8a5a-dbc2ec7c9461.md) | InitialAccess, CommandAndControl | [`Syslog`](../tables/syslog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CiscoWSA](../content/ciscowsa-ciscowsa.md) | [`Syslog`](../tables/syslog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CiscoWSAEvent](../content/32aa549f-5c46-4bd0-acd1-81f0d862da32.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       | 19-12-2024                     | Removed Deprecated **Data connector**       |
| 3.0.1       | 24-07-2024                     | Deprecating data connectors                 |
| 3.0.0       | 16-08-2023                     | Optimize the **Parser** by replacing the legacy code that uses regex with a more efficient algorithm to reduce the time taken to parse data. |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
