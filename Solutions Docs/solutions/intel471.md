# Intel 471 Threat Intelligence

*Solution: Intel471*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/intel471_logo.svg" alt="Intel471 Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Intel 471 |
| **Support Tier** | Partner |
| **Support Link** | [https://intel471.com/company/contact](https://intel471.com/company/contact) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.1 |
| **Author** | Intel 471 Inc. |
| **First Published** | 2023-06-21 |
| **Last Updated** | 2026-09-02 |
| **Solution Folder** | [Intel471](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Intel471) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/intel471inc1641226539011.intel471_threat_intelligence) · Popularity: 🔵 Medium (74%) |

The Intel 471 solution for Microsoft Sentinel ingests malware indicators from Intel 471's Verity 471 or Titan API into the Log Analytics workspace, and provides a curated set of community hunting queries to proactively hunt for threats in Microsoft Sentinel.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **4 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | Hunting |
| [`DeviceEvents`](../tables/deviceevents.md) | Hunting |
| [`Event`](../tables/event.md) | Hunting |
| [`SecurityEvent`](../tables/securityevent.md) | Hunting |

## Content Items

This solution includes **26 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 25 |
| Playbooks | 1 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [AWS Identity and Access Management (IAM) Discovery](../content/intel471-aws-identity-and-access-management-iam-discovery-fcdafb78-7ac3-4b83-bbb4-cd182408e6eb-fb8741fa.md) | Discovery | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [AnyDesk Execution from Abnormal Folder - Potential Malicious Use of RMM Tool](../content/intel471-anydesk-execution-from-abnormal-folder-potential-malicious-use-of-rmm-tool-93f71607-f35d-4aa6-aec9-c2f8a62cbd8a-161d718c.md) | CommandAndControl | [`SecurityEvent`](../tables/securityevent.md) |
| [AnyDesk Service Installation - Potentially Malicious RMM Tool Installation](../content/intel471-anydesk-service-installation-potentially-malicious-rmm-tool-installation-4103b086-f093-4084-9125-15b9a6c872b8-59829fcb.md) | CommandAndControl, Persistence, PrivilegeEscalation | [`Event`](../tables/event.md) |
| [Autorun or ASEP Registry Key Modification](../content/intel471-autorun-or-asep-registry-key-modification-8289e2ad-bc74-4ae3-bfaa-cdeb4335135c-ce67e3af.md) | Persistence, PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [Browser Spawning Suspicious Applications - Potential Exploit or Social Engineering](../content/intel471-browser-spawning-suspicious-applications-potential-exploit-or-social-engineering-59d4df2f-014b-47c0-8008-688d1b41682a-e54c6b2b.md) | DefenseEvasion, Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Creating a Shadow Copy](../content/intel471-creating-a-shadow-copy-262d9692-6d36-4b10-9fc5-159930cff604-8a85c79b.md) | Collection, CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Dump LSASS via Renamed procdump](../content/intel471-dump-lsass-via-renamed-procdump-3e8f06d3-4946-4c4a-85b0-cd2804d3401b-0416a344.md) | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Execution BAT Script to Unpack Payload](../content/intel471-execution-bat-script-to-unpack-payload-606cd1ac-622d-4645-9553-2b04df7407d8-950627ff.md) | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [File Created In Startup Folder](../content/intel471-file-created-in-startup-folder-8fedb48c-396b-4cd5-9483-69d7fc3eecee-4e25a558.md) | Persistence, PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [Java Spawning Child Process by Unique Child Process Name - Potential Exploitation Activity](../content/intel471-java-spawning-child-process-by-unique-child-process-name-potential-exploitation-activity-668a47ab-f437-4a63-90a5-912b118dc264-681d3492.md) | DefenseEvasion, InitialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [MeshAgent Suspicious Child Process - Potential Malicious RMM Tool Usage](../content/intel471-meshagent-suspicious-child-process-potential-malicious-rmm-tool-usage-749f7e2c-5eeb-407d-a5ef-cfcecbe5d810-328fa902.md) | CommandAndControl, Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Methods for Downloading Files with PowerShell](../content/intel471-methods-for-downloading-files-with-powershell-c7b320fb-ac67-45b0-92c4-b0f1e10b4e46-7e879de3.md) | CommandAndControl, Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [NetSupport Manager Execution from Abnormal Folder - Potential Malicious Use of RMM Tool](../content/intel471-netsupport-manager-execution-from-abnormal-folder-potential-malicious-use-of-rmm-tool-3f329a8c-0102-4a61-8cf3-63948aab5ef4-6c1c722f.md) | CommandAndControl | [`SecurityEvent`](../tables/securityevent.md) |
| [Potential Maldoc Execution Chain Observed](../content/intel471-potential-maldoc-execution-chain-observed-02909982-664b-4858-b703-429cbe031fef-56427fe3.md) | Execution, InitialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [PowerShell Encoded Command Execution](../content/intel471-powershell-encoded-command-execution-3a5a21fd-5a82-45dc-ad37-3fb95f475e11-6ac23a16.md) | DefenseEvasion, Execution | [`DeviceEvents`](../tables/deviceevents.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [Powershell History Modification or Deletion](../content/intel471-powershell-history-modification-or-deletion-ccdd03de-8fbf-436b-99ba-00dfee83d42f-d9d9dd15.md) | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [Python Executing from Non-Standard Directory](../content/intel471-python-executing-from-non-standard-directory-eebb7f80-07f3-4d37-aab7-51c1ad31f1b3-68e3e917.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Remote Atera Agent Download - Command Line](../content/intel471-remote-atera-agent-download-command-line-bb771c73-e7ab-4705-92a2-ce322b33621d-edbcfef4.md) | CommandAndControl, Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Scheduled Task Executing from Abnormal Location](../content/intel471-scheduled-task-executing-from-abnormal-location-09a380b3-45e5-408c-b14c-3787fa48d783-6e2e7d8a.md) | Execution, Persistence, PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [Shadow Copies Deletion Using Operating Systems Utilities](../content/intel471-shadow-copies-deletion-using-operating-systems-utilities-2e3e9910-70c1-4822-804a-ee9919b0c419-360a835c.md) | Impact | [`SecurityEvent`](../tables/securityevent.md) |
| [Suspect Child Process to IIS Worker Process (w3wp.exe) - Potential Exploitation](../content/intel471-suspect-child-process-to-iis-worker-process-w3wp.exe-potential-exploitation-667c9f6c-8e41-4309-80a8-55fc3c5769bf-621120ec.md) | InitialAccess, LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Suspicious Child Process for Java - Potential Exploitation Activity](../content/intel471-suspicious-child-process-for-java-potential-exploitation-activity-46c5b8dd-465c-4a51-b127-7561bbca02ff-7bc4c67b.md) | DefenseEvasion, InitialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [User Added to Default Privileged Windows Security Groups](../content/intel471-user-added-to-default-privileged-windows-security-groups-b6365ad5-0ccd-4426-97bc-b9484eb9579f-47292d99.md) | DefenseEvasion, InitialAccess, Persistence, PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [WMIC Windows Internal Discovery and Enumeration](../content/intel471-wmic-windows-internal-discovery-and-enumeration-bc0fd59c-4217-46a7-a167-764727118567-da809ef8.md) | Discovery, Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Wevtutil Cleared Log](../content/intel471-wevtutil-cleared-log-7ceada06-54e2-4b44-9dca-b4e8d4ba401d-80b0d977.md) | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Intel 471 Malware Intelligence to Sentinel](../content/intel471-intel-471-malware-intelligence-to-sentinel-ba1ab213.md) | This playbook ingests malware indicators from Intel 471's Titan or Verity API into Microsoft Sentine... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       | 28-08-2026                     |  Added 25 **Hunting Queries**. <br/> Updated **Playbook** 'Intel 471 Malware Intelligence to Sentinel' to **v3.0**: Key Vault secret names can now be supplied at deployment, and Blob storage now authenticates with the logic app's managed identity - grant it the `Storage Blob Data Contributor` role or every run fails.|
| 3.0.0       | 02-12-2025                     |  Added the Verity 471 backend alongside Titan, and switched indicator ingestion to the Threat Intelligence Upload Indicators API.|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

