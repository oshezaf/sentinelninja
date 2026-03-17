# AADManagedIdentitySignInLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AADManagedIdentitySignInLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Entra |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadmanagedidentitysigninlogs) |

## Schema (46 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadmanagedidentitysigninlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AADTenantId | string | The AADTenantId GUID that's associated with the logs |
| Agent | string | Details of agentic sign-in. |
| AppId | string | Unique GUID representing the app ID in the Azure Active Directory |
| AppOwnerTenantId | string | The tenant identifier of the owenr of the application in Azure Active Directory |
| AuthenticationContextClassReferences | string | The authentication contexts of the sign-in |
| AuthenticationProcessingDetails | string | Provides the details associated with authentication processor |
| Category | string | Category of the sign-in event |
| ClientCredentialType | string |  |
| ConditionalAccessPolicies | string | Details of the conditional access policies being applied for the sign-in |
| ConditionalAccessStatus | string | Status of all the conditionalAccess policies related to the sign-in |
| CorrelationId | string | ID to provide sign-in trail |
| CreatedDateTime | datetime | Datetime of the sign-in activity. |
| DurationMs | long | The duration of the operation in milliseconds |
| FederatedCredentialId | string | Th identifier of an application's federated identity credential if a federated identity credential was used to sign in. |
| Id | string | Unique ID representing the sign-in activity |
| Identity | string | The identity from the token that was presented when you made the request. It can be a user account, system account, or service principal |
| IPAddress | string | IP address of the client used to sign in |
| Level | string | The severity level of the event |
| Location | string | The region of the resource emitting the event |
| LocationDetails | string | Details of the sign-in location |
| ManagedServiceIdentity | string | Details of the Managed Service Identity used to Sign In. |
| NetworkLocationDetails | string | Provides the details associated with Authentication processor. |
| OperationName | string | For sign-ins, this value is always Sign-in activity |
| OperationVersion | string | The REST API version that's requested by the client |
| ResourceDisplayName | string | Name of the resource that the service principal signed into |
| ResourceGroup | string | Resource group for the logs |
| ResourceIdentity | string | ID of the resource that the service principal signed into |
| ResourceOwnerTenantId | string | The tenant identifier of the owner of the resource referenced in the sign in |
| ResourceServicePrincipalId | string | Service Principal Id of the resource |
| ResultDescription | string | Provides the error description for the sign-in operation |
| ResultSignature | string | Contains the error code, if any, for the sign-in operation |
| ResultType | string | The result of the sign-in operation can be Success or Failure |
| ServicePrincipalCredentialKeyId | string | Key id of the service principal that initiated the sign-in |
| ServicePrincipalCredentialThumbprint | string | Thumbprint of the service principal that initiated the sign-in |
| ServicePrincipalId | string | ID of the service principal who initiated the sign-in |
| ServicePrincipalName | string | Service Principal Name of the service principal who initiated the sign-in |
| SessionId | string | Id of the session that was generated during the signIn. |
| SourceAppClientId | string | The client ID of the application that initiated the sign-in |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time of the event in UTC |
| Type | string | The name of the table |
| UniqueTokenIdentifier | string | Unique token identifier for the request |
| UserAgent | string | User Agent for the sign-in |

## Solutions (5)

This table is used by the following solutions:

- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Entra ID](../connectors/azureactivedirectory.md) |  |

---

## Content Items Using This Table (9)

### Analytic Rules (1)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress in IdentityLogonEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-identitylogonevents-a7cd18cd-1503-47ec-8dca-65d750540637-db253b1e.md) |  |

### Workbooks (8)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):** `OperationName in "Add member to role,Add user,AzureFirewallIDSLog,NetworkSecurityGroupEvents,Reset user password,Update user"`<br>`OperationName contains "PIM"`<br>`OperationName contains "create"`<br>`OperationName contains "delete"`<br>`OperationName contains "lockbox"`<br>`OperationName contains "remove"`<br>`OperationName contains "update"`

| Content Item |
|:-------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):** `OperationName in "Add member to role,Add user,NetworkSecurityGroupEvents,Reset user password,Update user"`<br>`OperationName contains "Add"`<br>`OperationName contains "Audit"`<br>`OperationName contains "Change"`<br>`OperationName contains "Create"`<br>`OperationName contains "Delete"`<br>`OperationName contains "Log"`<br>`OperationName contains "Monitor"`<br>`OperationName contains "PIM"`<br>`OperationName contains "Remove"`<br>`OperationName contains "Update"`<br>`OperationName contains "Write"`<br>`OperationName contains "reset"`

