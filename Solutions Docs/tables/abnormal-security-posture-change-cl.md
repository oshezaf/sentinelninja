# ABNORMAL_SECURITY_POSTURE_CHANGE_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (25 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity%5CData%20Connectors%5CAbnormalSecurity_CCF/AbnormalSecurity_table_PostureChange.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| abx_body | string | Security posture change event payload |
| abx_body_abx_body_benchmarks_s | string | Security benchmarks (JSON array) |
| abx_body_abx_body_description_s | string | Description of the posture rule |
| abx_body_abx_body_event_id_s | string | Unique event identifier |
| abx_body_abx_body_platform_type_s | string | Platform type (e.g. M365, Google Workspace) |
| abx_body_abx_body_posture_area_s | string | Area of security covered by this posture |
| abx_body_abx_body_posture_category_s | string | Category of the posture rule |
| abx_body_abx_body_posture_id_s | string | Posture rule identifier |
| abx_body_abx_body_posture_name_s | string | Human-readable name of the posture rule |
| abx_body_abx_body_raw_event_s | string | Raw event payload from the detection pipeline |
| abx_body_abx_body_status_s | string | Current status of the posture |
| abx_body_abx_body_tags_s | string | Tags associated with the posture rule (JSON array) |
| abx_body_abx_body_tenant_id_d | real | Legacy tenant ID |
| abx_body_abx_body_timestamp_t | datetime | Timestamp of the posture change event |
| abx_body_abx_body_type_s | string | Posture change sub-type (e.g. configuration_drift) |
| abx_body_abx_body_workflow_status_s | string | Workflow status of the posture |
| abx_body_abx_metadata_event_type_s | string | From abx_body.abx_metadata |
| abx_body_abx_metadata_timestamp_s | string | From abx_body.abx_metadata |
| abx_body_abx_metadata_trace_id_g | string | From abx_body.abx_metadata |
| abx_metadata | string | Full event metadata object containing event_type, timestamp, and trace_id |
| abx_metadata_event_type_s | string | Event type identifier from top-level abx_metadata |
| abx_metadata_timestamp_s | string | Event timestamp from top-level abx_metadata |
| abx_metadata_trace_id_g | string | Trace ID (GUID) from top-level abx_metadata |
| Time | string | Event timestamp in RFC3339 format |
| TimeGenerated | datetime | Timestamp when the event was ingested into Microsoft Sentinel |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [AbnormalSecurity](../solutions/abnormalsecurity.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

