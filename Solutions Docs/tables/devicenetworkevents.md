# DeviceNetworkEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Network connection and related events

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicenetworkevents) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicenetworkevents-table) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (51 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicenetworkevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
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
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
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
- [Standalone Content](../solutions/standalone-content.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (164)

### Analytic Rules (20)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):** `ActionType == "InboundConnectionAccepted"`

| Analytic Rule |
|:-------------|
| [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md) |

**In solution [FalconFriday](../solutions/falconfriday.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [DCOM Lateral Movement](../content/falconfriday-dcom-lateral-movement-d58035ff-0bac-4c61-a7f4-f58939ff9764-9dd841b7.md) |  |
| [SMB/Windows Admin Shares](../content/falconfriday-smb-windows-admin-shares-9da25366-2c77-41a5-a159-0da5e2f5fb90-2e2330d9.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Execution of software vulnerable to webp buffer overflow of CVE-2023-4863](../content/microsoft-defender-xdr-execution-of-software-vulnerable-to-webp-buffer-overflow-of-cve-2023-4863-26e81021-2de6-4442-a74a-a77885e96911-15de3ea9.md) |  |
| [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-91a451e3-178f-41b2-9e5d-da97d75b9971-365d2f3a.md) |  |
| [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/microsoft-defender-xdr-regsvr32-rundll32-image-loads-abnormal-extension-36fbd4e7-5630-4414-aa42-702a7fdded21-4cc759a2.md) | `RemoteIPType == "Public"` |
| [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-2624fc55-0998-4897-bb48-1c6422befce4-d1e3cdd5.md) | `RemoteIPType == "Public"` |
| [SUNBURST network beacons](../content/microsoft-defender-xdr-sunburst-network-beacons-ce1e7025-866c-41f3-9b08-ec170e05e73e-b0c0854f.md) | `ActionType == "ConnectionSuccess"` |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):** `ActionType !has "ConnectionFailed"`

| Analytic Rule |
|:-------------|
| [TI Map Domain Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-domain-entity-to-devicenetworkevents-c308b2f3-eebe-4a20-905c-cb8293b062db-1b8b91ec.md) |
| [TI Map IP Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-ip-entity-to-devicenetworkevents-b2df4979-d34a-48b3-a7d9-f473a4bf8058-1cf5dff4.md) |
| [TI Map URL Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-url-entity-to-devicenetworkevents-6ddbd892-a9be-47be-bab7-521241695bd6-16a87b1d.md) |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):** `ActionType !has "ConnectionFailed"`

| Analytic Rule |
|:-------------|
| [TI Map Domain Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-domain-entity-to-devicenetworkevents-1546f3b3-de8a-4e62-bfea-815422154981-be5129ac.md) |
| [TI Map IP Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-ip-entity-to-devicenetworkevents-2474343c-9135-42ec-9c40-a1bace43da5c-3e3eda3e.md) |
| [TI Map URL Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-url-entity-to-devicenetworkevents-4f0356b2-d344-4c19-9375-31b9575d80cb-edd30654.md) |

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md) |  |
| [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md) |  |

**Standalone Content:**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Europium - Hash and IP IOCs - September 2022](../content/standalone-content-europium-hash-and-ip-iocs-september-2022-9d8b5a18-b7db-4c23-84a6-95febaf7e1e4-24b34350.md) |  |
| [IP address of Windows host encoded in web request](../content/standalone-content-ip-address-of-windows-host-encoded-in-web-request-a4ce20ae-a2e4-4d50-b40d-d49f1353b6cc-f6bf2fcd.md) |  |
| [Mercury - Domain, Hash and IP IOCs - August 2022](../content/standalone-content-mercury-domain,-hash-and-ip-iocs-august-2022-ae10c588-7ff7-486c-9920-ab8b0bdb6ede-8b4a9fab.md) |  |
| [Star Blizzard C2 Domains August 2022](../content/standalone-content-star-blizzard-c2-domains-august-2022-2149d9bb-8298-444c-8f99-f7bf0274dd05-bf017854.md) |  |

### Hunting Queries (135)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Malicious Connection to LDAP port for CVE-2021-44228 vulnerability](../content/apache-log4j-vulnerability-detection-malicious-connection-to-ldap-port-for-cve-2021-44228-vulnerability-19abc034-139e-4e64-a05d-cb07ce8b003b-ea04e1a2.md) |  |

**In solution [Cyware](../solutions/cyware.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Detecting Suspicious PowerShell Command Executions](../content/cyware-detecting-suspicious-powershell-command-executions-deb99c6f-1903-455b-bb2c-0036614110bc-ec55d474.md) |  |

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):** `InitiatingProcessFileName has "curl"`

| Hunting Query |
|:-------------|
| [Download of New File Using Curl](../content/endpoint-threat-protection-essentials-download-of-new-file-using-curl-7108c86b-a3ef-42d0-b50b-3e251fb1f84c-09e03acc.md) |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Detect MaiSniper](../content/microsoft-defender-xdr-detect-maisniper-e17ddfc6-7478-443b-99ff-286f3d09b8aa-ab6dfb83.md) |  |
| [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-96976bb1-1993-45b8-a477-8236ee93976b-cf1c1157.md) |  |
| [Recon with Rundll](../content/microsoft-defender-xdr-recon-with-rundll-76c14475-9a22-4cc1-922c-437d7f614a36-e593fe5e.md) | `InitiatingProcessCommandLine has "rundll32.exe"`<br>`InitiatingProcessFileName == "rundll32.exe"` |
| [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/microsoft-defender-xdr-regsvr32-rundll32-image-loads-abnormal-extension-b1f8aac2-766d-47ec-8787-84bc7692ff77-8be87cf1.md) | `RemoteIPType == "Public"` |
| [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-54ea2379-28e7-48e1-8dfd-aaf8fb1331ba-f2e2f8cf.md) | `RemoteIPType == "Public"` |
| [Snip3 Malicious Network Connectivity](../content/microsoft-defender-xdr-snip3-malicious-network-connectivity-b3470e40-39ae-4c28-9282-440038f6f964-47add26a.md) | `InitiatingProcessCommandLine == "\"`<br>`InitiatingProcessFileName in "InstallUtil.exe,RegAsm.exe,RegSvcs.exe"`<br>`InitiatingProcessParentFileName endswith "powershell.exe"`<br>`InitiatingProcessParentFileName endswith "powershell_ise.exe"`<br>`InitiatingProcessParentFileName endswith "pwsh.exe"` |

**Standalone Content:**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [First-Time Network Connection by Unusual Process](../content/standalone-content-first-time-network-connection-by-unusual-process-c9250fa4-ddf4-4844-a7ae-c6b2f131637b-0b3c834c.md) |  |
| [Gentlemen Ransomware C2 domain connection](../content/standalone-content-gentlemen-ransomware-c2-domain-connection-8dda012e-8628-41ca-b09f-31a2a849a40e-83656d39.md) | `RemoteUrl has_any "trycloudflare"` |
| [MDE_Networktrafficgoingtoport](../content/standalone-content-mde-networktrafficgoingtoport-a7ceb6dc-dd6a-4285-8c37-ae40463a1acf-e3f2bd57.md) | `RemotePort in "443,80"` |
| [MDE_Networktrafficgoingtoport-DNS](../content/standalone-content-mde-networktrafficgoingtoport-dns-f678ea38-4b93-4816-a33d-0518164fe01f-0b14dab3.md) | `RemotePort == "53"` |
| [MDE_SmartScreenCheck](../content/standalone-content-mde-smartscreencheck-dde77b9b-799c-44c8-adfa-45007f312487-10770797.md) | `ActionType in "ExploitGuardNetworkProtectionBlocked,SmartScreenUrlWarning"`<br>`InitiatingProcessAccountName contains "Matt"`<br>`InitiatingProcessFileName in "chrome.exe,msedge.exe"`<br>`RemoteUrl contains "facebook"` |
| [Potential rootkit network activity missing from MDE](../content/standalone-content-potential-rootkit-network-activity-missing-from-mde-564bf64a-bada-4c6b-8821-53138d660f78-09fce37b.md) |  |

