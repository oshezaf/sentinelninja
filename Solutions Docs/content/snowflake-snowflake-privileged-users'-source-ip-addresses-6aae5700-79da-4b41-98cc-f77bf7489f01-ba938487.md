# Snowflake - Privileged users' source IP addresses

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Query searches for privileged users' source IP addresses.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Snowflake](../solutions/snowflake.md) |
| **ID** | `6aae5700-79da-4b41-98cc-f77bf7489f01` |
| **Severity** | Medium |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [Snowflake](../connectors/snowflake.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Snowflake/Hunting%20Queries/SnowflakeAdminSources.yaml) |

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

