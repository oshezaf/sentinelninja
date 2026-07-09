# IdentityInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for IdentityInfo table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identityinfo) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (57 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identityinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AccountCloudSID | string | The Azure AD security identifier of the account |
| AccountCreationTime | datetime | The date the user account was created (UTC) |
| AccountDisplayName | string | The user account display name |
| AccountDomain | string | Domain name of the user account |
| AccountName | string | User name of the account |
| AccountObjectId | string | The Azure Active Directory object ID for the account |
| AccountSID | string | The on premises security identifier of the account |
| AccountTenantId | string | The Azure Active Directory Tenant ID of the account |
| AccountUPN | string | User principal name of the account |
| AdditionalMailAddresses | dynamic | Additional email addresses of the user |
| Applications | string | All known applications this user account accessed |
| AssignedRoles | dynamic | AAD roles the user account is assigned to |
| BlastRadius | string | The potential impact of the user account in the org (low/medium/high) |
| ChangeSource | string | The source of the latest change of the entity |
| City | string | The city of the user account as defined in AAD |
| CompanyName | string | The name for the company in which the user works. |
| Country | string | The country of the user account as defined in AAD |
| DeletedDateTime | datetime | The date and time the user was deleted |
| Department | string | The user account department as defined in AAD |
| EmployeeId | string | The employee identifier assigned to the user by the organization |
| EntityRiskScore | dynamic | The risk score of the entity as part of the UEBA scoring process |
| ExtensionProperty | dynamic | ExtensionProperty fields from Azure AD |
| GivenName | string | The user account given name |
| GroupMembership | dynamic | Azure AD Groups the user account is a member |
| InvestigationPriority | int | The Investigation Priority score of the account |
| InvestigationPriorityPercentile | int | The account score compared to the organization |
| IsAccountEnabled | bool | Indication if the account is enabled in AAD or not |
| IsMFARegistered | bool | Indication if MFA is registered for this user account or not |
| IsServiceAccount | bool | The account is a service account. |
| JobTitle | string | The user account job title as defined in AAD |
| LastSeenDate | datetime | Date of the last activity observed in this account |
| MailAddress | string | The user account primary email address |
| Manager | string | The user accounts manager alias |
| OnPremisesDistinguishedName | string | Active Directory distinguished name (DN). A DN is a sequence of relative distinguished names (RDN) connected by commas. |
| OnPremisesExtensionAttributes | string | OnPremisesExtensionAttributes field from Azure AD |
| Phone | string | The phone number of the user account as defined in AAD |
| RelatedAccounts | dynamic | Various accounts that correlate to a certain user |
| RiskLevel | string | The AAD risk level (Low/Medium/High) of the user account |
| RiskLevelDetails | string | Details regarding the AAD risk level |
| RiskState | string | Indication if the account is at risk now or if the risk was remediated |
| SAMAccountName | string | The SAM account name of the account. |
| ServicePrincipals | dynamic | Azure AD service principals that are owned by the user |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| State | string | The geographical state of the user account as defined in AAD |
| StreetAddress | string | The office street address of the user account as defined in AAD |
| Surname | string | The user account surname |
| Tags | string | Relevant information on the user account which is important for investigation: Sensitive\ VIP\ Administrator |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time when the event was generated (UTC) |
| Type | string | The name of the table |
| UACFlags | string | User Access control flags from AD &amp; AAD |
| UserAccountControl | dynamic | Security attributes of the user account in the AD domain |
| UserState | string | The current state in AAD of the account (Active/Disabled/Dormant/Lockout) |
| UserStateChangedOn | datetime | Date of the last time the account state was changed (UTC) |
| UserType | string | The user type as appears in Azure AD |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [IdentityInfo Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identityinfo)

## Solutions (18)

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
- [eDCRule](../solutions/edcrule.md)

---

## Content Items Using This Table (35)

### Analytic Rules (13)

