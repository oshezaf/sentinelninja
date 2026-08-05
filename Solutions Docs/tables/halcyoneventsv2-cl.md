# HalcyonEventsV2_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (39 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Halcyon%5CData%20Connectors%5CHalcyon_ccp_v2/Halcyon_table_events.json)

| Column Name | Type |
|:------------|:-----|
| action | string |
| action_id | int |
| activity_id | int |
| activity_name | string |
| actor | dynamic |
| answers | dynamic |
| app | dynamic |
| category_name | string |
| category_uid | int |
| class_name | string |
| class_uid | int |
| device | dynamic |
| disposition | string |
| disposition_id | int |
| driver | dynamic |
| dst_endpoint | dynamic |
| file | dynamic |
| HalcyonEventId | string |
| HalcyonSourceTime | datetime |
| message | string |
| metadata | dynamic |
| module | dynamic |
| process | dynamic |
| query | dynamic |
| raw_data | string |
| raw_record | string |
| rcode | string |
| rcode_id | int |
| severity | string |
| severity_id | int |
| src_endpoint | dynamic |
| status | string |
| status_id | int |
| TimeGenerated | datetime |
| traffic | dynamic |
| type_name | string |
| type_uid | long |
| unmapped | dynamic |
| user | dynamic |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Halcyon](../solutions/halcyon.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Halcyon Connector (v2)](../connectors/halcyonpushv2.md) |  |

---

## Parsers Using This Table (7)

### Other Parsers (7)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [Halcyon_OCSF_ApplicationLifecycle](../parsers/halcyon-ocsf-applicationlifecycle.md) | [Halcyon](../solutions/halcyon.md) |  |
| [Halcyon_OCSF_Authentication](../parsers/halcyon-ocsf-authentication.md) | [Halcyon](../solutions/halcyon.md) |  |
| [Halcyon_OCSF_DnsActivity](../parsers/halcyon-ocsf-dnsactivity.md) | [Halcyon](../solutions/halcyon.md) |  |
| [Halcyon_OCSF_FileActivity](../parsers/halcyon-ocsf-fileactivity.md) | [Halcyon](../solutions/halcyon.md) |  |
| [Halcyon_OCSF_KernelActivity](../parsers/halcyon-ocsf-kernelactivity.md) | [Halcyon](../solutions/halcyon.md) |  |
| [Halcyon_OCSF_NetworkActivity](../parsers/halcyon-ocsf-networkactivity.md) | [Halcyon](../solutions/halcyon.md) |  |
| [Halcyon_OCSF_ProcessActivity](../parsers/halcyon-ocsf-processactivity.md) | [Halcyon](../solutions/halcyon.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

