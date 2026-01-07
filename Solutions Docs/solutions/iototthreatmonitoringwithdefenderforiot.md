# IoTOTThreatMonitoringwithDefenderforIoT

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
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
| [Denial of Service (Microsoft Defender for IoT)](../content/e068187a-01f5-4737-bc13-25db4027b7ea.md) | High | InhibitResponseFunction | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Excessive Login Attempts (Microsoft Defender for IoT)](../content/f5217b4c-3f1f-4d89-b4f3-5d7581da1c1c.md) | High | ImpairProcessControl | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Firmware Updates (Microsoft Defender for IoT)](../content/7cad4b66-5e83-4756-8de4-f21315ab1e77.md) | Medium | Persistence | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [High bandwidth in the network (Microsoft Defender for IoT)](../content/caa4665f-21fa-462d-bb31-92226e746c68.md) | Low | Discovery | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Illegal Function Codes for ICS traffic (Microsoft Defender for IoT)](../content/70be4a31-9d2b-433b-bdc7-da8928988069.md) | Medium | ImpairProcessControl | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Internet Access (Microsoft Defender for IoT)](../content/9ff3b13b-287a-4ed0-8f6b-7e7b66cbbcbd.md) | High | LateralMovement | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Multiple scans in the network (Microsoft Defender for IoT)](../content/493916d5-a094-4bfa-bdd1-d983a063ea3d.md) | High | Discovery | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [No traffic on Sensor Detected (Microsoft Defender for IoT)](../content/208c3f5b-3ba2-49b5-9bca-c44e58cd5fd3.md) | High | InhibitResponseFunction | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [PLC Stop Command (Microsoft Defender for IoT)](../content/a7d3f642-15d8-4e83-99ee-83ca3352525d.md) | Medium | DefenseEvasion | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [PLC unsecure key state (Microsoft Defender for IoT)](../content/f9df500a-e2a4-4104-a517-dc1d85bb654f.md) | Low | Execution | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Suspicious malware found in the network (Microsoft Defender for IoT)](../content/6fb1acd5-356d-40f7-9b97-78d993c6a183.md) | High | Impact | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Unauthorized DHCP configuration in the network (Microsoft Defender for IoT)](../content/c52ec521-9188-4a9e-a4cd-34a3dfbc3d27.md) | Medium | Discovery | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Unauthorized PLC changes (Microsoft Defender for IoT)](../content/c2fb27c7-5f67-49c4-aaf3-d82934234a69.md) | Medium | Persistence | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Unauthorized device in the network (Microsoft Defender for IoT)](../content/f4c71e55-6192-47ca-92e2-0856ae502a46.md) | Medium | Discovery | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Unauthorized remote access to the network (Microsoft Defender for IoT)](../content/1ff4fa3d-150b-4c87-b733-26c289af0d49.md) | Medium | InitialAccess | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [IoTOTThreatMonitoringwithDefenderforIoT](../content/iototthreatmonitoringwithdefenderforiot-iototthreatmonitoringwithdefenderforiot.md) | *Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AD4IoT-AutoAlertStatusSync](../content/ad4iot-autoalertstatussync-iototthreatmonitoringwithdefenderforiot.md) | This playbook updates alert statuses in Defender for IoT whenever a related alert in Microsoft Senti... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)* |
| [AD4IoT-AutoCloseIncidents](../content/ad4iot-autocloseincidents-iototthreatmonitoringwithdefenderforiot.md) | In some cases, maintenance activities generate alerts in Microsoft Sentinel which distracts the SOC ... | - |
| [AD4IoT-AutoTriageIncident](../content/ad4iot-autotriageincident-iototthreatmonitoringwithdefenderforiot.md) | SOC and OT engineers can stream their workflows using the playbook, which automatically updates the ... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)* |
| [AD4IoT-CVEAutoWorkflow](../content/ad4iot-cveautoworkflow-iototthreatmonitoringwithdefenderforiot.md) | The playbook automates the SOC workflow by automatically enriching incident comments with the CVEs o... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)* |
| [AD4IoT-MailByProductionLine](../content/ad4iot-mailbyproductionline-iototthreatmonitoringwithdefenderforiot.md) | The following playbook will send mail to notify specific stake holders. One example can be in the ca... | - |
| [AD4IoT-NewAssetServiceNowTicket](../content/ad4iot-newassetservicenowticket-iototthreatmonitoringwithdefenderforiot.md) | Normally, the authorized entity to program a PLC is the Engineering Workstation, to program a PLC at... | - |
| [AD4IoT-SendEmailtoIoTOwner](../content/ad4iot-sendemailtoiotowner-iototthreatmonitoringwithdefenderforiot.md) | The playbooks automate the SOC workflow by automatically emailing the incident details to the right ... | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) *(read)* |
| [Get-AD4IoTDeviceCVEs - Incident](../content/get-ad4iotdevicecves---incident-iototthreatmonitoringwithdefenderforiot.md) | For each IoT device entity included in the alert, this playbook will get CVEs from the Azure Defende... | - |

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
