# SecurityEvent

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SecurityEvent table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Windows |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityevent) |

## Solutions (30)

This table is used by the following solutions:

- [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md)
- [DPDP Compliance](../solutions/dpdp-compliance.md)
- [Dev 0270 Detection and Hunting](../solutions/dev-0270-detection-and-hunting.md)
- [EatonForeseer](../solutions/eatonforeseer.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [FalconFriday](../solutions/falconfriday.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md)
- [PCI DSS Compliance](../solutions/pci-dss-compliance.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)
- [Windows Firewall](../solutions/windows-firewall.md)
- [Windows Security Events](../solutions/windows-security-events.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (6)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cyborg Security HUNTER Hunt Packages](../connectors/cyborgsecurity-hunter.md) |  |
| [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) |  |
| [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) |  |
| [Security Events via Legacy Agent](../connectors/securityevents.md) |  |
| [Semperis Directory Services Protector](../connectors/semperisdsp.md) | `EventID in "9211,9212"` |
| [Windows Security Events via AMA](../connectors/windowssecurityevents.md) |  |

---

## Content Items Using This Table (147)

### Analytic Rules (50)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Powershell Empire Cmdlets Executed in Command Line](../content/attacker-tools-threat-protection-essentials-powershell-empire-cmdlets-executed-in-command-line-ef88eb96-861c-43a0-ab16-f3835a97c928-001fa98c.md) |  |

**In solution [Dev 0270 Detection and Hunting](../solutions/dev-0270-detection-and-hunting.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DEV-0270 New User Creation](../content/dev-0270-detection-and-hunting-dev-0270-new-user-creation-7965f0be-c039-4d18-8ee8-9a6add8aecf3-884bf05d.md) |  |
| [Dev-0270 Malicious Powershell usage](../content/dev-0270-detection-and-hunting-dev-0270-malicious-powershell-usage-422ca2bf-598b-4872-82bb-5f7e8fa731e7-02bc41bc.md) |  |
| [Dev-0270 Registry IOC - September 2022](../content/dev-0270-detection-and-hunting-dev-0270-registry-ioc-september-2022-2566e99f-ad0f-472a-b9ac-d3899c9283e6-d97be37a.md) |  |
| [Dev-0270 WMIC  Discovery](../content/dev-0270-detection-and-hunting-dev-0270-wmic-discovery-6b652b4f-9810-4eec-9027-7aa88ce4db23-8289b5fe.md) |  |

**In solution [EatonForeseer](../solutions/eatonforeseer.md):** `EventID in "4624,4625,4634,4647,4648,4675"`

| Content Item |
|:-------------|
| [EatonForeseer - Unauthorized Logins](../content/eatonforeseer-eatonforeseer-unauthorized-logins-5a7fccb8-3ed0-44f2-8477-540af3ef4d92-5a9d46ba.md) |

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Base64 encoded Windows process command-lines](../content/endpoint-threat-protection-essentials-base64-encoded-windows-process-command-lines-ca67c83e-7fff-4127-a3e3-1af66d6d4cad-01f53023.md) |  |
| [Malware in the recycle bin](../content/endpoint-threat-protection-essentials-malware-in-the-recycle-bin-75bf9902-0789-47c1-a5d8-f57046aa72df-2b92e7a9.md) |  |
| [Potential Remote Desktop Tunneling](../content/endpoint-threat-protection-essentials-potential-remote-desktop-tunneling-d2e8fd50-8d66-11ec-b909-0242ac120002-811dbf83.md) | `EventID in "4624,4625"` |
| [Process executed from binary hidden in Base64 encoded file](../content/endpoint-threat-protection-essentials-process-executed-from-binary-hidden-in-base64-encoded-file-d6190dde-8fd2-456a-ac5b-0a32400b0464-f2c6e93c.md) |  |
| [Security Event log cleared](../content/endpoint-threat-protection-essentials-security-event-log-cleared-80da0a8f-cfe1-4cd0-a895-8bc1771a720e-2f5b4cb9.md) |  |
| [Windows Binaries Executed from Non-Default Directory](../content/endpoint-threat-protection-essentials-windows-binaries-executed-from-non-default-directory-15049017-527f-4d3b-b011-b0e99e68ef45-75e820c5.md) | `EventID == "4688"` |

**In solution [FalconFriday](../solutions/falconfriday.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Certified Pre-Owned - TGTs requested with certificate authentication](../content/falconfriday-certified-pre-owned-tgts-requested-with-certificate-authentication-b838a13c-052e-45b8-a5ac-7d3eb62efa11-8b984753.md) | `EventID == "4768"` |
| [Certified Pre-Owned - backup of CA private key - rule 1](../content/falconfriday-certified-pre-owned-backup-of-ca-private-key-rule-1-aa5eaac7-1264-4833-b620-8f062be75541-ac010cd6.md) | `EventID == "5058"` |
| [Certified Pre-Owned - backup of CA private key - rule 2](../content/falconfriday-certified-pre-owned-backup-of-ca-private-key-rule-2-88f8fbc0-345d-458e-85f6-f73921d5ef50-fbc7bd12.md) | `EventID == "5059"` |
| [Excessive share permissions](../content/falconfriday-excessive-share-permissions-aba0b08c-aace-40c5-a21d-39153023dcaa-6377fa2a.md) | `EventID == "5143"` |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress in SecurityEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-securityevents-140a2cb5-4b4a-485c-aab3-2415c24d37e6-27374577.md) |  |

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Network endpoint to host executable correlation](../content/network-threat-protection-essentials-network-endpoint-to-host-executable-correlation-01f64465-b1ef-41ea-a7f5-31553a11ad43-f4ed06da.md) |  |

