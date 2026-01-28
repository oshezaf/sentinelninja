# DeviceEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Multiple event types, including events triggered by security controls such as Microsoft Defender Antivirus and exploit protection

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-deviceevents-table) |

## Solutions (10)

This table is used by the following solutions:

- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [FalconFriday](../solutions/falconfriday.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (108)

### Analytic Rules (21)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):** `ActionType == "PowerShellCommand"`

| Content Item |
|:-------------|
| [Suspicious Powershell Commandlet Executed](../content/endpoint-threat-protection-essentials-suspicious-powershell-commandlet-executed-b5153fb3-ada9-4ce4-9131-79c771efb50d-34e7bcf0.md) |

**In solution [FalconFriday](../solutions/falconfriday.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Office ASR rule triggered from browser spawned office process.](../content/falconfriday-office-asr-rule-triggered-from-browser-spawned-office-process.-30580043-2451-4d35-b49f-065728529f4a-65634609.md) | `ActionType contains "Office"` |
| [Suspicious Process Injection from Office application](../content/falconfriday-suspicious-process-injection-from-office-application-a4d8e681-6f30-440a-a2f3-c312bc1389d0-f6ee7c3b.md) | `ActionType in "CreateRemoteThreadApiCall,QueueUserApcRemoteApiCall,SetThreadContextRemoteApiCall"` |
| [Suspicious named pipes](../content/falconfriday-suspicious-named-pipes-ddf7c669-db26-4215-acaf-11e2953a04e6-377a4889.md) | `ActionType == "NamedPipeEvent"` |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress in DeviceEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-deviceevents-fa566691-42a2-4136-6a8b-ffa3ea510000-675847d2.md) |  |

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Terminated employee exfiltration to USB drive](../content/microsoft-business-applications-dataverse-terminated-employee-exfiltration-to-usb-drive-c5e75cb6-cea0-49c2-a998-da414035aac1-627b05d7.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [C2-NamedPipe](../content/microsoft-defender-xdr-c2-namedpipe-7ce00cba-f76f-4026-ab7f-7e4f1b67bd18-5ae9733b.md) | `ActionType == "NamedPipeEvent"` |
| [Deimos Component Execution](../content/microsoft-defender-xdr-deimos-component-execution-c25a8cd4-5b4a-45a8-9ba0-3b753a652f6b-a4a127b5.md) | `ActionType == "AmsiScriptContent"` |
| [Execution of software vulnerable to webp buffer overflow of CVE-2023-4863](../content/microsoft-defender-xdr-execution-of-software-vulnerable-to-webp-buffer-overflow-of-cve-2023-4863-26e81021-2de6-4442-a74a-a77885e96911-15de3ea9.md) |  |
| [Files Copied to USB Drives](../content/microsoft-defender-xdr-files-copied-to-usb-drives-3ab04acf-e0e7-4f7c-8995-748ab4c848c2-7d23d298.md) | `ActionType in "FileCreated,UsbDriveMounted"` |
| [Local Admin Group Changes](../content/microsoft-defender-xdr-local-admin-group-changes-63aa43c2-e88e-4102-aea5-0432851c541a-92e9a57c.md) | `ActionType == "UserAccountAddedToLocalGroup"`<br>`ActionType contains "UserAccountCreated"`<br>`ActionType contains "UserAccountModified"` |
| [Possible Phishing with CSL and Network Sessions](../content/microsoft-defender-xdr-possible-phishing-with-csl-and-network-sessions-6c3a1258-bcdd-4fcd-b753-1a9bc826ce12-631549a4.md) |  |
| [SUNSPOT malware hashes](../content/microsoft-defender-xdr-sunspot-malware-hashes-53e936c6-6c30-4d12-8343-b8a0456e8429-b7f28a72.md) |  |
| [TEARDROP memory-only dropper](../content/microsoft-defender-xdr-teardrop-memory-only-dropper-738702fd-0a66-42c7-8586-e30f0583f8fe-9b854574.md) | `ActionType has "ExploitGuardNonMicrosoftSignedBlocked"` |

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md) |  |
| [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ADFS DKM Master Key Export](../content/standalone-content-adfs-dkm-master-key-export-18e6a87e-9d06-4a4e-8b59-3469cd49552d-b85786be.md) |  |
| [Azure VM Run Command operations executing a unique PowerShell script](../content/standalone-content-azure-vm-run-command-operations-executing-a-unique-powershell-script-5239248b-abfb-4c6a-8177-b104ade5db56-babdd66c.md) |  |
| [Mass Download & copy to USB device by single user](../content/standalone-content-mass-download-&-copy-to-usb-device-by-single-user-6267ce44-1e9d-471b-9f1e-ae76a6b7aa84-8c8cd6f4.md) | `ActionType in "FileCreated,FileDownloaded,FileRenamed,UsbDriveMounted"` |
| [Prestige ransomware IOCs Oct 2022](../content/standalone-content-prestige-ransomware-iocs-oct-2022-bca9c877-2afc-4246-a26d-087ab1cdcd5f-ab904866.md) |  |
| [Windows host username encoded in base64 web request](../content/standalone-content-windows-host-username-encoded-in-base64-web-request-6e715730-82c0-496c-983b-7a20c4590bd9-92229d72.md) |  |

