# RecordedFutureIdentity_PlaybookAlertResults_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (48 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/RecordedFutureIdentity_PlaybookAlertResults_CL.json)

| Column Name | Type |
|:------------|:-----|
| alert_description | string |
| panel_evidence_summary_assessments | string |
| panel_evidence_summary_authorization_url | string |
| panel_evidence_summary_compromised_host_antivirus | string |
| panel_evidence_summary_compromised_host_computer_name | string |
| panel_evidence_summary_compromised_host_exfiltration_date | datetime |
| panel_evidence_summary_compromised_host_malware_file | string |
| panel_evidence_summary_compromised_host_os | string |
| panel_evidence_summary_compromised_host_os_username | string |
| panel_evidence_summary_compromised_host_timezone | string |
| panel_evidence_summary_compromised_host_uac | string |
| panel_evidence_summary_dump_description | string |
| panel_evidence_summary_dump_name | string |
| panel_evidence_summary_exposed_secret_details_clear_text_hint | string |
| panel_evidence_summary_exposed_secret_details_properties | string |
| panel_evidence_summary_exposed_secret_effectively_clear | bool |
| panel_evidence_summary_exposed_secret_hashes | string |
| panel_evidence_summary_exposed_secret_type | string |
| panel_evidence_summary_infrastructure_ip | string |
| panel_evidence_summary_malware_family_id | string |
| panel_evidence_summary_malware_family_name | string |
| panel_evidence_summary_subject | string |
| panel_evidence_summary_technologies | string |
| panel_status_actions_taken | string |
| panel_status_alert_rule_id | string |
| panel_status_alert_rule_label | string |
| panel_status_alert_rule_name | string |
| panel_status_assignee_id | string |
| panel_status_assignee_name | string |
| panel_status_case_rule_id | string |
| panel_status_case_rule_label | string |
| panel_status_created | datetime |
| panel_status_entity_id | string |
| panel_status_entity_name | string |
| panel_status_organisation_id | string |
| panel_status_organisation_name | string |
| panel_status_owner_id | string |
| panel_status_owner_name | string |
| panel_status_owner_organisation_details_enterprise_id | string |
| panel_status_owner_organisation_details_enterprise_name | string |
| panel_status_owner_organisation_details_organisations | string |
| panel_status_priority | string |
| panel_status_reopen | string |
| panel_status_status | string |
| panel_status_targets | string |
| panel_status_updated | datetime |
| playbook_alert_id | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Recorded Future Identity](../solutions/recorded-future-identity.md)

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [Recorded Future Identity](../solutions/recorded-future-identity.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Recorded Future Identity - Credential Exposure Detected](../content/recorded-future-identity-recorded-future-identity-credential-exposure-detected-b1c2d3e4-5678-90ab-cdef-444444444444-dd38ff85.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