**In solution [Azure Activity](../solutions/azure-activity.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Suspicious granting of permissions to an account](../content/azure-activity-suspicious-granting-of-permissions-to-an-account-b2c15736-b9eb-4dae-8b02-3016b6a45a32-6643d8bb.md) |  |

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Authentication Method Changed for Privileged Account](../content/business-email-compromise-financial-fraud-authentication-method-changed-for-privileged-account-feb0a2fb-ae75-4343-8cbc-ed545f1da289-05036a5e.md) |  |
| [Privileged Account Permissions Changed](../content/business-email-compromise-financial-fraud-privileged-account-permissions-changed-0433c8a3-9aa6-4577-beef-2ea23be41137-ddff1dcb.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Local Admin Group Changes](../content/microsoft-defender-xdr-local-admin-group-changes-63aa43c2-e88e-4102-aea5-0432851c541a-92e9a57c.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Authentication Methods Changed for Privileged Account](../content/microsoft-entra-id-authentication-methods-changed-for-privileged-account-694c91ee-d606-4ba9-928e-405a2dd0ff0f-513c9e02.md) |  |
| [MFA Rejected by User](../content/microsoft-entra-id-mfa-rejected-by-user-d99cf5c3-d660-436c-895b-8a8f8448da23-b3c993fb.md) |  |
| [Privileged Accounts - Sign in Failure Spikes](../content/microsoft-entra-id-privileged-accounts-sign-in-failure-spikes-34c5aff9-a8c2-4601-9654-c7e46342d03b-ebff2fbe.md) |  |
| [Successful logon from IP and failure from a different IP](../content/microsoft-entra-id-successful-logon-from-ip-and-failure-from-a-different-ip-02ef8d7e-fc3a-4d86-a457-650fa571d8d2-8d1712d5.md) |  |
| [User Accounts - Sign in Failure due to CA Spikes](../content/microsoft-entra-id-user-accounts-sign-in-failure-due-to-ca-spikes-3a9d5ede-2b9d-43a2-acc4-d272321ff77c-0daea6fb.md) |  |

**In solution [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Correlate Unfamiliar sign-in properties & atypical travel alerts](../content/microsoft-entra-id-protection-correlate-unfamiliar-sign-in-properties-&-atypical-travel-alerts-a3df4a32-4805-4c6d-8699-f3c888af2f67-965fe5ef.md) |  |

**In solution [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Successful AWS Console Login from IP Address Observed Conducting Password Spray](../content/multi-cloud-attack-coverage-essentials-resource-abuse-successful-aws-console-login-from-ip-address-obser-188db479-d50a-4a9c-a041-644bae347d1f-57aa98e4.md) |  |
| [Suspicious AWS console logins by credential access alerts](../content/multi-cloud-attack-coverage-essentials-resource-abuse-suspicious-aws-console-logins-by-credential-access-b51fe620-62ad-4ed2-9d40-5c97c0a8231f-dbe5a529.md) |  |

