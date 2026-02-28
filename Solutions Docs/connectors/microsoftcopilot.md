# ⚠️ Microsoft Copilot

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Copilot_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `MicrosoftCopilot` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Microsoft Copilot](../solutions/microsoft-copilot.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [MicrosoftCopilot_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Copilot/Data%20Connectors/MicrosoftCopilot_ConnectorDefinition.json) |
| **CCF Configuration** | [MicrosoftCopilot_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Copilot/Data%20Connectors/MicrosoftCopilot_PollingConfig.json) |
| **CCF Capabilities** | `PurviewAudit` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF connectors use DCR-based Log Ingestion API* |

The Microsoft Copilot logs connector in Microsoft Sentinel enables the seamless ingestion of Copilot-generated activity logs into Microsoft Sentinel for advanced threat detection, investigation, and response. It collects telemetry from Microsoft Copilot services - such as usage data, prompts and system responses - and ingests into Microsoft Sentinel, allowing security teams to monitor for misuse, detect anomalies, and maintain compliance with organizational policies.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CopilotActivity`](../tables/copilotactivity.md) | ✗ | ✗ | ✓ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions.

**Custom Permissions:**
- **Tenant Permissions**: 'Security Administrator' or 'Global Administrator' on the workspace's tenant.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Microsoft Copilot audit logs to Microsoft Sentinel**

This connector uses the Office Management API to get your Microsoft Copilot audit logs. The logs will be stored and processed in your existing Microsoft Sentinel workspace. You can find the data in the **CopilotActivity** table.
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

