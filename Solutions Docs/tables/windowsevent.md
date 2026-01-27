# WindowsEvent

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for WindowsEvent table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Windows |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/windowsevent) |

## Solutions (11)

This table is used by the following solutions:

- [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Windows Forwarded Events](../solutions/windows-forwarded-events.md)
- [Windows Security Events](../solutions/windows-security-events.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Windows Forwarded Events](../connectors/windowsforwardedevents.md) |  |

---

## Content Items Using This Table (55)

### Analytic Rules (39)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Powershell Empire Cmdlets Executed in Command Line](../content/attacker-tools-threat-protection-essentials-powershell-empire-cmdlets-executed-in-command-line-ef88eb96-861c-43a0-ab16-f3835a97c928-001fa98c.md) |  |

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Base64 encoded Windows process command-lines](../content/endpoint-threat-protection-essentials-base64-encoded-windows-process-command-lines-ca67c83e-7fff-4127-a3e3-1af66d6d4cad-01f53023.md) |  |
| [Malware in the recycle bin](../content/endpoint-threat-protection-essentials-malware-in-the-recycle-bin-75bf9902-0789-47c1-a5d8-f57046aa72df-2b92e7a9.md) |  |
| [Process executed from binary hidden in Base64 encoded file](../content/endpoint-threat-protection-essentials-process-executed-from-binary-hidden-in-base64-encoded-file-d6190dde-8fd2-456a-ac5b-0a32400b0464-f2c6e93c.md) |  |
| [Security Event log cleared](../content/endpoint-threat-protection-essentials-security-event-log-cleared-80da0a8f-cfe1-4cd0-a895-8bc1771a720e-2f5b4cb9.md) | `EventID == "1102"`<br>`Provider == "Microsoft-Windows-Eventlog"` |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress in WindowsEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-windowsevents-4776281c-6c49-46ac-8444-4dd8ba2f4565-915cc28f.md) |  |

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Network endpoint to host executable correlation](../content/network-threat-protection-essentials-network-endpoint-to-host-executable-correlation-01f64465-b1ef-41ea-a7f5-31553a11ad43-f4ed06da.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI map Email entity to SecurityEvent](../content/threat-intelligence-ti-map-email-entity-to-securityevent-2fc5d810-c9cc-491a-b564-841427ae0e50-9cb621b7.md) |  |
| [TI map File Hash to Security Event](../content/threat-intelligence-ti-map-file-hash-to-security-event-a7427ed7-04b4-4e3b-b323-08b981b9b4bf-a0646697.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI map Email entity to SecurityEvent](../content/threat-intelligence-new-ti-map-email-entity-to-securityevent-0a59051d-aed4-4fb6-bf84-bc80534482b2-60b9192e.md) |  |
| [TI map File Hash to Security Event](../content/threat-intelligence-new-ti-map-file-hash-to-security-event-9f7dc779-1e51-4925-ae4a-db1db933077f-d8ffe445.md) |  |

**In solution [Windows Forwarded Events](../solutions/windows-forwarded-events.md):** `EventID == "4688"`

