# ThreatIntelObjects

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ThreatIntelObjects table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Source Vendor** | CrowdStrike, Cyjax, GreyNoise, Inc. and BlueCycle LLC, Infoblox, Joe Security, Lumen, MISP project & cudeso.be, Microsoft, Orange Cyberdefense, VMRay *(basis: projected)* |
| **Source Product** | Defender Threat Feed Data Connector V2, Defender Threat Intelligence, Falcon Adversary Intelligence, Threat Intelligence, Threat Intelligence IOC, Threat Intelligence Platforms, Threat intelligence - TAXII |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/threatintelobjects) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Resource Types](#resource-types)

## Schema (16 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/threatintelobjects)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AdditionalFields | dynamic | The type specifc fields that Sentinel adds. Contains the TLPLevel: white, green, amber, or red. |
| AzureTenantId | string | The tenant that submitted the STIX object. |
| Data | dynamic | All object properties, formatted according to STIX specification (<a href="https://docs.oasis-open.org/cti/stix/v2.1/os/stix-v2.1-os.pdf" data-linktype="external">https://docs.oasis-open.org/cti/stix/v2.1/os/stix-v2.1-os.pdf</a>). |
| Id | string | A value that uniquely identifies the STIX object. This value is usable with Sentinel APIs. |
| IsDeleted | bool | A value that indicates whether the data was deleted from Sentinel or not. |
| LastUpdateMethod | string | The component that last updated the record. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| StixType | string | The name of this STIX Object. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time of STIX object ingestion. |
| Type | string | The name of the table |
| WorkspaceId | string | The workspace that submitted the STIX object. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [ThreatIntelObjects Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/threatintelobjects)

## Solutions (10)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)
- [Cyjax](../solutions/cyjax.md)
- [Datalake2Sentinel](../solutions/datalake2sentinel.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [Infoblox](../solutions/infoblox.md)
- [JoeSandbox](../solutions/joesandbox.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MISP2Sentinel](../solutions/misp2sentinel.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [VMRay](../solutions/vmray.md)

## Connectors (14)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md) |  |
| [Cyjax Threat Intelligence IOC Connector](../connectors/cyjaxiocapi.md) |  |
| [Datalake2Sentinel](../connectors/datalake2sentinelconnector.md) |  |
| [GreyNoise Threat Intelligence](../connectors/greynoise2sentinelapi.md) |  |
| [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) |  |
| [JoeSandboxThreatIntelligence](../connectors/joesandbox.md) |  |
| [Lumen Defender Threat Feed Data Connector V2](../connectors/lumenthreatfeedconnectorv2.md) |  |
| [Lumen Defender Threat Feed Data Connector V2 (using Azure Functions Flex Consumption Plan with Private Networking)](../connectors/lumenthreatfeedconnectorv2privatenetworking.md) |  |
| [MISP2Sentinel](../connectors/misp2sentinelconnector.md) |  |
| [Microsoft Defender Threat Intelligence](../connectors/microsoftdefenderthreatintelligence.md) |  |
| [Threat Intelligence Platforms](../connectors/threatintelligence.md) |  |
| [Threat intelligence - TAXII](../connectors/threatintelligencetaxii.md) |  |
| [Threat Intelligence Upload API (Preview)](../connectors/threatintelligenceuploadindicatorsapi.md) |  |
| [VMRayThreatIntelligence](../connectors/vmray.md) |  |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/threatintelligence`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

