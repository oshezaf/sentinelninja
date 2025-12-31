# Microsoft Business Applications

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2023-04-19 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Dynamics 365 Finance and Operations](../connectors/dynamics365finance.md)

## Tables Reference

This solution uses **16 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AuditLogs`](../tables/auditlogs.md) | - | Analytics |
| [`DataverseActivity`](../tables/dataverseactivity.md) | - | Analytics, Hunting, Workbooks |
| [`DataverseSharepointSites_data`](../tables/dataversesharepointsites-data.md) | - | Analytics |
| [`EmailEvents`](../tables/emailevents.md) | - | Analytics |
| [`FinanceOperationsActivity_CL`](../tables/financeoperationsactivity-cl.md) | [Dynamics 365 Finance and Operations](../connectors/dynamics365finance.md) | Analytics |
| [`MSBizAppsVIPUsers_data`](../tables/msbizappsvipusers-data.md) | - | Analytics |
| [`MsBizAppsNetworkAddresses_data`](../tables/msbizappsnetworkaddresses-data.md) | - | Analytics |
| [`OfficeActivity`](../tables/officeactivity.md) | - | Analytics |
| [`PowerAutomateActivity`](../tables/powerautomateactivity.md) | - | Analytics |
| [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) | - | Analytics, Hunting |
| [`Sensitive`](../tables/sensitive.md) | - | Analytics |
| [`SigninLogs`](../tables/signinlogs.md) | - | Analytics, Hunting |
| [`TerminatedEmployees_data`](../tables/terminatedemployees-data.md) | - | Analytics |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | - | Analytics |
| [`dataverse_signin_activity`](../tables/dataverse-signin-activity.md) | - | Analytics |
| [`url_click_events`](../tables/url-click-events.md) | - | Analytics |

### Internal Tables

The following **2 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`IdentityInfo`](../tables/identityinfo.md) | - | Hunting |
| [`SecurityAlert`](../tables/securityalert.md) | - | Analytics, Hunting |

## Content Items

This solution includes **72 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 49 |
| Hunting Queries | 8 |
| Playbooks | 8 |
| Parsers | 5 |
| Workbooks | 1 |
| Watchlists | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Dataverse - Anomalous application user activity](../content/0820da12-e895-417f-9175-7c256fcfb33e.md) | Medium | CredentialAccess, Execution, Persistence | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Audit log data deletion](../content/f1634822-b7e9-44f5-95ac-fa4a04f14513.md) | Low | DefenseEvasion | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Audit logging disabled](../content/ea07523b-e6b8-469b-9e25-cdef1ae6fb45.md) | Low | DefenseEvasion | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Bulk record ownership re-assignment or sharing](../content/6e480329-84bc-409a-b97b-22e8102af3ca.md) | Medium | PrivilegeEscalation | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Executable uploaded to SharePoint document management site](../content/ba5e608f-7879-4927-8b0d-a9948b4fe6f3.md) | Low | Execution, Persistence | [`DataverseSharepointSites_data`](../tables/dataversesharepointsites-data.md)<br>[`OfficeActivity`](../tables/officeactivity.md) |
| [Dataverse - Export activity from terminated or notified employee](../content/0881b209-62c9-4b15-9f9a-e0c1d1b1eb7b.md) | Medium | Exfiltration | [`TerminatedEmployees_data`](../tables/terminatedemployees-data.md) |
| [Dataverse - Guest user exfiltration following Power Platform defense impairment](../content/39efbf4b-b347-4cc7-895e-99a868bf29ea.md) | High | DefenseEvasion, Exfiltration | [`AuditLogs`](../tables/auditlogs.md)<br>[`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) |
| [Dataverse - Hierarchy security manipulation](../content/2df0adf5-92a8-4ee0-a123-3eb5be1eed02.md) | Medium | PrivilegeEscalation | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Honeypot instance activity](../content/11650b85-d8cc-49c4-8c04-a8a739635983.md) | Medium | Discovery, Exfiltration | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Login by a sensitive privileged user](../content/f327816b-9328-4b17-9290-a02adc2f4928.md) | High | InitialAccess, CredentialAccess, PrivilegeEscalation | [`MSBizAppsVIPUsers_data`](../tables/msbizappsvipusers-data.md)<br>[`Sensitive`](../tables/sensitive.md) |
| [Dataverse - Login from IP in the block list](../content/666fef96-1bb8-4abf-ad72-e5cb49561381.md) | High | InitialAccess | [`MsBizAppsNetworkAddresses_data`](../tables/msbizappsnetworkaddresses-data.md) |
| [Dataverse - Login from IP not in the allow list](../content/81c693fe-f6c4-4352-bc10-3526f6e22637.md) | High | InitialAccess | [`MsBizAppsNetworkAddresses_data`](../tables/msbizappsnetworkaddresses-data.md)<br>[`dataverse_signin_activity`](../tables/dataverse-signin-activity.md) |
| [Dataverse - Malware found in SharePoint document management site](../content/2e3878bb-d519-43aa-9992-ea069df099e4.md) | Medium | Execution | [`OfficeActivity`](../tables/officeactivity.md) |
| [Dataverse - Mass deletion of records](../content/716cf6d4-97ad-407b-923e-6790083acb58.md) | Medium | Impact | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Mass download from SharePoint document management](../content/95e02f1b-5886-4043-8f0e-a42e6e23330f.md) | Low | Exfiltration | [`DataverseSharepointSites_data`](../tables/dataversesharepointsites-data.md)<br>[`OfficeActivity`](../tables/officeactivity.md) |
| [Dataverse - Mass export of records to Excel](../content/57000f0d-ff5d-4166-94b6-aa5fb62b16ec.md) | Low | Exfiltration | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Mass record updates](../content/df577f0f-1d8a-4420-9057-a07f0edb15c8.md) | Medium | Impact | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - New Dataverse application user activity type](../content/5c768e7d-7e5e-4d57-80d4-3f50c96fbf70.md) | Medium | CredentialAccess, Execution, PrivilegeEscalation | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - New non-interactive identity granted access](../content/682e230c-e5da-4085-8666-701d1f1be7de.md) | Informational | Persistence, LateralMovement, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md)<br>[`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - New sign-in from an unauthorized domain](../content/4c1c9aee-8e44-4bb9-bd53-f3e7d6761282.md) | Medium | InitialAccess | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - New user agent type that was not used before](../content/34a5d79b-8f9a-420c-aa64-7f4d262ac29a.md) | Low | InitialAccess, DefenseEvasion | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - New user agent type that was not used with Office 365](../content/094b3c0a-1f63-42f7-9535-c8c7b7198328.md) | Low | InitialAccess | [`DataverseActivity`](../tables/dataverseactivity.md)<br>[`OfficeActivity`](../tables/officeactivity.md) |
| [Dataverse - Organization settings modified](../content/a6f6b734-3db8-4259-a988-69e0b8eac0c2.md) | Informational | Persistence | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Removal of blocked file extensions](../content/1b1061be-2595-4492-af6d-1c8a5fc9576d.md) | Medium | DefenseEvasion | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - SharePoint document management site added or updated](../content/c4c3510a-0ee0-4561-9835-47882ffa7f46.md) | Informational | Exfiltration | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Suspicious security role modifications](../content/e44a58b2-b63a-4eb9-92da-85660d73495c.md) | Medium | PrivilegeEscalation | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Suspicious use of TDS endpoint](../content/d875af10-6bb9-4d6a-a6e4-78439a98bf4b.md) | Low | Exfiltration, InitialAccess | [`DataverseActivity`](../tables/dataverseactivity.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dataverse - Suspicious use of Web API](../content/8a6ecba2-ccfe-4c8c-b086-fa3e6ff7fa86.md) | Medium | Execution, Exfiltration, Reconnaissance, Discovery | [`DataverseActivity`](../tables/dataverseactivity.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Dataverse - TI map IP to DataverseActivity](../content/56d5aa0c-d871-4167-ba13-61c2f0fd17bf.md) | Medium | InitialAccess, LateralMovement, Discovery | [`DataverseActivity`](../tables/dataverseactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Dataverse - TI map URL to DataverseActivity](../content/d88a0e22-3b6a-40c2-af28-c064b44d03b7.md) | Medium | InitialAccess, Execution, Persistence | [`DataverseActivity`](../tables/dataverseactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Dataverse - Terminated employee exfiltration over email](../content/de039242-47e0-43fa-84d7-b6be24305349.md) | High | Exfiltration | [`EmailEvents`](../tables/emailevents.md)<br>[`TerminatedEmployees_data`](../tables/terminatedemployees-data.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dataverse - Terminated employee exfiltration to USB drive](../content/c5e75cb6-cea0-49c2-a998-da414035aac1.md) | High | Exfiltration | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Unusual sign-in following disabled IP address-based cookie binding protection](../content/d7c9549c-7246-4555-8e53-d7b0db546764.md) | Medium | DefenseEvasion | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - User bulk retrieval outside normal activity](../content/08cb7ffc-59c6-4e7d-88e0-327371c9431b.md) | Low | Exfiltration | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [F&O - Bank account change following network alias reassignment](../content/dccbdb5b-2ce7-4931-bfbe-f1ad6523ee64.md) | Low | CredentialAccess, LateralMovement, PrivilegeEscalation | [`FinanceOperationsActivity_CL`](../tables/financeoperationsactivity-cl.md) |
| [F&O - Mass update or deletion of user records](../content/5ab00fbb-ba2c-44dc-b02e-f119639b9a11.md) | Medium | Impact | [`FinanceOperationsActivity_CL`](../tables/financeoperationsactivity-cl.md) |
| [F&O - Non-interactive account mapped to self or sensitive privileged user](../content/5b7cc7f9-fe54-4138-9fb0-d650807345d3.md) | Medium | CredentialAccess, Persistence, PrivilegeEscalation | [`FinanceOperationsActivity_CL`](../tables/financeoperationsactivity-cl.md) |
| [F&O - Reverted bank account number modifications](../content/44b1021c-d517-4b7a-9ba6-a91eab94e632.md) | Low | Impact | [`FinanceOperationsActivity_CL`](../tables/financeoperationsactivity-cl.md) |
| [F&O - Unusual sign-in activity using single factor authentication](../content/919e939f-95e2-4978-846e-13a721c89ea1.md) | Low | CredentialAccess, InitialAccess | [`SigninLogs`](../tables/signinlogs.md) |
| [Power Apps - App activity from unauthorized geo](../content/7ec1e61d-f3b7-4f40-bb1a-357a63913c23.md) | Low | InitialAccess | [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Power Apps - Bulk sharing of Power Apps to newly created guest users](../content/943acfa0-9285-4eb0-a9c0-42e36177ef19.md) | Medium | ResourceDevelopment, InitialAccess, LateralMovement | [`AuditLogs`](../tables/auditlogs.md)<br>[`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) |
| [Power Apps - Multiple apps deleted](../content/ed88638d-8627-4c20-ba08-67c13807a9b1.md) | Medium | Impact | [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) |
| [Power Apps - Multiple users access a malicious link after launching new app](../content/4bd7e93a-0646-4e02-8dcb-aa16d16618f4.md) | High | InitialAccess | [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md)<br>[`url_click_events`](../tables/url-click-events.md) |
| [Power Automate - Departing employee flow activity](../content/b1e11b8c-545a-4dea-a912-0008e160d183.md) | High | Exfiltration, Impact | [`PowerAutomateActivity`](../tables/powerautomateactivity.md) |
| [Power Automate - Unusual bulk deletion of flow resources](../content/56cb646e-56a0-4f0e-8866-9bc1dd15da78.md) | Medium | Impact, DefenseEvasion | [`PowerAutomateActivity`](../tables/powerautomateactivity.md) |
| [Power Platform - Account added to privileged Microsoft Entra roles](../content/71d829d6-eb50-4a17-8a64-655fae8d71e1.md) | Low | PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [Power Platform - Connector added to a sensitive environment](../content/886a5655-3d12-42f1-8927-4095789c575e.md) | Low | Execution, Exfiltration | [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) |
| [Power Platform - DLP policy updated or removed](../content/1b2e6172-85c5-417a-90c3-7cc80cb787f5.md) | Low | DefenseEvasion | [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) |
| [Power Platform - Possibly compromised user accesses Power Platform services](../content/54d48840-1c64-4399-afee-ad39a069118d.md) | High | InitialAccess, LateralMovement | [`SigninLogs`](../tables/signinlogs.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Dataverse - Activity after Microsoft Entra alerts](../content/428c3d41-e441-4244-994e-b059d6316bc4.md) | InitialAccess | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dataverse - Activity after failed logons](../content/dafcc598-2987-4aa0-947e-7d0449677689.md) | InitialAccess | [`DataverseActivity`](../tables/dataverseactivity.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Dataverse - Cross-environment data export activity](../content/74a48db8-dc1d-414e-9709-39fa3f8a2246.md) | Exfiltration, Collection | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Dataverse export copied to USB devices](../content/f9658e11-e277-4a65-8f91-2cb94cf7497c.md) | Exfiltration | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Generic client app used to access production environments](../content/90bcbd4e-e8b5-4a5d-9fe6-d0f9f0220b4a.md) | Execution | [`SigninLogs`](../tables/signinlogs.md) |
| [Dataverse - Identity management activity outside of privileged directory role membership](../content/c7e6e48a-0514-4989-bc90-4a3c9207ede1.md) | PrivilegeEscalation | *Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Dataverse - Identity management changes without MFA](../content/385234b7-d96c-4dc3-9c0e-ceb46048d487.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md) |
| [Power Apps - Anomalous bulk sharing of Power App to newly created guest users](../content/169428be-5ed0-4230-9103-c83df89c789a.md) | InitialAccess, LateralMovement, ResourceDevelopment | [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Dynamics365Activity](../content/dynamics365activity-microsoft-business-applications.md) | [`DataverseActivity`](../tables/dataverseactivity.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Dataverse: Add SharePoint sites to watchlist](../content/dataverse:-add-sharepoint-sites-to-watchlist-microsoft-business-applications.md) | This playbook is used to add new or updated SharePoint document management sites into the configurat... | - |
| [Dataverse: Add user to blocklist (alert trigger)](../content/dataverse:-add-user-to-blocklist-%28alert-trigger%29-microsoft-business-applications.md) | This playbook can be triggered on-demand when a Microsoft Sentinel alert is raised, allowing the ana... | - |
| [Dataverse: Add user to blocklist (incident trigger)](../content/dataverse:-add-user-to-blocklist-%28incident-trigger%29-microsoft-business-applications.md) | This playbook can be triggered when a Microsoft Sentinel incident is raised and will automatically a... | - |
| [Dataverse: Add user to blocklist using Outlook approval workflow](../content/dataverse:-add-user-to-blocklist-using-outlook-approval-workflow-microsoft-business-applications.md) | This playbook can be triggered when a Microsoft Sentinel incident is raised and will automatically a... | - |
| [Dataverse: Add user to blocklist using Teams approval workflow](../content/dataverse:-add-user-to-blocklist-using-teams-approval-workflow-microsoft-business-applications.md) | This playbook can be triggered when a Microsoft Sentinel incident is raised and will automatically a... | - |
| [Dataverse: Remove user from blocklist](../content/dataverse:-remove-user-from-blocklist-microsoft-business-applications.md) | This playbook can be triggered on-demand when a Microsoft Sentinel alert is raised, allowing the ana... | - |
| [Dataverse: Send notification to manager](../content/dataverse:-send-notification-to-manager-microsoft-business-applications.md) | This playbook can be triggered when a Microsoft Sentinel incident is raised and will automatically s... | - |
| [Security workflow: alert verification with workload owners](../content/security-workflow:-alert-verification-with-workload-owners-microsoft-business-applications.md) | This playbook can reduce burden on the SOC by offloading alert verification to IT admins for specifi... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DataverseSharePointSites](../content/2a51081a-e31d-4a29-9fd5-cf399b0d3cc1.md) | - | - |
| [MSBizAppsNetworkAddresses](../content/7c9f20e6-1ba1-4c22-90d1-926c8b9749e2.md) | - | - |
| [MSBizAppsOrgSettings](../content/ead143d3-a23a-4597-afe3-eb43d1f74828.md) | - | - |
| [MSBizAppsTerminatedEmployees](../content/55052ba8-de53-4921-bb6d-63a4d6c67373.md) | - | - |
| [MSBizAppsVIPUsers](../content/82deb196-ecdd-4154-9f7f-ff6989cbd08a.md) | - | - |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [MSBizApps-Configuration](../content/msbizapps-configuration-microsoft-business-applications.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                  |
|-------------|--------------------------------|---------------------------------------------------------------------|
| 3.2.2       | 22-04-2025                     |<ul><li>Updated solution description.</li></ul> |
| 3.2.1       | 11-04-2025                     |<ul><li>Move solution and content to GA.</li><li>Minor analytic rule update.</li></ul> |
| 3.2.0       | 15-11-2024                     | <ul><li>Renamed solution from Power Platform to Microsoft Business Applications.</li><li>Merge Dynamics 365 CE Apps and Dynamics 365 Finance & Operations into a unified solution.</li><li>New analytics rules, playbooks and hunting queries.</li><li>Replace Dynamics 365 Finance and Operations function app using Codeless Connector.</li><li>Retire PPInventory function app.</li></ul>|
| 3.1.3       | 12-07-2024                     |<ul><li>Removal of Power Apps, Power Platform Connectors, Power Platform DLP data connectors. Associated logs are now ingested via Power Platform Admin Activity data connector.</li><li>Update of analytics rules to utilize PowerPlatfromAdminActivity table.</li><li>Update data connectors DCR properties.</li></ul> |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
