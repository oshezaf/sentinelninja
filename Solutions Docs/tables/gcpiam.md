# GCPIAM

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GCPIAM table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpiam) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (97 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpiam)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AuthenticationInfoPrincipalSubject | string | Subject associated with the authenticated principal in the request. |
| AuthInfoPrincipalEmail | string | The email address associated with the principal (e.g., user, service account) performing the action. |
| AuthInfoPrincipalSubject | string | The subject or identifier associated with the principal performing the action. |
| AuthInfoServiceAccountDelegationInfo | string | Delegation information for a service account. |
| AuthorizationInfo | string | Information related to the authorization of the request. |
| GCPResourceName | string | The name of the resource involved in the request or logged event. |
| GCPResourceType | string | The type of resource involved in the request. |
| InsertId | string | A unique identifier for the log entry, typically used for deduplication. |
| LogName | string | The name of the log in which the entry resides. |
| MetadataIdentityDelegationChain | string | A chain of delegated identities for the request. |
| MetadataMappedPrincipal | string | Mapped principal in the metadata. |
| MetadataType | string | The type of metadata being provided. |
| MethodName | string | The name of the method being invoked. |
| NumResponseItems | string | The number of items returned in the response. |
| OperationFirst | bool | Boolean indicating whether this is the first operation in a sequence. |
| OperationId | string | A unique identifier for the operation. |
| OperationLast | bool | Boolean indicating whether this is the last operation in a sequence. |
| OperationProducer | string | The producer (system or service) that initiated the operation. |
| PayloadType | string | The type of payload being processed or transmitted. |
| ReceiveTimestamp | datetime | Timestamp representing the time when the log entry was received by the system. |
| RequestAccountId | string | Account ID associated with the request. |
| RequestFullResourceName | string | Full name of the resource requested. |
| RequestGrantType | string | The grant type associated with the request. |
| RequestIncludeInactiveApiRoles | bool | Boolean indicating whether inactive API roles should be included in the request. |
| RequestKeyTypes | string | Types of keys involved in the request. |
| RequestMetadataCallerIp | string | The IP address from which the request originated. |
| RequestMetadataCallerSuppliedUserAgent | string | The user-agent String provided by the caller during the request. |
| RequestMetadataRequestAttributesTime | string | Time-related attributes of the request metadata. |
| RequestName | string | The name of the request. |
| RequestOptionsRequestedPolicyVersion | string | The version of the policy requested. |
| RequestPageSize | string | The size of the page requested in a paginated request. |
| RequestPageToken | string | Token for pagination in the request. |
| RequestParent | string | The parent resource of the request. |
| RequestPolicyAuditConfigs | string | Configuration for auditing in the request policy. |
| RequestPolicyBindings | string | Binding configurations associated with the request policy. |
| RequestPolicyEtag | string | The ETag value for the request policy. |
| RequestPrivateKeyType | string | Type of private key being used in the request. |
| RequestRemoveDeletedServiceAccounts | bool | Boolean indicating if deleted service accounts should be removed. |
| RequestRequestedTokenType | string | The type of token requested. |
| RequestResource | string | The resource being requested. |
| RequestRoleDescription | string | Description of the role being requested. |
| RequestRoleId | string | The unique identifier for the role. |
| RequestRoleIncludedPermissions | string | Permissions included in the role in the request. |
| RequestRoleTitle | string | Title of the role being requested. |
| RequestServiceAccountDescription | string | Description of the service account being requested. |
| RequestServiceAccountDisplayName | string | Display name of the service account being requested. |
| RequestShowDeleted | bool | Boolean indicating if deleted items should be included in the response. |
| RequestSkipVisibilityCheck | bool | Boolean indicating whether the visibility check for the request should be skipped. |
| RequestSubjectTokenType | string | The type of subject token being used in the request. |
| RequestType | string | The type of request being made. |
| RequestUpdateMaskPaths | string | The paths to be updated in the request. |
| RequestView | string | The view or perspective for the request. |
| ResourceLabelsEmailId | string | Email identifier associated with the resource. |
| ResourceLabelsLocation | string | The geographical or logical location of the resource. |
| ResourceLabelsMethod | string | The method associated with the resource, often used for filtering or categorization. |
| ResourceLabelsProjectId | string | Project ID for the resource being accessed or logged. |
| ResourceLabelsRoleName | string | The name of the role associated with the resource. |
| ResourceLabelsService | string | The service to which the resource belongs. |
| ResourceLabelsTopicId | string | The topic ID associated with the resource. |
| ResourceLabelsUniqueId | string | A unique identifier for the resource. |
| ResourceLabelsVersion | string | The version of the resource being logged. |
| ResponseAuditConfigs | string | Audit configurations in the response. |
| ResponseBindings | string | The bindings used in the response. |
| ResponseDescription | string | Description of the response. |
| ResponseDisplayName | string | Display name associated with the response. |
| ResponseEmail | string | Email associated with the response. |
| ResponseEtag | string | The ETag value for the response. |
| ResponseGroupName | string | The group name for the response. |
| ResponseGroupTitle | string | The title of the group in the response. |
| ResponseIncludedPermissions | string | Permissions included in the response. |
| ResponseKeyAlgorithm | string | The key algorithm used in the response. |
| ResponseKeyOrigin | string | The origin of the key in the response. |
| ResponseKeyType | string | The type of key used in the response. |
| ResponseName | string | Name associated with the response. |
| ResponseOauth2ClientId | string | OAuth2 client ID associated with the response. |
| ResponsePrivateKeyType | string | The type of private key used in the response. |
| ResponseProjectId | string | Project ID associated with the response. |
| ResponseTitle | string | Title associated with the response. |
| ResponseType | string | The type of response being returned. |
| ResponseUniqueId | string | Unique identifier for the response. |
| ResponseValidAfterTimeSeconds | string | Time in seconds after which the response becomes valid. |
| ResponseValidBeforeTimeSeconds | string | Time in seconds before the response becomes valid. |
| ServiceDataPermissionDeltaAddedPermissions | string | Permissions that were added in the service data policy. |
| ServiceDataPermissionDeltaRemovedPermissions | string | Permissions that were removed in the service data policy. |
| ServiceDataPolicyDeltaBindingDeltas | string | Changes to policy bindings in the response. |
| ServiceDataType | string | The type of service data being logged. |
| ServiceName | string | The name of the service that generated the log entry. |
| Severity | string | The severity level of the log entry or request. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StatusCode | string | The HTTP or operation status code for the response. |
| StatusMessage | string | The message associated with the status code. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp representing the time at which the log entry was generated. |
| Timestamp | datetime | The timestamp when the log entry or event occurred. |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Google Cloud Platform IAM (via Codeless Connector Framework)](../connectors/gcpiamccpdefinition.md) |  |

