# ⚠️ CheckpointHEC_CL On Demand Email Security (via Codeless Connector Platform)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CloudGuardLogo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CheckpointHECConnectorDefinition` |
| **Publisher** | Checkpoint |
| **Used in Solutions** | [CheckPoint Harmony Email and Collaboration](../solutions/checkpoint-harmony-email-and-collaboration.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CheckpointHEC_Definition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Checkpoint%20Harmony%20Email%20and%20Collaboration/Data%20Connectors/CheckpointHEC_Definition.json) |
| **DCR Definition Files** | [CheckpointHEC_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Checkpoint%20Harmony%20Email%20and%20Collaboration/Data%20Connectors/CheckpointHEC_DCR.json) |
| **CCF Configuration** | [CheckpointHEC_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Checkpoint%20Harmony%20Email%20and%20Collaboration/Data%20Connectors/CheckpointHEC_PollingConfig.json) |
| **CCF Capabilities** | `Push`, `None` |

CheckpointHEC_CL Email Security data connector provides the capability to get Check Point security event data

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CheckpointHEC_CL`](../tables/checkpointhec-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

Create an Application in Azure AD and create an application secret and key. To be used latest
Assign the application created the role Monitoring Metrics Publisher on the DRC created
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

