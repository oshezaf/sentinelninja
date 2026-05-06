# ABNORMAL_SECURITY_CASE_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (30 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity%5CData%20Connectors%5CAbnormalSecurity_CCF/AbnormalSecurity_table_Case.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| abx_body | string | Case event payload |
| abx_body_abx_body_case_id_d | real | Unique case identifier |
| abx_body_abx_body_case_status_s | string | Current status of the case |
| abx_body_abx_body_confidence_s | string | Detection confidence level |
| abx_body_abx_body_customer_d | real | Customer ID |
| abx_body_abx_body_date_created_t | datetime | Timestamp when the case was created |
| abx_body_abx_body_description_s | string | Human-readable description of the case |
| abx_body_abx_body_entity_entity_type_s | string | Type of the entity associated with the case |
| abx_body_abx_body_entity_identifier_s | string | Identifier of the entity associated with the case |
| abx_body_abx_body_event_timeline_s | string | Timeline of events (JSON array of objects) |
| abx_body_abx_body_event_type_s | string | Event type identifier (CASE) |
| abx_body_abx_body_first_customer_visible_time_t | datetime | Timestamp when case became visible to customer |
| abx_body_abx_body_first_observed_t | datetime | Timestamp when the case was first observed |
| abx_body_abx_body_genai_summary_s | string | AI-generated summary (JSON array of strings) |
| abx_body_abx_body_insights_s | string | Case insights (JSON array of objects) |
| abx_body_abx_body_platforms_s | string | Affected platforms (JSON array) |
| abx_body_abx_body_remediation_status_s | string | Remediation status of the case |
| abx_body_abx_body_schema_version_s | string | Schema version of the case payload |
| abx_body_abx_body_severity_s | string | Case severity level |
| abx_body_abx_body_tenant_s | string | Tenant identifier |
| abx_body_abx_body_trigger_event_s | string | Event that triggered case creation |
| abx_body_abx_metadata_event_type_s | string | From abx_body.abx_metadata |
| abx_body_abx_metadata_timestamp_s | string | From abx_body.abx_metadata |
| abx_body_abx_metadata_trace_id_g | string | From abx_body.abx_metadata |
| abx_metadata | string | Full event metadata object containing event_type, timestamp, and trace_id |
| abx_metadata_event_type_s | string | Event type identifier from top-level abx_metadata |
| abx_metadata_timestamp_s | string | Event timestamp from top-level abx_metadata |
| abx_metadata_trace_id_g | string | Trace ID (GUID) from top-level abx_metadata |
| Time | string | Event timestamp in RFC3339 format |
| TimeGenerated | string | Timestamp when the event was ingested into Microsoft Sentinel |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

