# MimecastAudit

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Mimecast.svg" alt="MimecastAudit Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The data connector for Mimecast Audit & Authentication provides customers with the visibility into security events related to audit and authentication events within Microsoft Sentinel. The data connector provides pre-created dashboards to allow analysts to view insight into user activity, aid in incident correlation and reduce investigation response times coupled with custom alert capabilities.  
The Mimecast products included within the connector are: 
Audit & Authentication.


Microsoft Sentinel Solutions provide a consolidated way to acquire Microsoft Sentinel content like data connectors, workbooks, analytics, and automations in your workspace with a single deployment step.

**NOTE: This integration is considered deprecated and has been replaced by the unified [Mimecast integration](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/mimecastnorthamerica1584469118674.azure-sentinel-solution-mimecast?tab=Overview), which uses Mimecast's API 2.0 gateway. Please avoid using this version, and if already using it, migrate to the new integration. No further updates will be performed, and this version will be removed at a future date. For additional information, including the unified integration setup steps, go [here](https://integrations.mimecast.com/tech-partners/microsoft-sentinel).**

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Mimecast |
| **Support Tier** | Partner |
| **Support Link** | [https://mimecastsupport.zendesk.com/](https://mimecastsupport.zendesk.com/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Mimecast - dlapi@mimecast.com |
| **First Published** | 2022-02-24 |
| **Last Updated** | 2022-02-24 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastAudit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastAudit) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Mimecast Audit & Authentication](../connectors/mimecastauditapi.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`MimecastAudit_CL`](../tables/mimecastaudit-cl.md) | [Mimecast Audit & Authentication](../connectors/mimecastauditapi.md) | Analytics, Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Mimecast Audit - Logon Authentication Failed](../content/mimecastaudit-mimecast-audit-logon-authentication-failed-9c5dcd76-9f6d-42a3-b984-314b52678f20-1b9e93dc.md) | High | Discovery, InitialAccess, CredentialAccess | [`MimecastAudit_CL`](../tables/mimecastaudit-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MimecastAudit](../content/mimecastaudit-mimecastaudit-98d680e6.md) | [`MimecastAudit_CL`](../tables/mimecastaudit-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       | 06-03-2025                     | Solution Deprecated   |
| 3.0.1       | 05-12-2023                     | Enhanced **Dataconnector** to use existing workspace and updated checkpoint mechanism |
| 3.0.0       | 23-08-2023                     | Initial Solution Release                    |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

