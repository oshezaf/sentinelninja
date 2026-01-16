# EmailAttachmentInfo

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

---

Information about files attached to emails

| Attribute | Value |
|:----------|:------|
| **Category** | Defender |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/emailattachmentinfo) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailattachmentinfo-table) |

## Solutions (5)

This table is used by the following solutions:

- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (29)

### Hunting Queries (17)

**In solution [](../solutions/.md):**
- [Campaign with randomly named attachments](../content/-campaign-with-randomly-named-attachments-25150085-015a-4673-9b67-bc6ad9475500-73ea10c9.md)
- [Check for Maalware Baazar (abuse.ch) hashes in your mail flow](../content/-check-for-maalware-baazar-abuse.ch-hashes-in-your-mail-flow-3dfabb54-3553-47cf-b734-5327e9133874-57d7381d.md)
- [Email containing malware sent by an internal sender](../content/-email-containing-malware-sent-by-an-internal-sender-07c85687-6dee-4266-9345-1e34de85d989-61104e5a.md)
- [Hunt for malicious attachments using external IOC source](../content/-hunt-for-malicious-attachments-using-external-ioc-source-0da830c3-5d0e-4b98-bfa1-d5131a8d0ebe-f9bdee20.md)
- [Hunting for sender patterns](../content/-hunting-for-sender-patterns-68aa199c-259b-4bb0-8e7a-8ed6f96c5525-0d15d5fd.md)
- [JNLP-File-Attachment](../content/-jnlp-file-attachment-b6392f39-a1f4-4ec8-8689-4cb9d28c295a-d3f1b410.md)
- [Potentially malicious svg file delivered to Inbox](../content/-potentially-malicious-svg-file-delivered-to-inbox-ca777d68-fdd7-4f84-8c56-7c3af68f92d3-ecce3650.md)
- [devices_with_vuln_and_users_received_payload](../content/-devices-with-vuln-and-users-received-payload-fbcb7ff3-0d5a-4565-9caa-fc454138081f-52051a61.md)
- [files-from-malicious-sender](../content/-files-from-malicious-sender-43625c12-5712-44df-8741-c334746aeccc-2ef3df52.md)
- [insider-threat-detection-queries (18)](../content/-insider-threat-detection-queries-18-8ba93e9e-ea27-4b2f-9bb4-b458bc3e42e8-8210fb94.md)
- [jar-attachments](../content/-jar-attachments-3a45afa5-e955-4bff-8876-a42934f3533f-e6fd76a9.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Campaign with randomly named attachments](../content/microsoft-defender-xdr-campaign-with-randomly-named-attachments-25150085-015a-4673-9b67-bc6ad9475500-8c3fd9dd.md)
- [Email containing malware sent by an internal sender](../content/microsoft-defender-xdr-email-containing-malware-sent-by-an-internal-sender-07c85687-6dee-4266-9345-1e34de85d989-56ad4103.md)
- [Hunt for malicious attachments using external IOC source](../content/microsoft-defender-xdr-hunt-for-malicious-attachments-using-external-ioc-source-0da830c3-5d0e-4b98-bfa1-d5131a8d0ebe-4ace8da6.md)
- [Hunting for sender patterns](../content/microsoft-defender-xdr-hunting-for-sender-patterns-68aa199c-259b-4bb0-8e7a-8ed6f96c5525-4214a903.md)
- [JNLP-File-Attachment](../content/microsoft-defender-xdr-jnlp-file-attachment-b6392f39-a1f4-4ec8-8689-4cb9d28c295a-a5972f2c.md)
- [Potentially malicious svg file delivered to Inbox](../content/microsoft-defender-xdr-potentially-malicious-svg-file-delivered-to-inbox-1b56831b-3713-4c9c-ac75-a7e330623076-ce5f2d67.md)

### Workbooks (12)

**In solution [](../solutions/.md):**
- [AzureSentinelCost](../content/-azuresentinelcost-75f5c34b.md)
- [MicrosoftDefenderForOffice365](../content/-microsoftdefenderforoffice365-38d50434.md)
- [MicrosoftSentinelCostEUR](../content/-microsoftsentinelcosteur-aa190070.md)
- [MicrosoftSentinelCostGBP](../content/-microsoftsentinelcostgbp-3469a46b.md)
- [MicrosoftSentinelDeploymentandMigrationTracker](../content/-microsoftsentineldeploymentandmigrationtracker-da237854.md)
- [OptimizationWorkbook](../content/-optimizationworkbook-0bd24445.md)
- [PhishingAnalysis](../content/-phishinganalysis-5cdced29.md)
- [SentinelCosts](../content/-sentinelcosts-dec2b79d.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md):**
- [MicrosoftDefenderForOffice365](../content/microsoft-defender-for-office-365-microsoftdefenderforoffice365-cc793056.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**
- [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

