# ADFSSignInLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ADFSSignInLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/adfssigninlogs) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (47 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/adfssigninlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AlternateSignInName | string | Provides the on-premises UPN of the user sign-ing into Azure AD.e.g. Phone number sign-in |
| AppDisplayName | string | The string name of the OAuth client in the request displayed in the Azure Portal |
| AppId | string | A unique ID of the Oauth Client ID in the request |
| AuthenticationDetails | string | A record of each step of authentication undertaken in the sign-in |
| AuthenticationProcessingDetails | string | Provides the details associated with authentication processor |
| AuthenticationRequirement | string | Type of authentication required for the sign-in. If set to multiFactorAuthentication, an MFA step was required. If set to singleFactorAuthentication, no MFA was required |
| AuthenticationRequirementPolicies | string | Set of CA policies that apply to this sign-in, each as CA: policy name, and/or MFA: Per-user |
| Category | string | Category of the sign-in event |
| ConditionalAccessPolicies | string | Details of the conditional access policies being applied for the sign-in |
| ConditionalAccessStatus | string | Status of all the conditionalAccess policies related to the sign-in |
| CorrelationId | string | ID to provide sign-in trail |
| CreatedDateTime | datetime | Datetime of the sign-in activity |
| DeviceDetail | string | Details of the device used for the sign-in |
| DurationMs | long | The duration of the operation in milliseconds |
| Id | string | Unique ID representing the sign-in activity |
| Identity | string | The identity from the token that was presented when you made the request. It can be a user account, system account, or service principal |
| IPAddress | string | IP address of the client used to sign in |
| IsInteractive | bool | Indicates if a sign-in is interactive or not |
| Level | string | The severity level of the event |
| Location | string | The region of the resource emitting the event |
| NetworkLocationDetails | string | Provides the details associated with authentication processor |
| OperationName | string | For sign-ins, this value is always Sign-in activity |
| OperationVersion | string | The REST API version that's requested by the client |
| OriginalRequestId | string | The request id of the first request in the authentication sequence |
| ProcessingTimeInMs | string | Request processing time in milliseconds in AD STS |
| Requirement | string | If the authentication is a primary or secondary authentication. Can be not set. |
| ResourceDisplayName | string | The string name of the application the user signed into displayed in the Azure Portal |
| ResourceGroup | string | Resource group for the logs |
| ResourceIdentity | string | A unique ID application ID the user signed into of the request |
| ResourceTenantId | string | The resource tenant ID for cross-tenant scenarios |
| ResultDescription | string | Provides the error description for the sign-in operation |
| ResultSignature | string | Contains the error code, if any, for the sign-in operation |
| ResultType | string | The result of the sign-in operation can be Success or Failure |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Status | string | Details of the sign-in status |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time of the event in UTC |
| TokenIssuerName | string | Name of the identity provider (e.g. sts.microsoft.com ) |
| TokenIssuerType | string | Type of identityProvider (Azure AD, AD Federation Services) |
| Type | string | The name of the table |
| UniqueTokenIdentifier | string | Unique token identifier for the request |
| UserAgent | string | User Agent for the sign-in |
| UserDisplayName | string | Display name of the user that initiated the sign-in |
| UserId | string | ID of the user that initiated the sign-in |
| UserPrincipalName | string | User principal name of the user that initiated the sign-in |

## Solutions (2)

This table is used by the following solutions:

- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Entra ID](../connectors/azureactivedirectory.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (2)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress in IdentityLogonEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-identitylogonevents-a7cd18cd-1503-47ec-8dca-65d750540637-db253b1e.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Password spray attack against ADFSSignInLogs](../content/microsoft-entra-id-password-spray-attack-against-adfssigninlogs-5533fe80-905e-49d5-889a-df27d2c3976d-bc003e0d.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

