# DeviceFileEvents

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

File creation, modification, and other file system events

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicefileevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicefileevents-table) |

## Solutions (15)

This table is used by the following solutions:

- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [DORA Compliance](../solutions/dora-compliance.md)
- [FalconFriday](../solutions/falconfriday.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (121)

### Analytic Rules (20)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [ASR Bypassing Writing Executable Content](../content/falconfriday-asr-bypassing-writing-executable-content-efe4efef-5ca7-4b51-a53e-0e96492ce97a-78c522d8.md)
- [Hijack Execution Flow - DLL Side-Loading](../content/falconfriday-hijack-execution-flow-dll-side-loading-3084b487-fad6-4000-9544-6085b9657290-16d7660f.md)
- [Ingress Tool Transfer - Certutil](../content/falconfriday-ingress-tool-transfer-certutil-f0be11a9-ec48-4df6-801d-479556044d4e-e41d03ca.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - Terminated employee exfiltration to USB drive](../content/microsoft-business-applications-dataverse-terminated-employee-exfiltration-to-usb-drive-c5e75cb6-cea0-49c2-a998-da414035aac1-627b05d7.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Files Copied to USB Drives](../content/microsoft-defender-xdr-files-copied-to-usb-drives-3ab04acf-e0e7-4f7c-8995-748ab4c848c2-7d23d298.md)
- [Potential Build Process Compromise - MDE](../content/microsoft-defender-xdr-potential-build-process-compromise-mde-1bf6e165-5e32-420e-ab4f-0da8558a8be2-c676927e.md)
- [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-91a451e3-178f-41b2-9e5d-da97d75b9971-365d2f3a.md)
- [Remote File Creation with PsExec](../content/microsoft-defender-xdr-remote-file-creation-with-psexec-35ab0d58-baab-4154-87ed-fa2f69797e9e-384e377c.md)
- [SUNBURST and SUPERNOVA backdoor hashes](../content/microsoft-defender-xdr-sunburst-and-supernova-backdoor-hashes-a3c144f9-8051-47d4-ac29-ffb0c312c910-6f0d9998.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [Azure VM Run Command operations executing a unique PowerShell script](../content/standalone-content-azure-vm-run-command-operations-executing-a-unique-powershell-script-5239248b-abfb-4c6a-8177-b104ade5db56-babdd66c.md)
- [Dev-0530 File Extension Rename](../content/standalone-content-dev-0530-file-extension-rename-d82eb796-d1eb-43c8-a813-325ce3417cef-f293cb3e.md)
- [Mass Download & copy to USB device by single user](../content/standalone-content-mass-download-&-copy-to-usb-device-by-single-user-6267ce44-1e9d-471b-9f1e-ae76a6b7aa84-8c8cd6f4.md)
- [Mercury - Domain, Hash and IP IOCs - August 2022](../content/standalone-content-mercury-domain,-hash-and-ip-iocs-august-2022-ae10c588-7ff7-486c-9920-ab8b0bdb6ede-8b4a9fab.md)
- [PE file dropped in Color Profile Folder](../content/standalone-content-pe-file-dropped-in-color-profile-folder-f68a5046-b7eb-4f69-9519-1e99708bb9e0-99c9d950.md)
- [Prestige ransomware IOCs Oct 2022](../content/standalone-content-prestige-ransomware-iocs-oct-2022-bca9c877-2afc-4246-a26d-087ab1cdcd5f-ab904866.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map File Hash to DeviceFileEvents Event](../content/threat-intelligence-ti-map-file-hash-to-devicefileevents-event-bc0eca2e-db50-44e6-8fa3-b85f91ff5ee7-89fca104.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI map File Hash to DeviceFileEvents Event](../content/threat-intelligence-new-ti-map-file-hash-to-devicefileevents-event-d6f04915-4471-4cb3-b163-a8b72997cf72-94f54e22.md)

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**
- [Identify SysAid Server web shell creation](../content/web-shells-threat-protection-identify-sysaid-server-web-shell-creation-50eb4cbd-188f-44f4-b964-bab84dcdec10-5faaa2d1.md)

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**
- [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md)
- [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md)

### Hunting Queries (90)

**In solution [](../solutions/.md):**
- [AV Detections with Source](../content/-av-detections-with-source-52c9e90b-84f4-4e2d-ae3d-eef85e8aa069-8a23349f.md)
- [Abuse.ch Recent Threat Feed](../content/-abuse.ch-recent-threat-feed-2bcdf59a-679d-4585-93e7-f14d674de205-f76c5da5.md)
- [Abuse.ch Recent Threat Feed (1)](../content/-abuse.ch-recent-threat-feed-1-8bd9e7c0-82b9-43b4-b58e-53d1ee6d9180-d7f2c638.md)
- [Abusing settingcontent-ms](../content/-abusing-settingcontent-ms-07a17371-bea3-41e5-91d1-99728cd44955-9bb4ba71.md)
- [AcroRd-Exploits](../content/-acrord-exploits-c87df1a7-fa54-4730-bc90-cbc1f8ac01aa-5bf9fcec.md)
- [Azure VM Run Command linked with MDE](../content/-azure-vm-run-command-linked-with-mde-55fbc363-6cc9-4201-bd68-d980b612082b-90306b65.md)
- [Baseline Comparison](../content/-baseline-comparison-4d17ae75-87e8-4272-9aec-16448b1430bc-7679c313.md)
- [Browser Extension Enumeration via DeviceFileEvents](../content/-browser-extension-enumeration-via-devicefileevents-ede058ab-97a8-4494-aa76-b7f5f6d78cba-b37e3dac.md)
- [Data copied to other location than C drive](../content/-data-copied-to-other-location-than-c-drive-8899867b-0fd8-4cfd-b6f0-0f04ef37142c-e2fa64ee.md)
- [Doc attachment with link to download](../content/-doc-attachment-with-link-to-download-cf259a7a-801a-435a-af3f-3ef998561145-ef355c9c.md)
- [Dropbox downloads linked from other site](../content/-dropbox-downloads-linked-from-other-site-de93670b-a1db-4c8c-80aa-5b3146428631-c3ed679a.md)
- [Dropping payload via certutil](../content/-dropping-payload-via-certutil-f5ff5b00-a90e-40b8-b241-9427a8ec5189-1f999c27.md)
- [Email link + download + SmartScreen warning](../content/-email-link-+-download-+-smartscreen-warning-b29c75ca-a110-4c58-8d0b-6afac6d61078-81d47b74.md)
- [File Copy and Execution](../content/-file-copy-and-execution-a27d5cb6-c533-4a81-9d11-d5c0ed257bc7-1160ec11.md)
- [Files copied to USB drives](../content/-files-copied-to-usb-drives-fc2c5bbb-5347-4903-87e6-c2c76c43e420-8f1bf009.md)
- [General attempts to access local email store](../content/-general-attempts-to-access-local-email-store-c3e585d2-f1d0-4789-85a2-cdf7642fdf8b-c5fecd88.md)
- [HTA Startup Persistence](../content/-hta-startup-persistence-10d275ce-bb52-41b7-b67e-05b974ed1179-473ff472.md)
- [IcedId Delivery](../content/-icedid-delivery-b2f3ee1c-f379-465c-a339-412ecf3b1bcb-8e7f13b5.md)
- [Identify EUROPIUM IOCs](../content/-identify-europium-iocs-f33abf94-6759-4820-9973-51d2a41749a4-b8fa32ac.md)
- [KNOTWEED-PE File Dropped in Color Profile Folder](../content/-knotweed-pe-file-dropped-in-color-profile-folder-cfdb2ccb-0eb3-47ed-9220-d56795906fdc-3e890f10.md)
- [Malicious Excel Delivery](../content/-malicious-excel-delivery-6fa3cf44-517f-4ce5-8727-948b0783b507-e67ad4c8.md)
- [Malicious bat file](../content/-malicious-bat-file-c903138d-b948-4975-a660-57495b3f8754-62ef5cec.md)
- [Network footprint (3)](../content/-network-footprint-3-44b02f8c-d206-4e1a-9859-6aa06b80c346-2b6c07a6.md)
- [Possible File Copy to USB Drive](../content/-possible-file-copy-to-usb-drive-34be41b9-eddf-43ca-b208-5b912937f496-bf8cc62e.md)
- [Private Key Files](../content/-private-key-files-2ca01fd3-afb5-4050-8a1d-6b821bdab080-aa2afdc7.md)
- [Qakbot email theft](../content/-qakbot-email-theft-20b3ece3-7d4a-4952-914b-88623ccf6c09-adfef0b9.md)
- [Qakbot email theft (1)](../content/-qakbot-email-theft-1-a5c3ebdf-e427-4b1b-985e-c1f1e20067b7-40514041.md)
- [Ransomware hits healthcare - Vulnerable Gigabyte drivers](../content/-ransomware-hits-healthcare-vulnerable-gigabyte-drivers-6eade795-7040-48eb-aae7-3f75bf7fad2e-8e57df7e.md)
- [Rare-process-as-a-service](../content/-rare-process-as-a-service-a60ac80f-dce6-43ec-b102-9ae8c094d5dc-b4627682.md)
- [SmartScreen URL block ignored by user](../content/-smartscreen-url-block-ignored-by-user-172e5bee-9298-4c59-bd2a-e96d87e8e6d8-b80cedd5.md)
- [Storage File Seen on Endpoint](../content/-storage-file-seen-on-endpoint-c7f03700-8bbe-4838-9e78-4852ef21609b-953c2a75.md)
- [Suspicious DLLs in spool folder](../content/-suspicious-dlls-in-spool-folder-cabb3aa3-cbfa-4359-9464-a3093d8b44f3-3ea8e0a5.md)
- [Suspicious files in spool folder](../content/-suspicious-files-in-spool-folder-664afd0d-c979-4970-affe-fc17f01276fb-dc938b13.md)
- [Windows Anitivirus and EDR Elevation of Privilege Vulnerability](../content/-windows-anitivirus-and-edr-elevation-of-privilege-vulnerability-a9eb9b06-4345-47f2-abe6-29f7200ddf83-ba5a9b05.md)
- [Windows Spooler Service Suspicious File Creation](../content/-windows-spooler-service-suspicious-file-creation-67309406-12ad-4591-84db-0cc331634d0c-d6cf98eb.md)
- [apt unidentified nov 18 (1)](../content/-apt-unidentified-nov-18-1-9bff1151-227c-4581-946d-643266c346a6-0857ddc3.md)
- [check-for-shadowhammer-activity-implant](../content/-check-for-shadowhammer-activity-implant-fb6f89ae-4af3-4c37-8f12-d719e882e8a5-29a3e39e.md)
- [cve-2019-0808-nufsys-file creation](../content/-cve-2019-0808-nufsys-file-creation-447cdff3-2bfc-4f7a-b718-048d6d0ebd87-d6959eb5.md)
- [dell-driver-vulnerability-2021](../content/-dell-driver-vulnerability-2021-4eadcfeb-2ed8-40ce-941a-6691d7ddbdca-dbc03d31.md)
- [detect-archive-exfiltration-to-competitor](../content/-detect-archive-exfiltration-to-competitor-8baad907-3b15-4f26-be09-dbba3d32fc3f-bbde67cb.md)
- [detect-bluekeep-related-mining](../content/-detect-bluekeep-related-mining-2bf77176-1b8a-4466-9b64-6b9fd4023fa5-35cd8134.md)
- [detect-cve-2019-1053-sandboxescape-exploit](../content/-detect-cve-2019-1053-sandboxescape-exploit-c176e100-03cc-4b02-873b-d9686f354330-8f9ecae1.md)
- [detect-cve-2019-1069-bearlpe-exploit](../content/-detect-cve-2019-1069-bearlpe-exploit-d82cdd92-4818-4f55-9e14-68021c154cdb-3230b610.md)
- [detect-impacket-psexec-module](../content/-detect-impacket-psexec-module-6e6e6486-1bfc-4de0-bcbe-1ed88dfee2a1-51290fe0.md)
- [detect-jscript-file-creation](../content/-detect-jscript-file-creation-7913cb78-0e5a-4c4c-ab5b-31ef823ba25b-cc227510.md)
- [detect-nbtscan-activity](../content/-detect-nbtscan-activity-28ebbb87-535b-4ba0-80f4-6fbf80b7c55a-33e93332.md)
- [detect-prifou-pua](../content/-detect-prifou-pua-62bc4944-46dd-4c2f-ba04-72837bbfec3f-84a45e69.md)
- [detect-steganography-exfiltration](../content/-detect-steganography-exfiltration-e0003bf6-b5f2-4dd1-a130-8651eb0b9f04-8fdaba78.md)
- [devices_with_vuln_and_users_received_payload (1)](../content/-devices-with-vuln-and-users-received-payload-1-9c2ba784-c664-40f1-b0df-8f34c6626be5-15b47bcf.md)
- [files-from-malicious-sender](../content/-files-from-malicious-sender-43625c12-5712-44df-8741-c334746aeccc-2ef3df52.md)
- [fireeye-red-team-tools-HASHs [Nobelium]](../content/-fireeye-red-team-tools-hashs-[nobelium]-3e9ac786-134c-4917-99bd-4a7ce01049ab-68c5d733.md)
- [hiding-java-class-file](../content/-hiding-java-class-file-c5196191-609a-407f-a623-f37785eca019-0fb4f7b6.md)
- [insider-threat-detection-queries (1)](../content/-insider-threat-detection-queries-1-4685d7ec-8134-43ce-b579-7c31286b0bc5-2ceba843.md)
- [insider-threat-detection-queries (16)](../content/-insider-threat-detection-queries-16-2d4f4889-ef25-4e3c-9ece-2275e55e8332-ae43ccf5.md)
- [insider-threat-detection-queries (2)](../content/-insider-threat-detection-queries-2-1cdf6fe8-6232-48ba-bbd8-b9881c30e0e9-10ba616c.md)
- [insider-threat-detection-queries (7)](../content/-insider-threat-detection-queries-7-caa8bd4f-3d4c-41fb-94b2-7a3e819c1688-0ee4b1d4.md)
- [launch-questd-w-osascript](../content/-launch-questd-w-osascript-4e186f05-8cff-4afa-a0c8-4f0f0e7aeb82-6ad7f05b.md)
- [locate-ALPC-local-privilege-elevation-exploit](../content/-locate-alpc-local-privilege-elevation-exploit-8f26a2c6-4c60-469c-ac7a-f4d1ccccab9f-b0115292.md)
- [locate-dll-created-locally[Nobelium]](../content/-locate-dll-created-locally[nobelium]-644a6cea-7662-45db-89d0-a9136a9a5da6-06cfabed.md)
- [lsass-credential-dumping](../content/-lsass-credential-dumping-a50138af-4bad-4615-9e55-ced36a836806-e6476487.md)
- [oceanlotus-apt32-files](../content/-oceanlotus-apt32-files-d868871c-bdd6-45e9-9e9d-e3c4521654a7-cfbee6dd.md)
- [oracle-webLogic-executing-powershell](../content/-oracle-weblogic-executing-powershell-2397f77e-e33e-4658-9a81-fe9dbafb810d-07b8f9ed.md)
- [printnightmare-cve-2021-1675 usage detection](../content/-printnightmare-cve-2021-1675-usage-detection-ec1934d5-c591-4ff4-9968-079dba04d28e-47557011.md)
- [python-use-by-ransomware-macos](../content/-python-use-by-ransomware-macos-8d52dce6-6143-44e9-8ff5-a62f2df742b2-1bd4bd76.md)
- [qakbot-campaign-outlook](../content/-qakbot-campaign-outlook-221ba640-3727-4b48-b30c-f5bb7398be7b-80e39601.md)
- [ransom-note-creation-macos](../content/-ransom-note-creation-macos-fbe63fdf-142f-4b0a-b73e-8f16aaf46be7-fa12d68d.md)
- [regsvr32-rundll32-abnormal-image-loads](../content/-regsvr32-rundll32-abnormal-image-loads-69eb9fb7-fe0d-4c34-8c81-3a828fc12abd-8b10935a.md)
- [remote-file-creation-with-psexec](../content/-remote-file-creation-with-psexec-8b1d8f83-08f3-44fb-8328-1229521f109c-7a92202e.md)
- [reverse-shell-ransomware-macos](../content/-reverse-shell-ransomware-macos-936d985d-f44c-4ec7-81ae-7aa1995f940d-16322802.md)
- [robbinhood-driver](../content/-robbinhood-driver-cd718abb-96e4-436e-9a6c-63c09d40cc5c-ee9a1ed8.md)
- [snip3-encoded-powershell-structure](../content/-snip3-encoded-powershell-structure-c85c5b11-a5b9-480d-b9cf-79ba2289f770-f9e5f6ce.md)
- [winrar-cve-2018-20250-ace-files](../content/-winrar-cve-2018-20250-ace-files-8320de94-2411-4748-9329-e1543f257323-2e004e19.md)
- [winrar-cve-2018-20250-file-creation](../content/-winrar-cve-2018-20250-file-creation-04eaf822-d364-4434-b2c8-a6378d97f192-ec3e3fe4.md)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**
- [Dev-0322 File Drop Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-file-drop-activity-november-2021-5bf2d4d8-ea03-4673-aaf8-716a61446022-414e8f6c.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Dropping Payload via certutil](../content/microsoft-defender-xdr-dropping-payload-via-certutil-4d11f63f-5b64-416e-8d77-266e4c6d382e-5c641ea8.md)
- [Files Copied to USB Drives](../content/microsoft-defender-xdr-files-copied-to-usb-drives-f350f0e7-0e52-434c-a113-197883219f00-69c4055e.md)
- [PrintNightmare CVE-2021-1675 usage Detection](../content/microsoft-defender-xdr-printnightmare-cve-2021-1675-usage-detection-8f404352-c4ff-44d1-8d70-c50ee2fad8f8-b52df162.md)
- [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-96976bb1-1993-45b8-a477-8236ee93976b-cf1c1157.md)
- [Remote File Creation with PsExec](../content/microsoft-defender-xdr-remote-file-creation-with-psexec-a7214393-9da7-432e-9b41-fb02b4f740bd-db6b196f.md)
- [Robbinhood Driver](../content/microsoft-defender-xdr-robbinhood-driver-4713d763-122d-419c-bf6f-bdef111cd8e2-6f03bc00.md)
- [Suspicious DLLs in spool Folder](../content/microsoft-defender-xdr-suspicious-dlls-in-spool-folder-0b5b076b-9a1c-440c-a11f-8471a75f46fd-160d1915.md)
- [Suspicious Files in spool Folder](../content/microsoft-defender-xdr-suspicious-files-in-spool-folder-2d16b6fc-eb63-491c-a2c2-1160e2e41dcf-ac7a0cd6.md)
- [Windows Print Spooler Service Suspicious File Creation](../content/microsoft-defender-xdr-windows-print-spooler-service-suspicious-file-creation-daa347a4-8251-43a7-9730-32f22aa741ab-21c8edf9.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [MDE_BrowserExtensionInstalled](../content/standalone-content-mde-browserextensioninstalled-73871df7-f708-4fe7-8fb9-a62bd5072ef9-8664bc22.md)
- [MDE_FindLNKFilesOnEndpoints](../content/standalone-content-mde-findlnkfilesonendpoints-76925b23-296e-4f62-8732-27b8045056f6-e65d5ff3.md)
- [MDE_FindMountedISOandDriveLetters](../content/standalone-content-mde-findmountedisoanddriveletters-19270420-5d36-43df-8bed-c34a47fadc92-9edbea2e.md)
- [MDE_ShowUSBMountedandfilescopied](../content/standalone-content-mde-showusbmountedandfilescopied-ca4cf47f-6dfd-487a-a759-01d97120bfe2-66f21ec5.md)

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**
- [Exchange IIS Worker Dropping Webshells](../content/web-shells-threat-protection-exchange-iis-worker-dropping-webshells-42e7df5b-80f6-49a5-946a-08026ec24807-918c2a7e.md)
- [Possible webshell drop](../content/web-shells-threat-protection-possible-webshell-drop-8f2a256f-c9f1-4f0a-941a-a5a131d4bf3b-5ddc946f.md)
- [UMWorkerProcess Creating Webshell](../content/web-shells-threat-protection-umworkerprocess-creating-webshell-60d15bd4-1fad-4a70-bc3b-094dc1c5e554-5e3339db.md)

### Workbooks (11)

**In solution [](../solutions/.md):**
- [ExchangeCompromiseHunting](../content/-exchangecompromisehunting-4a1075bf.md)
- [MicrosoftDefenderForEndPoint](../content/-microsoftdefenderforendpoint-f98fcc1e.md)
- [MicrosoftSentinelDeploymentandMigrationTracker](../content/-microsoftsentineldeploymentandmigrationtracker-da237854.md)
- [SolarWindsPostCompromiseHunting](../content/-solarwindspostcompromisehunting-ff2e76bc.md)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md)

**In solution [DORA Compliance](../solutions/dora-compliance.md):**
- [DORACompliance](../content/dora-compliance-doracompliance-21bcc12f.md)

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**
- [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md)

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimFileEventMicrosoft365D](../asim/asimfileeventmicrosoft365d.md) | FileEvent |  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

