# Attempt to bypass conditional access rule in Microsoft Entra ID

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Identifies an attempt to Bypass conditional access rule(s) in Microsoft Entra ID. The ConditionalAccessStatus column value details if there was an attempt to bypass Conditional Access or if the Conditional access rule was not satisfied (ConditionalAccessStatus == 1). References: https://docs.microsoft.com/azure/active-directory/conditional-access/overview https://docs.microsoft.com/azure/active-directory/reports-monitoring/concept-sign-ins https://docs.microsoft.com/azure/active-directory/repor

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **ID** | `3af9285d-bb98-4a35-ad29-5ea39ba0c628` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Persistence |
| **Techniques** | T1078, T1098 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Analytic%20Rules/BypassCondAccessRule.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Entra ID](../solutions/microsoft-entra-id.md)