**In solution [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Semperis DSP Failed Logons](../content/semperis-directory-services-protector-semperis-dsp-failed-logons-0e105444-fe13-4ce6-9239-21880076a3f9-2263251b.md) | `EventID == "20002"` |
| [Semperis DSP Kerberos krbtgt account with old password](../content/semperis-directory-services-protector-semperis-dsp-kerberos-krbtgt-account-with-old-password-9ff3b26b-7636-412e-ac46-072b084b94cb-7cfe67a4.md) | `EventID in "9208,9211,9212"` |
| [Semperis DSP Mimikatz's DCShadow Alert](../content/semperis-directory-services-protector-semperis-dsp-mimikatz's-dcshadow-alert-1a6d0a49-64b3-4ca1-96c3-f154c16c218c-044ebdda.md) | `EventID in "9208,9211,9212"` |
| [Semperis DSP Operations Critical Notifications](../content/semperis-directory-services-protector-semperis-dsp-operations-critical-notifications-8f471e21-3bb2-466f-9bc2-0a0326a60788-3ceee4d9.md) | `EventID == "30001"` |
| [Semperis DSP RBAC Changes](../content/semperis-directory-services-protector-semperis-dsp-rbac-changes-e5edf3f3-de53-45e6-b0d7-1ce1c048df4a-21be9fb7.md) | `EventID == "20012"` |
| [Semperis DSP Recent sIDHistory changes on AD objects](../content/semperis-directory-services-protector-semperis-dsp-recent-sidhistory-changes-on-ad-objects-64796da3-6383-4de2-9c97-866c83c459ae-0217ae73.md) | `EventID in "9208,9211,9212"` |
| [Semperis DSP Well-known privileged SIDs in sIDHistory](../content/semperis-directory-services-protector-semperis-dsp-well-known-privileged-sids-in-sidhistory-ddd75d93-5b8b-4349-babe-c4e15343c5a3-fe463147.md) | `EventID in "9208,9211,9212"` |
| [Semperis DSP Zerologon vulnerability](../content/semperis-directory-services-protector-semperis-dsp-zerologon-vulnerability-85c1f9e4-6f14-46bf-82d5-dbe495b92aab-46434387.md) | `EventID in "9208,9211,9212"` |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI map Email entity to SecurityEvent](../content/threat-intelligence-ti-map-email-entity-to-securityevent-2fc5d810-c9cc-491a-b564-841427ae0e50-9cb621b7.md) |  |
| [TI map File Hash to Security Event](../content/threat-intelligence-ti-map-file-hash-to-security-event-a7427ed7-04b4-4e3b-b323-08b981b9b4bf-a0646697.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI map Email entity to SecurityEvent](../content/threat-intelligence-new-ti-map-email-entity-to-securityevent-0a59051d-aed4-4fb6-bf84-bc80534482b2-60b9192e.md) |  |
| [TI map File Hash to Security Event](../content/threat-intelligence-new-ti-map-file-hash-to-security-event-9f7dc779-1e51-4925-ae4a-db1db933077f-d8ffe445.md) |  |

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):** `EventID in "4663,4688"`

| Content Item |
|:-------------|
| [Identify SysAid Server web shell creation](../content/web-shells-threat-protection-identify-sysaid-server-web-shell-creation-50eb4cbd-188f-44f4-b964-bab84dcdec10-5faaa2d1.md) |

**In solution [Windows Security Events](../solutions/windows-security-events.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AD FS Remote Auth Sync Connection](../content/windows-security-events-ad-fs-remote-auth-sync-connection-2f4165a6-c4fb-4e94-861e-37f1b4d6c0e6-a47c2516.md) | `EventID in "412,501,5156"` |
| [AD user enabled and password not set within 48 hours](../content/windows-security-events-ad-user-enabled-and-password-not-set-within-48-hours-62085097-d113-459f-9ea7-30216f2ee6af-03184bd5.md) |  |
| [Excessive Windows Logon Failures](../content/windows-security-events-excessive-windows-logon-failures-2391ce61-8c8d-41ac-9723-d945b2e90720-36e38369.md) | `EventID == "4625"` |
| [Exchange OAB Virtual Directory Attribute Containing Potential Webshell](../content/windows-security-events-exchange-oab-virtual-directory-attribute-containing-potential-webshell-faf1a6ff-53b5-4f92-8c55-4b20e9957594-0a1c5425.md) | `EventID == "5136"` |
| [Gain Code Execution on ADFS Server via SMB + Remote Service or Scheduled Task](../content/windows-security-events-gain-code-execution-on-adfs-server-via-smb-+-remote-service-or-scheduled-task-12dcea64-bec2-41c9-9df2-9f28461b1295-478b123d.md) | `EventID in "4624,4688,4697,4698,4699,4700,4701,4702,5145"` |
| [Microsoft Entra ID Local Device Join Information and Transport Key Registry Keys Access](../content/windows-security-events-microsoft-entra-id-local-device-join-information-and-transport-key-registry-keys-a356c8bd-c81d-428b-aa36-83be706be034-52ba1a8d.md) | `EventID in "4656,4663"` |
| [NRT Base64 Encoded Windows Process Command-lines](../content/windows-security-events-nrt-base64-encoded-windows-process-command-lines-c3e5dbaa-a540-408c-8b36-68bdfb3df088-bed67057.md) | `EventID == "4688"` |
| [NRT Process executed from binary hidden in Base64 encoded file](../content/windows-security-events-nrt-process-executed-from-binary-hidden-in-base64-encoded-file-7ad4c32b-d0d2-411c-a0e8-b557afa12fce-92d97690.md) | `EventID == "4688"` |
| [NRT Security Event log cleared](../content/windows-security-events-nrt-security-event-log-cleared-508cef41-2cd8-4d40-a519-b04826a9085f-67c5b6b4.md) | `EventID == "1102"` |
| [New EXE deployed via Default Domain or Default Domain Controller Policies](../content/windows-security-events-new-exe-deployed-via-default-domain-or-default-domain-controller-policies-05b4bccd-dd12-423d-8de4-5a6fb526bb4f-aa6653ca.md) | `EventID == "4688"` |
| [Non Domain Controller Active Directory Replication](../content/windows-security-events-non-domain-controller-active-directory-replication-b9d2eebc-5dcb-4888-8165-900db44443ab-b36ed5cd.md) | `EventID in "4624,4662"` |
| [Potential Fodhelper UAC Bypass](../content/windows-security-events-potential-fodhelper-uac-bypass-56f3f35c-3aca-4437-a1fb-b7a84dc4af00-9be2fced.md) | `EventID in "4657,4688"` |
| [Potential re-named sdelete usage](../content/windows-security-events-potential-re-named-sdelete-usage-720d12c6-a08c-44c4-b18f-2236412d59b0-d334efe2.md) | `EventID == "4688"` |
| [Process Execution Frequency Anomaly](../content/windows-security-events-process-execution-frequency-anomaly-2c55fe7a-b06f-4029-a5b9-c54a2320d7b8-7d56da33.md) | `EventID == "4688"` |
| [Scheduled Task Hide](../content/windows-security-events-scheduled-task-hide-6dd2629c-534b-4275-8201-d7968b4fa77e-3293d2af.md) | `EventID == "4657"` |
| [Sdelete deployed via GPO and run recursively](../content/windows-security-events-sdelete-deployed-via-gpo-and-run-recursively-d9f28fdf-abc8-4f1a-a7e7-1aaec87a2fc5-8f72bd3c.md) | `EventID == "4688"` |
| [SecurityEvent - Multiple authentication failures followed by a success](../content/windows-security-events-securityevent-multiple-authentication-failures-followed-by-a-success-cf3ede88-a429-493b-9108-3e46d3c741f7-2bfab486.md) | `EventID in "4624,4625"` |
| [Starting or Stopping HealthService to Avoid Detection](../content/windows-security-events-starting-or-stopping-healthservice-to-avoid-detection-2bc7b4ae-eeaa-4538-ba15-ef298ec1ffae-cde90857.md) | `EventID in "4624,4656"` |

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md) |  |

