# BehaviorInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Behaviors from Microsoft Defender for Cloud Apps (not available for GCC) and User and Entity Behavior Analytics (UEBA)

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/behaviorinfo) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-behaviorinfo-table) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (20 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/behaviorinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AccountObjectId | string | Unique identifier for the account in Azure AD. |
| AccountUpn | string | User principal name (UPN) of the account. |
| ActionType | string | Type of activity that triggered the event. Associated with specific MITRE ATT&CK techniques. |
| AdditionalFields | string | Additional information about the entity or event. |
| AttackTechniques | string | MITRE ATT&CK techniques associated with the activity that triggered the alert. Defined by the MITRE ATT&CK Matrix for Enterprise. |
| BehaviorId | string | Unique identifier for the behavior. |
| Categories | string | Types of threat indicator or breach activity identified by the alert. Defined by the MITRE ATT&CK Matrix for Enterprise. |
| DataSources | string | Products or services that provided information for the behavior. |
| Description | string | Description of the behavior. |
| DetectionSource | string | Detection technology or sensor that identified the notable component or activity. |
| DeviceId | string | Unique identifier for the device in the service. |
| EndTime | datetime | Date and time of the last activity related to the behavior. |
| ServiceSource | string | Product or service that provided the alert information. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartTime | datetime | Date and time of the first activity related to the behavior. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the record was generated. |
| Type | string | The name of the table |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

