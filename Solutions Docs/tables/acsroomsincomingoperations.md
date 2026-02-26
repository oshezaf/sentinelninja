# ACSRoomsIncomingOperations

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ACSRoomsIncomingOperations table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acsroomsincomingoperations) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acsroomsincomingoperations)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AddedRoomParticipantsCount | int | The count of participants added to a room. |
| CorrelationId | string | The unique ID of the request. |
| Level | string | The severity level of the operation. |
| OperationName | string | The operation associated with log record. e.g., CreateRoom, PatchRoom, GetRoom, ListRooms, DeleteRoom, GetParticipants, AddParticipants, UpdateParticipants, or RemoveParticipants. |
| OperationVersion | string | The API-version associated with the operation or version of the operation (if there is no API version). |
| PstnDialOutEnabled | bool | Flag to true if, at the time of the call, dial out to a PSTN number is enabled in a particular room. |
| RemovedRoomParticipantsCount | int | The count of participants removed in a room. |
| ResultSignature | string | The sub status of the operation. If this operation corresponds to a REST API call, this field is the HTTP status code of the corresponding REST call. |
| ResultType | string | The status of the operation. |
| RoomId | string | The ID of the room. |
| RoomLifespan | int | The Room lifespan in minutes. |
| RoomParticipantsAttendee | int | The participants count with attendee role. |
| RoomParticipantsConsumer | int | The participants count with consumer role. |
| RoomParticipantsCount | int | The count of participants in a room. |
| RoomParticipantsPresenter | int | The participants count with presenter role. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The name of the table |
| UpsertedRoomParticipantsCount | int | The count of participants upserted in a room. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.communication/communicationservices`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

