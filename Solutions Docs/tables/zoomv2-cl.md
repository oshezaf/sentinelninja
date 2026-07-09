# ZoomV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Zoom *(basis: projected)* |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (44 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZoomReports%5CData%20Connectors%5CZoomReports_ccf/table_ZoomV2.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Action | string | Action |
| ActivityType | string | Object type (ctivity type 'Sign in'/'Sign out') |
| CallInNumber | string | Caller's call-in number |
| CategoryType | string | Category type of the operation |
| ClientType | string | The client interface type using which the activity was performed |
| CountryName | string | Country name |
| CreateTime | datetime | The time the user was created |
| CustomAttributes | dynamic | Custom attributes that have been assigned to the user |
| Dept | string | User department |
| Duration | real | Call leg duration |
| Email | string | Email address/User email |
| EndTime | datetime | Call leg end time |
| EventName | string | Name of the event |
| EventType | string | Type of event (dates, users, telephony_usage, cloud_recording_storage, operation_logs, activity_logs) |
| FreeUsage | string | Free storage |
| HostEmail | string | User email |
| HostId | string | The user ID of the meeting host. |
| HostName | string | User display name |
| Id | string | User ID |
| IpAddress | string | IP address |
| LastClientVersion | string | Last Zoom client version used by the user |
| LastLoginTime | datetime | The last time the user logged in |
| MeetingId | real | Unique identifier of the meeting |
| MeetingMinutes | real | Meeting minutes |
| Meetings | real | Number of meetings |
| MeetingType | string | Meeting type |
| NewUsers | real | Number of new users |
| OperationDetail | string | Details of the operation |
| Operator | string | Operator who performed the action |
| Participants | real | Number of participants |
| PhoneNumber | string | Toll-free telephone number. |
| PlanUsage | string | Paid storage |
| Rate | real | Calling rate for the telephone call |
| ReportDate | string | Date for the report |
| SignaledNumber | string | The number that is signaled to Zoom |
| StartTime | datetime | Call leg start time |
| Time | datetime | The time at which the event was performed |
| TimeGenerated | datetime | Time generated |
| Total | real | Total cost (USD) for Call Out. Calculated as plan rate by duration |
| Usage | string | Storage used on the date |
| UserName | string | User display name |
| UserType | real | User type as numeric value (1=Basic, 2=Licensed, etc.) - populated by user reports only |
| Uuid | string | Meeting UUID |
| Version | string | Zoom client version of the user |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [ZoomReports](../solutions/zoomreports.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Zoom Reports Connector (via Codeless Connector Framework)](../connectors/zoomreportsconnector.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [ZoomReports](../solutions/zoomreports.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ZoomReports](../content/zoomreports-zoomreports-c76868a1.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [Zoom](../parsers/zoom.md) | [ZoomReports](../solutions/zoomreports.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

