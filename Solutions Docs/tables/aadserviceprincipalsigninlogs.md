# AADServicePrincipalSignInLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AADServicePrincipalSignInLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Entra |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadserviceprincipalsigninlogs) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (46 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadserviceprincipalsigninlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AADTenantId | string | ID of the AAD tenant. |
| Agent | string | Details of agentic sign-in. |
| AppId | string | Unique GUID representing the app ID in the Azure Active Directory |
| AppOwnerTenantId | string | The tenant identifier of the owenr of the application in Azure Active Directory |
| AuthenticationContextClassReferences | string | The authentication contexts of the sign-in |
| AuthenticationProcessingDetails | string | Provides the details associated with authentication processor |
| AutonomousSystemNumber | string | Autonomous System Number for the network. |
| Category | string | Category of the sign-in event |
| ClientCredentialType | string | The type of client credential used. Examples include client assertion, client secret, etc. |
| ConditionalAccessAudiences | string | Details of the conditional access audiences being applied for the sign-in. |
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
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time of the event in UTC |
| Type | string | The name of the table |
| UniqueTokenIdentifier | string | Unique token identifier for the request |
| UserAgent | string | User Agent for the sign-in |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [AADServicePrincipalSignInLogs Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadserviceprincipalsigninlogs)

## Solutions (6)

This table is used by the following solutions:

- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Entra ID](../connectors/azureactivedirectory.md) |  |

---

## Content Items Using This Table (14)

### Analytic Rules (2)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress in IdentityLogonEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-identitylogonevents-a7cd18cd-1503-47ec-8dca-65d750540637-db253b1e.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):** `OperationName == "Remove service principal"`<br>`OperationName has_all "Update application"`

| Analytic Rule |
|:-------------|
| [Suspicious Service Principal creation activity](../content/microsoft-entra-id-suspicious-service-principal-creation-activity-6852d9da-8015-4b95-8ecf-d9572ee0395d-57b7f81f.md) |

### Hunting Queries (7)

**In solution [Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Key Vault harvest to SPN sign-in then out-of-scope resource access](../content/hybrid-attack-cloud-&-identity-key-vault-harvest-to-spn-sign-in-then-out-of-scope-resource-access-9e0f2cf7-e3cb-4de2-a3f0-4a01fca52790-5feab5b0.md) |  |
| [Key Vault secret harvest followed by novel SPN sign-in from non-1P IP](../content/hybrid-attack-cloud-&-identity-key-vault-secret-harvest-followed-by-novel-spn-sign-in-from-non-1p-ip-2b0d36b0-ec89-4bc3-8e7b-c2984c6e8f5d-c75e5795.md) |  |
| [Novel SPN sign-in followed by Azure RBAC write](../content/hybrid-attack-cloud-&-identity-novel-spn-sign-in-followed-by-azure-rbac-write-4ad6abf5-d8a4-4f1d-a39f-8d8eb1dfc7e2-837d745f.md) |  |
| [Novel identity then Key Vault secret burst](../content/hybrid-attack-cloud-&-identity-novel-identity-then-key-vault-secret-burst-7d8e22b3-2f90-4f2d-ae4d-bf2e8059cb11-ea7a919e.md) |  |
| [Secret Added to Dormant Service Principal](../content/hybrid-attack-cloud-&-identity-secret-added-to-dormant-service-principal-e2294d1a-ae7d-4212-94c8-6ceff148993a-229ee773.md) |  |
| [Service principal Conditional Access anomaly](../content/hybrid-attack-cloud-&-identity-service-principal-conditional-access-anomaly-92076c80-49fd-4af0-9f9d-ea9dd1fa85c6-58eb67f7.md) | `ConditionalAccessStatus in "failure,notApplied"`<br>`ResultType in "0,Success"` |
| [Service principal credential change followed by novel SP sign-in](../content/hybrid-attack-cloud-&-identity-service-principal-credential-change-followed-by-novel-sp-sign-in-872ac8db-7642-4907-bcb2-d7822ae6be9c-d99cf1bb.md) |  |

### Workbooks (5)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |  |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |  |

**In solution [Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md):** `OperationName in "Add app role assignment to service principal,Add delegated permission grant,Add service principal credentials,Admin deleted security info,Admin registered security info,Admin updated security info,Consent to application,GetBlob,ListBlobs,ListBlobsHierarchySegment,ListContainersSegment,Set domain authentication,Set federation settings on domain,User changed default security info,User deleted security info,User registered security info,User updated security info"`<br>`OperationName has_any "clusterrolebindings,rolebindings"`<br>`OperationName has_any "cronjobs,daemonsets"`<br>`OperationName has_any "cronjobs/create,daemonsets/create"`

