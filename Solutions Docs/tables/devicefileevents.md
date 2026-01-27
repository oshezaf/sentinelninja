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

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (124)

### Analytic Rules (21)

**In solution [FalconFriday](../solutions/falconfriday.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ASR Bypassing Writing Executable Content](../content/falconfriday-asr-bypassing-writing-executable-content-efe4efef-5ca7-4b51-a53e-0e96492ce97a-78c522d8.md) | `ActionType == "FileRenamed"` |
| [Hijack Execution Flow - DLL Side-Loading](../content/falconfriday-hijack-execution-flow-dll-side-loading-3084b487-fad6-4000-9544-6085b9657290-16d7660f.md) |  |
| [Ingress Tool Transfer - Certutil](../content/falconfriday-ingress-tool-transfer-certutil-f0be11a9-ec48-4df6-801d-479556044d4e-e41d03ca.md) |  |

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Terminated employee exfiltration to USB drive](../content/microsoft-business-applications-dataverse-terminated-employee-exfiltration-to-usb-drive-c5e75cb6-cea0-49c2-a998-da414035aac1-627b05d7.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Files Copied to USB Drives](../content/microsoft-defender-xdr-files-copied-to-usb-drives-3ab04acf-e0e7-4f7c-8995-748ab4c848c2-7d23d298.md) |  |
| [Potential Build Process Compromise - MDE](../content/microsoft-defender-xdr-potential-build-process-compromise-mde-1bf6e165-5e32-420e-ab4f-0da8558a8be2-c676927e.md) |  |
| [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-91a451e3-178f-41b2-9e5d-da97d75b9971-365d2f3a.md) |  |
| [Remote File Creation with PsExec](../content/microsoft-defender-xdr-remote-file-creation-with-psexec-35ab0d58-baab-4154-87ed-fa2f69797e9e-384e377c.md) |  |
| [SUNBURST and SUPERNOVA backdoor hashes](../content/microsoft-defender-xdr-sunburst-and-supernova-backdoor-hashes-a3c144f9-8051-47d4-ac29-ffb0c312c910-6f0d9998.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI map File Hash to DeviceFileEvents Event](../content/threat-intelligence-ti-map-file-hash-to-devicefileevents-event-bc0eca2e-db50-44e6-8fa3-b85f91ff5ee7-89fca104.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI map File Hash to DeviceFileEvents Event](../content/threat-intelligence-new-ti-map-file-hash-to-devicefileevents-event-d6f04915-4471-4cb3-b163-a8b72997cf72-94f54e22.md) |  |

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Identify SysAid Server web shell creation](../content/web-shells-threat-protection-identify-sysaid-server-web-shell-creation-50eb4cbd-188f-44f4-b964-bab84dcdec10-5faaa2d1.md) |  |

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md) |  |
| [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Azure VM Run Command operations executing a unique PowerShell script](../content/standalone-content-azure-vm-run-command-operations-executing-a-unique-powershell-script-5239248b-abfb-4c6a-8177-b104ade5db56-babdd66c.md) |  |
| [Dev-0530 File Extension Rename](../content/standalone-content-dev-0530-file-extension-rename-d82eb796-d1eb-43c8-a813-325ce3417cef-f293cb3e.md) |  |
| [Europium - Hash and IP IOCs - September 2022](../content/standalone-content-europium-hash-and-ip-iocs-september-2022-9d8b5a18-b7db-4c23-84a6-95febaf7e1e4-24b34350.md) |  |
| [Mass Download & copy to USB device by single user](../content/standalone-content-mass-download-&-copy-to-usb-device-by-single-user-6267ce44-1e9d-471b-9f1e-ae76a6b7aa84-8c8cd6f4.md) |  |
| [Mercury - Domain, Hash and IP IOCs - August 2022](../content/standalone-content-mercury-domain,-hash-and-ip-iocs-august-2022-ae10c588-7ff7-486c-9920-ab8b0bdb6ede-8b4a9fab.md) |  |
| [PE file dropped in Color Profile Folder](../content/standalone-content-pe-file-dropped-in-color-profile-folder-f68a5046-b7eb-4f69-9519-1e99708bb9e0-99c9d950.md) | `ActionType == "FileCreated"` |
| [Prestige ransomware IOCs Oct 2022](../content/standalone-content-prestige-ransomware-iocs-oct-2022-bca9c877-2afc-4246-a26d-087ab1cdcd5f-ab904866.md) |  |