### Hunting Queries (73)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Potential Impacket Execution](../content/attacker-tools-threat-protection-essentials-potential-impacket-execution-24ae555c-5e33-4b5d-827a-44206e39f6b4-04d0f42f.md) |  |

**In solution [Cyborg Security HUNTER](../solutions/cyborg-security-hunter.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Attempted VBScript Stored in Non-Run CurrentVersion Registry Key Value](../content/cyborg-security-hunter-attempted-vbscript-stored-in-non-run-currentversion-registry-key-value-d7233f14-4705-403e-9db9-e0d677c9506b-73ff2c75.md) |  |
| [Excessive Windows Discovery and Execution Processes - Potential Malware Installation](../content/cyborg-security-hunter-excessive-windows-discovery-and-execution-processes-potential-malware-installatio-6d1c9f13-e43e-4b52-a443-5799465d573b-01b94334.md) |  |
| [LSASS Memory Dumping using WerFault.exe - Command Identification](../content/cyborg-security-hunter-lsass-memory-dumping-using-werfault.exe-command-identification-4894a60b-d2ee-4f24-be61-0d0c96a84e63-4b9d94b1.md) |  |
| [Metasploit / Impacket PsExec Process Creation Activity](../content/cyborg-security-hunter-metasploit-impacket-psexec-process-creation-activity-37cba0d1-8aa5-4f8f-bb26-25a45475ca9a-bc3bb419.md) | `EventID == "4688"` |
| [Potential Maldoc Execution Chain Observed](../content/cyborg-security-hunter-potential-maldoc-execution-chain-observed-b194088b-c846-4c72-a4b7-933627878db4-47180af7.md) |  |
| [PowerShell Pastebin Download](../content/cyborg-security-hunter-powershell-pastebin-download-e186a8af-3d4a-4003-93b7-9b199e0b1dd1-3dd8ecd4.md) |  |
| [Powershell Encoded Command Execution](../content/cyborg-security-hunter-powershell-encoded-command-execution-d2d3bbc2-6e57-4043-ab24-988a6a6c88db-40d11177.md) |  |
| [Prohibited Applications Spawning cmd.exe or powershell.exe](../content/cyborg-security-hunter-prohibited-applications-spawning-cmd.exe-or-powershell.exe-fc36d683-385a-4ec2-842d-2982dbed97a4-e72a0598.md) |  |
| [Proxy VBScript Execution via CurrentVersion Registry Key](../content/cyborg-security-hunter-proxy-vbscript-execution-via-currentversion-registry-key-3ac1e703-3ed0-45e1-ae1d-0fa60baf99fb-df6259d3.md) |  |
| [Rundll32 or cmd Executing Application from Explorer - Potential Malware Execution Chain](../content/cyborg-security-hunter-rundll32-or-cmd-executing-application-from-explorer-potential-malware-execution-c-3bc6e8ef-9e08-4626-89e9-fda87866cc82-3815ee01.md) |  |

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Backup Deletion](../content/endpoint-threat-protection-essentials-backup-deletion-56ebae61-89cf-42d9-99f4-3dff8ba33885-e1c87558.md) |  |
| [Download of New File Using Curl](../content/endpoint-threat-protection-essentials-download-of-new-file-using-curl-7108c86b-a3ef-42d0-b50b-3e251fb1f84c-09e03acc.md) |  |
| [Persisting via IFEO Registry Key](../content/endpoint-threat-protection-essentials-persisting-via-ifeo-registry-key-f82c89fa-c969-4d12-832f-04d55d14522c-6020db66.md) |  |
| [Potential Microsoft Security Services Tampering](../content/endpoint-threat-protection-essentials-potential-microsoft-security-services-tampering-e10e1d2f-265d-4d90-9037-7f3a6ed8a91e-8c1dc76e.md) |  |
| [Rare Windows Firewall Rule updates using Netsh](../content/endpoint-threat-protection-essentials-rare-windows-firewall-rule-updates-using-netsh-e3e8c913-e5e9-4517-b4f7-dd1ec071888f-d0fef21e.md) | `EventID == "1"` |
| [Remote Login Performed with WMI](../content/endpoint-threat-protection-essentials-remote-login-performed-with-wmi-8f658a80-7fa9-4524-a95b-d9ab608e8850-57d50f63.md) | `EventID in "4624,4625"` |
| [Remote Scheduled Task Creation or Update using ATSVC Named Pipe](../content/endpoint-threat-protection-essentials-remote-scheduled-task-creation-or-update-using-atsvc-named-pipe-7aad876a-a6fe-4c11-879e-8b29d35ff739-f9a3a936.md) | `EventID == "5145"` |
| [Scheduled Task Creation or Update from User Writable Directory](../content/endpoint-threat-protection-essentials-scheduled-task-creation-or-update-from-user-writable-directory-0b827a49-427e-4721-b05e-b151a8af524e-f6c2b013.md) | `EventID in "4698,4702"` |
| [Unicode Obfuscation in Command Line](../content/endpoint-threat-protection-essentials-unicode-obfuscation-in-command-line-a953f304-12e4-48ae-bedc-d58fb1b0c6a6-25c755ef.md) |  |

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dev-0056 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0056-command-line-activity-november-2021-e2629949-2043-4421-8064-bca23c8491dd-1cdb73c2.md) |  |
| [Known Nylon Typhoon Registry modifications patterns](../content/legacy-ioc-based-threat-protection-known-nylon-typhoon-registry-modifications-patterns-f090f8f4a-b986-42d2-b536-e0795c723e25-f442d105.md) |  |
| [Nylon Typhoon Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-nylon-typhoon-command-line-activity-november-2021-bb30abbc-9af6-4a37-9536-e9207e023989-bdd1efea.md) |  |
| [SolarWinds Inventory](../content/legacy-ioc-based-threat-protection-solarwinds-inventory-278592b5-612b-48a4-bb38-4c01ff8ee2a5-c7f23741.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):** `EventID in "4648,4673,4688,8002"`

