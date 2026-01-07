# Microsoft 365

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Microsoft 365 (formerly, Office 365)](../connectors/office365.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`OfficeActivity`](../tables/officeactivity.md) | [Microsoft 365 (formerly, Office 365)](../connectors/office365.md) | Analytics, Hunting, Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | - | Hunting |

## Content Items

This solution includes **40 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 21 |
| Analytic Rules | 16 |
| Workbooks | 3 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Accessed files shared by temporary external user](../content/microsoft-365-accessed-files-shared-by-temporary-external-user-bff058b2-500e-4ae5-bb49-a5b1423cbd5b.md) | Low | InitialAccess | [`OfficeActivity`](../tables/officeactivity.md) |
| [Exchange AuditLog Disabled](../content/microsoft-365-exchange-auditlog-disabled-194dd92e-d6e7-4249-85a5-273350a7f5ce.md) | Medium | DefenseEvasion | [`OfficeActivity`](../tables/officeactivity.md) |
| [Exchange workflow MailItemsAccessed operation anomaly](../content/microsoft-365-exchange-workflow-mailitemsaccessed-operation-anomaly-b4ceb583-4c44-4555-8ecf-39f572e827ba.md) | Medium | Collection | [`OfficeActivity`](../tables/officeactivity.md) |
| [External user added and removed in short timeframe](../content/microsoft-365-external-user-added-and-removed-in-short-timeframe-bff093b2-500e-4ae5-bb49-a5b1423cbd5b.md) | Low | Persistence | [`OfficeActivity`](../tables/officeactivity.md) |
| [Mail redirect via ExO transport rule](../content/microsoft-365-mail-redirect-via-exo-transport-rule-500415fb-bba7-4227-a08a-9857fb61b6a7.md) | Medium | Collection, Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |
| [Malicious Inbox Rule](../content/microsoft-365-malicious-inbox-rule-7b907bf7-77d4-41d0-a208-5643ff75bf9a.md) | Medium | Persistence, DefenseEvasion | [`OfficeActivity`](../tables/officeactivity.md) |
| [Multiple Teams deleted by a single user](../content/microsoft-365-multiple-teams-deleted-by-a-single-user-173f8699-6af5-484a-8b06-8c47ba89b380.md) | Low | Impact | [`OfficeActivity`](../tables/officeactivity.md) |
| [Multiple users email forwarded to same destination](../content/microsoft-365-multiple-users-email-forwarded-to-same-destination-871ba14c-88ef-48aa-ad38-810f26760ca3.md) | Medium | Collection, Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |
| [New executable via Office FileUploaded Operation](../content/microsoft-365-new-executable-via-office-fileuploaded-operation-d722831e-88f5-4e25-b106-4ef6e29f8c13.md) | Low | CommandAndControl, LateralMovement | [`OfficeActivity`](../tables/officeactivity.md) |
| [Office Policy Tampering](../content/microsoft-365-office-policy-tampering-fbd72eb8-087e-466b-bd54-1ca6ea08c6d3.md) | Medium | Persistence, DefenseEvasion | [`OfficeActivity`](../tables/officeactivity.md) |
| [Office365 Sharepoint File transfer Folders above threshold](../content/microsoft-365-office365-sharepoint-file-transfer-folders-above-threshold-8a547285-801c-4290-aa2e-5e7e20ca157d.md) | Medium | Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |
| [Office365 Sharepoint File transfer above threshold](../content/microsoft-365-office365-sharepoint-file-transfer-above-threshold-8b4f03e7-3460-4401-824d-e65a8dd464f0.md) | Medium | Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |
| [Rare and potentially high-risk Office operations](../content/microsoft-365-rare-and-potentially-high-risk-office-operations-957cb240-f45d-4491-9ba5-93430a3c08be.md) | Low | Persistence, Collection | [`OfficeActivity`](../tables/officeactivity.md) |
| [SharePointFileOperation via devices with previously unseen user agents](../content/microsoft-365-sharepointfileoperation-via-devices-with-previously-unseen-user-agents-5dd76a87-9f87-4576-bab3-268b0e2b338b.md) | Medium | Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |
| [SharePointFileOperation via previously unseen IPs](../content/microsoft-365-sharepointfileoperation-via-previously-unseen-ips-4b11568b-3f5f-4ba1-80c8-7f1dc8390eb7.md) | Medium | Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |

