# RidgeSecurity

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | RidgeSecurity |
| **Support Tier** | Partner |
| **Support Link** | [https://ridgesecurity.ai/about-us/](https://ridgesecurity.ai/about-us/) |
| **Categories** | domains |
| **First Published** | 2023-10-23 |
| **Last Updated** | 2023-10-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RidgeSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RidgeSecurity) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] RIDGEBOT - data connector for Microsoft Sentinel](../connectors/ridgebotdataconnector.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] RIDGEBOT - data connector for Microsoft Sentinel](../connectors/ridgebotdataconnector.md) | Analytics |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Critical Risks](../content/1eebfaf3-40e1-4bc2-9f42-049b7b8ceb60.md) | High | Execution, InitialAccess, PrivilegeEscalation | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Vulerabilities](../content/d096643d-6789-4c74-8893-dd3fc8a94069.md) | High | Execution, InitialAccess, PrivilegeEscalation | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 01-07-2024                     |  Deprecating data connectors                                          |
| 3.0.0       | 23-10-2023                     |  Initial Solution Release                                          |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
