# ZimperiumMitigationLog_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (17 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ZimperiumMitigationLog_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| account_id | string |
| Computer | string |
| detection_app_instance_id | string |
| device_os_s | string |
| event_id_s | string |
| event_timestamp_s | string |
| ManagementGroupName | string |
| MG | string |
| mitigated | bool |
| RawData | string |
| SourceSystem | string |
| TenantId | string |
| threat_uuid | string |
| TimeGenerated | datetime |
| Type | string |
| zdevice_id | string |

## Solutions (1)

This table is used by the following solutions:

- [Zimperium Mobile Threat Defense](../solutions/zimperium-mobile-threat-defense.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Zimperium Mobile Threat Defense](../connectors/zimperiummtdalerts.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

