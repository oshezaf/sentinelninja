# Snowflake - Rarely used privileged users

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Query searches for rarely used privileged users.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Snowflake](../solutions/snowflake.md) |
| **ID** | `112311cc-6361-4c56-9520-1147371b01ac` |
| **Severity** | Medium |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [Snowflake](../connectors/snowflake.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Snowflake/Hunting%20Queries/SnowflakeUnusedAdmins.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SnowflakeLoadV2_CL`](../tables/snowflakeloadv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeLoadV3_CL`](../tables/snowflakeloadv3-cl.md) | ? | ✓ | ? |
| [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md) | ? | ✓ | ? |
| [`SnowflakeLoginV2_CL`](../tables/snowflakeloginv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeLoginV3_CL`](../tables/snowflakeloginv3-cl.md) | ? | ✓ | ? |
| [`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md) | ? | ✓ | ? |
| [`SnowflakeMaterializedViewV2_CL`](../tables/snowflakematerializedviewv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeMaterializedViewV3_CL`](../tables/snowflakematerializedviewv3-cl.md) | ? | ✓ | ? |
| [`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md) | ? | ✓ | ? |
| [`SnowflakeQueryV2_CL`](../tables/snowflakequeryv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeQueryV3_CL`](../tables/snowflakequeryv3-cl.md) | ? | ✓ | ? |
| [`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md) | ? | ✓ | ? |
| [`SnowflakeRoleGrantV2_CL`](../tables/snowflakerolegrantv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeRoleGrantV3_CL`](../tables/snowflakerolegrantv3-cl.md) | ? | ✓ | ? |
| [`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md) | ? | ✓ | ? |
| [`SnowflakeRolesV2_CL`](../tables/snowflakerolesv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeRolesV3_CL`](../tables/snowflakerolesv3-cl.md) | ? | ✓ | ? |
| [`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md) | ? | ✓ | ? |
| [`SnowflakeTableStorageMetricsV2_CL`](../tables/snowflaketablestoragemetricsv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeTableStorageMetricsV3_CL`](../tables/snowflaketablestoragemetricsv3-cl.md) | ? | ✓ | ? |
| [`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md) | ? | ✓ | ? |
| [`SnowflakeTablesV2_CL`](../tables/snowflaketablesv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeTablesV3_CL`](../tables/snowflaketablesv3-cl.md) | ? | ✓ | ? |
| [`SnowflakeTables_CL`](../tables/snowflaketables-cl.md) | ? | ✓ | ? |
| [`SnowflakeUserGrantV2_CL`](../tables/snowflakeusergrantv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeUserGrantV3_CL`](../tables/snowflakeusergrantv3-cl.md) | ? | ✓ | ? |
| [`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md) | ? | ✓ | ? |
| [`SnowflakeUsersV2_CL`](../tables/snowflakeusersv2-cl.md) | ? | ✓ | ? |
| [`SnowflakeUsersV3_CL`](../tables/snowflakeusersv3-cl.md) | ? | ✓ | ? |
| [`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md) | ? | ✓ | ? |
| [`Snowflake_CL`](../tables/snowflake-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Snowflake](../solutions/snowflake.md)