### Hunting Queries (92)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dev-0322 File Drop Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-file-drop-activity-november-2021-5bf2d4d8-ea03-4673-aaf8-716a61446022-414e8f6c.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dropping Payload via certutil](../content/microsoft-defender-xdr-dropping-payload-via-certutil-4d11f63f-5b64-416e-8d77-266e4c6d382e-5c641ea8.md) |  |
| [Files Copied to USB Drives](../content/microsoft-defender-xdr-files-copied-to-usb-drives-f350f0e7-0e52-434c-a113-197883219f00-69c4055e.md) |  |
| [PrintNightmare CVE-2021-1675 usage Detection](../content/microsoft-defender-xdr-printnightmare-cve-2021-1675-usage-detection-8f404352-c4ff-44d1-8d70-c50ee2fad8f8-b52df162.md) | `ActionType == "FileCreated"` |
| [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-96976bb1-1993-45b8-a477-8236ee93976b-cf1c1157.md) |  |
| [Remote File Creation with PsExec](../content/microsoft-defender-xdr-remote-file-creation-with-psexec-a7214393-9da7-432e-9b41-fb02b4f740bd-db6b196f.md) |  |
| [Robbinhood Driver](../content/microsoft-defender-xdr-robbinhood-driver-4713d763-122d-419c-bf6f-bdef111cd8e2-6f03bc00.md) |  |
| [Suspicious DLLs in spool Folder](../content/microsoft-defender-xdr-suspicious-dlls-in-spool-folder-0b5b076b-9a1c-440c-a11f-8471a75f46fd-160d1915.md) | `ActionType in "FileCreated,FileRenamed"` |
| [Suspicious Files in spool Folder](../content/microsoft-defender-xdr-suspicious-files-in-spool-folder-2d16b6fc-eb63-491c-a2c2-1160e2e41dcf-ac7a0cd6.md) |  |
| [Windows Print Spooler Service Suspicious File Creation](../content/microsoft-defender-xdr-windows-print-spooler-service-suspicious-file-creation-daa347a4-8251-43a7-9730-32f22aa741ab-21c8edf9.md) | `ActionType == "FileCreated"` |

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Exchange IIS Worker Dropping Webshells](../content/web-shells-threat-protection-exchange-iis-worker-dropping-webshells-42e7df5b-80f6-49a5-946a-08026ec24807-918c2a7e.md) |  |
| [Possible webshell drop](../content/web-shells-threat-protection-possible-webshell-drop-8f2a256f-c9f1-4f0a-941a-a5a131d4bf3b-5ddc946f.md) | `ActionType in "FileCreated,FileModified,FileRenamed"` |
| [UMWorkerProcess Creating Webshell](../content/web-shells-threat-protection-umworkerprocess-creating-webshell-60d15bd4-1fad-4a70-bc3b-094dc1c5e554-5e3339db.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MDE_BrowserExtensionInstalled](../content/standalone-content-mde-browserextensioninstalled-73871df7-f708-4fe7-8fb9-a62bd5072ef9-8664bc22.md) |  |
| [MDE_FindLNKFilesOnEndpoints](../content/standalone-content-mde-findlnkfilesonendpoints-76925b23-296e-4f62-8732-27b8045056f6-e65d5ff3.md) |  |
| [MDE_FindMountedISOandDriveLetters](../content/standalone-content-mde-findmountedisoanddriveletters-19270420-5d36-43df-8bed-c34a47fadc92-9edbea2e.md) |  |
| [MDE_ShowUSBMountedandfilescopied](../content/standalone-content-mde-showusbmountedandfilescopied-ca4cf47f-6dfd-487a-a759-01d97120bfe2-66f21ec5.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AV Detections with Source](../content/github-only-av-detections-with-source-52c9e90b-84f4-4e2d-ae3d-eef85e8aa069-0c3cb3a4.md) |  |
| [Abuse.ch Recent Threat Feed](../content/github-only-abuse.ch-recent-threat-feed-2bcdf59a-679d-4585-93e7-f14d674de205-f83323a5.md) |  |
| [Abuse.ch Recent Threat Feed (1)](../content/github-only-abuse.ch-recent-threat-feed-1-8bd9e7c0-82b9-43b4-b58e-53d1ee6d9180-d82c3247.md) |  |
| [Abusing settingcontent-ms](../content/github-only-abusing-settingcontent-ms-07a17371-bea3-41e5-91d1-99728cd44955-bb277017.md) |  |
| [Accessibility Features](../content/github-only-accessibility-features-a5649d8b-e54b-4e2b-925a-106bf838d69c-dbe14580.md) |  |
| [AcroRd-Exploits](../content/github-only-acrord-exploits-c87df1a7-fa54-4730-bc90-cbc1f8ac01aa-c43b739b.md) |  |
| [Azure VM Run Command linked with MDE](../content/github-only-azure-vm-run-command-linked-with-mde-55fbc363-6cc9-4201-bd68-d980b612082b-bf841a1b.md) |  |
| [Baseline Comparison](../content/github-only-baseline-comparison-4d17ae75-87e8-4272-9aec-16448b1430bc-6e7e6931.md) | `ActionType == "PowerShellCommand"` |
| [Browser Extension Enumeration via DeviceFileEvents](../content/github-only-browser-extension-enumeration-via-devicefileevents-ede058ab-97a8-4494-aa76-b7f5f6d78cba-a2f66fb1.md) |  |
| [Data copied to other location than C drive](../content/github-only-data-copied-to-other-location-than-c-drive-8899867b-0fd8-4cfd-b6f0-0f04ef37142c-d7d474ee.md) | `ActionType == "FileCreated"` |
| [Doc attachment with link to download](../content/github-only-doc-attachment-with-link-to-download-cf259a7a-801a-435a-af3f-3ef998561145-16155f72.md) |  |
| [Dropbox downloads linked from other site](../content/github-only-dropbox-downloads-linked-from-other-site-de93670b-a1db-4c8c-80aa-5b3146428631-d523e10d.md) |  |
| [Dropping payload via certutil](../content/github-only-dropping-payload-via-certutil-f5ff5b00-a90e-40b8-b241-9427a8ec5189-47bd6693.md) |  |
| [Email link + download + SmartScreen warning](../content/github-only-email-link-+-download-+-smartscreen-warning-b29c75ca-a110-4c58-8d0b-6afac6d61078-bc09f2d6.md) |  |
| [File Copy and Execution](../content/github-only-file-copy-and-execution-a27d5cb6-c533-4a81-9d11-d5c0ed257bc7-20375a6a.md) |  |
| [Files copied to USB drives](../content/github-only-files-copied-to-usb-drives-fc2c5bbb-5347-4903-87e6-c2c76c43e420-289491f6.md) |  |
| [General attempts to access local email store](../content/github-only-general-attempts-to-access-local-email-store-c3e585d2-f1d0-4789-85a2-cdf7642fdf8b-8b60ca1e.md) |  |
| [HTA Startup Persistence](../content/github-only-hta-startup-persistence-10d275ce-bb52-41b7-b67e-05b974ed1179-9f00709f.md) |  |
| [IcedId Delivery](../content/github-only-icedid-delivery-b2f3ee1c-f379-465c-a339-412ecf3b1bcb-39a15c94.md) |  |
| [Identify EUROPIUM IOCs](../content/github-only-identify-europium-iocs-f33abf94-6759-4820-9973-51d2a41749a4-cb611a2a.md) |  |
| [KNOTWEED-PE File Dropped in Color Profile Folder](../content/github-only-knotweed-pe-file-dropped-in-color-profile-folder-cfdb2ccb-0eb3-47ed-9220-d56795906fdc-aa0e134d.md) | `ActionType == "FileCreated"` |
| [Malicious Excel Delivery](../content/github-only-malicious-excel-delivery-6fa3cf44-517f-4ce5-8727-948b0783b507-d9d7c2fd.md) |  |
| [Malicious bat file](../content/github-only-malicious-bat-file-c903138d-b948-4975-a660-57495b3f8754-637f496c.md) |  |
| [Network footprint (3)](../content/github-only-network-footprint-3-44b02f8c-d206-4e1a-9859-6aa06b80c346-72e9d427.md) |  |
| [Possible File Copy to USB Drive](../content/github-only-possible-file-copy-to-usb-drive-34be41b9-eddf-43ca-b208-5b912937f496-537e220c.md) |  |
| [Private Key Files](../content/github-only-private-key-files-2ca01fd3-afb5-4050-8a1d-6b821bdab080-d378a671.md) |  |
| [Qakbot email theft](../content/github-only-qakbot-email-theft-20b3ece3-7d4a-4952-914b-88623ccf6c09-8ae6138d.md) |  |
| [Qakbot email theft (1)](../content/github-only-qakbot-email-theft-1-a5c3ebdf-e427-4b1b-985e-c1f1e20067b7-81d315af.md) |  |
| [Ransomware hits healthcare - Vulnerable Gigabyte drivers](../content/github-only-ransomware-hits-healthcare-vulnerable-gigabyte-drivers-6eade795-7040-48eb-aae7-3f75bf7fad2e-0c90f3d2.md) |  |
| [Rare-process-as-a-service](../content/github-only-rare-process-as-a-service-a60ac80f-dce6-43ec-b102-9ae8c094d5dc-8648e4a1.md) |  |
| [SmartScreen URL block ignored by user](../content/github-only-smartscreen-url-block-ignored-by-user-172e5bee-9298-4c59-bd2a-e96d87e8e6d8-a0038d18.md) |  |
| [Storage File Seen on Endpoint](../content/github-only-storage-file-seen-on-endpoint-c7f03700-8bbe-4838-9e78-4852ef21609b-4254e436.md) | `ActionType == "FileCreated"` |
| [Suspicious DLLs in spool folder](../content/github-only-suspicious-dlls-in-spool-folder-cabb3aa3-cbfa-4359-9464-a3093d8b44f3-0d5ee674.md) | `ActionType in "FileCreated,FileRenamed"` |
| [Suspicious files in spool folder](../content/github-only-suspicious-files-in-spool-folder-664afd0d-c979-4970-affe-fc17f01276fb-73c9a13f.md) |  |
| [Windows Anitivirus and EDR Elevation of Privilege Vulnerability](../content/github-only-windows-anitivirus-and-edr-elevation-of-privilege-vulnerability-a9eb9b06-4345-47f2-abe6-29f7200ddf83-a74f0b08.md) | `ActionType == "FileCreated"` |
| [Windows Spooler Service Suspicious File Creation](../content/github-only-windows-spooler-service-suspicious-file-creation-67309406-12ad-4591-84db-0cc331634d0c-34e2df90.md) | `ActionType == "FileCreated"` |
| [apt unidentified nov 18 (1)](../content/github-only-apt-unidentified-nov-18-1-9bff1151-227c-4581-946d-643266c346a6-f1793d96.md) |  |
| [check-for-shadowhammer-activity-implant](../content/github-only-check-for-shadowhammer-activity-implant-fb6f89ae-4af3-4c37-8f12-d719e882e8a5-da57d533.md) |  |
| [cve-2019-0808-nufsys-file creation](../content/github-only-cve-2019-0808-nufsys-file-creation-447cdff3-2bfc-4f7a-b718-048d6d0ebd87-e9728721.md) |  |
| [dell-driver-vulnerability-2021](../content/github-only-dell-driver-vulnerability-2021-4eadcfeb-2ed8-40ce-941a-6691d7ddbdca-9454ccec.md) |  |
| [detect-archive-exfiltration-to-competitor](../content/github-only-detect-archive-exfiltration-to-competitor-8baad907-3b15-4f26-be09-dbba3d32fc3f-deef7303.md) |  |
| [detect-bluekeep-related-mining](../content/github-only-detect-bluekeep-related-mining-2bf77176-1b8a-4466-9b64-6b9fd4023fa5-d96a0d55.md) |  |
| [detect-cve-2019-1053-sandboxescape-exploit](../content/github-only-detect-cve-2019-1053-sandboxescape-exploit-c176e100-03cc-4b02-873b-d9686f354330-7a841f28.md) |  |
| [detect-cve-2019-1069-bearlpe-exploit](../content/github-only-detect-cve-2019-1069-bearlpe-exploit-d82cdd92-4818-4f55-9e14-68021c154cdb-40fccba2.md) |  |
| [detect-impacket-psexec-module](../content/github-only-detect-impacket-psexec-module-6e6e6486-1bfc-4de0-bcbe-1ed88dfee2a1-ba6e359d.md) |  |
| [detect-jscript-file-creation](../content/github-only-detect-jscript-file-creation-7913cb78-0e5a-4c4c-ab5b-31ef823ba25b-0fb9d2ff.md) |  |
| [detect-nbtscan-activity](../content/github-only-detect-nbtscan-activity-28ebbb87-535b-4ba0-80f4-6fbf80b7c55a-2d50bb55.md) |  |
| [detect-prifou-pua](../content/github-only-detect-prifou-pua-62bc4944-46dd-4c2f-ba04-72837bbfec3f-6e8f169c.md) |  |
| [detect-steganography-exfiltration](../content/github-only-detect-steganography-exfiltration-e0003bf6-b5f2-4dd1-a130-8651eb0b9f04-5c9b5fd7.md) |  |
| [devices_with_vuln_and_users_received_payload (1)](../content/github-only-devices-with-vuln-and-users-received-payload-1-9c2ba784-c664-40f1-b0df-8f34c6626be5-4864d8ed.md) |  |
| [files-from-malicious-sender](../content/github-only-files-from-malicious-sender-43625c12-5712-44df-8741-c334746aeccc-a436fe47.md) |  |
| [fireeye-red-team-tools-HASHs [Nobelium]](../content/github-only-fireeye-red-team-tools-hashs-[nobelium]-3e9ac786-134c-4917-99bd-4a7ce01049ab-cc118b80.md) |  |
| [hiding-java-class-file](../content/github-only-hiding-java-class-file-c5196191-609a-407f-a623-f37785eca019-3753e6c0.md) |  |
| [insider-threat-detection-queries (1)](../content/github-only-insider-threat-detection-queries-1-4685d7ec-8134-43ce-b579-7c31286b0bc5-5adac1b5.md) |  |
| [insider-threat-detection-queries (16)](../content/github-only-insider-threat-detection-queries-16-2d4f4889-ef25-4e3c-9ece-2275e55e8332-a9dfda53.md) |  |
| [insider-threat-detection-queries (2)](../content/github-only-insider-threat-detection-queries-2-1cdf6fe8-6232-48ba-bbd8-b9881c30e0e9-8b3f26dc.md) |  |
| [insider-threat-detection-queries (7)](../content/github-only-insider-threat-detection-queries-7-caa8bd4f-3d4c-41fb-94b2-7a3e819c1688-a78e2c78.md) |  |
| [launch-questd-w-osascript](../content/github-only-launch-questd-w-osascript-4e186f05-8cff-4afa-a0c8-4f0f0e7aeb82-8ca89ebc.md) |  |
| [locate-ALPC-local-privilege-elevation-exploit](../content/github-only-locate-alpc-local-privilege-elevation-exploit-8f26a2c6-4c60-469c-ac7a-f4d1ccccab9f-9b89eb2d.md) |  |
| [locate-dll-created-locally[Nobelium]](../content/github-only-locate-dll-created-locally[nobelium]-644a6cea-7662-45db-89d0-a9136a9a5da6-766ed37d.md) |  |
| [lsass-credential-dumping](../content/github-only-lsass-credential-dumping-a50138af-4bad-4615-9e55-ced36a836806-0a5fbccf.md) |  |
| [oceanlotus-apt32-files](../content/github-only-oceanlotus-apt32-files-d868871c-bdd6-45e9-9e9d-e3c4521654a7-df57d4d6.md) |  |
| [oracle-webLogic-executing-powershell](../content/github-only-oracle-weblogic-executing-powershell-2397f77e-e33e-4658-9a81-fe9dbafb810d-8e8bbd09.md) |  |
| [printnightmare-cve-2021-1675 usage detection](../content/github-only-printnightmare-cve-2021-1675-usage-detection-ec1934d5-c591-4ff4-9968-079dba04d28e-3fae6a29.md) | `ActionType == "FileCreated"` |
| [python-use-by-ransomware-macos](../content/github-only-python-use-by-ransomware-macos-8d52dce6-6143-44e9-8ff5-a62f2df742b2-dd2119b7.md) |  |
| [qakbot-campaign-outlook](../content/github-only-qakbot-campaign-outlook-221ba640-3727-4b48-b30c-f5bb7398be7b-b74f08a4.md) |  |
| [ransom-note-creation-macos](../content/github-only-ransom-note-creation-macos-fbe63fdf-142f-4b0a-b73e-8f16aaf46be7-72efc9f8.md) |  |
| [rare_sch_task_with_activity](../content/github-only-rare-sch-task-with-activity-ce76992a-8cd6-4605-9f45-cde9aae87244-3f342058.md) |  |
| [regsvr32-rundll32-abnormal-image-loads](../content/github-only-regsvr32-rundll32-abnormal-image-loads-69eb9fb7-fe0d-4c34-8c81-3a828fc12abd-b77ab5f2.md) |  |
| [remote-file-creation-with-psexec](../content/github-only-remote-file-creation-with-psexec-8b1d8f83-08f3-44fb-8328-1229521f109c-c59300e9.md) |  |
| [reverse-shell-ransomware-macos](../content/github-only-reverse-shell-ransomware-macos-936d985d-f44c-4ec7-81ae-7aa1995f940d-5fee050e.md) |  |
| [robbinhood-driver](../content/github-only-robbinhood-driver-cd718abb-96e4-436e-9a6c-63c09d40cc5c-337420a5.md) |  |
| [snip3-encoded-powershell-structure](../content/github-only-snip3-encoded-powershell-structure-c85c5b11-a5b9-480d-b9cf-79ba2289f770-99077009.md) |  |
| [winrar-cve-2018-20250-ace-files](../content/github-only-winrar-cve-2018-20250-ace-files-8320de94-2411-4748-9329-e1543f257323-0cb5affb.md) |  |
| [winrar-cve-2018-20250-file-creation](../content/github-only-winrar-cve-2018-20250-file-creation-04eaf822-d364-4434-b2c8-a6378d97f192-8819b592.md) |  |

