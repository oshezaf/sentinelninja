# ServiceNowCmdbCiComputer_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (33 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ServiceNowCMDB%5CData%20Connectors%5CServiceNowCMDB_CCF/table_ServiceNowCmdbCiComputer.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| CdRom | bool | CD |
| CdSpeed | int | CD Speed |
| ChassisType | string | Chassis type |
| CpuCoreCount | int | CPU core count |
| CpuCoreThread | int | CPU core thread |
| CpuCount | int | CPU count |
| CpuManufacturer | string | CPU manufacturer reference |
| CpuName | string | CPU name |
| CpuSpeed | string | CPU speed (MHz) |
| CpuType | string | CPU type |
| DefaultGateway | string | Default Gateway |
| DiskSpace | string | Disk space (GB) |
| Floppy | string | Floppy |
| FormFactor | string | Form factor |
| HardwareStatus | string | Hardware Status |
| HardwareSubstatus | string | Substatus |
| InternetFacing | bool | Internet Facing |
| MostFrequentUser | string | Most frequent logged in user reference |
| ObjectId | string | Object ID |
| Os | string | Operating System |
| OsAddressWidth | int | OS Address Width (bits) |
| OsDomain | string | OS Domain |
| OsServicePack | string | OS Service Pack |
| OsVersion | string | OS Version |
| Ram | int | RAM (MB) |
| SysCreatedBy | string | Created by |
| SysCreatedOn | datetime | Created date |
| SysId | string | Sys ID |
| SysModCount | int | Updates |
| SysUpdatedBy | string | Updated by |
| SysUpdatedOn | datetime | Updated date |
| TimeGenerated | datetime |  |
| Virtual | bool | Is Virtual |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [ServiceNowCMDB](../solutions/servicenowcmdb.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ServiceNow CMDB (via Codeless Connector Framework)](../connectors/servicenowcmdbconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

