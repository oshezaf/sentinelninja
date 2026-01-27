# Suspicious VM Instance Creation Activity Detected

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`GCPAuditLogs`](../tables/gcpauditlogs.md) | ✓ | ✓ |
| [`IdentityInfo`](../tables/identityinfo.md) | ✓ | ✗ |
| [`SecurityAlert`](../tables/securityalert.md) | ✓ | ✗ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectoryIdentityProtection](../connectors/azureactivedirectoryidentityprotection.md) | [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md) |
| [AzureAdvancedThreatProtection](../connectors/azureadvancedthreatprotection.md) | [Microsoft Defender for Identity](../solutions/microsoft-defender-for-identity.md) |
| [AzureSecurityCenter](../connectors/azuresecuritycenter.md) | [Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md) |
| [GCPAuditLogsDefinition](../connectors/gcpauditlogsdefinition.md) | [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md) |
| [GCPPub/SubAuditLogs](../connectors/gcppub-subauditlogs.md) | [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md) |
| [IoT](../connectors/iot.md) | [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md) |
| [MicrosoftCloudAppSecurity](../connectors/microsoftcloudappsecurity.md) | [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md) |
| [MicrosoftDefenderAdvancedThreatProtection](../connectors/microsoftdefenderadvancedthreatprotection.md) | [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) |
| [MicrosoftDefenderForCloudTenantBased](../connectors/microsoftdefenderforcloudtenantbased.md) | [Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md) |
| [OfficeATP](../connectors/officeatp.md) | [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md) |
| [OfficeIRM](../connectors/officeirm.md) | [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md) |

**Solutions:** [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md), [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md), [Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md), [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md), [Microsoft Defender for Identity](../solutions/microsoft-defender-for-identity.md), [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md), [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md), [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md), [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

