# EmailEvents

Microsoft 365 email events, including email delivery and blocking events

| Attribute | Value |
|:----------|:------|
| **Category** | Defender |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/emailevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailevents-table) |

## Solutions (6)

This table is used by the following solutions:

- [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise---financial-fraud.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (128)

### Analytic Rules (1)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - Terminated employee exfiltration over email](../content/de039242-47e0-43fa-84d7-b6be24305349.md)

### Hunting Queries (123)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise---financial-fraud.md):**
- [Email Forwarding Configuration with SAP download](../content/0576750e-6b61-4545-845f-f5b8f29a0cc4.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Authentication failures by time and authentication type](../content/7fbf7687-5ded-4c39-9fe9-f4f6aa6fc422.md)
- [Automated email notifications and suspicious sign-in activity](../content/0955f477-6471-468a-9b13-fc5fa96d7db2.md)
- [Bad email percentage of Inbound emails](../content/242561f3-568a-4864-be15-fbc85b2e77f9.md)
- [Bulk Emails by Sender Bulk Complaint level](../content/2e903da3-32fe-46b0-8df7-5f39e55db17e.md)
- [Calculate overall MDO efficacy](../content/ff56a21d-fc95-4c11-8f9d-cc59c48cd4e6.md)
- [Campaign with suspicious keywords](../content/9b086a51-e396-4718-90d7-f7b3646e6581.md)
- [CompAuth Failure Trend](../content/eb560458-d96f-4c68-acbb-14b3c706ebe7.md)
- [Custom detection-Emails with QR from non-prevalent senders](../content/516046e8-a460-4f7b-86eb-421d3a9cdff1.md)
- [DKIM Failure Trend](../content/14d47b2a-62b3-4c7b-819c-699e264c581d.md)
- [DMARC Failure Trend](../content/62d6a2e6-4583-4538-a476-a5b3c672657b.md)
- [Detections by detection methods](../content/1c51e10e-7f77-40bc-bd37-6aa55cdf94d6.md)
- [Determine Successfully Delivered Phishing Emails by top IP Addresses](../content/cdac93ef-56c0-45bf-9e7f-9cbf0ad06567.md)
- [Determine Successfully Delivered Phishing Emails to Inbox/Junk folder.](../content/cdac93ef-56c0-45bf-9e7f-9cbf0ad06123.md)
- [Display Name - Spoof and Impersonation](../content/6a570927-8638-4a6f-ac09-72a7d51ffa3c.md)
- [Email Top 10 Domains sending Spam](../content/6fe463ca-4cd3-4d97-a099-6b736f28a128.md)
- [Email Top 10 Targeted Users (Spam)](../content/9e4b7553-1113-4d40-bb6b-7daca7d7d255.md)
- [Email Top 15 Domains sending Spam with Additional Details](../content/c03e13ee-0e7a-4d05-b3f4-790b01bb30a5.md)
- [Email Top 15 Targeted Users (Spam) with Additional Details](../content/86f2b124-8caf-4b53-845a-87de3ffccbdf.md)
- [Email Top Domains sending Malware](../content/a2a7bede-cf55-47ed-9aeb-7b4c97079f4f.md)
- [Email Top Domains sending Phish](../content/0b197e26-7899-47ff-9be9-f7ba6dc949ea.md)
- [Email bombing attacks](../content/c1cac5ad-7aaa-40de-89aa-954f5a33a578.md)
- [Email containing malware sent by an internal sender](../content/07c85687-6dee-4266-9345-1e34de85d989.md)
- [Email malware detection report](../content/23dbd58b-23ce-42ae-b4d1-0dfdd35871ea.md)
- [Email sender IP address Geo location information](../content/0d5ae69d-bdb2-404d-8c8c-50ebe68b6a5b.md)
- [Emails delivered having URLs from QR codes](../content/594fe5a1-53b6-466b-86df-028366c3994e.md)
- [Emails with QR codes and suspicious keywords in subject](../content/706b711a-7622-40f1-9ebb-331d1a0ff697.md)
- [Emails with QR codes from non-prevalent sender](../content/f708c866-073a-4107-a60b-ba6f86e54caa.md)
- [Files share contents and suspicious sign-in activity](../content/11cc0e3f-9718-4ab5-be7b-d9c036ed6b0a.md)
- [Good emails from senders with bad patterns](../content/e6259b03-622e-4e11-9c54-94987dad7c14.md)
- [High Confidence Phish Released](../content/9e8faa62-7222-48a5-a78f-ef2d22f866dc.md)
- [Hunt for email bombing attacks](../content/dd4a480b-aa24-4b62-b1f3-f538d8abbdfb.md)
- [Hunt for email conversation take over attempts](../content/fb46ca1b-0b46-4d9c-b3b3-2f8f807e9f72.md)
- [Hunting for sender patterns](../content/68aa199c-259b-4bb0-8e7a-8ed6f96c5525.md)
- [Hunting for user signals-clusters](../content/8c852f12-499f-499b-afc1-25c50aa9b462.md)
- [Impersonation Detections Trend](../content/416cd270-6327-441a-9304-940c832cf361.md)
- [Impersonation Detections by Detection Technology](../content/15a17150-811d-4829-a3d6-489139c9ff5e.md)
- [Impersonation Detections by Detection Technology Trend](../content/418e8859-b22a-4fd4-b273-5433e054cdc7.md)
- [Inbound emails with QR code URLs](../content/f6354c94-3a95-4235-8530-414f016a7bf6.md)
- [Listing Email Remediation Actions via Explorer](../content/99713387-9d61-49eb-8edc-f51153d8bb01.md)
- [Local time to UTC time conversion](../content/712ffdd8-ddce-4372-85dd-063029b418cf.md)
- [MDO Threat Protection Detections trend over time](../content/eb0e4edb-f423-49f8-a02a-4ededdd30dd5.md)
- [MDO_CountOfRecipientsEmailaddressbySubject](../content/430a9c0d-f3ce-46a3-a994-92b3ada0d1b2.md)
- [MDO_CountOfSendersEmailaddressbySubject](../content/b95994d1-1008-4c42-a74f-9f2967e39ed6.md)
- [MDO_Countofrecipientsemailaddressesbysubject](../content/f840db5b-87c9-43c8-a8c3-5b6b83838cd4.md)
- [MDO_SummaryOfSenders](../content/a96c1571-1f7d-48dc-8287-7df5a5f0d987.md)
- [Mail reply to new domain](../content/da7b973a-0045-4fd6-9161-269369336d24.md)
- [Mailflow by directionality](../content/6b478186-da3b-4d71-beaa-aa5b42908499.md)
- [Malicious Emails with QR code Urls](../content/13260191-fb10-4a36-9ca1-2bbc0aaf77d0.md)
- [Malicious email senders](../content/63c799bc-7567-4e4d-97be-e143fcfaa333.md)
- [Malicious emails detected per day](../content/da932998-81dd-4be4-963c-f4890cb4192e.md)
- [Malicious mails by sender IPs](../content/a8ccbf35-4c6d-4a8f-8c42-04fd9b000a27.md)
- [Malware Detections Trend](../content/e1dbe1d2-785a-4ecd-a1c0-233fc0e990bc.md)
- [Malware Detections by Detection technology](../content/15d255f7-57a6-4b23-bd89-376930d3a305.md)
- [Malware Detections by Detection technology Trend](../content/db79eb5a-785a-400a-a7ef-7285dde8e116.md)
- [Malware Detections by delivery location](../content/b3a4b803-06f6-46d8-9220-b3a53e85ce4f.md)
- [Message from an Accepted Domain with DMARC TempError](../content/4c021477-38f0-409e-869b-11056fcd47f1.md)
- [Personalized campaigns based on the first few keywords](../content/dc7e1eb5-16f5-4ad5-96a1-794970f4b310.md)
- [Personalized campaigns based on the last few keywords](../content/54d3455d-27e0-4ceb-99f9-375abd620151.md)
- [Phish Detections (High) by delivery location](../content/76c77c8a-bd2a-489a-af52-97291211e4e4.md)
- [Phish Detections (Normal) by delivery location](../content/4d86021c-cad7-489b-a8c8-dddecb87a2ef.md)
- [Phish Detections Trend](../content/fbe7a9d2-507e-4974-9e9a-d1cba3907f67.md)
- [Phish Detections by Detection technology](../content/4c30fab1-db4f-4a64-b66b-51478e43a477.md)
- [Phish Detections by Detection technology Trend](../content/dd6efecd-7fe5-41b1-a122-8e0a15de9451.md)
- [Phish Detections by delivery location trend](../content/b20e56b8-e335-43d9-b7b3-43c034c43aea.md)
- [Quarantine Phish Reason](../content/36cf7ce5-7264-46d9-9f47-57b59049b44f.md)
- [Quarantine Phish Reason trend](../content/79bed402-09bc-453b-ab92-8b1411e683fa.md)
- [Quarantine Release Email Details](../content/6f96f6d7-d972-421e-a59f-6b9a8de81324.md)
- [Quarantine Spam Reason](../content/bde9d9fc-e166-4628-91f7-fb86ace93af0.md)
- [Quarantine Spam Reason trend](../content/32a981ad-cd5a-4d80-8c6c-d59b9893c019.md)
- [SPF Failure Trend](../content/79755078-7be8-4f13-a8e7-1ce87cb7d5c0.md)
- [Safe Attachments detections](../content/16eda414-1550-4cdc-8512-0769901d3f05.md)
- [SafeLinks URL detections](../content/492f1ea1-37c3-410a-a2f2-4e4eae2ff7f9.md)
- [Sender recipient contact establishment](../content/b2beec6a-2c1c-4319-a191-e70c2ee42857.md)
- [Spam Detections (High) by delivery location](../content/45c47684-6650-44b6-81c0-951522d0c435.md)
- [Spam Detections (Normal) by delivery location](../content/99e1246e-c1a9-4794-8e96-eb906c73c529.md)
- [Spam Detections by Detection technology](../content/16cfa413-238f-4355-9f8a-4b97ce7572ac.md)
- [Spam and Phish allowed to inbox by Admin Overrides](../content/02e237ed-f7b5-49dd-92e6-1b340d5e37fb.md)
- [Spam and Phish allowed to inbox by User Overrides](../content/b1f797d1-6ea4-4f8f-b663-6c8a1c1018e9.md)
- [Spam detection by IP and its location](../content/316f8777-09fd-480b-a726-21f521fa990f.md)
- [Spam detection by delivery location](../content/7e93ce37-0cc5-4aa9-b30a-07772affa481.md)
- [Spam detection technologies](../content/f290d544-c499-4b23-8a7e-c4cbb7ab6316.md)
- [Spam detection trend](../content/ae690d6f-0ea5-4617-95cf-1ed9a5fcb329.md)
- [Spoof Detections Trend](../content/09b263e1-9c73-4585-a55c-bc209e148e14.md)
- [Spoof Detections by Detection Technology](../content/53139a92-eb64-46d2-be97-e752a71e7021.md)
- [Spoof Detections by Detection Technology Trend](../content/1dce39ec-8a64-4e49-9d6e-926ee6f04c39.md)
- [Spoof and impersonation detections by sender IP](../content/b3180ac0-6d94-494a-8b8c-fcc84319ea6e.md)
- [Spoof and impersonation phish detections](../content/011c3d48-f6ca-405f-9763-66c7856ad2ba.md)
- [Spoof attempts with auth failure](../content/5971f2e7-1bb2-4170-aa7a-577ed8a45c72.md)
- [Spoofing attempts from Specific Domains](../content/cdac93ef-56c0-45bf-9e7f-9cbf0ad034234.md)
- [Top 10 Domains sending Malicious Emails (Malware+Phish+Spam)](../content/af183f01-6d98-4fca-8ca4-63577b78a26e.md)
- [Top 10 External Senders (Malware)](../content/530ef5e4-7ee4-4d70-a8e2-a06459605c02.md)
- [Top 10 External Senders (Phish)](../content/db9789ab-0636-4ea6-b779-1b72b4b64aac.md)
- [Top 10 External Senders (Spam)](../content/86c7d21b-2081-419d-bc2e-7bc909d61eef.md)
- [Top 10 External Senders (Spam)](../content/6f606826-b995-4a8d-8c2c-ee08e3d1194a.md)
- [Top 10 Targeted Users (Malware+Phish+Spam)](../content/b8330f6e-fc47-40ce-b225-5d3b055c6446.md)
- [Top 10 URL domains attacking organization](../content/27ee28e7-423b-48c9-a410-cbc6c8e21d25.md)
- [Top 10 domains sending Bulk email](../content/147131b3-8b57-4c50-b981-5a951ed82272.md)
- [Top 100 malicious email senders](../content/12225f50-9d41-4b78-8269-cc127d98654c.md)
- [Top 100 senders](../content/cadf6e78-2a9a-4fb5-b788-30a592d699d3.md)
- [Top Domains Outbound with Emails with Threats Inbound (Partner BEC)](../content/f9442d20-eff8-4751-9a75-6451aeace687.md)
- [Top Malware Families](../content/0d16e85e-82ec-460a-bf48-e90164464f7c.md)
- [Top Spoof DMARC detections by Sender domain (P1/P2)](../content/23b646e8-b885-4cde-a9ab-1e35fa5e37a7.md)
- [Top Spoof external domain detections by Sender domain (P1/P2)](../content/3dbaa9c1-5e69-40a9-bacb-8cbdb4a0e6cb.md)
- [Top Spoof intra-org detections by Sender domain (P1/P2)](../content/ba97d6b9-f82e-4917-9c07-4c0028bbd32d.md)
- [Top Users receiving Malware](../content/c6bbcac2-a6b8-4537-a32a-6f1367e6aa44.md)
- [Top Users receiving Phish](../content/87846aad-624c-4e18-b963-81bedd7123a2.md)
- [Top external malicious senders](../content/9d6c8c17-06b0-4044-b18e-35eb3dfc5cf2.md)
- [Top outbound recipient domains sending inbound emails with threats](../content/38d6e2fb-a804-4170-8d32-d251ecd6bcd2.md)
- [Top policies performing admin overrides](../content/c73ae295-d120-4f79-aaed-de005f766ad2.md)
- [Top policies performing user overrides](../content/fe2cb53e-4eb3-4676-87c1-f80d2813f542.md)
- [Top targeted users](../content/a1664330-810a-473b-b354-acbaa751a294.md)
- [Total Emails with Admin Overrides (Allow)](../content/8f8fd7c8-277a-48c3-ad67-c80b3037c5af.md)
- [Total Emails with Admin Overrides (Block)](../content/bd6aae91-6233-430b-a5af-15c6406a7770.md)
- [Total Emails with User Overrides (Allow)](../content/e6b3edc5-ec6f-44ae-9bb4-60c9ea49154e.md)
- [Total Emails with User Overrides (Block)](../content/74e076da-58e8-436d-b7bc-68888dbb6091.md)
- [Total number of detections by MDO](../content/0717b136-a1ef-4af0-a911-e189d0064099.md)
- [User Email Submissions (FN) - Top Inbound P2 Senders](../content/12798858-1916-4b59-a85e-8a7a4f7b43cf.md)
- [User Email Submissions (FN) - Top Inbound P2 Senders domains](../content/385aca1d-2135-40c6-af8e-030c9e086cf5.md)
- [Zero day threats](../content/95b0c7ed-2853-4343-80a9-ab076cf31e51.md)
- [Zero-day Malware Detections Trend](../content/a370ad6f-e7fa-4740-ab9e-cb5560e3599f.md)
- [Zero-day Phish Detections Trend](../content/80f357a6-6bb4-4b2b-a88c-265fccafc794.md)
- [referral-phish-emails](../content/cdc4da1c-64a1-4941-be59-1f5cc85481ab.md)

### Workbooks (4)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagement-m2131-maturitymodelforeventlogmanagementm2131.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoftdefenderforoffice365detectionsandinsights-microsoft-defender-xdr.md)

**In solution [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md):**
- [MicrosoftDefenderForOffice365](../content/microsoftdefenderforoffice365-microsoft-defender-for-office-365.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md):**
- [ZeroTrustTIC3](../content/zerotrusttic3-zerotrust%28tic3.0%29.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
