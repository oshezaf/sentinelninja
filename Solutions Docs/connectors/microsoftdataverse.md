# Microsoft Dataverse

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/PowerPlatform.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `MicrosoftDataverse` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **Collection Method** | [Unknown](../methods/unknown.md) |
| **Connector Definition Files** | [mainTemplate.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Package/mainTemplate.json) |

Microsoft Dataverse is a scalable and secure data platform that enables organizations to store and manage data used by business applications. The Microsoft Dataverse data connector provides the capability to ingest Dataverse and Dynamics 365 CRM activity logs from the Microsoft Purview Audit log into Microsoft Sentinel.

## Additional Information

- 📖 **Solution Overview:** [Microsoft Business Apps solution](https://learn.microsoft.com/azure/sentinel/business-applications/power-platform-solution-overview) - Monitor and protect Power Platform and Dynamics 365 environments
- 📖 **Deployment Guide:** [Deploy Power Platform connectors](https://learn.microsoft.com/azure/sentinel/business-applications/deploy-power-platform-solution) - Prerequisites and setup for Dataverse activity logging
- 📖 **Security Content:** [Power Platform security content reference](https://learn.microsoft.com/azure/sentinel/business-applications/power-platform-solution-security-content) - Analytics rules for Dataverse threat detection

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DataverseActivity`](../tables/dataverseactivity.md) | ✓ | ✗ | ✓ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.
- **Keys** (Workspace): Read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key)

**Custom Permissions:**
- **Tenant Permissions**: 'Security Administrator' or 'Global Administrator' on the workspace's tenant.
- **Micorosft Purview Audit**: Microsoft Purview Audit (Standard or Premium) must be activated.
- **Production Dataverse**: Activity logging is available only for Production environments. Other types, such as sandbox, do not support activity logging.
- **Dataverse Audit Settings**: Audit settings must be configured both globally and at the entity/table level. [See the documentation to learn more about Dataverse audit settings](https://learn.microsoft.com/azure/sentinel/business-applications/deploy-power-platform-solution).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Microsoft Dataverse audit logs to Microsoft Sentinel**

This connector uses the Office Management API to get your Dataverse audit logs. The logs will be stored and processed in your existing Microsoft Sentinel workspace. You can find the data in the **DataverseActivity** table.
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

