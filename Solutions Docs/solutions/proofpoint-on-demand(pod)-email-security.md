# Proofpoint On demand(POD) Email Security

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Proofpoint, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://proofpoint.my.site.com/community/s/](https://proofpoint.my.site.com/community/s/) |
| **Categories** | domains |
| **First Published** | 2021-03-31 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Proofpoint%20On%20demand%28POD%29%20Email%20Security](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Proofpoint%20On%20demand%28POD%29%20Email%20Security) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Proofpoint On Demand Email Security (via Codeless Connector Platform)](../connectors/proofpointccpdefinition.md)
- [[Deprecated] Proofpoint On Demand Email Security](../connectors/proofpointpod.md)

## Tables Reference

This solution uses **8 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md) | [Proofpoint On Demand Email Security (via Codeless Connector Platform)](../connectors/proofpointccpdefinition.md), [[Deprecated] Proofpoint On Demand Email Security](../connectors/proofpointpod.md) | Analytics, Hunting, Workbooks |
| [`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md) | [Proofpoint On Demand Email Security (via Codeless Connector Platform)](../connectors/proofpointccpdefinition.md), [[Deprecated] Proofpoint On Demand Email Security](../connectors/proofpointpod.md) | Analytics, Hunting, Workbooks |
| [`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md) | [[Deprecated] Proofpoint On Demand Email Security](../connectors/proofpointpod.md) | Analytics, Hunting, Workbooks |
| [`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md) | [[Deprecated] Proofpoint On Demand Email Security](../connectors/proofpointpod.md) | Analytics, Hunting, Workbooks |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | - | Analytics |
| [`maillog_CL`](../tables/maillog-cl.md) | [[Deprecated] Proofpoint On Demand Email Security](../connectors/proofpointpod.md) | Analytics, Hunting, Workbooks |
| [`message_CL`](../tables/message-cl.md) | [[Deprecated] Proofpoint On Demand Email Security](../connectors/proofpointpod.md) | Analytics, Hunting, Workbooks |
| [`trend_result`](../tables/trend-result.md) | - | Workbooks |

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
| [ProofpointPOD - Binary file in attachment](../content/eb68b129-5f17-4f56-bf6d-dde48d5e615a.md) | Medium | InitialAccess | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Email sender IP in TI list](../content/78979d32-e63f-4740-b206-cfb300c735e0.md) | Medium | Exfiltration, InitialAccess | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Email sender in TI list](../content/35a0792a-1269-431e-ac93-7ae2980d4dde.md) | Medium | Exfiltration, InitialAccess | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - High risk message not discarded](../content/c7cd6073-6d2c-4284-a5c8-da27605bdfde.md) | Low | InitialAccess | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Multiple archived attachments to the same recipient](../content/bda5a2bd-979b-4828-a91f-27c2a5048f7f.md) | Medium | Exfiltration | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Multiple large emails to the same recipient](../content/d1aba9a3-5ab1-45ef-8ed4-da57dc3c0d32.md) | Medium | Exfiltration | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Multiple protected emails to unknown recipient](../content/f8127962-7739-4211-a4a9-390a7a00e91f.md) | Medium | Exfiltration | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Possible data exfiltration to private email](../content/aedc5b33-2d7c-42cb-a692-f25ef637cbb1.md) | Medium | InitialAccess | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Suspicious attachment](../content/f6a51e2c-2d6a-4f92-a090-cfb002ca611f.md) | Medium | InitialAccess | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Weak ciphers](../content/56b0a0cd-894e-4b38-a0a1-c41d9f96649a.md) | Low | CommandAndControl | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [ProofpointPOD - Emails with high score of 'adult' filter classifier value](../content/0794a162-8635-43fd-81ed-2cf2604575b1.md) | InitialAccess | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Emails with high score of 'malware' filter classifier value](../content/eb74aaab-ebf4-4763-9b03-b1a33fe48600.md) | InitialAccess | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Emails with high score of 'phish' filter classifier value](../content/a0d56fcd-edb3-46f1-aaa3-12d606a48ff1.md) | InitialAccess | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Emails with high score of 'spam' filter classifier value](../content/c9ff3690-b754-4c91-b866-4d07098da074.md) | InitialAccess | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Emails with high score of 'suspect' filter classifier value](../content/bc619ce8-0807-4b13-93ea-0d7b79c7ee68.md) | InitialAccess | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Large size outbound emails](../content/dd9674cf-898b-4c80-96f1-f70bec66e6fc.md) | Exfiltration | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Recipients with high number of discarded or rejected emails](../content/d324e435-31d3-4aa3-907c-76f4917820a9.md) | InitialAccess | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Recipients with large number of corrupted emails](../content/c334e1e8-a7da-4c23-a9c0-fdda26b07606.md) | InitialAccess | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Senders with large number of corrupted messages](../content/af7f133a-5fed-4ebf-8272-4330c884c7ca.md) | InitialAccess | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |
| [ProofpointPOD - Suspicious file types in attachments](../content/7b281f4a-6a9a-439f-8b4f-f08eb24f2fb7.md) | InitialAccess | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ProofpointPOD](../content/proofpointpod-proofpoint-on-demand%28pod%29-email-security.md) | [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)<br>[`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)<br>[`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)<br>[`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)<br>[`maillog_CL`](../tables/maillog-cl.md)<br>[`message_CL`](../tables/message-cl.md)<br>[`trend_result`](../tables/trend-result.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ProofpointPOD](../content/634600b4-d931-4a58-a21f-1de3dd35df23.md) | - | - |

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
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
