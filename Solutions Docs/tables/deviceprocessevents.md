# DeviceProcessEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for DeviceProcessEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Source Vendor** | Microsoft *(basis: projected)* |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceprocessevents) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (74 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceprocessevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AccountDomain | string | Domain of the account. |
| AccountName | string | User name of the account. |
| AccountObjectId | string | Unique identifier for the account in Azure AD. |
| AccountSid | string | Security Identifier (SID) of the account. |
| AccountUpn | string | User principal name (UPN) of the account. |
| ActionType | string | Type of activity that triggered the event. |
| AdditionalFields | dynamic | Additional information about the entity or event. |
| AppGuardContainerId | string | Identifier for the virtualized container used by Application Guard to isolate browser activity. |
| CreatedProcessSessionId | long | Windows session ID of the created process. |
| DeviceId | string | Unique identifier for the device in the service. |
| DeviceName | string | Fully qualified domain name (FQDN) of the device. |
| FileName | string | Name of the file that the recorded action was applied to. |
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
| InitiatingProcessFileSize | long | The size of the file (bytes) that ran the process responsible for the event. |
| InitiatingProcessFolderPath | string | Folder containing the process (image file) that initiated the event. |
| InitiatingProcessId | long | Process ID (PID) of the process that initiated the event. |
| InitiatingProcessIntegrityLevel | string | Integrity level of the process that initiated the event. Windows assigns integrity levels to processes based on certain characteristics, such as if they were launched from an internet download. These integrity levels influence permissions to resources.. |
| InitiatingProcessLogonId | long | Identifier for a logon session of the process that initiated the event. This identifier is unique on the same machine only between restarts.. |
| InitiatingProcessMD5 | string | MD5 hash of the process (image file) that initiated the event. |
| InitiatingProcessParentCreationTime | datetime | Date and time when the parent of the process responsible for the event was started. |
| InitiatingProcessParentFileName | string | Name of the parent process that spawned the process responsible for the event. |
| InitiatingProcessParentId | long | Process ID (PID) of the parent process that spawned the process responsible for the event. |
| InitiatingProcessRemoteSessionDeviceName | string | Device name of the remote device from which the initiating process's RDP session was initiated. |
| InitiatingProcessRemoteSessionIP | string | IP address of the remote device from which the initiating process's RDP session was initiated. |
| InitiatingProcessSessionId | long | Windows session ID of the initiating process. |
| InitiatingProcessSHA1 | string | SHA-1 hash of the process (image file) that initiated the event. |
| InitiatingProcessSHA256 | string | SHA-256 hash of the process (image file) that initiated the event. In some cases this column may not be populated - please use the InitiatingProcessSHA1 column instead. |
| InitiatingProcessSignatureStatus | string | Information about the signature status of the process (image file) that initiated the event. |
| InitiatingProcessSignerType | string | Type of file signer of the process (image file) that initiated the event. |
| InitiatingProcessTokenElevation | string | Token type indicating the presence or absence of User Access Control (UAC) privilege elevation applied to the process that initiated the event. |
| InitiatingProcessUniqueId | string | Unique identifier of the initiating process; this is equal to the Process Start Key in Windows devices. |
| InitiatingProcessVersionInfoCompanyName | string | The company name in version information (image file) responsible for the event. |
| InitiatingProcessVersionInfoFileDescription | string | The description in version information (image file) responsible for the event. |
| InitiatingProcessVersionInfoInternalFileName | string | The internal file name in version information (image file) responsible for the event. |
| InitiatingProcessVersionInfoOriginalFileName | string | The original file name in version information (image file) responsible for the event. |
| InitiatingProcessVersionInfoProductName | string | The product name in version information (image file) responsible for the event. |
| InitiatingProcessVersionInfoProductVersion | string | The product version in version information (image file) responsible for the event. |
| IsInitiatingProcessRemoteSession | bool | Indicates whether the initiating process was run under a remote desktop protocol (RDP) session (true) or locally (false). |
| IsProcessRemoteSession | bool | Indicates whether the created process was run under a remote desktop protocol (RDP) session (true) or locally (false). |
| LogonId | long | Identifier for a logon session. This identifier is unique on the same machine only between restarts. |
| MachineGroup | string | Machine group of the machine. This group is used by role-based access control to determine access to the machine. |
| MD5 | string | MD5 hash of the file that the recorded action was applied to. |
| ProcessCommandLine | string | Command line used to create the new process. |
| ProcessCreationTime | datetime | Date and time the process was created. |
| ProcessId | long | Process ID (PID) of the newly created process. |
| ProcessIntegrityLevel | string | Integrity level of the newly created process. Windows assigns integrity levels to processes based on certain characteristics, such as if they were launched from an internet downloaded. These integrity levels influence permissions to resources.. |
| ProcessRemoteSessionDeviceName | string | Device name of the remote device from which the created process's RDP session was initiated. |
| ProcessRemoteSessionIP | string | IP address of the remote device from which the created process's RDP session was initiated. |
| ProcessTokenElevation | string | Token type indicating the presence or absence of User Access Control (UAC) privilege elevation applied to the newly created process. |
| ProcessUniqueId | string | Unique identifier of the process; this is equal to the Process Start Key in Windows devices. |
| ProcessVersionInfoCompanyName | string | Company name from the version information of the newly created process. |
| ProcessVersionInfoFileDescription | string | Description from the version information of the newly created process. |
| ProcessVersionInfoInternalFileName | string | Internal file name from the version information of the newly created process. |
| ProcessVersionInfoOriginalFileName | string | Original file name from the version information of the newly created process. |
| ProcessVersionInfoProductName | string | Product name from the version information of the newly created process. |
| ProcessVersionInfoProductVersion | string | Product version from the version information of the newly created process. |
| ReportId | long | Event identifier based on a repeating counter. To identify unique events, this column must be used in conjunction with the ComputerName and EventTime columns.. |
| SHA1 | string | SHA-1 hash of the file that the recorded action was applied to. |
| SHA256 | string | SHA-256 of the file that the recorded action was applied to. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time the event was recorded by the MDE agent on the endpoint. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [DeviceProcessEvents Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceprocessevents)

## Solutions (12)

This table is used by the following solutions:

