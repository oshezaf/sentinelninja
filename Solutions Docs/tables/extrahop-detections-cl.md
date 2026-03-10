# ExtraHop_Detections_CL

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

## Schema (54 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ExtraHop_Detections_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| additional_participants_s | string |
| assignee_s | string |
| categories_array_s | string |
| categories_ids_s | string |
| categories_string_s | string |
| description_s | string |
| dst_device_ipaddrs_s | string |
| dst_device_macaddr_s | string |
| dst_device_name_s | string |
| dst_device_oid_d | real |
| dst_device_role_s | string |
| dst_endpoint_s | string |
| dst_hostname_s | string |
| dst_ipaddr_s | string |
| dst_role_s | string |
| dst_type_s | string |
| dst_username_s | string |
| id_d | real |
| is_user_created_b | int |
| mitre_tactics_string_s | string |
| mitre_techniques_s | string |
| mitre_techniques_string_s | string |
| mod_time_d | real |
| properties_client_port_d | real |
| properties_command_s | string |
| properties_randomness_d | real |
| properties_s | string |
| properties_server_port_d | real |
| properties_user_s | string |
| recommended_b | int |
| recommended_factors_s | string |
| recommended_s | string |
| risk_score_d | real |
| sourcetype_s | string |
| src_device_ipaddrs_s | string |
| src_device_macaddr_s | string |
| src_device_name_s | string |
| src_device_oid_d | real |
| src_device_role_s | string |
| src_endpoint_s | string |
| src_hostname_s | string |
| src_ipaddr_s | string |
| src_role_s | string |
| src_type_s | string |
| src_username_s | string |
| status_s | string |
| ticket_id_d | real |
| time_d | real |
| TimeGenerated | datetime |
| title_s | string |
| Type | string |
| type_s | string |
| url_s | string |

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

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Generate alerts based on ExtraHop detections recommended for triage](../content/extrahop-generate-alerts-based-on-extrahop-detections-recommended-for-triage-cd65aebc-7e85-4cbb-9f91-ff0376c5d37d-c70bea70.md) |  |

### Workbooks (1)

**In solution [ExtraHop](../solutions/extrahop.md):**

| Content Item | Selection Criteria |
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

