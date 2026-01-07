# OfficeActivity

Reference for OfficeActivity table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Office 365 |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/officeactivity) |

## Solutions (22)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise---financial-fraud.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [Global Secure Access](../solutions/global-secure-access.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Malware Protection Essentials](../solutions/malware-protection-essentials.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft 365](../solutions/microsoft-365.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security---exchange-online.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)
- [Teams](../solutions/teams.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md)
- [ThreatConnect](../solutions/threatconnect.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft 365 (formerly, Office 365)](../connectors/office365.md)

---

## Content Items Using This Table (73)

### Analytic Rules (29)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990.md)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise---financial-fraud.md):**
- [Malicious BEC Inbox Rule](../content/business-email-compromise---financial-fraud-malicious-bec-inbox-rule-8ac77493-3cae-4840-8634-15fb23f8fb68.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence---threat-hunting-hash-8f9cd0e5-b4ab-4821-95e2-1082fcd784c7.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoise TI map IP entity to OfficeActivity](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-officeactivity-c51628fe-999c-5150-9fd7-660fc4f58ed2.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI IPAddress in OfficeActivity](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-officeactivity-0e96c419-68eb-4235-947e-7e86e136cda0.md)

**In solution [Microsoft 365](../solutions/microsoft-365.md):**
- [Accessed files shared by temporary external user](../content/microsoft-365-accessed-files-shared-by-temporary-external-user-bff058b2-500e-4ae5-bb49-a5b1423cbd5b.md)
- [Exchange AuditLog Disabled](../content/microsoft-365-exchange-auditlog-disabled-194dd92e-d6e7-4249-85a5-273350a7f5ce.md)
- [Exchange workflow MailItemsAccessed operation anomaly](../content/microsoft-365-exchange-workflow-mailitemsaccessed-operation-anomaly-b4ceb583-4c44-4555-8ecf-39f572e827ba.md)
- [External user added and removed in short timeframe](../content/microsoft-365-external-user-added-and-removed-in-short-timeframe-bff093b2-500e-4ae5-bb49-a5b1423cbd5b.md)
- [Mail redirect via ExO transport rule](../content/microsoft-365-mail-redirect-via-exo-transport-rule-500415fb-bba7-4227-a08a-9857fb61b6a7.md)
- [Malicious Inbox Rule](../content/microsoft-365-malicious-inbox-rule-7b907bf7-77d4-41d0-a208-5643ff75bf9a.md)
- [Multiple Teams deleted by a single user](../content/microsoft-365-multiple-teams-deleted-by-a-single-user-173f8699-6af5-484a-8b06-8c47ba89b380.md)
- [Multiple users email forwarded to same destination](../content/microsoft-365-multiple-users-email-forwarded-to-same-destination-871ba14c-88ef-48aa-ad38-810f26760ca3.md)
- [New executable via Office FileUploaded Operation](../content/microsoft-365-new-executable-via-office-fileuploaded-operation-d722831e-88f5-4e25-b106-4ef6e29f8c13.md)
- [Office Policy Tampering](../content/microsoft-365-office-policy-tampering-fbd72eb8-087e-466b-bd54-1ca6ea08c6d3.md)
- [Office365 Sharepoint File transfer Folders above threshold](../content/microsoft-365-office365-sharepoint-file-transfer-folders-above-threshold-8a547285-801c-4290-aa2e-5e7e20ca157d.md)
- [Office365 Sharepoint File transfer above threshold](../content/microsoft-365-office365-sharepoint-file-transfer-above-threshold-8b4f03e7-3460-4401-824d-e65a8dd464f0.md)
- [Rare and potentially high-risk Office operations](../content/microsoft-365-rare-and-potentially-high-risk-office-operations-957cb240-f45d-4491-9ba5-93430a3c08be.md)
- [SharePointFileOperation via devices with previously unseen user agents](../content/microsoft-365-sharepointfileoperation-via-devices-with-previously-unseen-user-agents-5dd76a87-9f87-4576-bab3-268b0e2b338b.md)
- [SharePointFileOperation via previously unseen IPs](../content/microsoft-365-sharepointfileoperation-via-previously-unseen-ips-4b11568b-3f5f-4ba1-80c8-7f1dc8390eb7.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - Executable uploaded to SharePoint document management site](../content/microsoft-business-applications-dataverse---executable-uploaded-to-sharepoint-document-management-site-ba5e608f-7879-4927-8b0d-a9948b4fe6f3.md)
- [Dataverse - Malware found in SharePoint document management site](../content/microsoft-business-applications-dataverse---malware-found-in-sharepoint-document-management-site-2e3878bb-d519-43aa-9992-ea069df099e4.md)
- [Dataverse - Mass download from SharePoint document management](../content/microsoft-business-applications-dataverse---mass-download-from-sharepoint-document-management-95e02f1b-5886-4043-8f0e-a42e6e23330f.md)
- [Dataverse - New user agent type that was not used with Office 365](../content/microsoft-business-applications-dataverse---new-user-agent-type-that-was-not-used-with-office-365-094b3c0a-1f63-42f7-9535-c8c7b7198328.md)

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):**
- [Threat Essentials - Mail redirect via ExO transport rule](../content/securitythreatessentialsolution-threat-essentials---mail-redirect-via-exo-transport-rule-d7c575b2-84f5-48cb-92c5-70d7e8246284.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map Email entity to OfficeActivity](../content/threat-intelligence-ti-map-email-entity-to-officeactivity-4a3f5ed7-8da5-4ce2-af6f-c9ada45060f2.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI map Email entity to OfficeActivity](../content/threat-intelligence-%28new%29-ti-map-email-entity-to-officeactivity-795d43a3-6edc-4c99-971f-00d05841e5ac.md)

