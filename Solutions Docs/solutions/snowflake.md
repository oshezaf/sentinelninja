# Snowflake

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Snowflake Logo" width="75" height="75">

The Snowflake CCF data connector provides the capability to ingest Snowflake [Login History Logs](https://docs.snowflake.com/en/sql-reference/account-usage/login_history), [Query History Logs](https://docs.snowflake.com/en/sql-reference/account-usage/query_history), [User-Grant Logs](https://docs.snowflake.com/en/sql-reference/account-usage/grants_to_users), [Role-Grant Logs](https://docs.snowflake.com/en/sql-reference/account-usage/grants_to_roles), [Load History Logs](https://docs.snowflake.com/en/sql-reference/account-usage/load_history), [Materialized View Refresh History Logs](https://docs.snowflake.com/en/sql-reference/account-usage/materialized_view_refresh_history), [Roles Logs](https://docs.snowflake.com/en/sql-reference/account-usage/roles), [Tables Logs](https://docs.snowflake.com/en/sql-reference/account-usage/tables), [Table Storage Metrics Logs](https://docs.snowflake.com/en/sql-reference/account-usage/table_storage_metrics), [Users Logs](https://docs.snowflake.com/en/sql-reference/account-usage/users) into Microsoft Sentinel using the Snowflake SQL API. Refer to [Snowflake SQL API documentation](https://docs.snowflake.com/en/developer-guide/sql-api/reference) for more information. 

  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

   • [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.8 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-10-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Snowflake](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Snowflake) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[DEPRECATED] Snowflake](../connectors/snowflakedataconnector.md)
- [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md)

## Tables Reference

