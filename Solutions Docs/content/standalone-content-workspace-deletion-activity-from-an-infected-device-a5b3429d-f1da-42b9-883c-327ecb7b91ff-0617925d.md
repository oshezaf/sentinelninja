# Workspace deletion activity from an infected device

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This query will alert on any sign-ins from devices infected with malware in correlation with workspace deletion activity.  Attackers may attempt to delete workspaces containing compute instances after successful compromise to cause service unavailability to regular business operation.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `a5b3429d-f1da-42b9-883c-327ecb7b91ff` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Impact |
| **Techniques** | T1078, T1489 |
| **Required Connectors** | [AzureActiveDirectoryIdentityProtection](../connectors/azureactivedirectoryidentityprotection.md), [AzureActivity](../connectors/azureactivity.md), [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/SecurityAlert/Suspicious_WorkSpaceDeletion_Attempt.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

