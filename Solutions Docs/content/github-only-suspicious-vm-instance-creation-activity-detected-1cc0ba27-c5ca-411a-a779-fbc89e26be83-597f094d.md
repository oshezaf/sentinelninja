# Suspicious VM Instance Creation Activity Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This detection identifies high-severity alerts across various Microsoft security products, including Microsoft Defender XDR and Microsoft Entra ID, and correlates them with instances of Google Cloud VM creation. It focuses on instances where VMs were created within a short timeframe of high-severity alerts, potentially indicating suspicious activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | GitHub Only |
| **ID** | `1cc0ba27-c5ca-411a-a779-fbc89e26be83` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution, Discovery |
| **Techniques** | T1078, T1106, T1526 |
| **Required Connectors** | [GCPAuditLogsDefinition](../connectors/gcpauditlogsdefinition.md), [AzureActiveDirectoryIdentityProtection](../connectors/azureactivedirectoryidentityprotection.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [MicrosoftDefenderAdvancedThreatProtection](../connectors/microsoftdefenderadvancedthreatprotection.md), [MicrosoftCloudAppSecurity](../connectors/microsoftcloudappsecurity.md), [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/SuspiciousVMInstanceCreationActivity.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

