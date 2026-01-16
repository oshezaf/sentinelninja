# CloudAppEvents

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

---

Events involving accounts and objects in Office 365 and other cloud apps and services

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cloudappevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-cloudappevents-table) |

## Solutions (6)

This table is used by the following solutions:

- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (185)

### Analytic Rules (10)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Unusual Volume of file deletion by users](../content/microsoft-defender-xdr-unusual-volume-of-file-deletion-by-users-e5f8e196-3544-4a8b-96a9-17c1b6a49710-7af46276.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [Mass Download & copy to USB device by single user](../content/standalone-content-mass-download-&-copy-to-usb-device-by-single-user-6267ce44-1e9d-471b-9f1e-ae76a6b7aa84-8c8cd6f4.md)

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

### Hunting Queries (163)

**In solution [](../solutions/.md):**
- [ADFSDomainTrustMods[Nobelium]](../content/-adfsdomaintrustmods[nobelium]-8b55db72-9ece-4e93-b551-cd7eb7355104-f4890ba6.md)
- [AI Agents - Dormant Author Authentication Connection](../content/-ai-agents-dormant-author-authentication-connection-2a5b8c1d-4e7f-0a1b-2c3d-4e5f6a7b8c9d-e6059dd6.md)
- [AI Agents - Published Dormant (30d)](../content/-ai-agents-published-dormant-30d-5e8f1a2b-3c4d-5e6f-7a8b-9c0d1e2f3a4b-88cc82da.md)
- [AIR investigation actions insight](../content/-air-investigation-actions-insight-28a1ce89-ee88-47b3-872b-fb5c3c8b350c-46ef04d0.md)
- [ATP policy status check](../content/-atp-policy-status-check-518e6938-10ef-4165-af19-82f1287141bc-27d080f9.md)
- [Add uncommon credential type to application [Nobelium]](../content/-add-uncommon-credential-type-to-application-[nobelium]-63a191f4-a0ad-4ed7-b994-24ffc89b3596-5b7390dc.md)
- [AddedCredentialFromContryXAndSigninFromCountryY](../content/-addedcredentialfromcontryxandsigninfromcountryy-9644e2ae-07a2-4086-a85a-6ee2bca45f4e-f83472e1.md)
- [Admin Submission Trend (FN)](../content/-admin-submission-trend-fn-4ec96a3b-94b0-4662-8ee6-b95102e20430-5801e38d.md)
- [Admin Submission Trend (FP)](../content/-admin-submission-trend-fp-8220d7f5-47e8-4040-b701-16bade7fa218-31b9116a.md)
- [Admin Submissions by Detection Type](../content/-admin-submissions-by-detection-type-4d525db4-ce23-49f7-844e-d06db21cdfa9-3e0fefac.md)
- [Admin Submissions by DetectionMethod (Phish FP)](../content/-admin-submissions-by-detectionmethod-phish-fp-665e50c0-f808-4cc3-a309-45bbbcc59bd0-948e5d0e.md)
- [Admin Submissions by DetectionMethod (Spam FP)](../content/-admin-submissions-by-detectionmethod-spam-fp-8f031737-b561-47ef-960b-66d307ac01b1-ce81781d.md)
- [Admin Submissions by Grading verdict (FN-FP)](../content/-admin-submissions-by-grading-verdict-fn-fp-f7a36ec9-f708-420c-b248-7dfe6cc39d0a-9254007a.md)
- [Admin Submissions by Submission State (FN)](../content/-admin-submissions-by-submission-state-fn-eb1a6d00-aa08-4e27-9eb4-47f4ac37ccb4-8f05e74f.md)
- [Admin Submissions by Submission State (FP)](../content/-admin-submissions-by-submission-state-fp-598e2ee8-8d1d-4ded-998e-52cc43cf1160-44d143df.md)
- [Admin Submissions by Submission Type (FN)](../content/-admin-submissions-by-submission-type-fn-71aeb41d-c85c-4569-bb08-6f1cd38bca49-10260b3a.md)
- [Admin Submissions by Submission Type (FP)](../content/-admin-submissions-by-submission-type-fp-6f45e3cc-e810-43ce-a8df-289aaa2e0ca2-3962fce8.md)
- [Anomaly of MailItemAccess by GraphAPI [Nobelium]](../content/-anomaly-of-mailitemaccess-by-graphapi-[nobelium]-5cb88a85-f9d9-48eb-a23a-55960f0f8ad4-4acb9502.md)
- [Anomaly of MailItemAccess by Other Users Mailbox [Nobelium]](../content/-anomaly-of-mailitemaccess-by-other-users-mailbox-[nobelium]-6a927d9a-66c3-4491-815d-a31d4bbb2948-426873e8.md)
- [Audit Email Preview-Download action](../content/-audit-email-preview-download-action-ba1a91ad-1f99-4386-b191-06a76ef213f8-8b9bb8ff.md)
- [BEC - File sharing tactics - Dropbox](../content/-bec-file-sharing-tactics-dropbox-6e056084-8951-460d-93f9-525880062de9-37f5bb07.md)
- [BEC - File sharing tactics - OneDrive or SharePoint](../content/-bec-file-sharing-tactics-onedrive-or-sharepoint-cf8d2c27-8310-4b13-b135-1ba59ae0a3a2-1fdd8520.md)
- [Calculate overall MDO efficacy](../content/-calculate-overall-mdo-efficacy-f2206cb7-62ca-4596-9d3a-544b61963799-9ac7c3ec.md)
- [Changes to Blocked Teams Domains](../content/-changes-to-blocked-teams-domains-3fb50170-4048-473e-acc0-af9ae186f4a3-28516c89.md)
- [Changes to Blocked Teams Domains (NRT)](../content/-changes-to-blocked-teams-domains-nrt-f3ceca1b-8190-4511-beac-06b3368b8360-ce57d3ca.md)
- [Code Repo Exfiltration](../content/-code-repo-exfiltration-11b8daa5-fe15-4664-b332-8f26d3c0b3a7-e0a8ca42.md)
- [CredentialsAddAfterAdminConsentedToApp[Nobelium]](../content/-credentialsaddafteradminconsentedtoapp[nobelium]-0d49b34e-ac5a-441f-a79f-672ad045870e-3a9b8d23.md)
- [Email containing malware accessed on a unmanaged device](../content/-email-containing-malware-accessed-on-a-unmanaged-device-439f817c-845c-4dda-a8d9-5c1f6831cee9-cd443084.md)
- [File Malware Detection Trend](../content/-file-malware-detection-trend-71cdf9cb-39b7-40fe-a81f-2c125efc7d07-0a424daa.md)
- [File Malware by Top Malware Families (Anti Virus)](../content/-file-malware-by-top-malware-families-anti-virus-db287ba5-344a-4e43-a94f-26e686203598-74a69485.md)
- [File Malware by Top Malware Families (Safe Attachments)](../content/-file-malware-by-top-malware-families-safe-attachments-afd90d9e-f8f5-41c7-823a-616907392503-ecccbb4b.md)
- [Group quarantine release](../content/-group-quarantine-release-a12cac64-ea6d-46d4-91a6-262b165fb9ad-423cfdcd.md)
- [High Confidence Phish Released](../content/-high-confidence-phish-released-9e8faa62-7222-48a5-a78f-ef2d22f866dc-77936b97.md)
- [Hunt for Admin email access](../content/-hunt-for-admin-email-access-e55e178e-48ba-4313-918a-2d3e16a95441-0167f4e5.md)
- [Hunt for TABL changes](../content/-hunt-for-tabl-changes-bc2d8214-afb6-4876-b210-25b69325b9b2-90fa5905.md)
- [Inbox rule changes which forward-redirect email](../content/-inbox-rule-changes-which-forward-redirect-email-54569b06-47fc-41ae-9b00-f7d9b61337b6-4fbd1641.md)
- [Integrate Purview with Cloud App Events](../content/-integrate-purview-with-cloud-app-events-a1adce9c-5945-4a20-984e-d95b6071a791-0efa8e1a.md)
- [MDO Threat Protection Detections trend over time](../content/-mdo-threat-protection-detections-trend-over-time-02698387-5bf0-4111-a6ca-0f592a238a8f-2ae91c14.md)
- [MDO daily detection summary report](../content/-mdo-daily-detection-summary-report-deb4b2c6-c10e-4044-8cf4-84243e40db73-c5a92bdb.md)
- [Mail item accessed](../content/-mail-item-accessed-81ede5df-2ec3-40a5-9dff-1fe6a841079d-35929e70.md)
- [MailItemsAccessed Throttling [Nobelium]](../content/-mailitemsaccessed-throttling-[nobelium]-67c763f7-c4fd-4b0f-9d4b-19246d1ec6d7-d6ed71a1.md)
- [MailItemsAccessedTimeSeries[Solarigate]](../content/-mailitemsaccessedtimeseries[solarigate]-148de00b-e647-4767-9201-c3cbf51befb1-1c201b8c.md)
- [MailPermissionsAddedToApplication[Nobelium]](../content/-mailpermissionsaddedtoapplication[nobelium]-2c80af05-53c1-4a77-82e7-a649e8e32506-6f2754cc.md)
- [Malware detections by Workload Locations](../content/-malware-detections-by-workload-locations-bb6afb85-8e80-4c98-b73b-c2c821528a1c-2e224317.md)
- [Malware detections by Workload Type](../content/-malware-detections-by-workload-type-094a9823-e053-4b36-8678-cd70f048db91-9ebf5722.md)
- [Multiple Entra ID Admin Removals](../content/-multiple-entra-id-admin-removals-7ffb31ee-f164-4613-a9a7-4d04d0dba5d7-649e3811.md)
- [New TABL Items](../content/-new-tabl-items-92b76a34-502e-4a53-93ec-9fc37c3b358c-a560f3a7.md)
- [NewAppOrServicePrincipalCredential[Nobelium]](../content/-newapporserviceprincipalcredential[nobelium]-bf246545-504c-4bea-a6a2-3b6e7f65b202-c582457d.md)
- [Number of unique accounts performing Teams message Admin submissions](../content/-number-of-unique-accounts-performing-teams-message-admin-submissions-dc230eec-acc2-482f-8601-25125c8ff122-9d3a74e9.md)
- [Number of unique accounts performing Teams message User  submissions](../content/-number-of-unique-accounts-performing-teams-message-user-submissions-489ad959-48eb-4c34-bed6-764cfd39214d-6493e369.md)
- [OAuth Apps accessing user mail via GraphAPI [Nobelium]](../content/-oauth-apps-accessing-user-mail-via-graphapi-[nobelium]-19cbed50-3554-44ed-b8de-90f275b69c8a-231bee55.md)
- [OAuth Apps reading mail both via GraphAPI and directly [Nobelium]](../content/-oauth-apps-reading-mail-both-via-graphapi-and-directly-[nobelium]-8ea80cde-a211-45e3-a7c3-62fae160026c-ecd2e883.md)
- [OAuth Apps reading mail via GraphAPI anomaly [Nobelium]](../content/-oauth-apps-reading-mail-via-graphapi-anomaly-[nobelium]-010d76aa-f2e9-4b88-8134-1ae59655aafe-65f1402d.md)
- [Policy configuration changes for CloudApp Events](../content/-policy-configuration-changes-for-cloudapp-events-fcd4d774-a0c2-4d12-9e9f-f51dfc310873-65b3c5cc.md)
- [Quarantine Release Email Details](../content/-quarantine-release-email-details-6f96f6d7-d972-421e-a59f-6b9a8de81324-7238f6f7.md)
- [Quarantine release trend](../content/-quarantine-release-trend-9f135aef-ad25-4df2-bdab-8399978a36a2-4044be7d.md)
- [Risky Sign-in with Device Registration](../content/-risky-sign-in-with-device-registration-ce2b03f8-92a4-4ec7-b55b-e9fa562fafa4-1e06daee.md)
- [Risky Sign-in with ElevateAccess](../content/-risky-sign-in-with-elevateaccess-158b565b-411b-4dec-81de-2d2bcaf0c34c-a51b85e8.md)
- [Risky Sign-in with new MFA method](../content/-risky-sign-in-with-new-mfa-method-0f57238b-e764-4246-b101-f78bf8c942a7-1569011d.md)
- [ServicePrincipalAddedToRole [Nobelium]](../content/-serviceprincipaladdedtorole-[nobelium]-ca7c93e0-49d3-44ff-b07e-ae117ba13c9a-d48f894f.md)
- [Status of submissions](../content/-status-of-submissions-1c390fd7-2668-4445-9b7d-055f3851be5f-870733ea.md)
- [Suspicious sign-in attempts from QR code phishing campaigns](../content/-suspicious-sign-in-attempts-from-qr-code-phishing-campaigns-3131d0ba-32c9-483e-a25c-82e26a07e116-01f2356f.md)
- [Teams Admin submission of Malware and Phish daily trend](../content/-teams-admin-submission-of-malware-and-phish-daily-trend-13db68a8-bce1-4929-b8db-2589ee552e75-6afa874b.md)
- [Teams Admin submission of No Threats daily trend](../content/-teams-admin-submission-of-no-threats-daily-trend-1a942d90-1e14-4fe9-8ad2-8af56ed16279-34b89589.md)
- [Teams Admin-User Submissions Grading Verdicts](../content/-teams-admin-user-submissions-grading-verdicts-459c6943-0162-4bf5-8d0b-c5904f03f5a7-2396b2dc.md)
- [Teams User submissions daily trend](../content/-teams-user-submissions-daily-trend-ace8e98a-660b-4fa9-a877-60644eb83344-4a023b22.md)
- [Top 10 Detection Overrides - Admin Email Submissions (FN)](../content/-top-10-detection-overrides-admin-email-submissions-fn-286d115b-7ddb-4422-81d6-711fedae3a92-0731ca33.md)
- [Top 10 sender domains - Admin Teams message submissions FN](../content/-top-10-sender-domains-admin-teams-message-submissions-fn-132dffdf-3ee0-4748-8509-fbd3a92e5c9f-17f7989e.md)
- [Top 10 sender domains - Admin email submissions (FN)](../content/-top-10-sender-domains-admin-email-submissions-fn-138681b2-442b-46cb-b086-fbe9e407aa2c-9862866b.md)
- [Top 10 sender domains - Admin email submissions (FP)](../content/-top-10-sender-domains-admin-email-submissions-fp-c438f85f-4527-4358-a3b6-fe6a6ff7a202-ab5126ff.md)
- [Top 10 sender domains - Teams user submissions FN or FP](../content/-top-10-sender-domains-teams-user-submissions-fn-or-fp-bebb6652-3c52-4358-a946-ecd63cddf082-e12967b5.md)
- [Top 10 senders - Teams users submissions FN or FP](../content/-top-10-senders-teams-users-submissions-fn-or-fp-2d8448f5-c0a2-46d7-a004-e062970ccb7b-fffd3680.md)
- [Top 10 senders of  Admin Teams message submissions FN](../content/-top-10-senders-of-admin-teams-message-submissions-fn-49071a21-fbb6-472f-932f-5b6ca1a25883-f4885279.md)
- [Top 10 senders of  Admin Teams message submissions FP](../content/-top-10-senders-of-admin-teams-message-submissions-fp-f82f3d63-b7f2-494d-8254-612405702dd4-11aadc50.md)
- [Top accounts performing Teams admin submissions FN or FP](../content/-top-accounts-performing-teams-admin-submissions-fn-or-fp-0a29c9f0-e8d4-4339-a196-52bb3a090a79-ffa7087d.md)
- [Top accounts performing Teams user submissions FN or FP](../content/-top-accounts-performing-teams-user-submissions-fn-or-fp-9ffbd78f-c87c-4fd2-96ec-fd46e27bbd21-92ae841a.md)
- [Top accounts performing admin submissions (FN)](../content/-top-accounts-performing-admin-submissions-fn-220448c8-f9cd-4a91-bde0-1f30d8c81936-5543128c.md)
- [Top accounts performing admin submissions (FP)](../content/-top-accounts-performing-admin-submissions-fp-f458535d-f977-4392-90ce-663fcf4ac703-ad933c7b.md)
- [Top accounts performing user submissions](../content/-top-accounts-performing-user-submissions-dda13716-d906-45c5-877d-4df46ceb39e6-989d2201.md)
- [Total Submissions by Submission State](../content/-total-submissions-by-submission-state-47e8ea7f-a7eb-4fe3-a96b-efe01155d9d3-7edd1bed.md)
- [Total Submissions by Submission Type](../content/-total-submissions-by-submission-type-9fd55150-611d-400c-a27f-b18f33c18a41-a8de26b3.md)
- [Total number of detections by MDO](../content/-total-number-of-detections-by-mdo-e1903106-9b25-472e-b4b7-4bcc05328a48-1e6222e0.md)
- [Unusual volume of file deletion by user.](../content/-unusual-volume-of-file-deletion-by-user.-611ebbc2-c789-42ad-93e3-6dc02bfa5e3d-452f5c08.md)
- [UpdateStsRefreshToken[Solorigate]](../content/-updatestsrefreshtoken[solorigate]-634dfbd6-0a42-40da-854e-2161cf137f14-c27f8435.md)
- [User Email Submission Trend (FN)](../content/-user-email-submission-trend-fn-395047c1-254e-43fb-ad6e-ae74c8e0a873-b453e953.md)
- [User Email Submissions (FN) - Top Detection Overrides by Admins](../content/-user-email-submissions-fn-top-detection-overrides-by-admins-a52e4273-cf3c-4125-b03d-41b99f64197f-0f9f0c57.md)
- [User Email Submissions (FN) - Top Detection Overrides by Users](../content/-user-email-submissions-fn-top-detection-overrides-by-users-764c0e82-33af-4694-a552-b2de24d1d477-5333e0fc.md)
- [User Email Submissions (FN) - Top Intra-Org P2 Senders](../content/-user-email-submissions-fn-top-intra-org-p2-senders-2adae71b-42b9-47b8-9cb7-ccea9fece3e2-1f0581b0.md)
- [User Email Submissions (FN) - Top Intra-Org Subjects](../content/-user-email-submissions-fn-top-intra-org-subjects-02949291-cc6c-48ff-bc99-bb3736a3c967-69b4b357.md)
- [User Email Submissions (FN) by Submission Type](../content/-user-email-submissions-fn-by-submission-type-0b2cbdf4-12e4-46e9-a8f6-99e559583cd7-3584fdc5.md)
- [User Email Submissions (FN-FP) by Grading verdict](../content/-user-email-submissions-fn-fp-by-grading-verdict-3b9e6da0-3504-463f-80d3-31fe3f0261ff-1e4d8e94.md)
- [User Email Submissions accuracy vs Admin review verdict](../content/-user-email-submissions-accuracy-vs-admin-review-verdict-0d03314a-ecbe-47f0-b411-2a9471f26b46-e279c03b.md)
- [User Email Submissions by Admin review status (Mark and Notify)](../content/-user-email-submissions-by-admin-review-status-mark-and-notify-6923a80a-e3df-4d81-a90d-63fc5b7f0bb5-4d0bbc0a.md)
- [User email submissions (FN) from Junk Folder](../content/-user-email-submissions-fn-from-junk-folder-a1eb19d6-9d86-425c-bd1d-86495c2ca714-979e7ffb.md)
- [User reported submissions](../content/-user-reported-submissions-0bd33643-c517-48b1-8211-25a7fbd15a50-dbd41b51.md)

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
- [MDO Threat Protection Detections trend over time](../content/microsoft-defender-xdr-mdo-threat-protection-detections-trend-over-time-eb0e4edb-f423-49f8-a02a-4ededdd30dd5-227c1309.md)
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
- [Total number of detections by MDO](../content/microsoft-defender-xdr-total-number-of-detections-by-mdo-0717b136-a1ef-4af0-a911-e189d0064099-8ced6caf.md)
- [Unusual Volume of file deletion by users](../content/microsoft-defender-xdr-unusual-volume-of-file-deletion-by-users-2bdd260c-c687-4cb2-9992-87e5ce677678-3b144d45.md)
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

### Workbooks (12)

**In solution [](../solutions/.md):**
- [AzureSentinelCost](../content/-azuresentinelcost-75f5c34b.md)
- [CopilotforSecurityMonitoring](../content/-copilotforsecuritymonitoring-ca4c3a98.md)
- [DoDZeroTrustWorkbook](../content/-dodzerotrustworkbook-93adac1a.md)
- [MicrosoftSentinelCostEUR](../content/-microsoftsentinelcosteur-aa190070.md)
- [MicrosoftSentinelCostGBP](../content/-microsoftsentinelcostgbp-3469a46b.md)
- [MicrosoftSentinelDeploymentandMigrationTracker](../content/-microsoftsentineldeploymentandmigrationtracker-da237854.md)
- [OptimizationWorkbook](../content/-optimizationworkbook-0bd24445.md)
- [SentinelCosts](../content/-sentinelcosts-dec2b79d.md)
- [ZeroTrustStrategyWorkbook](../content/-zerotruststrategyworkbook-e9062fae.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoft-defender-xdr-microsoftdefenderforoffice365detectionsandinsights-c34bc8fb.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

