# CloudAppEvents

Events involving accounts and objects in Office 365 and other cloud apps and services

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cloudappevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-cloudappevents-table) |

## Solutions (5)

This table is used by the following solutions:

- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (76)

### Analytic Rules (8)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [Preview - TI map Domain entity to Cloud App Events](../content/threat-intelligence-preview-ti-map-domain-entity-to-cloud-app-events-b97e118c-b7fa-42a6-84de-2e13443fbb8f-9a4d26f1.md)
- [Preview - TI map Email entity to Cloud App Events](../content/threat-intelligence-preview-ti-map-email-entity-to-cloud-app-events-47b9bb10-d216-4359-8cef-08ca2c67e5be-e757d151.md)
- [Preview - TI map IP entity to Cloud App Events](../content/threat-intelligence-preview-ti-map-ip-entity-to-cloud-app-events-4e0a6fc8-697e-4455-be47-831b41ea91ac-e0fcbf3b.md)
- [Preview - TI map URL entity to Cloud App Events](../content/threat-intelligence-preview-ti-map-url-entity-to-cloud-app-events-e8ae92dd-1d41-4530-8be8-85c5014c7b47-7067e6da.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI map Domain entity to Cloud App Events](../content/threat-intelligence-new-ti-map-domain-entity-to-cloud-app-events-a7d2b1e4-dd9c-40fd-9651-1a136eb8f0df-ec106ba0.md)
- [TI map Email entity to Cloud App Events](../content/threat-intelligence-new-ti-map-email-entity-to-cloud-app-events-0385e99c-ae45-45f4-aecf-00104485cd6b-19029041.md)
- [TI map IP entity to Cloud App Events](../content/threat-intelligence-new-ti-map-ip-entity-to-cloud-app-events-16a45aee-5e39-4d1b-b508-40f847c99353-f78512ba.md)
- [TI map URL entity to Cloud App Events](../content/threat-intelligence-new-ti-map-url-entity-to-cloud-app-events-526df43b-f514-477c-af7a-c8d3586457fb-9db18791.md)

