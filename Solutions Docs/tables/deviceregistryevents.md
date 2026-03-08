# DeviceRegistryEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Creation and modification of registry entries

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceregistryevents) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-deviceregistryevents-table) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

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

## Solutions (3)

This table is used by the following solutions:

- [FalconFriday](../solutions/falconfriday.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

**Selection Criteria:** `ActionType == "RegistryValueSet"`

| Connector |
|:----------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |

---

## Content Items Using This Table (5)

### Analytic Rules (2)

**In solution [FalconFriday](../solutions/falconfriday.md):** `ActionType == "RegistryValueSet"`

| Content Item |
|:-------------|
| [Component Object Model Hijacking - Vault7 trick](../content/falconfriday-component-object-model-hijacking-vault7-trick-1aaff41f-4e18-45b1-bb34-de6eb4943cf2-23d9ec72.md) |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType == "RegistryValueSet"`

| Content Item |
|:-------------|
| [MosaicLoader](../content/microsoft-defender-xdr-mosaicloader-506f4d6b-3864-4bb1-8f75-a13fb066f97a-66639731.md) |

### Hunting Queries (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType == "RegistryValueSet"`

| Content Item |
|:-------------|
| [MosaicLoader](../content/microsoft-defender-xdr-mosaicloader-0efbcea0-1dc0-4844-8a9c-3a1d98fc1697-1d4d4510.md) |

### Workbooks (2)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1) — Selection Criteria: `ActionType in "RegistryKeyDeleted,RegistryKeyRenamed,RegistryValueDeleted,RegistryValueSet"`

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimRegistryEventMicrosoft365D](../asim/asimregistryeventmicrosoft365d.md) | RegistryEvent | Microsoft 365 Defender for Endpoint |

## Selection Criteria Summary (2 criteria, 5 total references)

References by type: 1 connectors, 3 content items, 1 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType == "RegistryValueSet"` | 1 | 3 | - | - | **4** |
| `ActionType in "RegistryKeyDeleted,RegistryKeyRenamed,RegistryValueDeleted,RegistryValueSet"` | - | - | 1 | - | **1** |
| **Total** | **1** | **3** | **1** | **0** | **5** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `RegistryValueSet` | 1 | 3 | 1 | - | **5** |
| `RegistryKeyDeleted` | - | - | 1 | - | **1** |
| `RegistryKeyRenamed` | - | - | 1 | - | **1** |
| `RegistryValueDeleted` | - | - | 1 | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

