# SigninLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SigninLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources, Security |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/signinlogs) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)
- [Resource Types](#resource-types)

## Schema (95 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/signinlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AADTenantId | string |  |
| Agent | dynamic | The agentic property for sign in logs. Includes the agentType and the parentAppId when the type is AgenticInstance. |
| AlternateSignInName | string | The identification that the user provided to sign in. It may be the userPrincipalName but it's also populated when a user signs in using other identifiers. |
| AppDisplayName | string | The application name displayed in the Azure Portal. |
| AppId | string | The application identifier in Azure Active Directory. |
| AppliedConditionalAccessPolicies | string |  |
| AppliedEventListeners | dynamic | Detailed information about the listeners, such as Azure Logic Apps and Azure Functions, that were triggered by the corresponding events in the sign-in event. |
| AppOwnerTenantId | string | The tenant identifier of the owenr of the application in Azure Active Directory. |
| AuthenticationAppDeviceDetails | string | Details of the app and device state used during the most recent authentication step using an authentication app. |
| AuthenticationAppPolicyEvaluationDetails | string | The details of the policies applied and enforced related to the authentication app during the latest signIn step. |
| AuthenticationContextClassReferences | string | Contains a collection of values that represent the conditional access authentication contexts applied to the sign-in. |
| AuthenticationDetails | string | The result of the authentication attempt and additional details on the authentication method. |
| AuthenticationMethodsUsed | string | The authentication methods used. Possible values: SMS, Authenticator App, App Verification code, Password, FIDO, PTA, or PHS. |
| AuthenticationProcessingDetails | string | Additional authentication processing details, such as the agent name in case of PTA/PHS or Server/farm name in case of federated authentication. |
| AuthenticationProtocol | string | Lists the protocol type or grant type used in the authentication. The possible values are: none, oAuth2, ropc, wsFederation, saml20, deviceCode. For authentications that use protocols other than the possible values listed, the protocol type is listed as none. |
| AuthenticationRequirement | string | This holds the highest level of authentication needed through all the sign-in steps, for sign-in to succeed. |
| AuthenticationRequirementPolicies | string | Sources of authentication requirement, such as conditional access, per-user MFA, identity protection, and security defaults. |
| AuthenticatorAppLocation | string | The location of the authenticator app. |
| AutonomousSystemNumber | string | The Autonomous System Number (ASN) of the network used by the actor. |
| Category | string |  |
| ClientAppUsed | string | The legacy client used for sign-in activity. For example: Browser, Exchange ActiveSync, Modern clients, IMAP, MAPI, SMTP, or POP. |
| ClientCredentialType | string | The type of client credential used. Examples include client assertion, client secret, etc. |
| ConditionalAccessAudiences | string | The audiences targeted by the conditional access policy. |
| ConditionalAccessPolicies | dynamic | A list of conditional access policies that are triggered by the corresponding sign-in activity. |
| ConditionalAccessStatus | string | The status of the conditional access policy triggered. Possible values: success, failure, or notApplied. |
| CorrelationId | string | The identifier that's sent from the client when sign-in is initiated. This is used for troubleshooting the corresponding sign-in activity when calling for support. |
| CreatedDateTime | datetime | The date and time the sign-in was initiated. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. |
| CrossTenantAccessType | string | Describes the type of cross-tenant access used by the actor to access the resource. |
| DeviceDetail | dynamic | The device information from where the sign-in occurred. Includes information such as deviceId, OS, and browser. |
| DurationMs | long |  |
| FederatedCredentialId | string | Federated Credential Id. |
| FlaggedForReview | bool | During a failed sign in, a user may click a button in the Azure portal to mark the failed event for tenant admins. If a user clicked the button to flag the failed sign in, this value is true. |
| GlobalSecureAccessIpAddress | string | Global secure IP address that user signed in from. |
| HomeTenantId | string | The tenant identifier of the user initiating the sign in. Not applicable in Managed Identity or service principal sign ins. |
| HomeTenantName | string | The tenant name of the external tenant who homes the entitity taking action in the customer's tenant. |
| Id | string | The identifier representing the sign-in activity. |
| Identity | string | The display name of the actor identified in the signin. |
| IncomingTokenType | string | The type of token utilized to signIn (examples: primary refresh token, saml assertion). |
| IPAddress | string | The IP address of the client from where the sign-in occurred. |
| IPAddressFromResourceProvider | string | The IP address a user used to reach a resource provider, used to determine Conditional Access compliance for some policies. For example, when a user interacts with Exchange Online, the IP address Exchange receives from the user may be recorded here. This value is often null. |
| IsInteractive | bool | Indicates whether a user sign in is interactive. In interactive sign in, the user provides an authentication factor to Azure AD. These factors include passwords, responses to MFA challenges, biometric factors, or QR codes that a user provides to Azure AD or an associated app. In non-interactive sign in, the user doesn't provide an authentication factor. Instead, the client app uses a token or code to authenticate or access a resource on behalf of a user. Non-interactive sign ins are commonly used for a client to sign in on a user's behalf in a process transparent to the user. |
| IsRisky | bool |  |
| IsTenantRestricted | bool | Indicates if a signIn is under a tenant restrictions policy or not. |
| IsThroughGlobalSecureAccess | bool | Displays whether or not a user came through Global Secure Access service or not. |
| Level | string |  |
| Location | string | The 2 letter country code from where the sign-in occurred. Depending on IP address provided, this value may not always resolve to a city or region level of detail. |
| LocationDetails | dynamic | Provides the city, state, country/region and latitude and longitude from where the sign-in happened. |
| MfaDetail | dynamic | This property is deprecated. |
| NetworkLocationDetails | string | The network location details including the type of network used and its names. |
| OperationName | string |  |
| OperationVersion | string |  |
| OriginalRequestId | string | The request identifier of the first request in the authentication sequence. |
| OriginalTransferMethod | string | Transfer method used to initiate a session throughout all subsequent requests. |
| ProcessingTimeInMilliseconds | string |  |
| Resource | string |  |
| ResourceDisplayName | string | The name of the resource that the user signed in to. |
| ResourceGroup | string |  |
| ResourceId | string | The identifier of the resource that the user signed in to. |
| ResourceIdentity | string | The resource that the user signed in to. |
| ResourceOwnerTenantId | string | The tenant identifier of the owner of the resource referenced in the sign in. |
| ResourceProvider | string |  |
| ResourceServicePrincipalId | string | The identifier of the service principal representing the target resource in the sign-in event. |
| ResourceTenantId | string | The tenant identifier of the resource referenced in the sign in. |
| ResultDescription | string | Provides the error message or the reason for failure for the corresponding sign-in activity. |
| ResultSignature | string |  |
| ResultType | string | Provides the 5-6 digit error code that's generated during a sign-in event. 0 indicates success; other values are failures. You can find more information using the Azure AD Error Codes documentation orhttps://login.microsoftonline.com/error. |
| RiskDetail | string | The reason behind a specific state of a risky user, sign-in, or a risk event. Possible values: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, or adminConfirmedSigninCompromised. The value none means that no action has been performed on the user or sign-in so far. Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden. |
| RiskEventTypes | string | This property is deprecated. |
| RiskEventTypes_V2 | string | The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence, or generic. |
| RiskLevel | string |  |
| RiskLevelAggregated | string | The aggregated risk level. Possible values: none, low, medium, high, or hidden. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden. |
| RiskLevelDuringSignIn | string | The risk level during sign-in. Possible values: none, low, medium, high, or hidden. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden. |
| RiskState | string | The risk state of a risky user, sign-in, or a risk event. Possible values: none, confirmedSafe, remediated, dismissed, atRisk, or confirmedCompromised. |
| ServicePrincipalId | string | The application identifier used for sign-in. This field is populated when you are signing in using an application. |
| ServicePrincipalName | string | The application name used for sign-in. This field is populated when you are signing in using an application. |
| SessionId | string | Id of the session that was generated during the signIn. |
| SessionLifetimePolicies | string | Any conditional access session management policies that were applied during the sign-in event. |
| SignInIdentifier | string | The identification that the user provided to sign in. It may be the userPrincipalName but it's also populated when a user signs in using other identifiers. |
| SignInIdentifierType | string | The type of sign in identifier. Possible values are: userPrincipalName, phoneNumber, proxyAddress, qrCode, onPremisesUserPrincipalName. |
| SourceAppClientId | string | The Source App's Client ID for Target Identities. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Status | dynamic | The sign-in status. Includes the error code and description of the error (in case of a sign-in failure). |
| TimeGenerated | datetime |  |
| TokenIssuerName | string | The name of the identity provider. For example, sts.microsoft.com. |
| TokenIssuerType | string | The type of identity provider. The possible values are: AzureAD, or ADFederationServices, AzureADBackupAuth, ADFederationServicesMFAAdapter, NPSExtension. |
| TokenProtectionStatusDetails | dynamic | Token protection creates a cryptographically secure tie between the token and the device it's issued to. This field indicates whether the signin token was bound to the device or not. |
| Type | string | The name of the table |
| UniqueTokenIdentifier | string | A unique base64 encoded request identifier used to track tokens issued by Azure AD as they are redeemed at resource providers. |
| UserAgent | string | The user agent information related to sign-in. |
| UserDisplayName | string | The display name of the user. |
| UserId | string | The identifier of the user. |
| UserPrincipalName | string | The UPN of the user. |
| UserType | string | Identifies whether the user is a member or guest in the tenant. Possible values are: member and guest. |

## Solutions (35)

This table is used by the following solutions:

- [1Password](../solutions/1password.md)
- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)
- [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [DPDP Compliance](../solutions/dpdp-compliance.md)
- [FalconFriday](../solutions/falconfriday.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [GitLab](../solutions/gitlab.md)
- [Global Secure Access](../solutions/global-secure-access.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft 365](../solutions/microsoft-365.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Teams](../solutions/teams.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [ThreatAnalysis&Response](../solutions/threatanalysis&response.md)
- [UEBA Essentials](../solutions/ueba-essentials.md)
- [Windows Firewall](../solutions/windows-firewall.md)
- [Windows Server DNS](../solutions/windows-server-dns.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Entra ID](../connectors/azureactivedirectory.md) |  |

---

## Content Items Using This Table (148)

### Analytic Rules (44)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md) |  |
| [User agent search for log4j exploitation attempt](../content/apache-log4j-vulnerability-detection-user-agent-search-for-log4j-exploitation-attempt-29283b22-a1c0-4d16-b0a9-3460b655a46a-d67cde36.md) |  |

**In solution [FalconFriday](../solutions/falconfriday.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Expired access credentials being used in Azure](../content/falconfriday-expired-access-credentials-being-used-in-azure-433c3b0a-7278-4d74-b137-963ac6f9a7e7-965eac08.md) |  |
| [Microsoft Entra ID Rare UserAgent App Sign-in](../content/falconfriday-microsoft-entra-id-rare-useragent-app-sign-in-87d5cd18-211d-4fd4-9b86-65d23fed87ea-f1fc55a9.md) |  |
| [Microsoft Entra ID UserAgent OS Missmatch](../content/falconfriday-microsoft-entra-id-useragent-os-missmatch-6a638d80-f6b2-473b-9087-3cac78a84b40-e6a7d745.md) |  |

**In solution [GitLab](../solutions/gitlab.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [GitLab - SSO - Sign-Ins Burst](../content/gitlab-gitlab-sso-sign-ins-burst-57b1634b-531d-4eab-a456-8b855887428f-5a07493b.md) |  |

**In solution [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Failed sign-ins into LastPass due to MFA](../content/lastpass-enterprise-activity-monitoring-failed-sign-ins-into-lastpass-due-to-mfa-760b8467-e6cc-4006-9149-5696845c1a54-fcbe15ea.md) |  |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress in SigninLogs](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-signinlogs-1425aea5-a9e5-4288-886e-934b90664a91-470061c8.md) |  |

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Suspicious use of Web API](../content/microsoft-business-applications-dataverse-suspicious-use-of-web-api-8a6ecba2-ccfe-4c8c-b086-fa3e6ff7fa86-3da7d04c.md) |  |
| [F&O - Unusual sign-in activity using single factor authentication](../content/microsoft-business-applications-f&o-unusual-sign-in-activity-using-single-factor-authentication-919e939f-95e2-4978-846e-13a721c89ea1-0df016bb.md) |  |
| [Power Apps - App activity from unauthorized geo](../content/microsoft-business-applications-power-apps-app-activity-from-unauthorized-geo-7ec1e61d-f3b7-4f40-bb1a-357a63913c23-0cf6ffb9.md) |  |
| [Power Platform - Possibly compromised user accesses Power Platform services](../content/microsoft-business-applications-power-platform-possibly-compromised-user-accesses-power-platform-service-54d48840-1c64-4399-afee-ad39a069118d-23dcba32.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Unusual Volume of file deletion by users](../content/microsoft-defender-xdr-unusual-volume-of-file-deletion-by-users-e5f8e196-3544-4a8b-96a9-17c1b6a49710-7af46276.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Anomalous sign-in location by user account and authenticating application](../content/microsoft-entra-id-anomalous-sign-in-location-by-user-account-and-authenticating-application-7cb8f77d-c52f-4e46-b82f-3cf2e106224a-c5368fb1.md) |  |
| [Brute force attack against a Cloud PC](../content/microsoft-entra-id-brute-force-attack-against-a-cloud-pc-3fbc20a4-04c4-464e-8fcb-6667f53e4987-a1e86b1d.md) |  |
| [External guest invitation followed by Microsoft Entra ID PowerShell signin](../content/microsoft-entra-id-external-guest-invitation-followed-by-microsoft-entra-id-powershell-signin-acc4c247-aaf7-494b-b5da-17f18863878a-4c59ca84.md) |  |
| [MFA Rejected by User](../content/microsoft-entra-id-mfa-rejected-by-user-d99cf5c3-d660-436c-895b-8a8f8448da23-b3c993fb.md) |  |
| [MFA Spamming followed by Successful login](../content/microsoft-entra-id-mfa-spamming-followed-by-successful-login-a8cc6d5c-4e7e-4b48-b4ac-d8a116c62a8b-5935aa09.md) |  |
| [Password spray attack against Microsoft Entra ID Seamless SSO](../content/microsoft-entra-id-password-spray-attack-against-microsoft-entra-id-seamless-sso-fb7ca1c9-e14c-40a3-856e-28f3c14ea1ba-0de0d722.md) |  |
| [Possible SignIn from Azure Backdoor](../content/microsoft-entra-id-possible-signin-from-azure-backdoor-fa00014c-c5f4-4715-8f5b-ba567e19e41e-dd1ac846.md) |  |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Insider Risk_Risky User Access By Application](../content/microsoftpurviewinsiderriskmanagement-insider-risk-risky-user-access-by-application-15386bba-dc70-463f-a09f-d392e7731c63-dfb68560.md) |  |

**In solution [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Cross-Cloud Password Spray detection](../content/multi-cloud-attack-coverage-essentials-resource-abuse-cross-cloud-password-spray-detection-1f40ed57-f54b-462f-906a-ac3a89cc90d4-5128b308.md) |  |
| [Cross-Cloud Unauthorized Credential Access Detection From AWS RDS Login](../content/multi-cloud-attack-coverage-essentials-resource-abuse-cross-cloud-unauthorized-credential-access-detecti-122fbc6a-57ab-4aa7-b9a9-51ac4970cac1-bb7f7aa6.md) |  |
| [High-Risk Cross-Cloud User Impersonation](../content/multi-cloud-attack-coverage-essentials-resource-abuse-high-risk-cross-cloud-user-impersonation-f4a28082-2808-4783-9736-33c1ae117475-11195fd6.md) |  |
| [Unauthorized user access across AWS and Azure](../content/multi-cloud-attack-coverage-essentials-resource-abuse-unauthorized-user-access-across-aws-and-azure-60f31001-018a-42bf-8045-a92e1f361b7b-6d3ff85e.md) |  |

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Possible AiTM Phishing Attempt Against Microsoft Entra ID](../content/securitythreatessentialsolution-possible-aitm-phishing-attempt-against-microsoft-entra-id-16daa67c-b137-48dc-8eb7-76598a44791a-98f6165b.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to SigninLogs](../content/threat-intelligence-ti-map-ip-entity-to-signinlogs-f2eb15bd-8a88-4b24-9281-e133edfba315-bfc1548d.md) |  |
| [TI map Email entity to SigninLogs](../content/threat-intelligence-ti-map-email-entity-to-signinlogs-30fa312c-31eb-43d8-b0cc-bcbdfb360822-7878c95a.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to SigninLogs](../content/threat-intelligence-new-ti-map-ip-entity-to-signinlogs-edfc9d8a-6fb3-49e2-80c9-fea15d941799-78ede5a3.md) |  |
| [TI map Email entity to SigninLogs](../content/threat-intelligence-new-ti-map-email-entity-to-signinlogs-4b5a7f32-899d-4d22-8de2-0ec90b911a72-aaf060bd.md) |  |

