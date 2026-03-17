# IntuneDevices

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for IntuneDevices table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Intune |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/intunedevices) |

## Schema (49 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/intunedevices)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AADTenantId | string | The AAD Tenant ID |
| AndroidPatchLevel | string | The Android patch level of the device |
| BatchId | string | The unique ID for the exported report |
| CategoryName | string | The category name of the device |
| CompliantState | string | The compliant state of the device |
| CreatedDate | string | The date and time of the device entry was created |
| DeviceId | string | The ID of the device |
| DeviceName | string | The name of the device |
| DeviceRegistrationState | string | The registration state of the device |
| DeviceState | string | The state of the device |
| EasID | string | The Emergency Alert System Identification of the device |
| EncryptionStatusString | string | String describing whether the device is encrypted |
| GraphDeviceIsManaged | bool | Boolean describing whether the graph device is managed |
| IMEI | string | The international mobile equipment identifier of the device |
| InGracePeriodUntil | string | The device grace period end time |
| IntuneAccountId | string | The Intune Account ID |
| JailBroken | string | String describing whether the device is jail broken |
| JoinType | string | The device join type |
| LastContact | string | The date and time of last contact |
| ManagedBy | string | The authority that the device is managed by |
| ManagedDeviceName | string | The managed device name |
| Manufacturer | string | The manufacturer of the device |
| MEID | string | The mobile equipment identifier of the device |
| Model | string | The model of the device |
| OperationName | string | The name of the operation |
| OS | string | The operating system of the device |
| OSVersion | string | The version of the operating system |
| Ownership | string | The ownership of the device |
| PhoneNumber | string | The phone number |
| PrimaryUser | string | The ID of the primary user |
| ReferenceId | string | The AAD Device ID |
| Result | string | The result of the operation |
| SerialNumber | string | The serial number of the device |
| SkuFamily | string | The stock-keeping unit family of the device |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Stats | dynamic | Statistics about the export, including the number of records exported per export |
| StorageFree | long | The free storage size of the device |
| StorageTotal | long | The total storage size of the device |
| SubscriberCarrierNetwork | string | The subscriber carrier network |
| SupervisedStatusString | string | String describing whether the device is supervised |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the report was generated (UTC) |
| Type | string | The name of the table |
| UPN | string | The user principal name |
| UserEmail | string | The user email address |
| UserName | string | The user name |
| WifiMacAddress | string | The WiFi MAC address of the device |

## Solutions (1)

This table is used by the following solutions:

- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)

---

## Content Items Using This Table (4)

### Workbooks (4)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DoDZeroTrustWorkbook](../content/github-only-dodzerotrustworkbook-844294c8.md) |  |
| [User_Analytics_Workbook](../content/github-only-user-analytics-workbook-b95f3e5a.md) |  |
| [ZeroTrustStrategyWorkbook](../content/github-only-zerotruststrategyworkbook-cd80dc2b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

