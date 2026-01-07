# SymantecProxySG

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2021-05-25 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SymantecProxySG](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SymantecProxySG) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Symantec ProxySG](../connectors/symantecproxysg.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Symantec ProxySG](../connectors/symantecproxysg.md) | - |

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
| [Excessive Denied Proxy Traffic](../content/7a58b253-0ef2-4248-b4e5-c350f15a8346.md) | Low | DefenseEvasion, CommandAndControl | - |
| [User Accessed Suspicious URL Categories](../content/fb0f4a93-d8ad-4b54-9931-85bdb7550f90.md) | Medium | InitialAccess, CommandAndControl | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SymantecProxySG](../content/symantecproxysg-symantecproxysg.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SymantecProxySG](../content/58b3074c-519b-4812-b784-e8bd7712089a.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.3       | 20-01-2025                     | Removed Custom Entity mappings from **Analytic rules**          |
| 3.0.2       | 24-12-2024                     |Removed Deprecated **Data Connector**        |
| 3.0.1       | 01-08-2024                     |Update **Parser** as part of Syslog migration                         |
|             |                                |Deprecating data connectors                                           |
| 3.0.0       | 06-11-2023                     | Modified the **Data Connector** with improved onboarding instructions and Optimized the **Parser** to process the logs with improved performance |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
