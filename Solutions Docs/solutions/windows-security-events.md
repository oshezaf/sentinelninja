# Windows Security Events

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Windows Security Events Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Windows Security Events solution for Microsoft Sentinel allows you to ingest Security events from your Windows machines using the Windows Agent into Microsoft Sentinel. This solution includes two (2) data connectors to help ingest the logs.

1. **Windows Security Events via AMA** - This data connector helps in ingesting Security Events logs into your Log Analytics Workspace using the new Azure Monitor Agent. Learn more about ingesting using the new Azure Monitor Agent [here](https://learn.microsoft.com/azure/sentinel/connect-cef-ama). **Microsoft recommends using this Data Connector**.

2. **Security Events via Legacy Agent** - This data connector helps in ingesting Security Events logs into your Log Analytics Workspace using the legacy Log Analytics agent.

<P style="color:red">**NOTE:** Microsoft recommends installation of Windows Security Events via AMA Connector. Legacy connector uses the Log Analytics agent which is about to be deprecated by **Aug 31, 2024,** and thus should only be installed where AMA is not supported.</p>

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.9 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Security%20Events](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Security%20Events) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Security Events via Legacy Agent](../connectors/securityevents.md)
- [Windows Security Events via AMA](../connectors/windowssecurityevents.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Event`](../tables/event.md) | - | Analytics, Hunting |
| [`SecurityEvent`](../tables/securityevent.md) | [Security Events via Legacy Agent](../connectors/securityevents.md), [Windows Security Events via AMA](../connectors/windowssecurityevents.md) | Analytics, Hunting, Workbooks |
| [`WindowsEvent`](../tables/windowsevent.md) | - | Hunting |

## Content Items

This solution includes **72 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 50 |
| Analytic Rules | 20 |
| Workbooks | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [AD FS Remote Auth Sync Connection](../content/windows-security-events-ad-fs-remote-auth-sync-connection-2f4165a6-c4fb-4e94-861e-37f1b4d6c0e6-a47c2516.md) | Medium | Collection | [`SecurityEvent`](../tables/securityevent.md) |
| [AD FS Remote HTTP Network Connection](../content/windows-security-events-ad-fs-remote-http-network-connection-d57c33a9-76b9-40e0-9dfa-ff0404546410-3555cd57.md) | Medium | Collection | [`Event`](../tables/event.md) |
| [AD user enabled and password not set within 48 hours](../content/windows-security-events-ad-user-enabled-and-password-not-set-within-48-hours-62085097-d113-459f-9ea7-30216f2ee6af-03184bd5.md) | Low | Persistence | [`SecurityEvent`](../tables/securityevent.md) |
| [ADFS Database Named Pipe Connection](../content/windows-security-events-adfs-database-named-pipe-connection-dcdf9bfc-c239-4764-a9f9-3612e6dff49c-29ef627a.md) | Medium | Collection | [`Event`](../tables/event.md) |
| [Excessive Windows Logon Failures](../content/windows-security-events-excessive-windows-logon-failures-2391ce61-8c8d-41ac-9723-d945b2e90720-36e38369.md) | Low | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Exchange OAB Virtual Directory Attribute Containing Potential Webshell](../content/windows-security-events-exchange-oab-virtual-directory-attribute-containing-potential-webshell-faf1a6ff-53b5-4f92-8c55-4b20e9957594-0a1c5425.md) | High | InitialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Gain Code Execution on ADFS Server via SMB + Remote Service or Scheduled Task](../content/windows-security-events-gain-code-execution-on-adfs-server-via-smb-+-remote-service-or-scheduled-task-12dcea64-bec2-41c9-9df2-9f28461b1295-478b123d.md) | Medium | LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Microsoft Entra ID Local Device Join Information and Transport Key Registry Keys Access](../content/windows-security-events-microsoft-entra-id-local-device-join-information-and-transport-key-registry-keys-a356c8bd-c81d-428b-aa36-83be706be034-52ba1a8d.md) | Medium | Discovery | [`SecurityEvent`](../tables/securityevent.md) |
| [NRT Base64 Encoded Windows Process Command-lines](../content/windows-security-events-nrt-base64-encoded-windows-process-command-lines-c3e5dbaa-a540-408c-8b36-68bdfb3df088-bed67057.md) | Medium | Execution, DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [NRT Process executed from binary hidden in Base64 encoded file](../content/windows-security-events-nrt-process-executed-from-binary-hidden-in-base64-encoded-file-7ad4c32b-d0d2-411c-a0e8-b557afa12fce-92d97690.md) | Medium | Execution, DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [NRT Security Event log cleared](../content/windows-security-events-nrt-security-event-log-cleared-508cef41-2cd8-4d40-a519-b04826a9085f-67c5b6b4.md) | Medium | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [New EXE deployed via Default Domain or Default Domain Controller Policies](../content/windows-security-events-new-exe-deployed-via-default-domain-or-default-domain-controller-policies-05b4bccd-dd12-423d-8de4-5a6fb526bb4f-aa6653ca.md) | High | Execution, LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Non Domain Controller Active Directory Replication](../content/windows-security-events-non-domain-controller-active-directory-replication-b9d2eebc-5dcb-4888-8165-900db44443ab-b36ed5cd.md) | High | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Potential Fodhelper UAC Bypass](../content/windows-security-events-potential-fodhelper-uac-bypass-56f3f35c-3aca-4437-a1fb-b7a84dc4af00-9be2fced.md) | Medium | PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [Potential re-named sdelete usage](../content/windows-security-events-potential-re-named-sdelete-usage-720d12c6-a08c-44c4-b18f-2236412d59b0-d334efe2.md) | Low | DefenseEvasion, Impact | [`SecurityEvent`](../tables/securityevent.md) |
| [Process Execution Frequency Anomaly](../content/windows-security-events-process-execution-frequency-anomaly-2c55fe7a-b06f-4029-a5b9-c54a2320d7b8-7d56da33.md) | Medium | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Scheduled Task Hide](../content/windows-security-events-scheduled-task-hide-6dd2629c-534b-4275-8201-d7968b4fa77e-3293d2af.md) | High | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [Sdelete deployed via GPO and run recursively](../content/windows-security-events-sdelete-deployed-via-gpo-and-run-recursively-d9f28fdf-abc8-4f1a-a7e7-1aaec87a2fc5-8f72bd3c.md) | Medium | Impact | [`SecurityEvent`](../tables/securityevent.md) |
| [SecurityEvent - Multiple authentication failures followed by a success](../content/windows-security-events-securityevent-multiple-authentication-failures-followed-by-a-success-cf3ede88-a429-493b-9108-3e46d3c741f7-2bfab486.md) | Low | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Starting or Stopping HealthService to Avoid Detection](../content/windows-security-events-starting-or-stopping-healthservice-to-avoid-detection-2bc7b4ae-eeaa-4538-ba15-ef298ec1ffae-cde90857.md) | Medium | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [AD Account Lockout](../content/windows-security-events-ad-account-lockout-a308d780-1c39-4fa7-8c21-bb54f174b065-798b810f.md) | Impact | [`SecurityEvent`](../tables/securityevent.md) |
| [Commands executed by WMI on new hosts - potential Impacket](../content/windows-security-events-commands-executed-by-wmi-on-new-hosts-potential-impacket-9ce755c1-d2e6-4e2f-82d5-7871ec1aef91-d645d9b4.md) | Execution, LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Crash dump disabled on host](../content/windows-security-events-crash-dump-disabled-on-host-5a3615af-21c9-427e-8bf1-ed2350992bb4-8623f73e.md) | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [Cscript script daily summary breakdown](../content/windows-security-events-cscript-script-daily-summary-breakdown-36abe031-962d-482e-8e1e-a556ed99d5a3-056955b7.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Decoy User Account Authentication Attempt](../content/windows-security-events-decoy-user-account-authentication-attempt-a4dbc292-87eb-11ec-a8a3-0242ac120002-38f94fe7.md) | LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Discord download invoked from cmd line](../content/windows-security-events-discord-download-invoked-from-cmd-line-e7dd442a-0af8-48eb-8358-9e91f4911849-404b8911.md) | Execution, CommandAndControl, Exfiltration | [`SecurityEvent`](../tables/securityevent.md) |
| [Domain controller installation media creation](../content/windows-security-events-domain-controller-installation-media-creation-7e5f3a9a-542c-417a-a429-4ed500c5c4d8-fec25b2e.md) | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Entropy for Processes for a given Host](../content/windows-security-events-entropy-for-processes-for-a-given-host-05208917-82de-46f7-a190-a65739a690f4-59ba7296.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Enumeration of users and groups](../content/windows-security-events-enumeration-of-users-and-groups-a1e993de-770a-4434-83e9-9e3b47a6e470-31ff9f63.md) | Discovery | [`SecurityEvent`](../tables/securityevent.md) |
| [Establishing internal proxies](../content/windows-security-events-establishing-internal-proxies-ce38c16c-a560-46c0-88d6-7757b88f08e9-e3cde3e0.md) | CommandandControl | [`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Exchange PowerShell Snapin Added](../content/windows-security-events-exchange-powershell-snapin-added-8afd1086-fc9a-4d26-b3ff-5c794c79a59a-8e25d87f.md) | Collection | [`SecurityEvent`](../tables/securityevent.md) |
| [Group added to Built in Domain Local or Global Group](../content/windows-security-events-group-added-to-built-in-domain-local-or-global-group-cb47a115-2616-4d56-890d-b28c14bc83e4-cbcd997b.md) | Persistence, PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [Host Exporting Mailbox and Removing Export](../content/windows-security-events-host-exporting-mailbox-and-removing-export-2e2fab4b-83dd-4cf8-b2dd-063d0fd15513-f6188024.md) | Collection | [`SecurityEvent`](../tables/securityevent.md) |
| [Hosts Running a Rare Process](../content/windows-security-events-hosts-running-a-rare-process-82e04ff9-a289-4005-9fcd-f1deec72e3fc-91003c14.md) | Execution, Persistence, Discovery, LateralMovement, Collection | [`SecurityEvent`](../tables/securityevent.md) |
| [Hosts Running a Rare Process with Commandline](../content/windows-security-events-hosts-running-a-rare-process-with-commandline-5550b630-7b8a-444e-a585-ec8c7533c028-2ae5a42b.md) | Execution, Persistence, Discovery, LateralMovement, Collection | [`SecurityEvent`](../tables/securityevent.md) |
| [Hosts with new logons](../content/windows-security-events-hosts-with-new-logons-62e2df59-1535-4c8e-ac6c-c91faeed0179-01cac37a.md) | CredentialAccess, LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Invoke-PowerShellTcpOneLine Usage.](../content/windows-security-events-invoke-powershelltcponeline-usage.-a344e28e-095d-47fb-84a8-d06edd31d2cb-5e9d5425.md) | Exfiltration | [`SecurityEvent`](../tables/securityevent.md) |
| [KrbRelayUp Local Privilege Escalation Service Creation](../content/windows-security-events-krbrelayup-local-privilege-escalation-service-creation-ccbc73a1-d303-4613-aed4-478e996f454e-0d6549ff.md) | PrivilegeEscalation | [`Event`](../tables/event.md) |
| [Least Common Parent And Child Process Pairs](../content/windows-security-events-least-common-parent-and-child-process-pairs-3712595d-6f47-416b-963a-605201ed2764-304136a9.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Least Common Processes Including Folder Depth](../content/windows-security-events-least-common-processes-including-folder-depth-6d04a1ef-1b4d-4ff8-a76c-ad7d1a396136-6a4e1ff5.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Least Common Processes by Command Line](../content/windows-security-events-least-common-processes-by-command-line-088d30e9-c02b-46b1-bd1f-d5b6d6b782f0-21ac6383.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Long lookback User Account Created and Deleted within 10mins](../content/windows-security-events-long-lookback-user-account-created-and-deleted-within-10mins-6135a90e-ba30-4f36-9b6a-3a350050704b-6a4acaf0.md) | Persistence, PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [Masquerading files](../content/windows-security-events-masquerading-files-60304ebf-ebdd-4869-a702-e0216d90ab46-fbac27a6.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Multiple Explicit Credential Usage - 4648 events](../content/windows-security-events-multiple-explicit-credential-usage-4648-events-9e3fab4b-94dd-4cf9-b2aa-063d0fd25513-bf7d18d4.md) | Discovery, LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [New Child Process of W3WP.exe](../content/windows-security-events-new-child-process-of-w3wp.exe-f885fb16-dfd3-4c90-83d9-7a66b9d9b654-75c40006.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [New PowerShell scripts encoded on the commandline](../content/windows-security-events-new-powershell-scripts-encoded-on-the-commandline-4e78daf1-8bba-4b5d-8a8b-c75fe9bbc2d9-fc78c747.md) | Execution, CommandAndControl | [`SecurityEvent`](../tables/securityevent.md) |
| [New processes observed in last 24 hours](../content/windows-security-events-new-processes-observed-in-last-24-hours-513e3a11-e1bb-4cfc-8af9-451da0407e6b-2f72302d.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Nishang Reverse TCP Shell in Base64](../content/windows-security-events-nishang-reverse-tcp-shell-in-base64-87c1f90a-f868-4528-a9c1-15520249cae6-29ac834c.md) | Exfiltration | [`SecurityEvent`](../tables/securityevent.md) |
| [Potential Exploitation of MS-RPRN printer bug](../content/windows-security-events-potential-exploitation-of-ms-rprn-printer-bug-c29a03c6-d074-4934-afae-df1aeb30da70-2d22b8de.md) | PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [PowerShell downloads](../content/windows-security-events-powershell-downloads-d83f40fc-bbcc-4020-8d45-ad2d82355cb2-eb98129c.md) | Execution, CommandAndControl | [`SecurityEvent`](../tables/securityevent.md) |
| [Powercat Download](../content/windows-security-events-powercat-download-c2112ca3-aae0-4079-9bff-d74c54bb5fe5-e8217682.md) | Exfiltration | [`SecurityEvent`](../tables/securityevent.md) |
| [Rare Process Path](../content/windows-security-events-rare-process-path-0ff22697-dc58-4623-b844-a767629840cd-668afb9c.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Rare Processes Run by Service Accounts](../content/windows-security-events-rare-processes-run-by-service-accounts-af02987c-949d-47d5-b0ae-64d8e1b674e2-173a9ff0.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Remote Task Creation/Update using Schtasks Process](../content/windows-security-events-remote-task-creation-update-using-schtasks-process-1e4a5be3-4a60-4099-b286-2d3642575889-38edc3ad.md) | Persistence | [`SecurityEvent`](../tables/securityevent.md) |
| [Service installation from user writable directory](../content/windows-security-events-service-installation-from-user-writable-directory-5a9ccb48-1316-46e1-89d1-aca0355c305e-81f8a107.md) | Execution | [`Event`](../tables/event.md) |
| [Summary of failed user logons by reason of failure](../content/windows-security-events-summary-of-failed-user-logons-by-reason-of-failure-e7642e6e-cf27-46ec-a4b9-e4475228fead-bc8b05cf.md) | CredentialAccess, LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Summary of user logons by logon type](../content/windows-security-events-summary-of-user-logons-by-logon-type-d0f13bb9-e713-4f89-b610-1806326a1dea-12378152.md) | CredentialAccess, LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Summary of users created using uncommon/undocumented commandline switches](../content/windows-security-events-summary-of-users-created-using-uncommon-undocumented-commandline-switches-5e76eaf9-79a7-448c-bace-28e5b53b8396-824f28e4.md) | CredentialAccess, LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Suspected LSASS Dump](../content/windows-security-events-suspected-lsass-dump-58fe8fc8-54fa-48cd-bac3-197f8d862429-8666c9e8.md) | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Suspicious Enumeration using Adfind Tool](../content/windows-security-events-suspicious-enumeration-using-adfind-tool-dd6fb889-43ef-44e1-a01d-093ab4bb12b2-fef95624.md) | Execution, Discovery, Collection | [`SecurityEvent`](../tables/securityevent.md) |
| [Suspicious Windows Login Outside Normal Hours](../content/windows-security-events-suspicious-windows-login-outside-normal-hours-e7bfbc3f-98c7-4aaa-a64c-de9c058b86b2-15ccdfd0.md) | InitialAccess, LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Suspicious command line tokens in LolBins or LolScripts](../content/windows-security-events-suspicious-command-line-tokens-in-lolbins-or-lolscripts-6cdef739-18f6-4b3a-8fdc-93e9a4302dbf-46ec7a62.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Uncommon processes - bottom 5%](../content/windows-security-events-uncommon-processes-bottom-5-2ff4b10c-7056-4898-83fd-774104189fd5-2ef29fea.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [User Account added to Built in Sensitive or Privileged Domain Local or Global Group](../content/windows-security-events-user-account-added-to-built-in-sensitive-or-privileged-domain-local-or-global-gr-8d69a665-074a-443b-aae6-5dd9bdd5cfb1-0118579e.md) | Persistence, PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [User account added or removed from a security group by an unauthorized user](../content/windows-security-events-user-account-added-or-removed-from-a-security-group-by-an-unauthorized-user-d57f675c-ad6c-44d0-95fb-3bf707e70155-3834c59d.md) | Persistence, PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [User created by unauthorized user](../content/windows-security-events-user-created-by-unauthorized-user-42ae9690-89ce-4063-9a90-465badad5395-6cbb1bb9.md) | Persistence, PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [VIP account more than 6 failed logons in 10](../content/windows-security-events-vip-account-more-than-6-failed-logons-in-10-892cd37e-f9e1-49c3-b0b2-d74f52ac7b71-f57a0ad0.md) | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [VIP account more than 6 failed logons in 10](../content/windows-security-events-vip-account-more-than-6-failed-logons-in-10-e8d36582-c403-4466-bd44-ebede5b6fa6e-f9a5b0f7.md) | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Windows System Shutdown/Reboot(Sysmon)](../content/windows-security-events-windows-system-shutdown-reboot-sysmon-14fab7a3-cb11-41d6-a19a-b55a4a0ef3b1-e2599fa5.md) | Impact | [`Event`](../tables/event.md) |
| [Windows System Time changed on hosts](../content/windows-security-events-windows-system-time-changed-on-hosts-9fd6f61d-2cc3-48de-acf5-7194e78d6ea1-9fe3fe4a.md) | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [EventAnalyzer](../content/windows-security-events-eventanalyzer-30e8f73e.md) | [`SecurityEvent`](../tables/securityevent.md) |
| [IdentityAndAccess](../content/windows-security-events-identityandaccess-d8681d3f.md) | [`SecurityEvent`](../tables/securityevent.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                         |
|-------------|--------------------------------|--------------------------------------------------------------------------------------------|
| 3.0.9       | 01-10-2024                     | Removed kind from  **Hunting Query** [Service installation from user writable directory]   |
| 3.0.8       | 23-07-2024                     | Updated the Workspace type from resource type picker to resource picker in **Workbook**    |
| 3.0.7       | 12-06-2024                     | Fixed the bugs from **Analytic Rules** NRT_execute_base64_decodedpayload.yaml and ADFSRemoteAuthSyncConnection.yaml |												
| 3.0.6       | 16-05-2024                     | Fixed wrong fieldMappings of **Analytic Rules** password_not_set.yaml						|												
| 3.0.5       | 21-03-2024                     | Updated Entity Mappings of **Analytic Rules** 												|					|
| 3.0.4       | 06-03-2024                     | Added New **Hunting Queries**																	|
| 3.0.3       | 19-02-2024                     | Updated Entity Mapping in 	**Analytical Rule** [Non Domain Controller Active Directory Replication]														|
| 3.0.2       | 23-01-2024                     | Added Sub-Technique in Template															|
| 3.0.1       | 13-12-2023                     | Updated query in **Analytical Rule** (AD user enabled and password not set within 48 hours)|
| 3.0.0       | 26-12-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.                   |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

