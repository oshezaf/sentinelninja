# 🔗 MarkLogic Audit Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [MMA](../methods/mma.md) |

[MarkLogic](https://www.marklogic.com/) is an enterprise-grade multi-model NoSQL database platform that provides data integration, search, and analytics capabilities with built-in security and auditing.

To collect MarkLogic logs into Microsoft Sentinel:
- Enable auditing in the MarkLogic Admin interface.
- Configure a Data Collection Rule for the `MarkLogicAudit_CL` table. Log locations — Windows: `C:\Program Files\MarkLogic\Data\Logs\AuditLog.txt`, Linux: `/var/opt/MarkLogic/Logs/AuditLog.txt`. See [Custom Logs via AMA configuration](https://learn.microsoft.com/azure/sentinel/unified-connector-custom-device#marklogic-audit) and [MarkLogic auditing docs](https://docs.marklogic.com/guide/admin/auditing).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`MarkLogicAudit_CL`](../tables/marklogicaudit-cl.md) | ✗ | ✗ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

