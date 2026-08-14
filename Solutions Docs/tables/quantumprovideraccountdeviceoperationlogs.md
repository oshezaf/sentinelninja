# QuantumProviderAccountDeviceOperationLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for QuantumProviderAccountDeviceOperationLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/quantumprovideraccountdeviceoperationlogs) |

## Schema (19 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/quantumprovideraccountdeviceoperationlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | The log category. Value is Operational for all records in this table. |
| CorrelationId | string | A GUID used to group together a set of related events, such as the Started and end records of one run. |
| DeviceId | string | The stable identifier of the device the operation ran on. |
| DeviceName | string | The display name of the device the operation ran on. |
| DurationMs | long | The wall-clock elapsed time of the operation in milliseconds. Typically populated on the end (Succeeded or Failed) record. |
| Level | string | The severity level of the emitted event, such as Informational or Error. |
| Location | string | The Azure region where the Provider Account resource resides. |
| OperationName | string | The stable operation label for the device operation, such as Calibration. |
| OperationSubtype | string | The subtype of the operation. |
| OperationVersion | string | The contract version under which the operation event was emitted. |
| ResultType | string | The lifecycle result of the event. One of Started, Succeeded, or Failed. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) when the device operation event was recorded. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [QuantumProviderAccountDeviceOperationLogs Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/quantumprovideraccountdeviceoperationlogs)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