**Standalone Content:**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Account created from non-approved sources](../content/standalone-content-account-created-from-non-approved-sources-99d589fa-7337-40d7-91a0-c96d0c4fa437-abead192.md) |  |
| [Anomalous Single Factor Signin](../content/standalone-content-anomalous-single-factor-signin-f7c3f5c8-71ea-49ff-b8b3-148f0e346291-7999fe17.md) |  |
| [Anomaly Sign In Event from an IP](../content/standalone-content-anomaly-sign-in-event-from-an-ip-9c1e9381-79dd-4ddf-9570-b73a1dc59fe0-27f41692.md) |  |
| [Authentication Attempt from New Country](../content/standalone-content-authentication-attempt-from-new-country-ef895ada-e8e8-4cf0-9313-b1ab67fab69f-340ffa85.md) |  |
| [Authentications of Privileged Accounts Outside of Expected Controls](../content/standalone-content-authentications-of-privileged-accounts-outside-of-expected-controls-af435ca1-fb70-4de1-92c1-7435c48482a9-4ae23dd0.md) |  |
| [Failed AWS Console logons but success logon to AzureAD](../content/standalone-content-failed-aws-console-logons-but-success-logon-to-azuread-910124df-913c-47e3-a7cd-29e1643fa55e-c02ad301.md) |  |
| [High risk Office operation conducted by IP Address that recently attempted to log into a disabled account](../content/standalone-content-high-risk-office-operation-conducted-by-ip-address-that-recently-attempted-to-log-int-9adbd1c3-a4be-44ef-ac2f-503fd25692ee-6176c458.md) |  |
| [M365D Alerts Correlation to non-Microsoft Network device network activity involved in successful sign-in Activity](../content/standalone-content-m365d-alerts-correlation-to-non-microsoft-network-device-network-activity-involved-in-779731f7-8ba0-4198-8524-5701b7defddc-15ad9d20.md) |  |
| [Malformed user agent](../content/standalone-content-malformed-user-agent-a357535e-f722-4afe-b375-cff362b2b376-cf52b023.md) |  |
| [New country signIn with correct password](../content/standalone-content-new-country-signin-with-correct-password-7808c05a-3afd-4d13-998a-a59e2297693f-319c8619.md) |  |
| [Privileged User Logon from new ASN](../content/standalone-content-privileged-user-logon-from-new-asn-55073036-bb86-47d3-a85a-b113ac3d9396-417005b2.md) |  |
| [Risky user signin observed in non-Microsoft network device](../content/standalone-content-risky-user-signin-observed-in-non-microsoft-network-device-042f2801-a375-4cfd-bd29-041fc7ed88a0-a75f8abe.md) |  |
| [Suspicious Login from deleted guest account](../content/standalone-content-suspicious-login-from-deleted-guest-account-defe4855-0d33-4362-9557-009237623976-9a77037a.md) |  |
| [URL Added to Application from Unknown Domain](../content/standalone-content-url-added-to-application-from-unknown-domain-017e095a-94d8-430c-a047-e51a11fb737b-9b989540.md) |  |

