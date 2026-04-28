# StorageFileLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for StorageFileLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/storagefilelogs) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)
- [Resource Types](#resource-types)

## Schema (63 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/storagefilelogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AccountName | string | The name of the storage account. |
| AuthenticationHash | string | The hash of authentication token. |
| AuthenticationType | string | The type of authentication that was used to make the request. |
| AuthorizationDetails | dynamic | Detailed policy information used to authorize the request. |
| CallerIpAddress | string | The IP address of the requester, including the port number. |
| Category | string | The category of requested operation. |
| ClientRequestId | string | The x-ms-client-request-id header value of the request. |
| ConditionsUsed | string | A semicolon-separated list of key-value pairs that represent a condition. |
| ContentLengthHeader | long | The value of the Content-Length header for the request sent to the storage service. |
| CorrelationId | string | The ID that is used to correlate logs across resources. |
| DurationMs | real | The total time, expressed in milliseconds, to perform the requested operation. This includes the time to read the incoming request, and to send the response to the requester. |
| Etag | string | The ETag identifier for the returned object, in quotes. |
| LastModifiedTime | datetime | The Last Modified Time (LMT) for the returned object. This field is empty for operations that can return multiple objects. |
| Location | string | The location of storage account. |
| MetricResponseType | string | Records the metric response for correlation between metrics and logs. |
| ObjectKey | string | The key of the requested object, in quotes. |
| OperationCount | int | The number of each logged operation that is involved in the request. This count starts with an index of 0. Some requests require more than one operation, such as a request to copy a blob. Most requests perform only one operation. |
| OperationName | string | The type of REST operation that was performed. |
| OperationVersion | string | The storage service version that was specified when the request was made. This is equivalent to the value of the x-ms-version header. |
| Protocol | string | The protocol that is used in the operation. |
| ReferrerHeader | string | The Referer header value. |
| RequestBodySize | long | The size of the request packets, expressed in bytes, that are read by the storage service. If a request is unsuccessful, this value might be empty. |
| RequesterAppId | string | The Open Authorization (OAuth) application ID that is used as the requester. |
| RequesterAudience | string | The OAuth audience of the request. |
| RequesterObjectId | string | The OAuth object ID of the requester. |
| RequesterTenantId | string | The OAuth tenant ID of identity. |
| RequesterTokenIssuer | string | The OAuth token issuer. |
| RequesterUpn | string | The User Principal Names of requester. |
| RequesterUserName | string | The user name of requester for SMB. |
| RequestHeaderSize | long | The size of the request header expressed in bytes. If a request is unsuccessful, this value might be empty. |
| RequestMd5 | string | The value of either the Content-MD5 header or the x-ms-content-md5 header in the request. The MD5 hash value specified in this field represents the content in the request. |
| ResponseBodySize | long | The size of the response packets written by the storage service, in bytes. If a request is unsuccessful, this value may be empty. |
| ResponseHeaderSize | long | The size of the response header expressed in bytes. If a request is unsuccessful, this value might be empty. |
| ResponseMd5 | string | The value of the MD5 hash calculated by the storage service. |
| SasExpiryStatus | string | Records any violations in the request SAS token as per the SAS policy set in the storage account. Ex: longer SAS token duration specified than allowed per SAS policy |
| SchemaVersion | string | The schema version of the log. |
| ServerLatencyMs | real | The total time expressed in milliseconds to perform the requested operation. This value doesn't include network latency (the time to read the incoming request and send the response to the requester). |
| ServiceType | string | The service associated with this request. |
| SmbCommandDetail | string | More information about this specific request rather than the general type of request. |
| SmbCommandMajor | int | Value in SMB2_HEADER.Command, and is currently a number between 0 and 18 inclusive. |
| SmbCommandMinor | string | The subclass of SmbCommandMajor, where appropriate. |
| SmbCreditsConsumed | int | The ingress or egress consumed by the request, in units of 64k. |
| SmbFileId | string | The FileId associated with file or directory. Roughly analogous to an NTFS FileId. |
| SmbMessageID | string | The connection relative MessageId. |
| SmbPersistentHandleID | string | Persistent HandleID from an SMB2 Create request that survives network reconnects. Referenced in [MS-SMB2] 2.2.14.1 as SMB2_FILEID.Persistent. |
| SmbPrimarySID | string | Security Identifier of Kerberos Authenticated request |
| SmbSessionID | string | The SMB2 SessionId established at SessionSetup time. |
| SmbStatusCode | string | Status code for SMB in a hex format. |
| SmbTreeConnectID | string | The SMB TreeConnectID established at TreeConnect time. |
| SmbVolatileHandleID | string | Volatile HandleID from an SMB2 Create request that is recycled on network reconnects. Referenced in [MS-SMB2] 2.2.14.1 as SMB2_FILEID.Volatile. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StatusCode | string | The HTTP status code for the request. If the request is interrupted, this value might be set to Unknown. |
| StatusText | string | The status of the requested operation. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The Universal Time Coordinated (UTC) time when the request was received by storage. |
| TlsVersion | string | The TLS version used in the connection of request. |
| Type | string | The name of the table |
| Uri | string | Uniform resource identifier that is requested. |
| UserAgentHeader | string | The User-Agent header value, in quotes. |

## Solutions (3)

This table is used by the following solutions:

- [Azure Storage](../solutions/azure-storage.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Azure Storage Account](../connectors/azurestorageaccount.md) |  |

---

## Content Items Using This Table (9)

### Analytic Rules (1)

**In solution [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Linked Malicious Storage Artifacts](../content/microsoft-defender-for-cloud-apps-linked-malicious-storage-artifacts-b9e3b9f8-a406-4151-9891-e5ff1ddd8c1d-6de5b72c.md) |  |

### Hunting Queries (7)

**GitHub Only:**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Azure Storage File Create and Delete](../content/github-only-azure-storage-file-create-and-delete-276731f6-ae09-4469-9fa0-c0791a5a0d8d-9afbf5e4.md) |  |
| [Azure Storage File Create, Access, Delete](../content/github-only-azure-storage-file-create,-access,-delete-25568c62-414b-4577-acee-5cba9494c232-3fab8ab2.md) |  |
| [Azure Storage Mass File Deletion](../content/github-only-azure-storage-mass-file-deletion-85e16874-72aa-4ebe-b36e-e45f8ba50f79-194e0a08.md) |  |
| [Azure Storage file upload from VPS Providers](../content/github-only-azure-storage-file-upload-from-vps-providers-85e16874-72aa-4ebe-b36e-e45f8ba50f79-c966139b.md) |  |
| [Storage Alert Correlation with CommonSecurityLogs and StorageLogs](../content/github-only-storage-alert-correlation-with-commonsecuritylogs-and-storagelogs-7098cae1-c632-4b40-b715-86d6b07720d7-78ea9953.md) |  |
| [Storage File Seen on Endpoint](../content/github-only-storage-file-seen-on-endpoint-c7f03700-8bbe-4838-9e78-4852ef21609b-4254e436.md) |  |
| [User Account Linked to Storage Account File Upload](../content/github-only-user-account-linked-to-storage-account-file-upload-bee57113-7b9d-4158-958c-a7f3d534c6c4-d30a8c48.md) |  |

### Workbooks (1)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimFileEventAzureFileStorage](../asim/asimfileeventazurefilestorage.md) | FileEvent | Microsoft Azure File Storage |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.storage/storageaccounts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

