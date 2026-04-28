# ConfluenceAuditLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (30 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianConfluenceAudit%5CData%20Connectors%5CAtlassianConfluenceAuditLogs_CCP/AtlassianConfluenceAudit_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AffectedObjectName | string | The name of the affected object. |
| AffectedObjectObjectType | string | The type of the affected object. |
| AssociatedObjects | dynamic | The associated objects of the audit log entry. |
| AuthorAccountId | string | The account ID of the author. |
| AuthorAccountType | string | The account type of the author. |
| AuthorDisplayName | string | The display name of the author. |
| AuthorExternalCollaborator | bool | Indicates whether the author is an external collaborator. |
| AuthorIsExternalCollaborator | bool | Indicates whether the author is an external collaborator. |
| AuthorPublicName | string | The public name of the author. |
| AuthorType | string | The type of the author. |
| AuthorUserKey | string | The user key of the author. |
| AuthorUsername | string | The username of the author. |
| Category | string | The category of the audit log entry. |
| ChangedValues | dynamic | The changed values of the audit log entry. |
| CreationDate | long | The creation date of the audit log entry. |
| Description | string | The description of the audit log entry. |
| DstUserSid | string | The destination user SID. |
| EventCategoryType | string | The category type of the event. |
| EventCreationTime | long | The creation time of the event. |
| EventMessage | string | The message of the event. |
| EventProduct | string | The product of the event. |
| EventVendor | string | The vendor of the event. |
| RemoteAddress | string | The remote address of the author. |
| SrcIpAddr | string | The source IP address. |
| SrcUserName | string | The source username. |
| Summary | string | The summary of the audit log entry. |
| SuperAdmin | bool | Indicates whether the author is a super administrator. |
| SysAdmin | bool | Indicates whether the author is a system administrator. |
| TimeGenerated | datetime | The timestamp (in UTC) when the log entry was generated. |
| UserIdentity | string | The identity of the user. |

## Solutions (1)

This table is used by the following solutions:

- [AtlassianConfluenceAudit](../solutions/atlassianconfluenceaudit.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Atlassian Confluence Audit (via Codeless Connector Framework)](../connectors/atlassianconfluenceconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