### Hunting Queries (60)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Login attempts using Legacy Auth](../content/business-email-compromise-financial-fraud-login-attempts-using-legacy-auth-b7918a0a-c6fe-4b6d-9111-b0b0c477f1a8-3c2feb3c.md) |  |
| [Microsoft Entra ID signins from new locations](../content/business-email-compromise-financial-fraud-microsoft-entra-id-signins-from-new-locations-41fa6e2d-afe9-4398-9356-cec3a927e44e-6ce1e4de.md) |  |
| [Risky Sign-in with new MFA method](../content/business-email-compromise-financial-fraud-risky-sign-in-with-new-mfa-method-bfacf634-c75e-4291-998c-ecbc0323d943-114a4a02.md) | `OperationName == "Update user"` |
| [Successful Signin From Non-Compliant Device](../content/business-email-compromise-financial-fraud-successful-signin-from-non-compliant-device-99885ff5-00cf-49e8-9452-6de6aba2a5c7-20eaa2d1.md) |  |
| [User Accounts - Unusual authentications occurring when countries do not conduct normal business operations.](../content/business-email-compromise-financial-fraud-user-accounts-unusual-authentications-occurring-when-countries-f56b2223-0d4d-4347-9de4-822d195624ee-ea198d62.md) |  |
| [User Login IP Address Teleportation](../content/business-email-compromise-financial-fraud-user-login-ip-address-teleportation-09a7c5fc-0649-4f7d-a21b-36a754cef6b6-e3c0bf58.md) |  |

