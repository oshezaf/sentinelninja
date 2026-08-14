# ServiceNow CMDB (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ServiceNow.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ServiceNowCMDBConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [ServiceNowCMDB](../solutions/servicenowcmdb.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [ServiceNowCMDB_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ServiceNowCMDB/Data%20Connectors/ServiceNowCMDB_CCF/ServiceNowCMDB_ConnectorDefinition.json) |
| **DCR Definition Files** | [ServiceNowCMDB_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ServiceNowCMDB/Data%20Connectors/ServiceNowCMDB_CCF/ServiceNowCMDB_DCR.json) |
| **CCF Configuration** | [ServiceNowCMDB_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ServiceNowCMDB/Data%20Connectors/ServiceNowCMDB_CCF/ServiceNowCMDB_PollerConfig.json) |
| **CCF Capabilities** | `Basic`, `Paging` |

The [ServiceNow CMDB Data Connector](https://www.servicenow.com/) allows ingesting Configuration Management Database (CMDB) and Asset Management records from ServiceNow into Microsoft Sentinel. This connector retrieves multiple records from the ServiceNow Table API for specified tables including Asset Management (alm_asset), Configuration Items (cmdb_ci), Computer CIs (cmdb_ci_computer), and Server CIs (cmdb_ci_server). This connector is built on the Microsoft Sentinel Codeless Connector Platform and supports DCR-based ingestion time transformations for efficient query execution. Refer to [ServiceNow Table API documentation](https://www.servicenow.com/docs/r/api-reference/rest-apis/c_TableAPI.html?section=c_TableAPI) for more information.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ServiceNowAlmAsset_CL`](../tables/servicenowalmasset-cl.md) | ? | ✓ | ? |
| [`ServiceNowCmdbCiComputer_CL`](../tables/servicenowcmdbcicomputer-cl.md) | ? | ✓ | ? |
| [`ServiceNowCmdbCiServer_CL`](../tables/servicenowcmdbciserver-cl.md) | ? | ✓ | ? |
| [`ServiceNowCmdbCi_CL`](../tables/servicenowcmdbci-cl.md) | ? | ✓ | ? |
| [`ServiceNowCmdbRelCi_CL`](../tables/servicenowcmdbrelci-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. ServiceNow Configuration**

Configure your ServiceNow instance connection and select a CMDB table to collect.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connector Name**
- **Selected Tables**
- **Instance URL**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add ServiceNow CMDB Connector**

*Connect to ServiceNow CMDB*

When you click the "Add Connector" button in the portal, a configuration form will open. You'll need to provide:

## ServiceNow Instance

Provide your ServiceNow instance URL and credentials.

- **ServiceNow Instance URL** (required): https://<instance>.service-now.com
- **Username** (required): admin
- **Password** (required): Enter your ServiceNow password
## Select CMDB Tables

Choose which ServiceNow CMDB tables to ingest for this connection. You can select one or more tables.

- **CMDB Tables** (required): Select from available options
  - Asset Management (alm_asset)
  - Configuration Items (cmdb_ci)
  - Computer CIs (cmdb_ci_computer)
  - Server CIs (cmdb_ci_server)
  - CI Relationships (cmdb_rel_ci)
- **Connector Friendly Name** (required): Enter a unique friendly name for this connector

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

