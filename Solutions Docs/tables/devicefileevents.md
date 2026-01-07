# DeviceFileEvents

File creation, modification, and other file system events

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicefileevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicefileevents-table) |

## Solutions (7)

This table is used by the following solutions:

- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [FalconFriday](../solutions/falconfriday.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Malware Protection Essentials](../solutions/malware-protection-essentials.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (28)

### Analytic Rules (7)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [ASR Bypassing Writing Executable Content](../content/falconfriday-asr-bypassing-writing-executable-content-efe4efef-5ca7-4b51-a53e-0e96492ce97a.md)
- [Hijack Execution Flow - DLL Side-Loading](../content/falconfriday-hijack-execution-flow---dll-side-loading-3084b487-fad6-4000-9544-6085b9657290.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence---threat-hunting-hash-8f9cd0e5-b4ab-4821-95e2-1082fcd784c7.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Potential Build Process Compromise - MDE](../content/microsoft-defender-xdr-potential-build-process-compromise---mde-1bf6e165-5e32-420e-ab4f-0da8558a8be2.md)
- [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-91a451e3-178f-41b2-9e5d-da97d75b9971.md)
- [Remote File Creation with PsExec](../content/microsoft-defender-xdr-remote-file-creation-with-psexec-35ab0d58-baab-4154-87ed-fa2f69797e9e.md)
- [SUNBURST and SUPERNOVA backdoor hashes](../content/microsoft-defender-xdr-sunburst-and-supernova-backdoor-hashes-a3c144f9-8051-47d4-ac29-ffb0c312c910.md)

### Hunting Queries (18)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence---threat-hunting-hash-0051a0d9-684f-4317-abbd-c1e5c24b39cb.md)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**
- [Dev-0322 File Drop Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-file-drop-activity-november-2021-5bf2d4d8-ea03-4673-aaf8-716a61446022.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect File Creation in Startup Folder](../content/malware-protection-essentials-detect-file-creation-in-startup-folder-64e199a8-b26c-462f-a65c-09ed9b53a47b.md)
- [Detect Files with Ramsomware Extensions](../content/malware-protection-essentials-detect-files-with-ramsomware-extensions-595aea5c-74c7-415b-8b12-10af1a338cdf.md)
- [Detect Modification to System Files or Directories by User Accounts](../content/malware-protection-essentials-detect-modification-to-system-files-or-directories-by-user-accounts-54b222c4-0149-421e-9d6d-da66da50495a.md)
- [Detect New Scheduled Task Entry Creations](../content/malware-protection-essentials-detect-new-scheduled-task-entry-creations-4dc0aae4-6375-4670-b138-8c42490ba206.md)
- [Executable Files Created in Uncommon Locations](../content/malware-protection-essentials-executable-files-created-in-uncommon-locations-ab8ddb26-050c-40aa-aaf0-bfb7e3eeb05f.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Dropping Payload via certutil](../content/microsoft-defender-xdr-dropping-payload-via-certutil-4d11f63f-5b64-416e-8d77-266e4c6d382e.md)
- [PrintNightmare CVE-2021-1675 usage Detection](../content/microsoft-defender-xdr-printnightmare-cve-2021-1675-usage-detection-8f404352-c4ff-44d1-8d70-c50ee2fad8f8.md)
- [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-96976bb1-1993-45b8-a477-8236ee93976b.md)
- [Remote File Creation with PsExec](../content/microsoft-defender-xdr-remote-file-creation-with-psexec-a7214393-9da7-432e-9b41-fb02b4f740bd.md)
- [Robbinhood Driver](../content/microsoft-defender-xdr-robbinhood-driver-4713d763-122d-419c-bf6f-bdef111cd8e2.md)
- [Suspicious DLLs in spool Folder](../content/microsoft-defender-xdr-suspicious-dlls-in-spool-folder-0b5b076b-9a1c-440c-a11f-8471a75f46fd.md)
- [Suspicious Files in spool Folder](../content/microsoft-defender-xdr-suspicious-files-in-spool-folder-2d16b6fc-eb63-491c-a2c2-1160e2e41dcf.md)
- [Windows Print Spooler Service Suspicious File Creation](../content/microsoft-defender-xdr-windows-print-spooler-service-suspicious-file-creation-daa347a4-8251-43a7-9730-32f22aa741ab.md)

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**
- [Exchange IIS Worker Dropping Webshells](../content/web-shells-threat-protection-exchange-iis-worker-dropping-webshells-42e7df5b-80f6-49a5-946a-08026ec24807.md)
- [Possible webshell drop](../content/web-shells-threat-protection-possible-webshell-drop-8f2a256f-c9f1-4f0a-941a-a5a131d4bf3b.md)
- [UMWorkerProcess Creating Webshell](../content/web-shells-threat-protection-umworkerprocess-creating-webshell-60d15bd4-1fad-4a70-bc3b-094dc1c5e554.md)

### Workbooks (3)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [MalwareProtectionEssentialsWorkbook](../content/malware-protection-essentials-malwareprotectionessentialsworkbook.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
