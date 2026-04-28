# Valimail Enforce - Bulk Domain Changes by Single User

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Hunt for users who have made configuration changes to an unusually high number of domains in a short period. May indicate a compromised admin account or unauthorized bulk reconfiguration.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [ValimailEnforce](../solutions/valimailenforce.md) |
| **ID** | `85db7cdc-378e-48b9-b6cf-77fd622aa617` |
| **Tactics** | Impact, DefenseEvasion |
| **Techniques** | T1562, T1098 |
| **Required Connectors** | [ValimailEnforce](../connectors/valimailenforce.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ValimailEnforce/Hunting%20Queries/ValimailEnforce_BulkChanges.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ValimailEnforceEvents_CL`](../tables/valimailenforceevents-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to ValimailEnforce](../solutions/valimailenforce.md)

