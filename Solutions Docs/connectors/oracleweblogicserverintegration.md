# 🔗 Oracle WebLogic Server Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [MMA](../methods/mma.md) |

[Oracle WebLogic Server](https://docs.oracle.com/en/middleware/standalone/weblogic-server/index.html) is a Java EE application server that provides a platform for developing, deploying, and managing enterprise Java applications.

To collect Oracle WebLogic Server logs into Microsoft Sentinel, configure a Data Collection Rule for the `OracleWebLogicServer_CL` table. Log locations — Windows: `{DOMAIN_NAME}\Servers\{SERVER_NAME}\logs*.log`, Linux: `{DOMAIN_HOME}/servers/{SERVER_NAME}/logs/*.log`. See [Custom Logs via AMA configuration](https://learn.microsoft.com/azure/sentinel/unified-connector-custom-device#oracle-weblogic-server).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`OracleWebLogicServer_CL`](../tables/oracleweblogicserver-cl.md) | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

