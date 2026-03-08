# ABAPTableDataLog

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ABAPTableDataLog table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/abaptabledatalog) |

## Schema (27 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/abaptabledatalog)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AgentId | string | Unique agent or integration suite identifier. |
| ClientId | string | The ClientId is a three-digit number that identifies a specific client within an SAP system. The ClientId is used in various SAP transactions and configuration settings to identify the client and ensure that the correct client is being accessed or configured. |
| DBLogId | string | The unique identifier of the database log. |
| Host | string | The hostname of the SAP system. |
| Instance | string | The Instance refers to a specific installation of an SAP system on a server. An SAP system can have multiple instances running on the same server, each with its own set of processes and resources. The Instance is identified by a unique name that is set during the installation of the SAP system, following syntax: <HOST><SYSID><SYSNR>. |
| Language | string | The language of the event. |
| LogKey | string | The unique identifier of the log key. |
| NewValue | string | The new value of the field. |
| OldValue | string | The old value of the field. |
| OperationTypeSQL | string | The type of operation that was performed, such as insert, update and delete. |
| Program | string | The program that was executed. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SystemId | string | The SystemId is a unique identifier for a specific SAP system. It is a three-character alphanumeric code that is used to distinguish between different SAP systems. |
| SystemNumber | string | The SystemNumber is a two-digit number that identifies a specific SAP system. It is set during the installation of an SAP system and cannot be changed afterwards. The SystemNumber is used in various SAP transactions and configuration settings to identify the system and ensure that the correct system is being accessed or configured. |
| SystemRole | string | The SAP system's role. |
| SystemUniqueId | string | Unique system identifier. |
| TableField | string | The field of the table that produced the change. |
| TableName | string | The name of the table that produced the change. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the record was generated. |
| TransactionCode | string | The transaction code of the event. |
| Type | string | The name of the table |
| UpdatedOn | datetime | The date and time of the event occured in the SAP system in UTC format. |
| User | string | The User who performed the a specific event or activity. |
| VersionNumber | string | The version number of the event. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

