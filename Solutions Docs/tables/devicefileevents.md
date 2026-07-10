# DeviceFileEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for DeviceFileEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Source Vendor** | Microsoft *(basis: projected)* |
| **Source Product** | Defender XDR *(basis: projected)* |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicefileevents) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (64 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicefileevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| ActionType | string | Type of activity that triggered the event. |
| AdditionalFields | dynamic | Additional information about the entity or event. |
| AppGuardContainerId | string | Identifier for the virtualized container used by Application Guard to isolate browser activity. |
| DeviceId | string | Unique identifier for the device in the service. |
| DeviceName | string | Fully qualified domain name (FQDN) of the device. |
| FileName | string | Name of the file that the recorded action was applied to. |
| FileOriginIP | string | IP address where the file was downloaded from. |
| FileOriginReferrerUrl | string | URL of the web page that links to the downloaded file. |
| FileOriginUrl | string | URL where the file was downloaded from. |
| FileSize | long | Size of the file in bytes. |
| FolderPath | string | Folder containing the file that the recorded action was applied to. |
| InitiatingProcessAccountDomain | string | Domain of the account that ran the process responsible for the event. |
| InitiatingProcessAccountName | string | User name of the account that ran the process responsible for the event. |
| InitiatingProcessAccountObjectId | string | Azure AD object ID of the user account that ran the process responsible for the event. |
| InitiatingProcessAccountSid | string | Security Identifier (SID) of the account that ran the process responsible for the event. |
| InitiatingProcessAccountUpn | string | User principal name (UPN) of the account that ran the process responsible for the event. |
| InitiatingProcessCommandLine | string | Command line used to run the process that initiated the event. |
| InitiatingProcessCreationTime | datetime | Date and time when the process that initiated the event was started. |
| InitiatingProcessFileName | string | Name of the process that initiated the event. |
| InitiatingProcessFileSize | long | Size in bytes of the process (image file) that initiated the event. |
| InitiatingProcessFolderPath | string | Folder containing the process (image file) that initiated the event. |
| InitiatingProcessId | long | Process ID (PID) of the process that initiated the event. |
| InitiatingProcessIntegrityLevel | string | Integrity level of the process that initiated the event. Windows assigns integrity levels to processes based on certain characteristics, such as if they were launched from an internet download. These integrity levels influence permissions to resources. |
| InitiatingProcessMD5 | string | MD5 hash of the process (image file) that initiated the event. |
| InitiatingProcessParentCreationTime | datetime | Date and time when the parent of the process responsible for the event was started. |
| InitiatingProcessParentFileName | string | Name of the parent process that spawned the process responsible for the event. |
| InitiatingProcessParentId | long | Process ID (PID) of the parent process that spawned the process responsible for the event. |
| InitiatingProcessRemoteSessionDeviceName | string | Device name of the remote device from which the initiating process's RDP session was initiated. |
| InitiatingProcessRemoteSessionIP | string | IP address of the remote device from which the initiating process's RDP session was initiated. |
| InitiatingProcessSessionId | long | Windows session ID of the initiating process. |
| InitiatingProcessSHA1 | string | SHA-1 hash of the process (image file) that initiated the event. |
| InitiatingProcessSHA256 | string | SHA-256 hash of the process (image file) that initiated the event. This field is usually not populated - use the SHA1 column when available. |
| InitiatingProcessTokenElevation | string | Token type indicating the presence or absence of User Access Control (UAC) privilege elevation applied to the process that initiated the event. |
| InitiatingProcessUniqueId | string | Unique identifier of the initiating process; this is equal to the Process Start Key in Windows devices. |
| InitiatingProcessVersionInfoCompanyName | string | Company name from the version information of the process (image file) responsible for the event. |
| InitiatingProcessVersionInfoFileDescription | string | Description from the version information of the process (image file) responsible for the event. |
| InitiatingProcessVersionInfoInternalFileName | string | Internal file name from the version information of the process (image file) responsible for the event. |
| InitiatingProcessVersionInfoOriginalFileName | string | Original file name from the version information of the process (image file) responsible for the event. |
| InitiatingProcessVersionInfoProductName | string | Product name from the version information of the process (image file) responsible for the event. |
| InitiatingProcessVersionInfoProductVersion | string | Product version from the version information of the process (image file) responsible for the event. |
| IsAzureInfoProtectionApplied | bool | Indicates whether the file is encrypted by Azure Information Protection. |
| IsInitiatingProcessRemoteSession | bool | Indicates whether the initiating process was run under a remote desktop protocol (RDP) session (true) or locally (false). |
| MachineGroup | string | Machine group of the machine. This group is used by role-based access control to determine access to the machine. |
| MD5 | string | MD5 hash of the file that the recorded action was applied to. |
| PreviousFileName | string | Original name of the file that was renamed as a result of the action. |
| PreviousFolderPath | string | Original folder containing the file before the recorded action was applied. |
| ReportId | long | Event identifier based on a repeating counter. To identify unique events, this column must be used in conjunction with the ComputerName and EventTime columns. |
| RequestAccountDomain | string | Domain of the account used to remotely initiate the activity. |
| RequestAccountName | string | User name of account used to remotely initiate the activity. |
| RequestAccountSid | string | Security Identifier (SID) of the account used to remotely initiate the activity. |
| RequestProtocol | string | Network protocol, if applicable, used to initiate the activity: Unknown, Local, SMB, or NFS. |
| RequestSourceIP | string | IPv4 or IPv6 address of the remote device that initiated the activity. |
| RequestSourcePort | int | Source port on the remote device that initiated the activity. |
| SensitivityLabel | string | Label applied to an email, file, or other content to classify it for information protection. |
| SensitivitySubLabel | string | Sublabel applied to an email, file, or other content to classify it for information protection; sensitivity sublabels are grouped under sensitivity labels but are treated independently. |
| SHA1 | string | SHA-1 hash of the file that the recorded action was applied to. |
| SHA256 | string | SHA-256 of the file that the recorded action was applied to. |
| ShareName | string | Name of shared folder containing the file. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time the event was recorded by the MDE agent on the endpoint. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [DeviceFileEvents Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicefileevents)

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
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Visa Threat Intelligence (VTI)](../solutions/visa-threat-intelligence-vti.md)
- [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (35)

### Analytic Rules (15)

**In solution [FalconFriday](../solutions/falconfriday.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [ASR Bypassing Writing Executable Content](../content/falconfriday-asr-bypassing-writing-executable-content-efe4efef-5ca7-4b51-a53e-0e96492ce97a-78c522d8.md) | `ActionType == "FileRenamed"`<br>`InitiatingProcessFileName in "excel.exe,outlook.exe,powerpnt.exe,winword.exe"` |
| [Hijack Execution Flow - DLL Side-Loading](../content/falconfriday-hijack-execution-flow-dll-side-loading-3084b487-fad6-4000-9544-6085b9657290-16d7660f.md) |  |
| [Ingress Tool Transfer - Certutil](../content/falconfriday-ingress-tool-transfer-certutil-f0be11a9-ec48-4df6-801d-479556044d4e-e41d03ca.md) |  |

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Terminated employee exfiltration to USB drive](../content/microsoft-business-applications-dataverse-terminated-employee-exfiltration-to-usb-drive-c5e75cb6-cea0-49c2-a998-da414035aac1-627b05d7.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Files Copied to USB Drives](../content/microsoft-defender-xdr-files-copied-to-usb-drives-3ab04acf-e0e7-4f7c-8995-748ab4c848c2-7d23d298.md) |  |
| [Potential Build Process Compromise - MDE](../content/microsoft-defender-xdr-potential-build-process-compromise-mde-1bf6e165-5e32-420e-ab4f-0da8558a8be2-c676927e.md) |  |
| [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-91a451e3-178f-41b2-9e5d-da97d75b9971-365d2f3a.md) |  |
| [Remote File Creation with PsExec](../content/microsoft-defender-xdr-remote-file-creation-with-psexec-35ab0d58-baab-4154-87ed-fa2f69797e9e-384e377c.md) | `FolderPath has "\\\\"`<br>`InitiatingProcessCommandLine !has ".ps1"`<br>`InitiatingProcessCommandLine has ".bat"`<br>`InitiatingProcessCommandLine has "accepteula"` |
| [SUNBURST and SUPERNOVA backdoor hashes](../content/microsoft-defender-xdr-sunburst-and-supernova-backdoor-hashes-a3c144f9-8051-47d4-ac29-ffb0c312c910-6f0d9998.md) | `MD5 == "5"` |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [TI map File Hash to DeviceFileEvents Event](../content/threat-intelligence-ti-map-file-hash-to-devicefileevents-event-bc0eca2e-db50-44e6-8fa3-b85f91ff5ee7-89fca104.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [TI map File Hash to DeviceFileEvents Event](../content/threat-intelligence-new-ti-map-file-hash-to-devicefileevents-event-d6f04915-4471-4cb3-b163-a8b72997cf72-94f54e22.md) |  |

**In solution [Visa Threat Intelligence (VTI)](../solutions/visa-threat-intelligence-vti.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [VTI - High Severity SHA1 Collision Detection](../content/visa-threat-intelligence-vti-vti-high-severity-sha1-collision-detection-dbd9e28f-973d-47f3-a8c3-9e18da846870-1dd78c47.md) |  |

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Identify SysAid Server web shell creation](../content/web-shells-threat-protection-identify-sysaid-server-web-shell-creation-50eb4cbd-188f-44f4-b964-bab84dcdec10-5faaa2d1.md) |  |

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md) |  |
| [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md) |  |

### Hunting Queries (13)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Dev-0322 File Drop Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-file-drop-activity-november-2021-5bf2d4d8-ea03-4673-aaf8-716a61446022-414e8f6c.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Dropping Payload via certutil](../content/microsoft-defender-xdr-dropping-payload-via-certutil-4d11f63f-5b64-416e-8d77-266e4c6d382e-5c641ea8.md) | `InitiatingProcessFileName != "certutil.exe"`<br>`InitiatingProcessFileName != "cmd.exe"` |
| [Files Copied to USB Drives](../content/microsoft-defender-xdr-files-copied-to-usb-drives-f350f0e7-0e52-434c-a113-197883219f00-69c4055e.md) |  |
| [PrintNightmare CVE-2021-1675 usage Detection](../content/microsoft-defender-xdr-printnightmare-cve-2021-1675-usage-detection-8f404352-c4ff-44d1-8d70-c50ee2fad8f8-b52df162.md) | `ActionType == "FileCreated"`<br>`FolderPath startswith "C:\\WINDOWS\\SYSTEM32\\SPOOL\\drivers"` |
| [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-96976bb1-1993-45b8-a477-8236ee93976b-cf1c1157.md) |  |
| [Remote File Creation with PsExec](../content/microsoft-defender-xdr-remote-file-creation-with-psexec-a7214393-9da7-432e-9b41-fb02b4f740bd-db6b196f.md) | `FolderPath has "\\\\"`<br>`InitiatingProcessCommandLine !has ".ps1"`<br>`InitiatingProcessCommandLine has ".bat"`<br>`InitiatingProcessCommandLine has "accepteula"` |
| [Robbinhood Driver](../content/microsoft-defender-xdr-robbinhood-driver-4713d763-122d-419c-bf6f-bdef111cd8e2-6f03bc00.md) |  |
| [Suspicious DLLs in spool Folder](../content/microsoft-defender-xdr-suspicious-dlls-in-spool-folder-0b5b076b-9a1c-440c-a11f-8471a75f46fd-160d1915.md) | `ActionType in "FileCreated,FileRenamed"` |
| [Suspicious Files in spool Folder](../content/microsoft-defender-xdr-suspicious-files-in-spool-folder-2d16b6fc-eb63-491c-a2c2-1160e2e41dcf-ac7a0cd6.md) |  |
| [Windows Print Spooler Service Suspicious File Creation](../content/microsoft-defender-xdr-windows-print-spooler-service-suspicious-file-creation-daa347a4-8251-43a7-9730-32f22aa741ab-21c8edf9.md) | `ActionType == "FileCreated"`<br>`FolderPath startswith "C:\\WINDOWS\\SYSTEM32\\SPOOL\\drivers\\x64\\\3\\"`<br>`FolderPath startswith "C:\\WINDOWS\\SYSTEM32\\SPOOL\\drivers\\x64\\\4\\"` |

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Exchange IIS Worker Dropping Webshells](../content/web-shells-threat-protection-exchange-iis-worker-dropping-webshells-42e7df5b-80f6-49a5-946a-08026ec24807-918c2a7e.md) | `FolderPath !endswith ".ini"`<br>`FolderPath !endswith ".js"`<br>`FolderPath !endswith ".json"`<br>`FolderPath !endswith ".log"`<br>`FolderPath !endswith ".tmp"`<br>`FolderPath !endswith ".vb"`<br>`FolderPath !endswith ".xml"`<br>`FolderPath has_any "\\wwwroot\\"`<br>`InitiatingProcessCommandLine contains "MSExchange"`<br>`InitiatingProcessFileName == "w3wp.exe"` |
| [Possible webshell drop](../content/web-shells-threat-protection-possible-webshell-drop-8f2a256f-c9f1-4f0a-941a-a5a131d4bf3b-5ddc946f.md) | `ActionType in "FileCreated,FileModified,FileRenamed"` |
| [UMWorkerProcess Creating Webshell](../content/web-shells-threat-protection-umworkerprocess-creating-webshell-60d15bd4-1fad-4a70-bc3b-094dc1c5e554-5e3339db.md) | `InitiatingProcessFileName == "UMWorkerProcess.exe"` |

