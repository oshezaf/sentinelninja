# Novel identity then Key Vault secret burst

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects first-seen successful sign-in context followed by concentrated Key Vault secret list and get operations.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md) |
| **ID** | `7d8e22b3-2f90-4f2d-ae4d-bf2e8059cb11` |
| **Tactics** | Exfiltration, Discovery, CredentialAccess, Collection |
| **Techniques** | T1567, T1078.004, T1526, T1552.007 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActivity](../connectors/azureactivity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hybrid%20Attack%20-%20Cloud%20%26%20Identity/Hunting%20Queries/Exfiltration/novel-identity-followed-by-keyvault-secret-burst.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | ✓ | ✗ | ✓ |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | ✓ | ✗ | ✓ |
| [`AzureActivity`](../tables/azureactivity.md) | ✗ | ✗ | ✗ |
| [`SigninLogs`](../tables/signinlogs.md) | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md)

