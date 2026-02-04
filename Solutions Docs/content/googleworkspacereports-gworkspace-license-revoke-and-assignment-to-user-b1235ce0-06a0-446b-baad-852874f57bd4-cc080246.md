# GWorkspace - License Revoke and Assignment to User

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query searches for license revoke and assignment in quick succession to user, potential sign of data exfiltration. https://www.mitiga.io/blog/mitiga-security-advisory-lack-of-forensic-visibility-with-the-basic-license-in-google-drive

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [GoogleWorkspaceReports](../solutions/googleworkspacereports.md) |
| **ID** | `b1235ce0-06a0-446b-baad-852874f57bd4` |
| **Severity** | Medium |
| **Tactics** | Exfiltration |
| **Techniques** | T1537 |
| **Required Connectors** | [GoogleWorkspaceReportsAPI](../connectors/googleworkspacereportsapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleWorkspaceReports/Hunting%20Queries/GWorkspaceLicenseRevokeAndAssignmentToUser.yaml) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GWorkspace_ReportsAPI_access_transparency_CL`](../tables/gworkspace-reportsapi-access-transparency-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_admin_CL`](../tables/gworkspace-reportsapi-admin-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_calendar_CL`](../tables/gworkspace-reportsapi-calendar-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_chat_CL`](../tables/gworkspace-reportsapi-chat-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_chrome_CL`](../tables/gworkspace-reportsapi-chrome-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_context_aware_access_CL`](../tables/gworkspace-reportsapi-context-aware-access-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_data_studio_CL`](../tables/gworkspace-reportsapi-data-studio-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_drive_CL`](../tables/gworkspace-reportsapi-drive-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_gcp_CL`](../tables/gworkspace-reportsapi-gcp-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_gplus_CL`](../tables/gworkspace-reportsapi-gplus-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_groups_CL`](../tables/gworkspace-reportsapi-groups-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_groups_enterprise_CL`](../tables/gworkspace-reportsapi-groups-enterprise-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_jamboard_CL`](../tables/gworkspace-reportsapi-jamboard-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_keep_CL`](../tables/gworkspace-reportsapi-keep-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_login_CL`](../tables/gworkspace-reportsapi-login-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_meet_CL`](../tables/gworkspace-reportsapi-meet-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_mobile_CL`](../tables/gworkspace-reportsapi-mobile-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_rules_CL`](../tables/gworkspace-reportsapi-rules-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_saml_CL`](../tables/gworkspace-reportsapi-saml-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_token_CL`](../tables/gworkspace-reportsapi-token-cl.md) | — | — | — |
| [`GWorkspace_ReportsAPI_user_accounts_CL`](../tables/gworkspace-reportsapi-user-accounts-cl.md) | — | — | — |
| [`GoogleWorkspaceReports_CL`](../tables/googleworkspacereports-cl.md) | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to GoogleWorkspaceReports](../solutions/googleworkspacereports.md)