**In solution [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Detect Disabled Account Sign-in Attempts by Account Name](../content/cloud-identity-threat-protection-essentials-detect-disabled-account-sign-in-attempts-by-account-name-b00f127c-46fa-40bd-9ab6-b266974d29cc-dff302a4.md) |  |
| [Detect Disabled Account Sign-in Attempts by IP Address](../content/cloud-identity-threat-protection-essentials-detect-disabled-account-sign-in-attempts-by-ip-address-0cd51b2e-d3b2-4001-8e3f-5cbb604f69b2-58dcd212.md) |  |
| [Sign-ins From VPS Providers](../content/cloud-identity-threat-protection-essentials-sign-ins-from-vps-providers-86490334-5371-40a2-971a-3749c2654954-088cc628.md) |  |
| [Sign-ins from Nord VPN Providers](../content/cloud-identity-threat-protection-essentials-sign-ins-from-nord-vpn-providers-cdc9b092-8a16-4559-9e5e-831877e8209a-d746cc8d.md) |  |
| [Suspicious Sign-ins to Privileged Account](../content/cloud-identity-threat-protection-essentials-suspicious-sign-ins-to-privileged-account-a73c52f2-b3a5-4fe4-be7d-4d59b8558590-502c7b31.md) |  |

**In solution [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Failed sign-ins into LastPass due to MFA.](../content/lastpass-enterprise-activity-monitoring-failed-sign-ins-into-lastpass-due-to-mfa.-b43fc364-69fc-4d3e-8834-6743ab5725e9-ed093fc6.md) |  |
| [Login into LastPass from a previously unknown IP.](../content/lastpass-enterprise-activity-monitoring-login-into-lastpass-from-a-previously-unknown-ip.-d292d770-69a4-4399-9272-6e86c4e53e58-cac0163b.md) |  |

