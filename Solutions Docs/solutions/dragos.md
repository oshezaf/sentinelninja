# Dragos

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Dragos Inc |
| **Support Tier** | Partner |
| **Support Link** | [https://www.dragos.com](https://www.dragos.com) |
| **Categories** | domains |
| **First Published** | 2025-01-23 |
| **Last Updated** | 2025-01-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dragos](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dragos) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [ Dragos Notifications via Cloud Sitestore](../connectors/dragossitestoreccp.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DragosAlerts_CL`](../tables/dragosalerts-cl.md) | [ Dragos Notifications via Cloud Sitestore](../connectors/dragossitestoreccp.md) | - |

### Internal Tables

The following **1 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Analytics |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 4 |
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Dragos Notifications](../content/9a74fe72-4c21-4ac5-80d9-37434e809721.md) | Medium | - | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DragosNotificationsToSentinel](../content/b5237116-c40a-4cbe-bac6-c35564a0c578.md) | - | - |
| [DragosPullNotificationsToSentinel](../content/b5237116-c40a-4cbe-bac6-c35564a0c578.md) | - | - |
| [DragosPushNotificationsToSentinel](../content/90305294-242b-4568-8878-8fc65204f47a.md) | - | - |
| [DragosSeverityToSentinelSeverity](../content/0a51be06-1211-4d3b-8683-a4e44f069b7d.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.0.0       | 10-01-2025                     | Initial solution release.                      |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
