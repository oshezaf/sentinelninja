# Insider Risk_Sensitive Data Access Outside Organizational Geo-location

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'This alert joins Azure Information Protection Logs (InformationProtectionLogs_CL) with Microsoft Entra ID Sign in Logs (SigninLogs) to provide a correlation of sensitive data access by geo-location. Results include User Principal Name, Label Name, Activity, City, State, Country/Region, and Time Generated. Recommended configuration is to include (or exclude) Sign in geo-locations (City, State, Country and/or Region) for trusted organizational locations. There is an option for configuration of co

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md) |
| **ID** | `b81ed294-28cf-48c3-bac8-ac60dcef293b` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1567 |
| **Required Connectors** | [AzureInformationProtection](../connectors/azureinformationprotection.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftPurviewInsiderRiskManagement/Analytic%20Rules/InsiderRiskSensitiveDataAccessOutsideOrgGeo.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) | — | — |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)

