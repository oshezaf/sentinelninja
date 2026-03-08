# AADManagedIdentitySignInLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AADManagedIdentitySignInLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Entra |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadmanagedidentitysigninlogs) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

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

## Solutions (6)

This table is used by the following solutions:

- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Entra ID](../connectors/azureactivedirectory.md) |  |

---

## Content Items Using This Table (5)

### Analytic Rules (1)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress in IdentityLogonEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-identitylogonevents-a7cd18cd-1503-47ec-8dca-65d750540637-db253b1e.md) |  |

### Workbooks (4)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |  |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuthenticationAADManagedIdentitySignInLogs](../asim/asimauthenticationaadmanagedidentitysigninlogs.md) | Authentication | Microsoft Entra ID |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