**GitHub Only:**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Baseline Comparison](../content/github-only-baseline-comparison-4d17ae75-87e8-4272-9aec-16448b1430bc-6e7e6931.md) |  |
| [CVE-2022-22965 Network Activity](../content/github-only-cve-2022-22965-network-activity-98b496c6-da2e-4b03-8e38-c038b2e3062d-1a14d783.md) | `ActionType == "NetworkSignatureInspected"`<br>`AdditionalFields contains ".jsp?cmd="` |
| [Connection to Rare DNS Hosts](../content/github-only-connection-to-rare-dns-hosts-402b16b9-b41d-477a-9e24-78fc1acdd051-df8eea59.md) | `RemoteUrl contains "."` |
| [Connectivity Failures by Device](../content/github-only-connectivity-failures-by-device-d2097370-9cfb-4f52-ab1b-8cb07a033d44-b558d71d.md) | `ActionType == "ConnectionFailed"` |
| [Connectivity Failures by Domain](../content/github-only-connectivity-failures-by-domain-a4f7b0f0-93ad-47c9-bcce-dc08d8d04818-85ff7bc9.md) | `ActionType == "ConnectionFailed"` |
| [DNSPattern [Nobelium]](../content/github-only-dnspattern-[nobelium]-6c87bdb8-a44e-452a-b782-542640d985e3-79e5127f.md) |  |
| [Defender for Endpoint Telemetry](../content/github-only-defender-for-endpoint-telemetry-676912f9-0e47-4599-889a-7b90a3542382-0dc352d3.md) |  |
| [Detect Azure RemoteIP](../content/github-only-detect-azure-remoteip-a883cf6b-52dd-480a-8581-4e5774fc9002-22a2d883.md) |  |
| [DetectTorrentUse](../content/github-only-detecttorrentuse-4011047d-6a0b-4ef0-bf62-d3eda0784e15-6cbb16d4.md) | `InitiatingProcessFileName contains "azureus"`<br>`InitiatingProcessFileName has "torrent"`<br>`InitiatingProcessFileName has "vuze"`<br>`RemoteUrl endswith ".tor"`<br>`RemoteUrl has "azureus"`<br>`RemoteUrl has "torrent"`<br>`RemoteUrl has "vuze"` |
| [Device network events w low count FQDN](../content/github-only-device-network-events-w-low-count-fqdn-df02a1ed-9019-40fc-9be1-c32ac4a016c0-a7dffa4a.md) | `InitiatingProcessFileName !in "iexplore.exe,chrome.exe,opera.exe,safari.exe"` |
| [Discover hosts doing possible network scans](../content/github-only-discover-hosts-doing-possible-network-scans-525f2ae5-5d11-4404-a0c5-bbd402c57c3f-2a222317.md) | `RemoteIP startswith "172.16"`<br>`RemoteIP startswith "192.168"` |
| [Discovering potentially tampered devices [Nobelium]](../content/github-only-discovering-potentially-tampered-devices-[nobelium]-ba850be4-2f02-40fb-834d-d0a9ac0672d3-378fbd79.md) |  |
| [DofoilNameCoinServerTraffic](../content/github-only-dofoilnamecoinservertraffic-4c62c572-8c8b-4a67-bde3-b94e5f09ce99-a544a38a.md) | `RemoteIP in "103.253.12.18,107.150.40.234,130.255.73.90,139.59.208.246,142.0.68.13,144.76.133.38,162.211.64.20,169.239.202.202,185.121.177.177,185.121.177.53,185.97.7.7,193.183.98.154,217.12.210.54,31.3.135.232,5.135.183.146,51.255.167.0,52.174.55.168,62.112.8.85,62.113.203.55,69.164.196.21,87.98.175.85,89.18.27.34,91.121.155.13"` |
| [Download of New File Using Curl](../content/github-only-download-of-new-file-using-curl-96066361-e101-4c8a-ad37-b0f58d75cd2b-761009fc.md) | `InitiatingProcessFileName has "curl"` |
| [EncodedDomainURL [Nobelium]](../content/github-only-encodeddomainurl-[nobelium]-c561bf69-6a6c-4d0a-960a-b69e0e7c8f51-72f5ce64.md) |  |
| [Excel file download domain pattern](../content/github-only-excel-file-download-domain-pattern-1dd47f50-d42d-4e2f-9c2b-6e6c22147916-ed8cb6fe.md) |  |
| [File Copy and Execution](../content/github-only-file-copy-and-execution-a27d5cb6-c533-4a81-9d11-d5c0ed257bc7-20375a6a.md) | `ActionType in "FileCreated,FileModified"`<br>`LocalPort == "445"` |
| [File footprint (1)](../content/github-only-file-footprint-1-1f80f1cf-97e1-4fb8-ad5a-e573fac7b9e3-599349e2.md) |  |
| [Firewall Policy Design Assistant](../content/github-only-firewall-policy-design-assistant-7323d9ca-ebf9-42da-a57b-015969fbd660-4982c548.md) | `ActionType in "ConnectionFound,ConnectionRequest,ConnectionSuccess,InboundConnectionAccepted,ListeningConnectionCreated"`<br>`RemoteIPType != "Loopback"` |
| [Flash-CVE-2018-4848](../content/github-only-flash-cve-2018-4848-8e32bc35-72e6-4bc9-b3bb-2ee346c8acf0-300d8c2d.md) | `InitiatingProcessFileName == "cmd.exe"`<br>`InitiatingProcessParentFileName == "excel.exe"`<br>`RemoteUrl endswith ".kr"` |
| [KNOTWEED-Domain IOCs](../content/github-only-knotweed-domain-iocs-db6fe14a-cbe9-4d01-bbef-60b0f1a6624b-9eae0116.md) |  |
| [KNOTWEED-Downloading new file using Curl](../content/github-only-knotweed-downloading-new-file-using-curl-fac7874e-00de-4509-85f2-9aa02ea9887f-94273129.md) | `InitiatingProcessFileName has "curl"` |
| [LemonDuck-control-structure](../content/github-only-lemonduck-control-structure-9378df8e-9298-4b9f-a50f-62c42b00d9c4-73a9129e.md) | `InitiatingProcessFileName == "powershell.exe"` |
| [LemonDuck-id-generation](../content/github-only-lemonduck-id-generation-fb314e1d-5fa0-4007-b6f3-d14d9a6c0117-7e838c47.md) | `InitiatingProcessCommandLine endswith "(@($env:COMPUTERNAME,$env:USERNAME,(get-wmiobject Win32_ComputerSystemProduct).UUID,(random))-join"`<br>`InitiatingProcessFileName == "powershell.exe"` |
| [Network footprint](../content/github-only-network-footprint-aca2c8fd-03e2-4638-b5df-88ef5c4db16f-7efde93b.md) | `RemoteIP == "IP ADDRESS GOES HERE"`<br>`RemoteUrl endswith "DNS ENTRY GOES HERE"` |
| [Network footprint (1)](../content/github-only-network-footprint-1-42b5b09c-7132-4f37-a2fd-4efeed2c540c-0142100d.md) |  |
| [Payload Delivery](../content/github-only-payload-delivery-8d2ad279-7111-49d9-af9a-815ecb9ee4a4-bb12a444.md) | `InitiatingProcessCommandLine endswith "-OutFile tim.EXE"`<br>`InitiatingProcessFileName == "powershell.exe"` |
| [Qakbot Craigslist Domains](../content/github-only-qakbot-craigslist-domains-5fa50982-9337-4c5f-b8de-cfa871b8f40f-bc4d1042.md) |  |
| [Qakbot Craigslist Domains](../content/github-only-qakbot-craigslist-domains-44b525e1-a1dd-483c-9f45-e5e4a9ccf5ee-99131c42.md) |  |
| [Rare-process-as-a-service](../content/github-only-rare-process-as-a-service-a60ac80f-dce6-43ec-b102-9ae8c094d5dc-8648e4a1.md) |  |
| [Remote Management and Monitoring tool - AeroAdmin - Network Connection](../content/github-only-remote-management-and-monitoring-tool-aeroadmin-network-connection-b00595db-ba89-48d8-bdf2-77b18c6be7ac-7ddbc9b6.md) | `InitiatingProcessVersionInfoCompanyName has_any "AeroAdmin"`<br>`InitiatingProcessVersionInfoProductName has_any "AeroAdmin"`<br>`RemoteUrl has "aeroadmin.com"` |
| [Remote Management and Monitoring tool - All Tools - Network Connection](../content/github-only-remote-management-and-monitoring-tool-all-tools-network-connection-c65e2d45-2560-4ea5-913b-d3d88de10c42-850fc4a5.md) |  |
| [Remote Management and Monitoring tool - Ammyy - Network Connection](../content/github-only-remote-management-and-monitoring-tool-ammyy-network-connection-0e92144a-d108-45dd-abb4-b0200c8c8cd0-5b15e8b7.md) | `InitiatingProcessVersionInfoCompanyName has "ammyy"`<br>`InitiatingProcessVersionInfoProductName has "ammyy admin"`<br>`RemoteUrl has "ammyy.com"` |
| [Remote Management and Monitoring tool - AnyDesk - Network Connection](../content/github-only-remote-management-and-monitoring-tool-anydesk-network-connection-ed1ef511-c52a-4e07-a864-588e96a7eb91-d35b1249.md) | `InitiatingProcessVersionInfoProductName has "AnyDesk"`<br>`RemoteUrl has_any "anydesk.com"` |
| [Remote Management and Monitoring tool - AnyViewer - Network Connection](../content/github-only-remote-management-and-monitoring-tool-anyviewer-network-connection-61660f4e-45e0-4ac4-8957-580bcebd033c-4702ac90.md) | `InitiatingProcessVersionInfoCompanyName has "AOMEI"`<br>`InitiatingProcessVersionInfoProductName has "AnyViewer"`<br>`RemoteUrl has_any "anyviewer.com"` |
| [Remote Management and Monitoring tool - Atera - Network Connection](../content/github-only-remote-management-and-monitoring-tool-atera-network-connection-774bb5a8-c93b-4fa1-8ebf-4053b99622ed-7e91752a.md) | `InitiatingProcessVersionInfoCompanyName has "Atera Networks"`<br>`RemoteUrl has_any "atera.com"` |
| [Remote Management and Monitoring tool - AweSun - Network Connection](../content/github-only-remote-management-and-monitoring-tool-awesun-network-connection-4e339200-6a5a-4e83-8ba4-87acee0bd518-f15a3fd9.md) | `InitiatingProcessVersionInfoCompanyName has "AweRay"`<br>`InitiatingProcessVersionInfoProductName has "AweSun"`<br>`RemoteUrl has_any "aweray.com"` |
| [Remote Management and Monitoring tool - BarracudaRMM - Network Connection](../content/github-only-remote-management-and-monitoring-tool-barracudarmm-network-connection-62263920-ab21-4fc6-84ce-00ca4360c091-ce39c642.md) | `InitiatingProcessVersionInfoCompanyName has_any "Barracuda MSP"`<br>`RemoteUrl has_any "rmm.barracudamsp.com"` |
| [Remote Management and Monitoring tool - BeyondTrust - Network Connection](../content/github-only-remote-management-and-monitoring-tool-beyondtrust-network-connection-605d7211-b9f2-4550-b8f0-d2218f5b926f-2a46d2ba.md) | `InitiatingProcessVersionInfoCompanyName has_any "BeyondTrust"`<br>`RemoteUrl has_any "license.bomgar.com"` |
| [Remote Management and Monitoring tool - ChromeRDP - Network Connection](../content/github-only-remote-management-and-monitoring-tool-chromerdp-network-connection-cb94b1ea-e427-4532-8abf-09d4288d94fb-1a51b0d9.md) | `InitiatingProcessVersionInfoCompanyName has "Google"`<br>`InitiatingProcessVersionInfoProductName has "Chrome Remote Desktop"`<br>`RemoteUrl has "remotedesktop-pa.googleapis.com"` |
| [Remote Management and Monitoring tool - ConnectWise - Network Connection](../content/github-only-remote-management-and-monitoring-tool-connectwise-network-connection-e483619f-5356-4967-b93e-cceb602783fb-077ede81.md) | `InitiatingProcessVersionInfoCompanyName has_any "ConnectWise"`<br>`RemoteUrl has_any "myconnectwise.com"` |
| [Remote Management and Monitoring tool - DameWare - Network Connection](../content/github-only-remote-management-and-monitoring-tool-dameware-network-connection-679e3086-4871-481f-92a6-5d3357d7f6bb-90977ea9.md) | `InitiatingProcessVersionInfoCompanyName has_any "DameWare"`<br>`InitiatingProcessVersionInfoFileDescription has "DameWare"`<br>`InitiatingProcessVersionInfoProductName has "DameWare"`<br>`RemoteUrl has_any "swi-rc.com"` |
| [Remote Management and Monitoring tool - DattoRMM - Network Connection](../content/github-only-remote-management-and-monitoring-tool-dattormm-network-connection-41a9931d-8cb4-44dc-9c8d-f915dd15dfd8-0da8668e.md) | `InitiatingProcessVersionInfoCompanyName has_any "CentraStage"`<br>`RemoteUrl has_any "rmm.datto.com"` |
| [Remote Management and Monitoring tool - DesktopNow - Network Connection](../content/github-only-remote-management-and-monitoring-tool-desktopnow-network-connection-337d4bc9-3087-472a-9007-920cc60fd080-3a07debb.md) | `InitiatingProcessVersionInfoCompanyName has "NCH Software"`<br>`InitiatingProcessVersionInfoProductName has "DesktopNow"`<br>`RemoteUrl has "nchuser.com"` |
| [Remote Management and Monitoring tool - DistantDesktop - Network Connection](../content/github-only-remote-management-and-monitoring-tool-distantdesktop-network-connection-def063fd-a00f-4aec-9d46-e81fdf0bf1e9-232fa917.md) | `InitiatingProcessVersionInfoCompanyName has "Distant Software"`<br>`InitiatingProcessVersionInfoProductName has "Distant Desktop"`<br>`RemoteUrl has_any "distantdesktop.com"` |
| [Remote Management and Monitoring tool - FleetDeck - Network Connection](../content/github-only-remote-management-and-monitoring-tool-fleetdeck-network-connection-1a733b20-58c3-40d0-a815-2ae93da0808e-f9581849.md) | `InitiatingProcessFileName startswith "fleetdeck"`<br>`InitiatingProcessVersionInfoCompanyName has "fleetdeck"`<br>`RemoteUrl has_any "fleetdeck.io"` |
| [Remote Management and Monitoring tool - GetScreen - Network Connection](../content/github-only-remote-management-and-monitoring-tool-getscreen-network-connection-9c60001c-2118-437b-90f2-d0f899587c3b-1512a43e.md) | `InitiatingProcessVersionInfoCompanyName has "getscreen.me"`<br>`InitiatingProcessVersionInfoProductName has "getscreen.me"`<br>`RemoteUrl has_any "getscreen.me"` |
| [Remote Management and Monitoring tool - ISLOnline - Network Connection](../content/github-only-remote-management-and-monitoring-tool-islonline-network-connection-b24a1cca-0419-4c47-b400-b78009561482-1aa923c7.md) | `InitiatingProcessVersionInfoCompanyName has_any "Xlab"`<br>`RemoteUrl has "islonline.net"` |
| [Remote Management and Monitoring tool - IperiusRemote - Network Connection](../content/github-only-remote-management-and-monitoring-tool-iperiusremote-network-connection-be82cbca-f831-4e96-82ce-e779169a0a87-ca88616f.md) | `InitiatingProcessVersionInfoCompanyName has "Enter Srl"`<br>`InitiatingProcessVersionInfoProductName has "Iperius Remote"`<br>`RemoteUrl has_any "iperius"` |
| [Remote Management and Monitoring tool - Kaseya - Network Connection](../content/github-only-remote-management-and-monitoring-tool-kaseya-network-connection-c75a64e3-2849-4342-a115-7cc6f009b520-99aa1a06.md) | `InitiatingProcessVersionInfoCompanyName has "Kaseya"`<br>`InitiatingProcessVersionInfoProductName has "Kaseya"`<br>`RemoteUrl has_any "kaseya.com"` |
| [Remote Management and Monitoring tool - Level - Network Connection](../content/github-only-remote-management-and-monitoring-tool-level-network-connection-809456ed-b3ff-4699-a2fb-837b17555f6c-1d2a7ed0.md) | `InitiatingProcessFileName has "level"`<br>`RemoteUrl has_any "agents.level.io"` |
| [Remote Management and Monitoring tool - LiteManager - Network Connection](../content/github-only-remote-management-and-monitoring-tool-litemanager-network-connection-ee0c85ad-8286-4946-b3d0-12a754b67166-adb4d2b3.md) | `InitiatingProcessVersionInfoProductName has_any "ROMViewer"`<br>`RemoteUrl has_any "litemanager.ru"` |
| [Remote Management and Monitoring tool - LogMeIn - Network Connection](../content/github-only-remote-management-and-monitoring-tool-logmein-network-connection-e1f849f9-1218-4990-964d-dd8c69897107-0aa0c6a3.md) | `InitiatingProcessVersionInfoCompanyName has_any "LogMeIn"`<br>`RemoteUrl has_any "update-cdn.logmein.com"` |
| [Remote Management and Monitoring tool - MSP360_CloudBerry - Network Connection](../content/github-only-remote-management-and-monitoring-tool-msp360-cloudberry-network-connection-3a4d43d5-2326-467c-a22a-4f1f1f3e2890-5c3ba529.md) | `InitiatingProcessVersionInfoCompanyName has_any "CloudBerry"`<br>`RemoteUrl has_any "rm.mspbackups.com"` |
| [Remote Management and Monitoring tool - MeshCentral - Network Connection](../content/github-only-remote-management-and-monitoring-tool-meshcentral-network-connection-fd366644-9bb6-4c00-870c-526ba9186270-96175d18.md) | `InitiatingProcessVersionInfoCompanyName has "meshcentral"`<br>`RemoteUrl has "meshcentral.com"` |
| [Remote Management and Monitoring tool - NAble - Network Connection](../content/github-only-remote-management-and-monitoring-tool-nable-network-connection-2cd90dd4-4f42-4d3e-86ed-b5c711f79f65-68690b5b.md) | `InitiatingProcessVersionInfoCompanyName has_any "Remote Monitoring"`<br>`RemoteUrl has_any "remote.management"` |
| [Remote Management and Monitoring tool - Naverisk - Network Connection](../content/github-only-remote-management-and-monitoring-tool-naverisk-network-connection-6a9e8751-beb2-48b3-b7c9-c86f57385b99-b7c0101d.md) | `InitiatingProcessVersionInfoCompanyName has_any "naverisk"` |
| [Remote Management and Monitoring tool - NetSupport - Network Connection](../content/github-only-remote-management-and-monitoring-tool-netsupport-network-connection-f19632db-9c3c-4141-8e58-32e34731a445-c763ccb1.md) | `InitiatingProcessVersionInfoCompanyName has "netsupport"`<br>`RemoteUrl has "netsupportsoftware.com"` |
| [Remote Management and Monitoring tool - NinjaRMM - Network Connection](../content/github-only-remote-management-and-monitoring-tool-ninjarmm-network-connection-b766a587-e494-4bdd-9af5-97084d54c1cf-7c357a7b.md) | `InitiatingProcessVersionInfoCompanyName has_any "NinjaRMM"`<br>`RemoteUrl has "ninjarmm.com"` |
| [Remote Management and Monitoring tool - OptiTune - Network Connection](../content/github-only-remote-management-and-monitoring-tool-optitune-network-connection-e68f4b27-8001-4186-9c14-a1ef98c73dd2-4db9860c.md) | `InitiatingProcessVersionInfoCompanyName has "Bravura Software LLC"`<br>`RemoteUrl has_any "optitune.us"` |
| [Remote Management and Monitoring tool - PDQ - Network Connection](../content/github-only-remote-management-and-monitoring-tool-pdq-network-connection-58cbbe97-f835-4677-9bee-203b1df29600-c48ee49d.md) | `InitiatingProcessVersionInfoProductName has "PDQConnectAgent"`<br>`RemoteUrl has_any "app.pdq.com"` |
| [Remote Management and Monitoring tool - Panorama9 - Network Connection](../content/github-only-remote-management-and-monitoring-tool-panorama9-network-connection-937867d4-9b3b-4030-bde0-0f7d2f4605ec-93d39cff.md) | `InitiatingProcessVersionInfoCompanyName has "panorama9"`<br>`RemoteUrl has "panorama9.com"` |
| [Remote Management and Monitoring tool - PcVisit - Network Connection](../content/github-only-remote-management-and-monitoring-tool-pcvisit-network-connection-bb7b6b01-b7b4-4ea9-ba0e-847093d75c68-091afcf8.md) | `InitiatingProcessVersionInfoCompanyName has "pcvisit software ag"`<br>`RemoteUrl has_any "pcvisit.de"` |
| [Remote Management and Monitoring tool - Pulseway - Network Connection](../content/github-only-remote-management-and-monitoring-tool-pulseway-network-connection-42fd7dc0-e3ba-47e2-a470-603e29fff986-26e1dbbb.md) | `InitiatingProcessVersionInfoCompanyName has "MMSoft Design"`<br>`InitiatingProcessVersionInfoProductName has "Pulseway"`<br>`RemoteUrl has "pulseway.com"` |
| [Remote Management and Monitoring tool - RPort - Network Connection](../content/github-only-remote-management-and-monitoring-tool-rport-network-connection-a464ea00-ed87-465f-8269-4b6927d9edfa-6dc0a794.md) | `InitiatingProcessVersionInfoCompanyName has "RealVNC"`<br>`InitiatingProcessVersionInfoProductName has "rport"` |
| [Remote Management and Monitoring tool - RealVNC - Network Connection](../content/github-only-remote-management-and-monitoring-tool-realvnc-network-connection-b27b5b31-4cdf-4c1a-87f9-10c127f2570d-8f12fbe6.md) | `InitiatingProcessVersionInfoCompanyName has "realvnc"`<br>`RemoteUrl has_any "update-check.realvnc.com"` |
| [Remote Management and Monitoring tool - RemoteDesktopPlus - Network Connection](../content/github-only-remote-management-and-monitoring-tool-remotedesktopplus-network-connection-933cd845-059b-46e6-8f2b-261fad9ff998-3284b448.md) | `InitiatingProcessVersionInfoCompanyName has "www.donkz.nl"`<br>`InitiatingProcessVersionInfoOriginalFileName has "rdp.exe"`<br>`InitiatingProcessVersionInfoProductName has "Remote Desktop Plus"` |
| [Remote Management and Monitoring tool - RemotePC - Network Connection](../content/github-only-remote-management-and-monitoring-tool-remotepc-network-connection-30d32feb-6ac7-4d97-8a99-d40f5dfa61b5-b5c55939.md) | `InitiatingProcessVersionInfoCompanyName has "idrive"`<br>`InitiatingProcessVersionInfoProductName has_any "remotepc"`<br>`RemoteUrl has "remotepc.com"` |
| [Remote Management and Monitoring tool - RemoteUtilities - Network Connection](../content/github-only-remote-management-and-monitoring-tool-remoteutilities-network-connection-30c70f7f-8018-4c45-9cd3-13ef9bc41426-e8346d77.md) | `InitiatingProcessVersionInfoCompanyName has "Remote Utilities"`<br>`InitiatingProcessVersionInfoProductName has "Remote Utilities"`<br>`RemoteUrl has "remoteutilities.com"` |
| [Remote Management and Monitoring tool - RustDesk - Network Connection](../content/github-only-remote-management-and-monitoring-tool-rustdesk-network-connection-9d6ce6ba-f13e-473c-ac2b-56b74c4a5900-3ea1824e.md) | `InitiatingProcessVersionInfoProductName has "rustdesk"`<br>`RemoteUrl has "rustdesk.com"` |
| [Remote Management and Monitoring tool - ScreenMeet - Network Connection](../content/github-only-remote-management-and-monitoring-tool-screenmeet-network-connection-f413b02c-92da-4243-82e6-b9bbe8e89a35-86226329.md) | `InitiatingProcessVersionInfoCompanyName has "Projector Inc"`<br>`InitiatingProcessVersionInfoProductName has "ScreenMeet"`<br>`RemoteUrl has "screenmeet.com"` |
| [Remote Management and Monitoring tool - ServerEye - Network Connection](../content/github-only-remote-management-and-monitoring-tool-servereye-network-connection-8f8aa8e8-90a1-43cf-852c-ba54c63a973d-a45c4067.md) | `InitiatingProcessVersionInfoCompanyName has "Krämer IT Solutions GmbH"`<br>`InitiatingProcessVersionInfoProductName has_any "ServerEye"`<br>`RemoteUrl has "server-eye.de"` |
| [Remote Management and Monitoring tool - ShowMyPC - Network Connection](../content/github-only-remote-management-and-monitoring-tool-showmypc-network-connection-9074b61c-76e2-4793-ad48-0e9226c35c3e-ef7ae279.md) | `InitiatingProcessVersionInfoCompanyName has "ShowMyPC"`<br>`InitiatingProcessVersionInfoProductName has "ShowMyPC"`<br>`RemoteUrl has "showmypc.com"` |
| [Remote Management and Monitoring tool - SimpleHelp - Network Connection](../content/github-only-remote-management-and-monitoring-tool-simplehelp-network-connection-40551557-ee55-48d4-a48e-0eeeecf0a243-d4845fde.md) | `InitiatingProcessVersionInfoCompanyName has "SimpleHelp"`<br>`InitiatingProcessVersionInfoProductName has "SimpleHelp"`<br>`RemoteUrl has "rmshelp.me"` |
| [Remote Management and Monitoring tool - Splashtop - Network Connection](../content/github-only-remote-management-and-monitoring-tool-splashtop-network-connection-7253fc17-ed4b-4c54-9612-7ad48274c294-d23b50b0.md) | `InitiatingProcessVersionInfoCompanyName has "Splashtop"`<br>`RemoteUrl has_any "splashtop.com"` |
| [Remote Management and Monitoring tool - SupRemo - Network Connection](../content/github-only-remote-management-and-monitoring-tool-supremo-network-connection-889b90bc-599e-4e28-bb19-1ffc04dbf80b-928f5509.md) | `InitiatingProcessVersionInfoCompanyName has "NanoSystems"`<br>`RemoteUrl has_any "supremocontrol.com"` |
| [Remote Management and Monitoring tool - SyncroMSP - Network Connection](../content/github-only-remote-management-and-monitoring-tool-syncromsp-network-connection-3abb45d6-8514-4444-a7e4-6ab1c71ae5ce-596c5c1c.md) | `InitiatingProcessVersionInfoCompanyName has "Servably, Inc."`<br>`RemoteUrl has_any "syncromsp.com"` |
| [Remote Management and Monitoring tool - TacticalRMM - Network Connection](../content/github-only-remote-management-and-monitoring-tool-tacticalrmm-network-connection-d5559c16-6959-4974-8051-c39d52886862-0bd5ebbe.md) | `InitiatingProcessVersionInfoCompanyName has_any "AmidaWare"`<br>`RemoteUrl has "tacticalrmm.io"` |
| [Remote Management and Monitoring tool - TeamViewer - Network Connection](../content/github-only-remote-management-and-monitoring-tool-teamviewer-network-connection-f5023daf-2ac2-407e-b079-6c3bc81d7e25-fc5e7f7a.md) | `InitiatingProcessVersionInfoCompanyName has "TeamViewer"`<br>`RemoteUrl has_any "teamviewer.com"` |
| [Remote Management and Monitoring tool - TigerVNC - Network Connection](../content/github-only-remote-management-and-monitoring-tool-tigervnc-network-connection-dc1950c0-efeb-4695-aa95-74198df5dab8-a8aa5435.md) | `InitiatingProcessVersionInfoCompanyName has "TigerVNC"`<br>`InitiatingProcessVersionInfoProductName has "TigerVNC"` |
| [Remote Management and Monitoring tool - TightVNC - Network Connection](../content/github-only-remote-management-and-monitoring-tool-tightvnc-network-connection-4323b279-4600-4fc6-a0b9-1d8d678c6b1b-3b4bc7e8.md) | `InitiatingProcessVersionInfoCompanyName has "GlavSoft"`<br>`InitiatingProcessVersionInfoProductName has "TightVNC"` |
| [Remote Management and Monitoring tool - UltraViewer - Network Connection](../content/github-only-remote-management-and-monitoring-tool-ultraviewer-network-connection-da07fd48-7420-4164-a837-2d39451af10b-6ead5b6a.md) | `InitiatingProcessVersionInfoCompanyName has "DucFabulous"`<br>`InitiatingProcessVersionInfoProductName has "UltraViewer"`<br>`RemoteUrl has "ultraviewer.net"` |
| [Remote Management and Monitoring tool - XMReality - Network Connection](../content/github-only-remote-management-and-monitoring-tool-xmreality-network-connection-41405f6b-85bf-48e4-8e87-a544a0f59a9b-7f107622.md) | `InitiatingProcessVersionInfoCompanyName has "XMReality"`<br>`InitiatingProcessVersionInfoProductName has "XMReality"`<br>`RemoteUrl has "xmreality.com"` |
| [Remote Management and Monitoring tool - ZohoAssist - Network Connection](../content/github-only-remote-management-and-monitoring-tool-zohoassist-network-connection-b915897c-1fe7-47f4-9e06-2ae74da8203e-2fc9f409.md) | `InitiatingProcessVersionInfoCompanyName has "Zoho"`<br>`InitiatingProcessVersionInfoProductName has "Zoho Assist"`<br>`RemoteUrl has_any "assist.zoho.com"` |
| [Remote Management and Monitoring tool - mRemoteNG - Network Connection](../content/github-only-remote-management-and-monitoring-tool-mremoteng-network-connection-b4bae4af-5fe3-4217-bef0-c7ac5d51f3d1-98121906.md) | `InitiatingProcessVersionInfoCompanyName has "mRemoteNG"`<br>`RemoteUrl has "mremoteng.org"` |
| [Remote Management and Monitoring tool - parsec.app - Network Connection](../content/github-only-remote-management-and-monitoring-tool-parsec.app-network-connection-070b55d3-eb84-4312-a116-1af9965cd6e4-b89bf545.md) | `InitiatingProcessVersionInfoCompanyName has "parsec"`<br>`RemoteUrl has_any "kessel-ws.parsec.app"` |
| [Remote Management and Montioring tool - Action1 - Network Connection](../content/github-only-remote-management-and-montioring-tool-action1-network-connection-7da76b41-8c1d-4602-91c6-5d99738d38f4-2b2041fc.md) | `InitiatingProcessVersionInfoCompanyName has "Action1"`<br>`InitiatingProcessVersionInfoProductName has "Action1"`<br>`RemoteUrl has "server.action1.com"` |
| [Remote Management and Montioring tool - Addigy - Network Connection](../content/github-only-remote-management-and-montioring-tool-addigy-network-connection-4f0b3b8d-bde4-4cce-9ff7-1f0c0a7085af-dd1e9d14.md) | `InitiatingProcessFileName has_any "go-agent"`<br>`RemoteUrl has_any "prod.addigy.com"` |
| [Roasting](../content/github-only-roasting-17a34f6c-b3ba-42a0-810a-1746281e672d-a36a08fa.md) |  |
| [RunDLL Suspicious Network Connection](../content/github-only-rundll-suspicious-network-connection-d0831db3-009f-40bb-9f82-c66b1f9674cd-46ab6288.md) | `InitiatingProcessCommandLine has ",GlobalOut"`<br>`InitiatingProcessFileName == "rundll32.exe"` |
| [SMB shares discovery](../content/github-only-smb-shares-discovery-a3dc6ecb-d910-467b-844e-a3b87744c4c9-a86d4bee.md) | `InitiatingProcessId !in "0,4"`<br>`RemotePort == "445"` |
| [SolarWinds -CVE-2021-35211](../content/github-only-solarwinds-cve-2021-35211-ff01fb94-9b27-48b9-a304-2e86108b5ca4-b19d7fb2.md) | `ActionType == "ConnectionSuccess"`<br>`Protocol == "Tcp"`<br>`RemotePort == "443"` |
| [Star Blizzard-Domain IOCs](../content/github-only-star-blizzard-domain-iocs-4b14590a-a1f0-4756-9f3d-baafa696e051-d7385a05.md) |  |
| [Tor](../content/github-only-tor-a0b19966-3b4d-45de-969c-ee5f1ef8c18a-d936cea1.md) | `InitiatingProcessFileName in "meek-client.exe,tor.exe"` |
| [c2-bluekeep](../content/github-only-c2-bluekeep-6b2d0b6e-ec4a-4d71-b1cc-dbc470d2b99e-c4398705.md) |  |
| [check-for-shadowhammer-activity-download-domain](../content/github-only-check-for-shadowhammer-activity-download-domain-1217e1fd-ebbb-4fdc-8b18-81be69876b3a-484c0442.md) | `RemoteIP == "141.105.71.116"`<br>`RemoteUrl == "asushotfix.com"` |
| [check-for-shadowhammer-activity-implant](../content/github-only-check-for-shadowhammer-activity-implant-fb6f89ae-4af3-4c37-8f12-d719e882e8a5-da57d533.md) |  |
| [cve-2019-0808-c2](../content/github-only-cve-2019-0808-c2-0be1295f-b417-477b-95d1-82ce7c43fa03-094fa25a.md) | `RemoteIP == "63.141.233.82"`<br>`RemoteUrl in "fffun-video.biz,luckluck.blog"` |
| [detect-bluekeep-exploitation-attempts](../content/github-only-detect-bluekeep-exploitation-attempts-e380a30d-03ff-4d20-b2d5-d0683033d813-a1070ea7.md) | `InitiatingProcessFileName == "spoolsv.exe"`<br>`RemotePort == "3389"` |
| [detect-cyzfc-activity (1)](../content/github-only-detect-cyzfc-activity-1-c28b23e0-0d6d-45a1-ab81-8268fdff0272-0d76d71e.md) | `RemoteUrl == "pandorasong.com"` |
| [detect-impacket-dcomexec](../content/github-only-detect-impacket-dcomexec-3069ee4c-68a2-4512-9048-4751bc0fbac2-d07da8d4.md) |  |
| [detect-impacket-wmiexec](../content/github-only-detect-impacket-wmiexec-e5c65f1f-2bf8-4b42-af8b-1f6adfeda0cc-f0a94abb.md) |  |
| [detect-impacket-wmiexec](../content/github-only-detect-impacket-wmiexec-e5c65f1f-2bf8-4b42-af8b-1f6adfeda0cc-32647bb7.md) |  |
| [detect-impacket-wmiexec](../content/github-only-detect-impacket-wmiexec-e5c65f1f-2bf8-4b42-af8b-1f6adfeda0cc-afdcfc01.md) |  |
| [detect-mailsniper](../content/github-only-detect-mailsniper-726085be-fa36-4b0f-991a-b5bc8fe53d87-3a39373b.md) |  |
| [detect-steganography-exfiltration](../content/github-only-detect-steganography-exfiltration-e0003bf6-b5f2-4dd1-a130-8651eb0b9f04-5c9b5fd7.md) |  |
| [detect-suspicious-rdp-connections](../content/github-only-detect-suspicious-rdp-connections-f2458594-5671-493d-9c08-aee4bf783a1d-e5b62958.md) | `ActionType == "ConnectionSuccess"`<br>`Protocol == "Tcp"`<br>`RemotePort == "3389"` |
| [insider-threat-detection-queries (11)](../content/github-only-insider-threat-detection-queries-11-de9a2aa6-ad31-4dd1-871a-2577e47ef586-2f3cc264.md) | `RemotePort == "22"` |
| [insider-threat-detection-queries (5)](../content/github-only-insider-threat-detection-queries-5-48b0ff4e-385c-4362-a184-612834a0b8c6-635622db.md) |  |
| [insider-threat-detection-queries (6)](../content/github-only-insider-threat-detection-queries-6-eb5bf874-a707-4997-8d66-433cbf8b2f26-48ce8e26.md) |  |
| [insider-threat-detection-queries (9)](../content/github-only-insider-threat-detection-queries-9-b2ac5ab0-52b0-4be5-9f3f-9d19b80bcc9e-ebba1769.md) |  |
| [oceanlotus-apt32-network](../content/github-only-oceanlotus-apt32-network-8e2c33f5-0c00-4246-b10b-9fb43da56365-c439e0f9.md) | `RemoteUrl in "C2 Indicators for OceanLotus Activities 2019,Malicious URL Indicators for OceanLotus Activities 2019,cortanasyn.com,cortanazone.com,load.newappssystems.com,open.betaoffice.net,outlook.updateoffices.net,ristineho.com,syn.servebbs.com"` |
| [printnightmare-cve-2021-1675 usage detection (1)](../content/github-only-printnightmare-cve-2021-1675-usage-detection-1-ec1e131a-79cb-4f5c-b5e6-3edc5574ac68-f011ba2f.md) | `LocalPort == "445"` |
| [rare_sch_task_with_activity](../content/github-only-rare-sch-task-with-activity-ce76992a-8cd6-4605-9f45-cde9aae87244-3f342058.md) |  |
| [recon-with-rundll](../content/github-only-recon-with-rundll-c720f607-7f7b-41c8-bed9-2d9a240d965c-97ed53b5.md) | `InitiatingProcessCommandLine has "rundll32.exe"`<br>`InitiatingProcessFileName == "rundll32.exe"` |
| [regsvr32-rundll32-image-loads-abnormal-extension](../content/github-only-regsvr32-rundll32-image-loads-abnormal-extension-f24f6403-cba0-4f3c-9f88-28782b9ea39a-555df071.md) | `RemoteIPType == "Public"` |
| [regsvr32-rundll32-with-anomalous-parent-process](../content/github-only-regsvr32-rundll32-with-anomalous-parent-process-bef2bd1b-885a-40f4-b48f-6f5564cd81f3-e7a12a36.md) | `RemoteIPType == "Public"` |
| [snip3-malicious-network-connectivity](../content/github-only-snip3-malicious-network-connectivity-c65bea99-26b2-4c48-a114-02eccc2023c0-cf5abda0.md) | `InitiatingProcessCommandLine == "\"`<br>`InitiatingProcessFileName in "InstallUtil.exe,RegAsm.exe,RegSvcs.exe"`<br>`InitiatingProcessParentFileName endswith "Powershell.exe"` |
| [snip3-revengerat-c2-exfiltration](../content/github-only-snip3-revengerat-c2-exfiltration-8e169e62-be43-4f30-9f25-e003b2cd9c6e-a1b35eda.md) | `RemoteUrl in "asin8988.ddns.net,asin8989.ddns.net,asin8990.ddns.net,h0pe1759.ddns.net,kexa600200.ddns.net,kimjoy.ddns.net,kimjoy007.dyndns.org,mail.alamdarhardware.com,n0ahark2021.ddns.net"` |
| [successive-tk-domain-calls](../content/github-only-successive-tk-domain-calls-82e47917-b960-49a1-8089-c805eea06ed4-23a9c29d.md) | `RemoteUrl endswith ".tk"` |

