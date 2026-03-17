# Armis_Devices_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (56 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Armis_Devices_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| AccessSwitch | string |
| Armis_Device_Time | datetime |
| Boundaries | string |
| BoundaryObjects | string |
| BusinessImpact | string |
| Category | string |
| Computer | string |
| CustomProperties | string |
| DataSources | string |
| DeviceType | string |
| DisplayTitle | string |
| EventProduct | string |
| EventVendor | string |
| FirmwareVersion | string |
| FirstSeen | datetime |
| Id | real |
| IPAddress | string |
| IPAddresses | string |
| IPv6 | string |
| LastSeen | datetime |
| MacAddress | string |
| MacAddresses | string |
| ManagementGroupName | string |
| Manufacturer | string |
| MG | string |
| Model | string |
| Name | string |
| Names | string |
| NamesList | string |
| OperatingSystem | string |
| OperatingSystemVersion | string |
| PlcModule | string |
| Protections | string |
| PurdueLevel | real |
| RawData | string |
| RiskLevel | real |
| Sensor | string |
| SensorName | string |
| SensorType | string |
| Site | string |
| SiteLocation | string |
| SiteName | string |
| SiteObject | string |
| SiteObject_Id | real |
| SiteObject_Location | string |
| SiteObject_Name | string |
| SiteObject_Tier | string |
| SourceSystem | string |
| Tags | string |
| TenantId | string |
| Tier | string |
| TimeGenerated | datetime |
| TypeEnum | string |
| UserIds | string |
| Visibility | string |

## Solutions (1)

This table is used by the following solutions:

- [Armis](../solutions/armis.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Armis Devices](../connectors/armisdevices.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ArmisDevice](../parsers/armisdevice.md) | [Armis](../solutions/armis.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

