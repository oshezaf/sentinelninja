# ⚠️ Dragon Copilot

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/DragonCopilot_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `DragonCopilotNative` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [DragonCopilot](../solutions/dragoncopilot.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [DragonCopilotNative_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DragonCopilot/Data%20Connectors/DragonCopilotNative_ConnectorDefinition.json) |
| **DCR Definition Files** | [DragonCopilotNative_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DragonCopilot/Data%20Connectors/DragonCopilotNative_DCR.json) |
| **CCF Configuration** | [DragonCopilotNative_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DragonCopilot/Data%20Connectors/DragonCopilotNative_PollingConfig.json) |
| **CCF Capabilities** | `PurviewAudit` |

Microsoft Dragon Copilot is an AI-powered clinical assistant that captures and processes clinician interactions to generate structured clinical documentation and activity records. It leverages conversational, ambient, and generative AI to streamline clinical workflows, improve documentation efficiency, and surface actionable insights for healthcare professionals—including clinicians, nurses, and radiologists. Dragon Copilot activity logs represent administrative and user-level events (e.g., interactions, generated outputs, and system actions), making this connector the central ingestion point for admin, audit, and operational logs for the Dragon Copilot workload. Within the Microsoft Sentinel integration context, Dragon Copilot emits audit and activity signals representing user interactions and system-generated outputs. These signals enable security monitoring, compliance auditing, and operational visibility across healthcare workflows.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DragonCopilot`](../tables/dragoncopilot.md) | ? | ? | ? |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions.

**Custom Permissions:**
- **Tenant Permissions**: 'Security Administrator' or 'Global Administrator' on the workspace's tenant.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Dragon Copilot audit logs to Microsoft Sentinel**

This connector uses the Office Management API to get your Dragon Copilot audit logs. The logs will be stored and processed in your existing Microsoft Sentinel workspace. You can find the data in the **DragonCopilot** table.
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

