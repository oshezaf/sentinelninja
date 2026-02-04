# SOC Handbook

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="SOC Handbook Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

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
| **Solution Folder** | [SOC Handbook](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC%20Handbook) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **27 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | Workbooks |
| [`Alert`](../tables/alert.md) | Workbooks |
| [`AuditLogs`](../tables/auditlogs.md) | Workbooks |
| [`AzureActivity`](../tables/azureactivity.md) | Workbooks |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Workbooks |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Workbooks |
| [`DeviceEvents`](../tables/deviceevents.md) | Workbooks |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) | Workbooks |
| [`DnsEvents`](../tables/dnsevents.md) | Workbooks |
| [`HuntingBookmark`](../tables/huntingbookmark.md) | Workbooks |
| [`OfficeActivity`](../tables/officeactivity.md) | Workbooks |
| [`Operation`](../tables/operation.md) | Workbooks |
| [`Perf`](../tables/perf.md) | Workbooks |
| [`ProtectionStatus`](../tables/protectionstatus.md) | Workbooks |
| [`SecurityBaseline`](../tables/securitybaseline.md) | Workbooks |
| [`SecurityBaselineSummary`](../tables/securitybaselinesummary.md) | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | Workbooks |
| [`Syslog`](../tables/syslog.md) | Workbooks |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | Workbooks |
| [`Update`](../tables/update.md) | Workbooks |
| [`UpdateSummary`](../tables/updatesummary.md) | Workbooks |
| [`Usage`](../tables/usage.md) | Workbooks |
| [`VMConnection`](../tables/vmconnection.md) | Workbooks |
| [`W3CIISLog`](../tables/w3ciislog.md) | Workbooks |
| [`WindowsFirewall`](../tables/windowsfirewall.md) | Workbooks |
| [`WireData`](../tables/wiredata.md) | Workbooks |

### Internal Tables

The following **5 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`Anomalies`](../tables/anomalies.md) | Workbooks |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | Workbooks |
| [`IdentityInfo`](../tables/identityinfo.md) | Workbooks |
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
| [AnomalyData](../content/soc-handbook-anomalydata-44d72d0f.md) | [`HuntingBookmark`](../tables/huntingbookmark.md)<br>*Internal use:*<br>[`Anomalies`](../tables/anomalies.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |
| [AttackSurfaceReduction](../content/soc-handbook-attacksurfacereduction-52743d4b.md) | [`DeviceEvents`](../tables/deviceevents.md) |
| [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md) | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`Usage`](../tables/usage.md) |
| [AzureSentinelSecurityAlerts](../content/soc-handbook-azuresentinelsecurityalerts-8f5f1c6c.md) | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [IncidentOverview](../content/soc-handbook-incidentoverview-c120b199.md) | [`Alert`](../tables/alert.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |
| [IntsightsIOCWorkbook](../content/soc-handbook-intsightsiocworkbook-5df8c818.md) | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>[`AuditLogs`](../tables/auditlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`DeviceLogonEvents`](../tables/devicelogonevents.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`HuntingBookmark`](../tables/huntingbookmark.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`Operation`](../tables/operation.md)<br>[`ProtectionStatus`](../tables/protectionstatus.md)<br>[`SecurityBaseline`](../tables/securitybaseline.md)<br>[`SecurityBaselineSummary`](../tables/securitybaselinesummary.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`Update`](../tables/update.md)<br>[`UpdateSummary`](../tables/updatesummary.md)<br>[`Usage`](../tables/usage.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |
| [MITREAttack](../content/soc-handbook-mitreattack-3fb92d64.md) | [`Usage`](../tables/usage.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [SecurityOperationsEfficiency](../content/soc-handbook-securityoperationsefficiency-d083776e.md) | *Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |
| [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Perf`](../tables/perf.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VMConnection`](../tables/vmconnection.md)<br>[`W3CIISLog`](../tables/w3ciislog.md)<br>[`WindowsFirewall`](../tables/windowsfirewall.md)<br>[`WireData`](../tables/wiredata.md) |
| [SentinelCentral](../content/soc-handbook-sentinelcentral-27b23efc.md) | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                  |
|-------------|--------------------------------|-------------------------------------------------------------------------------------|
| 3.0.6       | 13-01-2026                     | Updated *IncidentOverview* **Workbook** to correct the incident render issue by using ProviderIncidentId with IncidentNumber|
| 3.0.5       | 24-09-2025                     | Updated *SecurityOperationsEfficiency* to fix Mean time to triage |
| 3.0.4       | 22-04-2025                     | Updated *Azure to Sentinel Cost* - **Workbook**.            |
| 3.0.3       | 28-11-2023                     | Changes for rebranding from Azure Active Directory to Microsoft Entra ID.            |
| 3.0.2       | 21-11-2023                     | Updated SecurityOperationsEfficiency **Workbook** to run the query on "set in query".|
| 3.0.1       | 14-07-2023                     | Updated **Workbook** to correctly get the drop down for Subscription and Workspace.  |
| 3.0.0       | 07-07-2023                     | Initial Solution Release.                                                            |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