| Content Item |
|:-------------|
| [TI Map File Entity to Security Event](../content/threat-intelligence-ti-map-file-entity-to-security-event-233441b9-cc92-4c9b-87fa-73b855fcd4b8-14557cf7.md) |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):** `EventID in "4648,4673,4688,8002"`

| Content Item |
|:-------------|
| [TI Map File Entity to Security Event](../content/threat-intelligence-new-ti-map-file-entity-to-security-event-10f83299-c4e6-4af8-9627-5f9448dee24a-3651af8f.md) |

**In solution [Windows Security Events](../solutions/windows-security-events.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AD Account Lockout](../content/windows-security-events-ad-account-lockout-a308d780-1c39-4fa7-8c21-bb54f174b065-798b810f.md) | `EventID == "4740"` |
| [Commands executed by WMI on new hosts - potential Impacket](../content/windows-security-events-commands-executed-by-wmi-on-new-hosts-potential-impacket-9ce755c1-d2e6-4e2f-82d5-7871ec1aef91-d645d9b4.md) | `EventID == "4688"` |
| [Crash dump disabled on host](../content/windows-security-events-crash-dump-disabled-on-host-5a3615af-21c9-427e-8bf1-ed2350992bb4-8623f73e.md) | `EventID == "4657"` |
| [Cscript script daily summary breakdown](../content/windows-security-events-cscript-script-daily-summary-breakdown-36abe031-962d-482e-8e1e-a556ed99d5a3-056955b7.md) | `EventID == "4688"` |
| [Decoy User Account Authentication Attempt](../content/windows-security-events-decoy-user-account-authentication-attempt-a4dbc292-87eb-11ec-a8a3-0242ac120002-38f94fe7.md) | `EventID in "4624,4625"` |
| [Discord download invoked from cmd line](../content/windows-security-events-discord-download-invoked-from-cmd-line-e7dd442a-0af8-48eb-8358-9e91f4911849-404b8911.md) | `EventID == "4688"` |
| [Domain controller installation media creation](../content/windows-security-events-domain-controller-installation-media-creation-7e5f3a9a-542c-417a-a429-4ed500c5c4d8-fec25b2e.md) |  |
| [Entropy for Processes for a given Host](../content/windows-security-events-entropy-for-processes-for-a-given-host-05208917-82de-46f7-a190-a65739a690f4-59ba7296.md) | `EventID == "4688"` |
| [Enumeration of users and groups](../content/windows-security-events-enumeration-of-users-and-groups-a1e993de-770a-4434-83e9-9e3b47a6e470-31ff9f63.md) | `EventID == "4688"` |
| [Establishing internal proxies](../content/windows-security-events-establishing-internal-proxies-ce38c16c-a560-46c0-88d6-7757b88f08e9-e3cde3e0.md) |  |
| [Exchange PowerShell Snapin Added](../content/windows-security-events-exchange-powershell-snapin-added-8afd1086-fc9a-4d26-b3ff-5c794c79a59a-8e25d87f.md) | `EventID == "4688"` |
| [Group added to Built in Domain Local or Global Group](../content/windows-security-events-group-added-to-built-in-domain-local-or-global-group-cb47a115-2616-4d56-890d-b28c14bc83e4-cbcd997b.md) | `EventID in "4727,4728,4731,4732,4754,4756"` |
| [Host Exporting Mailbox and Removing Export](../content/windows-security-events-host-exporting-mailbox-and-removing-export-2e2fab4b-83dd-4cf8-b2dd-063d0fd15513-f6188024.md) | `EventID == "4688"` |
| [Hosts Running a Rare Process](../content/windows-security-events-hosts-running-a-rare-process-82e04ff9-a289-4005-9fcd-f1deec72e3fc-91003c14.md) | `EventID == "4688"` |
| [Hosts Running a Rare Process with Commandline](../content/windows-security-events-hosts-running-a-rare-process-with-commandline-5550b630-7b8a-444e-a585-ec8c7533c028-2ae5a42b.md) | `EventID == "4688"` |
| [Hosts with new logons](../content/windows-security-events-hosts-with-new-logons-62e2df59-1535-4c8e-ac6c-c91faeed0179-01cac37a.md) | `EventID in "4624,4625"` |
| [Invoke-PowerShellTcpOneLine Usage.](../content/windows-security-events-invoke-powershelltcponeline-usage.-a344e28e-095d-47fb-84a8-d06edd31d2cb-5e9d5425.md) | `EventID == "4688"` |
| [Least Common Parent And Child Process Pairs](../content/windows-security-events-least-common-parent-and-child-process-pairs-3712595d-6f47-416b-963a-605201ed2764-304136a9.md) | `EventID == "4688"` |
| [Least Common Processes Including Folder Depth](../content/windows-security-events-least-common-processes-including-folder-depth-6d04a1ef-1b4d-4ff8-a76c-ad7d1a396136-6a4e1ff5.md) | `EventID == "4688"` |
| [Least Common Processes by Command Line](../content/windows-security-events-least-common-processes-by-command-line-088d30e9-c02b-46b1-bd1f-d5b6d6b782f0-21ac6383.md) | `EventID == "4688"` |
| [Long lookback User Account Created and Deleted within 10mins](../content/windows-security-events-long-lookback-user-account-created-and-deleted-within-10mins-6135a90e-ba30-4f36-9b6a-3a350050704b-6a4acaf0.md) | `EventID in "4720,4726"` |
| [Masquerading files](../content/windows-security-events-masquerading-files-60304ebf-ebdd-4869-a702-e0216d90ab46-fbac27a6.md) |  |
| [Multiple Explicit Credential Usage - 4648 events](../content/windows-security-events-multiple-explicit-credential-usage-4648-events-9e3fab4b-94dd-4cf9-b2aa-063d0fd25513-bf7d18d4.md) | `EventID == "4648"` |
| [New Child Process of W3WP.exe](../content/windows-security-events-new-child-process-of-w3wp.exe-f885fb16-dfd3-4c90-83d9-7a66b9d9b654-75c40006.md) | `EventID == "4688"` |
| [New PowerShell scripts encoded on the commandline](../content/windows-security-events-new-powershell-scripts-encoded-on-the-commandline-4e78daf1-8bba-4b5d-8a8b-c75fe9bbc2d9-fc78c747.md) | `EventID == "4688"` |
| [New processes observed in last 24 hours](../content/windows-security-events-new-processes-observed-in-last-24-hours-513e3a11-e1bb-4cfc-8af9-451da0407e6b-2f72302d.md) | `EventID == "4688"` |
| [Nishang Reverse TCP Shell in Base64](../content/windows-security-events-nishang-reverse-tcp-shell-in-base64-87c1f90a-f868-4528-a9c1-15520249cae6-29ac834c.md) | `EventID == "4688"` |
| [Potential Exploitation of MS-RPRN printer bug](../content/windows-security-events-potential-exploitation-of-ms-rprn-printer-bug-c29a03c6-d074-4934-afae-df1aeb30da70-2d22b8de.md) | `EventID == "5145"` |
| [PowerShell downloads](../content/windows-security-events-powershell-downloads-d83f40fc-bbcc-4020-8d45-ad2d82355cb2-eb98129c.md) | `EventID == "4688"` |
| [Powercat Download](../content/windows-security-events-powercat-download-c2112ca3-aae0-4079-9bff-d74c54bb5fe5-e8217682.md) | `EventID == "4688"` |
| [Rare Process Path](../content/windows-security-events-rare-process-path-0ff22697-dc58-4623-b844-a767629840cd-668afb9c.md) | `EventID == "4688"` |
| [Rare Processes Run by Service Accounts](../content/windows-security-events-rare-processes-run-by-service-accounts-af02987c-949d-47d5-b0ae-64d8e1b674e2-173a9ff0.md) | `EventID in "4624,4688"` |
| [Remote Task Creation/Update using Schtasks Process](../content/windows-security-events-remote-task-creation-update-using-schtasks-process-1e4a5be3-4a60-4099-b286-2d3642575889-38edc3ad.md) | `EventID == "4688"` |
| [Summary of user logons by logon type](../content/windows-security-events-summary-of-user-logons-by-logon-type-d0f13bb9-e713-4f89-b610-1806326a1dea-12378152.md) | `EventID in "4624,4625"` |
| [Summary of users created using uncommon/undocumented commandline switches](../content/windows-security-events-summary-of-users-created-using-uncommon-undocumented-commandline-switches-5e76eaf9-79a7-448c-bace-28e5b53b8396-824f28e4.md) | `EventID == "4688"` |
| [Suspected LSASS Dump](../content/windows-security-events-suspected-lsass-dump-58fe8fc8-54fa-48cd-bac3-197f8d862429-8666c9e8.md) | `EventID == "4688"` |
| [Suspicious Enumeration using Adfind Tool](../content/windows-security-events-suspicious-enumeration-using-adfind-tool-dd6fb889-43ef-44e1-a01d-093ab4bb12b2-fef95624.md) | `EventID == "4688"` |
| [Suspicious Windows Login Outside Normal Hours](../content/windows-security-events-suspicious-windows-login-outside-normal-hours-e7bfbc3f-98c7-4aaa-a64c-de9c058b86b2-15ccdfd0.md) | `EventID in "4624,4625"` |
| [Suspicious command line tokens in LolBins or LolScripts](../content/windows-security-events-suspicious-command-line-tokens-in-lolbins-or-lolscripts-6cdef739-18f6-4b3a-8fdc-93e9a4302dbf-46ec7a62.md) | `EventID == "4688"` |
| [Uncommon processes - bottom 5%](../content/windows-security-events-uncommon-processes-bottom-5-2ff4b10c-7056-4898-83fd-774104189fd5-2ef29fea.md) | `EventID == "4688"` |
| [User Account added to Built in Sensitive or Privileged Domain Local or Global Group](../content/windows-security-events-user-account-added-to-built-in-sensitive-or-privileged-domain-local-or-global-gr-8d69a665-074a-443b-aae6-5dd9bdd5cfb1-0118579e.md) | `EventID in "4728,4732,4756"` |
| [User account added or removed from a security group by an unauthorized user](../content/windows-security-events-user-account-added-or-removed-from-a-security-group-by-an-unauthorized-user-d57f675c-ad6c-44d0-95fb-3bf707e70155-3834c59d.md) | `EventID in "4728,4729,4732,4733,4746,4747,4751,4752,4756,4757,4761,4762"` |
| [User created by unauthorized user](../content/windows-security-events-user-created-by-unauthorized-user-42ae9690-89ce-4063-9a90-465badad5395-6cbb1bb9.md) | `EventID == "4720"` |
| [VIP account more than 6 failed logons in 10](../content/windows-security-events-vip-account-more-than-6-failed-logons-in-10-892cd37e-f9e1-49c3-b0b2-d74f52ac7b71-f57a0ad0.md) | `EventID == "4625"` |
| [VIP account more than 6 failed logons in 10](../content/windows-security-events-vip-account-more-than-6-failed-logons-in-10-e8d36582-c403-4466-bd44-ebede5b6fa6e-f9a5b0f7.md) | `EventID == "4625"` |
| [Windows System Time changed on hosts](../content/windows-security-events-windows-system-time-changed-on-hosts-9fd6f61d-2cc3-48de-acf5-7194e78d6ea1-9fe3fe4a.md) | `EventID == "4616"` |

