# OAuthAppInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Microsoft 365-connected OAuth applications registered with Microsoft Entra ID and available in the Defender for Cloud Apps app governance capability

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-oauthappinfo-table) |

## Schema (16 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/oauthappinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AddedOnTime | datetime | Date and time when the application was registered |
| AppName | string | The application's display name as exposed by the associated service principal |
| AppOrigin | string | Specifies whether the app is internal to the organization or registered in an external tenant |
| AppOwnerTenantId | string | Specifies the ID of the tenant where the app was registered |
| AppStatus | string | Status of the app; can be: Enabled, DisabledByMicrosoft, DisabledByAppGovernancePolicy, DisabledByUser, Deleted (information for apps with Deleted status is only available for 30 days since the app was deleted) |
| ConsentedUsersCount | integer | Count of users who have consented to the app; this information is only available when the app isn't admin consented |
| IsAdminConsented | boolean | Value is True if a user has provided admin consent to the app on behalf of all the users in the org, otherwise the value is False |
| LastModifiedTime | datetime | Timestamp when the app was last modified |
| LastUsedTime | datetime | Date and time when the app last signed in. Tracking of this data goes back to June, 2022 |
| OAuthAppId | string | The unique  identifier for the app as assigned by Microsoft Entra ID |
| Permissions | dynamic | Contains an array of permission objects; each permission object includes PermissionName, TargetAppId, TargetAppDisplayName, PermissionType, PrivilegeLevel, UsageStatus |
| PrivilegeLevel | string | The privilege level of the app based on the highest classified permission granted to the app |
| ReportId | string | Unique identifier for the record |
| ServicePrincipalId | string | The unique identifier for the service principal instance of the application in the tenant |
| Timestamp | datetime | Date and time when the record was created |
| VerifiedPublisher | dynamic | Specifies details about the verified publisher of the application which this service principal represents. It includes information such as: DisplayName, VerifiedPublisherId, AddedDateTime |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