- [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [Cyware](../solutions/cyware.md)
- [Dev 0270 Detection and Hunting](../solutions/dev-0270-detection-and-hunting.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [FalconFriday](../solutions/falconfriday.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (98)

### Analytic Rules (41)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Probable AdFind Recon Tool Usage](../content/attacker-tools-threat-protection-essentials-probable-adfind-recon-tool-usage-c63ae777-d5e0-4113-8c9a-c2c9d3d09fcd-3713de66.md) |  |

**In solution [Dev 0270 Detection and Hunting](../solutions/dev-0270-detection-and-hunting.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [DEV-0270 New User Creation](../content/dev-0270-detection-and-hunting-dev-0270-new-user-creation-7965f0be-c039-4d18-8ee8-9a6add8aecf3-884bf05d.md) |  |
| [Dev-0270 Malicious Powershell usage](../content/dev-0270-detection-and-hunting-dev-0270-malicious-powershell-usage-422ca2bf-598b-4872-82bb-5f7e8fa731e7-02bc41bc.md) |  |
| [Dev-0270 Registry IOC - September 2022](../content/dev-0270-detection-and-hunting-dev-0270-registry-ioc-september-2022-2566e99f-ad0f-472a-b9ac-d3899c9283e6-d97be37a.md) |  |
| [Dev-0270 WMIC  Discovery](../content/dev-0270-detection-and-hunting-dev-0270-wmic-discovery-6b652b4f-9810-4eec-9027-7aa88ce4db23-8289b5fe.md) |  |

**In solution [FalconFriday](../solutions/falconfriday.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Access Token Manipulation - Create Process with Token](../content/falconfriday-access-token-manipulation-create-process-with-token-8df80270-b4fa-4a7a-931e-8d17c0b321ae-d1e3f3fd.md) |  |
| [DCOM Lateral Movement](../content/falconfriday-dcom-lateral-movement-d58035ff-0bac-4c61-a7f4-f58939ff9764-9dd841b7.md) | `ActionType != "ListeningConnectionCreated"`<br>`InitiatingProcessParentFileName == "svchost.exe"` |
| [Detecting UAC bypass - ChangePK and SLUI registry tampering](../content/falconfriday-detecting-uac-bypass-changepk-and-slui-registry-tampering-829a69ba-93e1-491f-8a1f-b19506e9d88a-8d651a60.md) | `InitiatingProcessFileName == "changepk.exe"`<br>`InitiatingProcessParentFileName == "slui.exe"`<br>`ProcessIntegrityLevel == "High"` |
| [Detecting UAC bypass - elevated COM interface](../content/falconfriday-detecting-uac-bypass-elevated-com-interface-2d5efc71-2e91-4ca2-8506-857eecb453ec-e0911a66.md) | `InitiatingProcessCommandLine has_any "E9495B87-D950-4AB5-87A5-FF6D70BF3E90"`<br>`InitiatingProcessFileName == "dllhost.exe"`<br>`ProcessIntegrityLevel == "High"` |
| [Detecting UAC bypass - modify Windows Store settings](../content/falconfriday-detecting-uac-bypass-modify-windows-store-settings-8b8fbf9c-35d4-474b-8151-a40173521293-03123f75.md) | `InitiatingProcessFileName == "wsreset.exe"`<br>`ProcessIntegrityLevel == "High"` |
| [Disable or Modify Windows Defender](../content/falconfriday-disable-or-modify-windows-defender-20d52a04-b5d8-402d-88e2-7929d12cbdcd-3b3084de.md) | `InitiatingProcessVersionInfoProductName != "Android Studio"` |
| [Ingress Tool Transfer - Certutil](../content/falconfriday-ingress-tool-transfer-certutil-f0be11a9-ec48-4df6-801d-479556044d4e-e41d03ca.md) | `ProcessCommandLine has "certutil"` |
| [Match Legitimate Name or Location - 2](../content/falconfriday-match-legitimate-name-or-location-2-dd22dc4f-ab7c-4d0a-84ad-cc393638ba31-6d4321f9.md) |  |
| [Oracle suspicious command execution](../content/falconfriday-oracle-suspicious-command-execution-e6c5ff42-0f42-4cec-994a-dabb92fe36e1-0ab82658.md) | `InitiatingProcessFileName == "oracle.exe"` |
| [Remote Desktop Protocol - SharpRDP](../content/falconfriday-remote-desktop-protocol-sharprdp-cc46e76c-0d04-40b0-9c8b-929aa40513e7-7ea028f9.md) | `ActionType == "LogonSuccess"` |
| [Rename System Utilities](../content/falconfriday-rename-system-utilities-335ddff8-b615-42cd-b593-86e419b45d78-753d3370.md) |  |
| [SMB/Windows Admin Shares](../content/falconfriday-smb-windows-admin-shares-9da25366-2c77-41a5-a159-0da5e2f5fb90-2e2330d9.md) | `ActionType == "InboundConnectionAccepted"`<br>`ProcessCommandLine != "msiexec.exe /V"` |
| [Suspicious parentprocess relationship - Office child processes.](../content/falconfriday-suspicious-parentprocess-relationship-office-child-processes.-5ee34fa1-64ed-48c7-afa2-794b244f6c60-081c16fa.md) |  |
| [Trusted Developer Utilities Proxy Execution](../content/falconfriday-trusted-developer-utilities-proxy-execution-5c2bb446-926f-4160-a233-21e335c2c290-aac01cd9.md) | `FolderPath startswith "C:\\Program Files (x86)\\Microsoft Visual Studio"`<br>`InitiatingProcessFileName in "WDExpress.exe,devenv.exe"`<br>`InitiatingProcessFolderPath startswith "C:\\Program Files (x86)\\Microsoft Visual Studio"`<br>`ProcessCommandLine has_any "/exe"`<br>`ProcessCommandLine has_any "out"` |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Account Creation](../content/microsoft-defender-xdr-account-creation-450f4e56-5bba-4070-b9d9-9204ba9d777d-b3cc4be4.md) | `InitiatingProcessFileName == "net.exe"`<br>`ProcessCommandLine !contains "/add"`<br>`ProcessCommandLine !contains "/domain"` |
| [Bitsadmin Activity](../content/microsoft-defender-xdr-bitsadmin-activity-2a1dc4c2-a8d6-4a0e-8539-9b971c851195-44faa570.md) | `ProcessCommandLine has "/Upload"`<br>`ProcessCommandLine has_any "/Transfer"` |
| [Clearing of forensic evidence from event logs using wevtutil](../content/microsoft-defender-xdr-clearing-of-forensic-evidence-from-event-logs-using-wevtutil-515d0bba-b297-4f83-8280-20ff7f27ecb1-b91bc0f3.md) | `ProcessCommandLine has "CL"`<br>`ProcessCommandLine has "WEVTUTIL"` |
| [Deletion of data on multiple drives using cipher exe](../content/microsoft-defender-xdr-deletion-of-data-on-multiple-drives-using-cipher-exe-03caa992-477f-4b19-8e2a-8cd58f8f9652-a1302600.md) | `ProcessCommandLine has "/w"` |
| [Detect Suspicious Commands Initiated by Webserver Processes](../content/microsoft-defender-xdr-detect-suspicious-commands-initiated-by-webserver-processes-fa2f7d8a-6726-465a-aa72-6f6e3d4c99d7-6071b885.md) | `InitiatingProcessFileName in "beasvc.exe,httpd.exe,w3wp.exe"`<br>`InitiatingProcessFileName startswith "tomcat"`<br>`InitiatingProcessParentFileName in "beasvc.exe,httpd.exe,w3wp.exe"`<br>`InitiatingProcessParentFileName startswith "tomcat"`<br>`ProcessCommandLine contains "%temp%"`<br>`ProcessCommandLine has "certutil"`<br>`ProcessCommandLine has "ipconfig"`<br>`ProcessCommandLine has "ping"`<br>`ProcessCommandLine has "systeminfo"`<br>`ProcessCommandLine has "timeout"`<br>`ProcessCommandLine has "wget"`<br>`ProcessCommandLine has "whoami"` |
| [Disabling Security Services via Registry](../content/microsoft-defender-xdr-disabling-security-services-via-registry-32b29155-3fd3-4a9e-a0ca-a67e2593b60b-e9f38271.md) |  |
| [Doppelpaymer Stop Services](../content/microsoft-defender-xdr-doppelpaymer-stop-services-5bdc1504-880c-4b30-a39c-7c746535928d-6df3ea36.md) | `InitiatingProcessFileName startswith "psexe"`<br>`ProcessCommandLine has "msexchange"`<br>`ProcessCommandLine has "sql"`<br>`ProcessCommandLine has "stop-service"` |
| [DopplePaymer Procdump](../content/microsoft-defender-xdr-dopplepaymer-procdump-1be34fb9-f81b-47ae-84fb-465e6686d76c-cc25e831.md) | `ProcessCommandLine contains "-ma"`<br>`ProcessCommandLine has "-accepteula"`<br>`ProcessCommandLine has "lsass"` |
| [Execution of software vulnerable to webp buffer overflow of CVE-2023-4863](../content/microsoft-defender-xdr-execution-of-software-vulnerable-to-webp-buffer-overflow-of-cve-2023-4863-26e81021-2de6-4442-a74a-a77885e96911-15de3ea9.md) |  |
| [Java Executing cmd to run Powershell](../content/microsoft-defender-xdr-java-executing-cmd-to-run-powershell-2c81c0a0-9823-4a14-b21a-2b4acd3335d2-106ea66a.md) | `InitiatingProcessFileName == "java.exe"` |
| [LSASS Credential Dumping with Procdump](../content/microsoft-defender-xdr-lsass-credential-dumping-with-procdump-c332b840-61e4-462e-a201-0e2d69bad45d-36f7eb44.md) | `ProcessCommandLine contains "-ma"`<br>`ProcessCommandLine has "-accepteula"`<br>`ProcessCommandLine has "lsass"`<br>`ProcessCommandLine has "lsass.exe"` |
| [LaZagne Credential Theft](../content/microsoft-defender-xdr-lazagne-credential-theft-7d0d3050-8dac-4b83-bfae-902f7dc0c21c-2a344765.md) |  |
| [Office Apps Launching Wscipt](../content/microsoft-defender-xdr-office-apps-launching-wscipt-174de33b-107b-4cd8-a85d-b4025a35453f-49a22465.md) | `InitiatingProcessFileName in "excel.exe,outlook.exe,winword.exe"`<br>`ProcessCommandLine has ".jse"` |
| [Potential Build Process Compromise - MDE](../content/microsoft-defender-xdr-potential-build-process-compromise-mde-1bf6e165-5e32-420e-ab4f-0da8558a8be2-c676927e.md) | `ActionType in "FileCreated,FileModified"` |
| [Qakbot Campaign Self Deletion](../content/microsoft-defender-xdr-qakbot-campaign-self-deletion-47c02e21-3949-4e05-a28e-576cd75ff6f6-a7a7167c.md) | `InitiatingProcessCommandLine has "-n 6"`<br>`InitiatingProcessCommandLine has "127.0.0.1"`<br>`InitiatingProcessCommandLine has "calc.exe"`<br>`InitiatingProcessFileName == "cmd.exe"` |
| [Qakbot Discovery Activies](../content/microsoft-defender-xdr-qakbot-discovery-activies-ba9db6b2-3d05-42ae-8aee-3a15bbe29f27-5676e3c6.md) | `InitiatingProcessCommandLine endswith "127.0.0.1"`<br>`InitiatingProcessCommandLine has "-a"`<br>`InitiatingProcessCommandLine has "-nao"`<br>`InitiatingProcessCommandLine has "-t"`<br>`InitiatingProcessCommandLine has "/all"`<br>`InitiatingProcessFileName in "explorer.exe,mobsync.exe"` |
| [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-91a451e3-178f-41b2-9e5d-da97d75b9971-365d2f3a.md) |  |
| [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-2624fc55-0998-4897-bb48-1c6422befce4-d1e3cdd5.md) |  |
| [Shadow Copy Deletions](../content/microsoft-defender-xdr-shadow-copy-deletions-28c63a44-2d35-48b7-831b-3ed24af17c7e-dcc95706.md) |  |
| [Stopping multiple processes using taskkill](../content/microsoft-defender-xdr-stopping-multiple-processes-using-taskkill-4dd31bd5-11a3-4b9c-a7c5-4927ab4f2a77-6e396de6.md) |  |

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md) |  |
| [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md) |  |

### Hunting Queries (53)

**In solution [Cyware](../solutions/cyware.md):** `ProcessCommandLine has "powershell.exe"`

| Hunting Query |
|:-------------|
| [Detecting Suspicious PowerShell Command Executions](../content/cyware-detecting-suspicious-powershell-command-executions-47559078-dc4c-4de3-96fe-270d4ca95446-741c48d3.md) |

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Backup Deletion](../content/endpoint-threat-protection-essentials-backup-deletion-56ebae61-89cf-42d9-99f4-3dff8ba33885-e1c87558.md) |  |
| [Potential Microsoft Security Services Tampering](../content/endpoint-threat-protection-essentials-potential-microsoft-security-services-tampering-e10e1d2f-265d-4d90-9037-7f3a6ed8a91e-8c1dc76e.md) | `InitiatingProcessCommandLine has "$true"`<br>`InitiatingProcessCommandLine has "/IM"`<br>`InitiatingProcessCommandLine has "Set-MpPreference"`<br>`InitiatingProcessCommandLine has "Start"`<br>`InitiatingProcessCommandLine has "config"`<br>`InitiatingProcessParentFileName != "cscript.exe"` |
| [Rare Windows Firewall Rule updates using Netsh](../content/endpoint-threat-protection-essentials-rare-windows-firewall-rule-updates-using-netsh-e3e8c913-e5e9-4517-b4f7-dd1ec071888f-d0fef21e.md) | `InitiatingProcessCommandLine has_all "advfirewall"`<br>`InitiatingProcessFileName == "netsh.exe"` |
| [Unicode Obfuscation in Command Line](../content/endpoint-threat-protection-essentials-unicode-obfuscation-in-command-line-a953f304-12e4-48ae-bedc-d58fb1b0c6a6-25c755ef.md) |  |

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Dev-0056 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0056-command-line-activity-november-2021-e2629949-2043-4421-8064-bca23c8491dd-1cdb73c2.md) |  |
| [Dev-0322 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-command-line-activity-november-2021-78fa22f9-0c13-4847-bbe6-6a7aa1b47547-84856956.md) | `InitiatingProcessCommandLine matchesregex "save HKLM\\SYSTEM [^ ]*_System.HIV"`<br>`ProcessCommandLine matchesregex "cmd.exe /c"`<br>`ProcessCommandLine matchesregex "save HKLM\\SYSTEM [^ ]*_System.HIV"` |
| [Dev-0322 File Drop Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-file-drop-activity-november-2021-5bf2d4d8-ea03-4673-aaf8-716a61446022-414e8f6c.md) |  |
| [Nylon Typhoon Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-nylon-typhoon-command-line-activity-november-2021-bb30abbc-9af6-4a37-9536-e9207e023989-bdd1efea.md) |  |
| [SolarWinds Inventory](../content/legacy-ioc-based-threat-protection-solarwinds-inventory-278592b5-612b-48a4-bb38-4c01ff8ee2a5-c7f23741.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Account Creation](../content/microsoft-defender-xdr-account-creation-d0585c34-1b03-473c-938d-11fe73f7e053-4486ca7f.md) | `InitiatingProcessFileName == "net.exe"`<br>`ProcessCommandLine !contains "/add"`<br>`ProcessCommandLine !contains "/domain"` |
| [Anomalous Payload Delivered from ISO files](../content/microsoft-defender-xdr-anomalous-payload-delivered-from-iso-files-14694b88-a6e9-4cd1-9c4a-e382bdd82d8d-9bc45897.md) |  |
| [Bitsadmin Activity](../content/microsoft-defender-xdr-bitsadmin-activity-bba7bbbe-5aa3-4c08-bd23-dd6cd8ccaf20-7a642ef6.md) | `ProcessCommandLine has "/Upload"`<br>`ProcessCommandLine has_any "/Transfer"` |
| [Check for multiple signs of Ransomware Activity](../content/microsoft-defender-xdr-check-for-multiple-signs-of-ransomware-activity-4f669adc-2c00-4bc8-896b-e59f068dcb18-164f406c.md) | `ProcessCommandLine has "cl"`<br>`ProcessCommandLine has "config"`<br>`ProcessCommandLine has "delete"`<br>`ProcessCommandLine has "deletejournal"`<br>`ProcessCommandLine has "disabled"`<br>`ProcessCommandLine has "sc"`<br>`ProcessCommandLine has "shadowcopy delete"`<br>`ProcessCommandLine has "usn"`<br>`ProcessCommandLine has "wbadmin"`<br>`ProcessCommandLine has "wevtutil"`<br>`ProcessCommandLine has "wmic"` |
| [Clear System Logs](../content/microsoft-defender-xdr-clear-system-logs-6284b962-ab0d-46d8-a47f-1eb1ac1be463-c8af8f2d.md) | `ProcessCommandLine has "deletejournal"`<br>`ProcessCommandLine has "usn"` |
| [Clearing of forensic evidence from event logs using wevtutil](../content/microsoft-defender-xdr-clearing-of-forensic-evidence-from-event-logs-using-wevtutil-3dd9ab09-0ea3-4f47-ba10-f84045ab52c3-f7cf440c.md) | `ProcessCommandLine has "CL"`<br>`ProcessCommandLine has "WEVTUTIL"` |
| [Credential Harvesting Using LaZagne](../content/microsoft-defender-xdr-credential-harvesting-using-lazagne-79f9bb6b-6d31-412e-b3bc-6e5ad1303112-a9fbb57d.md) | `ProcessCommandLine has "hklm"`<br>`ProcessCommandLine has "sam"`<br>`ProcessCommandLine has "save"` |
| [DLLHost.exe WMIC domain discovery](../content/microsoft-defender-xdr-dllhost.exe-wmic-domain-discovery-f086d58b-c44b-4fae-903b-f65ad042a4ee-83b2c14e.md) | `InitiatingProcessCommandLine == "dllhost.exe"`<br>`InitiatingProcessFileName == "dllhost.exe"`<br>`ProcessCommandLine has "wmic computersystem get domain"` |
| [Deletion of data on multiple drives using cipher exe](../content/microsoft-defender-xdr-deletion-of-data-on-multiple-drives-using-cipher-exe-cb2fb8f9-89bd-485e-8422-da8cb6c7bc23-f8c40db4.md) | `ProcessCommandLine has "/w"` |
| [Detect MaiSniper](../content/microsoft-defender-xdr-detect-maisniper-e17ddfc6-7478-443b-99ff-286f3d09b8aa-ab6dfb83.md) |  |
| [Detect Malicious use of Msiexec Mimikatz](../content/microsoft-defender-xdr-detect-malicious-use-of-msiexec-mimikatz-58e6170e-0512-4485-9638-463fdde85b0e-0de34535.md) | `InitiatingProcessFileName == "msiexec.exe"`<br>`ProcessCommandLine contains "privilege::"`<br>`ProcessCommandLine contains "token::"`<br>`ProcessCommandLine has "sekurlsa"` |
| [Detect Suspicious Commands Initiated by Webserver Processes](../content/microsoft-defender-xdr-detect-suspicious-commands-initiated-by-webserver-processes-fa2f7d8a-6726-465a-aa72-6f6e3d4c99d7-f6d9e7c9.md) | `InitiatingProcessFileName in "beasvc.exe,httpd.exe,w3wp.exe"`<br>`InitiatingProcessFileName startswith "tomcat"`<br>`InitiatingProcessParentFileName in "beasvc.exe,httpd.exe,w3wp.exe"`<br>`InitiatingProcessParentFileName startswith "tomcat"`<br>`ProcessCommandLine contains "%temp%"`<br>`ProcessCommandLine has "certutil"`<br>`ProcessCommandLine has "ipconfig"`<br>`ProcessCommandLine has "ping"`<br>`ProcessCommandLine has "systeminfo"`<br>`ProcessCommandLine has "timeout"`<br>`ProcessCommandLine has "wget"`<br>`ProcessCommandLine has "whoami"` |
| [Detect Suspicious Mshta Usage](../content/microsoft-defender-xdr-detect-suspicious-mshta-usage-81f02314-2ff5-45cb-a35d-0deb546a0104-6bc93255.md) | `InitiatingProcessCommandLine contains "<script>"`<br>`InitiatingProcessFileName == "mshta.exe"` |
| [Disabling Services via Registry](../content/microsoft-defender-xdr-disabling-services-via-registry-06ea5081-cdea-40c8-b829-240ece951243-b119d09b.md) |  |
| [Doppelpaymer Stop Services](../content/microsoft-defender-xdr-doppelpaymer-stop-services-abf42310-51c7-4d7f-98d2-e5af09859aab-837c2062.md) | `InitiatingProcessFileName startswith "psexe"`<br>`ProcessCommandLine has "msexchange"`<br>`ProcessCommandLine has "sql"`<br>`ProcessCommandLine has "stop-service"` |
| [DopplePaymer Procdump](../content/microsoft-defender-xdr-dopplepaymer-procdump-89b31213-4350-4730-8d27-26667ce53894-14013cca.md) | `ProcessCommandLine contains "-ma"`<br>`ProcessCommandLine has "-accepteula"`<br>`ProcessCommandLine has "lsass"` |
| [Enumeration of Users & Groups for Lateral Movement](../content/microsoft-defender-xdr-enumeration-of-users-&-groups-for-lateral-movement-29683151-e15d-4c0c-845b-892be89bf080-776e21b6.md) | `ProcessCommandLine !contains "/add"`<br>`ProcessCommandLine !contains "\\"`<br>`ProcessCommandLine contains "/do"`<br>`ProcessCommandLine contains "/domain"`<br>`ProcessCommandLine contains "group"`<br>`ProcessCommandLine contains "user"` |
| [Imminent Ransomware](../content/microsoft-defender-xdr-imminent-ransomware-846bf25e-3d2d-4122-9b60-adfadd2fc616-8ac809d0.md) |  |
| [Java Executing cmd to run Powershell](../content/microsoft-defender-xdr-java-executing-cmd-to-run-powershell-a18e8bcf-e05d-4e45-bc6e-2c5004729fbd-5f3d8e5c.md) | `InitiatingProcessFileName == "java.exe"` |
| [Judgement Panda Exfil Activity](../content/microsoft-defender-xdr-judgement-panda-exfil-activity-d7b7dcad-d806-4a61-b8fc-0d7c9c45bdec-328fcbc7.md) |  |
| [LaZagne Credential Theft](../content/microsoft-defender-xdr-lazagne-credential-theft-829cf5ba-39d5-4986-814e-d46f8437c27b-582ee4d3.md) |  |
| [MITRE - Suspicious Events](../content/microsoft-defender-xdr-mitre-suspicious-events-8722489a-d6f1-4b66-98e9-e3dfda902019-d9aac0e5.md) |  |
| [Malicious Use of MSBuild as LOLBin](../content/microsoft-defender-xdr-malicious-use-of-msbuild-as-lolbin-1850a459-b009-43d0-a575-8284b737eef8-536fff50.md) | `InitiatingProcessFileName == "wmiprvse.exe"`<br>`ProcessCommandLine has "programdata"` |
| [Office Apps Launching Wscipt](../content/microsoft-defender-xdr-office-apps-launching-wscipt-fe912310-32f5-4256-933b-d4b45e7e6e54-b7198749.md) | `InitiatingProcessFileName in "excel.exe,outlook.exe,winword.exe"`<br>`ProcessCommandLine has ".jse"` |
| [Possible Teams phishing activity](../content/microsoft-defender-xdr-possible-teams-phishing-activity-01cf63bd-debd-4d03-847c-d19c31844501-3b0f03e4.md) |  |
| [PowerShell Downloads](../content/microsoft-defender-xdr-powershell-downloads-3842e70d-45be-43b1-8206-4ebc4c305f34-740af97e.md) | `ProcessCommandLine has "DownloadFile"`<br>`ProcessCommandLine has "IEX"`<br>`ProcessCommandLine has "Invoke-Shellcode"`<br>`ProcessCommandLine has "Invoke-WebRequest"`<br>`ProcessCommandLine has "Net.WebClient"`<br>`ProcessCommandLine has "Start-BitsTransfer"`<br>`ProcessCommandLine has "http"`<br>`ProcessCommandLine has "mpcmdrun.exe"` |
| [PowerShell adding exclusion path for Microsoft Defender of ProgramData](../content/microsoft-defender-xdr-powershell-adding-exclusion-path-for-microsoft-defender-of-programdata-88707168-d4a4-4ca7-a516-b2ee0310af1b-015fc198.md) |  |
| [Qakbot Campaign Self Deletion](../content/microsoft-defender-xdr-qakbot-campaign-self-deletion-63ecff0f-3a86-468b-8c9e-a7a88fe33ebb-060f18ee.md) | `InitiatingProcessCommandLine has "-n 6"`<br>`InitiatingProcessCommandLine has "127.0.0.1"`<br>`InitiatingProcessCommandLine has "calc.exe"`<br>`InitiatingProcessFileName == "cmd.exe"` |
| [Qakbot Discovery Activies](../content/microsoft-defender-xdr-qakbot-discovery-activies-e18109aa-f252-48ec-b115-1b7c16e1174f-741aed07.md) | `InitiatingProcessCommandLine endswith "127.0.0.1"`<br>`InitiatingProcessCommandLine has "-a"`<br>`InitiatingProcessCommandLine has "-nao"`<br>`InitiatingProcessCommandLine has "-t"`<br>`InitiatingProcessCommandLine has "/all"`<br>`InitiatingProcessFileName in "explorer.exe,mobsync.exe"` |
| [Qakbot Reconnaissance Activities](../content/microsoft-defender-xdr-qakbot-reconnaissance-activities-d6991ef1-b225-4780-b6a6-cfe9b5278f5e-9d2f618d.md) | `ProcessCommandLine has_any "whoami /all"` |
| [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-96976bb1-1993-45b8-a477-8236ee93976b-cf1c1157.md) |  |
| [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-54ea2379-28e7-48e1-8dfd-aaf8fb1331ba-f2e2f8cf.md) |  |
| [Shadow Copy Deletions](../content/microsoft-defender-xdr-shadow-copy-deletions-aa3a8508-c0ff-404d-8d5c-4e7f548b0d86-2314d5da.md) |  |
| [Spoolsv Spawning Rundll32](../content/microsoft-defender-xdr-spoolsv-spawning-rundll32-3cc2127f-d9ca-46a0-9628-89f702be82b3-a70aa85d.md) | `InitiatingProcessCommandLine endswith "rundll32.exe"`<br>`InitiatingProcessFileName == "rundll32.exe"`<br>`InitiatingProcessParentFileName has "spoolsv.exe"` |
| [Stopping multiple processes using taskkill](../content/microsoft-defender-xdr-stopping-multiple-processes-using-taskkill-4dd31bd5-11a3-4b9c-a7c5-4927ab4f2a77-452d3cd2.md) |  |
| [Suspicious Tomcat Confluence Process Launch](../content/microsoft-defender-xdr-suspicious-tomcat-confluence-process-launch-c5b3e559-7c44-442c-9e73-c753abb02c13-64887431.md) | `InitiatingProcessCommandLine has "confluence"` |
| [Turning off services using sc exe](../content/microsoft-defender-xdr-turning-off-services-using-sc-exe-9674f529-f0e9-4305-862d-479ccc9e28f1-0bc91883.md) | `ProcessCommandLine has "config"`<br>`ProcessCommandLine has "disabled"`<br>`ProcessCommandLine has "sc"` |
| [Webserver Executing Suspicious Applications](../content/microsoft-defender-xdr-webserver-executing-suspicious-applications-761230a3-71ad-4522-bfbc-1dca698ffc42-109b5a61.md) | `InitiatingProcessFileName in "httpd.exe,w3wp.exe"` |

