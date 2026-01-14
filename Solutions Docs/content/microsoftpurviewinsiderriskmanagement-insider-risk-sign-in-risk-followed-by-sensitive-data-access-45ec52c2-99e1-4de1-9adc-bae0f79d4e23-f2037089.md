# Insider Risk_Sign In Risk Followed By Sensitive Data Access

This query correlates a risky user sign ins with access to sensitive data classified by data loss prevention capabilities (watchlist configurable). For more information, see https://docs.microsoft.com/azure/sentinel/watchlists

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md) |
| **ID** | `45ec52c2-99e1-4de1-9adc-bae0f79d4e23` |
| **Tactics** | Exfiltration |
| **Techniques** | T1567 |
| **Required Connectors** | [AzureInformationProtection](../connectors/azureinformationprotection.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftPurviewInsiderRiskManagement/Hunting%20Queries/InsiderSignInRiskFollowedBySensitiveDataAccessyaml.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md)
- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)

