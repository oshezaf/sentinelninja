# Microsoft Sentinel Tables Index

Tables in Microsoft Sentinel store the security data ingested by data connectors and referenced by content items such as analytics rules and hunting queries. Each table represents a specific data type (such as sign-in logs, network traffic, or security events) and follows a defined schema with columns for relevant attributes.

**Browse:** [🏠](readme.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · **Tables** · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md)

---

## Statistics

| Metric | Count |
|:-------|------:|
| **Total Tables Documented** | **1010** |
| Tables Ingested by Connectors | 781 |
| Tables Referenced by Content Only | 229 |

---

## Tables Index

**Jump to:** [A](#a) | [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [G](#g) | [H](#h) | [I](#i) | [J](#j) | [K](#k) | [L](#l) | [M](#m) | [N](#n) | [O](#o) | [P](#p) | [Q](#q) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v) | [W](#w) | [X](#x) | [Z](#z)

## A

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`AADManagedIdentitySignInLogs`](tables/aadmanagedidentitysigninlogs.md) | [6](tables/aadmanagedidentitysigninlogs.md) | [1](tables/aadmanagedidentitysigninlogs.md) | Analytics, Workbooks |
| [`AADNonInteractiveUserSignInLogs`](tables/aadnoninteractiveusersigninlogs.md) | [14](tables/aadnoninteractiveusersigninlogs.md) | [1](tables/aadnoninteractiveusersigninlogs.md) | Analytics, Hunting, Workbooks |
| [`AADProvisioningLogs`](tables/aadprovisioninglogs.md) | [2](tables/aadprovisioninglogs.md) | [1](tables/aadprovisioninglogs.md) | Workbooks |
| [`AADRiskyServicePrincipals`](tables/aadriskyserviceprincipals.md) | [2](tables/aadriskyserviceprincipals.md) | [1](tables/aadriskyserviceprincipals.md) | Workbooks |
| [`AADRiskyUsers`](tables/aadriskyusers.md) | [2](tables/aadriskyusers.md) | [1](tables/aadriskyusers.md) | Workbooks |
| [`AADServicePrincipalRiskEvents`](tables/aadserviceprincipalriskevents.md) | [2](tables/aadserviceprincipalriskevents.md) | [1](tables/aadserviceprincipalriskevents.md) | Workbooks |
| [`AADServicePrincipalSignInLogs`](tables/aadserviceprincipalsigninlogs.md) | [6](tables/aadserviceprincipalsigninlogs.md) | [1](tables/aadserviceprincipalsigninlogs.md) | Analytics, Workbooks |
| [`AADSignInEventsBeta`](tables/aadsignineventsbeta.md) | [1](tables/aadsignineventsbeta.md) | - | Hunting |
| [`AADUserRiskEvents`](tables/aaduserriskevents.md) | [7](tables/aaduserriskevents.md) | [1](tables/aaduserriskevents.md) | Workbooks |
| [`ABAPAuditLog`](tables/abapauditlog.md) | [4](tables/abapauditlog.md) | [4](tables/abapauditlog.md) | - |
| [`ABNORMAL_CASES_CL`](tables/abnormal-cases-cl.md) | [1](tables/abnormal-cases-cl.md) | [1](tables/abnormal-cases-cl.md) | - |
| [`ABNORMAL_THREAT_MESSAGES_CL`](tables/abnormal-threat-messages-cl.md) | [1](tables/abnormal-threat-messages-cl.md) | [1](tables/abnormal-threat-messages-cl.md) | - |
| [`ADFSSignInLogs`](tables/adfssigninlogs.md) | [3](tables/adfssigninlogs.md) | [1](tables/adfssigninlogs.md) | Analytics, Workbooks |
| [`ADOAuditLogs_CL`](tables/adoauditlogs-cl.md) | [1](tables/adoauditlogs-cl.md) | [1](tables/adoauditlogs-cl.md) | Analytics, Hunting |
| [`AGWAccessLogs`](tables/agwaccesslogs.md) | [1](tables/agwaccesslogs.md) | - | Analytics |
| [`AGWFirewallLogs`](tables/agwfirewalllogs.md) | [1](tables/agwfirewalllogs.md) | - | Analytics |
| [`AIShield_CL`](tables/aishield-cl.md) | [1](tables/aishield-cl.md) | [1](tables/aishield-cl.md) | Analytics, Workbooks |
| [`AIX_Audit_CL`](tables/aix-audit-cl.md) | [1](tables/aix-audit-cl.md) | [1](tables/aix-audit-cl.md) | - |
| [`ALERT`](tables/alert.md) | [1](tables/alert.md) | - | Workbooks |
| [`ARGOS_CL`](tables/argos-cl.md) | [1](tables/argos-cl.md) | [1](tables/argos-cl.md) | Analytics, Workbooks |
| [`ASimAuditEventLogs`](tables/asimauditeventlogs.md) | [6](tables/asimauditeventlogs.md) | [3](tables/asimauditeventlogs.md) | Analytics, Workbooks |
| [`ASimAuthenticationEventLogs`](tables/asimauthenticationeventlogs.md) | [3](tables/asimauthenticationeventlogs.md) | [2](tables/asimauthenticationeventlogs.md) | Workbooks |
| [`ASimDnsActivityLogs`](tables/asimdnsactivitylogs.md) | [4](tables/asimdnsactivitylogs.md) | [2](tables/asimdnsactivitylogs.md) | Workbooks |
| [`ASimFileEventLogs`](tables/asimfileeventlogs.md) | [3](tables/asimfileeventlogs.md) | [2](tables/asimfileeventlogs.md) | Workbooks |
| [`ASimNetworkSessionLogs`](tables/asimnetworksessionlogs.md) | [6](tables/asimnetworksessionlogs.md) | [4](tables/asimnetworksessionlogs.md) | Workbooks |
| [`ASimProcessEventLogs`](tables/asimprocesseventlogs.md) | [4](tables/asimprocesseventlogs.md) | [2](tables/asimprocesseventlogs.md) | Workbooks |
| [`ASimRegistryEventLogs`](tables/asimregistryeventlogs.md) | [2](tables/asimregistryeventlogs.md) | [2](tables/asimregistryeventlogs.md) | - |
| [`ASimUserManagementActivityLogs`](tables/asimusermanagementactivitylogs.md) | [1](tables/asimusermanagementactivitylogs.md) | [1](tables/asimusermanagementactivitylogs.md) | - |
| [`ASimWebSessionLogs`](tables/asimwebsessionlogs.md) | [3](tables/asimwebsessionlogs.md) | [1](tables/asimwebsessionlogs.md) | Workbooks |
| [`AWSCloudFront_AccessLog_CL`](tables/awscloudfront-accesslog-cl.md) | [1](tables/awscloudfront-accesslog-cl.md) | [1](tables/awscloudfront-accesslog-cl.md) | - |
| [`AWSCloudTrail`](tables/awscloudtrail.md) | [13](tables/awscloudtrail.md) | [2](tables/awscloudtrail.md) | Analytics, Hunting, Workbooks |
| [`AWSCloudWatch`](tables/awscloudwatch.md) | [1](tables/awscloudwatch.md) | [1](tables/awscloudwatch.md) | - |
| [`AWSGuardDuty`](tables/awsguardduty.md) | [4](tables/awsguardduty.md) | [1](tables/awsguardduty.md) | Analytics, Workbooks |
| [`AWSNetworkFirewallAlert`](tables/awsnetworkfirewallalert.md) | [1](tables/awsnetworkfirewallalert.md) | [1](tables/awsnetworkfirewallalert.md) | - |
| [`AWSNetworkFirewallFlow`](tables/awsnetworkfirewallflow.md) | [1](tables/awsnetworkfirewallflow.md) | [1](tables/awsnetworkfirewallflow.md) | - |
| [`AWSNetworkFirewallTls`](tables/awsnetworkfirewalltls.md) | [1](tables/awsnetworkfirewalltls.md) | [1](tables/awsnetworkfirewalltls.md) | - |
| [`AWSRoute53Resolver`](tables/awsroute53resolver.md) | [1](tables/awsroute53resolver.md) | [1](tables/awsroute53resolver.md) | - |
| [`AWSS3ServerAccess`](tables/awss3serveraccess.md) | [1](tables/awss3serveraccess.md) | [1](tables/awss3serveraccess.md) | - |
| [`AWSSecurityHubFindings`](tables/awssecurityhubfindings.md) | [1](tables/awssecurityhubfindings.md) | [1](tables/awssecurityhubfindings.md) | Analytics, Hunting |
| [`AWSVPCFlow`](tables/awsvpcflow.md) | [8](tables/awsvpcflow.md) | [2](tables/awsvpcflow.md) | Workbooks |
| [`AWSWAF`](tables/awswaf.md) | [1](tables/awswaf.md) | [1](tables/awswaf.md) | - |
| [`AZFWApplicationRule`](tables/azfwapplicationrule.md) | [4](tables/azfwapplicationrule.md) | [1](tables/azfwapplicationrule.md) | Analytics, Hunting, Workbooks |
| [`AZFWApplicationRuleAggregation`](tables/azfwapplicationruleaggregation.md) | [1](tables/azfwapplicationruleaggregation.md) | - | Workbooks |
| [`AZFWDnsQuery`](tables/azfwdnsquery.md) | [3](tables/azfwdnsquery.md) | [1](tables/azfwdnsquery.md) | Workbooks |
| [`AZFWFatFlow`](tables/azfwfatflow.md) | [1](tables/azfwfatflow.md) | [1](tables/azfwfatflow.md) | - |
| [`AZFWFlowTrace`](tables/azfwflowtrace.md) | [1](tables/azfwflowtrace.md) | [1](tables/azfwflowtrace.md) | Analytics |
| [`AZFWIdpsSignature`](tables/azfwidpssignature.md) | [3](tables/azfwidpssignature.md) | [1](tables/azfwidpssignature.md) | Analytics, Workbooks |
| [`AZFWInternalFqdnResolutionFailure`](tables/azfwinternalfqdnresolutionfailure.md) | [1](tables/azfwinternalfqdnresolutionfailure.md) | [1](tables/azfwinternalfqdnresolutionfailure.md) | - |
| [`AZFWNatRule`](tables/azfwnatrule.md) | [3](tables/azfwnatrule.md) | [1](tables/azfwnatrule.md) | Workbooks |
| [`AZFWNatRuleAggregation`](tables/azfwnatruleaggregation.md) | [1](tables/azfwnatruleaggregation.md) | - | Workbooks |
| [`AZFWNetworkRule`](tables/azfwnetworkrule.md) | [4](tables/azfwnetworkrule.md) | [1](tables/azfwnetworkrule.md) | Analytics, Hunting, Workbooks |
| [`AZFWNetworkRuleAggregation`](tables/azfwnetworkruleaggregation.md) | [1](tables/azfwnetworkruleaggregation.md) | - | Workbooks |
| [`AZFWThreatIntel`](tables/azfwthreatintel.md) | [3](tables/azfwthreatintel.md) | [1](tables/azfwthreatintel.md) | Analytics, Workbooks |
| [`AddonAzureBackupJobs`](tables/addonazurebackupjobs.md) | [1](tables/addonazurebackupjobs.md) | - | Workbooks |
| [`AddonAzureBackupPolicy`](tables/addonazurebackuppolicy.md) | [1](tables/addonazurebackuppolicy.md) | - | Workbooks |
| [`AddonAzureBackupProtectedInstance`](tables/addonazurebackupprotectedinstance.md) | [1](tables/addonazurebackupprotectedinstance.md) | - | Workbooks |
| [`AddonAzureBackupStorage`](tables/addonazurebackupstorage.md) | [1](tables/addonazurebackupstorage.md) | - | Workbooks |
| [`Alert`](tables/alert.md) | [8](tables/alert.md) | - | Workbooks |
| [`AlertEvidence`](tables/alertevidence.md) | [7](tables/alertevidence.md) | [1](tables/alertevidence.md) | Analytics, Hunting, Workbooks |
| [`AlertInfo`](tables/alertinfo.md) | [2](tables/alertinfo.md) | - | Analytics, Hunting, Workbooks |
| [`AliCloudActionTrailLogs_CL`](tables/alicloudactiontraillogs-cl.md) | [1](tables/alicloudactiontraillogs-cl.md) | [1](tables/alicloudactiontraillogs-cl.md) | - |
| [`AliCloud_CL`](tables/alicloud-cl.md) | [1](tables/alicloud-cl.md) | [1](tables/alicloud-cl.md) | - |
| [`AlsidForADLog_CL`](tables/alsidforadlog-cl.md) | [1](tables/alsidforadlog-cl.md) | [1](tables/alsidforadlog-cl.md) | - |
| [`Anomalies`](tables/anomalies.md) | [5](tables/anomalies.md) | - | Analytics, Hunting, Workbooks |
| [`Anvilogic_Alerts_CL`](tables/anvilogic-alerts-cl.md) | [1](tables/anvilogic-alerts-cl.md) | [1](tables/anvilogic-alerts-cl.md) | Analytics |
| [`ApacheHTTPServer_CL`](tables/apachehttpserver-cl.md) | [3](tables/apachehttpserver-cl.md) | [2](tables/apachehttpserver-cl.md) | Analytics, Hunting, Workbooks |
| [`ApigeeX_CL`](tables/apigeex-cl.md) | [1](tables/apigeex-cl.md) | [1](tables/apigeex-cl.md) | - |
| [`AppServiceHTTPLogs`](tables/appservicehttplogs.md) | [2](tables/appservicehttplogs.md) | - | Analytics |
| [`Armis_Activities_CL`](tables/armis-activities-cl.md) | [1](tables/armis-activities-cl.md) | [2](tables/armis-activities-cl.md) | - |
| [`Armis_Alerts_CL`](tables/armis-alerts-cl.md) | [1](tables/armis-alerts-cl.md) | [2](tables/armis-alerts-cl.md) | - |
| [`Armis_Devices_CL`](tables/armis-devices-cl.md) | [1](tables/armis-devices-cl.md) | [1](tables/armis-devices-cl.md) | - |
| [`Armorblox_CL`](tables/armorblox-cl.md) | [1](tables/armorblox-cl.md) | [1](tables/armorblox-cl.md) | Analytics, Workbooks |
| [`AtlassianConfluenceNativePoller_CL`](tables/atlassianconfluencenativepoller-cl.md) | [1](tables/atlassianconfluencenativepoller-cl.md) | [1](tables/atlassianconfluencenativepoller-cl.md) | - |
| [`AuditLogs`](tables/auditlogs.md) | [19](tables/auditlogs.md) | [1](tables/auditlogs.md) | Analytics, Hunting, Workbooks |
| [`Audit_CL`](tables/audit-cl.md) | [1](tables/audit-cl.md) | [1](tables/audit-cl.md) | Analytics, Workbooks |
| [`Audits_Data_CL`](tables/audits-data-cl.md) | [2](tables/audits-data-cl.md) | [1](tables/audits-data-cl.md) | Workbooks |
| [`Auth0AM_CL`](tables/auth0am-cl.md) | [1](tables/auth0am-cl.md) | [1](tables/auth0am-cl.md) | - |
| [`Auth0Logs_CL`](tables/auth0logs-cl.md) | [1](tables/auth0logs-cl.md) | [1](tables/auth0logs-cl.md) | - |
| [`Authomize_v2_CL`](tables/authomize-v2-cl.md) | [1](tables/authomize-v2-cl.md) | [1](tables/authomize-v2-cl.md) | Analytics, Hunting, Workbooks |
| [`Awareness_Performance_Details_CL`](tables/awareness-performance-details-cl.md) | [1](tables/awareness-performance-details-cl.md) | [1](tables/awareness-performance-details-cl.md) | - |
| [`Awareness_SafeScore_Details_CL`](tables/awareness-safescore-details-cl.md) | [1](tables/awareness-safescore-details-cl.md) | [1](tables/awareness-safescore-details-cl.md) | Workbooks |
| [`Awareness_User_Data_CL`](tables/awareness-user-data-cl.md) | [1](tables/awareness-user-data-cl.md) | [1](tables/awareness-user-data-cl.md) | Workbooks |
| [`Awareness_Watchlist_Details_CL`](tables/awareness-watchlist-details-cl.md) | [1](tables/awareness-watchlist-details-cl.md) | [1](tables/awareness-watchlist-details-cl.md) | Workbooks |
| [`AwsBucketAPILogs_CL`](tables/awsbucketapilogs-cl.md) | [1](tables/awsbucketapilogs-cl.md) | - | Hunting |
| [`AzureActivity`](tables/azureactivity.md) | [19](tables/azureactivity.md) | [1](tables/azureactivity.md) | Analytics, Hunting, Workbooks |
| [`AzureDevOpsAuditing`](tables/azuredevopsauditing.md) | [3](tables/azuredevopsauditing.md) | - | Analytics, Hunting, Workbooks |
| [`AzureDiagnostics`](tables/azurediagnostics.md) | [35](tables/azurediagnostics.md) | [15](tables/azurediagnostics.md) | Analytics, Hunting, Workbooks |
| [`AzureMetrics`](tables/azuremetrics.md) | [4](tables/azuremetrics.md) | [2](tables/azuremetrics.md) | Workbooks |
| [`AzureNetworkAnalytics_CL`](tables/azurenetworkanalytics-cl.md) | [5](tables/azurenetworkanalytics-cl.md) | - | Analytics, Hunting, Workbooks |
| [`agari_apdpolicy_log_CL`](tables/agari-apdpolicy-log-cl.md) | [1](tables/agari-apdpolicy-log-cl.md) | [1](tables/agari-apdpolicy-log-cl.md) | - |
| [`agari_apdtc_log_CL`](tables/agari-apdtc-log-cl.md) | [1](tables/agari-apdtc-log-cl.md) | [1](tables/agari-apdtc-log-cl.md) | - |
| [`agari_bpalerts_log_CL`](tables/agari-bpalerts-log-cl.md) | [1](tables/agari-bpalerts-log-cl.md) | [1](tables/agari-bpalerts-log-cl.md) | - |
| [`alert`](tables/alert.md) | [12](tables/alert.md) | - | Analytics, Workbooks |
| [`alertscompromisedcredentialdata_CL`](tables/alertscompromisedcredentialdata-cl.md) | [1](tables/alertscompromisedcredentialdata-cl.md) | [1](tables/alertscompromisedcredentialdata-cl.md) | Workbooks |
| [`alertsctepdata_CL`](tables/alertsctepdata-cl.md) | [1](tables/alertsctepdata-cl.md) | [1](tables/alertsctepdata-cl.md) | Workbooks |
| [`alertsdlpdata_CL`](tables/alertsdlpdata-cl.md) | [1](tables/alertsdlpdata-cl.md) | [1](tables/alertsdlpdata-cl.md) | Workbooks |
| [`alertsmalsitedata_CL`](tables/alertsmalsitedata-cl.md) | [1](tables/alertsmalsitedata-cl.md) | [1](tables/alertsmalsitedata-cl.md) | Workbooks |
| [`alertsmalwaredata_CL`](tables/alertsmalwaredata-cl.md) | [1](tables/alertsmalwaredata-cl.md) | [1](tables/alertsmalwaredata-cl.md) | Workbooks |
| [`alertspolicydata_CL`](tables/alertspolicydata-cl.md) | [1](tables/alertspolicydata-cl.md) | [1](tables/alertspolicydata-cl.md) | Workbooks |
| [`alertsquarantinedata_CL`](tables/alertsquarantinedata-cl.md) | [1](tables/alertsquarantinedata-cl.md) | [1](tables/alertsquarantinedata-cl.md) | Workbooks |
| [`alertsremediationdata_CL`](tables/alertsremediationdata-cl.md) | [1](tables/alertsremediationdata-cl.md) | [1](tables/alertsremediationdata-cl.md) | Workbooks |
| [`alertssecurityassessmentdata_CL`](tables/alertssecurityassessmentdata-cl.md) | [1](tables/alertssecurityassessmentdata-cl.md) | [1](tables/alertssecurityassessmentdata-cl.md) | Workbooks |
| [`alertsubadata_CL`](tables/alertsubadata-cl.md) | [1](tables/alertsubadata-cl.md) | [1](tables/alertsubadata-cl.md) | Workbooks |
| [`anomalies`](tables/anomalies.md) | [8](tables/anomalies.md) | - | Analytics, Hunting, Workbooks |
| [`apifirewall_log_1_CL`](tables/apifirewall-log-1-cl.md) | [1](tables/apifirewall-log-1-cl.md) | [1](tables/apifirewall-log-1-cl.md) | Analytics, Workbooks |
| [`argsentdc_CL`](tables/argsentdc-cl.md) | [1](tables/argsentdc-cl.md) | [1](tables/argsentdc-cl.md) | - |
| [`atlassian_beacon_alerts_CL`](tables/atlassian-beacon-alerts-cl.md) | [1](tables/atlassian-beacon-alerts-cl.md) | [1](tables/atlassian-beacon-alerts-cl.md) | Analytics, Playbooks |

## B

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`BHEAttackPathsData_CL`](tables/bheattackpathsdata-cl.md) | [1](tables/bheattackpathsdata-cl.md) | [1](tables/bheattackpathsdata-cl.md) | Analytics, Workbooks |
| [`BHEAttackPathsTimelineData_CL`](tables/bheattackpathstimelinedata-cl.md) | [1](tables/bheattackpathstimelinedata-cl.md) | - | Workbooks |
| [`BHEAuditLogsData_CL`](tables/bheauditlogsdata-cl.md) | [1](tables/bheauditlogsdata-cl.md) | - | Workbooks |
| [`BHEFindingTrendsData_CL`](tables/bhefindingtrendsdata-cl.md) | [1](tables/bhefindingtrendsdata-cl.md) | - | Workbooks |
| [`BHEPostureHistoryData_CL`](tables/bheposturehistorydata-cl.md) | [1](tables/bheposturehistorydata-cl.md) | - | Workbooks |
| [`BHETierZeroAssetsData_CL`](tables/bhetierzeroassetsdata-cl.md) | [1](tables/bhetierzeroassetsdata-cl.md) | - | Workbooks |
| [`BSMmacOS_CL`](tables/bsmmacos-cl.md) | [1](tables/bsmmacos-cl.md) | [1](tables/bsmmacos-cl.md) | - |
| [`Barracuda_CL`](tables/barracuda-cl.md) | [1](tables/barracuda-cl.md) | [1](tables/barracuda-cl.md) | - |
| [`BehaviorAnalytics`](tables/behavioranalytics.md) | [11](tables/behavioranalytics.md) | - | Analytics, Hunting, Workbooks |
| [`BetterMTDAppLog_CL`](tables/bettermtdapplog-cl.md) | [1](tables/bettermtdapplog-cl.md) | [1](tables/bettermtdapplog-cl.md) | Workbooks |
| [`BetterMTDDeviceLog_CL`](tables/bettermtddevicelog-cl.md) | [1](tables/bettermtddevicelog-cl.md) | [1](tables/bettermtddevicelog-cl.md) | Workbooks |
| [`BetterMTDIncidentLog_CL`](tables/bettermtdincidentlog-cl.md) | [1](tables/bettermtdincidentlog-cl.md) | [1](tables/bettermtdincidentlog-cl.md) | Workbooks |
| [`BetterMTDNetflowLog_CL`](tables/bettermtdnetflowlog-cl.md) | [1](tables/bettermtdnetflowlog-cl.md) | [1](tables/bettermtdnetflowlog-cl.md) | Workbooks |
| [`BigIDDSPMCatalog_CL`](tables/bigiddspmcatalog-cl.md) | [1](tables/bigiddspmcatalog-cl.md) | [1](tables/bigiddspmcatalog-cl.md) | - |
| [`BitglassLogs_CL`](tables/bitglasslogs-cl.md) | [1](tables/bitglasslogs-cl.md) | [1](tables/bitglasslogs-cl.md) | Analytics, Hunting, Workbooks |
| [`BitsightAlerts_data_CL`](tables/bitsightalerts-data-cl.md) | [1](tables/bitsightalerts-data-cl.md) | [1](tables/bitsightalerts-data-cl.md) | Analytics |
| [`BitsightBreaches_data_CL`](tables/bitsightbreaches-data-cl.md) | [1](tables/bitsightbreaches-data-cl.md) | [1](tables/bitsightbreaches-data-cl.md) | Analytics |
| [`BitsightCompany_details_CL`](tables/bitsightcompany-details-cl.md) | [1](tables/bitsightcompany-details-cl.md) | [1](tables/bitsightcompany-details-cl.md) | Workbooks |
| [`BitsightCompany_rating_details_CL`](tables/bitsightcompany-rating-details-cl.md) | [1](tables/bitsightcompany-rating-details-cl.md) | [1](tables/bitsightcompany-rating-details-cl.md) | - |
| [`BitsightDiligence_historical_statistics_CL`](tables/bitsightdiligence-historical-statistics-cl.md) | [1](tables/bitsightdiligence-historical-statistics-cl.md) | [1](tables/bitsightdiligence-historical-statistics-cl.md) | Workbooks |
| [`BitsightDiligence_statistics_CL`](tables/bitsightdiligence-statistics-cl.md) | [1](tables/bitsightdiligence-statistics-cl.md) | [1](tables/bitsightdiligence-statistics-cl.md) | - |
| [`BitsightFindings_data_CL`](tables/bitsightfindings-data-cl.md) | [1](tables/bitsightfindings-data-cl.md) | [1](tables/bitsightfindings-data-cl.md) | Analytics, Workbooks |
| [`BitsightFindings_summary_CL`](tables/bitsightfindings-summary-cl.md) | [1](tables/bitsightfindings-summary-cl.md) | [1](tables/bitsightfindings-summary-cl.md) | Workbooks |
| [`BitsightGraph_data_CL`](tables/bitsightgraph-data-cl.md) | [1](tables/bitsightgraph-data-cl.md) | [1](tables/bitsightgraph-data-cl.md) | Analytics, Workbooks |
| [`BitsightIndustrial_statistics_CL`](tables/bitsightindustrial-statistics-cl.md) | [1](tables/bitsightindustrial-statistics-cl.md) | [1](tables/bitsightindustrial-statistics-cl.md) | - |
| [`BitsightObservation_statistics_CL`](tables/bitsightobservation-statistics-cl.md) | [1](tables/bitsightobservation-statistics-cl.md) | [1](tables/bitsightobservation-statistics-cl.md) | - |
| [`BitwardenEventLogs_CL`](tables/bitwardeneventlogs-cl.md) | [1](tables/bitwardeneventlogs-cl.md) | [1](tables/bitwardeneventlogs-cl.md) | Workbooks |
| [`BitwardenGroups_CL`](tables/bitwardengroups-cl.md) | [1](tables/bitwardengroups-cl.md) | [1](tables/bitwardengroups-cl.md) | Workbooks |
| [`BitwardenMembers_CL`](tables/bitwardenmembers-cl.md) | [1](tables/bitwardenmembers-cl.md) | [1](tables/bitwardenmembers-cl.md) | Workbooks |
| [`BoxEventsV2_CL`](tables/boxeventsv2-cl.md) | [1](tables/boxeventsv2-cl.md) | [1](tables/boxeventsv2-cl.md) | Analytics, Hunting, Workbooks |
| [`BoxEvents_CL`](tables/boxevents-cl.md) | [1](tables/boxevents-cl.md) | [1](tables/boxevents-cl.md) | Analytics, Hunting, Workbooks |
| [`barracuda_CL`](tables/barracuda-cl.md) | [2](tables/barracuda-cl.md) | [1](tables/barracuda-cl.md) | Workbooks |
| [`beSECURE_Audit_CL`](tables/besecure-audit-cl.md) | [1](tables/besecure-audit-cl.md) | [1](tables/besecure-audit-cl.md) | - |
| [`beSECURE_ScanEvent_CL`](tables/besecure-scanevent-cl.md) | [1](tables/besecure-scanevent-cl.md) | [1](tables/besecure-scanevent-cl.md) | - |
| [`beSECURE_ScanResults_CL`](tables/besecure-scanresults-cl.md) | [1](tables/besecure-scanresults-cl.md) | [1](tables/besecure-scanresults-cl.md) | - |