**In solution [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Probable AdFind Recon Tool Usage](../content/microsoftdefenderforendpoint-probable-adfind-recon-tool-usage-c63ae777-d5e0-4113-8c9a-c2c9d3d09fcd-d6063f03.md) |  |

**Standalone Content:** `InitiatingProcessFileName == "solarwinds.businesslayerhost.exe"`

| Hunting Query |
|:-------------|
| [SUNBURST suspicious SolarWinds child processes](../content/microsoftdefenderforendpoint-sunburst-suspicious-solarwinds-child-processes-4a3073ac-7383-48a9-90a8-eb6716183a54-27b732fb.md) |

**GitHub Only:**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Detect Malicious use of MSIExec](../content/microsoft-defender-xdr-detect-malicious-use-of-msiexec-7a5597de-7e99-470d-944f-acb163b9cb14-a76d8af7.md) | `ProcessCommandLine has "http"`<br>`ProcessCommandLine has "return"` |
| [Hunt for RMM tool execution following Teams messages](../content/microsoft-defender-xdr-hunt-for-rmm-tool-execution-following-teams-messages-a2ad014d-0a3a-45eb-ad58-b20532b86015-962a0f7b.md) |  |
| [LSASS Credential Dumping with Procdump](../content/microsoft-defender-xdr-lsass-credential-dumping-with-procdump-0b985ed8-aacd-41ba-9b17-489be9224159-bfd6b1c4.md) | `ProcessCommandLine contains "-ma"`<br>`ProcessCommandLine has "-accepteula"`<br>`ProcessCommandLine has "lsass"`<br>`ProcessCommandLine has "lsass.exe"` |

