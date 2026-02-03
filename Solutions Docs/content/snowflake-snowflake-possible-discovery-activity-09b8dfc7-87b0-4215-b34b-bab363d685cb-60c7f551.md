# Snowflake - Possible discovery activity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects possible discovery activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Snowflake](../solutions/snowflake.md) |
| **ID** | `09b8dfc7-87b0-4215-b34b-bab363d685cb` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1526 |
| **Required Connectors** | [Snowflake](../connectors/snowflake.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Snowflake/Analytic%20Rules/SnowflakeDiscoveryActivity.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SnowflakeLoad_CL`](../tables/snowflakeload-cl.md) | — | ✗ |
| [`SnowflakeLogin_CL`](../tables/snowflakelogin-cl.md) | — | ✗ |
| [`SnowflakeMaterializedView_CL`](../tables/snowflakematerializedview-cl.md) | — | ✗ |
| [`SnowflakeQuery_CL`](../tables/snowflakequery-cl.md) | — | ✗ |
| [`SnowflakeRoleGrant_CL`](../tables/snowflakerolegrant-cl.md) | — | ✗ |
| [`SnowflakeRoles_CL`](../tables/snowflakeroles-cl.md) | — | ✗ |
| [`SnowflakeTableStorageMetrics_CL`](../tables/snowflaketablestoragemetrics-cl.md) | — | ✗ |
| [`SnowflakeTables_CL`](../tables/snowflaketables-cl.md) | — | ✗ |
| [`SnowflakeUserGrant_CL`](../tables/snowflakeusergrant-cl.md) | — | ✗ |
| [`SnowflakeUsers_CL`](../tables/snowflakeusers-cl.md) | — | ✗ |
| [`Snowflake_CL`](../tables/snowflake-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Snowflake](../solutions/snowflake.md)

