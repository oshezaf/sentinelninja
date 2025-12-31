# Windows Security Events

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Security%20Events](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Security%20Events) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Security Events via Legacy Agent](../connectors/securityevents.md)
- [Windows Security Events via AMA](../connectors/windowssecurityevents.md)

## Tables Reference

This solution uses **9 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Combined`](../tables/combined.md) | - | Hunting |
| [`Event`](../tables/event.md) | - | Analytics, Hunting |
| [`LogonEvents`](../tables/logonevents.md) | - | Hunting |
| [`ProcessCreationEvents`](../tables/processcreationevents.md) | - | Hunting |
| [`SecEvents`](../tables/secevents.md) | - | Hunting |
| [`SecurityEvent`](../tables/securityevent.md) | [Security Events via Legacy Agent](../connectors/securityevents.md), [Windows Security Events via AMA](../connectors/windowssecurityevents.md) | Analytics, Hunting, Workbooks |
| [`encodedPSScripts`](../tables/encodedpsscripts.md) | - | Hunting |
| [`normalizedProcessPath`](../tables/normalizedprocesspath.md) | - | Hunting |
| [`userEnable`](../tables/userenable.md) | - | Analytics |

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
| [AD FS Remote Auth Sync Connection](../content/2f4165a6-c4fb-4e94-861e-37f1b4d6c0e6.md) | Medium | Collection | [`SecurityEvent`](../tables/securityevent.md) |
| [AD FS Remote HTTP Network Connection](../content/d57c33a9-76b9-40e0-9dfa-ff0404546410.md) | Medium | Collection | [`Event`](../tables/event.md) |
| [AD user enabled and password not set within 48 hours](../content/62085097-d113-459f-9ea7-30216f2ee6af.md) | Low | Persistence | [`userEnable`](../tables/userenable.md) |
| [ADFS Database Named Pipe Connection](../content/dcdf9bfc-c239-4764-a9f9-3612e6dff49c.md) | Medium | Collection | [`Event`](../tables/event.md) |
| [Excessive Windows Logon Failures](../content/2391ce61-8c8d-41ac-9723-d945b2e90720.md) | Low | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Exchange OAB Virtual Directory Attribute Containing Potential Webshell](../content/faf1a6ff-53b5-4f92-8c55-4b20e9957594.md) | High | InitialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Gain Code Execution on ADFS Server via SMB + Remote Service or Scheduled Task](../content/12dcea64-bec2-41c9-9df2-9f28461b1295.md) | Medium | LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Microsoft Entra ID Local Device Join Information and Transport Key Registry Keys Access](../content/a356c8bd-c81d-428b-aa36-83be706be034.md) | Medium | Discovery | [`SecurityEvent`](../tables/securityevent.md) |
| [NRT Base64 Encoded Windows Process Command-lines](../content/c3e5dbaa-a540-408c-8b36-68bdfb3df088.md) | Medium | Execution, DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [NRT Process executed from binary hidden in Base64 encoded file](../content/7ad4c32b-d0d2-411c-a0e8-b557afa12fce.md) | Medium | Execution, DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [NRT Security Event log cleared](../content/508cef41-2cd8-4d40-a519-b04826a9085f.md) | Medium | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [New EXE deployed via Default Domain or Default Domain Controller Policies](../content/05b4bccd-dd12-423d-8de4-5a6fb526bb4f.md) | High | Execution, LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Non Domain Controller Active Directory Replication](../content/b9d2eebc-5dcb-4888-8165-900db44443ab.md) | High | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Potential Fodhelper UAC Bypass](../content/56f3f35c-3aca-4437-a1fb-b7a84dc4af00.md) | Medium | PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [Potential re-named sdelete usage](../content/720d12c6-a08c-44c4-b18f-2236412d59b0.md) | Low | DefenseEvasion, Impact | [`SecurityEvent`](../tables/securityevent.md) |
| [Process Execution Frequency Anomaly](../content/2c55fe7a-b06f-4029-a5b9-c54a2320d7b8.md) | Medium | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Scheduled Task Hide](../content/6dd2629c-534b-4275-8201-d7968b4fa77e.md) | High | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [Sdelete deployed via GPO and run recursively](../content/d9f28fdf-abc8-4f1a-a7e7-1aaec87a2fc5.md) | Medium | Impact | [`SecurityEvent`](../tables/securityevent.md) |
| [SecurityEvent - Multiple authentication failures followed by a success](../content/cf3ede88-a429-493b-9108-3e46d3c741f7.md) | Low | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Starting or Stopping HealthService to Avoid Detection](../content/2bc7b4ae-eeaa-4538-ba15-ef298ec1ffae.md) | Medium | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [AD Account Lockout](../content/a308d780-1c39-4fa7-8c21-bb54f174b065.md) | Impact | [`SecurityEvent`](../tables/securityevent.md) |
| [Commands executed by WMI on new hosts - potential Impacket](../content/9ce755c1-d2e6-4e2f-82d5-7871ec1aef91.md) | Execution, LateralMovement | - |
| [Crash dump disabled on host](../content/5a3615af-21c9-427e-8bf1-ed2350992bb4.md) | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [Cscript script daily summary breakdown](../content/36abe031-962d-482e-8e1e-a556ed99d5a3.md) | Execution | [`ProcessCreationEvents`](../tables/processcreationevents.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [Decoy User Account Authentication Attempt](../content/a4dbc292-87eb-11ec-a8a3-0242ac120002.md) | LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Discord download invoked from cmd line](../content/e7dd442a-0af8-48eb-8358-9e91f4911849.md) | Execution, CommandAndControl, Exfiltration | [`SecurityEvent`](../tables/securityevent.md) |
| [Domain controller installation media creation](../content/7e5f3a9a-542c-417a-a429-4ed500c5c4d8.md) | CredentialAccess | - |
| [Entropy for Processes for a given Host](../content/05208917-82de-46f7-a190-a65739a690f4.md) | Execution | [`Combined`](../tables/combined.md)<br>[`SecEvents`](../tables/secevents.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [Enumeration of users and groups](../content/a1e993de-770a-4434-83e9-9e3b47a6e470.md) | Discovery | [`SecurityEvent`](../tables/securityevent.md) |
| [Establishing internal proxies](../content/ce38c16c-a560-46c0-88d6-7757b88f08e9.md) | CommandandControl | - |
| [Exchange PowerShell Snapin Added](../content/8afd1086-fc9a-4d26-b3ff-5c794c79a59a.md) | Collection | [`SecurityEvent`](../tables/securityevent.md) |
| [Group added to Built in Domain Local or Global Group](../content/cb47a115-2616-4d56-890d-b28c14bc83e4.md) | Persistence, PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [Host Exporting Mailbox and Removing Export](../content/2e2fab4b-83dd-4cf8-b2dd-063d0fd15513.md) | Collection | [`SecurityEvent`](../tables/securityevent.md) |
| [Hosts Running a Rare Process](../content/82e04ff9-a289-4005-9fcd-f1deec72e3fc.md) | Execution, Persistence, Discovery, LateralMovement, Collection | [`SecurityEvent`](../tables/securityevent.md) |
| [Hosts Running a Rare Process with Commandline](../content/5550b630-7b8a-444e-a585-ec8c7533c028.md) | Execution, Persistence, Discovery, LateralMovement, Collection | [`SecurityEvent`](../tables/securityevent.md) |
| [Hosts with new logons](../content/62e2df59-1535-4c8e-ac6c-c91faeed0179.md) | CredentialAccess, LateralMovement | [`LogonEvents`](../tables/logonevents.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [Invoke-PowerShellTcpOneLine Usage.](../content/a344e28e-095d-47fb-84a8-d06edd31d2cb.md) | Exfiltration | [`SecurityEvent`](../tables/securityevent.md) |
| [KrbRelayUp Local Privilege Escalation Service Creation](../content/ccbc73a1-d303-4613-aed4-478e996f454e.md) | PrivilegeEscalation | [`Event`](../tables/event.md) |
| [Least Common Parent And Child Process Pairs](../content/3712595d-6f47-416b-963a-605201ed2764.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Least Common Processes Including Folder Depth](../content/6d04a1ef-1b4d-4ff8-a76c-ad7d1a396136.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Least Common Processes by Command Line](../content/088d30e9-c02b-46b1-bd1f-d5b6d6b782f0.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Long lookback User Account Created and Deleted within 10mins](../content/6135a90e-ba30-4f36-9b6a-3a350050704b.md) | Persistence, PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [Masquerading files](../content/60304ebf-ebdd-4869-a702-e0216d90ab46.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Multiple Explicit Credential Usage - 4648 events](../content/9e3fab4b-94dd-4cf9-b2aa-063d0fd25513.md) | Discovery, LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [New Child Process of W3WP.exe](../content/f885fb16-dfd3-4c90-83d9-7a66b9d9b654.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [New PowerShell scripts encoded on the commandline](../content/4e78daf1-8bba-4b5d-8a8b-c75fe9bbc2d9.md) | Execution, CommandAndControl | [`SecurityEvent`](../tables/securityevent.md)<br>[`encodedPSScripts`](../tables/encodedpsscripts.md) |
| [New processes observed in last 24 hours](../content/513e3a11-e1bb-4cfc-8af9-451da0407e6b.md) | Execution | [`ProcessCreationEvents`](../tables/processcreationevents.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [Nishang Reverse TCP Shell in Base64](../content/87c1f90a-f868-4528-a9c1-15520249cae6.md) | Exfiltration | [`SecurityEvent`](../tables/securityevent.md) |
| [Potential Exploitation of MS-RPRN printer bug](../content/c29a03c6-d074-4934-afae-df1aeb30da70.md) | PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [PowerShell downloads](../content/d83f40fc-bbcc-4020-8d45-ad2d82355cb2.md) | Execution, CommandAndControl | [`SecurityEvent`](../tables/securityevent.md) |
| [Powercat Download](../content/c2112ca3-aae0-4079-9bff-d74c54bb5fe5.md) | Exfiltration | [`SecurityEvent`](../tables/securityevent.md) |
| [Rare Process Path](../content/0ff22697-dc58-4623-b844-a767629840cd.md) | Execution | [`SecurityEvent`](../tables/securityevent.md)<br>[`normalizedProcessPath`](../tables/normalizedprocesspath.md) |
| [Rare Processes Run by Service Accounts](../content/af02987c-949d-47d5-b0ae-64d8e1b674e2.md) | Execution | [`ProcessCreationEvents`](../tables/processcreationevents.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [Remote Task Creation/Update using Schtasks Process](../content/1e4a5be3-4a60-4099-b286-2d3642575889.md) | Persistence | [`SecurityEvent`](../tables/securityevent.md) |
| [Service installation from user writable directory](../content/5a9ccb48-1316-46e1-89d1-aca0355c305e.md) | Execution | [`Event`](../tables/event.md) |
| [Summary of failed user logons by reason of failure](../content/e7642e6e-cf27-46ec-a4b9-e4475228fead.md) | CredentialAccess, LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Summary of user logons by logon type](../content/d0f13bb9-e713-4f89-b610-1806326a1dea.md) | CredentialAccess, LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Summary of users created using uncommon/undocumented commandline switches](../content/5e76eaf9-79a7-448c-bace-28e5b53b8396.md) | CredentialAccess, LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Suspected LSASS Dump](../content/58fe8fc8-54fa-48cd-bac3-197f8d862429.md) | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Suspicious Enumeration using Adfind Tool](../content/dd6fb889-43ef-44e1-a01d-093ab4bb12b2.md) | Execution, Discovery, Collection | [`SecurityEvent`](../tables/securityevent.md) |
| [Suspicious Windows Login Outside Normal Hours](../content/e7bfbc3f-98c7-4aaa-a64c-de9c058b86b2.md) | InitialAccess, LateralMovement | [`SecurityEvent`](../tables/securityevent.md) |
| [Suspicious command line tokens in LolBins or LolScripts](../content/6cdef739-18f6-4b3a-8fdc-93e9a4302dbf.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Uncommon processes - bottom 5%](../content/2ff4b10c-7056-4898-83fd-774104189fd5.md) | Execution | [`ProcessCreationEvents`](../tables/processcreationevents.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [User Account added to Built in Sensitive or Privileged Domain Local or Global Group](../content/8d69a665-074a-443b-aae6-5dd9bdd5cfb1.md) | Persistence, PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [User account added or removed from a security group by an unauthorized user](../content/d57f675c-ad6c-44d0-95fb-3bf707e70155.md) | Persistence, PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [User created by unauthorized user](../content/42ae9690-89ce-4063-9a90-465badad5395.md) | Persistence, PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [VIP account more than 6 failed logons in 10](../content/892cd37e-f9e1-49c3-b0b2-d74f52ac7b71.md) | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [VIP account more than 6 failed logons in 10](../content/e8d36582-c403-4466-bd44-ebede5b6fa6e.md) | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Windows System Shutdown/Reboot(Sysmon)](../content/14fab7a3-cb11-41d6-a19a-b55a4a0ef3b1.md) | Impact | [`Event`](../tables/event.md) |
| [Windows System Time changed on hosts](../content/9fd6f61d-2cc3-48de-acf5-7194e78d6ea1.md) | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [EventAnalyzer](../content/eventanalyzer-windows-security-events.md) | [`SecurityEvent`](../tables/securityevent.md) |
| [IdentityAndAccess](../content/identityandaccess-windows-security-events.md) | [`SecurityEvent`](../tables/securityevent.md) |

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

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
