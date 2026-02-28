# CrowdStrike_Secondary_Data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | Crowdstrike |
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (61 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CrowdStrike_Secondary_Data_CL.json)

| Column Name | Type |
|:------------|:-----|
| AdditionalFields | dynamic |
| AgentLoadFlags | string |
| AgentLocalTime | string |
| AgentTimeOffset | string |
| AgentVersion | string |
| aid | string |
| aip | string |
| BiosManufacturer | string |
| BiosVersion | string |
| Category | string |
| ChassisType | string |
| cid | string |
| City | string |
| CompanyName | string |
| ComputerName | string |
| ConfigBuild | string |
| ConfigIDBuild | string |
| Continent | string |
| Country | string |
| CurrentLocalIP | string |
| detectionCount | string |
| discoverer_aid | string |
| discoverer_devicetype | string |
| discovererCount | string |
| event_platform | string |
| externalIP | string |
| FalconGroupingTags | string |
| FileName | string |
| FileVersion | string |
| FirstDiscoveredDate | string |
| FirstSeen | string |
| FolderName | string |
| GatewayIP | string |
| GatewayMAC | string |
| HostHiddenStatus | string |
| hostname | string |
| installationTimestamp | string |
| InterfaceAlias | string |
| InterfaceDescription | string |
| LastDiscoveredBy | string |
| LocalAddressIP4 | string |
| localipCount | string |
| MAC | string |
| MachineDomain | string |
| MACPrefix | string |
| OU | string |
| PointerSize | string |
| ProductName | string |
| ProductType | string |
| ProductVersion | string |
| SensorGroupingTags | string |
| ServicePackMajor | string |
| SHA256HashData | string |
| SiteName | string |
| SoftwareType | string |
| subnet | string |
| SystemManufacturer | string |
| SystemProductName | string |
| TimeGenerated | datetime |
| Timezone | string |
| Version | string |

## Solutions (1)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) |  |
| [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CrowdStrikeReplicatorV2](../parsers/crowdstrikereplicatorv2.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