**In solution [Microsoft 365](../solutions/microsoft-365.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [SharePointFileOperation via devices with previously unseen user agents](../content/microsoft-365-sharepointfileoperation-via-devices-with-previously-unseen-user-agents-f2367171-1514-4c67-88ef-27434b6a1093-8d3d8113.md) |  |
| [SharePointFileOperation via previously unseen IPs](../content/microsoft-365-sharepointfileoperation-via-previously-unseen-ips-e3d24cfd-b2a1-4ba7-8f80-0360892f9d57-bf177f44.md) |  |

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Activity after failed logons](../content/microsoft-business-applications-dataverse-activity-after-failed-logons-dafcc598-2987-4aa0-947e-7d0449677689-8b8942dc.md) |  |
| [Dataverse - Generic client app used to access production environments](../content/microsoft-business-applications-dataverse-generic-client-app-used-to-access-production-environments-90bcbd4e-e8b5-4a5d-9fe6-d0f9f0220b4a-72c7ad56.md) |  |
| [Dataverse - Identity management changes without MFA](../content/microsoft-business-applications-dataverse-identity-management-changes-without-mfa-385234b7-d96c-4dc3-9c0e-ceb46048d487-58611350.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Unusual Volume of file deletion by users](../content/microsoft-defender-xdr-unusual-volume-of-file-deletion-by-users-2bdd260c-c687-4cb2-9992-87e5ce677678-3b144d45.md) |  |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Insider Risk_Sign In Risk Followed By Sensitive Data Access](../content/microsoftpurviewinsiderriskmanagement-insider-risk-sign-in-risk-followed-by-sensitive-data-access-45ec52c2-99e1-4de1-9adc-bae0f79d4e23-f2037089.md) |  |

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Threat Essentials - Signins From VPS Providers](../content/securitythreatessentialsolution-threat-essentials-signins-from-vps-providers-f347ff55-6443-46b6-9abb-4f8f9b3209f8-41e64544.md) |  |
| [Threat Essentials - Signins from Nord VPN Providers](../content/securitythreatessentialsolution-threat-essentials-signins-from-nord-vpn-providers-1eaad895-7796-466b-8bf3-cec0fa78d0e4-2239dde4.md) |  |