**GitHub Only:** `EventID == "4740"`

| Content Item |
|:-------------|
| [Summary of failed user logons by reason of failure](../content/windows-security-events-summary-of-failed-user-logons-by-reason-of-failure-e7642e6e-cf27-46ec-a4b9-e4475228fead-bc8b05cf.md) |

### Workbooks (24)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):** `EventID in "2889,3000,4624,4768,4769,4776"`

| Content Item |
|:-------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [DPDP Compliance](../solutions/dpdp-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DPDPCompliance](../content/dpdp-compliance-dpdpcompliance-18571e87.md) |  |

**In solution [EatonForeseer](../solutions/eatonforeseer.md):** `EventID in "4624,4625,4634,4647,4648,4675"`

| Content Item |
|:-------------|
| [EatonForeseerHealthAndAccess](../content/eatonforeseer-eatonforeseerhealthandaccess-aeaee6f8.md) |

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md) |  |

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):** `EventID in "4624,4625"`

| Content Item |
|:-------------|
| [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md) |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md):** `EventID in "4624,4720,4722,4724,4725,4726,7036"`

| Content Item |
|:-------------|
| [Microsoft Exchange Admin Activity](../content/microsoft-exchange-security-exchange-on-premises-microsoft-exchange-admin-activity-dd1fad82.md) |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):** `EventID in "4723,4724"`

