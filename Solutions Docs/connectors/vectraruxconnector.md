# Vectra RUX Security Data Connector (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Vectra_RUX.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `VectraRUXConnector` |
| **Publisher** | Vectra AI |
| **Used in Solutions** | [Vectra XDR](../solutions/vectra-xdr.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [VectraRUX_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Data%20Connectors/VectraCCFConnector/VectraRUX_ConnectorDefinition.json) |
| **DCR Definition Files** | [VectraRUX_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Data%20Connectors/VectraCCFConnector/VectraRUX_DCR.json) |
| **CCF Configuration** | [VectraRUX_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Data%20Connectors/VectraCCFConnector/VectraRUX_PollingConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging` |

The [Vectra RUX](https://www.vectra.ai/) data connector enables you to ingest security data from the Vectra AI platform into Microsoft Sentinel through the REST API using the Codeless Connector Framework (CCF). This connector supports 3 data streams using OAuth2 client credentials:

- **Detections**: Security detections, filtered by triaged status.

- **Lockdown**: Entity isolation and containment status. Live state captured every 5 minutes.

- **Entities**: Host and account entities with scoring, assignment, and enrichment data, incrementally ingested ordered by last modification time.



The connector is built on the Microsoft Sentinel Codeless Connector Platform and supports DCR-based [ingestion time transformations](https://docs.microsoft.com/azure/azure-monitor/logs/custom-logs-overview) for optimized query performance.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Detections_Data_CCF_CL`](../tables/detections-data-ccf-cl.md) | ? | ✓ | ? |
| [`Entities_Data_CCF_CL`](../tables/entities-data-ccf-cl.md) | ? | ✓ | ? |
| [`Lockdown_Data_CCF_CL`](../tables/lockdown-data-ccf-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Vectra RUX API access**: Access to Vectra RUX API with appropriate permissions for each data stream is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configure Vectra RUX Connection**

Connect to Vectra RUX and select data stream
## Vectra RUX Data Connector Configuration

Configure your Vectra RUX connection and select the data stream you want to collect. Each stream provides different types of security data from your Vectra AI platform.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Alias**
- **Stream Type**
- **API Base URL**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Vectra RUX Data Stream Connection**

*Configure Vectra RUX API connection and select data stream*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

*Base Configuration*

### Base API Configuration

- **Connection Alias** (optional): Production Vectra
- **Vectra API Base URL** (optional): https://tenant.region.portal.vectra.ai
*OAuth2 Credentials*

### OAuth2 Client Credentials

- **Client ID** (optional): Enter OAuth2 Client ID
- **Client Secret** (optional): Enter OAuth2 Client Secret
*Data Stream Selection*

### Data Stream Configuration

- **Data Stream** (required): Select from available options
  - Detections - Security detections
  - Entities - Host and account entities with scoring and assignment data
  - Lockdown - Security lockdown and containment actions
- **Detections Starting Checkpoint — Enter 'Vectra' as text for adding Lockdown or Entities data** (required): Paste next_checkpoint from GET /api/v3.5/events/detections?limit=1&ordering=-event_timestamp

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.


ℹ️ **Note**: After adding a connection, the Detections stream polls every 5 minutes using a persistent checkpoint cursor (`PersistentToken`) — position-based, not time-based. The cursor survives pod restarts and long pagination runs; no events will be silently skipped due to clock drift or slow pages. **First poll seeding**: Provide the `detectionsStartingCheckpoint` value when creating the connection to start ingestion at your current event position rather than from the beginning of history.

ℹ️ **Troubleshooting Rate Limits (HTTP 429 Errors) when adding connections**:
- **Root Cause**: Vectra RUX limits API requests to prevent abuse
- **Solution**: Create a separate API client in Vectra for each data stream connection
- **Verification**: Check that each connector instance uses different `clientId` credentials
- **Deployment Strategy**: Stagger connection creation by at least one minute when adding multiple streams simultaneously to prevent OAuth2 request collisions

**2. Monitor and Validate Data Collection**

Monitor data ingestion and validate connectivity
### Post-Configuration Steps

1. **Monitor Connection Status**: Check the connector status in the Data connectors page.
2. **Validate Data Flow**: Use the sample queries provided to verify data is being collected.
3. **Review Connector Health (Optional)**: The `SentinelHealth` table provides per-poll-cycle status for each data stream, including failure reasons for authentication, network, and ingestion errors. It is not enabled by default.

   **To enable**: Go to **Microsoft Sentinel → Settings → Settings tab → Health and Audit** and toggle on health monitoring for data connectors. See [Enable health monitoring for Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/enable-monitoring) for full instructions.

   **Once enabled**, run the following query to check connector poll status:

   `SentinelHealth | where TimeGenerated > ago(24h) | where SentinelResourceType == "Data connector" | project TimeGenerated, SentinelResourceName, Status, Description, Reason | order by TimeGenerated desc`

### Stream-Specific Notes

- **Detections**: Filters out triaged detections by default (`include_triaged=false`).

ℹ️ **PersistentToken Checkpoint Mode (Detections)**

The Detections poller uses `PersistentToken` — the `next_checkpoint` value returned by the Vectra API is stored by CCF and passed back as `from=<checkpoint>` on the next poll cycle. This is position-based (monotonic `id`-based), not time-based, so slow pagination or pod restarts cannot cause silent data gaps.

**Cold-start behaviour**: On the very first poll after deployment, CCF sends `from=<detectionsStartingCheckpoint>` as the starting cursor. Ingestion begins at this cursor position, ensuring no historical backlog is ingested. Once the first poll completes, PersistentToken persists the returned `next_checkpoint` and all subsequent polls use the stored value automatically.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

