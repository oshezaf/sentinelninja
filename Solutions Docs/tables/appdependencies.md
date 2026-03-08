# AppDependencies

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AppDependencies table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Low value |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/appdependencies) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (42 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/appdependencies)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AppRoleInstance | string | Role instance of the application. |
| AppRoleName | string | Role name of the application. |
| AppVersion | string | Version of the application. |
| ClientBrowser | string | Browser running on the client device. |
| ClientCity | string | City where the client device is located. |
| ClientCountryOrRegion | string | Country or region where the client device is located. |
| ClientIP | string | IP address of the client device. |
| ClientModel | string | Model of the client device. |
| ClientOS | string | Operating system of the client device. |
| ClientStateOrProvince | string | State or province where the client device is located. |
| ClientType | string | Type of the client device. |
| Data | string | Detailed information about the dependency call, such as a full URI or a SQL statement. |
| DependencyType | string | Dependency type, such as HTTP or SQL. |
| DurationMs | real | Number of milliseconds the dependency call took to complete. |
| Id | string | Application-generated, unique ID of the dependency call. |
| IKey | string | Instrumentation key of the Azure resource. |
| ItemCount | int | Number of telemetry items represented by a single sample item. |
| Measurements | dynamic | Application-defined measurements. |
| OperationId | string | Application-defined operation ID. |
| OperationName | string | Application-defined name of the overall operation. The OperationName values typically match the Name values for AppRequests. |
| ParentId | string | ID of the parent operation. |
| Properties | dynamic | Application-defined properties. |
| ReferencedItemId | string | Id of the item with additional details about the dependency call. |
| ReferencedType | string | Name of the table with additional details about the dependency call. |
| ResourceGUID | string | Unique, persistent identifier of an Azure resource. |
| ResultCode | string | Result code returned to the application by the dependency call. |
| SDKVersion | string | Version of the SDK used by the application to generate this telemetry item. |
| SessionId | string | Application-defined session ID. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Success | bool | Indicates whether the dependency call completed successfully. |
| SyntheticSource | string | Synthetic source of the operation. |
| Target | string | Target of a dependency call, such as a Web or a SQL server name. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when dependency call was recorded. |
| Type | string | The name of the table |
| UserAccountId | string | Application-defined account associated with the user. |
| UserAuthenticatedId | string | Persistent string that uniquely represents each authenticated user in the application. |
| UserId | string | Anonymous ID of a user accessing the application. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.insights/components`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

