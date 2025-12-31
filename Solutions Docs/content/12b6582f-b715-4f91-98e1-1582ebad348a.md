# Insider Risk_ISP Anomaly to Exfil

This query joins UEBA to Security Alerts from Microsoft products for a correlation of Internet Service Provider anomalies to data exfiltration (watchlist options). For more information, see https://docs.microsoft.com/azure/sentinel/watchlists

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md) |
| **ID** | `12b6582f-b715-4f91-98e1-1582ebad348a` |
| **Tactics** | Exfiltration |
| **Techniques** | T1567 |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md), [MicrosoftDefenderAdvancedThreatProtection](../connectors/microsoftdefenderadvancedthreatprotection.md), [AzureActiveDirectoryIdentityProtection](../connectors/azureactivedirectoryidentityprotection.md), [AzureSecurityCenter](../connectors/azuresecuritycenter.md), [IoT](../connectors/iot.md), [MicrosoftCloudAppSecurity](../connectors/microsoftcloudappsecurity.md), [IoT](../connectors/iot.md), [OfficeATP](../connectors/officeatp.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftPurviewInsiderRiskManagement/Hunting%20Queries/InsiderISPAnomalyCorrelatedToExfiltrationAlert.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`BehaviorAnalytics`](../tables/behavioranalytics.md)
- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