**In solution [UEBA Essentials](../solutions/ueba-essentials.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Anomalous Failed Logon](../content/ueba-essentials-anomalous-failed-logon-77a58c08-bc8e-48b3-8fe9-6c38fd011cd9-d88b0a61.md) |  |
| [Anomalous Sign-in by New or Dormant Account](../content/ueba-essentials-anomalous-sign-in-by-new-or-dormant-account-bb3bb9da-9598-4d1f-af78-7cc2fd413b0b-02e8af9c.md) |  |

**In solution [Windows Server DNS](../solutions/windows-server-dns.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Solorigate Encoded Domain in URL](../content/windows-server-dns-solorigate-encoded-domain-in-url-29a1815a-3ada-4182-a178-e52c483d2f95-55f1aaa9.md) |  |

**Standalone Content:**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Anomalous Microsoft Entra ID apps based on authentication location](../content/standalone-content-anomalous-microsoft-entra-id-apps-based-on-authentication-location-73ac88c0-f073-4b23-8ac4-9f40ea11308d-a7ccd2d4.md) | `OperationName == "Sign-in activity"` |
| [Anomalous sign-in location by user account and authenticating application](../content/standalone-content-anomalous-sign-in-location-by-user-account-and-authenticating-application-8159c663-6724-41b8-9ae8-b328aa8d0c4c-2d3b97c6.md) |  |
| [Anomalous sign-in location by user account and authenticating application - with sign-in details](../content/standalone-content-anomalous-sign-in-location-by-user-account-and-authenticating-application-with-sign-i-7f6e8f14-62fa-4ce6-a490-c07f1d9888ba-4c892312.md) |  |
| [Disabled accounts using Squid proxy](../content/standalone-content-disabled-accounts-using-squid-proxy-959fe0f0-7ac0-467c-944f-5b8c6fdc9e72-ec4ae627.md) |  |
| [Failed Login Attempt by Expired account](../content/standalone-content-failed-login-attempt-by-expired-account-562900b1-39c4-4baf-a050-9cad1641db35-d62dcff7.md) |  |
| [Failed attempt to access Azure Portal](../content/standalone-content-failed-attempt-to-access-azure-portal-cf83633e-5dfd-4887-993b-c910452439da-614be104.md) |  |
| [Failed service logon attempt by user account with available AuditData](../content/standalone-content-failed-service-logon-attempt-by-user-account-with-available-auditdata-22f33a4c-e60f-4817-bbfe-9e2ed33cb596-0585369b.md) |  |
| [Inactive or new account signins](../content/standalone-content-inactive-or-new-account-signins-847c2652-547d-4d5f-9b71-d2f8d81eac62-a5fd3c40.md) | `OperationName == "Add user"` |
| [Login attempt by Blocked MFA user](../content/standalone-content-login-attempt-by-blocked-mfa-user-75fd68a2-9ed4-4a1c-8bd7-18efe4c99081-5904d25a.md) |  |
| [Login spike with increase failure rate](../content/standalone-content-login-spike-with-increase-failure-rate-528c1708-a67e-4e2f-b76d-d5e5e88a22aa-3bf718cc.md) |  |
| [MFA Spamming](../content/standalone-content-mfa-spamming-7f87c43a-6aff-44fe-907f-651986cbf956-1ec9d2a3.md) |  |
| [Microsoft Entra ID sign-in burst from multiple locations](../content/standalone-content-microsoft-entra-id-sign-in-burst-from-multiple-locations-745a22ec-fed8-49b9-9f62-4570b7709da4-246c7446.md) |  |
| [Rare domains seen in Cloud Logs](../content/standalone-content-rare-domains-seen-in-cloud-logs-66fb97d1-55c3-4268-ac22-b9742d0fdccc-81d64f4e.md) |  |
| [Same User - Successful logon for a given App and failure on another App within 1m and low distribution](../content/standalone-content-same-user-successful-logon-for-a-given-app-and-failure-on-another-app-within-1m-and-l-bc17381e-07ee-48a2-931f-06a3d9e149c9-2d59aad0.md) |  |
| [Signin Logs with expanded Conditional Access Policies](../content/standalone-content-signin-logs-with-expanded-conditional-access-policies-4eb6d052-9873-4092-b989-66eae780e203-95b234ca.md) |  |
| [Tracking Password Changes](../content/standalone-content-tracking-password-changes-bac44fe4-c0bc-4e90-aa48-2e346fda803f-28bae834.md) |  |
| [Tracking Privileged Account Rare Activity](../content/standalone-content-tracking-privileged-account-rare-activity-431cccd3-2dff-46ee-b34b-61933e45f556-2c02c0bd.md) |  |

