# Suspicious VM Instance Creation Activity Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

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

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`GCPAuditLogs`](../tables/gcpauditlogs.md) | `MethodName endswith "instances.insert"`<br>`ServiceName == "compute.googleapis.com"` | ✓ | ✓ | ✓ |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ | ? |
| [`SecurityAlert`](../tables/securityalert.md) | `AlertSeverity has_any "Medium"`<br>`ProductName in "Azure Active Directory,Azure Active Directory Identity Protection,Microsoft 365 Defender,Microsoft Cloud App Security,Microsoft Defender ATP,Microsoft Defender Advanced Threat Protection"` | ✓ | ✗ | ✓ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectoryIdentityProtection](../connectors/azureactivedirectoryidentityprotection.md) | [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md) |
| [GCPAuditLogsDefinition](../connectors/gcpauditlogsdefinition.md) | [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md) |
| [GCPPub/SubAuditLogs](../connectors/gcppub-subauditlogs.md) | [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md) |
| [MicrosoftCloudAppSecurity](../connectors/microsoftcloudappsecurity.md) | [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md) |

**Solutions:** [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md), [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md), [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

