# DeviceLogonEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Sign-ins and other authentication events on devices

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicelogonevents) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicelogonevents-table) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (55 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicelogonevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AccountDomain | string | Domain of the account. |
| AccountName | string | User name of the account. |
| AccountSid | string | Security identifier (SID) of the account. |
| ActionType | string | Type of activity that triggered the event. |
| AdditionalFields | dynamic | Additional information about the entity or event. |
| AppGuardContainerId | string | Identifier for the virtualized container used by Application Guard to isolate browser activity. |
| DeviceId | string | Unique identifier for the device in the service. |
| DeviceName | string | Fully qualified domain name (FQDN) of the device. |
| FailureReason | string | Information explaining why the recorded action failed. |
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
| IsInitiatingProcessRemoteSession | bool | Indicates whether the initiating process was run under a remote desktop protocol (RDP) session (true) or locally (false). |
| IsLocalAdmin | bool | Boolean indicator of whether the user is a local administrator on the machine. |
| LogonId | long | Identifier for a logon session. This identifier is unique on the same machine only between restarts. |
| LogonType | string | Type of logon session, specifically interactive, remote interactive (RDP), network, batch, and service. |
| MachineGroup | string | Machine group of the machine. This group is used by role-based access control to determine access to the machine. |
| Protocol | string | Protocol used during the communication. |
| RemoteDeviceName | string | Name of the device that performed a remote operation on the affected machine. Depending on the event being reported, this name could be a fully-qualified domain name (FQDN), a NetBIOS name, or a host name without domain information. |
| RemoteIP | string | IP address that was being connected to. |
| RemoteIPType | string | Type of IP address, for example Public, Private, Reserved, Loopback, Teredo, FourToSixMapping, and Broadcast. |
| RemotePort | int | TCP port on the remote device that was being connected to. |
| ReportId | long | Event identifier based on a repeating counter. To identify unique events, this column must be used in conjunction with the ComputerName and EventTime columns. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time the event was recorded by the MDE agent on the endpoint. |
| Type | string | The name of the table |

## Solutions (5)

This table is used by the following solutions:

- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [FalconFriday](../solutions/falconfriday.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (8)

### Analytic Rules (3)

**In solution [FalconFriday](../solutions/falconfriday.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Access Token Manipulation - Create Process with Token](../content/falconfriday-access-token-manipulation-create-process-with-token-8df80270-b4fa-4a7a-931e-8d17c0b321ae-d1e3f3fd.md) |  |
| [Password Spraying](../content/falconfriday-password-spraying-e00f72ab-fea1-4a31-9ecc-eea6397cd38d-9fc40186.md) |  |
| [Remote Desktop Protocol - SharpRDP](../content/falconfriday-remote-desktop-protocol-sharprdp-cc46e76c-0d04-40b0-9c8b-929aa40513e7-7ea028f9.md) |  |

### Hunting Queries (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Account Brute Force](../content/microsoft-defender-xdr-account-brute-force-4095e430-d3f4-426f-92c5-aa5c5e137ca0-7ac90fd9.md) |  |

### Workbooks (4)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuthenticationM365Defender](../asim/asimauthenticationm365defender.md) | Authentication | M365 Defender for EndPoint |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