### Hunting Queries (76)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):** `ActionType == "PowerShellCommand"`

| Content Item |
|:-------------|
| [Suspicious Powershell Commandlet Execution](../content/endpoint-threat-protection-essentials-suspicious-powershell-commandlet-execution-8f424a4c-0487-45a3-92b8-00a7a8745b69-41451793.md) |

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Dataverse export copied to USB devices](../content/microsoft-business-applications-dataverse-dataverse-export-copied-to-usb-devices-f9658e11-e277-4a65-8f91-2cb94cf7497c-664d805c.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Anomalous Payload Delivered from ISO files](../content/microsoft-defender-xdr-anomalous-payload-delivered-from-iso-files-14694b88-a6e9-4cd1-9c4a-e382bdd82d8d-9bc45897.md) | `ActionType == "BrowserLaunchedToOpenUrl"` |
| [C2-NamedPipe](../content/microsoft-defender-xdr-c2-namedpipe-f78255b6-8f91-4cf3-a25c-e1144b7b5425-80263449.md) | `ActionType == "NamedPipeEvent"` |
| [Deimos Component Execution](../content/microsoft-defender-xdr-deimos-component-execution-fe9edc77-1b6c-4f1e-a223-64b580b50187-8ca8263a.md) | `ActionType == "AmsiScriptContent"` |
| [Files Copied to USB Drives](../content/microsoft-defender-xdr-files-copied-to-usb-drives-f350f0e7-0e52-434c-a113-197883219f00-69c4055e.md) | `ActionType in "FileCreated,UsbDriveMounted"` |
| [LemonDuck Registration Function](../content/microsoft-defender-xdr-lemonduck-registration-function-147c4c0a-7241-4ce9-9b71-0aecb8a2b59f-ddd37db7.md) | `ActionType == "PowerShellCommand"` |
| [Local Admin Group Changes](../content/microsoft-defender-xdr-local-admin-group-changes-63142c12-5d8b-48cf-a0f6-b523c855497c-cbc59b70.md) | `ActionType == "UserAccountAddedToLocalGroup"`<br>`ActionType contains "UserAccountCreated"`<br>`ActionType contains "UserAccountModified"` |
| [Scheduled Task Creation](../content/microsoft-defender-xdr-scheduled-task-creation-1ddee78f-7508-4f4a-9b6b-d2927724217d-545713ce.md) | `ActionType == "ScheduledTaskCreated"` |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MDE_AVScanTimesAndType](../content/standalone-content-mde-avscantimesandtype-0a3ddbb6-d691-4cc5-aca1-1fe780258163-08a3924f.md) | `ActionType in "AntivirusScanCancelled,AntivirusScanCompleted"` |
| [MDE_BlockingASRRules](../content/standalone-content-mde-blockingasrrules-ffa67017-fb8e-4706-9651-5911f96c1f20-fd209a7b.md) | `ActionType startswith "ASR"` |
| [MDE_ListAlPnPDevicesAllowedorBlocked](../content/standalone-content-mde-listalpnpdevicesallowedorblocked-d99350b8-212d-42b9-b336-62f870453c5c-de3d93fc.md) | `ActionType in "PnpDeviceAllowed,PnpDeviceBlocked"` |
| [MDE_ShowUSBMountedDevicesAndDriveLetter](../content/standalone-content-mde-showusbmounteddevicesanddriveletter-fd57f946-9d0c-4c80-af9f-4bcd8257bd4d-8ed06969.md) | `ActionType contains "USB"` |
| [MDE_ShowUSBMountedandfilescopied](../content/standalone-content-mde-showusbmountedandfilescopied-ca4cf47f-6dfd-487a-a759-01d97120bfe2-66f21ec5.md) | `ActionType == "FileCreated"`<br>`ActionType contains "USB"` |
| [MDE_SmartScreenCheck](../content/standalone-content-mde-smartscreencheck-dde77b9b-799c-44c8-adfa-45007f312487-10770797.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ARS Ransomware Event triggered](../content/github-only-ars-ransomware-event-triggered-ff9a1b12-e446-44ff-a576-7f53caa32044-dee8c375.md) | `ActionType has_any "AsrRansomwareAudited,AsrRansomwareBlocked"` |
| [ASR rules categorized detection graph](../content/github-only-asr-rules-categorized-detection-graph-4a7bf574-fe5f-4168-97e7-5a8aa19a5eed-072334aa.md) | `ActionType in "AsrAdobeReaderChildProcessBlocked,AsrExecutableEmailContentBlocked,AsrExecutableOfficeContentBlocked,AsrLsassCredentialTheftBlocked,AsrObfuscatedScriptBlocked,AsrOfficeChildProcessBlocked,AsrOfficeCommAppChildProcessBlocked,AsrOfficeMacroWin32ApiCallsBlocked,AsrOfficeProcessInjectionBlocked,AsrPersistenceThroughWmiBlocked,AsrPsexecWmiChildProcessBlocked,AsrRansomwareBlocked,AsrScriptExecutableDownloadBlocked,AsrUntrustedExecutableBlocked,AsrUntrustedUsbProcessBlocked,AsrVulnerableSignedDriverBlocked"`<br>`ActionType startswith "asr"` |
| [AV Detections with Source](../content/github-only-av-detections-with-source-52c9e90b-84f4-4e2d-ae3d-eef85e8aa069-0c3cb3a4.md) |  |
| [AV Detections with USB Disk Drive](../content/github-only-av-detections-with-usb-disk-drive-12198f2f-c53b-4617-8df8-120c66cbb373-fe2a71b5.md) | `ActionType in "AntivirusDetection,PnpDeviceConnected"` |
| [Antivirus detections](../content/github-only-antivirus-detections-aa9ad4ae-a19a-4262-b151-8a723227bc4e-450dbcb7.md) | `ActionType == "AntivirusDetection"` |
| [Azure VM Run Command linked with MDE](../content/github-only-azure-vm-run-command-linked-with-mde-55fbc363-6cc9-4201-bd68-d980b612082b-bf841a1b.md) |  |
| [Baseline Comparison](../content/github-only-baseline-comparison-4d17ae75-87e8-4272-9aec-16448b1430bc-6e7e6931.md) |  |
| [C2-NamedPipe](../content/github-only-c2-namedpipe-ec3f7141-383e-4f32-b698-ba2ee1852c9c-d8d0259c.md) | `ActionType == "NamedPipeEvent"` |
| [Create account (1)](../content/github-only-create-account-1-eba83f84-b844-4fc9-96f4-cb51b0b20c1d-dd413b60.md) | `ActionType == "UserAccountCreated"` |
| [DNSPattern [Nobelium]](../content/github-only-dnspattern-[nobelium]-6c87bdb8-a44e-452a-b782-542640d985e3-79e5127f.md) |  |
| [Doc attachment with link to download](../content/github-only-doc-attachment-with-link-to-download-cf259a7a-801a-435a-af3f-3ef998561145-16155f72.md) |  |
| [Email link + download + SmartScreen warning](../content/github-only-email-link-+-download-+-smartscreen-warning-b29c75ca-a110-4c58-8d0b-6afac6d61078-bc09f2d6.md) |  |
| [EncodedDomainURL [Nobelium]](../content/github-only-encodeddomainurl-[nobelium]-c561bf69-6a6c-4d0a-960a-b69e0e7c8f51-72f5ce64.md) |  |
| [ExploitGuardASRStats](../content/github-only-exploitguardasrstats-4302c0fa-dda5-4a6a-b29a-a96736bce088-5eed5631.md) | `ActionType endswith "Audited"`<br>`ActionType startswith "Asr"` |
| [ExploitGuardASRStats (1)](../content/github-only-exploitguardasrstats-1-f809e596-87ff-4849-8eeb-cc636f0c92a0-c13848fe.md) | `ActionType endswith "Blocked"`<br>`ActionType startswith "Asr"` |
| [ExploitGuardASRStats (2)](../content/github-only-exploitguardasrstats-2-d8892c99-08d2-4385-a767-0754c41d7fb9-99596fbe.md) | `ActionType endswith "Audited"`<br>`ActionType startswith "ASR"` |
| [ExploitGuardAsrDescriptions](../content/github-only-exploitguardasrdescriptions-8ab60d62-b4a3-431b-8cd9-9a080213afc0-a616ad1a.md) | `ActionType startswith "Asr"` |
| [ExploitGuardBlockOfficeChildProcess](../content/github-only-exploitguardblockofficechildprocess-835e8f87-f387-4ee5-ab79-d03b5e5e816b-ea563944.md) | `ActionType == "AsrOfficeChildProcessBlocked"` |
| [ExploitGuardBlockOfficeChildProcess (2)](../content/github-only-exploitguardblockofficechildprocess-2-6df0dd4f-5572-4ab9-bde7-1f322547bff7-de31c46a.md) | `ActionType == "AsrOfficeChildProcessBlocked"` |
| [ExploitGuardControlledFolderAccess](../content/github-only-exploitguardcontrolledfolderaccess-c4e021bc-59f8-4464-9f93-3b08d8b28cc3-8c89c23c.md) | `ActionType startswith "ControlledFolderAccess"` |
| [ExploitGuardControlledFolderAccess (1)](../content/github-only-exploitguardcontrolledfolderaccess-1-ce33163e-68ba-470e-8641-ed61d43d38e1-cca44516.md) | `ActionType startswith "ControlledFolderAccess"` |
| [ExploitGuardControlledFolderAccess (2)](../content/github-only-exploitguardcontrolledfolderaccess-2-01dacb6d-4964-42a5-b248-516fc40d605d-7160a920.md) | `ActionType contains "ControlledFolderAccess"` |
| [ExploitGuardNetworkProtectionEvents](../content/github-only-exploitguardnetworkprotectionevents-47bf14f0-c6b7-4dd3-a13f-b9a3e7972e2f-6863dd06.md) | `ActionType == "ExploitGuardNetworkProtectionBlocked"` |
| [ExploitGuardStats](../content/github-only-exploitguardstats-e76703a0-21f4-4c20-8d4b-92e1768cf240-763cd670.md) | `ActionType endswith "Blocked"`<br>`ActionType startswith "ExploitGuard"` |
| [ExploitGuardStats (1)](../content/github-only-exploitguardstats-1-263f7a27-7c44-4e28-adc3-df5cb3fdc2bb-179ea306.md) | `ActionType endswith "Audited"`<br>`ActionType startswith "ExploitGuard"` |
| [Files copied to USB drives](../content/github-only-files-copied-to-usb-drives-fc2c5bbb-5347-4903-87e6-c2c76c43e420-289491f6.md) | `ActionType in "FileCreated,UsbDriveMounted"` |
| [LemonDuck-registration-function](../content/github-only-lemonduck-registration-function-9e963c83-c569-4c9e-a729-d8f7ca05464d-b1642697.md) | `ActionType == "PowerShellCommand"` |
| [LocalAdminGroupChanges](../content/github-only-localadmingroupchanges-dd2c4f48-b732-4a75-b2c4-b44bacc66d00-632cb4a0.md) | `ActionType == "UserAccountAddedToLocalGroup"`<br>`ActionType contains "UserAccountCreated"`<br>`ActionType contains "UserAccountModified"` |
| [Map external devices](../content/github-only-map-external-devices-10838671-0c35-4d5b-95f8-06d5b4d5bf61-c41b8511.md) | `ActionType == "PnpDeviceConnected"` |
| [Map external devices (1)](../content/github-only-map-external-devices-1-a091241a-5df7-497f-b4fa-b36641e7373d-9afa448b.md) | `ActionType == "PnpDeviceConnected"` |
| [Open email link](../content/github-only-open-email-link-67be3fdd-6942-45f8-8663-d825b61d1ab9-581f8253.md) | `ActionType == "BrowserLaunchedToOpenUrl"` |
| [PUA ThreatName per Computer](../content/github-only-pua-threatname-per-computer-1a954599-aa03-421d-a35f-dbe18859bdd5-f8b0f109.md) | `ActionType == "AntivirusDetection"` |
| [Pivot from detections to related downloads](../content/github-only-pivot-from-detections-to-related-downloads-351f7035-836c-4f4b-80bb-188220ba9215-f029976d.md) |  |
| [Possible File Copy to USB Drive](../content/github-only-possible-file-copy-to-usb-drive-34be41b9-eddf-43ca-b208-5b912937f496-537e220c.md) |  |
| [PowershellCommand - uncommon commands on machine](../content/github-only-powershellcommand-uncommon-commands-on-machine-7d3acc08-312c-4139-85c9-f08299b79932-977320bd.md) | `ActionType == "PowerShellCommand"` |
| [PowershellCommand footprint](../content/github-only-powershellcommand-footprint-261d966b-5c1a-4d28-b444-3a8caac6246e-d15f6c91.md) | `ActionType == "PowerShellCommand"` |
| [SmartScreen URL block ignored by user](../content/github-only-smartscreen-url-block-ignored-by-user-172e5bee-9298-4c59-bd2a-e96d87e8e6d8-a0038d18.md) |  |
| [SmartScreen app block ignored by user](../content/github-only-smartscreen-app-block-ignored-by-user-333ad16e-620b-4f36-af3b-da33f8d16cc2-14dcf47d.md) | `ActionType in "SmartScreenAppWarning,SmartScreenUserOverride"` |
| [SuspiciousUrlClicked](../content/github-only-suspiciousurlclicked-959f8d6a-53b8-488f-a628-999b3410702e-9def1dab.md) |  |
| [System Guard Security Level Baseline](../content/github-only-system-guard-security-level-baseline-9365b174-d46f-41e9-998a-73e2fe5ae2d9-53d816b4.md) | `ActionType == "DeviceBootAttestationInfo"` |
| [System Guard Security Level Drop](../content/github-only-system-guard-security-level-drop-701bee2f-c4d9-4f72-be03-e6bb1314e71c-7da994da.md) | `ActionType == "DeviceBootAttestationInfo"` |
| [User navigation to redirected URL](../content/github-only-user-navigation-to-redirected-url-daf19704-a996-4df7-9a0b-3efac47fea5a-b78fb1a5.md) | `ActionType == "BrowserLaunchedToOpenUrl"` |
| [Web Content Filtering Events](../content/github-only-web-content-filtering-events-7f7a796d-1511-4930-b9da-5971db4352ec-21b59992.md) | `ActionType in "ExploitGuardNetworkProtectionAudited,ExploitGuardNetworkProtectionBlocked"`<br>`ActionType startswith "SmartScreenUrl"` |
| [Windows filtering events (Firewall)](../content/github-only-windows-filtering-events-firewall-fb02b8f1-1eb9-43f9-b6e6-cca78a323f2b-a1e4e18e.md) | `ActionType in "FirewallInboundConnectionBlocked,FirewallInboundConnectionToAppBlocked,FirewallOutboundConnectionBlocked"` |
| [anomalous-payload-delivered-from-iso-file](../content/github-only-anomalous-payload-delivered-from-iso-file-3539f855-611c-4787-b8a9-e3437f138805-3eb29c28.md) | `ActionType == "BrowserLaunchedToOpenUrl"` |
| [c2-lookup-from-nonbrowser[Nobelium]](../content/github-only-c2-lookup-from-nonbrowser[nobelium]-f7dd2c5f-7bb3-4a0a-80a1-45c4d79e4c03-b27a688b.md) | `ActionType == "DnsQueryResponse"` |
| [c2-lookup-response[Nobelium]](../content/github-only-c2-lookup-response[nobelium]-4417c444-6ff7-47db-bde0-b6b9ef1b9080-700dd29f.md) | `ActionType == "DnsQueryResponse"` |
| [deimos-component-execution](../content/github-only-deimos-component-execution-0e86928c-cc9f-494c-a79e-04f647eb5ef8-b6e4ffdf.md) | `ActionType == "AmsiScriptContent"` |
| [detect-impacket-atexec](../content/github-only-detect-impacket-atexec-75e3a1b2-bd6d-4e79-8c74-85a3bc0b0617-a33eaf14.md) | `ActionType in "NamedPipeEvent,RegistryKeyCreated"` |
| [detect-impacket-psexec-module](../content/github-only-detect-impacket-psexec-module-6e6e6486-1bfc-4de0-bcbe-1ed88dfee2a1-ba6e359d.md) |  |
| [detect-impacket-wmiexec](../content/github-only-detect-impacket-wmiexec-e5c65f1f-2bf8-4b42-af8b-1f6adfeda0cc-f0a94abb.md) |  |
| [detect-impacket-wmiexec](../content/github-only-detect-impacket-wmiexec-e5c65f1f-2bf8-4b42-af8b-1f6adfeda0cc-32647bb7.md) |  |
| [detect-impacket-wmiexec](../content/github-only-detect-impacket-wmiexec-e5c65f1f-2bf8-4b42-af8b-1f6adfeda0cc-afdcfc01.md) |  |
| [detect-impacket-wmipersist](../content/github-only-detect-impacket-wmipersist-34167b0d-f295-4b30-8555-d8fa6990cde5-ae3536ba.md) | `ActionType == "WmiBindEventFilterToConsumer"` |
| [insider-threat-detection-queries (12)](../content/github-only-insider-threat-detection-queries-12-e86221a2-7961-440a-a759-8c7a1fbe40b2-bebb320c.md) | `ActionType == "UserAccountCreated"` |
| [insider-threat-detection-queries (19)](../content/github-only-insider-threat-detection-queries-19-a358a812-0e1b-4cbb-a91c-0bb1dbd3ea13-e876eef3.md) | `ActionType == "UserAccountCreated"` |
| [insider-threat-detection-queries (4)](../content/github-only-insider-threat-detection-queries-4-1b6d19d5-c1f9-43b0-8db6-1c44c3c965b3-76c5d77a.md) | `ActionType startswith "ScreenshotTaken"` |
| [lsass-credential-dumping](../content/github-only-lsass-credential-dumping-a50138af-4bad-4615-9e55-ced36a836806-0a5fbccf.md) |  |
| [rare_sch_task_with_activity](../content/github-only-rare-sch-task-with-activity-ce76992a-8cd6-4605-9f45-cde9aae87244-3f342058.md) |  |
| [scheduled task creation](../content/github-only-scheduled-task-creation-34208765-264e-4abe-805b-f645925fbadb-b5b47dbc.md) | `ActionType == "ScheduledTaskCreated"` |
| [snip3-detectsanboxie-function-call](../content/github-only-snip3-detectsanboxie-function-call-32664c67-34d7-4c7a-88cd-c48b55b7ef91-c112772e.md) | `ActionType == "PowerShellCommand"` |

