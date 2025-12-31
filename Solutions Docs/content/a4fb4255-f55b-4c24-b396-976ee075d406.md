# Insider Risk_High User Security Alert Correlations

'This alert joins SecurityAlerts from Microsoft Products with SecurityIncidents from Microsoft Sentinel and Microsoft Defender XDR. This join allows for identifying patterns in user principal names associated with respective security alerts. A machine learning function (Basket) is leveraged with a .001 threshold. Baset finds all frequent patterns of discrete attributes (dimensions) in the data. It returns the frequent patterns passed the frequency threshold. This query evaluates UserPrincipalNam

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md) |
| **ID** | `a4fb4255-f55b-4c24-b396-976ee075d406` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Execution |
| **Techniques** | T1204 |
| **Required Connectors** | [MicrosoftDefenderAdvancedThreatProtection](../connectors/microsoftdefenderadvancedthreatprotection.md), [AzureActiveDirectoryIdentityProtection](../connectors/azureactivedirectoryidentityprotection.md), [AzureSecurityCenter](../connectors/azuresecuritycenter.md), [IoT](../connectors/iot.md), [MicrosoftCloudAppSecurity](../connectors/microsoftcloudappsecurity.md), [IoT](../connectors/iot.md), [OfficeATP](../connectors/officeatp.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftPurviewInsiderRiskManagement/Analytic%20Rules/InsiderRiskHighUserAlertsCorrelation.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
