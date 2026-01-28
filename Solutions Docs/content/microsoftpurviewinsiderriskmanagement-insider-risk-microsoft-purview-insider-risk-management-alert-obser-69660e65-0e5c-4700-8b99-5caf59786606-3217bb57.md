# Insider Risk_Microsoft Purview Insider Risk Management Alert Observed

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'This alert is triggered when a Microsoft Purview Insider Risk Management alert is recieved in Microsoft Sentinel via the Microsoft Purview Insider Risk Management Connector. The alert extracts usernames from security alerts to provide UserPrincipalName, Alert Name, Reporting Product Name, Status, Alert Link, Previous Alerts Links, Time Generated. There is an option for configuration of correlations against Microsoft Sentinel watchlists. For more information, see [Learn about insider risk manage

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md) |
| **ID** | `69660e65-0e5c-4700-8b99-5caf59786606` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Execution |
| **Techniques** | T1204 |
| **Required Connectors** | [OfficeATP](../connectors/officeatp.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftPurviewInsiderRiskManagement/Analytic%20Rules/InsiderRiskM365IRMAlertObserved.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SecurityAlert`](../tables/securityalert.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)