### Workbooks (11)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):** `ActionType in "Add member to role,Add user,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user"`

| Content Item |
|:-------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |

**In solution [DORA Compliance](../solutions/dora-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DORACompliance](../content/dora-compliance-doracompliance-21bcc12f.md) |  |

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md) |  |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ExchangeCompromiseHunting](../content/github-only-exchangecompromisehunting-4fe3c3f0.md) |  |
| [MicrosoftDefenderForEndPoint](../content/github-only-microsoftdefenderforendpoint-ac005534.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |
| [SolarWindsPostCompromiseHunting](../content/github-only-solarwindspostcompromisehunting-09062974.md) | `ActionType == "RemoteInteractiveLogon"`<br>`ActionType == "LdapSearch"` |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimFileEventMicrosoft365D](../asim/asimfileeventmicrosoft365d.md) | FileEvent | Microsoft 365 Defender for EndPoint |  |

## Selection Criteria Summary (6 criteria, 15 total references)

References by type: 0 connectors, 15 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType == "FileCreated"` | - | 9 | - | - | **9** |
| `ActionType in "FileCreated,FileRenamed"` | - | 2 | - | - | **2** |
| `ActionType == "FileRenamed"` | - | 1 | - | - | **1** |
| `ActionType in "FileCreated,FileModified,FileRenamed"` | - | 1 | - | - | **1** |
| `ActionType == "PowerShellCommand"` | - | 1 | - | - | **1** |
| `ActionType in "Add member to role,Add user,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user"` | - | 1 | - | - | **1** |
| **Total** | **0** | **15** | **0** | **0** | **15** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `FileCreated` | - | 12 | - | - | **12** |
| `FileRenamed` | - | 4 | - | - | **4** |
| `FileModified` | - | 1 | - | - | **1** |
| `PowerShellCommand` | - | 1 | - | - | **1** |
| `Add member to role` | - | 1 | - | - | **1** |
| `Add user` | - | 1 | - | - | **1** |
| `InteractiveLogon` | - | 1 | - | - | **1** |
| `RemoteInteractiveLogon` | - | 1 | - | - | **1** |
| `Reset user password` | - | 1 | - | - | **1** |
| `ResourceAccess` | - | 1 | - | - | **1** |
| `Sign-in` | - | 1 | - | - | **1** |
| `Update user` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

