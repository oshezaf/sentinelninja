# ThreatIntelExportOperation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ThreatIntelExportOperation table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/threatintelexportoperation) |

## Schema (19 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/threatintelexportoperation)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| DestinationInfo | dynamic | Additional information about the export destination depending on ExportType. |
| ErrorDetails | string | Additional information when Status is 'Failure' / 'Timeout'. |
| ExportDuration | int | The total time, in milliseconds, taken to complete the export operation. |
| ExportedBy | string | The user who initiated the export operation (email address). |
| ExportId | string | A value that uniquely identifies the Export operation. |
| ExportType | string | Represents the export destination type. e.g. TAXII |
| ExternallyExportedId | string | The unique identifier of the exported object. |
| Id | string | A Sentinel internal unique identifier that identifies a STIX object and can be used with Sentinel APIs. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Status | string | Status of the export operation, possible values: 'Success', 'Failure', 'Timeout'. |
| StixId | string | A globally unique identifier that identifies a STIX object. |
| TenantId | string | The Log Analytics workspace ID |
| TimeExported | datetime | The time of export to destination (UTC). |
| TimeGenerated | datetime | The timestamp of when the log entry was generated (UTC). |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Threat intelligence - TAXII Export (Preview)](../connectors/threatintelligencetaxiiexport.md) |  |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/threatintelligence`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

