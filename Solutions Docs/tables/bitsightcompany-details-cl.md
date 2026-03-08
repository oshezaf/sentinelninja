# BitsightCompany_details_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (47 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/BitsightCompany_details_CL.json)

| Column Name | Type |
|:------------|:-----|
| available_upgrade_types | dynamic |
| bulk_email_sender_status | string |
| company_features | dynamic |
| compliance_claim | string |
| current_rating | real |
| custom_id | string |
| customer_monitoring_count | real |
| description | string |
| display_url | string |
| guid | string |
| has_company_tree | bool |
| has_delegated_security_controls | bool |
| has_preferred_contact | bool |
| homepage | string |
| in_spm_portfolio | bool |
| industry | string |
| industry_slug | string |
| ipv4_count | real |
| is_bundle | bool |
| is_csp | bool |
| is_mycomp_mysubs_bundle | bool |
| is_primary | bool |
| Name | string |
| parsed_type | string |
| people_count | real |
| permissions | dynamic |
| permissions_can_download_company_report | bool |
| permissions_can_enable_vendor_access | bool |
| permissions_can_unsubscribe | bool |
| permissions_can_view_company_reports | bool |
| permissions_can_view_service_providers | bool |
| primary_company | string |
| primary_domain | string |
| rating_industry_median | string |
| ratings | dynamic |
| related_companies | dynamic |
| search_count | real |
| security_grade | string |
| service_provider | bool |
| shortname | string |
| sparkline | string |
| sub_industry | string |
| sub_industry_slug | string |
| subscription_end_date | string |
| subscription_type | string |
| subscription_type_key | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [BitSight](../solutions/bitsight.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Bitsight data connector](../connectors/bitsight.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [BitSight](../solutions/bitsight.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [BitSightWorkbook](../content/bitsight-bitsightworkbook-85beb528.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [BitSightCompanyDetails](../parsers/bitsightcompanydetails.md) | [BitSight](../solutions/bitsight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