| Content Item |
|:-------------|
| [Caramel Tsunami Actor IOC - July 2021](../content/windows-forwarded-events-caramel-tsunami-actor-ioc-july-2021-066395ac-ef91-4993-8bf6-25c61ab0ca5a-e6c825f2.md) |
| [Chia_Crypto_Mining IOC - June 2021](../content/windows-forwarded-events-chia-crypto-mining-ioc-june-2021-4d173248-439b-4741-8b37-f63ad0c896ae-e48dccbd.md) |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AD account with Don't Expire Password](../content/standalone-content-ad-account-with-don't-expire-password-6c360107-f3ee-4b91-9f43-f4cfd90441cf-b63ef58d.md) | `EventID == "4738"` |
| [ADFS DKM Master Key Export](../content/standalone-content-adfs-dkm-master-key-export-18e6a87e-9d06-4a4e-8b59-3469cd49552d-b85786be.md) |  |
| [Account added and removed from privileged groups](../content/standalone-content-account-added-and-removed-from-privileged-groups-7efc75ce-e2a4-400f-a8b1-283d3b0f2c60-50f0398b.md) |  |
| [Email access via active sync](../content/standalone-content-email-access-via-active-sync-2f561e20-d97b-4b13-b02d-18b34af6e87c-db926024.md) |  |
| [Failed AzureAD logons but success logon to host](../content/standalone-content-failed-azuread-logons-but-success-logon-to-host-8ee967a2-a645-4832-85f4-72b635bcb3a6-d05c051f.md) |  |
| [Failed host logons but success logon to AzureAD](../content/standalone-content-failed-host-logons-but-success-logon-to-azuread-1ce5e766-26ab-4616-b7c8-3b33ae321e80-db4ff93a.md) | `EventID == "4625"` |
| [Failed logon attempts by valid accounts within 10 mins](../content/standalone-content-failed-logon-attempts-by-valid-accounts-within-10-mins-0777f138-e5d8-4eab-bec1-e11ddfbc2be2-127ed234.md) |  |
| [Gain Code Execution on ADFS Server via Remote WMI Execution](../content/standalone-content-gain-code-execution-on-adfs-server-via-remote-wmi-execution-0bd65651-1404-438b-8f63-eecddcec87b4-d7675a11.md) | `EventID in "1,19,20,21,4624,4688"` |
| [Group created then added to built in domain local or global group](../content/standalone-content-group-created-then-added-to-built-in-domain-local-or-global-group-a7564d76-ec6b-4519-a66b-fcc80c42332b-1a2e6754.md) | `EventID in "4727,4728,4731,4732,4754,4756"` |
| [Microsoft Entra ID Health Monitoring Agent Registry Keys Access](../content/standalone-content-microsoft-entra-id-health-monitoring-agent-registry-keys-access-f819c592-c5f9-4d5c-a79f-1e6819863533-9af33463.md) | `EventID in "4656,4663"` |
| [Microsoft Entra ID Health Service Agents Registry Keys Access](../content/standalone-content-microsoft-entra-id-health-service-agents-registry-keys-access-06bbf969-fcbe-43fa-bac2-b2fa131d113a-b4251aca.md) |  |
| [Midnight Blizzard - Script payload stored in Registry](../content/standalone-content-midnight-blizzard-script-payload-stored-in-registry-00cb180c-08a8-4e55-a276-63fb1442d5b5-7c2a822d.md) |  |
| [Midnight Blizzard - suspicious rundll32.exe execution of vbscript](../content/standalone-content-midnight-blizzard-suspicious-rundll32.exe-execution-of-vbscript-d82e1987-4356-4a7b-bc5e-064f29b143c0-e1d64a0c.md) |  |
| [Multiple Password Reset by user](../content/standalone-content-multiple-password-reset-by-user-0b9ae89d-8cad-461c-808f-0494f70ad5c4-910658bf.md) | `EventID in "4723,4724"` |
| [Multiple RDP connections from Single System](../content/standalone-content-multiple-rdp-connections-from-single-system-78422ef2-62bf-48ca-9bab-72c69818a425-6fdca3be.md) |  |
| [New user created and added to the built-in administrators group](../content/standalone-content-new-user-created-and-added-to-the-built-in-administrators-group-aa1eff90-29d4-49dc-a3ea-b65199f516db-5300f307.md) |  |
| [Potential Build Process Compromise](../content/standalone-content-potential-build-process-compromise-5ef06767-b37c-4818-b035-47de950d0046-3d9f2492.md) | `EventID in "4663,4688"` |
| [Potential Kerberoasting](../content/standalone-content-potential-kerberoasting-1572e66b-20a7-4012-9ec4-77ec4b101bc8-6d60a025.md) | `EventID == "4769"` |
| [RDP Nesting](../content/standalone-content-rdp-nesting-69a45b05-71f5-45ca-8944-2e038747fb39-c48bfa3a.md) | `EventID == "4624"` |
| [Rare RDP Connections](../content/standalone-content-rare-rdp-connections-45b903c5-6f56-4969-af10-ae62ac709718-9368c501.md) |  |
| [Security Service Registry ACL Modification](../content/standalone-content-security-service-registry-acl-modification-473d57e6-f787-435c-a16b-b38b51fa9a4b-e336a7bc.md) | `EventID in "4670,4688"` |
| [Silk Typhoon New UM Service Child Process](../content/standalone-content-silk-typhoon-new-um-service-child-process-95a15f39-d9cc-4667-8cdd-58f3113691c9-5ebb271f.md) | `EventID == "4688"` |
| [Solorigate Named Pipe](../content/standalone-content-solorigate-named-pipe-11b4c19d-2a79-4da3-af38-b067e1273dee-7c9da0a1.md) | `EventID in "17,18,5145"` |
| [User account added to built in domain local or global group](../content/standalone-content-user-account-added-to-built-in-domain-local-or-global-group-a35f2c18-1b97-458f-ad26-e033af18eb99-fb766415.md) | `EventID in "4728,4732,4756"` |
| [User account created and deleted within 10 mins](../content/standalone-content-user-account-created-and-deleted-within-10-mins-4b93c5af-d20b-4236-b696-a28b8c51407f-630c51ec.md) | `EventID in "4720,4726"` |
| [User account enabled and disabled within 10 mins](../content/standalone-content-user-account-enabled-and-disabled-within-10-mins-3d023f64-8225-41a2-9570-2bd7c2c4535e-4f6dcffb.md) | `EventID in "4722,4725"` |

