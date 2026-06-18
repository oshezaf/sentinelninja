# ABNORMAL_SECURITY_ATO_CASE_CL

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

## Schema (16 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity/Data%20Connectors/AbnormalSecurity_CCF/AbnormalSecurity_table_AtoCase.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| abx_body | string | Account takeover case event payload |
| abx_body_abx_body_ato_case_id_s | string | Unique ATO case identifier |
| abx_body_abx_body_compromised_account_s | string | Email address of the compromised account |
| abx_body_abx_body_first_detected_t | datetime | Timestamp when ATO was first detected |
| abx_body_abx_body_indicators_s | string | Attack indicators (JSON array) |
| abx_body_abx_body_severity_s | string | Severity of the ATO case |
| abx_body_abx_body_status_s | string | Current status of the ATO case |
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

