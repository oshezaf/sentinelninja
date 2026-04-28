# GCPNATAudit

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GCPNATAudit table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpnataudit) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (57 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpnataudit)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AuthorizationInfo | string | Details about the authorization. |
| CallerIp | string | IP address of the caller. |
| EncryptedInterconnectRouter | bool | Whether the router uses encrypted interconnect. |
| GCPResourceName | string | Name of the resource affected. |
| GCPResourceType | string | Type of the GCP resource. |
| InsertId | string | A unique ID for the log entry. |
| LogName | string | The name of the log stream. |
| MethodName | string | API method invoked. |
| OperationFirst | bool | Indicates if this is the first operation in the series. |
| OperationId | string | Identifier of the operation. |
| OperationLast | bool | Indicates if this is the last operation in the series. |
| OperationProducer | string | Producer of the operation. |
| PayloadRequestNats | string | NATs request payload. |
| PayloadType | string | Type of payload in the log. |
| PrincipalEmail | string | Email of the principal initiating the request. |
| PrincipalSubject | string | Subject or identity of the principal. |
| ProjectId | string | GCP Project ID where the event occurred. |
| ReceiveTimestamp | datetime | Time when the log was received. |
| RequestAttributeAuth | string | Authorization details of the request. |
| RequestAttributeDestination | string | Destination details of the request. |
| RequestAttributeTime | datetime | Timestamp of the request attribute. |
| RequestId | string | Unique ID of the request. |
| RequestName | string | Name of the request. |
| RequestNetwork | string | Network where the request was made. |
| RequestRegion | string | Region where the request originated. |
| RequestSelfLink | string | SelfLink URL of the request resource. |
| RequestType | string | Type of the request. |
| ResourceLocation | string | Geographic location of the resource. |
| ResourceRegion | string | Region of the GCP resource. |
| ResponseErrorCode | string | Error code if any error occurred. |
| ResponseErrorMessage | string | Error message returned, if any. |
| ResponseErrors | string | Details of any errors returned. |
| ResponseId | string | Identifier of the response. |
| ResponseInsertTime | datetime | Insert time of the response. |
| ResponseName | string | Name of the response. |
| ResponseOperationType | string | Type of operation performed. |
| ResponseProgress | string | Progress status of the response. |
| ResponseRegion | string | Region associated with the response. |
| ResponseSelfLink | string | SelfLink URL of the response. |
| ResponseSelfLinkWithId | string | SelfLink URL with ID in the response. |
| ResponseStartTime | datetime | Start time of the response. |
| ResponseStatus | string | Status of the response. |
| ResponseTargetId | string | Target ID in the response. |
| ResponseTargetLink | string | Target link in the response. |
| ResponseType | string | Type of the response returned. |
| ResponseUser | string | User returned in the response. |
| RootTriggerId | string | Root trigger ID of the operation. |
| RouterId | string | Identifier of the Cloud Router. |
| ServiceName | string | Name of the GCP service. |
| Severity | string | Severity level of the event. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time at which the log was generated. |
| Type | string | The name of the table |
| UserAgent | string | User agent string of the caller. |

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

