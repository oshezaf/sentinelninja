# Mass Download & copy to USB device by single user

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query looks for any mass download by a single user with possible file copy activity to a new USB drive. Malicious insiders may perform such activities that may cause harm to the organization.  This query could also reveal unintentional insider that had no intention of malicious activity but their actions may impact an organizations security posture. Reference:https://docs.microsoft.com/defender-cloud-apps/policy-template-reference

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `6267ce44-1e9d-471b-9f1e-ae76a6b7aa84` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1052 |
| **Required Connectors** | [MicrosoftCloudAppSecurity](../connectors/microsoftcloudappsecurity.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/SecurityAlert/Massdownload_USBFileCopy.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`CloudAppEvents`](../tables/cloudappevents.md) |  | ✓ | ✗ |
| [`DeviceEvents`](../tables/deviceevents.md) | `ActionType in "FileCreated,FileDownloaded,FileRenamed,UsbDriveMounted"` | ✓ | ✗ |
| [`DeviceFileEvents`](../tables/devicefileevents.md) |  | ✓ | ✗ |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

