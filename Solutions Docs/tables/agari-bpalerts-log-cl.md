# agari_bpalerts_log_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (32 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/agari_bpalerts_log_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| alert_data | string |
| alert_type | string |
| Computer | string |
| created_at [UTC] | datetime |
| domain | string |
| id | dynamic |
| links_failure_stats_by_ip | string |
| links_failure_stats_by_subject | string |
| ManagementGroupName | string |
| MG | string |
| new_dmarc_record | string |
| new_spf_tree_domain | string |
| new_spf_tree_record | string |
| old_dmarc_record | string |
| old_spf_tree | string |
| old_spf_tree_domain | string |
| old_spf_tree_record | string |
| RawData | string |
| recent_messages | string |
| recent_start_ts [UTC] | datetime |
| resolved_at [UTC] | datetime |
| SourceSystem | string |
| spf_errors | string |
| summary | string |
| TenantId | string |
| TimeGenerated | datetime |
| top_hosts | string |
| top_subjects | string |
| top_uris | string |
| Type | string |
| updated_at[UTC] | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Agari](../solutions/agari.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Agari Phishing Defense and Brand Protection](../connectors/agari.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

