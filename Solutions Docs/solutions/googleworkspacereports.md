# GoogleWorkspaceReports

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/google-workspace-logo.svg" alt="GoogleWorkspaceReports Logo" width="75" height="75">

The [Google Workspace](https://workspace.google.com/) solution for Microsoft Sentinel enables you to ingest Google Workspace Activity events into Microsoft Sentinel. 
 
 **Underlying Microsoft Technologies used:**

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 
 
 • [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)



## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 2.0.6 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-01-24 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleWorkspaceReports](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleWorkspaceReports) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Google Workspace Activities (via Codeless Connector Framework)](../connectors/googleworkspaceccpdefinition.md)
- [[DEPRECATED] Google Workspace (G Suite)](../connectors/googleworkspacereportsapi.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **8 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GWorkspace_ReportsAPI_admin_CL`](../tables/gworkspace-reportsapi-admin-cl.md) | [[DEPRECATED] Google Workspace (G Suite)](../connectors/googleworkspacereportsapi.md) | - |
| [`GWorkspace_ReportsAPI_calendar_CL`](../tables/gworkspace-reportsapi-calendar-cl.md) | [[DEPRECATED] Google Workspace (G Suite)](../connectors/googleworkspacereportsapi.md) | - |
| [`GWorkspace_ReportsAPI_drive_CL`](../tables/gworkspace-reportsapi-drive-cl.md) | [[DEPRECATED] Google Workspace (G Suite)](../connectors/googleworkspacereportsapi.md) | - |
| [`GWorkspace_ReportsAPI_login_CL`](../tables/gworkspace-reportsapi-login-cl.md) | [[DEPRECATED] Google Workspace (G Suite)](../connectors/googleworkspacereportsapi.md) | - |
| [`GWorkspace_ReportsAPI_mobile_CL`](../tables/gworkspace-reportsapi-mobile-cl.md) | [[DEPRECATED] Google Workspace (G Suite)](../connectors/googleworkspacereportsapi.md) | - |
| [`GWorkspace_ReportsAPI_token_CL`](../tables/gworkspace-reportsapi-token-cl.md) | [[DEPRECATED] Google Workspace (G Suite)](../connectors/googleworkspacereportsapi.md) | - |
| [`GWorkspace_ReportsAPI_user_accounts_CL`](../tables/gworkspace-reportsapi-user-accounts-cl.md) | [[DEPRECATED] Google Workspace (G Suite)](../connectors/googleworkspacereportsapi.md) | - |
| [`GoogleWorkspaceReports`](../tables/googleworkspacereports.md) | [Google Workspace Activities (via Codeless Connector Framework)](../connectors/googleworkspaceccpdefinition.md) | - |

## Content Items

This solution includes **26 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 14 |
| Analytic Rules | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [GWorkspace - API Access Granted](../content/googleworkspacereports-gworkspace-api-access-granted-c45a9804-5da8-11ec-bf63-0242ac130002-333bb900.md) | Medium | DefenseEvasion, LateralMovement | - |
| [GWorkspace - Admin permissions granted](../content/googleworkspacereports-gworkspace-admin-permissions-granted-03f25156-6172-11ec-90d6-0242ac120003-8b9cd6f1.md) | High | Persistence | - |
| [GWorkspace - Alert events](../content/googleworkspacereports-gworkspace-alert-events-e369d246-5da8-11ec-bf63-0242ac130002-80adb373.md) | High | InitialAccess | - |
| [GWorkspace - An Outbound Relay has been added to a G Suite Domain](../content/googleworkspacereports-gworkspace-an-outbound-relay-has-been-added-to-a-g-suite-domain-ead87cd6-5da7-11ec-bf63-0242ac130002-3aa2c162.md) | Medium | Collection | - |
| [GWorkspace - Multiple user agents for single source](../content/googleworkspacereports-gworkspace-multiple-user-agents-for-single-source-6ff0e16e-5999-11ec-bf63-0242ac130002-8d165429.md) | Medium | Persistence, Collection | - |
| [GWorkspace - Possible brute force attack](../content/googleworkspacereports-gworkspace-possible-brute-force-attack-8f6cd9a4-5e57-11ec-bf63-0242ac130002-c5d8d00d.md) | Medium | CredentialAccess | - |
| [GWorkspace - Possible maldoc file name in Google drive](../content/googleworkspacereports-gworkspace-possible-maldoc-file-name-in-google-drive-d80d02a8-5da6-11ec-bf63-0242ac130002-cd813548.md) | Medium | InitialAccess | - |
| [GWorkspace - Two-step authentification disabled for a user](../content/googleworkspacereports-gworkspace-two-step-authentification-disabled-for-a-user-c8cc02d0-5da6-11ec-bf63-0242ac130002-5aea9b56.md) | Medium | CredentialAccess | - |
| [GWorkspace - Unexpected OS update](../content/googleworkspacereports-gworkspace-unexpected-os-update-c02b0c8e-5da6-11ec-bf63-0242ac130002-b0fa8bff.md) | Medium | DefenseEvasion, Persistence | - |
| [GWorkspace - User access has been changed](../content/googleworkspacereports-gworkspace-user-access-has-been-changed-92fae638-5da8-11ec-bf63-0242ac130002-d415780d.md) | Low | Persistence | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [GWorkspace - Document Copied from Share Drive to Private Drive](../content/googleworkspacereports-gworkspace-document-copied-from-share-drive-to-private-drive-69e8a40f-6508-4f43-8eef-2f78ad6174df-0174362a.md) ⚠️ | Exfiltration, Impact | - |
| [GWorkspace - Document shared externally](../content/googleworkspacereports-gworkspace-document-shared-externally-00d743e2-5dac-11ec-bf63-0242ac130002-a98aa9d1.md) | Exfiltration, Impact | - |
| [GWorkspace - Document shared publicy in web](../content/googleworkspacereports-gworkspace-document-shared-publicy-in-web-e37c86ea-5dab-11ec-bf63-0242ac130002-99cd7239.md) | Exfiltration, Impact | - |
| [GWorkspace - Document shared publicy with link](../content/googleworkspacereports-gworkspace-document-shared-publicy-with-link-c7c65c78-5dab-11ec-bf63-0242ac130002-0fdc40e9.md) | Exfiltration, Impact | - |
| [GWorkspace - License Revoke and Assignment to User](../content/googleworkspacereports-gworkspace-license-revoke-and-assignment-to-user-b1235ce0-06a0-446b-baad-852874f57bd4-cc080246.md) ⚠️ | Exfiltration | - |
| [GWorkspace - Multi IP addresses by user](../content/googleworkspacereports-gworkspace-multi-ip-addresses-by-user-bb6bf88e-5dab-11ec-bf63-0242ac130002-a6582e26.md) | InitialAccess | - |
| [GWorkspace - Possible SCAM/SPAM or Phishing via Calendar](../content/googleworkspacereports-gworkspace-possible-scam-spam-or-phishing-via-calendar-29ce9d14-5dab-11ec-bf63-0242ac130002-697b529a.md) | InitialAccess | - |
| [GWorkspace - Rare document types by users](../content/googleworkspacereports-gworkspace-rare-document-types-by-users-0b20d206-5dab-11ec-bf63-0242ac130002-44fbad2a.md) | InitialAccess | - |
| [GWorkspace - Shared private document](../content/googleworkspacereports-gworkspace-shared-private-document-2da2122e-5da9-11ec-bf63-0242ac130002-2bc65996.md) | Exfiltration, Impact | - |
| [GWorkspace - Suspended users](../content/googleworkspacereports-gworkspace-suspended-users-26cea052-5da9-11ec-bf63-0242ac130002-6c4c92c6.md) | Impact | - |
| [GWorkspace - Uncommon user agent strings](../content/googleworkspacereports-gworkspace-uncommon-user-agent-strings-1efb71b6-5da9-11ec-bf63-0242ac130002-66b8775f.md) | Persistence, Collection | - |
| [GWorkspace - Unknown login type](../content/googleworkspacereports-gworkspace-unknown-login-type-05189314-5e58-11ec-bf63-0242ac130002-b588e2da.md) | InitialAccess, DefenseEvasion, LateralMovement | - |
| [GWorkspace - User reported calendar invite as spam](../content/googleworkspacereports-gworkspace-user-reported-calendar-invite-as-spam-181bda98-5da9-11ec-bf63-0242ac130002-91c2be7a.md) | InitialAccess | - |
| [GWorkspace - Users with several devices](../content/googleworkspacereports-gworkspace-users-with-several-devices-1087fb40-5da9-11ec-bf63-0242ac130002-691cd7c6.md) | InitialAcces | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [GoogleWorkspace](../content/googleworkspacereports-googleworkspace-6948e392.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [GWorkspaceActivityReports](../content/googleworkspacereports-gworkspaceactivityreports-6670f6fc-ab2c-4ae4-a3ac-812dd9d4d3c3-308f41db.md) | - | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYY)** | **Change History**                              |
|-------------|-------------------------------|-------------------------------------------------|
| 3.0.2       | 26-08-2025                    | Moving GoogleWorkspaceReports **CCF Data Connector** to GA.  | 
| 3.0.1       | 14-07-2025                    | Added new **CCF Data Connector**.  |
| 3.0.0       |	06-09-2024	                  | Updated the python runtime version to 3.11.      |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

