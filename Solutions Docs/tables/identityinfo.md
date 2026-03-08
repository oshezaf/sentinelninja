# IdentityInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Account information from various sources, including Microsoft Entra ID

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-identityinfo-table) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (46 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identityinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AccountDisplayName | string | Name of the account user displayed in the address book. Typically a combination of a given or first name, a middle initial, and a last name or surname. |
| AccountDomain* | string | Domain of the account |
| AccountName | string | User name of the account |
| AccountObjectId | string | Unique identifier for the account in Microsoft Entra ID |
| AccountUpn | string | User principal name (UPN) of the account |
| Address | string | Address of the account user |
| AssignedRoles* | dynamic | For identities from Microsoft Entra-only, the roles assigned to the account user |
| BlastRadius** | string | A calculation based on the position of the user in the org tree and the user's Microsoft Entra roles and permissions; possible values: Low, Medium, High |
| ChangeSource* | string | Identifies which identity provider or process triggered the addition of the new row. For example, theSystem-UserPersistencevalue is used for any rows added by an automated process. |
| City | string | City where the account user is located |
| CloudSid | string | Cloud security identifier of the account |
| CompanyName** | string | Name of the company for which the user works |
| Country | string | Country/Region where the account user is located |
| CreatedDateTime* | datetime | Date and time when the account user was created |
| CriticalityLevel | int | The criticality score of the account |
| DeletedDateTime** | datetime | Date and time when the user account was deleted |
| Department | string | Name of the department that the account user belongs to |
| DistinguishedName* | string | The user'sdistinguished name |
| EmailAddress | string | SMTP address of the account |
| EmployeeId** | string | Employee identifier assigned to the user by the organization |
| GivenName | string | Given name or first name of the account user |
| GroupMembership** | dynamic | Microsoft Entra ID groups where the user account is a member |
| IdentityEnvironment | string | Environment where the identity is used; possible values: CloudOnly, Hybrid, On-premises |
| IsAccountEnabled | boolean | Indicates whether the account is enabled or not |
| JobTitle | string | Job title of the account user |
| Manager* | string | The listed manager of the account user |
| OnPremObjectId | string | Active Directory object ID of the user |
| OnPremSid | string | On-premises security identifier (SID) of the account |
| OtherMailAddresses** | dynamic | Additional email addresses of the user account |
| Phone* | string | The listed phone number of the account user |
| PrivilegedEntraPimRoles(Preview)*** | dynamic | A snapshot of privileged role assignment schedules and eligibility schedules for the account as maintained by Microsoft Entra Privileged Identity Management (excluding activated assignments) |
| ReportId* | string | Unique identifier for the event |
| RiskLevel | string | Microsoft Entra ID risk level of the user account; possible values: Low, Medium, High |
| RiskLevelDetails | string | Details regarding the Microsoft Entra ID risk level |
| RiskStatus | string | Status of the user's risk; possible values: None, ConfirmedSafe, Remediated, Dismissed, AtRisk, ConfirmedCompromised, UnknownFutureValue |
| SipProxyAddress | string | Voice over IP (VOIP) session initiation protocol (SIP) address of the account |
| SourceProviders | dynamic | Source providers of the accounts for the identity; possible values: ActiveDirectory, EntraID, Okta |
| SourceSystem* | string | The source system for the record |
| State** | string | State where the sign-in occurred, if available |
| Surname | string | Surname, family name, or last name of the account user |
| Tags* | dynamic | Tags assigned to the account user by Defender for Identity |
| TenantId | string | Unique identifier representing your organization's instance of Microsoft Entra ID |
| TenantMembershipType | string | User type in Microsoft Entra ID; possible values: Guest, Member |
| Timestamp* | datetime | The date and time that the line was written to the database.This is used when there are multiple lines for each identity, such as when a change is detected, or if 24 hours have passed since the last database line was added. |
| Type* | string | Type of identity; possible values: User, ServiceAccount |
| UserAccountControl | string | Security attributes of the user account in the Active Directory domain |

## Solutions (17)

This table is used by the following solutions:

- [Azure Activity](../solutions/azure-activity.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)
- [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [UEBA Essentials](../solutions/ueba-essentials.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

---

## Content Items Using This Table (34)

### Analytic Rules (12)

**In solution [Azure Activity](../solutions/azure-activity.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Suspicious granting of permissions to an account](../content/azure-activity-suspicious-granting-of-permissions-to-an-account-b2c15736-b9eb-4dae-8b02-3016b6a45a32-6643d8bb.md) |  |

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Authentication Method Changed for Privileged Account](../content/business-email-compromise-financial-fraud-authentication-method-changed-for-privileged-account-feb0a2fb-ae75-4343-8cbc-ed545f1da289-05036a5e.md) |  |
| [Privileged Account Permissions Changed](../content/business-email-compromise-financial-fraud-privileged-account-permissions-changed-0433c8a3-9aa6-4577-beef-2ea23be41137-ddff1dcb.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Local Admin Group Changes](../content/microsoft-defender-xdr-local-admin-group-changes-63aa43c2-e88e-4102-aea5-0432851c541a-92e9a57c.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Authentication Methods Changed for Privileged Account](../content/microsoft-entra-id-authentication-methods-changed-for-privileged-account-694c91ee-d606-4ba9-928e-405a2dd0ff0f-513c9e02.md) |  |
| [MFA Rejected by User](../content/microsoft-entra-id-mfa-rejected-by-user-d99cf5c3-d660-436c-895b-8a8f8448da23-b3c993fb.md) |  |
| [Privileged Accounts - Sign in Failure Spikes](../content/microsoft-entra-id-privileged-accounts-sign-in-failure-spikes-34c5aff9-a8c2-4601-9654-c7e46342d03b-ebff2fbe.md) |  |
| [Successful logon from IP and failure from a different IP](../content/microsoft-entra-id-successful-logon-from-ip-and-failure-from-a-different-ip-02ef8d7e-fc3a-4d86-a457-650fa571d8d2-8d1712d5.md) |  |
| [User Accounts - Sign in Failure due to CA Spikes](../content/microsoft-entra-id-user-accounts-sign-in-failure-due-to-ca-spikes-3a9d5ede-2b9d-43a2-acc4-d272321ff77c-0daea6fb.md) |  |

**In solution [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Correlate Unfamiliar sign-in properties & atypical travel alerts](../content/microsoft-entra-id-protection-correlate-unfamiliar-sign-in-properties-&-atypical-travel-alerts-a3df4a32-4805-4c6d-8699-f3c888af2f67-965fe5ef.md) |  |

**In solution [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Successful AWS Console Login from IP Address Observed Conducting Password Spray](../content/multi-cloud-attack-coverage-essentials-resource-abuse-successful-aws-console-login-from-ip-address-obser-188db479-d50a-4a9c-a041-644bae347d1f-57aa98e4.md) |  |
| [Suspicious AWS console logins by credential access alerts](../content/multi-cloud-attack-coverage-essentials-resource-abuse-suspicious-aws-console-logins-by-credential-access-b51fe620-62ad-4ed2-9d40-5c97c0a8231f-dbe5a529.md) |  |

### Hunting Queries (14)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Login attempts using Legacy Auth](../content/business-email-compromise-financial-fraud-login-attempts-using-legacy-auth-b7918a0a-c6fe-4b6d-9111-b0b0c477f1a8-3c2feb3c.md) |  |
| [Microsoft Entra ID signins from new locations](../content/business-email-compromise-financial-fraud-microsoft-entra-id-signins-from-new-locations-41fa6e2d-afe9-4398-9356-cec3a927e44e-6ce1e4de.md) |  |
| [Risky Sign-in with new MFA method](../content/business-email-compromise-financial-fraud-risky-sign-in-with-new-mfa-method-bfacf634-c75e-4291-998c-ecbc0323d943-114a4a02.md) |  |
| [Successful Signin From Non-Compliant Device](../content/business-email-compromise-financial-fraud-successful-signin-from-non-compliant-device-99885ff5-00cf-49e8-9452-6de6aba2a5c7-20eaa2d1.md) |  |
| [User Accounts - Unusual authentications occurring when countries do not conduct normal business operations.](../content/business-email-compromise-financial-fraud-user-accounts-unusual-authentications-occurring-when-countries-f56b2223-0d4d-4347-9de4-822d195624ee-ea198d62.md) |  |
| [User Login IP Address Teleportation](../content/business-email-compromise-financial-fraud-user-login-ip-address-teleportation-09a7c5fc-0649-4f7d-a21b-36a754cef6b6-e3c0bf58.md) |  |

**In solution [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detect Disabled Account Sign-in Attempts by Account Name](../content/cloud-identity-threat-protection-essentials-detect-disabled-account-sign-in-attempts-by-account-name-b00f127c-46fa-40bd-9ab6-b266974d29cc-dff302a4.md) |  |
| [Sign-ins From VPS Providers](../content/cloud-identity-threat-protection-essentials-sign-ins-from-vps-providers-86490334-5371-40a2-971a-3749c2654954-088cc628.md) |  |
| [Sign-ins from Nord VPN Providers](../content/cloud-identity-threat-protection-essentials-sign-ins-from-nord-vpn-providers-cdc9b092-8a16-4559-9e5e-831877e8209a-d746cc8d.md) |  |
| [Suspicious Sign-ins to Privileged Account](../content/cloud-identity-threat-protection-essentials-suspicious-sign-ins-to-privileged-account-a73c52f2-b3a5-4fe4-be7d-4d59b8558590-502c7b31.md) |  |

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Identity management activity outside of privileged directory role membership](../content/microsoft-business-applications-dataverse-identity-management-activity-outside-of-privileged-directory-r-c7e6e48a-0514-4989-bc90-4a3c9207ede1-5ce4101d.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Local Admin Group Changes](../content/microsoft-defender-xdr-local-admin-group-changes-63142c12-5d8b-48cf-a0f6-b523c855497c-cbc59b70.md) |  |

**In solution [UEBA Essentials](../solutions/ueba-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Anomalous connection from highly privileged user](../content/ueba-essentials-anomalous-connection-from-highly-privileged-user-741fdf32-e002-4577-ac9b-839fb49f128e-22b5a707.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [User not covered under display name impersonation](../content/microsoft-defender-xdr-user-not-covered-under-display-name-impersonation-e90345b3-439c-44e1-a85d-8ae84ad9c65b-78c1a989.md) |  |

### Workbooks (8)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |  |

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

