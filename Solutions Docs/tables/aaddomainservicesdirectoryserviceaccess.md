# AADDomainServicesDirectoryServiceAccess

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AADDomainServicesDirectoryServiceAccess table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Entra |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aaddomainservicesdirectoryserviceaccess) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aaddomainservicesdirectoryserviceaccess)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AppCorrelationID | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| AttributeLDAPDisplayName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| AttributeSyntaxOID | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| AttributeValue | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| Category | string |  |
| CorrelationId | string |  |
| DSName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| DSType | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| NewObjectDN | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| ObjectClass | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| ObjectDN | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| ObjectGUID | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| OldObjectDN | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| OpCorrelationID | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| OperationName | string |  |
| OperationType | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| RecordId | string | A unique identifier corresponding to this record. |
| ResourceId | string |  |
| ResultDescription | string |  |
| ResultType | string |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TimeGenerated | datetime |  |
| TreeDelete | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.aad/domainservices`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