### Workbooks (9)

**In solution [DORA Compliance](../solutions/dora-compliance.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DORACompliance](../content/dora-compliance-doracompliance-21bcc12f.md) |  |

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):** `ActionType == "ConnectionSuccess"`

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

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ExchangeCompromiseHunting](../content/github-only-exchangecompromisehunting-4fe3c3f0.md) | `InitiatingProcessFileName has_any "umworkerprocess.exe"`<br>`InitiatingProcessSHA256 == "256"` |
| [MicrosoftDefenderForEndPoint](../content/github-only-microsoftdefenderforendpoint-ac005534.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |
| [SolarWindsPostCompromiseHunting](../content/github-only-solarwindspostcompromisehunting-09062974.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1) — Selection Criteria: `ActionType == "ConnectionFailed"`

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimNetworkSessionMicrosoft365Defender](../asim/asimnetworksessionmicrosoft365defender.md) | NetworkSession | M365 Defender for Endpoint |

## Selection Criteria Summary (97 criteria, 113 total references)

References by type: 0 connectors, 112 content items, 1 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `RemoteIPType == "Public"` | - | 6 | - | - | **6** |
| `ActionType !has "ConnectionFailed"` | - | 6 | - | - | **6** |
| `InitiatingProcessFileName has "curl"` | - | 3 | - | - | **3** |
| `ActionType == "ConnectionFailed"` | - | 2 | 1 | - | **3** |
| `ActionType == "ConnectionSuccess"` | - | 2 | - | - | **2** |
| `InitiatingProcessCommandLine has "rundll32.exe"`<br>`InitiatingProcessFileName == "rundll32.exe"` | - | 2 | - | - | **2** |
| `ActionType == "InboundConnectionAccepted"` | - | 1 | - | - | **1** |
| `InitiatingProcessCommandLine == "\"`<br>`InitiatingProcessFileName in "InstallUtil.exe,RegAsm.exe,RegSvcs.exe"`<br>`InitiatingProcessParentFileName endswith "powershell.exe"`<br>`InitiatingProcessParentFileName endswith "powershell_ise.exe"`<br>`InitiatingProcessParentFileName endswith "pwsh.exe"` | - | 1 | - | - | **1** |
| `RemoteUrl == "pandorasong.com"` | - | 1 | - | - | **1** |
| `RemoteIP in "103.253.12.18,107.150.40.234,130.255.73.90,139.59.208.246,142.0.68.13,144.76.133.38,162.211.64.20,169.239.202.202,185.121.177.177,185.121.177.53,185.97.7.7,193.183.98.154,217.12.210.54,31.3.135.232,5.135.183.146,51.255.167.0,52.174.55.168,62.112.8.85,62.113.203.55,69.164.196.21,87.98.175.85,89.18.27.34,91.121.155.13"` | - | 1 | - | - | **1** |
| `RemoteUrl in "C2 Indicators for OceanLotus Activities 2019,Malicious URL Indicators for OceanLotus Activities 2019,cortanasyn.com,cortanazone.com,load.newappssystems.com,open.betaoffice.net,outlook.updateoffices.net,ristineho.com,syn.servebbs.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessCommandLine == "\"`<br>`InitiatingProcessFileName in "InstallUtil.exe,RegAsm.exe,RegSvcs.exe"`<br>`InitiatingProcessParentFileName endswith "Powershell.exe"` | - | 1 | - | - | **1** |
| `RemoteUrl in "asin8988.ddns.net,asin8989.ddns.net,asin8990.ddns.net,h0pe1759.ddns.net,kexa600200.ddns.net,kimjoy.ddns.net,kimjoy007.dyndns.org,mail.alamdarhardware.com,n0ahark2021.ddns.net"` | - | 1 | - | - | **1** |
| `RemoteIP == "141.105.71.116"`<br>`RemoteUrl == "asushotfix.com"` | - | 1 | - | - | **1** |
| `RemoteUrl contains "."` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName !in "iexplore.exe,chrome.exe,opera.exe,safari.exe"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName in "meek-client.exe,tor.exe"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName contains "azureus"`<br>`InitiatingProcessFileName has "torrent"`<br>`InitiatingProcessFileName has "vuze"`<br>`RemoteUrl endswith ".tor"`<br>`RemoteUrl has "azureus"`<br>`RemoteUrl has "torrent"`<br>`RemoteUrl has "vuze"` | - | 1 | - | - | **1** |
| `RemoteIP startswith "172.16"`<br>`RemoteIP startswith "192.168"` | - | 1 | - | - | **1** |
| `RemotePort == "53"` | - | 1 | - | - | **1** |
| `RemotePort in "443,80"` | - | 1 | - | - | **1** |
| `ActionType in "ExploitGuardNetworkProtectionBlocked,SmartScreenUrlWarning"`<br>`InitiatingProcessAccountName contains "Matt"`<br>`InitiatingProcessFileName in "chrome.exe,msedge.exe"`<br>`RemoteUrl contains "facebook"` | - | 1 | - | - | **1** |
| `InitiatingProcessId !in "0,4"`<br>`RemotePort == "445"` | - | 1 | - | - | **1** |
| `ActionType in "FileCreated,FileModified"`<br>`LocalPort == "445"` | - | 1 | - | - | **1** |
| `ActionType == "NetworkSignatureInspected"`<br>`AdditionalFields contains ".jsp?cmd="` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName == "cmd.exe"`<br>`InitiatingProcessParentFileName == "excel.exe"`<br>`RemoteUrl endswith ".kr"` | - | 1 | - | - | **1** |
| `LocalPort == "445"` | - | 1 | - | - | **1** |
| `ActionType == "ConnectionSuccess"`<br>`Protocol == "Tcp"`<br>`RemotePort == "443"` | - | 1 | - | - | **1** |
| `ActionType in "ConnectionFound,ConnectionRequest,ConnectionSuccess,InboundConnectionAccepted,ListeningConnectionCreated"`<br>`RemoteIPType != "Loopback"` | - | 1 | - | - | **1** |
| `RemotePort == "22"` | - | 1 | - | - | **1** |
| `RemoteIP == "IP ADDRESS GOES HERE"`<br>`RemoteUrl endswith "DNS ENTRY GOES HERE"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName == "spoolsv.exe"`<br>`RemotePort == "3389"` | - | 1 | - | - | **1** |
| `ActionType == "ConnectionSuccess"`<br>`Protocol == "Tcp"`<br>`RemotePort == "3389"` | - | 1 | - | - | **1** |
| `RemoteIP == "63.141.233.82"`<br>`RemoteUrl in "fffun-video.biz,luckluck.blog"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "Action1"`<br>`InitiatingProcessVersionInfoProductName has "Action1"`<br>`RemoteUrl has "server.action1.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName has_any "go-agent"`<br>`RemoteUrl has_any "prod.addigy.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has_any "AeroAdmin"`<br>`InitiatingProcessVersionInfoProductName has_any "AeroAdmin"`<br>`RemoteUrl has "aeroadmin.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "ammyy"`<br>`InitiatingProcessVersionInfoProductName has "ammyy admin"`<br>`RemoteUrl has "ammyy.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoProductName has "AnyDesk"`<br>`RemoteUrl has_any "anydesk.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "AOMEI"`<br>`InitiatingProcessVersionInfoProductName has "AnyViewer"`<br>`RemoteUrl has_any "anyviewer.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "Atera Networks"`<br>`RemoteUrl has_any "atera.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "AweRay"`<br>`InitiatingProcessVersionInfoProductName has "AweSun"`<br>`RemoteUrl has_any "aweray.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has_any "Barracuda MSP"`<br>`RemoteUrl has_any "rmm.barracudamsp.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has_any "BeyondTrust"`<br>`RemoteUrl has_any "license.bomgar.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "Google"`<br>`InitiatingProcessVersionInfoProductName has "Chrome Remote Desktop"`<br>`RemoteUrl has "remotedesktop-pa.googleapis.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has_any "ConnectWise"`<br>`RemoteUrl has_any "myconnectwise.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has_any "DameWare"`<br>`InitiatingProcessVersionInfoFileDescription has "DameWare"`<br>`InitiatingProcessVersionInfoProductName has "DameWare"`<br>`RemoteUrl has_any "swi-rc.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has_any "CentraStage"`<br>`RemoteUrl has_any "rmm.datto.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "NCH Software"`<br>`InitiatingProcessVersionInfoProductName has "DesktopNow"`<br>`RemoteUrl has "nchuser.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "Distant Software"`<br>`InitiatingProcessVersionInfoProductName has "Distant Desktop"`<br>`RemoteUrl has_any "distantdesktop.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName startswith "fleetdeck"`<br>`InitiatingProcessVersionInfoCompanyName has "fleetdeck"`<br>`RemoteUrl has_any "fleetdeck.io"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "getscreen.me"`<br>`InitiatingProcessVersionInfoProductName has "getscreen.me"`<br>`RemoteUrl has_any "getscreen.me"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "Enter Srl"`<br>`InitiatingProcessVersionInfoProductName has "Iperius Remote"`<br>`RemoteUrl has_any "iperius"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has_any "Xlab"`<br>`RemoteUrl has "islonline.net"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "Kaseya"`<br>`InitiatingProcessVersionInfoProductName has "Kaseya"`<br>`RemoteUrl has_any "kaseya.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName has "level"`<br>`RemoteUrl has_any "agents.level.io"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoProductName has_any "ROMViewer"`<br>`RemoteUrl has_any "litemanager.ru"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has_any "LogMeIn"`<br>`RemoteUrl has_any "update-cdn.logmein.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "meshcentral"`<br>`RemoteUrl has "meshcentral.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "mRemoteNG"`<br>`RemoteUrl has "mremoteng.org"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has_any "CloudBerry"`<br>`RemoteUrl has_any "rm.mspbackups.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has_any "Remote Monitoring"`<br>`RemoteUrl has_any "remote.management"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has_any "naverisk"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "netsupport"`<br>`RemoteUrl has "netsupportsoftware.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has_any "NinjaRMM"`<br>`RemoteUrl has "ninjarmm.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "Bravura Software LLC"`<br>`RemoteUrl has_any "optitune.us"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "panorama9"`<br>`RemoteUrl has "panorama9.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "parsec"`<br>`RemoteUrl has_any "kessel-ws.parsec.app"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "pcvisit software ag"`<br>`RemoteUrl has_any "pcvisit.de"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoProductName has "PDQConnectAgent"`<br>`RemoteUrl has_any "app.pdq.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "MMSoft Design"`<br>`InitiatingProcessVersionInfoProductName has "Pulseway"`<br>`RemoteUrl has "pulseway.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "realvnc"`<br>`RemoteUrl has_any "update-check.realvnc.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "www.donkz.nl"`<br>`InitiatingProcessVersionInfoOriginalFileName has "rdp.exe"`<br>`InitiatingProcessVersionInfoProductName has "Remote Desktop Plus"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "idrive"`<br>`InitiatingProcessVersionInfoProductName has_any "remotepc"`<br>`RemoteUrl has "remotepc.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "Remote Utilities"`<br>`InitiatingProcessVersionInfoProductName has "Remote Utilities"`<br>`RemoteUrl has "remoteutilities.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "RealVNC"`<br>`InitiatingProcessVersionInfoProductName has "rport"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoProductName has "rustdesk"`<br>`RemoteUrl has "rustdesk.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "Projector Inc"`<br>`InitiatingProcessVersionInfoProductName has "ScreenMeet"`<br>`RemoteUrl has "screenmeet.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "Krämer IT Solutions GmbH"`<br>`InitiatingProcessVersionInfoProductName has_any "ServerEye"`<br>`RemoteUrl has "server-eye.de"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "ShowMyPC"`<br>`InitiatingProcessVersionInfoProductName has "ShowMyPC"`<br>`RemoteUrl has "showmypc.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "SimpleHelp"`<br>`InitiatingProcessVersionInfoProductName has "SimpleHelp"`<br>`RemoteUrl has "rmshelp.me"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "Splashtop"`<br>`RemoteUrl has_any "splashtop.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "NanoSystems"`<br>`RemoteUrl has_any "supremocontrol.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "Servably, Inc."`<br>`RemoteUrl has_any "syncromsp.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has_any "AmidaWare"`<br>`RemoteUrl has "tacticalrmm.io"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "TeamViewer"`<br>`RemoteUrl has_any "teamviewer.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "TigerVNC"`<br>`InitiatingProcessVersionInfoProductName has "TigerVNC"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "GlavSoft"`<br>`InitiatingProcessVersionInfoProductName has "TightVNC"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "DucFabulous"`<br>`InitiatingProcessVersionInfoProductName has "UltraViewer"`<br>`RemoteUrl has "ultraviewer.net"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "XMReality"`<br>`InitiatingProcessVersionInfoProductName has "XMReality"`<br>`RemoteUrl has "xmreality.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessVersionInfoCompanyName has "Zoho"`<br>`InitiatingProcessVersionInfoProductName has "Zoho Assist"`<br>`RemoteUrl has_any "assist.zoho.com"` | - | 1 | - | - | **1** |
| `InitiatingProcessCommandLine has ",GlobalOut"`<br>`InitiatingProcessFileName == "rundll32.exe"` | - | 1 | - | - | **1** |
| `RemoteUrl endswith ".tk"` | - | 1 | - | - | **1** |
| `InitiatingProcessFileName == "powershell.exe"` | - | 1 | - | - | **1** |
| `InitiatingProcessCommandLine endswith "(@($env:COMPUTERNAME,$env:USERNAME,(get-wmiobject Win32_ComputerSystemProduct).UUID,(random))-join"`<br>`InitiatingProcessFileName == "powershell.exe"` | - | 1 | - | - | **1** |
| `RemoteUrl has_any "trycloudflare"` | - | 1 | - | - | **1** |
| `InitiatingProcessCommandLine endswith "-OutFile tim.EXE"`<br>`InitiatingProcessFileName == "powershell.exe"` | - | 1 | - | - | **1** |
| **Total** | **0** | **112** | **1** | **0** | **113** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!has ConnectionFailed` | - | 6 | - | - | **6** |
| `ConnectionSuccess` | - | 5 | - | - | **5** |
| `ConnectionFailed` | - | 2 | 1 | - | **3** |
| `InboundConnectionAccepted` | - | 2 | - | - | **2** |
| `ExploitGuardNetworkProtectionBlocked` | - | 1 | - | - | **1** |
| `SmartScreenUrlWarning` | - | 1 | - | - | **1** |
| `FileCreated` | - | 1 | - | - | **1** |
| `FileModified` | - | 1 | - | - | **1** |
| `NetworkSignatureInspected` | - | 1 | - | - | **1** |
| `ConnectionFound` | - | 1 | - | - | **1** |
| `ConnectionRequest` | - | 1 | - | - | **1** |
| `ListeningConnectionCreated` | - | 1 | - | - | **1** |

### AdditionalFields

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains .jsp?cmd=` | - | 1 | - | - | **1** |

