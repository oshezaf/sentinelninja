# Solorigate Defender Detections

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Surfaces any Defender Alert for Solorigate Events. In Microsoft Sentinel the SecurityAlerts table includes only the Device Name of the affected device, this query joins the DeviceInfo table to clearly connect other information such as  Device group, ip, logged on users etc. This way, the Microsoft Sentinel user can have all the pertinent device info in one view for all the the Solarigate Defender alerts.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `e70fa6e0-796a-4e85-9420-98b17b0bb749` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1195 |
| **Required Connectors** | [MicrosoftDefenderAdvancedThreatProtection](../connectors/microsoftdefenderadvancedthreatprotection.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/SecurityAlert/Solorigate-Defender-Detections.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`DeviceInfo`](../tables/deviceinfo.md) | ✓ | ✗ |
| [`SecurityAlert`](../tables/securityalert.md) | ✓ | ✗ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectoryIdentityProtection](../connectors/azureactivedirectoryidentityprotection.md) | [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md) |
| [AzureAdvancedThreatProtection](../connectors/azureadvancedthreatprotection.md) | [Microsoft Defender for Identity](../solutions/microsoft-defender-for-identity.md) |
| [AzureSecurityCenter](../connectors/azuresecuritycenter.md) | [Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md) |
| [IoT](../connectors/iot.md) | [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md) |
| [MicrosoftCloudAppSecurity](../connectors/microsoftcloudappsecurity.md) | [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md) |
| [MicrosoftDefenderAdvancedThreatProtection](../connectors/microsoftdefenderadvancedthreatprotection.md) | [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) |
| [MicrosoftDefenderForCloudTenantBased](../connectors/microsoftdefenderforcloudtenantbased.md) | [Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md) |
| [OfficeATP](../connectors/officeatp.md) | [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md) |
| [OfficeIRM](../connectors/officeirm.md) | [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md) |

**Solutions:** [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md), [Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md), [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md), [Microsoft Defender for Identity](../solutions/microsoft-defender-for-identity.md), [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md), [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md), [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md), [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

