# AAD Connect host remote admin followed by Entra privilege operation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query hunts for remote administration of a likely AAD Connect or sync host that is followed by privileged Entra audit activity by the same hybrid identity.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md) |
| **ID** | `c9b4347a-e5cf-4ca9-a58d-a9822c82467f` |
| **Tactics** | Persistence, PrivilegeEscalation, LateralMovement |
| **Techniques** | T1021.001, T1047, T1098, T1078.004 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hybrid%20Attack%20-%20Cloud%20%26%20Identity/Hunting%20Queries/LateralMovement/aad-connect-host-remote-admin-followed-by-entra-privilege-operation.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`IdentityInfo`](../tables/identityinfo.md) | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md)

