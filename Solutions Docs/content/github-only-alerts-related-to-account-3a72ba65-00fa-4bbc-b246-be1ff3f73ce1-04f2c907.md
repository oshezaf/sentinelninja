# Alerts related to account

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Any Alerts that fired related to a given account during the range of +6h and -3d

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `3a72ba65-00fa-4bbc-b246-be1ff3f73ce1` |
| **Tactics** | Persistence, Discovery, LateralMovement, Collection |
| **Required Connectors** | [AzureSecurityCenter](../connectors/azuresecuritycenter.md), [MicrosoftCloudAppSecurity](../connectors/microsoftcloudappsecurity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/SecurityAlert/AlertsForUser.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
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

↑ [Back to Hunting Queries](hunting-queries.md)