#### Retired/Deprecated Rules

| Name | Status | Description |
|:-----|:-------|:------------|
| [Possible Forest Blizzard attempted credential harvesting - Sept 2020](../content/microsoft-365-possible-forest-blizzard-attempted-credential-harvesting---sept-2020-04384937-e927-4595-8f3c-89ff58ed231f.md) | Retired | This analytic rule is retired because IoCs are outdated. It is recommended to use Microsoft Entra ID Solution's Analytic rules instead to detect crede... |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Anomalous access to other users' mailboxes](../content/microsoft-365-anomalous-access-to-other-users'-mailboxes-271e8881-3044-4332-a5f4-42264c2e0315.md) | Collection | [`OfficeActivity`](../tables/officeactivity.md) |
| [Bots added to multiple teams](../content/microsoft-365-bots-added-to-multiple-teams-9eb64924-ec8d-44d0-b1f2-10665150fb74.md) | Persistence, Collection | [`OfficeActivity`](../tables/officeactivity.md) |
| [Exes with double file extension and access summary](../content/microsoft-365-exes-with-double-file-extension-and-access-summary-d12580c2-1474-4125-a8a3-553f50d91215.md) | DefenseEvasion | [`OfficeActivity`](../tables/officeactivity.md) |
| [External user added and removed in a short timeframe](../content/microsoft-365-external-user-added-and-removed-in-a-short-timeframe-119d9e1c-afcc-4d23-b239-cdb4e7bf851c.md) | Persistence | [`OfficeActivity`](../tables/officeactivity.md) |
| [External user from a new organisation added to Teams](../content/microsoft-365-external-user-from-a-new-organisation-added-to-teams-6fce5baf-bfc2-4c56-a6b7-9c4733fc5a45.md) | Persistence | [`OfficeActivity`](../tables/officeactivity.md) |
| [Files uploaded to teams and access summary](../content/microsoft-365-files-uploaded-to-teams-and-access-summary-90e198a9-efb6-4719-ad89-81b8e93633a7.md) | InitialAccess, Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |
| [Mail redirect via ExO transport rule](../content/microsoft-365-mail-redirect-via-exo-transport-rule-9891684a-1e3a-4546-9403-3439513cbc70.md) | Collection, Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |
| [Multiple Teams deleted by a single user](../content/microsoft-365-multiple-teams-deleted-by-a-single-user-64990414-b015-4edf-bef0-343b741e68c5.md) | Impact | [`OfficeActivity`](../tables/officeactivity.md) |
| [Multiple users email forwarded to same destination](../content/microsoft-365-multiple-users-email-forwarded-to-same-destination-a1551ae4-f61c-4bca-9c57-4d0d681db2e9.md) | Collection, Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |
| [New Admin account activity seen which was not seen historically](../content/microsoft-365-new-admin-account-activity-seen-which-was-not-seen-historically-723c5f46-133f-4f1e-ada6-5c138f811d75.md) | PrivilegeEscalation, Collection | [`OfficeActivity`](../tables/officeactivity.md) |
| [New Windows Reserved Filenames staged on Office file services](../content/microsoft-365-new-windows-reserved-filenames-staged-on-office-file-services-641ecd2d-27c9-4f05-8433-8205096b09fc.md) | CommandAndControl | [`OfficeActivity`](../tables/officeactivity.md) |
| [Non-owner mailbox login activity](../content/microsoft-365-non-owner-mailbox-login-activity-0a8f410d-38b5-4d75-90da-32b472b97230.md) | Collection, Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |
| [Office Mail Forwarding - Hunting Version](../content/microsoft-365-office-mail-forwarding---hunting-version-d49fc965-aef3-49f6-89ad-10cc4697eb5b.md) | Collection, Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |
| [PowerShell or non-browser mailbox login activity](../content/microsoft-365-powershell-or-non-browser-mailbox-login-activity-49a4f65a-fe18-408e-afec-042fde93d3ce.md) | Execution, Persistence, Collection | [`OfficeActivity`](../tables/officeactivity.md) |
| [Previously unseen bot or application added to Teams](../content/microsoft-365-previously-unseen-bot-or-application-added-to-teams-bf76e508-9282-4cf1-9cc1-5c20c3dea2ee.md) | Persistence, Collection | [`OfficeActivity`](../tables/officeactivity.md) |
| [SharePointFileOperation via clientIP with previously unseen user agents](../content/microsoft-365-sharepointfileoperation-via-clientip-with-previously-unseen-user-agents-e8ae1375-4640-430c-ae8e-2514d09c71eb.md) | Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |
| [SharePointFileOperation via devices with previously unseen user agents](../content/microsoft-365-sharepointfileoperation-via-devices-with-previously-unseen-user-agents-f2367171-1514-4c67-88ef-27434b6a1093.md) | Exfiltration | [`OfficeActivity`](../tables/officeactivity.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [SharePointFileOperation via previously unseen IPs](../content/microsoft-365-sharepointfileoperation-via-previously-unseen-ips-e3d24cfd-b2a1-4ba7-8f80-0360892f9d57.md) | Exfiltration | [`OfficeActivity`](../tables/officeactivity.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [User added to Teams and immediately uploads file](../content/microsoft-365-user-added-to-teams-and-immediately-uploads-file-3d6d0c04-7337-40cf-ace6-c471d442356d.md) | InitialAccess | [`OfficeActivity`](../tables/officeactivity.md) |
| [User made Owner of multiple teams](../content/microsoft-365-user-made-owner-of-multiple-teams-558f15dd-3171-4b11-bf24-31c0610a20e0.md) | PrivilegeEscalation | - |
| [Windows Reserved Filenames staged on Office file services](../content/microsoft-365-windows-reserved-filenames-staged-on-office-file-services-61c28cd7-3139-4731-8ea7-2cbbeabb4684.md) | CommandAndControl | [`OfficeActivity`](../tables/officeactivity.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ExchangeOnline](../content/microsoft-365-exchangeonline.md) | [`OfficeActivity`](../tables/officeactivity.md) |
| [Office365](../content/microsoft-365-office365.md) | [`OfficeActivity`](../tables/officeactivity.md) |
| [SharePointAndOneDrive](../content/microsoft-365-sharepointandonedrive.md) | [`OfficeActivity`](../tables/officeactivity.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.5       | 04-02-2025                     | Updated **Analytic Rule** MailItemsAccessedTimeSeries.yaml    |
| 3.0.4       | 27-08-2024                     | Updated **Analytic Rule**  for Same names     |
| 3.0.3       | 12-06-2024                     | Updated **Analytic Rule**  for Bug Fixes ExternalUserAddedRemovedInTeams.yaml      |
| 3.0.2       | 09-05-2024					   | Updated **Analytic Rule** to get expected result and Entity Mapping exchange_auditlogdisabled.yaml	and fixed typo description in **Analytic Rules** ExternalUserAddedRemovedInTeams.yaml	   |
| 3.0.1       | 04-01-2024                     | Updated **Analytic Rules**, **Hunting Queries** and **Workbook** for Bug Fixes |
| 3.0.0       | 08-08-2023                     | Renamed **Data Connector** in the solution to Microsoft 365 (formerly, Office 365) so that the naming aligns in Content Hub and Data Connector gallery.<br/> Updated **Hunting Queries** to have descriptions that meet the 255 characters limit.      |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