| Content Item |
|:-------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):** `OperationName in "Add member to role,Add user,ApplicationGatewayFirewall,AzureFirewallIDSLog,Reset user password,Update user"`<br>`OperationName !contains "external"`<br>`OperationName !contains "invite"`<br>`OperationName !contains "licnense"`<br>`OperationName contains "group"`<br>`OperationName contains "member"`<br>`OperationName contains "principal"`<br>`OperationName contains "role"`<br>`OperationName contains "user"`

| Content Item |
|:-------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AADManagedIdentitySignInLogs](../content/github-only-aadmanagedidentitysigninlogs-e106dbaf.md) |  |
| [AzureLogCoverage](../content/github-only-azurelogcoverage-05245bb5.md) |  |
| [DSTIMWorkbook](../content/github-only-dstimworkbook-062fa645.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |
| [SentinelWorkspaceReconTools](../content/github-only-sentinelworkspacerecontools-74b07e4a.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuthenticationAADManagedIdentitySignInLogs](../asim/asimauthenticationaadmanagedidentitysigninlogs.md) | Authentication | Microsoft Entra ID |  |

## Selection Criteria Summary (3 criteria, 3 total references)

References by type: 0 connectors, 3 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `OperationName in "Add member to role,Add user,AzureFirewallIDSLog,NetworkSecurityGroupEvents,Reset user password,Update user"`<br>`OperationName contains "PIM"`<br>`OperationName contains "create"`<br>`OperationName contains "delete"`<br>`OperationName contains "lockbox"`<br>`OperationName contains "remove"`<br>`OperationName contains "update"` | - | 1 | - | - | **1** |
| `OperationName in "Add member to role,Add user,NetworkSecurityGroupEvents,Reset user password,Update user"`<br>`OperationName contains "Add"`<br>`OperationName contains "Audit"`<br>`OperationName contains "Change"`<br>`OperationName contains "Create"`<br>`OperationName contains "Delete"`<br>`OperationName contains "Log"`<br>`OperationName contains "Monitor"`<br>`OperationName contains "PIM"`<br>`OperationName contains "Remove"`<br>`OperationName contains "Update"`<br>`OperationName contains "Write"`<br>`OperationName contains "reset"` | - | 1 | - | - | **1** |
| `OperationName in "Add member to role,Add user,ApplicationGatewayFirewall,AzureFirewallIDSLog,Reset user password,Update user"`<br>`OperationName !contains "external"`<br>`OperationName !contains "invite"`<br>`OperationName !contains "licnense"`<br>`OperationName contains "group"`<br>`OperationName contains "member"`<br>`OperationName contains "principal"`<br>`OperationName contains "role"`<br>`OperationName contains "user"` | - | 1 | - | - | **1** |
| **Total** | **0** | **3** | **0** | **0** | **3** |

### OperationName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Add member to role` | - | 3 | - | - | **3** |
| `Add user` | - | 3 | - | - | **3** |
| `Reset user password` | - | 3 | - | - | **3** |
| `Update user` | - | 3 | - | - | **3** |
| `AzureFirewallIDSLog` | - | 2 | - | - | **2** |
| `NetworkSecurityGroupEvents` | - | 2 | - | - | **2** |
| `contains PIM` | - | 2 | - | - | **2** |
| `contains create` | - | 1 | - | - | **1** |
| `contains delete` | - | 1 | - | - | **1** |
| `contains lockbox` | - | 1 | - | - | **1** |
| `contains remove` | - | 1 | - | - | **1** |
| `contains update` | - | 1 | - | - | **1** |
| `contains Add` | - | 1 | - | - | **1** |
| `contains Audit` | - | 1 | - | - | **1** |
| `contains Change` | - | 1 | - | - | **1** |
| `contains Create` | - | 1 | - | - | **1** |
| `contains Delete` | - | 1 | - | - | **1** |
| `contains Log` | - | 1 | - | - | **1** |
| `contains Monitor` | - | 1 | - | - | **1** |
| `contains Remove` | - | 1 | - | - | **1** |
| `contains Update` | - | 1 | - | - | **1** |
| `contains Write` | - | 1 | - | - | **1** |
| `contains reset` | - | 1 | - | - | **1** |
| `ApplicationGatewayFirewall` | - | 1 | - | - | **1** |
| `!contains external` | - | 1 | - | - | **1** |
| `!contains invite` | - | 1 | - | - | **1** |
| `!contains licnense` | - | 1 | - | - | **1** |
| `contains group` | - | 1 | - | - | **1** |
| `contains member` | - | 1 | - | - | **1** |
| `contains principal` | - | 1 | - | - | **1** |
| `contains role` | - | 1 | - | - | **1** |
| `contains user` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