### Workbooks (7)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):** `ActionType in "Add member to role,Add user,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user"`

| Workbook |
|:-------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |

**In solution [DORA Compliance](../solutions/dora-compliance.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DORACompliance](../content/dora-compliance-doracompliance-21bcc12f.md) |  |

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md) |  |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1) — Selection Criteria: `FolderPath startswith "/"`

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimFileEventMicrosoft365D](../asim/asimfileeventmicrosoft365d.md) | FileEvent | Microsoft 365 Defender for EndPoint |

## Selection Criteria Summary (12 criteria, 13 total references)

References by type: 0 connectors, 12 content items, 1 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `FolderPath has "\\\\"`<br>`InitiatingProcessCommandLine !has ".ps1"`<br>`InitiatingProcessCommandLine has ".bat"`<br>`InitiatingProcessCommandLine has "accepteula"` | - | 2 | - | - | **2** |
| `ActionType == "FileRenamed"`<br>`InitiatingProcessFileName in "excel.exe,outlook.exe,powerpnt.exe,winword.exe"` | - | 1 | - | - | **1** |
| `MD5 == "5"` | - | 1 | - | - | **1** |
| `ActionType == "FileCreated"`<br>`FolderPath startswith "C:\\WINDOWS\\SYSTEM32\\SPOOL\\drivers"` | - | 1 | - | - | **1** |
| `ActionType == "FileCreated"`<br>`FolderPath startswith "C:\\WINDOWS\\SYSTEM32\\SPOOL\\drivers\\x64\\\3\\"`<br>`FolderPath startswith "C:\\WINDOWS\\SYSTEM32\\SPOOL\\drivers\\x64\\\4\\"` | - | 1 | - | - | **1** |
| `ActionType in "FileCreated,FileRenamed"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName != "certutil.exe"`<br>`InitiatingProcessFileName != "cmd.exe"` | - | 1 | - | - | **1** |
| `FolderPath !endswith ".ini"`<br>`FolderPath !endswith ".js"`<br>`FolderPath !endswith ".json"`<br>`FolderPath !endswith ".log"`<br>`FolderPath !endswith ".tmp"`<br>`FolderPath !endswith ".vb"`<br>`FolderPath !endswith ".xml"`<br>`FolderPath has_any "\\wwwroot\\"`<br>`InitiatingProcessCommandLine contains "MSExchange"`<br>`InitiatingProcessFileName == "w3wp.exe"` | - | 1 | - | - | **1** |
| `ActionType in "FileCreated,FileModified,FileRenamed"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName == "UMWorkerProcess.exe"` | - | 1 | - | - | **1** |
| `ActionType in "Add member to role,Add user,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user"` | - | 1 | - | - | **1** |
| `FolderPath startswith "/"` | - | - | 1 | - | **1** |
| **Total** | **0** | **12** | **1** | **0** | **13** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `FileCreated` | - | 4 | - | - | **4** |
| `FileRenamed` | - | 3 | - | - | **3** |
| `FileModified` | - | 1 | - | - | **1** |
| `Add member to role` | - | 1 | - | - | **1** |
| `Add user` | - | 1 | - | - | **1** |
| `InteractiveLogon` | - | 1 | - | - | **1** |
| `RemoteInteractiveLogon` | - | 1 | - | - | **1** |
| `Reset user password` | - | 1 | - | - | **1** |
| `ResourceAccess` | - | 1 | - | - | **1** |
| `Sign-in` | - | 1 | - | - | **1** |
| `Update user` | - | 1 | - | - | **1** |

