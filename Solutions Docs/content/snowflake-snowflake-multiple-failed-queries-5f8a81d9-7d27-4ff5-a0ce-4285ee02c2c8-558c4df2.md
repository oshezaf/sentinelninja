# Snowflake - Multiple failed queries

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects multiple failed queries in short timeframe.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Snowflake](../solutions/snowflake.md) |
| **ID** | `5f8a81d9-7d27-4ff5-a0ce-4285ee02c2c8` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1518, T1082 |
| **Required Connectors** | [Snowflake](../connectors/snowflake.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Snowflake/Analytic%20Rules/SnowflakeMultipleFailedQueries.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SnowflakeLoadV2_CL`](../tables/snowflakeloadv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeLoginV2_CL`](../tables/snowflakeloginv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeMaterializedViewV2_CL`](../tables/snowflakematerializedviewv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeQueryV2_CL`](../tables/snowflakequeryv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeRoleGrantV2_CL`](../tables/snowflakerolegrantv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeRolesV2_CL`](../tables/snowflakerolesv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeTableStorageMetricsV2_CL`](../tables/snowflaketablestoragemetricsv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeTablesV2_CL`](../tables/snowflaketablesv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeTables_CL`](../tables/snowflaketables-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeUserGrantV2_CL`](../tables/snowflakeusergrantv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md) | ✓ | ✓ | ✓ |
| [`SnowflakeUsersV2_CL`](../tables/snowflakeusersv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md) | ✓ | ✓ | ✓ |
| [`Snowflake_CL`](../tables/snowflake-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Snowflake](../solutions/snowflake.md)