### InitiatingProcessAccountName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains Matt` | - | 1 | - | - | **1** |

### InitiatingProcessCommandLine

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `\` | - | 2 | - | - | **2** |
| `has rundll32.exe` | - | 2 | - | - | **2** |
| `has ,GlobalOut` | - | 1 | - | - | **1** |
| `endswith (@($env:COMPUTERNAME,$env:USERNAME,(get-wmiobject Win32_ComputerSystemProduct).UUID,(random))-join` | - | 1 | - | - | **1** |
| `endswith -OutFile tim.EXE` | - | 1 | - | - | **1** |

### InitiatingProcessFileName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `has curl` | - | 3 | - | - | **3** |
| `rundll32.exe` | - | 3 | - | - | **3** |
| `powershell.exe` | - | 3 | - | - | **3** |
| `InstallUtil.exe` | - | 2 | - | - | **2** |
| `RegAsm.exe` | - | 2 | - | - | **2** |
| `RegSvcs.exe` | - | 2 | - | - | **2** |
| `!= iexplore.exe` | - | 1 | - | - | **1** |
| `!= chrome.exe` | - | 1 | - | - | **1** |
| `!= opera.exe` | - | 1 | - | - | **1** |
| `!= safari.exe` | - | 1 | - | - | **1** |
| `meek-client.exe` | - | 1 | - | - | **1** |
| `tor.exe` | - | 1 | - | - | **1** |
| `contains azureus` | - | 1 | - | - | **1** |
| `has torrent` | - | 1 | - | - | **1** |
| `has vuze` | - | 1 | - | - | **1** |
| `chrome.exe` | - | 1 | - | - | **1** |
| `msedge.exe` | - | 1 | - | - | **1** |
| `cmd.exe` | - | 1 | - | - | **1** |
| `spoolsv.exe` | - | 1 | - | - | **1** |
| `has_any go-agent` | - | 1 | - | - | **1** |
| `startswith fleetdeck` | - | 1 | - | - | **1** |
| `has level` | - | 1 | - | - | **1** |

### InitiatingProcessId

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= 0` | - | 1 | - | - | **1** |
| `!= 4` | - | 1 | - | - | **1** |

### InitiatingProcessParentFileName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `endswith powershell.exe` | - | 1 | - | - | **1** |
| `endswith powershell_ise.exe` | - | 1 | - | - | **1** |
| `endswith pwsh.exe` | - | 1 | - | - | **1** |
| `endswith Powershell.exe` | - | 1 | - | - | **1** |
| `excel.exe` | - | 1 | - | - | **1** |

### InitiatingProcessVersionInfoCompanyName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `has Action1` | - | 1 | - | - | **1** |
| `has_any AeroAdmin` | - | 1 | - | - | **1** |
| `has ammyy` | - | 1 | - | - | **1** |
| `has AOMEI` | - | 1 | - | - | **1** |
| `has Atera Networks` | - | 1 | - | - | **1** |
| `has AweRay` | - | 1 | - | - | **1** |
| `has_any Barracuda MSP` | - | 1 | - | - | **1** |
| `has_any BeyondTrust` | - | 1 | - | - | **1** |
| `has Google` | - | 1 | - | - | **1** |
| `has_any ConnectWise` | - | 1 | - | - | **1** |
| `has_any DameWare` | - | 1 | - | - | **1** |
| `has_any CentraStage` | - | 1 | - | - | **1** |
| `has NCH Software` | - | 1 | - | - | **1** |
| `has Distant Software` | - | 1 | - | - | **1** |
| `has fleetdeck` | - | 1 | - | - | **1** |
| `has getscreen.me` | - | 1 | - | - | **1** |
| `has Enter Srl` | - | 1 | - | - | **1** |
| `has_any Xlab` | - | 1 | - | - | **1** |
| `has Kaseya` | - | 1 | - | - | **1** |
| `has_any LogMeIn` | - | 1 | - | - | **1** |
| `has meshcentral` | - | 1 | - | - | **1** |
| `has mRemoteNG` | - | 1 | - | - | **1** |
| `has_any CloudBerry` | - | 1 | - | - | **1** |
| `has_any Remote Monitoring` | - | 1 | - | - | **1** |
| `has_any naverisk` | - | 1 | - | - | **1** |
| `has netsupport` | - | 1 | - | - | **1** |
| `has_any NinjaRMM` | - | 1 | - | - | **1** |
| `has Bravura Software LLC` | - | 1 | - | - | **1** |
| `has panorama9` | - | 1 | - | - | **1** |
| `has parsec` | - | 1 | - | - | **1** |
| `has pcvisit software ag` | - | 1 | - | - | **1** |
| `has MMSoft Design` | - | 1 | - | - | **1** |
| `has realvnc` | - | 1 | - | - | **1** |
| `has www.donkz.nl` | - | 1 | - | - | **1** |
| `has idrive` | - | 1 | - | - | **1** |
| `has Remote Utilities` | - | 1 | - | - | **1** |
| `has RealVNC` | - | 1 | - | - | **1** |
| `has Projector Inc` | - | 1 | - | - | **1** |
| `has Krämer IT Solutions GmbH` | - | 1 | - | - | **1** |
| `has ShowMyPC` | - | 1 | - | - | **1** |
| `has SimpleHelp` | - | 1 | - | - | **1** |
| `has Splashtop` | - | 1 | - | - | **1** |
| `has NanoSystems` | - | 1 | - | - | **1** |
| `has Servably, Inc.` | - | 1 | - | - | **1** |
| `has_any AmidaWare` | - | 1 | - | - | **1** |
| `has TeamViewer` | - | 1 | - | - | **1** |
| `has TigerVNC` | - | 1 | - | - | **1** |
| `has GlavSoft` | - | 1 | - | - | **1** |
| `has DucFabulous` | - | 1 | - | - | **1** |
| `has XMReality` | - | 1 | - | - | **1** |
| `has Zoho` | - | 1 | - | - | **1** |

### InitiatingProcessVersionInfoFileDescription

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `has DameWare` | - | 1 | - | - | **1** |

### InitiatingProcessVersionInfoOriginalFileName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `has rdp.exe` | - | 1 | - | - | **1** |

### InitiatingProcessVersionInfoProductName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `has Action1` | - | 1 | - | - | **1** |
| `has_any AeroAdmin` | - | 1 | - | - | **1** |
| `has ammyy admin` | - | 1 | - | - | **1** |
| `has AnyDesk` | - | 1 | - | - | **1** |
| `has AnyViewer` | - | 1 | - | - | **1** |
| `has AweSun` | - | 1 | - | - | **1** |
| `has Chrome Remote Desktop` | - | 1 | - | - | **1** |
| `has DameWare` | - | 1 | - | - | **1** |
| `has DesktopNow` | - | 1 | - | - | **1** |
| `has Distant Desktop` | - | 1 | - | - | **1** |
| `has getscreen.me` | - | 1 | - | - | **1** |
| `has Iperius Remote` | - | 1 | - | - | **1** |
| `has Kaseya` | - | 1 | - | - | **1** |
| `has_any ROMViewer` | - | 1 | - | - | **1** |
| `has PDQConnectAgent` | - | 1 | - | - | **1** |
| `has Pulseway` | - | 1 | - | - | **1** |
| `has Remote Desktop Plus` | - | 1 | - | - | **1** |
| `has_any remotepc` | - | 1 | - | - | **1** |
| `has Remote Utilities` | - | 1 | - | - | **1** |
| `has rport` | - | 1 | - | - | **1** |
| `has rustdesk` | - | 1 | - | - | **1** |
| `has ScreenMeet` | - | 1 | - | - | **1** |
| `has_any ServerEye` | - | 1 | - | - | **1** |
| `has ShowMyPC` | - | 1 | - | - | **1** |
| `has SimpleHelp` | - | 1 | - | - | **1** |
| `has TigerVNC` | - | 1 | - | - | **1** |
| `has TightVNC` | - | 1 | - | - | **1** |
| `has UltraViewer` | - | 1 | - | - | **1** |
| `has XMReality` | - | 1 | - | - | **1** |
| `has Zoho Assist` | - | 1 | - | - | **1** |

### LocalPort

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `445` | - | 2 | - | - | **2** |

### Protocol

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Tcp` | - | 2 | - | - | **2** |

### RemoteIP

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `103.253.12.18` | - | 1 | - | - | **1** |
| `107.150.40.234` | - | 1 | - | - | **1** |
| `130.255.73.90` | - | 1 | - | - | **1** |
| `139.59.208.246` | - | 1 | - | - | **1** |
| `142.0.68.13` | - | 1 | - | - | **1** |
| `144.76.133.38` | - | 1 | - | - | **1** |
| `162.211.64.20` | - | 1 | - | - | **1** |
| `169.239.202.202` | - | 1 | - | - | **1** |
| `185.121.177.177` | - | 1 | - | - | **1** |
| `185.121.177.53` | - | 1 | - | - | **1** |
| `185.97.7.7` | - | 1 | - | - | **1** |
| `193.183.98.154` | - | 1 | - | - | **1** |
| `217.12.210.54` | - | 1 | - | - | **1** |
| `31.3.135.232` | - | 1 | - | - | **1** |
| `5.135.183.146` | - | 1 | - | - | **1** |
| `51.255.167.0` | - | 1 | - | - | **1** |
| `52.174.55.168` | - | 1 | - | - | **1** |
| `62.112.8.85` | - | 1 | - | - | **1** |
| `62.113.203.55` | - | 1 | - | - | **1** |
| `69.164.196.21` | - | 1 | - | - | **1** |
| `87.98.175.85` | - | 1 | - | - | **1** |
| `89.18.27.34` | - | 1 | - | - | **1** |
| `91.121.155.13` | - | 1 | - | - | **1** |
| `141.105.71.116` | - | 1 | - | - | **1** |
| `startswith 172.16` | - | 1 | - | - | **1** |
| `startswith 192.168` | - | 1 | - | - | **1** |
| `IP ADDRESS GOES HERE` | - | 1 | - | - | **1** |
| `63.141.233.82` | - | 1 | - | - | **1** |

### RemoteIPType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Public` | - | 6 | - | - | **6** |
| `!= Loopback` | - | 1 | - | - | **1** |

### RemotePort

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `443` | - | 2 | - | - | **2** |
| `3389` | - | 2 | - | - | **2** |
| `53` | - | 1 | - | - | **1** |
| `80` | - | 1 | - | - | **1** |
| `445` | - | 1 | - | - | **1** |
| `22` | - | 1 | - | - | **1** |

### RemoteUrl

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `pandorasong.com` | - | 1 | - | - | **1** |
| `C2 Indicators for OceanLotus Activities 2019` | - | 1 | - | - | **1** |
| `Malicious URL Indicators for OceanLotus Activities 2019` | - | 1 | - | - | **1** |
| `cortanasyn.com` | - | 1 | - | - | **1** |
| `cortanazone.com` | - | 1 | - | - | **1** |
| `load.newappssystems.com` | - | 1 | - | - | **1** |
| `open.betaoffice.net` | - | 1 | - | - | **1** |
| `outlook.updateoffices.net` | - | 1 | - | - | **1** |
| `ristineho.com` | - | 1 | - | - | **1** |
| `syn.servebbs.com` | - | 1 | - | - | **1** |
| `asin8988.ddns.net` | - | 1 | - | - | **1** |
| `asin8989.ddns.net` | - | 1 | - | - | **1** |
| `asin8990.ddns.net` | - | 1 | - | - | **1** |
| `h0pe1759.ddns.net` | - | 1 | - | - | **1** |
| `kexa600200.ddns.net` | - | 1 | - | - | **1** |
| `kimjoy.ddns.net` | - | 1 | - | - | **1** |
| `kimjoy007.dyndns.org` | - | 1 | - | - | **1** |
| `mail.alamdarhardware.com` | - | 1 | - | - | **1** |
| `n0ahark2021.ddns.net` | - | 1 | - | - | **1** |
| `asushotfix.com` | - | 1 | - | - | **1** |
| `contains .` | - | 1 | - | - | **1** |
| `endswith .tor` | - | 1 | - | - | **1** |
| `has azureus` | - | 1 | - | - | **1** |
| `has torrent` | - | 1 | - | - | **1** |
| `has vuze` | - | 1 | - | - | **1** |
| `contains facebook` | - | 1 | - | - | **1** |
| `endswith .kr` | - | 1 | - | - | **1** |
| `endswith DNS ENTRY GOES HERE` | - | 1 | - | - | **1** |
| `fffun-video.biz` | - | 1 | - | - | **1** |
| `luckluck.blog` | - | 1 | - | - | **1** |
| `has server.action1.com` | - | 1 | - | - | **1** |
| `has_any prod.addigy.com` | - | 1 | - | - | **1** |
| `has aeroadmin.com` | - | 1 | - | - | **1** |
| `has ammyy.com` | - | 1 | - | - | **1** |
| `has_any anydesk.com` | - | 1 | - | - | **1** |
| `has_any anyviewer.com` | - | 1 | - | - | **1** |
| `has_any atera.com` | - | 1 | - | - | **1** |
| `has_any aweray.com` | - | 1 | - | - | **1** |
| `has_any rmm.barracudamsp.com` | - | 1 | - | - | **1** |
| `has_any license.bomgar.com` | - | 1 | - | - | **1** |
| `has remotedesktop-pa.googleapis.com` | - | 1 | - | - | **1** |
| `has_any myconnectwise.com` | - | 1 | - | - | **1** |
| `has_any swi-rc.com` | - | 1 | - | - | **1** |
| `has_any rmm.datto.com` | - | 1 | - | - | **1** |
| `has nchuser.com` | - | 1 | - | - | **1** |
| `has_any distantdesktop.com` | - | 1 | - | - | **1** |
| `has_any fleetdeck.io` | - | 1 | - | - | **1** |
| `has_any getscreen.me` | - | 1 | - | - | **1** |
| `has_any iperius` | - | 1 | - | - | **1** |
| `has islonline.net` | - | 1 | - | - | **1** |
| `has_any kaseya.com` | - | 1 | - | - | **1** |
| `has_any agents.level.io` | - | 1 | - | - | **1** |
| `has_any litemanager.ru` | - | 1 | - | - | **1** |
| `has_any update-cdn.logmein.com` | - | 1 | - | - | **1** |
| `has meshcentral.com` | - | 1 | - | - | **1** |
| `has mremoteng.org` | - | 1 | - | - | **1** |
| `has_any rm.mspbackups.com` | - | 1 | - | - | **1** |
| `has_any remote.management` | - | 1 | - | - | **1** |
| `has netsupportsoftware.com` | - | 1 | - | - | **1** |
| `has ninjarmm.com` | - | 1 | - | - | **1** |
| `has_any optitune.us` | - | 1 | - | - | **1** |
| `has panorama9.com` | - | 1 | - | - | **1** |
| `has_any kessel-ws.parsec.app` | - | 1 | - | - | **1** |
| `has_any pcvisit.de` | - | 1 | - | - | **1** |
| `has_any app.pdq.com` | - | 1 | - | - | **1** |
| `has pulseway.com` | - | 1 | - | - | **1** |
| `has_any update-check.realvnc.com` | - | 1 | - | - | **1** |
| `has remotepc.com` | - | 1 | - | - | **1** |
| `has remoteutilities.com` | - | 1 | - | - | **1** |
| `has rustdesk.com` | - | 1 | - | - | **1** |
| `has screenmeet.com` | - | 1 | - | - | **1** |
| `has server-eye.de` | - | 1 | - | - | **1** |
| `has showmypc.com` | - | 1 | - | - | **1** |
| `has rmshelp.me` | - | 1 | - | - | **1** |
| `has_any splashtop.com` | - | 1 | - | - | **1** |
| `has_any supremocontrol.com` | - | 1 | - | - | **1** |
| `has_any syncromsp.com` | - | 1 | - | - | **1** |
| `has tacticalrmm.io` | - | 1 | - | - | **1** |
| `has_any teamviewer.com` | - | 1 | - | - | **1** |
| `has ultraviewer.net` | - | 1 | - | - | **1** |
| `has xmreality.com` | - | 1 | - | - | **1** |
| `has_any assist.zoho.com` | - | 1 | - | - | **1** |
| `endswith .tk` | - | 1 | - | - | **1** |
| `has_any trycloudflare` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