| Content Item |
|:-------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [PCI DSS Compliance](../solutions/pci-dss-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [PCIDSSCompliance](../content/pci-dss-compliance-pcidsscompliance-b201eb3d.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) | `EventID in "1102,4624,4625,4688,4719,4720,4723,4724,4768,4771,4776"` |
| [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md) |  |

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):** `EventID in "1100,1102,1104,1240,1241,1242,4656,4657,4660,4663,4670,4688,4719,4720,4726,4732,4739,4754,4907"`

| Content Item |
|:-------------|
| [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md) |

**In solution [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SemperisDSPNotifications](../content/semperis-directory-services-protector-semperisdspnotifications-fcd6b926.md) |  |
| [SemperisDSPQuickviewDashboard](../content/semperis-directory-services-protector-semperisdspquickviewdashboard-72fd1e27.md) | `EventID in "20000,20002,20012,9208,9211,9212"` |
| [SemperisDSPSecurityIndicators](../content/semperis-directory-services-protector-semperisdspsecurityindicators-a942a3d9.md) | `EventID in "9208,9211,9212"` |
| [SemperisDSPWorkbook](../content/semperis-directory-services-protector-semperisdspworkbook-523d6926.md) | `EventID in "9208,9211,9212"` |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

**In solution [Windows Firewall](../solutions/windows-firewall.md):** `EventID in "4624,4625"`

| Content Item |
|:-------------|
| [WindowsFirewall](../content/windows-firewall-windowsfirewall-6cfebfa8.md) |