**GitHub Only:**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Administrators Authenticating to Another Microsoft Entra ID Tenant](../content/github-only-administrators-authenticating-to-another-microsoft-entra-id-tenant-3a0447c1-7f43-43d0-aeac-d5e1247964a8-2f7868c7.md) |  |
| [Anomolous Sign Ins Based on Time](../content/github-only-anomolous-sign-ins-based-on-time-8ed5b8f1-a43a-49dc-847c-e44d7a590c17-7db3ce6c.md) |  |
| [Dormant Service Principal Update Creds and Logs In](../content/github-only-dormant-service-principal-update-creds-and-logs-in-e7cdfacc-d112-45c7-9e8f-2b52948d075c-2b79fa66.md) |  |
| [Dormant User Update MFA and Logs In](../content/github-only-dormant-user-update-mfa-and-logs-in-a67834b0-3359-40be-bf11-71faac93b509-e1f0ddc9.md) |  |
| [Dormant User Update MFA and Logs In - UEBA](../content/github-only-dormant-user-update-mfa-and-logs-in-ueba-6adc74fb-37f9-4187-ba7c-84269b09a485-ad8c1897.md) |  |
| [High Risk Sign In Around Authentication Method Added or Device Registration](../content/github-only-high-risk-sign-in-around-authentication-method-added-or-device-registration-d61c3213-77ba-4998-8818-1da2f85dacdf-af95e228.md) |  |
| [Low & slow password attempts with volatile IP addresses](../content/github-only-low-&-slow-password-attempts-with-volatile-ip-addresses-3d217bb4-9cc2-4aba-838a-48e606e910e6-6761ead7.md) |  |
| [New Location Sign in with Mail forwarding activity](../content/github-only-new-location-sign-in-with-mail-forwarding-activity-a689a21c-9369-47e6-b5fa-e1f65045c1cf-7ac74009.md) |  |
| [Privileged Accounts Locked Out](../content/github-only-privileged-accounts-locked-out-fc12c925-84ce-4371-bcff-e745cd937da6-285eba43.md) |  |
| [Risky Sign-in with Device Registration](../content/github-only-risky-sign-in-with-device-registration-f9f8b17c-52ed-4fd1-8edd-6278b6e2669f-6359d664.md) |  |
| [Sign-ins from IPs that attempt sign-ins to disabled accounts](../content/github-only-sign-ins-from-ips-that-attempt-sign-ins-to-disabled-accounts-53b6d42e-ff74-46a8-abee-ec72181f66ba-e036bce2.md) |  |
| [Smart Lockouts](../content/github-only-smart-lockouts-02e86bf2-172c-4444-ae8e-e94c5ce2bea3-cf06fb78.md) |  |
| [Spike in failed sign-in events](../content/github-only-spike-in-failed-sign-in-events-51f4faf9-c3b1-4e9f-9c90-5d6afd191552-ac3569e5.md) |  |
| [Storage Account Key Enumeration](../content/github-only-storage-account-key-enumeration-f19f913f-292a-41ed-9ac0-f3ea5e703d36-1724f133.md) |  |
| [Successful Sign-In From Non-Compliant Device with bulk download activity](../content/github-only-successful-sign-in-from-non-compliant-device-with-bulk-download-activity-a5bb38e3-5ee2-47fe-a65d-c3c9341112ef-2c20eff5.md) |  |
| [Unfamiliar Signin Correlation with AzurePortal Signin Attempts and AuditLogs](../content/github-only-unfamiliar-signin-correlation-with-azureportal-signin-attempts-and-auditlogs-6962473c-bcb8-421d-a0db-826078cad280-15192c3c.md) |  |
| [User Account Linked to Storage Account File Upload](../content/github-only-user-account-linked-to-storage-account-file-upload-bee57113-7b9d-4158-958c-a7f3d534c6c4-d30a8c48.md) | `OperationName in "PutBlob,PutRange"` |
| [Users Authenticating to Other Microsoft Entra ID Tenants](../content/github-only-users-authenticating-to-other-microsoft-entra-id-tenants-9b4a1f38-2fae-44dd-9e85-685a2e4b9bb5-c7672be4.md) |  |

