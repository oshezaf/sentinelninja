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

## Solutions (4)

This table is used by the following solutions:

- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (70)

### Analytic Rules (4)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [Preview - TI map Domain entity to Cloud App Events](../content/b97e118c-b7fa-42a6-84de-2e13443fbb8f.md)
- [Preview - TI map IP entity to Cloud App Events](../content/4e0a6fc8-697e-4455-be47-831b41ea91ac.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI map Domain entity to Cloud App Events](../content/a7d2b1e4-dd9c-40fd-9651-1a136eb8f0df.md)
- [TI map IP entity to Cloud App Events](../content/16a45aee-5e39-4d1b-b508-40f847c99353.md)

### Hunting Queries (64)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [AIR investigation actions insight](../content/77104824-b41e-412d-8e50-26971fe97ab0.md)
- [ATP policy status check](../content/518e6938-10ef-4165-af19-82f1287141bc.md)
- [Admin Submission Trend (FN)](../content/c51b0367-573a-42c3-a4a2-2d8b1ef6bea9.md)
- [Admin Submission Trend (FP)](../content/e3a11181-3ff9-4ba0-908d-3e229b476ce3.md)
- [Admin Submissions by Detection Type](../content/8f82894a-1b18-4d1e-a580-1dcaff739a32.md)
- [Admin Submissions by DetectionMethod (Phish FP)](../content/515a98db-49a5-4592-80b7-8227998da9ed.md)
- [Admin Submissions by DetectionMethod (Spam FP)](../content/5cb9399f-e4d7-46c1-bdfa-d66eec278bf2.md)
- [Admin Submissions by Grading verdict (FN-FP)](../content/8425234b-f09d-490e-be3d-a7ecf081c5d0.md)
- [Admin Submissions by Submission State (FN)](../content/60cddbbb-2244-4a61-ad73-b20b1c6f5027.md)
- [Admin Submissions by Submission State (FP)](../content/354d78b3-91b7-4219-9079-57e63e281077.md)
- [Admin Submissions by Submission Type (FN)](../content/a7f2dae2-2e33-4744-b013-37dc5628d939.md)
- [Admin Submissions by Submission Type (FP)](../content/de074419-2ec5-4c7f-a7f6-0a49178b314c.md)
- [Audit Email Preview-Download action](../content/ba1a91ad-1f99-4386-b191-06a76ef213f8.md)
- [BEC - File sharing tactics - Dropbox](../content/85dea577-1c76-44ff-8cad-b47182874ddb.md)
- [BEC - File sharing tactics - OneDrive or SharePoint](../content/da745698-da8a-40c5-b527-2e9328c2cefe.md)
- [Calculate overall MDO efficacy](../content/ff56a21d-fc95-4c11-8f9d-cc59c48cd4e6.md)
- [File Malware Detection Trend](../content/817043be-4b30-4e66-a742-8f601a78b08f.md)
- [File Malware by Top Malware Families (Anti Virus)](../content/a924de5a-89ce-43c7-8adc-b130e5f1924c.md)
- [File Malware by Top Malware Families (Safe Attachments)](../content/2de2de5d-87a3-4e13-9b97-5f42e44d0954.md)
- [Group quarantine release](../content/a12cac64-ea6d-46d4-91a6-262b165fb9ad.md)
- [High Confidence Phish Released](../content/9e8faa62-7222-48a5-a78f-ef2d22f866dc.md)
- [Hunt for Admin email access](../content/e55e178e-48ba-4313-918a-2d3e16a95441.md)
- [Hunt for TABL changes](../content/bc2d8214-afb6-4876-b210-25b69325b9b2.md)
- [Inbox rule changes which forward-redirect email](../content/54569b06-47fc-41ae-9b00-f7d9b61337b6.md)
- [MDO daily detection summary report](../content/deb4b2c6-c10e-4044-8cf4-84243e40db73.md)
- [Mail item accessed](../content/81ede5df-2ec3-40a5-9dff-1fe6a841079d.md)
- [Malware detections by Workload Locations](../content/ef29d6b6-9192-46aa-b16a-082c2da2f78f.md)
- [Malware detections by Workload Type](../content/af541ae2-9bb4-4737-a8ea-4fa261bc3866.md)
- [New TABL Items](../content/92b76a34-502e-4a53-93ec-9fc37c3b358c.md)
- [Number of unique accounts performing Teams message Admin submissions](../content/dc230eec-acc2-482f-8601-25125c8ff122.md)
- [Number of unique accounts performing Teams message User  submissions](../content/489ad959-48eb-4c34-bed6-764cfd39214d.md)
- [Quarantine Release Email Details](../content/6f96f6d7-d972-421e-a59f-6b9a8de81324.md)
- [Quarantine release trend](../content/9f135aef-ad25-4df2-bdab-8399978a36a2.md)
- [Suspicious sign-in attempts from QR code phishing campaigns](../content/3131d0ba-32c9-483e-a25c-82e26a07e116.md)
- [Teams Admin submission of Malware and Phish daily trend](../content/fc47e222-c348-43ca-ba11-b4628fe243cd.md)
- [Teams Admin submission of No Threats daily trend](../content/b2a6440b-6ebd-4d86-aa33-cfe11f9defcf.md)
- [Teams Admin-User Submissions Grading Verdicts](../content/20c9d89a-ad65-48f4-ba14-605715af640a.md)
- [Teams User submissions daily trend](../content/ace8e98a-660b-4fa9-a877-60644eb83344.md)
- [Top 10 Detection Overrides - Admin Email Submissions (FN)](../content/72f939fe-c77b-4c25-91b4-3f784c9c58c3.md)
- [Top 10 sender domains - Admin Teams message submissions FN](../content/132dffdf-3ee0-4748-8509-fbd3a92e5c9f.md)
- [Top 10 sender domains - Admin email submissions (FN)](../content/da7eecca-ecb8-4b8e-a111-62d2b48e2e69.md)
- [Top 10 sender domains - Admin email submissions (FP)](../content/4c786e9a-b570-47bc-877f-7f3da87a4673.md)
- [Top 10 sender domains - Teams user submissions FN or FP](../content/bebb6652-3c52-4358-a946-ecd63cddf082.md)
- [Top 10 senders - Teams users submissions FN or FP](../content/2d8448f5-c0a2-46d7-a004-e062970ccb7b.md)
- [Top 10 senders of  Admin Teams message submissions FN](../content/49071a21-fbb6-472f-932f-5b6ca1a25883.md)
- [Top 10 senders of  Admin Teams message submissions FP](../content/f82f3d63-b7f2-494d-8254-612405702dd4.md)
- [Top accounts performing Teams admin submissions FN or FP](../content/0a29c9f0-e8d4-4339-a196-52bb3a090a79.md)
- [Top accounts performing Teams user submissions FN or FP](../content/9ffbd78f-c87c-4fd2-96ec-fd46e27bbd21.md)
- [Top accounts performing admin submissions (FN)](../content/d236f728-8b0f-4b4f-acf7-e4707993b841.md)
- [Top accounts performing admin submissions (FP)](../content/8b0bae20-687f-47ca-bc2e-8dabbed9cbae.md)
- [Top accounts performing user submissions](../content/47506508-dee4-4d4d-93a8-1c78d63cd2eb.md)
- [Total Submissions by Submission Type](../content/53c58a33-668d-46e1-9714-5892c87650d9.md)
- [Total Submissions by Submission Type](../content/8cde246b-7ed1-429c-933a-f7d0363dbbc0.md)
- [User Email Submission Trend (FN)](../content/9c4359a1-0bf9-45b3-9a1a-f333c437a061.md)
- [User Email Submissions (FN) - Top Detection Overrides by Admins](../content/58acf93f-27de-4af4-8a5f-d87ee59326f9.md)
- [User Email Submissions (FN) - Top Detection Overrides by Users](../content/0a9385bc-2ef9-4b0e-8834-12f796b08ca8.md)
- [User Email Submissions (FN) - Top Intra-Org P2 Senders](../content/b78eddd9-ebe5-42ab-95b4-928a782b52b5.md)
- [User Email Submissions (FN) - Top Intra-Org Subjects](../content/cbf3abc0-2b2d-4852-ab7a-9f7a1231997e.md)
- [User Email Submissions (FN) by Submission Type](../content/289283e9-9f63-488c-8d62-fe9c598f3cd5.md)
- [User Email Submissions (FN-FP) by Grading verdict](../content/abdca3e6-c198-404a-b95c-f09ddfed2027.md)
- [User Email Submissions accuracy vs Admin review verdict](../content/d78bad8c-3d94-4a73-bdbe-1c567e3d6d62.md)
- [User Email Submissions by Admin review status (Mark and Notify)](../content/201cb524-b4b4-479a-9637-da35cfa1e30a.md)
- [User email submissions (FN) from Junk Folder](../content/300b0d05-e99e-4349-ab2b-ec12ff5c2da1.md)
- [User reported submissions](../content/0bd33643-c517-48b1-8211-25a7fbd15a50.md)

### Workbooks (2)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagement-m2131-maturitymodelforeventlogmanagementm2131.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoftdefenderforoffice365detectionsandinsights-microsoft-defender-xdr.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
