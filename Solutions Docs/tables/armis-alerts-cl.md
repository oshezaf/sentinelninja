# Armis_Alerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (29 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Armis_Alerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| ActivityUUIDs | string |
| AffectedDevicesCount | real |
| AlertId | real |
| AlertType | string |
| Armis_Alert_Time | datetime |
| Classification | string |
| Computer | string |
| ConnectionIds | string |
| Description | string |
| DestinationEndpoints | string |
| DeviceIds | string |
| EventProduct | string |
| EventVendor | string |
| LastAlertUpdateTime | datetime |
| ManagementGroupName | string |
| MG | string |
| MitreAttackLabels | string |
| PolicyId | string |
| PolicyLabels | string |
| PolicyTitle | string |
| RawData | string |
| Severity | string |
| SourceEndpoints | string |
| SourceSystem | string |
| Status | string |
| StatusChangeTime | datetime |
| TenantId | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Armis](../solutions/armis.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Armis Alerts](../connectors/armisalerts.md) |  |
| [Armis Alerts Activities](../connectors/armisalertsactivities.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ArmisAlerts](../parsers/armisalerts.md) | [Armis](../solutions/armis.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