### Hunting Queries (13)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Potential Impacket Execution](../content/attacker-tools-threat-protection-essentials-potential-impacket-execution-24ae555c-5e33-4b5d-827a-44206e39f6b4-04d0f42f.md) |  |

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Backup Deletion](../content/endpoint-threat-protection-essentials-backup-deletion-56ebae61-89cf-42d9-99f4-3dff8ba33885-e1c87558.md) |  |
| [Persisting via IFEO Registry Key](../content/endpoint-threat-protection-essentials-persisting-via-ifeo-registry-key-f82c89fa-c969-4d12-832f-04d55d14522c-6020db66.md) | `EventID in "12,13,4657"` |
| [Potential Microsoft Security Services Tampering](../content/endpoint-threat-protection-essentials-potential-microsoft-security-services-tampering-e10e1d2f-265d-4d90-9037-7f3a6ed8a91e-8c1dc76e.md) | `EventID in "4688,87"` |

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dev-0056 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0056-command-line-activity-november-2021-e2629949-2043-4421-8064-bca23c8491dd-1cdb73c2.md) |  |
| [Known Nylon Typhoon Registry modifications patterns](../content/legacy-ioc-based-threat-protection-known-nylon-typhoon-registry-modifications-patterns-f090f8f4a-b986-42d2-b536-e0795c723e25-f442d105.md) | `EventID in "12,13,4657"` |
| [Nylon Typhoon Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-nylon-typhoon-command-line-activity-november-2021-bb30abbc-9af6-4a37-9536-e9207e023989-bdd1efea.md) |  |
| [SolarWinds Inventory](../content/legacy-ioc-based-threat-protection-solarwinds-inventory-278592b5-612b-48a4-bb38-4c01ff8ee2a5-c7f23741.md) | `EventID in "1,4688"` |

**In solution [Windows Security Events](../solutions/windows-security-events.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Domain controller installation media creation](../content/windows-security-events-domain-controller-installation-media-creation-7e5f3a9a-542c-417a-a429-4ed500c5c4d8-fec25b2e.md) |  |
| [Establishing internal proxies](../content/windows-security-events-establishing-internal-proxies-ce38c16c-a560-46c0-88d6-7757b88f08e9-e3cde3e0.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Tracking Password Changes](../content/standalone-content-tracking-password-changes-bac44fe4-c0bc-4e90-aa48-2e346fda803f-28bae834.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Critical user management operations followed by disabling of System Restore from admin account](../content/github-only-critical-user-management-operations-followed-by-disabling-of-system-restore-from-admin-accou-dcc15282-2bcb-496e-84db-3c90d0dc0a0c-dedc200e.md) | `EventID == "4688"` |
| [Possible command injection attempts against Azure Integration Runtimes](../content/github-only-possible-command-injection-attempts-against-azure-integration-runtimes-2d1a3e86-f1a0-49d0-b88a-55789e1d6660-cb9d3e64.md) |  |

### Workbooks (3)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AMAmigrationTracker](../content/github-only-amamigrationtracker-7a7462f4.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |

## Parsers Using This Table (12)