**In solution [ThreatConnect](../solutions/threatconnect.md):**
- [ThreatConnect TI Map URL Entity to OfficeActivity Data](../content/threatconnect-threatconnect-ti-map-url-entity-to-officeactivity-data-12c3b31b-66a6-53ff-b6ab-6ae45e56dc92.md)
- [ThreatConnect TI map Email entity to OfficeActivity](../content/threatconnect-threatconnect-ti-map-email-entity-to-officeactivity-4f7ade3e-7121-5274-83ea-d7ed22a01fea.md)

### Hunting Queries (29)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise---financial-fraud.md):**
- [Office Mail Rule Creation with suspicious archive mail move activity](../content/business-email-compromise---financial-fraud-office-mail-rule-creation-with-suspicious-archive-mail-move-activity-f50a26d7-ffdb-4471-90b9-3be78c60e4f2.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence---threat-hunting-hash-0051a0d9-684f-4317-abbd-c1e5c24b39cb.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect File Creation in Startup Folder](../content/malware-protection-essentials-detect-file-creation-in-startup-folder-64e199a8-b26c-462f-a65c-09ed9b53a47b.md)
- [Detect Files with Ramsomware Extensions](../content/malware-protection-essentials-detect-files-with-ramsomware-extensions-595aea5c-74c7-415b-8b12-10af1a338cdf.md)
- [Detect Modification to System Files or Directories by User Accounts](../content/malware-protection-essentials-detect-modification-to-system-files-or-directories-by-user-accounts-54b222c4-0149-421e-9d6d-da66da50495a.md)
- [Detect New Scheduled Task Entry Creations](../content/malware-protection-essentials-detect-new-scheduled-task-entry-creations-4dc0aae4-6375-4670-b138-8c42490ba206.md)
- [Executable Files Created in Uncommon Locations](../content/malware-protection-essentials-executable-files-created-in-uncommon-locations-ab8ddb26-050c-40aa-aaf0-bfb7e3eeb05f.md)

