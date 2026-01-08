# Armis

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Armis.svg" alt="Armis Logo" width="75" height="75">

The [Armis](https://www.armis.com/) Solution gives the capability to ingest Armis Devices, Alerts and device Activities into Microsoft Sentinel through the Armis REST API.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Armis Corporation |
| **Support Tier** | Partner |
| **Support Link** | [https://support.armis.com/](https://support.armis.com/) |
| **Categories** | domains |
| **Version** | 3.2.0 |
| **Author** | {Armis - support@armis.com} |
| **First Published** | 2022-08-02 |
| **Last Updated** | 2024-08-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Armis](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Armis) |

## Data Connectors

This solution provides **2 data connector(s)** (plus 2 discovered⚠️):

- [Armis Activities](../connectors/armisactivities.md) ⚠️
- [Armis Alerts](../connectors/armisalerts.md) ⚠️
- [Armis Alerts Activities](../connectors/armisalertsactivities.md)
- [Armis Devices](../connectors/armisdevices.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Armis_Activities_CL`](../tables/armis-activities-cl.md) | [Armis Activities](../connectors/armisactivities.md), [Armis Alerts Activities](../connectors/armisalertsactivities.md) | - |
| [`Armis_Alerts_CL`](../tables/armis-alerts-cl.md) | [Armis Alerts](../connectors/armisalerts.md), [Armis Alerts Activities](../connectors/armisalertsactivities.md) | - |
| [`Armis_Devices_CL`](../tables/armis-devices-cl.md) | [Armis Devices](../connectors/armisdevices.md) | - |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 3 |
| Playbooks | 1 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Armis Update Alert Status](../content/armis-armis-update-alert-status-f60ff46e.md) | Armis Update Alert Status playbook would be responsible to update the Alert status from the sentinel... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ArmisActivities](../content/armis-armisactivities-fb6c861f-c438-4a5d-ae97-59dfc7af607a-31c0218c.md) | - | - |
| [ArmisAlerts](../content/armis-armisalerts-7783dff3-1e0a-4622-bdd7-74ee371e4dba-58784ae6.md) | - | - |
| [ArmisDevice](../content/armis-armisdevice-826eac66-f927-4351-ab5d-483457060ae0-b0cace5e.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.2.0       | 05-12-2025                     | Log Ingestion Support.|
| 3.1.1       | 19-05-2025                     | Updated Armis AlertActivity and Armis Device Data connectors to add keyvault for storing Armis Access Token and Severity parameter in AlertActivity.|
| 3.1.0       | 11-09-2024                     | Updated Armis Alerts Data connector to ingest Armis Activities associated with only Armis Alerts.|
| 3.0.3       | 26-08-2024                     | Updated the python runtime version to **3.11**|
| 3.0.2       | 03-05-2024                     | Repackaged for parser issue fix on reinstall|
| 3.0.1       | 15-04-2024                     | Added Deploy to Azure Government button in **Data connectors**|
| 3.0.0       | 03-11-2023                     | Fixed vulnerability related issue by passing the scret key in the body of the request instead of the param in the data connector and playbook        |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
