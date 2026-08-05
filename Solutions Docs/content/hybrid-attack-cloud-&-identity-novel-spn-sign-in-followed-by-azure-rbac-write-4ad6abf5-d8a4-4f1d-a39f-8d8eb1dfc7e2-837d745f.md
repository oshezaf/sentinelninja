# Novel SPN sign-in followed by Azure RBAC write

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Hunts for new service principal sign-in behavior followed by RBAC role assignment or role definition write operations.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md) |
| **ID** | `4ad6abf5-d8a4-4f1d-a39f-8d8eb1dfc7e2` |
| **Tactics** | PrivilegeEscalation, Persistence, DefenseEvasion |
| **Techniques** | T1078.004, T1098.003, T1526 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActivity](../connectors/azureactivity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hybrid%20Attack%20-%20Cloud%20%26%20Identity/Hunting%20Queries/DefenseEvasion/novel-spn-signin-followed-by-rbac-write.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | ✓ | ✗ | ✓ |
| [`AzureActivity`](../tables/azureactivity.md) | ✗ | ✗ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md)

