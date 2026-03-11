# ZeroFoxAlertPoller_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (50 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ZeroFoxAlertPoller_CL.json)

| Column Name | Type |
|:------------|:-----|
| alert_type_s | string |
| asset_entity_group_id_d | real |
| asset_entity_group_name_s | string |
| asset_id_d | real |
| asset_image_s | string |
| asset_labels_s | string |
| asset_name_s | string |
| asset_term_s | string |
| assignee_s | string |
| business_network_s | string |
| content_created_at_t | datetime |
| darkweb_term_s | string |
| entered_by_s | string |
| entity_account_s | string |
| entity_email_receiver_id_s | string |
| entity_entity_group_id_d | real |
| entity_entity_group_name_s | string |
| entity_id_d | real |
| entity_image_s | string |
| entity_labels_s | string |
| entity_name_s | string |
| entity_term_s | string |
| escalated_b | bool |
| id_d | real |
| last_modified_t | datetime |
| logs_s | string |
| metadata_s | string |
| network_s | string |
| notes_s | string |
| offending_content_url_s | string |
| perpetrator_content_s | string |
| perpetrator_display_name_s | string |
| perpetrator_id_d | real |
| perpetrator_name_s | string |
| perpetrator_network_s | string |
| perpetrator_timestamp_t | datetime |
| perpetrator_type_s | string |
| perpetrator_url_s | string |
| protected_locations_s | string |
| protected_social_object_s | string |
| reviewed_b | bool |
| reviews_s | string |
| rule_group_id_d | real |
| rule_id_d | real |
| rule_name_s | string |
| Severity | real |
| status_s | string |
| tags_s | string |
| TimeGenerated | datetime |
| timestamp_t | datetime |

## Solutions (1)

This table is used by the following solutions:

- [ZeroFox](../solutions/zerofox.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ZeroFox Enterprise - Alerts (Polling CCF)](../connectors/zerofoxalertsdefinition.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (4)

**In solution [ZeroFox](../solutions/zerofox.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroFox Alerts - High Severity Alerts](../content/zerofox-zerofox-alerts-high-severity-alerts-deb45e6d-892f-40bf-9118-e2a6f26b788d-c9abb77d.md) |  |
| [ZeroFox Alerts - Informational Severity Alerts](../content/zerofox-zerofox-alerts-informational-severity-alerts-6f7a7413-b72f-4361-84ee-897baeb9c6d4-18c9cec2.md) |  |
| [ZeroFox Alerts - Low Severity Alerts](../content/zerofox-zerofox-alerts-low-severity-alerts-e0c7a91a-7aa1-498a-9c20-cd6c721f9345-7087702f.md) |  |
| [ZeroFox Alerts - Medium Severity Alerts](../content/zerofox-zerofox-alerts-medium-severity-alerts-a6496de5-911b-4199-b7db-d34ac9d70df3-2805ff18.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