## C

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`CBSLog_Azure_1_CL`](tables/cbslog-azure-1-cl.md) | [1](tables/cbslog-azure-1-cl.md) | [1](tables/cbslog-azure-1-cl.md) | Analytics |
| [`CarbonBlackAuditLogs_CL`](tables/carbonblackauditlogs-cl.md) | [2](tables/carbonblackauditlogs-cl.md) | [1](tables/carbonblackauditlogs-cl.md) | Workbooks |
| [`CarbonBlackEvents_CL`](tables/carbonblackevents-cl.md) | [2](tables/carbonblackevents-cl.md) | [1](tables/carbonblackevents-cl.md) | Analytics, Workbooks |
| [`CarbonBlackNotifications_CL`](tables/carbonblacknotifications-cl.md) | [2](tables/carbonblacknotifications-cl.md) | [1](tables/carbonblacknotifications-cl.md) | Analytics, Workbooks |
| [`CarbonBlack_Alerts_CL`](tables/carbonblack-alerts-cl.md) | [5](tables/carbonblack-alerts-cl.md) | [1](tables/carbonblack-alerts-cl.md) | Workbooks |
| [`CarbonBlack_Watchlist_CL`](tables/carbonblack-watchlist-cl.md) | [1](tables/carbonblack-watchlist-cl.md) | [1](tables/carbonblack-watchlist-cl.md) | - |
| [`CiscoDuo_CL`](tables/ciscoduo-cl.md) | [1](tables/ciscoduo-cl.md) | [1](tables/ciscoduo-cl.md) | Analytics, Hunting, Workbooks |
| [`CiscoETD_CL`](tables/ciscoetd-cl.md) | [1](tables/ciscoetd-cl.md) | [1](tables/ciscoetd-cl.md) | Workbooks |
| [`CiscoMerakiNativePoller_CL`](tables/ciscomerakinativepoller-cl.md) | [1](tables/ciscomerakinativepoller-cl.md) | [2](tables/ciscomerakinativepoller-cl.md) | Workbooks |
| [`CiscoSDWANNetflow_CL`](tables/ciscosdwannetflow-cl.md) | [1](tables/ciscosdwannetflow-cl.md) | [1](tables/ciscosdwannetflow-cl.md) | Analytics, Workbooks |
| [`CiscoSecureEndpointAuditLogsV2_CL`](tables/ciscosecureendpointauditlogsv2-cl.md) | [1](tables/ciscosecureendpointauditlogsv2-cl.md) | [1](tables/ciscosecureendpointauditlogsv2-cl.md) | Analytics, Hunting, Workbooks |
| [`CiscoSecureEndpointEventsV2_CL`](tables/ciscosecureendpointeventsv2-cl.md) | [1](tables/ciscosecureendpointeventsv2-cl.md) | [1](tables/ciscosecureendpointeventsv2-cl.md) | Analytics, Hunting, Workbooks |
| [`CiscoSecureEndpoint_CL`](tables/ciscosecureendpoint-cl.md) | [1](tables/ciscosecureendpoint-cl.md) | [1](tables/ciscosecureendpoint-cl.md) | Analytics, Hunting, Workbooks |
| [`Cisco_Umbrella_audit_CL`](tables/cisco-umbrella-audit-cl.md) | [1](tables/cisco-umbrella-audit-cl.md) | [2](tables/cisco-umbrella-audit-cl.md) | Analytics, Hunting, Workbooks |
| [`Cisco_Umbrella_cloudfirewall_CL`](tables/cisco-umbrella-cloudfirewall-cl.md) | [1](tables/cisco-umbrella-cloudfirewall-cl.md) | [2](tables/cisco-umbrella-cloudfirewall-cl.md) | Analytics, Hunting, Workbooks |
| [`Cisco_Umbrella_dlp_CL`](tables/cisco-umbrella-dlp-cl.md) | [1](tables/cisco-umbrella-dlp-cl.md) | [2](tables/cisco-umbrella-dlp-cl.md) | Analytics, Hunting, Workbooks |
| [`Cisco_Umbrella_dns_CL`](tables/cisco-umbrella-dns-cl.md) | [2](tables/cisco-umbrella-dns-cl.md) | [2](tables/cisco-umbrella-dns-cl.md) | Analytics, Hunting, Workbooks |
| [`Cisco_Umbrella_fileevent_CL`](tables/cisco-umbrella-fileevent-cl.md) | [1](tables/cisco-umbrella-fileevent-cl.md) | [2](tables/cisco-umbrella-fileevent-cl.md) | Analytics, Hunting, Workbooks |
| [`Cisco_Umbrella_firewall_CL`](tables/cisco-umbrella-firewall-cl.md) | [1](tables/cisco-umbrella-firewall-cl.md) | [2](tables/cisco-umbrella-firewall-cl.md) | - |
| [`Cisco_Umbrella_intrusion_CL`](tables/cisco-umbrella-intrusion-cl.md) | [1](tables/cisco-umbrella-intrusion-cl.md) | [2](tables/cisco-umbrella-intrusion-cl.md) | Analytics, Hunting, Workbooks |
| [`Cisco_Umbrella_ip_CL`](tables/cisco-umbrella-ip-cl.md) | [1](tables/cisco-umbrella-ip-cl.md) | [2](tables/cisco-umbrella-ip-cl.md) | Analytics, Hunting, Workbooks |
| [`Cisco_Umbrella_proxy_CL`](tables/cisco-umbrella-proxy-cl.md) | [1](tables/cisco-umbrella-proxy-cl.md) | [2](tables/cisco-umbrella-proxy-cl.md) | Analytics, Hunting, Workbooks |
| [`Cisco_Umbrella_ravpnlogs_CL`](tables/cisco-umbrella-ravpnlogs-cl.md) | [1](tables/cisco-umbrella-ravpnlogs-cl.md) | [2](tables/cisco-umbrella-ravpnlogs-cl.md) | Analytics, Hunting, Workbooks |
| [`Cisco_Umbrella_ztaflow_CL`](tables/cisco-umbrella-ztaflow-cl.md) | [1](tables/cisco-umbrella-ztaflow-cl.md) | [2](tables/cisco-umbrella-ztaflow-cl.md) | Analytics, Hunting, Workbooks |
| [`Cisco_Umbrella_ztna_CL`](tables/cisco-umbrella-ztna-cl.md) | [1](tables/cisco-umbrella-ztna-cl.md) | [2](tables/cisco-umbrella-ztna-cl.md) | Analytics, Hunting, Workbooks |
| [`CitrixAnalytics_indicatorEventDetails_CL`](tables/citrixanalytics-indicatoreventdetails-cl.md) | [1](tables/citrixanalytics-indicatoreventdetails-cl.md) | [1](tables/citrixanalytics-indicatoreventdetails-cl.md) | Workbooks |
| [`CitrixAnalytics_indicatorSummary_CL`](tables/citrixanalytics-indicatorsummary-cl.md) | [1](tables/citrixanalytics-indicatorsummary-cl.md) | [1](tables/citrixanalytics-indicatorsummary-cl.md) | Workbooks |
| [`CitrixAnalytics_riskScoreChange_CL`](tables/citrixanalytics-riskscorechange-cl.md) | [1](tables/citrixanalytics-riskscorechange-cl.md) | [1](tables/citrixanalytics-riskscorechange-cl.md) | Workbooks |
| [`CitrixAnalytics_userProfile_CL`](tables/citrixanalytics-userprofile-cl.md) | [1](tables/citrixanalytics-userprofile-cl.md) | [1](tables/citrixanalytics-userprofile-cl.md) | Workbooks |
| [`CloudAppEvents`](tables/cloudappevents.md) | [5](tables/cloudappevents.md) | [1](tables/cloudappevents.md) | Analytics, Hunting, Workbooks |
| [`CloudGuard_SecurityEvents_CL`](tables/cloudguard-securityevents-cl.md) | [1](tables/cloudguard-securityevents-cl.md) | [1](tables/cloudguard-securityevents-cl.md) | - |
| [`Cloud_Integrated_CL`](tables/cloud-integrated-cl.md) | [1](tables/cloud-integrated-cl.md) | [1](tables/cloud-integrated-cl.md) | Workbooks |
| [`CloudflareV2_CL`](tables/cloudflarev2-cl.md) | [2](tables/cloudflarev2-cl.md) | [1](tables/cloudflarev2-cl.md) | Analytics, Hunting, Workbooks |
| [`Cloudflare_CL`](tables/cloudflare-cl.md) | [2](tables/cloudflare-cl.md) | [1](tables/cloudflare-cl.md) | Analytics, Hunting, Workbooks |
| [`Cofense_Triage_failed_indicators_CL`](tables/cofense-triage-failed-indicators-cl.md) | [1](tables/cofense-triage-failed-indicators-cl.md) | [1](tables/cofense-triage-failed-indicators-cl.md) | - |
| [`CognniIncidents_CL`](tables/cognniincidents-cl.md) | [1](tables/cognniincidents-cl.md) | [1](tables/cognniincidents-cl.md) | Analytics, Workbooks |
| [`Cohesity_CL`](tables/cohesity-cl.md) | [1](tables/cohesity-cl.md) | [1](tables/cohesity-cl.md) | - |
| [`CommonSecurityLog`](tables/commonsecuritylog.md) | [80](tables/commonsecuritylog.md) | [88](tables/commonsecuritylog.md) | Analytics, Hunting, Playbooks, Workbooks |
| [`Communication_Data_CL`](tables/communication-data-cl.md) | [1](tables/communication-data-cl.md) | - | Workbooks |
| [`CommvaultSecurityIQ_CL`](tables/commvaultsecurityiq-cl.md) | [1](tables/commvaultsecurityiq-cl.md) | [1](tables/commvaultsecurityiq-cl.md) | Analytics |
| [`ConfigurationChange`](tables/configurationchange.md) | [6](tables/configurationchange.md) | - | Workbooks |
| [`ConfigurationData`](tables/configurationdata.md) | [3](tables/configurationdata.md) | - | Workbooks |
| [`ConfluenceAuditLogs_CL`](tables/confluenceauditlogs-cl.md) | [1](tables/confluenceauditlogs-cl.md) | [1](tables/confluenceauditlogs-cl.md) | - |
| [`Confluence_Audit_CL`](tables/confluence-audit-cl.md) | [1](tables/confluence-audit-cl.md) | [1](tables/confluence-audit-cl.md) | - |
| [`ContainerEvent_CL`](tables/containerevent-cl.md) | [1](tables/containerevent-cl.md) | - | Workbooks |
| [`ContainerInstanceLog_CL`](tables/containerinstancelog-cl.md) | [1](tables/containerinstancelog-cl.md) | - | Workbooks |
| [`ContainerInventory`](tables/containerinventory.md) | [2](tables/containerinventory.md) | [1](tables/containerinventory.md) | Workbooks |
| [`ContrastADRIncident_CL`](tables/contrastadrincident-cl.md) | [1](tables/contrastadrincident-cl.md) | [1](tables/contrastadrincident-cl.md) | Analytics |
| [`ContrastADR_CL`](tables/contrastadr-cl.md) | [1](tables/contrastadr-cl.md) | [1](tables/contrastadr-cl.md) | Analytics |
| [`CopilotActivity`](tables/copilotactivity.md) | [1](tables/copilotactivity.md) | [1](tables/copilotactivity.md) | - |
| [`CoreAzureBackup`](tables/coreazurebackup.md) | [1](tables/coreazurebackup.md) | - | Analytics |
| [`Corelight_CL`](tables/corelight-cl.md) | [2](tables/corelight-cl.md) | [1](tables/corelight-cl.md) | Workbooks |
| [`Corelight_v2_bacnet_CL`](tables/corelight-v2-bacnet-cl.md) | [1](tables/corelight-v2-bacnet-cl.md) | [1](tables/corelight-v2-bacnet-cl.md) | Workbooks |
| [`Corelight_v2_capture_loss_CL`](tables/corelight-v2-capture-loss-cl.md) | [1](tables/corelight-v2-capture-loss-cl.md) | [1](tables/corelight-v2-capture-loss-cl.md) | Workbooks |
| [`Corelight_v2_cip_CL`](tables/corelight-v2-cip-cl.md) | [1](tables/corelight-v2-cip-cl.md) | [1](tables/corelight-v2-cip-cl.md) | Workbooks |
| [`Corelight_v2_conn_CL`](tables/corelight-v2-conn-cl.md) | [1](tables/corelight-v2-conn-cl.md) | [1](tables/corelight-v2-conn-cl.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v2_conn_long_CL`](tables/corelight-v2-conn-long-cl.md) | [1](tables/corelight-v2-conn-long-cl.md) | [1](tables/corelight-v2-conn-long-cl.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v2_conn_red_CL`](tables/corelight-v2-conn-red-cl.md) | [1](tables/corelight-v2-conn-red-cl.md) | [1](tables/corelight-v2-conn-red-cl.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v2_corelight_burst_CL`](tables/corelight-v2-corelight-burst-cl.md) | [1](tables/corelight-v2-corelight-burst-cl.md) | [1](tables/corelight-v2-corelight-burst-cl.md) | Workbooks |
| [`Corelight_v2_corelight_metrics_disk_CL`](tables/corelight-v2-corelight-metrics-disk-cl.md) | [1](tables/corelight-v2-corelight-metrics-disk-cl.md) | - | Workbooks |
| [`Corelight_v2_corelight_metrics_iface_CL`](tables/corelight-v2-corelight-metrics-iface-cl.md) | [1](tables/corelight-v2-corelight-metrics-iface-cl.md) | - | Workbooks |
| [`Corelight_v2_corelight_metrics_memory_CL`](tables/corelight-v2-corelight-metrics-memory-cl.md) | [1](tables/corelight-v2-corelight-metrics-memory-cl.md) | - | Workbooks |
| [`Corelight_v2_corelight_metrics_system_CL`](tables/corelight-v2-corelight-metrics-system-cl.md) | [1](tables/corelight-v2-corelight-metrics-system-cl.md) | - | Workbooks |
| [`Corelight_v2_corelight_metrics_zeek_doctor_CL`](tables/corelight-v2-corelight-metrics-zeek-doctor-cl.md) | [1](tables/corelight-v2-corelight-metrics-zeek-doctor-cl.md) | - | Workbooks |
| [`Corelight_v2_corelight_overall_capture_loss_CL`](tables/corelight-v2-corelight-overall-capture-loss-cl.md) | [1](tables/corelight-v2-corelight-overall-capture-loss-cl.md) | [1](tables/corelight-v2-corelight-overall-capture-loss-cl.md) | Workbooks |
| [`Corelight_v2_corelight_profiling_CL`](tables/corelight-v2-corelight-profiling-cl.md) | [1](tables/corelight-v2-corelight-profiling-cl.md) | [1](tables/corelight-v2-corelight-profiling-cl.md) | Workbooks |
| [`Corelight_v2_datared_CL`](tables/corelight-v2-datared-cl.md) | [1](tables/corelight-v2-datared-cl.md) | [1](tables/corelight-v2-datared-cl.md) | Workbooks |
| [`Corelight_v2_dce_rpc_CL`](tables/corelight-v2-dce-rpc-cl.md) | [1](tables/corelight-v2-dce-rpc-cl.md) | [1](tables/corelight-v2-dce-rpc-cl.md) | Workbooks |
| [`Corelight_v2_dga_CL`](tables/corelight-v2-dga-cl.md) | [1](tables/corelight-v2-dga-cl.md) | [1](tables/corelight-v2-dga-cl.md) | Workbooks |
| [`Corelight_v2_dhcp_CL`](tables/corelight-v2-dhcp-cl.md) | [1](tables/corelight-v2-dhcp-cl.md) | [1](tables/corelight-v2-dhcp-cl.md) | Workbooks |
| [`Corelight_v2_dnp3_CL`](tables/corelight-v2-dnp3-cl.md) | [1](tables/corelight-v2-dnp3-cl.md) | [1](tables/corelight-v2-dnp3-cl.md) | Workbooks |
| [`Corelight_v2_dns_CL`](tables/corelight-v2-dns-cl.md) | [1](tables/corelight-v2-dns-cl.md) | [1](tables/corelight-v2-dns-cl.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v2_dns_red_CL`](tables/corelight-v2-dns-red-cl.md) | [1](tables/corelight-v2-dns-red-cl.md) | [1](tables/corelight-v2-dns-red-cl.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v2_dpd_CL`](tables/corelight-v2-dpd-cl.md) | [1](tables/corelight-v2-dpd-cl.md) | [1](tables/corelight-v2-dpd-cl.md) | Workbooks |
| [`Corelight_v2_encrypted_dns_CL`](tables/corelight-v2-encrypted-dns-cl.md) | [1](tables/corelight-v2-encrypted-dns-cl.md) | [1](tables/corelight-v2-encrypted-dns-cl.md) | Workbooks |
| [`Corelight_v2_enip_CL`](tables/corelight-v2-enip-cl.md) | [1](tables/corelight-v2-enip-cl.md) | [1](tables/corelight-v2-enip-cl.md) | Workbooks |
| [`Corelight_v2_enip_debug_CL`](tables/corelight-v2-enip-debug-cl.md) | [1](tables/corelight-v2-enip-debug-cl.md) | [1](tables/corelight-v2-enip-debug-cl.md) | Workbooks |
| [`Corelight_v2_enip_list_identity_CL`](tables/corelight-v2-enip-list-identity-cl.md) | [1](tables/corelight-v2-enip-list-identity-cl.md) | [1](tables/corelight-v2-enip-list-identity-cl.md) | Workbooks |
| [`Corelight_v2_etc_viz_CL`](tables/corelight-v2-etc-viz-cl.md) | [1](tables/corelight-v2-etc-viz-cl.md) | [1](tables/corelight-v2-etc-viz-cl.md) | Workbooks |
| [`Corelight_v2_files_CL`](tables/corelight-v2-files-cl.md) | [1](tables/corelight-v2-files-cl.md) | [1](tables/corelight-v2-files-cl.md) | Hunting, Workbooks |
| [`Corelight_v2_files_red_CL`](tables/corelight-v2-files-red-cl.md) | [1](tables/corelight-v2-files-red-cl.md) | [1](tables/corelight-v2-files-red-cl.md) | Hunting, Workbooks |
| [`Corelight_v2_ftp_CL`](tables/corelight-v2-ftp-cl.md) | [1](tables/corelight-v2-ftp-cl.md) | [1](tables/corelight-v2-ftp-cl.md) | Workbooks |
| [`Corelight_v2_generic_dns_tunnels_CL`](tables/corelight-v2-generic-dns-tunnels-cl.md) | [1](tables/corelight-v2-generic-dns-tunnels-cl.md) | [1](tables/corelight-v2-generic-dns-tunnels-cl.md) | Workbooks |
| [`Corelight_v2_generic_icmp_tunnels_CL`](tables/corelight-v2-generic-icmp-tunnels-cl.md) | [1](tables/corelight-v2-generic-icmp-tunnels-cl.md) | [1](tables/corelight-v2-generic-icmp-tunnels-cl.md) | Workbooks |
| [`Corelight_v2_http2_CL`](tables/corelight-v2-http2-cl.md) | [1](tables/corelight-v2-http2-cl.md) | [1](tables/corelight-v2-http2-cl.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v2_http_CL`](tables/corelight-v2-http-cl.md) | [1](tables/corelight-v2-http-cl.md) | [1](tables/corelight-v2-http-cl.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v2_http_red_CL`](tables/corelight-v2-http-red-cl.md) | [1](tables/corelight-v2-http-red-cl.md) | [1](tables/corelight-v2-http-red-cl.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v2_icmp_specific_tunnels_CL`](tables/corelight-v2-icmp-specific-tunnels-cl.md) | [1](tables/corelight-v2-icmp-specific-tunnels-cl.md) | [1](tables/corelight-v2-icmp-specific-tunnels-cl.md) | Workbooks |
| [`Corelight_v2_intel_CL`](tables/corelight-v2-intel-cl.md) | [1](tables/corelight-v2-intel-cl.md) | [1](tables/corelight-v2-intel-cl.md) | Workbooks |
| [`Corelight_v2_ipsec_CL`](tables/corelight-v2-ipsec-cl.md) | [1](tables/corelight-v2-ipsec-cl.md) | [1](tables/corelight-v2-ipsec-cl.md) | Workbooks |
| [`Corelight_v2_irc_CL`](tables/corelight-v2-irc-cl.md) | [1](tables/corelight-v2-irc-cl.md) | [1](tables/corelight-v2-irc-cl.md) | Workbooks |
| [`Corelight_v2_iso_cotp_CL`](tables/corelight-v2-iso-cotp-cl.md) | [1](tables/corelight-v2-iso-cotp-cl.md) | [1](tables/corelight-v2-iso-cotp-cl.md) | Workbooks |
| [`Corelight_v2_kerberos_CL`](tables/corelight-v2-kerberos-cl.md) | [1](tables/corelight-v2-kerberos-cl.md) | [1](tables/corelight-v2-kerberos-cl.md) | Workbooks |
| [`Corelight_v2_known_certs_CL`](tables/corelight-v2-known-certs-cl.md) | [1](tables/corelight-v2-known-certs-cl.md) | [1](tables/corelight-v2-known-certs-cl.md) | Workbooks |
| [`Corelight_v2_known_devices_CL`](tables/corelight-v2-known-devices-cl.md) | [1](tables/corelight-v2-known-devices-cl.md) | [1](tables/corelight-v2-known-devices-cl.md) | Workbooks |
| [`Corelight_v2_known_domains_CL`](tables/corelight-v2-known-domains-cl.md) | [1](tables/corelight-v2-known-domains-cl.md) | [1](tables/corelight-v2-known-domains-cl.md) | Workbooks |
| [`Corelight_v2_known_hosts_CL`](tables/corelight-v2-known-hosts-cl.md) | [1](tables/corelight-v2-known-hosts-cl.md) | [1](tables/corelight-v2-known-hosts-cl.md) | Workbooks |
| [`Corelight_v2_known_names_CL`](tables/corelight-v2-known-names-cl.md) | [1](tables/corelight-v2-known-names-cl.md) | [1](tables/corelight-v2-known-names-cl.md) | Workbooks |
| [`Corelight_v2_known_remotes_CL`](tables/corelight-v2-known-remotes-cl.md) | [1](tables/corelight-v2-known-remotes-cl.md) | [1](tables/corelight-v2-known-remotes-cl.md) | Workbooks |
| [`Corelight_v2_known_services_CL`](tables/corelight-v2-known-services-cl.md) | [1](tables/corelight-v2-known-services-cl.md) | [1](tables/corelight-v2-known-services-cl.md) | Workbooks |
| [`Corelight_v2_known_users_CL`](tables/corelight-v2-known-users-cl.md) | [1](tables/corelight-v2-known-users-cl.md) | [1](tables/corelight-v2-known-users-cl.md) | Workbooks |
| [`Corelight_v2_local_subnets_CL`](tables/corelight-v2-local-subnets-cl.md) | [1](tables/corelight-v2-local-subnets-cl.md) | [1](tables/corelight-v2-local-subnets-cl.md) | Workbooks |
| [`Corelight_v2_local_subnets_dj_CL`](tables/corelight-v2-local-subnets-dj-cl.md) | [1](tables/corelight-v2-local-subnets-dj-cl.md) | [1](tables/corelight-v2-local-subnets-dj-cl.md) | Workbooks |
| [`Corelight_v2_local_subnets_graphs_CL`](tables/corelight-v2-local-subnets-graphs-cl.md) | [1](tables/corelight-v2-local-subnets-graphs-cl.md) | [1](tables/corelight-v2-local-subnets-graphs-cl.md) | Workbooks |
| [`Corelight_v2_log4shell_CL`](tables/corelight-v2-log4shell-cl.md) | [1](tables/corelight-v2-log4shell-cl.md) | [1](tables/corelight-v2-log4shell-cl.md) | Workbooks |
| [`Corelight_v2_modbus_CL`](tables/corelight-v2-modbus-cl.md) | [1](tables/corelight-v2-modbus-cl.md) | [1](tables/corelight-v2-modbus-cl.md) | Workbooks |
| [`Corelight_v2_mqtt_connect_CL`](tables/corelight-v2-mqtt-connect-cl.md) | [1](tables/corelight-v2-mqtt-connect-cl.md) | [1](tables/corelight-v2-mqtt-connect-cl.md) | Workbooks |
| [`Corelight_v2_mqtt_publish_CL`](tables/corelight-v2-mqtt-publish-cl.md) | [1](tables/corelight-v2-mqtt-publish-cl.md) | [1](tables/corelight-v2-mqtt-publish-cl.md) | Workbooks |
| [`Corelight_v2_mqtt_subscribe_CL`](tables/corelight-v2-mqtt-subscribe-cl.md) | [1](tables/corelight-v2-mqtt-subscribe-cl.md) | [1](tables/corelight-v2-mqtt-subscribe-cl.md) | Workbooks |
| [`Corelight_v2_mysql_CL`](tables/corelight-v2-mysql-cl.md) | [1](tables/corelight-v2-mysql-cl.md) | [1](tables/corelight-v2-mysql-cl.md) | Workbooks |
| [`Corelight_v2_notice_CL`](tables/corelight-v2-notice-cl.md) | [1](tables/corelight-v2-notice-cl.md) | [1](tables/corelight-v2-notice-cl.md) | Workbooks |
| [`Corelight_v2_ntlm_CL`](tables/corelight-v2-ntlm-cl.md) | [1](tables/corelight-v2-ntlm-cl.md) | [1](tables/corelight-v2-ntlm-cl.md) | Workbooks |
| [`Corelight_v2_ntp_CL`](tables/corelight-v2-ntp-cl.md) | [1](tables/corelight-v2-ntp-cl.md) | [1](tables/corelight-v2-ntp-cl.md) | Workbooks |
| [`Corelight_v2_ocsp_CL`](tables/corelight-v2-ocsp-cl.md) | [1](tables/corelight-v2-ocsp-cl.md) | [1](tables/corelight-v2-ocsp-cl.md) | Workbooks |
| [`Corelight_v2_openflow_CL`](tables/corelight-v2-openflow-cl.md) | [1](tables/corelight-v2-openflow-cl.md) | [1](tables/corelight-v2-openflow-cl.md) | Workbooks |
| [`Corelight_v2_packet_filter_CL`](tables/corelight-v2-packet-filter-cl.md) | [1](tables/corelight-v2-packet-filter-cl.md) | [1](tables/corelight-v2-packet-filter-cl.md) | Workbooks |
| [`Corelight_v2_pe_CL`](tables/corelight-v2-pe-cl.md) | [1](tables/corelight-v2-pe-cl.md) | [1](tables/corelight-v2-pe-cl.md) | Workbooks |
| [`Corelight_v2_profinet_CL`](tables/corelight-v2-profinet-cl.md) | [1](tables/corelight-v2-profinet-cl.md) | [1](tables/corelight-v2-profinet-cl.md) | Workbooks |
| [`Corelight_v2_profinet_dce_rpc_CL`](tables/corelight-v2-profinet-dce-rpc-cl.md) | [1](tables/corelight-v2-profinet-dce-rpc-cl.md) | [1](tables/corelight-v2-profinet-dce-rpc-cl.md) | Workbooks |
| [`Corelight_v2_profinet_debug_CL`](tables/corelight-v2-profinet-debug-cl.md) | [1](tables/corelight-v2-profinet-debug-cl.md) | [1](tables/corelight-v2-profinet-debug-cl.md) | Workbooks |
| [`Corelight_v2_radius_CL`](tables/corelight-v2-radius-cl.md) | [1](tables/corelight-v2-radius-cl.md) | [1](tables/corelight-v2-radius-cl.md) | Workbooks |
| [`Corelight_v2_rdp_CL`](tables/corelight-v2-rdp-cl.md) | [1](tables/corelight-v2-rdp-cl.md) | [1](tables/corelight-v2-rdp-cl.md) | Workbooks |
| [`Corelight_v2_reporter_CL`](tables/corelight-v2-reporter-cl.md) | [1](tables/corelight-v2-reporter-cl.md) | [1](tables/corelight-v2-reporter-cl.md) | Workbooks |
| [`Corelight_v2_rfb_CL`](tables/corelight-v2-rfb-cl.md) | [1](tables/corelight-v2-rfb-cl.md) | [1](tables/corelight-v2-rfb-cl.md) | Workbooks |
| [`Corelight_v2_s7comm_CL`](tables/corelight-v2-s7comm-cl.md) | [1](tables/corelight-v2-s7comm-cl.md) | [1](tables/corelight-v2-s7comm-cl.md) | Workbooks |
| [`Corelight_v2_signatures_CL`](tables/corelight-v2-signatures-cl.md) | [1](tables/corelight-v2-signatures-cl.md) | [1](tables/corelight-v2-signatures-cl.md) | Workbooks |
| [`Corelight_v2_sip_CL`](tables/corelight-v2-sip-cl.md) | [1](tables/corelight-v2-sip-cl.md) | [1](tables/corelight-v2-sip-cl.md) | Workbooks |
| [`Corelight_v2_smartpcap_CL`](tables/corelight-v2-smartpcap-cl.md) | [1](tables/corelight-v2-smartpcap-cl.md) | [1](tables/corelight-v2-smartpcap-cl.md) | Workbooks |
| [`Corelight_v2_smartpcap_stats_CL`](tables/corelight-v2-smartpcap-stats-cl.md) | [1](tables/corelight-v2-smartpcap-stats-cl.md) | [1](tables/corelight-v2-smartpcap-stats-cl.md) | Workbooks |
| [`Corelight_v2_smb_files_CL`](tables/corelight-v2-smb-files-cl.md) | [1](tables/corelight-v2-smb-files-cl.md) | [1](tables/corelight-v2-smb-files-cl.md) | Workbooks |
| [`Corelight_v2_smb_mapping_CL`](tables/corelight-v2-smb-mapping-cl.md) | [1](tables/corelight-v2-smb-mapping-cl.md) | [1](tables/corelight-v2-smb-mapping-cl.md) | Hunting, Workbooks |
| [`Corelight_v2_smtp_CL`](tables/corelight-v2-smtp-cl.md) | [1](tables/corelight-v2-smtp-cl.md) | [1](tables/corelight-v2-smtp-cl.md) | Analytics, Hunting, Workbooks |
| [`Corelight_v2_smtp_links_CL`](tables/corelight-v2-smtp-links-cl.md) | [1](tables/corelight-v2-smtp-links-cl.md) | [1](tables/corelight-v2-smtp-links-cl.md) | Workbooks |
| [`Corelight_v2_snmp_CL`](tables/corelight-v2-snmp-cl.md) | [1](tables/corelight-v2-snmp-cl.md) | [1](tables/corelight-v2-snmp-cl.md) | Workbooks |
| [`Corelight_v2_socks_CL`](tables/corelight-v2-socks-cl.md) | [1](tables/corelight-v2-socks-cl.md) | [1](tables/corelight-v2-socks-cl.md) | Workbooks |
| [`Corelight_v2_software_CL`](tables/corelight-v2-software-cl.md) | [1](tables/corelight-v2-software-cl.md) | [1](tables/corelight-v2-software-cl.md) | Workbooks |
| [`Corelight_v2_specific_dns_tunnels_CL`](tables/corelight-v2-specific-dns-tunnels-cl.md) | [1](tables/corelight-v2-specific-dns-tunnels-cl.md) | [1](tables/corelight-v2-specific-dns-tunnels-cl.md) | Workbooks |
| [`Corelight_v2_ssh_CL`](tables/corelight-v2-ssh-cl.md) | [1](tables/corelight-v2-ssh-cl.md) | [1](tables/corelight-v2-ssh-cl.md) | Workbooks |
| [`Corelight_v2_ssl_CL`](tables/corelight-v2-ssl-cl.md) | [1](tables/corelight-v2-ssl-cl.md) | [1](tables/corelight-v2-ssl-cl.md) | Workbooks |
| [`Corelight_v2_ssl_red_CL`](tables/corelight-v2-ssl-red-cl.md) | [1](tables/corelight-v2-ssl-red-cl.md) | [1](tables/corelight-v2-ssl-red-cl.md) | Workbooks |
| [`Corelight_v2_stats_CL`](tables/corelight-v2-stats-cl.md) | [1](tables/corelight-v2-stats-cl.md) | [1](tables/corelight-v2-stats-cl.md) | Workbooks |
| [`Corelight_v2_stepping_CL`](tables/corelight-v2-stepping-cl.md) | [1](tables/corelight-v2-stepping-cl.md) | [1](tables/corelight-v2-stepping-cl.md) | Workbooks |
| [`Corelight_v2_stun_CL`](tables/corelight-v2-stun-cl.md) | [1](tables/corelight-v2-stun-cl.md) | [1](tables/corelight-v2-stun-cl.md) | Workbooks |
| [`Corelight_v2_stun_nat_CL`](tables/corelight-v2-stun-nat-cl.md) | [1](tables/corelight-v2-stun-nat-cl.md) | [1](tables/corelight-v2-stun-nat-cl.md) | Workbooks |
| [`Corelight_v2_suricata_corelight_CL`](tables/corelight-v2-suricata-corelight-cl.md) | [1](tables/corelight-v2-suricata-corelight-cl.md) | [1](tables/corelight-v2-suricata-corelight-cl.md) | Workbooks |
| [`Corelight_v2_suricata_eve_CL`](tables/corelight-v2-suricata-eve-cl.md) | [1](tables/corelight-v2-suricata-eve-cl.md) | [1](tables/corelight-v2-suricata-eve-cl.md) | Workbooks |
| [`Corelight_v2_suricata_stats_CL`](tables/corelight-v2-suricata-stats-cl.md) | [1](tables/corelight-v2-suricata-stats-cl.md) | [1](tables/corelight-v2-suricata-stats-cl.md) | Workbooks |
| [`Corelight_v2_suricata_zeek_stats_CL`](tables/corelight-v2-suricata-zeek-stats-cl.md) | [1](tables/corelight-v2-suricata-zeek-stats-cl.md) | [1](tables/corelight-v2-suricata-zeek-stats-cl.md) | Workbooks |
| [`Corelight_v2_syslog_CL`](tables/corelight-v2-syslog-cl.md) | [1](tables/corelight-v2-syslog-cl.md) | [1](tables/corelight-v2-syslog-cl.md) | Workbooks |
| [`Corelight_v2_tds_CL`](tables/corelight-v2-tds-cl.md) | [1](tables/corelight-v2-tds-cl.md) | [1](tables/corelight-v2-tds-cl.md) | Workbooks |
| [`Corelight_v2_tds_rpc_CL`](tables/corelight-v2-tds-rpc-cl.md) | [1](tables/corelight-v2-tds-rpc-cl.md) | [1](tables/corelight-v2-tds-rpc-cl.md) | Workbooks |
| [`Corelight_v2_tds_sql_batch_CL`](tables/corelight-v2-tds-sql-batch-cl.md) | [1](tables/corelight-v2-tds-sql-batch-cl.md) | [1](tables/corelight-v2-tds-sql-batch-cl.md) | Workbooks |
| [`Corelight_v2_traceroute_CL`](tables/corelight-v2-traceroute-cl.md) | [1](tables/corelight-v2-traceroute-cl.md) | [1](tables/corelight-v2-traceroute-cl.md) | Workbooks |
| [`Corelight_v2_tunnel_CL`](tables/corelight-v2-tunnel-cl.md) | [1](tables/corelight-v2-tunnel-cl.md) | [1](tables/corelight-v2-tunnel-cl.md) | Workbooks |
| [`Corelight_v2_unknown_smartpcap_CL`](tables/corelight-v2-unknown-smartpcap-cl.md) | [1](tables/corelight-v2-unknown-smartpcap-cl.md) | [1](tables/corelight-v2-unknown-smartpcap-cl.md) | Workbooks |
| [`Corelight_v2_util_stats_CL`](tables/corelight-v2-util-stats-cl.md) | [1](tables/corelight-v2-util-stats-cl.md) | [1](tables/corelight-v2-util-stats-cl.md) | Workbooks |
| [`Corelight_v2_vpn_CL`](tables/corelight-v2-vpn-cl.md) | [1](tables/corelight-v2-vpn-cl.md) | [1](tables/corelight-v2-vpn-cl.md) | Workbooks |
| [`Corelight_v2_weird_CL`](tables/corelight-v2-weird-cl.md) | [1](tables/corelight-v2-weird-cl.md) | [1](tables/corelight-v2-weird-cl.md) | Workbooks |
| [`Corelight_v2_weird_red_CL`](tables/corelight-v2-weird-red-cl.md) | [1](tables/corelight-v2-weird-red-cl.md) | [1](tables/corelight-v2-weird-red-cl.md) | Workbooks |
| [`Corelight_v2_weird_stats_CL`](tables/corelight-v2-weird-stats-cl.md) | [1](tables/corelight-v2-weird-stats-cl.md) | [1](tables/corelight-v2-weird-stats-cl.md) | Workbooks |
| [`Corelight_v2_wireguard_CL`](tables/corelight-v2-wireguard-cl.md) | [1](tables/corelight-v2-wireguard-cl.md) | [1](tables/corelight-v2-wireguard-cl.md) | Workbooks |
| [`Corelight_v2_x509_CL`](tables/corelight-v2-x509-cl.md) | [1](tables/corelight-v2-x509-cl.md) | [1](tables/corelight-v2-x509-cl.md) | Workbooks |
| [`Corelight_v2_x509_red_CL`](tables/corelight-v2-x509-red-cl.md) | [1](tables/corelight-v2-x509-red-cl.md) | [1](tables/corelight-v2-x509-red-cl.md) | Workbooks |
| [`Corelight_v2_zeek_doctor_CL`](tables/corelight-v2-zeek-doctor-cl.md) | [1](tables/corelight-v2-zeek-doctor-cl.md) | [1](tables/corelight-v2-zeek-doctor-cl.md) | Workbooks |
| [`CortexXpanseAlerts_CL`](tables/cortexxpansealerts-cl.md) | [1](tables/cortexxpansealerts-cl.md) | [1](tables/cortexxpansealerts-cl.md) | - |
| [`CriblAccess_CL`](tables/criblaccess-cl.md) | [1](tables/criblaccess-cl.md) | [1](tables/criblaccess-cl.md) | - |
| [`CriblAudit_CL`](tables/criblaudit-cl.md) | [1](tables/criblaudit-cl.md) | [1](tables/criblaudit-cl.md) | - |
| [`CriblInternal_CL`](tables/criblinternal-cl.md) | [1](tables/criblinternal-cl.md) | [1](tables/criblinternal-cl.md) | - |
| [`CriblUIAccess_CL`](tables/cribluiaccess-cl.md) | [1](tables/cribluiaccess-cl.md) | [1](tables/cribluiaccess-cl.md) | - |
| [`CrowdStrikeAlerts`](tables/crowdstrikealerts.md) | [1](tables/crowdstrikealerts.md) | [1](tables/crowdstrikealerts.md) | - |
| [`CrowdStrikeDetections`](tables/crowdstrikedetections.md) | [1](tables/crowdstrikedetections.md) | [1](tables/crowdstrikedetections.md) | - |
| [`CrowdStrikeHosts`](tables/crowdstrikehosts.md) | [1](tables/crowdstrikehosts.md) | [1](tables/crowdstrikehosts.md) | - |
| [`CrowdStrikeIncidents`](tables/crowdstrikeincidents.md) | [1](tables/crowdstrikeincidents.md) | [1](tables/crowdstrikeincidents.md) | - |
| [`CrowdStrikeVulnerabilities`](tables/crowdstrikevulnerabilities.md) | [1](tables/crowdstrikevulnerabilities.md) | [1](tables/crowdstrikevulnerabilities.md) | - |
| [`CrowdStrike_Additional_Events_CL`](tables/crowdstrike-additional-events-cl.md) | [1](tables/crowdstrike-additional-events-cl.md) | [2](tables/crowdstrike-additional-events-cl.md) | - |
| [`CrowdStrike_Audit_Events_CL`](tables/crowdstrike-audit-events-cl.md) | [1](tables/crowdstrike-audit-events-cl.md) | [1](tables/crowdstrike-audit-events-cl.md) | - |
| [`CrowdStrike_Auth_Events_CL`](tables/crowdstrike-auth-events-cl.md) | [1](tables/crowdstrike-auth-events-cl.md) | [1](tables/crowdstrike-auth-events-cl.md) | - |
| [`CrowdStrike_DNS_Events_CL`](tables/crowdstrike-dns-events-cl.md) | [1](tables/crowdstrike-dns-events-cl.md) | [1](tables/crowdstrike-dns-events-cl.md) | - |
| [`CrowdStrike_File_Events_CL`](tables/crowdstrike-file-events-cl.md) | [1](tables/crowdstrike-file-events-cl.md) | [1](tables/crowdstrike-file-events-cl.md) | - |
| [`CrowdStrike_Network_Events_CL`](tables/crowdstrike-network-events-cl.md) | [1](tables/crowdstrike-network-events-cl.md) | [1](tables/crowdstrike-network-events-cl.md) | - |
| [`CrowdStrike_Process_Events_CL`](tables/crowdstrike-process-events-cl.md) | [1](tables/crowdstrike-process-events-cl.md) | [1](tables/crowdstrike-process-events-cl.md) | - |
| [`CrowdStrike_Registry_Events_CL`](tables/crowdstrike-registry-events-cl.md) | [1](tables/crowdstrike-registry-events-cl.md) | [1](tables/crowdstrike-registry-events-cl.md) | - |
| [`CrowdStrike_Secondary_Data_CL`](tables/crowdstrike-secondary-data-cl.md) | [1](tables/crowdstrike-secondary-data-cl.md) | [2](tables/crowdstrike-secondary-data-cl.md) | - |
| [`CrowdStrike_User_Events_CL`](tables/crowdstrike-user-events-cl.md) | [1](tables/crowdstrike-user-events-cl.md) | [1](tables/crowdstrike-user-events-cl.md) | - |
| [`CyberArkEPM_CL`](tables/cyberarkepm-cl.md) | [1](tables/cyberarkepm-cl.md) | [1](tables/cyberarkepm-cl.md) | Analytics, Hunting, Workbooks |
| [`CyberArk_AuditEvents_CL`](tables/cyberark-auditevents-cl.md) | [1](tables/cyberark-auditevents-cl.md) | [1](tables/cyberark-auditevents-cl.md) | Analytics |
| [`CyberSixgill_Alerts_CL`](tables/cybersixgill-alerts-cl.md) | [1](tables/cybersixgill-alerts-cl.md) | [1](tables/cybersixgill-alerts-cl.md) | Hunting, Workbooks |
| [`CyberpionActionItems_CL`](tables/cyberpionactionitems-cl.md) | [1](tables/cyberpionactionitems-cl.md) | [1](tables/cyberpionactionitems-cl.md) | Analytics, Workbooks |
| [`CybleVisionAlerts_CL`](tables/cyblevisionalerts-cl.md) | [1](tables/cyblevisionalerts-cl.md) | [1](tables/cyblevisionalerts-cl.md) | Analytics, Workbooks |
| [`CyeraAssets_CL`](tables/cyeraassets-cl.md) | [1](tables/cyeraassets-cl.md) | [2](tables/cyeraassets-cl.md) | - |
| [`CyeraAssets_MS_CL`](tables/cyeraassets-ms-cl.md) | [1](tables/cyeraassets-ms-cl.md) | [2](tables/cyeraassets-ms-cl.md) | - |
| [`CyeraClassifications_CL`](tables/cyeraclassifications-cl.md) | [1](tables/cyeraclassifications-cl.md) | [2](tables/cyeraclassifications-cl.md) | - |
| [`CyeraIdentities_CL`](tables/cyeraidentities-cl.md) | [1](tables/cyeraidentities-cl.md) | [2](tables/cyeraidentities-cl.md) | - |
| [`CyeraIssues_CL`](tables/cyeraissues-cl.md) | [1](tables/cyeraissues-cl.md) | [2](tables/cyeraissues-cl.md) | - |
| [`CyfirmaASCertificatesAlerts_CL`](tables/cyfirmaascertificatesalerts-cl.md) | [1](tables/cyfirmaascertificatesalerts-cl.md) | [1](tables/cyfirmaascertificatesalerts-cl.md) | Analytics |
| [`CyfirmaASCloudWeaknessAlerts_CL`](tables/cyfirmaascloudweaknessalerts-cl.md) | [1](tables/cyfirmaascloudweaknessalerts-cl.md) | [1](tables/cyfirmaascloudweaknessalerts-cl.md) | Analytics |
| [`CyfirmaASConfigurationAlerts_CL`](tables/cyfirmaasconfigurationalerts-cl.md) | [1](tables/cyfirmaasconfigurationalerts-cl.md) | [1](tables/cyfirmaasconfigurationalerts-cl.md) | Analytics |
| [`CyfirmaASDomainIPReputationAlerts_CL`](tables/cyfirmaasdomainipreputationalerts-cl.md) | [1](tables/cyfirmaasdomainipreputationalerts-cl.md) | [1](tables/cyfirmaasdomainipreputationalerts-cl.md) | Analytics |
| [`CyfirmaASDomainIPVulnerabilityAlerts_CL`](tables/cyfirmaasdomainipvulnerabilityalerts-cl.md) | [1](tables/cyfirmaasdomainipvulnerabilityalerts-cl.md) | [1](tables/cyfirmaasdomainipvulnerabilityalerts-cl.md) | Analytics |
| [`CyfirmaASOpenPortsAlerts_CL`](tables/cyfirmaasopenportsalerts-cl.md) | [1](tables/cyfirmaasopenportsalerts-cl.md) | [1](tables/cyfirmaasopenportsalerts-cl.md) | Analytics |
| [`CyfirmaBIDomainITAssetAlerts_CL`](tables/cyfirmabidomainitassetalerts-cl.md) | [1](tables/cyfirmabidomainitassetalerts-cl.md) | [1](tables/cyfirmabidomainitassetalerts-cl.md) | Analytics |
| [`CyfirmaBIExecutivePeopleAlerts_CL`](tables/cyfirmabiexecutivepeoplealerts-cl.md) | [1](tables/cyfirmabiexecutivepeoplealerts-cl.md) | [1](tables/cyfirmabiexecutivepeoplealerts-cl.md) | Analytics |
| [`CyfirmaBIMaliciousMobileAppsAlerts_CL`](tables/cyfirmabimaliciousmobileappsalerts-cl.md) | [1](tables/cyfirmabimaliciousmobileappsalerts-cl.md) | [1](tables/cyfirmabimaliciousmobileappsalerts-cl.md) | Analytics |
| [`CyfirmaBIProductSolutionAlerts_CL`](tables/cyfirmabiproductsolutionalerts-cl.md) | [1](tables/cyfirmabiproductsolutionalerts-cl.md) | [1](tables/cyfirmabiproductsolutionalerts-cl.md) | Analytics |
| [`CyfirmaBISocialHandlersAlerts_CL`](tables/cyfirmabisocialhandlersalerts-cl.md) | [1](tables/cyfirmabisocialhandlersalerts-cl.md) | [1](tables/cyfirmabisocialhandlersalerts-cl.md) | Analytics |
| [`CyfirmaCampaigns_CL`](tables/cyfirmacampaigns-cl.md) | [1](tables/cyfirmacampaigns-cl.md) | [1](tables/cyfirmacampaigns-cl.md) | - |
| [`CyfirmaCompromisedAccounts_CL`](tables/cyfirmacompromisedaccounts-cl.md) | [1](tables/cyfirmacompromisedaccounts-cl.md) | [1](tables/cyfirmacompromisedaccounts-cl.md) | Analytics |
| [`CyfirmaDBWMDarkWebAlerts_CL`](tables/cyfirmadbwmdarkwebalerts-cl.md) | [1](tables/cyfirmadbwmdarkwebalerts-cl.md) | [1](tables/cyfirmadbwmdarkwebalerts-cl.md) | Analytics |
| [`CyfirmaDBWMPhishingAlerts_CL`](tables/cyfirmadbwmphishingalerts-cl.md) | [1](tables/cyfirmadbwmphishingalerts-cl.md) | [1](tables/cyfirmadbwmphishingalerts-cl.md) | Analytics |
| [`CyfirmaDBWMRansomwareAlerts_CL`](tables/cyfirmadbwmransomwarealerts-cl.md) | [1](tables/cyfirmadbwmransomwarealerts-cl.md) | [1](tables/cyfirmadbwmransomwarealerts-cl.md) | Analytics |
| [`CyfirmaIndicators_CL`](tables/cyfirmaindicators-cl.md) | [1](tables/cyfirmaindicators-cl.md) | [1](tables/cyfirmaindicators-cl.md) | Analytics |
| [`CyfirmaMalware_CL`](tables/cyfirmamalware-cl.md) | [1](tables/cyfirmamalware-cl.md) | [1](tables/cyfirmamalware-cl.md) | - |
| [`CyfirmaSPEConfidentialFilesAlerts_CL`](tables/cyfirmaspeconfidentialfilesalerts-cl.md) | [1](tables/cyfirmaspeconfidentialfilesalerts-cl.md) | [1](tables/cyfirmaspeconfidentialfilesalerts-cl.md) | Analytics |
| [`CyfirmaSPEPIIAndCIIAlerts_CL`](tables/cyfirmaspepiiandciialerts-cl.md) | [1](tables/cyfirmaspepiiandciialerts-cl.md) | [1](tables/cyfirmaspepiiandciialerts-cl.md) | Analytics |
| [`CyfirmaSPESocialThreatAlerts_CL`](tables/cyfirmaspesocialthreatalerts-cl.md) | [1](tables/cyfirmaspesocialthreatalerts-cl.md) | [1](tables/cyfirmaspesocialthreatalerts-cl.md) | Analytics |
| [`CyfirmaSPESourceCodeAlerts_CL`](tables/cyfirmaspesourcecodealerts-cl.md) | [1](tables/cyfirmaspesourcecodealerts-cl.md) | [1](tables/cyfirmaspesourcecodealerts-cl.md) | Analytics |
| [`CyfirmaThreatActors_CL`](tables/cyfirmathreatactors-cl.md) | [1](tables/cyfirmathreatactors-cl.md) | [1](tables/cyfirmathreatactors-cl.md) | - |
| [`CyfirmaVulnerabilities_CL`](tables/cyfirmavulnerabilities-cl.md) | [1](tables/cyfirmavulnerabilities-cl.md) | [1](tables/cyfirmavulnerabilities-cl.md) | Analytics |
| [`Cymru_Scout_Account_Usage_Data_CL`](tables/cymru-scout-account-usage-data-cl.md) | [1](tables/cymru-scout-account-usage-data-cl.md) | [1](tables/cymru-scout-account-usage-data-cl.md) | Workbooks |
| [`Cymru_Scout_Domain_Data_CL`](tables/cymru-scout-domain-data-cl.md) | [1](tables/cymru-scout-domain-data-cl.md) | [1](tables/cymru-scout-domain-data-cl.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Communications_CL`](tables/cymru-scout-ip-data-communications-cl.md) | [1](tables/cymru-scout-ip-data-communications-cl.md) | [1](tables/cymru-scout-ip-data-communications-cl.md) | - |
| [`Cymru_Scout_IP_Data_Details_CL`](tables/cymru-scout-ip-data-details-cl.md) | [1](tables/cymru-scout-ip-data-details-cl.md) | [1](tables/cymru-scout-ip-data-details-cl.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Fingerprints_CL`](tables/cymru-scout-ip-data-fingerprints-cl.md) | [1](tables/cymru-scout-ip-data-fingerprints-cl.md) | [1](tables/cymru-scout-ip-data-fingerprints-cl.md) | - |
| [`Cymru_Scout_IP_Data_Foundation_CL`](tables/cymru-scout-ip-data-foundation-cl.md) | [1](tables/cymru-scout-ip-data-foundation-cl.md) | [1](tables/cymru-scout-ip-data-foundation-cl.md) | Workbooks |
| [`Cymru_Scout_IP_Data_OpenPorts_CL`](tables/cymru-scout-ip-data-openports-cl.md) | [1](tables/cymru-scout-ip-data-openports-cl.md) | [1](tables/cymru-scout-ip-data-openports-cl.md) | - |
| [`Cymru_Scout_IP_Data_PDNS_CL`](tables/cymru-scout-ip-data-pdns-cl.md) | [1](tables/cymru-scout-ip-data-pdns-cl.md) | [1](tables/cymru-scout-ip-data-pdns-cl.md) | - |
| [`Cymru_Scout_IP_Data_Summary_Certs_CL`](tables/cymru-scout-ip-data-summary-certs-cl.md) | [1](tables/cymru-scout-ip-data-summary-certs-cl.md) | [1](tables/cymru-scout-ip-data-summary-certs-cl.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Summary_Details_CL`](tables/cymru-scout-ip-data-summary-details-cl.md) | [1](tables/cymru-scout-ip-data-summary-details-cl.md) | [1](tables/cymru-scout-ip-data-summary-details-cl.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Summary_Fingerprints_CL`](tables/cymru-scout-ip-data-summary-fingerprints-cl.md) | [1](tables/cymru-scout-ip-data-summary-fingerprints-cl.md) | [1](tables/cymru-scout-ip-data-summary-fingerprints-cl.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Summary_OpenPorts_CL`](tables/cymru-scout-ip-data-summary-openports-cl.md) | [1](tables/cymru-scout-ip-data-summary-openports-cl.md) | [1](tables/cymru-scout-ip-data-summary-openports-cl.md) | Workbooks |
| [`Cymru_Scout_IP_Data_Summary_PDNS_CL`](tables/cymru-scout-ip-data-summary-pdns-cl.md) | [1](tables/cymru-scout-ip-data-summary-pdns-cl.md) | [1](tables/cymru-scout-ip-data-summary-pdns-cl.md) | Workbooks |
| [`Cymru_Scout_IP_Data_x509_CL`](tables/cymru-scout-ip-data-x509-cl.md) | [1](tables/cymru-scout-ip-data-x509-cl.md) | [1](tables/cymru-scout-ip-data-x509-cl.md) | - |
| [`CynerioEvent_CL`](tables/cynerioevent-cl.md) | [1](tables/cynerioevent-cl.md) | [1](tables/cynerioevent-cl.md) | Analytics, Workbooks |

## D

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`DNS_Summarized_Logs_ip_CL`](tables/dns-summarized-logs-ip-cl.md) | [1](tables/dns-summarized-logs-ip-cl.md) | - | Analytics, Hunting, Playbooks, Workbooks |
| [`DNS_Summarized_Logs_sourceInfo_CL`](tables/dns-summarized-logs-sourceinfo-cl.md) | [1](tables/dns-summarized-logs-sourceinfo-cl.md) | - | Playbooks, Workbooks |
| [`DataminrPulse_Alerts_CL`](tables/dataminrpulse-alerts-cl.md) | [1](tables/dataminrpulse-alerts-cl.md) | [1](tables/dataminrpulse-alerts-cl.md) | Analytics, Workbooks |
| [`DataverseActivity`](tables/dataverseactivity.md) | [1](tables/dataverseactivity.md) | - | Analytics, Hunting, Workbooks |
| [`Detections_Data_CL`](tables/detections-data-cl.md) | [1](tables/detections-data-cl.md) | [1](tables/detections-data-cl.md) | Analytics, Workbooks |
| [`DeviceEvents`](tables/deviceevents.md) | [10](tables/deviceevents.md) | [1](tables/deviceevents.md) | Analytics, Hunting, Workbooks |
| [`DeviceFileCertificateInfo`](tables/devicefilecertificateinfo.md) | [2](tables/devicefilecertificateinfo.md) | [1](tables/devicefilecertificateinfo.md) | Workbooks |
| [`DeviceFileEvents`](tables/devicefileevents.md) | [16](tables/devicefileevents.md) | [1](tables/devicefileevents.md) | Analytics, Hunting, Workbooks |
| [`DeviceImageLoadEvents`](tables/deviceimageloadevents.md) | [3](tables/deviceimageloadevents.md) | [1](tables/deviceimageloadevents.md) | Analytics, Hunting, Workbooks |
| [`DeviceInfo`](tables/deviceinfo.md) | [6](tables/deviceinfo.md) | [1](tables/deviceinfo.md) | Analytics, Hunting, Workbooks |
| [`DeviceLogonEvents`](tables/devicelogonevents.md) | [5](tables/devicelogonevents.md) | [1](tables/devicelogonevents.md) | Analytics, Hunting, Workbooks |
| [`DeviceNetworkEvents`](tables/devicenetworkevents.md) | [15](tables/devicenetworkevents.md) | [1](tables/devicenetworkevents.md) | Analytics, Hunting, Workbooks |
| [`DeviceNetworkInfo`](tables/devicenetworkinfo.md) | [3](tables/devicenetworkinfo.md) | [1](tables/devicenetworkinfo.md) | Workbooks |
| [`DeviceProcessEvents`](tables/deviceprocessevents.md) | [15](tables/deviceprocessevents.md) | [1](tables/deviceprocessevents.md) | Analytics, Hunting, Workbooks |
| [`DeviceRegistryEvents`](tables/deviceregistryevents.md) | [6](tables/deviceregistryevents.md) | [1](tables/deviceregistryevents.md) | Analytics, Hunting, Workbooks |
| [`DeviceTvmSecureConfigurationAssessment`](tables/devicetvmsecureconfigurationassessment.md) | [1](tables/devicetvmsecureconfigurationassessment.md) | - | Workbooks |
| [`DeviceTvmSoftwareInventory`](tables/devicetvmsoftwareinventory.md) | [1](tables/devicetvmsoftwareinventory.md) | - | Workbooks |
| [`DeviceTvmSoftwareVulnerabilities`](tables/devicetvmsoftwarevulnerabilities.md) | [2](tables/devicetvmsoftwarevulnerabilities.md) | - | Analytics, Workbooks |
| [`DeviceTvmSoftwareVulnerabilitiesKB`](tables/devicetvmsoftwarevulnerabilitieskb.md) | [1](tables/devicetvmsoftwarevulnerabilitieskb.md) | - | Hunting |
| [`DigitalShadows_CL`](tables/digitalshadows-cl.md) | [1](tables/digitalshadows-cl.md) | [1](tables/digitalshadows-cl.md) | Analytics, Workbooks |
| [`DnsEvents`](tables/dnsevents.md) | [15](tables/dnsevents.md) | [1](tables/dnsevents.md) | Analytics, Hunting, Workbooks |
| [`DnsInventory`](tables/dnsinventory.md) | [2](tables/dnsinventory.md) | [1](tables/dnsinventory.md) | Workbooks |
| [`Domain_Data_CL`](tables/domain-data-cl.md) | [1](tables/domain-data-cl.md) | - | Workbooks |
| [`DoppelTable_CL`](tables/doppeltable-cl.md) | [1](tables/doppeltable-cl.md) | [1](tables/doppeltable-cl.md) | Workbooks |
| [`DragosAlerts_CL`](tables/dragosalerts-cl.md) | [1](tables/dragosalerts-cl.md) | [1](tables/dragosalerts-cl.md) | - |
| [`DruvaInsyncEvents_CL`](tables/druvainsyncevents-cl.md) | [1](tables/druvainsyncevents-cl.md) | [1](tables/druvainsyncevents-cl.md) | - |
| [`DruvaPlatformEvents_CL`](tables/druvaplatformevents-cl.md) | [1](tables/druvaplatformevents-cl.md) | [1](tables/druvaplatformevents-cl.md) | - |
| [`DruvaSecurityEvents_CL`](tables/druvasecurityevents-cl.md) | [1](tables/druvasecurityevents-cl.md) | [1](tables/druvasecurityevents-cl.md) | - |
| [`DuoSecurityAuthentication_CL`](tables/duosecurityauthentication-cl.md) | [2](tables/duosecurityauthentication-cl.md) | - | Analytics |
| [`Dynamics365Activity`](tables/dynamics365activity.md) | [5](tables/dynamics365activity.md) | [1](tables/dynamics365activity.md) | Workbooks |
| [`DynatraceAttacks_CL`](tables/dynatraceattacks-cl.md) | [1](tables/dynatraceattacks-cl.md) | [1](tables/dynatraceattacks-cl.md) | Analytics, Workbooks |
| [`DynatraceAuditLogs_CL`](tables/dynatraceauditlogs-cl.md) | [1](tables/dynatraceauditlogs-cl.md) | [1](tables/dynatraceauditlogs-cl.md) | Workbooks |
| [`DynatraceProblems_CL`](tables/dynatraceproblems-cl.md) | [1](tables/dynatraceproblems-cl.md) | [1](tables/dynatraceproblems-cl.md) | Analytics, Workbooks |
| [`DynatraceSecurityProblems_CL`](tables/dynatracesecurityproblems-cl.md) | [1](tables/dynatracesecurityproblems-cl.md) | [1](tables/dynatracesecurityproblems-cl.md) | Analytics, Workbooks |
| [`darktrace_model_alerts_CL`](tables/darktrace-model-alerts-cl.md) | [1](tables/darktrace-model-alerts-cl.md) | [1](tables/darktrace-model-alerts-cl.md) | Analytics, Workbooks |
| [`datawizaserveraccess_CL`](tables/datawizaserveraccess-cl.md) | [1](tables/datawizaserveraccess-cl.md) | [1](tables/datawizaserveraccess-cl.md) | - |
| [`dossier_atp_CL`](tables/dossier-atp-cl.md) | [1](tables/dossier-atp-cl.md) | [1](tables/dossier-atp-cl.md) | Workbooks |
| [`dossier_atp_threat_CL`](tables/dossier-atp-threat-cl.md) | [1](tables/dossier-atp-threat-cl.md) | [1](tables/dossier-atp-threat-cl.md) | Workbooks |
| [`dossier_dns_CL`](tables/dossier-dns-cl.md) | [1](tables/dossier-dns-cl.md) | [1](tables/dossier-dns-cl.md) | Workbooks |
| [`dossier_geo_CL`](tables/dossier-geo-cl.md) | [1](tables/dossier-geo-cl.md) | [1](tables/dossier-geo-cl.md) | Workbooks |
| [`dossier_infoblox_web_cat_CL`](tables/dossier-infoblox-web-cat-cl.md) | [1](tables/dossier-infoblox-web-cat-cl.md) | [1](tables/dossier-infoblox-web-cat-cl.md) | Workbooks |
| [`dossier_inforank_CL`](tables/dossier-inforank-cl.md) | [1](tables/dossier-inforank-cl.md) | [1](tables/dossier-inforank-cl.md) | Workbooks |
| [`dossier_malware_analysis_v3_CL`](tables/dossier-malware-analysis-v3-cl.md) | [1](tables/dossier-malware-analysis-v3-cl.md) | [1](tables/dossier-malware-analysis-v3-cl.md) | Workbooks |
| [`dossier_nameserver_CL`](tables/dossier-nameserver-cl.md) | [1](tables/dossier-nameserver-cl.md) | [1](tables/dossier-nameserver-cl.md) | Workbooks |
| [`dossier_nameserver_matches_CL`](tables/dossier-nameserver-matches-cl.md) | [1](tables/dossier-nameserver-matches-cl.md) | [1](tables/dossier-nameserver-matches-cl.md) | Workbooks |
| [`dossier_ptr_CL`](tables/dossier-ptr-cl.md) | [1](tables/dossier-ptr-cl.md) | [1](tables/dossier-ptr-cl.md) | Workbooks |
| [`dossier_rpz_feeds_CL`](tables/dossier-rpz-feeds-cl.md) | [1](tables/dossier-rpz-feeds-cl.md) | [1](tables/dossier-rpz-feeds-cl.md) | Workbooks |
| [`dossier_rpz_feeds_records_CL`](tables/dossier-rpz-feeds-records-cl.md) | [1](tables/dossier-rpz-feeds-records-cl.md) | [1](tables/dossier-rpz-feeds-records-cl.md) | Workbooks |
| [`dossier_threat_actor_CL`](tables/dossier-threat-actor-cl.md) | [1](tables/dossier-threat-actor-cl.md) | [1](tables/dossier-threat-actor-cl.md) | Workbooks |
| [`dossier_tld_risk_CL`](tables/dossier-tld-risk-cl.md) | [1](tables/dossier-tld-risk-cl.md) | [1](tables/dossier-tld-risk-cl.md) | Workbooks |
| [`dossier_whitelist_CL`](tables/dossier-whitelist-cl.md) | [1](tables/dossier-whitelist-cl.md) | [1](tables/dossier-whitelist-cl.md) | Workbooks |
| [`dossier_whois_CL`](tables/dossier-whois-cl.md) | [1](tables/dossier-whois-cl.md) | [1](tables/dossier-whois-cl.md) | Workbooks |

## E

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`ESETInspect_CL`](tables/esetinspect-cl.md) | [1](tables/esetinspect-cl.md) | [1](tables/esetinspect-cl.md) | - |
| [`ESIExchangeConfig_CL`](tables/esiexchangeconfig-cl.md) | [1](tables/esiexchangeconfig-cl.md) | [1](tables/esiexchangeconfig-cl.md) | Workbooks |
| [`ESIExchangeOnlineConfig_CL`](tables/esiexchangeonlineconfig-cl.md) | [1](tables/esiexchangeonlineconfig-cl.md) | [1](tables/esiexchangeonlineconfig-cl.md) | Workbooks |
| [`EgressDefend_CL`](tables/egressdefend-cl.md) | [1](tables/egressdefend-cl.md) | [1](tables/egressdefend-cl.md) | Analytics, Hunting, Workbooks |
| [`EgressEvents_CL`](tables/egressevents-cl.md) | [1](tables/egressevents-cl.md) | [1](tables/egressevents-cl.md) | Workbooks |
| [`ElasticAgentLogs_CL`](tables/elasticagentlogs-cl.md) | [1](tables/elasticagentlogs-cl.md) | [1](tables/elasticagentlogs-cl.md) | - |
| [`EmailAttachmentInfo`](tables/emailattachmentinfo.md) | [5](tables/emailattachmentinfo.md) | [1](tables/emailattachmentinfo.md) | Hunting, Workbooks |
| [`EmailEvents`](tables/emailevents.md) | [11](tables/emailevents.md) | [1](tables/emailevents.md) | Analytics, Hunting, Workbooks |
| [`EmailPostDeliveryEvents`](tables/emailpostdeliveryevents.md) | [2](tables/emailpostdeliveryevents.md) | [1](tables/emailpostdeliveryevents.md) | Hunting, Workbooks |
| [`EmailUrlInfo`](tables/emailurlinfo.md) | [7](tables/emailurlinfo.md) | [1](tables/emailurlinfo.md) | Analytics, Hunting, Workbooks |
| [`EnrichedMicrosoft365AuditLogs`](tables/enrichedmicrosoft365auditlogs.md) | [1](tables/enrichedmicrosoft365auditlogs.md) | - | Workbooks |
| [`Entities_Data_CL`](tables/entities-data-cl.md) | [1](tables/entities-data-cl.md) | [1](tables/entities-data-cl.md) | Analytics |
| [`Entity_Scoring_Data_CL`](tables/entity-scoring-data-cl.md) | [1](tables/entity-scoring-data-cl.md) | [1](tables/entity-scoring-data-cl.md) | Workbooks |
| [`ErmesBrowserSecurityEvents_CL`](tables/ermesbrowsersecurityevents-cl.md) | [1](tables/ermesbrowsersecurityevents-cl.md) | [1](tables/ermesbrowsersecurityevents-cl.md) | - |
| [`Event`](tables/event.md) | [24](tables/event.md) | [5](tables/event.md) | Analytics, Hunting, Workbooks |
| [`ExchangeHttpProxy_CL`](tables/exchangehttpproxy-cl.md) | [1](tables/exchangehttpproxy-cl.md) | [2](tables/exchangehttpproxy-cl.md) | - |
| [`ExtraHop_Detections_CL`](tables/extrahop-detections-cl.md) | [1](tables/extrahop-detections-cl.md) | [1](tables/extrahop-detections-cl.md) | Analytics, Workbooks |
| [`eset_CL`](tables/eset-cl.md) | [1](tables/eset-cl.md) | [1](tables/eset-cl.md) | Analytics, Workbooks |
| [`event`](tables/event.md) | [1](tables/event.md) | - | Workbooks |
| [`eventsapplicationdata_CL`](tables/eventsapplicationdata-cl.md) | [1](tables/eventsapplicationdata-cl.md) | [1](tables/eventsapplicationdata-cl.md) | Workbooks |
| [`eventsauditdata_CL`](tables/eventsauditdata-cl.md) | [1](tables/eventsauditdata-cl.md) | [1](tables/eventsauditdata-cl.md) | - |
| [`eventsconnectiondata_CL`](tables/eventsconnectiondata-cl.md) | [1](tables/eventsconnectiondata-cl.md) | [1](tables/eventsconnectiondata-cl.md) | - |
| [`eventsincidentdata_CL`](tables/eventsincidentdata-cl.md) | [1](tables/eventsincidentdata-cl.md) | [1](tables/eventsincidentdata-cl.md) | - |
| [`eventsnetworkdata_CL`](tables/eventsnetworkdata-cl.md) | [1](tables/eventsnetworkdata-cl.md) | [1](tables/eventsnetworkdata-cl.md) | - |
| [`eventspagedata_CL`](tables/eventspagedata-cl.md) | [1](tables/eventspagedata-cl.md) | [1](tables/eventspagedata-cl.md) | - |

## F

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`F5Telemetry_ASM_CL`](tables/f5telemetry-asm-cl.md) | [1](tables/f5telemetry-asm-cl.md) | [1](tables/f5telemetry-asm-cl.md) | Workbooks |
| [`F5Telemetry_AVR_CL`](tables/f5telemetry-avr-cl.md) | [1](tables/f5telemetry-avr-cl.md) | - | Workbooks |
| [`F5Telemetry_LTM_CL`](tables/f5telemetry-ltm-cl.md) | [1](tables/f5telemetry-ltm-cl.md) | [1](tables/f5telemetry-ltm-cl.md) | Workbooks |
| [`F5Telemetry_system_CL`](tables/f5telemetry-system-cl.md) | [1](tables/f5telemetry-system-cl.md) | [1](tables/f5telemetry-system-cl.md) | Workbooks |
| [`Failed_Range_To_Ingest_CL`](tables/failed-range-to-ingest-cl.md) | [1](tables/failed-range-to-ingest-cl.md) | [1](tables/failed-range-to-ingest-cl.md) | - |
| [`FinanceOperationsActivity_CL`](tables/financeoperationsactivity-cl.md) | [1](tables/financeoperationsactivity-cl.md) | [1](tables/financeoperationsactivity-cl.md) | Analytics |
| [`Fingerprints_Data_CL`](tables/fingerprints-data-cl.md) | [1](tables/fingerprints-data-cl.md) | - | Workbooks |
| [`Firework_CL`](tables/firework-cl.md) | [1](tables/firework-cl.md) | [1](tables/firework-cl.md) | Analytics, Workbooks |
| [`FncEventsDetections_CL`](tables/fnceventsdetections-cl.md) | [1](tables/fnceventsdetections-cl.md) | [1](tables/fnceventsdetections-cl.md) | Workbooks |
| [`FncEventsObservation_CL`](tables/fnceventsobservation-cl.md) | [1](tables/fnceventsobservation-cl.md) | [1](tables/fnceventsobservation-cl.md) | Workbooks |
| [`FncEventsSuricata_CL`](tables/fnceventssuricata-cl.md) | [1](tables/fnceventssuricata-cl.md) | [1](tables/fnceventssuricata-cl.md) | Workbooks |
| [`ForcepointDLPEvents_CL`](tables/forcepointdlpevents-cl.md) | [1](tables/forcepointdlpevents-cl.md) | [1](tables/forcepointdlpevents-cl.md) | Workbooks |
| [`ForescoutComplianceStatus_CL`](tables/forescoutcompliancestatus-cl.md) | [1](tables/forescoutcompliancestatus-cl.md) | [1](tables/forescoutcompliancestatus-cl.md) | Workbooks |
| [`ForescoutHostProperties_CL`](tables/forescouthostproperties-cl.md) | [1](tables/forescouthostproperties-cl.md) | [1](tables/forescouthostproperties-cl.md) | Analytics, Workbooks |
| [`ForescoutOtAlert_CL`](tables/forescoutotalert-cl.md) | [1](tables/forescoutotalert-cl.md) | [1](tables/forescoutotalert-cl.md) | Workbooks |
| [`ForescoutOtAsset_CL`](tables/forescoutotasset-cl.md) | [1](tables/forescoutotasset-cl.md) | [1](tables/forescoutotasset-cl.md) | Workbooks |
| [`ForescoutPolicyStatus_CL`](tables/forescoutpolicystatus-cl.md) | [1](tables/forescoutpolicystatus-cl.md) | [1](tables/forescoutpolicystatus-cl.md) | Workbooks |
| [`feedly_indicators_CL`](tables/feedly-indicators-cl.md) | [1](tables/feedly-indicators-cl.md) | [1](tables/feedly-indicators-cl.md) | - |
| [`fluentbit_CL`](tables/fluentbit-cl.md) | [1](tables/fluentbit-cl.md) | [1](tables/fluentbit-cl.md) | Analytics, Hunting, Workbooks |

## G

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`GCPApigee`](tables/gcpapigee.md) | [1](tables/gcpapigee.md) | [1](tables/gcpapigee.md) | - |
| [`GCPAuditLogs`](tables/gcpauditlogs.md) | [2](tables/gcpauditlogs.md) | [2](tables/gcpauditlogs.md) | Analytics |
| [`GCPCDN`](tables/gcpcdn.md) | [1](tables/gcpcdn.md) | [1](tables/gcpcdn.md) | - |
| [`GCPCloudRun`](tables/gcpcloudrun.md) | [1](tables/gcpcloudrun.md) | [1](tables/gcpcloudrun.md) | - |
| [`GCPCloudSQL`](tables/gcpcloudsql.md) | [1](tables/gcpcloudsql.md) | [1](tables/gcpcloudsql.md) | - |
| [`GCPComputeEngine`](tables/gcpcomputeengine.md) | [1](tables/gcpcomputeengine.md) | [1](tables/gcpcomputeengine.md) | - |
| [`GCPDNS`](tables/gcpdns.md) | [1](tables/gcpdns.md) | [1](tables/gcpdns.md) | Analytics, Hunting, Workbooks |
| [`GCPFirewallLogs`](tables/gcpfirewalllogs.md) | [1](tables/gcpfirewalllogs.md) | [1](tables/gcpfirewalllogs.md) | - |
| [`GCPIAM`](tables/gcpiam.md) | [1](tables/gcpiam.md) | [1](tables/gcpiam.md) | Analytics, Hunting |
| [`GCPIDS`](tables/gcpids.md) | [1](tables/gcpids.md) | [1](tables/gcpids.md) | - |
| [`GCPLoadBalancerLogs_CL`](tables/gcploadbalancerlogs-cl.md) | [1](tables/gcploadbalancerlogs-cl.md) | [1](tables/gcploadbalancerlogs-cl.md) | - |
| [`GCPMonitoring`](tables/gcpmonitoring.md) | [1](tables/gcpmonitoring.md) | [1](tables/gcpmonitoring.md) | - |
| [`GCPNAT`](tables/gcpnat.md) | [1](tables/gcpnat.md) | [1](tables/gcpnat.md) | - |
| [`GCPNATAudit`](tables/gcpnataudit.md) | [1](tables/gcpnataudit.md) | [1](tables/gcpnataudit.md) | - |
| [`GCPResourceManager`](tables/gcpresourcemanager.md) | [1](tables/gcpresourcemanager.md) | [1](tables/gcpresourcemanager.md) | - |
| [`GCPVPCFlow`](tables/gcpvpcflow.md) | [1](tables/gcpvpcflow.md) | [1](tables/gcpvpcflow.md) | - |
| [`GCP_DNS_CL`](tables/gcp-dns-cl.md) | [2](tables/gcp-dns-cl.md) | [1](tables/gcp-dns-cl.md) | Analytics, Hunting, Workbooks |
| [`GCP_IAM_CL`](tables/gcp-iam-cl.md) | [5](tables/gcp-iam-cl.md) | [1](tables/gcp-iam-cl.md) | Analytics, Hunting, Workbooks |
| [`GCP_MONITORING_CL`](tables/gcp-monitoring-cl.md) | [1](tables/gcp-monitoring-cl.md) | [1](tables/gcp-monitoring-cl.md) | - |
| [`GIBTIAAPTThreatActor_CL`](tables/gibtiaaptthreatactor-cl.md) | [1](tables/gibtiaaptthreatactor-cl.md) | - | Playbooks |
| [`GIBTIAAPTThreatReports_CL`](tables/gibtiaaptthreatreports-cl.md) | [1](tables/gibtiaaptthreatreports-cl.md) | - | Playbooks |
| [`GIBTIAAttacksDDoS_CL`](tables/gibtiaattacksddos-cl.md) | [1](tables/gibtiaattacksddos-cl.md) | - | Playbooks |
| [`GIBTIAAttacksDeface_CL`](tables/gibtiaattacksdeface-cl.md) | [1](tables/gibtiaattacksdeface-cl.md) | - | Playbooks |
| [`GIBTIAAttacksPhishingKit_CL`](tables/gibtiaattacksphishingkit-cl.md) | [1](tables/gibtiaattacksphishingkit-cl.md) | - | Playbooks |
| [`GIBTIABPPhishingKit_CL`](tables/gibtiabpphishingkit-cl.md) | [1](tables/gibtiabpphishingkit-cl.md) | - | Playbooks |
| [`GIBTIABPPhishing_CL`](tables/gibtiabpphishing-cl.md) | [1](tables/gibtiabpphishing-cl.md) | - | Playbooks |
| [`GIBTIACompromisedCard_CL`](tables/gibtiacompromisedcard-cl.md) | [1](tables/gibtiacompromisedcard-cl.md) | - | Playbooks |
| [`GIBTIACompromisedIMEI_CL`](tables/gibtiacompromisedimei-cl.md) | [1](tables/gibtiacompromisedimei-cl.md) | - | Playbooks |
| [`GIBTIACompromisedMule_CL`](tables/gibtiacompromisedmule-cl.md) | [1](tables/gibtiacompromisedmule-cl.md) | - | Playbooks |
| [`GIBTIAHIThreatActor_CL`](tables/gibtiahithreatactor-cl.md) | [1](tables/gibtiahithreatactor-cl.md) | - | Playbooks |
| [`GIBTIAHIThreatReports_CL`](tables/gibtiahithreatreports-cl.md) | [1](tables/gibtiahithreatreports-cl.md) | - | Playbooks |
| [`GIBTIAMalwareCNC_CL`](tables/gibtiamalwarecnc-cl.md) | [1](tables/gibtiamalwarecnc-cl.md) | - | Playbooks |
| [`GIBTIAOSIGitLeak_CL`](tables/gibtiaosigitleak-cl.md) | [1](tables/gibtiaosigitleak-cl.md) | - | Playbooks |
| [`GIBTIAOSIPublicLeak_CL`](tables/gibtiaosipublicleak-cl.md) | [1](tables/gibtiaosipublicleak-cl.md) | - | Playbooks |
| [`GIBTIAOSIVulnerability_CL`](tables/gibtiaosivulnerability-cl.md) | [1](tables/gibtiaosivulnerability-cl.md) | - | Playbooks |
| [`GIBTIASuspiciousIPOpenProxy_CL`](tables/gibtiasuspiciousipopenproxy-cl.md) | [1](tables/gibtiasuspiciousipopenproxy-cl.md) | - | Playbooks |
| [`GIBTIASuspiciousIPSocksProxy_CL`](tables/gibtiasuspiciousipsocksproxy-cl.md) | [1](tables/gibtiasuspiciousipsocksproxy-cl.md) | - | Playbooks |
| [`GIBTIASuspiciousIPTorNode_CL`](tables/gibtiasuspiciousiptornode-cl.md) | [1](tables/gibtiasuspiciousiptornode-cl.md) | - | Playbooks |
| [`GIBTIATargetedMalware_CL`](tables/gibtiatargetedmalware-cl.md) | [1](tables/gibtiatargetedmalware-cl.md) | - | Playbooks |
| [`GIBTechTable_CL`](tables/gibtechtable-cl.md) | [1](tables/gibtechtable-cl.md) | - | Playbooks |
| [`GKEAPIServer`](tables/gkeapiserver.md) | [1](tables/gkeapiserver.md) | [1](tables/gkeapiserver.md) | - |
| [`GKEApplication`](tables/gkeapplication.md) | [1](tables/gkeapplication.md) | [1](tables/gkeapplication.md) | - |
| [`GKEAudit`](tables/gkeaudit.md) | [1](tables/gkeaudit.md) | [1](tables/gkeaudit.md) | - |
| [`GKEControllerManager`](tables/gkecontrollermanager.md) | [1](tables/gkecontrollermanager.md) | [1](tables/gkecontrollermanager.md) | - |
| [`GKEHPADecision`](tables/gkehpadecision.md) | [1](tables/gkehpadecision.md) | [1](tables/gkehpadecision.md) | - |
| [`GKEScheduler`](tables/gkescheduler.md) | [1](tables/gkescheduler.md) | [1](tables/gkescheduler.md) | - |
| [`GWorkspace_ReportsAPI_access_transparency_CL`](tables/gworkspace-reportsapi-access-transparency-cl.md) | [2](tables/gworkspace-reportsapi-access-transparency-cl.md) | - | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_admin_CL`](tables/gworkspace-reportsapi-admin-cl.md) | [2](tables/gworkspace-reportsapi-admin-cl.md) | [1](tables/gworkspace-reportsapi-admin-cl.md) | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_calendar_CL`](tables/gworkspace-reportsapi-calendar-cl.md) | [2](tables/gworkspace-reportsapi-calendar-cl.md) | [1](tables/gworkspace-reportsapi-calendar-cl.md) | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_chat_CL`](tables/gworkspace-reportsapi-chat-cl.md) | [2](tables/gworkspace-reportsapi-chat-cl.md) | - | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_chrome_CL`](tables/gworkspace-reportsapi-chrome-cl.md) | [2](tables/gworkspace-reportsapi-chrome-cl.md) | - | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_context_aware_access_CL`](tables/gworkspace-reportsapi-context-aware-access-cl.md) | [2](tables/gworkspace-reportsapi-context-aware-access-cl.md) | - | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_data_studio_CL`](tables/gworkspace-reportsapi-data-studio-cl.md) | [2](tables/gworkspace-reportsapi-data-studio-cl.md) | - | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_drive_CL`](tables/gworkspace-reportsapi-drive-cl.md) | [2](tables/gworkspace-reportsapi-drive-cl.md) | [1](tables/gworkspace-reportsapi-drive-cl.md) | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_gcp_CL`](tables/gworkspace-reportsapi-gcp-cl.md) | [2](tables/gworkspace-reportsapi-gcp-cl.md) | - | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_gplus_CL`](tables/gworkspace-reportsapi-gplus-cl.md) | [2](tables/gworkspace-reportsapi-gplus-cl.md) | - | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_groups_CL`](tables/gworkspace-reportsapi-groups-cl.md) | [2](tables/gworkspace-reportsapi-groups-cl.md) | - | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_groups_enterprise_CL`](tables/gworkspace-reportsapi-groups-enterprise-cl.md) | [2](tables/gworkspace-reportsapi-groups-enterprise-cl.md) | - | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_jamboard_CL`](tables/gworkspace-reportsapi-jamboard-cl.md) | [2](tables/gworkspace-reportsapi-jamboard-cl.md) | - | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_keep_CL`](tables/gworkspace-reportsapi-keep-cl.md) | [2](tables/gworkspace-reportsapi-keep-cl.md) | - | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_login_CL`](tables/gworkspace-reportsapi-login-cl.md) | [2](tables/gworkspace-reportsapi-login-cl.md) | [1](tables/gworkspace-reportsapi-login-cl.md) | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_meet_CL`](tables/gworkspace-reportsapi-meet-cl.md) | [2](tables/gworkspace-reportsapi-meet-cl.md) | - | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_mobile_CL`](tables/gworkspace-reportsapi-mobile-cl.md) | [2](tables/gworkspace-reportsapi-mobile-cl.md) | [1](tables/gworkspace-reportsapi-mobile-cl.md) | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_rules_CL`](tables/gworkspace-reportsapi-rules-cl.md) | [2](tables/gworkspace-reportsapi-rules-cl.md) | - | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_saml_CL`](tables/gworkspace-reportsapi-saml-cl.md) | [2](tables/gworkspace-reportsapi-saml-cl.md) | - | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_token_CL`](tables/gworkspace-reportsapi-token-cl.md) | [2](tables/gworkspace-reportsapi-token-cl.md) | [1](tables/gworkspace-reportsapi-token-cl.md) | Analytics, Hunting, Workbooks |
| [`GWorkspace_ReportsAPI_user_accounts_CL`](tables/gworkspace-reportsapi-user-accounts-cl.md) | [2](tables/gworkspace-reportsapi-user-accounts-cl.md) | [1](tables/gworkspace-reportsapi-user-accounts-cl.md) | Analytics, Hunting, Workbooks |
| [`Garrison_ULTRARemoteLogs_CL`](tables/garrison-ultraremotelogs-cl.md) | [1](tables/garrison-ultraremotelogs-cl.md) | [1](tables/garrison-ultraremotelogs-cl.md) | - |
| [`Gigamon_CL`](tables/gigamon-cl.md) | [1](tables/gigamon-cl.md) | [1](tables/gigamon-cl.md) | Workbooks |
| [`GitHubAuditLogPolling_CL`](tables/githubauditlogpolling-cl.md) | [3](tables/githubauditlogpolling-cl.md) | [1](tables/githubauditlogpolling-cl.md) | Analytics, Hunting, Workbooks |
| [`GitHubAuditLogsV2_CL`](tables/githubauditlogsv2-cl.md) | [1](tables/githubauditlogsv2-cl.md) | [1](tables/githubauditlogsv2-cl.md) | Analytics, Hunting |
| [`GitHubRepoLogs_CL`](tables/githubrepologs-cl.md) | [1](tables/githubrepologs-cl.md) | - | Analytics |
| [`GitHub_CL`](tables/github-cl.md) | [3](tables/github-cl.md) | - | Analytics |
| [`GoogleCloudSCC`](tables/googlecloudscc.md) | [1](tables/googlecloudscc.md) | [1](tables/googlecloudscc.md) | Analytics, Hunting |
| [`GoogleWorkspaceReports`](tables/googleworkspacereports.md) | [1](tables/googleworkspacereports.md) | [1](tables/googleworkspacereports.md) | - |
| [`GoogleWorkspaceReports_CL`](tables/googleworkspacereports-cl.md) | [2](tables/googleworkspacereports-cl.md) | - | Analytics, Hunting, Workbooks |
| [`Guardian_CL`](tables/guardian-cl.md) | [1](tables/guardian-cl.md) | - | Analytics |
| [`githubscanaudit_CL`](tables/githubscanaudit-cl.md) | [1](tables/githubscanaudit-cl.md) | [1](tables/githubscanaudit-cl.md) | Workbooks |

