# SophosEPEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (29 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SophosEPEvents_CL.json)

| Column Name | Type |
|:------------|:-----|
| amsi_threat_data | dynamic |
| appCerts | dynamic |
| AppSha256 | string |
| CoreRemedyItems | string |
| CoreRemedyTotalItems | int |
| Created | datetime |
| CustomerId | string |
| details | dynamic |
| DstUserSid | string |
| DvcAction | string |
| DvcHostname | string |
| EndpointId | string |
| EventEndTime | datetime |
| EventMessage | string |
| EventOriginalUid | string |
| EventProduct | string |
| EventSeverity | string |
| EventSubType | string |
| EventType | string |
| EventVendor | string |
| ips_threat_data | dynamic |
| Source | string |
| source_info | dynamic |
| SrcDvcType | string |
| SrcIpAddr | string |
| ThreatCategory | string |
| ThreatName | string |
| TimeGenerated | datetime |
| whitelist_properties | dynamic |

## Solutions (1)

This table is used by the following solutions:

- [Sophos Endpoint Protection](../solutions/sophos-endpoint-protection.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Sophos Endpoint Protection (using REST API)](../connectors/sophosendpointprotectionccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

