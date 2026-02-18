# 🔗 Azure Database for PostgreSQL (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure Database for PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/overview) is a managed PostgreSQL database service.

To collect Azure Database for PostgreSQL logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-configure-and-access-logs) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PGSQLAutovacuumStats`](../tables/pgsqlautovacuumstats.md) | ✓ | ✗ | — |
| [`PGSQLDbTransactionsStats`](../tables/pgsqldbtransactionsstats.md) | ✓ | ✗ | — |
| [`PGSQLPgBouncer`](../tables/pgsqlpgbouncer.md) | ✗ | ✗ | — |
| [`PGSQLPgStatActivitySessions`](../tables/pgsqlpgstatactivitysessions.md) | ✓ | ✗ | — |
| [`PGSQLQueryStoreQueryText`](../tables/pgsqlquerystorequerytext.md) | ✗ | ✗ | — |
| [`PGSQLQueryStoreRuntime`](../tables/pgsqlquerystoreruntime.md) | ✓ | ✗ | — |
| [`PGSQLQueryStoreWaits`](../tables/pgsqlquerystorewaits.md) | ✓ | ✗ | — |
| [`PGSQLServerLogs`](../tables/pgsqlserverlogs.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

