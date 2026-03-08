# Microsoft Power Automate

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/PowerPlatform.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `MicrosoftPowerAutomate` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **Collection Method** | [Unknown](../methods/unknown.md) |
| **Connector Definition Files** | [mainTemplate.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Package/mainTemplate.json) |

Power Automate is a Microsoft service that helps users create automated workflows between apps and services to synchronize files, get notifications, collect data, and more. It simplifies task automation, increasing efficiency by reducing manual, repetitive tasks, and enhancing productivity. The Power Automate data connector provides the capability to ingest Power Automate activity logs from the Microsoft Purview Audit log into Microsoft Sentinel.

## Additional Information

- 📖 **Solution Overview:** [Microsoft Business Apps solution](https://learn.microsoft.com/azure/sentinel/business-applications/power-platform-solution-overview) - Monitor and protect Power Platform and Dynamics 365 environments
- 📖 **Deployment Guide:** [Deploy Power Platform connectors](https://learn.microsoft.com/azure/sentinel/business-applications/deploy-power-platform-solution) - Prerequisites and setup for Power Automate activity logging
- 📖 **Security Content:** [Power Platform security content reference](https://learn.microsoft.com/azure/sentinel/business-applications/power-platform-solution-security-content) - Analytics rules for Power Automate flow monitoring

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PowerAutomateActivity`](../tables/powerautomateactivity.md) | ✓ | ✗ | ✓ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.
- **Keys** (Workspace): Read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key)

**Custom Permissions:**
- **Tenant Permissions**: 'Security Administrator' or 'Global Administrator' on the workspace's tenant.
- **Micorosft Purview Audit**: Microsoft Purview Audit (Standard or Premium) must be activated.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Microsoft Power Automate audit logs to Microsoft Sentinel**

This connector uses the Office Management API to get your Power Automate audit logs. The logs will be stored and processed in your existing Microsoft Sentinel workspace. You can find the data in the **PowerAutomateActivity** table.
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

