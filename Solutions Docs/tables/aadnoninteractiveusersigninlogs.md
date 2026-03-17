# AADNonInteractiveUserSignInLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AADNonInteractiveUserSignInLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Entra |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadnoninteractiveusersigninlogs) |

## Schema (83 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadnoninteractiveusersigninlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AADTenantId | string | The AADTenantId GUID that's associated with the logs |
| Agent | string | Details of agentic sign-in. |
| AlternateSignInName | string | Provides the on-premises UPN of the user sign-ing into Azure AD.e.g. Phone number sign-in. |
| AppDisplayName | string | App name displayed in the Azure portal. |
| AppId | string | Unique GUID representing the app ID in the Azure Active Directory. |
| AppliedEventListeners | dynamic | Detailed information about the applied event listeners or listeners that are triggered by the corresponding events in an authentication activity. It's called appliedEventListeners in ALP and MSGraph, but use Authentication Events to match name on UX. |
| AppOwnerTenantId | string | The tenant identifier of the owenr of the application in Azure Active Directory. |
| AuthenticationContextClassReferences | string | The authentication contexts of the sign-in. |
| AuthenticationDetails | string | A record of each step of authentication undertaken in the sign-in. |
| AuthenticationMethodsUsed | string | List of authentication methods used. |
| AuthenticationProcessingDetails | string | Provides the details associated with authentication processor. |
| AuthenticationProtocol | string | Lists the protocol type or grant type used in the authentication. The possible values are: none, oAuth2, ropc, wsFederation, saml20, deviceCode, unknownFutureValue. For authentications that use protocols other than the possible values listed, the protocol type is listed as none. |
| AuthenticationRequirement | string | Type of authentication required for the sign-in. If set to multiFactorAuthentication, an MFA step was required. If set to singleFactorAuthentication, no MFA was required. |
| AuthenticationRequirementPolicies | string | Set of CA policies that apply to this sign-in, each as CA: policy name, and/or MFA: Per-user. |
| AutonomousSystemNumber | string | Autonomous System Number for the network. |
| Category | string | Category of the sign-in event. |
| ClientAppUsed | string | Details outlining app auth used (Legacy vs non Legacy) Eg: Modern Browser, Native App, Exchange Activty Sync and Older Clients. |
| ClientCredentialType | string | The type of client credential used. Examples include client assertion, client secret, etc. |
| ConditionalAccessPolicies | string | Details of the conditional access policies being applied for the sign-in. |
| ConditionalAccessStatus | string | Status of all the conditionalAccess policies related to the sign-in. |
| CorrelationId | string | ID to provide sign-in trail. |
| CreatedDateTime | datetime | Datetime of the sign-in activity. |
| CrossTenantAccessType | string | Describes the type of cross-tenant access used by the actor to access the resource. Possible values are: none, b2bCollaboration, b2bDirectConnect, microsoftSupport, serviceProvider, unknownFutureValue. If the sign in did not cross tenant boundaries, the value is none. |
| DeviceDetail | string | Details of the device used for the sign-in. |
| DurationMs | long | The duration of the operation in milliseconds. |
| FederatedCredentialId | string | Federated Credential Id. |
| GlobalSecureAccessIpAddress | string | Global secure IP address that user signed in from. |
| HomeTenantId | string | The home tenant ID for cross-tenant scenarios. |
| HomeTenantName | string | The tenant name of the external tenant who homes the entitity taking action in the customer's tenant. |
| Id | string | Unique ID representing the sign-in activity. |
| Identity | string | The identity from the token that was presented when you made the request. It can be a user account, system account, or service principal. |
| IncomingTokenType | string | The type of token utilized to signIn (examples: primary refresh token, saml assertion). |
| IPAddress | string | IP address of the client used to sign in. |
| IsInteractive | bool | Indicates if a sign-in is interactive or not. |
| IsRisky | bool | Indicates if a sign-in is considered risky or not. |
| IsTenantRestricted | bool | Indicates if a signIn is under a tenant restrictions policy or not. |
| IsThroughGlobalSecureAccess | bool | Displays whether or not a user came through Global Secure Access service or not. |
| Level | string | The severity level of the event. |
| Location | string | The region of the resource emitting the event. |
| LocationDetails | string | Details of the sign-in location. |
| MfaDetail | string | Details of the Multi-factor authentication. |
| NetworkLocationDetails | string | Provides the details associated with authentication processor. |
| OperationName | string | For sign-ins, this value is always Sign-in activity. |
| OperationVersion | string | The REST API version that's requested by the client. |
| OriginalRequestId | string | The request id of the first request in the authentication sequence. |
| OriginalTransferMethod | string | Transfer method used to initiate a session throughout all subsequent requests. |
| ProcessingTimeInMs | string | Request processing time in milliseconds in AD STS. |
| ResourceDisplayName | string | Name of the resource that the user signed into. |
| ResourceGroup | string | Resource group for the logs. |
| ResourceIdentity | string | ID of the resource that the user signed into. |
| ResourceOwnerTenantId | string | The tenant identifier of the owner of the resource referenced in the sign in. |
| ResourceServicePrincipalId | string | Service Principal Id of the resource. |
| ResourceTenantId | string | The resource tenant ID for cross-tenant scenarios. |
| ResultDescription | string | Provides the error description for the sign-in operation. |
| ResultSignature | string | Contains the error code, if any, for the sign-in operation. |
| ResultType | string | The result of the sign-in operation can be Success or Failure. |
| RiskDetail | string | Risky user state details. |
| RiskEventTypes | string | The list of risk event types associated with the sign-in. |
| RiskEventTypes_V2 | string | The list of risk event types associated with the sign-in. These are strings. |
| RiskLevelAggregated | string | Aggregated risk level. |
| RiskLevelDuringSignIn | string | Risk level during sign-in. |
| RiskState | string | Risky user state. |
| ServicePrincipalId | string | ID of the service principal who initiated the sign-in. |
| SessionId | string | Id of the session that was generated during the signIn. |
| SessionLifetimePolicies | string | Policies and settings that applied to the sign-in that enforced or revoked a session lifetime. |
| SignInEventTypes | string | The types that are associated with the sign-in. Examples include "interactive", "refreshToken", "managedIdentity", "continuousAccessEvaluation" and many more. |
| SignInIdentifierType | string | The type of sign in identifier. Possible values are: userPrincipalName, phoneNumber, proxyAddress, qrCode, onPremisesUserPrincipalName, unknownFutureValue. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Status | string | Details of the sign-in status. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time of the event in UTC. |
| TokenIssuerName | string | Name of the identity provider (e.g. sts.microsoft.com ). |
| TokenIssuerType | string | Type of identityProvider (Azure AD, AD Federation Services). |
| TokenProtectionStatusDetails | string | Token protection creates a cryptographically secure tie between the token and the device it's issued to. This field indicates whether the signin token was bound to the device or not. |
| Type | string | The name of the table |
| UniqueTokenIdentifier | string | Unique token identifier for the request. |
| UserAgent | string | User Agent for the sign-in. |
| UserDisplayName | string | Display name of the user that initiated the sign-in. |
| UserId | string | ID of the user that initiated the sign-in. |
| UserPrincipalName | string | User principal name of the user that initiated the sign-in. |
| UserType | string | Identifies whether the user is a member or guest in the tenant. Possible values are: member, guest, unknownFutureValue. |

