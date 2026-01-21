# DeviceEvents

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (107)

### Analytic Rules (21)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Suspicious Powershell Commandlet Executed](../content/endpoint-threat-protection-essentials-suspicious-powershell-commandlet-executed-b5153fb3-ada9-4ce4-9131-79c771efb50d-34e7bcf0.md)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [Office ASR rule triggered from browser spawned office process.](../content/falconfriday-office-asr-rule-triggered-from-browser-spawned-office-process.-30580043-2451-4d35-b49f-065728529f4a-65634609.md)
- [Suspicious Process Injection from Office application](../content/falconfriday-suspicious-process-injection-from-office-application-a4d8e681-6f30-440a-a2f3-c312bc1389d0-f6ee7c3b.md)
- [Suspicious named pipes](../content/falconfriday-suspicious-named-pipes-ddf7c669-db26-4215-acaf-11e2953a04e6-377a4889.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI IPAddress in DeviceEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-deviceevents-fa566691-42a2-4136-6a8b-ffa3ea510000-675847d2.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - Terminated employee exfiltration to USB drive](../content/microsoft-business-applications-dataverse-terminated-employee-exfiltration-to-usb-drive-c5e75cb6-cea0-49c2-a998-da414035aac1-627b05d7.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [C2-NamedPipe](../content/microsoft-defender-xdr-c2-namedpipe-7ce00cba-f76f-4026-ab7f-7e4f1b67bd18-5ae9733b.md)
- [Deimos Component Execution](../content/microsoft-defender-xdr-deimos-component-execution-c25a8cd4-5b4a-45a8-9ba0-3b753a652f6b-a4a127b5.md)
- [Execution of software vulnerable to webp buffer overflow of CVE-2023-4863](../content/microsoft-defender-xdr-execution-of-software-vulnerable-to-webp-buffer-overflow-of-cve-2023-4863-26e81021-2de6-4442-a74a-a77885e96911-15de3ea9.md)
- [Files Copied to USB Drives](../content/microsoft-defender-xdr-files-copied-to-usb-drives-3ab04acf-e0e7-4f7c-8995-748ab4c848c2-7d23d298.md)
- [Local Admin Group Changes](../content/microsoft-defender-xdr-local-admin-group-changes-63aa43c2-e88e-4102-aea5-0432851c541a-92e9a57c.md)
- [Possible Phishing with CSL and Network Sessions](../content/microsoft-defender-xdr-possible-phishing-with-csl-and-network-sessions-6c3a1258-bcdd-4fcd-b753-1a9bc826ce12-631549a4.md)
- [SUNSPOT malware hashes](../content/microsoft-defender-xdr-sunspot-malware-hashes-53e936c6-6c30-4d12-8343-b8a0456e8429-b7f28a72.md)
- [TEARDROP memory-only dropper](../content/microsoft-defender-xdr-teardrop-memory-only-dropper-738702fd-0a66-42c7-8586-e30f0583f8fe-9b854574.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [ADFS DKM Master Key Export](../content/standalone-content-adfs-dkm-master-key-export-18e6a87e-9d06-4a4e-8b59-3469cd49552d-b85786be.md)
- [Azure VM Run Command operations executing a unique PowerShell script](../content/standalone-content-azure-vm-run-command-operations-executing-a-unique-powershell-script-5239248b-abfb-4c6a-8177-b104ade5db56-babdd66c.md)
- [Mass Download & copy to USB device by single user](../content/standalone-content-mass-download-&-copy-to-usb-device-by-single-user-6267ce44-1e9d-471b-9f1e-ae76a6b7aa84-8c8cd6f4.md)
- [Prestige ransomware IOCs Oct 2022](../content/standalone-content-prestige-ransomware-iocs-oct-2022-bca9c877-2afc-4246-a26d-087ab1cdcd5f-ab904866.md)
- [Windows host username encoded in base64 web request](../content/standalone-content-windows-host-username-encoded-in-base64-web-request-6e715730-82c0-496c-983b-7a20c4590bd9-92229d72.md)

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**
- [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md)
- [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md)

### Hunting Queries (75)

**In solution [](../solutions/.md):**
- [ARS Ransomware Event triggered](../content/-ars-ransomware-event-triggered-ff9a1b12-e446-44ff-a576-7f53caa32044-50639232.md)
- [ASR rules categorized detection graph](../content/-asr-rules-categorized-detection-graph-4a7bf574-fe5f-4168-97e7-5a8aa19a5eed-058644bb.md)
- [AV Detections with Source](../content/-av-detections-with-source-52c9e90b-84f4-4e2d-ae3d-eef85e8aa069-8a23349f.md)
- [AV Detections with USB Disk Drive](../content/-av-detections-with-usb-disk-drive-12198f2f-c53b-4617-8df8-120c66cbb373-5233b20b.md)
- [Antivirus detections](../content/-antivirus-detections-aa9ad4ae-a19a-4262-b151-8a723227bc4e-1b161cf7.md)
- [Azure VM Run Command linked with MDE](../content/-azure-vm-run-command-linked-with-mde-55fbc363-6cc9-4201-bd68-d980b612082b-90306b65.md)
- [Baseline Comparison](../content/-baseline-comparison-4d17ae75-87e8-4272-9aec-16448b1430bc-7679c313.md)
- [C2-NamedPipe](../content/-c2-namedpipe-ec3f7141-383e-4f32-b698-ba2ee1852c9c-faabd606.md)
- [Create account (1)](../content/-create-account-1-eba83f84-b844-4fc9-96f4-cb51b0b20c1d-72d10918.md)
- [DNSPattern [Nobelium]](../content/-dnspattern-[nobelium]-6c87bdb8-a44e-452a-b782-542640d985e3-f213881c.md)
- [Doc attachment with link to download](../content/-doc-attachment-with-link-to-download-cf259a7a-801a-435a-af3f-3ef998561145-ef355c9c.md)
- [Email link + download + SmartScreen warning](../content/-email-link-+-download-+-smartscreen-warning-b29c75ca-a110-4c58-8d0b-6afac6d61078-81d47b74.md)
- [EncodedDomainURL [Nobelium]](../content/-encodeddomainurl-[nobelium]-c561bf69-6a6c-4d0a-960a-b69e0e7c8f51-73e00d4e.md)
- [ExploitGuardASRStats](../content/-exploitguardasrstats-4302c0fa-dda5-4a6a-b29a-a96736bce088-6513dc63.md)
- [ExploitGuardASRStats (1)](../content/-exploitguardasrstats-1-f809e596-87ff-4849-8eeb-cc636f0c92a0-488f37d3.md)
- [ExploitGuardASRStats (2)](../content/-exploitguardasrstats-2-d8892c99-08d2-4385-a767-0754c41d7fb9-eb2e0787.md)
- [ExploitGuardAsrDescriptions](../content/-exploitguardasrdescriptions-8ab60d62-b4a3-431b-8cd9-9a080213afc0-6bbe14de.md)
- [ExploitGuardBlockOfficeChildProcess](../content/-exploitguardblockofficechildprocess-835e8f87-f387-4ee5-ab79-d03b5e5e816b-738a3b74.md)
- [ExploitGuardBlockOfficeChildProcess (2)](../content/-exploitguardblockofficechildprocess-2-6df0dd4f-5572-4ab9-bde7-1f322547bff7-e4337316.md)
- [ExploitGuardControlledFolderAccess](../content/-exploitguardcontrolledfolderaccess-c4e021bc-59f8-4464-9f93-3b08d8b28cc3-539b7857.md)
- [ExploitGuardControlledFolderAccess (1)](../content/-exploitguardcontrolledfolderaccess-1-ce33163e-68ba-470e-8641-ed61d43d38e1-26f51994.md)
- [ExploitGuardControlledFolderAccess (2)](../content/-exploitguardcontrolledfolderaccess-2-01dacb6d-4964-42a5-b248-516fc40d605d-920f3674.md)
- [ExploitGuardNetworkProtectionEvents](../content/-exploitguardnetworkprotectionevents-47bf14f0-c6b7-4dd3-a13f-b9a3e7972e2f-6b3f89b7.md)
- [ExploitGuardStats](../content/-exploitguardstats-e76703a0-21f4-4c20-8d4b-92e1768cf240-7b4a4c99.md)
- [ExploitGuardStats (1)](../content/-exploitguardstats-1-263f7a27-7c44-4e28-adc3-df5cb3fdc2bb-064e5810.md)
- [Files copied to USB drives](../content/-files-copied-to-usb-drives-fc2c5bbb-5347-4903-87e6-c2c76c43e420-8f1bf009.md)
- [LemonDuck-registration-function](../content/-lemonduck-registration-function-9e963c83-c569-4c9e-a729-d8f7ca05464d-e76bb8b4.md)
- [LocalAdminGroupChanges](../content/-localadmingroupchanges-dd2c4f48-b732-4a75-b2c4-b44bacc66d00-f5337fe3.md)
- [Map external devices](../content/-map-external-devices-10838671-0c35-4d5b-95f8-06d5b4d5bf61-ac119b9f.md)
- [Map external devices (1)](../content/-map-external-devices-1-a091241a-5df7-497f-b4fa-b36641e7373d-ca9ed917.md)
- [Open email link](../content/-open-email-link-67be3fdd-6942-45f8-8663-d825b61d1ab9-d32c53a4.md)
- [PUA ThreatName per Computer](../content/-pua-threatname-per-computer-1a954599-aa03-421d-a35f-dbe18859bdd5-e041addb.md)
- [Pivot from detections to related downloads](../content/-pivot-from-detections-to-related-downloads-351f7035-836c-4f4b-80bb-188220ba9215-198918d4.md)
- [Possible File Copy to USB Drive](../content/-possible-file-copy-to-usb-drive-34be41b9-eddf-43ca-b208-5b912937f496-bf8cc62e.md)
- [PowershellCommand - uncommon commands on machine](../content/-powershellcommand-uncommon-commands-on-machine-7d3acc08-312c-4139-85c9-f08299b79932-8726cd13.md)
- [PowershellCommand footprint](../content/-powershellcommand-footprint-261d966b-5c1a-4d28-b444-3a8caac6246e-85cc2c6b.md)
- [SmartScreen URL block ignored by user](../content/-smartscreen-url-block-ignored-by-user-172e5bee-9298-4c59-bd2a-e96d87e8e6d8-b80cedd5.md)
- [SmartScreen app block ignored by user](../content/-smartscreen-app-block-ignored-by-user-333ad16e-620b-4f36-af3b-da33f8d16cc2-ea86ff3b.md)
- [SuspiciousUrlClicked](../content/-suspiciousurlclicked-959f8d6a-53b8-488f-a628-999b3410702e-41b2fb21.md)
- [System Guard Security Level Baseline](../content/-system-guard-security-level-baseline-9365b174-d46f-41e9-998a-73e2fe5ae2d9-98ca519a.md)
- [System Guard Security Level Drop](../content/-system-guard-security-level-drop-701bee2f-c4d9-4f72-be03-e6bb1314e71c-08a906b6.md)
- [User navigation to redirected URL](../content/-user-navigation-to-redirected-url-daf19704-a996-4df7-9a0b-3efac47fea5a-0463b33c.md)
- [Web Content Filtering Events](../content/-web-content-filtering-events-7f7a796d-1511-4930-b9da-5971db4352ec-ffdc414c.md)
- [Windows filtering events (Firewall)](../content/-windows-filtering-events-firewall-fb02b8f1-1eb9-43f9-b6e6-cca78a323f2b-d117e65d.md)
- [anomalous-payload-delivered-from-iso-file](../content/-anomalous-payload-delivered-from-iso-file-3539f855-611c-4787-b8a9-e3437f138805-8dbd69ab.md)
- [c2-lookup-from-nonbrowser[Nobelium]](../content/-c2-lookup-from-nonbrowser[nobelium]-f7dd2c5f-7bb3-4a0a-80a1-45c4d79e4c03-89d943cd.md)
- [c2-lookup-response[Nobelium]](../content/-c2-lookup-response[nobelium]-4417c444-6ff7-47db-bde0-b6b9ef1b9080-af45e0e6.md)
- [deimos-component-execution](../content/-deimos-component-execution-0e86928c-cc9f-494c-a79e-04f647eb5ef8-ce72f086.md)
- [detect-impacket-atexec](../content/-detect-impacket-atexec-75e3a1b2-bd6d-4e79-8c74-85a3bc0b0617-664f3f60.md)
- [detect-impacket-psexec-module](../content/-detect-impacket-psexec-module-6e6e6486-1bfc-4de0-bcbe-1ed88dfee2a1-51290fe0.md)
- [detect-impacket-wmiexec](../content/-detect-impacket-wmiexec-e5c65f1f-2bf8-4b42-af8b-1f6adfeda0cc-53c6c7a7.md)
- [detect-impacket-wmiexec](../content/-detect-impacket-wmiexec-e5c65f1f-2bf8-4b42-af8b-1f6adfeda0cc-0cb919ef.md)
- [detect-impacket-wmiexec](../content/-detect-impacket-wmiexec-e5c65f1f-2bf8-4b42-af8b-1f6adfeda0cc-f0129007.md)
- [detect-impacket-wmipersist](../content/-detect-impacket-wmipersist-34167b0d-f295-4b30-8555-d8fa6990cde5-bfa9ab22.md)
- [insider-threat-detection-queries (12)](../content/-insider-threat-detection-queries-12-e86221a2-7961-440a-a759-8c7a1fbe40b2-cab5509f.md)
- [insider-threat-detection-queries (19)](../content/-insider-threat-detection-queries-19-a358a812-0e1b-4cbb-a91c-0bb1dbd3ea13-3cdfce24.md)
- [insider-threat-detection-queries (4)](../content/-insider-threat-detection-queries-4-1b6d19d5-c1f9-43b0-8db6-1c44c3c965b3-ced26abd.md)
- [lsass-credential-dumping](../content/-lsass-credential-dumping-a50138af-4bad-4615-9e55-ced36a836806-e6476487.md)
- [scheduled task creation](../content/-scheduled-task-creation-34208765-264e-4abe-805b-f645925fbadb-7f019163.md)
- [snip3-detectsanboxie-function-call](../content/-snip3-detectsanboxie-function-call-32664c67-34d7-4c7a-88cd-c48b55b7ef91-ea21d75d.md)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Suspicious Powershell Commandlet Execution](../content/endpoint-threat-protection-essentials-suspicious-powershell-commandlet-execution-8f424a4c-0487-45a3-92b8-00a7a8745b69-41451793.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - Dataverse export copied to USB devices](../content/microsoft-business-applications-dataverse-dataverse-export-copied-to-usb-devices-f9658e11-e277-4a65-8f91-2cb94cf7497c-664d805c.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Anomalous Payload Delivered from ISO files](../content/microsoft-defender-xdr-anomalous-payload-delivered-from-iso-files-14694b88-a6e9-4cd1-9c4a-e382bdd82d8d-9bc45897.md)
- [C2-NamedPipe](../content/microsoft-defender-xdr-c2-namedpipe-f78255b6-8f91-4cf3-a25c-e1144b7b5425-80263449.md)
- [Deimos Component Execution](../content/microsoft-defender-xdr-deimos-component-execution-fe9edc77-1b6c-4f1e-a223-64b580b50187-8ca8263a.md)
- [Files Copied to USB Drives](../content/microsoft-defender-xdr-files-copied-to-usb-drives-f350f0e7-0e52-434c-a113-197883219f00-69c4055e.md)
- [LemonDuck Registration Function](../content/microsoft-defender-xdr-lemonduck-registration-function-147c4c0a-7241-4ce9-9b71-0aecb8a2b59f-ddd37db7.md)
- [Local Admin Group Changes](../content/microsoft-defender-xdr-local-admin-group-changes-63142c12-5d8b-48cf-a0f6-b523c855497c-cbc59b70.md)
- [Scheduled Task Creation](../content/microsoft-defender-xdr-scheduled-task-creation-1ddee78f-7508-4f4a-9b6b-d2927724217d-545713ce.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [MDE_AVScanTimesAndType](../content/standalone-content-mde-avscantimesandtype-0a3ddbb6-d691-4cc5-aca1-1fe780258163-08a3924f.md)
- [MDE_BlockingASRRules](../content/standalone-content-mde-blockingasrrules-ffa67017-fb8e-4706-9651-5911f96c1f20-fd209a7b.md)
- [MDE_ListAlPnPDevicesAllowedorBlocked](../content/standalone-content-mde-listalpnpdevicesallowedorblocked-d99350b8-212d-42b9-b336-62f870453c5c-de3d93fc.md)
- [MDE_ShowUSBMountedDevicesAndDriveLetter](../content/standalone-content-mde-showusbmounteddevicesanddriveletter-fd57f946-9d0c-4c80-af9f-4bcd8257bd4d-8ed06969.md)
- [MDE_ShowUSBMountedandfilescopied](../content/standalone-content-mde-showusbmountedandfilescopied-ca4cf47f-6dfd-487a-a759-01d97120bfe2-66f21ec5.md)
- [MDE_SmartScreenCheck](../content/standalone-content-mde-smartscreencheck-dde77b9b-799c-44c8-adfa-45007f312487-10770797.md)

### Workbooks (11)

**In solution [](../solutions/.md):**
- [AttackSurfaceReduction](../content/-attacksurfacereduction-a9f3af16.md)
- [DoDZeroTrustWorkbook](../content/-dodzerotrustworkbook-93adac1a.md)
- [ExchangeCompromiseHunting](../content/-exchangecompromisehunting-4a1075bf.md)
- [MicrosoftDefenderForEndPoint](../content/-microsoftdefenderforendpoint-f98fcc1e.md)
- [MicrosoftSentinelDeploymentandMigrationTracker](../content/-microsoftsentineldeploymentandmigrationtracker-da237854.md)
- [SolarWindsPostCompromiseHunting](../content/-solarwindspostcompromisehunting-ff2e76bc.md)
- [ZeroTrustStrategyWorkbook](../content/-zerotruststrategyworkbook-e9062fae.md)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AttackSurfaceReduction](../content/soc-handbook-attacksurfacereduction-52743d4b.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

