# NetworkAccessGenerativeAIInsights

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for NetworkAccessGenerativeAIInsights table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | IT & Management Tools, Network, Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/networkaccessgenerativeaiinsights) |

## Schema (14 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/networkaccessgenerativeaiinsights)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| Activity | string | The type of generative AI activity being performed. |
| Content | string | The content or query associated with the generative AI interaction. |
| DestinationUrl | string | The URL of the generative AI endpoint accessed. |
| EventId | string | Unique identifier for the generative AI event. |
| EventType | string | The type of generative AI event that occurred. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SubActivity | string | The specific type of operation within the activity. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time (UTC) that the event was generated. |
| TransactionId | string | Unique identifier for the transaction. |
| Type | string | The name of the table |
| UserPrincipalName | string | The UPN of the user who performed the activity. |

## Solutions (1)

This table is used by the following solutions:

- [Global Secure Access](../solutions/global-secure-access.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Global Secure Access](../solutions/global-secure-access.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GSAMCPInsights](../content/global-secure-access-gsamcpinsights-87ae8ba3.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

