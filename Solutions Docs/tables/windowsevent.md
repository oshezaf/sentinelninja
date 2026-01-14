# WindowsEvent

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
- [Dataminr Pulse](../solutions/dataminr-pulse.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Windows Forwarded Events](../solutions/windows-forwarded-events.md)
- [Windows Security Events](../solutions/windows-security-events.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Windows Forwarded Events](../connectors/windowsforwardedevents.md)

---

## Content Items Using This Table (24)

### Analytic Rules (13)

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

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map Email entity to SecurityEvent](../content/threat-intelligence-ti-map-email-entity-to-securityevent-2fc5d810-c9cc-491a-b564-841427ae0e50-9cb621b7.md)
- [TI map File Hash to Security Event](../content/threat-intelligence-ti-map-file-hash-to-security-event-a7427ed7-04b4-4e3b-b323-08b981b9b4bf-a0646697.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI map Email entity to SecurityEvent](../content/threat-intelligence-new-ti-map-email-entity-to-securityevent-0a59051d-aed4-4fb6-bf84-bc80534482b2-60b9192e.md)
- [TI map File Hash to Security Event](../content/threat-intelligence-new-ti-map-file-hash-to-security-event-9f7dc779-1e51-4925-ae4a-db1db933077f-d8ffe445.md)

**In solution [Windows Forwarded Events](../solutions/windows-forwarded-events.md):**
- [Caramel Tsunami Actor IOC - July 2021](../content/windows-forwarded-events-caramel-tsunami-actor-ioc-july-2021-066395ac-ef91-4993-8bf6-25c61ab0ca5a-e6c825f2.md)
- [Chia_Crypto_Mining IOC - June 2021](../content/windows-forwarded-events-chia-crypto-mining-ioc-june-2021-4d173248-439b-4741-8b37-f63ad0c896ae-e48dccbd.md)

### Hunting Queries (10)

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

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [Domain controller installation media creation](../content/windows-security-events-domain-controller-installation-media-creation-7e5f3a9a-542c-417a-a429-4ed500c5c4d8-fec25b2e.md)
- [Establishing internal proxies](../content/windows-security-events-establishing-internal-proxies-ce38c16c-a560-46c0-88d6-7757b88f08e9-e3cde3e0.md)

### Workbooks (1)

**In solution [Dataminr Pulse](../solutions/dataminr-pulse.md):**
- [DataminrPulseAlerts](../content/dataminr-pulse-dataminrpulsealerts-d5436210.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/securityinsights`

## Parsers Using This Table (12)

### ASIM Parsers (12)

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimDnsMicrosoftSysmonWindowsEvent](../asim/asimdnsmicrosoftsysmonwindowsevent.md) | Dns |  |
| [ASimFileEventMicrosoftSysmonWindowsEvent](../asim/asimfileeventmicrosoftsysmonwindowsevent.md) | FileEvent |  |
| [ASimFileEventMicrosoftWindowsEvents](../asim/asimfileeventmicrosoftwindowsevents.md) | FileEvent |  |
| [ASimNetworkSessionMicrosoftSysmonWindowsEvent](../asim/asimnetworksessionmicrosoftsysmonwindowsevent.md) | NetworkSession |  |
| [ASimNetworkSessionMicrosoftWindowsEventFirewall](../asim/asimnetworksessionmicrosoftwindowseventfirewall.md) | NetworkSession |  |
| [ASimProcessCreateMicrosoftWindowsEvents](../asim/asimprocesscreatemicrosoftwindowsevents.md) | ProcessEvent |  |
| [ASimProcessEventCreateMicrosoftSysmonWindowsEvent](../asim/asimprocesseventcreatemicrosoftsysmonwindowsevent.md) | ProcessEvent |  |
| [ASimProcessEventTerminateMicrosoftSysmonWindowsEvent](../asim/asimprocesseventterminatemicrosoftsysmonwindowsevent.md) | ProcessEvent |  |
| [ASimProcessTerminateMicrosoftWindowsEvents](../asim/asimprocessterminatemicrosoftwindowsevents.md) | ProcessEvent |  |
| [ASimRegistryEventMicrosoftSysmonWindowsEvent](../asim/asimregistryeventmicrosoftsysmonwindowsevent.md) | RegistryEvent |  |
| [ASimRegistryEventMicrosoftWindowsEvent](../asim/asimregistryeventmicrosoftwindowsevent.md) | RegistryEvent |  |
| [ASimUserManagementMicrosoftWindowsEvent](../asim/asimusermanagementmicrosoftwindowsevent.md) | UserManagement |  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

