# DeviceProcessEvents

Process creation and related events

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceprocessevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-deviceprocessevents-table) |

## Solutions (13)

This table is used by the following solutions:

- [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [Cyware](../solutions/cyware.md)
- [Dev 0270 Detection and Hunting](../solutions/dev-0270-detection-and-hunting.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [FalconFriday](../solutions/falconfriday.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Malware Protection Essentials](../solutions/malware-protection-essentials.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (104)

### Analytic Rules (44)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**
- [Probable AdFind Recon Tool Usage](../content/attacker-tools-threat-protection-essentials-probable-adfind-recon-tool-usage-c63ae777-d5e0-4113-8c9a-c2c9d3d09fcd-3713de66.md)

**In solution [Dev 0270 Detection and Hunting](../solutions/dev-0270-detection-and-hunting.md):**
- [DEV-0270 New User Creation](../content/dev-0270-detection-and-hunting-dev-0270-new-user-creation-7965f0be-c039-4d18-8ee8-9a6add8aecf3-884bf05d.md)
- [Dev-0270 Malicious Powershell usage](../content/dev-0270-detection-and-hunting-dev-0270-malicious-powershell-usage-422ca2bf-598b-4872-82bb-5f7e8fa731e7-02bc41bc.md)
- [Dev-0270 Registry IOC - September 2022](../content/dev-0270-detection-and-hunting-dev-0270-registry-ioc-september-2022-2566e99f-ad0f-472a-b9ac-d3899c9283e6-d97be37a.md)
- [Dev-0270 WMIC  Discovery](../content/dev-0270-detection-and-hunting-dev-0270-wmic-discovery-6b652b4f-9810-4eec-9027-7aa88ce4db23-8289b5fe.md)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [Access Token Manipulation - Create Process with Token](../content/falconfriday-access-token-manipulation-create-process-with-token-8df80270-b4fa-4a7a-931e-8d17c0b321ae-d1e3f3fd.md)
- [DCOM Lateral Movement](../content/falconfriday-dcom-lateral-movement-d58035ff-0bac-4c61-a7f4-f58939ff9764-9dd841b7.md)
- [Detecting UAC bypass - ChangePK and SLUI registry tampering](../content/falconfriday-detecting-uac-bypass-changepk-and-slui-registry-tampering-829a69ba-93e1-491f-8a1f-b19506e9d88a-8d651a60.md)
- [Detecting UAC bypass - elevated COM interface](../content/falconfriday-detecting-uac-bypass-elevated-com-interface-2d5efc71-2e91-4ca2-8506-857eecb453ec-e0911a66.md)
- [Detecting UAC bypass - modify Windows Store settings](../content/falconfriday-detecting-uac-bypass-modify-windows-store-settings-8b8fbf9c-35d4-474b-8151-a40173521293-03123f75.md)
- [Disable or Modify Windows Defender](../content/falconfriday-disable-or-modify-windows-defender-20d52a04-b5d8-402d-88e2-7929d12cbdcd-3b3084de.md)
- [Ingress Tool Transfer - Certutil](../content/falconfriday-ingress-tool-transfer-certutil-f0be11a9-ec48-4df6-801d-479556044d4e-e41d03ca.md)
- [Match Legitimate Name or Location - 2](../content/falconfriday-match-legitimate-name-or-location-2-dd22dc4f-ab7c-4d0a-84ad-cc393638ba31-6d4321f9.md)
- [Oracle suspicious command execution](../content/falconfriday-oracle-suspicious-command-execution-e6c5ff42-0f42-4cec-994a-dabb92fe36e1-0ab82658.md)
- [Remote Desktop Protocol - SharpRDP](../content/falconfriday-remote-desktop-protocol-sharprdp-cc46e76c-0d04-40b0-9c8b-929aa40513e7-7ea028f9.md)
- [Rename System Utilities](../content/falconfriday-rename-system-utilities-335ddff8-b615-42cd-b593-86e419b45d78-753d3370.md)
- [SMB/Windows Admin Shares](../content/falconfriday-smb-windows-admin-shares-9da25366-2c77-41a5-a159-0da5e2f5fb90-2e2330d9.md)
- [Suspicious parentprocess relationship - Office child processes.](../content/falconfriday-suspicious-parentprocess-relationship-office-child-processes.-5ee34fa1-64ed-48c7-afa2-794b244f6c60-081c16fa.md)
- [Trusted Developer Utilities Proxy Execution](../content/falconfriday-trusted-developer-utilities-proxy-execution-5c2bb446-926f-4160-a233-21e335c2c290-aac01cd9.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect Malicious Usage of Recovery Tools to Delete Backup Files](../content/malware-protection-essentials-detect-malicious-usage-of-recovery-tools-to-delete-backup-files-259de2c1-c546-4c6d-a17c-df639722f4d7-f1d64838.md)
- [Process Creation with Suspicious CommandLine Arguments](../content/malware-protection-essentials-process-creation-with-suspicious-commandline-arguments-fdbcc0eb-44fb-467e-a51d-a91df0780a81-fc1c4a27.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Account Creation](../content/microsoft-defender-xdr-account-creation-450f4e56-5bba-4070-b9d9-9204ba9d777d-b3cc4be4.md)
- [Bitsadmin Activity](../content/microsoft-defender-xdr-bitsadmin-activity-2a1dc4c2-a8d6-4a0e-8539-9b971c851195-44faa570.md)
- [Clearing of forensic evidence from event logs using wevtutil](../content/microsoft-defender-xdr-clearing-of-forensic-evidence-from-event-logs-using-wevtutil-515d0bba-b297-4f83-8280-20ff7f27ecb1-b91bc0f3.md)
- [Deletion of data on multiple drives using cipher exe](../content/microsoft-defender-xdr-deletion-of-data-on-multiple-drives-using-cipher-exe-03caa992-477f-4b19-8e2a-8cd58f8f9652-a1302600.md)
- [Detect Suspicious Commands Initiated by Webserver Processes](../content/microsoft-defender-xdr-detect-suspicious-commands-initiated-by-webserver-processes-fa2f7d8a-6726-465a-aa72-6f6e3d4c99d7-6071b885.md)
- [Disabling Security Services via Registry](../content/microsoft-defender-xdr-disabling-security-services-via-registry-32b29155-3fd3-4a9e-a0ca-a67e2593b60b-e9f38271.md)
- [Doppelpaymer Stop Services](../content/microsoft-defender-xdr-doppelpaymer-stop-services-5bdc1504-880c-4b30-a39c-7c746535928d-6df3ea36.md)
- [DopplePaymer Procdump](../content/microsoft-defender-xdr-dopplepaymer-procdump-1be34fb9-f81b-47ae-84fb-465e6686d76c-cc25e831.md)
- [Execution of software vulnerable to webp buffer overflow of CVE-2023-4863](../content/microsoft-defender-xdr-execution-of-software-vulnerable-to-webp-buffer-overflow-of-cve-2023-4863-26e81021-2de6-4442-a74a-a77885e96911-15de3ea9.md)
- [Imminent Ransomware](../content/microsoft-defender-xdr-imminent-ransomware-bb46dd86-e642-48a4-975c-44f5ac2b5033-87169ff1.md)
- [Java Executing cmd to run Powershell](../content/microsoft-defender-xdr-java-executing-cmd-to-run-powershell-2c81c0a0-9823-4a14-b21a-2b4acd3335d2-106ea66a.md)
- [LSASS Credential Dumping with Procdump](../content/microsoft-defender-xdr-lsass-credential-dumping-with-procdump-c332b840-61e4-462e-a201-0e2d69bad45d-36f7eb44.md)
- [LaZagne Credential Theft](../content/microsoft-defender-xdr-lazagne-credential-theft-7d0d3050-8dac-4b83-bfae-902f7dc0c21c-2a344765.md)
- [Office Apps Launching Wscipt](../content/microsoft-defender-xdr-office-apps-launching-wscipt-174de33b-107b-4cd8-a85d-b4025a35453f-49a22465.md)
- [Potential Build Process Compromise - MDE](../content/microsoft-defender-xdr-potential-build-process-compromise-mde-1bf6e165-5e32-420e-ab4f-0da8558a8be2-c676927e.md)
- [Qakbot Campaign Self Deletion](../content/microsoft-defender-xdr-qakbot-campaign-self-deletion-47c02e21-3949-4e05-a28e-576cd75ff6f6-a7a7167c.md)
- [Qakbot Discovery Activies](../content/microsoft-defender-xdr-qakbot-discovery-activies-ba9db6b2-3d05-42ae-8aee-3a15bbe29f27-5676e3c6.md)
- [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-91a451e3-178f-41b2-9e5d-da97d75b9971-365d2f3a.md)
- [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-2624fc55-0998-4897-bb48-1c6422befce4-d1e3cdd5.md)
- [Shadow Copy Deletions](../content/microsoft-defender-xdr-shadow-copy-deletions-28c63a44-2d35-48b7-831b-3ed24af17c7e-dcc95706.md)
- [Stopping multiple processes using taskkill](../content/microsoft-defender-xdr-stopping-multiple-processes-using-taskkill-4dd31bd5-11a3-4b9c-a7c5-4927ab4f2a77-6e396de6.md)

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**
- [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md)
- [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md)

### Hunting Queries (55)

**In solution [Cyware](../solutions/cyware.md):**
- [Detecting Suspicious PowerShell Command Executions](../content/cyware-detecting-suspicious-powershell-command-executions-47559078-dc4c-4de3-96fe-270d4ca95446-741c48d3.md)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Backup Deletion](../content/endpoint-threat-protection-essentials-backup-deletion-56ebae61-89cf-42d9-99f4-3dff8ba33885-e1c87558.md)
- [Certutil (LOLBins and LOLScripts, Normalized Process Events)](../content/endpoint-threat-protection-essentials-certutil-lolbins-and-lolscripts,-normalized-process-events-eb022863-9ae2-41d4-b633-29e4d024b76f-bf894765.md)
- [Potential Microsoft Security Services Tampering](../content/endpoint-threat-protection-essentials-potential-microsoft-security-services-tampering-e10e1d2f-265d-4d90-9037-7f3a6ed8a91e-8c1dc76e.md)
- [Rare Windows Firewall Rule updates using Netsh](../content/endpoint-threat-protection-essentials-rare-windows-firewall-rule-updates-using-netsh-e3e8c913-e5e9-4517-b4f7-dd1ec071888f-d0fef21e.md)
- [Unicode Obfuscation in Command Line](../content/endpoint-threat-protection-essentials-unicode-obfuscation-in-command-line-a953f304-12e4-48ae-bedc-d58fb1b0c6a6-25c755ef.md)
- [Windows System Shutdown/Reboot (Normalized Process Events)](../content/endpoint-threat-protection-essentials-windows-system-shutdown-reboot-normalized-process-events-5db1f6f9-9de9-43a9-b7cc-357486b42fc6-4a6147b7.md)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**
- [Dev-0056 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0056-command-line-activity-november-2021-e2629949-2043-4421-8064-bca23c8491dd-1cdb73c2.md)
- [Dev-0322 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-command-line-activity-november-2021-78fa22f9-0c13-4847-bbe6-6a7aa1b47547-84856956.md)
- [Dev-0322 File Drop Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-file-drop-activity-november-2021-5bf2d4d8-ea03-4673-aaf8-716a61446022-414e8f6c.md)
- [Nylon Typhoon Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-nylon-typhoon-command-line-activity-november-2021-bb30abbc-9af6-4a37-9536-e9207e023989-bdd1efea.md)
- [SolarWinds Inventory](../content/legacy-ioc-based-threat-protection-solarwinds-inventory-278592b5-612b-48a4-bb38-4c01ff8ee2a5-c7f23741.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect New Scheduled Task Creation that Run Executables From Non-Standard Location](../content/malware-protection-essentials-detect-new-scheduled-task-creation-that-run-executables-from-non-standard--b43394b9-fa91-4d98-b331-619926a933bb-d0df99aa.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Account Creation](../content/microsoft-defender-xdr-account-creation-d0585c34-1b03-473c-938d-11fe73f7e053-4486ca7f.md)
- [Anomalous Payload Delivered from ISO files](../content/microsoft-defender-xdr-anomalous-payload-delivered-from-iso-files-14694b88-a6e9-4cd1-9c4a-e382bdd82d8d-9bc45897.md)
- [Bitsadmin Activity](../content/microsoft-defender-xdr-bitsadmin-activity-bba7bbbe-5aa3-4c08-bd23-dd6cd8ccaf20-7a642ef6.md)
- [Check for multiple signs of Ransomware Activity](../content/microsoft-defender-xdr-check-for-multiple-signs-of-ransomware-activity-4f669adc-2c00-4bc8-896b-e59f068dcb18-164f406c.md)
- [Clear System Logs](../content/microsoft-defender-xdr-clear-system-logs-6284b962-ab0d-46d8-a47f-1eb1ac1be463-c8af8f2d.md)
- [Clearing of forensic evidence from event logs using wevtutil](../content/microsoft-defender-xdr-clearing-of-forensic-evidence-from-event-logs-using-wevtutil-3dd9ab09-0ea3-4f47-ba10-f84045ab52c3-f7cf440c.md)
- [Credential Harvesting Using LaZagne](../content/microsoft-defender-xdr-credential-harvesting-using-lazagne-79f9bb6b-6d31-412e-b3bc-6e5ad1303112-a9fbb57d.md)
- [DLLHost.exe WMIC domain discovery](../content/microsoft-defender-xdr-dllhost.exe-wmic-domain-discovery-f086d58b-c44b-4fae-903b-f65ad042a4ee-83b2c14e.md)
- [Deletion of data on multiple drives using cipher exe](../content/microsoft-defender-xdr-deletion-of-data-on-multiple-drives-using-cipher-exe-cb2fb8f9-89bd-485e-8422-da8cb6c7bc23-f8c40db4.md)
- [Detect MaiSniper](../content/microsoft-defender-xdr-detect-maisniper-e17ddfc6-7478-443b-99ff-286f3d09b8aa-ab6dfb83.md)
- [Detect Malicious use of MSIExec](../content/microsoft-defender-xdr-detect-malicious-use-of-msiexec-7a5597de-7e99-470d-944f-acb163b9cb14-a76d8af7.md)
- [Detect Malicious use of Msiexec Mimikatz](../content/microsoft-defender-xdr-detect-malicious-use-of-msiexec-mimikatz-58e6170e-0512-4485-9638-463fdde85b0e-0de34535.md)
- [Detect Suspicious Commands Initiated by Webserver Processes](../content/microsoft-defender-xdr-detect-suspicious-commands-initiated-by-webserver-processes-fa2f7d8a-6726-465a-aa72-6f6e3d4c99d7-f6d9e7c9.md)
- [Detect Suspicious Mshta Usage](../content/microsoft-defender-xdr-detect-suspicious-mshta-usage-81f02314-2ff5-45cb-a35d-0deb546a0104-6bc93255.md)
- [Disabling Services via Registry](../content/microsoft-defender-xdr-disabling-services-via-registry-06ea5081-cdea-40c8-b829-240ece951243-b119d09b.md)
- [Doppelpaymer Stop Services](../content/microsoft-defender-xdr-doppelpaymer-stop-services-abf42310-51c7-4d7f-98d2-e5af09859aab-837c2062.md)
- [DopplePaymer Procdump](../content/microsoft-defender-xdr-dopplepaymer-procdump-89b31213-4350-4730-8d27-26667ce53894-14013cca.md)
- [Enumeration of Users & Groups for Lateral Movement](../content/microsoft-defender-xdr-enumeration-of-users-&-groups-for-lateral-movement-29683151-e15d-4c0c-845b-892be89bf080-776e21b6.md)
- [Imminent Ransomware](../content/microsoft-defender-xdr-imminent-ransomware-846bf25e-3d2d-4122-9b60-adfadd2fc616-8ac809d0.md)
- [Java Executing cmd to run Powershell](../content/microsoft-defender-xdr-java-executing-cmd-to-run-powershell-a18e8bcf-e05d-4e45-bc6e-2c5004729fbd-5f3d8e5c.md)
- [Judgement Panda Exfil Activity](../content/microsoft-defender-xdr-judgement-panda-exfil-activity-d7b7dcad-d806-4a61-b8fc-0d7c9c45bdec-328fcbc7.md)
- [LSASS Credential Dumping with Procdump](../content/microsoft-defender-xdr-lsass-credential-dumping-with-procdump-0b985ed8-aacd-41ba-9b17-489be9224159-bfd6b1c4.md)
- [LaZagne Credential Theft](../content/microsoft-defender-xdr-lazagne-credential-theft-829cf5ba-39d5-4986-814e-d46f8437c27b-582ee4d3.md)
- [MITRE - Suspicious Events](../content/microsoft-defender-xdr-mitre-suspicious-events-8722489a-d6f1-4b66-98e9-e3dfda902019-d9aac0e5.md)
- [Malicious Use of MSBuild as LOLBin](../content/microsoft-defender-xdr-malicious-use-of-msbuild-as-lolbin-1850a459-b009-43d0-a575-8284b737eef8-536fff50.md)
- [Office Apps Launching Wscipt](../content/microsoft-defender-xdr-office-apps-launching-wscipt-fe912310-32f5-4256-933b-d4b45e7e6e54-b7198749.md)
- [Possible Teams phishing activity](../content/microsoft-defender-xdr-possible-teams-phishing-activity-01cf63bd-debd-4d03-847c-d19c31844501-3b0f03e4.md)
- [PowerShell Downloads](../content/microsoft-defender-xdr-powershell-downloads-3842e70d-45be-43b1-8206-4ebc4c305f34-740af97e.md)
- [PowerShell adding exclusion path for Microsoft Defender of ProgramData](../content/microsoft-defender-xdr-powershell-adding-exclusion-path-for-microsoft-defender-of-programdata-88707168-d4a4-4ca7-a516-b2ee0310af1b-015fc198.md)
- [Qakbot Campaign Self Deletion](../content/microsoft-defender-xdr-qakbot-campaign-self-deletion-63ecff0f-3a86-468b-8c9e-a7a88fe33ebb-060f18ee.md)
- [Qakbot Discovery Activies](../content/microsoft-defender-xdr-qakbot-discovery-activies-e18109aa-f252-48ec-b115-1b7c16e1174f-741aed07.md)
- [Qakbot Reconnaissance Activities](../content/microsoft-defender-xdr-qakbot-reconnaissance-activities-d6991ef1-b225-4780-b6a6-cfe9b5278f5e-9d2f618d.md)
- [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-96976bb1-1993-45b8-a477-8236ee93976b-cf1c1157.md)
- [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-54ea2379-28e7-48e1-8dfd-aaf8fb1331ba-f2e2f8cf.md)
- [Shadow Copy Deletions](../content/microsoft-defender-xdr-shadow-copy-deletions-aa3a8508-c0ff-404d-8d5c-4e7f548b0d86-2314d5da.md)
- [Spoolsv Spawning Rundll32](../content/microsoft-defender-xdr-spoolsv-spawning-rundll32-3cc2127f-d9ca-46a0-9628-89f702be82b3-a70aa85d.md)
- [Stopping multiple processes using taskkill](../content/microsoft-defender-xdr-stopping-multiple-processes-using-taskkill-4dd31bd5-11a3-4b9c-a7c5-4927ab4f2a77-452d3cd2.md)
- [Suspicious Tomcat Confluence Process Launch](../content/microsoft-defender-xdr-suspicious-tomcat-confluence-process-launch-c5b3e559-7c44-442c-9e73-c753abb02c13-64887431.md)
- [Turning off services using sc exe](../content/microsoft-defender-xdr-turning-off-services-using-sc-exe-9674f529-f0e9-4305-862d-479ccc9e28f1-0bc91883.md)
- [Webserver Executing Suspicious Applications](../content/microsoft-defender-xdr-webserver-executing-suspicious-applications-761230a3-71ad-4522-bfbc-1dca698ffc42-109b5a61.md)

**In solution [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md):**
- [Probable AdFind Recon Tool Usage](../content/microsoftdefenderforendpoint-probable-adfind-recon-tool-usage-c63ae777-d5e0-4113-8c9a-c2c9d3d09fcd-d6063f03.md)
- [SUNBURST suspicious SolarWinds child processes](../content/microsoftdefenderforendpoint-sunburst-suspicious-solarwinds-child-processes-4a3073ac-7383-48a9-90a8-eb6716183a54-27b732fb.md)

### Workbooks (5)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [MalwareProtectionEssentialsWorkbook](../content/malware-protection-essentials-malwareprotectionessentialsworkbook-df9a8a0a.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