### Workbooks (4)

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):** `ProcessCommandLine has "Set-MpPreference"`

| Workbook |
|:-------------|
| [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md) |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimProcessEventMicrosoft365D](../asim/asimprocesseventmicrosoft365d.md) | ProcessEvent | Microsoft 365 Defender for endpoint |  |

## Selection Criteria Summary (44 criteria, 56 total references)

References by type: 0 connectors, 56 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ProcessCommandLine contains "-ma"`<br>`ProcessCommandLine has "-accepteula"`<br>`ProcessCommandLine has "lsass"` | - | 2 | - | - | **2** |
| `ProcessCommandLine contains "-ma"`<br>`ProcessCommandLine has "-accepteula"`<br>`ProcessCommandLine has "lsass"`<br>`ProcessCommandLine has "lsass.exe"` | - | 2 | - | - | **2** |
| `InitiatingProcessFileName startswith "psexe"`<br>`ProcessCommandLine has "msexchange"`<br>`ProcessCommandLine has "sql"`<br>`ProcessCommandLine has "stop-service"` | - | 2 | - | - | **2** |
| `InitiatingProcessCommandLine has "-n 6"`<br>`InitiatingProcessCommandLine has "127.0.0.1"`<br>`InitiatingProcessCommandLine has "calc.exe"`<br>`InitiatingProcessFileName == "cmd.exe"` | - | 2 | - | - | **2** |
| `InitiatingProcessFileName in "beasvc.exe,httpd.exe,w3wp.exe"`<br>`InitiatingProcessFileName startswith "tomcat"`<br>`InitiatingProcessParentFileName in "beasvc.exe,httpd.exe,w3wp.exe"`<br>`InitiatingProcessParentFileName startswith "tomcat"`<br>`ProcessCommandLine contains "%temp%"`<br>`ProcessCommandLine has "certutil"`<br>`ProcessCommandLine has "ipconfig"`<br>`ProcessCommandLine has "ping"`<br>`ProcessCommandLine has "systeminfo"`<br>`ProcessCommandLine has "timeout"`<br>`ProcessCommandLine has "wget"`<br>`ProcessCommandLine has "whoami"` | - | 2 | - | - | **2** |
| `ProcessCommandLine has "/Upload"`<br>`ProcessCommandLine has_any "/Transfer"` | - | 2 | - | - | **2** |
| `InitiatingProcessFileName in "excel.exe,outlook.exe,winword.exe"`<br>`ProcessCommandLine has ".jse"` | - | 2 | - | - | **2** |
| `InitiatingProcessFileName == "net.exe"`<br>`ProcessCommandLine !contains "/add"`<br>`ProcessCommandLine !contains "/domain"` | - | 2 | - | - | **2** |
| `ProcessCommandLine has "/w"` | - | 2 | - | - | **2** |
| `ProcessCommandLine has "CL"`<br>`ProcessCommandLine has "WEVTUTIL"` | - | 2 | - | - | **2** |
| `InitiatingProcessCommandLine endswith "127.0.0.1"`<br>`InitiatingProcessCommandLine has "-a"`<br>`InitiatingProcessCommandLine has "-nao"`<br>`InitiatingProcessCommandLine has "-t"`<br>`InitiatingProcessCommandLine has "/all"`<br>`InitiatingProcessFileName in "explorer.exe,mobsync.exe"` | - | 2 | - | - | **2** |
| `InitiatingProcessFileName == "java.exe"` | - | 2 | - | - | **2** |
| `ProcessCommandLine has "certutil"` | - | 1 | - | - | **1** |
| `ActionType != "ListeningConnectionCreated"`<br>`InitiatingProcessParentFileName == "svchost.exe"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoProductName != "Android Studio"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName == "oracle.exe"` | - | 1 | - | - | **1** |
| `ActionType == "LogonSuccess"` | - | 1 | - | - | **1** |
| `ActionType == "InboundConnectionAccepted"`<br>`ProcessCommandLine != "msiexec.exe /V"` | - | 1 | - | - | **1** |
| `FolderPath startswith "C:\\Program Files (x86)\\Microsoft Visual Studio"`<br>`InitiatingProcessFileName in "WDExpress.exe,devenv.exe"`<br>`InitiatingProcessFolderPath startswith "C:\\Program Files (x86)\\Microsoft Visual Studio"`<br>`ProcessCommandLine has_any "/exe"`<br>`ProcessCommandLine has_any "out"` | - | 1 | - | - | **1** |
| `InitiatingProcessCommandLine has_any "E9495B87-D950-4AB5-87A5-FF6D70BF3E90"`<br>`InitiatingProcessFileName == "dllhost.exe"`<br>`ProcessIntegrityLevel == "High"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName == "wsreset.exe"`<br>`ProcessIntegrityLevel == "High"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName == "changepk.exe"`<br>`InitiatingProcessParentFileName == "slui.exe"`<br>`ProcessIntegrityLevel == "High"` | - | 1 | - | - | **1** |
| `ActionType in "FileCreated,FileModified"` | - | 1 | - | - | **1** |
| `ProcessCommandLine has "powershell.exe"` | - | 1 | - | - | **1** |
| `InitiatingProcessCommandLine has "$true"`<br>`InitiatingProcessCommandLine has "/IM"`<br>`InitiatingProcessCommandLine has "Set-MpPreference"`<br>`InitiatingProcessCommandLine has "Start"`<br>`InitiatingProcessCommandLine has "config"`<br>`InitiatingProcessParentFileName != "cscript.exe"` | - | 1 | - | - | **1** |
| `InitiatingProcessCommandLine has_all "advfirewall"`<br>`InitiatingProcessFileName == "netsh.exe"` | - | 1 | - | - | **1** |
| `InitiatingProcessCommandLine matchesregex "save HKLM\\SYSTEM [^ ]*_System.HIV"`<br>`ProcessCommandLine matchesregex "cmd.exe /c"`<br>`ProcessCommandLine matchesregex "save HKLM\\SYSTEM [^ ]*_System.HIV"` | - | 1 | - | - | **1** |
| `ProcessCommandLine has "hklm"`<br>`ProcessCommandLine has "sam"`<br>`ProcessCommandLine has "save"` | - | 1 | - | - | **1** |
| `ProcessCommandLine has "deletejournal"`<br>`ProcessCommandLine has "usn"` | - | 1 | - | - | **1** |
| `ProcessCommandLine !contains "/add"`<br>`ProcessCommandLine !contains "\\"`<br>`ProcessCommandLine contains "/do"`<br>`ProcessCommandLine contains "/domain"`<br>`ProcessCommandLine contains "group"`<br>`ProcessCommandLine contains "user"` | - | 1 | - | - | **1** |
| `ProcessCommandLine has "http"`<br>`ProcessCommandLine has "return"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName == "msiexec.exe"`<br>`ProcessCommandLine contains "privilege::"`<br>`ProcessCommandLine contains "token::"`<br>`ProcessCommandLine has "sekurlsa"` | - | 1 | - | - | **1** |
| `ProcessCommandLine has "DownloadFile"`<br>`ProcessCommandLine has "IEX"`<br>`ProcessCommandLine has "Invoke-Shellcode"`<br>`ProcessCommandLine has "Invoke-WebRequest"`<br>`ProcessCommandLine has "Net.WebClient"`<br>`ProcessCommandLine has "Start-BitsTransfer"`<br>`ProcessCommandLine has "http"`<br>`ProcessCommandLine has "mpcmdrun.exe"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName in "httpd.exe,w3wp.exe"` | - | 1 | - | - | **1** |
| `InitiatingProcessCommandLine contains "<script>"`<br>`InitiatingProcessFileName == "mshta.exe"` | - | 1 | - | - | **1** |
| `InitiatingProcessCommandLine has "confluence"` | - | 1 | - | - | **1** |
| `ProcessCommandLine has "cl"`<br>`ProcessCommandLine has "config"`<br>`ProcessCommandLine has "delete"`<br>`ProcessCommandLine has "deletejournal"`<br>`ProcessCommandLine has "disabled"`<br>`ProcessCommandLine has "sc"`<br>`ProcessCommandLine has "shadowcopy delete"`<br>`ProcessCommandLine has "usn"`<br>`ProcessCommandLine has "wbadmin"`<br>`ProcessCommandLine has "wevtutil"`<br>`ProcessCommandLine has "wmic"` | - | 1 | - | - | **1** |
| `ProcessCommandLine has "config"`<br>`ProcessCommandLine has "disabled"`<br>`ProcessCommandLine has "sc"` | - | 1 | - | - | **1** |
| `InitiatingProcessCommandLine == "dllhost.exe"`<br>`InitiatingProcessFileName == "dllhost.exe"`<br>`ProcessCommandLine has "wmic computersystem get domain"` | - | 1 | - | - | **1** |
| `InitiatingProcessCommandLine endswith "rundll32.exe"`<br>`InitiatingProcessFileName == "rundll32.exe"`<br>`InitiatingProcessParentFileName has "spoolsv.exe"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName == "wmiprvse.exe"`<br>`ProcessCommandLine has "programdata"` | - | 1 | - | - | **1** |
| `ProcessCommandLine has_any "whoami /all"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName == "solarwinds.businesslayerhost.exe"` | - | 1 | - | - | **1** |
| `ProcessCommandLine has "Set-MpPreference"` | - | 1 | - | - | **1** |
| **Total** | **0** | **56** | **0** | **0** | **56** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= ListeningConnectionCreated` | - | 1 | - | - | **1** |
| `LogonSuccess` | - | 1 | - | - | **1** |
| `InboundConnectionAccepted` | - | 1 | - | - | **1** |
| `FileCreated` | - | 1 | - | - | **1** |
| `FileModified` | - | 1 | - | - | **1** |

