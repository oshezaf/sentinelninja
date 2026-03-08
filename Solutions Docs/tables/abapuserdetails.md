# ABAPUserDetails

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ABAPUserDetails table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/abapuserdetails) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/abapuserdetails)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AgentId | string | Unique agent or integration suite identifier. |
| ChangedOn | datetime | Last changed on date and time. |
| ClientId | string | The ClientId is a three-digit number that identifies a specific client within an SAP system. The ClientId is used in various SAP transactions and configuration settings to identify the client and ensure that the correct client is being accessed or configured. |
| CreatedOn | datetime | Day on which user was created. |
| Email | string | Email address. |
| LastChangedBy | string | Last changed by. |
| LastSeen | datetime | User last logon. |
| LockedStatus | string | Locked status: 0: Not Locked, 32: Locked Globally By Administrator, 64: Locked Locally By Administrator, 128: Locked Due To Incorrect Logons. |
| Profiles | dynamic | List of profiles generated for the user. |
| Roles | dynamic | List of roles assigned to user. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SystemId | string | The SystemId is a unique identifier for a specific SAP system. It is a three-character alphanumeric code that is used to distinguish between different SAP systems. |
| SystemRole | string | The SAP system's role. |
| SystemUniqueId | string | Unique system identifier. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the record was sent to Sentinel. |
| Timezone | string | User default Time zone. |
| Type | string | The name of the table |
| User | string | SAP User. |
| UserGroup | string | SAP User group. |
| UserType | string | User Type (dialog, system). |
| ValidityDate | datetime | Last valid day for login in. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

