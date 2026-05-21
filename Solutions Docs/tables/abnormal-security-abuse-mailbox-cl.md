# ABNORMAL_SECURITY_ABUSE_MAILBOX_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

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

## Schema (24 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity%5CData%20Connectors%5CAbnormalSecurity_CCF/AbnormalSecurity_table_AbuseMailbox.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| abx_body | string | Abuse mailbox report event payload |
| abx_body_abx_body_abnormal_message_id_d | real | Abnormal message ID (numeric) |
| abx_body_abx_body_campaign_id_g | string | Abuse campaign UUID |
| abx_body_abx_body_email_label_or_location_s | string | Email folder label or location |
| abx_body_abx_body_internet_message_id_s | string | Internet Message-ID header |
| abx_body_abx_body_judgement_s | string | Verdict on the reported email |
| abx_body_abx_body_message_reported_time_s | string | Timestamp when message was reported |
| abx_body_abx_body_not_analyzed_b | bool | Whether the email was analyzed |
| abx_body_abx_body_reason_for_no_analysis_s | string | Reason why the email was not analyzed |
| abx_body_abx_body_recipient_address_s | string | Email address of the recipient |
| abx_body_abx_body_recipient_name_s | string | Name of the email recipient |
| abx_body_abx_body_reported_b | bool | Whether the email was manually reported |
| abx_body_abx_body_reporter_address_s | string | Email address of the reporter |
| abx_body_abx_body_reporter_name_s | string | Name of the reporter |
| abx_body_abx_body_subject_s | string | Email subject |
| abx_body_abx_metadata_event_type_s | string | From abx_body.abx_metadata |
| abx_body_abx_metadata_timestamp_s | string | From abx_body.abx_metadata |
| abx_body_abx_metadata_trace_id_g | string | From abx_body.abx_metadata |
| abx_metadata | string | Full event metadata object containing event_type, timestamp, and trace_id |
| abx_metadata_event_type_s | string | Event type identifier from top-level abx_metadata |
| abx_metadata_timestamp_s | string | Event timestamp from top-level abx_metadata (string due to nanosecond precision) |
| abx_metadata_trace_id_g | string | Trace ID (GUID) from top-level abx_metadata |
| Time | string | Event timestamp in RFC3339 format |
| TimeGenerated | datetime | Timestamp when the event was ingested into Microsoft Sentinel |

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

