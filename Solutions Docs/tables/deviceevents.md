# DeviceEvents

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

- [Blackberry CylancePROTECT](../solutions/blackberry-cylanceprotect.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [FalconFriday](../solutions/falconfriday.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (2)

This table is ingested by the following connectors:

- [[Deprecated] Blackberry CylancePROTECT](../connectors/blackberrycylanceprotect.md)
- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (30)

### Analytic Rules (16)

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

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**
- [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md)
- [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md)

### Hunting Queries (9)

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

### Workbooks (5)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AttackSurfaceReduction](../content/soc-handbook-attacksurfacereduction-52743d4b.md)
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

