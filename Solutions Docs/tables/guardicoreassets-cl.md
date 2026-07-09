# GuardicoreAssets_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Akamai *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (28 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/GuardicoreAssets_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| active | bool |
| agent_id | string |
| bios_uuid | string |
| comments | string |
| Computer | string |
| doc_version | long |
| first_seen | long |
| full_name | string |
| hw_uuid | string |
| id | string |
| is_agent_installed | bool |
| is_on | bool |
| last_guest_agent_details_update | long |
| last_seen | long |
| ManagementGroupName | string |
| MG | string |
| name | string |
| RawData | string |
| revision | long |
| sampling_timestamp | int |
| SourceSystem | string |
| status | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| vm_id | string |
| vm_name | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Akamai Guardicore](../solutions/akamai-guardicore.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Akamai Guardicore](../connectors/akamaiguardicore.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