## H

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`HYASProtectDnsSecurityLogs_CL`](tables/hyasprotectdnssecuritylogs-cl.md) | [1](tables/hyasprotectdnssecuritylogs-cl.md) | [1](tables/hyasprotectdnssecuritylogs-cl.md) | - |
| [`HackerViewLog_Azure_1_CL`](tables/hackerviewlog-azure-1-cl.md) | [1](tables/hackerviewlog-azure-1-cl.md) | [1](tables/hackerviewlog-azure-1-cl.md) | Analytics |
| [`HalcyonAuthenticationEvents_CL`](tables/halcyonauthenticationevents-cl.md) | [1](tables/halcyonauthenticationevents-cl.md) | [1](tables/halcyonauthenticationevents-cl.md) | - |
| [`HalcyonDnsActivity_CL`](tables/halcyondnsactivity-cl.md) | [1](tables/halcyondnsactivity-cl.md) | [1](tables/halcyondnsactivity-cl.md) | - |
| [`HalcyonFileActivity_CL`](tables/halcyonfileactivity-cl.md) | [1](tables/halcyonfileactivity-cl.md) | [1](tables/halcyonfileactivity-cl.md) | - |
| [`HalcyonNetworkSession_CL`](tables/halcyonnetworksession-cl.md) | [1](tables/halcyonnetworksession-cl.md) | [1](tables/halcyonnetworksession-cl.md) | - |
| [`HalcyonProcessEvent_CL`](tables/halcyonprocessevent-cl.md) | [1](tables/halcyonprocessevent-cl.md) | [1](tables/halcyonprocessevent-cl.md) | - |
| [`Health_Data_CL`](tables/health-data-cl.md) | [1](tables/health-data-cl.md) | [1](tables/health-data-cl.md) | Workbooks |
| [`Heartbeat`](tables/heartbeat.md) | [10](tables/heartbeat.md) | [1](tables/heartbeat.md) | Analytics, Workbooks |
| [`Host_Name_Info_CL`](tables/host-name-info-cl.md) | [1](tables/host-name-info-cl.md) | - | Workbooks |
| [`HuntingBookmark`](tables/huntingbookmark.md) | [1](tables/huntingbookmark.md) | - | Workbooks |
| [`heartbeat`](tables/heartbeat.md) | [1](tables/heartbeat.md) | - | Workbooks |

