# ACSSMSIncomingOperations

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ACSSMSIncomingOperations table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acssmsincomingoperations) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (29 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acssmsincomingoperations)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| CallerIpAddress | string | The caller IP address, if the operation corresponds to an API call that would come from an entity with a publicly available IP address. |
| Category | string | The log category of the event. Logs with the same log category and resource type will have the same properties fields. |
| CorrelationId | string | The ID for correlated events. Can be used to identify correlated events between multiple tables. |
| Country | string | The recipient country. |
| DeliveryAttempts | int | The number of attempts made to deliver this message. |
| DurationMs | int | The duration of the operation in milliseconds. |
| IncomingMessageLength | int | The number of characters in the incoming message. |
| Level | string | The severity level of the operation. |
| MessageId | string | The identifier of the outgoing Sms message. Only present if message processed. |
| Method | string | The method used in the request. |
| NumberType | string | The type of number used for sending or receiving the SMS message (e.g. LongCodeNumber) |
| OperationName | string | The operation associated with log record. |
| OperationVersion | string | The API-version associated with the operation or version of the operation (if there is no API version). |
| OutgoingMessageLength | int | The number of characters in the outgoing message. |
| PhoneNumber | string | The number used for sending or receiving the SMS message (e.g. +18445791704) |
| PlatformType | string | The platform type being used in the request. |
| ResultDescription | string | The status text response of the result of this operation. |
| ResultSignature | string | The sub status of the operation. If this operation corresponds to a REST API call, this field is the HTTP status code of the corresponding REST call. |
| ResultType | string | The status of the operation. |
| SdkType | string | The SDK type being used in the request. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The name of the table |
| URI | string | The URI of the request. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.communication/communicationservices`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

