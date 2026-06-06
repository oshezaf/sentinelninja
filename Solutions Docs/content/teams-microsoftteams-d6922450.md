# MicrosoftTeams

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [Teams](../solutions/teams.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Teams/Workbooks/MicrosoftTeams.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`OfficeActivity`](../tables/officeactivity.md) | `CommunicationType == "Team"`<br>`OfficeWorkload == "MicrosoftTeams"`<br>`Operation in "AppInstalled,BotAddedToTeam,FileUploaded,MemberAdded,MemberRemoved,MemberRoleChanged,TeamDeleted,TeamsAdminAction"`<br>`Operation contains "Added"`<br>`Operation contains "Created"`<br>`Operation contains "Deleted"`<br>`Operation contains "Removed"`<br>`RecordType == "SharePointFileOperation"`<br>`SourceRelativeUrl has "Microsoft Teams Chat Files"` | ✓ | ✗ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) | `AppDisplayName startswith "Microsoft Teams"`<br>`ResultDescription != "Other"`<br>`ResultType == "0"`<br>`ResultType !in "0,50140"` | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to Teams](../solutions/teams.md)

