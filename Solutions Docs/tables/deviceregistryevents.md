# DeviceRegistryEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Creation and modification of registry entries

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceregistryevents) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-deviceregistryevents-table) |

## Schema (49 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceregistryevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| ActionType | string | Type of activity that triggered the event. |
| AppGuardContainerId | string | Identifier for the virtualized container used by Application Guard to isolate browser activity. |
| DeviceId | string | Unique identifier for the device in the service. |
| DeviceName | string | Fully qualified domain name (FQDN) of the device. |
| InitiatingProcessAccountDomain | string | Domain of the account that ran the initiating process. |
| InitiatingProcessAccountName | string | User name of the account that ran the initiating process. |
| InitiatingProcessAccountObjectId | string | Azure AD object ID of the user account that ran the initiating process. |
| InitiatingProcessAccountSid | string | Security Identifier (SID) of the account that ran the initiating process. |
| InitiatingProcessAccountUpn | string | User principal name (UPN) of the account that ran the initiating process. |
| InitiatingProcessCommandLine | string | Command line used to run the initiating process. |
| InitiatingProcessCreationTime | datetime | Date and time when the process that initiated the event was started. |
| InitiatingProcessFileName | string | Name of the initiating process. |
| InitiatingProcessFileSize | long | The size of the file (bytes) that ran the process responsible for the event. |
| InitiatingProcessFolderPath | string | Folder containing the initiating process (image file). |
| InitiatingProcessId | long | Process ID (PID) of the initiating process. |
| InitiatingProcessIntegrityLevel | string | Integrity level of the initiating process. Windows assigns integrity levels to processes based on certain characteristics, such as if they were launched from an internet download. These integrity levels influence permissions to resources.. |
| InitiatingProcessMD5 | string | MD5 hash of the initiating process (image file). |
| InitiatingProcessParentCreationTime | datetime | Date and time when the parent of the process responsible for the event was started. |
| InitiatingProcessParentFileName | string | Name of the parent process that spawned the initiating process. |
| InitiatingProcessParentId | long | Process ID (PID) of the parent process that spawned the initiating process. |
| InitiatingProcessRemoteSessionDeviceName | string | Device name of the remote device from which the initiating process's RDP session was initiated. |
| InitiatingProcessRemoteSessionIP | string | IP address of the remote device from which the initiating process's RDP session was initiated. |
| InitiatingProcessSessionId | long | Windows session ID of the initiating process. |
| InitiatingProcessSHA1 | string | SHA-1 hash of the initiating process (image file). |
| InitiatingProcessSHA256 | string | SHA-256 hash of the initiating process (image file). In some cases this column may not be populated - please use the InitiatingProcessSHA1 column instead. |
| InitiatingProcessTokenElevation | string | Token type indicating the presence or absence of User Access Control (UAC) privilege elevation applied to the initiating process. |
| InitiatingProcessUniqueId | string | Unique identifier of the initiating process; this is equal to the Process Start Key in Windows devices. |
| InitiatingProcessVersionInfoCompanyName | string | The company name in version information (image file) responsible for the event. |
| InitiatingProcessVersionInfoFileDescription | string | The description in version information (image file) responsible for the event. |
| InitiatingProcessVersionInfoInternalFileName | string | The internal file name in version information (image file) responsible for the event. |
| InitiatingProcessVersionInfoOriginalFileName | string | The original file name in version information (image file) responsible for the event. |
| InitiatingProcessVersionInfoProductName | string | The product name in version information (image file) responsible for the event. |
| InitiatingProcessVersionInfoProductVersion | string | The product version in version information (image file) responsible for the event. |
| IsInitiatingProcessRemoteSession | bool | Indicates whether the initiating process was run under a remote desktop protocol (RDP) session (true) or locally (false). |
| MachineGroup | string | Machine group of the machine. This group is used by role-based access control to determine access to the machine. |
| PreviousRegistryKey | string | Original registry key before it was modified. |
| PreviousRegistryValueData | string | Original data of the registry value before it was modified. |
| PreviousRegistryValueName | string | Original name of the registry value before it was modified. |
| RegistryKey | string | Registry key that the recorded action was applied to. |
| RegistryValueData | string | Data of the registry value that the recorded action was applied to. |
| RegistryValueName | string | Name of the registry value that the recorded action was applied to. |
| RegistryValueType | string | Data type, such as binary or string, of the registry value that the recorded action was applied to. |
| ReportId | long | Event identifier based on a repeating counter. To identify unique events, this column must be used in conjunction with the ComputerName and EventTime columns.. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time the event was recorded by the MDE agent on the endpoint. |
| Type | string | The name of the table |

## Solutions (4)

This table is used by the following solutions:

