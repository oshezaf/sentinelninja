# Confluence_Audit_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (30 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Confluence_Audit_CL.json)

| Column Name | Type |
|:------------|:-----|
| AffectedObjectName | string |
| AffectedObjectObjectType | string |
| AssociatedObjects | string |
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
| ChangedValues | string |
| CreationDate | real |
| Description | string |
| EventCategoryType | string |
| EventCreationTime | real |
| EventMessage | string |
| EventProduct | string |
| EventVendor | string |
| RemoteAddress | string |
| SrcIpAddr | string |
| Summary | string |
| SuperAdmin | bool |
| SysAdmin | bool |
| TimeGenerated | datetime |
| UserIdentity | string |
| UserName | string |
| UserSid | string |

## Solutions (1)

This table is used by the following solutions:

- [AtlassianConfluenceAudit](../solutions/atlassianconfluenceaudit.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[Deprecated] Atlassian Confluence Audit](../connectors/confluenceauditapi.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ConfluenceAudit](../parsers/confluenceaudit.md) | [AtlassianConfluenceAudit](../solutions/atlassianconfluenceaudit.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

