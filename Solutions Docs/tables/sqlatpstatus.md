# SqlAtpStatus

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SqlAtpStatus table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sqlatpstatus) |

## Schema (18 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sqlatpstatus)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AgentId | string | ID of the source monitoring agent |
| AgentStartTime | datetime | The start time of the Microsoft Monitoring Agent process running SQL ATP solution. This can help find agents who restart frequently or not at all and can indicate a problem or machine with out-of-date configuration |
| ClientIP | string | Client IP address of the source computer |
| Computer | string | Name of the computer that hosts the SQL Server |
| HostResourceId | string | Resource ID of the machine hosting the SQL Instance, if it exists |
| IntelligencePackVersion | string | The IP version of SQL Advanced Threat Protection running on the machine |
| LastError | string | The last error from SQL Advanced Threat Protection (if it exists). The error refers to the time passed from the previous status entry and can help diagnose transient or persistent issues with SQL ATP protection |
| MachineUUID | string | The unique identifier of the machine running the Microsoft Monitoring Agent |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| SqlInstanceName | string | SQL Server instance name |
| SqlInstanceStartTime | datetime | The start time of the SQL Server instance |
| SqlInstanceVersion | string | SQL Server instance version |
| Status | string | SQL Advanced Threat Protection status for the SQL instance |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [SqlAtpStatus Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sqlatpstatus)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

