# Pulse Connect Secure

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pulse%20Connect%20Secure](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pulse%20Connect%20Secure) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Pulse Connect Secure](../connectors/pulseconnectsecure.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Pulse Connect Secure](../connectors/pulseconnectsecure.md) | - |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [PulseConnectSecure - Large Number of Distinct Failed User Logins](../content/1fa1528e-f746-4794-8a41-14827f4cb798.md) | Medium | CredentialAccess | - |
| [PulseConnectSecure - Potential Brute Force Attempts](../content/34663177-8abf-4db1-b0a4-5683ab273f44.md) | Low | CredentialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PulseConnectSecure](../content/pulseconnectsecure-pulse-connect-secure.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PulseConnectSecure](../content/7a608d43-10b5-4113-8d74-6478f05f2595.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                  |
|-------------|--------------------------------|-----------------------------------------------------|
| 3.0.4       | 07-01-2025                     | Removed Custom Entity mappings from **Analytic Rule**     |
| 3.0.3       | 16-12-2024                     | Removed Deprecated **Data Connector**               |
| 3.0.2       | 01-08-2024                     | Update **Parser** as part of Syslog migration       |
|             |                                | Deprecating data connectors                         |
| 3.0.1       | 13-12-2023                     | Updated  broken link in **Data Connector**          |
| 3.0.0       | 20-07-2023                     | Corrected the links in the solution.                |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