## I

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`IP_Space_Info_CL`](tables/ip-space-info-cl.md) | [1](tables/ip-space-info-cl.md) | - | Workbooks |
| [`IdentityDirectoryEvents`](tables/identitydirectoryevents.md) | [3](tables/identitydirectoryevents.md) | [1](tables/identitydirectoryevents.md) | Hunting, Workbooks |
| [`IdentityInfo`](tables/identityinfo.md) | [17](tables/identityinfo.md) | - | Analytics, Hunting, Workbooks |
| [`IdentityLogonEvents`](tables/identitylogonevents.md) | [2](tables/identitylogonevents.md) | [1](tables/identitylogonevents.md) | Analytics, Hunting, Workbooks |
| [`IdentityQueryEvents`](tables/identityqueryevents.md) | [2](tables/identityqueryevents.md) | [1](tables/identityqueryevents.md) | Workbooks |
| [`Identity_Data_CL`](tables/identity-data-cl.md) | [1](tables/identity-data-cl.md) | - | Workbooks |
| [`IllumioFlowEventsV2_CL`](tables/illumiofloweventsv2-cl.md) | [1](tables/illumiofloweventsv2-cl.md) | [1](tables/illumiofloweventsv2-cl.md) | - |
| [`IllumioInsightsSummary_CL`](tables/illumioinsightssummary-cl.md) | [1](tables/illumioinsightssummary-cl.md) | [1](tables/illumioinsightssummary-cl.md) | - |
| [`IllumioInsights_CL`](tables/illumioinsights-cl.md) | [1](tables/illumioinsights-cl.md) | [1](tables/illumioinsights-cl.md) | - |
| [`Illumio_Auditable_Events_CL`](tables/illumio-auditable-events-cl.md) | [2](tables/illumio-auditable-events-cl.md) | [1](tables/illumio-auditable-events-cl.md) | Analytics, Workbooks |
| [`Illumio_Flow_Events_CL`](tables/illumio-flow-events-cl.md) | [2](tables/illumio-flow-events-cl.md) | [1](tables/illumio-flow-events-cl.md) | Workbooks |
| [`Illumio_Workloads_Summarized_API_CL`](tables/illumio-workloads-summarized-api-cl.md) | [1](tables/illumio-workloads-summarized-api-cl.md) | - | Workbooks |
| [`ImpervaWAFCloudV2_CL`](tables/impervawafcloudv2-cl.md) | [1](tables/impervawafcloudv2-cl.md) | [1](tables/impervawafcloudv2-cl.md) | Analytics, Hunting, Workbooks |
| [`ImpervaWAFCloud_CL`](tables/impervawafcloud-cl.md) | [1](tables/impervawafcloud-cl.md) | [1](tables/impervawafcloud-cl.md) | Analytics, Hunting, Workbooks |
| [`InfoSecAnalytics_CL`](tables/infosecanalytics-cl.md) | [1](tables/infosecanalytics-cl.md) | [1](tables/infosecanalytics-cl.md) | Workbooks |
| [`InfobloxInsightAssets_CL`](tables/infobloxinsightassets-cl.md) | [2](tables/infobloxinsightassets-cl.md) | - | Playbooks, Workbooks |
| [`InfobloxInsightComments_CL`](tables/infobloxinsightcomments-cl.md) | [2](tables/infobloxinsightcomments-cl.md) | - | Playbooks, Workbooks |
| [`InfobloxInsightEvents_CL`](tables/infobloxinsightevents-cl.md) | [2](tables/infobloxinsightevents-cl.md) | - | Playbooks, Workbooks |
| [`InfobloxInsightIndicators_CL`](tables/infobloxinsightindicators-cl.md) | [2](tables/infobloxinsightindicators-cl.md) | - | Playbooks, Workbooks |
| [`InfobloxInsight_CL`](tables/infobloxinsight-cl.md) | [2](tables/infobloxinsight-cl.md) | [1](tables/infobloxinsight-cl.md) | Analytics, Playbooks, Workbooks |
| [`Infoblox_Config_Insight_Details_CL`](tables/infoblox-config-insight-details-cl.md) | [1](tables/infoblox-config-insight-details-cl.md) | - | Workbooks |
| [`Infoblox_Config_Insights_CL`](tables/infoblox-config-insights-cl.md) | [1](tables/infoblox-config-insights-cl.md) | - | Workbooks |
| [`Infoblox_Failed_Indicators_CL`](tables/infoblox-failed-indicators-cl.md) | [1](tables/infoblox-failed-indicators-cl.md) | [1](tables/infoblox-failed-indicators-cl.md) | - |
| [`InformationProtectionLogs_CL`](tables/informationprotectionlogs-cl.md) | [7](tables/informationprotectionlogs-cl.md) | - | Analytics, Hunting, Workbooks |
| [`InsightsMetrics`](tables/insightsmetrics.md) | [2](tables/insightsmetrics.md) | - | Workbooks |
| [`IntegrationTableIncidents_CL`](tables/integrationtableincidents-cl.md) | [1](tables/integrationtableincidents-cl.md) | [1](tables/integrationtableincidents-cl.md) | - |
| [`IntegrationTable_CL`](tables/integrationtable-cl.md) | [1](tables/integrationtable-cl.md) | [1](tables/integrationtable-cl.md) | - |
| [`IntuneAuditLogs`](tables/intuneauditlogs.md) | [1](tables/intuneauditlogs.md) | - | Workbooks |
| [`IntuneDeviceComplianceOrg`](tables/intunedevicecomplianceorg.md) | [1](tables/intunedevicecomplianceorg.md) | - | Workbooks |
| [`IntuneDevices`](tables/intunedevices.md) | [1](tables/intunedevices.md) | - | Workbooks |
| [`IntuneOperationalLogs`](tables/intuneoperationallogs.md) | [1](tables/intuneoperationallogs.md) | - | Workbooks |
| [`Ipinfo_ASN_CL`](tables/ipinfo-asn-cl.md) | [1](tables/ipinfo-asn-cl.md) | [1](tables/ipinfo-asn-cl.md) | - |
| [`Ipinfo_Abuse_CL`](tables/ipinfo-abuse-cl.md) | [1](tables/ipinfo-abuse-cl.md) | [1](tables/ipinfo-abuse-cl.md) | - |
| [`Ipinfo_Carrier_CL`](tables/ipinfo-carrier-cl.md) | [1](tables/ipinfo-carrier-cl.md) | [1](tables/ipinfo-carrier-cl.md) | - |
| [`Ipinfo_Company_CL`](tables/ipinfo-company-cl.md) | [1](tables/ipinfo-company-cl.md) | [1](tables/ipinfo-company-cl.md) | - |
| [`Ipinfo_Country_CL`](tables/ipinfo-country-cl.md) | [1](tables/ipinfo-country-cl.md) | [1](tables/ipinfo-country-cl.md) | - |
| [`Ipinfo_Domain_CL`](tables/ipinfo-domain-cl.md) | [1](tables/ipinfo-domain-cl.md) | [1](tables/ipinfo-domain-cl.md) | - |
| [`Ipinfo_Location_CL`](tables/ipinfo-location-cl.md) | [1](tables/ipinfo-location-cl.md) | [1](tables/ipinfo-location-cl.md) | - |
| [`Ipinfo_Location_extended_CL`](tables/ipinfo-location-extended-cl.md) | [1](tables/ipinfo-location-extended-cl.md) | [1](tables/ipinfo-location-extended-cl.md) | - |
| [`Ipinfo_Privacy_CL`](tables/ipinfo-privacy-cl.md) | [1](tables/ipinfo-privacy-cl.md) | [1](tables/ipinfo-privacy-cl.md) | - |
| [`Ipinfo_Privacy_extended_CL`](tables/ipinfo-privacy-extended-cl.md) | [1](tables/ipinfo-privacy-extended-cl.md) | [1](tables/ipinfo-privacy-extended-cl.md) | - |
| [`Ipinfo_RIRWHOIS_CL`](tables/ipinfo-rirwhois-cl.md) | [1](tables/ipinfo-rirwhois-cl.md) | [1](tables/ipinfo-rirwhois-cl.md) | - |
| [`Ipinfo_RWHOIS_CL`](tables/ipinfo-rwhois-cl.md) | [1](tables/ipinfo-rwhois-cl.md) | [1](tables/ipinfo-rwhois-cl.md) | - |
| [`Ipinfo_WHOIS_ASN_CL`](tables/ipinfo-whois-asn-cl.md) | [1](tables/ipinfo-whois-asn-cl.md) | [1](tables/ipinfo-whois-asn-cl.md) | - |
| [`Ipinfo_WHOIS_MNT_CL`](tables/ipinfo-whois-mnt-cl.md) | [1](tables/ipinfo-whois-mnt-cl.md) | [1](tables/ipinfo-whois-mnt-cl.md) | - |
| [`Ipinfo_WHOIS_NET_CL`](tables/ipinfo-whois-net-cl.md) | [1](tables/ipinfo-whois-net-cl.md) | [1](tables/ipinfo-whois-net-cl.md) | - |
| [`Ipinfo_WHOIS_ORG_CL`](tables/ipinfo-whois-org-cl.md) | [1](tables/ipinfo-whois-org-cl.md) | [1](tables/ipinfo-whois-org-cl.md) | - |
| [`Ipinfo_WHOIS_POC_CL`](tables/ipinfo-whois-poc-cl.md) | [1](tables/ipinfo-whois-poc-cl.md) | [1](tables/ipinfo-whois-poc-cl.md) | - |
| [`Island_Admin_CL`](tables/island-admin-cl.md) | [1](tables/island-admin-cl.md) | [1](tables/island-admin-cl.md) | Workbooks |
| [`Island_User_CL`](tables/island-user-cl.md) | [1](tables/island-user-cl.md) | [1](tables/island-user-cl.md) | Workbooks |
| [`iocsent_CL`](tables/iocsent-cl.md) | [1](tables/iocsent-cl.md) | [1](tables/iocsent-cl.md) | - |

