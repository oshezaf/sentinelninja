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

## Solutions (10)

This table is used by the following solutions:

- [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Windows Forwarded Events](../solutions/windows-forwarded-events.md)
- [Windows Security Events](../solutions/windows-security-events.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Windows Forwarded Events](../connectors/windowsforwardedevents.md)

---

## Content Items Using This Table (52)

### Analytic Rules (36)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**
- [Powershell Empire Cmdlets Executed in Command Line](../content/attacker-tools-threat-protection-essentials-powershell-empire-cmdlets-executed-in-command-line-ef88eb96-861c-43a0-ab16-f3835a97c928-001fa98c.md)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Base64 encoded Windows process command-lines](../content/endpoint-threat-protection-essentials-base64-encoded-windows-process-command-lines-ca67c83e-7fff-4127-a3e3-1af66d6d4cad-01f53023.md)
- [Malware in the recycle bin](../content/endpoint-threat-protection-essentials-malware-in-the-recycle-bin-75bf9902-0789-47c1-a5d8-f57046aa72df-2b92e7a9.md)
- [Process executed from binary hidden in Base64 encoded file](../content/endpoint-threat-protection-essentials-process-executed-from-binary-hidden-in-base64-encoded-file-d6190dde-8fd2-456a-ac5b-0a32400b0464-f2c6e93c.md)
- [Security Event log cleared](../content/endpoint-threat-protection-essentials-security-event-log-cleared-80da0a8f-cfe1-4cd0-a895-8bc1771a720e-2f5b4cb9.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI IPAddress in WindowsEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-windowsevents-4776281c-6c49-46ac-8444-4dd8ba2f4565-915cc28f.md)

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**
- [Network endpoint to host executable correlation](../content/network-threat-protection-essentials-network-endpoint-to-host-executable-correlation-01f64465-b1ef-41ea-a7f5-31553a11ad43-f4ed06da.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [AD account with Don't Expire Password](../content/standalone-content-ad-account-with-don't-expire-password-6c360107-f3ee-4b91-9f43-f4cfd90441cf-b63ef58d.md)
- [ADFS DKM Master Key Export](../content/standalone-content-adfs-dkm-master-key-export-18e6a87e-9d06-4a4e-8b59-3469cd49552d-b85786be.md)
- [Account added and removed from privileged groups](../content/standalone-content-account-added-and-removed-from-privileged-groups-7efc75ce-e2a4-400f-a8b1-283d3b0f2c60-50f0398b.md)
- [Email access via active sync](../content/standalone-content-email-access-via-active-sync-2f561e20-d97b-4b13-b02d-18b34af6e87c-db926024.md)
- [Failed AzureAD logons but success logon to host](../content/standalone-content-failed-azuread-logons-but-success-logon-to-host-8ee967a2-a645-4832-85f4-72b635bcb3a6-d05c051f.md)
- [Failed host logons but success logon to AzureAD](../content/standalone-content-failed-host-logons-but-success-logon-to-azuread-1ce5e766-26ab-4616-b7c8-3b33ae321e80-db4ff93a.md)
- [Failed logon attempts by valid accounts within 10 mins](../content/standalone-content-failed-logon-attempts-by-valid-accounts-within-10-mins-0777f138-e5d8-4eab-bec1-e11ddfbc2be2-127ed234.md)
- [Gain Code Execution on ADFS Server via Remote WMI Execution](../content/standalone-content-gain-code-execution-on-adfs-server-via-remote-wmi-execution-0bd65651-1404-438b-8f63-eecddcec87b4-d7675a11.md)
- [Group created then added to built in domain local or global group](../content/standalone-content-group-created-then-added-to-built-in-domain-local-or-global-group-a7564d76-ec6b-4519-a66b-fcc80c42332b-1a2e6754.md)
- [Microsoft Entra ID Health Monitoring Agent Registry Keys Access](../content/standalone-content-microsoft-entra-id-health-monitoring-agent-registry-keys-access-f819c592-c5f9-4d5c-a79f-1e6819863533-9af33463.md)
- [Microsoft Entra ID Health Service Agents Registry Keys Access](../content/standalone-content-microsoft-entra-id-health-service-agents-registry-keys-access-06bbf969-fcbe-43fa-bac2-b2fa131d113a-b4251aca.md)
- [Midnight Blizzard - Script payload stored in Registry](../content/standalone-content-midnight-blizzard-script-payload-stored-in-registry-00cb180c-08a8-4e55-a276-63fb1442d5b5-7c2a822d.md)
- [Midnight Blizzard - suspicious rundll32.exe execution of vbscript](../content/standalone-content-midnight-blizzard-suspicious-rundll32.exe-execution-of-vbscript-d82e1987-4356-4a7b-bc5e-064f29b143c0-e1d64a0c.md)
- [Multiple Password Reset by user](../content/standalone-content-multiple-password-reset-by-user-0b9ae89d-8cad-461c-808f-0494f70ad5c4-910658bf.md)
- [Multiple RDP connections from Single System](../content/standalone-content-multiple-rdp-connections-from-single-system-78422ef2-62bf-48ca-9bab-72c69818a425-6fdca3be.md)
- [New user created and added to the built-in administrators group](../content/standalone-content-new-user-created-and-added-to-the-built-in-administrators-group-aa1eff90-29d4-49dc-a3ea-b65199f516db-5300f307.md)
- [Potential Build Process Compromise](../content/standalone-content-potential-build-process-compromise-5ef06767-b37c-4818-b035-47de950d0046-3d9f2492.md)
- [Potential Kerberoasting](../content/standalone-content-potential-kerberoasting-1572e66b-20a7-4012-9ec4-77ec4b101bc8-6d60a025.md)
- [RDP Nesting](../content/standalone-content-rdp-nesting-69a45b05-71f5-45ca-8944-2e038747fb39-c48bfa3a.md)
- [Rare RDP Connections](../content/standalone-content-rare-rdp-connections-45b903c5-6f56-4969-af10-ae62ac709718-9368c501.md)
- [Security Service Registry ACL Modification](../content/standalone-content-security-service-registry-acl-modification-473d57e6-f787-435c-a16b-b38b51fa9a4b-e336a7bc.md)
- [Silk Typhoon New UM Service Child Process](../content/standalone-content-silk-typhoon-new-um-service-child-process-95a15f39-d9cc-4667-8cdd-58f3113691c9-5ebb271f.md)
- [User account added to built in domain local or global group](../content/standalone-content-user-account-added-to-built-in-domain-local-or-global-group-a35f2c18-1b97-458f-ad26-e033af18eb99-fb766415.md)
- [User account created and deleted within 10 mins](../content/standalone-content-user-account-created-and-deleted-within-10-mins-4b93c5af-d20b-4236-b696-a28b8c51407f-630c51ec.md)
- [User account enabled and disabled within 10 mins](../content/standalone-content-user-account-enabled-and-disabled-within-10-mins-3d023f64-8225-41a2-9570-2bd7c2c4535e-4f6dcffb.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map Email entity to SecurityEvent](../content/threat-intelligence-ti-map-email-entity-to-securityevent-2fc5d810-c9cc-491a-b564-841427ae0e50-9cb621b7.md)
- [TI map File Hash to Security Event](../content/threat-intelligence-ti-map-file-hash-to-security-event-a7427ed7-04b4-4e3b-b323-08b981b9b4bf-a0646697.md)

**In solution [Windows Forwarded Events](../solutions/windows-forwarded-events.md):**
- [Caramel Tsunami Actor IOC - July 2021](../content/windows-forwarded-events-caramel-tsunami-actor-ioc-july-2021-066395ac-ef91-4993-8bf6-25c61ab0ca5a-e6c825f2.md)
- [Chia_Crypto_Mining IOC - June 2021](../content/windows-forwarded-events-chia-crypto-mining-ioc-june-2021-4d173248-439b-4741-8b37-f63ad0c896ae-e48dccbd.md)

### Hunting Queries (13)

**In solution [](../solutions/.md):**
- [Critical user management operations followed by disabling of System Restore from admin account](../content/-critical-user-management-operations-followed-by-disabling-of-system-restore-from-admin-account-dcc15282-2bcb-496e-84db-3c90d0dc0a0c-4efbbcf7.md)
- [Possible command injection attempts against Azure Integration Runtimes](../content/-possible-command-injection-attempts-against-azure-integration-runtimes-2d1a3e86-f1a0-49d0-b88a-55789e1d6660-b11530e7.md)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**
- [Potential Impacket Execution](../content/attacker-tools-threat-protection-essentials-potential-impacket-execution-24ae555c-5e33-4b5d-827a-44206e39f6b4-04d0f42f.md)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Backup Deletion](../content/endpoint-threat-protection-essentials-backup-deletion-56ebae61-89cf-42d9-99f4-3dff8ba33885-e1c87558.md)
- [Persisting via IFEO Registry Key](../content/endpoint-threat-protection-essentials-persisting-via-ifeo-registry-key-f82c89fa-c969-4d12-832f-04d55d14522c-6020db66.md)
- [Potential Microsoft Security Services Tampering](../content/endpoint-threat-protection-essentials-potential-microsoft-security-services-tampering-e10e1d2f-265d-4d90-9037-7f3a6ed8a91e-8c1dc76e.md)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**
- [Dev-0056 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0056-command-line-activity-november-2021-e2629949-2043-4421-8064-bca23c8491dd-1cdb73c2.md)
- [Known Nylon Typhoon Registry modifications patterns](../content/legacy-ioc-based-threat-protection-known-nylon-typhoon-registry-modifications-patterns-f090f8f4a-b986-42d2-b536-e0795c723e25-f442d105.md)
- [Nylon Typhoon Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-nylon-typhoon-command-line-activity-november-2021-bb30abbc-9af6-4a37-9536-e9207e023989-bdd1efea.md)
- [SolarWinds Inventory](../content/legacy-ioc-based-threat-protection-solarwinds-inventory-278592b5-612b-48a4-bb38-4c01ff8ee2a5-c7f23741.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [Tracking Password Changes](../content/standalone-content-tracking-password-changes-bac44fe4-c0bc-4e90-aa48-2e346fda803f-28bae834.md)

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [Domain controller installation media creation](../content/windows-security-events-domain-controller-installation-media-creation-7e5f3a9a-542c-417a-a429-4ed500c5c4d8-fec25b2e.md)
- [Establishing internal proxies](../content/windows-security-events-establishing-internal-proxies-ce38c16c-a560-46c0-88d6-7757b88f08e9-e3cde3e0.md)

### Workbooks (3)

**In solution [](../solutions/.md):**
- [AMAmigrationTracker](../content/-amamigrationtracker-044e752e.md)
- [MicrosoftSentinelDeploymentandMigrationTracker](../content/-microsoftsentineldeploymentandmigrationtracker-da237854.md)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**
- [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/securityinsights`

## Parsers Using This Table (11)

### ASIM Parsers (11)

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimAuthenticationMicrosoftWindowsEvent](../asim/asimauthenticationmicrosoftwindowsevent.md) | Authentication |  |
| [ASimDnsMicrosoftSysmonWindowsEvent](../asim/asimdnsmicrosoftsysmonwindowsevent.md) | Dns |  |
| [ASimFileEventMicrosoftSysmonWindowsEvent](../asim/asimfileeventmicrosoftsysmonwindowsevent.md) | FileEvent |  |
| [ASimFileEventMicrosoftWindowsEvents](../asim/asimfileeventmicrosoftwindowsevents.md) | FileEvent |  |
| [ASimNetworkSessionMicrosoftSysmonWindowsEvent](../asim/asimnetworksessionmicrosoftsysmonwindowsevent.md) | NetworkSession |  |
| [ASimNetworkSessionMicrosoftWindowsEventFirewall](../asim/asimnetworksessionmicrosoftwindowseventfirewall.md) | NetworkSession |  |
| [ASimProcessEventCreateMicrosoftSysmonWindowsEvent](../asim/asimprocesseventcreatemicrosoftsysmonwindowsevent.md) | ProcessEvent |  |
| [ASimProcessEventTerminateMicrosoftSysmonWindowsEvent](../asim/asimprocesseventterminatemicrosoftsysmonwindowsevent.md) | ProcessEvent |  |
| [ASimRegistryEventMicrosoftSysmonWindowsEvent](../asim/asimregistryeventmicrosoftsysmonwindowsevent.md) | RegistryEvent |  |
| [ASimRegistryEventMicrosoftWindowsEvent](../asim/asimregistryeventmicrosoftwindowsevent.md) | RegistryEvent |  |
| [ASimUserManagementMicrosoftWindowsEvent](../asim/asimusermanagementmicrosoftwindowsevent.md) | UserManagement |  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

