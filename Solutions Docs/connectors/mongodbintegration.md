# 🔗 MongoDB Audit Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [MMA](../methods/mma.md) |

[MongoDB](https://www.mongodb.com/) is an open-source, document-oriented NoSQL database designed for scalability and flexibility, widely used for modern application development.

To collect MongoDB logs into Microsoft Sentinel:
- Configure MongoDB auditing by setting `dbpath` and `audit log path` in mongod.cfg/mongod.conf. See [MongoDB auditing docs](https://www.mongodb.com/docs/manual/tutorial/configure-auditing/).
- Configure a Data Collection Rule for the `MongoDBAudit_CL` table. Log locations — Windows: `C:\data\db\auditlog.json`, Linux: `/data/db/auditlog.json`. See [Custom Logs via AMA configuration](https://learn.microsoft.com/azure/sentinel/unified-connector-custom-device#mongodb-audit).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`MongoDBAudit_CL`](../tables/mongodbaudit-cl.md) | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

