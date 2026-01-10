# Dragos

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Dragos.svg" alt="Dragos Logo" width="75" height="75">

The [Dragos Platform](https://www.dragos.com/) is the leading Industrial Cyber Security platform it offers a comprehensive Operational Technology (OT) cyber threat detection built by unrivaled industrial cybersecurity expertise. This solution enables Dragos Platform notification data to be viewed in Microsoft Sentinel so that security analysts are able to triage potential cyber security events occurring in their industrial environments.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Dragos Inc |
| **Support Tier** | Partner |
| **Support Link** | [https://www.dragos.com](https://www.dragos.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Dragos Inc. - support@dragos.com |
| **First Published** | 2025-01-23 |
| **Last Updated** | 2025-01-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dragos](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dragos) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [ Dragos Notifications via Cloud Sitestore](../connectors/dragossitestoreccp.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DragosAlerts_CL`](../tables/dragosalerts-cl.md) | [ Dragos Notifications via Cloud Sitestore](../connectors/dragossitestoreccp.md) | - |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 4 |
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Dragos Notifications](../content/dragos-dragos-notifications-9a74fe72-4c21-4ac5-80d9-37434e809721-264e8545.md) | Medium | - | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DragosNotificationsToSentinel](../content/dragos-dragosnotificationstosentinel-b5237116-c40a-4cbe-bac6-c35564a0c578-13e95999.md) | - | - |
| [DragosPullNotificationsToSentinel](../content/dragos-dragospullnotificationstosentinel-b5237116-c40a-4cbe-bac6-c35564a0c578-f61550b0.md) | - | - |
| [DragosPushNotificationsToSentinel](../content/dragos-dragospushnotificationstosentinel-90305294-242b-4568-8878-8fc65204f47a-40779fe8.md) | - | - |
| [DragosSeverityToSentinelSeverity](../content/dragos-dragosseveritytosentinelseverity-0a51be06-1211-4d3b-8683-a4e44f069b7d-ff1b8b2f.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.0.0       | 10-01-2025                     | Initial solution release.                      |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

