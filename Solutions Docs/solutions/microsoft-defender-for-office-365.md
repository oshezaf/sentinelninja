# Microsoft Defender for Office 365

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
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
| [MicrosoftDefenderForOffice365](../content/microsoftdefenderforoffice365-microsoft-defender-for-office-365.md) | [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md)<br>[`EmailEvents`](../tables/emailevents.md)<br>[`EmailUrlInfo`](../tables/emailurlinfo.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [O365 - Block Malware file extensions](../content/o365---block-malware-file-extensions-microsoft-defender-for-office-365.md) | This Playbook Provides the automation on blocking the suspicious/malicious file attachment on mails | - |
| [O365 - Block Sender Entity Trigger](../content/o365---block-sender-entity-trigger-microsoft-defender-for-office-365.md) | This Playbook Provides the automation on blocking the suspicious/malicious sender | - |
| [O365 - Block Spam Domain](../content/o365---block-spam-domain-microsoft-defender-for-office-365.md) | This Playbook Provides the automation on blocking the suspicious/malicious attacker Domains | - |
| [O365 - Block Suspicious Sender](../content/o365---block-suspicious-sender-microsoft-defender-for-office-365.md) | This Playbook Provides the automation on blocking the suspicious/malicious senders | - |
| [O365 - Delete All Malicious Inbox Rule](../content/o365---delete-all-malicious-inbox-rule-microsoft-defender-for-office-365.md) | This Playbook provides the automation on deleting all the suspicious/malicious Inbox Rules from Prov... | - |

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
