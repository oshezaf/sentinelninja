# Account created from non-approved sources

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query looks for an account being created from a domain that is not regularly seen in a tenant.   Attackers may attempt to add accounts from these sources as a means of establishing persistant access to an environment.   Created accounts should be investigated to confirm expected creation.   Ref: https://docs.microsoft.com/azure/active-directory/fundamentals/security-operations-user-accounts#short-lived-accounts

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `99d589fa-7337-40d7-91a0-c96d0c4fa437` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1136.003 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/Accountcreatedfromnon-approvedsources.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

