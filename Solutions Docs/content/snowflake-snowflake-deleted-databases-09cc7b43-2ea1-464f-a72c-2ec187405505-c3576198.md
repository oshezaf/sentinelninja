# Snowflake - Deleted databases

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Query searches for deleted databases.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Snowflake](../solutions/snowflake.md) |
| **ID** | `09cc7b43-2ea1-464f-a72c-2ec187405505` |
| **Severity** | Medium |
| **Tactics** | Impact |
| **Techniques** | T1485 |
| **Required Connectors** | [Snowflake](../connectors/snowflake.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Snowflake/Hunting%20Queries/SnowflakeDeletedDatabases.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeTables_CL`](../tables/snowflaketables-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md) | ✓ | ✓ | ✓ |
| [`Snowflake_CL`](../tables/snowflake-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Snowflake](../solutions/snowflake.md)

