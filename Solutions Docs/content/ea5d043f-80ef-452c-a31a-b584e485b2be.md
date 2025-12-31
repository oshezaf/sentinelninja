# Insider Risk_Entity Anomaly Followed by IRM Alert

This query joins Microsoft Sentinel Entity Insights with Microsoft Purview Insider Risk Management Alerts. There is also an option for configuration of correlations against watchlists. For more information, see https://docs.microsoft.com/azure/sentinel/watchlists

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md) |
| **ID** | `ea5d043f-80ef-452c-a31a-b584e485b2be` |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1078 |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md), [OfficeATP](../connectors/officeatp.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftPurviewInsiderRiskManagement/Hunting%20Queries/InsiderEntityAnomalyFollowedByIRMAlert.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
