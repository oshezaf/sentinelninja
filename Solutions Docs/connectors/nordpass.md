# NordPass

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/NordPass.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `NordPass` |
| **Publisher** | NordPass |
| **Used in Solutions** | [NordPass](../solutions/nordpass.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [NordPass_API_FunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordPass/Data%20Connectors/NordPass_API_FunctionApp.json), [NordPass_data_connector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordPass/Data%20Connectors/deployment/NordPass_data_connector.json) |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *Could not determine ingestion API* |

Integrating NordPass with Microsoft Sentinel SIEM via the API will allow you to automatically transfer Activity Log data from NordPass to Microsoft Sentinel and get real-time insights, such as item activity, all login attempts, and security notifications.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.

**Custom Permissions:**

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

To proceed with the Microsoft Sentinel setup

1. Click the **Deploy to Azure** button below. 

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-Nordpass-azuredeploy)
2. **Please note that after the successful deployment, the system pulls Activity Log data every 1 minute by default.**

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

