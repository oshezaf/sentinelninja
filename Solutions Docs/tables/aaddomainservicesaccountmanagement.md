# AADDomainServicesAccountManagement

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AADDomainServicesAccountManagement table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Entra |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aaddomainservicesaccountmanagement) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (53 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aaddomainservicesaccountmanagement)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AccountExpires | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| AllowedToDelegateTo | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| CallerProcessId | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| CallerProcessName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| Category | string |  |
| ComputerAccountChange | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| CorrelationId | string |  |
| DisplayName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| DnsHostName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| GroupTypeChange | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| HomeDirectory | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| HomePath | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| LogonHours | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| MemberName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| MembershipExpirationTime | datetime | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| MemberSid | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| NewTargetUserName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| NewUacValue | string |  |
| OldTargetUserName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| OldUacValue | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| OperationName | string |  |
| PasswordLastSet | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| PrimaryGroupId | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| PrivilegeList | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| ProfilePath | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| RecordId | string | A unique identifier corresponding to this record. |
| ResourceId | string |  |
| ResultDescription | string |  |
| ResultType | string |  |
| SamAccountName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| ScriptPath | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| ServicePrincipalNames | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| SidHistory | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| SourceSid | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SourceUserName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| Status | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| SubjectDomainName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| SubjectLogonId | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| SubjectUserName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| SubjectUserSid | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| TargetSid | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| TimeGenerated | datetime |  |
| Type | string | The name of the table |
| UserAccountControl | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| UserParameters | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| UserPrincipalName | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| UserWorkstations | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |
| Workstation | string | The context of this field is dependent on the Windows Event being emitted, represented in the OperationName. Please see the Windows Server description of this event for the meaning of this field. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.aad/domainservices`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

