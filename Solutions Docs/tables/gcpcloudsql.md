# GCPCloudSQL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GCPCloudSQL table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpcloudsql) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (128 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpcloudsql)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AuthInfoPrincipalEmail | string | The principal email address initiating the request. |
| AuthInfoPrincipalSubject | string | The subject associated with the principal. |
| AuthInfoServiceAccountKeyName | string | Deprecated. Use ProtoPayload column to find this field. Name of the service account key used for the request. |
| GCPResourceName | string | Full resource name of the Cloud SQL instance. |
| GCPResourceType | string | Type of the resource. |
| InsertId | string | Unique identifier for the log entry. |
| JsonPayload | dynamic | Structured engine log payload when present. |
| Labels | dynamic | Top-level LogEntry labels e.g. INSTANCE_UID, SOURCE_ID. |
| LogName | string | Name of the log where the entry is recorded. |
| MetadataType | string | Deprecated. Use ProtoPayload column to find this field. Type of metadata associated with the log entry. |
| MethodName | string | The name of the service method or operation invoked (e.g. cloudsql.instances.query). |
| OperationFirst | bool | Indicates if this is the first log entry in an operation. |
| OperationId | string | Identifier of the associated operation. |
| OperationInsertTime | datetime | Deprecated. Use ProtoPayload column to find this field. Timestamp when the operation was inserted. |
| OperationLast | bool | Indicates if this is the last log entry in an operation. |
| OperationProducer | string | The service that produced the operation. |
| PayloadType | string | Deprecated. Use ProtoPayload column to find this field. Type of the payload in the log entry. |
| ProtoPayload | dynamic | Full protoPayload object; parse any audit field from here. |
| ReceiveTimestamp | datetime | Timestamp when the log was received. |
| RequestAuditClass | string | pgAudit audit class, e.g. DDL, WRITE or READ (pgAudit request.auditClass). |
| RequestAuditType | string | pgAudit audit type, e.g. SESSION or OBJECT (pgAudit request.auditType). |
| RequestBodyBackup | string | Deprecated. Use ProtoPayload column to find this field. Backup configuration in the request body. |
| RequestBodyCloneContextDestinationInstanceName | string | Deprecated. Use ProtoPayload column to find this field. Destination instance name in clone context. |
| RequestBodyCommonName | string | Deprecated. Use ProtoPayload column to find this field. Common name used for certificates. |
| RequestBodyDescription | string | Deprecated. Use ProtoPayload column to find this field. Description of the instance or operation. |
| RequestBodyExportContext | dynamic | Deprecated. Use ProtoPayload column to find this field. Export context details. |
| RequestBodyFailoverContext | dynamic | Deprecated. Use ProtoPayload column to find this field. Context for failover configuration. |
| RequestBodyInstance | string | Deprecated. Use ProtoPayload column to find this field. Instance details in the request body. |
| RequestBodyKind | string | Deprecated. Use ProtoPayload column to find this field. The kind field in the request body. |
| RequestBodyLocation | string | Deprecated. Use ProtoPayload column to find this field. Location setting in the request body. |
| RequestBodyNodeCount | string | Deprecated. Use ProtoPayload column to find this field. Number of nodes configured in the request. |
| RequestBodyProject | string | Deprecated. Use ProtoPayload column to find this field. Project ID in the request body. |
| RequestBodyRestoreInstanceSettingsInstanceUid | string | Deprecated. Use ProtoPayload column to find this field. UID of the instance in restore settings. |
| RequestBodyRestoreInstanceSettingsName | string | Deprecated. Use ProtoPayload column to find this field. Instance name in restore settings. |
| RequestBodyRestoreInstanceSettingsProject | string | Deprecated. Use ProtoPayload column to find this field. Project ID in restore settings. |
| RequestBodyRestoreInstanceSettingsRegion | string | Deprecated. Use ProtoPayload column to find this field. Region in restore settings. |
| RequestBodyRotateServerCaContext | dynamic | Deprecated. Use ProtoPayload column to find this field. Server CA rotation configuration context. |
| RequestBodySettingsActivationPolicy | string | Deprecated. Use ProtoPayload column to find this field. Activation policy for the instance. |
| RequestBodySettingsActiveDirectoryConfig | string | Deprecated. Use ProtoPayload column to find this field. Active Directory configuration settings. |
| RequestBodySettingsAvailabilityType | string | Deprecated. Use ProtoPayload column to find this field. Availability type setting. |
| RequestBodySettingsBackupEnabled | bool | Deprecated. Use ProtoPayload column to find this field. Indicates if backups are enabled. |
| RequestBodySettingsBackupLocation | string | Deprecated. Use ProtoPayload column to find this field. Location for backups. |
| RequestBodySettingsBackupPointInTimeRecoveryEnabled | string | Deprecated. Use ProtoPayload column to find this field. Flag for point-in-time recovery. |
| RequestBodySettingsBackupStartTime | string | Deprecated. Use ProtoPayload column to find this field. Scheduled start time for backups. |
| RequestBodySettingsBinaryLogEnabled | bool | Deprecated. Use ProtoPayload column to find this field. Indicates if binary logging is enabled. |
| RequestBodySettingsConnectionPoolConfig | string | Deprecated. Use ProtoPayload column to find this field. Connection pool configuration. |
| RequestBodySettingsdataCacheConfigDataCacheEnabled | bool | Deprecated. Use ProtoPayload column to find this field. Flag for enabling data cache. |
| RequestBodySettingsDataDiskSizeGb | string | Deprecated. Use ProtoPayload column to find this field. Size of the data disk in GB. |
| RequestBodySettingsDataDiskType | string | Deprecated. Use ProtoPayload column to find this field. Type of data disk used. |
| RequestBodySettingsDeletionProtectionEnabled | bool | Deprecated. Use ProtoPayload column to find this field. Indicates if deletion protection is enabled. |
| RequestBodySettingsEdition | string | Deprecated. Use ProtoPayload column to find this field. Edition of the Cloud SQL instance. |
| RequestBodySettingsEnableGoogleMlIntegration | bool | Deprecated. Use ProtoPayload column to find this field. Flag to enable Google ML integration. |
| RequestBodySettingsInsightsConfig | dynamic | Deprecated. Use ProtoPayload column to find this field. Insights configuration settings. |
| RequestBodySettingsIPConfiguration | dynamic | Deprecated. Use ProtoPayload column to find this field. IP configuration settings. |
| RequestBodySettingsLocationPreference | string | Deprecated. Use ProtoPayload column to find this field. Location preference for the instance. |
| RequestBodySettingsMaintenanceWindow | dynamic | Deprecated. Use ProtoPayload column to find this field. Maintenance window configuration. |
| RequestBodySettingsRetainBackupsOnDelete | bool | Deprecated. Use ProtoPayload column to find this field. Flag to retain backups after deletion. |
| RequestBodySettingsRetentinedBackup | string | Deprecated. Use ProtoPayload column to find this field. Retention policy for backups. |
| RequestBodySettingsRetentionUnit | string | Deprecated. Use ProtoPayload column to find this field. Unit of retention for backups. |
| RequestBodySettingsSqlServerAuditConfigRetentionInterval | datetime | Deprecated. Use ProtoPayload column to find this field. Audit retention interval for SQL Server. |
| RequestBodySettingsSqlServerAuditConfigUploadInterval | datetime | Deprecated. Use ProtoPayload column to find this field. Audit upload interval for SQL Server. |
| RequestBodySettingsStorageAutoResize | bool | Deprecated. Use ProtoPayload column to find this field. Indicates if storage auto-resize is enabled. |
| RequestBodySettingsTier | string | Deprecated. Use ProtoPayload column to find this field. Service tier of the instance. |
| RequestBodySettingsTmeZone | string | Deprecated. Use ProtoPayload column to find this field. Time zone settings for the instance. |
| RequestBodySettingsTransactionLogRetentionDays | string | Deprecated. Use ProtoPayload column to find this field. Retention period for transaction logs. |
| RequestBodySettingsUserbackuplable | string | Deprecated. Use ProtoPayload column to find this field. User backup label setting. |
| RequestBodySettingsVersion | bool | Deprecated. Use ProtoPayload column to find this field. Version information flag. |
| RequestCommand | string | SQL command executed, e.g. CREATE INDEX or INSERT (pgAudit request.command). |
| RequestDatabase | string | Database name specified in the request. |
| RequestDatabaseSessionId | string | Database session identifier for the pgAudit event (pgAudit request.databaseSessionId). |
| RequestEnableFinalBackup | bool | Deprecated. Use ProtoPayload column to find this field. Indicates if final backup was enabled in the request. |
| RequestEndTime | datetime | Deprecated. Use ProtoPayload column to find this field. Timestamp marking when the request processing completed |
| RequestFilter | string | Deprecated. Use ProtoPayload column to find this field. Filter used in the request to narrow results. |
| RequestFinalBackupTtlDays | string | Deprecated. Use ProtoPayload column to find this field. Time to live (in days) for the final backup. |
| RequestId | string | Deprecated. Use ProtoPayload column to find this field. Unique ID of the request. |
| RequestInstance | string | Deprecated. Use ProtoPayload column to find this field. Instance identifier from the request. |
| RequestMaxResults | string | Deprecated. Use ProtoPayload column to find this field. Maximum number of results requested. |
| RequestMetadataCallerIP | string | IP address of the caller. |
| RequestMetadataRequestAttributesAuth | string | Deprecated. Use ProtoPayload column to find this field. Authentication attributes of the request. |
| RequestMetadataRequestAttributesDestinationAttributes | string | Deprecated. Use ProtoPayload column to find this field. Destination attributes for the request. |
| RequestMetadataRequestAttributesRequestReason | string | Deprecated. Use ProtoPayload column to find this field. Reason for the request. |
| RequestMetadataRequestAttributesRequestTime | datetime | Deprecated. Use ProtoPayload column to find this field. Timestamp when the request was made. |
| RequestName | string | Deprecated. Use ProtoPayload column to find this field. Name field from the request payload. |
| RequestOperation | string | Deprecated. Use ProtoPayload column to find this field. The operation type included in the request. |
| RequestPageSize | string | Deprecated. Use ProtoPayload column to find this field. Page size specified in the request. |
| RequestParent | string | Deprecated. Use ProtoPayload column to find this field. The parent resource under which the request is made. |
| RequestProject | string | Deprecated. Use ProtoPayload column to find this field. Project associated with the request. |
| RequestResourceId | string | Deprecated. Use ProtoPayload column to find this field. ID of the resource being requested. |
| RequestSha1Fingerprint | string | Deprecated. Use ProtoPayload column to find this field. SHA-1 fingerprint associated with the certificate. |
| RequestStartTime | datetime | Deprecated. Use ProtoPayload column to find this field. Start time specified in the request. |
| RequestStatement | string | Full SQL statement text (pgAudit request.statement). |
| RequestStatementId | string | Statement identifier within the database session (pgAudit request.statementId). |
| RequestUser | string | Database user that executed the statement (pgAudit request.user). |
| ResourceLabelsDatabaseId | string | Database identifier from resource labels. |
| ResourceLabelsProjectId | string | Project ID from resource labels. |
| ResourceLabelsRegion | string | Region from resource labels. |
| ResponseBackupContextBackupId | string | Deprecated. Use ProtoPayload column to find this field. Backup ID from the response's backup context. |
| ResponseBackupContextKind | string | Deprecated. Use ProtoPayload column to find this field. Kind of backup context returned. |
| ResponseBackupContextName | string | Deprecated. Use ProtoPayload column to find this field. Name in the backup context of the response. |
| ResponseClientCert | string | Deprecated. Use ProtoPayload column to find this field. Client certificate in the response. |
| ResponseEphemeralCertKind | string | Deprecated. Use ProtoPayload column to find this field. Kind of ephemeral certificate in the response. |
| ResponseInstanceUid | string | Deprecated. Use ProtoPayload column to find this field. Instance UID returned in the response. |
| ResponseKind | string | Deprecated. Use ProtoPayload column to find this field. Kind field of the response. |
| ResponseName | string | Deprecated. Use ProtoPayload column to find this field. Name included in the response. |
| ResponseOperation | string | Deprecated. Use ProtoPayload column to find this field. Indicates the type of operation performed in the response. |
| ResponseOperationType | string | Deprecated. Use ProtoPayload column to find this field. Operation type in the response. |
| ResponsePromoteContextPrimary | string | Deprecated. Use ProtoPayload column to find this field. Primary instance in the promote context. |
| ResponsePromoteContextReplica | string | Deprecated. Use ProtoPayload column to find this field. Replica instance in the promote context. |
| ResponseSelfLink | string | Deprecated. Use ProtoPayload column to find this field. Self-link URL of the response resource. |
| ResponseServerCaCert | string | Deprecated. Use ProtoPayload column to find this field. PEM-encoded CA certificate from the server used for TLS validation |
| ResponseStatus | string | Deprecated. Use ProtoPayload column to find this field. Status of the response operation. |
| ResponseTargetId | string | Deprecated. Use ProtoPayload column to find this field. Target ID in the response. |
| ResponseTargetLink | string | Deprecated. Use ProtoPayload column to find this field. Target link URL in the response. |
| ResponseTargetProject | string | Deprecated. Use ProtoPayload column to find this field. Project associated with the response target. |
| ResponseType | string | Deprecated. Use ProtoPayload column to find this field. Type of the response. |
| ResponseUser | string | Deprecated. Use ProtoPayload column to find this field. User information from the response. |
| ServiceName | string | Name of the GCP service handling the request. |
| Severity | string | Severity level of the log entry. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StatusCode | string | Status code returned by the operation. |
| StatusMessage | string | Message describing the status of the operation. |
| TenantId | string | The Log Analytics workspace ID |
| TextPayload | string | Raw engine/session log line (postgres.log etc). Not parsed. |
| TimeGenerated | datetime | Time when the log entry was generated. |
| Timestamp | datetime | Timestamp of the logged event. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [GCPCloudSQL Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpcloudsql)

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

