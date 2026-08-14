# Snowflake (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SnowflakeConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Snowflake](../solutions/snowflake.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [SnowflakeLogs_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Snowflake/Data%20Connectors/SnowflakeLogs_ccp/SnowflakeLogs_ConnectorDefinition.json) |
| **DCR Definition Files** | [SnowflakeLogs_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Snowflake/Data%20Connectors/SnowflakeLogs_ccp/SnowflakeLogs_DCR.json) |
| **CCF Configuration** | [SnowflakeLogs_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Snowflake/Data%20Connectors/SnowflakeLogs_ccp/SnowflakeLogs_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging`, `POST` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#snowflake-via-codeless-connector-framework) |

The Snowflake data connector provides the capability to ingest Snowflake [Login History Logs](https://docs.snowflake.com/en/sql-reference/account-usage/login_history), [Query History Logs](https://docs.snowflake.com/en/sql-reference/account-usage/query_history), [User-Grant Logs](https://docs.snowflake.com/en/sql-reference/account-usage/grants_to_users), [Role-Grant Logs](https://docs.snowflake.com/en/sql-reference/account-usage/grants_to_roles), [Load History Logs](https://docs.snowflake.com/en/sql-reference/account-usage/load_history), [Materialized View Refresh History Logs](https://docs.snowflake.com/en/sql-reference/account-usage/materialized_view_refresh_history), [Roles Logs](https://docs.snowflake.com/en/sql-reference/account-usage/roles), [Tables Logs](https://docs.snowflake.com/en/sql-reference/account-usage/tables), [Table Storage Metrics Logs](https://docs.snowflake.com/en/sql-reference/account-usage/table_storage_metrics), [Users Logs](https://docs.snowflake.com/en/sql-reference/account-usage/users) into Microsoft Sentinel using the Snowflake SQL API. Refer to [Snowflake SQL API documentation](https://docs.snowflake.com/en/developer-guide/sql-api/reference) for more information.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SnowflakeLoadV2_CL`](../tables/snowflakeloadv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeLoginV2_CL`](../tables/snowflakeloginv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeMaterializedViewV2_CL`](../tables/snowflakematerializedviewv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeQueryV2_CL`](../tables/snowflakequeryv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeRoleGrantV2_CL`](../tables/snowflakerolegrantv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeRolesV2_CL`](../tables/snowflakerolesv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeTableStorageMetricsV2_CL`](../tables/snowflaketablestoragemetricsv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeTablesV2_CL`](../tables/snowflaketablesv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeUserGrantV2_CL`](../tables/snowflakeusergrantv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeUsersV2_CL`](../tables/snowflakeusersv2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Snowflake to Microsoft Sentinel**

ℹ️ **Notice:** Solution version 3.1.0 and later uses the SnowflakeV2 tables (e.g., SnowflakeQueryV2_CL, SnowflakeLoginV2_CL). The parsers have been updated accordingly.
>**NOTE:** To ensure data is presented in separate columns for each field, execute the parser using the **Snowflake()** function
To gather data from Snowflake, you need to provide the following resources
#### 1. Account Identifier 
 To gather data from Snowflake, you'll need Snowflake Account Identifier.
#### 2. Programmatic Access Token 
 To gather data from Snowflake, you'll need the Snowflake Programmatic Access Token
For detailed instructions on retrieving the Account Identifier and Programmatic Access Token, please refer to the [Connector Tutorial](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Snowflake/Data%20Connectors/Readme.md).
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connector Alias**
- **Account-Identifier**
- **Table Name**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Account**

*Add Account*

When you click the "Add Account" button in the portal, a configuration form will open. You'll need to provide:

- **Connection Alias** (required): Production or Sandbox
- **Data Types** (required): Select from available options
  - Snowflake - Load data
  - Snowflake - Login data
  - Snowflake - Materialized View data
  - Snowflake - Query data
  - Snowflake - Role Grant data
  - ... and 5 more options
- **Snowflake Account Identifier** (required): Enter Snowflake Account Identifier
- **Snowflake PAT** (required): Enter Snowflake PAT

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

