# GCPNATAudit

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GCPNATAudit table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpnataudit) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (63 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpnataudit) · [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformNAT/Data%20Connectors/GCPNATLogs_ccp/GCPNATLogs_DCR.json)

| Column Name | Type | Description | Source |
|:------------|:-----|:------------|:-------|
| _BilledSize | real | The record size in bytes | Azure Monitor docs |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account | Azure Monitor docs |
| AuthorizationInfo | string | Details about the authorization. | Azure Monitor docs |
| CallerIp | string | IP address of the caller. | Azure Monitor docs |
| EncryptedInterconnectRouter | bool | Whether the router uses encrypted interconnect. | Azure Monitor docs |
| GCPResourceName | string | Name of the resource affected. | Azure Monitor docs |
| GCPResourceType | string | Type of the GCP resource. | Azure Monitor docs |
| insertId | string | A unique ID for the log entry. | DCR, Azure Monitor docs |
| jsonPayload | dynamic |  | DCR |
| labels | dynamic |  | DCR |
| logName | string | The name of the log stream. | DCR, Azure Monitor docs |
| MethodName | string | API method invoked. | Azure Monitor docs |
| operation | dynamic |  | DCR |
| OperationFirst | bool | Indicates if this is the first operation in the series. | Azure Monitor docs |
| OperationId | string | Identifier of the operation. | Azure Monitor docs |
| OperationLast | bool | Indicates if this is the last operation in the series. | Azure Monitor docs |
| OperationProducer | string | Producer of the operation. | Azure Monitor docs |
| PayloadRequestNats | string | NATs request payload. | Azure Monitor docs |
| PayloadType | string | Type of payload in the log. | Azure Monitor docs |
| PrincipalEmail | string | Email of the principal initiating the request. | Azure Monitor docs |
| PrincipalSubject | string | Subject or identity of the principal. | Azure Monitor docs |
| ProjectId | string | GCP Project ID where the event occurred. | Azure Monitor docs |
| protoPayload | dynamic |  | DCR |
| receiveTimestamp | datetime | Time when the log was received. | DCR, Azure Monitor docs |
| RequestAttributeAuth | string | Authorization details of the request. | Azure Monitor docs |
| RequestAttributeDestination | string | Destination details of the request. | Azure Monitor docs |
| RequestAttributeTime | datetime | Timestamp of the request attribute. | Azure Monitor docs |
| RequestId | string | Unique ID of the request. | Azure Monitor docs |
| RequestName | string | Name of the request. | Azure Monitor docs |
| RequestNetwork | string | Network where the request was made. | Azure Monitor docs |
| RequestRegion | string | Region where the request originated. | Azure Monitor docs |
| RequestSelfLink | string | SelfLink URL of the request resource. | Azure Monitor docs |
| RequestType | string | Type of the request. | Azure Monitor docs |
| resource | dynamic |  | DCR |
| ResourceLocation | string | Geographic location of the resource. | Azure Monitor docs |
| ResourceRegion | string | Region of the GCP resource. | Azure Monitor docs |
| ResponseErrorCode | string | Error code if any error occurred. | Azure Monitor docs |
| ResponseErrorMessage | string | Error message returned, if any. | Azure Monitor docs |
| ResponseErrors | string | Details of any errors returned. | Azure Monitor docs |
| ResponseId | string | Identifier of the response. | Azure Monitor docs |
| ResponseInsertTime | datetime | Insert time of the response. | Azure Monitor docs |
| ResponseName | string | Name of the response. | Azure Monitor docs |
| ResponseOperationType | string | Type of operation performed. | Azure Monitor docs |
| ResponseProgress | string | Progress status of the response. | Azure Monitor docs |
| ResponseRegion | string | Region associated with the response. | Azure Monitor docs |
| ResponseSelfLink | string | SelfLink URL of the response. | Azure Monitor docs |
| ResponseSelfLinkWithId | string | SelfLink URL with ID in the response. | Azure Monitor docs |
| ResponseStartTime | datetime | Start time of the response. | Azure Monitor docs |
| ResponseStatus | string | Status of the response. | Azure Monitor docs |
| ResponseTargetId | string | Target ID in the response. | Azure Monitor docs |
| ResponseTargetLink | string | Target link in the response. | Azure Monitor docs |
| ResponseType | string | Type of the response returned. | Azure Monitor docs |
| ResponseUser | string | User returned in the response. | Azure Monitor docs |
| RootTriggerId | string | Root trigger ID of the operation. | Azure Monitor docs |
| RouterId | string | Identifier of the Cloud Router. | Azure Monitor docs |
| ServiceName | string | Name of the GCP service. | Azure Monitor docs |
| severity | string | Severity level of the event. | DCR, Azure Monitor docs |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics | Azure Monitor docs |
| TenantId | string | The Log Analytics workspace ID | Azure Monitor docs |
| TimeGenerated | datetime | The time at which the log was generated. | Azure Monitor docs |
| timestamp | datetime |  | DCR |
| Type | string | The name of the table | Azure Monitor docs |
| UserAgent | string | User agent string of the caller. | Azure Monitor docs |

## Solutions (1)

This table is used by the following solutions:

- [GoogleCloudPlatformNAT](../solutions/googlecloudplatformnat.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Google Cloud Platform NAT (via Codeless Connector Framework)](../connectors/gcpnatlogsccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

