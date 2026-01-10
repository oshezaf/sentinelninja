# Insider Risk_Risky User Access By Application

'This alert evaluates Microsoft Entra ID Sign in risk via Machine Learning correlations in the basket operator. The basket threshold is adjustable, and the default is set to .01. There is an optional configuration to configure the percentage rates. The correlations are designed to leverage machine learning to identify patterns of risky user application access. There is an option for configuration of correlations against Microsoft Sentinel watchlists. For more information, see [Tutorial: Use risk

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md) |
| **ID** | `15386bba-dc70-463f-a09f-d392e7731c63` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Execution |
| **Techniques** | T1204 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftPurviewInsiderRiskManagement/Analytic%20Rules/InsiderRiskyAccessByApplication.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

