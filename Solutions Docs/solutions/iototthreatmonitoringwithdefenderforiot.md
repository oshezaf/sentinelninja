# IoTOTThreatMonitoringwithDefenderforIoT

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="IoTOTThreatMonitoringwithDefenderforIoT Logo" width="75" height="75">

The [Microsoft Defender for IoT](https://azure.microsoft.com/services/iot-defender/) solution for Microsoft Sentinel allows you to ingest Security alerts reported in Microsoft Defender for IoT on assessing your Internet of Things (IoT)/Operational Technology (OT) infrastructure. 

 ** Underlying Microsoft Technologies used: ** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:  

 a. [Codeless Connector Platform/Native Microsoft Sentinel Polling](https://docs.microsoft.com/azure/sentinel/create-codeless-connector?tabs=deploy-via-arm-template%2Cconnect-via-the-azure-portal)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 2.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-10-26 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IoTOTThreatMonitoringwithDefenderforIoT](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IoTOTThreatMonitoringwithDefenderforIoT) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Microsoft Defender for IoT](../connectors/iot.md)

## Tables Reference

### Internal Tables

The following **2 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | [Microsoft Defender for IoT](../connectors/iot.md) | Analytics, Playbooks |
| [`SecurityIncident`](../tables/securityincident.md) | - | Workbooks |

## Content Items

This solution includes **24 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 15 |
| Playbooks | 8 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Denial of Service (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-denial-of-service-microsoft-defender-for-iot-e068187a-01f5-4737-bc13-25db4027b7ea-d30730fd.md) | High | InhibitResponseFunction | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Excessive Login Attempts (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-excessive-login-attempts-microsoft-defender-for-iot-f5217b4c-3f1f-4d89-b4f3-5d7581da1c1c-69d7913b.md) | High | ImpairProcessControl | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Firmware Updates (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-firmware-updates-microsoft-defender-for-iot-7cad4b66-5e83-4756-8de4-f21315ab1e77-3b526082.md) | Medium | Persistence | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [High bandwidth in the network (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-high-bandwidth-in-the-network-microsoft-defender-for-iot-caa4665f-21fa-462d-bb31-92226e746c68-b6499206.md) | Low | Discovery | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Illegal Function Codes for ICS traffic (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-illegal-function-codes-for-ics-traffic-microsoft-defender-for-io-70be4a31-9d2b-433b-bdc7-da8928988069-a9b23f60.md) | Medium | ImpairProcessControl | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Internet Access (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-internet-access-microsoft-defender-for-iot-9ff3b13b-287a-4ed0-8f6b-7e7b66cbbcbd-e6f35abc.md) | High | LateralMovement | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Multiple scans in the network (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-multiple-scans-in-the-network-microsoft-defender-for-iot-493916d5-a094-4bfa-bdd1-d983a063ea3d-caac186a.md) | High | Discovery | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [No traffic on Sensor Detected (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-no-traffic-on-sensor-detected-microsoft-defender-for-iot-208c3f5b-3ba2-49b5-9bca-c44e58cd5fd3-d7b2b3ed.md) | High | InhibitResponseFunction | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [PLC Stop Command (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-plc-stop-command-microsoft-defender-for-iot-a7d3f642-15d8-4e83-99ee-83ca3352525d-8e009448.md) | Medium | DefenseEvasion | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [PLC unsecure key state (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-plc-unsecure-key-state-microsoft-defender-for-iot-f9df500a-e2a4-4104-a517-dc1d85bb654f-78ea192f.md) | Low | Execution | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Suspicious malware found in the network (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-suspicious-malware-found-in-the-network-microsoft-defender-for-i-6fb1acd5-356d-40f7-9b97-78d993c6a183-8e31acda.md) | High | Impact | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Unauthorized DHCP configuration in the network (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-unauthorized-dhcp-configuration-in-the-network-microsoft-defende-c52ec521-9188-4a9e-a4cd-34a3dfbc3d27-dbbcfa22.md) | Medium | Discovery | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Unauthorized PLC changes (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-unauthorized-plc-changes-microsoft-defender-for-iot-c2fb27c7-5f67-49c4-aaf3-d82934234a69-06e12e1b.md) | Medium | Persistence | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Unauthorized device in the network (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-unauthorized-device-in-the-network-microsoft-defender-for-iot-f4c71e55-6192-47ca-92e2-0856ae502a46-c1fb4a17.md) | Medium | Discovery | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Unauthorized remote access to the network (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-unauthorized-remote-access-to-the-network-microsoft-defender-for-1ff4fa3d-150b-4c87-b733-26c289af0d49-1d4743ff.md) | Medium | InitialAccess | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [IoTOTThreatMonitoringwithDefenderforIoT](../content/iototthreatmonitoringwithdefenderforiot-iototthreatmonitoringwithdefenderforiot-d8edfecb.md) | *Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AD4IoT-AutoAlertStatusSync](../content/iototthreatmonitoringwithdefenderforiot-ad4iot-autoalertstatussync-23507deb.md) | This playbook updates alert statuses in Defender for IoT whenever a related alert in Microsoft Senti... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)* |
| [AD4IoT-AutoCloseIncidents](../content/iototthreatmonitoringwithdefenderforiot-ad4iot-autocloseincidents-6bbdd5ed.md) | In some cases, maintenance activities generate alerts in Microsoft Sentinel which distracts the SOC ... | - |
| [AD4IoT-AutoTriageIncident](../content/iototthreatmonitoringwithdefenderforiot-ad4iot-autotriageincident-6060cb26.md) | SOC and OT engineers can stream their workflows using the playbook, which automatically updates the ... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)* |
| [AD4IoT-CVEAutoWorkflow](../content/iototthreatmonitoringwithdefenderforiot-ad4iot-cveautoworkflow-d92bf631.md) | The playbook automates the SOC workflow by automatically enriching incident comments with the CVEs o... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)* |
| [AD4IoT-MailByProductionLine](../content/iototthreatmonitoringwithdefenderforiot-ad4iot-mailbyproductionline-4e3b19c4.md) | The following playbook will send mail to notify specific stake holders. One example can be in the ca... | - |
| [AD4IoT-NewAssetServiceNowTicket](../content/iototthreatmonitoringwithdefenderforiot-ad4iot-newassetservicenowticket-54c08b02.md) | Normally, the authorized entity to program a PLC is the Engineering Workstation, to program a PLC at... | - |
| [AD4IoT-SendEmailtoIoTOwner](../content/iototthreatmonitoringwithdefenderforiot-ad4iot-sendemailtoiotowner-726ee92c.md) | The playbooks automate the SOC workflow by automatically emailing the incident details to the right ... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)* |
| [Get-AD4IoTDeviceCVEs - Incident](../content/iototthreatmonitoringwithdefenderforiot-get-ad4iotdevicecves-incident-60ab2386.md) ⚠️ | For each IoT device entity included in the alert, this playbook will get CVEs from the Azure Defende... | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [IoTOTThreatMonitoringwithDefenderforIoT/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IoTOTThreatMonitoringwithDefenderforIoT/README.md)*

# Overview
There has been a long-standing split between ICS/SCADA (OT) and Corporate (IT) cybersecurity. This split was often driven by significant differences in technology/tooling. Microsoft Defender for IoT's integration with Microsoft Sentinel drives convergency by providing a single pane for coverage of both D4IOT (OT) and Microsoft Sentinel (IT) alerting. This solution includes Workbooks and Analytics rules providing a guide OT detection and Analysis.

## Try on Portal
You can deploy the solution by clicking on the buttons below:

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FIoTOTThreatMonitoringwithDefenderforIoT%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazurebutton"/></a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FIoTOTThreatMonitoringwithDefenderforIoT%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazuregovbutton"/></a>

![Workbook Overview](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IoTOTThreatMonitoringwithDefenderforIoT/Workbooks/Images/IoTOTThreatMonitoringwithDefenderforIoTBlack.png?raw=true)

## Getting Started
1️⃣ [Onboard Microsoft Defender for IoT](https://docs.microsoft.com/azure/defender-for-iot/device-builders/quickstart-onboard-iot-hub)
2️⃣ [Onboard Microsoft Sentinel](https://docs.microsoft.com/azure/sentinel/quickstart-onboard) 
3️⃣ [Enable Microsoft Defender for IoT Connector to Microsoft Sentinel](https://docs.microsoft.com/azure/defender-for-iot/organizations/how-to-configure-with-sentinel)
4️⃣ View the Workbook: Microsoft Sentinel > Workbooks > My Workbooks > IoT/OT Threat Monitoring with Defender for IoT > View
5️⃣ View the Analytics Rules: Navigate to Microsoft Sentinel > Analytics > Search "IOT"

## Workbook
The OT Threat Monitoring with Defender for IoT Workbook features OT filtering for Security Alerts, Incidents, Vulnerabilities and Asset Inventory. The workbook features a dynamic assessment of the MITRE ATT&CK for ICS matrix across your environment to analyze and respond to OT-based threats. This workbook is designed to enable SecOps Analysts, Security Engineers, and MSSPs to gain situational awareness for IT/OT security posture.

## Analytics Rules
### 1) Denial of Service (Microsoft Defender for IoT)
This alert leverages Defender for IoT to detect attacks that would prevent the use or proper operation of a DCS system including Denial of Service events.
### 2) Excessive Login Attempts (Microsoft Defender for IoT)
This alert leverages Defender for IoT to detect excessive login attempts that may indicate improper service configuration, human error, or malicious activity on the network such as a cyber threat attempting to manipulate the SCADA network.
### 3) Firmware Updates (Microsoft Defender for IoT)

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.2       | 29-01-2025                     | Corrected Entity Mappings structure of **Analytic Rules**			|
| 3.0.1       | 10-01-2025                     | Reverted Entity Mappings of **Analytic Rules** to earlier version  |
| 3.0.0       | 30-11-2023                     | Added new Entity Mapping to **Analytic Rules**                     |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