---

## Content Items Using This Table (20)

### Analytic Rules (10)

**In solution [GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GCP IAM - Disable Data Access Logging](../content/googlecloudplatformiam-gcp-iam-disable-data-access-logging-2530a631-9605-404d-ae58-58ef1f91b17c-b5c24a62.md) |  |
| [GCP IAM - Empty user agent](../content/googlecloudplatformiam-gcp-iam-empty-user-agent-9e0d8632-d33d-4075-979e-c972674f77b3-a16b7078.md) |  |
| [GCP IAM - High privileged role added to service account](../content/googlecloudplatformiam-gcp-iam-high-privileged-role-added-to-service-account-86112c4b-2535-4178-aa0e-ed9e32e3f054-e62bc201.md) |  |
| [GCP IAM - New Authentication Token for Service Account](../content/googlecloudplatformiam-gcp-iam-new-authentication-token-for-service-account-80e4db30-5636-4fbd-8816-24c3ded8d243-45af187b.md) |  |
| [GCP IAM - New Service Account](../content/googlecloudplatformiam-gcp-iam-new-service-account-a768aa52-453e-4e3e-80c2-62928d2e2f56-903c98c3.md) |  |
| [GCP IAM - New Service Account Key](../content/googlecloudplatformiam-gcp-iam-new-service-account-key-fc135860-8773-4ead-b5be-9789af1ff8ff-ddbcaf48.md) |  |
| [GCP IAM - Privileges Enumeration](../content/googlecloudplatformiam-gcp-iam-privileges-enumeration-52d88912-fa8b-4db2-b247-ee9225e41e8f-7998e5d2.md) |  |
| [GCP IAM - Publicly exposed storage bucket](../content/googlecloudplatformiam-gcp-iam-publicly-exposed-storage-bucket-4a433846-4b05-4a27-99d7-92093feded79-7f5ffaae.md) |  |
| [GCP IAM - Service Account Enumeration](../content/googlecloudplatformiam-gcp-iam-service-account-enumeration-50e0437e-912d-4cd0-ac19-fef0aebdd3d7-5d27b7f1.md) |  |
| [GCP IAM - Service Account Keys Enumeration](../content/googlecloudplatformiam-gcp-iam-service-account-keys-enumeration-7ad3cfed-18c0-44af-9e9d-9fb5472a2321-1e046e4f.md) |  |

### Hunting Queries (10)

**In solution [GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GCP IAM - Changed roles](../content/googlecloudplatformiam-gcp-iam-changed-roles-0ab42aac-2c86-443c-80fa-ef8cdd0d997e-d2250be5.md) |  |
| [GCP IAM - Deleted service accounts](../content/googlecloudplatformiam-gcp-iam-deleted-service-accounts-b758750b-18e8-4aec-a831-c9a1a312d314-9ce24ba0.md) |  |
| [GCP IAM - Disabled service accounts](../content/googlecloudplatformiam-gcp-iam-disabled-service-accounts-f228b2ca-3604-475a-8bd1-33b6c5dbcd3d-71041e65.md) |  |
| [GCP IAM - New custom roles](../content/googlecloudplatformiam-gcp-iam-new-custom-roles-e9accd25-ecff-4076-b2da-3102bf95bec5-1b828f0f.md) |  |
| [GCP IAM - New service account keys](../content/googlecloudplatformiam-gcp-iam-new-service-account-keys-33bf838b-a85e-4051-8646-07f4e47ee4ea-d2e0206e.md) |  |
| [GCP IAM - New service accounts](../content/googlecloudplatformiam-gcp-iam-new-service-accounts-52518413-437b-4f79-86d3-28c8c1fafb66-85c410bc.md) |  |
| [GCP IAM - Rare IAM actions](../content/googlecloudplatformiam-gcp-iam-rare-iam-actions-85e64fe8-aeed-4021-85de-fdf539917ca1-dee16ec6.md) |  |
| [GCP IAM - Rare user agent](../content/googlecloudplatformiam-gcp-iam-rare-user-agent-ee96562f-cb40-42fd-80d6-dce38cb38f5c-c76775d3.md) |  |
| [GCP IAM - Top service accounts by failed actions](../content/googlecloudplatformiam-gcp-iam-top-service-accounts-by-failed-actions-27234847-8d3f-4d33-a3ef-5d3ec2575154-690da1f5.md) |  |
| [GCP IAM - Top source IP addresses with failed actions](../content/googlecloudplatformiam-gcp-iam-top-source-ip-addresses-with-failed-actions-2f906618-68e1-49ae-a961-8483cb7b6523-0c683ae9.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [GCP_IAM](../parsers/gcp-iam.md) | [GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

