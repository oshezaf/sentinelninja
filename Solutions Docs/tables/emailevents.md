# EmailEvents

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Microsoft 365 email events, including email delivery and blocking events

| Attribute | Value |
|:----------|:------|
| **Category** | Defender |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/emailevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailevents-table) |

## Solutions (11)

This table is used by the following solutions:

- [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (287)

### Analytic Rules (10)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Terminated employee exfiltration over email](../content/microsoft-business-applications-dataverse-terminated-employee-exfiltration-over-email-de039242-47e0-43fa-84d7-b6be24305349-d5733918.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map URL Entity to EmailUrlInfo](../content/threat-intelligence-ti-map-url-entity-to-emailurlinfo-a0038239-72f4-4f7b-90ff-37f89f7881e0-2ee2a116.md) |  |
| [TI map Domain entity to EmailEvents](../content/threat-intelligence-ti-map-domain-entity-to-emailevents-96307710-8bb9-4b45-8363-a90c72ebf86f-5727bb74.md) |  |
| [TI map Domain entity to EmailUrlInfo](../content/threat-intelligence-ti-map-domain-entity-to-emailurlinfo-87cc75df-d7b2-44f1-b064-ee924edfc879-da6a50ae.md) |  |
| [TI map Email entity to EmailEvents](../content/threat-intelligence-ti-map-email-entity-to-emailevents-11f7c6e3-f066-4b3c-9a81-b487ec0a6873-db576d3c.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map URL Entity to EmailUrlInfo](../content/threat-intelligence-new-ti-map-url-entity-to-emailurlinfo-9e32e545-e60c-47de-9941-f9ca1ada0a42-4894c77c.md) |  |
| [TI map Domain entity to EmailEvents](../content/threat-intelligence-new-ti-map-domain-entity-to-emailevents-bc3bb047-70b8-4a4b-ac21-e3b1172881a4-c3b01d85.md) |  |
| [TI map Domain entity to EmailUrlInfo](../content/threat-intelligence-new-ti-map-domain-entity-to-emailurlinfo-b56e2290-c65b-45a5-9636-3651e85bbe5d-d68d3e26.md) |  |
| [TI map Email entity to EmailEvents](../content/threat-intelligence-new-ti-map-email-entity-to-emailevents-18b61c3f-55fa-4eb9-8721-72dabd1eb3cb-33ee20f1.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Star Blizzard C2 Domains August 2022](../content/standalone-content-star-blizzard-c2-domains-august-2022-2149d9bb-8298-444c-8f99-f7bf0274dd05-bf017854.md) |  |

### Hunting Queries (268)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Email Forwarding Configuration with SAP download](../content/business-email-compromise-financial-fraud-email-forwarding-configuration-with-sap-download-0576750e-6b61-4545-845f-f5b8f29a0cc4-0b297ea9.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Automated email notifications and suspicious sign-in activity](../content/microsoft-defender-xdr-automated-email-notifications-and-suspicious-sign-in-activity-0955f477-6471-468a-9b13-fc5fa96d7db2-7722bd78.md) |  |
| [Bad email percentage of Inbound emails](../content/microsoft-defender-xdr-bad-email-percentage-of-inbound-emails-242561f3-568a-4864-be15-fbc85b2e77f9-3b521ce0.md) |  |
| [Bulk Emails by Sender Bulk Complaint level](../content/microsoft-defender-xdr-bulk-emails-by-sender-bulk-complaint-level-2e903da3-32fe-46b0-8df7-5f39e55db17e-a6bce306.md) |  |
| [Calculate overall MDO efficacy](../content/microsoft-defender-xdr-calculate-overall-mdo-efficacy-ff56a21d-fc95-4c11-8f9d-cc59c48cd4e6-2e8ef8fb.md) |  |
| [CompAuth Failure Trend](../content/microsoft-defender-xdr-compauth-failure-trend-eb560458-d96f-4c68-acbb-14b3c706ebe7-1841f166.md) |  |
| [DKIM Failure Trend](../content/microsoft-defender-xdr-dkim-failure-trend-14d47b2a-62b3-4c7b-819c-699e264c581d-01837526.md) |  |
| [DMARC Failure Trend](../content/microsoft-defender-xdr-dmarc-failure-trend-62d6a2e6-4583-4538-a476-a5b3c672657b-ff4453e5.md) |  |
| [Determine Successfully Delivered Phishing Emails by top IP Addresses](../content/microsoft-defender-xdr-determine-successfully-delivered-phishing-emails-by-top-ip-addresses-cdac93ef-56c0-45bf-9e7f-9cbf0ad06567-4ea19d0e.md) |  |
| [Determine Successfully Delivered Phishing Emails to Inbox/Junk folder.](../content/microsoft-defender-xdr-determine-successfully-delivered-phishing-emails-to-inbox-junk-folder.-cdac93ef-56c0-45bf-9e7f-9cbf0ad06123-2bab1379.md) |  |
| [Email Top 10 Domains sending Spam](../content/microsoft-defender-xdr-email-top-10-domains-sending-spam-6fe463ca-4cd3-4d97-a099-6b736f28a128-bdb32e31.md) |  |
| [Email Top 10 Targeted Users (Spam)](../content/microsoft-defender-xdr-email-top-10-targeted-users-spam-9e4b7553-1113-4d40-bb6b-7daca7d7d255-448bdc2d.md) |  |
| [Email Top 15 Domains sending Spam with Additional Details](../content/microsoft-defender-xdr-email-top-15-domains-sending-spam-with-additional-details-c03e13ee-0e7a-4d05-b3f4-790b01bb30a5-d9218166.md) |  |
| [Email Top 15 Targeted Users (Spam) with Additional Details](../content/microsoft-defender-xdr-email-top-15-targeted-users-spam-with-additional-details-86f2b124-8caf-4b53-845a-87de3ffccbdf-22e01ae8.md) |  |
| [Email Top Domains sending Malware](../content/microsoft-defender-xdr-email-top-domains-sending-malware-a2a7bede-cf55-47ed-9aeb-7b4c97079f4f-512f33b8.md) |  |
| [Email Top Domains sending Phish](../content/microsoft-defender-xdr-email-top-domains-sending-phish-0b197e26-7899-47ff-9be9-f7ba6dc949ea-f793c65e.md) |  |
| [Email bombing attacks](../content/microsoft-defender-xdr-email-bombing-attacks-c1cac5ad-7aaa-40de-89aa-954f5a33a578-84420089.md) |  |
| [Files share contents and suspicious sign-in activity](../content/microsoft-defender-xdr-files-share-contents-and-suspicious-sign-in-activity-11cc0e3f-9718-4ab5-be7b-d9c036ed6b0a-233ec5bb.md) |  |
| [Hunt for email bombing attacks](../content/microsoft-defender-xdr-hunt-for-email-bombing-attacks-dd4a480b-aa24-4b62-b1f3-f538d8abbdfb-5261bafb.md) |  |
| [Impersonation Detections Trend](../content/microsoft-defender-xdr-impersonation-detections-trend-416cd270-6327-441a-9304-940c832cf361-79ee8cd4.md) |  |
| [Impersonation Detections by Detection Technology](../content/microsoft-defender-xdr-impersonation-detections-by-detection-technology-15a17150-811d-4829-a3d6-489139c9ff5e-b3543837.md) |  |
| [Impersonation Detections by Detection Technology Trend](../content/microsoft-defender-xdr-impersonation-detections-by-detection-technology-trend-418e8859-b22a-4fd4-b273-5433e054cdc7-b6bf2fd7.md) |  |
| [MDO Threat Protection Detections trend over time](../content/microsoft-defender-xdr-mdo-threat-protection-detections-trend-over-time-eb0e4edb-f423-49f8-a02a-4ededdd30dd5-227c1309.md) |  |
| [Malware Detections Trend](../content/microsoft-defender-xdr-malware-detections-trend-e1dbe1d2-785a-4ecd-a1c0-233fc0e990bc-43903146.md) |  |
| [Malware Detections by Detection technology](../content/microsoft-defender-xdr-malware-detections-by-detection-technology-15d255f7-57a6-4b23-bd89-376930d3a305-149bc998.md) |  |
| [Malware Detections by Detection technology Trend](../content/microsoft-defender-xdr-malware-detections-by-detection-technology-trend-db79eb5a-785a-400a-a7ef-7285dde8e116-0c62c2fd.md) |  |
| [Malware Detections by delivery location](../content/microsoft-defender-xdr-malware-detections-by-delivery-location-b3a4b803-06f6-46d8-9220-b3a53e85ce4f-d52dc5b0.md) |  |
| [Message from an Accepted Domain with DMARC TempError](../content/microsoft-defender-xdr-message-from-an-accepted-domain-with-dmarc-temperror-4c021477-38f0-409e-869b-11056fcd47f1-d9274983.md) |  |
| [Phish Detections (High) by delivery location](../content/microsoft-defender-xdr-phish-detections-high-by-delivery-location-76c77c8a-bd2a-489a-af52-97291211e4e4-3e94b5c1.md) |  |
| [Phish Detections (Normal) by delivery location](../content/microsoft-defender-xdr-phish-detections-normal-by-delivery-location-4d86021c-cad7-489b-a8c8-dddecb87a2ef-ba0f6a21.md) |  |
| [Phish Detections Trend](../content/microsoft-defender-xdr-phish-detections-trend-fbe7a9d2-507e-4974-9e9a-d1cba3907f67-9ce7f42d.md) |  |
| [Phish Detections by Detection technology](../content/microsoft-defender-xdr-phish-detections-by-detection-technology-4c30fab1-db4f-4a64-b66b-51478e43a477-bb67d7c0.md) |  |
| [Phish Detections by Detection technology Trend](../content/microsoft-defender-xdr-phish-detections-by-detection-technology-trend-dd6efecd-7fe5-41b1-a122-8e0a15de9451-12c632c4.md) |  |
| [Phish Detections by delivery location trend](../content/microsoft-defender-xdr-phish-detections-by-delivery-location-trend-b20e56b8-e335-43d9-b7b3-43c034c43aea-304b06c0.md) |  |
| [Quarantine Phish Reason](../content/microsoft-defender-xdr-quarantine-phish-reason-36cf7ce5-7264-46d9-9f47-57b59049b44f-2c7a4748.md) |  |
| [Quarantine Phish Reason trend](../content/microsoft-defender-xdr-quarantine-phish-reason-trend-79bed402-09bc-453b-ab92-8b1411e683fa-9b772a7d.md) |  |
| [Quarantine Spam Reason](../content/microsoft-defender-xdr-quarantine-spam-reason-bde9d9fc-e166-4628-91f7-fb86ace93af0-47e9e0b8.md) |  |
| [Quarantine Spam Reason trend](../content/microsoft-defender-xdr-quarantine-spam-reason-trend-32a981ad-cd5a-4d80-8c6c-d59b9893c019-af7b470d.md) |  |
| [Quarantine releases by Detection Types](../content/microsoft-defender-xdr-quarantine-releases-by-detection-types-23e6d66b-511a-43fd-9863-6924da60319a-0411faf3.md) |  |
| [SPF Failure Trend](../content/microsoft-defender-xdr-spf-failure-trend-79755078-7be8-4f13-a8e7-1ce87cb7d5c0-c89e8f51.md) |  |
| [Spam Detections (High) by delivery location](../content/microsoft-defender-xdr-spam-detections-high-by-delivery-location-45c47684-6650-44b6-81c0-951522d0c435-82785140.md) |  |
| [Spam Detections (Normal) by delivery location](../content/microsoft-defender-xdr-spam-detections-normal-by-delivery-location-99e1246e-c1a9-4794-8e96-eb906c73c529-4b13c7ce.md) |  |
| [Spam Detections by Detection technology](../content/microsoft-defender-xdr-spam-detections-by-detection-technology-16cfa413-238f-4355-9f8a-4b97ce7572ac-c675f0ec.md) |  |
| [Spam and Phish allowed to inbox by Admin Overrides](../content/microsoft-defender-xdr-spam-and-phish-allowed-to-inbox-by-admin-overrides-02e237ed-f7b5-49dd-92e6-1b340d5e37fb-84bc507a.md) |  |
| [Spam and Phish allowed to inbox by User Overrides](../content/microsoft-defender-xdr-spam-and-phish-allowed-to-inbox-by-user-overrides-b1f797d1-6ea4-4f8f-b663-6c8a1c1018e9-d96be501.md) |  |
| [Spam detection by IP and its location](../content/microsoft-defender-xdr-spam-detection-by-ip-and-its-location-316f8777-09fd-480b-a726-21f521fa990f-34018dfd.md) |  |
| [Spam detection by delivery location](../content/microsoft-defender-xdr-spam-detection-by-delivery-location-7e93ce37-0cc5-4aa9-b30a-07772affa481-8260769b.md) |  |
| [Spam detection technologies](../content/microsoft-defender-xdr-spam-detection-technologies-f290d544-c499-4b23-8a7e-c4cbb7ab6316-9fee5e01.md) |  |
| [Spam detection trend](../content/microsoft-defender-xdr-spam-detection-trend-ae690d6f-0ea5-4617-95cf-1ed9a5fcb329-5bd812f5.md) |  |
| [Spoof Detections Trend](../content/microsoft-defender-xdr-spoof-detections-trend-09b263e1-9c73-4585-a55c-bc209e148e14-7f536fde.md) |  |
| [Spoof Detections by Detection Technology](../content/microsoft-defender-xdr-spoof-detections-by-detection-technology-53139a92-eb64-46d2-be97-e752a71e7021-49e840ae.md) |  |
| [Spoof Detections by Detection Technology Trend](../content/microsoft-defender-xdr-spoof-detections-by-detection-technology-trend-1dce39ec-8a64-4e49-9d6e-926ee6f04c39-579ed4a9.md) |  |
| [Spoofing attempts from Specific Domains](../content/microsoft-defender-xdr-spoofing-attempts-from-specific-domains-cdac93ef-56c0-45bf-9e7f-9cbf0ad034234-76a0c095.md) |  |
| [Top 10 External Senders (Spam)](../content/microsoft-defender-xdr-top-10-external-senders-spam-86c7d21b-2081-419d-bc2e-7bc909d61eef-cc6c9e75.md) |  |
| [Top 10 domains sending Bulk email](../content/microsoft-defender-xdr-top-10-domains-sending-bulk-email-147131b3-8b57-4c50-b981-5a951ed82272-a450386e.md) |  |
| [Top Domains Outbound with Emails with Threats Inbound (Partner BEC)](../content/microsoft-defender-xdr-top-domains-outbound-with-emails-with-threats-inbound-partner-bec-f9442d20-eff8-4751-9a75-6451aeace687-a1d5fba8.md) |  |
| [Top Malware Families](../content/microsoft-defender-xdr-top-malware-families-0d16e85e-82ec-460a-bf48-e90164464f7c-4786cd56.md) |  |
| [Top Spoof DMARC detections by Sender domain (P1/P2)](../content/microsoft-defender-xdr-top-spoof-dmarc-detections-by-sender-domain-p1-p2-23b646e8-b885-4cde-a9ab-1e35fa5e37a7-dacbea0f.md) |  |
| [Top Spoof external domain detections by Sender domain (P1/P2)](../content/microsoft-defender-xdr-top-spoof-external-domain-detections-by-sender-domain-p1-p2-3dbaa9c1-5e69-40a9-bacb-8cbdb4a0e6cb-d618b7cb.md) |  |
| [Top Spoof intra-org detections by Sender domain (P1/P2)](../content/microsoft-defender-xdr-top-spoof-intra-org-detections-by-sender-domain-p1-p2-ba97d6b9-f82e-4917-9c07-4c0028bbd32d-d66e5db5.md) |  |
| [Top Users receiving Malware](../content/microsoft-defender-xdr-top-users-receiving-malware-c6bbcac2-a6b8-4537-a32a-6f1367e6aa44-6b839b20.md) |  |
| [Top Users receiving Phish](../content/microsoft-defender-xdr-top-users-receiving-phish-87846aad-624c-4e18-b963-81bedd7123a2-f8f93dee.md) |  |
| [Top outbound recipient domains sending inbound emails with threats](../content/microsoft-defender-xdr-top-outbound-recipient-domains-sending-inbound-emails-with-threats-38d6e2fb-a804-4170-8d32-d251ecd6bcd2-b8b1fe75.md) |  |
| [Total Emails with Admin Overrides (Allow)](../content/microsoft-defender-xdr-total-emails-with-admin-overrides-allow-8f8fd7c8-277a-48c3-ad67-c80b3037c5af-b3b2f80d.md) |  |
| [Total Emails with Admin Overrides (Block)](../content/microsoft-defender-xdr-total-emails-with-admin-overrides-block-bd6aae91-6233-430b-a5af-15c6406a7770-72f52ec6.md) |  |
| [Total Emails with User Overrides (Allow)](../content/microsoft-defender-xdr-total-emails-with-user-overrides-allow-e6b3edc5-ec6f-44ae-9bb4-60c9ea49154e-7cec0f95.md) |  |
| [Total Emails with User Overrides (Block)](../content/microsoft-defender-xdr-total-emails-with-user-overrides-block-74e076da-58e8-436d-b7bc-68888dbb6091-e2ae9087.md) |  |
| [Total number of detections by MDO](../content/microsoft-defender-xdr-total-number-of-detections-by-mdo-0717b136-a1ef-4af0-a911-e189d0064099-8ced6caf.md) |  |
| [User Email Submissions (FN) - Top Inbound P2 Senders](../content/microsoft-defender-xdr-user-email-submissions-fn-top-inbound-p2-senders-12798858-1916-4b59-a85e-8a7a4f7b43cf-ab8f972e.md) |  |
| [User Email Submissions (FN) - Top Inbound P2 Senders domains](../content/microsoft-defender-xdr-user-email-submissions-fn-top-inbound-p2-senders-domains-385aca1d-2135-40c6-af8e-030c9e086cf5-8ef092ad.md) |  |
| [Zero-day Malware Detections Trend](../content/microsoft-defender-xdr-zero-day-malware-detections-trend-a370ad6f-e7fa-4740-ab9e-cb5560e3599f-205be975.md) |  |
| [Zero-day Phish Detections Trend](../content/microsoft-defender-xdr-zero-day-phish-detections-trend-80f357a6-6bb4-4b2b-a88c-265fccafc794-6ffd9b22.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Attacked more than x times average](../content/microsoft-defender-xdr-attacked-more-than-x-times-average-de480ca4-4095-4fef-b3e7-2a3f17f24e78-ec4cee0f.md) |  |
| [Attacked more than x times average](../content/github-only-attacked-more-than-x-times-average-de480ca4-4095-4fef-b3e7-2a3f17f24e78-9911d615.md) |  |
| [Authentication failures by time and authentication type](../content/microsoft-defender-xdr-authentication-failures-by-time-and-authentication-type-7fbf7687-5ded-4c39-9fe9-f4f6aa6fc422-a410ff8f.md) |  |
| [Authentication failures by time and authentication type](../content/github-only-authentication-failures-by-time-and-authentication-type-7fbf7687-5ded-4c39-9fe9-f4f6aa6fc422-95e66c70.md) |  |
| [Automated email notifications and suspicious sign-in activity](../content/github-only-automated-email-notifications-and-suspicious-sign-in-activity-a7acfaf4-e03e-409d-a16e-dcde33f7dba3-fb7feb7d.md) |  |
| [Bad email percentage of Inbound emails](../content/github-only-bad-email-percentage-of-inbound-emails-2a662ac9-81de-4073-9374-45e3ebd5ae90-4e51cebe.md) |  |
| [Bazacall Emails](../content/github-only-bazacall-emails-54f12c74-fb8e-4871-a13f-4da835b319a7-e43dc686.md) |  |
| [Bulk Emails by Sender Bulk Complaint level](../content/github-only-bulk-emails-by-sender-bulk-complaint-level-46837704-62cb-4e37-ae25-eecced47c0f4-a91c459c.md) |  |
| [Calculate overall MDO efficacy](../content/github-only-calculate-overall-mdo-efficacy-f2206cb7-62ca-4596-9d3a-544b61963799-36a197b0.md) |  |
| [Campaign with suspicious keywords](../content/microsoft-defender-xdr-campaign-with-suspicious-keywords-9b086a51-e396-4718-90d7-f7b3646e6581-cc3c8c2c.md) |  |
| [Campaign with suspicious keywords](../content/github-only-campaign-with-suspicious-keywords-9b086a51-e396-4718-90d7-f7b3646e6581-52297bd3.md) |  |
| [CompAuth Failure Trend](../content/github-only-compauth-failure-trend-9d5d0ba9-e1b3-4dbb-9beb-e0f4c7fb6524-191fcbde.md) |  |
| [Custom detection-Emails with QR from non-prevalent senders](../content/microsoft-defender-xdr-custom-detection-emails-with-qr-from-non-prevalent-senders-516046e8-a460-4f7b-86eb-421d3a9cdff1-81600dc7.md) |  |
| [Custom detection-Emails with QR from non-prevalent senders](../content/github-only-custom-detection-emails-with-qr-from-non-prevalent-senders-516046e8-a460-4f7b-86eb-421d3a9cdff1-886a1fc6.md) |  |
| [DKIM Failure Trend](../content/github-only-dkim-failure-trend-b49ef73f-71c3-4dce-a433-1c89c9ab8935-33dcbfcb.md) |  |
| [DMARC Failure Trend](../content/github-only-dmarc-failure-trend-26ca6908-d5f1-43fa-a12b-103ba59841b5-7443366b.md) |  |
| [Detections by detection methods](../content/microsoft-defender-xdr-detections-by-detection-methods-1c51e10e-7f77-40bc-bd37-6aa55cdf94d6-21b75b24.md) |  |
| [Detections by detection methods](../content/github-only-detections-by-detection-methods-1c51e10e-7f77-40bc-bd37-6aa55cdf94d6-ae7a80cf.md) |  |
| [Display Name - Spoof and Impersonation](../content/microsoft-defender-xdr-display-name-spoof-and-impersonation-6a570927-8638-4a6f-ac09-72a7d51ffa3c-d274f21b.md) |  |
| [Display Name - Spoof and Impersonation](../content/github-only-display-name-spoof-and-impersonation-6a570927-8638-4a6f-ac09-72a7d51ffa3c-0d93c34a.md) |  |
| [Email Top 10 Domains sending Spam](../content/github-only-email-top-10-domains-sending-spam-d5f1f876-9172-4e92-bfae-7ab0f94c9417-8e215db1.md) |  |
| [Email Top 10 Targeted Users (Spam)](../content/github-only-email-top-10-targeted-users-spam-22ae82b3-a362-4fc6-801d-d7fed7442d46-fab34598.md) |  |
| [Email Top 15 Domains sending Spam with Additional Details](../content/github-only-email-top-15-domains-sending-spam-with-additional-details-279a8fce-0c34-437a-a6ba-eff7be3b36a8-655f81ab.md) |  |
| [Email Top 15 Targeted Users (Spam) with Additional Details](../content/github-only-email-top-15-targeted-users-spam-with-additional-details-3e33ce02-b74e-49cc-899d-0a1eb3128ee3-281c6adc.md) |  |
| [Email Top Domains sending Malware](../content/github-only-email-top-domains-sending-malware-c7274e0c-af01-43a3-ad63-6a679191cc7f-95cef54a.md) |  |
| [Email Top Domains sending Phish](../content/github-only-email-top-domains-sending-phish-0b014a34-413b-43ae-9d80-b617fad1fd5b-c6fd9b9d.md) |  |
| [Email bombing attacks](../content/github-only-email-bombing-attacks-8d6ecda2-1cc1-49f8-a208-de0e5b42a61b-b811fd22.md) |  |
| [Email containing malware sent by an internal sender](../content/microsoft-defender-xdr-email-containing-malware-sent-by-an-internal-sender-07c85687-6dee-4266-9345-1e34de85d989-56ad4103.md) |  |
| [Email containing malware sent by an internal sender](../content/github-only-email-containing-malware-sent-by-an-internal-sender-07c85687-6dee-4266-9345-1e34de85d989-81bd03ba.md) |  |
| [Email malware detection report](../content/microsoft-defender-xdr-email-malware-detection-report-23dbd58b-23ce-42ae-b4d1-0dfdd35871ea-8e5c7329.md) |  |
| [Email malware detection report](../content/github-only-email-malware-detection-report-23dbd58b-23ce-42ae-b4d1-0dfdd35871ea-e2a4511b.md) |  |
| [Email sender IP address Geo location information](../content/microsoft-defender-xdr-email-sender-ip-address-geo-location-information-0d5ae69d-bdb2-404d-8c8c-50ebe68b6a5b-ee4c8459.md) |  |
| [Email sender IP address Geo location information](../content/github-only-email-sender-ip-address-geo-location-information-0d5ae69d-bdb2-404d-8c8c-50ebe68b6a5b-93206328.md) |  |
| [Emails delivered having URLs from QR codes](../content/microsoft-defender-xdr-emails-delivered-having-urls-from-qr-codes-594fe5a1-53b6-466b-86df-028366c3994e-8eabe795.md) |  |
| [Emails delivered having URLs from QR codes](../content/github-only-emails-delivered-having-urls-from-qr-codes-594fe5a1-53b6-466b-86df-028366c3994e-73dbfee1.md) |  |
| [Emails with QR codes and suspicious keywords in subject](../content/microsoft-defender-xdr-emails-with-qr-codes-and-suspicious-keywords-in-subject-706b711a-7622-40f1-9ebb-331d1a0ff697-e2945df9.md) |  |
| [Emails with QR codes and suspicious keywords in subject](../content/github-only-emails-with-qr-codes-and-suspicious-keywords-in-subject-706b711a-7622-40f1-9ebb-331d1a0ff697-a4a81f71.md) |  |
| [Emails with QR codes from non-prevalent sender](../content/microsoft-defender-xdr-emails-with-qr-codes-from-non-prevalent-sender-f708c866-073a-4107-a60b-ba6f86e54caa-755a4381.md) |  |
| [Emails with QR codes from non-prevalent sender](../content/github-only-emails-with-qr-codes-from-non-prevalent-sender-f708c866-073a-4107-a60b-ba6f86e54caa-c490e415.md) |  |
| [Empty Sender Phish Delivered to Inbox](../content/github-only-empty-sender-phish-delivered-to-inbox-c853b6d9-b33b-4172-8b18-e95e8d902e31-bd60bae8.md) |  |
| [Fake Replies](../content/github-only-fake-replies-8c4da386-7a95-4927-b24c-a13137294e0c-73dfc95c.md) |  |
| [Good emails from senders with bad patterns](../content/microsoft-defender-xdr-good-emails-from-senders-with-bad-patterns-e6259b03-622e-4e11-9c54-94987dad7c14-7456ce2d.md) |  |
| [Good emails from senders with bad patterns](../content/github-only-good-emails-from-senders-with-bad-patterns-e6259b03-622e-4e11-9c54-94987dad7c14-9962c0bd.md) |  |
| [High Confidence Phish Released](../content/microsoft-defender-xdr-high-confidence-phish-released-9e8faa62-7222-48a5-a78f-ef2d22f866dc-1957e796.md) |  |
| [High Confidence Phish Released](../content/github-only-high-confidence-phish-released-9e8faa62-7222-48a5-a78f-ef2d22f866dc-1ada080f.md) |  |
| [Hunt for email bombing attacks](../content/github-only-hunt-for-email-bombing-attacks-24eb9c13-c188-4b3c-8e89-654e56ce4c56-4d5b0646.md) |  |
| [Hunt for email conversation take over attempts](../content/microsoft-defender-xdr-hunt-for-email-conversation-take-over-attempts-fb46ca1b-0b46-4d9c-b3b3-2f8f807e9f72-2af16c6e.md) |  |
| [Hunt for email conversation take over attempts](../content/github-only-hunt-for-email-conversation-take-over-attempts-fb46ca1b-0b46-4d9c-b3b3-2f8f807e9f72-20a75c33.md) |  |
| [Hunting for sender patterns](../content/microsoft-defender-xdr-hunting-for-sender-patterns-68aa199c-259b-4bb0-8e7a-8ed6f96c5525-4214a903.md) |  |
| [Hunting for sender patterns](../content/github-only-hunting-for-sender-patterns-68aa199c-259b-4bb0-8e7a-8ed6f96c5525-a7084d35.md) |  |
| [Hunting for user signals-clusters](../content/microsoft-defender-xdr-hunting-for-user-signals-clusters-8c852f12-499f-499b-afc1-25c50aa9b462-97023f5f.md) |  |
| [Hunting for user signals-clusters](../content/github-only-hunting-for-user-signals-clusters-8c852f12-499f-499b-afc1-25c50aa9b462-c62773ae.md) |  |
| [IcedId attachments](../content/github-only-icedid-attachments-bdbbf32f-10a9-492b-a05c-e5987922f8fc-34364cf8.md) |  |
| [Impersonation Detections Trend](../content/github-only-impersonation-detections-trend-761e4ddd-6b87-4c00-b033-55c3d0e4fe2e-c2c7f3b2.md) |  |
| [Impersonation Detections by Detection Technology](../content/github-only-impersonation-detections-by-detection-technology-7017c313-c778-4a23-a15a-9e2f277b216e-784b62f3.md) |  |
| [Impersonation Detections by Detection Technology Trend](../content/github-only-impersonation-detections-by-detection-technology-trend-b0fb6dca-bd73-4852-8670-3235e56ffe4d-581d6f39.md) |  |
| [Inbound emails with QR code URLs](../content/microsoft-defender-xdr-inbound-emails-with-qr-code-urls-f6354c94-3a95-4235-8530-414f016a7bf6-b653a9db.md) |  |
| [Inbound emails with QR code URLs](../content/github-only-inbound-emails-with-qr-code-urls-f6354c94-3a95-4235-8530-414f016a7bf6-5f2f3855.md) |  |
| [LemonDuck-email-subjects](../content/github-only-lemonduck-email-subjects-735d4b69-7613-4d86-afb1-7ce64ee7dffb-98ffe4fd.md) |  |
| [Listing Email Remediation Actions via Explorer](../content/microsoft-defender-xdr-listing-email-remediation-actions-via-explorer-99713387-9d61-49eb-8edc-f51153d8bb01-83aba0f4.md) |  |
| [Listing Email Remediation Actions via Explorer](../content/github-only-listing-email-remediation-actions-via-explorer-99713387-9d61-49eb-8edc-f51153d8bb01-cce62a2a.md) |  |
| [Local time to UTC time conversion](../content/microsoft-defender-xdr-local-time-to-utc-time-conversion-712ffdd8-ddce-4372-85dd-063029b418cf-7ff7492c.md) |  |
| [Local time to UTC time conversion](../content/github-only-local-time-to-utc-time-conversion-712ffdd8-ddce-4372-85dd-063029b418cf-0e938844.md) |  |
| [MDO Threat Protection Detections trend over time](../content/github-only-mdo-threat-protection-detections-trend-over-time-02698387-5bf0-4111-a6ca-0f592a238a8f-f1170f50.md) |  |
| [MDO daily detection summary report](../content/microsoft-defender-xdr-mdo-daily-detection-summary-report-deb4b2c6-c10e-4044-8cf4-84243e40db73-ce48d397.md) |  |
| [MDO daily detection summary report](../content/github-only-mdo-daily-detection-summary-report-deb4b2c6-c10e-4044-8cf4-84243e40db73-5c96ae0a.md) |  |
| [MDO_CountOfRecipientsEmailaddressbySubject](../content/microsoft-defender-xdr-mdo-countofrecipientsemailaddressbysubject-430a9c0d-f3ce-46a3-a994-92b3ada0d1b2-813e0447.md) |  |
| [MDO_CountOfRecipientsEmailaddressbySubject](../content/github-only-mdo-countofrecipientsemailaddressbysubject-430a9c0d-f3ce-46a3-a994-92b3ada0d1b2-2ab4241b.md) |  |
| [MDO_CountOfSendersEmailaddressbySubject](../content/microsoft-defender-xdr-mdo-countofsendersemailaddressbysubject-b95994d1-1008-4c42-a74f-9f2967e39ed6-c65932d4.md) |  |
| [MDO_CountOfSendersEmailaddressbySubject](../content/github-only-mdo-countofsendersemailaddressbysubject-b95994d1-1008-4c42-a74f-9f2967e39ed6-8168a9e7.md) |  |
| [MDO_Countofrecipientsemailaddressesbysubject](../content/microsoft-defender-xdr-mdo-countofrecipientsemailaddressesbysubject-f840db5b-87c9-43c8-a8c3-5b6b83838cd4-bb7d95e8.md) |  |
| [MDO_Countofrecipientsemailaddressesbysubject](../content/github-only-mdo-countofrecipientsemailaddressesbysubject-f840db5b-87c9-43c8-a8c3-5b6b83838cd4-4c10c2eb.md) |  |
| [MDO_SummaryOfSenders](../content/microsoft-defender-xdr-mdo-summaryofsenders-a96c1571-1f7d-48dc-8287-7df5a5f0d987-62a8cab2.md) |  |
| [MDO_SummaryOfSenders](../content/github-only-mdo-summaryofsenders-a96c1571-1f7d-48dc-8287-7df5a5f0d987-4395222b.md) |  |
| [Mail reply to new domain](../content/microsoft-defender-xdr-mail-reply-to-new-domain-da7b973a-0045-4fd6-9161-269369336d24-1557177d.md) |  |
| [Mail reply to new domain](../content/github-only-mail-reply-to-new-domain-da7b973a-0045-4fd6-9161-269369336d24-ce5ec272.md) |  |
| [Mailflow by directionality](../content/microsoft-defender-xdr-mailflow-by-directionality-6b478186-da3b-4d71-beaa-aa5b42908499-591b76c4.md) |  |
| [Mailflow by directionality](../content/github-only-mailflow-by-directionality-6b478186-da3b-4d71-beaa-aa5b42908499-022417b4.md) |  |
| [Malicious Emails with QR code Urls](../content/microsoft-defender-xdr-malicious-emails-with-qr-code-urls-13260191-fb10-4a36-9ca1-2bbc0aaf77d0-bb5decee.md) |  |
| [Malicious Emails with QR code Urls](../content/github-only-malicious-emails-with-qr-code-urls-13260191-fb10-4a36-9ca1-2bbc0aaf77d0-7d618408.md) |  |
| [Malicious email senders](../content/microsoft-defender-xdr-malicious-email-senders-63c799bc-7567-4e4d-97be-e143fcfaa333-61f140c0.md) |  |
| [Malicious email senders](../content/github-only-malicious-email-senders-63c799bc-7567-4e4d-97be-e143fcfaa333-00a4f6f5.md) |  |
| [Malicious emails detected per day](../content/microsoft-defender-xdr-malicious-emails-detected-per-day-da932998-81dd-4be4-963c-f4890cb4192e-36e0d54a.md) |  |
| [Malicious emails detected per day](../content/github-only-malicious-emails-detected-per-day-da932998-81dd-4be4-963c-f4890cb4192e-3682bf70.md) |  |
| [Malicious mails by sender IPs](../content/microsoft-defender-xdr-malicious-mails-by-sender-ips-a8ccbf35-4c6d-4a8f-8c42-04fd9b000a27-b1c02a72.md) |  |
| [Malicious mails by sender IPs](../content/github-only-malicious-mails-by-sender-ips-a8ccbf35-4c6d-4a8f-8c42-04fd9b000a27-3c3ab91e.md) |  |
| [Malware Detections Trend](../content/github-only-malware-detections-trend-0e4fd08d-0c0d-41c6-847d-1674e30a9e31-d62b638e.md) |  |
| [Malware Detections by Detection technology](../content/github-only-malware-detections-by-detection-technology-642057a3-e5af-46ce-a5f4-8968a5537dba-3997aa7e.md) |  |
| [Malware Detections by Detection technology Trend](../content/github-only-malware-detections-by-detection-technology-trend-14f54d33-81dd-4316-a617-2262cac86f37-34b0982c.md) |  |
| [Malware Detections by delivery location](../content/github-only-malware-detections-by-delivery-location-cb99e25d-bcd9-435b-ad29-de08638b0f78-57e45210.md) |  |
| [Message from an Accepted Domain with DMARC TempError](../content/github-only-message-from-an-accepted-domain-with-dmarc-temperror-a256f4ea-deec-4fcd-bdf3-63987638eed9-30ec3593.md) |  |
| [Personalized campaigns based on the first few keywords](../content/microsoft-defender-xdr-personalized-campaigns-based-on-the-first-few-keywords-dc7e1eb5-16f5-4ad5-96a1-794970f4b310-f89f40bb.md) |  |
| [Personalized campaigns based on the first few keywords](../content/github-only-personalized-campaigns-based-on-the-first-few-keywords-dc7e1eb5-16f5-4ad5-96a1-794970f4b310-07b10791.md) |  |
| [Personalized campaigns based on the last few keywords](../content/microsoft-defender-xdr-personalized-campaigns-based-on-the-last-few-keywords-54d3455d-27e0-4ceb-99f9-375abd620151-91a07d51.md) |  |
| [Personalized campaigns based on the last few keywords](../content/github-only-personalized-campaigns-based-on-the-last-few-keywords-54d3455d-27e0-4ceb-99f9-375abd620151-4411f7a0.md) |  |
| [Phish Detections (High) by delivery location](../content/github-only-phish-detections-high-by-delivery-location-1617b8b1-df75-4b28-8379-29930c0f46fc-b91b53b1.md) |  |
| [Phish Detections (Normal) by delivery location](../content/github-only-phish-detections-normal-by-delivery-location-bfdb25dd-1cc0-46da-9545-9aa92d53e2c8-95456087.md) |  |
| [Phish Detections Trend](../content/github-only-phish-detections-trend-1b6a8564-bfe2-40f7-873a-7713f7b0c1d0-248c42a0.md) |  |
| [Phish Detections by Detection technology](../content/github-only-phish-detections-by-detection-technology-c3a1fa22-8ccf-409e-80a5-78aa545bf77d-54d99e0b.md) |  |
| [Phish Detections by Detection technology Trend](../content/github-only-phish-detections-by-detection-technology-trend-7319bdef-2040-48dc-9b20-b3f138fee71c-0bfbaa8b.md) |  |
| [Phish Detections by delivery location trend](../content/github-only-phish-detections-by-delivery-location-trend-fbe8abde-83b3-4e16-af08-f8f7db9a9028-bf97d1f9.md) |  |
| [Phish and Malware received by user vs total amount of email](../content/github-only-phish-and-malware-received-by-user-vs-total-amount-of-email-229ec9f6-05cc-483d-b3dc-35f47575a5aa-db330956.md) |  |
| [Quarantine Phish Reason](../content/github-only-quarantine-phish-reason-5caf3813-c628-48e2-be65-71b95be7ff85-c2eed69d.md) |  |
| [Quarantine Phish Reason trend](../content/github-only-quarantine-phish-reason-trend-6f7df1b7-5613-45e5-9b82-3ec95d86e0e8-3da95a95.md) |  |
| [Quarantine Release Email Details](../content/microsoft-defender-xdr-quarantine-release-email-details-6f96f6d7-d972-421e-a59f-6b9a8de81324-190bb1b5.md) |  |
| [Quarantine Release Email Details](../content/github-only-quarantine-release-email-details-6f96f6d7-d972-421e-a59f-6b9a8de81324-4e2cbc7d.md) |  |
| [Quarantine Spam Reason](../content/github-only-quarantine-spam-reason-35b21933-9d3e-4919-b545-2ada20d26e8e-cde3bdbd.md) |  |
| [Quarantine Spam Reason trend](../content/github-only-quarantine-spam-reason-trend-014ffc5c-0ba5-49f9-989c-3833e0d1c2b8-f2b54296.md) |  |
| [Quarantine releases by Detection Types](../content/github-only-quarantine-releases-by-detection-types-87754d3a-0077-4ff9-b46e-6336b8d02287-c85b108a.md) |  |
| [SPF Failure Trend](../content/github-only-spf-failure-trend-1c76c9d2-a8f3-4a22-be48-0d3454326cca-a510f994.md) |  |
| [Safe Attachments detections](../content/microsoft-defender-xdr-safe-attachments-detections-16eda414-1550-4cdc-8512-0769901d3f05-5b330159.md) |  |
| [Safe Attachments detections](../content/github-only-safe-attachments-detections-16eda414-1550-4cdc-8512-0769901d3f05-9ff76efc.md) |  |
| [SafeLinks URL detections](../content/microsoft-defender-xdr-safelinks-url-detections-492f1ea1-37c3-410a-a2f2-4e4eae2ff7f9-bb043a0c.md) |  |
| [SafeLinks URL detections](../content/github-only-safelinks-url-detections-492f1ea1-37c3-410a-a2f2-4e4eae2ff7f9-5ec2e4d1.md) |  |
| [Sender recipient contact establishment](../content/microsoft-defender-xdr-sender-recipient-contact-establishment-b2beec6a-2c1c-4319-a191-e70c2ee42857-9e7a5fbe.md) |  |
| [Sender recipient contact establishment](../content/github-only-sender-recipient-contact-establishment-b2beec6a-2c1c-4319-a191-e70c2ee42857-61c47d38.md) |  |
| [Spam Detections (High) by delivery location](../content/github-only-spam-detections-high-by-delivery-location-42b9d582-8519-4217-a6b3-996326e55257-b87dc151.md) |  |
| [Spam Detections (Normal) by delivery location](../content/github-only-spam-detections-normal-by-delivery-location-3f314fd9-332a-4d41-93f1-e9fca59e9bb0-8d8edf8d.md) |  |
| [Spam Detections by Detection technology](../content/github-only-spam-detections-by-detection-technology-f977d3e3-a97f-4568-b621-bd589732b8f2-f8061a3b.md) |  |
| [Spam and Phish allowed to inbox by Admin Overrides](../content/github-only-spam-and-phish-allowed-to-inbox-by-admin-overrides-0e37c1a4-86cd-4641-a514-28a431824369-1d798a77.md) |  |
| [Spam and Phish allowed to inbox by User Overrides](../content/github-only-spam-and-phish-allowed-to-inbox-by-user-overrides-1ff2e300-32fa-4aa1-95b2-46106043a23c-c35e81eb.md) |  |
| [Spam detection by IP and its location](../content/github-only-spam-detection-by-ip-and-its-location-fc2a1197-7ad5-43e3-83f1-0ecd5ada41ca-865df397.md) |  |
| [Spam detection by delivery location](../content/github-only-spam-detection-by-delivery-location-5b6fcbad-675f-4d10-bfc7-054e3453f712-7ed7a6d9.md) |  |
| [Spam detection technologies](../content/github-only-spam-detection-technologies-366ce22d-74c1-4acd-8050-f5c6061eb6d1-d82a75c0.md) |  |
| [Spam detection trend](../content/github-only-spam-detection-trend-2b373bca-b491-4b2f-906e-6f42eeab01a1-9f3ed605.md) |  |
| [Spoof Detections Trend](../content/github-only-spoof-detections-trend-61c73b2b-4c62-4015-8677-f569d1e83b57-4baf9594.md) |  |
| [Spoof Detections by Detection Technology](../content/github-only-spoof-detections-by-detection-technology-0d62d79a-38ef-43d5-a884-347024638250-0296446b.md) |  |
| [Spoof Detections by Detection Technology Trend](../content/github-only-spoof-detections-by-detection-technology-trend-0f47b36b-0d8e-4a55-b9a7-3dfa4ad5b744-437c10a0.md) |  |
| [Spoof and impersonation detections by sender IP](../content/microsoft-defender-xdr-spoof-and-impersonation-detections-by-sender-ip-b3180ac0-6d94-494a-8b8c-fcc84319ea6e-0ef4810c.md) |  |
| [Spoof and impersonation detections by sender IP](../content/github-only-spoof-and-impersonation-detections-by-sender-ip-b3180ac0-6d94-494a-8b8c-fcc84319ea6e-32c70867.md) |  |
| [Spoof and impersonation phish detections](../content/microsoft-defender-xdr-spoof-and-impersonation-phish-detections-011c3d48-f6ca-405f-9763-66c7856ad2ba-144e44e2.md) |  |
| [Spoof and impersonation phish detections](../content/github-only-spoof-and-impersonation-phish-detections-011c3d48-f6ca-405f-9763-66c7856ad2ba-deebe24b.md) |  |
| [Spoof attempts with auth failure](../content/microsoft-defender-xdr-spoof-attempts-with-auth-failure-5971f2e7-1bb2-4170-aa7a-577ed8a45c72-0d3eee89.md) |  |
| [Spoof attempts with auth failure](../content/github-only-spoof-attempts-with-auth-failure-5971f2e7-1bb2-4170-aa7a-577ed8a45c72-270aac52.md) |  |
| [Suspicious Google Doc Links](../content/github-only-suspicious-google-doc-links-5b94411c-9311-48cd-8f7f-e35b42174e2d-c2534098.md) |  |
| [SuspiciousUrlClicked](../content/github-only-suspiciousurlclicked-50835f49-7e5b-4852-a05a-f5aab2f40dd1-f0ca5f3b.md) |  |
| [Threat actor Phosphorus masquerading as conference organizers](../content/github-only-threat-actor-phosphorus-masquerading-as-conference-organizers-95510f90-597c-407e-bbe6-0e0319b456b0-36e22458.md) |  |
| [Threat actor Phosphorus masquerading as conference organizers (1)](../content/github-only-threat-actor-phosphorus-masquerading-as-conference-organizers-1-32f927f2-b1f3-441b-8885-bd66404e091d-87d2199f.md) |  |
| [Threat actor Phosphorus masquerading as conference organizers (2)](../content/github-only-threat-actor-phosphorus-masquerading-as-conference-organizers-2-ffdd9edf-3959-415f-bac2-7e108bc1f70d-e53d8ff5.md) |  |
| [Top 10 Domains sending Malicious Emails (Malware+Phish+Spam)](../content/microsoft-defender-xdr-top-10-domains-sending-malicious-emails-malware+phish+spam-af183f01-6d98-4fca-8ca4-63577b78a26e-6e78546a.md) |  |
| [Top 10 Domains sending Malicious Emails (Malware+Phish+Spam)](../content/github-only-top-10-domains-sending-malicious-emails-malware+phish+spam-af183f01-6d98-4fca-8ca4-63577b78a26e-eb6fcdee.md) |  |
| [Top 10 External Senders (Malware)](../content/microsoft-defender-xdr-top-10-external-senders-malware-530ef5e4-7ee4-4d70-a8e2-a06459605c02-7df27ceb.md) |  |
| [Top 10 External Senders (Malware)](../content/github-only-top-10-external-senders-malware-530ef5e4-7ee4-4d70-a8e2-a06459605c02-e1121ff9.md) |  |
| [Top 10 External Senders (Phish)](../content/microsoft-defender-xdr-top-10-external-senders-phish-db9789ab-0636-4ea6-b779-1b72b4b64aac-01861b5b.md) |  |
| [Top 10 External Senders (Phish)](../content/github-only-top-10-external-senders-phish-db9789ab-0636-4ea6-b779-1b72b4b64aac-a2f5f3c7.md) |  |
| [Top 10 External Senders (Spam)](../content/microsoft-defender-xdr-top-10-external-senders-spam-6f606826-b995-4a8d-8c2c-ee08e3d1194a-395cb836.md) |  |
| [Top 10 External Senders (Spam)](../content/github-only-top-10-external-senders-spam-debd82cc-2507-4c93-bd0a-a58926fc6d3a-5414ec98.md) |  |
| [Top 10 External Senders (Spam)](../content/github-only-top-10-external-senders-spam-6f606826-b995-4a8d-8c2c-ee08e3d1194a-5d8c672a.md) |  |
| [Top 10 Targeted Users (Malware+Phish+Spam)](../content/microsoft-defender-xdr-top-10-targeted-users-malware+phish+spam-b8330f6e-fc47-40ce-b225-5d3b055c6446-7217646a.md) |  |
| [Top 10 Targeted Users (Malware+Phish+Spam)](../content/github-only-top-10-targeted-users-malware+phish+spam-b8330f6e-fc47-40ce-b225-5d3b055c6446-a2be0cf5.md) |  |
| [Top 10 URL domains attacking organization](../content/microsoft-defender-xdr-top-10-url-domains-attacking-organization-27ee28e7-423b-48c9-a410-cbc6c8e21d25-23e12672.md) |  |
| [Top 10 URL domains attacking organization](../content/github-only-top-10-url-domains-attacking-organization-27ee28e7-423b-48c9-a410-cbc6c8e21d25-2072b8a3.md) |  |
| [Top 10 domains sending Bulk email](../content/github-only-top-10-domains-sending-bulk-email-fc3e5da4-9a8d-4f2f-b714-7118bc00b5d8-14fb5548.md) |  |
| [Top 10% of most attacked users](../content/microsoft-defender-xdr-top-10-of-most-attacked-users-e3b7b5c1-0e50-4dfb-b73a-c226636eaf58-d90b786a.md) |  |
| [Top 10% of most attacked users](../content/github-only-top-10-of-most-attacked-users-e3b7b5c1-0e50-4dfb-b73a-c226636eaf58-d479d8be.md) |  |
| [Top 100 malicious email senders](../content/microsoft-defender-xdr-top-100-malicious-email-senders-12225f50-9d41-4b78-8269-cc127d98654c-68a99898.md) |  |
| [Top 100 malicious email senders](../content/github-only-top-100-malicious-email-senders-12225f50-9d41-4b78-8269-cc127d98654c-34835876.md) |  |
| [Top 100 senders](../content/microsoft-defender-xdr-top-100-senders-cadf6e78-2a9a-4fb5-b788-30a592d699d3-c5aa90ea.md) |  |
| [Top 100 senders](../content/github-only-top-100-senders-cadf6e78-2a9a-4fb5-b788-30a592d699d3-24e95921.md) |  |
| [Top Domains Outbound with Emails with Threats Inbound (Partner BEC)](../content/github-only-top-domains-outbound-with-emails-with-threats-inbound-partner-bec-195d52f8-7669-444a-9021-f30c140cb9ac-a523687a.md) |  |
| [Top Malware Families](../content/github-only-top-malware-families-43c7c926-0bd4-41a5-a959-753db79ae470-cf7ef9a6.md) |  |
| [Top Spoof DMARC detections by Sender domain (P1/P2)](../content/github-only-top-spoof-dmarc-detections-by-sender-domain-p1-p2-633f848f-bb17-4813-81b4-098d277b00f7-a113ad18.md) |  |
| [Top Spoof external domain detections by Sender domain (P1/P2)](../content/github-only-top-spoof-external-domain-detections-by-sender-domain-p1-p2-09e1ca5e-cc4c-4b89-b585-448cfc1a6579-7563d05b.md) |  |
| [Top Spoof intra-org detections by Sender domain (P1/P2)](../content/github-only-top-spoof-intra-org-detections-by-sender-domain-p1-p2-11c4556a-0d77-47ba-9564-0818065c270d-d130a7a3.md) |  |
| [Top Users receiving Malware](../content/github-only-top-users-receiving-malware-1c423f0d-57d6-41dc-869f-79899a2dae77-78c7d40d.md) |  |
| [Top Users receiving Phish](../content/github-only-top-users-receiving-phish-da24d001-6a74-4a48-89a7-c99ec1f45d32-8bc8f715.md) |  |
| [Top external malicious senders](../content/microsoft-defender-xdr-top-external-malicious-senders-9d6c8c17-06b0-4044-b18e-35eb3dfc5cf2-77fcee60.md) |  |
| [Top external malicious senders](../content/github-only-top-external-malicious-senders-9d6c8c17-06b0-4044-b18e-35eb3dfc5cf2-47f3e60b.md) |  |
| [Top outbound recipient domains sending inbound emails with threats](../content/github-only-top-outbound-recipient-domains-sending-inbound-emails-with-threats-61bd29e8-fcfa-4f10-bc8f-b3a64e9493f7-df812027.md) |  |
| [Top policies performing admin overrides](../content/microsoft-defender-xdr-top-policies-performing-admin-overrides-c73ae295-d120-4f79-aaed-de005f766ad2-01151692.md) |  |
| [Top policies performing admin overrides](../content/github-only-top-policies-performing-admin-overrides-c73ae295-d120-4f79-aaed-de005f766ad2-07fceb94.md) |  |
| [Top policies performing user overrides](../content/microsoft-defender-xdr-top-policies-performing-user-overrides-fe2cb53e-4eb3-4676-87c1-f80d2813f542-d2ceefd0.md) |  |
| [Top policies performing user overrides](../content/github-only-top-policies-performing-user-overrides-fe2cb53e-4eb3-4676-87c1-f80d2813f542-34466751.md) |  |
| [Top targeted users](../content/microsoft-defender-xdr-top-targeted-users-a1664330-810a-473b-b354-acbaa751a294-26d74c53.md) |  |
| [Top targeted users](../content/github-only-top-targeted-users-a1664330-810a-473b-b354-acbaa751a294-d63c88f7.md) |  |
| [Total Emails with Admin Overrides (Allow)](../content/github-only-total-emails-with-admin-overrides-allow-85000725-df05-479e-8cfd-78310b659714-2183ce6d.md) |  |
| [Total Emails with Admin Overrides (Block)](../content/github-only-total-emails-with-admin-overrides-block-89a0a2aa-69c8-4586-95f5-7d003901adec-48d4dc98.md) |  |
| [Total Emails with User Overrides (Allow)](../content/github-only-total-emails-with-user-overrides-allow-d7f4b1d0-018f-4033-8618-523bde350d23-aff9a197.md) |  |
| [Total Emails with User Overrides (Block)](../content/github-only-total-emails-with-user-overrides-block-295ac28c-919c-48b9-8a38-a0f792f2b92b-1285a66e.md) |  |
| [Total number of detections by MDO](../content/github-only-total-number-of-detections-by-mdo-e1903106-9b25-472e-b4b7-4bcc05328a48-65f69a82.md) |  |
| [User Email Submissions (FN) - Top Inbound P2 Senders](../content/github-only-user-email-submissions-fn-top-inbound-p2-senders-4e8ea1c2-723d-4f72-bac6-82c464b6731e-3639f0c9.md) |  |
| [User Email Submissions (FN) - Top Inbound P2 Senders domains](../content/github-only-user-email-submissions-fn-top-inbound-p2-senders-domains-d7822efc-9a33-4120-8c60-661396764af1-59e33131.md) |  |
| [User clicks on malicious inbound emails](../content/microsoft-defender-xdr-user-clicks-on-malicious-inbound-emails-891f4865-75e5-4d40-bc24-ebf97da3ca9a-a5ebfb84.md) |  |
| [User clicks on malicious inbound emails](../content/github-only-user-clicks-on-malicious-inbound-emails-891f4865-75e5-4d40-bc24-ebf97da3ca9a-a7f025a9.md) |  |
| [Zero day threats](../content/microsoft-defender-xdr-zero-day-threats-95b0c7ed-2853-4343-80a9-ab076cf31e51-9681a016.md) |  |
| [Zero day threats](../content/github-only-zero-day-threats-95b0c7ed-2853-4343-80a9-ab076cf31e51-3783f529.md) |  |
| [Zero-day Malware Detections Trend](../content/github-only-zero-day-malware-detections-trend-63941b4c-4995-442b-97b0-ff640efd46c8-39a2558c.md) |  |
| [Zero-day Phish Detections Trend](../content/github-only-zero-day-phish-detections-trend-f22c98fd-40c2-4823-a5d7-5f5830911125-8d9a51b0.md) |  |
| [detect-archive-exfiltration-to-competitor](../content/github-only-detect-archive-exfiltration-to-competitor-8baad907-3b15-4f26-be09-dbba3d32fc3f-deef7303.md) |  |
| [insider-threat-detection-queries (10)](../content/github-only-insider-threat-detection-queries-10-5c01cfbf-c3b6-4840-bc3a-bffc810f5d03-ad0f2bf5.md) |  |
| [jar-attachments](../content/github-only-jar-attachments-3a45afa5-e955-4bff-8876-a42934f3533f-48b6c703.md) |  |
| [logon-attempts-after-malicious-email](../content/github-only-logon-attempts-after-malicious-email-44a5c680-d2ac-4bed-8210-c3aafea47308-4a967afa.md) |  |
| [powershell-activity-after-email-from-malicious-sender](../content/github-only-powershell-activity-after-email-from-malicious-sender-0605673c-8363-40b3-bbe2-ac1a2c17d116-17a5b050.md) |  |
| [referral-phish-emails](../content/microsoft-defender-xdr-referral-phish-emails-cdc4da1c-64a1-4941-be59-1f5cc85481ab-d35aa01d.md) |  |
| [referral-phish-emails](../content/github-only-referral-phish-emails-cdc4da1c-64a1-4941-be59-1f5cc85481ab-e25e3cfa.md) |  |
| [snip3-aviation-targeting-emails](../content/github-only-snip3-aviation-targeting-emails-cfffcab3-d4c7-4aad-b80d-5f415ef5ac66-78cdc8cb.md) |  |

### Workbooks (9)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoft-defender-xdr-microsoftdefenderforoffice365detectionsandinsights-c34bc8fb.md) |  |

**In solution [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForOffice365](../content/microsoft-defender-for-office-365-microsoftdefenderforoffice365-cc793056.md) |  |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForOffice365](../content/github-only-microsoftdefenderforoffice365-a5892291.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |
| [PhishingAnalysis](../content/github-only-phishinganalysis-8b6323cf.md) |  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

