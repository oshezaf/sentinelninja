# alertscompromisedcredentialdata_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (44 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/alertscompromisedcredentialdata_CL.json)

| Column Name | Type |
|:------------|:-----|
| _id_s | string |
| _ResourceId | string |
| acked_s | string |
| alert_name_s | string |
| alert_s | string |
| alert_type_s | string |
| app_s | string |
| breach_date_d | real |
| breach_description_s | string |
| breach_id_s | string |
| breach_media_references_s | string |
| breach_score_s | string |
| breach_target_references_s | string |
| Category | string |
| cci_d | real |
| cci_s | string |
| ccl_s | string |
| Computer | string |
| count_d | real |
| department_s | string |
| distinguishedName_s | string |
| division_s | string |
| email_source_s | string |
| employeeType_s | string |
| external_email_d | real |
| mail_s | string |
| ManagementGroupName | string |
| matched_username_s | string |
| MG | string |
| organization_unit_s | string |
| password_type_s | string |
| RawData | string |
| sAMAccountName_s | string |
| sAMAccountType_s | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| timestamp_d | real |
| Type | string |
| type_s | string |
| ur_normalized_s | string |
| user_s | string |
| userkey_s | string |
| userPrincipalName_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Netskopev2](../solutions/netskopev2.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netskope Data Connector](../connectors/netskopedataconnector.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Netskopev2](../solutions/netskopev2.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeDashboard](../content/netskopev2-netskopedashboard-7f2bb16f.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AlertsCompromisedCredential](../parsers/alertscompromisedcredential.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

