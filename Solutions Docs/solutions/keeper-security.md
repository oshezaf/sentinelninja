# Keeper Security SIEM integration with Microsoft Sentinel

*Solution: Keeper Security*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/keeper_security.svg" alt="Keeper Security Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Keeper Security |
| **Support Tier** | Partner |
| **Support Link** | [https://www.keepersecurity.com](https://www.keepersecurity.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Joao Paulo Oliveira Santos - jsantos@keepersecurity.com |
| **First Published** | 2025-06-03 |
| **Last Updated** | 2025-06-03 |
| **Solution Folder** | [Keeper Security](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Keeper%20Security) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/keepersecurity.keeper-security-integration) |
| **Popularity** | 🟢 High (89%) |

The [Keeper Security](https://keepersecurity.com/) solution for Microsoft Sentinel enables you to ingest [Keeper Security](https://keepersecurity.com/) forwarded into Microsoft Sentinel using the Microsoft Sentinel Analytics Workspace.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Keeper Security Push Connector](../connectors/keepersecuritypush2.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`KeeperSecurityEventNewLogs_CL`](../tables/keepersecurityeventnewlogs-cl.md) | [Keeper Security Push Connector](../connectors/keepersecuritypush2.md) | Analytics, Workbooks |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Keeper Security - Password Changed](../content/keeper-security-keeper-security-password-changed-f031fbbc-37d8-4667-b795-d386bf2b5ab2-b3c2c3bc.md) | Informational | Persistence | [`KeeperSecurityEventNewLogs_CL`](../tables/keepersecurityeventnewlogs-cl.md) |
| [Keeper Security - User MFA Changed](../content/keeper-security-keeper-security-user-mfa-changed-75ffc8a4-86db-4f48-8506-cb4c049be484-da722465.md) | Informational | Persistence | [`KeeperSecurityEventNewLogs_CL`](../tables/keepersecurityeventnewlogs-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [KeeperSecurityDashboard](../content/keeper-security-keepersecuritydashboard-f36797d1.md) | [`KeeperSecurityEventNewLogs_CL`](../tables/keepersecurityeventnewlogs-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                     |
|-------------|--------------------------------|----------------------------------------|
| 3.0.1       | 25-07-2025                     | Added new **Analytic Rules** and **Workbook**  |
| 3.0.0       | 11-06-2025                     | Initial Solution Release with KeeperSecurity **Data Connector** CCP. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

