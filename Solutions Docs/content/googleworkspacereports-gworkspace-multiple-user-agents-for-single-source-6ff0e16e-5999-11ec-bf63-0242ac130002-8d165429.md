# GWorkspace - Multiple user agents for single source

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects requests with different user agents from one source in short timeframe.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GoogleWorkspaceReports](../solutions/googleworkspacereports.md) |
| **ID** | `6ff0e16e-5999-11ec-bf63-0242ac130002` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, Collection |
| **Techniques** | T1185, T1176 |
| **Required Connectors** | [GoogleWorkspaceReportsAPI](../connectors/googleworkspacereportsapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleWorkspaceReports/Analytic%20Rules/GWorkspaceDifferentUAsFromSingleIP.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`GWorkspace_ReportsAPI_access_transparency_CL`](../tables/gworkspace-reportsapi-access-transparency-cl.md)
- [`GWorkspace_ReportsAPI_admin_CL`](../tables/gworkspace-reportsapi-admin-cl.md)
- [`GWorkspace_ReportsAPI_calendar_CL`](../tables/gworkspace-reportsapi-calendar-cl.md)
- [`GWorkspace_ReportsAPI_chat_CL`](../tables/gworkspace-reportsapi-chat-cl.md)
- [`GWorkspace_ReportsAPI_chrome_CL`](../tables/gworkspace-reportsapi-chrome-cl.md)
- [`GWorkspace_ReportsAPI_context_aware_access_CL`](../tables/gworkspace-reportsapi-context-aware-access-cl.md)
- [`GWorkspace_ReportsAPI_data_studio_CL`](../tables/gworkspace-reportsapi-data-studio-cl.md)
- [`GWorkspace_ReportsAPI_drive_CL`](../tables/gworkspace-reportsapi-drive-cl.md)
- [`GWorkspace_ReportsAPI_gcp_CL`](../tables/gworkspace-reportsapi-gcp-cl.md)
- [`GWorkspace_ReportsAPI_gplus_CL`](../tables/gworkspace-reportsapi-gplus-cl.md)
- [`GWorkspace_ReportsAPI_groups_CL`](../tables/gworkspace-reportsapi-groups-cl.md)
- [`GWorkspace_ReportsAPI_groups_enterprise_CL`](../tables/gworkspace-reportsapi-groups-enterprise-cl.md)
- [`GWorkspace_ReportsAPI_jamboard_CL`](../tables/gworkspace-reportsapi-jamboard-cl.md)
- [`GWorkspace_ReportsAPI_keep_CL`](../tables/gworkspace-reportsapi-keep-cl.md)
- [`GWorkspace_ReportsAPI_login_CL`](../tables/gworkspace-reportsapi-login-cl.md)
- [`GWorkspace_ReportsAPI_meet_CL`](../tables/gworkspace-reportsapi-meet-cl.md)
- [`GWorkspace_ReportsAPI_mobile_CL`](../tables/gworkspace-reportsapi-mobile-cl.md)
- [`GWorkspace_ReportsAPI_rules_CL`](../tables/gworkspace-reportsapi-rules-cl.md)
- [`GWorkspace_ReportsAPI_saml_CL`](../tables/gworkspace-reportsapi-saml-cl.md)
- [`GWorkspace_ReportsAPI_token_CL`](../tables/gworkspace-reportsapi-token-cl.md)
- [`GWorkspace_ReportsAPI_user_accounts_CL`](../tables/gworkspace-reportsapi-user-accounts-cl.md)
- [`GoogleWorkspaceReports_CL`](../tables/googleworkspacereports-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to GoogleWorkspaceReports](../solutions/googleworkspacereports.md)

