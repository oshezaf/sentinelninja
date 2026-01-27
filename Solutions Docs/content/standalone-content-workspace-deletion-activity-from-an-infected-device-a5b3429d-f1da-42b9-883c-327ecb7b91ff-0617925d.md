# Workspace deletion activity from an infected device

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`AzureActivity`](../tables/azureactivity.md) | ✗ | ✗ |
| [`IdentityInfo`](../tables/identityinfo.md) | ✓ | ✗ |
| [`SecurityAlert`](../tables/securityalert.md) | ✓ | ✗ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectoryIdentityProtection](../connectors/azureactivedirectoryidentityprotection.md) | [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md) |
| [AzureActivity](../connectors/azureactivity.md) | [Azure Activity](../solutions/azure-activity.md) |
| [AzureAdvancedThreatProtection](../connectors/azureadvancedthreatprotection.md) | [Microsoft Defender for Identity](../solutions/microsoft-defender-for-identity.md) |
| [AzureSecurityCenter](../connectors/azuresecuritycenter.md) | [Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md) |
| [IoT](../connectors/iot.md) | [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md) |
| [MicrosoftCloudAppSecurity](../connectors/microsoftcloudappsecurity.md) | [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md) |
| [MicrosoftDefenderAdvancedThreatProtection](../connectors/microsoftdefenderadvancedthreatprotection.md) | [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) |
| [MicrosoftDefenderForCloudTenantBased](../connectors/microsoftdefenderforcloudtenantbased.md) | [Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md) |
| [OfficeATP](../connectors/officeatp.md) | [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md) |
| [OfficeIRM](../connectors/officeirm.md) | [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md) |

**Solutions:** [Azure Activity](../solutions/azure-activity.md), [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md), [Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md), [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md), [Microsoft Defender for Identity](../solutions/microsoft-defender-for-identity.md), [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md), [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md), [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md), [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

