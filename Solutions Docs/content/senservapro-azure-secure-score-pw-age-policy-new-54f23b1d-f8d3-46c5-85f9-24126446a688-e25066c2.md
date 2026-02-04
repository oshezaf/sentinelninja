# Azure secure score PW age policy new

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query searches for having found that when periodic password resets are enforced,  passwords become less secure. Users tend to pick a weaker password and vary it slightly for each reset.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [SenservaPro](../solutions/senservapro.md) |
| **ID** | `54F23B1D-F8D3-46C5-85F9-24126446A688` |
| **Tactics** | CredentialAccess |
| **Techniques** | T1555, T1606, T1040 |
| **Required Connectors** | [SenservaPro](../connectors/senservapro.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SenservaPro/Hunting%20Queries/AzureSecureScorePWAgePolicyNew.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SenservaPro_CL`](../tables/senservapro-cl.md) | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to SenservaPro](../solutions/senservapro.md)

