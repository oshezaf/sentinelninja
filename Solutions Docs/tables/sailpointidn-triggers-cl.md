# SailPointIDN_Triggers_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (54 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SailPointIDN_Triggers_CL.json)

| Column Name | Type |
|:------------|:-----|
| Body__metadata_invocationId_g | datetime |
| Body__metadata_triggerType_s | string |
| Body_attributes_created_t | datetime |
| Body_attributes_customAttribute1_s | string |
| Body_attributes_customAttribute2_s | string |
| Body_attributes_department_s | string |
| Body_attributes_displayName_s | string |
| Body_attributes_email_s | string |
| Body_attributes_employeeNumber_s | string |
| Body_attributes_firstname_s | string |
| Body_attributes_identificationNumber_s | string |
| Body_attributes_inactive_s | string |
| Body_attributes_isManager_b | bool |
| Body_attributes_lastname_s | string |
| Body_attributes_manager_id_s | string |
| Body_attributes_manager_name_s | string |
| Body_attributes_uid_s | string |
| Body_changes_s | string |
| Body_completed_t | datetime |
| Body_errors_s | string |
| Body_fileName_s | string |
| Body_identity_id_g | string |
| Body_identity_name_s | string |
| Body_identity_type_s | string |
| Body_ownerEmail_s | string |
| Body_ownerName_s | string |
| Body_query_s | string |
| Body_searchName_s | string |
| Body_searchResults_Account_count_s | string |
| Body_searchResults_Account_noun_s | string |
| Body_searchResults_Account_preview_s | string |
| Body_searchResults_Entitlement_count_s | string |
| Body_searchResults_Entitlement_noun_s | string |
| Body_searchResults_Entitlement_preview_s | string |
| Body_searchResults_Identity_count_s | bool |
| Body_searchResults_Identity_noun_s | bool |
| Body_searchResults_Identity_preview_s | bool |
| Body_signedS3Url_s | bool |
| Body_source_id_g | string |
| Body_source_name_s | string |
| Body_source_type_s | string |
| Body_started_t | datetime |
| Body_stats_added_d | real |
| Body_stats_changed_d | real |
| Body_stats_removed_d | real |
| Body_stats_scanned_d | real |
| Body_stats_unchanged_d | real |
| Body_status_s | string |
| Body_warnings_s | string |
| Metadata_invocationId_g | string |
| Metadata_triggerId_s | string |
| Metadata_triggerType_s | string |
| ody_attributes_manager_type_s | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [SailPointIdentityNow](../solutions/sailpointidentitynow.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SailPoint IdentityNow](../connectors/sailpointidentitynow.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [SailPointIdentityNow](../solutions/sailpointidentitynow.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SailPointIdentityNowAlertForTriggers](../content/sailpointidentitynow-sailpointidentitynowalertfortriggers-08330c3d-487e-4f5e-a539-1e7d06dea786-9d60dbe5.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

