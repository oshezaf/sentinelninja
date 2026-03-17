# SecurityDetection

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SecurityDetection table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securitydetection) |

## Schema (36 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securitydetection)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AccountsSeen | int |  |
| AlertSeverity | string |  |
| AlertTitle | string |  |
| AssociatedResource | string |  |
| ChildProcess | string |  |
| CommandLine | string |  |
| Computer | string |  |
| Description | string |  |
| DetectionID | string |  |
| Duration | string |  |
| ExtendedProperties | string |  |
| FailedAttempts | int |  |
| FullPath | string |  |
| InvalidAccountsSeen | int |  |
| IsFirstParty | bool |  |
| LogChannel | string |  |
| OccuringDatacenter | string |  |
| OriginalSeverity | string |  |
| ParentProcess | string |  |
| ProcessName | string |  |
| Provider | string |  |
| RemediationSteps | string |  |
| ReportingSystem | string |  |
| ServiceId | string |  |
| SubjectDomainName | string |  |
| SubjectUserName | string |  |
| SubscriptionId | string |  |
| SuccessfulLogins | int |  |
| SuspiciousProcess | string |  |
| TimeGenerated | datetime |  |
| Type | string | The name of the table |
| ValidAccountsSeen | int |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

