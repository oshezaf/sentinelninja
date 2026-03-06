# DeviceNetworkEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Network connection and related events

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicenetworkevents) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicenetworkevents-table) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (51 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicenetworkevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| ActionType | string | Type of activity that triggered the event. |
| AdditionalFields | dynamic | Additional information about the entity or event. |
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
| InitiatingProcessFileSize | long | Size of the file (bytes) that ran the process responsible for the event. |
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
| LocalIP | string | IP address assigned to the local machine used during communication. |
| LocalIPType | string | Type of IP address, for example Public, Private, Reserved, Loopback, Teredo, FourToSixMapping, and Broadcast. |
| LocalPort | int | TCP port on the local machine used during communication. |
| MachineGroup | string | Machine group of the machine. This group is used by role-based access control to determine access to the machine. |
| Protocol | string | IP protocol used, whether TCP or UDP. |
| RemoteIP | string | IP address that was being connected to. |
| RemoteIPType | string | Type of IP address, for example Public, Private, Reserved, Loopback, Teredo, FourToSixMapping, and Broadcast. |
| RemotePort | int | TCP port on the remote device that was being connected to. |
| RemoteUrl | string | URL or fully qualified domain name (FQDN) that was being connected to. |
| ReportId | long | Event identifier based on a repeating counter. To identify unique events, this column must be used in conjunction with the ComputerName and EventTime columns.. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time the event was recorded by the MDE agent on the endpoint. |
| Type | string | The name of the table |

## Solutions (13)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Cyware](../solutions/cyware.md)
- [DORA Compliance](../solutions/dora-compliance.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [FalconFriday](../solutions/falconfriday.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (31)

### Analytic Rules (16)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):** `ActionType == "InboundConnectionAccepted"`

| Content Item |
|:-------------|
| [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md) |

**In solution [FalconFriday](../solutions/falconfriday.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DCOM Lateral Movement](../content/falconfriday-dcom-lateral-movement-d58035ff-0bac-4c61-a7f4-f58939ff9764-9dd841b7.md) |  |
| [SMB/Windows Admin Shares](../content/falconfriday-smb-windows-admin-shares-9da25366-2c77-41a5-a159-0da5e2f5fb90-2e2330d9.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Execution of software vulnerable to webp buffer overflow of CVE-2023-4863](../content/microsoft-defender-xdr-execution-of-software-vulnerable-to-webp-buffer-overflow-of-cve-2023-4863-26e81021-2de6-4442-a74a-a77885e96911-15de3ea9.md) |  |
| [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-91a451e3-178f-41b2-9e5d-da97d75b9971-365d2f3a.md) |  |
| [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/microsoft-defender-xdr-regsvr32-rundll32-image-loads-abnormal-extension-36fbd4e7-5630-4414-aa42-702a7fdded21-4cc759a2.md) |  |
| [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-2624fc55-0998-4897-bb48-1c6422befce4-d1e3cdd5.md) |  |
| [SUNBURST network beacons](../content/microsoft-defender-xdr-sunburst-network-beacons-ce1e7025-866c-41f3-9b08-ec170e05e73e-b0c0854f.md) | `ActionType == "ConnectionSuccess"` |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):** `ActionType !has "ConnectionFailed"`

| Content Item |
|:-------------|
| [TI Map Domain Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-domain-entity-to-devicenetworkevents-c308b2f3-eebe-4a20-905c-cb8293b062db-1b8b91ec.md) |
| [TI Map IP Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-ip-entity-to-devicenetworkevents-b2df4979-d34a-48b3-a7d9-f473a4bf8058-1cf5dff4.md) |
| [TI Map URL Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-url-entity-to-devicenetworkevents-6ddbd892-a9be-47be-bab7-521241695bd6-16a87b1d.md) |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):** `ActionType !has "ConnectionFailed"`

| Content Item |
|:-------------|
| [TI Map Domain Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-domain-entity-to-devicenetworkevents-1546f3b3-de8a-4e62-bfea-815422154981-be5129ac.md) |
| [TI Map IP Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-ip-entity-to-devicenetworkevents-2474343c-9135-42ec-9c40-a1bace43da5c-3e3eda3e.md) |
| [TI Map URL Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-url-entity-to-devicenetworkevents-4f0356b2-d344-4c19-9375-31b9575d80cb-edd30654.md) |

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md) |  |
| [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md) |  |

### Hunting Queries (9)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Malicious Connection to LDAP port for CVE-2021-44228 vulnerability](../content/apache-log4j-vulnerability-detection-malicious-connection-to-ldap-port-for-cve-2021-44228-vulnerability-19abc034-139e-4e64-a05d-cb07ce8b003b-ea04e1a2.md) |  |

**In solution [Cyware](../solutions/cyware.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detecting Suspicious PowerShell Command Executions](../content/cyware-detecting-suspicious-powershell-command-executions-deb99c6f-1903-455b-bb2c-0036614110bc-ec55d474.md) |  |

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Download of New File Using Curl](../content/endpoint-threat-protection-essentials-download-of-new-file-using-curl-7108c86b-a3ef-42d0-b50b-3e251fb1f84c-09e03acc.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detect MaiSniper](../content/microsoft-defender-xdr-detect-maisniper-e17ddfc6-7478-443b-99ff-286f3d09b8aa-ab6dfb83.md) |  |
| [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-96976bb1-1993-45b8-a477-8236ee93976b-cf1c1157.md) |  |
| [Recon with Rundll](../content/microsoft-defender-xdr-recon-with-rundll-76c14475-9a22-4cc1-922c-437d7f614a36-e593fe5e.md) |  |
| [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/microsoft-defender-xdr-regsvr32-rundll32-image-loads-abnormal-extension-b1f8aac2-766d-47ec-8787-84bc7692ff77-8be87cf1.md) |  |
| [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-54ea2379-28e7-48e1-8dfd-aaf8fb1331ba-f2e2f8cf.md) |  |
| [Snip3 Malicious Network Connectivity](../content/microsoft-defender-xdr-snip3-malicious-network-connectivity-b3470e40-39ae-4c28-9282-440038f6f964-47add26a.md) |  |

### Workbooks (6)

**In solution [DORA Compliance](../solutions/dora-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DORACompliance](../content/dora-compliance-doracompliance-21bcc12f.md) |  |

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):** `ActionType == "ConnectionSuccess"`

| Content Item |
|:-------------|
| [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md) |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1) — Selection Criteria: `ActionType == "ConnectionFailed"`

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimNetworkSessionMicrosoft365Defender](../asim/asimnetworksessionmicrosoft365defender.md) | NetworkSession | M365 Defender for Endpoint |

## Selection Criteria Summary (4 criteria, 10 total references)

References by type: 0 connectors, 9 content items, 1 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType !has "ConnectionFailed"` | - | 6 | - | - | **6** |
| `ActionType == "ConnectionSuccess"` | - | 2 | - | - | **2** |
| `ActionType == "InboundConnectionAccepted"` | - | 1 | - | - | **1** |
| `ActionType == "ConnectionFailed"` | - | - | 1 | - | **1** |
| **Total** | **0** | **9** | **1** | **0** | **10** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!has ConnectionFailed` | - | 6 | - | - | **6** |
| `ConnectionSuccess` | - | 2 | - | - | **2** |
| `InboundConnectionAccepted` | - | 1 | - | - | **1** |
| `ConnectionFailed` | - | - | 1 | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

