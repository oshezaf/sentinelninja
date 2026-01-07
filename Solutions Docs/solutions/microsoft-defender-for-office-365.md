# Microsoft Defender for Office 365

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/office365_logo.svg" alt="Microsoft Defender for Office 365 Logo" width="75" height="75">

The [Microsoft Defender for Office 365](https://www.microsoft.com/security/business/threat-protection/office-365-defender) solution for Microsoft Sentinel enables you to ingest security alerts from the Defender for Office 365 platform, providing visibility into threats within email messages, links (URLs) and collaboration tools.

**Underlying Microsoft Technologies used:**

This solution  is dependent on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Codeless Connector Platform/Native Microsoft Sentinel Polling](https://docs.microsoft.com/azure/sentinel/create-codeless-connector?tabs=deploy-via-arm-template%2Cconnect-via-the-azure-portal)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-17 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20for%20Office%20365](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20for%20Office%20365) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Microsoft Defender for Office 365 (Preview)](../connectors/officeatp.md)

## Tables Reference

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) | - | Workbooks |
| [`EmailEvents`](../tables/emailevents.md) | - | Workbooks |
| [`EmailUrlInfo`](../tables/emailurlinfo.md) | - | Workbooks |

### Internal Tables

The following **1 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | [Microsoft Defender for Office 365 (Preview)](../connectors/officeatp.md) | - |

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 5 |
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MicrosoftDefenderForOffice365](../content/microsoft-defender-for-office-365-microsoftdefenderforoffice365-cc793056.md) | [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md)<br>[`EmailEvents`](../tables/emailevents.md)<br>[`EmailUrlInfo`](../tables/emailurlinfo.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [O365 - Block Malware file extensions](../content/microsoft-defender-for-office-365-o365-block-malware-file-extensions-d9372b55.md) | This Playbook Provides the automation on blocking the suspicious/malicious file attachment on mails | - |
| [O365 - Block Sender Entity Trigger](../content/microsoft-defender-for-office-365-o365-block-sender-entity-trigger-5396f06a.md) | This Playbook Provides the automation on blocking the suspicious/malicious sender | - |
| [O365 - Block Spam Domain](../content/microsoft-defender-for-office-365-o365-block-spam-domain-87d2a630.md) | This Playbook Provides the automation on blocking the suspicious/malicious attacker Domains | - |
| [O365 - Block Suspicious Sender](../content/microsoft-defender-for-office-365-o365-block-suspicious-sender-a4f1718c.md) | This Playbook Provides the automation on blocking the suspicious/malicious senders | - |
| [O365 - Delete All Malicious Inbox Rule](../content/microsoft-defender-for-office-365-o365-delete-all-malicious-inbox-rule-c33bc467.md) | This Playbook provides the automation on deleting all the suspicious/malicious Inbox Rules from Prov... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.0.3       | 07-04-2025                     | Updated ConnectivityCriteria Type in **Data Connector**.				   |
| 3.0.2       | 24-04-2024                     | Updated link for **Custom Connector** redirection in playbooks           |
| 3.0.1       | 29-09-2023                     | 1 new **Playbook** added to the solution                                 |
| 3.0.0       | 11-07-2023                     | 4 new **Playbooks** added to the solution                                |
|             |                                | 1 **Custom Connector** added as a pre-requisite for playbooks deployment |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
