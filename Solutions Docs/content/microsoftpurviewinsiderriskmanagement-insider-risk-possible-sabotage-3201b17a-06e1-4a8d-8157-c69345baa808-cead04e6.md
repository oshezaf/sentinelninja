# Insider Risk_Possible Sabotage

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This query correlates users with entity anomalies, security alerts, and delete/remove actions for identification of possible sabotage activities (watchlists configurable). For more information, see https://docs.microsoft.com/azure/sentinel/watchlists

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md) |
| **ID** | `3201b17a-06e1-4a8d-8157-c69345baa808` |
| **Tactics** | Impact |
| **Techniques** | T1485 |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md), [MicrosoftDefenderAdvancedThreatProtection](../connectors/microsoftdefenderadvancedthreatprotection.md), [AzureActiveDirectoryIdentityProtection](../connectors/azureactivedirectoryidentityprotection.md), [AzureSecurityCenter](../connectors/azuresecuritycenter.md), [IoT](../connectors/iot.md), [MicrosoftCloudAppSecurity](../connectors/microsoftcloudappsecurity.md), [IoT](../connectors/iot.md), [OfficeATP](../connectors/officeatp.md), [AzureActivity](../connectors/azureactivity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftPurviewInsiderRiskManagement/Hunting%20Queries/InsiderPossibleSabotage.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AzureActivity`](../tables/azureactivity.md) | `OperationName contains "delete"`<br>`OperationName contains "remove"` | ✗ | ✗ | ✗ |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)

