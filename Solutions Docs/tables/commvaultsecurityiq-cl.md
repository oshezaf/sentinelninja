# CommvaultSecurityIQ_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (23 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CommvaultSecurityIQ_CL.json)

| Column Name | Type |
|:------------|:-----|
| anomaly_sub_type_s | string |
| Computer | string |
| created_files_count_s | string |
| deleted_files_count_s | string |
| description_s | string |
| external_link_s | string |
| files_list_s | string |
| job_end_time_s | string |
| job_id_s | string |
| job_start_time_s | string |
| ManagementGroupName | string |
| MG | guid |
| originating_client_s | string |
| RawData | string |
| scanned_folder_list_s | string |
| severity_s | string |
| SourceSystem | string |
| subclient_id_d | real |
| TenantId | guid |
| TimeGenerated | datetime |
| Type | string |
| user_id_d | real |
| username_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Commvault Security IQ](../solutions/commvault-security-iq.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CommvaultSecurityIQ](../connectors/commvaultsecurityiq-cl.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [Commvault Security IQ](../solutions/commvault-security-iq.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Commvault Cloud Alert](../content/commvault-security-iq-commvault-cloud-alert-317e757e-c320-448e-8837-fc61a70fe609-276de419.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

