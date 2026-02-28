# Zoom_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (42 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Zoom_CL.json)

| Column Name | Type |
|:------------|:-----|
| Action | string |
| CategoryType | string |
| ClientType | string |
| CreateTime | datetime |
| Date | string |
| Department | string |
| Dept | string |
| Email | string |
| EventCategoryType | string |
| EventCreationTime | datetime |
| EventDay | string |
| EventEndTime | datetime |
| EventMessage | string |
| EventName | string |
| EventOriginalMessage | string |
| EventProduct | string |
| EventResult | string |
| EventType | string |
| EventVendor | string |
| FreeUsage | string |
| Id | string |
| IpAddress | string |
| LastClientVersion | string |
| LastLoginTime | datetime |
| MeetingMinutes | real |
| MeetingsCount | real |
| NewUsersCount | real |
| OperationDetail | string |
| Operator | string |
| ParticipantsCount | real |
| PlanUsage | string |
| SrcDvcModelName | string |
| SrcDvcModelNumber | string |
| SrcIpAddr | string |
| Time | datetime |
| TimeGenerated | datetime |
| Usage | string |
| UserEmail | string |
| UserIdentity | string |
| UserName | string |
| UserType | real |
| Version | string |

## Solutions (1)

This table is used by the following solutions:

- [ZoomReports](../solutions/zoomreports.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Zoom Reports](../connectors/zoom.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [ZoomReports](../solutions/zoomreports.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZoomReports](../content/zoomreports-zoomreports-c76868a1.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [Zoom](../parsers/zoom.md) | *(Legacy)* |  |
| [Zoom](../parsers/zoom.md) | [ZoomReports](../solutions/zoomreports.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

