# Insider Risk_Multiple Entity-Based Anomalies

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query returns entity counts by anomaly and user principal name including ranges for start/end time observed (watchlists configurable). For more information, see https://docs.microsoft.com/azure/sentinel/watchlists

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md) |
| **ID** | `3bc01058-ce23-45ba-a7e9-409d844b12dc` |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1078 |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftPurviewInsiderRiskManagement/Hunting%20Queries/InsiderMultipleEntityAnomalies.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)

