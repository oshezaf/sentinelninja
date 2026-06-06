# CloudStorageAggregatedEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Cloud storage activity and related events

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cloudstorageaggregatedevents) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-cloudstorageaggregatedevents-table) |

## Schema (49 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cloudstorageaggregatedevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AccountApplicationId | string | The application ID associated with the storage access |
| AccountObjectId | string | The unique identifier of the object is making the storage access |
| AccountTenantId | string | The unique identifier of the Azure tenant |
| AccountType | long | The account type used |
| AccountUpn | string | The user principal name of the accessing user |
| ActionType | string | Type of action (aggregated logs) |
| AdditionalFields | dynamic | Additional information about the event in JSON array format |
| AnonymousSuccessfulOperations | int | The count of successful anonymous operations |
| AuthenticationType | string | The authentication method used to access the storage (for example, AccountKey, SAS, Oauth) |
| AzureResourceId | string | The Azure Resource ID of the storage account |
| AzureSubscriptionId | string | Unique identifier assigned to the Azure subscription |
| CityName | string | The name of the city from where the storage was accessed |
| ClientCloudPlatformName | string | The name of the cloud platform where the data center is located |
| ClientSystemServiceName | string | The name of the system service is in the data center |
| CountryName | string | The name of the country from where the storage was accessed |
| DataAggregationEndTime | datetime | The end time during which the data was aggregated |
| DataAggregationStartTime | datetime | The start time during which the data was aggregated |
| DataSource | string | The source of the aggregated logs |
| DistinctGetOperations | int | The count of distinct GET operations performed |
| FailedOperationsCount | int | The count of failed storage operations |
| FirstEventTimestamp | datetime | The timestamp of the first observed operation in the aggregation period |
| HasAnonymousResourceNotFoundFailures | bool | Indicates whether anonymous resource not found failures occurred |
| HashReputationMd5List | dynamic | A list of MD5 hash reputations for the accessed resources |
| IpAddress | string | The IP addresses from which the storage was accessed |
| IsKnownSuspiciousIp | bool | Indicates whether the IP address is known to be suspicious |
| IsPrivateIp | bool | Indicates whether the IP address is private |
| IsTorExitNode | bool | Indicates whether the IP address is a Tor exit node |
| LastEventTimestamp | datetime | The timestamp of the last observed operation in the aggregation period |
| Location | string | The location of the storage account (region) |
| OperationNamesList | dynamic | A list of storage operations performed (for example, CreateContainer, DeleteContainer) |
| OperationsCount | int | The total number of storage operations performed |
| ProvinceName | string | The name of the province or state from where the storage was accessed |
| ReportId | string | GUID to identify the record in the specific table |
| ResourceGroup | string | Name of the resource group where the storage account resides |
| ServiceType | string | Specifies the type of storage service (for example, Blob, ADLS Gen2, Files.REST, Files.SMB) |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StorageAccount | string | The identifier for the storage account |
| StorageContainer | string | The identifier for the storage container |
| StorageFileShare | string | The identifier for the storage file share |
| SuccessfulOperationsCount | int | The count of successful storage operations |
| SuccessfulReadOperations | int | The count of successful read operations |
| SuspiciousUserAgentName | string | The name of the suspicious user agent accessing the storage |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time (UTC) when the record was generated |
| TotalResponseLength | int | The total response length of all GET operations during the aggregation period |
| Type | string | The name of the table |
| UserAgentHeader | string | Details of the user agent accessing the storage (for example, browser or application) |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