## Solutions (12)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [DPDP Compliance](../solutions/dpdp-compliance.md)
- [FalconFriday](../solutions/falconfriday.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Entra ID](../connectors/azureactivedirectory.md) |  |

---

## Content Items Using This Table (32)

### Analytic Rules (14)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md) |  |
| [User agent search for log4j exploitation attempt](../content/apache-log4j-vulnerability-detection-user-agent-search-for-log4j-exploitation-attempt-29283b22-a1c0-4d16-b0a9-3460b655a46a-d67cde36.md) |  |

**In solution [FalconFriday](../solutions/falconfriday.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Microsoft Entra ID Rare UserAgent App Sign-in](../content/falconfriday-microsoft-entra-id-rare-useragent-app-sign-in-87d5cd18-211d-4fd4-9b86-65d23fed87ea-f1fc55a9.md) |  |
| [Microsoft Entra ID UserAgent OS Missmatch](../content/falconfriday-microsoft-entra-id-useragent-os-missmatch-6a638d80-f6b2-473b-9087-3cac78a84b40-e6a7d745.md) |  |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress in IdentityLogonEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-identitylogonevents-a7cd18cd-1503-47ec-8dca-65d750540637-db253b1e.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Anomalous sign-in location by user account and authenticating application](../content/microsoft-entra-id-anomalous-sign-in-location-by-user-account-and-authenticating-application-7cb8f77d-c52f-4e46-b82f-3cf2e106224a-c5368fb1.md) |  |
| [External guest invitation followed by Microsoft Entra ID PowerShell signin](../content/microsoft-entra-id-external-guest-invitation-followed-by-microsoft-entra-id-powershell-signin-acc4c247-aaf7-494b-b5da-17f18863878a-4c59ca84.md) |  |
| [Password spray attack against Microsoft Entra ID Seamless SSO](../content/microsoft-entra-id-password-spray-attack-against-microsoft-entra-id-seamless-sso-fb7ca1c9-e14c-40a3-856e-28f3c14ea1ba-0de0d722.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to SigninLogs](../content/threat-intelligence-ti-map-ip-entity-to-signinlogs-f2eb15bd-8a88-4b24-9281-e133edfba315-bfc1548d.md) |  |
| [TI map Email entity to SigninLogs](../content/threat-intelligence-ti-map-email-entity-to-signinlogs-30fa312c-31eb-43d8-b0cc-bcbdfb360822-7878c95a.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to SigninLogs](../content/threat-intelligence-new-ti-map-ip-entity-to-signinlogs-edfc9d8a-6fb3-49e2-80c9-fea15d941799-78ede5a3.md) |  |
| [TI map Email entity to SigninLogs](../content/threat-intelligence-new-ti-map-email-entity-to-signinlogs-4b5a7f32-899d-4d22-8de2-0ec90b911a72-aaf060bd.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Authentication Attempt from New Country](../content/standalone-content-authentication-attempt-from-new-country-ef895ada-e8e8-4cf0-9313-b1ab67fab69f-340ffa85.md) |  |
| [Malformed user agent](../content/standalone-content-malformed-user-agent-a357535e-f722-4afe-b375-cff362b2b376-cf52b023.md) |  |

