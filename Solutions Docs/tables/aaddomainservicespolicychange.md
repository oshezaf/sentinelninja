# AADDomainServicesPolicyChange

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AADDomainServicesPolicyChange table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Entra |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aaddomainservicespolicychange) |

## Schema (62 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aaddomainservicespolicychange)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AccessGranted | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| AccessRemoved | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| AuditPolicyChanges | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| AuditSourceName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| Category | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| CategoryId | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| CollisionTargetName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| CollisionTargetType | int | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| CorrelationId | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| CrashOnAuditFailValue | int | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| DisabledPrivilegeList | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| DnsName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| DomainBehaviorVersion | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| DomainName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| DomainPolicyChanged | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| DomainSid | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| EnabledPrivilegeList | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| EntryType | int | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| EventSourceId | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| Flags | int | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| ForceLogoff | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| ForestRoot | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| ForestRootSid | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| HandleId | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| KerberosPolicyChange | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| LockoutDuration | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| LockoutObservationWindow | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| LockoutThreshold | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| MachineAccountQuota | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| MaxPasswordAge | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| MinPasswordAge | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| MinPasswordLength | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| MixedDomainMode | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| NetbiosName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| NewSd | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| ObjectName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| ObjectServer | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| ObjectType | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| OemInformation | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| OldSd | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| OperationId | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| OperationName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| PasswordHistoryLength | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| PasswordProperties | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| RecordId | string | A unique identifier corresponding to this record. |
| ResourceId | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| ResultDescription | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| ResultType | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| SidFilteringEnabled | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SubcategoryGuid | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| SubcategoryId | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| TdoAttributes | int | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| TdoDirection | int | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| TdoType | int | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| TimeGenerated | datetime | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| TopLevelName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.aad/domainservices`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

