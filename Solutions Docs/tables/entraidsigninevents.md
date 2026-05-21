# EntraIdSignInEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Microsoft Entra interactive and non-interactive sign-ins

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-entraidsigninevents-table) |

## Schema (45 columns)

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
| IsConfidentialClient | boolean | Indicates if the sign in was done via confidential client applications |
| IsExternalUser | int | Indicates if the user that signed in is external. Possible values: -1 (not set), 0 (not external), 1 (external). |
| IsGuestUser | boolean | Indicates if the sign in was done via confidential client applications |
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

## Content Items Using This Table (11)

### Hunting Queries (11)

**GitHub Only:**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Automated email notifications and suspicious sign-in activity](../content/github-only-automated-email-notifications-and-suspicious-sign-in-activity-a7acfaf4-e03e-409d-a16e-dcde33f7dba3-fb7feb7d.md) |  |
| [Email containing malware accessed on a unmanaged device](../content/github-only-email-containing-malware-accessed-on-a-unmanaged-device-439f817c-845c-4dda-a8d9-5c1f6831cee9-2e5f8871.md) |  |
| [EncodedDomainURL [Nobelium]](../content/github-only-encodeddomainurl-[nobelium]-c561bf69-6a6c-4d0a-960a-b69e0e7c8f51-72f5ce64.md) |  |
| [Possible device code phishing attempts](../content/github-only-possible-device-code-phishing-attempts-ad76e484-f159-4d23-99ee-e734f0b8b60b-15c72fc2.md) |  |
| [Risky Sign-in with Device Registration](../content/github-only-risky-sign-in-with-device-registration-ce2b03f8-92a4-4ec7-b55b-e9fa562fafa4-dede1503.md) |  |
| [Risky Sign-in with ElevateAccess](../content/github-only-risky-sign-in-with-elevateaccess-158b565b-411b-4dec-81de-2d2bcaf0c34c-455b10c6.md) | `ErrorCode == "0"` |
| [Risky Sign-in with new MFA method](../content/github-only-risky-sign-in-with-new-mfa-method-0f57238b-e764-4246-b101-f78bf8c942a7-1eead4d6.md) |  |
| [Risky sign-in attempt from a non-managed device](../content/github-only-risky-sign-in-attempt-from-a-non-managed-device-8d298b5c-feca-4add-bd42-e43e0a317a88-78c04c24.md) | `ClientAppUsed == "Browser"`<br>`IsCompliant != "1"`<br>`IsManaged != "1"` |
| [Suspicious sign-in attempts from QR code phishing campaigns](../content/github-only-suspicious-sign-in-attempts-from-qr-code-phishing-campaigns-3131d0ba-32c9-483e-a25c-82e26a07e116-57676ddf.md) |  |
| [Unusual volume of file deletion by user.](../content/github-only-unusual-volume-of-file-deletion-by-user.-611ebbc2-c789-42ad-93e3-6dc02bfa5e3d-b849c152.md) |  |
| [Unusual volume of file sharing with external user.](../content/github-only-unusual-volume-of-file-sharing-with-external-user.-bafc1446-1cc4-4f6d-ad76-1250b8c3b60c-2e8e1831.md) |  |

## Selection Criteria Summary (2 criteria, 2 total references)

References by type: 0 connectors, 2 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ErrorCode == "0"` | - | 1 | - | - | **1** |
| `ClientAppUsed == "Browser"`<br>`IsCompliant != "1"`<br>`IsManaged != "1"` | - | 1 | - | - | **1** |
| **Total** | **0** | **2** | **0** | **0** | **2** |

### ClientAppUsed

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Browser` | - | 1 | - | - | **1** |

### ErrorCode

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `0` | - | 1 | - | - | **1** |

### IsCompliant

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= 1` | - | 1 | - | - | **1** |

### IsManaged

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= 1` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

