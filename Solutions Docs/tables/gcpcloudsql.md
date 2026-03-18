# GCPCloudSQL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GCPCloudSQL table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpcloudsql) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (116 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpcloudsql)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AuthInfoPrincipalEmail | string | The principal email address initiating the request. |
| AuthInfoPrincipalSubject | string | The subject associated with the principal. |
| AuthInfoServiceAccountKeyName | string | Name of the service account key used for the request. |
| GCPResourceName | string | Full resource name of the Cloud SQL instance. |
| GCPResourceType | string | Type of the resource. |
| InsertId | string | Unique identifier for the log entry. |
| LogName | string | Name of the log where the entry is recorded. |
| MetadataType | string | Type of metadata associated with the log entry. |
| OperationFirst | bool | Indicates if this is the first log entry in an operation. |
| OperationId | string | Identifier of the associated operation. |
| OperationInsertTime | datetime | Timestamp when the operation was inserted. |
| OperationLast | bool | Indicates if this is the last log entry in an operation. |
| OperationProducer | string | The service that produced the operation. |
| PayloadType | string | Type of the payload in the log entry. |
| ReceiveTimestamp | datetime | Timestamp when the log was received. |
| RequestBodyBackup | string | Backup configuration in the request body. |
| RequestBodyCloneContextDestinationInstanceName | string | Destination instance name in clone context. |
| RequestBodyCommonName | string | Common name used for certificates. |
| RequestBodyDescription | string | Description of the instance or operation. |
| RequestBodyExportContext | dynamic | Export context details. |
| RequestBodyFailoverContext | dynamic | Context for failover configuration. |
| RequestBodyInstance | string | Instance details in the request body. |
| RequestBodyKind | string | The kind field in the request body. |
| RequestBodyLocation | string | Location setting in the request body. |
| RequestBodyNodeCount | string | Number of nodes configured in the request. |
| RequestBodyProject | string | Project ID in the request body. |
| RequestBodyRestoreInstanceSettingsInstanceUid | string | UID of the instance in restore settings. |
| RequestBodyRestoreInstanceSettingsName | string | Instance name in restore settings. |
| RequestBodyRestoreInstanceSettingsProject | string | Project ID in restore settings. |
| RequestBodyRestoreInstanceSettingsRegion | string | Region in restore settings. |
| RequestBodyRotateServerCaContext | dynamic | Server CA rotation configuration context. |
| RequestBodySettingsActivationPolicy | string | Activation policy for the instance. |
| RequestBodySettingsActiveDirectoryConfig | string | Active Directory configuration settings. |
| RequestBodySettingsAvailabilityType | string | Availability type setting. |
| RequestBodySettingsBackupEnabled | bool | Indicates if backups are enabled. |
| RequestBodySettingsBackupLocation | string | Location for backups. |
| RequestBodySettingsBackupPointInTimeRecoveryEnabled | string | Flag for point-in-time recovery. |
| RequestBodySettingsBackupStartTime | string | Scheduled start time for backups. |
| RequestBodySettingsBinaryLogEnabled | bool | Indicates if binary logging is enabled. |
| RequestBodySettingsConnectionPoolConfig | string | Connection pool configuration. |
| RequestBodySettingsdataCacheConfigDataCacheEnabled | bool | Flag for enabling data cache. |
| RequestBodySettingsDataDiskSizeGb | string | Size of the data disk in GB. |
| RequestBodySettingsDataDiskType | string | Type of data disk used. |
| RequestBodySettingsDeletionProtectionEnabled | bool | Indicates if deletion protection is enabled. |
| RequestBodySettingsEdition | string | Edition of the Cloud SQL instance. |
| RequestBodySettingsEnableGoogleMlIntegration | bool | Flag to enable Google ML integration. |
| RequestBodySettingsInsightsConfig | dynamic | Insights configuration settings. |
| RequestBodySettingsIPConfiguration | dynamic | IP configuration settings. |
| RequestBodySettingsLocationPreference | string | Location preference for the instance. |
| RequestBodySettingsMaintenanceWindow | dynamic | Maintenance window configuration. |
| RequestBodySettingsRetainBackupsOnDelete | bool | Flag to retain backups after deletion. |
| RequestBodySettingsRetentinedBackup | string | Retention policy for backups. |
| RequestBodySettingsRetentionUnit | string | Unit of retention for backups. |
| RequestBodySettingsSqlServerAuditConfigRetentionInterval | datetime | Audit retention interval for SQL Server. |
| RequestBodySettingsSqlServerAuditConfigUploadInterval | datetime | Audit upload interval for SQL Server. |
| RequestBodySettingsStorageAutoResize | bool | Indicates if storage auto-resize is enabled. |
| RequestBodySettingsTier | string | Service tier of the instance. |
| RequestBodySettingsTmeZone | string | Time zone settings for the instance. |
| RequestBodySettingsTransactionLogRetentionDays | string | Retention period for transaction logs. |
| RequestBodySettingsUserbackuplable | string | User backup label setting. |
| RequestBodySettingsVersion | bool | Version information flag. |
| RequestDatabase | string | Database name specified in the request. |
| RequestEnableFinalBackup | bool | Indicates if final backup was enabled in the request. |
| RequestEndTime | datetime | Timestamp marking when the request processing completed |
| RequestFilter | string | Filter used in the request to narrow results. |
| RequestFinalBackupTtlDays | string | Time to live (in days) for the final backup. |
| RequestId | string | Unique ID of the request. |
| RequestInstance | string | Instance identifier from the request. |
| RequestMaxResults | string | Maximum number of results requested. |
| RequestMetadataCallerIP | string | IP address of the caller. |
| RequestMetadataRequestAttributesAuth | string | Authentication attributes of the request. |
| RequestMetadataRequestAttributesDestinationAttributes | string | Destination attributes for the request. |
| RequestMetadataRequestAttributesRequestReason | string | Reason for the request. |
| RequestMetadataRequestAttributesRequestTime | datetime | Timestamp when the request was made. |
| RequestName | string | Name field from the request payload. |
| RequestOperation | string | The operation type included in the request. |
| RequestPageSize | string | Page size specified in the request. |
| RequestParent | string | The parent resource under which the request is made. |
| RequestProject | string | Project associated with the request. |
| RequestResourceId | string | ID of the resource being requested. |
| RequestSha1Fingerprint | string | SHA-1 fingerprint associated with the certificate. |
| RequestStartTime | datetime | Start time specified in the request. |
| ResourceLabelsDatabaseId | string | Database identifier from resource labels. |
| ResourceLabelsProjectId | string | Project ID from resource labels. |
| ResourceLabelsRegion | string | Region from resource labels. |
| ResponseBackupContextBackupId | string | Backup ID from the response's backup context. |
| ResponseBackupContextKind | string | Kind of backup context returned. |
| ResponseBackupContextName | string | Name in the backup context of the response. |
| ResponseClientCert | string | Client certificate in the response. |
| ResponseEphemeralCertKind | string | Kind of ephemeral certificate in the response. |
| ResponseInstanceUid | string | Instance UID returned in the response. |
| ResponseKind | string | Kind field of the response. |
| ResponseName | string | Name included in the response. |
| ResponseOperation | string | Indicates the type of operation performed in the response. |
| ResponseOperationType | string | Operation type in the response. |
| ResponsePromoteContextPrimary | string | Primary instance in the promote context. |
| ResponsePromoteContextReplica | string | Replica instance in the promote context. |
| ResponseSelfLink | string | Self-link URL of the response resource. |
| ResponseServerCaCert | string | PEM-encoded CA certificate from the server used for TLS validation |
| ResponseStatus | string | Status of the response operation. |
| ResponseTargetId | string | Target ID in the response. |
| ResponseTargetLink | string | Target link URL in the response. |
| ResponseTargetProject | string | Project associated with the response target. |
| ResponseType | string | Type of the response. |
| ResponseUser | string | User information from the response. |
| ServiceName | string | Name of the GCP service handling the request. |
| Severity | string | Severity level of the log entry. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StatusCode | string | Status code returned by the operation. |
| StatusMessage | string | Message describing the status of the operation. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time when the log entry was generated. |
| Timestamp | datetime | Timestamp of the logged event. |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [GoogleCloudPlatformSQL](../solutions/googlecloudplatformsql.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [GCP Cloud SQL (via Codeless Connector Framework)](../connectors/gcpcloudsqlccfdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

