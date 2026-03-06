# ThreatIntelObjects

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ThreatIntelObjects table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/threatintelobjects) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (16 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/threatintelobjects)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AdditionalFields | dynamic | The type specifc fields that Sentinel adds. Contains the TLPLevel: white, green, amber, or red. |
| AzureTenantId | string | The tenant that submitted the STIX object. |
| Data | dynamic | All object properties, formatted according to STIX specification (https://docs.oasis-open.org/cti/stix/v2.1/os/stix-v2.1-os.pdf). |
| Id | string | A value that uniquely identifies the STIX object. This value is usable with Sentinel APIs. |
| IsDeleted | bool | A value that indicates whether the data was deleted from Sentinel or not. |
| LastUpdateMethod | string | The component that last updated the record. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StixType | string | The name of this STIX Object. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time of STIX object ingestion. |
| Type | string | The name of the table |
| WorkspaceId | string | The workspace that submitted the STIX object. |

## Solutions (1)

This table is used by the following solutions:

- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)

## Connectors (5)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender Threat Intelligence](../connectors/microsoftdefenderthreatintelligence.md) |  |
| [Premium Microsoft Defender Threat Intelligence](../connectors/premiummicrosoftdefenderforthreatintelligence.md) |  |
| [Threat Intelligence Platforms](../connectors/threatintelligence.md) |  |
| [Threat intelligence - TAXII](../connectors/threatintelligencetaxii.md) |  |
| [Threat Intelligence Upload API (Preview)](../connectors/threatintelligenceuploadindicatorsapi.md) |  |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/threatintelligence`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