## J

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`JBossEvent_CL`](tables/jbossevent-cl.md) | [1](tables/jbossevent-cl.md) | [1](tables/jbossevent-cl.md) | - |
| [`JBossLogs_CL`](tables/jbosslogs-cl.md) | [1](tables/jbosslogs-cl.md) | [1](tables/jbosslogs-cl.md) | - |
| [`Jira_Audit_CL`](tables/jira-audit-cl.md) | [1](tables/jira-audit-cl.md) | [1](tables/jira-audit-cl.md) | Analytics, Hunting, Workbooks |
| [`Jira_Audit_v2_CL`](tables/jira-audit-v2-cl.md) | [1](tables/jira-audit-v2-cl.md) | [1](tables/jira-audit-v2-cl.md) | Analytics, Hunting, Workbooks |
| [`JuniperIDP_CL`](tables/juniperidp-cl.md) | [2](tables/juniperidp-cl.md) | [2](tables/juniperidp-cl.md) | - |
| [`jamfprotect_CL`](tables/jamfprotect-cl.md) | [1](tables/jamfprotect-cl.md) | - | Analytics |
| [`jamfprotectalerts_CL`](tables/jamfprotectalerts-cl.md) | [1](tables/jamfprotectalerts-cl.md) | [1](tables/jamfprotectalerts-cl.md) | Analytics, Workbooks |
| [`jamfprotecttelemetryv2_CL`](tables/jamfprotecttelemetryv2-cl.md) | [1](tables/jamfprotecttelemetryv2-cl.md) | [1](tables/jamfprotecttelemetryv2-cl.md) | Workbooks |
| [`jamfprotectunifiedlogs_CL`](tables/jamfprotectunifiedlogs-cl.md) | [1](tables/jamfprotectunifiedlogs-cl.md) | [1](tables/jamfprotectunifiedlogs-cl.md) | Analytics, Workbooks |

