# EntraIdSignInEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Microsoft Entra interactive and non-interactive sign-ins

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-entraidsigninevents-table) |

## Schema (44 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/entraidsigninevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AccountDisplayName | string | Name displayed in the address book entry for the account user. This is usually a combination of the given name, middle initial, and surname of the user. |
| AccountObjectId | string | Unique identifier for the account in Microsoft Entra ID |
| AccountUpn | string | User principal name (UPN) of the account |
| AlternateSignInName | string | On-premises user principal name (UPN) of the user signing in to Microsoft Entra ID |
| Application | string | Application that performed the recorded action |
| ApplicationId | string | Unique identifier for the application |
| AuthenticationProcessingDetails | string | Details about the authentication processor |
| AuthenticationRequirement | string | Type of authentication required for the sign-in. Possible values: multiFactorAuthentication (MFA was required) and singleFactorAuthentication (no MFA was required). |
| Browser | string | Details about the version of the browser used to sign in |
| City | string | City where the account user is located |
| ClientAppUsed | string | Indicates the client app used |
| ConditionalAccessPolicies | string | Details of the conditional access policies applied to the sign-in event |
| ConditionalAccessStatus | int | Status of the conditional access policies applied to the sign-in. Possible values are 0 (policies applied), 1 (attempt to apply policies failed), or 2 (policies not applied). |
| CorrelationId | string | Identifier of the sign-in event |
| Country | string | Two-letter code indicating the country/region where the client IP address is geolocated |
| DeviceName | string | Fully qualified domain name (FQDN) of the device |
| DeviceTrustType | string | Indicates the trust type of the device that signed in. For managed device scenarios only. Possible values are Workplace, AzureAd, and ServerAd. |
| EndpointCall | string | Information about the Microsoft Entra ID endpoint that the request was sent to and the type of request sent during sign in. |
| EntraIdDeviceId | string | Unique identifier for the device in Microsoft Entra ID |
| ErrorCode | int | Contains the error code if a sign-in error occurs. To find a description of a specific error code, visithttps://aka.ms/AADsigninsErrorCodes. |
| IPAddress | string | IP address assigned to the device during communication |
| IsCompliant | int | Indicates whether the device that initiated the sign-in is compliant (1) or non-compliant (0) |
| IsExternalUser | int | Indicates if the user that signed in is external. Possible values: -1 (not set), 0 (not external), 1 (external). |
| IsGuestUser | boolean | Indicates whether the user that signed in is a guest in the tenant |
| IsManaged | int | Indicates whether the device that initiated the sign-in is a managed device (1) or not a managed device (0) |
| LastPasswordChangeTimestamp | datetime | Date and time when the user that signed in last changed their password |
| Latitude | string | The north to south coordinates of the sign-in location |
| LogonType | string | Type of logon session, specifically interactive, remote interactive (RDP), network, batch, and service |
| Longitude | string | The east to west coordinates of the sign-in location |
| NetworkLocationDetails | string | Network location details of the authentication processor of the sign-in event |
| OSPlatform | string | Platform of the operating system running on the device. Indicates specific operating systems, including variations within the same family, such as Windows 11, Windows 10, and Windows 7. |
| ReportId | string | Unique identifier for the event |
| RequestId | string | Unique identifier of the request |
| ResourceDisplayName | string | Display name of the resource accessed. The display name can contain any character. |
| ResourceId | string | Unique identifier of the resource accessed |
| ResourceTenantId | string | Unique identifier of the tenant of the resource accessed |
| RiskDetails | int | Details about the risky state of the user that signed in |
| RiskLevelAggregated | int | Aggregated risk level during sign-in. Possible values: 0 (aggregated risk level not set), 1 (none), 10 (low), 50 (medium), or 100 (high). |
| RiskState | int | Indicates risky user state. Possible values: 0 (none), 1 (confirmed safe), 2 (remediated), 3 (dismissed), 4 (at risk), or 5 (confirmed compromised). |
| SessionId | string | Unique number assigned to a user by a website's server for the duration of the visit or session |
| State | string | State where the sign-in occurred, if available |
| Timestamp | datetime | Date and time when the record was generated |
| TokenIssuerType | int | Indicates if the token issuer is Microsoft Entra ID (0) or Active Directory Federation Services (1) |
| UserAgent | string | User agent information from the web browser or other client application |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

