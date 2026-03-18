# SophosEPAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (18 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SophosEPAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| Created | datetime |
| CustomerId | string |
| data | dynamic |
| description | string |
| DvcAction | string |
| DvcHostname | string |
| event_service_event_id | string |
| EventEndTime | datetime |
| EventOriginalUid | string |
| EventProduct | string |
| EventSeverity | string |
| EventType | string |
| EventVendor | string |
| info | dynamic |
| Source | string |
| threat_cleanable | bool |
| ThreatName | string |
| TimeGenerated | datetime |

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