### FolderPath

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `startswith C:\\Program Files (x86)\\Microsoft Visual Studio` | - | 1 | - | - | **1** |

### InitiatingProcessCommandLine

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `has -n 6` | - | 2 | - | - | **2** |
| `has 127.0.0.1` | - | 2 | - | - | **2** |
| `has calc.exe` | - | 2 | - | - | **2** |
| `endswith 127.0.0.1` | - | 2 | - | - | **2** |
| `has -a` | - | 2 | - | - | **2** |
| `has -nao` | - | 2 | - | - | **2** |
| `has -t` | - | 2 | - | - | **2** |
| `has /all` | - | 2 | - | - | **2** |
| `has_any E9495B87-D950-4AB5-87A5-FF6D70BF3E90` | - | 1 | - | - | **1** |
| `has $true` | - | 1 | - | - | **1** |
| `has /IM` | - | 1 | - | - | **1** |
| `has Set-MpPreference` | - | 1 | - | - | **1** |
| `has Start` | - | 1 | - | - | **1** |
| `has config` | - | 1 | - | - | **1** |
| `has_all advfirewall` | - | 1 | - | - | **1** |
| `contains <script>` | - | 1 | - | - | **1** |
| `has confluence` | - | 1 | - | - | **1** |
| `dllhost.exe` | - | 1 | - | - | **1** |
| `endswith rundll32.exe` | - | 1 | - | - | **1** |

