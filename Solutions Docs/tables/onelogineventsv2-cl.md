# OneLoginEventsV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (19 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/OneLoginEventsV2_CL.json)

| Column Name | Type |
|:------------|:-----|
| AccountId | real |
| ActorSystem | string |
| ActorUserId | real |
| ActorUserName | string |
| AppId | real |
| AppName | string |
| CustomMessage | string |
| EventId | real |
| EventTypeId | real |
| Ipaddr | string |
| Notes | string |
| PolicyId | real |
| PolicyName | string |
| PolicyType | string |
| RoleId | real |
| RoleName | string |
| TimeGenerated | datetime |
| UserId | real |
| UserName | string |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

