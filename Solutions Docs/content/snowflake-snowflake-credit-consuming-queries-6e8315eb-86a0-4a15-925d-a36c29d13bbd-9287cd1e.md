# Snowflake - Credit consuming queries

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Query searches for queries which consume abnormal amount of credits.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Snowflake](../solutions/snowflake.md) |
| **ID** | `6e8315eb-86a0-4a15-925d-a36c29d13bbd` |
| **Severity** | Medium |
| **Tactics** | Impact |
| **Techniques** | T1499 |
| **Required Connectors** | [Snowflake](../connectors/snowflake.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Snowflake/Hunting%20Queries/SnowflakeHighCreditConsumingQueries.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md) | ✓ | ✗ | ✓ |
| [`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md) | ✓ | ✗ | ✓ |
| [`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md) | ✓ | ✗ | ✓ |
| [`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md) | ✓ | ✗ | ✓ |
| [`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md) | ✓ | ✗ | ✓ |
| [`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md) | ✓ | ✗ | ✓ |
| [`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md) | ✓ | ✗ | ✓ |
| [`SnowflakeTables_CL`](../tables/snowflaketables-cl.md) | ✓ | ✗ | ✓ |
| [`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md) | ✓ | ✗ | ✓ |
| [`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md) | ✓ | ✗ | ✓ |
| [`Snowflake_CL`](../tables/snowflake-cl.md) | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Snowflake](../solutions/snowflake.md)