- [FalconFriday](../solutions/falconfriday.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Standalone Content](../solutions/standalone-content.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

**Selection Criteria:** `ActionType == "RegistryValueSet"`

| Connector |
|:----------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |

---

## Content Items Using This Table (26)

### Analytic Rules (3)

**In solution [FalconFriday](../solutions/falconfriday.md):** `ActionType == "RegistryValueSet"`

| Content Item |
|:-------------|
| [Component Object Model Hijacking - Vault7 trick](../content/falconfriday-component-object-model-hijacking-vault7-trick-1aaff41f-4e18-45b1-bb34-de6eb4943cf2-23d9ec72.md) |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType == "RegistryValueSet"`

| Content Item |
|:-------------|
| [MosaicLoader](../content/microsoft-defender-xdr-mosaicloader-506f4d6b-3864-4bb1-8f75-a13fb066f97a-66639731.md) |

**Standalone Content:** `ActionType == "RegistryValueSet"`

| Content Item |
|:-------------|
| [COM Registry Key Modified to Point to File in Color Profile Folder](../content/standalone-content-com-registry-key-modified-to-point-to-file-in-color-profile-folder-ed8c9153-6f7a-4602-97b4-48c336b299e1-d490be15.md) |

### Hunting Queries (19)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType == "RegistryValueSet"`

| Content Item |
|:-------------|
| [MosaicLoader](../content/microsoft-defender-xdr-mosaicloader-0efbcea0-1dc0-4844-8a9c-3a1d98fc1697-1d4d4510.md) |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MDE_FindMountedISOandDriveLetters](../content/standalone-content-mde-findmountedisoanddriveletters-19270420-5d36-43df-8bed-c34a47fadc92-9edbea2e.md) |  |
| [MDE_ProxyChangesViaRegistry](../content/standalone-content-mde-proxychangesviaregistry-7d905049-7e23-451e-bb57-0bfb6dd43f60-5f256293.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Accessibility Features](../content/github-only-accessibility-features-a5649d8b-e54b-4e2b-925a-106bf838d69c-dbe14580.md) |  |
| [Baseline Comparison](../content/github-only-baseline-comparison-4d17ae75-87e8-4272-9aec-16448b1430bc-6e7e6931.md) |  |
| [KNOTWEED-COM Registry Key Modified to Point to Color Profile Folder](../content/github-only-knotweed-com-registry-key-modified-to-point-to-color-profile-folder-9c1331df-9bb3-4b52-b7d7-5a6e9e6d97b4-d37a60f6.md) | `ActionType == "RegistryValueSet"` |
| [MosaicLoader](../content/github-only-mosaicloader-625dce50-2fec-4f49-be92-ad4cab98b313-31f04ab2.md) | `ActionType == "RegistryValueSet"` |
| [OceanLotus registry activity](../content/github-only-oceanlotus-registry-activity-3e571521-6f73-423f-9280-aff6170c9d81-1a08b9f1.md) | `ActionType == "RegistryValueSet"` |
| [RunMRU with non-ASCII characters](../content/github-only-runmru-with-non-ascii-characters-6e8ee46f-80ee-46f6-be49-49a66f01edce-e16ca0cd.md) | `ActionType == "RegistryValueSet"` |
| [Services](../content/github-only-services-dd76f1c0-edc9-45cb-aeae-f5142caf583c-adae9da2.md) |  |
| [Suspicious Registry Keys](../content/github-only-suspicious-registry-keys-fab0fc37-d74a-43b6-9f13-d517b9cbcb14-4ef94be0.md) |  |
| [detect-impacket-atexec](../content/github-only-detect-impacket-atexec-75e3a1b2-bd6d-4e79-8c74-85a3bc0b0617-a33eaf14.md) |  |
| [qakbot-campaign-registry-edit](../content/github-only-qakbot-campaign-registry-edit-3f305589-cde2-4509-8204-63cb2a00117c-2575a13b.md) | `ActionType == "RegistryValueSet"` |
| [rare_sch_task_with_activity](../content/github-only-rare-sch-task-with-activity-ce76992a-8cd6-4605-9f45-cde9aae87244-3f342058.md) |  |
| [suspicious-base64-encoded-registry-keys](../content/github-only-suspicious-base64-encoded-registry-keys-4751319e-6d20-4c26-893d-baaad90f0747-3b8dcc39.md) | `ActionType has_any "RegistryKeyCreated,RegistryValueSet"` |
| [suspicious-command-interpreters-added-to-registry](../content/github-only-suspicious-command-interpreters-added-to-registry-74dd8aa9-996b-44b1-bf36-9ac9ef6d2c02-d9fd92fe.md) | `ActionType has_any "RegistryKeyCreated,RegistryValueSet"` |
| [suspicious-keywords-in-registry](../content/github-only-suspicious-keywords-in-registry-749f313e-08b4-48f6-9f9d-ba57c1abbf55-0fb6d342.md) | `ActionType has_any "RegistryKeyCreated,RegistryValueSet"` |
| [wadhrama-credential-dump](../content/github-only-wadhrama-credential-dump-8348d279-c95f-4dbe-b952-65048dc06559-6f945582.md) |  |
| [wdigest-caching](../content/github-only-wdigest-caching-05a01ec8-ecab-4f9a-9aae-8d8cc061fe05-30a7e092.md) |  |

### Workbooks (4)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/github-only-microsoftdefenderforendpoint-ac005534.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1) — Selection Criteria: `ActionType in "RegistryKeyDeleted,RegistryKeyRenamed,RegistryValueDeleted,RegistryValueSet"`

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimRegistryEventMicrosoft365D](../asim/asimregistryeventmicrosoft365d.md) | RegistryEvent | Microsoft 365 Defender for Endpoint |

## Selection Criteria Summary (3 criteria, 14 total references)

References by type: 1 connectors, 12 content items, 1 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType == "RegistryValueSet"` | 1 | 9 | - | - | **10** |
| `ActionType has_any "RegistryKeyCreated,RegistryValueSet"` | - | 3 | - | - | **3** |
| `ActionType in "RegistryKeyDeleted,RegistryKeyRenamed,RegistryValueDeleted,RegistryValueSet"` | - | - | 1 | - | **1** |
| **Total** | **1** | **12** | **1** | **0** | **14** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `RegistryValueSet` | 1 | 9 | 1 | - | **11** |
| `has_any RegistryKeyCreated` | - | 3 | - | - | **3** |
| `has_any RegistryValueSet` | - | 3 | - | - | **3** |
| `RegistryKeyDeleted` | - | - | 1 | - | **1** |
| `RegistryKeyRenamed` | - | - | 1 | - | **1** |
| `RegistryValueDeleted` | - | - | 1 | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