### Workbooks (18)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Log4jPostCompromiseHunting](../content/apache-log4j-vulnerability-detection-log4jpostcompromisehunting-8811d292.md) |  |

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |  |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |  |

**In solution [DPDP Compliance](../solutions/dpdp-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DPDPCompliance](../content/dpdp-compliance-dpdpcompliance-18571e87.md) |  |

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureActiveDirectorySignins](../content/microsoft-entra-id-azureactivedirectorysignins-97204667.md) |  |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AADNonInteractiveUserSignInLogs](../content/github-only-aadnoninteractiveusersigninlogs-dbe045a9.md) |  |
| [AzureActiveDirectorySignins](../content/github-only-azureactivedirectorysignins-f7e08e18.md) |  |
| [AzureLogCoverage](../content/github-only-azurelogcoverage-05245bb5.md) |  |
| [AzureOpenAIMonitoring](../content/github-only-azureopenaimonitoring-99c696c7.md) |  |
| [ConditionalAccessTrendsandChanges](../content/github-only-conditionalaccesstrendsandchanges-114c89ab.md) |  |
| [CopilotforSecurityMonitoring](../content/github-only-copilotforsecuritymonitoring-b67b6028.md) |  |
| [DoDZeroTrustWorkbook](../content/github-only-dodzerotrustworkbook-844294c8.md) |  |
| [Log4jPostCompromiseHunting](../content/github-only-log4jpostcompromisehunting-7193cd47.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |
| [SentinelWorkspaceReconTools](../content/github-only-sentinelworkspacerecontools-74b07e4a.md) |  |
| [ZeroTrustStrategyWorkbook](../content/github-only-zerotruststrategyworkbook-cd80dc2b.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuthenticationAADNonInteractiveUserSignInLogs](../asim/asimauthenticationaadnoninteractiveusersigninlogs.md) | Authentication | Microsoft Entra ID |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

