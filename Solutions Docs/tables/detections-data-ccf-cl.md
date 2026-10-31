# Detections_Data_CCF_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (88 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR%5CData%20Connectors%5CVectraCCFConnector/VectraRUX_Table_Detections.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| assignment | dynamic |  |
| assignment_assigned_by | dynamic |  |
| assignment_assigned_by_id | long |  |
| assignment_assigned_by_username | string |  |
| assignment_assigned_to | dynamic |  |
| assignment_assigned_to_id | long |  |
| assignment_assigned_to_username | string |  |
| assignment_date_assigned | datetime |  |
| assignment_id | long |  |
| category | string |  |
| certainty | real |  |
| change_type | string |  |
| d_detection_details | dynamic |  |
| d_type_vname | string |  |
| data_source | dynamic |  |
| data_source_sensor_id | string |  |
| data_source_sensor_name | string |  |
| data_source_type | string |  |
| detail | dynamic |  |
| detection_href | string |  |
| detection_id | real | ID of the detection object this event relates to (stored as real for backward compatibility with pre-CCF schema) |
| detection_type | string |  |
| dst_account | dynamic |  |
| dst_account_groups | dynamic |  |
| dst_account_id | long | Destination account entity ID |
| dst_account_name | string |  |
| dst_account_uid | string |  |
| dst_account_url | string |  |
| dst_domain | dynamic |  |
| dst_domain_dns | string |  |
| dst_domain_domain | string |  |
| dst_domain_external_target | string |  |
| dst_host | dynamic |  |
| dst_host_groups | dynamic |  |
| dst_host_id | long | Destination host entity ID |
| dst_host_ip | string |  |
| dst_host_name | string |  |
| dst_host_session_luid | string |  |
| dst_host_url | string |  |
| entity_id | real | ID of the entity associated with this detection (stored as real for backward compatibility with pre-CCF schema) |
| entity_name | string |  |
| entity_type | string |  |
| entity_uid | string |  |
| event_timestamp | datetime |  |
| event_type | string |  |
| external_reference_id | string | External ticket or case reference ID (e.g. JIRA, ServiceNow) |
| filters | dynamic |  |
| filters_filtered_by_ai | bool |  |
| filters_filtered_by_rule | bool |  |
| filters_filtered_by_user | bool |  |
| filters_is_custom_model | bool |  |
| filters_triaged | bool |  |
| grouped_details | dynamic |  |
| id | real | Autoincrementing event ID used for PersistentToken checkpointing (stored as real for backward compatibility with pre-CCF schema) |
| investigation_status | string |  |
| is_prioritized | bool |  |
| is_targeting_key_asset | string | Whether the detection targets a key asset (stored as string for backward compatibility) |
| mitre | dynamic |  |
| normal_domains | dynamic |  |
| process_context_data | dynamic | EDR process context data (e.g. CrowdStrike process details associated with the detection) |
| reason | string |  |
| severity | real |  |
| src_account | dynamic |  |
| src_account_groups | dynamic |  |
| src_account_id | long | Source account entity ID |
| src_account_name | string |  |
| src_account_url | string |  |
| src_external_host | dynamic |  |
| src_external_host_ip | string |  |
| src_external_host_name | string |  |
| src_host | dynamic |  |
| src_host_certainty | real |  |
| src_host_groups | dynamic |  |
| src_host_id | long | Source host entity ID |
| src_host_ip | string |  |
| src_host_is_key_asset | bool |  |
| src_host_name | string |  |
| src_host_threat | real |  |
| src_host_urgency_score | real |  |
| src_host_url | string |  |
| src_ip | string | Source IP address alias for src_host_ip (legacy backward compatibility column) |
| summary | dynamic |  |
| tags | dynamic |  |
| threat | real |  |
| TimeGenerated | datetime |  |
| triaged | bool |  |
| unresolved_priority | bool |  |
| url | string |  |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Vectra XDR](../solutions/vectra-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Vectra RUX Security Data Connector (via Codeless Connector Framework)](../connectors/vectraruxconnector.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (2)

**In solution [Vectra XDR](../solutions/vectra-xdr.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Vectra RUX - Create Incident for Escalated Account Detection or Unresolved Priority Account](../content/vectra-xdr-vectra-rux-create-incident-for-escalated-account-detection-or-unresolved-priority-account-231904f5-b670-4223-9bec-2e9aeca9cf5a-a40173c6.md) |  |
| [Vectra RUX - Create Incident for Escalated Host Detection or Unresolved Priority Host](../content/vectra-xdr-vectra-rux-create-incident-for-escalated-host-detection-or-unresolved-priority-host-231904f5-b670-4223-9bec-2e9aeca9cf5b-344720ca.md) |  |

### Workbooks (2)

**In solution [Vectra XDR](../solutions/vectra-xdr.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [VectraRUXDetectionTimeline](../content/vectra-xdr-vectraruxdetectiontimeline-0e8c0b9f.md) |  |
| [VectraRUXSecurityDashboard](../content/vectra-xdr-vectraruxsecuritydashboard-3f089ed1.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [VectraDetectionsCombined](../parsers/vectradetectionscombined.md) | [Vectra XDR](../solutions/vectra-xdr.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

