# Corelight_v3_corelight_ml_metrics_CL

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

## Schema (31 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_corelight_ml_metrics_CL.json)

| Column Name | Type |
|:------------|:-----|
| avg_broker_rtt | real |
| avg_python_to_zeek_lag | real |
| avg_zeek_to_python_lag | real |
| batched_record_size | long |
| domain_total | long |
| domains_sent | long |
| filtered_candidate | long |
| filtered_past_decisions | long |
| filtered_python_cache | long |
| filtered_python_time_budget | long |
| filtered_seen_eff | long |
| filtered_seen_full | long |
| health_check_last_response_ts | datetime |
| max_broker_rtt | real |
| max_python_to_zeek_lag | real |
| max_zeek_to_python_lag | real |
| node | string |
| num_past_decisions | long |
| num_seen_eff | long |
| num_seen_full | long |
| path | string |
| python_cache_size | long |
| result_parse_errors | long |
| result_received | long |
| stream | bool |
| system_name | string |
| TimeGenerated | datetime |
| ts_end | datetime |
| ts_start | datetime |
| Type | string |
| write_ts | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Corelight](../solutions/corelight.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

