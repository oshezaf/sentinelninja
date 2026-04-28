# Valimail Enforce - Configuration Change Rate Trend

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Hunt for configuration change and user addition activity grouped by user and domain over hourly buckets. Use this to establish baselines, spot unusual spikes, and investigate specific users or domains flagged by the corresponding analytics rule.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [ValimailEnforce](../solutions/valimailenforce.md) |
| **ID** | `ce30ce49-2eaf-483c-85cd-c27a645d5355` |
| **Tactics** | Impact, DefenseEvasion, PrivilegeEscalation |
| **Techniques** | T1562, T1098, T1078 |
| **Required Connectors** | [ValimailEnforce](../connectors/valimailenforce.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ValimailEnforce/Hunting%20Queries/ValimailEnforce_ChangeRateTrend.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ValimailEnforceEvents_CL`](../tables/valimailenforceevents-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to ValimailEnforce](../solutions/valimailenforce.md)