### FolderPath

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `has \\\\` | - | 2 | - | - | **2** |
| `startswith C:\\WINDOWS\\SYSTEM32\\SPOOL\\drivers` | - | 1 | - | - | **1** |
| `startswith C:\\WINDOWS\\SYSTEM32\\SPOOL\\drivers\\x64\\\3\\` | - | 1 | - | - | **1** |
| `startswith C:\\WINDOWS\\SYSTEM32\\SPOOL\\drivers\\x64\\\4\\` | - | 1 | - | - | **1** |
| `!endswith .ini` | - | 1 | - | - | **1** |
| `!endswith .js` | - | 1 | - | - | **1** |
| `!endswith .json` | - | 1 | - | - | **1** |
| `!endswith .log` | - | 1 | - | - | **1** |
| `!endswith .tmp` | - | 1 | - | - | **1** |
| `!endswith .vb` | - | 1 | - | - | **1** |
| `!endswith .xml` | - | 1 | - | - | **1** |
| `has_any \\wwwroot\\` | - | 1 | - | - | **1** |
| `startswith /` | - | - | 1 | - | **1** |

### InitiatingProcessCommandLine

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!has .ps1` | - | 2 | - | - | **2** |
| `has .bat` | - | 2 | - | - | **2** |
| `has accepteula` | - | 2 | - | - | **2** |
| `contains MSExchange` | - | 1 | - | - | **1** |

### InitiatingProcessFileName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `excel.exe` | - | 1 | - | - | **1** |
| `outlook.exe` | - | 1 | - | - | **1** |
| `powerpnt.exe` | - | 1 | - | - | **1** |
| `winword.exe` | - | 1 | - | - | **1** |
| `!= certutil.exe` | - | 1 | - | - | **1** |
| `!= cmd.exe` | - | 1 | - | - | **1** |
| `w3wp.exe` | - | 1 | - | - | **1** |
| `UMWorkerProcess.exe` | - | 1 | - | - | **1** |

### MD5

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `5` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

