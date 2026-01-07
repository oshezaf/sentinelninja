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
- [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Network Session Essentials](../solutions/network-session-essentials.md)
- [PCI DSS Compliance](../solutions/pci-dss-compliance.md)
- [Recorded Future](../solutions/recorded-future.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
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

## Content Items Using This Table (153)

### Analytic Rules (53)

**In solution [EatonForeseer](../solutions/eatonforeseer.md):**
- [EatonForeseer - Unauthorized Logins](../content/eatonforeseer-eatonforeseer-unauthorized-logins-5a7fccb8-3ed0-44f2-8477-540af3ef4d92-5a9d46ba.md)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Potential Remote Desktop Tunneling](../content/endpoint-threat-protection-essentials-potential-remote-desktop-tunneling-d2e8fd50-8d66-11ec-b909-0242ac120002-811dbf83.md)
- [Security Event log cleared](../content/endpoint-threat-protection-essentials-security-event-log-cleared-80da0a8f-cfe1-4cd0-a895-8bc1771a720e-2f5b4cb9.md)
- [Windows Binaries Executed from Non-Default Directory](../content/endpoint-threat-protection-essentials-windows-binaries-executed-from-non-default-directory-15049017-527f-4d3b-b011-b0e99e68ef45-75e820c5.md)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [Certified Pre-Owned - TGTs requested with certificate authentication](../content/falconfriday-certified-pre-owned-tgts-requested-with-certificate-authentication-b838a13c-052e-45b8-a5ac-7d3eb62efa11-8b984753.md)
- [Certified Pre-Owned - backup of CA private key - rule 1](../content/falconfriday-certified-pre-owned-backup-of-ca-private-key-rule-1-aa5eaac7-1264-4833-b620-8f062be75541-ac010cd6.md)
- [Certified Pre-Owned - backup of CA private key - rule 2](../content/falconfriday-certified-pre-owned-backup-of-ca-private-key-rule-2-88f8fbc0-345d-458e-85f6-f73921d5ef50-fbc7bd12.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-hash-8f9cd0e5-b4ab-4821-95e2-1082fcd784c7-681b75ff.md)
- [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-ip-7edb2abb-7ef7-4685-92eb-a628703ccf9f-694732dc.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoise TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-network-session-events-asim-network-session-sc-536e8e5c-ce0e-575e-bcc9-aba8e7bf9316-294d0914.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI IPAddress in SecurityEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-securityevents-140a2cb5-4b4a-485c-aab3-2415c24d37e6-27374577.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect Malicious Usage of Recovery Tools to Delete Backup Files](../content/malware-protection-essentials-detect-malicious-usage-of-recovery-tools-to-delete-backup-files-259de2c1-c546-4c6d-a17c-df639722f4d7-f1d64838.md)
- [Detect Print Processors Registry Driver Key Creation/Modification](../content/malware-protection-essentials-detect-print-processors-registry-driver-key-creation-modification-7edde3d4-9859-4a00-b93c-b19ddda55320-f9f0f5d0.md)
- [Detect Registry Run Key Creation/Modification](../content/malware-protection-essentials-detect-registry-run-key-creation-modification-dd041e4e-1ee2-41ec-ba4e-82a71d628260-bcf60f87.md)
- [Detect Windows Allow Firewall Rule Addition/Modification](../content/malware-protection-essentials-detect-windows-allow-firewall-rule-addition-modification-056593d4-ca3b-47a7-be9d-d1d0884a1d36-0da604bb.md)
- [Detect Windows Update Disabled from Registry](../content/malware-protection-essentials-detect-windows-update-disabled-from-registry-f1443a87-78d5-40c3-b051-f468f0f2def0-9957e6e8.md)
- [Process Creation with Suspicious CommandLine Arguments](../content/malware-protection-essentials-process-creation-with-suspicious-commandline-arguments-fdbcc0eb-44fb-467e-a51d-a91df0780a81-fc1c4a27.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Imminent Ransomware](../content/microsoft-defender-xdr-imminent-ransomware-bb46dd86-e642-48a4-975c-44f5ac2b5033-87169ff1.md)
- [Possible Phishing with CSL and Network Sessions](../content/microsoft-defender-xdr-possible-phishing-with-csl-and-network-sessions-6c3a1258-bcdd-4fcd-b753-1a9bc826ce12-631549a4.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [Anomaly found in Network Session Traffic (ASIM Network Session schema)](../content/network-session-essentials-anomaly-found-in-network-session-traffic-asim-network-session-schema-cd6def0d-3ef0-4d55-a7e3-faa96c46ba12-0317d139.md)
- [Anomaly in SMB Traffic(ASIM Network Session schema)](../content/network-session-essentials-anomaly-in-smb-traffic-asim-network-session-schema-8717e498-7b5d-4e23-9e7c-fa4913dbfd79-5689a38d.md)
- [Detect port misuse by anomaly based detection (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-anomaly-based-detection-asim-network-session-schema-cbf07406-fa2a-48b0-82b8-efad58db14ec-0bc6af2a.md)
- [Detect port misuse by static threshold (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-static-threshold-asim-network-session-schema-156997bd-da0f-4729-b47a-0a3e02dd50c8-8ef7d8bb.md)
- [Excessive number of failed connections from a single source (ASIM Network Session schema)](../content/network-session-essentials-excessive-number-of-failed-connections-from-a-single-source-asim-network-sess-4902eddb-34f7-44a8-ac94-8486366e9494-210dc868.md)
- [Network Port Sweep from External Network (ASIM Network Session schema)](../content/network-session-essentials-network-port-sweep-from-external-network-asim-network-session-schema-cd8faa84-4464-4b4e-96dc-b22f50c27541-330ca527.md)
- [Port scan detected  (ASIM Network Session schema)](../content/network-session-essentials-port-scan-detected-asim-network-session-schema-1da9853f-3dea-4ea9-b7e5-26730da3d537-7c6a0649.md)
- [Potential beaconing activity (ASIM Network Session schema)](../content/network-session-essentials-potential-beaconing-activity-asim-network-session-schema-fcb9d75c-c3c1-4910-8697-f136bfef2363-a9186e67.md)
- [Remote Desktop Network Brute force (ASIM Network Session schema)](../content/network-session-essentials-remote-desktop-network-brute-force-asim-network-session-schema-b7dc801e-1e79-48bb-91e8-2229a8e6d40b-c413aad1.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting IP All Actors](../content/recorded-future-recordedfuture-threat-hunting-ip-all-actors-e31bc14e-2b4c-42a4-af34-5bfd7d768aea-57f811e9.md)

**In solution [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md):**
- [Semperis DSP Failed Logons](../content/semperis-directory-services-protector-semperis-dsp-failed-logons-0e105444-fe13-4ce6-9239-21880076a3f9-2263251b.md)
- [Semperis DSP Operations Critical Notifications](../content/semperis-directory-services-protector-semperis-dsp-operations-critical-notifications-8f471e21-3bb2-466f-9bc2-0a0326a60788-3ceee4d9.md)
- [Semperis DSP RBAC Changes](../content/semperis-directory-services-protector-semperis-dsp-rbac-changes-e5edf3f3-de53-45e6-b0d7-1ce1c048df4a-21be9fb7.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threat-intelligence-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-e2399891-383c-4caf-ae67-68a008b9f89e-f1153622.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threat-intelligence-new-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-54f4ceb4-fd83-4633-b5b0-c0de9feb8890-4e169efc.md)

**In solution [ThreatConnect](../solutions/threatconnect.md):**
- [ThreatConnect TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threatconnect-threatconnect-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-ee1fd303-2081-47b7-8f02-e38bfd0868e6-1359f109.md)

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**
- [Identify SysAid Server web shell creation](../content/web-shells-threat-protection-identify-sysaid-server-web-shell-creation-50eb4cbd-188f-44f4-b964-bab84dcdec10-5faaa2d1.md)

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [AD FS Remote Auth Sync Connection](../content/windows-security-events-ad-fs-remote-auth-sync-connection-2f4165a6-c4fb-4e94-861e-37f1b4d6c0e6-a47c2516.md)
- [Excessive Windows Logon Failures](../content/windows-security-events-excessive-windows-logon-failures-2391ce61-8c8d-41ac-9723-d945b2e90720-36e38369.md)
- [Exchange OAB Virtual Directory Attribute Containing Potential Webshell](../content/windows-security-events-exchange-oab-virtual-directory-attribute-containing-potential-webshell-faf1a6ff-53b5-4f92-8c55-4b20e9957594-0a1c5425.md)
- [Gain Code Execution on ADFS Server via SMB + Remote Service or Scheduled Task](../content/windows-security-events-gain-code-execution-on-adfs-server-via-smb-+-remote-service-or-scheduled-task-12dcea64-bec2-41c9-9df2-9f28461b1295-478b123d.md)
- [Microsoft Entra ID Local Device Join Information and Transport Key Registry Keys Access](../content/windows-security-events-microsoft-entra-id-local-device-join-information-and-transport-key-registry-keys-a356c8bd-c81d-428b-aa36-83be706be034-52ba1a8d.md)
- [NRT Base64 Encoded Windows Process Command-lines](../content/windows-security-events-nrt-base64-encoded-windows-process-command-lines-c3e5dbaa-a540-408c-8b36-68bdfb3df088-bed67057.md)
- [NRT Process executed from binary hidden in Base64 encoded file](../content/windows-security-events-nrt-process-executed-from-binary-hidden-in-base64-encoded-file-7ad4c32b-d0d2-411c-a0e8-b557afa12fce-92d97690.md)
- [NRT Security Event log cleared](../content/windows-security-events-nrt-security-event-log-cleared-508cef41-2cd8-4d40-a519-b04826a9085f-67c5b6b4.md)
- [New EXE deployed via Default Domain or Default Domain Controller Policies](../content/windows-security-events-new-exe-deployed-via-default-domain-or-default-domain-controller-policies-05b4bccd-dd12-423d-8de4-5a6fb526bb4f-aa6653ca.md)
- [Non Domain Controller Active Directory Replication](../content/windows-security-events-non-domain-controller-active-directory-replication-b9d2eebc-5dcb-4888-8165-900db44443ab-b36ed5cd.md)
- [Potential Fodhelper UAC Bypass](../content/windows-security-events-potential-fodhelper-uac-bypass-56f3f35c-3aca-4437-a1fb-b7a84dc4af00-9be2fced.md)
- [Potential re-named sdelete usage](../content/windows-security-events-potential-re-named-sdelete-usage-720d12c6-a08c-44c4-b18f-2236412d59b0-d334efe2.md)
- [Process Execution Frequency Anomaly](../content/windows-security-events-process-execution-frequency-anomaly-2c55fe7a-b06f-4029-a5b9-c54a2320d7b8-7d56da33.md)
- [Scheduled Task Hide](../content/windows-security-events-scheduled-task-hide-6dd2629c-534b-4275-8201-d7968b4fa77e-3293d2af.md)
- [Sdelete deployed via GPO and run recursively](../content/windows-security-events-sdelete-deployed-via-gpo-and-run-recursively-d9f28fdf-abc8-4f1a-a7e7-1aaec87a2fc5-8f72bd3c.md)
- [SecurityEvent - Multiple authentication failures followed by a success](../content/windows-security-events-securityevent-multiple-authentication-failures-followed-by-a-success-cf3ede88-a429-493b-9108-3e46d3c741f7-2bfab486.md)
- [Starting or Stopping HealthService to Avoid Detection](../content/windows-security-events-starting-or-stopping-healthservice-to-avoid-detection-2bc7b4ae-eeaa-4538-ba15-ef298ec1ffae-cde90857.md)

### Hunting Queries (82)

**In solution [Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md):**
- [Attempted VBScript Stored in Non-Run CurrentVersion Registry Key Value](../content/cyborg-security-hunter-attempted-vbscript-stored-in-non-run-currentversion-registry-key-value-d7233f14-4705-403e-9db9-e0d677c9506b-73ff2c75.md)
- [Excessive Windows Discovery and Execution Processes - Potential Malware Installation](../content/cyborg-security-hunter-excessive-windows-discovery-and-execution-processes-potential-malware-installatio-6d1c9f13-e43e-4b52-a443-5799465d573b-01b94334.md)
- [LSASS Memory Dumping using WerFault.exe - Command Identification](../content/cyborg-security-hunter-lsass-memory-dumping-using-werfault.exe-command-identification-4894a60b-d2ee-4f24-be61-0d0c96a84e63-4b9d94b1.md)
- [Metasploit / Impacket PsExec Process Creation Activity](../content/cyborg-security-hunter-metasploit-impacket-psexec-process-creation-activity-37cba0d1-8aa5-4f8f-bb26-25a45475ca9a-bc3bb419.md)
- [Potential Maldoc Execution Chain Observed](../content/cyborg-security-hunter-potential-maldoc-execution-chain-observed-b194088b-c846-4c72-a4b7-933627878db4-47180af7.md)
- [PowerShell Pastebin Download](../content/cyborg-security-hunter-powershell-pastebin-download-e186a8af-3d4a-4003-93b7-9b199e0b1dd1-3dd8ecd4.md)
- [Powershell Encoded Command Execution](../content/cyborg-security-hunter-powershell-encoded-command-execution-d2d3bbc2-6e57-4043-ab24-988a6a6c88db-40d11177.md)
- [Prohibited Applications Spawning cmd.exe or powershell.exe](../content/cyborg-security-hunter-prohibited-applications-spawning-cmd.exe-or-powershell.exe-fc36d683-385a-4ec2-842d-2982dbed97a4-e72a0598.md)
- [Proxy VBScript Execution via CurrentVersion Registry Key](../content/cyborg-security-hunter-proxy-vbscript-execution-via-currentversion-registry-key-3ac1e703-3ed0-45e1-ae1d-0fa60baf99fb-df6259d3.md)
- [Rundll32 or cmd Executing Application from Explorer - Potential Malware Execution Chain](../content/cyborg-security-hunter-rundll32-or-cmd-executing-application-from-explorer-potential-malware-execution-c-3bc6e8ef-9e08-4626-89e9-fda87866cc82-3815ee01.md)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Certutil (LOLBins and LOLScripts, Normalized Process Events)](../content/endpoint-threat-protection-essentials-certutil-lolbins-and-lolscripts,-normalized-process-events-eb022863-9ae2-41d4-b633-29e4d024b76f-bf894765.md)
- [Persisting via IFEO Registry Key](../content/endpoint-threat-protection-essentials-persisting-via-ifeo-registry-key-f82c89fa-c969-4d12-832f-04d55d14522c-6020db66.md)
- [Potential Microsoft Security Services Tampering](../content/endpoint-threat-protection-essentials-potential-microsoft-security-services-tampering-e10e1d2f-265d-4d90-9037-7f3a6ed8a91e-8c1dc76e.md)
- [Rare Windows Firewall Rule updates using Netsh](../content/endpoint-threat-protection-essentials-rare-windows-firewall-rule-updates-using-netsh-e3e8c913-e5e9-4517-b4f7-dd1ec071888f-d0fef21e.md)
- [Remote Login Performed with WMI](../content/endpoint-threat-protection-essentials-remote-login-performed-with-wmi-8f658a80-7fa9-4524-a95b-d9ab608e8850-57d50f63.md)
- [Remote Scheduled Task Creation or Update using ATSVC Named Pipe](../content/endpoint-threat-protection-essentials-remote-scheduled-task-creation-or-update-using-atsvc-named-pipe-7aad876a-a6fe-4c11-879e-8b29d35ff739-f9a3a936.md)
- [Scheduled Task Creation or Update from User Writable Directory](../content/endpoint-threat-protection-essentials-scheduled-task-creation-or-update-from-user-writable-directory-0b827a49-427e-4721-b05e-b151a8af524e-f6c2b013.md)
- [Windows System Shutdown/Reboot (Normalized Process Events)](../content/endpoint-threat-protection-essentials-windows-system-shutdown-reboot-normalized-process-events-5db1f6f9-9de9-43a9-b7cc-357486b42fc6-4a6147b7.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-hash-0051a0d9-684f-4317-abbd-c1e5c24b39cb-5660b61d.md)
- [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-ip-faa83502-2763-49ae-9216-e576fa1fdccb-c11a3364.md)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**
- [Known Nylon Typhoon Registry modifications patterns](../content/legacy-ioc-based-threat-protection-known-nylon-typhoon-registry-modifications-patterns-f090f8f4a-b986-42d2-b536-e0795c723e25-f442d105.md)
- [SolarWinds Inventory](../content/legacy-ioc-based-threat-protection-solarwinds-inventory-278592b5-612b-48a4-bb38-4c01ff8ee2a5-c7f23741.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect File Creation in Startup Folder](../content/malware-protection-essentials-detect-file-creation-in-startup-folder-64e199a8-b26c-462f-a65c-09ed9b53a47b-2d1178e6.md)
- [Detect Files with Ramsomware Extensions](../content/malware-protection-essentials-detect-files-with-ramsomware-extensions-595aea5c-74c7-415b-8b12-10af1a338cdf-d88185c4.md)
- [Detect Modification to System Files or Directories by User Accounts](../content/malware-protection-essentials-detect-modification-to-system-files-or-directories-by-user-accounts-54b222c4-0149-421e-9d6d-da66da50495a-78cf8ebf.md)
- [Detect New Scheduled Task Creation that Run Executables From Non-Standard Location](../content/malware-protection-essentials-detect-new-scheduled-task-creation-that-run-executables-from-non-standard--b43394b9-fa91-4d98-b331-619926a933bb-d0df99aa.md)
- [Detect New Scheduled Task Entry Creations](../content/malware-protection-essentials-detect-new-scheduled-task-entry-creations-4dc0aae4-6375-4670-b138-8c42490ba206-84bcf125.md)
- [Executable Files Created in Uncommon Locations](../content/malware-protection-essentials-executable-files-created-in-uncommon-locations-ab8ddb26-050c-40aa-aaf0-bfb7e3eeb05f-1af678b6.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [Detect Outbound LDAP Traffic(ASIM Network Session schema)](../content/network-session-essentials-detect-outbound-ldap-traffic-asim-network-session-schema-5dca6047-24ed-4eb7-b44e-ec7f1bf42621-c96df1ab.md)
- [Detect port misuse by anomaly (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-anomaly-asim-network-session-schema-906c20c6-b62c-4af7-be91-d7300e3bded2-d8a6fcbc.md)
- [Detect port misuse by static threshold (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-static-threshold-asim-network-session-schema-70e2a349-87f0-4266-809c-e92fc71e0830-c23666f7.md)
- [Detects several users with the same MAC address (ASIM Network Session schema)](../content/network-session-essentials-detects-several-users-with-the-same-mac-address-asim-network-session-schema-cbe10c58-e96b-4827-853e-5c1f22fdcc74-aa0b75c3.md)
- [Mismatch between Destination App name and Destination Port (ASIM Network Session schema)](../content/network-session-essentials-mismatch-between-destination-app-name-and-destination-port-asim-network-sessi-a61e9fc1-dd9e-4588-a497-2a34a1d811bf-f510f729.md)
- [Protocols passing authentication in cleartext (ASIM Network Session schema)](../content/network-session-essentials-protocols-passing-authentication-in-cleartext-asim-network-session-schema-96f9fdd1-bb5b-4d32-8790-666457dc00c0-81fda166.md)
- [Remote Desktop Network Traffic(ASIM Network Session schema)](../content/network-session-essentials-remote-desktop-network-traffic-asim-network-session-schema-6fd69768-fdf1-4cfd-805f-b243be3f0c6d-7fef6a2e.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting IP All Actors](../content/recorded-future-recordedfuture-threat-hunting-ip-all-actors-7b5eb44d-3533-440e-9774-73a4d99bc2b2-0bac2271.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map File Entity to Security Event](../content/threat-intelligence-ti-map-file-entity-to-security-event-233441b9-cc92-4c9b-87fa-73b855fcd4b8-14557cf7.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI Map File Entity to Security Event](../content/threat-intelligence-new-ti-map-file-entity-to-security-event-10f83299-c4e6-4af8-9627-5f9448dee24a-3651af8f.md)

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [AD Account Lockout](../content/windows-security-events-ad-account-lockout-a308d780-1c39-4fa7-8c21-bb54f174b065-798b810f.md)
- [Crash dump disabled on host](../content/windows-security-events-crash-dump-disabled-on-host-5a3615af-21c9-427e-8bf1-ed2350992bb4-8623f73e.md)
- [Cscript script daily summary breakdown](../content/windows-security-events-cscript-script-daily-summary-breakdown-36abe031-962d-482e-8e1e-a556ed99d5a3-056955b7.md)
- [Decoy User Account Authentication Attempt](../content/windows-security-events-decoy-user-account-authentication-attempt-a4dbc292-87eb-11ec-a8a3-0242ac120002-38f94fe7.md)
- [Discord download invoked from cmd line](../content/windows-security-events-discord-download-invoked-from-cmd-line-e7dd442a-0af8-48eb-8358-9e91f4911849-404b8911.md)
- [Entropy for Processes for a given Host](../content/windows-security-events-entropy-for-processes-for-a-given-host-05208917-82de-46f7-a190-a65739a690f4-59ba7296.md)
- [Enumeration of users and groups](../content/windows-security-events-enumeration-of-users-and-groups-a1e993de-770a-4434-83e9-9e3b47a6e470-31ff9f63.md)
- [Exchange PowerShell Snapin Added](../content/windows-security-events-exchange-powershell-snapin-added-8afd1086-fc9a-4d26-b3ff-5c794c79a59a-8e25d87f.md)
- [Group added to Built in Domain Local or Global Group](../content/windows-security-events-group-added-to-built-in-domain-local-or-global-group-cb47a115-2616-4d56-890d-b28c14bc83e4-cbcd997b.md)
- [Host Exporting Mailbox and Removing Export](../content/windows-security-events-host-exporting-mailbox-and-removing-export-2e2fab4b-83dd-4cf8-b2dd-063d0fd15513-f6188024.md)
- [Hosts Running a Rare Process](../content/windows-security-events-hosts-running-a-rare-process-82e04ff9-a289-4005-9fcd-f1deec72e3fc-91003c14.md)
- [Hosts Running a Rare Process with Commandline](../content/windows-security-events-hosts-running-a-rare-process-with-commandline-5550b630-7b8a-444e-a585-ec8c7533c028-2ae5a42b.md)
- [Hosts with new logons](../content/windows-security-events-hosts-with-new-logons-62e2df59-1535-4c8e-ac6c-c91faeed0179-01cac37a.md)
- [Invoke-PowerShellTcpOneLine Usage.](../content/windows-security-events-invoke-powershelltcponeline-usage.-a344e28e-095d-47fb-84a8-d06edd31d2cb-5e9d5425.md)
- [Least Common Parent And Child Process Pairs](../content/windows-security-events-least-common-parent-and-child-process-pairs-3712595d-6f47-416b-963a-605201ed2764-304136a9.md)
- [Least Common Processes Including Folder Depth](../content/windows-security-events-least-common-processes-including-folder-depth-6d04a1ef-1b4d-4ff8-a76c-ad7d1a396136-6a4e1ff5.md)
- [Least Common Processes by Command Line](../content/windows-security-events-least-common-processes-by-command-line-088d30e9-c02b-46b1-bd1f-d5b6d6b782f0-21ac6383.md)
- [Long lookback User Account Created and Deleted within 10mins](../content/windows-security-events-long-lookback-user-account-created-and-deleted-within-10mins-6135a90e-ba30-4f36-9b6a-3a350050704b-6a4acaf0.md)
- [Masquerading files](../content/windows-security-events-masquerading-files-60304ebf-ebdd-4869-a702-e0216d90ab46-fbac27a6.md)
- [Multiple Explicit Credential Usage - 4648 events](../content/windows-security-events-multiple-explicit-credential-usage-4648-events-9e3fab4b-94dd-4cf9-b2aa-063d0fd25513-bf7d18d4.md)
- [New Child Process of W3WP.exe](../content/windows-security-events-new-child-process-of-w3wp.exe-f885fb16-dfd3-4c90-83d9-7a66b9d9b654-75c40006.md)
- [New PowerShell scripts encoded on the commandline](../content/windows-security-events-new-powershell-scripts-encoded-on-the-commandline-4e78daf1-8bba-4b5d-8a8b-c75fe9bbc2d9-fc78c747.md)
- [New processes observed in last 24 hours](../content/windows-security-events-new-processes-observed-in-last-24-hours-513e3a11-e1bb-4cfc-8af9-451da0407e6b-2f72302d.md)
- [Nishang Reverse TCP Shell in Base64](../content/windows-security-events-nishang-reverse-tcp-shell-in-base64-87c1f90a-f868-4528-a9c1-15520249cae6-29ac834c.md)
- [Potential Exploitation of MS-RPRN printer bug](../content/windows-security-events-potential-exploitation-of-ms-rprn-printer-bug-c29a03c6-d074-4934-afae-df1aeb30da70-2d22b8de.md)
- [PowerShell downloads](../content/windows-security-events-powershell-downloads-d83f40fc-bbcc-4020-8d45-ad2d82355cb2-eb98129c.md)
- [Powercat Download](../content/windows-security-events-powercat-download-c2112ca3-aae0-4079-9bff-d74c54bb5fe5-e8217682.md)
- [Rare Process Path](../content/windows-security-events-rare-process-path-0ff22697-dc58-4623-b844-a767629840cd-668afb9c.md)
- [Rare Processes Run by Service Accounts](../content/windows-security-events-rare-processes-run-by-service-accounts-af02987c-949d-47d5-b0ae-64d8e1b674e2-173a9ff0.md)
- [Remote Task Creation/Update using Schtasks Process](../content/windows-security-events-remote-task-creation-update-using-schtasks-process-1e4a5be3-4a60-4099-b286-2d3642575889-38edc3ad.md)
- [Summary of failed user logons by reason of failure](../content/windows-security-events-summary-of-failed-user-logons-by-reason-of-failure-e7642e6e-cf27-46ec-a4b9-e4475228fead-bc8b05cf.md)
- [Summary of user logons by logon type](../content/windows-security-events-summary-of-user-logons-by-logon-type-d0f13bb9-e713-4f89-b610-1806326a1dea-12378152.md)
- [Summary of users created using uncommon/undocumented commandline switches](../content/windows-security-events-summary-of-users-created-using-uncommon-undocumented-commandline-switches-5e76eaf9-79a7-448c-bace-28e5b53b8396-824f28e4.md)
- [Suspected LSASS Dump](../content/windows-security-events-suspected-lsass-dump-58fe8fc8-54fa-48cd-bac3-197f8d862429-8666c9e8.md)
- [Suspicious Enumeration using Adfind Tool](../content/windows-security-events-suspicious-enumeration-using-adfind-tool-dd6fb889-43ef-44e1-a01d-093ab4bb12b2-fef95624.md)
- [Suspicious Windows Login Outside Normal Hours](../content/windows-security-events-suspicious-windows-login-outside-normal-hours-e7bfbc3f-98c7-4aaa-a64c-de9c058b86b2-15ccdfd0.md)
- [Suspicious command line tokens in LolBins or LolScripts](../content/windows-security-events-suspicious-command-line-tokens-in-lolbins-or-lolscripts-6cdef739-18f6-4b3a-8fdc-93e9a4302dbf-46ec7a62.md)
- [Uncommon processes - bottom 5%](../content/windows-security-events-uncommon-processes-bottom-5-2ff4b10c-7056-4898-83fd-774104189fd5-2ef29fea.md)
- [User Account added to Built in Sensitive or Privileged Domain Local or Global Group](../content/windows-security-events-user-account-added-to-built-in-sensitive-or-privileged-domain-local-or-global-gr-8d69a665-074a-443b-aae6-5dd9bdd5cfb1-0118579e.md)
- [User account added or removed from a security group by an unauthorized user](../content/windows-security-events-user-account-added-or-removed-from-a-security-group-by-an-unauthorized-user-d57f675c-ad6c-44d0-95fb-3bf707e70155-3834c59d.md)
- [User created by unauthorized user](../content/windows-security-events-user-created-by-unauthorized-user-42ae9690-89ce-4063-9a90-465badad5395-6cbb1bb9.md)
- [VIP account more than 6 failed logons in 10](../content/windows-security-events-vip-account-more-than-6-failed-logons-in-10-892cd37e-f9e1-49c3-b0b2-d74f52ac7b71-f57a0ad0.md)
- [VIP account more than 6 failed logons in 10](../content/windows-security-events-vip-account-more-than-6-failed-logons-in-10-e8d36582-c403-4466-bd44-ebede5b6fa6e-f9a5b0f7.md)
- [Windows System Time changed on hosts](../content/windows-security-events-windows-system-time-changed-on-hosts-9fd6f61d-2cc3-48de-acf5-7194e78d6ea1-9fe3fe4a.md)

### Workbooks (17)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md)

**In solution [EatonForeseer](../solutions/eatonforeseer.md):**
- [EatonForeseerHealthAndAccess](../content/eatonforeseer-eatonforeseerhealthandaccess-aeaee6f8.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [MalwareProtectionEssentialsWorkbook](../content/malware-protection-essentials-malwareprotectionessentialsworkbook-df9a8a0a.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [NetworkSessionEssentials](../content/network-session-essentials-networksessionessentials-5de17c97.md)
- [NetworkSessionEssentialsV2](../content/network-session-essentials-networksessionessentialsv2-9408ac84.md)

**In solution [PCI DSS Compliance](../solutions/pci-dss-compliance.md):**
- [PCIDSSCompliance](../content/pci-dss-compliance-pcidsscompliance-b201eb3d.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md)
- [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md)

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):**
- [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md)

**In solution [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md):**
- [SemperisDSPNotifications](../content/semperis-directory-services-protector-semperisdspnotifications-fcd6b926.md)
- [SemperisDSPQuickviewDashboard](../content/semperis-directory-services-protector-semperisdspquickviewdashboard-72fd1e27.md)

**In solution [Windows Firewall](../solutions/windows-firewall.md):**
- [WindowsFirewall](../content/windows-firewall-windowsfirewall-6cfebfa8.md)

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [EventAnalyzer](../content/windows-security-events-eventanalyzer-30e8f73e.md)
- [IdentityAndAccess](../content/windows-security-events-identityandaccess-d8681d3f.md)

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
- [Content Index](../content/content-index.md)
