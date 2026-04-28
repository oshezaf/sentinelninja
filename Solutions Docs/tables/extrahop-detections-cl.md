# ExtraHop_Detections_CL

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
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (59 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ExtraHop_Detections_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| additional_participants | dynamic |
| assignee | string |
| categories_array | dynamic |
| categories_ids | dynamic |
| categories_string | string |
| description | string |
| DetectionTitle | string |
| DetectionType | string |
| dst | dynamic |
| dst_device | dynamic |
| dst_device_ipaddrs | dynamic |
| dst_device_macaddr | string |
| dst_device_name | string |
| dst_device_oid | real |
| dst_device_role | string |
| dst_endpoint | string |
| dst_external | bool |
| dst_hostname | string |
| dst_ipaddr | string |
| dst_role | string |
| dst_type | string |
| dst_username | string |
| id | real |
| is_user_created | bool |
| mitre_tactics_string | string |
| mitre_techniques | dynamic |
| mitre_techniques_string | string |
| mod_time | real |
| properties | dynamic |
| properties_client_port | real |
| properties_command | string |
| properties_randomness | real |
| properties_server_port | real |
| properties_user | string |
| recommended | bool |
| recommended_factors | dynamic |
| resolution | string |
| risk_score | real |
| src | dynamic |
| src_device | dynamic |
| src_device_ipaddrs | dynamic |
| src_device_macaddr | string |
| src_device_name | string |
| src_device_oid | real |
| src_device_role | string |
| src_endpoint | string |
| src_external | bool |
| src_hostname | string |
| src_ipaddr | string |
| src_role | string |
| src_type | string |
| src_username | string |
| status | string |
| ticket_id | real |
| TimeGenerated | datetime |
| timestamp | real |
| Type | string |
| url | string |

## Solutions (1)

This table is used by the following solutions:

- [ExtraHop](../solutions/extrahop.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ExtraHop Detections Data Connector](../connectors/extrahop.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [ExtraHop](../solutions/extrahop.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Generate alerts based on ExtraHop detections recommended for triage](../content/extrahop-generate-alerts-based-on-extrahop-detections-recommended-for-triage-cd65aebc-7e85-4cbb-9f91-ff0376c5d37d-c70bea70.md) |  |

### Workbooks (1)

**In solution [ExtraHop](../solutions/extrahop.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ExtraHopDetectionsOverview](../content/extrahop-extrahopdetectionsoverview-b10f683c.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ExtraHopDetections](../parsers/extrahopdetections.md) | [ExtraHop](../solutions/extrahop.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