### InitiatingProcessFileName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `httpd.exe` | - | 3 | - | - | **3** |
| `w3wp.exe` | - | 3 | - | - | **3** |
| `dllhost.exe` | - | 2 | - | - | **2** |
| `startswith psexe` | - | 2 | - | - | **2** |
| `cmd.exe` | - | 2 | - | - | **2** |
| `beasvc.exe` | - | 2 | - | - | **2** |
| `startswith tomcat` | - | 2 | - | - | **2** |
| `excel.exe` | - | 2 | - | - | **2** |
| `outlook.exe` | - | 2 | - | - | **2** |
| `winword.exe` | - | 2 | - | - | **2** |
| `net.exe` | - | 2 | - | - | **2** |
| `explorer.exe` | - | 2 | - | - | **2** |
| `mobsync.exe` | - | 2 | - | - | **2** |
| `java.exe` | - | 2 | - | - | **2** |
| `oracle.exe` | - | 1 | - | - | **1** |
| `WDExpress.exe` | - | 1 | - | - | **1** |
| `devenv.exe` | - | 1 | - | - | **1** |
| `wsreset.exe` | - | 1 | - | - | **1** |
| `changepk.exe` | - | 1 | - | - | **1** |
| `netsh.exe` | - | 1 | - | - | **1** |
| `msiexec.exe` | - | 1 | - | - | **1** |
| `mshta.exe` | - | 1 | - | - | **1** |
| `rundll32.exe` | - | 1 | - | - | **1** |
| `wmiprvse.exe` | - | 1 | - | - | **1** |
| `solarwinds.businesslayerhost.exe` | - | 1 | - | - | **1** |

