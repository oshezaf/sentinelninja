# EmailUrlInfo

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

---

Information about URLs on emails

| Attribute | Value |
|:----------|:------|
| **Category** | Defender |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/emailurlinfo) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailurlinfo-table) |

## Solutions (8)

This table is used by the following solutions:

- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (41)

### Analytic Rules (5)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [Star Blizzard C2 Domains August 2022](../content/standalone-content-star-blizzard-c2-domains-august-2022-2149d9bb-8298-444c-8f99-f7bf0274dd05-bf017854.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map URL Entity to EmailUrlInfo](../content/threat-intelligence-ti-map-url-entity-to-emailurlinfo-a0038239-72f4-4f7b-90ff-37f89f7881e0-2ee2a116.md)
- [TI map Domain entity to EmailUrlInfo](../content/threat-intelligence-ti-map-domain-entity-to-emailurlinfo-87cc75df-d7b2-44f1-b064-ee924edfc879-da6a50ae.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI Map URL Entity to EmailUrlInfo](../content/threat-intelligence-new-ti-map-url-entity-to-emailurlinfo-9e32e545-e60c-47de-9941-f9ca1ada0a42-4894c77c.md)
- [TI map Domain entity to EmailUrlInfo](../content/threat-intelligence-new-ti-map-domain-entity-to-emailurlinfo-b56e2290-c65b-45a5-9636-3651e85bbe5d-d68d3e26.md)

### Hunting Queries (24)

**In solution [](../solutions/.md):**
- [Appspot Phishing Abuse](../content/-appspot-phishing-abuse-cdac93ef-56c0-45bf-9e7f-9cbf0ad06808-341c7785.md)
- [Custom detection-Emails with QR from non-prevalent senders](../content/-custom-detection-emails-with-qr-from-non-prevalent-senders-516046e8-a460-4f7b-86eb-421d3a9cdff1-6f6f375a.md)
- [Detect DNS obfuscation using @ symbol](../content/-detect-dns-obfuscation-using-@-symbol-e3331ef7-805f-4137-a8e1-1df59e822383-dd787dc6.md)
- [Emails containing links to IP addresses](../content/-emails-containing-links-to-ip-addresses-8e9a96dd-f85d-4f5e-a65f-dcc55d6d9935-3dd28188.md)
- [Hunt for malicious URLs using external IOC source](../content/-hunt-for-malicious-urls-using-external-ioc-source-57f95ba7-938d-4a76-b411-c01034c0d167-7a90eec8.md)
- [IcedId email delivery](../content/-icedid-email-delivery-1d8393fe-e363-40c1-8efb-66cf1ad68a05-1dc3de8f.md)
- [Malicious Emails with QR code Urls](../content/-malicious-emails-with-qr-code-urls-13260191-fb10-4a36-9ca1-2bbc0aaf77d0-3171c7d9.md)
- [Message with URL listed on OpenPhish delivered into Inbox](../content/-message-with-url-listed-on-openphish-delivered-into-inbox-d16f57cb-6a39-4e90-ae25-8902c68232ab-cac30089.md)
- [PhishingEmailUrlRedirector](../content/-phishingemailurlredirector-c73911ab-bcc0-4add-9963-597d2fb74488-e91e8ebb.md)
- [PhishingEmailUrlRedirector (1)](../content/-phishingemailurlredirector-1-08aff8c6-b983-43a3-be95-68a10c3d35e6-fb022433.md)
- [Potential OAuth phishing email delivered into Inbox](../content/-potential-oauth-phishing-email-delivered-into-inbox-7dca78d0-5354-4e20-80c0-4f770450feb6-9ee53e22.md)
- [StrRAT-Email-Delivery](../content/-strrat-email-delivery-3661b3e6-be67-41af-a0c1-fa7c012f1233-3a14a11f.md)
- [Suspicious Google Doc Links](../content/-suspicious-google-doc-links-5b94411c-9311-48cd-8f7f-e35b42174e2d-f1d5613a.md)
- [URLs by location](../content/-urls-by-location-ab006655-d723-4844-9d5d-91cb3b020555-3e861640.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Appspot Phishing Abuse](../content/microsoft-defender-xdr-appspot-phishing-abuse-cdac93ef-56c0-45bf-9e7f-9cbf0ad06808-efbaa02a.md)
- [Appspot Phishing Abuse](../content/microsoft-defender-xdr-appspot-phishing-abuse-cdac93ef-56c0-45bf-9e7f-9cbf0ad06808-6602e025.md)
- [Custom detection-Emails with QR from non-prevalent senders](../content/microsoft-defender-xdr-custom-detection-emails-with-qr-from-non-prevalent-senders-516046e8-a460-4f7b-86eb-421d3a9cdff1-81600dc7.md)
- [Emails containing links to IP addresses](../content/microsoft-defender-xdr-emails-containing-links-to-ip-addresses-8e9a96dd-f85d-4f5e-a65f-dcc55d6d9935-e07d1933.md)
- [Hunt for malicious URLs using external IOC source](../content/microsoft-defender-xdr-hunt-for-malicious-urls-using-external-ioc-source-57f95ba7-938d-4a76-b411-c01034c0d167-96846dc9.md)
- [Malicious Emails with QR code Urls](../content/microsoft-defender-xdr-malicious-emails-with-qr-code-urls-13260191-fb10-4a36-9ca1-2bbc0aaf77d0-bb5decee.md)
- [Message with URL listed on OpenPhish delivered into Inbox](../content/microsoft-defender-xdr-message-with-url-listed-on-openphish-delivered-into-inbox-a8c66aec-2000-45d8-8481-36aaa17f1033-65f2779d.md)
- [PhishingEmailUrlRedirector (1)](../content/microsoft-defender-xdr-phishingemailurlredirector-1-08aff8c6-b983-43a3-be95-68a10c3d35e6-edcd3f18.md)
- [Potential OAuth phishing email delivered into Inbox](../content/microsoft-defender-xdr-potential-oauth-phishing-email-delivered-into-inbox-08113d6f-3c95-45ba-94df-4fdd7f35d944-29c878e2.md)
- [URLs by location](../content/microsoft-defender-xdr-urls-by-location-ab006655-d723-4844-9d5d-91cb3b020555-d023be7f.md)

### Workbooks (12)

**In solution [](../solutions/.md):**
- [AzureSentinelCost](../content/-azuresentinelcost-75f5c34b.md)
- [MicrosoftDefenderForOffice365](../content/-microsoftdefenderforoffice365-38d50434.md)
- [MicrosoftSentinelCostEUR](../content/-microsoftsentinelcosteur-aa190070.md)
- [MicrosoftSentinelCostGBP](../content/-microsoftsentinelcostgbp-3469a46b.md)
- [MicrosoftSentinelDeploymentandMigrationTracker](../content/-microsoftsentineldeploymentandmigrationtracker-da237854.md)
- [OptimizationWorkbook](../content/-optimizationworkbook-0bd24445.md)
- [SentinelCosts](../content/-sentinelcosts-dec2b79d.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoft-defender-xdr-microsoftdefenderforoffice365detectionsandinsights-c34bc8fb.md)

**In solution [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md):**
- [MicrosoftDefenderForOffice365](../content/microsoft-defender-for-office-365-microsoftdefenderforoffice365-cc793056.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**
- [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

