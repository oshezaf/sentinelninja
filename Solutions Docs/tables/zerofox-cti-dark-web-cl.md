# ZeroFox_CTI_dark_web_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (19 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ZeroFox_CTI_dark_web_CL.json)

| Column Name | Type |
|:------------|:-----|
| content_audience_s | string |
| created_at_t | datetime |
| domain_s | string |
| forum_name_s | string |
| forum_uuid_g | guid |
| general_topic_s | string |
| language_code_s | string |
| network_type_s | string |
| parent_uuid_g | guid |
| post_body_s | string |
| post_member_name_s | string |
| post_type_s | string |
| post_uuid_g | guid |
| sequence_number_d | real |
| thread_name_s | string |
| thread_url_s | string |
| thread_uuid_g | guid |
| TimeGenerated | datetime |
| timestamp_t | datetime |

## Solutions (1)

This table is used by the following solutions:

- [ZeroFox](../solutions/zerofox.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