### Workbooks (11)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):** `ActionType in "Add member to role,Add user,FileCreated,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user,UsbDriveMounted"`

| Content Item |
|:-------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType in "AntivirusDetection,PnpDeviceConnected"`<br>`ActionType endswith "Audited"`<br>`ActionType endswith "Blocked"`<br>`ActionType startswith "Asr"`

| Content Item |
|:-------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |

**In solution [SOC Handbook](../solutions/soc-handbook.md):** `ActionType startswith "Asr"`

| Content Item |
|:-------------|
| [AttackSurfaceReduction](../content/soc-handbook-attacksurfacereduction-52743d4b.md) |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AttackSurfaceReduction](../content/github-only-attacksurfacereduction-31c2d611.md) | `ActionType startswith "Asr"` |
| [DoDZeroTrustWorkbook](../content/github-only-dodzerotrustworkbook-844294c8.md) | `ActionType == "AntivirusScanCompleted"`<br>`ActionType startswith "Asr"` |
| [ExchangeCompromiseHunting](../content/github-only-exchangecompromisehunting-4fe3c3f0.md) |  |
| [MicrosoftDefenderForEndPoint](../content/github-only-microsoftdefenderforendpoint-ac005534.md) | `ActionType in "AntivirusDetection,PnpDeviceConnected"`<br>`ActionType endswith "Audited"`<br>`ActionType endswith "Blocked"`<br>`ActionType startswith "Asr"` |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |
| [SolarWindsPostCompromiseHunting](../content/github-only-solarwindspostcompromisehunting-09062974.md) | `ActionType contains "ExploitGuardNonMicrosoftSignedBlocked"` |
| [ZeroTrustStrategyWorkbook](../content/github-only-zerotruststrategyworkbook-cd80dc2b.md) | `ActionType == "AntivirusScanCompleted"`<br>`ActionType startswith "Asr"` |

## Selection Criteria Summary (42 criteria, 70 total references)

References by type: 0 connectors, 70 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType == "PowerShellCommand"` | - | 7 | - | - | **7** |
| `ActionType == "NamedPipeEvent"` | - | 4 | - | - | **4** |
| `ActionType == "BrowserLaunchedToOpenUrl"` | - | 4 | - | - | **4** |
| `ActionType in "FileCreated,UsbDriveMounted"` | - | 3 | - | - | **3** |
| `ActionType == "UserAccountAddedToLocalGroup"`<br>`ActionType contains "UserAccountCreated"`<br>`ActionType contains "UserAccountModified"` | - | 3 | - | - | **3** |
| `ActionType == "AmsiScriptContent"` | - | 3 | - | - | **3** |
| `ActionType == "UserAccountCreated"` | - | 3 | - | - | **3** |
| `ActionType == "ScheduledTaskCreated"` | - | 2 | - | - | **2** |
| `ActionType == "DnsQueryResponse"` | - | 2 | - | - | **2** |
| `ActionType == "PnpDeviceConnected"` | - | 2 | - | - | **2** |
| `ActionType == "DeviceBootAttestationInfo"` | - | 2 | - | - | **2** |
| `ActionType == "AntivirusDetection"` | - | 2 | - | - | **2** |
| `ActionType startswith "Asr"` | - | 2 | - | - | **2** |
| `ActionType == "AsrOfficeChildProcessBlocked"` | - | 2 | - | - | **2** |
| `ActionType startswith "ControlledFolderAccess"` | - | 2 | - | - | **2** |
| `ActionType contains "Office"` | - | 1 | - | - | **1** |
| `ActionType in "CreateRemoteThreadApiCall,QueueUserApcRemoteApiCall,SetThreadContextRemoteApiCall"` | - | 1 | - | - | **1** |
| `ActionType has "ExploitGuardNonMicrosoftSignedBlocked"` | - | 1 | - | - | **1** |
| `ActionType in "FileCreated,FileDownloaded,FileRenamed,UsbDriveMounted"` | - | 1 | - | - | **1** |
| `ActionType in "AsrAdobeReaderChildProcessBlocked,AsrExecutableEmailContentBlocked,AsrExecutableOfficeContentBlocked,AsrLsassCredentialTheftBlocked,AsrObfuscatedScriptBlocked,AsrOfficeChildProcessBlocked,AsrOfficeCommAppChildProcessBlocked,AsrOfficeMacroWin32ApiCallsBlocked,AsrOfficeProcessInjectionBlocked,AsrPersistenceThroughWmiBlocked,AsrPsexecWmiChildProcessBlocked,AsrRansomwareBlocked,AsrScriptExecutableDownloadBlocked,AsrUntrustedExecutableBlocked,AsrUntrustedUsbProcessBlocked,AsrVulnerableSignedDriverBlocked"`<br>`ActionType startswith "asr"` | - | 1 | - | - | **1** |
| `ActionType in "AntivirusScanCancelled,AntivirusScanCompleted"` | - | 1 | - | - | **1** |
| `ActionType startswith "ASR"` | - | 1 | - | - | **1** |
| `ActionType in "PnpDeviceAllowed,PnpDeviceBlocked"` | - | 1 | - | - | **1** |
| `ActionType == "FileCreated"`<br>`ActionType contains "USB"` | - | 1 | - | - | **1** |
| `ActionType contains "USB"` | - | 1 | - | - | **1** |
| `ActionType in "NamedPipeEvent,RegistryKeyCreated"` | - | 1 | - | - | **1** |
| `ActionType startswith "ScreenshotTaken"` | - | 1 | - | - | **1** |
| `ActionType == "WmiBindEventFilterToConsumer"` | - | 1 | - | - | **1** |
| `ActionType in "AntivirusDetection,PnpDeviceConnected"` | - | 1 | - | - | **1** |
| `ActionType endswith "Blocked"`<br>`ActionType startswith "Asr"` | - | 1 | - | - | **1** |
| `ActionType endswith "Audited"`<br>`ActionType startswith "ASR"` | - | 1 | - | - | **1** |
| `ActionType endswith "Audited"`<br>`ActionType startswith "Asr"` | - | 1 | - | - | **1** |
| `ActionType contains "ControlledFolderAccess"` | - | 1 | - | - | **1** |
| `ActionType == "ExploitGuardNetworkProtectionBlocked"` | - | 1 | - | - | **1** |
| `ActionType endswith "Audited"`<br>`ActionType startswith "ExploitGuard"` | - | 1 | - | - | **1** |
| `ActionType endswith "Blocked"`<br>`ActionType startswith "ExploitGuard"` | - | 1 | - | - | **1** |
| `ActionType in "SmartScreenAppWarning,SmartScreenUserOverride"` | - | 1 | - | - | **1** |
| `ActionType in "FirewallInboundConnectionBlocked,FirewallInboundConnectionToAppBlocked,FirewallOutboundConnectionBlocked"` | - | 1 | - | - | **1** |
| `ActionType has_any "AsrRansomwareAudited,AsrRansomwareBlocked"` | - | 1 | - | - | **1** |
| `ActionType in "ExploitGuardNetworkProtectionAudited,ExploitGuardNetworkProtectionBlocked"`<br>`ActionType startswith "SmartScreenUrl"` | - | 1 | - | - | **1** |
| `ActionType in "Add member to role,Add user,FileCreated,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user,UsbDriveMounted"` | - | 1 | - | - | **1** |
| `ActionType in "AntivirusDetection,PnpDeviceConnected"`<br>`ActionType endswith "Audited"`<br>`ActionType endswith "Blocked"`<br>`ActionType startswith "Asr"` | - | 1 | - | - | **1** |
| **Total** | **0** | **70** | **0** | **0** | **70** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `PowerShellCommand` | - | 7 | - | - | **7** |
| `FileCreated` | - | 6 | - | - | **6** |
| `NamedPipeEvent` | - | 5 | - | - | **5** |
| `UsbDriveMounted` | - | 5 | - | - | **5** |
| `startswith Asr` | - | 5 | - | - | **5** |
| `BrowserLaunchedToOpenUrl` | - | 4 | - | - | **4** |
| `PnpDeviceConnected` | - | 4 | - | - | **4** |
| `AntivirusDetection` | - | 4 | - | - | **4** |
| `endswith Audited` | - | 4 | - | - | **4** |
| `UserAccountAddedToLocalGroup` | - | 3 | - | - | **3** |
| `contains UserAccountCreated` | - | 3 | - | - | **3** |
| `contains UserAccountModified` | - | 3 | - | - | **3** |
| `AmsiScriptContent` | - | 3 | - | - | **3** |
| `AsrOfficeChildProcessBlocked` | - | 3 | - | - | **3** |
| `UserAccountCreated` | - | 3 | - | - | **3** |
| `endswith Blocked` | - | 3 | - | - | **3** |
| `ScheduledTaskCreated` | - | 2 | - | - | **2** |
| `DnsQueryResponse` | - | 2 | - | - | **2** |
| `startswith ASR` | - | 2 | - | - | **2** |
| `contains USB` | - | 2 | - | - | **2** |
| `DeviceBootAttestationInfo` | - | 2 | - | - | **2** |
| `startswith ControlledFolderAccess` | - | 2 | - | - | **2** |
| `ExploitGuardNetworkProtectionBlocked` | - | 2 | - | - | **2** |
| `startswith ExploitGuard` | - | 2 | - | - | **2** |
| `contains Office` | - | 1 | - | - | **1** |
| `CreateRemoteThreadApiCall` | - | 1 | - | - | **1** |
| `QueueUserApcRemoteApiCall` | - | 1 | - | - | **1** |
| `SetThreadContextRemoteApiCall` | - | 1 | - | - | **1** |
| `has ExploitGuardNonMicrosoftSignedBlocked` | - | 1 | - | - | **1** |
| `FileDownloaded` | - | 1 | - | - | **1** |
| `FileRenamed` | - | 1 | - | - | **1** |
| `AsrAdobeReaderChildProcessBlocked` | - | 1 | - | - | **1** |
| `AsrExecutableEmailContentBlocked` | - | 1 | - | - | **1** |
| `AsrExecutableOfficeContentBlocked` | - | 1 | - | - | **1** |
| `AsrLsassCredentialTheftBlocked` | - | 1 | - | - | **1** |
| `AsrObfuscatedScriptBlocked` | - | 1 | - | - | **1** |
| `AsrOfficeCommAppChildProcessBlocked` | - | 1 | - | - | **1** |
| `AsrOfficeMacroWin32ApiCallsBlocked` | - | 1 | - | - | **1** |
| `AsrOfficeProcessInjectionBlocked` | - | 1 | - | - | **1** |
| `AsrPersistenceThroughWmiBlocked` | - | 1 | - | - | **1** |
| `AsrPsexecWmiChildProcessBlocked` | - | 1 | - | - | **1** |
| `AsrRansomwareBlocked` | - | 1 | - | - | **1** |
| `AsrScriptExecutableDownloadBlocked` | - | 1 | - | - | **1** |
| `AsrUntrustedExecutableBlocked` | - | 1 | - | - | **1** |
| `AsrUntrustedUsbProcessBlocked` | - | 1 | - | - | **1** |
| `AsrVulnerableSignedDriverBlocked` | - | 1 | - | - | **1** |
| `startswith asr` | - | 1 | - | - | **1** |
| `AntivirusScanCancelled` | - | 1 | - | - | **1** |
| `AntivirusScanCompleted` | - | 1 | - | - | **1** |
| `PnpDeviceAllowed` | - | 1 | - | - | **1** |
| `PnpDeviceBlocked` | - | 1 | - | - | **1** |
| `RegistryKeyCreated` | - | 1 | - | - | **1** |
| `startswith ScreenshotTaken` | - | 1 | - | - | **1** |
| `WmiBindEventFilterToConsumer` | - | 1 | - | - | **1** |
| `contains ControlledFolderAccess` | - | 1 | - | - | **1** |
| `SmartScreenAppWarning` | - | 1 | - | - | **1** |
| `SmartScreenUserOverride` | - | 1 | - | - | **1** |
| `FirewallInboundConnectionBlocked` | - | 1 | - | - | **1** |
| `FirewallInboundConnectionToAppBlocked` | - | 1 | - | - | **1** |
| `FirewallOutboundConnectionBlocked` | - | 1 | - | - | **1** |
| `has_any AsrRansomwareAudited` | - | 1 | - | - | **1** |
| `has_any AsrRansomwareBlocked` | - | 1 | - | - | **1** |
| `ExploitGuardNetworkProtectionAudited` | - | 1 | - | - | **1** |
| `startswith SmartScreenUrl` | - | 1 | - | - | **1** |
| `Add member to role` | - | 1 | - | - | **1** |
| `Add user` | - | 1 | - | - | **1** |
| `InteractiveLogon` | - | 1 | - | - | **1** |
| `RemoteInteractiveLogon` | - | 1 | - | - | **1** |
| `Reset user password` | - | 1 | - | - | **1** |
| `ResourceAccess` | - | 1 | - | - | **1** |
| `Sign-in` | - | 1 | - | - | **1** |
| `Update user` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

