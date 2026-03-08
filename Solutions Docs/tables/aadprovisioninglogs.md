# AADProvisioningLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AADProvisioningLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Entra |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadprovisioninglogs) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadprovisioninglogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AADTenantId | string | Unique Azure AD tenant ID |
| Category | string | Category of the event |
| ChangeId | string | Unique ID of this change in this cycle |
| CorrelationId | string | ID to provide provisioning trail |
| CycleId | string | Unique ID per job iteration |
| DurationMs | long | Indicates how long this provisioning action took to finish |
| Id | string | Indicates the unique ID for the activity |
| InitiatedBy | string | Details of who initiated this provisioning |
| JobId | string | The unique ID for the whole provisioning job |
| ModifiedProperties | string | Details of each property that was modified in this provisioning action on this object |
| OperationName | string | Name of the operation |
| OperationVersion | string | The REST API version that's requested by the client |
| ProvisioningAction | string | Indicates the activity name or the operation name. For a list of activities logged, refer to Azure AD activity list |
| ProvisioningStatusInfo | string | Details of provisioning status |
| ProvisioningSteps | string | Details of each step in provisioning |
| ResultDescription | string | When available, provides the error description for the provisioning operation |
| ResultSignature | string | Contains the error code, if any, for the provisioning operation |
| ResultType | string | The result of the provisioning operation can be Success, Failure, or Skipped |
| ServicePrincipal | string | Represents the service principal used for provisioning |
| SourceIdentity | string | Details of source object being provisioned |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TargetIdentity | string | Details of target object being provisioned |
| TargetSystem | string | Details of target system of the object being provisioned |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time of the event in UTC |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Entra ID](../connectors/azureactivedirectory.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

