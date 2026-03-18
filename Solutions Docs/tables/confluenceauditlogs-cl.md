# ConfluenceAuditLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (30 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianConfluenceAudit%5CData%20Connectors%5CAtlassianConfluenceAuditLogs_CCP/AtlassianConfluenceAudit_table.json)

| Column Name | Type |
|:------------|:-----|
| AffectedObjectName | string |
| AffectedObjectObjectType | string |
| AssociatedObjects | dynamic |
| AuthorAccountId | string |
| AuthorAccountType | string |
| AuthorDisplayName | string |
| AuthorExternalCollaborator | bool |
| AuthorIsExternalCollaborator | bool |
| AuthorPublicName | string |
| AuthorType | string |
| AuthorUserKey | string |
| AuthorUsername | string |
| Category | string |
| ChangedValues | dynamic |
| CreationDate | long |
| Description | string |
| DstUserSid | string |
| EventCategoryType | string |
| EventCreationTime | long |
| EventMessage | string |
| EventProduct | string |
| EventVendor | string |
| RemoteAddress | string |
| SrcIpAddr | string |
| SrcUserName | string |
| Summary | string |
| SuperAdmin | bool |
| SysAdmin | bool |
| TimeGenerated | datetime |
| UserIdentity | string |

## Solutions (1)

This table is used by the following solutions:

- [AtlassianConfluenceAudit](../solutions/atlassianconfluenceaudit.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ Atlassian Confluence Audit (via Codeless Connector Framework)](../connectors/confluenceauditccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

