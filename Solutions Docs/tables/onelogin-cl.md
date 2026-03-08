# OneLogin_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (30 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/OneLogin_CL.json)

| Column Name | Type |
|:------------|:-----|
| account_id_d | real |
| actor_system_s | string |
| actor_user_id_d | real |
| actor_user_name_s | string |
| app_id_d | real |
| app_name_s | string |
| create__id_g | string |
| custom_message_s | string |
| event_timestamp_s | string |
| event_type_id_d | real |
| ipaddr_s | string |
| notes_s | string |
| policy_id_d | real |
| policy_name_s | string |
| policy_type_s | string |
| role_id_d | real |
| role_name_s | string |
| TimeGenerated | datetime |
| user_agent_s | string |
| user_attributes_account_id_d | real |
| user_attributes_department_s | string |
| user_attributes_email_s | string |
| user_attributes_firstname_s | string |
| user_attributes_lastname_s | string |
| user_attributes_openid_name_s | string |
| user_attributes_title_s | string |
| user_attributes_username_s | string |
| user_id_d | real |
| user_name_s | string |
| uuid_g | string |

## Solutions (1)

This table is used by the following solutions:

- [OneLoginIAM](../solutions/oneloginiam.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[DEPRECATED] OneLogin IAM Platform](../connectors/onelogin.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [OneLogin](../parsers/onelogin.md) | [OneLoginIAM](../solutions/oneloginiam.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