### InitiatingProcessFolderPath

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `startswith C:\\Program Files (x86)\\Microsoft Visual Studio` | - | 1 | - | - | **1** |

### InitiatingProcessParentFileName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `beasvc.exe` | - | 2 | - | - | **2** |
| `httpd.exe` | - | 2 | - | - | **2** |
| `w3wp.exe` | - | 2 | - | - | **2** |
| `startswith tomcat` | - | 2 | - | - | **2** |
| `svchost.exe` | - | 1 | - | - | **1** |
| `slui.exe` | - | 1 | - | - | **1** |
| `!= cscript.exe` | - | 1 | - | - | **1** |
| `has spoolsv.exe` | - | 1 | - | - | **1** |

### InitiatingProcessVersionInfoProductName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= Android Studio` | - | 1 | - | - | **1** |

### ProcessCommandLine

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains -ma` | - | 4 | - | - | **4** |
| `has -accepteula` | - | 4 | - | - | **4** |
| `has lsass` | - | 4 | - | - | **4** |
| `has certutil` | - | 3 | - | - | **3** |
| `!contains /add` | - | 3 | - | - | **3** |
| `has lsass.exe` | - | 2 | - | - | **2** |
| `has msexchange` | - | 2 | - | - | **2** |
| `has sql` | - | 2 | - | - | **2** |
| `has stop-service` | - | 2 | - | - | **2** |
| `contains %temp%` | - | 2 | - | - | **2** |
| `has ipconfig` | - | 2 | - | - | **2** |
| `has ping` | - | 2 | - | - | **2** |
| `has systeminfo` | - | 2 | - | - | **2** |
| `has timeout` | - | 2 | - | - | **2** |
| `has wget` | - | 2 | - | - | **2** |
| `has whoami` | - | 2 | - | - | **2** |
| `has /Upload` | - | 2 | - | - | **2** |
| `has_any /Transfer` | - | 2 | - | - | **2** |
| `has .jse` | - | 2 | - | - | **2** |
| `!contains /domain` | - | 2 | - | - | **2** |
| `has /w` | - | 2 | - | - | **2** |
| `has CL` | - | 2 | - | - | **2** |
| `has WEVTUTIL` | - | 2 | - | - | **2** |
| `has deletejournal` | - | 2 | - | - | **2** |
| `has usn` | - | 2 | - | - | **2** |
| `has http` | - | 2 | - | - | **2** |
| `has config` | - | 2 | - | - | **2** |
| `has disabled` | - | 2 | - | - | **2** |
| `has sc` | - | 2 | - | - | **2** |
| `!= msiexec.exe /V` | - | 1 | - | - | **1** |
| `has_any /exe` | - | 1 | - | - | **1** |
| `has_any out` | - | 1 | - | - | **1** |
| `has powershell.exe` | - | 1 | - | - | **1** |
| `has hklm` | - | 1 | - | - | **1** |
| `has sam` | - | 1 | - | - | **1** |
| `has save` | - | 1 | - | - | **1** |
| `!contains \\` | - | 1 | - | - | **1** |
| `contains /do` | - | 1 | - | - | **1** |
| `contains /domain` | - | 1 | - | - | **1** |
| `contains group` | - | 1 | - | - | **1** |
| `contains user` | - | 1 | - | - | **1** |
| `has return` | - | 1 | - | - | **1** |
| `contains privilege::` | - | 1 | - | - | **1** |
| `contains token::` | - | 1 | - | - | **1** |
| `has sekurlsa` | - | 1 | - | - | **1** |
| `has DownloadFile` | - | 1 | - | - | **1** |
| `has IEX` | - | 1 | - | - | **1** |
| `has Invoke-Shellcode` | - | 1 | - | - | **1** |
| `has Invoke-WebRequest` | - | 1 | - | - | **1** |
| `has Net.WebClient` | - | 1 | - | - | **1** |
| `has Start-BitsTransfer` | - | 1 | - | - | **1** |
| `has mpcmdrun.exe` | - | 1 | - | - | **1** |
| `has cl` | - | 1 | - | - | **1** |
| `has delete` | - | 1 | - | - | **1** |
| `has shadowcopy delete` | - | 1 | - | - | **1** |
| `has wbadmin` | - | 1 | - | - | **1** |
| `has wevtutil` | - | 1 | - | - | **1** |
| `has wmic` | - | 1 | - | - | **1** |
| `has wmic computersystem get domain` | - | 1 | - | - | **1** |
| `has programdata` | - | 1 | - | - | **1** |
| `has_any whoami /all` | - | 1 | - | - | **1** |
| `has Set-MpPreference` | - | 1 | - | - | **1** |

### ProcessIntegrityLevel

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `High` | - | 3 | - | - | **3** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

