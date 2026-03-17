# AzureMetrics

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AzureMetrics table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Low value |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azuremetrics) |

## Schema (41 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azuremetrics)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Average | real |  |
| CallerIpAddress | string | Deprecated |
| Category | string | Deprecated |
| Confidence | string | Deprecated |
| CorrelationId | string | Deprecated |
| Count | real | Number of samples collected during the time range. Can be used to determine the number of values that contributed to the average value. |
| Description | string | Deprecated |
| DurationMs | long | Deprecated |
| FirstReportedDateTime | string | Deprecated |
| IndicatorThreatType | string | Deprecated |
| IsActive | string | Deprecated |
| LastReportedDateTime | string | Deprecated |
| MaliciousIP | string | Deprecated |
| Maximum | real | Maximum value collected during in the time range. |
| MetricName | string | Display name of the metric. |
| Minimum | real | Minimum value collected during in the time range. |
| OperationName | string | Deprecated |
| OperationVersion | string | Deprecated |
| RemoteIPCountry | string | Deprecated |
| RemoteIPLatitude | real | Deprecated |
| RemoteIPLongitude | real | Deprecated |
| Resource | string | Resource name of the Azure resource reporting the metric. |
| ResourceGroup | string | Resource group name of the Azure resource reporting the metric. |
| ResourceId | string | Resource ID of the Azure resource reporting the metric. Same as _ResourceId present for backward compatibility reasons. _ResourceId should be used |
| ResourceProvider | string | Resource provider of the Azure resource reporting the metric. |
| ResultDescription | string | Deprecated |
| ResultSignature | string | Deprecated |
| ResultType | string | Reduces the set of data collected. The syntax allowed depends on the operation. See the operation's description for details. |
| Severity | int | Deprecated |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SubscriptionId | string | Subscription id of the Azure resource reporting the metric. |
| TimeGenerated | datetime | Date and time the record was created. |
| TimeGrain | string | Time grain of the metric e.g. PT1M |
| TLPLevel | string | Deprecated |
| Total | real | Sum of all of the values in the time range. |
| Type | string | The name of the table |
| UnitName | string | Unit of the metric. Examples include Seconds Percent Bytes. |

## Solutions (2)

This table is used by the following solutions:

- [Azure Storage](../solutions/azure-storage.md)
- [SlashNext](../solutions/slashnext.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Azure Storage Account](../connectors/azurestorageaccount.md) |  |
| [SlashNext Function App](../connectors/slashnextfunctionapp.md) |  |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.operationalinsights/workspaces`
- `microsoft.aad/domainservices`
- `microsoft.containerservice/managedclusters`
- `microsoft.apimanagement/service`
- `microsoft.network/applicationgateways`
- `microsoft.servicenetworking/trafficcontrollers`
- `microsoft.web/sites`
- `microsoft.kubernetes/connectedclusters`
- `microsoft.cache/redis`
- `microsoft.hardwaresecuritymodules/cloudhsmclusters`
- `microsoft.communication/communicationservices`
- `microsoft.documentdb/databaseaccounts`
- `microsoft.datacollaboration/workspaces`
- `microsoft.eventgrid/namespaces`
- `microsoft.eventgrid/topics`
- `microsoft.eventhub/namespaces`
- `microsoft.network/azurefirewalls`
- `microsoft.keyvault/vaults`
- `microsoft.managednetworkfabric/networkdevices`
- `microsoft.documentdb/mongoclusters`
- `microsoft.networkcloud/baremetalmachines`
- `microsoft.networkcloud/clustermanagers`
- `microsoft.networkcloud/clusters`
- `microsoft.networkcloud/storageappliances`
- `microsoft.network/loadbalancers`
- `microsoft.relay/namespaces`
- `microsoft.servicebus/namespaces`
- `microsoft.sql/servers`
- `microsoft.networkfunction/azuretrafficcollectors`
- `microsoft.network/networkmanagers`
- `microsoft.cognitiveservices/accounts`
- `microsoft.connectedcache/cachenodes`
- `microsoft.connectedvehicle/platformaccounts`
- `microsoft.databricks/workspaces`
- `microsoft.dbformysql/flexibleservers`
- `microsoft.dbforpostgresql/flexibleservers`
- `microsoft.devcenter/devcenters`
- `microsoft.compute/virtualmachines`
- `microsoft.machinelearningservices/workspaces`
- `microsoft.media/mediaservices`
- `microsoft.azureplaywrightservice/accounts`
- `microsoft.networkanalytics/dataproducts`
- `microsoft.storage/storageaccounts`
- `microsoft.storagecache/amlfilesytems`
- `microsoft.storagemover/storagemovers`
- `microsoft.synapse/workspaces`
- `microsoft.desktopvirtualization/hostpools`
- `microsoft.desktopvirtualization/applicationgroups`
- `microsoft.desktopvirtualization/workspaces`
- `microsoft.timeseriesinsights/environments`
- `microsoft.workloadmonitor/monitors`
- `microsoft.analysisservices/servers`
- `microsoft.batch/batchaccounts`
- `microsoft.appplatform/spring`
- `microsoft.signalrservice/signalr`
- `microsoft.containerregistry/registries`
- `microsoft.kusto/clusters`
- `microsoft.blockchain/blockchainmembers`
- `microsoft.eventgrid/domains`
- `microsoft.eventgrid/partnernamespaces`
- `microsoft.eventgrid/partnertopics`
- `microsoft.eventgrid/systemtopics`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`
- `microsoft.hybridcontainerservice/provisionedclusters`
- `microsoft.insights/autoscalesettings`
- `microsoft.devices/iothubs`
- `microsoft.servicefabric/clusters`
- `microsoft.logic/workflows`
- `microsoft.automation/automationaccounts`
- `microsoft.datafactory/factories`
- `microsoft.datalakestore/accounts`
- `microsoft.datalakeanalytics/accounts`
- `microsoft.powerbidedicated/capacities`
- `microsoft.datashare/accounts`
- `microsoft.sql/managedinstances`
- `microsoft.sql/servers/databases`
- `microsoft.dbformysql/servers`
- `microsoft.dbforpostgresql/servers`
- `microsoft.dbforpostgresql/serversv2`
- `microsoft.dbformariadb/servers`
- `microsoft.devices/provisioningservices`
- `microsoft.network/expressroutecircuits`
- `microsoft.network/frontdoors`
- `microsoft.network/networkinterfaces`
- `microsoft.network/networksecuritygroups`
- `microsoft.network/publicipaddresses`
- `microsoft.network/trafficmanagerprofiles`
- `microsoft.network/virtualnetworkgateways`
- `microsoft.network/vpngateways`
- `microsoft.network/virtualnetworks`
- `microsoft.search/searchservices`
- `microsoft.streamanalytics/streamingjobs`
- `microsoft.network/bastionhosts`
- `microsoft.healthcareapis/services`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

