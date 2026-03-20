# ABAPChangeDocsLog

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ABAPChangeDocsLog table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/abapchangedocslog) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (36 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/abapchangedocslog)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| ActualChangeNumber | string | Actual change number. |
| AgentId | string | Unique agent or integration suite identifier. |
| ChangedTableKey | string | Changed table key. |
| ChangeNumber | string | Document change number. |
| ClientId | string | The ClientId is a three-digit number that identifies a specific client within an SAP system. The ClientId is used in various SAP transactions and configuration settings to identify the client and ensure that the correct client is being accessed or configured. |
| CreatedFromPlannedChange | string | Created from planned change, in the following syntax:('X' , ' '). |
| CurrencyKeyNew | string | Currency key: new value. |
| CurrencyKeyOld | string | Currency key: old value. |
| FieldName | string | Field name. |
| FlagText | string | Flag text. |
| HeaderTypeOfChange | string | Header type of change, including: U = Change; I = Insert; E = Delete Single Docu; D = Delete; J = Insert Single Docu. |
| Instance | string | The Instance refers to a specific installation of an SAP system on a server. An SAP system can have multiple instances running on the same server, each with its own set of processes and resources. The Instance is identified by a unique name that is set during the installation of the SAP system, following syntax: <HOST><SYSID><SYSNR>. |
| ItemTypeOfChange | string | Item type of change, including: U = Change; I = Insert; E = Delete Single Docu; D = Delete; J = Insert Single Docu. |
| Language | string | Document language. |
| ObjectClass | string | Object class, such as BELEG, BPAR, PFCG, IDENTITY. |
| ObjectId | string | Object ID. |
| PlannedChangeNumber | string | Planned change number. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SystemId | string | The SystemId is a unique identifier for a specific SAP system. It is a three-character alphanumeric code that is used to distinguish between different SAP systems. |
| SystemNumber | string | The SystemNumber is a two-digit number that identifies a specific SAP system. It is set during the installation of an SAP system and cannot be changed afterwards. The SystemNumber is used in various SAP transactions and configuration settings to identify the system and ensure that the correct system is being accessed or configured. |
| SystemRole | string | The SAP system's role. |
| SystemUniqueId | string | Unique system identifier. |
| TableName | string | Table name. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the record was generated. |
| TransactionCode | string | Transaction code. |
| Type | string | The name of the table |
| UOMNew | string | Unit of measure: new value. |
| UOMOld | string | Unit of measure: old value. |
| UpdatedOn | datetime | The date and time of the event occured in the SAP system in UTC format. |
| User | string | The User who performed the a specific event or activity. |
| ValueNew | string | Field content: new value. |
| ValueOld | string | Field content: old value. |
| Version | string | Document change version. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