### Workbooks (44)

**In solution [1Password](../solutions/1password.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [1Password](../content/1password-1password-c64d377e.md) |  |

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Log4jPostCompromiseHunting](../content/apache-log4j-vulnerability-detection-log4jpostcompromisehunting-8811d292.md) |  |

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

**In solution [DPDP Compliance](../solutions/dpdp-compliance.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DPDPCompliance](../content/dpdp-compliance-dpdpcompliance-18571e87.md) |  |

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md) |  |

**In solution [Global Secure Access](../solutions/global-secure-access.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [GSANetworkTraffic](../content/global-secure-access-gsanetworktraffic-b1c45294.md) |  |

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md) |  |

**In solution [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [LastPassWorkbook](../content/lastpass-enterprise-activity-monitoring-lastpassworkbook-a0d8c4ef.md) |  |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [AzureActiveDirectorySignins](../content/microsoft-entra-id-azureactivedirectorysignins-97204667.md) |  |
| [ConditionalAccessSISM](../content/microsoft-entra-id-conditionalaccesssism-90abe712.md) |  |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) |  |

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md) |  |

**In solution [Teams](../solutions/teams.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftTeams](../content/teams-microsoftteams-d6922450.md) |  |

**In solution [ThreatAnalysis&Response](../solutions/threatanalysis&response.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DynamicThreatModeling&Response](../content/threatanalysis&response-dynamicthreatmodeling&response-54123c47.md) |  |

**In solution [Windows Firewall](../solutions/windows-firewall.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [WindowsFirewall](../content/windows-firewall-windowsfirewall-6cfebfa8.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [1Password](../content/github-only-1password-e0428620.md) |  |
| [AdvancedWorkbookConcepts](../content/github-only-advancedworkbookconcepts-3495e806.md) |  |
| [AzureActiveDirectorySignins](../content/github-only-azureactivedirectorysignins-f7e08e18.md) |  |
| [AzureAuditActivityAndSignin](../content/github-only-azureauditactivityandsignin-17768883.md) |  |
| [AzureLogCoverage](../content/github-only-azurelogcoverage-05245bb5.md) |  |
| [ConditionalAccessTrendsandChanges](../content/github-only-conditionalaccesstrendsandchanges-114c89ab.md) |  |
| [CopilotforSecurityMonitoring](../content/github-only-copilotforsecuritymonitoring-b67b6028.md) |  |
| [DSTIMWorkbook](../content/github-only-dstimworkbook-062fa645.md) |  |
| [DoDZeroTrustWorkbook](../content/github-only-dodzerotrustworkbook-844294c8.md) |  |
| [InsecureProtocols](../content/github-only-insecureprotocols-bd42e6f8.md) |  |
| [InvestigationInsights](../content/github-only-investigationinsights-8694eaf8.md) |  |
| [Log4jPostCompromiseHunting](../content/github-only-log4jpostcompromisehunting-7193cd47.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |
| [MicrosoftTeams](../content/github-only-microsoftteams-429824b1.md) |  |
| [SentinelWorkspaceReconTools](../content/github-only-sentinelworkspacerecontools-74b07e4a.md) |  |
| [SolarWindsPostCompromiseHunting](../content/github-only-solarwindspostcompromisehunting-09062974.md) |  |
| [UserMap](../content/github-only-usermap-db59dcfa.md) |  |
| [User_Analytics_Workbook](../content/github-only-user-analytics-workbook-b95f3e5a.md) |  |
| [WindowsFirewall](../content/github-only-windowsfirewall-e0440cb8.md) |  |
| [WindowsFirewallViaAMA](../content/github-only-windowsfirewallviaama-c6e9060b.md) |  |
| [WorkspaceUsage](../content/github-only-workspaceusage-97e7cfa7.md) |  |
| [ZeroTrustStrategyWorkbook](../content/github-only-zerotruststrategyworkbook-cd80dc2b.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuthenticationSigninLogs](../asim/asimauthenticationsigninlogs.md) | Authentication | Microsoft Entra ID |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.graph/tenants`

## Selection Criteria Summary (4 criteria, 4 total references)

References by type: 0 connectors, 4 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `OperationName == "Update user"` | - | 1 | - | - | **1** |
| `OperationName in "PutBlob,PutRange"` | - | 1 | - | - | **1** |
| `OperationName == "Sign-in activity"` | - | 1 | - | - | **1** |
| `OperationName == "Add user"` | - | 1 | - | - | **1** |
| **Total** | **0** | **4** | **0** | **0** | **4** |

### OperationName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Update user` | - | 1 | - | - | **1** |
| `PutBlob` | - | 1 | - | - | **1** |
| `PutRange` | - | 1 | - | - | **1** |
| `Sign-in activity` | - | 1 | - | - | **1** |
| `Add user` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