### Hunting Queries (65)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [AIR investigation actions insight](../content/microsoft-defender-xdr-air-investigation-actions-insight-77104824-b41e-412d-8e50-26971fe97ab0-128f9b33.md)
- [ATP policy status check](../content/microsoft-defender-xdr-atp-policy-status-check-518e6938-10ef-4165-af19-82f1287141bc-99dce879.md)
- [Admin Submission Trend (FN)](../content/microsoft-defender-xdr-admin-submission-trend-fn-c51b0367-573a-42c3-a4a2-2d8b1ef6bea9-9d96e671.md)
- [Admin Submission Trend (FP)](../content/microsoft-defender-xdr-admin-submission-trend-fp-e3a11181-3ff9-4ba0-908d-3e229b476ce3-73bd2293.md)
- [Admin Submissions by Detection Type](../content/microsoft-defender-xdr-admin-submissions-by-detection-type-8f82894a-1b18-4d1e-a580-1dcaff739a32-822ef034.md)
- [Admin Submissions by DetectionMethod (Phish FP)](../content/microsoft-defender-xdr-admin-submissions-by-detectionmethod-phish-fp-515a98db-49a5-4592-80b7-8227998da9ed-c6d9e1ae.md)
- [Admin Submissions by DetectionMethod (Spam FP)](../content/microsoft-defender-xdr-admin-submissions-by-detectionmethod-spam-fp-5cb9399f-e4d7-46c1-bdfa-d66eec278bf2-63e16950.md)
- [Admin Submissions by Grading verdict (FN-FP)](../content/microsoft-defender-xdr-admin-submissions-by-grading-verdict-fn-fp-8425234b-f09d-490e-be3d-a7ecf081c5d0-817c2b20.md)
- [Admin Submissions by Submission State (FN)](../content/microsoft-defender-xdr-admin-submissions-by-submission-state-fn-60cddbbb-2244-4a61-ad73-b20b1c6f5027-c4812a5b.md)
- [Admin Submissions by Submission State (FP)](../content/microsoft-defender-xdr-admin-submissions-by-submission-state-fp-354d78b3-91b7-4219-9079-57e63e281077-741b14a3.md)
- [Admin Submissions by Submission Type (FN)](../content/microsoft-defender-xdr-admin-submissions-by-submission-type-fn-a7f2dae2-2e33-4744-b013-37dc5628d939-377d80db.md)
- [Admin Submissions by Submission Type (FP)](../content/microsoft-defender-xdr-admin-submissions-by-submission-type-fp-de074419-2ec5-4c7f-a7f6-0a49178b314c-c5fac397.md)
- [Audit Email Preview-Download action](../content/microsoft-defender-xdr-audit-email-preview-download-action-ba1a91ad-1f99-4386-b191-06a76ef213f8-334fb71d.md)
- [BEC - File sharing tactics - Dropbox](../content/microsoft-defender-xdr-bec-file-sharing-tactics-dropbox-85dea577-1c76-44ff-8cad-b47182874ddb-d6e15c9c.md)
- [BEC - File sharing tactics - OneDrive or SharePoint](../content/microsoft-defender-xdr-bec-file-sharing-tactics-onedrive-or-sharepoint-da745698-da8a-40c5-b527-2e9328c2cefe-dcd744e3.md)
- [Calculate overall MDO efficacy](../content/microsoft-defender-xdr-calculate-overall-mdo-efficacy-ff56a21d-fc95-4c11-8f9d-cc59c48cd4e6-2e8ef8fb.md)
- [Email containing malware accessed on a unmanaged device](../content/microsoft-defender-xdr-email-containing-malware-accessed-on-a-unmanaged-device-439f817c-845c-4dda-a8d9-5c1f6831cee9-3e8d09b8.md)
- [File Malware Detection Trend](../content/microsoft-defender-xdr-file-malware-detection-trend-817043be-4b30-4e66-a742-8f601a78b08f-46ed5e59.md)
- [File Malware by Top Malware Families (Anti Virus)](../content/microsoft-defender-xdr-file-malware-by-top-malware-families-anti-virus-a924de5a-89ce-43c7-8adc-b130e5f1924c-678bcc36.md)
- [File Malware by Top Malware Families (Safe Attachments)](../content/microsoft-defender-xdr-file-malware-by-top-malware-families-safe-attachments-2de2de5d-87a3-4e13-9b97-5f42e44d0954-11fa443b.md)
- [Group quarantine release](../content/microsoft-defender-xdr-group-quarantine-release-a12cac64-ea6d-46d4-91a6-262b165fb9ad-e8d4ae12.md)
- [High Confidence Phish Released](../content/microsoft-defender-xdr-high-confidence-phish-released-9e8faa62-7222-48a5-a78f-ef2d22f866dc-1957e796.md)
- [Hunt for Admin email access](../content/microsoft-defender-xdr-hunt-for-admin-email-access-e55e178e-48ba-4313-918a-2d3e16a95441-f6af219e.md)
- [Hunt for TABL changes](../content/microsoft-defender-xdr-hunt-for-tabl-changes-bc2d8214-afb6-4876-b210-25b69325b9b2-61da6233.md)
- [Inbox rule changes which forward-redirect email](../content/microsoft-defender-xdr-inbox-rule-changes-which-forward-redirect-email-54569b06-47fc-41ae-9b00-f7d9b61337b6-8075b72d.md)
- [MDO daily detection summary report](../content/microsoft-defender-xdr-mdo-daily-detection-summary-report-deb4b2c6-c10e-4044-8cf4-84243e40db73-ce48d397.md)
- [Mail item accessed](../content/microsoft-defender-xdr-mail-item-accessed-81ede5df-2ec3-40a5-9dff-1fe6a841079d-2af7c70a.md)
- [Malware detections by Workload Locations](../content/microsoft-defender-xdr-malware-detections-by-workload-locations-ef29d6b6-9192-46aa-b16a-082c2da2f78f-1fe5ecb9.md)
- [Malware detections by Workload Type](../content/microsoft-defender-xdr-malware-detections-by-workload-type-af541ae2-9bb4-4737-a8ea-4fa261bc3866-14585ca9.md)
- [New TABL Items](../content/microsoft-defender-xdr-new-tabl-items-92b76a34-502e-4a53-93ec-9fc37c3b358c-979994c7.md)
- [Number of unique accounts performing Teams message Admin submissions](../content/microsoft-defender-xdr-number-of-unique-accounts-performing-teams-message-admin-submissions-dc230eec-acc2-482f-8601-25125c8ff122-d6ba0e2a.md)
- [Number of unique accounts performing Teams message User  submissions](../content/microsoft-defender-xdr-number-of-unique-accounts-performing-teams-message-user-submissions-489ad959-48eb-4c34-bed6-764cfd39214d-5f3551da.md)
- [Quarantine Release Email Details](../content/microsoft-defender-xdr-quarantine-release-email-details-6f96f6d7-d972-421e-a59f-6b9a8de81324-190bb1b5.md)
- [Quarantine release trend](../content/microsoft-defender-xdr-quarantine-release-trend-9f135aef-ad25-4df2-bdab-8399978a36a2-1547d717.md)
- [Suspicious sign-in attempts from QR code phishing campaigns](../content/microsoft-defender-xdr-suspicious-sign-in-attempts-from-qr-code-phishing-campaigns-3131d0ba-32c9-483e-a25c-82e26a07e116-b0a8170e.md)
- [Teams Admin submission of Malware and Phish daily trend](../content/microsoft-defender-xdr-teams-admin-submission-of-malware-and-phish-daily-trend-fc47e222-c348-43ca-ba11-b4628fe243cd-821a40de.md)
- [Teams Admin submission of No Threats daily trend](../content/microsoft-defender-xdr-teams-admin-submission-of-no-threats-daily-trend-b2a6440b-6ebd-4d86-aa33-cfe11f9defcf-321ed5ca.md)
- [Teams Admin-User Submissions Grading Verdicts](../content/microsoft-defender-xdr-teams-admin-user-submissions-grading-verdicts-20c9d89a-ad65-48f4-ba14-605715af640a-11968695.md)
- [Teams User submissions daily trend](../content/microsoft-defender-xdr-teams-user-submissions-daily-trend-ace8e98a-660b-4fa9-a877-60644eb83344-25981de9.md)
- [Top 10 Detection Overrides - Admin Email Submissions (FN)](../content/microsoft-defender-xdr-top-10-detection-overrides-admin-email-submissions-fn-72f939fe-c77b-4c25-91b4-3f784c9c58c3-3cb89584.md)
- [Top 10 sender domains - Admin Teams message submissions FN](../content/microsoft-defender-xdr-top-10-sender-domains-admin-teams-message-submissions-fn-132dffdf-3ee0-4748-8509-fbd3a92e5c9f-45ad68b4.md)
- [Top 10 sender domains - Admin email submissions (FN)](../content/microsoft-defender-xdr-top-10-sender-domains-admin-email-submissions-fn-da7eecca-ecb8-4b8e-a111-62d2b48e2e69-9ba81930.md)
- [Top 10 sender domains - Admin email submissions (FP)](../content/microsoft-defender-xdr-top-10-sender-domains-admin-email-submissions-fp-4c786e9a-b570-47bc-877f-7f3da87a4673-70144cae.md)
- [Top 10 sender domains - Teams user submissions FN or FP](../content/microsoft-defender-xdr-top-10-sender-domains-teams-user-submissions-fn-or-fp-bebb6652-3c52-4358-a946-ecd63cddf082-b18626f1.md)
- [Top 10 senders - Teams users submissions FN or FP](../content/microsoft-defender-xdr-top-10-senders-teams-users-submissions-fn-or-fp-2d8448f5-c0a2-46d7-a004-e062970ccb7b-7b2596a2.md)
- [Top 10 senders of  Admin Teams message submissions FN](../content/microsoft-defender-xdr-top-10-senders-of-admin-teams-message-submissions-fn-49071a21-fbb6-472f-932f-5b6ca1a25883-bcf9b4fd.md)
- [Top 10 senders of  Admin Teams message submissions FP](../content/microsoft-defender-xdr-top-10-senders-of-admin-teams-message-submissions-fp-f82f3d63-b7f2-494d-8254-612405702dd4-4652dba3.md)
- [Top accounts performing Teams admin submissions FN or FP](../content/microsoft-defender-xdr-top-accounts-performing-teams-admin-submissions-fn-or-fp-0a29c9f0-e8d4-4339-a196-52bb3a090a79-83e0c9bf.md)
- [Top accounts performing Teams user submissions FN or FP](../content/microsoft-defender-xdr-top-accounts-performing-teams-user-submissions-fn-or-fp-9ffbd78f-c87c-4fd2-96ec-fd46e27bbd21-dfe1925c.md)
- [Top accounts performing admin submissions (FN)](../content/microsoft-defender-xdr-top-accounts-performing-admin-submissions-fn-d236f728-8b0f-4b4f-acf7-e4707993b841-6d85f0eb.md)
- [Top accounts performing admin submissions (FP)](../content/microsoft-defender-xdr-top-accounts-performing-admin-submissions-fp-8b0bae20-687f-47ca-bc2e-8dabbed9cbae-ce0b898d.md)
- [Top accounts performing user submissions](../content/microsoft-defender-xdr-top-accounts-performing-user-submissions-47506508-dee4-4d4d-93a8-1c78d63cd2eb-ed374abf.md)
- [Total Submissions by Submission Type](../content/microsoft-defender-xdr-total-submissions-by-submission-type-53c58a33-668d-46e1-9714-5892c87650d9-17869076.md)
- [Total Submissions by Submission Type](../content/microsoft-defender-xdr-total-submissions-by-submission-type-8cde246b-7ed1-429c-933a-f7d0363dbbc0-38a58290.md)
- [User Email Submission Trend (FN)](../content/microsoft-defender-xdr-user-email-submission-trend-fn-9c4359a1-0bf9-45b3-9a1a-f333c437a061-6ae2a9dd.md)
- [User Email Submissions (FN) - Top Detection Overrides by Admins](../content/microsoft-defender-xdr-user-email-submissions-fn-top-detection-overrides-by-admins-58acf93f-27de-4af4-8a5f-d87ee59326f9-fef2e72b.md)
- [User Email Submissions (FN) - Top Detection Overrides by Users](../content/microsoft-defender-xdr-user-email-submissions-fn-top-detection-overrides-by-users-0a9385bc-2ef9-4b0e-8834-12f796b08ca8-531a183e.md)
- [User Email Submissions (FN) - Top Intra-Org P2 Senders](../content/microsoft-defender-xdr-user-email-submissions-fn-top-intra-org-p2-senders-b78eddd9-ebe5-42ab-95b4-928a782b52b5-886ff278.md)
- [User Email Submissions (FN) - Top Intra-Org Subjects](../content/microsoft-defender-xdr-user-email-submissions-fn-top-intra-org-subjects-cbf3abc0-2b2d-4852-ab7a-9f7a1231997e-735b38b9.md)
- [User Email Submissions (FN) by Submission Type](../content/microsoft-defender-xdr-user-email-submissions-fn-by-submission-type-289283e9-9f63-488c-8d62-fe9c598f3cd5-fe9e0c5a.md)
- [User Email Submissions (FN-FP) by Grading verdict](../content/microsoft-defender-xdr-user-email-submissions-fn-fp-by-grading-verdict-abdca3e6-c198-404a-b95c-f09ddfed2027-d1a3df7e.md)
- [User Email Submissions accuracy vs Admin review verdict](../content/microsoft-defender-xdr-user-email-submissions-accuracy-vs-admin-review-verdict-d78bad8c-3d94-4a73-bdbe-1c567e3d6d62-56fcb8ae.md)
- [User Email Submissions by Admin review status (Mark and Notify)](../content/microsoft-defender-xdr-user-email-submissions-by-admin-review-status-mark-and-notify-201cb524-b4b4-479a-9637-da35cfa1e30a-695a9a27.md)
- [User email submissions (FN) from Junk Folder](../content/microsoft-defender-xdr-user-email-submissions-fn-from-junk-folder-300b0d05-e99e-4349-ab2b-ec12ff5c2da1-b559b01f.md)
- [User reported submissions](../content/microsoft-defender-xdr-user-reported-submissions-0bd33643-c517-48b1-8211-25a7fbd15a50-18ee082b.md)

### Workbooks (3)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoft-defender-xdr-microsoftdefenderforoffice365detectionsandinsights-c34bc8fb.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
