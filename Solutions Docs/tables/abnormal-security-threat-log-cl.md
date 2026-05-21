# ABNORMAL_SECURITY_THREAT_LOG_CL

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

## Schema (53 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity%5CData%20Connectors%5CAbnormalSecurity_CCF/AbnormalSecurity_table_ThreatLog.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| abx_body | string | Threat log event payload |
| abx_body_abx_body_abx_message_id_d | real | Abnormal message ID (numeric) |
| abx_body_abx_body_abx_message_id_str_s | string | Abnormal message ID (string) |
| abx_body_abx_body_abx_portal_url_s | string | Portal URL for the threat |
| abx_body_abx_body_attachment_analysis_s | string | Attachment analysis details (JSON array) |
| abx_body_abx_body_attachment_count_d | real | Number of attachments |
| abx_body_abx_body_attachment_names_s | string | Attachment filenames (JSON array) |
| abx_body_abx_body_attack_score_d | real | Attack confidence score |
| abx_body_abx_body_attack_strategy_s | string | Strategy used in the attack |
| abx_body_abx_body_attack_type_s | string | Classification of the attack type |
| abx_body_abx_body_attack_vector_s | string | Attack delivery vector |
| abx_body_abx_body_attacked_party_s | string | Party targeted by the attack |
| abx_body_abx_body_auto_remediated_b | bool | Whether the email was automatically remediated |
| abx_body_abx_body_bcc_emails_s | string | BCC email addresses (JSON array) |
| abx_body_abx_body_cc_emails_s | string | CC email addresses (JSON array) |
| abx_body_abx_body_folder_locations_s | string | Folder locations (JSON array) |
| abx_body_abx_body_from_address_s | string | Sender email address |
| abx_body_abx_body_from_name_s | string | Sender display name |
| abx_body_abx_body_impersonated_party_s | string | Party being impersonated |
| abx_body_abx_body_internet_message_id_s | string | Internet Message-ID header |
| abx_body_abx_body_is_read_b | bool | Whether the email was read before remediation |
| abx_body_abx_body_message_engagement_s | string | Message engagement metrics (forwarded/replied counts) |
| abx_body_abx_body_message_sources_s | string | Message source systems (JSON array) |
| abx_body_abx_body_post_remediated_b | bool | Whether the email was post-remediated |
| abx_body_abx_body_received_time_t | datetime | Time email was received |
| abx_body_abx_body_recipient_address_s | string | Primary recipient address |
| abx_body_abx_body_remediation_status_s | string | Current remediation status |
| abx_body_abx_body_remediation_timestamp_t | datetime | Timestamp of remediation action |
| abx_body_abx_body_reply_to_emails_s | string | Reply-to email addresses (JSON array) |
| abx_body_abx_body_return_path_s | string | Email return path address |
| abx_body_abx_body_sender_auth_results_dkim_s | string | DKIM authentication result |
| abx_body_abx_body_sender_auth_results_dmarc_s | string | DMARC authentication result |
| abx_body_abx_body_sender_auth_results_spf_s | string | SPF authentication result |
| abx_body_abx_body_sender_domain_s | string | Sender domain |
| abx_body_abx_body_sender_ip_address_s | string | Sender IP address |
| abx_body_abx_body_sent_time_t | datetime | Time email was sent |
| abx_body_abx_body_source_s | string | Detection source |
| abx_body_abx_body_subject_s | string | Email subject |
| abx_body_abx_body_summary_insights_s | string | Summary insight strings (JSON array) |
| abx_body_abx_body_tenant_s | string | Tenant full name |
| abx_body_abx_body_threat_id_g | string | Threat group UUID |
| abx_body_abx_body_to_addresses_s | string | Recipient addresses (JSON array) |
| abx_body_abx_body_url_count_d | real | Number of URLs |
| abx_body_abx_body_urls_s | string | URLs found in the email (JSON array) |
| abx_body_abx_metadata_event_type_s | string | From abx_body.abx_metadata |
| abx_body_abx_metadata_timestamp_s | string | From abx_body.abx_metadata |
| abx_body_abx_metadata_trace_id_g | string | From abx_body.abx_metadata |
| abx_metadata | string | Full event metadata object containing event_type, timestamp, and trace_id |
| abx_metadata_event_type_s | string | Event type identifier from top-level abx_metadata |
| abx_metadata_timestamp_s | string | Event timestamp from top-level abx_metadata |
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