This solution uses **11 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | - |
| [`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | - |
| [`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | - |
| [`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | - |
| [`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | - |
| [`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | - |
| [`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | - |
| [`SnowflakeTables_CL`](../tables/snowflaketables-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | - |
| [`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | - |
| [`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | - |
| [`Snowflake_CL`](../tables/snowflake-cl.md) | [[DEPRECATED] Snowflake](../connectors/snowflakedataconnector.md) | - |

## Content Items

This solution includes **22 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Snowflake - Abnormal query process time](../content/snowflake-snowflake-abnormal-query-process-time-1376f5e5-855a-4f88-8591-19eba4575a0f-cec38277.md) | Medium | Impact | - |
| [Snowflake - Multiple failed queries](../content/snowflake-snowflake-multiple-failed-queries-5f8a81d9-7d27-4ff5-a0ce-4285ee02c2c8-558c4df2.md) | High | Discovery | - |
| [Snowflake - Multiple login failures by user](../content/snowflake-snowflake-multiple-login-failures-by-user-e05cc333-d499-430f-907c-7f28a9e4d1b5-20cf8b77.md) | High | InitialAccess | - |
| [Snowflake - Multiple login failures from single IP](../content/snowflake-snowflake-multiple-login-failures-from-single-ip-b7d22407-1391-4256-b09a-414a9719443c-3c21fedb.md) | High | InitialAccess | - |
| [Snowflake - Possible data destraction](../content/snowflake-snowflake-possible-data-destraction-c2f93727-e4b0-4cb9-8f80-f52ebbd96ece-232a1869.md) | Medium | Impact | - |
| [Snowflake - Possible discovery activity](../content/snowflake-snowflake-possible-discovery-activity-09b8dfc7-87b0-4215-b34b-bab363d685cb-60c7f551.md) | Medium | Discovery | - |
| [Snowflake - Possible privileges discovery activity](../content/snowflake-snowflake-possible-privileges-discovery-activity-627a4ff1-036b-4375-a9f9-288d5e1d7d37-fb25b66d.md) | Medium | Discovery | - |
| [Snowflake - Query on sensitive or restricted table](../content/snowflake-snowflake-query-on-sensitive-or-restricted-table-f258fa0c-e26c-4e2b-94fb-88b6cef0ca6e-4abe0d65.md) | Medium | Collection | - |
| [Snowflake - Unusual query](../content/snowflake-snowflake-unusual-query-1dd1d9e5-3ebf-43cb-be07-6082d5eabe79-ce037070.md) | Medium | Collection | - |
| [Snowflake - User granted admin privileges](../content/snowflake-snowflake-user-granted-admin-privileges-5ed33eee-0ab6-4bf5-9e9b-6100db83d39a-6efd7f60.md) | Medium | PrivilegeEscalation | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Snowflake - Credit consuming queries](../content/snowflake-snowflake-credit-consuming-queries-6e8315eb-86a0-4a15-925d-a36c29d13bbd-9287cd1e.md) | Impact | - |
| [Snowflake - Deleted databases](../content/snowflake-snowflake-deleted-databases-09cc7b43-2ea1-464f-a72c-2ec187405505-c3576198.md) | Impact | - |
| [Snowflake - Deleted tables](../content/snowflake-snowflake-deleted-tables-5736df91-ec99-4fb2-b162-a17607d20ee8-5bc16bd8.md) | Impact | - |
| [Snowflake - Failed logins](../content/snowflake-snowflake-failed-logins-b4a062d1-c95b-4b55-b984-a7efbc2e3a0f-8b684bf6.md) | InitialAccess | - |
| [Snowflake - Privileged users' source IP addresses](../content/snowflake-snowflake-privileged-users'-source-ip-addresses-6aae5700-79da-4b41-98cc-f77bf7489f01-ba938487.md) | InitialAccess | - |
| [Snowflake - Rarely used account](../content/snowflake-snowflake-rarely-used-account-fcc5f12b-bfa7-45f1-8722-a72eb77a5a4a-c2ce979f.md) | InitialAccess | - |
| [Snowflake - Rarely used privileged users](../content/snowflake-snowflake-rarely-used-privileged-users-112311cc-6361-4c56-9520-1147371b01ac-d9dcdee8.md) | InitialAccess | - |
| [Snowflake - Time consuming queries](../content/snowflake-snowflake-time-consuming-queries-8f8a8ac1-82aa-4569-b3ec-46dbf2676bf0-25538b42.md) | Impact | - |
| [Snowflake - Unknown query type](../content/snowflake-snowflake-unknown-query-type-98f57314-b6d3-4f3a-8e10-c691d8c946d5-c054f18f.md) | Impact | - |
| [Snowflake - Users' source IP addresses](../content/snowflake-snowflake-users'-source-ip-addresses-169b4c88-10f5-42c2-a45f-0959689ca22a-e121838b.md) | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Snowflake](../content/snowflake-snowflake-757ff347.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Snowflake](../content/snowflake-snowflake-2757535d-ca8d-4083-8ea2-ac9ba5237b95-71c9da61.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.8       | 22-12-2025                     | Added a 120‑minute ingestion delay for the **Snowflake connector** and updated the parser KQL to surface accurate start/end timestamps.|
| 3.0.7       | 10-12-2025                     | Resolved bug in **CCF Data Connector** related to Output stream for Snowflake tables.    |
| 3.0.6       | 20-11-2025                     | Resolved bug in **CCF Data Connector** related to SQL queries      |
| 3.0.5       | 13-10-2025                     | Updated Parser to support function app table                       |
| 3.0.4       | 23-09-2025                     | Updated parser to extend the normalized fields, and updated Analytic Rules, Workbooks to use CCF connector fields.                              |
| 3.0.3       | 09-09-2025                     | Updated DCR and Poller to prevent redundant data ingestion, improve pagination and handle connection interruptions for **Snowflake CCF connector**|
| 3.0.2       | 20-08-2025                     | Moving Snowflake **CCF Data Connector** to GA.|
| 3.0.1       | 26-05-2025                     | Migrated the **Function app** connector to **CCP** Data Connector and Updated **Parser**|
| 3.0.0       | 31-08-2023                     | Manual deployment instructions updated for **Data Connector** & Convert **Parser** from text to Yaml|

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