**In solution [eDCRule](../solutions/edcrule.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [[Entra ID] Authentication Method Changed for Privileged Account](../content/edcrule-[entra-id]-authentication-method-changed-for-privileged-account-9f7197b6-eeb2-46f3-83b1-a2c4dfca46a0-e18c8380.md) |  |

### Hunting Queries (14)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Login attempts using Legacy Auth](../content/business-email-compromise-financial-fraud-login-attempts-using-legacy-auth-b7918a0a-c6fe-4b6d-9111-b0b0c477f1a8-3c2feb3c.md) |  |
| [Microsoft Entra ID signins from new locations](../content/business-email-compromise-financial-fraud-microsoft-entra-id-signins-from-new-locations-41fa6e2d-afe9-4398-9356-cec3a927e44e-6ce1e4de.md) |  |
| [Risky Sign-in with new MFA method](../content/business-email-compromise-financial-fraud-risky-sign-in-with-new-mfa-method-bfacf634-c75e-4291-998c-ecbc0323d943-114a4a02.md) |  |
| [Successful Signin From Non-Compliant Device](../content/business-email-compromise-financial-fraud-successful-signin-from-non-compliant-device-99885ff5-00cf-49e8-9452-6de6aba2a5c7-20eaa2d1.md) |  |
| [User Accounts - Unusual authentications occurring when countries do not conduct normal business operations.](../content/business-email-compromise-financial-fraud-user-accounts-unusual-authentications-occurring-when-countries-f56b2223-0d4d-4347-9de4-822d195624ee-ea198d62.md) |  |
| [User Login IP Address Teleportation](../content/business-email-compromise-financial-fraud-user-login-ip-address-teleportation-09a7c5fc-0649-4f7d-a21b-36a754cef6b6-e3c0bf58.md) |  |

**In solution [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Detect Disabled Account Sign-in Attempts by Account Name](../content/cloud-identity-threat-protection-essentials-detect-disabled-account-sign-in-attempts-by-account-name-b00f127c-46fa-40bd-9ab6-b266974d29cc-dff302a4.md) |  |
| [Sign-ins From VPS Providers](../content/cloud-identity-threat-protection-essentials-sign-ins-from-vps-providers-86490334-5371-40a2-971a-3749c2654954-088cc628.md) |  |
| [Sign-ins from Nord VPN Providers](../content/cloud-identity-threat-protection-essentials-sign-ins-from-nord-vpn-providers-cdc9b092-8a16-4559-9e5e-831877e8209a-d746cc8d.md) |  |
| [Suspicious Sign-ins to Privileged Account](../content/cloud-identity-threat-protection-essentials-suspicious-sign-ins-to-privileged-account-a73c52f2-b3a5-4fe4-be7d-4d59b8558590-502c7b31.md) |  |

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Identity management activity outside of privileged directory role membership](../content/microsoft-business-applications-dataverse-identity-management-activity-outside-of-privileged-directory-r-c7e6e48a-0514-4989-bc90-4a3c9207ede1-5ce4101d.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Local Admin Group Changes](../content/microsoft-defender-xdr-local-admin-group-changes-63142c12-5d8b-48cf-a0f6-b523c855497c-cbc59b70.md) |  |

**In solution [UEBA Essentials](../solutions/ueba-essentials.md):** `BlastRadius == "High"`

| Hunting Query |
|:-------------|
| [Anomalous connection from highly privileged user](../content/ueba-essentials-anomalous-connection-from-highly-privileged-user-741fdf32-e002-4577-ac9b-839fb49f128e-22b5a707.md) |

**GitHub Only:**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [User not covered under display name impersonation](../content/microsoft-defender-xdr-user-not-covered-under-display-name-impersonation-e90345b3-439c-44e1-a85d-8ae84ad9c65b-78c1a989.md) |  |

### Workbooks (8)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |  |

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):** `AssignedRoles contains "Admin"`<br>`AssignedRoles contains "admin"`<br>`AssignedRoles contains "contributor"`<br>`AssignedRoles contains "owner"`

| Workbook |
|:-------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):** `BlastRadius == "High"`

| Workbook |
|:-------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

## Selection Criteria Summary (2 criteria, 3 total references)

References by type: 0 connectors, 3 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `BlastRadius == "High"` | - | 2 | - | - | **2** |
| `AssignedRoles contains "Admin"`<br>`AssignedRoles contains "admin"`<br>`AssignedRoles contains "contributor"`<br>`AssignedRoles contains "owner"` | - | 1 | - | - | **1** |
| **Total** | **0** | **3** | **0** | **0** | **3** |

### AssignedRoles

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains Admin` | - | 1 | - | - | **1** |
| `contains admin` | - | 1 | - | - | **1** |
| `contains contributor` | - | 1 | - | - | **1** |
| `contains owner` | - | 1 | - | - | **1** |

### BlastRadius

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `High` | - | 2 | - | - | **2** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