### ASIM Parsers (12)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuditEventMicrosoftWindowsEvents](../asim/asimauditeventmicrosoftwindowsevents.md) | AuditEvent | Microsoft Windows | `Provider == "Microsoft-Windows-Eventlog"` |
| [ASimDnsMicrosoftSysmonWindowsEvent](../asim/asimdnsmicrosoftsysmonwindowsevent.md) | Dns | Microsoft Windows Events Sysmon | `EventID == "22"`<br>`Provider == "Microsoft-Windows-Sysmon"` |
| [ASimFileEventMicrosoftSysmonWindowsEvent](../asim/asimfileeventmicrosoftsysmonwindowsevent.md) | FileEvent | Windows Sysmon | `EventID in "11,23,26"`<br>`Provider == "Microsoft-Windows-Sysmon"` |
| [ASimFileEventMicrosoftWindowsEvents](../asim/asimfileeventmicrosoftwindowsevents.md) | FileEvent | Microsoft Windows Events | `EventID == "4663"` |
| [ASimNetworkSessionMicrosoftSysmonWindowsEvent](../asim/asimnetworksessionmicrosoftsysmonwindowsevent.md) | NetworkSession | Windows Sysmon | `EventID == "3"`<br>`Provider == "Microsoft-Windows-Sysmon"` |
| [ASimNetworkSessionMicrosoftWindowsEventFirewall](../asim/asimnetworksessionmicrosoftwindowseventfirewall.md) | NetworkSession | Windows Firewall | `EventID in "5154,5155,5156,5158,5159"` |
| [ASimProcessCreateMicrosoftWindowsEvents](../asim/asimprocesscreatemicrosoftwindowsevents.md) | ProcessEvent | Security Events | `EventID == "4688"` |
| [ASimProcessEventCreateMicrosoftSysmonWindowsEvent](../asim/asimprocesseventcreatemicrosoftsysmonwindowsevent.md) | ProcessEvent | Sysmon | `EventID == "1"`<br>`Provider == "Microsoft-Windows-Sysmon"` |
| [ASimProcessEventTerminateMicrosoftSysmonWindowsEvent](../asim/asimprocesseventterminatemicrosoftsysmonwindowsevent.md) | ProcessEvent | Microsoft Windows Events Sysmon | `EventID == "5"`<br>`Provider == "Microsoft-Windows-Sysmon"` |
| [ASimProcessTerminateMicrosoftWindowsEvents](../asim/asimprocessterminatemicrosoftwindowsevents.md) | ProcessEvent | Security Events | `EventID == "4689"` |
| [ASimRegistryEventMicrosoftSysmonWindowsEvent](../asim/asimregistryeventmicrosoftsysmonwindowsevent.md) | RegistryEvent | Microsoft Sysmon | `EventID in "12,13,14"`<br>`Provider == "Microsoft-Windows-Sysmon"` |
| [ASimUserManagementMicrosoftWindowsEvent](../asim/asimusermanagementmicrosoftwindowsevent.md) | UserManagement | Microsoft Windows Event |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/securityinsights`

## Selection Criteria Summary (29 criteria, 34 total references)

References by type: 0 connectors, 23 content items, 11 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `EventID == "4688"` | - | 4 | 1 | - | **5** |
| `EventID in "12,13,4657"` | - | 2 | - | - | **2** |
| `EventID == "1102"`<br>`Provider == "Microsoft-Windows-Eventlog"` | - | 1 | - | - | **1** |
| `EventID in "1,19,20,21,4624,4688"` | - | 1 | - | - | **1** |
| `EventID == "4625"` | - | 1 | - | - | **1** |
| `EventID in "4723,4724"` | - | 1 | - | - | **1** |
| `EventID in "4670,4688"` | - | 1 | - | - | **1** |
| `EventID in "4656,4663"` | - | 1 | - | - | **1** |
| `EventID in "4727,4728,4731,4732,4754,4756"` | - | 1 | - | - | **1** |
| `EventID == "4738"` | - | 1 | - | - | **1** |
| `EventID in "4663,4688"` | - | 1 | - | - | **1** |
| `EventID == "4769"` | - | 1 | - | - | **1** |
| `EventID == "4624"` | - | 1 | - | - | **1** |
| `EventID in "17,18,5145"` | - | 1 | - | - | **1** |
| `EventID in "4728,4732,4756"` | - | 1 | - | - | **1** |
| `EventID in "4720,4726"` | - | 1 | - | - | **1** |
| `EventID in "4722,4725"` | - | 1 | - | - | **1** |
| `EventID in "4688,87"` | - | 1 | - | - | **1** |
| `EventID in "1,4688"` | - | 1 | - | - | **1** |
| `Provider == "Microsoft-Windows-Eventlog"` | - | - | 1 | - | **1** |
| `EventID == "22"`<br>`Provider == "Microsoft-Windows-Sysmon"` | - | - | 1 | - | **1** |
| `EventID in "11,23,26"`<br>`Provider == "Microsoft-Windows-Sysmon"` | - | - | 1 | - | **1** |
| `EventID == "4663"` | - | - | 1 | - | **1** |
| `EventID == "3"`<br>`Provider == "Microsoft-Windows-Sysmon"` | - | - | 1 | - | **1** |
| `EventID in "5154,5155,5156,5158,5159"` | - | - | 1 | - | **1** |
| `EventID == "1"`<br>`Provider == "Microsoft-Windows-Sysmon"` | - | - | 1 | - | **1** |
| `EventID == "5"`<br>`Provider == "Microsoft-Windows-Sysmon"` | - | - | 1 | - | **1** |
| `EventID == "4689"` | - | - | 1 | - | **1** |
| `EventID in "12,13,14"`<br>`Provider == "Microsoft-Windows-Sysmon"` | - | - | 1 | - | **1** |
| **Total** | **0** | **23** | **11** | **0** | **34** |

### EventID

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `4688` | - | 9 | 1 | - | **10** |
| `1` | - | 2 | 1 | - | **3** |
| `4663` | - | 2 | 1 | - | **3** |
| `12` | - | 2 | 1 | - | **3** |
| `13` | - | 2 | 1 | - | **3** |
| `4624` | - | 2 | - | - | **2** |
| `4728` | - | 2 | - | - | **2** |
| `4732` | - | 2 | - | - | **2** |
| `4756` | - | 2 | - | - | **2** |
| `4657` | - | 2 | - | - | **2** |
| `1102` | - | 1 | - | - | **1** |
| `19` | - | 1 | - | - | **1** |
| `20` | - | 1 | - | - | **1** |
| `21` | - | 1 | - | - | **1** |
| `4625` | - | 1 | - | - | **1** |
| `4723` | - | 1 | - | - | **1** |
| `4724` | - | 1 | - | - | **1** |
| `4670` | - | 1 | - | - | **1** |
| `4656` | - | 1 | - | - | **1** |
| `4727` | - | 1 | - | - | **1** |
| `4731` | - | 1 | - | - | **1** |
| `4754` | - | 1 | - | - | **1** |
| `4738` | - | 1 | - | - | **1** |
| `4769` | - | 1 | - | - | **1** |
| `17` | - | 1 | - | - | **1** |
| `18` | - | 1 | - | - | **1** |
| `5145` | - | 1 | - | - | **1** |
| `4720` | - | 1 | - | - | **1** |
| `4726` | - | 1 | - | - | **1** |
| `4722` | - | 1 | - | - | **1** |
| `4725` | - | 1 | - | - | **1** |
| `87` | - | 1 | - | - | **1** |
| `22` | - | - | 1 | - | **1** |
| `11` | - | - | 1 | - | **1** |
| `23` | - | - | 1 | - | **1** |
| `26` | - | - | 1 | - | **1** |
| `3` | - | - | 1 | - | **1** |
| `5154` | - | - | 1 | - | **1** |
| `5155` | - | - | 1 | - | **1** |
| `5156` | - | - | 1 | - | **1** |
| `5158` | - | - | 1 | - | **1** |
| `5159` | - | - | 1 | - | **1** |
| `5` | - | - | 1 | - | **1** |
| `4689` | - | - | 1 | - | **1** |
| `14` | - | - | 1 | - | **1** |

### Provider

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Microsoft-Windows-Sysmon` | - | - | 6 | - | **6** |
| `Microsoft-Windows-Eventlog` | - | 1 | 1 | - | **2** |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