## K

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`KeeperSecurityEventNewLogs_CL`](tables/keepersecurityeventnewlogs-cl.md) | [1](tables/keepersecurityeventnewlogs-cl.md) | [1](tables/keepersecurityeventnewlogs-cl.md) | Analytics, Workbooks |
| [`KubeEvents`](tables/kubeevents.md) | [1](tables/kubeevents.md) | [1](tables/kubeevents.md) | - |
| [`KubeEvents_CL`](tables/kubeevents-cl.md) | [1](tables/kubeevents-cl.md) | - | Workbooks |

## L

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`LAQueryLogs`](tables/laquerylogs.md) | [3](tables/laquerylogs.md) | - | Workbooks |
| [`LastPassNativePoller_CL`](tables/lastpassnativepoller-cl.md) | [1](tables/lastpassnativepoller-cl.md) | [1](tables/lastpassnativepoller-cl.md) | Analytics, Hunting, Workbooks |
| [`LinuxAudit_CL`](tables/linuxaudit-cl.md) | [1](tables/linuxaudit-cl.md) | [1](tables/linuxaudit-cl.md) | - |
| [`Lockdown_Data_CL`](tables/lockdown-data-cl.md) | [1](tables/lockdown-data-cl.md) | [1](tables/lockdown-data-cl.md) | Workbooks |
| [`LookoutCloudSecurity_CL`](tables/lookoutcloudsecurity-cl.md) | [1](tables/lookoutcloudsecurity-cl.md) | [1](tables/lookoutcloudsecurity-cl.md) | - |
| [`LookoutMtdV2_CL`](tables/lookoutmtdv2-cl.md) | [1](tables/lookoutmtdv2-cl.md) | [1](tables/lookoutmtdv2-cl.md) | Analytics, Hunting, Workbooks |
| [`Lookout_CL`](tables/lookout-cl.md) | [1](tables/lookout-cl.md) | [1](tables/lookout-cl.md) | Analytics |

## M

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`M365SecureScoreControls_CL`](tables/m365securescorecontrols-cl.md) | [1](tables/m365securescorecontrols-cl.md) | - | Workbooks |
| [`MDBALogTable_CL`](tables/mdbalogtable-cl.md) | [1](tables/mdbalogtable-cl.md) | [1](tables/mdbalogtable-cl.md) | - |
| [`MDCFileIntegrityMonitoringEvents`](tables/mdcfileintegritymonitoringevents.md) | [1](tables/mdcfileintegritymonitoringevents.md) | - | Workbooks |
| [`MDfEExposureScore_CL`](tables/mdfeexposurescore-cl.md) | [1](tables/mdfeexposurescore-cl.md) | - | Workbooks |
| [`MDfERecommendations_CL`](tables/mdferecommendations-cl.md) | [1](tables/mdferecommendations-cl.md) | - | Workbooks |
| [`MDfEVulnerabilitiesList_CL`](tables/mdfevulnerabilitieslist-cl.md) | [1](tables/mdfevulnerabilitieslist-cl.md) | - | Workbooks |
| [`MailGuard365_Threats_CL`](tables/mailguard365-threats-cl.md) | [1](tables/mailguard365-threats-cl.md) | [1](tables/mailguard365-threats-cl.md) | Hunting, Workbooks |
| [`MailRiskEventEmails_CL`](tables/mailriskeventemails-cl.md) | [1](tables/mailriskeventemails-cl.md) | [1](tables/mailriskeventemails-cl.md) | - |
| [`Malware_Data_CL`](tables/malware-data-cl.md) | [1](tables/malware-data-cl.md) | [1](tables/malware-data-cl.md) | Workbooks |
| [`MarkLogicAudit_CL`](tables/marklogicaudit-cl.md) | [2](tables/marklogicaudit-cl.md) | [2](tables/marklogicaudit-cl.md) | - |
| [`McasShadowItReporting`](tables/mcasshadowitreporting.md) | [2](tables/mcasshadowitreporting.md) | [1](tables/mcasshadowitreporting.md) | Workbooks |
| [`MessageEvents`](tables/messageevents.md) | [1](tables/messageevents.md) | - | Hunting |
| [`MessagePostDeliveryEvents`](tables/messagepostdeliveryevents.md) | [1](tables/messagepostdeliveryevents.md) | - | Hunting |
| [`MessageTrackingLog_CL`](tables/messagetrackinglog-cl.md) | [1](tables/messagetrackinglog-cl.md) | [2](tables/messagetrackinglog-cl.md) | - |
| [`MessageUrlInfo`](tables/messageurlinfo.md) | [1](tables/messageurlinfo.md) | - | Hunting |
| [`MicrosoftPurviewInformationProtection`](tables/microsoftpurviewinformationprotection.md) | [3](tables/microsoftpurviewinformationprotection.md) | [1](tables/microsoftpurviewinformationprotection.md) | Workbooks |
| [`MimecastAudit_CL`](tables/mimecastaudit-cl.md) | [1](tables/mimecastaudit-cl.md) | [1](tables/mimecastaudit-cl.md) | Analytics, Workbooks |
| [`MimecastDLP_CL`](tables/mimecastdlp-cl.md) | [1](tables/mimecastdlp-cl.md) | [1](tables/mimecastdlp-cl.md) | Analytics |
| [`MimecastSIEM_CL`](tables/mimecastsiem-cl.md) | [1](tables/mimecastsiem-cl.md) | [1](tables/mimecastsiem-cl.md) | Analytics, Workbooks |
| [`MimecastTTPAttachment_CL`](tables/mimecastttpattachment-cl.md) | [1](tables/mimecastttpattachment-cl.md) | [1](tables/mimecastttpattachment-cl.md) | Analytics, Workbooks |
| [`MimecastTTPImpersonation_CL`](tables/mimecastttpimpersonation-cl.md) | [1](tables/mimecastttpimpersonation-cl.md) | [1](tables/mimecastttpimpersonation-cl.md) | Analytics, Workbooks |
| [`MimecastTTPUrl_CL`](tables/mimecastttpurl-cl.md) | [1](tables/mimecastttpurl-cl.md) | [1](tables/mimecastttpurl-cl.md) | Analytics, Workbooks |
| [`MiroAuditLogs_CL`](tables/miroauditlogs-cl.md) | [1](tables/miroauditlogs-cl.md) | [1](tables/miroauditlogs-cl.md) | - |
| [`MiroContentLogs_CL`](tables/mirocontentlogs-cl.md) | [1](tables/mirocontentlogs-cl.md) | [1](tables/mirocontentlogs-cl.md) | - |
| [`MongoDBAudit_CL`](tables/mongodbaudit-cl.md) | [2](tables/mongodbaudit-cl.md) | [2](tables/mongodbaudit-cl.md) | - |
| [`MorphisecAlerts_CL`](tables/morphisecalerts-cl.md) | [1](tables/morphisecalerts-cl.md) | [1](tables/morphisecalerts-cl.md) | Analytics |
| [`MuleSoft_Cloudhub_CL`](tables/mulesoft-cloudhub-cl.md) | [1](tables/mulesoft-cloudhub-cl.md) | [1](tables/mulesoft-cloudhub-cl.md) | - |
| [`maillog_CL`](tables/maillog-cl.md) | [1](tables/maillog-cl.md) | - | Analytics, Hunting, Workbooks |
| [`meraki_CL`](tables/meraki-cl.md) | [3](tables/meraki-cl.md) | [1](tables/meraki-cl.md) | Workbooks |
| [`message_CL`](tables/message-cl.md) | [1](tables/message-cl.md) | - | Analytics, Hunting, Workbooks |

## N

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`NCProtectUAL_CL`](tables/ncprotectual-cl.md) | [1](tables/ncprotectual-cl.md) | [1](tables/ncprotectual-cl.md) | Workbooks |
| [`NGINX_CL`](tables/nginx-cl.md) | [2](tables/nginx-cl.md) | [2](tables/nginx-cl.md) | Analytics, Hunting, Workbooks |
| [`NTANetAnalytics`](tables/ntanetanalytics.md) | [1](tables/ntanetanalytics.md) | - | Workbooks |
| [`NXLogFIM_CL`](tables/nxlogfim-cl.md) | [1](tables/nxlogfim-cl.md) | [1](tables/nxlogfim-cl.md) | - |
| [`NXLog_DNS_Server_CL`](tables/nxlog-dns-server-cl.md) | [2](tables/nxlog-dns-server-cl.md) | [1](tables/nxlog-dns-server-cl.md) | Workbooks |
| [`NetBackupAlerts_CL`](tables/netbackupalerts-cl.md) | [1](tables/netbackupalerts-cl.md) | - | Analytics |
| [`Netclean_Incidents_CL`](tables/netclean-incidents-cl.md) | [1](tables/netclean-incidents-cl.md) | [1](tables/netclean-incidents-cl.md) | Analytics, Workbooks |
| [`NetskopeAlerts_CL`](tables/netskopealerts-cl.md) | [1](tables/netskopealerts-cl.md) | [1](tables/netskopealerts-cl.md) | Workbooks |
| [`NetskopeEventsApplication_CL`](tables/netskopeeventsapplication-cl.md) | [1](tables/netskopeeventsapplication-cl.md) | [1](tables/netskopeeventsapplication-cl.md) | Workbooks |
| [`NetskopeEventsAudit_CL`](tables/netskopeeventsaudit-cl.md) | [1](tables/netskopeeventsaudit-cl.md) | [1](tables/netskopeeventsaudit-cl.md) | - |
| [`NetskopeEventsConnection_CL`](tables/netskopeeventsconnection-cl.md) | [1](tables/netskopeeventsconnection-cl.md) | [1](tables/netskopeeventsconnection-cl.md) | - |
| [`NetskopeEventsDLP_CL`](tables/netskopeeventsdlp-cl.md) | [1](tables/netskopeeventsdlp-cl.md) | [1](tables/netskopeeventsdlp-cl.md) | - |
| [`NetskopeEventsEndpoint_CL`](tables/netskopeeventsendpoint-cl.md) | [1](tables/netskopeeventsendpoint-cl.md) | [1](tables/netskopeeventsendpoint-cl.md) | - |
| [`NetskopeEventsInfrastructure_CL`](tables/netskopeeventsinfrastructure-cl.md) | [1](tables/netskopeeventsinfrastructure-cl.md) | [1](tables/netskopeeventsinfrastructure-cl.md) | - |
| [`NetskopeEventsNetwork_CL`](tables/netskopeeventsnetwork-cl.md) | [1](tables/netskopeeventsnetwork-cl.md) | [1](tables/netskopeeventsnetwork-cl.md) | - |
| [`NetskopeEventsPage_CL`](tables/netskopeeventspage-cl.md) | [1](tables/netskopeeventspage-cl.md) | [1](tables/netskopeeventspage-cl.md) | - |
| [`NetskopeWebTransactions_CL`](tables/netskopewebtransactions-cl.md) | [1](tables/netskopewebtransactions-cl.md) | - | Workbooks |
| [`NetskopeWebtxData_CL`](tables/netskopewebtxdata-cl.md) | [1](tables/netskopewebtxdata-cl.md) | [1](tables/netskopewebtxdata-cl.md) | Workbooks |
| [`NetskopeWebtxErrors_CL`](tables/netskopewebtxerrors-cl.md) | [1](tables/netskopewebtxerrors-cl.md) | [1](tables/netskopewebtxerrors-cl.md) | Analytics |
| [`Netskope_Alerts_CL`](tables/netskope-alerts-cl.md) | [2](tables/netskope-alerts-cl.md) | - | Workbooks |
| [`Netskope_CL`](tables/netskope-cl.md) | [1](tables/netskope-cl.md) | [1](tables/netskope-cl.md) | - |
| [`Netskope_Events_CL`](tables/netskope-events-cl.md) | [2](tables/netskope-events-cl.md) | - | Workbooks |
| [`Netskope_WebTX_CL`](tables/netskope-webtx-cl.md) | [2](tables/netskope-webtx-cl.md) | - | Workbooks |
| [`Netskope_WebTx_metrics_CL`](tables/netskope-webtx-metrics-cl.md) | [1](tables/netskope-webtx-metrics-cl.md) | [1](tables/netskope-webtx-metrics-cl.md) | - |
| [`NetworkAccessTraffic`](tables/networkaccesstraffic.md) | [3](tables/networkaccesstraffic.md) | [1](tables/networkaccesstraffic.md) | Analytics, Workbooks |
| [`NetworkCustomAnalytics_CL`](tables/networkcustomanalytics-cl.md) | [1](tables/networkcustomanalytics-cl.md) | - | Playbooks, Workbooks |
| [`NetworkCustomAnalytics_country_CL`](tables/networkcustomanalytics-country-cl.md) | [1](tables/networkcustomanalytics-country-cl.md) | - | Playbooks, Workbooks |
| [`NetworkCustomAnalytics_ip_CL`](tables/networkcustomanalytics-ip-cl.md) | [1](tables/networkcustomanalytics-ip-cl.md) | - | Playbooks, Workbooks |
| [`NetworkCustomAnalytics_protocol_CL`](tables/networkcustomanalytics-protocol-cl.md) | [1](tables/networkcustomanalytics-protocol-cl.md) | - | Analytics, Hunting, Playbooks, Workbooks |
| [`NetworkCustomAnalytics_rule_CL`](tables/networkcustomanalytics-rule-cl.md) | [1](tables/networkcustomanalytics-rule-cl.md) | - | Playbooks, Workbooks |
| [`NetworkCustomAnalytics_sourceInfo_CL`](tables/networkcustomanalytics-sourceinfo-cl.md) | [1](tables/networkcustomanalytics-sourceinfo-cl.md) | - | Playbooks, Workbooks |
| [`NetworkCustomAnalytics_source_port_CL`](tables/networkcustomanalytics-source-port-cl.md) | [1](tables/networkcustomanalytics-source-port-cl.md) | - | Playbooks, Workbooks |
| [`NetworkCustomAnalytics_threat_CL`](tables/networkcustomanalytics-threat-cl.md) | [1](tables/networkcustomanalytics-threat-cl.md) | - | Playbooks, Workbooks |
| [`NetworkCustomAnalytics_threat_ioc_CL`](tables/networkcustomanalytics-threat-ioc-cl.md) | [1](tables/networkcustomanalytics-threat-ioc-cl.md) | - | Playbooks, Workbooks |
| [`NetworkSummary_Country_CL`](tables/networksummary-country-cl.md) | [1](tables/networksummary-country-cl.md) | - | Workbooks |
| [`NetworkSummary_IP_CL`](tables/networksummary-ip-cl.md) | [1](tables/networksummary-ip-cl.md) | - | Workbooks |
| [`NetworkSummary_Protocol_CL`](tables/networksummary-protocol-cl.md) | [1](tables/networksummary-protocol-cl.md) | - | Analytics, Hunting, Workbooks |
| [`NetworkSummary_Result_CL`](tables/networksummary-result-cl.md) | [1](tables/networksummary-result-cl.md) | - | Workbooks |
| [`NetworkSummary_Rule_CL`](tables/networksummary-rule-cl.md) | [1](tables/networksummary-rule-cl.md) | - | Workbooks |
| [`NetworkSummary_SourceInfo_CL`](tables/networksummary-sourceinfo-cl.md) | [1](tables/networksummary-sourceinfo-cl.md) | - | Workbooks |
| [`NetworkSummary_Source_Port_CL`](tables/networksummary-source-port-cl.md) | [1](tables/networksummary-source-port-cl.md) | - | Workbooks |
| [`NetworkSummary_Threat_CL`](tables/networksummary-threat-cl.md) | [1](tables/networksummary-threat-cl.md) | - | Workbooks |
| [`NetworkSummary_Threat_IOC_CL`](tables/networksummary-threat-ioc-cl.md) | [1](tables/networksummary-threat-ioc-cl.md) | - | Workbooks |
| [`NexposeInsightVMCloud_assets_CL`](tables/nexposeinsightvmcloud-assets-cl.md) | [1](tables/nexposeinsightvmcloud-assets-cl.md) | [1](tables/nexposeinsightvmcloud-assets-cl.md) | - |
| [`NexposeInsightVMCloud_vulnerabilities_CL`](tables/nexposeinsightvmcloud-vulnerabilities-cl.md) | [1](tables/nexposeinsightvmcloud-vulnerabilities-cl.md) | [1](tables/nexposeinsightvmcloud-vulnerabilities-cl.md) | - |
| [`NonameAPISecurityAlert_CL`](tables/nonameapisecurityalert-cl.md) | [1](tables/nonameapisecurityalert-cl.md) | [1](tables/nonameapisecurityalert-cl.md) | - |
| [`NordPassEventLogs_CL`](tables/nordpasseventlogs-cl.md) | [1](tables/nordpasseventlogs-cl.md) | [1](tables/nordpasseventlogs-cl.md) | Analytics, Workbooks |
| [`net_assets_CL`](tables/net-assets-cl.md) | [1](tables/net-assets-cl.md) | [1](tables/net-assets-cl.md) | - |

## O

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`OCI_LogsV2_CL`](tables/oci-logsv2-cl.md) | [1](tables/oci-logsv2-cl.md) | [1](tables/oci-logsv2-cl.md) | Analytics, Hunting, Workbooks |
| [`OCI_Logs_CL`](tables/oci-logs-cl.md) | [1](tables/oci-logs-cl.md) | [1](tables/oci-logs-cl.md) | Analytics, Hunting, Workbooks |
| [`ObsidianActivity_CL`](tables/obsidianactivity-cl.md) | [1](tables/obsidianactivity-cl.md) | [1](tables/obsidianactivity-cl.md) | - |
| [`ObsidianThreat_CL`](tables/obsidianthreat-cl.md) | [1](tables/obsidianthreat-cl.md) | [1](tables/obsidianthreat-cl.md) | - |
| [`OfficeActivity`](tables/officeactivity.md) | [25](tables/officeactivity.md) | [1](tables/officeactivity.md) | Analytics, Hunting, Workbooks |
| [`OktaNativePoller_CL`](tables/oktanativepoller-cl.md) | [1](tables/oktanativepoller-cl.md) | [1](tables/oktanativepoller-cl.md) | - |
| [`OktaV2_CL`](tables/oktav2-cl.md) | [1](tables/oktav2-cl.md) | [2](tables/oktav2-cl.md) | Analytics, Hunting, Workbooks |
| [`Okta_CL`](tables/okta-cl.md) | [1](tables/okta-cl.md) | [3](tables/okta-cl.md) | Analytics, Hunting, Workbooks |
| [`Onapsis_Defend_CL`](tables/onapsis-defend-cl.md) | [1](tables/onapsis-defend-cl.md) | [2](tables/onapsis-defend-cl.md) | - |
| [`OneLoginEventsV2_CL`](tables/onelogineventsv2-cl.md) | [1](tables/onelogineventsv2-cl.md) | [1](tables/onelogineventsv2-cl.md) | - |
| [`OneLoginUsersV2_CL`](tables/oneloginusersv2-cl.md) | [1](tables/oneloginusersv2-cl.md) | [1](tables/oneloginusersv2-cl.md) | - |
| [`OneLogin_CL`](tables/onelogin-cl.md) | [1](tables/onelogin-cl.md) | [1](tables/onelogin-cl.md) | - |
| [`OnePasswordEventLogs_CL`](tables/onepasswordeventlogs-cl.md) | [1](tables/onepasswordeventlogs-cl.md) | [3](tables/onepasswordeventlogs-cl.md) | Analytics, Workbooks |
| [`OneTrustMetadataV3_CL`](tables/onetrustmetadatav3-cl.md) | [1](tables/onetrustmetadatav3-cl.md) | [1](tables/onetrustmetadatav3-cl.md) | - |
| [`OpenSystemsAuthenticationLogs_CL`](tables/opensystemsauthenticationlogs-cl.md) | [1](tables/opensystemsauthenticationlogs-cl.md) | [1](tables/opensystemsauthenticationlogs-cl.md) | - |
| [`OpenSystemsFirewallLogs_CL`](tables/opensystemsfirewalllogs-cl.md) | [1](tables/opensystemsfirewalllogs-cl.md) | [1](tables/opensystemsfirewalllogs-cl.md) | - |
| [`OpenSystemsProxyLogs_CL`](tables/opensystemsproxylogs-cl.md) | [1](tables/opensystemsproxylogs-cl.md) | [1](tables/opensystemsproxylogs-cl.md) | - |
| [`OpenSystemsZtnaLogs_CL`](tables/opensystemsztnalogs-cl.md) | [1](tables/opensystemsztnalogs-cl.md) | [1](tables/opensystemsztnalogs-cl.md) | - |
| [`Open_Ports_Data_CL`](tables/open-ports-data-cl.md) | [1](tables/open-ports-data-cl.md) | - | Workbooks |
| [`Operation`](tables/operation.md) | [14](tables/operation.md) | - | Workbooks |
| [`OracleWebLogicServer_CL`](tables/oracleweblogicserver-cl.md) | [2](tables/oracleweblogicserver-cl.md) | [2](tables/oracleweblogicserver-cl.md) | Analytics, Hunting, Workbooks |
| [`OrcaAlerts_CL`](tables/orcaalerts-cl.md) | [1](tables/orcaalerts-cl.md) | [1](tables/orcaalerts-cl.md) | Workbooks |
| [`operation`](tables/operation.md) | [1](tables/operation.md) | - | Workbooks |

