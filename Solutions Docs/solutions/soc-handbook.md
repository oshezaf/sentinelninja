# SOC Handbook

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="SOC Handbook Logo" width="75" height="75">

The SOC Handbook solution for Microsoft Sentinel provides a collection of resources that enable and empower SOC Analysts to get better visibility and understanding of point-in-time security posture of organizational resources.

 All content packaged in this solution is built and supported by the Microsoft Sentinel community. For any support, please create an [issue](https://github.com/Azure/Azure-Sentinel/issues) on the Microsoft Sentinel GitHub repository.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Community |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/Azure/Azure-Sentinel/issues](https://github.com/Azure/Azure-Sentinel/issues) |
| **Categories** | domains |
| **Version** | 3.0.5 |
| **Author** | Community |
| **First Published** | 2022-11-30 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC%20Handbook](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC%20Handbook) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **9 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`DeviceEvents`](../tables/deviceevents.md) | Workbooks |
| [`DnsEvents`](../tables/dnsevents.md) | Workbooks |
| [`HuntingBookmark`](../tables/huntingbookmark.md) | Workbooks |
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) | Workbooks |
| [`ProtectionStatus`](../tables/protectionstatus.md) | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | Workbooks |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | Workbooks |
| [`Usage`](../tables/usage.md) | Workbooks |

### Internal Tables

The following **4 table(s)** are used internally by this solution's playbooks:

| Table | Used By Content |
|-------|----------------|
| [`Anomalies`](../tables/anomalies.md) | Workbooks |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | Workbooks |
| [`SecurityAlert`](../tables/securityalert.md) | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | Workbooks |

## Content Items

This solution includes **13 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 13 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AnalyticsEfficiency](../content/soc-handbook-analyticsefficiency-ba1ee629.md) | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |
| [AnomaliesVisualization](../content/soc-handbook-anomaliesvisualization-8cb75567.md) | *Internal use:*<br>[`Anomalies`](../tables/anomalies.md)<br>[`SecurityIncident`](../tables/securityincident.md) |
| [AnomalyData](../content/soc-handbook-anomalydata-44d72d0f.md) | *Internal use:*<br>[`Anomalies`](../tables/anomalies.md)<br>[`SecurityIncident`](../tables/securityincident.md) |
| [AttackSurfaceReduction](../content/soc-handbook-attacksurfacereduction-52743d4b.md) | [`DeviceEvents`](../tables/deviceevents.md) |
| [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md) | [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md)<br>[`Usage`](../tables/usage.md) |
| [AzureSentinelSecurityAlerts](../content/soc-handbook-azuresentinelsecurityalerts-8f5f1c6c.md) | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [IncidentOverview](../content/soc-handbook-incidentoverview-c120b199.md) | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |
| [IntsightsIOCWorkbook](../content/soc-handbook-intsightsiocworkbook-5df8c818.md) | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) | [`DnsEvents`](../tables/dnsevents.md)<br>[`HuntingBookmark`](../tables/huntingbookmark.md)<br>[`ProtectionStatus`](../tables/protectionstatus.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |
| [MITREAttack](../content/soc-handbook-mitreattack-3fb92d64.md) | [`Usage`](../tables/usage.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [SecurityOperationsEfficiency](../content/soc-handbook-securityoperationsefficiency-d083776e.md) | *Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |
| [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md) | [`SecurityEvent`](../tables/securityevent.md) |
| [SentinelCentral](../content/soc-handbook-sentinelcentral-27b23efc.md) | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                  |
|-------------|--------------------------------|-------------------------------------------------------------------------------------|
| 3.0.5       | 24-09-2025                     | Updated *SecurityOperationsEfficiency* to fix Mean time to triage |
| 3.0.4       | 22-04-2025                     | Updated *Azure to Sentinel Cost* - **Workbook**.            |
| 3.0.3       | 28-11-2023                     | Changes for rebranding from Azure Active Directory to Microsoft Entra ID.            |
| 3.0.2       | 21-11-2023                     | Updated SecurityOperationsEfficiency **Workbook** to run the query on "set in query".|
| 3.0.1       | 14-07-2023                     | Updated **Workbook** to correctly get the drop down for Subscription and Workspace.  |
| 3.0.0       | 07-07-2023                     | Initial Solution Release.                                                            |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
