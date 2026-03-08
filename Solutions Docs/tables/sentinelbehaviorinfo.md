# SentinelBehaviorInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SentinelBehaviorInfo table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sentinelbehaviorinfo) |

## Schema (23 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sentinelbehaviorinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AccountObjectId | string | Unique identifier for the account in Microsoft Entra ID. |
| AccountUpn | string | User principal name (UPN) of the account. |
| ActionType | string | Type of behavior. |
| AdditionalFields | string | Additional information about the entity or event. |
| AttackTechniques | string | MITRE ATT&CK techniques associated with the activity that triggered the behavior. |
| BehaviorId | string | Unique identifier for the behavior. |
| Categories | string | Types of threat indicator or breach activity identified by the behavior. |
| DataSources | string | Products or services that provided information for the behavior. |
| Description | string | Description of the behavior. |
| DetectionSource | string | Detection technology or sensor that identified the notable component or activity. |
| DeviceId | string | Unique identifier for the device in the service. |
| EndTime | datetime | Date and time of the last activity related to the behavior. |
| ServiceSource | string | Product or service that provided the behavior. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartTime | datetime | Date and time of the first activity related to the behavior. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the record was generated. |
| Title | string | Title of the behavior. |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [UEBA Essentials](../solutions/ueba-essentials.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [UEBA Essentials](../solutions/ueba-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [UEBABehaviorsAnalysisWorkbook](../content/ueba-essentials-uebabehaviorsanalysisworkbook-c444e4d9.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/securityinsights`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