**In solution [Windows Security Events](../solutions/windows-security-events.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [EventAnalyzer](../content/windows-security-events-eventanalyzer-30e8f73e.md) | `EventID in "4656,4657,4658,4660,4661,4663,4664,4670,4671,4673,4674,4690,4691,4698,4699,4700,4701,4702,4715,4719,4817,4902,4904,4905,4906,4907,4908,4912,4985,5031,5039,5051,5140,5142,5143,5144,5148,5149,5150,5151,5154,5155,5156,5157,5158,5159,5168,5888,5889,5890"` |
| [IdentityAndAccess](../content/windows-security-events-identityandaccess-d8681d3f.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

**GitHub Only:** `EventID in "4624,4625,4768,4769,4771"`

| Content Item |
|:-------------|
| [WindowsAuditChecker](../content/github-only-windowsauditchecker-d8c63df2.md) |

## Parsers Using This Table (6)

### ASIM Parsers (5)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuditEventMicrosoftSecurityEvents](../asim/asimauditeventmicrosoftsecurityevents.md) | AuditEvent | Microsoft Windows |  |
| [ASimFileEventMicrosoftSecurityEvents](../asim/asimfileeventmicrosoftsecurityevents.md) | FileEvent | Microsoft Windows Events | `EventID == "4663"` |
| [ASimProcessCreateMicrosoftSecurityEvents](../asim/asimprocesscreatemicrosoftsecurityevents.md) | ProcessEvent | Security Events | `EventID == "4688"` |
| [ASimProcessTerminateMicrosoftSecurityEvents](../asim/asimprocessterminatemicrosoftsecurityevents.md) | ProcessEvent | Security Events | `EventID == "4689"` |
| [ASimUserManagementMicrosoftSecurityEvent](../asim/asimusermanagementmicrosoftsecurityevent.md) | UserManagement | Microsoft Security Event | `EventID in "4744,4748,4749,4753,4759,4763"` |

### Other Parsers (1) — Selection Criteria: `EventID in "9208,9211,9212"`

| Parser | Solution |
|:-------|:---------|
| [dsp_parser](../parsers/dsp-parser.md) | [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md) |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/securityinsights`
- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`

## Selection Criteria Summary (46 criteria, 102 total references)

References by type: 1 connectors, 96 content items, 4 ASIM parsers, 1 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `EventID == "4688"` | - | 34 | 1 | - | **35** |
| `EventID in "4624,4625"` | - | 9 | - | - | **9** |
| `EventID in "9208,9211,9212"` | - | 7 | - | 1 | **8** |
| `EventID == "4625"` | - | 3 | - | - | **3** |
| `EventID in "4624,4625,4634,4647,4648,4675"` | - | 2 | - | - | **2** |
| `EventID == "4657"` | - | 2 | - | - | **2** |
| `EventID == "5145"` | - | 2 | - | - | **2** |
| `EventID in "4648,4673,4688,8002"` | - | 2 | - | - | **2** |
| `EventID == "4740"` | - | 2 | - | - | **2** |
| `EventID in "9211,9212"` | 1 | - | - | - | **1** |
| `EventID == "5058"` | - | 1 | - | - | **1** |
| `EventID == "5059"` | - | 1 | - | - | **1** |
| `EventID == "4768"` | - | 1 | - | - | **1** |
| `EventID == "5143"` | - | 1 | - | - | **1** |
| `EventID == "20002"` | - | 1 | - | - | **1** |
| `EventID == "30001"` | - | 1 | - | - | **1** |
| `EventID == "20012"` | - | 1 | - | - | **1** |
| `EventID in "4663,4688"` | - | 1 | - | - | **1** |
| `EventID in "412,501,5156"` | - | 1 | - | - | **1** |
| `EventID == "5136"` | - | 1 | - | - | **1** |
| `EventID in "4624,4688,4697,4698,4699,4700,4701,4702,5145"` | - | 1 | - | - | **1** |
| `EventID in "4656,4663"` | - | 1 | - | - | **1** |
| `EventID in "4624,4662"` | - | 1 | - | - | **1** |
| `EventID == "1102"` | - | 1 | - | - | **1** |
| `EventID in "4657,4688"` | - | 1 | - | - | **1** |
| `EventID in "4624,4656"` | - | 1 | - | - | **1** |
| `EventID in "4698,4702"` | - | 1 | - | - | **1** |
| `EventID == "1"` | - | 1 | - | - | **1** |
| `EventID in "4727,4728,4731,4732,4754,4756"` | - | 1 | - | - | **1** |
| `EventID == "4648"` | - | 1 | - | - | **1** |
| `EventID in "4624,4688"` | - | 1 | - | - | **1** |
| `EventID in "4728,4732,4756"` | - | 1 | - | - | **1** |
| `EventID in "4720,4726"` | - | 1 | - | - | **1** |
| `EventID in "4728,4729,4732,4733,4746,4747,4751,4752,4756,4757,4761,4762"` | - | 1 | - | - | **1** |
| `EventID == "4720"` | - | 1 | - | - | **1** |
| `EventID == "4616"` | - | 1 | - | - | **1** |
| `EventID in "2889,3000,4624,4768,4769,4776"` | - | 1 | - | - | **1** |
| `EventID in "4624,4720,4722,4724,4725,4726,7036"` | - | 1 | - | - | **1** |
| `EventID in "4723,4724"` | - | 1 | - | - | **1** |
| `EventID in "20000,20002,20012,9208,9211,9212"` | - | 1 | - | - | **1** |
| `EventID in "1102,4624,4625,4688,4719,4720,4723,4724,4768,4771,4776"` | - | 1 | - | - | **1** |
| `EventID in "1100,1102,1104,1240,1241,1242,4656,4657,4660,4663,4670,4688,4719,4720,4726,4732,4739,4754,4907"` | - | 1 | - | - | **1** |
| `EventID in "4656,4657,4658,4660,4661,4663,4664,4670,4671,4673,4674,4690,4691,4698,4699,4700,4701,4702,4715,4719,4817,4902,4904,4905,4906,4907,4908,4912,4985,5031,5039,5051,5140,5142,5143,5144,5148,5149,5150,5151,5154,5155,5156,5157,5158,5159,5168,5888,5889,5890"` | - | 1 | - | - | **1** |
| `EventID == "4663"` | - | - | 1 | - | **1** |
| `EventID == "4689"` | - | - | 1 | - | **1** |
| `EventID in "4744,4748,4749,4753,4759,4763"` | - | - | 1 | - | **1** |
| **Total** | **1** | **96** | **4** | **1** | **102** |

### EventID

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `4688` | - | 42 | 1 | - | **43** |
| `4624` | - | 18 | - | - | **18** |
| `4625` | - | 15 | - | - | **15** |
| `9211` | 1 | 8 | - | 1 | **10** |
| `9212` | 1 | 8 | - | 1 | **10** |
| `9208` | - | 8 | - | 1 | **9** |
| `4648` | - | 5 | - | - | **5** |
| `4663` | - | 4 | 1 | - | **5** |
| `4657` | - | 5 | - | - | **5** |
| `4720` | - | 5 | - | - | **5** |
| `4656` | - | 4 | - | - | **4** |
| `4732` | - | 4 | - | - | **4** |
| `4768` | - | 3 | - | - | **3** |
| `4698` | - | 3 | - | - | **3** |
| `4702` | - | 3 | - | - | **3** |
| `5145` | - | 3 | - | - | **3** |
| `1102` | - | 3 | - | - | **3** |
| `4673` | - | 3 | - | - | **3** |
| `4728` | - | 3 | - | - | **3** |
| `4756` | - | 3 | - | - | **3** |
| `4726` | - | 3 | - | - | **3** |
| `4724` | - | 3 | - | - | **3** |
| `4719` | - | 3 | - | - | **3** |
| `4634` | - | 2 | - | - | **2** |
| `4647` | - | 2 | - | - | **2** |
| `4675` | - | 2 | - | - | **2** |
| `5143` | - | 2 | - | - | **2** |
| `20002` | - | 2 | - | - | **2** |
| `20012` | - | 2 | - | - | **2** |
| `5156` | - | 2 | - | - | **2** |
| `4699` | - | 2 | - | - | **2** |
| `4700` | - | 2 | - | - | **2** |
| `4701` | - | 2 | - | - | **2** |
| `8002` | - | 2 | - | - | **2** |
| `4740` | - | 2 | - | - | **2** |
| `4754` | - | 2 | - | - | **2** |
| `4776` | - | 2 | - | - | **2** |
| `4723` | - | 2 | - | - | **2** |
| `4660` | - | 2 | - | - | **2** |
| `4670` | - | 2 | - | - | **2** |
| `4907` | - | 2 | - | - | **2** |
| `5058` | - | 1 | - | - | **1** |
| `5059` | - | 1 | - | - | **1** |
| `30001` | - | 1 | - | - | **1** |
| `412` | - | 1 | - | - | **1** |
| `501` | - | 1 | - | - | **1** |
| `5136` | - | 1 | - | - | **1** |
| `4697` | - | 1 | - | - | **1** |
| `4662` | - | 1 | - | - | **1** |
| `1` | - | 1 | - | - | **1** |
| `4727` | - | 1 | - | - | **1** |
| `4731` | - | 1 | - | - | **1** |
| `4729` | - | 1 | - | - | **1** |
| `4733` | - | 1 | - | - | **1** |
| `4746` | - | 1 | - | - | **1** |
| `4747` | - | 1 | - | - | **1** |
| `4751` | - | 1 | - | - | **1** |
| `4752` | - | 1 | - | - | **1** |
| `4757` | - | 1 | - | - | **1** |
| `4761` | - | 1 | - | - | **1** |
| `4762` | - | 1 | - | - | **1** |
| `4616` | - | 1 | - | - | **1** |
| `2889` | - | 1 | - | - | **1** |
| `3000` | - | 1 | - | - | **1** |
| `4769` | - | 1 | - | - | **1** |
| `4722` | - | 1 | - | - | **1** |
| `4725` | - | 1 | - | - | **1** |
| `7036` | - | 1 | - | - | **1** |
| `20000` | - | 1 | - | - | **1** |
| `4771` | - | 1 | - | - | **1** |
| `1100` | - | 1 | - | - | **1** |
| `1104` | - | 1 | - | - | **1** |
| `1240` | - | 1 | - | - | **1** |
| `1241` | - | 1 | - | - | **1** |
| `1242` | - | 1 | - | - | **1** |
| `4739` | - | 1 | - | - | **1** |
| `4658` | - | 1 | - | - | **1** |
| `4661` | - | 1 | - | - | **1** |
| `4664` | - | 1 | - | - | **1** |
| `4671` | - | 1 | - | - | **1** |
| `4674` | - | 1 | - | - | **1** |
| `4690` | - | 1 | - | - | **1** |
| `4691` | - | 1 | - | - | **1** |
| `4715` | - | 1 | - | - | **1** |
| `4817` | - | 1 | - | - | **1** |
| `4902` | - | 1 | - | - | **1** |
| `4904` | - | 1 | - | - | **1** |
| `4905` | - | 1 | - | - | **1** |
| `4906` | - | 1 | - | - | **1** |
| `4908` | - | 1 | - | - | **1** |
| `4912` | - | 1 | - | - | **1** |
| `4985` | - | 1 | - | - | **1** |
| `5031` | - | 1 | - | - | **1** |
| `5039` | - | 1 | - | - | **1** |
| `5051` | - | 1 | - | - | **1** |
| `5140` | - | 1 | - | - | **1** |
| `5142` | - | 1 | - | - | **1** |
| `5144` | - | 1 | - | - | **1** |
| `5148` | - | 1 | - | - | **1** |
| `5149` | - | 1 | - | - | **1** |
| `5150` | - | 1 | - | - | **1** |
| `5151` | - | 1 | - | - | **1** |
| `5154` | - | 1 | - | - | **1** |
| `5155` | - | 1 | - | - | **1** |
| `5157` | - | 1 | - | - | **1** |
| `5158` | - | 1 | - | - | **1** |
| `5159` | - | 1 | - | - | **1** |
| `5168` | - | 1 | - | - | **1** |
| `5888` | - | 1 | - | - | **1** |
| `5889` | - | 1 | - | - | **1** |
| `5890` | - | 1 | - | - | **1** |
| `4689` | - | - | 1 | - | **1** |
| `4744` | - | - | 1 | - | **1** |
| `4748` | - | - | 1 | - | **1** |
| `4749` | - | - | 1 | - | **1** |
| `4753` | - | - | 1 | - | **1** |
| `4759` | - | - | 1 | - | **1** |
| `4763` | - | - | 1 | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

