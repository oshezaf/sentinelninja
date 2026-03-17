# Armis_Activities_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (42 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Armis_Activities_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| ActivityType | string |
| ActivityUUID | string |
| Armis_Activity_Time | datetime |
| Computer | string |
| ConnectionIds | string |
| Content | string |
| DecisionData | string |
| DecisionData_AnswerIps | string |
| DecisionData_ClientOfferedSuites | string |
| DecisionData_DeviceId | real |
| DecisionData_Host | string |
| DecisionData_Method | string |
| DecisionData_Port | real |
| DecisionData_QueryType | string |
| DecisionData_SelectedSuite | string |
| DecisionData_SelectedSuiteSecurityLevel | string |
| DecisionData_SrcDeviceId | real |
| DecisionData_SrcIp | string |
| DecisionData_SrcMac | string |
| DecisionData_SslConnectionStatus | string |
| DecisionData_UserAgent | string |
| DecisionData_Version | string |
| DestinationEndpoints | string |
| DeviceIds | string |
| EventProduct | string |
| EventVendor | string |
| ManagementGroupName | string |
| MG | string |
| Protocol | string |
| RawData | string |
| Sensor | string |
| SensorName | string |
| SensorType | string |
| Site | string |
| SiteLocation | string |
| SiteName | string |
| Sites | string |
| SourceEndpoints | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Armis](../solutions/armis.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Armis Activities](../connectors/armisactivities.md) |  |
| [Armis Alerts Activities](../connectors/armisalertsactivities.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ArmisActivities](../parsers/armisactivities.md) | [Armis](../solutions/armis.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

