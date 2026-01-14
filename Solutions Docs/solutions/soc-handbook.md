# SOC Handbook

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="SOC Handbook Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

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
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC%20Handbook](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC%20Handbook) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **99 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md) | Workbooks |
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | Workbooks |
| [`AADProvisioningLogs`](../tables/aadprovisioninglogs.md) | Workbooks |
| [`AADRiskyServicePrincipals`](../tables/aadriskyserviceprincipals.md) | Workbooks |
| [`AADRiskyUsers`](../tables/aadriskyusers.md) | Workbooks |
| [`AADServicePrincipalRiskEvents`](../tables/aadserviceprincipalriskevents.md) | Workbooks |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | Workbooks |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) | Workbooks |
| [`ADFSSignInLogs`](../tables/adfssigninlogs.md) | Workbooks |
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | Workbooks |
| [`AWSGuardDuty`](../tables/awsguardduty.md) | Workbooks |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | Workbooks |
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | Workbooks |
| [`AZFWApplicationRuleAggregation`](../tables/azfwapplicationruleaggregation.md) | Workbooks |
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) | Workbooks |
| [`AZFWIdpsSignature`](../tables/azfwidpssignature.md) | Workbooks |
| [`AZFWNatRule`](../tables/azfwnatrule.md) | Workbooks |
| [`AZFWNatRuleAggregation`](../tables/azfwnatruleaggregation.md) | Workbooks |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) | Workbooks |
| [`AZFWNetworkRuleAggregation`](../tables/azfwnetworkruleaggregation.md) | Workbooks |
| [`AZFWThreatIntel`](../tables/azfwthreatintel.md) | Workbooks |
| [`AddonAzureBackupJobs`](../tables/addonazurebackupjobs.md) | Workbooks |
| [`AddonAzureBackupPolicy`](../tables/addonazurebackuppolicy.md) | Workbooks |
| [`AddonAzureBackupProtectedInstance`](../tables/addonazurebackupprotectedinstance.md) | Workbooks |
| [`AddonAzureBackupStorage`](../tables/addonazurebackupstorage.md) | Workbooks |
| [`Alert`](../tables/alert.md) | Workbooks |
| [`AuditLogs`](../tables/auditlogs.md) | Workbooks |
| [`AzureActivity`](../tables/azureactivity.md) | Workbooks |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Workbooks |
| [`AzureMetrics`](../tables/azuremetrics.md) | Workbooks |
| [`CloudAppEvents`](../tables/cloudappevents.md) | Workbooks |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Workbooks |
| [`ConfigurationChange`](../tables/configurationchange.md) | Workbooks |
| [`ConfigurationData`](../tables/configurationdata.md) | Workbooks |
| [`DeviceEvents`](../tables/deviceevents.md) | Workbooks |
| [`DeviceFileCertificateInfo`](../tables/devicefilecertificateinfo.md) | Workbooks |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Workbooks |
| [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) | Workbooks |
| [`DeviceInfo`](../tables/deviceinfo.md) | Workbooks |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) | Workbooks |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | Workbooks |
| [`DeviceNetworkInfo`](../tables/devicenetworkinfo.md) | Workbooks |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | Workbooks |
| [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) | Workbooks |
| [`DeviceTvmSecureConfigurationAssessment`](../tables/devicetvmsecureconfigurationassessment.md) | Workbooks |
| [`DeviceTvmSoftwareInventory`](../tables/devicetvmsoftwareinventory.md) | Workbooks |
| [`DeviceTvmSoftwareVulnerabilities`](../tables/devicetvmsoftwarevulnerabilities.md) | Workbooks |
| [`DnsEvents`](../tables/dnsevents.md) | Workbooks |
| [`DnsInventory`](../tables/dnsinventory.md) | Workbooks |
| [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) | Workbooks |
| [`EmailEvents`](../tables/emailevents.md) | Workbooks |
| [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) | Workbooks |
| [`EmailUrlInfo`](../tables/emailurlinfo.md) | Workbooks |
| [`Event`](../tables/event.md) | Workbooks |
| [`HuntingBookmark`](../tables/huntingbookmark.md) | Workbooks |
| [`IdentityDirectoryEvents`](../tables/identitydirectoryevents.md) | Workbooks |
| [`IdentityLogonEvents`](../tables/identitylogonevents.md) | Workbooks |
| [`IdentityQueryEvents`](../tables/identityqueryevents.md) | Workbooks |
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) | Workbooks |
| [`InsightsMetrics`](../tables/insightsmetrics.md) | Workbooks |
| [`LAQueryLogs`](../tables/laquerylogs.md) | Workbooks |
| [`MDCFileIntegrityMonitoringEvents`](../tables/mdcfileintegritymonitoringevents.md) | Workbooks |
| [`McasShadowItReporting`](../tables/mcasshadowitreporting.md) | Workbooks |
| [`NetworkAccessTraffic`](../tables/networkaccesstraffic.md) | Workbooks |
| [`OfficeActivity`](../tables/officeactivity.md) | Workbooks |
| [`Operation`](../tables/operation.md) | Workbooks |
| [`Perf`](../tables/perf.md) | Workbooks |
| [`ProtectionStatus`](../tables/protectionstatus.md) | Workbooks |
| [`SecureScoreControls`](../tables/securescorecontrols.md) | Workbooks |
| [`SecureScores`](../tables/securescores.md) | Workbooks |
| [`SecurityBaseline`](../tables/securitybaseline.md) | Workbooks |
| [`SecurityBaselineSummary`](../tables/securitybaselinesummary.md) | Workbooks |
| [`SecurityDetection`](../tables/securitydetection.md) | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | Workbooks |
| [`SecurityIoTRawEvent`](../tables/securityiotrawevent.md) | Workbooks |
| [`SecurityNestedRecommendation`](../tables/securitynestedrecommendation.md) | Workbooks |
| [`SecurityRecommendation`](../tables/securityrecommendation.md) | Workbooks |
| [`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) | Workbooks |
| [`SentinelHealth`](../tables/sentinelhealth.md) | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | Workbooks |
| [`StorageBlobLogs`](../tables/storagebloblogs.md) | Workbooks |
| [`StorageFileLogs`](../tables/storagefilelogs.md) | Workbooks |
| [`StorageQueueLogs`](../tables/storagequeuelogs.md) | Workbooks |
| [`StorageTableLogs`](../tables/storagetablelogs.md) | Workbooks |
| [`Syslog`](../tables/syslog.md) | Workbooks |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | Workbooks |
| [`Update`](../tables/update.md) | Workbooks |
| [`UpdateSummary`](../tables/updatesummary.md) | Workbooks |
| [`UrlClickEvents`](../tables/urlclickevents.md) | Workbooks |
| [`Usage`](../tables/usage.md) | Workbooks |
| [`UserAccessAnalytics`](../tables/useraccessanalytics.md) | Workbooks |
| [`VMBoundPort`](../tables/vmboundport.md) | Workbooks |
| [`VMComputer`](../tables/vmcomputer.md) | Workbooks |
| [`VMConnection`](../tables/vmconnection.md) | Workbooks |
| [`VMProcess`](../tables/vmprocess.md) | Workbooks |
| [`W3CIISLog`](../tables/w3ciislog.md) | Workbooks |
| [`WindowsFirewall`](../tables/windowsfirewall.md) | Workbooks |
| [`WireData`](../tables/wiredata.md) | Workbooks |
| [`alert`](../tables/alert.md) | Workbooks |

### Internal Tables

The following **9 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`AlertEvidence`](../tables/alertevidence.md) | Workbooks |
| [`Anomalies`](../tables/anomalies.md) | Workbooks |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | Workbooks |
| [`IdentityInfo`](../tables/identityinfo.md) | Workbooks |
| [`SecurityAlert`](../tables/securityalert.md) | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | Workbooks |
| [`SentinelAudit`](../tables/sentinelaudit.md) | Workbooks |
| [`UserPeerAnalytics`](../tables/userpeeranalytics.md) | Workbooks |
| [`Watchlist`](../tables/watchlist.md) | Workbooks |

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
| [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md) | [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md)<br>[`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`AADProvisioningLogs`](../tables/aadprovisioninglogs.md)<br>[`AADRiskyServicePrincipals`](../tables/aadriskyserviceprincipals.md)<br>[`AADRiskyUsers`](../tables/aadriskyusers.md)<br>[`AADServicePrincipalRiskEvents`](../tables/aadserviceprincipalriskevents.md)<br>[`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)<br>[`AADUserRiskEvents`](../tables/aaduserriskevents.md)<br>[`ADFSSignInLogs`](../tables/adfssigninlogs.md)<br>[`AWSCloudTrail`](../tables/awscloudtrail.md)<br>[`AWSGuardDuty`](../tables/awsguardduty.md)<br>[`AWSVPCFlow`](../tables/awsvpcflow.md)<br>[`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWApplicationRuleAggregation`](../tables/azfwapplicationruleaggregation.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AZFWIdpsSignature`](../tables/azfwidpssignature.md)<br>[`AZFWNatRule`](../tables/azfwnatrule.md)<br>[`AZFWNatRuleAggregation`](../tables/azfwnatruleaggregation.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AZFWNetworkRuleAggregation`](../tables/azfwnetworkruleaggregation.md)<br>[`AZFWThreatIntel`](../tables/azfwthreatintel.md)<br>[`AddonAzureBackupJobs`](../tables/addonazurebackupjobs.md)<br>[`AddonAzureBackupPolicy`](../tables/addonazurebackuppolicy.md)<br>[`AddonAzureBackupProtectedInstance`](../tables/addonazurebackupprotectedinstance.md)<br>[`AddonAzureBackupStorage`](../tables/addonazurebackupstorage.md)<br>[`Alert`](../tables/alert.md)<br>[`AuditLogs`](../tables/auditlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`AzureMetrics`](../tables/azuremetrics.md)<br>[`CloudAppEvents`](../tables/cloudappevents.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ConfigurationChange`](../tables/configurationchange.md)<br>[`ConfigurationData`](../tables/configurationdata.md)<br>[`DeviceEvents`](../tables/deviceevents.md)<br>[`DeviceFileCertificateInfo`](../tables/devicefilecertificateinfo.md)<br>[`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md)<br>[`DeviceInfo`](../tables/deviceinfo.md)<br>[`DeviceLogonEvents`](../tables/devicelogonevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceNetworkInfo`](../tables/devicenetworkinfo.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`DeviceRegistryEvents`](../tables/deviceregistryevents.md)<br>[`DeviceTvmSecureConfigurationAssessment`](../tables/devicetvmsecureconfigurationassessment.md)<br>[`DeviceTvmSoftwareInventory`](../tables/devicetvmsoftwareinventory.md)<br>[`DeviceTvmSoftwareVulnerabilities`](../tables/devicetvmsoftwarevulnerabilities.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`DnsInventory`](../tables/dnsinventory.md)<br>[`EmailAttachmentInfo`](../tables/emailattachmentinfo.md)<br>[`EmailEvents`](../tables/emailevents.md)<br>[`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md)<br>[`EmailUrlInfo`](../tables/emailurlinfo.md)<br>[`Event`](../tables/event.md)<br>[`HuntingBookmark`](../tables/huntingbookmark.md)<br>[`IdentityDirectoryEvents`](../tables/identitydirectoryevents.md)<br>[`IdentityLogonEvents`](../tables/identitylogonevents.md)<br>[`IdentityQueryEvents`](../tables/identityqueryevents.md)<br>[`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md)<br>[`InsightsMetrics`](../tables/insightsmetrics.md)<br>[`LAQueryLogs`](../tables/laquerylogs.md)<br>[`MDCFileIntegrityMonitoringEvents`](../tables/mdcfileintegritymonitoringevents.md)<br>[`McasShadowItReporting`](../tables/mcasshadowitreporting.md)<br>[`NetworkAccessTraffic`](../tables/networkaccesstraffic.md)<br>[`Operation`](../tables/operation.md)<br>[`Perf`](../tables/perf.md)<br>[`ProtectionStatus`](../tables/protectionstatus.md)<br>[`SecureScoreControls`](../tables/securescorecontrols.md)<br>[`SecureScores`](../tables/securescores.md)<br>[`SecurityBaseline`](../tables/securitybaseline.md)<br>[`SecurityBaselineSummary`](../tables/securitybaselinesummary.md)<br>[`SecurityDetection`](../tables/securitydetection.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SecurityIoTRawEvent`](../tables/securityiotrawevent.md)<br>[`SecurityNestedRecommendation`](../tables/securitynestedrecommendation.md)<br>[`SecurityRecommendation`](../tables/securityrecommendation.md)<br>[`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md)<br>[`SentinelHealth`](../tables/sentinelhealth.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`StorageBlobLogs`](../tables/storagebloblogs.md)<br>[`StorageFileLogs`](../tables/storagefilelogs.md)<br>[`StorageQueueLogs`](../tables/storagequeuelogs.md)<br>[`StorageTableLogs`](../tables/storagetablelogs.md)<br>[`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`Update`](../tables/update.md)<br>[`UpdateSummary`](../tables/updatesummary.md)<br>[`UrlClickEvents`](../tables/urlclickevents.md)<br>[`Usage`](../tables/usage.md)<br>[`UserAccessAnalytics`](../tables/useraccessanalytics.md)<br>[`VMBoundPort`](../tables/vmboundport.md)<br>[`VMComputer`](../tables/vmcomputer.md)<br>[`VMConnection`](../tables/vmconnection.md)<br>[`VMProcess`](../tables/vmprocess.md)<br>[`WindowsFirewall`](../tables/windowsfirewall.md)<br>*Internal use:*<br>[`AlertEvidence`](../tables/alertevidence.md)<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SentinelAudit`](../tables/sentinelaudit.md)<br>[`UserPeerAnalytics`](../tables/userpeeranalytics.md)<br>[`Watchlist`](../tables/watchlist.md) |
| [AzureSentinelSecurityAlerts](../content/soc-handbook-azuresentinelsecurityalerts-8f5f1c6c.md) | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [IncidentOverview](../content/soc-handbook-incidentoverview-c120b199.md) | [`Alert`](../tables/alert.md)<br>[`alert`](../tables/alert.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |
| [IntsightsIOCWorkbook](../content/soc-handbook-intsightsiocworkbook-5df8c818.md) | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>[`AuditLogs`](../tables/auditlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`DeviceLogonEvents`](../tables/devicelogonevents.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`HuntingBookmark`](../tables/huntingbookmark.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`Operation`](../tables/operation.md)<br>[`ProtectionStatus`](../tables/protectionstatus.md)<br>[`SecurityBaseline`](../tables/securitybaseline.md)<br>[`SecurityBaselineSummary`](../tables/securitybaselinesummary.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`Update`](../tables/update.md)<br>[`UpdateSummary`](../tables/updatesummary.md)<br>[`Usage`](../tables/usage.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |
| [MITREAttack](../content/soc-handbook-mitreattack-3fb92d64.md) | [`Usage`](../tables/usage.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [SecurityOperationsEfficiency](../content/soc-handbook-securityoperationsefficiency-d083776e.md) | *Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |
| [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Perf`](../tables/perf.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VMConnection`](../tables/vmconnection.md)<br>[`W3CIISLog`](../tables/w3ciislog.md)<br>[`WindowsFirewall`](../tables/windowsfirewall.md)<br>[`WireData`](../tables/wiredata.md) |
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

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