**In solution [Microsoft 365](../solutions/microsoft-365.md):**
- [Anomalous access to other users' mailboxes](../content/microsoft-365-anomalous-access-to-other-users'-mailboxes-271e8881-3044-4332-a5f4-42264c2e0315.md)
- [Bots added to multiple teams](../content/microsoft-365-bots-added-to-multiple-teams-9eb64924-ec8d-44d0-b1f2-10665150fb74.md)
- [Exes with double file extension and access summary](../content/microsoft-365-exes-with-double-file-extension-and-access-summary-d12580c2-1474-4125-a8a3-553f50d91215.md)
- [External user added and removed in a short timeframe](../content/microsoft-365-external-user-added-and-removed-in-a-short-timeframe-119d9e1c-afcc-4d23-b239-cdb4e7bf851c.md)
- [External user from a new organisation added to Teams](../content/microsoft-365-external-user-from-a-new-organisation-added-to-teams-6fce5baf-bfc2-4c56-a6b7-9c4733fc5a45.md)
- [Files uploaded to teams and access summary](../content/microsoft-365-files-uploaded-to-teams-and-access-summary-90e198a9-efb6-4719-ad89-81b8e93633a7.md)
- [Mail redirect via ExO transport rule](../content/microsoft-365-mail-redirect-via-exo-transport-rule-9891684a-1e3a-4546-9403-3439513cbc70.md)
- [Multiple Teams deleted by a single user](../content/microsoft-365-multiple-teams-deleted-by-a-single-user-64990414-b015-4edf-bef0-343b741e68c5.md)
- [Multiple users email forwarded to same destination](../content/microsoft-365-multiple-users-email-forwarded-to-same-destination-a1551ae4-f61c-4bca-9c57-4d0d681db2e9.md)
- [New Admin account activity seen which was not seen historically](../content/microsoft-365-new-admin-account-activity-seen-which-was-not-seen-historically-723c5f46-133f-4f1e-ada6-5c138f811d75.md)
- [New Windows Reserved Filenames staged on Office file services](../content/microsoft-365-new-windows-reserved-filenames-staged-on-office-file-services-641ecd2d-27c9-4f05-8433-8205096b09fc.md)
- [Non-owner mailbox login activity](../content/microsoft-365-non-owner-mailbox-login-activity-0a8f410d-38b5-4d75-90da-32b472b97230.md)
- [Office Mail Forwarding - Hunting Version](../content/microsoft-365-office-mail-forwarding---hunting-version-d49fc965-aef3-49f6-89ad-10cc4697eb5b.md)
- [PowerShell or non-browser mailbox login activity](../content/microsoft-365-powershell-or-non-browser-mailbox-login-activity-49a4f65a-fe18-408e-afec-042fde93d3ce.md)
- [Previously unseen bot or application added to Teams](../content/microsoft-365-previously-unseen-bot-or-application-added-to-teams-bf76e508-9282-4cf1-9cc1-5c20c3dea2ee.md)
- [SharePointFileOperation via clientIP with previously unseen user agents](../content/microsoft-365-sharepointfileoperation-via-clientip-with-previously-unseen-user-agents-e8ae1375-4640-430c-ae8e-2514d09c71eb.md)
- [SharePointFileOperation via devices with previously unseen user agents](../content/microsoft-365-sharepointfileoperation-via-devices-with-previously-unseen-user-agents-f2367171-1514-4c67-88ef-27434b6a1093.md)
- [SharePointFileOperation via previously unseen IPs](../content/microsoft-365-sharepointfileoperation-via-previously-unseen-ips-e3d24cfd-b2a1-4ba7-8f80-0360892f9d57.md)
- [User added to Teams and immediately uploads file](../content/microsoft-365-user-added-to-teams-and-immediately-uploads-file-3d6d0c04-7337-40cf-ace6-c471d442356d.md)
- [Windows Reserved Filenames staged on Office file services](../content/microsoft-365-windows-reserved-filenames-staged-on-office-file-services-61c28cd7-3139-4731-8ea7-2cbbeabb4684.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map File Entity to OfficeActivity Event](../content/threat-intelligence-ti-map-file-entity-to-officeactivity-event-410da56d-4a63-4d22-b68c-9fb1a303be6d.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI Map File Entity to OfficeActivity Event](../content/threat-intelligence-%28new%29-ti-map-file-entity-to-officeactivity-event-bbdb951c-9aba-4d66-85df-f564a1f86881.md)

### Workbooks (15)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification%28cmmc%292.0-cybersecuritymaturitymodelcertification-cmmcv2.md)

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**
- [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity.md)

**In solution [Global Secure Access](../solutions/global-secure-access.md):**
- [GSAM365EnrichedEvents](../content/global-secure-access-gsam365enrichedevents.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [MalwareProtectionEssentialsWorkbook](../content/malware-protection-essentials-malwareprotectionessentialsworkbook.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131.md)

**In solution [Microsoft 365](../solutions/microsoft-365.md):**
- [ExchangeOnline](../content/microsoft-365-exchangeonline.md)
- [Office365](../content/microsoft-365-office365.md)
- [SharePointAndOneDrive](../content/microsoft-365-sharepointandonedrive.md)

**In solution [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security---exchange-online.md):**
- [Microsoft Exchange Admin Activity - Online](../content/microsoft-exchange-security---exchange-online-microsoft-exchange-admin-activity---online.md)
- [Microsoft Exchange Search AdminAuditLog - Online](../content/microsoft-exchange-security---exchange-online-microsoft-exchange-search-adminauditlog---online.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053.md)

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):**
- [SOXITCompliance](../content/sox-it-compliance-soxitcompliance.md)

**In solution [Teams](../solutions/teams.md):**
- [MicrosoftTeams](../content/teams-microsoftteams.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md):**
- [ZeroTrustTIC3](../content/zerotrust%28tic3.0%29-zerotrusttic3.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
