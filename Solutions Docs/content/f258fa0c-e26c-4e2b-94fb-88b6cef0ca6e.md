# Snowflake - Query on sensitive or restricted table

Detects query on sensitive or restricted table.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Snowflake](../solutions/snowflake.md) |
| **ID** | `f258fa0c-e26c-4e2b-94fb-88b6cef0ca6e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection |
| **Techniques** | T1119 |
| **Required Connectors** | [Snowflake](../connectors/snowflake.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Snowflake/Analytic%20Rules/SnowflakeQueryOnSensitiveTable.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md)
- [`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md)
- [`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md)
- [`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md)
- [`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md)
- [`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md)
- [`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md)
- [`SnowflakeTables_CL`](../tables/snowflaketables-cl.md)
- [`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md)
- [`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md)
- [`Snowflake_CL`](../tables/snowflake-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](../analytic-rules.md)
- [← Back to Snowflake](../solutions/snowflake.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