## P

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`PDNSBlockData_CL`](tables/pdnsblockdata-cl.md) | [1](tables/pdnsblockdata-cl.md) | [1](tables/pdnsblockdata-cl.md) | - |
| [`PDNS_Data_CL`](tables/pdns-data-cl.md) | [1](tables/pdns-data-cl.md) | - | Workbooks |
| [`PaloAltoCortexXDR_Alerts_CL`](tables/paloaltocortexxdr-alerts-cl.md) | [2](tables/paloaltocortexxdr-alerts-cl.md) | [1](tables/paloaltocortexxdr-alerts-cl.md) | - |
| [`PaloAltoCortexXDR_Audit_Agent_CL`](tables/paloaltocortexxdr-audit-agent-cl.md) | [2](tables/paloaltocortexxdr-audit-agent-cl.md) | [1](tables/paloaltocortexxdr-audit-agent-cl.md) | - |
| [`PaloAltoCortexXDR_Audit_Management_CL`](tables/paloaltocortexxdr-audit-management-cl.md) | [2](tables/paloaltocortexxdr-audit-management-cl.md) | [1](tables/paloaltocortexxdr-audit-management-cl.md) | - |
| [`PaloAltoCortexXDR_Endpoints_CL`](tables/paloaltocortexxdr-endpoints-cl.md) | [2](tables/paloaltocortexxdr-endpoints-cl.md) | [1](tables/paloaltocortexxdr-endpoints-cl.md) | - |
| [`PaloAltoCortexXDR_Incidents_CL`](tables/paloaltocortexxdr-incidents-cl.md) | [2](tables/paloaltocortexxdr-incidents-cl.md) | [2](tables/paloaltocortexxdr-incidents-cl.md) | Analytics |
| [`PaloAltoPrismaCloudAlertV2_CL`](tables/paloaltoprismacloudalertv2-cl.md) | [1](tables/paloaltoprismacloudalertv2-cl.md) | [1](tables/paloaltoprismacloudalertv2-cl.md) | Analytics, Hunting, Workbooks |
| [`PaloAltoPrismaCloudAlert_CL`](tables/paloaltoprismacloudalert-cl.md) | [1](tables/paloaltoprismacloudalert-cl.md) | [1](tables/paloaltoprismacloudalert-cl.md) | Analytics, Hunting, Workbooks |
| [`PaloAltoPrismaCloudAuditV2_CL`](tables/paloaltoprismacloudauditv2-cl.md) | [1](tables/paloaltoprismacloudauditv2-cl.md) | [1](tables/paloaltoprismacloudauditv2-cl.md) | Analytics, Hunting, Workbooks |
| [`PaloAltoPrismaCloudAudit_CL`](tables/paloaltoprismacloudaudit-cl.md) | [1](tables/paloaltoprismacloudaudit-cl.md) | [1](tables/paloaltoprismacloudaudit-cl.md) | Analytics, Hunting, Workbooks |
| [`Pathlock_TDnR_CL`](tables/pathlock-tdnr-cl.md) | [1](tables/pathlock-tdnr-cl.md) | [2](tables/pathlock-tdnr-cl.md) | - |
| [`Perf`](tables/perf.md) | [4](tables/perf.md) | - | Workbooks |
| [`Perimeter81_CL`](tables/perimeter81-cl.md) | [1](tables/perimeter81-cl.md) | [1](tables/perimeter81-cl.md) | Workbooks |
| [`Phosphorus_CL`](tables/phosphorus-cl.md) | [1](tables/phosphorus-cl.md) | [1](tables/phosphorus-cl.md) | - |
| [`PingOne_AuditActivitiesV2_CL`](tables/pingone-auditactivitiesv2-cl.md) | [1](tables/pingone-auditactivitiesv2-cl.md) | [1](tables/pingone-auditactivitiesv2-cl.md) | - |
| [`PostgreSQL_CL`](tables/postgresql-cl.md) | [2](tables/postgresql-cl.md) | [2](tables/postgresql-cl.md) | - |
| [`PowerAutomateActivity`](tables/powerautomateactivity.md) | [1](tables/powerautomateactivity.md) | - | Analytics |
| [`PowerBIActivity`](tables/powerbiactivity.md) | [1](tables/powerbiactivity.md) | [1](tables/powerbiactivity.md) | Workbooks |
| [`PowerPlatformAdminActivity`](tables/powerplatformadminactivity.md) | [1](tables/powerplatformadminactivity.md) | - | Analytics, Hunting |
| [`PrismaCloudCompute_CL`](tables/prismacloudcompute-cl.md) | [1](tables/prismacloudcompute-cl.md) | [2](tables/prismacloudcompute-cl.md) | - |
| [`ProjectActivity`](tables/projectactivity.md) | [1](tables/projectactivity.md) | [1](tables/projectactivity.md) | - |
| [`ProofPointData_CL`](tables/proofpointdata-cl.md) | [1](tables/proofpointdata-cl.md) | - | Playbooks |
| [`ProofPointTAPClicksBlockedV2_CL`](tables/proofpointtapclicksblockedv2-cl.md) | [1](tables/proofpointtapclicksblockedv2-cl.md) | [1](tables/proofpointtapclicksblockedv2-cl.md) | Workbooks |
| [`ProofPointTAPClicksBlocked_CL`](tables/proofpointtapclicksblocked-cl.md) | [1](tables/proofpointtapclicksblocked-cl.md) | [1](tables/proofpointtapclicksblocked-cl.md) | - |
| [`ProofPointTAPClicksPermittedV2_CL`](tables/proofpointtapclickspermittedv2-cl.md) | [1](tables/proofpointtapclickspermittedv2-cl.md) | [1](tables/proofpointtapclickspermittedv2-cl.md) | Analytics, Workbooks |
| [`ProofPointTAPClicksPermitted_CL`](tables/proofpointtapclickspermitted-cl.md) | [1](tables/proofpointtapclickspermitted-cl.md) | [1](tables/proofpointtapclickspermitted-cl.md) | - |
| [`ProofPointTAPMessagesBlockedV2_CL`](tables/proofpointtapmessagesblockedv2-cl.md) | [1](tables/proofpointtapmessagesblockedv2-cl.md) | [1](tables/proofpointtapmessagesblockedv2-cl.md) | Workbooks |
| [`ProofPointTAPMessagesBlocked_CL`](tables/proofpointtapmessagesblocked-cl.md) | [1](tables/proofpointtapmessagesblocked-cl.md) | [1](tables/proofpointtapmessagesblocked-cl.md) | - |
| [`ProofPointTAPMessagesDeliveredV2_CL`](tables/proofpointtapmessagesdeliveredv2-cl.md) | [1](tables/proofpointtapmessagesdeliveredv2-cl.md) | [1](tables/proofpointtapmessagesdeliveredv2-cl.md) | Analytics, Workbooks |
| [`ProofPointTAPMessagesDelivered_CL`](tables/proofpointtapmessagesdelivered-cl.md) | [1](tables/proofpointtapmessagesdelivered-cl.md) | [1](tables/proofpointtapmessagesdelivered-cl.md) | - |
| [`ProofpointPODMailLog_CL`](tables/proofpointpodmaillog-cl.md) | [1](tables/proofpointpodmaillog-cl.md) | [1](tables/proofpointpodmaillog-cl.md) | Analytics, Hunting, Workbooks |
| [`ProofpointPODMessage_CL`](tables/proofpointpodmessage-cl.md) | [1](tables/proofpointpodmessage-cl.md) | [1](tables/proofpointpodmessage-cl.md) | Analytics, Hunting, Workbooks |
| [`ProofpointPOD_maillog_CL`](tables/proofpointpod-maillog-cl.md) | [1](tables/proofpointpod-maillog-cl.md) | [1](tables/proofpointpod-maillog-cl.md) | Analytics, Hunting, Workbooks |
| [`ProofpointPOD_message_CL`](tables/proofpointpod-message-cl.md) | [1](tables/proofpointpod-message-cl.md) | [1](tables/proofpointpod-message-cl.md) | Analytics, Hunting, Workbooks |
| [`ProtectionStatus`](tables/protectionstatus.md) | [2](tables/protectionstatus.md) | - | Workbooks |
| [`Proto_By_IP_Data_CL`](tables/proto-by-ip-data-cl.md) | [1](tables/proto-by-ip-data-cl.md) | - | Workbooks |
| [`PurviewDataSensitivityLogs`](tables/purviewdatasensitivitylogs.md) | [2](tables/purviewdatasensitivitylogs.md) | [1](tables/purviewdatasensitivitylogs.md) | Analytics, Workbooks |
| [`prancer_CL`](tables/prancer-cl.md) | [1](tables/prancer-cl.md) | [1](tables/prancer-cl.md) | Analytics, Hunting, Workbooks |

## Q

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`QscoutAppEvents_CL`](tables/qscoutappevents-cl.md) | [1](tables/qscoutappevents-cl.md) | [1](tables/qscoutappevents-cl.md) | Analytics, Workbooks |
| [`QualysHostDetectionV2_CL`](tables/qualyshostdetectionv2-cl.md) | [1](tables/qualyshostdetectionv2-cl.md) | [1](tables/qualyshostdetectionv2-cl.md) | Analytics, Workbooks |
| [`QualysHostDetectionV3_CL`](tables/qualyshostdetectionv3-cl.md) | [5](tables/qualyshostdetectionv3-cl.md) | [1](tables/qualyshostdetectionv3-cl.md) | Analytics, Workbooks |
| [`QualysHostDetection_CL`](tables/qualyshostdetection-cl.md) | [1](tables/qualyshostdetection-cl.md) | [1](tables/qualyshostdetection-cl.md) | Analytics, Workbooks |
| [`QualysKB_CL`](tables/qualyskb-cl.md) | [1](tables/qualyskb-cl.md) | [1](tables/qualyskb-cl.md) | - |

## R

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`RLTiCloudQuotas_CL`](tables/rlticloudquotas-cl.md) | [1](tables/rlticloudquotas-cl.md) | - | Playbooks, Workbooks |
| [`RSAIDPlus_AdminLogs_CL`](tables/rsaidplus-adminlogs-cl.md) | [1](tables/rsaidplus-adminlogs-cl.md) | [1](tables/rsaidplus-adminlogs-cl.md) | Analytics |
| [`RecordedFuturePlaybookAlerts_CL`](tables/recordedfutureplaybookalerts-cl.md) | [1](tables/recordedfutureplaybookalerts-cl.md) | - | Playbooks |
| [`RecordedFuturePortalAlerts_CL`](tables/recordedfutureportalalerts-cl.md) | [1](tables/recordedfutureportalalerts-cl.md) | - | Playbooks |
| [`RecordedFutureThreatMapMalware_CL`](tables/recordedfuturethreatmapmalware-cl.md) | [1](tables/recordedfuturethreatmapmalware-cl.md) | - | Playbooks, Workbooks |
| [`RecordedFutureThreatMap_CL`](tables/recordedfuturethreatmap-cl.md) | [1](tables/recordedfuturethreatmap-cl.md) | - | Playbooks, Workbooks |
| [`RedCanaryDetections_CL`](tables/redcanarydetections-cl.md) | [1](tables/redcanarydetections-cl.md) | [1](tables/redcanarydetections-cl.md) | Analytics |
| [`Report_links_data_CL`](tables/report-links-data-cl.md) | [1](tables/report-links-data-cl.md) | [1](tables/report-links-data-cl.md) | Workbooks |
| [`Rubrik_Anomaly_Data_CL`](tables/rubrik-anomaly-data-cl.md) | [1](tables/rubrik-anomaly-data-cl.md) | [1](tables/rubrik-anomaly-data-cl.md) | Analytics |
| [`Rubrik_Events_Data_CL`](tables/rubrik-events-data-cl.md) | [1](tables/rubrik-events-data-cl.md) | [1](tables/rubrik-events-data-cl.md) | Analytics |
| [`Rubrik_Ransomware_Data_CL`](tables/rubrik-ransomware-data-cl.md) | [1](tables/rubrik-ransomware-data-cl.md) | [1](tables/rubrik-ransomware-data-cl.md) | - |
| [`Rubrik_ThreatHunt_Data_CL`](tables/rubrik-threathunt-data-cl.md) | [1](tables/rubrik-threathunt-data-cl.md) | [1](tables/rubrik-threathunt-data-cl.md) | - |

## S

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`SAPBTPAuditLog_CL`](tables/sapbtpauditlog-cl.md) | [1](tables/sapbtpauditlog-cl.md) | [1](tables/sapbtpauditlog-cl.md) | Analytics, Workbooks |
| [`SAPETDAlerts_CL`](tables/sapetdalerts-cl.md) | [1](tables/sapetdalerts-cl.md) | [1](tables/sapetdalerts-cl.md) | Analytics |
| [`SAPETDInvestigations_CL`](tables/sapetdinvestigations-cl.md) | [1](tables/sapetdinvestigations-cl.md) | [1](tables/sapetdinvestigations-cl.md) | Analytics |
| [`SAPLogServ_CL`](tables/saplogserv-cl.md) | [1](tables/saplogserv-cl.md) | [1](tables/saplogserv-cl.md) | Analytics, Workbooks |
| [`SIGNL4_CL`](tables/signl4-cl.md) | [1](tables/signl4-cl.md) | [1](tables/signl4-cl.md) | - |
| [`SINECSecurityGuard_CL`](tables/sinecsecurityguard-cl.md) | [1](tables/sinecsecurityguard-cl.md) | [1](tables/sinecsecurityguard-cl.md) | Analytics |
| [`SOCPrimeAuditLogs_CL`](tables/socprimeauditlogs-cl.md) | [1](tables/socprimeauditlogs-cl.md) | [1](tables/socprimeauditlogs-cl.md) | - |
| [`SQLSecurityAuditEvents`](tables/sqlsecurityauditevents.md) | [3](tables/sqlsecurityauditevents.md) | - | Hunting, Workbooks |
| [`SailPointIDN_Events_CL`](tables/sailpointidn-events-cl.md) | [1](tables/sailpointidn-events-cl.md) | [1](tables/sailpointidn-events-cl.md) | Analytics |
| [`SailPointIDN_Triggers_CL`](tables/sailpointidn-triggers-cl.md) | [1](tables/sailpointidn-triggers-cl.md) | [1](tables/sailpointidn-triggers-cl.md) | Analytics |
| [`SalemAlerts_CL`](tables/salemalerts-cl.md) | [1](tables/salemalerts-cl.md) | - | Workbooks |
| [`SalesforceServiceCloudV2_CL`](tables/salesforceservicecloudv2-cl.md) | [1](tables/salesforceservicecloudv2-cl.md) | [1](tables/salesforceservicecloudv2-cl.md) | Analytics, Workbooks |
| [`SalesforceServiceCloud_CL`](tables/salesforceservicecloud-cl.md) | [1](tables/salesforceservicecloud-cl.md) | [1](tables/salesforceservicecloud-cl.md) | Analytics, Workbooks |
| [`Samsung_Knox_Application_CL`](tables/samsung-knox-application-cl.md) | [1](tables/samsung-knox-application-cl.md) | [1](tables/samsung-knox-application-cl.md) | Workbooks |
| [`Samsung_Knox_Audit_CL`](tables/samsung-knox-audit-cl.md) | [1](tables/samsung-knox-audit-cl.md) | [1](tables/samsung-knox-audit-cl.md) | Analytics, Workbooks |
| [`Samsung_Knox_Network_CL`](tables/samsung-knox-network-cl.md) | [1](tables/samsung-knox-network-cl.md) | [1](tables/samsung-knox-network-cl.md) | Workbooks |
| [`Samsung_Knox_Process_CL`](tables/samsung-knox-process-cl.md) | [1](tables/samsung-knox-process-cl.md) | [1](tables/samsung-knox-process-cl.md) | Analytics, Workbooks |
| [`Samsung_Knox_System_CL`](tables/samsung-knox-system-cl.md) | [1](tables/samsung-knox-system-cl.md) | [1](tables/samsung-knox-system-cl.md) | Analytics, Workbooks |
| [`Samsung_Knox_User_CL`](tables/samsung-knox-user-cl.md) | [1](tables/samsung-knox-user-cl.md) | [1](tables/samsung-knox-user-cl.md) | Analytics, Workbooks |
| [`SecureScoreControls`](tables/securescorecontrols.md) | [1](tables/securescorecontrols.md) | - | Workbooks |
| [`SecureScores`](tables/securescores.md) | [2](tables/securescores.md) | - | Workbooks |
| [`SecurityAlert`](tables/securityalert.md) | [49](tables/securityalert.md) | [10](tables/securityalert.md) | Analytics, Hunting, Playbooks, Workbooks |
| [`SecurityBaseline`](tables/securitybaseline.md) | [7](tables/securitybaseline.md) | - | Workbooks |
| [`SecurityBaselineSummary`](tables/securitybaselinesummary.md) | [1](tables/securitybaselinesummary.md) | - | Workbooks |
| [`SecurityBridgeLogs_CL`](tables/securitybridgelogs-cl.md) | [2](tables/securitybridgelogs-cl.md) | [2](tables/securitybridgelogs-cl.md) | - |
| [`SecurityBridge_CL`](tables/securitybridge-cl.md) | [1](tables/securitybridge-cl.md) | [1](tables/securitybridge-cl.md) | - |
| [`SecurityDetection`](tables/securitydetection.md) | [1](tables/securitydetection.md) | - | Workbooks |
| [`SecurityEvent`](tables/securityevent.md) | [29](tables/securityevent.md) | [5](tables/securityevent.md) | Analytics, Hunting, Workbooks |
| [`SecurityIncident`](tables/securityincident.md) | [30](tables/securityincident.md) | [2](tables/securityincident.md) | Analytics, Playbooks, Workbooks |
| [`SecurityIoTRawEvent`](tables/securityiotrawevent.md) | [2](tables/securityiotrawevent.md) | - | Workbooks |
| [`SecurityNestedRecommendation`](tables/securitynestedrecommendation.md) | [5](tables/securitynestedrecommendation.md) | - | Analytics, Workbooks |
| [`SecurityRecommendation`](tables/securityrecommendation.md) | [7](tables/securityrecommendation.md) | - | Analytics, Hunting, Workbooks |
| [`SecurityRegulatoryCompliance`](tables/securityregulatorycompliance.md) | [7](tables/securityregulatorycompliance.md) | - | Analytics, Workbooks |
| [`SecurityScorecardFactor_CL`](tables/securityscorecardfactor-cl.md) | [1](tables/securityscorecardfactor-cl.md) | [1](tables/securityscorecardfactor-cl.md) | Workbooks |
| [`SecurityScorecardIssues_CL`](tables/securityscorecardissues-cl.md) | [1](tables/securityscorecardissues-cl.md) | [1](tables/securityscorecardissues-cl.md) | Workbooks |
| [`SecurityScorecardRatings_CL`](tables/securityscorecardratings-cl.md) | [1](tables/securityscorecardratings-cl.md) | [1](tables/securityscorecardratings-cl.md) | Workbooks |
| [`Seg_Cg_CL`](tables/seg-cg-cl.md) | [1](tables/seg-cg-cl.md) | [1](tables/seg-cg-cl.md) | Analytics, Workbooks |
| [`Seg_Dlp_CL`](tables/seg-dlp-cl.md) | [1](tables/seg-dlp-cl.md) | [1](tables/seg-dlp-cl.md) | Analytics, Workbooks |
| [`SenservaPro_CL`](tables/senservapro-cl.md) | [1](tables/senservapro-cl.md) | [1](tables/senservapro-cl.md) | Analytics, Hunting, Workbooks |
| [`SentinelAudit`](tables/sentinelaudit.md) | [1](tables/sentinelaudit.md) | - | Workbooks |
| [`SentinelHealth`](tables/sentinelhealth.md) | [3](tables/sentinelhealth.md) | - | Workbooks |
| [`SentinelOneActivities_CL`](tables/sentineloneactivities-cl.md) | [1](tables/sentineloneactivities-cl.md) | [1](tables/sentineloneactivities-cl.md) | Analytics, Hunting, Workbooks |
| [`SentinelOneAgents_CL`](tables/sentineloneagents-cl.md) | [1](tables/sentineloneagents-cl.md) | [1](tables/sentineloneagents-cl.md) | Analytics, Hunting, Workbooks |
| [`SentinelOneAlerts_CL`](tables/sentinelonealerts-cl.md) | [1](tables/sentinelonealerts-cl.md) | [1](tables/sentinelonealerts-cl.md) | Analytics, Hunting, Workbooks |
| [`SentinelOneGroups_CL`](tables/sentinelonegroups-cl.md) | [1](tables/sentinelonegroups-cl.md) | [1](tables/sentinelonegroups-cl.md) | Analytics, Hunting, Workbooks |
| [`SentinelOneThreats_CL`](tables/sentinelonethreats-cl.md) | [1](tables/sentinelonethreats-cl.md) | [1](tables/sentinelonethreats-cl.md) | Analytics, Hunting, Workbooks |
| [`SentinelOne_CL`](tables/sentinelone-cl.md) | [2](tables/sentinelone-cl.md) | [1](tables/sentinelone-cl.md) | Analytics, Hunting, Workbooks |
| [`SeraphicWebSecurity_CL`](tables/seraphicwebsecurity-cl.md) | [1](tables/seraphicwebsecurity-cl.md) | [1](tables/seraphicwebsecurity-cl.md) | - |
| [`Service_Name_Info_CL`](tables/service-name-info-cl.md) | [1](tables/service-name-info-cl.md) | - | Workbooks |
| [`Sevco_Devices_CL`](tables/sevco-devices-cl.md) | [1](tables/sevco-devices-cl.md) | [1](tables/sevco-devices-cl.md) | - |
| [`ShadowByteAriaForums_CL`](tables/shadowbyteariaforums-cl.md) | [1](tables/shadowbyteariaforums-cl.md) | - | Playbooks |
| [`SignInLogs`](tables/signinlogs.md) | [1](tables/signinlogs.md) | [1](tables/signinlogs.md) | - |
| [`SigninLogs`](tables/signinlogs.md) | [35](tables/signinlogs.md) | [1](tables/signinlogs.md) | Analytics, Hunting, Workbooks |
| [`SlackAuditNativePoller_CL`](tables/slackauditnativepoller-cl.md) | [1](tables/slackauditnativepoller-cl.md) | [1](tables/slackauditnativepoller-cl.md) | Analytics, Hunting, Workbooks |
| [`SlackAuditV2_CL`](tables/slackauditv2-cl.md) | [1](tables/slackauditv2-cl.md) | [1](tables/slackauditv2-cl.md) | Analytics, Hunting, Workbooks |
| [`SlackAudit_CL`](tables/slackaudit-cl.md) | [1](tables/slackaudit-cl.md) | [1](tables/slackaudit-cl.md) | Analytics, Hunting, Workbooks |
| [`SlashNext_CL`](tables/slashnext-cl.md) | [1](tables/slashnext-cl.md) | - | Playbooks |
| [`SnowflakeLoad_CL`](tables/snowflakeload-cl.md) | [1](tables/snowflakeload-cl.md) | [1](tables/snowflakeload-cl.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeLogin_CL`](tables/snowflakelogin-cl.md) | [1](tables/snowflakelogin-cl.md) | [1](tables/snowflakelogin-cl.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeMaterializedView_CL`](tables/snowflakematerializedview-cl.md) | [1](tables/snowflakematerializedview-cl.md) | [1](tables/snowflakematerializedview-cl.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeQuery_CL`](tables/snowflakequery-cl.md) | [1](tables/snowflakequery-cl.md) | [1](tables/snowflakequery-cl.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeRoleGrant_CL`](tables/snowflakerolegrant-cl.md) | [1](tables/snowflakerolegrant-cl.md) | [1](tables/snowflakerolegrant-cl.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeRoles_CL`](tables/snowflakeroles-cl.md) | [1](tables/snowflakeroles-cl.md) | [1](tables/snowflakeroles-cl.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeTableStorageMetrics_CL`](tables/snowflaketablestoragemetrics-cl.md) | [1](tables/snowflaketablestoragemetrics-cl.md) | [1](tables/snowflaketablestoragemetrics-cl.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeTables_CL`](tables/snowflaketables-cl.md) | [1](tables/snowflaketables-cl.md) | [1](tables/snowflaketables-cl.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeUserGrant_CL`](tables/snowflakeusergrant-cl.md) | [1](tables/snowflakeusergrant-cl.md) | [1](tables/snowflakeusergrant-cl.md) | Analytics, Hunting, Workbooks |
| [`SnowflakeUsers_CL`](tables/snowflakeusers-cl.md) | [1](tables/snowflakeusers-cl.md) | [1](tables/snowflakeusers-cl.md) | Analytics, Hunting, Workbooks |
| [`Snowflake_CL`](tables/snowflake-cl.md) | [1](tables/snowflake-cl.md) | [1](tables/snowflake-cl.md) | Analytics, Hunting, Workbooks |
| [`Sonrai_Tickets_CL`](tables/sonrai-tickets-cl.md) | [1](tables/sonrai-tickets-cl.md) | [1](tables/sonrai-tickets-cl.md) | Analytics, Workbooks |
| [`SophosCloudOptix_CL`](tables/sophoscloudoptix-cl.md) | [1](tables/sophoscloudoptix-cl.md) | [1](tables/sophoscloudoptix-cl.md) | - |
| [`SophosEPAlerts_CL`](tables/sophosepalerts-cl.md) | [1](tables/sophosepalerts-cl.md) | [1](tables/sophosepalerts-cl.md) | - |
| [`SophosEPEvents_CL`](tables/sophosepevents-cl.md) | [1](tables/sophosepevents-cl.md) | [1](tables/sophosepevents-cl.md) | - |
| [`SophosEP_CL`](tables/sophosep-cl.md) | [1](tables/sophosep-cl.md) | [1](tables/sophosep-cl.md) | - |
| [`SpyCloudBreachDataWatchlist_CL`](tables/spycloudbreachdatawatchlist-cl.md) | [1](tables/spycloudbreachdatawatchlist-cl.md) | - | Analytics |
| [`SqlAtpStatus`](tables/sqlatpstatus.md) | [1](tables/sqlatpstatus.md) | - | Workbooks |
| [`SquidProxy_CL`](tables/squidproxy-cl.md) | [3](tables/squidproxy-cl.md) | [2](tables/squidproxy-cl.md) | Workbooks |
| [`StorageBlobLogs`](tables/storagebloblogs.md) | [6](tables/storagebloblogs.md) | [1](tables/storagebloblogs.md) | Analytics, Workbooks |
| [`StorageFileLogs`](tables/storagefilelogs.md) | [4](tables/storagefilelogs.md) | [1](tables/storagefilelogs.md) | Analytics, Workbooks |
| [`StorageQueueLogs`](tables/storagequeuelogs.md) | [2](tables/storagequeuelogs.md) | [1](tables/storagequeuelogs.md) | Workbooks |
| [`StorageTableLogs`](tables/storagetablelogs.md) | [3](tables/storagetablelogs.md) | [1](tables/storagetablelogs.md) | Workbooks |
| [`StyxViewAlerts_CL`](tables/styxviewalerts-cl.md) | [1](tables/styxviewalerts-cl.md) | [1](tables/styxviewalerts-cl.md) | - |
| [`Summary_Details_CL`](tables/summary-details-cl.md) | [1](tables/summary-details-cl.md) | - | Workbooks |
| [`Summary_Details_Top_Certs_Data_CL`](tables/summary-details-top-certs-data-cl.md) | [1](tables/summary-details-top-certs-data-cl.md) | - | Workbooks |
| [`Summary_Details_Top_Fingerprints_Data_CL`](tables/summary-details-top-fingerprints-data-cl.md) | [1](tables/summary-details-top-fingerprints-data-cl.md) | - | Workbooks |
| [`Summary_Details_Top_Open_Ports_Data_CL`](tables/summary-details-top-open-ports-data-cl.md) | [1](tables/summary-details-top-open-ports-data-cl.md) | - | Workbooks |
| [`Summary_Details_Top_Pdns_Data_CL`](tables/summary-details-top-pdns-data-cl.md) | [1](tables/summary-details-top-pdns-data-cl.md) | - | Workbooks |
| [`SymantecICDx_CL`](tables/symantecicdx-cl.md) | [1](tables/symantecicdx-cl.md) | [1](tables/symantecicdx-cl.md) | - |
| [`Syslog`](tables/syslog.md) | [40](tables/syslog.md) | [6](tables/syslog.md) | Analytics, Hunting, Workbooks |
| [`secRMM_CL`](tables/secrmm-cl.md) | [1](tables/secrmm-cl.md) | [1](tables/secrmm-cl.md) | Analytics, Workbooks |
| [`securescorecontrols`](tables/securescorecontrols.md) | [1](tables/securescorecontrols.md) | - | Workbooks |
| [`securescores`](tables/securescores.md) | [1](tables/securescores.md) | - | Workbooks |
| [`syslog`](tables/syslog.md) | [1](tables/syslog.md) | - | Workbooks |