| Workbook |
|:-------------|
| [HybridAttack-Cloud&Identity](../content/hybrid-attack-cloud-&-identity-hybridattack-cloud&identity-847f4a4f.md) |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):** `OperationName in "Add conditional access policy,Add member to group,Add member to restricted management administrative unit,Delete conditional access policy,Remove member from group,Remove member from restricted management administrative unit,Update conditional access policy,Update group"`

| Workbook |
|:-------------|
| [ConditionalAccessSISM](../content/microsoft-entra-id-conditionalaccesssism-90abe712.md) |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuthenticationAADServicePrincipalSignInLogs](../asim/asimauthenticationaadserviceprincipalsigninlogs.md) | Authentication | Microsoft Entra ID |  |

## Selection Criteria Summary (4 criteria, 4 total references)

References by type: 0 connectors, 4 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `OperationName == "Remove service principal"`<br>`OperationName has_all "Update application"` | - | 1 | - | - | **1** |
| `ConditionalAccessStatus in "failure,notApplied"`<br>`ResultType in "0,Success"` | - | 1 | - | - | **1** |
| `OperationName in "Add app role assignment to service principal,Add delegated permission grant,Add service principal credentials,Admin deleted security info,Admin registered security info,Admin updated security info,Consent to application,GetBlob,ListBlobs,ListBlobsHierarchySegment,ListContainersSegment,Set domain authentication,Set federation settings on domain,User changed default security info,User deleted security info,User registered security info,User updated security info"`<br>`OperationName has_any "clusterrolebindings,rolebindings"`<br>`OperationName has_any "cronjobs,daemonsets"`<br>`OperationName has_any "cronjobs/create,daemonsets/create"` | - | 1 | - | - | **1** |
| `OperationName in "Add conditional access policy,Add member to group,Add member to restricted management administrative unit,Delete conditional access policy,Remove member from group,Remove member from restricted management administrative unit,Update conditional access policy,Update group"` | - | 1 | - | - | **1** |
| **Total** | **0** | **4** | **0** | **0** | **4** |

### ConditionalAccessStatus

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `failure` | - | 1 | - | - | **1** |
| `notApplied` | - | 1 | - | - | **1** |

### OperationName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Remove service principal` | - | 1 | - | - | **1** |
| `has_all Update application` | - | 1 | - | - | **1** |
| `Add app role assignment to service principal` | - | 1 | - | - | **1** |
| `Add delegated permission grant` | - | 1 | - | - | **1** |
| `Add service principal credentials` | - | 1 | - | - | **1** |
| `Admin deleted security info` | - | 1 | - | - | **1** |
| `Admin registered security info` | - | 1 | - | - | **1** |
| `Admin updated security info` | - | 1 | - | - | **1** |
| `Consent to application` | - | 1 | - | - | **1** |
| `GetBlob` | - | 1 | - | - | **1** |
| `ListBlobs` | - | 1 | - | - | **1** |
| `ListBlobsHierarchySegment` | - | 1 | - | - | **1** |
| `ListContainersSegment` | - | 1 | - | - | **1** |
| `Set domain authentication` | - | 1 | - | - | **1** |
| `Set federation settings on domain` | - | 1 | - | - | **1** |
| `User changed default security info` | - | 1 | - | - | **1** |
| `User deleted security info` | - | 1 | - | - | **1** |
| `User registered security info` | - | 1 | - | - | **1** |
| `User updated security info` | - | 1 | - | - | **1** |
| `has_any clusterrolebindings` | - | 1 | - | - | **1** |
| `has_any rolebindings` | - | 1 | - | - | **1** |
| `has_any cronjobs` | - | 1 | - | - | **1** |
| `has_any daemonsets` | - | 1 | - | - | **1** |
| `has_any cronjobs/create` | - | 1 | - | - | **1** |
| `has_any daemonsets/create` | - | 1 | - | - | **1** |
| `Add conditional access policy` | - | 1 | - | - | **1** |
| `Add member to group` | - | 1 | - | - | **1** |
| `Add member to restricted management administrative unit` | - | 1 | - | - | **1** |
| `Delete conditional access policy` | - | 1 | - | - | **1** |
| `Remove member from group` | - | 1 | - | - | **1** |
| `Remove member from restricted management administrative unit` | - | 1 | - | - | **1** |
| `Update conditional access policy` | - | 1 | - | - | **1** |
| `Update group` | - | 1 | - | - | **1** |

### ResultType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `0` | - | 1 | - | - | **1** |
| `Success` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

