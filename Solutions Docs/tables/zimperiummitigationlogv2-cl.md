# ZimperiumMitigationLogV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Zimperium *(basis: projected)* |
| **Source Product** | Mobile Threat Defense CCF *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (31 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zimperium%20Mobile%20Threat%20Defense%5CData%20Connectors%5CZimperiumMTD_CCF/ZimperiumMitigationLogV2_table.json)

| Column Name | Type |
|:------------|:-----|
| account_id | string |
| additional_properties | dynamic |
| detection_app | string |
| detection_app_instance_id | string |
| detection_app_version | string |
| device_id | string |
| device_info_tag1 | string |
| device_info_tag2 | string |
| device_jailbroken | bool |
| device_model | string |
| device_operator | string |
| device_os | string |
| device_os_version | string |
| device_owner_email | string |
| device_owner_first_name | string |
| device_owner_id | string |
| device_owner_last_name | string |
| device_owner_middle_name | string |
| device_time | datetime |
| device_type | string |
| mdm_alt_ids | dynamic |
| mdm_device_id | string |
| mitigation_reason | string |
| risk_posture_name | string |
| severity_name | string |
| threat_display_name | string |
| threat_name | string |
| threat_status | string |
| threat_uuid | string |
| TimeGenerated | datetime |
| zdevice_id | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Zimperium Mobile Threat Defense](../solutions/zimperium-mobile-threat-defense.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Zimperium Mobile Threat Defense CCF](../connectors/zimperiummtdpush.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

