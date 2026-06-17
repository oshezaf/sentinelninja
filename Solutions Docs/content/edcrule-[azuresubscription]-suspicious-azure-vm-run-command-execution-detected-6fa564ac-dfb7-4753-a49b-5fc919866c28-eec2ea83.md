# [AzureSubscription] Suspicious Azure VM Run Command Execution Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects Azure VM Run Command execution correlated with unusual sign-in behavior from UEBA. This can indicate administrative abuse or post-compromise activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [eDCRule](../solutions/edcrule.md) |
| **ID** | `6fa564ac-dfb7-4753-a49b-5fc919866c28` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement, CredentialAccess |
| **Techniques** | T1570, T1212 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/eDCRule/Analytic%20Rules/%5BAzureSubscription%5D%20Suspicious%20Azure%20VM%20Run%20Command%20Execution%20Detected.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AzureActivity`](../tables/azureactivity.md) | `Authorization has "virtualMachines"`<br>`Caller contains "@"`<br>`OperationNameValue == "MICROSOFT.COMPUTE/VIRTUALMACHINES/RUNCOMMAND/ACTION"` | ✗ | ✗ | ✗ |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | `EventSource == "Azure AD"` | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to eDCRule](../solutions/edcrule.md)