## T

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`Talon_CL`](tables/talon-cl.md) | [1](tables/talon-cl.md) | [1](tables/talon-cl.md) | Workbooks |
| [`TaniumComplyCompliance_CL`](tables/taniumcomplycompliance-cl.md) | [1](tables/taniumcomplycompliance-cl.md) | - | Workbooks |
| [`TaniumComplyVulnerabilities_CL`](tables/taniumcomplyvulnerabilities-cl.md) | [1](tables/taniumcomplyvulnerabilities-cl.md) | - | Workbooks |
| [`TaniumDefenderHealth_CL`](tables/taniumdefenderhealth-cl.md) | [1](tables/taniumdefenderhealth-cl.md) | - | Workbooks |
| [`TaniumDiscoverUnmanagedAssets_CL`](tables/taniumdiscoverunmanagedassets-cl.md) | [1](tables/taniumdiscoverunmanagedassets-cl.md) | - | Workbooks |
| [`TaniumHighUptime_CL`](tables/taniumhighuptime-cl.md) | [1](tables/taniumhighuptime-cl.md) | - | Workbooks |
| [`TaniumPatchCoverageStatus_CL`](tables/taniumpatchcoveragestatus-cl.md) | [1](tables/taniumpatchcoveragestatus-cl.md) | - | Workbooks |
| [`TaniumPatchListApplicability_CL`](tables/taniumpatchlistapplicability-cl.md) | [1](tables/taniumpatchlistapplicability-cl.md) | - | Workbooks |
| [`TaniumPatchListCompliance_CL`](tables/taniumpatchlistcompliance-cl.md) | [1](tables/taniumpatchlistcompliance-cl.md) | - | Workbooks |
| [`TaniumSCCMClientHealth_CL`](tables/taniumsccmclienthealth-cl.md) | [1](tables/taniumsccmclienthealth-cl.md) | - | Workbooks |
| [`TaniumThreatResponse_CL`](tables/taniumthreatresponse-cl.md) | [1](tables/taniumthreatresponse-cl.md) | - | Analytics, Workbooks |
| [`Tenable_IE_CL`](tables/tenable-ie-cl.md) | [3](tables/tenable-ie-cl.md) | [1](tables/tenable-ie-cl.md) | Analytics, Workbooks |
| [`Tenable_IO_Assets_CL`](tables/tenable-io-assets-cl.md) | [1](tables/tenable-io-assets-cl.md) | [1](tables/tenable-io-assets-cl.md) | Playbooks |
| [`Tenable_IO_Vuln_CL`](tables/tenable-io-vuln-cl.md) | [1](tables/tenable-io-vuln-cl.md) | [1](tables/tenable-io-vuln-cl.md) | Playbooks |
| [`Tenable_VM_Asset_CL`](tables/tenable-vm-asset-cl.md) | [1](tables/tenable-vm-asset-cl.md) | [1](tables/tenable-vm-asset-cl.md) | Playbooks |
| [`Tenable_VM_Compliance_CL`](tables/tenable-vm-compliance-cl.md) | [1](tables/tenable-vm-compliance-cl.md) | [1](tables/tenable-vm-compliance-cl.md) | - |
| [`Tenable_VM_Vuln_CL`](tables/tenable-vm-vuln-cl.md) | [1](tables/tenable-vm-vuln-cl.md) | [1](tables/tenable-vm-vuln-cl.md) | Playbooks |
| [`Tenable_WAS_Asset_CL`](tables/tenable-was-asset-cl.md) | [1](tables/tenable-was-asset-cl.md) | [1](tables/tenable-was-asset-cl.md) | - |
| [`Tenable_WAS_Vuln_CL`](tables/tenable-was-vuln-cl.md) | [1](tables/tenable-was-vuln-cl.md) | [1](tables/tenable-was-vuln-cl.md) | - |
| [`Tenable_ad_CL`](tables/tenable-ad-cl.md) | [3](tables/tenable-ad-cl.md) | [1](tables/tenable-ad-cl.md) | Analytics, Workbooks |
| [`TheHive_CL`](tables/thehive-cl.md) | [1](tables/thehive-cl.md) | [1](tables/thehive-cl.md) | - |
| [`TheomAlerts_CL`](tables/theomalerts-cl.md) | [1](tables/theomalerts-cl.md) | [1](tables/theomalerts-cl.md) | Analytics, Workbooks |
| [`ThreatIntelExportOperation`](tables/threatintelexportoperation.md) | [1](tables/threatintelexportoperation.md) | [1](tables/threatintelexportoperation.md) | - |
| [`ThreatIntelIndicators`](tables/threatintelindicators.md) | [12](tables/threatintelindicators.md) | [6](tables/threatintelindicators.md) | Analytics, Hunting, Workbooks |
| [`ThreatIntelObjects`](tables/threatintelobjects.md) | [1](tables/threatintelobjects.md) | [5](tables/threatintelobjects.md) | - |
| [`ThreatIntelligenceIndicator`](tables/threatintelligenceindicator.md) | [28](tables/threatintelligenceindicator.md) | [14](tables/threatintelligenceindicator.md) | Analytics, Hunting, Workbooks |
| [`Tomcat_CL`](tables/tomcat-cl.md) | [3](tables/tomcat-cl.md) | [2](tables/tomcat-cl.md) | Analytics, Hunting, Workbooks |
| [`Top_Asns_By_IP_Data_CL`](tables/top-asns-by-ip-data-cl.md) | [1](tables/top-asns-by-ip-data-cl.md) | - | Workbooks |
| [`Top_Country_Codes_By_IP_Data_CL`](tables/top-country-codes-by-ip-data-cl.md) | [1](tables/top-country-codes-by-ip-data-cl.md) | - | Workbooks |
| [`Top_Services_By_IP_Data_CL`](tables/top-services-by-ip-data-cl.md) | [1](tables/top-services-by-ip-data-cl.md) | - | Workbooks |
| [`Top_Tags_By_IP_Data_CL`](tables/top-tags-by-ip-data-cl.md) | [1](tables/top-tags-by-ip-data-cl.md) | - | Workbooks |
| [`TransmitSecurityActivity_CL`](tables/transmitsecurityactivity-cl.md) | [1](tables/transmitsecurityactivity-cl.md) | [1](tables/transmitsecurityactivity-cl.md) | - |
| [`TrendMicroCAS_CL`](tables/trendmicrocas-cl.md) | [1](tables/trendmicrocas-cl.md) | [1](tables/trendmicrocas-cl.md) | Analytics, Hunting, Workbooks |
| [`TrendMicro_XDR_OAT_CL`](tables/trendmicro-xdr-oat-cl.md) | [2](tables/trendmicro-xdr-oat-cl.md) | [1](tables/trendmicro-xdr-oat-cl.md) | Workbooks |
| [`TrendMicro_XDR_RCA_Result_CL`](tables/trendmicro-xdr-rca-result-cl.md) | [1](tables/trendmicro-xdr-rca-result-cl.md) | [1](tables/trendmicro-xdr-rca-result-cl.md) | - |
| [`TrendMicro_XDR_RCA_Task_CL`](tables/trendmicro-xdr-rca-task-cl.md) | [1](tables/trendmicro-xdr-rca-task-cl.md) | [1](tables/trendmicro-xdr-rca-task-cl.md) | - |
| [`TrendMicro_XDR_WORKBENCH_CL`](tables/trendmicro-xdr-workbench-cl.md) | [1](tables/trendmicro-xdr-workbench-cl.md) | [1](tables/trendmicro-xdr-workbench-cl.md) | Analytics, Workbooks |
| [`Tropico_Alerts_CL`](tables/tropico-alerts-cl.md) | [1](tables/tropico-alerts-cl.md) | [1](tables/tropico-alerts-cl.md) | - |
| [`Tropico_Events_CL`](tables/tropico-events-cl.md) | [1](tables/tropico-events-cl.md) | [1](tables/tropico-events-cl.md) | - |
| [`Tropico_Incidents_CL`](tables/tropico-incidents-cl.md) | [1](tables/tropico-incidents-cl.md) | [1](tables/tropico-incidents-cl.md) | - |
| [`Ttp_Attachment_CL`](tables/ttp-attachment-cl.md) | [1](tables/ttp-attachment-cl.md) | [1](tables/ttp-attachment-cl.md) | Analytics, Workbooks |
| [`Ttp_Impersonation_CL`](tables/ttp-impersonation-cl.md) | [1](tables/ttp-impersonation-cl.md) | [1](tables/ttp-impersonation-cl.md) | Analytics, Workbooks |
| [`Ttp_Url_CL`](tables/ttp-url-cl.md) | [1](tables/ttp-url-cl.md) | [1](tables/ttp-url-cl.md) | Analytics, Workbooks |
| [`tide_lookup_data_CL`](tables/tide-lookup-data-cl.md) | [1](tables/tide-lookup-data-cl.md) | - | Playbooks, Workbooks |

## U

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`UPDATE`](tables/update.md) | [3](tables/update.md) | - | Workbooks |
| [`USAGE`](tables/usage.md) | [3](tables/usage.md) | - | Analytics, Workbooks |
| [`Ubiquiti_CL`](tables/ubiquiti-cl.md) | [2](tables/ubiquiti-cl.md) | [2](tables/ubiquiti-cl.md) | Analytics, Hunting, Workbooks |
| [`Update`](tables/update.md) | [13](tables/update.md) | - | Analytics, Hunting, Workbooks |
| [`UpdateSummary`](tables/updatesummary.md) | [1](tables/updatesummary.md) | - | Workbooks |
| [`UrlClickEvents`](tables/urlclickevents.md) | [5](tables/urlclickevents.md) | [1](tables/urlclickevents.md) | Analytics, Hunting, Workbooks |
| [`Usage`](tables/usage.md) | [9](tables/usage.md) | - | Analytics, Hunting, Workbooks |
| [`UserAccessAnalytics`](tables/useraccessanalytics.md) | [1](tables/useraccessanalytics.md) | - | Workbooks |
| [`UserPeerAnalytics`](tables/userpeeranalytics.md) | [1](tables/userpeeranalytics.md) | - | Workbooks |
| [`update`](tables/update.md) | [6](tables/update.md) | - | Workbooks |
| [`usage`](tables/usage.md) | [1](tables/usage.md) | - | Workbooks |

## V

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`VMBoundPort`](tables/vmboundport.md) | [1](tables/vmboundport.md) | - | Workbooks |
| [`VMComputer`](tables/vmcomputer.md) | [2](tables/vmcomputer.md) | - | Workbooks |
| [`VMConnection`](tables/vmconnection.md) | [11](tables/vmconnection.md) | - | Analytics, Hunting, Workbooks |
| [`VMProcess`](tables/vmprocess.md) | [2](tables/vmprocess.md) | - | Workbooks |
| [`VMware_CWS_DLPLogs_CL`](tables/vmware-cws-dlplogs-cl.md) | [1](tables/vmware-cws-dlplogs-cl.md) | [1](tables/vmware-cws-dlplogs-cl.md) | Analytics |
| [`VMware_CWS_Health_CL`](tables/vmware-cws-health-cl.md) | [1](tables/vmware-cws-health-cl.md) | [1](tables/vmware-cws-health-cl.md) | Workbooks |
| [`VMware_CWS_Weblogs_CL`](tables/vmware-cws-weblogs-cl.md) | [1](tables/vmware-cws-weblogs-cl.md) | [1](tables/vmware-cws-weblogs-cl.md) | Analytics, Workbooks |
| [`VMware_SDWAN_FirewallLogs_CL`](tables/vmware-sdwan-firewalllogs-cl.md) | [1](tables/vmware-sdwan-firewalllogs-cl.md) | - | Analytics |
| [`VMware_VECO_EventLogs_CL`](tables/vmware-veco-eventlogs-cl.md) | [1](tables/vmware-veco-eventlogs-cl.md) | [1](tables/vmware-veco-eventlogs-cl.md) | Analytics, Workbooks |
| [`VTDomainReport_CL`](tables/vtdomainreport-cl.md) | [1](tables/vtdomainreport-cl.md) | - | Playbooks |
| [`VTFileReport_CL`](tables/vtfilereport-cl.md) | [1](tables/vtfilereport-cl.md) | - | Playbooks |
| [`VTIPReport_CL`](tables/vtipreport-cl.md) | [1](tables/vtipreport-cl.md) | - | Playbooks |
| [`VTURLReport_CL`](tables/vturlreport-cl.md) | [1](tables/vturlreport-cl.md) | - | Playbooks |
| [`ValenceAlert_CL`](tables/valencealert-cl.md) | [1](tables/valencealert-cl.md) | [1](tables/valencealert-cl.md) | Analytics, Workbooks |
| [`VaronisAlerts_CL`](tables/varonisalerts-cl.md) | [1](tables/varonisalerts-cl.md) | [1](tables/varonisalerts-cl.md) | Workbooks |
| [`VectraStream_CL`](tables/vectrastream-cl.md) | [3](tables/vectrastream-cl.md) | [2](tables/vectrastream-cl.md) | Workbooks |
| [`VeeamAuthorizationEvents_CL`](tables/veeamauthorizationevents-cl.md) | [1](tables/veeamauthorizationevents-cl.md) | [1](tables/veeamauthorizationevents-cl.md) | Workbooks |
| [`VeeamCovewareFindings_CL`](tables/veeamcovewarefindings-cl.md) | [1](tables/veeamcovewarefindings-cl.md) | [1](tables/veeamcovewarefindings-cl.md) | Workbooks |
| [`VeeamMalwareEvents_CL`](tables/veeammalwareevents-cl.md) | [1](tables/veeammalwareevents-cl.md) | [1](tables/veeammalwareevents-cl.md) | Analytics, Workbooks |
| [`VeeamOneTriggeredAlarms_CL`](tables/veeamonetriggeredalarms-cl.md) | [1](tables/veeamonetriggeredalarms-cl.md) | [1](tables/veeamonetriggeredalarms-cl.md) | Analytics, Workbooks |
| [`VeeamSecurityComplianceAnalyzer_CL`](tables/veeamsecuritycomplianceanalyzer-cl.md) | [1](tables/veeamsecuritycomplianceanalyzer-cl.md) | [1](tables/veeamsecuritycomplianceanalyzer-cl.md) | Analytics, Workbooks |
| [`VeeamSessions_CL`](tables/veeamsessions-cl.md) | [1](tables/veeamsessions-cl.md) | [1](tables/veeamsessions-cl.md) | Analytics |
| [`varonisresources_CL`](tables/varonisresources-cl.md) | [1](tables/varonisresources-cl.md) | [1](tables/varonisresources-cl.md) | - |
| [`vcenter_CL`](tables/vcenter-cl.md) | [2](tables/vcenter-cl.md) | [2](tables/vcenter-cl.md) | Analytics, Workbooks |
| [`vectra_dns_CL`](tables/vectra-dns-cl.md) | [1](tables/vectra-dns-cl.md) | [1](tables/vectra-dns-cl.md) | - |
| [`vectra_isession_CL`](tables/vectra-isession-cl.md) | [1](tables/vectra-isession-cl.md) | [1](tables/vectra-isession-cl.md) | - |
| [`vectra_ssl_CL`](tables/vectra-ssl-cl.md) | [1](tables/vectra-ssl-cl.md) | [1](tables/vectra-ssl-cl.md) | - |

## W

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`W3CIISLog`](tables/w3ciislog.md) | [8](tables/w3ciislog.md) | [2](tables/w3ciislog.md) | Analytics, Hunting, Workbooks |
| [`Watchlist`](tables/watchlist.md) | [4](tables/watchlist.md) | - | Analytics, Workbooks |
| [`WebSession_Summarized_DstIP_CL`](tables/websession-summarized-dstip-cl.md) | [1](tables/websession-summarized-dstip-cl.md) | - | Playbooks, Workbooks |
| [`WebSession_Summarized_SrcIP_CL`](tables/websession-summarized-srcip-cl.md) | [1](tables/websession-summarized-srcip-cl.md) | - | Analytics, Playbooks, Workbooks |
| [`WebSession_Summarized_SrcInfo_CL`](tables/websession-summarized-srcinfo-cl.md) | [1](tables/websession-summarized-srcinfo-cl.md) | - | Analytics, Playbooks, Workbooks |
| [`WebSession_Summarized_ThreatInfo_CL`](tables/websession-summarized-threatinfo-cl.md) | [1](tables/websession-summarized-threatinfo-cl.md) | - | Playbooks, Workbooks |
| [`Whois_Data_CL`](tables/whois-data-cl.md) | [1](tables/whois-data-cl.md) | - | Workbooks |
| [`WindowsEvent`](tables/windowsevent.md) | [10](tables/windowsevent.md) | [1](tables/windowsevent.md) | Analytics, Hunting, Workbooks |
| [`WindowsFirewall`](tables/windowsfirewall.md) | [7](tables/windowsfirewall.md) | [1](tables/windowsfirewall.md) | Workbooks |
| [`WireData`](tables/wiredata.md) | [2](tables/wiredata.md) | - | Hunting, Workbooks |
| [`WizAuditLogsV2_CL`](tables/wizauditlogsv2-cl.md) | [1](tables/wizauditlogsv2-cl.md) | [1](tables/wizauditlogsv2-cl.md) | Workbooks |
| [`WizAuditLogs_CL`](tables/wizauditlogs-cl.md) | [1](tables/wizauditlogs-cl.md) | [1](tables/wizauditlogs-cl.md) | Workbooks |
| [`WizIssuesV2_CL`](tables/wizissuesv2-cl.md) | [1](tables/wizissuesv2-cl.md) | [1](tables/wizissuesv2-cl.md) | Workbooks |
| [`WizIssues_CL`](tables/wizissues-cl.md) | [1](tables/wizissues-cl.md) | [1](tables/wizissues-cl.md) | Workbooks |
| [`WizVulnerabilitiesV2_CL`](tables/wizvulnerabilitiesv2-cl.md) | [1](tables/wizvulnerabilitiesv2-cl.md) | [1](tables/wizvulnerabilitiesv2-cl.md) | Workbooks |
| [`WizVulnerabilities_CL`](tables/wizvulnerabilities-cl.md) | [1](tables/wizvulnerabilities-cl.md) | [1](tables/wizvulnerabilities-cl.md) | Workbooks |
| [`Workplace_Facebook_CL`](tables/workplace-facebook-cl.md) | [1](tables/workplace-facebook-cl.md) | [1](tables/workplace-facebook-cl.md) | - |
| [`WsSecurityEvents_CL`](tables/wssecurityevents-cl.md) | [1](tables/wssecurityevents-cl.md) | [1](tables/wssecurityevents-cl.md) | Workbooks |
| [`watchlist`](tables/watchlist.md) | [3](tables/watchlist.md) | - | Analytics, Workbooks |
| [`web_assets_CL`](tables/web-assets-cl.md) | [1](tables/web-assets-cl.md) | [1](tables/web-assets-cl.md) | - |

## X

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`X509_Data_CL`](tables/x509-data-cl.md) | [1](tables/x509-data-cl.md) | - | Workbooks |

## Z

| Table | Solutions | Connectors | Content |
|-------|:---------:|:----------:|:--------|
| [`ZNSegmentAuditNativePoller_CL`](tables/znsegmentauditnativepoller-cl.md) | [1](tables/znsegmentauditnativepoller-cl.md) | [1](tables/znsegmentauditnativepoller-cl.md) | Analytics, Hunting, Workbooks |
| [`ZNSegmentAudit_CL`](tables/znsegmentaudit-cl.md) | [1](tables/znsegmentaudit-cl.md) | - | Analytics, Hunting, Workbooks |
| [`ZPA_CL`](tables/zpa-cl.md) | [2](tables/zpa-cl.md) | [2](tables/zpa-cl.md) | Analytics, Hunting, Workbooks |
| [`ZeroFoxAlertPoller_CL`](tables/zerofoxalertpoller-cl.md) | [1](tables/zerofoxalertpoller-cl.md) | [1](tables/zerofoxalertpoller-cl.md) | Analytics |
| [`ZeroFox_CTI_C2_CL`](tables/zerofox-cti-c2-cl.md) | [1](tables/zerofox-cti-c2-cl.md) | [1](tables/zerofox-cti-c2-cl.md) | - |
| [`ZeroFox_CTI_advanced_dark_web_CL`](tables/zerofox-cti-advanced-dark-web-cl.md) | [1](tables/zerofox-cti-advanced-dark-web-cl.md) | [1](tables/zerofox-cti-advanced-dark-web-cl.md) | - |
| [`ZeroFox_CTI_botnet_CL`](tables/zerofox-cti-botnet-cl.md) | [1](tables/zerofox-cti-botnet-cl.md) | [1](tables/zerofox-cti-botnet-cl.md) | - |
| [`ZeroFox_CTI_breaches_CL`](tables/zerofox-cti-breaches-cl.md) | [1](tables/zerofox-cti-breaches-cl.md) | [1](tables/zerofox-cti-breaches-cl.md) | - |
| [`ZeroFox_CTI_compromised_credentials_CL`](tables/zerofox-cti-compromised-credentials-cl.md) | [1](tables/zerofox-cti-compromised-credentials-cl.md) | [1](tables/zerofox-cti-compromised-credentials-cl.md) | - |
| [`ZeroFox_CTI_credit_cards_CL`](tables/zerofox-cti-credit-cards-cl.md) | [1](tables/zerofox-cti-credit-cards-cl.md) | [1](tables/zerofox-cti-credit-cards-cl.md) | - |
| [`ZeroFox_CTI_dark_web_CL`](tables/zerofox-cti-dark-web-cl.md) | [1](tables/zerofox-cti-dark-web-cl.md) | [1](tables/zerofox-cti-dark-web-cl.md) | - |
| [`ZeroFox_CTI_discord_CL`](tables/zerofox-cti-discord-cl.md) | [1](tables/zerofox-cti-discord-cl.md) | [1](tables/zerofox-cti-discord-cl.md) | - |
| [`ZeroFox_CTI_disruption_CL`](tables/zerofox-cti-disruption-cl.md) | [1](tables/zerofox-cti-disruption-cl.md) | [1](tables/zerofox-cti-disruption-cl.md) | - |
| [`ZeroFox_CTI_email_addresses_CL`](tables/zerofox-cti-email-addresses-cl.md) | [1](tables/zerofox-cti-email-addresses-cl.md) | [1](tables/zerofox-cti-email-addresses-cl.md) | - |
| [`ZeroFox_CTI_exploits_CL`](tables/zerofox-cti-exploits-cl.md) | [1](tables/zerofox-cti-exploits-cl.md) | [1](tables/zerofox-cti-exploits-cl.md) | - |
| [`ZeroFox_CTI_irc_CL`](tables/zerofox-cti-irc-cl.md) | [1](tables/zerofox-cti-irc-cl.md) | [1](tables/zerofox-cti-irc-cl.md) | - |
| [`ZeroFox_CTI_malware_CL`](tables/zerofox-cti-malware-cl.md) | [1](tables/zerofox-cti-malware-cl.md) | [1](tables/zerofox-cti-malware-cl.md) | - |
| [`ZeroFox_CTI_national_ids_CL`](tables/zerofox-cti-national-ids-cl.md) | [1](tables/zerofox-cti-national-ids-cl.md) | [1](tables/zerofox-cti-national-ids-cl.md) | - |
| [`ZeroFox_CTI_phishing_CL`](tables/zerofox-cti-phishing-cl.md) | [1](tables/zerofox-cti-phishing-cl.md) | [1](tables/zerofox-cti-phishing-cl.md) | - |
| [`ZeroFox_CTI_phone_numbers_CL`](tables/zerofox-cti-phone-numbers-cl.md) | [1](tables/zerofox-cti-phone-numbers-cl.md) | [1](tables/zerofox-cti-phone-numbers-cl.md) | - |
| [`ZeroFox_CTI_ransomware_CL`](tables/zerofox-cti-ransomware-cl.md) | [1](tables/zerofox-cti-ransomware-cl.md) | [1](tables/zerofox-cti-ransomware-cl.md) | - |
| [`ZeroFox_CTI_telegram_CL`](tables/zerofox-cti-telegram-cl.md) | [1](tables/zerofox-cti-telegram-cl.md) | [1](tables/zerofox-cti-telegram-cl.md) | - |
| [`ZeroFox_CTI_threat_actors_CL`](tables/zerofox-cti-threat-actors-cl.md) | [1](tables/zerofox-cti-threat-actors-cl.md) | [1](tables/zerofox-cti-threat-actors-cl.md) | - |
| [`ZeroFox_CTI_vulnerabilities_CL`](tables/zerofox-cti-vulnerabilities-cl.md) | [1](tables/zerofox-cti-vulnerabilities-cl.md) | [1](tables/zerofox-cti-vulnerabilities-cl.md) | - |
| [`ZimperiumMitigationLog_CL`](tables/zimperiummitigationlog-cl.md) | [1](tables/zimperiummitigationlog-cl.md) | [1](tables/zimperiummitigationlog-cl.md) | - |
| [`ZimperiumThreatLog_CL`](tables/zimperiumthreatlog-cl.md) | [1](tables/zimperiumthreatlog-cl.md) | [1](tables/zimperiumthreatlog-cl.md) | Workbooks |
| [`Zoom_CL`](tables/zoom-cl.md) | [2](tables/zoom-cl.md) | [1](tables/zoom-cl.md) | Workbooks |

---

**Browse:** [🏠](readme.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · **Tables** · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md)

