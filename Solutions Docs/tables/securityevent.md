# SecurityEvent

Reference for SecurityEvent table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Windows |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityevent) |

## Solutions (27)

This table is used by the following solutions:

- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md)
- [EatonForeseer](../solutions/eatonforeseer.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [FalconFriday](../solutions/falconfriday.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Malware Protection Essentials](../solutions/malware-protection-essentials.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security---exchange-on-premises.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Network Session Essentials](../solutions/network-session-essentials.md)
- [PCI DSS Compliance](../solutions/pci-dss-compliance.md)
- [Recorded Future](../solutions/recorded-future.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md)
- [ThreatConnect](../solutions/threatconnect.md)
- [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)
- [Windows Firewall](../solutions/windows-firewall.md)
- [Windows Security Events](../solutions/windows-security-events.md)

## Connectors (6)

This table is ingested by the following connectors:

- [Cyborg Security HUNTER Hunt Packages](../connectors/cyborgsecurity-hunter.md)
- [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md)
- [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md)
- [Security Events via Legacy Agent](../connectors/securityevents.md)
- [Semperis Directory Services Protector](../connectors/semperisdsp.md)
- [Windows Security Events via AMA](../connectors/windowssecurityevents.md)

---

## Content Items Using This Table (163)

### Analytic Rules (59)

**In solution [EatonForeseer](../solutions/eatonforeseer.md):**
- [EatonForeseer - Unauthorized Logins](../content/5a7fccb8-3ed0-44f2-8477-540af3ef4d92.md)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Potential Remote Desktop Tunneling](../content/d2e8fd50-8d66-11ec-b909-0242ac120002.md)
- [Security Event log cleared](../content/80da0a8f-cfe1-4cd0-a895-8bc1771a720e.md)
- [Windows Binaries Executed from Non-Default Directory](../content/15049017-527f-4d3b-b011-b0e99e68ef45.md)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [Certified Pre-Owned - TGTs requested with certificate authentication](../content/b838a13c-052e-45b8-a5ac-7d3eb62efa11.md)
- [Certified Pre-Owned - backup of CA private key - rule 1](../content/aa5eaac7-1264-4833-b620-8f062be75541.md)
- [Certified Pre-Owned - backup of CA private key - rule 2](../content/88f8fbc0-345d-458e-85f6-f73921d5ef50.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Hash](../content/8f9cd0e5-b4ab-4821-95e2-1082fcd784c7.md)
- [Google Threat Intelligence - Threat Hunting IP](../content/7edb2abb-7ef7-4685-92eb-a628703ccf9f.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoise TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/536e8e5c-ce0e-575e-bcc9-aba8e7bf9316.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI IPAddress in SecurityEvents](../content/140a2cb5-4b4a-485c-aab3-2415c24d37e6.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect Malicious Usage of Recovery Tools to Delete Backup Files](../content/259de2c1-c546-4c6d-a17c-df639722f4d7.md)
- [Detect Print Processors Registry Driver Key Creation/Modification](../content/7edde3d4-9859-4a00-b93c-b19ddda55320.md)
- [Detect Registry Run Key Creation/Modification](../content/dd041e4e-1ee2-41ec-ba4e-82a71d628260.md)
- [Detect Windows Allow Firewall Rule Addition/Modification](../content/056593d4-ca3b-47a7-be9d-d1d0884a1d36.md)
- [Detect Windows Update Disabled from Registry](../content/f1443a87-78d5-40c3-b051-f468f0f2def0.md)
- [Process Creation with Suspicious CommandLine Arguments](../content/fdbcc0eb-44fb-467e-a51d-a91df0780a81.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Imminent Ransomware](../content/bb46dd86-e642-48a4-975c-44f5ac2b5033.md)
- [Possible Phishing with CSL and Network Sessions](../content/6c3a1258-bcdd-4fcd-b753-1a9bc826ce12.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [Anomaly found in Network Session Traffic (ASIM Network Session schema)](../content/cd6def0d-3ef0-4d55-a7e3-faa96c46ba12.md)
- [Anomaly in SMB Traffic(ASIM Network Session schema)](../content/8717e498-7b5d-4e23-9e7c-fa4913dbfd79.md)
- [Detect port misuse by anomaly based detection (ASIM Network Session schema)](../content/cbf07406-fa2a-48b0-82b8-efad58db14ec.md)
- [Detect port misuse by static threshold (ASIM Network Session schema)](../content/156997bd-da0f-4729-b47a-0a3e02dd50c8.md)
- [Excessive number of failed connections from a single source (ASIM Network Session schema)](../content/4902eddb-34f7-44a8-ac94-8486366e9494.md)
- [Network Port Sweep from External Network (ASIM Network Session schema)](../content/cd8faa84-4464-4b4e-96dc-b22f50c27541.md)
- [Port scan detected  (ASIM Network Session schema)](../content/1da9853f-3dea-4ea9-b7e5-26730da3d537.md)
- [Potential beaconing activity (ASIM Network Session schema)](../content/fcb9d75c-c3c1-4910-8697-f136bfef2363.md)
- [Remote Desktop Network Brute force (ASIM Network Session schema)](../content/b7dc801e-1e79-48bb-91e8-2229a8e6d40b.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Hash All Actors](../content/6db6a8e6-2959-440b-ba57-a505875fcb37.md)
- [RecordedFuture Threat Hunting IP All Actors](../content/e31bc14e-2b4c-42a4-af34-5bfd7d768aea.md)

**In solution [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md):**
- [Semperis DSP Failed Logons](../content/0e105444-fe13-4ce6-9239-21880076a3f9.md)
- [Semperis DSP Kerberos krbtgt account with old password](../content/9ff3b26b-7636-412e-ac46-072b084b94cb.md)
- [Semperis DSP Mimikatz's DCShadow Alert](../content/1a6d0a49-64b3-4ca1-96c3-f154c16c218c.md)
- [Semperis DSP Operations Critical Notifications](../content/8f471e21-3bb2-466f-9bc2-0a0326a60788.md)
- [Semperis DSP RBAC Changes](../content/e5edf3f3-de53-45e6-b0d7-1ce1c048df4a.md)
- [Semperis DSP Recent sIDHistory changes on AD objects](../content/64796da3-6383-4de2-9c97-866c83c459ae.md)
- [Semperis DSP Well-known privileged SIDs in sIDHistory](../content/ddd75d93-5b8b-4349-babe-c4e15343c5a3.md)
- [Semperis DSP Zerologon vulnerability](../content/85c1f9e4-6f14-46bf-82d5-dbe495b92aab.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/e2399891-383c-4caf-ae67-68a008b9f89e.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/54f4ceb4-fd83-4633-b5b0-c0de9feb8890.md)

**In solution [ThreatConnect](../solutions/threatconnect.md):**
- [ThreatConnect TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/ee1fd303-2081-47b7-8f02-e38bfd0868e6.md)

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**
- [Identify SysAid Server web shell creation](../content/50eb4cbd-188f-44f4-b964-bab84dcdec10.md)

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [AD FS Remote Auth Sync Connection](../content/2f4165a6-c4fb-4e94-861e-37f1b4d6c0e6.md)
- [Excessive Windows Logon Failures](../content/2391ce61-8c8d-41ac-9723-d945b2e90720.md)
- [Exchange OAB Virtual Directory Attribute Containing Potential Webshell](../content/faf1a6ff-53b5-4f92-8c55-4b20e9957594.md)
- [Gain Code Execution on ADFS Server via SMB + Remote Service or Scheduled Task](../content/12dcea64-bec2-41c9-9df2-9f28461b1295.md)
- [Microsoft Entra ID Local Device Join Information and Transport Key Registry Keys Access](../content/a356c8bd-c81d-428b-aa36-83be706be034.md)
- [NRT Base64 Encoded Windows Process Command-lines](../content/c3e5dbaa-a540-408c-8b36-68bdfb3df088.md)
- [NRT Process executed from binary hidden in Base64 encoded file](../content/7ad4c32b-d0d2-411c-a0e8-b557afa12fce.md)
- [NRT Security Event log cleared](../content/508cef41-2cd8-4d40-a519-b04826a9085f.md)
- [New EXE deployed via Default Domain or Default Domain Controller Policies](../content/05b4bccd-dd12-423d-8de4-5a6fb526bb4f.md)
- [Non Domain Controller Active Directory Replication](../content/b9d2eebc-5dcb-4888-8165-900db44443ab.md)
- [Potential Fodhelper UAC Bypass](../content/56f3f35c-3aca-4437-a1fb-b7a84dc4af00.md)
- [Potential re-named sdelete usage](../content/720d12c6-a08c-44c4-b18f-2236412d59b0.md)
- [Process Execution Frequency Anomaly](../content/2c55fe7a-b06f-4029-a5b9-c54a2320d7b8.md)
- [Scheduled Task Hide](../content/6dd2629c-534b-4275-8201-d7968b4fa77e.md)
- [Sdelete deployed via GPO and run recursively](../content/d9f28fdf-abc8-4f1a-a7e7-1aaec87a2fc5.md)
- [SecurityEvent - Multiple authentication failures followed by a success](../content/cf3ede88-a429-493b-9108-3e46d3c741f7.md)
- [Starting or Stopping HealthService to Avoid Detection](../content/2bc7b4ae-eeaa-4538-ba15-ef298ec1ffae.md)

### Hunting Queries (84)

**In solution [Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md):**
- [Attempted VBScript Stored in Non-Run CurrentVersion Registry Key Value](../content/d7233f14-4705-403e-9db9-e0d677c9506b.md)
- [Excessive Windows Discovery and Execution Processes - Potential Malware Installation](../content/6d1c9f13-e43e-4b52-a443-5799465d573b.md)
- [LSASS Memory Dumping using WerFault.exe - Command Identification](../content/4894a60b-d2ee-4f24-be61-0d0c96a84e63.md)
- [Metasploit / Impacket PsExec Process Creation Activity](../content/37cba0d1-8aa5-4f8f-bb26-25a45475ca9a.md)
- [Potential Maldoc Execution Chain Observed](../content/b194088b-c846-4c72-a4b7-933627878db4.md)
- [PowerShell Pastebin Download](../content/e186a8af-3d4a-4003-93b7-9b199e0b1dd1.md)
- [Powershell Encoded Command Execution](../content/d2d3bbc2-6e57-4043-ab24-988a6a6c88db.md)
- [Prohibited Applications Spawning cmd.exe or powershell.exe](../content/fc36d683-385a-4ec2-842d-2982dbed97a4.md)
- [Proxy VBScript Execution via CurrentVersion Registry Key](../content/3ac1e703-3ed0-45e1-ae1d-0fa60baf99fb.md)
- [Rundll32 or cmd Executing Application from Explorer - Potential Malware Execution Chain](../content/3bc6e8ef-9e08-4626-89e9-fda87866cc82.md)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Certutil (LOLBins and LOLScripts, Normalized Process Events)](../content/eb022863-9ae2-41d4-b633-29e4d024b76f.md)
- [Persisting via IFEO Registry Key](../content/f82c89fa-c969-4d12-832f-04d55d14522c.md)
- [Potential Microsoft Security Services Tampering](../content/e10e1d2f-265d-4d90-9037-7f3a6ed8a91e.md)
- [Rare Windows Firewall Rule updates using Netsh](../content/e3e8c913-e5e9-4517-b4f7-dd1ec071888f.md)
- [Remote Login Performed with WMI](../content/8f658a80-7fa9-4524-a95b-d9ab608e8850.md)
- [Remote Scheduled Task Creation or Update using ATSVC Named Pipe](../content/7aad876a-a6fe-4c11-879e-8b29d35ff739.md)
- [Scheduled Task Creation or Update from User Writable Directory](../content/0b827a49-427e-4721-b05e-b151a8af524e.md)
- [Windows System Shutdown/Reboot (Normalized Process Events)](../content/5db1f6f9-9de9-43a9-b7cc-357486b42fc6.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Hash](../content/0051a0d9-684f-4317-abbd-c1e5c24b39cb.md)
- [Google Threat Intelligence - Threat Hunting IP](../content/faa83502-2763-49ae-9216-e576fa1fdccb.md)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**
- [Dev-0322 File Drop Activity November 2021 (ASIM Version)](../content/9b72769e-6ab1-4736-988b-018d92dc5e62.md)
- [Known Nylon Typhoon Registry modifications patterns](../content/f090f8f4a-b986-42d2-b536-e0795c723e25.md)
- [SolarWinds Inventory](../content/278592b5-612b-48a4-bb38-4c01ff8ee2a5.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect File Creation in Startup Folder](../content/64e199a8-b26c-462f-a65c-09ed9b53a47b.md)
- [Detect Files with Ramsomware Extensions](../content/595aea5c-74c7-415b-8b12-10af1a338cdf.md)
- [Detect Modification to System Files or Directories by User Accounts](../content/54b222c4-0149-421e-9d6d-da66da50495a.md)
- [Detect New Scheduled Task Creation that Run Executables From Non-Standard Location](../content/b43394b9-fa91-4d98-b331-619926a933bb.md)
- [Detect New Scheduled Task Entry Creations](../content/4dc0aae4-6375-4670-b138-8c42490ba206.md)
- [Executable Files Created in Uncommon Locations](../content/ab8ddb26-050c-40aa-aaf0-bfb7e3eeb05f.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [Detect Outbound LDAP Traffic(ASIM Network Session schema)](../content/5dca6047-24ed-4eb7-b44e-ec7f1bf42621.md)
- [Detect port misuse by anomaly (ASIM Network Session schema)](../content/906c20c6-b62c-4af7-be91-d7300e3bded2.md)
- [Detect port misuse by static threshold (ASIM Network Session schema)](../content/70e2a349-87f0-4266-809c-e92fc71e0830.md)
- [Detects several users with the same MAC address (ASIM Network Session schema)](../content/cbe10c58-e96b-4827-853e-5c1f22fdcc74.md)
- [Mismatch between Destination App name and Destination Port (ASIM Network Session schema)](../content/a61e9fc1-dd9e-4588-a497-2a34a1d811bf.md)
- [Protocols passing authentication in cleartext (ASIM Network Session schema)](../content/96f9fdd1-bb5b-4d32-8790-666457dc00c0.md)
- [Remote Desktop Network Traffic(ASIM Network Session schema)](../content/6fd69768-fdf1-4cfd-805f-b243be3f0c6d.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Hash All Actors](../content/905da21a-c7d2-4f5b-b8fc-c8321da3ee83.md)
- [RecordedFuture Threat Hunting IP All Actors](../content/7b5eb44d-3533-440e-9774-73a4d99bc2b2.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map File Entity to Security Event](../content/233441b9-cc92-4c9b-87fa-73b855fcd4b8.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI Map File Entity to Security Event](../content/10f83299-c4e6-4af8-9627-5f9448dee24a.md)

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [AD Account Lockout](../content/a308d780-1c39-4fa7-8c21-bb54f174b065.md)
- [Crash dump disabled on host](../content/5a3615af-21c9-427e-8bf1-ed2350992bb4.md)
- [Cscript script daily summary breakdown](../content/36abe031-962d-482e-8e1e-a556ed99d5a3.md)
- [Decoy User Account Authentication Attempt](../content/a4dbc292-87eb-11ec-a8a3-0242ac120002.md)
- [Discord download invoked from cmd line](../content/e7dd442a-0af8-48eb-8358-9e91f4911849.md)
- [Entropy for Processes for a given Host](../content/05208917-82de-46f7-a190-a65739a690f4.md)
- [Enumeration of users and groups](../content/a1e993de-770a-4434-83e9-9e3b47a6e470.md)
- [Exchange PowerShell Snapin Added](../content/8afd1086-fc9a-4d26-b3ff-5c794c79a59a.md)
- [Group added to Built in Domain Local or Global Group](../content/cb47a115-2616-4d56-890d-b28c14bc83e4.md)
- [Host Exporting Mailbox and Removing Export](../content/2e2fab4b-83dd-4cf8-b2dd-063d0fd15513.md)
- [Hosts Running a Rare Process](../content/82e04ff9-a289-4005-9fcd-f1deec72e3fc.md)
- [Hosts Running a Rare Process with Commandline](../content/5550b630-7b8a-444e-a585-ec8c7533c028.md)
- [Hosts with new logons](../content/62e2df59-1535-4c8e-ac6c-c91faeed0179.md)
- [Invoke-PowerShellTcpOneLine Usage.](../content/a344e28e-095d-47fb-84a8-d06edd31d2cb.md)
- [Least Common Parent And Child Process Pairs](../content/3712595d-6f47-416b-963a-605201ed2764.md)
- [Least Common Processes Including Folder Depth](../content/6d04a1ef-1b4d-4ff8-a76c-ad7d1a396136.md)
- [Least Common Processes by Command Line](../content/088d30e9-c02b-46b1-bd1f-d5b6d6b782f0.md)
- [Long lookback User Account Created and Deleted within 10mins](../content/6135a90e-ba30-4f36-9b6a-3a350050704b.md)
- [Masquerading files](../content/60304ebf-ebdd-4869-a702-e0216d90ab46.md)
- [Multiple Explicit Credential Usage - 4648 events](../content/9e3fab4b-94dd-4cf9-b2aa-063d0fd25513.md)
- [New Child Process of W3WP.exe](../content/f885fb16-dfd3-4c90-83d9-7a66b9d9b654.md)
- [New PowerShell scripts encoded on the commandline](../content/4e78daf1-8bba-4b5d-8a8b-c75fe9bbc2d9.md)
- [New processes observed in last 24 hours](../content/513e3a11-e1bb-4cfc-8af9-451da0407e6b.md)
- [Nishang Reverse TCP Shell in Base64](../content/87c1f90a-f868-4528-a9c1-15520249cae6.md)
- [Potential Exploitation of MS-RPRN printer bug](../content/c29a03c6-d074-4934-afae-df1aeb30da70.md)
- [PowerShell downloads](../content/d83f40fc-bbcc-4020-8d45-ad2d82355cb2.md)
- [Powercat Download](../content/c2112ca3-aae0-4079-9bff-d74c54bb5fe5.md)
- [Rare Process Path](../content/0ff22697-dc58-4623-b844-a767629840cd.md)
- [Rare Processes Run by Service Accounts](../content/af02987c-949d-47d5-b0ae-64d8e1b674e2.md)
- [Remote Task Creation/Update using Schtasks Process](../content/1e4a5be3-4a60-4099-b286-2d3642575889.md)
- [Summary of failed user logons by reason of failure](../content/e7642e6e-cf27-46ec-a4b9-e4475228fead.md)
- [Summary of user logons by logon type](../content/d0f13bb9-e713-4f89-b610-1806326a1dea.md)
- [Summary of users created using uncommon/undocumented commandline switches](../content/5e76eaf9-79a7-448c-bace-28e5b53b8396.md)
- [Suspected LSASS Dump](../content/58fe8fc8-54fa-48cd-bac3-197f8d862429.md)
- [Suspicious Enumeration using Adfind Tool](../content/dd6fb889-43ef-44e1-a01d-093ab4bb12b2.md)
- [Suspicious Windows Login Outside Normal Hours](../content/e7bfbc3f-98c7-4aaa-a64c-de9c058b86b2.md)
- [Suspicious command line tokens in LolBins or LolScripts](../content/6cdef739-18f6-4b3a-8fdc-93e9a4302dbf.md)
- [Uncommon processes - bottom 5%](../content/2ff4b10c-7056-4898-83fd-774104189fd5.md)
- [User Account added to Built in Sensitive or Privileged Domain Local or Global Group](../content/8d69a665-074a-443b-aae6-5dd9bdd5cfb1.md)
- [User account added or removed from a security group by an unauthorized user](../content/d57f675c-ad6c-44d0-95fb-3bf707e70155.md)
- [User created by unauthorized user](../content/42ae9690-89ce-4063-9a90-465badad5395.md)
- [VIP account more than 6 failed logons in 10](../content/892cd37e-f9e1-49c3-b0b2-d74f52ac7b71.md)
- [VIP account more than 6 failed logons in 10](../content/e8d36582-c403-4466-bd44-ebede5b6fa6e.md)
- [Windows System Time changed on hosts](../content/9fd6f61d-2cc3-48de-acf5-7194e78d6ea1.md)

### Workbooks (19)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation.md)

**In solution [EatonForeseer](../solutions/eatonforeseer.md):**
- [EatonForeseerHealthAndAccess](../content/eatonforeseerhealthandaccess-eatonforeseer.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [MalwareProtectionEssentialsWorkbook](../content/malwareprotectionessentialsworkbook-malware-protection-essentials.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagement-m2131-maturitymodelforeventlogmanagementm2131.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [InsiderRiskManagement](../content/insiderriskmanagement-microsoftpurviewinsiderriskmanagement.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [NetworkSessionEssentials](../content/networksessionessentials-network-session-essentials.md)
- [NetworkSessionEssentialsV2](../content/networksessionessentialsv2-network-session-essentials.md)

**In solution [PCI DSS Compliance](../solutions/pci-dss-compliance.md):**
- [PCIDSSCompliance](../content/pcidsscompliance-pci-dss-compliance.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [InvestigationInsights](../content/investigationinsights-soc-handbook.md)
- [SecurityStatus](../content/securitystatus-soc-handbook.md)

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):**
- [SOXITCompliance](../content/soxitcompliance-sox-it-compliance.md)

**In solution [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md):**
- [SemperisDSPNotifications](../content/semperisdspnotifications-semperis-directory-services-protector.md)
- [SemperisDSPQuickviewDashboard](../content/semperisdspquickviewdashboard-semperis-directory-services-protector.md)
- [SemperisDSPSecurityIndicators](../content/semperisdspsecurityindicators-semperis-directory-services-protector.md)
- [SemperisDSPWorkbook](../content/semperisdspworkbook-semperis-directory-services-protector.md)

**In solution [Windows Firewall](../solutions/windows-firewall.md):**
- [WindowsFirewall](../content/windowsfirewall-windows-firewall.md)

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [EventAnalyzer](../content/eventanalyzer-windows-security-events.md)
- [IdentityAndAccess](../content/identityandaccess-windows-security-events.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/securityinsights`
- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content-index.md)
