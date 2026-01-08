# ThreatConnect

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ThreatConnect.svg" alt="ThreatConnect Logo" width="75" height="75">

The [ThreatConnect Threat Intelligence Platform](https://threatconnect.com/) solution for Microsoft Sentinel provides Workbooks and Analytics to demonstrate the value of ThreatConnect data inside Microsoft Sentintel.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ThreatConnect, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://threatconnect.com/contact/](https://threatconnect.com/contact/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | JP Bourget jp@bluecycle.net |
| **First Published** | 2023-09-11 |
| **Last Updated** | 2023-09-11 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ThreatConnect](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ThreatConnect) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **32 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | Analytics |
| [`ALERT`](../tables/alert.md) | Analytics |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | Analytics |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | Analytics |
| [`AZFWIdpsSignature`](../tables/azfwidpssignature.md) | Analytics |
| [`AZFWNatRule`](../tables/azfwnatrule.md) | Analytics |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) | Analytics |
| [`AZFWThreatIntel`](../tables/azfwthreatintel.md) | Analytics |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Analytics |
| [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md) | Analytics |
| [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) | Analytics |
| [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md) | Analytics |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Analytics |
| [`Corelight_CL`](../tables/corelight-cl.md) | Analytics |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | Analytics |
| [`DnsEvents`](../tables/dnsevents.md) | Analytics |
| [`Event`](../tables/event.md) | Analytics |
| [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md) | Analytics |
| [`NTANetAnalytics`](../tables/ntanetanalytics.md) | Analytics |
| [`OfficeActivity`](../tables/officeactivity.md) | Analytics |
| [`SecurityEvent`](../tables/securityevent.md) | Analytics |
| [`SecurityIoTRawEvent`](../tables/securityiotrawevent.md) | Analytics |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) | Analytics |
| [`SigninLogs`](../tables/signinlogs.md) | Analytics |
| [`Syslog`](../tables/syslog.md) | Analytics |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | Analytics |
| [`Update`](../tables/update.md) | Analytics |
| [`VMConnection`](../tables/vmconnection.md) | Analytics |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) | Analytics |
| [`WindowsEvent`](../tables/windowsevent.md) | Analytics |
| [`barracuda_CL`](../tables/barracuda-cl.md) | Analytics |
| [`meraki_CL`](../tables/meraki-cl.md) | Analytics |

### Internal Tables

The following **2 table(s)** are used internally by this solution's playbooks:

| Table | Used By Content |
|-------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | Workbooks |

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 5 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Threat Connect TI map Domain entity to DnsEvents](../content/threatconnect-threat-connect-ti-map-domain-entity-to-dnsevents-f8960f1c-07d2-512b-9c41-952772d40c84-e3919e52.md) | Medium | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [ThreatConnect TI Map URL Entity to OfficeActivity Data](../content/threatconnect-threatconnect-ti-map-url-entity-to-officeactivity-data-12c3b31b-66a6-53ff-b6ab-6ae45e56dc92-426bca4a.md) | Medium | CommandAndControl | [`OfficeActivity`](../tables/officeactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [ThreatConnect TI map Email entity to OfficeActivity](../content/threatconnect-threatconnect-ti-map-email-entity-to-officeactivity-4f7ade3e-7121-5274-83ea-d7ed22a01fea-d74546e3.md) | Medium | CommandAndControl | [`OfficeActivity`](../tables/officeactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [ThreatConnect TI map Email entity to SigninLogs](../content/threatconnect-threatconnect-ti-map-email-entity-to-signinlogs-ecb68ce7-c309-59a7-a8de-07ccf2a0ea4f-22788640.md) | Medium | CommandAndControl | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [ThreatConnect TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threatconnect-threatconnect-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-ee1fd303-2081-47b7-8f02-e38bfd0868e6-1359f109.md) | Medium | CommandAndControl | [`ALERT`](../tables/alert.md)<br>[`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md)<br>[`AWSVPCFlow`](../tables/awsvpcflow.md)<br>[`AZFWIdpsSignature`](../tables/azfwidpssignature.md)<br>[`AZFWNatRule`](../tables/azfwnatrule.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AZFWThreatIntel`](../tables/azfwthreatintel.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)<br>[`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)<br>[`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`Event`](../tables/event.md)<br>[`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md)<br>[`NTANetAnalytics`](../tables/ntanetanalytics.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SecurityIoTRawEvent`](../tables/securityiotrawevent.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`Update`](../tables/update.md)<br>[`VMConnection`](../tables/vmconnection.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>[`barracuda_CL`](../tables/barracuda-cl.md)<br>[`meraki_CL`](../tables/meraki-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ThreatConnectOverview](../content/threatconnect-threatconnectoverview-c70716b8.md) | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             									|
|-------------|--------------------------------|------------------------------------------------------------------------------------|
| 3.0.1       | 02-07-2025                     | Updated ThreatConnect **Workbook** to ThreatIntelIndicators table references.	   	|
| 3.0.1       | 10-06-2024                     | Added missing AMA **Data Connector** reference in **Analytic rules**   			|
| 3.0.0       | 12-10-2023                     | Initial Solution Release.	                      									|

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
