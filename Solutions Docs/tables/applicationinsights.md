# ApplicationInsights

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ApplicationInsights table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/applicationinsights) |

## Schema (99 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/applicationinsights)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AccountAcquisitionDate | datetime |  |
| AnonAcquisitionDate | datetime |  |
| AnonUserId | string |  |
| ApplicationId | string |  |
| ApplicationName | string |  |
| ApplicationProtocol | string |  |
| ApplicationTypeVersion | string |  |
| AuthAcquisitionDate | datetime |  |
| AvailabilityCount | int |  |
| AvailabilityDuration | real |  |
| AvailabilityDurationCount | int |  |
| AvailabilityDurationMax | real |  |
| AvailabilityDurationMin | real |  |
| AvailabilityDurationStdDev | real |  |
| AvailabilityMax | real |  |
| AvailabilityMessage | string |  |
| AvailabilityMetricCount | int |  |
| AvailabilityMin | real |  |
| AvailabilityResult | string |  |
| AvailabilityRunLocation | string |  |
| AvailabilityStdDev | real |  |
| AvailabilityTestId | string |  |
| AvailabilityTestName | string |  |
| AvailabilityTimestamp | datetime |  |
| AvailabilityValue | real |  |
| Browser | string |  |
| BrowserVersion | string |  |
| City | string |  |
| ClientIP | string |  |
| Computer | string |  |
| Continent | string |  |
| Country | string |  |
| csUserAgent | string |  |
| CustomEventCount | int |  |
| CustomEventDimensions | string |  |
| CustomEventName | string |  |
| DataSizeMetricCount | int |  |
| DataSizeMetricValue | real |  |
| DeveloperMode | string |  |
| DeviceID | string |  |
| DeviceModel | string |  |
| DeviceName | string |  |
| DeviceType | string |  |
| ExceptionAssembly | string |  |
| ExceptionCount | int |  |
| ExceptionGroup | string |  |
| ExceptionHandledAt | string |  |
| ExceptionHasStack | bool |  |
| ExceptionMessage | string |  |
| ExceptionMethod | string |  |
| ExceptionStack | string |  |
| ExceptionType | string |  |
| Host | string |  |
| IsAuthenticated | bool |  |
| isSynthetic | string |  |
| Language | string |  |
| Latitude | string |  |
| LocalSubnet | string |  |
| Longitude | string |  |
| ManagementGroupName | string |  |
| OperationID | string |  |
| OperationName | string |  |
| OS | string |  |
| OsVersion | string |  |
| PageViewCount | int |  |
| PageViewDuration | real |  |
| PageViewDurationCount | int |  |
| PageViewDurationMax | real |  |
| PageViewDurationMin | real |  |
| PageViewDurationStdDev | real |  |
| PageViewName | string |  |
| ParentOperationID | string |  |
| Province | string |  |
| RequestCount | int |  |
| RequestDuration | real |  |
| RequestDurationCount | int |  |
| RequestDurationMax | real |  |
| RequestDurationMin | real |  |
| RequestDurationStdDev | real |  |
| RequestID | string |  |
| RequestName | string |  |
| RequestSuccess | bool |  |
| ResponseCode | string |  |
| Role | string |  |
| RoleInstance | string |  |
| SampledCount | int |  |
| SamplingRate | string |  |
| ScreenResolution | string |  |
| SessionId | string |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| sPort | int |  |
| TelemetryType | string |  |
| TimeGenerated | datetime |  |
| Type | string | The name of the table |
| URL | string |  |
| URLBase | string |  |
| UserAccountId | string |  |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [ApplicationInsights Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/applicationinsights)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

