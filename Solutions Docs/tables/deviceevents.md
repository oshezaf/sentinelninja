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

## Solutions (7)

This table is used by the following solutions:

- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [FalconFriday](../solutions/falconfriday.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [SOC Handbook](../solutions/soc-handbook.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (23)

### Analytic Rules (11)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Suspicious Powershell Commandlet Executed](../content/b5153fb3-ada9-4ce4-9131-79c771efb50d.md)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [Office ASR rule triggered from browser spawned office process.](../content/30580043-2451-4d35-b49f-065728529f4a.md)
- [Suspicious Process Injection from Office application](../content/a4d8e681-6f30-440a-a2f3-c312bc1389d0.md)
- [Suspicious named pipes](../content/ddf7c669-db26-4215-acaf-11e2953a04e6.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI IPAddress in DeviceEvents](../content/fa566691-42a2-4136-6a8b-ffa3ea510000.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [C2-NamedPipe](../content/7ce00cba-f76f-4026-ab7f-7e4f1b67bd18.md)
- [Deimos Component Execution](../content/c25a8cd4-5b4a-45a8-9ba0-3b753a652f6b.md)
- [Files Copied to USB Drives](../content/3ab04acf-e0e7-4f7c-8995-748ab4c848c2.md)
- [Local Admin Group Changes](../content/63aa43c2-e88e-4102-aea5-0432851c541a.md)
- [SUNSPOT malware hashes](../content/53e936c6-6c30-4d12-8343-b8a0456e8429.md)
- [TEARDROP memory-only dropper](../content/738702fd-0a66-42c7-8586-e30f0583f8fe.md)

### Hunting Queries (8)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Suspicious Powershell Commandlet Execution](../content/8f424a4c-0487-45a3-92b8-00a7a8745b69.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Anomalous Payload Delivered from ISO files](../content/14694b88-a6e9-4cd1-9c4a-e382bdd82d8d.md)
- [C2-NamedPipe](../content/f78255b6-8f91-4cf3-a25c-e1144b7b5425.md)
- [Deimos Component Execution](../content/fe9edc77-1b6c-4f1e-a223-64b580b50187.md)
- [Files Copied to USB Drives](../content/f350f0e7-0e52-434c-a113-197883219f00.md)
- [LemonDuck Registration Function](../content/147c4c0a-7241-4ce9-9b71-0aecb8a2b59f.md)
- [Local Admin Group Changes](../content/63142c12-5d8b-48cf-a0f6-b523c855497c.md)
- [Scheduled Task Creation](../content/1ddee78f-7508-4f4a-9b6b-d2927724217d.md)

### Workbooks (4)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation.md)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmcv2-cybersecuritymaturitymodelcertification%28cmmc%292.0.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForEndPoint](../content/microsoftdefenderforendpoint-microsoft-defender-xdr.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AttackSurfaceReduction](../content/attacksurfacereduction-soc-handbook.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
