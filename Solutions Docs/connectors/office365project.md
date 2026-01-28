# Microsoft Project

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Microsoft_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `Office365Project` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Microsoft Project](../solutions/microsoft-project.md) |
| **Collection Method** | Native |
| **Connector Definition Files** | [template_Office365Project.JSON](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Project/Data%20Connectors/template_Office365Project.JSON) |

Microsoft Project (MSP) is a project management software solution. Depending on your plan, Microsoft Project lets you plan projects, assign tasks, manage resources, create reports and more. This connector allows you to stream your Azure Project audit logs into Microsoft Sentinel in order to track your project activities.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`ProjectActivity`](../tables/projectactivity.md) | ✓ | ✗ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions.

**Custom Permissions:**
- **License**: "Microsoft Project eligible license is required."

**Tenant Permissions:**
Requires GlobalAdmin, SecurityAdmin on the workspace's tenant

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Microsoft Project audit logs to Microsoft Sentinel**

This connector uses the Office Management API to get your Project audit logs. The logs will be stored and processed in your existing Microsoft Sentinel workspace. You can find the data in the **ProjectActivity** table.
- Connect Microsoft Project

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

