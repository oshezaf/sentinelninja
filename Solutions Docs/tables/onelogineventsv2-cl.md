# OneLoginEventsV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (19 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OneLoginIAM/Data%20Connectors/OneLoginIAMLogs_ccp/OneLoginIAMLogs_DCR.json)

| Column Name | Type |
|:------------|:-----|
| account_id | real |
| actor_system | string |
| actor_user_id | real |
| actor_user_name | string |
| app_id | real |
| app_name | string |
| created_at | datetime |
| custom_message | string |
| event_type_id | real |
| id | real |
| ipaddr | string |
| notes | string |
| policy_id | real |
| policy_name | string |
| policy_type | string |
| role_id | real |
| role_name | string |
| user_id | real |
| user_name | string |

## Solutions (1)

This table is used by the following solutions:

- [OneLoginIAM](../solutions/oneloginiam.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[DEPRECATED] OneLogin IAM Platform](../connectors/onelogin.md) |  |
| [OneLogin IAM Platform (via Codeless Connector Framework)](../connectors/oneloginiamlogsccpdefinition.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [OneLogin](../parsers/onelogin.md) | [OneLoginIAM](../solutions/oneloginiam.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

