# Microsoft Business Applications

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/PowerPlatform.svg" alt="Microsoft Business Applications Logo" width="75" height="75">

Microsoft Power Platform provides a wide range of tools for citizen developers to build, run and manage low-code and no-code applications quickly, simply and at scale. With that, it also introduces a concern around the risk of security vulnerabilities introduced by citizen developers, some of whom may lack the security awareness of traditional pro-dev community. To counter this, early threat detection is crucial and can complement preventative guardrails to enable frictionless productivity while minimizing cyber risk.

The Microsoft Sentinel solution for Microsoft Power Platform allows customers to monitor and detect various suspicious or malicious activities in their Power Platform environments.

It collects activity logs from the different Power Platform components (Power Apps, Power Automate, Power Platform Connectors, Power Platform DLP, Dataverse) as well as the Power Platform inventory data and analyzes those activity logs to detect threats and suspicious activities such as: Power Apps execution from unauthorized geographies, suspicious data destruction by Power Apps, mass deletion of Power Apps, phishing attacks made possible through Power Apps, Power Automate flows activity by departing employees, Microsoft Power Platform connectors added to the an environment, and the update or removal of Microsoft Power Platform data loss prevention policies.

Due to the integration of the Power Platform inventory data, in addition to the activity logs, the solution also allows customers to investigate the detected threats in a full human readable context and understand for example what the name of the suspicious app is, the name of Power Platform environment it belongs to, the details of the user who created or modified the suspicious app, the details of the users using the app, and more.

**Important**

- Please review the solution [documentation](https://learn.microsoft.com/azure/sentinel/business-applications/power-platform-solution-overview) to learn more about deploying, configuring and using this solution.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.2.2 |
| **Author** | Microsoft |
| **First Published** | 2023-04-19 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Dynamics 365 Finance and Operations](../connectors/dynamics365finance.md)

## Tables Reference

