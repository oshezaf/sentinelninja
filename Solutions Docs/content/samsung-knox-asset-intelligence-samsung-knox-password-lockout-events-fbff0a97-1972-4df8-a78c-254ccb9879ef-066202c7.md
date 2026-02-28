# Samsung Knox - Password Lockout Events

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

When maximum password attempts have been reached, and the Knox device is locked out. This is based on a threshold set in the MDM device policy

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md) |
| **ID** | `fbff0a97-1972-4df8-a78c-254ccb9879ef` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | NRT |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [SamsungDCDefinition](../connectors/samsungdcdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Samsung%20Knox%20Asset%20Intelligence/Analytic%20Rules/SamsungKnoxPasswordLockout.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Samsung_Knox_User_CL`](../tables/samsung-knox-user-cl.md) � | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md)

