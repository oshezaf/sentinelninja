# MicrosoftDefenderForEndpoint

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-01-31 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftDefenderForEndpoint](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftDefenderForEndpoint) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Microsoft Defender for Endpoint](../connectors/microsoftdefenderadvancedthreatprotection.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | - | Hunting |

### Internal Tables

The following **1 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | [Microsoft Defender for Endpoint](../connectors/microsoftdefenderadvancedthreatprotection.md) | Analytics |

## Content Items

This solution includes **27 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 22 |
| Hunting Queries | 2 |
| Parsers | 2 |
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Aqua Blizzard AV hits - Feb 2022](../content/microsoftdefenderforendpoint-aqua-blizzard-av-hits---feb-2022-18dbdc22-b69f-4109-9e39-723d9465f45f.md) | High | Persistence | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Probable AdFind Recon Tool Usage](../content/microsoftdefenderforendpoint-probable-adfind-recon-tool-usage-c63ae777-d5e0-4113-8c9a-c2c9d3d09fcd.md) | Discovery | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [SUNBURST suspicious SolarWinds child processes](../content/microsoftdefenderforendpoint-sunburst-suspicious-solarwinds-child-processes-4a3073ac-7383-48a9-90a8-eb6716183a54.md) | Execution, Persistence | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Isolate MDE Machine - Alert Triggered](../content/microsoftdefenderforendpoint-isolate-mde-machine---alert-triggered.md) | This playbook will isolate (full) the machine in Microsoft Defender for Endpoint. It is triggered by... | - |
| [Isolate MDE Machine using entity trigger](../content/microsoftdefenderforendpoint-isolate-mde-machine-using-entity-trigger.md) | This playbook will isolate Microsoft Defender for Endpoint MDE device using entity trigger. It will ... | - |
| [Isolate endpoint - MDE - Incident Triggered](../content/microsoftdefenderforendpoint-isolate-endpoint---mde---incident-triggered.md) | This playbook will isolate (full) the machine in Microsoft Defender for Endpoint. It is triggered by... | - |
| [Restrict MDE App Execution - Alert Triggered](../content/microsoftdefenderforendpoint-restrict-mde-app-execution---alert-triggered.md) | This playbook will restrict app execution on the machine in Microsoft Defender for Endpoint. | - |
| [Restrict MDE App Execution - Incident Triggered](../content/microsoftdefenderforendpoint-restrict-mde-app-execution---incident-triggered.md) | This playbook will restrict app execution on the machine in Microsoft Defender for Endpoint. | - |
| [Restrict MDE Domain - Alert Triggered](../content/microsoftdefenderforendpoint-restrict-mde-domain---alert-triggered.md) | This play book will take DNS entities and generate alert and block threat indicators for each domain... | - |
| [Restrict MDE Domain - Entity Triggered](../content/microsoftdefenderforendpoint-restrict-mde-domain---entity-triggered.md) | This playbook will take the triggering entity and generate an alert and block threat indicator for t... | - |
| [Restrict MDE Domain - Incident Triggered](../content/microsoftdefenderforendpoint-restrict-mde-domain---incident-triggered.md) | This play book will take DNS entities and generate alert and block threat indicators for each domain... | - |
| [Restrict MDE FileHash - Alert Triggered](../content/microsoftdefenderforendpoint-restrict-mde-filehash---alert-triggered.md) | This playbook will take FileHash entities and generate alert and block threat indicators for each fi... | - |
| [Restrict MDE FileHash - Entity Triggered](../content/microsoftdefenderforendpoint-restrict-mde-filehash---entity-triggered.md) | This playbook will take the triggering FileHash entity and generate an alert and block threat indica... | - |
| [Restrict MDE FileHash - Incident Triggered](../content/microsoftdefenderforendpoint-restrict-mde-filehash---incident-triggered.md) | This playbook will take FileHash entities and generate alert and block threat indicators for each fi... | - |
| [Restrict MDE Ip Address - Alert Triggered](../content/microsoftdefenderforendpoint-restrict-mde-ip-address---alert-triggered.md) | This playbook will take IP entities and generate alert and block threat indicators for each IP in MD... | - |
| [Restrict MDE Ip Address - Entity Triggered](../content/microsoftdefenderforendpoint-restrict-mde-ip-address---entity-triggered.md) | This playbook will and generate alert and block threat indicators for the IP entity in MDE for 90 da... | - |
| [Restrict MDE Ip Address - Incident Triggered](../content/microsoftdefenderforendpoint-restrict-mde-ip-address---incident-triggered.md) | This playbook will take IP entities and generate alert and block threat indicators for each IP in MD... | - |
| [Restrict MDE URL - Entity Triggered](../content/microsoftdefenderforendpoint-restrict-mde-url---entity-triggered.md) | This playbook will take the triggering entity and generate an alert and block threat indicator for t... | - |
| [Restrict MDE Url - Alert Triggered](../content/microsoftdefenderforendpoint-restrict-mde-url---alert-triggered.md) | This playbook will take Url entities and generate alert and block threat indicators for each IP in M... | - |
| [Restrict MDE Url - Incident Triggered](../content/microsoftdefenderforendpoint-restrict-mde-url---incident-triggered.md) | This playbook will take Url entities and generate alert and block threat indicators for each IP in M... | - |
| [Run MDE Antivirus - Alert Triggered](../content/microsoftdefenderforendpoint-run-mde-antivirus---alert-triggered.md) | This playbook will run a antivirus (full) scan on the machine in Microsoft Defender for Endpoint. It... | - |
| [Run MDE Antivirus - Incident Triggered](../content/microsoftdefenderforendpoint-run-mde-antivirus---incident-triggered.md) | This playbook will run a antivirus (full) scan on the machine in Microsoft Defender for Endpoint. It... | - |
| [Unisolate MDE Machine - Alert Triggered](../content/microsoftdefenderforendpoint-unisolate-mde-machine---alert-triggered.md) | This playbook will release a machine from isolation in Microsoft Defender for Endpoint. It is trigge... | - |
| [Unisolate MDE Machine - Incident Triggered](../content/microsoftdefenderforendpoint-unisolate-mde-machine---incident-triggered.md) | This playbook will release a machine from isolation in Microsoft Defender for Endpoint. It is trigge... | - |
| [Unisolate MDE Machine using entity trigger](../content/microsoftdefenderforendpoint-unisolate-mde-machine-using-entity-trigger.md) | This playbook will unisolate Microsoft Defender for Endpoint (MDE) device using entity trigger. | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AssignedIPAddress](../content/microsoftdefenderforendpoint-assignedipaddress-a06da838-8c56-4eed-ac1a-097bdfab5e9b.md) | - | - |
| [Devicefromip](../content/microsoftdefenderforendpoint-devicefromip-788c6182-85d9-4747-8096-6a971f0e9476.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.6       | 24-09-2025                     | Updated MDE **Playbooks** Instructions to use Microsoft Graph SDK  |
| 3.0.5       | 06-08-2025                     | Updated MDE **Playbooks** with newer logic  |
| 3.0.4       | 07-04-2025                     | Updated ConnectivityCriteria Type in **Data Connector**.				   |
| 3.0.3       | 26-07-2024                     | Updated **Analytical Rule** for missing TTP |
| 3.0.2       | 08-07-2024                     | Corrected UI changes in **Playbook's** metadata  |
| 3.0.1       | 24-11-2023                     | Entities has been mapped for **Playbooks**  |
| 3.0.0       | 17-07-2023                     | Initial Solution Release                    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