This solution uses **9 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AuditLogs`](../tables/auditlogs.md) | - | Analytics |
| [`DataverseActivity`](../tables/dataverseactivity.md) | - | Analytics, Hunting, Workbooks |
| [`EmailEvents`](../tables/emailevents.md) | - | Analytics |
| [`FinanceOperationsActivity_CL`](../tables/financeoperationsactivity-cl.md) | [Dynamics 365 Finance and Operations](../connectors/dynamics365finance.md) | Analytics |
| [`OfficeActivity`](../tables/officeactivity.md) | - | Analytics |
| [`PowerAutomateActivity`](../tables/powerautomateactivity.md) | - | Analytics |
| [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) | - | Analytics, Hunting |
| [`SigninLogs`](../tables/signinlogs.md) | - | Analytics, Hunting |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | - | Analytics |

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
| [Dataverse - Anomalous application user activity](../content/microsoft-business-applications-dataverse-anomalous-application-user-activity-0820da12-e895-417f-9175-7c256fcfb33e-25e83157.md) | Medium | CredentialAccess, Execution, Persistence | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Audit log data deletion](../content/microsoft-business-applications-dataverse-audit-log-data-deletion-f1634822-b7e9-44f5-95ac-fa4a04f14513-cd7a11d3.md) | Low | DefenseEvasion | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Audit logging disabled](../content/microsoft-business-applications-dataverse-audit-logging-disabled-ea07523b-e6b8-469b-9e25-cdef1ae6fb45-1a78c3d9.md) | Low | DefenseEvasion | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Bulk record ownership re-assignment or sharing](../content/microsoft-business-applications-dataverse-bulk-record-ownership-re-assignment-or-sharing-6e480329-84bc-409a-b97b-22e8102af3ca-962cb9c9.md) | Medium | PrivilegeEscalation | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Executable uploaded to SharePoint document management site](../content/microsoft-business-applications-dataverse-executable-uploaded-to-sharepoint-document-management-site-ba5e608f-7879-4927-8b0d-a9948b4fe6f3-a46cc5a8.md) | Low | Execution, Persistence | [`OfficeActivity`](../tables/officeactivity.md) |
| [Dataverse - Export activity from terminated or notified employee](../content/microsoft-business-applications-dataverse-export-activity-from-terminated-or-notified-employee-0881b209-62c9-4b15-9f9a-e0c1d1b1eb7b-d925cc5f.md) | Medium | Exfiltration | - |
| [Dataverse - Guest user exfiltration following Power Platform defense impairment](../content/microsoft-business-applications-dataverse-guest-user-exfiltration-following-power-platform-defense-impai-39efbf4b-b347-4cc7-895e-99a868bf29ea-f29caf4d.md) | High | DefenseEvasion, Exfiltration | [`AuditLogs`](../tables/auditlogs.md)<br>[`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) |
| [Dataverse - Hierarchy security manipulation](../content/microsoft-business-applications-dataverse-hierarchy-security-manipulation-2df0adf5-92a8-4ee0-a123-3eb5be1eed02-f5cc5237.md) | Medium | PrivilegeEscalation | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Honeypot instance activity](../content/microsoft-business-applications-dataverse-honeypot-instance-activity-11650b85-d8cc-49c4-8c04-a8a739635983-644d15f1.md) | Medium | Discovery, Exfiltration | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Login by a sensitive privileged user](../content/microsoft-business-applications-dataverse-login-by-a-sensitive-privileged-user-f327816b-9328-4b17-9290-a02adc2f4928-32716765.md) | High | InitialAccess, CredentialAccess, PrivilegeEscalation | - |
| [Dataverse - Login from IP in the block list](../content/microsoft-business-applications-dataverse-login-from-ip-in-the-block-list-666fef96-1bb8-4abf-ad72-e5cb49561381-2bf699c4.md) | High | InitialAccess | - |
| [Dataverse - Login from IP not in the allow list](../content/microsoft-business-applications-dataverse-login-from-ip-not-in-the-allow-list-81c693fe-f6c4-4352-bc10-3526f6e22637-6a1a9333.md) | High | InitialAccess | - |
| [Dataverse - Malware found in SharePoint document management site](../content/microsoft-business-applications-dataverse-malware-found-in-sharepoint-document-management-site-2e3878bb-d519-43aa-9992-ea069df099e4-82c1f402.md) | Medium | Execution | [`OfficeActivity`](../tables/officeactivity.md) |
| [Dataverse - Mass deletion of records](../content/microsoft-business-applications-dataverse-mass-deletion-of-records-716cf6d4-97ad-407b-923e-6790083acb58-2ea9461e.md) | Medium | Impact | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Mass download from SharePoint document management](../content/microsoft-business-applications-dataverse-mass-download-from-sharepoint-document-management-95e02f1b-5886-4043-8f0e-a42e6e23330f-26e23cc8.md) | Low | Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |
| [Dataverse - Mass export of records to Excel](../content/microsoft-business-applications-dataverse-mass-export-of-records-to-excel-57000f0d-ff5d-4166-94b6-aa5fb62b16ec-17a490af.md) | Low | Exfiltration | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Mass record updates](../content/microsoft-business-applications-dataverse-mass-record-updates-df577f0f-1d8a-4420-9057-a07f0edb15c8-7ce89bac.md) | Medium | Impact | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - New Dataverse application user activity type](../content/microsoft-business-applications-dataverse-new-dataverse-application-user-activity-type-5c768e7d-7e5e-4d57-80d4-3f50c96fbf70-4573a9e7.md) | Medium | CredentialAccess, Execution, PrivilegeEscalation | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - New non-interactive identity granted access](../content/microsoft-business-applications-dataverse-new-non-interactive-identity-granted-access-682e230c-e5da-4085-8666-701d1f1be7de-981cd709.md) | Informational | Persistence, LateralMovement, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md)<br>[`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - New sign-in from an unauthorized domain](../content/microsoft-business-applications-dataverse-new-sign-in-from-an-unauthorized-domain-4c1c9aee-8e44-4bb9-bd53-f3e7d6761282-361ae9c5.md) | Medium | InitialAccess | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - New user agent type that was not used before](../content/microsoft-business-applications-dataverse-new-user-agent-type-that-was-not-used-before-34a5d79b-8f9a-420c-aa64-7f4d262ac29a-99e2d75d.md) | Low | InitialAccess, DefenseEvasion | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - New user agent type that was not used with Office 365](../content/microsoft-business-applications-dataverse-new-user-agent-type-that-was-not-used-with-office-365-094b3c0a-1f63-42f7-9535-c8c7b7198328-ba0f47d1.md) | Low | InitialAccess | [`DataverseActivity`](../tables/dataverseactivity.md)<br>[`OfficeActivity`](../tables/officeactivity.md) |
| [Dataverse - Organization settings modified](../content/microsoft-business-applications-dataverse-organization-settings-modified-a6f6b734-3db8-4259-a988-69e0b8eac0c2-7b2f4c63.md) | Informational | Persistence | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Removal of blocked file extensions](../content/microsoft-business-applications-dataverse-removal-of-blocked-file-extensions-1b1061be-2595-4492-af6d-1c8a5fc9576d-1471a08b.md) | Medium | DefenseEvasion | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - SharePoint document management site added or updated](../content/microsoft-business-applications-dataverse-sharepoint-document-management-site-added-or-updated-c4c3510a-0ee0-4561-9835-47882ffa7f46-49ba329f.md) | Informational | Exfiltration | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Suspicious security role modifications](../content/microsoft-business-applications-dataverse-suspicious-security-role-modifications-e44a58b2-b63a-4eb9-92da-85660d73495c-6fcc2dde.md) | Medium | PrivilegeEscalation | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Suspicious use of TDS endpoint](../content/microsoft-business-applications-dataverse-suspicious-use-of-tds-endpoint-d875af10-6bb9-4d6a-a6e4-78439a98bf4b-79440ea8.md) | Low | Exfiltration, InitialAccess | [`DataverseActivity`](../tables/dataverseactivity.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dataverse - Suspicious use of Web API](../content/microsoft-business-applications-dataverse-suspicious-use-of-web-api-8a6ecba2-ccfe-4c8c-b086-fa3e6ff7fa86-3da7d04c.md) | Medium | Execution, Exfiltration, Reconnaissance, Discovery | [`DataverseActivity`](../tables/dataverseactivity.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Dataverse - TI map IP to DataverseActivity](../content/microsoft-business-applications-dataverse-ti-map-ip-to-dataverseactivity-56d5aa0c-d871-4167-ba13-61c2f0fd17bf-cc32474f.md) | Medium | InitialAccess, LateralMovement, Discovery | [`DataverseActivity`](../tables/dataverseactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Dataverse - TI map URL to DataverseActivity](../content/microsoft-business-applications-dataverse-ti-map-url-to-dataverseactivity-d88a0e22-3b6a-40c2-af28-c064b44d03b7-bcfd5ea3.md) | Medium | InitialAccess, Execution, Persistence | [`DataverseActivity`](../tables/dataverseactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Dataverse - Terminated employee exfiltration over email](../content/microsoft-business-applications-dataverse-terminated-employee-exfiltration-over-email-de039242-47e0-43fa-84d7-b6be24305349-d5733918.md) | High | Exfiltration | [`EmailEvents`](../tables/emailevents.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dataverse - Terminated employee exfiltration to USB drive](../content/microsoft-business-applications-dataverse-terminated-employee-exfiltration-to-usb-drive-c5e75cb6-cea0-49c2-a998-da414035aac1-627b05d7.md) | High | Exfiltration | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Unusual sign-in following disabled IP address-based cookie binding protection](../content/microsoft-business-applications-dataverse-unusual-sign-in-following-disabled-ip-address-based-cookie-bin-d7c9549c-7246-4555-8e53-d7b0db546764-05625607.md) | Medium | DefenseEvasion | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - User bulk retrieval outside normal activity](../content/microsoft-business-applications-dataverse-user-bulk-retrieval-outside-normal-activity-08cb7ffc-59c6-4e7d-88e0-327371c9431b-d673ce2b.md) | Low | Exfiltration | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [F&O - Bank account change following network alias reassignment](../content/microsoft-business-applications-f&o-bank-account-change-following-network-alias-reassignment-dccbdb5b-2ce7-4931-bfbe-f1ad6523ee64-3345fbe4.md) | Low | CredentialAccess, LateralMovement, PrivilegeEscalation | [`FinanceOperationsActivity_CL`](../tables/financeoperationsactivity-cl.md) |
| [F&O - Mass update or deletion of user records](../content/microsoft-business-applications-f&o-mass-update-or-deletion-of-user-records-5ab00fbb-ba2c-44dc-b02e-f119639b9a11-e077e1c5.md) | Medium | Impact | [`FinanceOperationsActivity_CL`](../tables/financeoperationsactivity-cl.md) |
| [F&O - Non-interactive account mapped to self or sensitive privileged user](../content/microsoft-business-applications-f&o-non-interactive-account-mapped-to-self-or-sensitive-privileged-user-5b7cc7f9-fe54-4138-9fb0-d650807345d3-cbeb2e4b.md) | Medium | CredentialAccess, Persistence, PrivilegeEscalation | [`FinanceOperationsActivity_CL`](../tables/financeoperationsactivity-cl.md) |
| [F&O - Reverted bank account number modifications](../content/microsoft-business-applications-f&o-reverted-bank-account-number-modifications-44b1021c-d517-4b7a-9ba6-a91eab94e632-ecab7c77.md) | Low | Impact | [`FinanceOperationsActivity_CL`](../tables/financeoperationsactivity-cl.md) |
| [F&O - Unusual sign-in activity using single factor authentication](../content/microsoft-business-applications-f&o-unusual-sign-in-activity-using-single-factor-authentication-919e939f-95e2-4978-846e-13a721c89ea1-0df016bb.md) | Low | CredentialAccess, InitialAccess | [`SigninLogs`](../tables/signinlogs.md) |
| [Power Apps - App activity from unauthorized geo](../content/microsoft-business-applications-power-apps-app-activity-from-unauthorized-geo-7ec1e61d-f3b7-4f40-bb1a-357a63913c23-0cf6ffb9.md) | Low | InitialAccess | [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Power Apps - Bulk sharing of Power Apps to newly created guest users](../content/microsoft-business-applications-power-apps-bulk-sharing-of-power-apps-to-newly-created-guest-users-943acfa0-9285-4eb0-a9c0-42e36177ef19-41b30b81.md) | Medium | ResourceDevelopment, InitialAccess, LateralMovement | [`AuditLogs`](../tables/auditlogs.md)<br>[`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) |
| [Power Apps - Multiple apps deleted](../content/microsoft-business-applications-power-apps-multiple-apps-deleted-ed88638d-8627-4c20-ba08-67c13807a9b1-10499cb8.md) | Medium | Impact | [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) |
| [Power Apps - Multiple users access a malicious link after launching new app](../content/microsoft-business-applications-power-apps-multiple-users-access-a-malicious-link-after-launching-new-ap-4bd7e93a-0646-4e02-8dcb-aa16d16618f4-45705870.md) | High | InitialAccess | [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) |
| [Power Automate - Departing employee flow activity](../content/microsoft-business-applications-power-automate-departing-employee-flow-activity-b1e11b8c-545a-4dea-a912-0008e160d183-ecbb18b0.md) | High | Exfiltration, Impact | [`PowerAutomateActivity`](../tables/powerautomateactivity.md) |
| [Power Automate - Unusual bulk deletion of flow resources](../content/microsoft-business-applications-power-automate-unusual-bulk-deletion-of-flow-resources-56cb646e-56a0-4f0e-8866-9bc1dd15da78-eb6e5a2f.md) | Medium | Impact, DefenseEvasion | [`PowerAutomateActivity`](../tables/powerautomateactivity.md) |
| [Power Platform - Account added to privileged Microsoft Entra roles](../content/microsoft-business-applications-power-platform-account-added-to-privileged-microsoft-entra-roles-71d829d6-eb50-4a17-8a64-655fae8d71e1-b0e60b31.md) | Low | PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [Power Platform - Connector added to a sensitive environment](../content/microsoft-business-applications-power-platform-connector-added-to-a-sensitive-environment-886a5655-3d12-42f1-8927-4095789c575e-025af1bc.md) | Low | Execution, Exfiltration | [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) |
| [Power Platform - DLP policy updated or removed](../content/microsoft-business-applications-power-platform-dlp-policy-updated-or-removed-1b2e6172-85c5-417a-90c3-7cc80cb787f5-a317faa0.md) | Low | DefenseEvasion | [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) |
| [Power Platform - Possibly compromised user accesses Power Platform services](../content/microsoft-business-applications-power-platform-possibly-compromised-user-accesses-power-platform-service-54d48840-1c64-4399-afee-ad39a069118d-23dcba32.md) | High | InitialAccess, LateralMovement | [`SigninLogs`](../tables/signinlogs.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Dataverse - Activity after Microsoft Entra alerts](../content/microsoft-business-applications-dataverse-activity-after-microsoft-entra-alerts-428c3d41-e441-4244-994e-b059d6316bc4-b180c05f.md) | InitialAccess | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dataverse - Activity after failed logons](../content/microsoft-business-applications-dataverse-activity-after-failed-logons-dafcc598-2987-4aa0-947e-7d0449677689-8b8942dc.md) | InitialAccess | [`DataverseActivity`](../tables/dataverseactivity.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Dataverse - Cross-environment data export activity](../content/microsoft-business-applications-dataverse-cross-environment-data-export-activity-74a48db8-dc1d-414e-9709-39fa3f8a2246-f5b62c63.md) | Exfiltration, Collection | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Dataverse export copied to USB devices](../content/microsoft-business-applications-dataverse-dataverse-export-copied-to-usb-devices-f9658e11-e277-4a65-8f91-2cb94cf7497c-664d805c.md) | Exfiltration | [`DataverseActivity`](../tables/dataverseactivity.md) |
| [Dataverse - Generic client app used to access production environments](../content/microsoft-business-applications-dataverse-generic-client-app-used-to-access-production-environments-90bcbd4e-e8b5-4a5d-9fe6-d0f9f0220b4a-72c7ad56.md) | Execution | [`SigninLogs`](../tables/signinlogs.md) |
| [Dataverse - Identity management activity outside of privileged directory role membership](../content/microsoft-business-applications-dataverse-identity-management-activity-outside-of-privileged-directory-r-c7e6e48a-0514-4989-bc90-4a3c9207ede1-5ce4101d.md) | PrivilegeEscalation | *Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Dataverse - Identity management changes without MFA](../content/microsoft-business-applications-dataverse-identity-management-changes-without-mfa-385234b7-d96c-4dc3-9c0e-ceb46048d487-58611350.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md) |
| [Power Apps - Anomalous bulk sharing of Power App to newly created guest users](../content/microsoft-business-applications-power-apps-anomalous-bulk-sharing-of-power-app-to-newly-created-guest-us-169428be-5ed0-4230-9103-c83df89c789a-0624080a.md) | InitialAccess, LateralMovement, ResourceDevelopment | [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Dynamics365Activity](../content/microsoft-business-applications-dynamics365activity-1015284f.md) | [`DataverseActivity`](../tables/dataverseactivity.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Dataverse: Add SharePoint sites to watchlist](../content/microsoft-business-applications-dataverse-add-sharepoint-sites-to-watchlist-f103a76a.md) | This playbook is used to add new or updated SharePoint document management sites into the configurat... | - |
| [Dataverse: Add user to blocklist (alert trigger)](../content/microsoft-business-applications-dataverse-add-user-to-blocklist-alert-trigger-ba036037.md) | This playbook can be triggered on-demand when a Microsoft Sentinel alert is raised, allowing the ana... | - |
| [Dataverse: Add user to blocklist (incident trigger)](../content/microsoft-business-applications-dataverse-add-user-to-blocklist-incident-trigger-8a2cea6e.md) | This playbook can be triggered when a Microsoft Sentinel incident is raised and will automatically a... | - |
| [Dataverse: Add user to blocklist using Outlook approval workflow](../content/microsoft-business-applications-dataverse-add-user-to-blocklist-using-outlook-approval-workflow-1bc0e7d4.md) | This playbook can be triggered when a Microsoft Sentinel incident is raised and will automatically a... | - |
| [Dataverse: Add user to blocklist using Teams approval workflow](../content/microsoft-business-applications-dataverse-add-user-to-blocklist-using-teams-approval-workflow-3f716fe3.md) | This playbook can be triggered when a Microsoft Sentinel incident is raised and will automatically a... | - |
| [Dataverse: Remove user from blocklist](../content/microsoft-business-applications-dataverse-remove-user-from-blocklist-08a3de77.md) | This playbook can be triggered on-demand when a Microsoft Sentinel alert is raised, allowing the ana... | - |
| [Dataverse: Send notification to manager](../content/microsoft-business-applications-dataverse-send-notification-to-manager-f5cc710c.md) | This playbook can be triggered when a Microsoft Sentinel incident is raised and will automatically s... | - |
| [Security workflow: alert verification with workload owners](../content/microsoft-business-applications-security-workflow-alert-verification-with-workload-owners-b6c05acd.md) | This playbook can reduce burden on the SOC by offloading alert verification to IT admins for specifi... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DataverseSharePointSites](../content/microsoft-business-applications-dataversesharepointsites-2a51081a-e31d-4a29-9fd5-cf399b0d3cc1-f7114e58.md) | - | - |
| [MSBizAppsNetworkAddresses](../content/microsoft-business-applications-msbizappsnetworkaddresses-7c9f20e6-1ba1-4c22-90d1-926c8b9749e2-43b2b295.md) | - | - |
| [MSBizAppsOrgSettings](../content/microsoft-business-applications-msbizappsorgsettings-ead143d3-a23a-4597-afe3-eb43d1f74828-50f03cf4.md) | - | - |
| [MSBizAppsTerminatedEmployees](../content/microsoft-business-applications-msbizappsterminatedemployees-55052ba8-de53-4921-bb6d-63a4d6c67373-9b7b3908.md) | - | - |
| [MSBizAppsVIPUsers](../content/microsoft-business-applications-msbizappsvipusers-82deb196-ecdd-4154-9f7f-ff6989cbd08a-b95e1ad6.md) | - | - |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [MSBizApps-Configuration](../content/microsoft-business-applications-msbizapps-configuration-1e07f7f0.md) | - | - |

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
- [Content Index](../content/content-index.md)
