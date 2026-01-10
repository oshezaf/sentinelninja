# Proofpoint On demand(POD) Email Security

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/PFPTLogo.svg" alt="Proofpoint On demand(POD) Email Security Logo" width="75" height="75">

The [Proofpoint on Demand Email Security](https://www.proofpoint.com/us/products/email-security-and-protection/email-protection) solution for Microsoft Sentinel enables you to ingest Proofpoint on Demand Email Protection data and activity logs for monitoring email activity, events and threats in your organization.
  
  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

• [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Proofpoint, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://proofpoint.my.site.com/community/s/](https://proofpoint.my.site.com/community/s/) |
| **Categories** | domains |
| **Version** | 3.1.2 |
| **Author** | Proofpoint, Inc. - azure-support@proofpoint.com |
| **First Published** | 2021-03-31 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Proofpoint%20On%20demand%28POD%29%20Email%20Security](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Proofpoint%20On%20demand%28POD%29%20Email%20Security) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Proofpoint On Demand Email Security (via Codeless Connector Platform)](../connectors/proofpointccpdefinition.md)
- [[Deprecated] Proofpoint On Demand Email Security](../connectors/proofpointpod.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **7 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md) | [Proofpoint On Demand Email Security (via Codeless Connector Platform)](../connectors/proofpointccpdefinition.md), [[Deprecated] Proofpoint On Demand Email Security](../connectors/proofpointpod.md) | - |
| [`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md) | [Proofpoint On Demand Email Security (via Codeless Connector Platform)](../connectors/proofpointccpdefinition.md), [[Deprecated] Proofpoint On Demand Email Security](../connectors/proofpointpod.md) | - |
| [`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md) | [[Deprecated] Proofpoint On Demand Email Security](../connectors/proofpointpod.md) | - |
| [`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md) | [[Deprecated] Proofpoint On Demand Email Security](../connectors/proofpointpod.md) | - |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | - | Analytics |
| [`maillog_CL`](../tables/maillog-cl.md) | [[Deprecated] Proofpoint On Demand Email Security](../connectors/proofpointpod.md) | - |
| [`message_CL`](../tables/message-cl.md) | [[Deprecated] Proofpoint On Demand Email Security](../connectors/proofpointpod.md) | - |

## Content Items

This solution includes **22 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [ProofpointPOD - Binary file in attachment](../content/proofpoint-on-demand-pod-email-security-proofpointpod-binary-file-in-attachment-eb68b129-5f17-4f56-bf6d-dde48d5e615a-ae200d61.md) | Medium | InitialAccess | - |
| [ProofpointPOD - Email sender IP in TI list](../content/proofpoint-on-demand-pod-email-security-proofpointpod-email-sender-ip-in-ti-list-78979d32-e63f-4740-b206-cfb300c735e0-63420dc8.md) | Medium | Exfiltration, InitialAccess | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [ProofpointPOD - Email sender in TI list](../content/proofpoint-on-demand-pod-email-security-proofpointpod-email-sender-in-ti-list-35a0792a-1269-431e-ac93-7ae2980d4dde-f2f02f35.md) | Medium | Exfiltration, InitialAccess | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [ProofpointPOD - High risk message not discarded](../content/proofpoint-on-demand-pod-email-security-proofpointpod-high-risk-message-not-discarded-c7cd6073-6d2c-4284-a5c8-da27605bdfde-62212676.md) | Low | InitialAccess | - |
| [ProofpointPOD - Multiple archived attachments to the same recipient](../content/proofpoint-on-demand-pod-email-security-proofpointpod-multiple-archived-attachments-to-the-same-recipien-bda5a2bd-979b-4828-a91f-27c2a5048f7f-0539879e.md) | Medium | Exfiltration | - |
| [ProofpointPOD - Multiple large emails to the same recipient](../content/proofpoint-on-demand-pod-email-security-proofpointpod-multiple-large-emails-to-the-same-recipient-d1aba9a3-5ab1-45ef-8ed4-da57dc3c0d32-75b9c537.md) | Medium | Exfiltration | - |
| [ProofpointPOD - Multiple protected emails to unknown recipient](../content/proofpoint-on-demand-pod-email-security-proofpointpod-multiple-protected-emails-to-unknown-recipient-f8127962-7739-4211-a4a9-390a7a00e91f-2fbc9011.md) | Medium | Exfiltration | - |
| [ProofpointPOD - Possible data exfiltration to private email](../content/proofpoint-on-demand-pod-email-security-proofpointpod-possible-data-exfiltration-to-private-email-aedc5b33-2d7c-42cb-a692-f25ef637cbb1-618ec629.md) | Medium | InitialAccess | - |
| [ProofpointPOD - Suspicious attachment](../content/proofpoint-on-demand-pod-email-security-proofpointpod-suspicious-attachment-f6a51e2c-2d6a-4f92-a090-cfb002ca611f-2cc6d3d5.md) | Medium | InitialAccess | - |
| [ProofpointPOD - Weak ciphers](../content/proofpoint-on-demand-pod-email-security-proofpointpod-weak-ciphers-56b0a0cd-894e-4b38-a0a1-c41d9f96649a-f36413c2.md) | Low | CommandAndControl | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [ProofpointPOD - Emails with high score of 'adult' filter classifier value](../content/proofpoint-on-demand-pod-email-security-proofpointpod-emails-with-high-score-of-'adult'-filter-classifie-0794a162-8635-43fd-81ed-2cf2604575b1-5d25de5e.md) | InitialAccess | - |
| [ProofpointPOD - Emails with high score of 'malware' filter classifier value](../content/proofpoint-on-demand-pod-email-security-proofpointpod-emails-with-high-score-of-'malware'-filter-classif-eb74aaab-ebf4-4763-9b03-b1a33fe48600-0cf4c124.md) | InitialAccess | - |
| [ProofpointPOD - Emails with high score of 'phish' filter classifier value](../content/proofpoint-on-demand-pod-email-security-proofpointpod-emails-with-high-score-of-'phish'-filter-classifie-a0d56fcd-edb3-46f1-aaa3-12d606a48ff1-80ac3b4d.md) | InitialAccess | - |
| [ProofpointPOD - Emails with high score of 'spam' filter classifier value](../content/proofpoint-on-demand-pod-email-security-proofpointpod-emails-with-high-score-of-'spam'-filter-classifier-c9ff3690-b754-4c91-b866-4d07098da074-968bb165.md) | InitialAccess | - |
| [ProofpointPOD - Emails with high score of 'suspect' filter classifier value](../content/proofpoint-on-demand-pod-email-security-proofpointpod-emails-with-high-score-of-'suspect'-filter-classif-bc619ce8-0807-4b13-93ea-0d7b79c7ee68-5027a04d.md) | InitialAccess | - |
| [ProofpointPOD - Large size outbound emails](../content/proofpoint-on-demand-pod-email-security-proofpointpod-large-size-outbound-emails-dd9674cf-898b-4c80-96f1-f70bec66e6fc-4ee9c6c0.md) | Exfiltration | - |
| [ProofpointPOD - Recipients with high number of discarded or rejected emails](../content/proofpoint-on-demand-pod-email-security-proofpointpod-recipients-with-high-number-of-discarded-or-reject-d324e435-31d3-4aa3-907c-76f4917820a9-4eec2939.md) | InitialAccess | - |
| [ProofpointPOD - Recipients with large number of corrupted emails](../content/proofpoint-on-demand-pod-email-security-proofpointpod-recipients-with-large-number-of-corrupted-emails-c334e1e8-a7da-4c23-a9c0-fdda26b07606-fcc5ff05.md) | InitialAccess | - |
| [ProofpointPOD - Senders with large number of corrupted messages](../content/proofpoint-on-demand-pod-email-security-proofpointpod-senders-with-large-number-of-corrupted-messages-af7f133a-5fed-4ebf-8272-4330c884c7ca-4e6469ff.md) | InitialAccess | - |
| [ProofpointPOD - Suspicious file types in attachments](../content/proofpoint-on-demand-pod-email-security-proofpointpod-suspicious-file-types-in-attachments-7b281f4a-6a9a-439f-8b4f-f08eb24f2fb7-e9c4582c.md) | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ProofpointPOD](../content/proofpoint-on-demand-pod-email-security-proofpointpod-14c159d7.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ProofpointPOD](../content/proofpoint-on-demand-pod-email-security-proofpointpod-634600b4-d931-4a58-a21f-1de3dd35df23-5e33a3b3.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                   |
|-------------|--------------------------------|------------------------------------------------------|
| 3.1.2       | 08-12-2025                     | Update **ProofpointPOD_PollingConfig.json** to remove start and end time query params, it impacts time frames at server side and causes duplicate data ingestion.|  
| 3.1.1       | 03-11-2025                     | Update support url in **SolutionMetadata.json**.|  
| 3.1.0       | 31-07-2025                     | Updated Support details and publisherId in **SolutionMetadata.json**, updated Author details and Logo in **Solution_ProofPointPOD.json** from Microsoft to Proofpoint.|
| 3.0.5       | 28-07-2025                     | Removed Deprecated **Data Connector**.							|  
| 3.0.4       | 06-05-2025                     | Launching CCP **Data Connector** - *Proofpoint On Demand Email Security* from Public Preview to Global Availability.           |
| 3.0.3       | 12-03-2025                     | Added new CCP **Data Connector** - *Proofpoint On Demand Email Security*.            |
| 3.0.2       | 06-09-2024                     | Updated the python runtime version to 3.11 in **Data Connector** Function App.           |
| 3.0.1       | 02-05-2024                     | Optimized **Parser**.                                      |
| 3.0.0       | 01-08-2023                     | Updated solution logo with Microsoft Sentinel logo.   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

