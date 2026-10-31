# AMLManagedNetworkEvent

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AMLManagedNetworkEvent table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/amlmanagednetworkevent) |

## Schema (14 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/amlmanagednetworkevent)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | The diagnostic log category. Always "ManagedNetworkEvent" for records in this table. |
| CorrelationId | string | Correlation identifier propagated by the Azure Machine Learning workspace pipeline. Use to correlate a managed network event with related workspace operations. |
| Level | string | The severity level of the log record. Typical values are Informational, Warning, and Error. |
| OperationName | string | The ARM-format operation name identifying the firewall rule category evaluated. Example values include MICROSOFT.MACHINELEARNINGSERVICES/WORKSPACES/MANAGEDNETWORK/AZFWNETWORKRULE and MICROSOFT.MACHINELEARNINGSERVICES/WORKSPACES/MANAGEDNETWORK/AZFWAPPLICATIONRULE. |
| Properties | dynamic | Firewall rule evaluation details as emitted by the underlying managed Azure Firewall. Common fields include FirewallLogCategory (AZFWNetworkRule or AZFWApplicationRule), Action (Allow or Deny), ActionReason, Protocol, SourceIp, SourcePort, DestinationIp, DestinationPort, Fqdn, TargetUrl, Policy, RuleCollectionGroup, RuleCollection, Rule, IsTlsInspected, WebCategory, IsExplicitProxyRequest, and Sequence. The exact set of fields follows the upstream Azure Firewall log schema and may evolve as Azure Firewall adds new attributes. |
| ResultType | string | The outcome of the firewall rule evaluation. "Succeeded" indicates the traffic matched an Allow rule; "Failed" indicates the traffic was denied by a Deny rule or did not match any allowed rule. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The UTC timestamp at which the managed firewall evaluated the network flow. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [AMLManagedNetworkEvent Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/amlmanagednetworkevent)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

