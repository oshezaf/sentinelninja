# [Entra ID] Domain Federation Trust Settings Modified

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects changes to domain federation trust settings or domain authentication mode. These changes can be used to redirect sign-in trust and should be reviewed immediately.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [eDCRule](../solutions/edcrule.md) |
| **ID** | `944d0ab5-b654-47f9-a398-2e77a0b7906e` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Persistence |
| **Techniques** | T1555, T1098 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/eDCRule/Analytic%20Rules/%5BEntra%20ID%5D%20Domain%20Federation%20Trust%20Settings%20Modified.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AuditLogs`](../tables/auditlogs.md) | `OperationName in "Set domain authentication,Set federation settings on domain"` | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to eDCRule](../solutions/edcrule.md)

