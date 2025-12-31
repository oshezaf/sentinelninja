# Snowflake

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
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
| [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeTables_CL`](../tables/snowflaketables-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md) | [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | Analytics, Hunting, Workbooks |
| [`Snowflake_CL`](../tables/snowflake-cl.md) | [[DEPRECATED] Snowflake](../connectors/snowflakedataconnector.md) | Analytics, Hunting, Workbooks |

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
| [Snowflake - Abnormal query process time](../content/1376f5e5-855a-4f88-8591-19eba4575a0f.md) | Medium | Impact | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Multiple failed queries](../content/5f8a81d9-7d27-4ff5-a0ce-4285ee02c2c8.md) | High | Discovery | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Multiple login failures by user](../content/e05cc333-d499-430f-907c-7f28a9e4d1b5.md) | High | InitialAccess | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Multiple login failures from single IP](../content/b7d22407-1391-4256-b09a-414a9719443c.md) | High | InitialAccess | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Possible data destraction](../content/c2f93727-e4b0-4cb9-8f80-f52ebbd96ece.md) | Medium | Impact | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Possible discovery activity](../content/09b8dfc7-87b0-4215-b34b-bab363d685cb.md) | Medium | Discovery | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Possible privileges discovery activity](../content/627a4ff1-036b-4375-a9f9-288d5e1d7d37.md) | Medium | Discovery | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Query on sensitive or restricted table](../content/f258fa0c-e26c-4e2b-94fb-88b6cef0ca6e.md) | Medium | Collection | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Unusual query](../content/1dd1d9e5-3ebf-43cb-be07-6082d5eabe79.md) | Medium | Collection | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - User granted admin privileges](../content/5ed33eee-0ab6-4bf5-9e9b-6100db83d39a.md) | Medium | PrivilegeEscalation | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Snowflake - Credit consuming queries](../content/6e8315eb-86a0-4a15-925d-a36c29d13bbd.md) | Impact | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Deleted databases](../content/09cc7b43-2ea1-464f-a72c-2ec187405505.md) | Impact | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Deleted tables](../content/5736df91-ec99-4fb2-b162-a17607d20ee8.md) | Impact | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Failed logins](../content/b4a062d1-c95b-4b55-b984-a7efbc2e3a0f.md) | InitialAccess | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Privileged users' source IP addresses](../content/6aae5700-79da-4b41-98cc-f77bf7489f01.md) | InitialAccess | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Rarely used account](../content/fcc5f12b-bfa7-45f1-8722-a72eb77a5a4a.md) | InitialAccess | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Rarely used privileged users](../content/112311cc-6361-4c56-9520-1147371b01ac.md) | InitialAccess | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Time consuming queries](../content/8f8a8ac1-82aa-4569-b3ec-46dbf2676bf0.md) | Impact | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Unknown query type](../content/98f57314-b6d3-4f3a-8e10-c691d8c946d5.md) | Impact | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |
| [Snowflake - Users' source IP addresses](../content/169b4c88-10f5-42c2-a45f-0959689ca22a.md) | InitialAccess | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Snowflake](../content/snowflake-snowflake.md) | [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)<br>[`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)<br>[`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)<br>[`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)<br>[`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)<br>[`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)<br>[`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)<br>[`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)<br>[`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)<br>[`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)<br>[`Snowflake_CL`](../tables/snowflake-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Snowflake](../content/2757535d-ca8d-4083-8ea2-ac9ba5237b95.md) | - | - |

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
- [Content Index](../content-index.md)
