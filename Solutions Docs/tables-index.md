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

This page lists **1010 unique tables** (781 ingested by connectors, 229 referenced by content only).

**Jump to:** [A](#a) | [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [G](#g) | [H](#h) | [I](#i) | [J](#j) | [K](#k) | [L](#l) | [M](#m) | [N](#n) | [O](#o) | [P](#p) | [Q](#q) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v) | [W](#w) | [X](#x) | [Z](#z)

## A

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`AADManagedIdentitySignInLogs`](tables/aadmanagedidentitysigninlogs.md) | [AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[CybersecurityMaturityModelCertification(CMMC)2.0](solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)<br>[Lumen Defender Threat Feed](solutions/lumen-defender-threat-feed.md)<br>[+3 more](tables/aadmanagedidentitysigninlogs.md) | [Microsoft Entra ID](connectors/azureactivedirectory.md) |
| [`AADNonInteractiveUserSignInLogs`](tables/aadnoninteractiveusersigninlogs.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[Business Email Compromise - Financial Fraud](solutions/business-email-compromise-financial-fraud.md)<br>[+11 more](tables/aadnoninteractiveusersigninlogs.md) | [Microsoft Entra ID](connectors/azureactivedirectory.md) |
| [`AADProvisioningLogs`](tables/aadprovisioninglogs.md) | [Microsoft Entra ID](solutions/microsoft-entra-id.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Microsoft Entra ID](connectors/azureactivedirectory.md) |
| [`AADRiskyServicePrincipals`](tables/aadriskyserviceprincipals.md) | [Microsoft Entra ID](solutions/microsoft-entra-id.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Microsoft Entra ID](connectors/azureactivedirectory.md) |
| [`AADRiskyUsers`](tables/aadriskyusers.md) | [Microsoft Entra ID](solutions/microsoft-entra-id.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Microsoft Entra ID](connectors/azureactivedirectory.md) |
| [`AADServicePrincipalRiskEvents`](tables/aadserviceprincipalriskevents.md) | [Microsoft Entra ID](solutions/microsoft-entra-id.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Microsoft Entra ID](connectors/azureactivedirectory.md) |
| [`AADServicePrincipalSignInLogs`](tables/aadserviceprincipalsigninlogs.md) | [AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[CybersecurityMaturityModelCertification(CMMC)2.0](solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)<br>[Lumen Defender Threat Feed](solutions/lumen-defender-threat-feed.md)<br>[+3 more](tables/aadserviceprincipalsigninlogs.md) | [Microsoft Entra ID](connectors/azureactivedirectory.md) |
| [`AADSignInEventsBeta`](tables/aadsignineventsbeta.md) | [Microsoft Defender XDR](solutions/microsoft-defender-xdr.md) |  |
| [`AADUserRiskEvents`](tables/aaduserriskevents.md) | [AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[CybersecurityMaturityModelCertification(CMMC)2.0](solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)<br>[GDPR Compliance & Data Security](solutions/gdpr-compliance-&-data-security.md)<br>[+4 more](tables/aaduserriskevents.md) | [Microsoft Entra ID](connectors/azureactivedirectory.md) |
| [`ABAPAuditLog`](tables/abapauditlog.md) | [Onapsis Defend](solutions/onapsis-defend.md)<br>[Pathlock_TDnR](solutions/pathlock-tdnr.md)<br>[SAP S4 Cloud Public Edition](solutions/sap-s4-cloud-public-edition.md)<br>[+1 more](tables/abapauditlog.md) | [Onapsis Defend: Integrate Unmatched SAP Threat Detection & Intel with Microsoft Sentinel](connectors/onapsis.md)<br>[Pathlock Inc.: Threat Detection and Response for SAP](connectors/pathlock-tdnr.md)<br>[SAP S/4HANA Cloud Public Edition](connectors/saps4publicalerts.md)<br>[SecurityBridge Solution for SAP](connectors/securitybridge.md) |
| [`ABNORMAL_CASES_CL`](tables/abnormal-cases-cl.md) | [AbnormalSecurity](solutions/abnormalsecurity.md) | [AbnormalSecurity ](connectors/abnormalsecurity.md) |
| [`ABNORMAL_THREAT_MESSAGES_CL`](tables/abnormal-threat-messages-cl.md) | [AbnormalSecurity](solutions/abnormalsecurity.md) | [AbnormalSecurity ](connectors/abnormalsecurity.md) |
| [`ADFSSignInLogs`](tables/adfssigninlogs.md) | [Lumen Defender Threat Feed](solutions/lumen-defender-threat-feed.md)<br>[Microsoft Entra ID](solutions/microsoft-entra-id.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Microsoft Entra ID](connectors/azureactivedirectory.md) |
| [`ADOAuditLogs_CL`](tables/adoauditlogs-cl.md) | [AzureDevOpsAuditing](solutions/azuredevopsauditing.md) | [Azure DevOps Audit Logs (via Codeless Connector Platform)](connectors/azuredevopsauditlogs.md) |
| [`AGWAccessLogs`](tables/agwaccesslogs.md) | [Azure Web Application Firewall (WAF)](solutions/azure-web-application-firewall-waf.md) |  |
| [`AGWFirewallLogs`](tables/agwfirewalllogs.md) | [Azure Web Application Firewall (WAF)](solutions/azure-web-application-firewall-waf.md) |  |
| [`AIShield_CL`](tables/aishield-cl.md) | [AIShield AI Security Monitoring](solutions/aishield-ai-security-monitoring.md) | [AIShield](connectors/boschaishield.md) |
| [`AIX_Audit_CL`](tables/aix-audit-cl.md) | [NXLogAixAudit](solutions/nxlogaixaudit.md) | [NXLog AIX Audit](connectors/nxlogaixaudit.md) |
| [`ALERT`](tables/alert.md) | [Dataminr Pulse](solutions/dataminr-pulse.md) |  |
| [`ARGOS_CL`](tables/argos-cl.md) | [ARGOSCloudSecurity](solutions/argoscloudsecurity.md) | [ARGOS Cloud Security](connectors/argoscloudsecurity.md) |
| [`ASimAuditEventLogs`](tables/asimauditeventlogs.md) | [Cisco Meraki Events via REST API](solutions/cisco-meraki-events-via-rest-api.md)<br>[CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[+3 more](tables/asimauditeventlogs.md) | [Cisco Meraki (using REST API)](connectors/ciscomerakimultirule.md)<br>[CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](connectors/crowdstrikereplicatorv2.md)<br>[Workday User Activity](connectors/workdayccpdefinition.md) |
| [`ASimAuthenticationEventLogs`](tables/asimauthenticationeventlogs.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md)<br>[Lumen Defender Threat Feed](solutions/lumen-defender-threat-feed.md)<br>[VMware Carbon Black Cloud](solutions/vmware-carbon-black-cloud.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](connectors/crowdstrikereplicatorv2.md)<br>[VMware Carbon Black Cloud via AWS S3](connectors/carbonblackawss3.md) |
| [`ASimDnsActivityLogs`](tables/asimdnsactivitylogs.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[Lumen Defender Threat Feed](solutions/lumen-defender-threat-feed.md)<br>[+1 more](tables/asimdnsactivitylogs.md) | [Windows DNS Events via AMA](connectors/asimdnsactivitylogs.md)<br>[CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](connectors/crowdstrikereplicatorv2.md) |
| [`ASimFileEventLogs`](tables/asimfileeventlogs.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md)<br>[Lumen Defender Threat Feed](solutions/lumen-defender-threat-feed.md)<br>[VMware Carbon Black Cloud](solutions/vmware-carbon-black-cloud.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](connectors/crowdstrikereplicatorv2.md)<br>[VMware Carbon Black Cloud via AWS S3](connectors/carbonblackawss3.md) |
| [`ASimNetworkSessionLogs`](tables/asimnetworksessionlogs.md) | [Cisco Meraki Events via REST API](solutions/cisco-meraki-events-via-rest-api.md)<br>[CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[+3 more](tables/asimnetworksessionlogs.md) | [Cisco Meraki (using REST API)](connectors/ciscomerakimultirule.md)<br>[CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](connectors/crowdstrikereplicatorv2.md)<br>[Windows Firewall Events via AMA](connectors/windowsfirewallama.md)<br>[VMware Carbon Black Cloud via AWS S3](connectors/carbonblackawss3.md) |
| [`ASimProcessEventLogs`](tables/asimprocesseventlogs.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[Lumen Defender Threat Feed](solutions/lumen-defender-threat-feed.md)<br>[+1 more](tables/asimprocesseventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](connectors/crowdstrikereplicatorv2.md)<br>[VMware Carbon Black Cloud via AWS S3](connectors/carbonblackawss3.md) |
| [`ASimRegistryEventLogs`](tables/asimregistryeventlogs.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](solutions/vmware-carbon-black-cloud.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](connectors/crowdstrikereplicatorv2.md)<br>[VMware Carbon Black Cloud via AWS S3](connectors/carbonblackawss3.md) |
| [`ASimUserManagementActivityLogs`](tables/asimusermanagementactivitylogs.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](connectors/crowdstrikereplicatorv2.md) |
| [`ASimWebSessionLogs`](tables/asimwebsessionlogs.md) | [Cisco Meraki Events via REST API](solutions/cisco-meraki-events-via-rest-api.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[Lumen Defender Threat Feed](solutions/lumen-defender-threat-feed.md) | [Cisco Meraki (using REST API)](connectors/ciscomerakimultirule.md) |
| [`AWSCloudFront_AccessLog_CL`](tables/awscloudfront-accesslog-cl.md) | [AWS CloudFront](solutions/aws-cloudfront.md) | [Amazon Web Services CloudFront (via Codeless Connector Framework) (Preview)](connectors/awscloudfrontccpdefinition.md) |
| [`AWSCloudTrail`](tables/awscloudtrail.md) | [Amazon Web Services](solutions/amazon-web-services.md)<br>[Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[Business Email Compromise - Financial Fraud](solutions/business-email-compromise-financial-fraud.md)<br>[+10 more](tables/awscloudtrail.md) | [Amazon Web Services](connectors/aws.md)<br>[Amazon Web Services S3](connectors/awss3.md) |
| [`AWSCloudWatch`](tables/awscloudwatch.md) | [Amazon Web Services](solutions/amazon-web-services.md) | [Amazon Web Services S3](connectors/awss3.md) |
| [`AWSGuardDuty`](tables/awsguardduty.md) | [Amazon Web Services](solutions/amazon-web-services.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[Multi Cloud Attack Coverage Essentials - Resource Abuse](solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md)<br>[+1 more](tables/awsguardduty.md) | [Amazon Web Services S3](connectors/awss3.md) |
| [`AWSNetworkFirewallAlert`](tables/awsnetworkfirewallalert.md) | [Amazon Web Services NetworkFirewall](solutions/amazon-web-services-networkfirewall.md) | [Amazon Web Services NetworkFirewall (via Codeless Connector Framework)](connectors/awsnetworkfirewallccpdefinition.md) |
| [`AWSNetworkFirewallFlow`](tables/awsnetworkfirewallflow.md) | [Amazon Web Services NetworkFirewall](solutions/amazon-web-services-networkfirewall.md) | [Amazon Web Services NetworkFirewall (via Codeless Connector Framework)](connectors/awsnetworkfirewallccpdefinition.md) |
| [`AWSNetworkFirewallTls`](tables/awsnetworkfirewalltls.md) | [Amazon Web Services NetworkFirewall](solutions/amazon-web-services-networkfirewall.md) | [Amazon Web Services NetworkFirewall (via Codeless Connector Framework)](connectors/awsnetworkfirewallccpdefinition.md) |
| [`AWSRoute53Resolver`](tables/awsroute53resolver.md) | [Amazon Web Services Route 53](solutions/amazon-web-services-route-53.md) | [Amazon Web Services S3 DNS Route53 (via Codeless Connector Framework)](connectors/awsroute53resolverccpdefinition.md) |
| [`AWSS3ServerAccess`](tables/awss3serveraccess.md) | [AWS_AccessLogs](solutions/aws-accesslogs.md) | [AWS S3 Server Access Logs (via Codeless Connector Framework)](connectors/awss3serveraccesslogsdefinition.md) |
| [`AWSSecurityHubFindings`](tables/awssecurityhubfindings.md) | [AWS Security Hub](solutions/aws-security-hub.md) | [AWS Security Hub Findings (via Codeless Connector Framework)](connectors/awssecurityhubfindingsccpdefinition.md) |
| [`AWSVPCFlow`](tables/awsvpcflow.md) | [AWS VPC Flow Logs](solutions/aws-vpc-flow-logs.md)<br>[Amazon Web Services](solutions/amazon-web-services.md)<br>[ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[+5 more](tables/awsvpcflow.md) | [Amazon Web Services S3 VPC Flow Logs](connectors/awss3vpcflowlogsparquetdefinition.md)<br>[Amazon Web Services S3](connectors/awss3.md) |
| [`AWSWAF`](tables/awswaf.md) | [Amazon Web Services](solutions/amazon-web-services.md) | [Amazon Web Services S3 WAF](connectors/awss3wafccpdefinition.md) |
| [`AZFWApplicationRule`](tables/azfwapplicationrule.md) | [Azure Firewall](solutions/azure-firewall.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[SOC Handbook](solutions/soc-handbook.md)<br>[+1 more](tables/azfwapplicationrule.md) | [Azure Firewall](connectors/azurefirewall.md) |
| [`AZFWApplicationRuleAggregation`](tables/azfwapplicationruleaggregation.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`AZFWDnsQuery`](tables/azfwdnsquery.md) | [Azure Firewall](solutions/azure-firewall.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Azure Firewall](connectors/azurefirewall.md) |
| [`AZFWFatFlow`](tables/azfwfatflow.md) | [Azure Firewall](solutions/azure-firewall.md) | [Azure Firewall](connectors/azurefirewall.md) |
| [`AZFWFlowTrace`](tables/azfwflowtrace.md) | [Azure Firewall](solutions/azure-firewall.md) | [Azure Firewall](connectors/azurefirewall.md) |
| [`AZFWIdpsSignature`](tables/azfwidpssignature.md) | [Azure Firewall](solutions/azure-firewall.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Azure Firewall](connectors/azurefirewall.md) |
| [`AZFWInternalFqdnResolutionFailure`](tables/azfwinternalfqdnresolutionfailure.md) | [Azure Firewall](solutions/azure-firewall.md) | [Azure Firewall](connectors/azurefirewall.md) |
| [`AZFWNatRule`](tables/azfwnatrule.md) | [Azure Firewall](solutions/azure-firewall.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Azure Firewall](connectors/azurefirewall.md) |
| [`AZFWNatRuleAggregation`](tables/azfwnatruleaggregation.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`AZFWNetworkRule`](tables/azfwnetworkrule.md) | [Azure Firewall](solutions/azure-firewall.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[SOC Handbook](solutions/soc-handbook.md)<br>[+1 more](tables/azfwnetworkrule.md) | [Azure Firewall](connectors/azurefirewall.md) |
| [`AZFWNetworkRuleAggregation`](tables/azfwnetworkruleaggregation.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`AZFWThreatIntel`](tables/azfwthreatintel.md) | [Azure Firewall](solutions/azure-firewall.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Azure Firewall](connectors/azurefirewall.md) |
| [`AddonAzureBackupJobs`](tables/addonazurebackupjobs.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`AddonAzureBackupPolicy`](tables/addonazurebackuppolicy.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`AddonAzureBackupProtectedInstance`](tables/addonazurebackupprotectedinstance.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`AddonAzureBackupStorage`](tables/addonazurebackupstorage.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`Alert`](tables/alert.md) | [Azure SQL Database solution for sentinel](solutions/azure-sql-database-solution-for-sentinel.md)<br>[AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[Corelight](solutions/corelight.md)<br>[+5 more](tables/alert.md) |  |
| [`AlertEvidence`](tables/alertevidence.md) | [ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[Microsoft Defender XDR](solutions/microsoft-defender-xdr.md)<br>[+4 more](tables/alertevidence.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`AlertInfo`](tables/alertinfo.md) | [Microsoft Defender XDR](solutions/microsoft-defender-xdr.md)<br>[SentinelOne](solutions/sentinelone.md) |  |
| [`AliCloudActionTrailLogs_CL`](tables/alicloudactiontraillogs-cl.md) | [Alibaba Cloud ActionTrail](solutions/alibaba-cloud-actiontrail.md) | [Alibaba Cloud ActionTrail (via Codeless Connector Framework)](connectors/alicloudactiontrailccpdefinition.md) |
| [`AliCloud_CL`](tables/alicloud-cl.md) | [Alibaba Cloud](solutions/alibaba-cloud.md) | [AliCloud](connectors/alicloud.md) |
| [`AlsidForADLog_CL`](tables/alsidforadlog-cl.md) | [Alsid For AD](solutions/alsid-for-ad.md) | [Alsid for Active Directory](connectors/alsidforad.md) |
| [`Anomalies`](tables/anomalies.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[Microsoft Entra ID](solutions/microsoft-entra-id.md)<br>[PCI DSS Compliance](solutions/pci-dss-compliance.md)<br>[+2 more](tables/anomalies.md) |  |
| [`Anvilogic_Alerts_CL`](tables/anvilogic-alerts-cl.md) | [Anvilogic](solutions/anvilogic.md) | [Anvilogic](connectors/anvilogicccfdefinition.md) |
| [`ApacheHTTPServer_CL`](tables/apachehttpserver-cl.md) | [ApacheHTTPServer](solutions/apachehttpserver.md)<br>[CustomLogsAma](solutions/customlogsama.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md) | [[Deprecated] Apache HTTP Server](connectors/apachehttpserver.md)<br>[Custom logs via AMA](connectors/customlogsviaama.md) |
| [`ApigeeX_CL`](tables/apigeex-cl.md) | [Google Apigee](solutions/google-apigee.md) | [[DEPRECATED] Google ApigeeX](connectors/apigeexdataconnector.md) |
| [`AppServiceHTTPLogs`](tables/appservicehttplogs.md) | [Threat Intelligence](solutions/threat-intelligence.md)<br>[Threat Intelligence (NEW)](solutions/threat-intelligence-new.md) |  |
| [`Armis_Activities_CL`](tables/armis-activities-cl.md) | [Armis](solutions/armis.md) | [Armis Activities](connectors/armisactivities.md)<br>[Armis Alerts Activities](connectors/armisalertsactivities.md) |
| [`Armis_Alerts_CL`](tables/armis-alerts-cl.md) | [Armis](solutions/armis.md) | [Armis Alerts](connectors/armisalerts.md)<br>[Armis Alerts Activities](connectors/armisalertsactivities.md) |
| [`Armis_Devices_CL`](tables/armis-devices-cl.md) | [Armis](solutions/armis.md) | [Armis Devices](connectors/armisdevices.md) |
| [`Armorblox_CL`](tables/armorblox-cl.md) | [Armorblox](solutions/armorblox.md) | [Armorblox](connectors/armorblox.md) |
| [`AtlassianConfluenceNativePoller_CL`](tables/atlassianconfluencenativepoller-cl.md) | [AtlassianConfluenceAudit](solutions/atlassianconfluenceaudit.md) | [Atlassian Confluence](connectors/atlassianconfluence.md) |
| [`AuditLogs`](tables/auditlogs.md) | [AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[Business Email Compromise - Financial Fraud](solutions/business-email-compromise-financial-fraud.md)<br>[Cloud Identity Threat Protection Essentials](solutions/cloud-identity-threat-protection-essentials.md)<br>[+16 more](tables/auditlogs.md) | [Microsoft Entra ID](connectors/azureactivedirectory.md) |
| [`Audit_CL`](tables/audit-cl.md) | [Mimecast](solutions/mimecast.md) | [Mimecast Audit](connectors/mimecastauditapi.md) |
| [`Audits_Data_CL`](tables/audits-data-cl.md) | [Dataminr Pulse](solutions/dataminr-pulse.md)<br>[Vectra XDR](solutions/vectra-xdr.md) | [Vectra XDR](connectors/vectraxdr.md) |
| [`Auth0AM_CL`](tables/auth0am-cl.md) | [Auth0](solutions/auth0.md) | [Auth0 Access Management](connectors/auth0.md) |
| [`Auth0Logs_CL`](tables/auth0logs-cl.md) | [Auth0](solutions/auth0.md) | [Auth0 Logs](connectors/auth0connectorccpdefinition.md) |
| [`Authomize_v2_CL`](tables/authomize-v2-cl.md) | [Authomize](solutions/authomize.md) | [Authomize Data Connector](connectors/authomize.md) |
| [`Awareness_Performance_Details_CL`](tables/awareness-performance-details-cl.md) | [Mimecast](solutions/mimecast.md) | [Mimecast Awareness Training](connectors/mimecastatapi.md) |
| [`Awareness_SafeScore_Details_CL`](tables/awareness-safescore-details-cl.md) | [Mimecast](solutions/mimecast.md) | [Mimecast Awareness Training](connectors/mimecastatapi.md) |
| [`Awareness_User_Data_CL`](tables/awareness-user-data-cl.md) | [Mimecast](solutions/mimecast.md) | [Mimecast Awareness Training](connectors/mimecastatapi.md) |
| [`Awareness_Watchlist_Details_CL`](tables/awareness-watchlist-details-cl.md) | [Mimecast](solutions/mimecast.md) | [Mimecast Awareness Training](connectors/mimecastatapi.md) |
| [`AwsBucketAPILogs_CL`](tables/awsbucketapilogs-cl.md) | [Business Email Compromise - Financial Fraud](solutions/business-email-compromise-financial-fraud.md) |  |
| [`AzureActivity`](tables/azureactivity.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[Azure Activity](solutions/azure-activity.md)<br>[Azure SQL Database solution for sentinel](solutions/azure-sql-database-solution-for-sentinel.md)<br>[+16 more](tables/azureactivity.md) | [Azure Activity](connectors/azureactivity.md) |
| [`AzureDevOpsAuditing`](tables/azuredevopsauditing.md) | [AzureDevOpsAuditing](solutions/azuredevopsauditing.md)<br>[AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md) |  |
| [`AzureDiagnostics`](tables/azurediagnostics.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[Azure Batch Account](solutions/azure-batch-account.md)<br>[Azure Cognitive Search](solutions/azure-cognitive-search.md)<br>[+32 more](tables/azurediagnostics.md) | [Azure Batch Account](connectors/azurebatchaccount-ccp.md)<br>[Azure Cognitive Search](connectors/azurecognitivesearch-ccp.md)<br>[Azure Data Lake Storage Gen1](connectors/azuredatalakestoragegen1-ccp.md)<br>[Azure Event Hub](connectors/azureeventhub-ccp.md)<br>[Azure Firewall](connectors/azurefirewall.md)<br>[+10 more](tables/azurediagnostics.md) |
| [`AzureMetrics`](tables/azuremetrics.md) | [Azure Storage](solutions/azure-storage.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[SOC Handbook](solutions/soc-handbook.md)<br>[+1 more](tables/azuremetrics.md) | [Azure Storage Account](connectors/azurestorageaccount.md)<br>[SlashNext Function App](connectors/slashnextfunctionapp.md) |
| [`AzureNetworkAnalytics_CL`](tables/azurenetworkanalytics-cl.md) | [Cloud Service Threat Protection Essentials](solutions/cloud-service-threat-protection-essentials.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[Legacy IOC based Threat Protection](solutions/legacy-ioc-based-threat-protection.md)<br>[+2 more](tables/azurenetworkanalytics-cl.md) |  |
| [`agari_apdpolicy_log_CL`](tables/agari-apdpolicy-log-cl.md) | [Agari](solutions/agari.md) | [Agari Phishing Defense and Brand Protection](connectors/agari.md) |
| [`agari_apdtc_log_CL`](tables/agari-apdtc-log-cl.md) | [Agari](solutions/agari.md) | [Agari Phishing Defense and Brand Protection](connectors/agari.md) |
| [`agari_bpalerts_log_CL`](tables/agari-bpalerts-log-cl.md) | [Agari](solutions/agari.md) | [Agari Phishing Defense and Brand Protection](connectors/agari.md) |
| [`alert`](tables/alert.md) | [Alsid For AD](solutions/alsid-for-ad.md)<br>[Azure Cloud NGFW By Palo Alto Networks](solutions/azure-cloud-ngfw-by-palo-alto-networks.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[+9 more](tables/alert.md) |  |
| [`alertscompromisedcredentialdata_CL`](tables/alertscompromisedcredentialdata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`alertsctepdata_CL`](tables/alertsctepdata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`alertsdlpdata_CL`](tables/alertsdlpdata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`alertsmalsitedata_CL`](tables/alertsmalsitedata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`alertsmalwaredata_CL`](tables/alertsmalwaredata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`alertspolicydata_CL`](tables/alertspolicydata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`alertsquarantinedata_CL`](tables/alertsquarantinedata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`alertsremediationdata_CL`](tables/alertsremediationdata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`alertssecurityassessmentdata_CL`](tables/alertssecurityassessmentdata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`alertsubadata_CL`](tables/alertsubadata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`anomalies`](tables/anomalies.md) | [AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[DNS Essentials](solutions/dns-essentials.md)<br>[GDPR Compliance & Data Security](solutions/gdpr-compliance-&-data-security.md)<br>[+5 more](tables/anomalies.md) |  |
| [`apifirewall_log_1_CL`](tables/apifirewall-log-1-cl.md) | [42Crunch API Protection](solutions/42crunch-api-protection.md) | [API Protection](connectors/42crunchapiprotection.md) |
| [`argsentdc_CL`](tables/argsentdc-cl.md) | [Check Point Cyberint Alerts](solutions/check-point-cyberint-alerts.md) | [Check Point Cyberint Alerts Connector (via Codeless Connector Platform)](connectors/checkpointcyberintalerts.md) |
| [`atlassian_beacon_alerts_CL`](tables/atlassian-beacon-alerts-cl.md) | [Integration for Atlassian Beacon](solutions/integration-for-atlassian-beacon.md) | [Atlassian Beacon Alerts](connectors/atlassianbeaconalerts.md) |

## B

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`BHEAttackPathsData_CL`](tables/bheattackpathsdata-cl.md) | [BloodHound Enterprise](solutions/bloodhound-enterprise.md) | [Bloodhound Enterprise](connectors/bloodhoundenterprise.md) |
| [`BHEAttackPathsTimelineData_CL`](tables/bheattackpathstimelinedata-cl.md) | [BloodHound Enterprise](solutions/bloodhound-enterprise.md) |  |
| [`BHEAuditLogsData_CL`](tables/bheauditlogsdata-cl.md) | [BloodHound Enterprise](solutions/bloodhound-enterprise.md) |  |
| [`BHEFindingTrendsData_CL`](tables/bhefindingtrendsdata-cl.md) | [BloodHound Enterprise](solutions/bloodhound-enterprise.md) |  |
| [`BHEPostureHistoryData_CL`](tables/bheposturehistorydata-cl.md) | [BloodHound Enterprise](solutions/bloodhound-enterprise.md) |  |
| [`BHETierZeroAssetsData_CL`](tables/bhetierzeroassetsdata-cl.md) | [BloodHound Enterprise](solutions/bloodhound-enterprise.md) |  |
| [`BSMmacOS_CL`](tables/bsmmacos-cl.md) | [NXLog BSM macOS](solutions/nxlog-bsm-macos.md) | [NXLog BSM macOS](connectors/nxlogbsmmacos.md) |
| [`Barracuda_CL`](tables/barracuda-cl.md) | [Barracuda WAF](solutions/barracuda-waf.md) | [[Deprecated] Barracuda Web Application Firewall via Legacy Agent](connectors/barracuda.md) |
| [`BehaviorAnalytics`](tables/behavioranalytics.md) | [AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[Business Email Compromise - Financial Fraud](solutions/business-email-compromise-financial-fraud.md)<br>[Cloud Identity Threat Protection Essentials](solutions/cloud-identity-threat-protection-essentials.md)<br>[+8 more](tables/behavioranalytics.md) |  |
| [`BetterMTDAppLog_CL`](tables/bettermtdapplog-cl.md) | [BETTER Mobile Threat Defense (MTD)](solutions/better-mobile-threat-defense-mtd.md) | [BETTER Mobile Threat Defense (MTD)](connectors/bettermtd.md) |
| [`BetterMTDDeviceLog_CL`](tables/bettermtddevicelog-cl.md) | [BETTER Mobile Threat Defense (MTD)](solutions/better-mobile-threat-defense-mtd.md) | [BETTER Mobile Threat Defense (MTD)](connectors/bettermtd.md) |
| [`BetterMTDIncidentLog_CL`](tables/bettermtdincidentlog-cl.md) | [BETTER Mobile Threat Defense (MTD)](solutions/better-mobile-threat-defense-mtd.md) | [BETTER Mobile Threat Defense (MTD)](connectors/bettermtd.md) |
| [`BetterMTDNetflowLog_CL`](tables/bettermtdnetflowlog-cl.md) | [BETTER Mobile Threat Defense (MTD)](solutions/better-mobile-threat-defense-mtd.md) | [BETTER Mobile Threat Defense (MTD)](connectors/bettermtd.md) |
| [`BigIDDSPMCatalog_CL`](tables/bigiddspmcatalog-cl.md) | [BigID](solutions/bigid.md) | [BigID DSPM connector](connectors/bigiddspmlogsconnectordefinition.md) |
| [`BitglassLogs_CL`](tables/bitglasslogs-cl.md) | [Bitglass](solutions/bitglass.md) | [Bitglass](connectors/bitglass.md) |
| [`BitsightAlerts_data_CL`](tables/bitsightalerts-data-cl.md) | [BitSight](solutions/bitsight.md) | [Bitsight data connector](connectors/bitsight.md) |
| [`BitsightBreaches_data_CL`](tables/bitsightbreaches-data-cl.md) | [BitSight](solutions/bitsight.md) | [Bitsight data connector](connectors/bitsight.md) |
| [`BitsightCompany_details_CL`](tables/bitsightcompany-details-cl.md) | [BitSight](solutions/bitsight.md) | [Bitsight data connector](connectors/bitsight.md) |
| [`BitsightCompany_rating_details_CL`](tables/bitsightcompany-rating-details-cl.md) | [BitSight](solutions/bitsight.md) | [Bitsight data connector](connectors/bitsight.md) |
| [`BitsightDiligence_historical_statistics_CL`](tables/bitsightdiligence-historical-statistics-cl.md) | [BitSight](solutions/bitsight.md) | [Bitsight data connector](connectors/bitsight.md) |
| [`BitsightDiligence_statistics_CL`](tables/bitsightdiligence-statistics-cl.md) | [BitSight](solutions/bitsight.md) | [Bitsight data connector](connectors/bitsight.md) |
| [`BitsightFindings_data_CL`](tables/bitsightfindings-data-cl.md) | [BitSight](solutions/bitsight.md) | [Bitsight data connector](connectors/bitsight.md) |
| [`BitsightFindings_summary_CL`](tables/bitsightfindings-summary-cl.md) | [BitSight](solutions/bitsight.md) | [Bitsight data connector](connectors/bitsight.md) |
| [`BitsightGraph_data_CL`](tables/bitsightgraph-data-cl.md) | [BitSight](solutions/bitsight.md) | [Bitsight data connector](connectors/bitsight.md) |
| [`BitsightIndustrial_statistics_CL`](tables/bitsightindustrial-statistics-cl.md) | [BitSight](solutions/bitsight.md) | [Bitsight data connector](connectors/bitsight.md) |
| [`BitsightObservation_statistics_CL`](tables/bitsightobservation-statistics-cl.md) | [BitSight](solutions/bitsight.md) | [Bitsight data connector](connectors/bitsight.md) |
| [`BitwardenEventLogs_CL`](tables/bitwardeneventlogs-cl.md) | [Bitwarden](solutions/bitwarden.md) | [Bitwarden Event Logs](connectors/bitwardeneventlogs.md) |
| [`BitwardenGroups_CL`](tables/bitwardengroups-cl.md) | [Bitwarden](solutions/bitwarden.md) | [Bitwarden Event Logs](connectors/bitwardeneventlogs.md) |
| [`BitwardenMembers_CL`](tables/bitwardenmembers-cl.md) | [Bitwarden](solutions/bitwarden.md) | [Bitwarden Event Logs](connectors/bitwardeneventlogs.md) |
| [`BoxEventsV2_CL`](tables/boxeventsv2-cl.md) | [Box](solutions/box.md) | [Box Events (CCP)](connectors/boxeventsccpdefinition.md) |
| [`BoxEvents_CL`](tables/boxevents-cl.md) | [Box](solutions/box.md) | [Box](connectors/boxdataconnector.md) |
| [`barracuda_CL`](tables/barracuda-cl.md) | [Barracuda WAF](solutions/barracuda-waf.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md) | [[Deprecated] Barracuda Web Application Firewall via Legacy Agent](connectors/barracuda.md) |
| [`beSECURE_Audit_CL`](tables/besecure-audit-cl.md) | [Beyond Security beSECURE](solutions/beyond-security-besecure.md) | [Beyond Security beSECURE](connectors/beyondsecuritybesecure.md) |
| [`beSECURE_ScanEvent_CL`](tables/besecure-scanevent-cl.md) | [Beyond Security beSECURE](solutions/beyond-security-besecure.md) | [Beyond Security beSECURE](connectors/beyondsecuritybesecure.md) |
| [`beSECURE_ScanResults_CL`](tables/besecure-scanresults-cl.md) | [Beyond Security beSECURE](solutions/beyond-security-besecure.md) | [Beyond Security beSECURE](connectors/beyondsecuritybesecure.md) |

## C

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`CBSLog_Azure_1_CL`](tables/cbslog-azure-1-cl.md) | [CTM360](solutions/ctm360.md) | [Cyber Blind Spot Integration](connectors/cbspollingidazurefunctions.md) |
| [`CarbonBlackAuditLogs_CL`](tables/carbonblackauditlogs-cl.md) | [Dataminr Pulse](solutions/dataminr-pulse.md)<br>[VMware Carbon Black Cloud](solutions/vmware-carbon-black-cloud.md) | [VMware Carbon Black Cloud](connectors/vmwarecarbonblack.md) |
| [`CarbonBlackEvents_CL`](tables/carbonblackevents-cl.md) | [Dataminr Pulse](solutions/dataminr-pulse.md)<br>[VMware Carbon Black Cloud](solutions/vmware-carbon-black-cloud.md) | [VMware Carbon Black Cloud](connectors/vmwarecarbonblack.md) |
| [`CarbonBlackNotifications_CL`](tables/carbonblacknotifications-cl.md) | [Dataminr Pulse](solutions/dataminr-pulse.md)<br>[VMware Carbon Black Cloud](solutions/vmware-carbon-black-cloud.md) | [VMware Carbon Black Cloud](connectors/vmwarecarbonblack.md) |
| [`CarbonBlack_Alerts_CL`](tables/carbonblack-alerts-cl.md) | [ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[NISTSP80053](solutions/nistsp80053.md)<br>[+2 more](tables/carbonblack-alerts-cl.md) | [VMware Carbon Black Cloud via AWS S3](connectors/carbonblackawss3.md) |
| [`CarbonBlack_Watchlist_CL`](tables/carbonblack-watchlist-cl.md) | [VMware Carbon Black Cloud](solutions/vmware-carbon-black-cloud.md) | [VMware Carbon Black Cloud via AWS S3](connectors/carbonblackawss3.md) |
| [`CiscoDuo_CL`](tables/ciscoduo-cl.md) | [CiscoDuoSecurity](solutions/ciscoduosecurity.md) | [Cisco Duo Security](connectors/ciscoduosecurity.md) |
| [`CiscoETD_CL`](tables/ciscoetd-cl.md) | [Cisco ETD](solutions/cisco-etd.md) | [Cisco ETD](connectors/ciscoetd.md) |
| [`CiscoMerakiNativePoller_CL`](tables/ciscomerakinativepoller-cl.md) | [CiscoMeraki](solutions/ciscomeraki.md) | [Cisco Meraki (using REST API)](connectors/ciscomeraki-usingrestapi.md)<br>[Cisco Meraki (using REST API)](connectors/ciscomerakinativepoller.md) |
| [`CiscoSDWANNetflow_CL`](tables/ciscosdwannetflow-cl.md) | [Cisco SD-WAN](solutions/cisco-sd-wan.md) | [Cisco Software Defined WAN](connectors/ciscosdwan.md) |
| [`CiscoSecureEndpointAuditLogsV2_CL`](tables/ciscosecureendpointauditlogsv2-cl.md) | [Cisco Secure Endpoint](solutions/cisco-secure-endpoint.md) | [Cisco Secure Endpoint (via Codeless Connector Framework)](connectors/ciscosecureendpointlogsccpdefinition.md) |
| [`CiscoSecureEndpointEventsV2_CL`](tables/ciscosecureendpointeventsv2-cl.md) | [Cisco Secure Endpoint](solutions/cisco-secure-endpoint.md) | [Cisco Secure Endpoint (via Codeless Connector Framework)](connectors/ciscosecureendpointlogsccpdefinition.md) |
| [`CiscoSecureEndpoint_CL`](tables/ciscosecureendpoint-cl.md) | [Cisco Secure Endpoint](solutions/cisco-secure-endpoint.md) | [[DEPRECATED] Cisco Secure Endpoint (AMP)](connectors/ciscosecureendpoint.md) |
| [`Cisco_Umbrella_audit_CL`](tables/cisco-umbrella-audit-cl.md) | [CiscoUmbrella](solutions/ciscoumbrella.md) | [Cisco Cloud Security](connectors/ciscoumbrelladataconnector.md)<br>[Cisco Cloud Security (using elastic premium plan)](connectors/ciscoumbrelladataconnectorelasticpremium.md) |
| [`Cisco_Umbrella_cloudfirewall_CL`](tables/cisco-umbrella-cloudfirewall-cl.md) | [CiscoUmbrella](solutions/ciscoumbrella.md) | [Cisco Cloud Security](connectors/ciscoumbrelladataconnector.md)<br>[Cisco Cloud Security (using elastic premium plan)](connectors/ciscoumbrelladataconnectorelasticpremium.md) |
| [`Cisco_Umbrella_dlp_CL`](tables/cisco-umbrella-dlp-cl.md) | [CiscoUmbrella](solutions/ciscoumbrella.md) | [Cisco Cloud Security](connectors/ciscoumbrelladataconnector.md)<br>[Cisco Cloud Security (using elastic premium plan)](connectors/ciscoumbrelladataconnectorelasticpremium.md) |
| [`Cisco_Umbrella_dns_CL`](tables/cisco-umbrella-dns-cl.md) | [CiscoUmbrella](solutions/ciscoumbrella.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md) | [Cisco Cloud Security](connectors/ciscoumbrelladataconnector.md)<br>[Cisco Cloud Security (using elastic premium plan)](connectors/ciscoumbrelladataconnectorelasticpremium.md) |
| [`Cisco_Umbrella_fileevent_CL`](tables/cisco-umbrella-fileevent-cl.md) | [CiscoUmbrella](solutions/ciscoumbrella.md) | [Cisco Cloud Security](connectors/ciscoumbrelladataconnector.md)<br>[Cisco Cloud Security (using elastic premium plan)](connectors/ciscoumbrelladataconnectorelasticpremium.md) |
| [`Cisco_Umbrella_firewall_CL`](tables/cisco-umbrella-firewall-cl.md) | [CiscoUmbrella](solutions/ciscoumbrella.md) | [Cisco Cloud Security](connectors/ciscoumbrelladataconnector.md)<br>[Cisco Cloud Security (using elastic premium plan)](connectors/ciscoumbrelladataconnectorelasticpremium.md) |
| [`Cisco_Umbrella_intrusion_CL`](tables/cisco-umbrella-intrusion-cl.md) | [CiscoUmbrella](solutions/ciscoumbrella.md) | [Cisco Cloud Security](connectors/ciscoumbrelladataconnector.md)<br>[Cisco Cloud Security (using elastic premium plan)](connectors/ciscoumbrelladataconnectorelasticpremium.md) |
| [`Cisco_Umbrella_ip_CL`](tables/cisco-umbrella-ip-cl.md) | [CiscoUmbrella](solutions/ciscoumbrella.md) | [Cisco Cloud Security](connectors/ciscoumbrelladataconnector.md)<br>[Cisco Cloud Security (using elastic premium plan)](connectors/ciscoumbrelladataconnectorelasticpremium.md) |
| [`Cisco_Umbrella_proxy_CL`](tables/cisco-umbrella-proxy-cl.md) | [CiscoUmbrella](solutions/ciscoumbrella.md) | [Cisco Cloud Security](connectors/ciscoumbrelladataconnector.md)<br>[Cisco Cloud Security (using elastic premium plan)](connectors/ciscoumbrelladataconnectorelasticpremium.md) |
| [`Cisco_Umbrella_ravpnlogs_CL`](tables/cisco-umbrella-ravpnlogs-cl.md) | [CiscoUmbrella](solutions/ciscoumbrella.md) | [Cisco Cloud Security](connectors/ciscoumbrelladataconnector.md)<br>[Cisco Cloud Security (using elastic premium plan)](connectors/ciscoumbrelladataconnectorelasticpremium.md) |
| [`Cisco_Umbrella_ztaflow_CL`](tables/cisco-umbrella-ztaflow-cl.md) | [CiscoUmbrella](solutions/ciscoumbrella.md) | [Cisco Cloud Security](connectors/ciscoumbrelladataconnector.md)<br>[Cisco Cloud Security (using elastic premium plan)](connectors/ciscoumbrelladataconnectorelasticpremium.md) |
| [`Cisco_Umbrella_ztna_CL`](tables/cisco-umbrella-ztna-cl.md) | [CiscoUmbrella](solutions/ciscoumbrella.md) | [Cisco Cloud Security](connectors/ciscoumbrelladataconnector.md)<br>[Cisco Cloud Security (using elastic premium plan)](connectors/ciscoumbrelladataconnectorelasticpremium.md) |
| [`CitrixAnalytics_indicatorEventDetails_CL`](tables/citrixanalytics-indicatoreventdetails-cl.md) | [Citrix Analytics for Security](solutions/citrix-analytics-for-security.md) | [CITRIX SECURITY ANALYTICS](connectors/citrix.md) |
| [`CitrixAnalytics_indicatorSummary_CL`](tables/citrixanalytics-indicatorsummary-cl.md) | [Citrix Analytics for Security](solutions/citrix-analytics-for-security.md) | [CITRIX SECURITY ANALYTICS](connectors/citrix.md) |
| [`CitrixAnalytics_riskScoreChange_CL`](tables/citrixanalytics-riskscorechange-cl.md) | [Citrix Analytics for Security](solutions/citrix-analytics-for-security.md) | [CITRIX SECURITY ANALYTICS](connectors/citrix.md) |
| [`CitrixAnalytics_userProfile_CL`](tables/citrixanalytics-userprofile-cl.md) | [Citrix Analytics for Security](solutions/citrix-analytics-for-security.md) | [CITRIX SECURITY ANALYTICS](connectors/citrix.md) |
| [`CloudAppEvents`](tables/cloudappevents.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[Microsoft Defender XDR](solutions/microsoft-defender-xdr.md)<br>[SOC Handbook](solutions/soc-handbook.md)<br>[+2 more](tables/cloudappevents.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`CloudGuard_SecurityEvents_CL`](tables/cloudguard-securityevents-cl.md) | [Check Point CloudGuard CNAPP](solutions/check-point-cloudguard-cnapp.md) | [Check Point CloudGuard CNAPP Connector for Microsoft Sentinel](connectors/cloudguardccpdefinition.md) |
| [`Cloud_Integrated_CL`](tables/cloud-integrated-cl.md) | [Mimecast](solutions/mimecast.md) | [Mimecast Cloud Integrated](connectors/mimecastciapi.md) |
| [`CloudflareV2_CL`](tables/cloudflarev2-cl.md) | [Cloudflare](solutions/cloudflare.md)<br>[Cloudflare CCF](solutions/cloudflare-ccf.md) | [Cloudflare (Using Blob Container) (via Codeless Connector Framework)](connectors/cloudflaredefinition.md) |
| [`Cloudflare_CL`](tables/cloudflare-cl.md) | [Cloudflare](solutions/cloudflare.md)<br>[Cloudflare CCF](solutions/cloudflare-ccf.md) | [[DEPRECATED] Cloudflare](connectors/cloudflaredataconnector.md) |
| [`Cofense_Triage_failed_indicators_CL`](tables/cofense-triage-failed-indicators-cl.md) | [CofenseTriage](solutions/cofensetriage.md) | [Cofense Triage Threat Indicators Ingestion](connectors/cofensetriage.md) |
| [`CognniIncidents_CL`](tables/cognniincidents-cl.md) | [Cognni](solutions/cognni.md) | [Cognni](connectors/cognnisentineldataconnector.md) |
| [`Cohesity_CL`](tables/cohesity-cl.md) | [CohesitySecurity](solutions/cohesitysecurity.md) | [Cohesity](connectors/cohesitydataconnector.md) |
| [`CommonSecurityLog`](tables/commonsecuritylog.md) | [AI Analyst Darktrace](solutions/ai-analyst-darktrace.md)<br>[Acronis Cyber Protect Cloud](solutions/acronis-cyber-protect-cloud.md)<br>[Akamai Security Events](solutions/akamai-security-events.md)<br>[+77 more](tables/commonsecuritylog.md) | [[Deprecated] Vectra AI Detect via Legacy Agent](connectors/aivectradetect.md)<br>[[Deprecated] Vectra AI Detect via AMA](connectors/aivectradetectama.md)<br>[[Deprecated] Akamai Security Events via Legacy Agent](connectors/akamaisecurityevents.md)<br>[[Deprecated] Akamai Security Events via AMA](connectors/akamaisecurityeventsama.md)<br>[[Deprecated] Awake Security via Legacy Agent](connectors/aristaawakesecurity.md)<br>[+83 more](tables/commonsecuritylog.md) |
| [`Communication_Data_CL`](tables/communication-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`CommvaultSecurityIQ_CL`](tables/commvaultsecurityiq-cl.md) | [Commvault Security IQ](solutions/commvault-security-iq.md) | [CommvaultSecurityIQ](connectors/commvaultsecurityiq-cl.md) |
| [`ConfigurationChange`](tables/configurationchange.md) | [CybersecurityMaturityModelCertification(CMMC)2.0](solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[NISTSP80053](solutions/nistsp80053.md)<br>[+3 more](tables/configurationchange.md) |  |
| [`ConfigurationData`](tables/configurationdata.md) | [ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[SOC Handbook](solutions/soc-handbook.md) |  |
| [`ConfluenceAuditLogs_CL`](tables/confluenceauditlogs-cl.md) | [AtlassianConfluenceAudit](solutions/atlassianconfluenceaudit.md) | [ Atlassian Confluence Audit (via Codeless Connector Framework)](connectors/confluenceauditccpdefinition.md) |
| [`Confluence_Audit_CL`](tables/confluence-audit-cl.md) | [AtlassianConfluenceAudit](solutions/atlassianconfluenceaudit.md) | [[Deprecated] Atlassian Confluence Audit](connectors/confluenceauditapi.md) |
| [`ContainerEvent_CL`](tables/containerevent-cl.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`ContainerInstanceLog_CL`](tables/containerinstancelog-cl.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`ContainerInventory`](tables/containerinventory.md) | [Azure kubernetes Service](solutions/azure-kubernetes-service.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) | [Azure Kubernetes Service (AKS)](connectors/azurekubernetes.md) |
| [`ContrastADRIncident_CL`](tables/contrastadrincident-cl.md) | [ContrastADR](solutions/contrastadr.md) | [ContrastADR](connectors/contrastadr.md) |
| [`ContrastADR_CL`](tables/contrastadr-cl.md) | [ContrastADR](solutions/contrastadr.md) | [ContrastADR](connectors/contrastadr.md) |
| [`CopilotActivity`](tables/copilotactivity.md) | [Microsoft Copilot](solutions/microsoft-copilot.md) | [Microsoft Copilot](connectors/microsoftcopilot.md) |
| [`CoreAzureBackup`](tables/coreazurebackup.md) | [Microsoft Defender for Cloud](solutions/microsoft-defender-for-cloud.md) |  |
| [`Corelight_CL`](tables/corelight-cl.md) | [Corelight](solutions/corelight.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_bacnet_CL`](tables/corelight-v2-bacnet-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_capture_loss_CL`](tables/corelight-v2-capture-loss-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_cip_CL`](tables/corelight-v2-cip-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_conn_CL`](tables/corelight-v2-conn-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_conn_long_CL`](tables/corelight-v2-conn-long-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_conn_red_CL`](tables/corelight-v2-conn-red-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_corelight_burst_CL`](tables/corelight-v2-corelight-burst-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_corelight_metrics_disk_CL`](tables/corelight-v2-corelight-metrics-disk-cl.md) | [Corelight](solutions/corelight.md) |  |
| [`Corelight_v2_corelight_metrics_iface_CL`](tables/corelight-v2-corelight-metrics-iface-cl.md) | [Corelight](solutions/corelight.md) |  |
| [`Corelight_v2_corelight_metrics_memory_CL`](tables/corelight-v2-corelight-metrics-memory-cl.md) | [Corelight](solutions/corelight.md) |  |
| [`Corelight_v2_corelight_metrics_system_CL`](tables/corelight-v2-corelight-metrics-system-cl.md) | [Corelight](solutions/corelight.md) |  |
| [`Corelight_v2_corelight_metrics_zeek_doctor_CL`](tables/corelight-v2-corelight-metrics-zeek-doctor-cl.md) | [Corelight](solutions/corelight.md) |  |
| [`Corelight_v2_corelight_overall_capture_loss_CL`](tables/corelight-v2-corelight-overall-capture-loss-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_corelight_profiling_CL`](tables/corelight-v2-corelight-profiling-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_datared_CL`](tables/corelight-v2-datared-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_dce_rpc_CL`](tables/corelight-v2-dce-rpc-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_dga_CL`](tables/corelight-v2-dga-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_dhcp_CL`](tables/corelight-v2-dhcp-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_dnp3_CL`](tables/corelight-v2-dnp3-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_dns_CL`](tables/corelight-v2-dns-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_dns_red_CL`](tables/corelight-v2-dns-red-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_dpd_CL`](tables/corelight-v2-dpd-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_encrypted_dns_CL`](tables/corelight-v2-encrypted-dns-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_enip_CL`](tables/corelight-v2-enip-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_enip_debug_CL`](tables/corelight-v2-enip-debug-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_enip_list_identity_CL`](tables/corelight-v2-enip-list-identity-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_etc_viz_CL`](tables/corelight-v2-etc-viz-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_files_CL`](tables/corelight-v2-files-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_files_red_CL`](tables/corelight-v2-files-red-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_ftp_CL`](tables/corelight-v2-ftp-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_generic_dns_tunnels_CL`](tables/corelight-v2-generic-dns-tunnels-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_generic_icmp_tunnels_CL`](tables/corelight-v2-generic-icmp-tunnels-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_http2_CL`](tables/corelight-v2-http2-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_http_CL`](tables/corelight-v2-http-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_http_red_CL`](tables/corelight-v2-http-red-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_icmp_specific_tunnels_CL`](tables/corelight-v2-icmp-specific-tunnels-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_intel_CL`](tables/corelight-v2-intel-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_ipsec_CL`](tables/corelight-v2-ipsec-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_irc_CL`](tables/corelight-v2-irc-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_iso_cotp_CL`](tables/corelight-v2-iso-cotp-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_kerberos_CL`](tables/corelight-v2-kerberos-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_known_certs_CL`](tables/corelight-v2-known-certs-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_known_devices_CL`](tables/corelight-v2-known-devices-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_known_domains_CL`](tables/corelight-v2-known-domains-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_known_hosts_CL`](tables/corelight-v2-known-hosts-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_known_names_CL`](tables/corelight-v2-known-names-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_known_remotes_CL`](tables/corelight-v2-known-remotes-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_known_services_CL`](tables/corelight-v2-known-services-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_known_users_CL`](tables/corelight-v2-known-users-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_local_subnets_CL`](tables/corelight-v2-local-subnets-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_local_subnets_dj_CL`](tables/corelight-v2-local-subnets-dj-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_local_subnets_graphs_CL`](tables/corelight-v2-local-subnets-graphs-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_log4shell_CL`](tables/corelight-v2-log4shell-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_modbus_CL`](tables/corelight-v2-modbus-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_mqtt_connect_CL`](tables/corelight-v2-mqtt-connect-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_mqtt_publish_CL`](tables/corelight-v2-mqtt-publish-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_mqtt_subscribe_CL`](tables/corelight-v2-mqtt-subscribe-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_mysql_CL`](tables/corelight-v2-mysql-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_notice_CL`](tables/corelight-v2-notice-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_ntlm_CL`](tables/corelight-v2-ntlm-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_ntp_CL`](tables/corelight-v2-ntp-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_ocsp_CL`](tables/corelight-v2-ocsp-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_openflow_CL`](tables/corelight-v2-openflow-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_packet_filter_CL`](tables/corelight-v2-packet-filter-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_pe_CL`](tables/corelight-v2-pe-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_profinet_CL`](tables/corelight-v2-profinet-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_profinet_dce_rpc_CL`](tables/corelight-v2-profinet-dce-rpc-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_profinet_debug_CL`](tables/corelight-v2-profinet-debug-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_radius_CL`](tables/corelight-v2-radius-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_rdp_CL`](tables/corelight-v2-rdp-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_reporter_CL`](tables/corelight-v2-reporter-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_rfb_CL`](tables/corelight-v2-rfb-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_s7comm_CL`](tables/corelight-v2-s7comm-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_signatures_CL`](tables/corelight-v2-signatures-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_sip_CL`](tables/corelight-v2-sip-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_smartpcap_CL`](tables/corelight-v2-smartpcap-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_smartpcap_stats_CL`](tables/corelight-v2-smartpcap-stats-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_smb_files_CL`](tables/corelight-v2-smb-files-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_smb_mapping_CL`](tables/corelight-v2-smb-mapping-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_smtp_CL`](tables/corelight-v2-smtp-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_smtp_links_CL`](tables/corelight-v2-smtp-links-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_snmp_CL`](tables/corelight-v2-snmp-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_socks_CL`](tables/corelight-v2-socks-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_software_CL`](tables/corelight-v2-software-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_specific_dns_tunnels_CL`](tables/corelight-v2-specific-dns-tunnels-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_ssh_CL`](tables/corelight-v2-ssh-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_ssl_CL`](tables/corelight-v2-ssl-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_ssl_red_CL`](tables/corelight-v2-ssl-red-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_stats_CL`](tables/corelight-v2-stats-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_stepping_CL`](tables/corelight-v2-stepping-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_stun_CL`](tables/corelight-v2-stun-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_stun_nat_CL`](tables/corelight-v2-stun-nat-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_suricata_corelight_CL`](tables/corelight-v2-suricata-corelight-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_suricata_eve_CL`](tables/corelight-v2-suricata-eve-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_suricata_stats_CL`](tables/corelight-v2-suricata-stats-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_suricata_zeek_stats_CL`](tables/corelight-v2-suricata-zeek-stats-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_syslog_CL`](tables/corelight-v2-syslog-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_tds_CL`](tables/corelight-v2-tds-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_tds_rpc_CL`](tables/corelight-v2-tds-rpc-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_tds_sql_batch_CL`](tables/corelight-v2-tds-sql-batch-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_traceroute_CL`](tables/corelight-v2-traceroute-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_tunnel_CL`](tables/corelight-v2-tunnel-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_unknown_smartpcap_CL`](tables/corelight-v2-unknown-smartpcap-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_util_stats_CL`](tables/corelight-v2-util-stats-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_vpn_CL`](tables/corelight-v2-vpn-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_weird_CL`](tables/corelight-v2-weird-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_weird_red_CL`](tables/corelight-v2-weird-red-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_weird_stats_CL`](tables/corelight-v2-weird-stats-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_wireguard_CL`](tables/corelight-v2-wireguard-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_x509_CL`](tables/corelight-v2-x509-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_x509_red_CL`](tables/corelight-v2-x509-red-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`Corelight_v2_zeek_doctor_CL`](tables/corelight-v2-zeek-doctor-cl.md) | [Corelight](solutions/corelight.md) | [Corelight Connector Exporter](connectors/corelightconnectorexporter.md) |
| [`CortexXpanseAlerts_CL`](tables/cortexxpansealerts-cl.md) | [Palo Alto Cortex Xpanse CCF](solutions/palo-alto-cortex-xpanse-ccf.md) | [Palo Alto Cortex Xpanse (via Codeless Connector Framework)](connectors/paloaltoexpanseccpdefinition.md) |
| [`CriblAccess_CL`](tables/criblaccess-cl.md) | [Cribl](solutions/cribl.md) | [Cribl](connectors/cribl.md) |
| [`CriblAudit_CL`](tables/criblaudit-cl.md) | [Cribl](solutions/cribl.md) | [Cribl](connectors/cribl.md) |
| [`CriblInternal_CL`](tables/criblinternal-cl.md) | [Cribl](solutions/cribl.md) | [Cribl](connectors/cribl.md) |
| [`CriblUIAccess_CL`](tables/cribluiaccess-cl.md) | [Cribl](solutions/cribl.md) | [Cribl](connectors/cribl.md) |
| [`CrowdStrikeAlerts`](tables/crowdstrikealerts.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](connectors/crowdstrikeapiccpdefinition.md) |
| [`CrowdStrikeDetections`](tables/crowdstrikedetections.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](connectors/crowdstrikeapiccpdefinition.md) |
| [`CrowdStrikeHosts`](tables/crowdstrikehosts.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](connectors/crowdstrikeapiccpdefinition.md) |
| [`CrowdStrikeIncidents`](tables/crowdstrikeincidents.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](connectors/crowdstrikeapiccpdefinition.md) |
| [`CrowdStrikeVulnerabilities`](tables/crowdstrikevulnerabilities.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](connectors/crowdstrikeapiccpdefinition.md) |
| [`CrowdStrike_Additional_Events_CL`](tables/crowdstrike-additional-events-cl.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](connectors/crowdstrikefalcons3ccpdefinition.md)<br>[CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](connectors/crowdstrikereplicatorv2.md) |
| [`CrowdStrike_Audit_Events_CL`](tables/crowdstrike-audit-events-cl.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](connectors/crowdstrikefalcons3ccpdefinition.md) |
| [`CrowdStrike_Auth_Events_CL`](tables/crowdstrike-auth-events-cl.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](connectors/crowdstrikefalcons3ccpdefinition.md) |
| [`CrowdStrike_DNS_Events_CL`](tables/crowdstrike-dns-events-cl.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](connectors/crowdstrikefalcons3ccpdefinition.md) |
| [`CrowdStrike_File_Events_CL`](tables/crowdstrike-file-events-cl.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](connectors/crowdstrikefalcons3ccpdefinition.md) |
| [`CrowdStrike_Network_Events_CL`](tables/crowdstrike-network-events-cl.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](connectors/crowdstrikefalcons3ccpdefinition.md) |
| [`CrowdStrike_Process_Events_CL`](tables/crowdstrike-process-events-cl.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](connectors/crowdstrikefalcons3ccpdefinition.md) |
| [`CrowdStrike_Registry_Events_CL`](tables/crowdstrike-registry-events-cl.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](connectors/crowdstrikefalcons3ccpdefinition.md) |
| [`CrowdStrike_Secondary_Data_CL`](tables/crowdstrike-secondary-data-cl.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](connectors/crowdstrikefalcons3ccpdefinition.md)<br>[CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](connectors/crowdstrikereplicatorv2.md) |
| [`CrowdStrike_User_Events_CL`](tables/crowdstrike-user-events-cl.md) | [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](connectors/crowdstrikefalcons3ccpdefinition.md) |
| [`CyberArkEPM_CL`](tables/cyberarkepm-cl.md) | [CyberArkEPM](solutions/cyberarkepm.md) | [CyberArkEPM](connectors/cyberarkepm.md) |
| [`CyberArk_AuditEvents_CL`](tables/cyberark-auditevents-cl.md) | [CyberArkAudit](solutions/cyberarkaudit.md) | [CyberArkAudit](connectors/cyberarkaudit.md) |
| [`CyberSixgill_Alerts_CL`](tables/cybersixgill-alerts-cl.md) | [Cybersixgill-Actionable-Alerts](solutions/cybersixgill-actionable-alerts.md) | [Cybersixgill Actionable Alerts](connectors/cybersixgillactionablealerts.md) |
| [`CyberpionActionItems_CL`](tables/cyberpionactionitems-cl.md) | [IONIX](solutions/ionix.md) | [IONIX Security Logs](connectors/cyberpionsecuritylogs.md) |
| [`CybleVisionAlerts_CL`](tables/cyblevisionalerts-cl.md) | [Cyble Vision](solutions/cyble-vision.md) | [Cyble Vision Alerts](connectors/cyblevisionalerts.md) |
| [`CyeraAssets_CL`](tables/cyeraassets-cl.md) | [CyeraDSPM](solutions/cyeradspm.md) | [Cyera DSPM Microsoft Sentinel Data Connector](connectors/cyeradspmccf.md)<br>[Cyera DSPM Azure Functions Microsoft Sentinel Data Connector](connectors/cyerafunctionsconnector.md) |
| [`CyeraAssets_MS_CL`](tables/cyeraassets-ms-cl.md) | [CyeraDSPM](solutions/cyeradspm.md) | [Cyera DSPM Microsoft Sentinel Data Connector](connectors/cyeradspmccf.md)<br>[Cyera DSPM Azure Functions Microsoft Sentinel Data Connector](connectors/cyerafunctionsconnector.md) |
| [`CyeraClassifications_CL`](tables/cyeraclassifications-cl.md) | [CyeraDSPM](solutions/cyeradspm.md) | [Cyera DSPM Microsoft Sentinel Data Connector](connectors/cyeradspmccf.md)<br>[Cyera DSPM Azure Functions Microsoft Sentinel Data Connector](connectors/cyerafunctionsconnector.md) |
| [`CyeraIdentities_CL`](tables/cyeraidentities-cl.md) | [CyeraDSPM](solutions/cyeradspm.md) | [Cyera DSPM Microsoft Sentinel Data Connector](connectors/cyeradspmccf.md)<br>[Cyera DSPM Azure Functions Microsoft Sentinel Data Connector](connectors/cyerafunctionsconnector.md) |
| [`CyeraIssues_CL`](tables/cyeraissues-cl.md) | [CyeraDSPM](solutions/cyeradspm.md) | [Cyera DSPM Microsoft Sentinel Data Connector](connectors/cyeradspmccf.md)<br>[Cyera DSPM Azure Functions Microsoft Sentinel Data Connector](connectors/cyerafunctionsconnector.md) |
| [`CyfirmaASCertificatesAlerts_CL`](tables/cyfirmaascertificatesalerts-cl.md) | [Cyfirma Attack Surface](solutions/cyfirma-attack-surface.md) | [CYFIRMA Attack Surface](connectors/cyfirmaattacksurfacealertsconnector.md) |
| [`CyfirmaASCloudWeaknessAlerts_CL`](tables/cyfirmaascloudweaknessalerts-cl.md) | [Cyfirma Attack Surface](solutions/cyfirma-attack-surface.md) | [CYFIRMA Attack Surface](connectors/cyfirmaattacksurfacealertsconnector.md) |
| [`CyfirmaASConfigurationAlerts_CL`](tables/cyfirmaasconfigurationalerts-cl.md) | [Cyfirma Attack Surface](solutions/cyfirma-attack-surface.md) | [CYFIRMA Attack Surface](connectors/cyfirmaattacksurfacealertsconnector.md) |
| [`CyfirmaASDomainIPReputationAlerts_CL`](tables/cyfirmaasdomainipreputationalerts-cl.md) | [Cyfirma Attack Surface](solutions/cyfirma-attack-surface.md) | [CYFIRMA Attack Surface](connectors/cyfirmaattacksurfacealertsconnector.md) |
| [`CyfirmaASDomainIPVulnerabilityAlerts_CL`](tables/cyfirmaasdomainipvulnerabilityalerts-cl.md) | [Cyfirma Attack Surface](solutions/cyfirma-attack-surface.md) | [CYFIRMA Attack Surface](connectors/cyfirmaattacksurfacealertsconnector.md) |
| [`CyfirmaASOpenPortsAlerts_CL`](tables/cyfirmaasopenportsalerts-cl.md) | [Cyfirma Attack Surface](solutions/cyfirma-attack-surface.md) | [CYFIRMA Attack Surface](connectors/cyfirmaattacksurfacealertsconnector.md) |
| [`CyfirmaBIDomainITAssetAlerts_CL`](tables/cyfirmabidomainitassetalerts-cl.md) | [Cyfirma Brand Intelligence](solutions/cyfirma-brand-intelligence.md) | [CYFIRMA Brand Intelligence](connectors/cyfirmabrandintelligencealertsdc.md) |
| [`CyfirmaBIExecutivePeopleAlerts_CL`](tables/cyfirmabiexecutivepeoplealerts-cl.md) | [Cyfirma Brand Intelligence](solutions/cyfirma-brand-intelligence.md) | [CYFIRMA Brand Intelligence](connectors/cyfirmabrandintelligencealertsdc.md) |
| [`CyfirmaBIMaliciousMobileAppsAlerts_CL`](tables/cyfirmabimaliciousmobileappsalerts-cl.md) | [Cyfirma Brand Intelligence](solutions/cyfirma-brand-intelligence.md) | [CYFIRMA Brand Intelligence](connectors/cyfirmabrandintelligencealertsdc.md) |
| [`CyfirmaBIProductSolutionAlerts_CL`](tables/cyfirmabiproductsolutionalerts-cl.md) | [Cyfirma Brand Intelligence](solutions/cyfirma-brand-intelligence.md) | [CYFIRMA Brand Intelligence](connectors/cyfirmabrandintelligencealertsdc.md) |
| [`CyfirmaBISocialHandlersAlerts_CL`](tables/cyfirmabisocialhandlersalerts-cl.md) | [Cyfirma Brand Intelligence](solutions/cyfirma-brand-intelligence.md) | [CYFIRMA Brand Intelligence](connectors/cyfirmabrandintelligencealertsdc.md) |
| [`CyfirmaCampaigns_CL`](tables/cyfirmacampaigns-cl.md) | [Cyfirma Cyber Intelligence](solutions/cyfirma-cyber-intelligence.md) | [CYFIRMA Cyber Intelligence](connectors/cyfirmacyberintelligencedc.md) |
| [`CyfirmaCompromisedAccounts_CL`](tables/cyfirmacompromisedaccounts-cl.md) | [Cyfirma Compromised Accounts](solutions/cyfirma-compromised-accounts.md) | [CYFIRMA Compromised Accounts](connectors/cyfirmacompromisedaccountsdataconnector.md) |
| [`CyfirmaDBWMDarkWebAlerts_CL`](tables/cyfirmadbwmdarkwebalerts-cl.md) | [Cyfirma Digital Risk](solutions/cyfirma-digital-risk.md) | [CYFIRMA Digital Risk](connectors/cyfirmadigitalriskalertsconnector.md) |
| [`CyfirmaDBWMPhishingAlerts_CL`](tables/cyfirmadbwmphishingalerts-cl.md) | [Cyfirma Digital Risk](solutions/cyfirma-digital-risk.md) | [CYFIRMA Digital Risk](connectors/cyfirmadigitalriskalertsconnector.md) |
| [`CyfirmaDBWMRansomwareAlerts_CL`](tables/cyfirmadbwmransomwarealerts-cl.md) | [Cyfirma Digital Risk](solutions/cyfirma-digital-risk.md) | [CYFIRMA Digital Risk](connectors/cyfirmadigitalriskalertsconnector.md) |
| [`CyfirmaIndicators_CL`](tables/cyfirmaindicators-cl.md) | [Cyfirma Cyber Intelligence](solutions/cyfirma-cyber-intelligence.md) | [CYFIRMA Cyber Intelligence](connectors/cyfirmacyberintelligencedc.md) |
| [`CyfirmaMalware_CL`](tables/cyfirmamalware-cl.md) | [Cyfirma Cyber Intelligence](solutions/cyfirma-cyber-intelligence.md) | [CYFIRMA Cyber Intelligence](connectors/cyfirmacyberintelligencedc.md) |
| [`CyfirmaSPEConfidentialFilesAlerts_CL`](tables/cyfirmaspeconfidentialfilesalerts-cl.md) | [Cyfirma Digital Risk](solutions/cyfirma-digital-risk.md) | [CYFIRMA Digital Risk](connectors/cyfirmadigitalriskalertsconnector.md) |
| [`CyfirmaSPEPIIAndCIIAlerts_CL`](tables/cyfirmaspepiiandciialerts-cl.md) | [Cyfirma Digital Risk](solutions/cyfirma-digital-risk.md) | [CYFIRMA Digital Risk](connectors/cyfirmadigitalriskalertsconnector.md) |
| [`CyfirmaSPESocialThreatAlerts_CL`](tables/cyfirmaspesocialthreatalerts-cl.md) | [Cyfirma Digital Risk](solutions/cyfirma-digital-risk.md) | [CYFIRMA Digital Risk](connectors/cyfirmadigitalriskalertsconnector.md) |
| [`CyfirmaSPESourceCodeAlerts_CL`](tables/cyfirmaspesourcecodealerts-cl.md) | [Cyfirma Digital Risk](solutions/cyfirma-digital-risk.md) | [CYFIRMA Digital Risk](connectors/cyfirmadigitalriskalertsconnector.md) |
| [`CyfirmaThreatActors_CL`](tables/cyfirmathreatactors-cl.md) | [Cyfirma Cyber Intelligence](solutions/cyfirma-cyber-intelligence.md) | [CYFIRMA Cyber Intelligence](connectors/cyfirmacyberintelligencedc.md) |
| [`CyfirmaVulnerabilities_CL`](tables/cyfirmavulnerabilities-cl.md) | [Cyfirma Vulnerabilities Intel](solutions/cyfirma-vulnerabilities-intel.md) | [CYFIRMA Vulnerabilities Intelligence](connectors/cyfirmavulnerabilitiesinteldc.md) |
| [`Cymru_Scout_Account_Usage_Data_CL`](tables/cymru-scout-account-usage-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) | [Team Cymru Scout Data Connector](connectors/teamcymruscout.md) |
| [`Cymru_Scout_Domain_Data_CL`](tables/cymru-scout-domain-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) | [Team Cymru Scout Data Connector](connectors/teamcymruscout.md) |
| [`Cymru_Scout_IP_Data_Communications_CL`](tables/cymru-scout-ip-data-communications-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) | [Team Cymru Scout Data Connector](connectors/teamcymruscout.md) |
| [`Cymru_Scout_IP_Data_Details_CL`](tables/cymru-scout-ip-data-details-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) | [Team Cymru Scout Data Connector](connectors/teamcymruscout.md) |
| [`Cymru_Scout_IP_Data_Fingerprints_CL`](tables/cymru-scout-ip-data-fingerprints-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) | [Team Cymru Scout Data Connector](connectors/teamcymruscout.md) |
| [`Cymru_Scout_IP_Data_Foundation_CL`](tables/cymru-scout-ip-data-foundation-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) | [Team Cymru Scout Data Connector](connectors/teamcymruscout.md) |
| [`Cymru_Scout_IP_Data_OpenPorts_CL`](tables/cymru-scout-ip-data-openports-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) | [Team Cymru Scout Data Connector](connectors/teamcymruscout.md) |
| [`Cymru_Scout_IP_Data_PDNS_CL`](tables/cymru-scout-ip-data-pdns-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) | [Team Cymru Scout Data Connector](connectors/teamcymruscout.md) |
| [`Cymru_Scout_IP_Data_Summary_Certs_CL`](tables/cymru-scout-ip-data-summary-certs-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) | [Team Cymru Scout Data Connector](connectors/teamcymruscout.md) |
| [`Cymru_Scout_IP_Data_Summary_Details_CL`](tables/cymru-scout-ip-data-summary-details-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) | [Team Cymru Scout Data Connector](connectors/teamcymruscout.md) |
| [`Cymru_Scout_IP_Data_Summary_Fingerprints_CL`](tables/cymru-scout-ip-data-summary-fingerprints-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) | [Team Cymru Scout Data Connector](connectors/teamcymruscout.md) |
| [`Cymru_Scout_IP_Data_Summary_OpenPorts_CL`](tables/cymru-scout-ip-data-summary-openports-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) | [Team Cymru Scout Data Connector](connectors/teamcymruscout.md) |
| [`Cymru_Scout_IP_Data_Summary_PDNS_CL`](tables/cymru-scout-ip-data-summary-pdns-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) | [Team Cymru Scout Data Connector](connectors/teamcymruscout.md) |
| [`Cymru_Scout_IP_Data_x509_CL`](tables/cymru-scout-ip-data-x509-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) | [Team Cymru Scout Data Connector](connectors/teamcymruscout.md) |
| [`CynerioEvent_CL`](tables/cynerioevent-cl.md) | [Cynerio](solutions/cynerio.md) | [Cynerio Security Events](connectors/cyneriosecurityevents.md) |

## D

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`DNS_Summarized_Logs_ip_CL`](tables/dns-summarized-logs-ip-cl.md) | [DNS Essentials](solutions/dns-essentials.md) |  |
| [`DNS_Summarized_Logs_sourceInfo_CL`](tables/dns-summarized-logs-sourceinfo-cl.md) | [DNS Essentials](solutions/dns-essentials.md) |  |
| [`DataminrPulse_Alerts_CL`](tables/dataminrpulse-alerts-cl.md) | [Dataminr Pulse](solutions/dataminr-pulse.md) | [Dataminr Pulse Alerts Data Connector](connectors/dataminrpulsealerts.md) |
| [`DataverseActivity`](tables/dataverseactivity.md) | [Microsoft Business Applications](solutions/microsoft-business-applications.md) |  |
| [`Detections_Data_CL`](tables/detections-data-cl.md) | [Vectra XDR](solutions/vectra-xdr.md) | [Vectra XDR](connectors/vectraxdr.md) |
| [`DeviceEvents`](tables/deviceevents.md) | [ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[CybersecurityMaturityModelCertification(CMMC)2.0](solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)<br>[Endpoint Threat Protection Essentials](solutions/endpoint-threat-protection-essentials.md)<br>[+7 more](tables/deviceevents.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`DeviceFileCertificateInfo`](tables/devicefilecertificateinfo.md) | [Microsoft Defender XDR](solutions/microsoft-defender-xdr.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`DeviceFileEvents`](tables/devicefileevents.md) | [ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[CybersecurityMaturityModelCertification(CMMC)2.0](solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)<br>[DORA Compliance](solutions/dora-compliance.md)<br>[+13 more](tables/devicefileevents.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`DeviceImageLoadEvents`](tables/deviceimageloadevents.md) | [FalconFriday](solutions/falconfriday.md)<br>[Microsoft Defender XDR](solutions/microsoft-defender-xdr.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`DeviceInfo`](tables/deviceinfo.md) | [HIPAA Compliance](solutions/hipaa-compliance.md)<br>[Microsoft Business Applications](solutions/microsoft-business-applications.md)<br>[Microsoft Defender XDR](solutions/microsoft-defender-xdr.md)<br>[+3 more](tables/deviceinfo.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`DeviceLogonEvents`](tables/devicelogonevents.md) | [ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[FalconFriday](solutions/falconfriday.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[+2 more](tables/devicelogonevents.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`DeviceNetworkEvents`](tables/devicenetworkevents.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[Cyware](solutions/cyware.md)<br>[+12 more](tables/devicenetworkevents.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`DeviceNetworkInfo`](tables/devicenetworkinfo.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[Microsoft Defender XDR](solutions/microsoft-defender-xdr.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`DeviceProcessEvents`](tables/deviceprocessevents.md) | [Attacker Tools Threat Protection Essentials](solutions/attacker-tools-threat-protection-essentials.md)<br>[ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[Cyware](solutions/cyware.md)<br>[+12 more](tables/deviceprocessevents.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`DeviceRegistryEvents`](tables/deviceregistryevents.md) | [ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[FalconFriday](solutions/falconfriday.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[+3 more](tables/deviceregistryevents.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`DeviceTvmSecureConfigurationAssessment`](tables/devicetvmsecureconfigurationassessment.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`DeviceTvmSoftwareInventory`](tables/devicetvmsoftwareinventory.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`DeviceTvmSoftwareVulnerabilities`](tables/devicetvmsoftwarevulnerabilities.md) | [Microsoft Defender XDR](solutions/microsoft-defender-xdr.md)<br>[SOC Handbook](solutions/soc-handbook.md) |  |
| [`DeviceTvmSoftwareVulnerabilitiesKB`](tables/devicetvmsoftwarevulnerabilitieskb.md) | [Microsoft Defender XDR](solutions/microsoft-defender-xdr.md) |  |
| [`DigitalShadows_CL`](tables/digitalshadows-cl.md) | [Digital Shadows](solutions/digital-shadows.md) | [Digital Shadows Searchlight](connectors/digitalshadowssearchlightazurefunctions.md) |
| [`DnsEvents`](tables/dnsevents.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[Attacker Tools Threat Protection Essentials](solutions/attacker-tools-threat-protection-essentials.md)<br>[ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[+12 more](tables/dnsevents.md) | [DNS](connectors/dns.md) |
| [`DnsInventory`](tables/dnsinventory.md) | [SOC Handbook](solutions/soc-handbook.md)<br>[Windows Server DNS](solutions/windows-server-dns.md) | [DNS](connectors/dns.md) |
| [`Domain_Data_CL`](tables/domain-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`DoppelTable_CL`](tables/doppeltable-cl.md) | [Doppel](solutions/doppel.md) | [Doppel Data Connector](connectors/doppel-dataconnector.md) |
| [`DragosAlerts_CL`](tables/dragosalerts-cl.md) | [Dragos](solutions/dragos.md) | [ Dragos Notifications via Cloud Sitestore](connectors/dragossitestoreccp.md) |
| [`DruvaInsyncEvents_CL`](tables/druvainsyncevents-cl.md) | [DruvaDataSecurityCloud](solutions/druvadatasecuritycloud.md) | [Druva Events Connector](connectors/druvaeventccpdefinition.md) |
| [`DruvaPlatformEvents_CL`](tables/druvaplatformevents-cl.md) | [DruvaDataSecurityCloud](solutions/druvadatasecuritycloud.md) | [Druva Events Connector](connectors/druvaeventccpdefinition.md) |
| [`DruvaSecurityEvents_CL`](tables/druvasecurityevents-cl.md) | [DruvaDataSecurityCloud](solutions/druvadatasecuritycloud.md) | [Druva Events Connector](connectors/druvaeventccpdefinition.md) |
| [`DuoSecurityAuthentication_CL`](tables/duosecurityauthentication-cl.md) | [Threat Intelligence](solutions/threat-intelligence.md)<br>[Threat Intelligence (NEW)](solutions/threat-intelligence-new.md) |  |
| [`Dynamics365Activity`](tables/dynamics365activity.md) | [ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[Dynamics 365](solutions/dynamics-365.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[+2 more](tables/dynamics365activity.md) | [Dynamics 365](connectors/dynamics365.md) |
| [`DynatraceAttacks_CL`](tables/dynatraceattacks-cl.md) | [Dynatrace](solutions/dynatrace.md) | [Dynatrace Attacks](connectors/dynatraceattacks.md) |
| [`DynatraceAuditLogs_CL`](tables/dynatraceauditlogs-cl.md) | [Dynatrace](solutions/dynatrace.md) | [Dynatrace Audit Logs](connectors/dynatraceauditlogs.md) |
| [`DynatraceProblems_CL`](tables/dynatraceproblems-cl.md) | [Dynatrace](solutions/dynatrace.md) | [Dynatrace Problems](connectors/dynatraceproblems.md) |
| [`DynatraceSecurityProblems_CL`](tables/dynatracesecurityproblems-cl.md) | [Dynatrace](solutions/dynatrace.md) | [Dynatrace Runtime Vulnerabilities](connectors/dynatraceruntimevulnerabilities.md) |
| [`darktrace_model_alerts_CL`](tables/darktrace-model-alerts-cl.md) | [Darktrace](solutions/darktrace.md) | [Darktrace Connector for Microsoft Sentinel REST API](connectors/darktracerestconnector.md) |
| [`datawizaserveraccess_CL`](tables/datawizaserveraccess-cl.md) | [Datawiza](solutions/datawiza.md) | [Datawiza DAP](connectors/datawizadapsolution.md) |
| [`dossier_atp_CL`](tables/dossier-atp-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`dossier_atp_threat_CL`](tables/dossier-atp-threat-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`dossier_dns_CL`](tables/dossier-dns-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`dossier_geo_CL`](tables/dossier-geo-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`dossier_infoblox_web_cat_CL`](tables/dossier-infoblox-web-cat-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`dossier_inforank_CL`](tables/dossier-inforank-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`dossier_malware_analysis_v3_CL`](tables/dossier-malware-analysis-v3-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`dossier_nameserver_CL`](tables/dossier-nameserver-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`dossier_nameserver_matches_CL`](tables/dossier-nameserver-matches-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`dossier_ptr_CL`](tables/dossier-ptr-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`dossier_rpz_feeds_CL`](tables/dossier-rpz-feeds-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`dossier_rpz_feeds_records_CL`](tables/dossier-rpz-feeds-records-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`dossier_threat_actor_CL`](tables/dossier-threat-actor-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`dossier_tld_risk_CL`](tables/dossier-tld-risk-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`dossier_whitelist_CL`](tables/dossier-whitelist-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`dossier_whois_CL`](tables/dossier-whois-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |

## E

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`ESETInspect_CL`](tables/esetinspect-cl.md) | [ESET Inspect](solutions/eset-inspect.md) | [ESET Inspect](connectors/esetinspect.md) |
| [`ESIExchangeConfig_CL`](tables/esiexchangeconfig-cl.md) | [Microsoft Exchange Security - Exchange On-Premises](solutions/microsoft-exchange-security-exchange-on-premises.md) | [Exchange Security Insights On-Premises Collector](connectors/esi-exchangeonpremisescollector.md) |
| [`ESIExchangeOnlineConfig_CL`](tables/esiexchangeonlineconfig-cl.md) | [Microsoft Exchange Security - Exchange Online](solutions/microsoft-exchange-security-exchange-online.md) | [Exchange Security Insights Online Collector](connectors/esi-exchangeonlinecollector.md) |
| [`EgressDefend_CL`](tables/egressdefend-cl.md) | [Egress Defend](solutions/egress-defend.md) | [Egress Defend](connectors/egressdefendpolling.md) |
| [`EgressEvents_CL`](tables/egressevents-cl.md) | [Egress Iris](solutions/egress-iris.md) | [Egress Iris Connector](connectors/egresssiempolling.md) |
| [`ElasticAgentLogs_CL`](tables/elasticagentlogs-cl.md) | [ElasticAgent](solutions/elasticagent.md) | [Elastic Agent](connectors/elasticagent.md) |
| [`EmailAttachmentInfo`](tables/emailattachmentinfo.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[Microsoft Defender XDR](solutions/microsoft-defender-xdr.md)<br>[Microsoft Defender for Office 365](solutions/microsoft-defender-for-office-365.md)<br>[+2 more](tables/emailattachmentinfo.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`EmailEvents`](tables/emailevents.md) | [Business Email Compromise - Financial Fraud](solutions/business-email-compromise-financial-fraud.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[Microsoft Business Applications](solutions/microsoft-business-applications.md)<br>[+8 more](tables/emailevents.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`EmailPostDeliveryEvents`](tables/emailpostdeliveryevents.md) | [Microsoft Defender XDR](solutions/microsoft-defender-xdr.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`EmailUrlInfo`](tables/emailurlinfo.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[Microsoft Defender XDR](solutions/microsoft-defender-xdr.md)<br>[Microsoft Defender for Office 365](solutions/microsoft-defender-for-office-365.md)<br>[+4 more](tables/emailurlinfo.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`EnrichedMicrosoft365AuditLogs`](tables/enrichedmicrosoft365auditlogs.md) | [Global Secure Access](solutions/global-secure-access.md) |  |
| [`Entities_Data_CL`](tables/entities-data-cl.md) | [Vectra XDR](solutions/vectra-xdr.md) | [Vectra XDR](connectors/vectraxdr.md) |
| [`Entity_Scoring_Data_CL`](tables/entity-scoring-data-cl.md) | [Vectra XDR](solutions/vectra-xdr.md) | [Vectra XDR](connectors/vectraxdr.md) |
| [`ErmesBrowserSecurityEvents_CL`](tables/ermesbrowsersecurityevents-cl.md) | [Ermes Browser Security](solutions/ermes-browser-security.md) | [Ermes Browser Security Events](connectors/ermesbrowsersecurityevents.md) |
| [`Event`](tables/event.md) | [ALC-WebCTRL](solutions/alc-webctrl.md)<br>[Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[Attacker Tools Threat Protection Essentials](solutions/attacker-tools-threat-protection-essentials.md)<br>[+21 more](tables/event.md) | [Automated Logic WebCTRL ](connectors/automatedlogicwebctrl.md)<br>[[Deprecated] Microsoft Exchange Logs and Events](connectors/esi-exchangeadminauditlogevents.md)<br>[Microsoft Exchange Admin Audit Logs by Event Logs](connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md)<br>[Microsoft Exchange Logs and Events](connectors/esi-opt2exchangeserverseventlogs.md)<br>[Mimecast Intelligence for Microsoft - Microsoft Sentinel](connectors/mimecasttiregionalconnectorazurefunctions.md) |
| [`ExchangeHttpProxy_CL`](tables/exchangehttpproxy-cl.md) | [Microsoft Exchange Security - Exchange On-Premises](solutions/microsoft-exchange-security-exchange-on-premises.md) | [[Deprecated] Microsoft Exchange Logs and Events](connectors/esi-exchangeadminauditlogevents.md)<br>[Microsoft Exchange HTTP Proxy Logs](connectors/esi-opt7exchangehttpproxylogs.md) |
| [`ExtraHop_Detections_CL`](tables/extrahop-detections-cl.md) | [ExtraHop](solutions/extrahop.md) | [ExtraHop Detections Data Connector](connectors/extrahop.md) |
| [`eset_CL`](tables/eset-cl.md) | [Eset Security Management Center](solutions/eset-security-management-center.md) | [Eset Security Management Center](connectors/esetsmc.md) |
| [`event`](tables/event.md) | [ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md) |  |
| [`eventsapplicationdata_CL`](tables/eventsapplicationdata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`eventsauditdata_CL`](tables/eventsauditdata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`eventsconnectiondata_CL`](tables/eventsconnectiondata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`eventsincidentdata_CL`](tables/eventsincidentdata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`eventsnetworkdata_CL`](tables/eventsnetworkdata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`eventspagedata_CL`](tables/eventspagedata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |

## F

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`F5Telemetry_ASM_CL`](tables/f5telemetry-asm-cl.md) | [F5 Big-IP](solutions/f5-big-ip.md) | [F5 BIG-IP](connectors/f5bigip.md) |
| [`F5Telemetry_AVR_CL`](tables/f5telemetry-avr-cl.md) | [F5 Big-IP](solutions/f5-big-ip.md) |  |
| [`F5Telemetry_LTM_CL`](tables/f5telemetry-ltm-cl.md) | [F5 Big-IP](solutions/f5-big-ip.md) | [F5 BIG-IP](connectors/f5bigip.md) |
| [`F5Telemetry_system_CL`](tables/f5telemetry-system-cl.md) | [F5 Big-IP](solutions/f5-big-ip.md) | [F5 BIG-IP](connectors/f5bigip.md) |
| [`Failed_Range_To_Ingest_CL`](tables/failed-range-to-ingest-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`FinanceOperationsActivity_CL`](tables/financeoperationsactivity-cl.md) | [Microsoft Business Applications](solutions/microsoft-business-applications.md) | [Dynamics 365 Finance and Operations](connectors/dynamics365finance.md) |
| [`Fingerprints_Data_CL`](tables/fingerprints-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`Firework_CL`](tables/firework-cl.md) | [Flare](solutions/flare.md) | [Flare](connectors/flare.md) |
| [`FncEventsDetections_CL`](tables/fnceventsdetections-cl.md) | [Fortinet FortiNDR Cloud](solutions/fortinet-fortindr-cloud.md) | [Fortinet FortiNDR Cloud](connectors/fortinetfortindrclouddataconnector.md) |
| [`FncEventsObservation_CL`](tables/fnceventsobservation-cl.md) | [Fortinet FortiNDR Cloud](solutions/fortinet-fortindr-cloud.md) | [Fortinet FortiNDR Cloud](connectors/fortinetfortindrclouddataconnector.md) |
| [`FncEventsSuricata_CL`](tables/fnceventssuricata-cl.md) | [Fortinet FortiNDR Cloud](solutions/fortinet-fortindr-cloud.md) | [Fortinet FortiNDR Cloud](connectors/fortinetfortindrclouddataconnector.md) |
| [`ForcepointDLPEvents_CL`](tables/forcepointdlpevents-cl.md) | [Forcepoint DLP](solutions/forcepoint-dlp.md) | [Forcepoint DLP](connectors/forcepoint-dlp.md) |
| [`ForescoutComplianceStatus_CL`](tables/forescoutcompliancestatus-cl.md) | [ForescoutHostPropertyMonitor](solutions/forescouthostpropertymonitor.md) | [Forescout Host Property Monitor](connectors/forescouthostpropertymonitor.md) |
| [`ForescoutHostProperties_CL`](tables/forescouthostproperties-cl.md) | [ForescoutHostPropertyMonitor](solutions/forescouthostpropertymonitor.md) | [Forescout Host Property Monitor](connectors/forescouthostpropertymonitor.md) |
| [`ForescoutOtAlert_CL`](tables/forescoutotalert-cl.md) | [Forescout eyeInspect for OT Security](solutions/forescout-eyeinspect-for-ot-security.md) | [Forescout eyeInspect for OT Security](connectors/forescout-eyeinspect-for-ot-security.md) |
| [`ForescoutOtAsset_CL`](tables/forescoutotasset-cl.md) | [Forescout eyeInspect for OT Security](solutions/forescout-eyeinspect-for-ot-security.md) | [Forescout eyeInspect for OT Security](connectors/forescout-eyeinspect-for-ot-security.md) |
| [`ForescoutPolicyStatus_CL`](tables/forescoutpolicystatus-cl.md) | [ForescoutHostPropertyMonitor](solutions/forescouthostpropertymonitor.md) | [Forescout Host Property Monitor](connectors/forescouthostpropertymonitor.md) |
| [`feedly_indicators_CL`](tables/feedly-indicators-cl.md) | [Feedly](solutions/feedly.md) | [Feedly](connectors/feedly.md) |
| [`fluentbit_CL`](tables/fluentbit-cl.md) | [Azure Cloud NGFW By Palo Alto Networks](solutions/azure-cloud-ngfw-by-palo-alto-networks.md) | [Azure CloudNGFW By Palo Alto Networks](connectors/azurecloudngfwbypaloaltonetworks.md) |

## G

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`GCPApigee`](tables/gcpapigee.md) | [Google Apigee](solutions/google-apigee.md) | [Google ApigeeX (via Codeless Connector Framework)](connectors/googleapigeexlogsccpdefinition.md) |
| [`GCPAuditLogs`](tables/gcpauditlogs.md) | [Google Cloud Platform Audit Logs](solutions/google-cloud-platform-audit-logs.md)<br>[Multi Cloud Attack Coverage Essentials - Resource Abuse](solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md) | [GCP Pub/Sub Audit Logs](connectors/gcpauditlogsdefinition.md)<br>[GCP Pub/Sub Audit Logs](connectors/gcppub-subauditlogs.md) |
| [`GCPCDN`](tables/gcpcdn.md) | [GoogleCloudPlatformCDN](solutions/googlecloudplatformcdn.md) | [Google Cloud Platform CDN (via Codeless Connector Framework)](connectors/gcpcdnlogsccpdefinition.md) |
| [`GCPCloudRun`](tables/gcpcloudrun.md) | [Google Cloud Platform Cloud Run](solutions/google-cloud-platform-cloud-run.md) | [GCP Cloud Run (via Codeless Connector Framework)](connectors/gcpcloudrunlogs-connectordefinition.md) |
| [`GCPCloudSQL`](tables/gcpcloudsql.md) | [GoogleCloudPlatformSQL](solutions/googlecloudplatformsql.md) | [GCP Cloud SQL (via Codeless Connector Framework)](connectors/gcpcloudsqlccfdefinition.md) |
| [`GCPComputeEngine`](tables/gcpcomputeengine.md) | [Google Cloud Platform Compute Engine](solutions/google-cloud-platform-compute-engine.md) | [Google Cloud Platform Compute Engine (via Codeless Connector Framework)](connectors/gcpcomputeenginelogsccpdefinition.md) |
| [`GCPDNS`](tables/gcpdns.md) | [GoogleCloudPlatformDNS](solutions/googlecloudplatformdns.md) | [Google Cloud Platform DNS (via Codeless Connector Framework)](connectors/gcpdnslogsccpdefinition.md) |
| [`GCPFirewallLogs`](tables/gcpfirewalllogs.md) | [Google Cloud Platform Firewall Logs](solutions/google-cloud-platform-firewall-logs.md) | [GCP Pub/Sub Firewall Logs](connectors/gcpfirewalllogsccpdefinition.md) |
| [`GCPIAM`](tables/gcpiam.md) | [GoogleCloudPlatformIAM](solutions/googlecloudplatformiam.md) | [Google Cloud Platform IAM (via Codeless Connector Framework)](connectors/gcpiamccpdefinition.md) |
| [`GCPIDS`](tables/gcpids.md) | [GoogleCloudPlatformIDS](solutions/googlecloudplatformids.md) | [Google Cloud Platform Cloud IDS (via Codeless Connector Framework)](connectors/gcpcloudidslogsccpdefinition.md) |
| [`GCPLoadBalancerLogs_CL`](tables/gcploadbalancerlogs-cl.md) | [Google Cloud Platform Load Balancer Logs](solutions/google-cloud-platform-load-balancer-logs.md) | [GCP Pub/Sub Load Balancer Logs (via Codeless Connector Platform).](connectors/gcpfloadbalancerlogsccpdefinition.md) |
| [`GCPMonitoring`](tables/gcpmonitoring.md) | [Google Cloud Platform Cloud Monitoring](solutions/google-cloud-platform-cloud-monitoring.md) | [Google Cloud Platform Cloud Monitoring (via Codeless Connector Framework)](connectors/gcpmonitorccpdefinition.md) |
| [`GCPNAT`](tables/gcpnat.md) | [GoogleCloudPlatformNAT](solutions/googlecloudplatformnat.md) | [Google Cloud Platform NAT (via Codeless Connector Framework)](connectors/gcpnatlogsccpdefinition.md) |
| [`GCPNATAudit`](tables/gcpnataudit.md) | [GoogleCloudPlatformNAT](solutions/googlecloudplatformnat.md) | [Google Cloud Platform NAT (via Codeless Connector Framework)](connectors/gcpnatlogsccpdefinition.md) |
| [`GCPResourceManager`](tables/gcpresourcemanager.md) | [GoogleCloudPlatformResourceManager](solutions/googlecloudplatformresourcemanager.md) | [Google Cloud Platform Resource Manager (via Codeless Connector Framework)](connectors/gcpresourcemanagerlogsccfdefinition.md) |
| [`GCPVPCFlow`](tables/gcpvpcflow.md) | [Google Cloud Platform VPC Flow Logs](solutions/google-cloud-platform-vpc-flow-logs.md) | [GCP Pub/Sub VPC Flow Logs (via Codeless Connector Framework)](connectors/gcpvpcflowlogsccpdefinition.md) |
| [`GCP_DNS_CL`](tables/gcp-dns-cl.md) | [Dataminr Pulse](solutions/dataminr-pulse.md)<br>[GoogleCloudPlatformDNS](solutions/googlecloudplatformdns.md) | [[DEPRECATED] Google Cloud Platform DNS](connectors/gcpdnsdataconnector.md) |
| [`GCP_IAM_CL`](tables/gcp-iam-cl.md) | [ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[GoogleCloudPlatformIAM](solutions/googlecloudplatformiam.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[+2 more](tables/gcp-iam-cl.md) | [[DEPRECATED] Google Cloud Platform IAM](connectors/gcpiamdataconnector.md) |
| [`GCP_MONITORING_CL`](tables/gcp-monitoring-cl.md) | [Google Cloud Platform Cloud Monitoring](solutions/google-cloud-platform-cloud-monitoring.md) | [[DEPRECATED] Google Cloud Platform Cloud Monitoring](connectors/gcpmonitordataconnector.md) |
| [`GIBTIAAPTThreatActor_CL`](tables/gibtiaaptthreatactor-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIAAPTThreatReports_CL`](tables/gibtiaaptthreatreports-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIAAttacksDDoS_CL`](tables/gibtiaattacksddos-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIAAttacksDeface_CL`](tables/gibtiaattacksdeface-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIAAttacksPhishingKit_CL`](tables/gibtiaattacksphishingkit-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIABPPhishingKit_CL`](tables/gibtiabpphishingkit-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIABPPhishing_CL`](tables/gibtiabpphishing-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIACompromisedCard_CL`](tables/gibtiacompromisedcard-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIACompromisedIMEI_CL`](tables/gibtiacompromisedimei-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIACompromisedMule_CL`](tables/gibtiacompromisedmule-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIAHIThreatActor_CL`](tables/gibtiahithreatactor-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIAHIThreatReports_CL`](tables/gibtiahithreatreports-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIAMalwareCNC_CL`](tables/gibtiamalwarecnc-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIAOSIGitLeak_CL`](tables/gibtiaosigitleak-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIAOSIPublicLeak_CL`](tables/gibtiaosipublicleak-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIAOSIVulnerability_CL`](tables/gibtiaosivulnerability-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIASuspiciousIPOpenProxy_CL`](tables/gibtiasuspiciousipopenproxy-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIASuspiciousIPSocksProxy_CL`](tables/gibtiasuspiciousipsocksproxy-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIASuspiciousIPTorNode_CL`](tables/gibtiasuspiciousiptornode-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTIATargetedMalware_CL`](tables/gibtiatargetedmalware-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GIBTechTable_CL`](tables/gibtechtable-cl.md) | [Group-IB](solutions/group-ib.md) |  |
| [`GKEAPIServer`](tables/gkeapiserver.md) | [Google Kubernetes Engine](solutions/google-kubernetes-engine.md) | [Google Kubernetes Engine (via Codeless Connector Framework)](connectors/gkeccpdefinition.md) |
| [`GKEApplication`](tables/gkeapplication.md) | [Google Kubernetes Engine](solutions/google-kubernetes-engine.md) | [Google Kubernetes Engine (via Codeless Connector Framework)](connectors/gkeccpdefinition.md) |
| [`GKEAudit`](tables/gkeaudit.md) | [Google Kubernetes Engine](solutions/google-kubernetes-engine.md) | [Google Kubernetes Engine (via Codeless Connector Framework)](connectors/gkeccpdefinition.md) |
| [`GKEControllerManager`](tables/gkecontrollermanager.md) | [Google Kubernetes Engine](solutions/google-kubernetes-engine.md) | [Google Kubernetes Engine (via Codeless Connector Framework)](connectors/gkeccpdefinition.md) |
| [`GKEHPADecision`](tables/gkehpadecision.md) | [Google Kubernetes Engine](solutions/google-kubernetes-engine.md) | [Google Kubernetes Engine (via Codeless Connector Framework)](connectors/gkeccpdefinition.md) |
| [`GKEScheduler`](tables/gkescheduler.md) | [Google Kubernetes Engine](solutions/google-kubernetes-engine.md) | [Google Kubernetes Engine (via Codeless Connector Framework)](connectors/gkeccpdefinition.md) |
| [`GWorkspace_ReportsAPI_access_transparency_CL`](tables/gworkspace-reportsapi-access-transparency-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`GWorkspace_ReportsAPI_admin_CL`](tables/gworkspace-reportsapi-admin-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) | [[DEPRECATED] Google Workspace (G Suite)](connectors/googleworkspacereportsapi.md) |
| [`GWorkspace_ReportsAPI_calendar_CL`](tables/gworkspace-reportsapi-calendar-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) | [[DEPRECATED] Google Workspace (G Suite)](connectors/googleworkspacereportsapi.md) |
| [`GWorkspace_ReportsAPI_chat_CL`](tables/gworkspace-reportsapi-chat-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`GWorkspace_ReportsAPI_chrome_CL`](tables/gworkspace-reportsapi-chrome-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`GWorkspace_ReportsAPI_context_aware_access_CL`](tables/gworkspace-reportsapi-context-aware-access-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`GWorkspace_ReportsAPI_data_studio_CL`](tables/gworkspace-reportsapi-data-studio-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`GWorkspace_ReportsAPI_drive_CL`](tables/gworkspace-reportsapi-drive-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) | [[DEPRECATED] Google Workspace (G Suite)](connectors/googleworkspacereportsapi.md) |
| [`GWorkspace_ReportsAPI_gcp_CL`](tables/gworkspace-reportsapi-gcp-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`GWorkspace_ReportsAPI_gplus_CL`](tables/gworkspace-reportsapi-gplus-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`GWorkspace_ReportsAPI_groups_CL`](tables/gworkspace-reportsapi-groups-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`GWorkspace_ReportsAPI_groups_enterprise_CL`](tables/gworkspace-reportsapi-groups-enterprise-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`GWorkspace_ReportsAPI_jamboard_CL`](tables/gworkspace-reportsapi-jamboard-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`GWorkspace_ReportsAPI_keep_CL`](tables/gworkspace-reportsapi-keep-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`GWorkspace_ReportsAPI_login_CL`](tables/gworkspace-reportsapi-login-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) | [[DEPRECATED] Google Workspace (G Suite)](connectors/googleworkspacereportsapi.md) |
| [`GWorkspace_ReportsAPI_meet_CL`](tables/gworkspace-reportsapi-meet-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`GWorkspace_ReportsAPI_mobile_CL`](tables/gworkspace-reportsapi-mobile-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) | [[DEPRECATED] Google Workspace (G Suite)](connectors/googleworkspacereportsapi.md) |
| [`GWorkspace_ReportsAPI_rules_CL`](tables/gworkspace-reportsapi-rules-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`GWorkspace_ReportsAPI_saml_CL`](tables/gworkspace-reportsapi-saml-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`GWorkspace_ReportsAPI_token_CL`](tables/gworkspace-reportsapi-token-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) | [[DEPRECATED] Google Workspace (G Suite)](connectors/googleworkspacereportsapi.md) |
| [`GWorkspace_ReportsAPI_user_accounts_CL`](tables/gworkspace-reportsapi-user-accounts-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) | [[DEPRECATED] Google Workspace (G Suite)](connectors/googleworkspacereportsapi.md) |
| [`Garrison_ULTRARemoteLogs_CL`](tables/garrison-ultraremotelogs-cl.md) | [Garrison ULTRA](solutions/garrison-ultra.md) | [Garrison ULTRA Remote Logs](connectors/garrisonultraremotelogs.md) |
| [`Gigamon_CL`](tables/gigamon-cl.md) | [Gigamon Connector](solutions/gigamon-connector.md) | [Gigamon AMX Data Connector](connectors/gigamondataconnector.md) |
| [`GitHubAuditLogPolling_CL`](tables/githubauditlogpolling-cl.md) | [AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[GitHub](solutions/github.md) | [[Deprecated] GitHub Enterprise Audit Log](connectors/githubecauditlogpolling.md) |
| [`GitHubAuditLogsV2_CL`](tables/githubauditlogsv2-cl.md) | [GitHub](solutions/github.md) | [GitHub Enterprise Audit Log (via Codeless Connector Framework) (Preview)](connectors/githubauditdefinitionv2.md) |
| [`GitHubRepoLogs_CL`](tables/githubrepologs-cl.md) | [GitHub](solutions/github.md) |  |
| [`GitHub_CL`](tables/github-cl.md) | [GitHub](solutions/github.md)<br>[Threat Intelligence](solutions/threat-intelligence.md)<br>[Threat Intelligence (NEW)](solutions/threat-intelligence-new.md) |  |
| [`GoogleCloudSCC`](tables/googlecloudscc.md) | [Google Cloud Platform Security Command Center](solutions/google-cloud-platform-security-command-center.md) | [Google Security Command Center](connectors/googlesccdefinition.md) |
| [`GoogleWorkspaceReports`](tables/googleworkspacereports.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md) | [Google Workspace Activities (via Codeless Connector Framework)](connectors/googleworkspaceccpdefinition.md) |
| [`GoogleWorkspaceReports_CL`](tables/googleworkspacereports-cl.md) | [GoogleWorkspaceReports](solutions/googleworkspacereports.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`Guardian_CL`](tables/guardian-cl.md) | [AIShield AI Security Monitoring](solutions/aishield-ai-security-monitoring.md) |  |
| [`githubscanaudit_CL`](tables/githubscanaudit-cl.md) | [GitHub](solutions/github.md) | [GitHub (using Webhooks)](connectors/githubwebhook.md) |

## H

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`HYASProtectDnsSecurityLogs_CL`](tables/hyasprotectdnssecuritylogs-cl.md) | [HYAS Protect](solutions/hyas-protect.md) | [HYAS Protect](connectors/hyasprotect.md) |
| [`HackerViewLog_Azure_1_CL`](tables/hackerviewlog-azure-1-cl.md) | [CTM360](solutions/ctm360.md) | [HackerView Intergration](connectors/hvpollingidazurefunctions.md) |
| [`HalcyonAuthenticationEvents_CL`](tables/halcyonauthenticationevents-cl.md) | [Halcyon](solutions/halcyon.md) | [Halcyon Connector](connectors/halcyonpush.md) |
| [`HalcyonDnsActivity_CL`](tables/halcyondnsactivity-cl.md) | [Halcyon](solutions/halcyon.md) | [Halcyon Connector](connectors/halcyonpush.md) |
| [`HalcyonFileActivity_CL`](tables/halcyonfileactivity-cl.md) | [Halcyon](solutions/halcyon.md) | [Halcyon Connector](connectors/halcyonpush.md) |
| [`HalcyonNetworkSession_CL`](tables/halcyonnetworksession-cl.md) | [Halcyon](solutions/halcyon.md) | [Halcyon Connector](connectors/halcyonpush.md) |
| [`HalcyonProcessEvent_CL`](tables/halcyonprocessevent-cl.md) | [Halcyon](solutions/halcyon.md) | [Halcyon Connector](connectors/halcyonpush.md) |
| [`Health_Data_CL`](tables/health-data-cl.md) | [Vectra XDR](solutions/vectra-xdr.md) | [Vectra XDR](connectors/vectraxdr.md) |
| [`Heartbeat`](tables/heartbeat.md) | [CiscoASA](solutions/ciscoasa.md)<br>[DORA Compliance](solutions/dora-compliance.md)<br>[Forcepoint NGFW](solutions/forcepoint-ngfw.md)<br>[+7 more](tables/heartbeat.md) | [Cisco ASA/FTD via AMA](connectors/ciscoasaama.md) |
| [`Host_Name_Info_CL`](tables/host-name-info-cl.md) | [Infoblox](solutions/infoblox.md) |  |
| [`HuntingBookmark`](tables/huntingbookmark.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`heartbeat`](tables/heartbeat.md) | [SOX IT Compliance](solutions/sox-it-compliance.md) |  |

## I

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`IP_Space_Info_CL`](tables/ip-space-info-cl.md) | [Infoblox](solutions/infoblox.md) |  |
| [`IdentityDirectoryEvents`](tables/identitydirectoryevents.md) | [Microsoft Defender XDR](solutions/microsoft-defender-xdr.md)<br>[SOC Handbook](solutions/soc-handbook.md)<br>[SOX IT Compliance](solutions/sox-it-compliance.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`IdentityInfo`](tables/identityinfo.md) | [Azure Activity](solutions/azure-activity.md)<br>[AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[Business Email Compromise - Financial Fraud](solutions/business-email-compromise-financial-fraud.md)<br>[+14 more](tables/identityinfo.md) |  |
| [`IdentityLogonEvents`](tables/identitylogonevents.md) | [Microsoft Defender XDR](solutions/microsoft-defender-xdr.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`IdentityQueryEvents`](tables/identityqueryevents.md) | [Microsoft Defender XDR](solutions/microsoft-defender-xdr.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`Identity_Data_CL`](tables/identity-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`IllumioFlowEventsV2_CL`](tables/illumiofloweventsv2-cl.md) | [IllumioSaaS](solutions/illumiosaas.md) | [Illumio Saas](connectors/illumiosaasccfdefinition.md) |
| [`IllumioInsightsSummary_CL`](tables/illumioinsightssummary-cl.md) | [Illumio Insight](solutions/illumio-insight.md) | [Illumio Insights Summary](connectors/illumioinsightssummaryccp.md) |
| [`IllumioInsights_CL`](tables/illumioinsights-cl.md) | [Illumio Insight](solutions/illumio-insight.md) | [Illumio Insights](connectors/illumioinsightsdefinition.md) |
| [`Illumio_Auditable_Events_CL`](tables/illumio-auditable-events-cl.md) | [Dataminr Pulse](solutions/dataminr-pulse.md)<br>[IllumioSaaS](solutions/illumiosaas.md) | [Illumio SaaS](connectors/illumiosaasdataconnector.md) |
| [`Illumio_Flow_Events_CL`](tables/illumio-flow-events-cl.md) | [Dataminr Pulse](solutions/dataminr-pulse.md)<br>[IllumioSaaS](solutions/illumiosaas.md) | [Illumio SaaS](connectors/illumiosaasdataconnector.md) |
| [`Illumio_Workloads_Summarized_API_CL`](tables/illumio-workloads-summarized-api-cl.md) | [IllumioSaaS](solutions/illumiosaas.md) |  |
| [`ImpervaWAFCloudV2_CL`](tables/impervawafcloudv2-cl.md) | [ImpervaCloudWAF](solutions/impervacloudwaf.md) | [Imperva Cloud WAF](connectors/impervacloudwaflogsccfdefinition.md) |
| [`ImpervaWAFCloud_CL`](tables/impervawafcloud-cl.md) | [ImpervaCloudWAF](solutions/impervacloudwaf.md) | [Imperva Cloud WAF](connectors/impervawafcloudapi.md) |
| [`InfoSecAnalytics_CL`](tables/infosecanalytics-cl.md) | [AgileSec Analytics Connector](solutions/agilesec-analytics-connector.md) | [InfoSecGlobal Data Connector](connectors/infosecdataconnector.md) |
| [`InfobloxInsightAssets_CL`](tables/infobloxinsightassets-cl.md) | [Infoblox](solutions/infoblox.md)<br>[Infoblox SOC Insights](solutions/infoblox-soc-insights.md) |  |
| [`InfobloxInsightComments_CL`](tables/infobloxinsightcomments-cl.md) | [Infoblox](solutions/infoblox.md)<br>[Infoblox SOC Insights](solutions/infoblox-soc-insights.md) |  |
| [`InfobloxInsightEvents_CL`](tables/infobloxinsightevents-cl.md) | [Infoblox](solutions/infoblox.md)<br>[Infoblox SOC Insights](solutions/infoblox-soc-insights.md) |  |
| [`InfobloxInsightIndicators_CL`](tables/infobloxinsightindicators-cl.md) | [Infoblox](solutions/infoblox.md)<br>[Infoblox SOC Insights](solutions/infoblox-soc-insights.md) |  |
| [`InfobloxInsight_CL`](tables/infobloxinsight-cl.md) | [Infoblox](solutions/infoblox.md)<br>[Infoblox SOC Insights](solutions/infoblox-soc-insights.md) | [Infoblox SOC Insight Data Connector via REST API](connectors/infobloxsocinsightsdataconnector-api.md) |
| [`Infoblox_Config_Insight_Details_CL`](tables/infoblox-config-insight-details-cl.md) | [Infoblox](solutions/infoblox.md) |  |
| [`Infoblox_Config_Insights_CL`](tables/infoblox-config-insights-cl.md) | [Infoblox](solutions/infoblox.md) |  |
| [`Infoblox_Failed_Indicators_CL`](tables/infoblox-failed-indicators-cl.md) | [Infoblox](solutions/infoblox.md) | [Infoblox Data Connector via REST API](connectors/infobloxdataconnector.md) |
| [`InformationProtectionLogs_CL`](tables/informationprotectionlogs-cl.md) | [AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[CybersecurityMaturityModelCertification(CMMC)2.0](solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)<br>[+4 more](tables/informationprotectionlogs-cl.md) |  |
| [`InsightsMetrics`](tables/insightsmetrics.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[SOC Handbook](solutions/soc-handbook.md) |  |
| [`IntegrationTableIncidents_CL`](tables/integrationtableincidents-cl.md) | [ESET Protect Platform](solutions/eset-protect-platform.md) | [ESET Protect Platform](connectors/esetprotectplatform.md) |
| [`IntegrationTable_CL`](tables/integrationtable-cl.md) | [ESET Protect Platform](solutions/eset-protect-platform.md) | [ESET Protect Platform](connectors/esetprotectplatform.md) |
| [`IntuneAuditLogs`](tables/intuneauditlogs.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`IntuneDeviceComplianceOrg`](tables/intunedevicecomplianceorg.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`IntuneDevices`](tables/intunedevices.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`IntuneOperationalLogs`](tables/intuneoperationallogs.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`Ipinfo_ASN_CL`](tables/ipinfo-asn-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo ASN Data Connector](connectors/ipinfoasndataconnector.md) |
| [`Ipinfo_Abuse_CL`](tables/ipinfo-abuse-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo Abuse Data Connector](connectors/ipinfoabusedataconnector.md) |
| [`Ipinfo_Carrier_CL`](tables/ipinfo-carrier-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo Carrier Data Connector](connectors/ipinfocarrierdataconnector.md) |
| [`Ipinfo_Company_CL`](tables/ipinfo-company-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo Company Data Connector](connectors/ipinfocompanydataconnector.md) |
| [`Ipinfo_Country_CL`](tables/ipinfo-country-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo Country ASN Data Connector](connectors/ipinfocountrydataconnector.md) |
| [`Ipinfo_Domain_CL`](tables/ipinfo-domain-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo Domain Data Connector](connectors/ipinfodomaindataconnector.md) |
| [`Ipinfo_Location_CL`](tables/ipinfo-location-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo Iplocation Data Connector](connectors/ipinfoiplocationdataconnector.md) |
| [`Ipinfo_Location_extended_CL`](tables/ipinfo-location-extended-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo Iplocation Extended Data Connector](connectors/ipinfoiplocationextendeddataconnector.md) |
| [`Ipinfo_Privacy_CL`](tables/ipinfo-privacy-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo Privacy Data Connector](connectors/ipinfoprivacydataconnector.md) |
| [`Ipinfo_Privacy_extended_CL`](tables/ipinfo-privacy-extended-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo Privacy Extended Data Connector](connectors/ipinfoprivacyextendeddataconnector.md) |
| [`Ipinfo_RIRWHOIS_CL`](tables/ipinfo-rirwhois-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo RIRWHOIS Data Connector](connectors/ipinforirwhoisdataconnector.md) |
| [`Ipinfo_RWHOIS_CL`](tables/ipinfo-rwhois-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo RWHOIS Data Connector](connectors/ipinforwhoisdataconnector.md) |
| [`Ipinfo_WHOIS_ASN_CL`](tables/ipinfo-whois-asn-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo WHOIS ASN Data Connector](connectors/ipinfowhoisasndataconnector.md) |
| [`Ipinfo_WHOIS_MNT_CL`](tables/ipinfo-whois-mnt-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo WHOIS MNT Data Connector](connectors/ipinfowhoismntdataconnector.md) |
| [`Ipinfo_WHOIS_NET_CL`](tables/ipinfo-whois-net-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo WHOIS NET Data Connector](connectors/ipinfowhoisnetdataconnector.md) |
| [`Ipinfo_WHOIS_ORG_CL`](tables/ipinfo-whois-org-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo WHOIS ORG Data Connector](connectors/ipinfowhoisorgdataconnector.md) |
| [`Ipinfo_WHOIS_POC_CL`](tables/ipinfo-whois-poc-cl.md) | [IPinfo](solutions/ipinfo.md) | [IPinfo WHOIS POC Data Connector](connectors/ipinfowhoispocdataconnector.md) |
| [`Island_Admin_CL`](tables/island-admin-cl.md) | [Island](solutions/island.md) | [Island Enterprise Browser Admin Audit (Polling CCP)](connectors/island-admin-polling.md) |
| [`Island_User_CL`](tables/island-user-cl.md) | [Island](solutions/island.md) | [Island Enterprise Browser User Activity (Polling CCP)](connectors/island-user-polling.md) |
| [`iocsent_CL`](tables/iocsent-cl.md) | [Check Point Cyberint IOC](solutions/check-point-cyberint-ioc.md) | [Check Point Cyberint IOC Connector](connectors/checkpointcyberintioc.md) |

## J

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`JBossEvent_CL`](tables/jbossevent-cl.md) | [CustomLogsAma](solutions/customlogsama.md) | [Custom logs via AMA](connectors/customlogsviaama.md) |
| [`JBossLogs_CL`](tables/jbosslogs-cl.md) | [JBoss](solutions/jboss.md) | [[Deprecated] JBoss Enterprise Application Platform](connectors/jbosseap.md) |
| [`Jira_Audit_CL`](tables/jira-audit-cl.md) | [AtlassianJiraAudit](solutions/atlassianjiraaudit.md) | [Atlassian Jira Audit](connectors/jiraauditapi.md) |
| [`Jira_Audit_v2_CL`](tables/jira-audit-v2-cl.md) | [AtlassianJiraAudit](solutions/atlassianjiraaudit.md) | [Atlassian Jira Audit (using REST API)](connectors/jiraauditccpdefinition.md) |
| [`JuniperIDP_CL`](tables/juniperidp-cl.md) | [CustomLogsAma](solutions/customlogsama.md)<br>[JuniperIDP](solutions/juniperidp.md) | [Custom logs via AMA](connectors/customlogsviaama.md)<br>[[Deprecated] Juniper IDP](connectors/juniperidp.md) |
| [`jamfprotect_CL`](tables/jamfprotect-cl.md) | [Jamf Protect](solutions/jamf-protect.md) |  |
| [`jamfprotectalerts_CL`](tables/jamfprotectalerts-cl.md) | [Jamf Protect](solutions/jamf-protect.md) | [Jamf Protect Push Connector](connectors/jamfprotectpush.md) |
| [`jamfprotecttelemetryv2_CL`](tables/jamfprotecttelemetryv2-cl.md) | [Jamf Protect](solutions/jamf-protect.md) | [Jamf Protect Push Connector](connectors/jamfprotectpush.md) |
| [`jamfprotectunifiedlogs_CL`](tables/jamfprotectunifiedlogs-cl.md) | [Jamf Protect](solutions/jamf-protect.md) | [Jamf Protect Push Connector](connectors/jamfprotectpush.md) |

## K

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`KeeperSecurityEventNewLogs_CL`](tables/keepersecurityeventnewlogs-cl.md) | [Keeper Security](solutions/keeper-security.md) | [Keeper Security Push Connector](connectors/keepersecuritypush2.md) |
| [`KubeEvents`](tables/kubeevents.md) | [Azure kubernetes Service](solutions/azure-kubernetes-service.md) | [Azure Kubernetes Service (AKS)](connectors/azurekubernetes.md) |
| [`KubeEvents_CL`](tables/kubeevents-cl.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |

## L

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`LAQueryLogs`](tables/laquerylogs.md) | [GDPR Compliance & Data Security](solutions/gdpr-compliance-&-data-security.md)<br>[MicrosoftPurviewInsiderRiskManagement](solutions/microsoftpurviewinsiderriskmanagement.md)<br>[SOC Handbook](solutions/soc-handbook.md) |  |
| [`LastPassNativePoller_CL`](tables/lastpassnativepoller-cl.md) | [Lastpass Enterprise Activity Monitoring](solutions/lastpass-enterprise-activity-monitoring.md) | [LastPass Enterprise - Reporting (Polling CCP)](connectors/lastpass-polling.md) |
| [`LinuxAudit_CL`](tables/linuxaudit-cl.md) | [NXLog LinuxAudit](solutions/nxlog-linuxaudit.md) | [NXLog LinuxAudit](connectors/nxloglinuxaudit.md) |
| [`Lockdown_Data_CL`](tables/lockdown-data-cl.md) | [Vectra XDR](solutions/vectra-xdr.md) | [Vectra XDR](connectors/vectraxdr.md) |
| [`LookoutCloudSecurity_CL`](tables/lookoutcloudsecurity-cl.md) | [Lookout Cloud Security Platform for Microsoft Sentinel](solutions/lookout-cloud-security-platform-for-microsoft-sentinel.md) | [Lookout Cloud Security for Microsoft Sentinel](connectors/lookoutcloudsecuritydataconnector.md) |
| [`LookoutMtdV2_CL`](tables/lookoutmtdv2-cl.md) | [Lookout](solutions/lookout.md) | [Lookout Mobile Threat Detection Connector (via Codeless Connector Framework) (Preview)](connectors/lookoutstreaming-definition.md) |
| [`Lookout_CL`](tables/lookout-cl.md) | [Lookout](solutions/lookout.md) | [[DEPRECATED] Lookout](connectors/lookoutapi.md) |

## M

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`M365SecureScoreControls_CL`](tables/m365securescorecontrols-cl.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md) |  |
| [`MDBALogTable_CL`](tables/mdbalogtable-cl.md) | [MongoDBAtlas](solutions/mongodbatlas.md) | [MongoDB Atlas Logs](connectors/mongodbatlaslogsazurefunctions.md) |
| [`MDCFileIntegrityMonitoringEvents`](tables/mdcfileintegritymonitoringevents.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`MDfEExposureScore_CL`](tables/mdfeexposurescore-cl.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md) |  |
| [`MDfERecommendations_CL`](tables/mdferecommendations-cl.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md) |  |
| [`MDfEVulnerabilitiesList_CL`](tables/mdfevulnerabilitieslist-cl.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md) |  |
| [`MailGuard365_Threats_CL`](tables/mailguard365-threats-cl.md) | [MailGuard 365](solutions/mailguard-365.md) | [MailGuard 365](connectors/mailguard365.md) |
| [`MailRiskEventEmails_CL`](tables/mailriskeventemails-cl.md) | [MailRisk](solutions/mailrisk.md) | [MailRisk by Secure Practice](connectors/securepracticemailriskconnector.md) |
| [`Malware_Data_CL`](tables/malware-data-cl.md) | [CofenseIntelligence](solutions/cofenseintelligence.md) | [Cofense Intelligence Threat Indicators Ingestion](connectors/cofenseintelligence.md) |
| [`MarkLogicAudit_CL`](tables/marklogicaudit-cl.md) | [CustomLogsAma](solutions/customlogsama.md)<br>[MarkLogicAudit](solutions/marklogicaudit.md) | [Custom logs via AMA](connectors/customlogsviaama.md)<br>[[Deprecated] MarkLogic Audit](connectors/marklogic.md) |
| [`McasShadowItReporting`](tables/mcasshadowitreporting.md) | [Microsoft Defender for Cloud Apps](solutions/microsoft-defender-for-cloud-apps.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Microsoft Defender for Cloud Apps](connectors/microsoftcloudappsecurity.md) |
| [`MessageEvents`](tables/messageevents.md) | [Microsoft Defender XDR](solutions/microsoft-defender-xdr.md) |  |
| [`MessagePostDeliveryEvents`](tables/messagepostdeliveryevents.md) | [Microsoft Defender XDR](solutions/microsoft-defender-xdr.md) |  |
| [`MessageTrackingLog_CL`](tables/messagetrackinglog-cl.md) | [Microsoft Exchange Security - Exchange On-Premises](solutions/microsoft-exchange-security-exchange-on-premises.md) | [[Deprecated] Microsoft Exchange Logs and Events](connectors/esi-exchangeadminauditlogevents.md)<br>[Microsoft Exchange Message Tracking Logs](connectors/esi-opt6exchangemessagetrackinglogs.md) |
| [`MessageUrlInfo`](tables/messageurlinfo.md) | [Microsoft Defender XDR](solutions/microsoft-defender-xdr.md) |  |
| [`MicrosoftPurviewInformationProtection`](tables/microsoftpurviewinformationprotection.md) | [GDPR Compliance & Data Security](solutions/gdpr-compliance-&-data-security.md)<br>[Microsoft Purview Information Protection](solutions/microsoft-purview-information-protection.md)<br>[MicrosoftPurviewInsiderRiskManagement](solutions/microsoftpurviewinsiderriskmanagement.md) | [Microsoft Purview Information Protection](connectors/microsoftpurviewinformationprotection.md) |
| [`MimecastAudit_CL`](tables/mimecastaudit-cl.md) | [MimecastAudit](solutions/mimecastaudit.md) | [Mimecast Audit & Authentication](connectors/mimecastauditapi.md) |
| [`MimecastDLP_CL`](tables/mimecastdlp-cl.md) | [MimecastSEG](solutions/mimecastseg.md) | [Mimecast Secure Email Gateway](connectors/mimecastsiemapi.md) |
| [`MimecastSIEM_CL`](tables/mimecastsiem-cl.md) | [MimecastSEG](solutions/mimecastseg.md) | [Mimecast Secure Email Gateway](connectors/mimecastsiemapi.md) |
| [`MimecastTTPAttachment_CL`](tables/mimecastttpattachment-cl.md) | [MimecastTTP](solutions/mimecastttp.md) | [Mimecast Targeted Threat Protection](connectors/mimecastttpapi.md) |
| [`MimecastTTPImpersonation_CL`](tables/mimecastttpimpersonation-cl.md) | [MimecastTTP](solutions/mimecastttp.md) | [Mimecast Targeted Threat Protection](connectors/mimecastttpapi.md) |
| [`MimecastTTPUrl_CL`](tables/mimecastttpurl-cl.md) | [MimecastTTP](solutions/mimecastttp.md) | [Mimecast Targeted Threat Protection](connectors/mimecastttpapi.md) |
| [`MiroAuditLogs_CL`](tables/miroauditlogs-cl.md) | [Miro](solutions/miro.md) | [Miro Audit Logs (Enterprise Plan)](connectors/miroauditlogsdataconnector.md) |
| [`MiroContentLogs_CL`](tables/mirocontentlogs-cl.md) | [Miro](solutions/miro.md) | [Miro Content Logs (Enterprise Plan + Enterprise Guard)](connectors/mirocontentlogsdataconnector.md) |
| [`MongoDBAudit_CL`](tables/mongodbaudit-cl.md) | [CustomLogsAma](solutions/customlogsama.md)<br>[MongoDBAudit](solutions/mongodbaudit.md) | [Custom logs via AMA](connectors/customlogsviaama.md)<br>[[Deprecated] MongoDB Audit](connectors/mongodb.md) |
| [`MorphisecAlerts_CL`](tables/morphisecalerts-cl.md) | [Morphisec](solutions/morphisec.md) | [Morphisec API Data Connector (via Codeless Connector Framework)](connectors/morphisecccf.md) |
| [`MuleSoft_Cloudhub_CL`](tables/mulesoft-cloudhub-cl.md) | [Mulesoft](solutions/mulesoft.md) | [MuleSoft Cloudhub](connectors/mulesoft.md) |
| [`maillog_CL`](tables/maillog-cl.md) | [Proofpoint On demand(POD) Email Security](solutions/proofpoint-on-demand-pod-email-security.md) |  |
| [`meraki_CL`](tables/meraki-cl.md) | [CiscoMeraki](solutions/ciscomeraki.md)<br>[CustomLogsAma](solutions/customlogsama.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md) | [Custom logs via AMA](connectors/customlogsviaama.md) |
| [`message_CL`](tables/message-cl.md) | [Proofpoint On demand(POD) Email Security](solutions/proofpoint-on-demand-pod-email-security.md) |  |

## N

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`NCProtectUAL_CL`](tables/ncprotectual-cl.md) | [NC Protect Data Connector](solutions/nc-protect-data-connector.md) | [NC Protect](connectors/nucleuscyberncprotect.md) |
| [`NGINX_CL`](tables/nginx-cl.md) | [CustomLogsAma](solutions/customlogsama.md)<br>[NGINX HTTP Server](solutions/nginx-http-server.md) | [Custom logs via AMA](connectors/customlogsviaama.md)<br>[[Deprecated] NGINX HTTP Server](connectors/nginxhttpserver.md) |
| [`NTANetAnalytics`](tables/ntanetanalytics.md) | [Dataminr Pulse](solutions/dataminr-pulse.md) |  |
| [`NXLogFIM_CL`](tables/nxlogfim-cl.md) | [NXLog FIM](solutions/nxlog-fim.md) | [NXLog FIM](connectors/nxlogfim.md) |
| [`NXLog_DNS_Server_CL`](tables/nxlog-dns-server-cl.md) | [Dataminr Pulse](solutions/dataminr-pulse.md)<br>[NXLogDNSLogs](solutions/nxlogdnslogs.md) | [NXLog DNS Logs](connectors/nxlogdnslogs.md) |
| [`NetBackupAlerts_CL`](tables/netbackupalerts-cl.md) | [Veritas NetBackup](solutions/veritas-netbackup.md) |  |
| [`Netclean_Incidents_CL`](tables/netclean-incidents-cl.md) | [NetClean ProActive](solutions/netclean-proactive.md) | [Netclean ProActive Incidents](connectors/netclean-proactive-incidents.md) |
| [`NetskopeAlerts_CL`](tables/netskopealerts-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Alerts and Events](connectors/netskopealertsevents.md) |
| [`NetskopeEventsApplication_CL`](tables/netskopeeventsapplication-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Alerts and Events](connectors/netskopealertsevents.md) |
| [`NetskopeEventsAudit_CL`](tables/netskopeeventsaudit-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Alerts and Events](connectors/netskopealertsevents.md) |
| [`NetskopeEventsConnection_CL`](tables/netskopeeventsconnection-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Alerts and Events](connectors/netskopealertsevents.md) |
| [`NetskopeEventsDLP_CL`](tables/netskopeeventsdlp-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Alerts and Events](connectors/netskopealertsevents.md) |
| [`NetskopeEventsEndpoint_CL`](tables/netskopeeventsendpoint-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Alerts and Events](connectors/netskopealertsevents.md) |
| [`NetskopeEventsInfrastructure_CL`](tables/netskopeeventsinfrastructure-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Alerts and Events](connectors/netskopealertsevents.md) |
| [`NetskopeEventsNetwork_CL`](tables/netskopeeventsnetwork-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Alerts and Events](connectors/netskopealertsevents.md) |
| [`NetskopeEventsPage_CL`](tables/netskopeeventspage-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Alerts and Events](connectors/netskopealertsevents.md) |
| [`NetskopeWebTransactions_CL`](tables/netskopewebtransactions-cl.md) | [Netskopev2](solutions/netskopev2.md) |  |
| [`NetskopeWebtxData_CL`](tables/netskopewebtxdata-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Web Transactions Data Connector](connectors/netskopewebtransactionsdataconnector.md) |
| [`NetskopeWebtxErrors_CL`](tables/netskopewebtxerrors-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Web Transactions Data Connector](connectors/netskopewebtransactionsdataconnector.md) |
| [`Netskope_Alerts_CL`](tables/netskope-alerts-cl.md) | [Netskope](solutions/netskope.md)<br>[Netskopev2](solutions/netskopev2.md) |  |
| [`Netskope_CL`](tables/netskope-cl.md) | [Netskope](solutions/netskope.md) | [Netskope](connectors/netskope.md) |
| [`Netskope_Events_CL`](tables/netskope-events-cl.md) | [Netskope](solutions/netskope.md)<br>[Netskopev2](solutions/netskopev2.md) |  |
| [`Netskope_WebTX_CL`](tables/netskope-webtx-cl.md) | [Netskope](solutions/netskope.md)<br>[Netskopev2](solutions/netskopev2.md) |  |
| [`Netskope_WebTx_metrics_CL`](tables/netskope-webtx-metrics-cl.md) | [Netskopev2](solutions/netskopev2.md) | [Netskope Data Connector](connectors/netskopedataconnector.md) |
| [`NetworkAccessTraffic`](tables/networkaccesstraffic.md) | [Global Secure Access](solutions/global-secure-access.md)<br>[Microsoft Entra ID](solutions/microsoft-entra-id.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Microsoft Entra ID](connectors/azureactivedirectory.md) |
| [`NetworkCustomAnalytics_CL`](tables/networkcustomanalytics-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkCustomAnalytics_country_CL`](tables/networkcustomanalytics-country-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkCustomAnalytics_ip_CL`](tables/networkcustomanalytics-ip-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkCustomAnalytics_protocol_CL`](tables/networkcustomanalytics-protocol-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkCustomAnalytics_rule_CL`](tables/networkcustomanalytics-rule-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkCustomAnalytics_sourceInfo_CL`](tables/networkcustomanalytics-sourceinfo-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkCustomAnalytics_source_port_CL`](tables/networkcustomanalytics-source-port-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkCustomAnalytics_threat_CL`](tables/networkcustomanalytics-threat-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkCustomAnalytics_threat_ioc_CL`](tables/networkcustomanalytics-threat-ioc-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkSummary_Country_CL`](tables/networksummary-country-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkSummary_IP_CL`](tables/networksummary-ip-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkSummary_Protocol_CL`](tables/networksummary-protocol-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkSummary_Result_CL`](tables/networksummary-result-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkSummary_Rule_CL`](tables/networksummary-rule-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkSummary_SourceInfo_CL`](tables/networksummary-sourceinfo-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkSummary_Source_Port_CL`](tables/networksummary-source-port-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkSummary_Threat_CL`](tables/networksummary-threat-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NetworkSummary_Threat_IOC_CL`](tables/networksummary-threat-ioc-cl.md) | [Network Session Essentials](solutions/network-session-essentials.md) |  |
| [`NexposeInsightVMCloud_assets_CL`](tables/nexposeinsightvmcloud-assets-cl.md) | [Rapid7InsightVM](solutions/rapid7insightvm.md) | [Rapid7 Insight Platform Vulnerability Management Reports](connectors/insightvmcloudapi.md) |
| [`NexposeInsightVMCloud_vulnerabilities_CL`](tables/nexposeinsightvmcloud-vulnerabilities-cl.md) | [Rapid7InsightVM](solutions/rapid7insightvm.md) | [Rapid7 Insight Platform Vulnerability Management Reports](connectors/insightvmcloudapi.md) |
| [`NonameAPISecurityAlert_CL`](tables/nonameapisecurityalert-cl.md) | [Noname API Security Solution for Microsoft Sentinel](solutions/noname-api-security-solution-for-microsoft-sentinel.md) | [Noname Security for Microsoft Sentinel](connectors/nonamesecuritymicrosoftsentinel.md) |
| [`NordPassEventLogs_CL`](tables/nordpasseventlogs-cl.md) | [NordPass](solutions/nordpass.md) | [NordPass](connectors/nordpass.md) |
| [`net_assets_CL`](tables/net-assets-cl.md) | [HolmSecurity](solutions/holmsecurity.md) | [Holm Security Asset Data](connectors/holmsecurityassets.md) |

## O

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`OCI_LogsV2_CL`](tables/oci-logsv2-cl.md) | [Oracle Cloud Infrastructure](solutions/oracle-cloud-infrastructure.md) | [Oracle Cloud Infrastructure (via Codeless Connector Framework)](connectors/oci-connector-ccp-definition.md) |
| [`OCI_Logs_CL`](tables/oci-logs-cl.md) | [Oracle Cloud Infrastructure](solutions/oracle-cloud-infrastructure.md) | [[DEPRECATED] Oracle Cloud Infrastructure](connectors/oraclecloudinfrastructurelogsconnector.md) |
| [`ObsidianActivity_CL`](tables/obsidianactivity-cl.md) | [Obsidian Datasharing](solutions/obsidian-datasharing.md) | [Obsidian Datasharing Connector](connectors/obsidiandatasharing.md) |
| [`ObsidianThreat_CL`](tables/obsidianthreat-cl.md) | [Obsidian Datasharing](solutions/obsidian-datasharing.md) | [Obsidian Datasharing Connector](connectors/obsidiandatasharing.md) |
| [`OfficeActivity`](tables/officeactivity.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[Business Email Compromise - Financial Fraud](solutions/business-email-compromise-financial-fraud.md)<br>[ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[+22 more](tables/officeactivity.md) | [Microsoft 365 (formerly, Office 365)](connectors/office365.md) |
| [`OktaNativePoller_CL`](tables/oktanativepoller-cl.md) | [Okta Single Sign-On](solutions/okta-single-sign-on.md) | [Okta Single Sign-On (Polling CCP)](connectors/oktasso-polling.md) |
| [`OktaV2_CL`](tables/oktav2-cl.md) | [Okta Single Sign-On](solutions/okta-single-sign-on.md) | [Okta Single Sign-On](connectors/oktassov2.md)<br>[Okta Single Sign-On (using Azure Functions)](connectors/oktasinglesignon-usingazurefunctions.md) |
| [`Okta_CL`](tables/okta-cl.md) | [Okta Single Sign-On](solutions/okta-single-sign-on.md) | [Okta Single Sign-On](connectors/oktasso.md)<br>[Okta Single Sign-On (Preview)](connectors/oktassov2.md)<br>[Okta Single Sign-On (using Azure Functions)](connectors/oktasinglesignon-usingazurefunctions.md) |
| [`Onapsis_Defend_CL`](tables/onapsis-defend-cl.md) | [Onapsis Defend](solutions/onapsis-defend.md) | [Onapsis Defend Integration](connectors/onapsis.md)<br>[Onapsis Defend: Integrate Unmatched SAP Threat Detection & Intel with Microsoft Sentinel](connectors/onapsis.md) |
| [`OneLoginEventsV2_CL`](tables/onelogineventsv2-cl.md) | [OneLoginIAM](solutions/oneloginiam.md) | [OneLogin IAM Platform (via Codeless Connector Framework)](connectors/oneloginiamlogsccpdefinition.md) |
| [`OneLoginUsersV2_CL`](tables/oneloginusersv2-cl.md) | [OneLoginIAM](solutions/oneloginiam.md) | [OneLogin IAM Platform (via Codeless Connector Framework)](connectors/oneloginiamlogsccpdefinition.md) |
| [`OneLogin_CL`](tables/onelogin-cl.md) | [OneLoginIAM](solutions/oneloginiam.md) | [[DEPRECATED] OneLogin IAM Platform](connectors/onelogin.md) |
| [`OnePasswordEventLogs_CL`](tables/onepasswordeventlogs-cl.md) | [1Password](solutions/1password.md) | [1Password](connectors/1password.md)<br>[1Password (Serverless)](connectors/1password-serverless.md)<br>[1Password (Serverless)](connectors/1passwordccpdefinition.md) |
| [`OneTrustMetadataV3_CL`](tables/onetrustmetadatav3-cl.md) | [OneTrust](solutions/onetrust.md) | [OneTrust](connectors/onetrustpush.md) |
| [`OpenSystemsAuthenticationLogs_CL`](tables/opensystemsauthenticationlogs-cl.md) | [Open Systems](solutions/open-systems.md) | [Open Systems Data Connector](connectors/opensystems.md) |
| [`OpenSystemsFirewallLogs_CL`](tables/opensystemsfirewalllogs-cl.md) | [Open Systems](solutions/open-systems.md) | [Open Systems Data Connector](connectors/opensystems.md) |
| [`OpenSystemsProxyLogs_CL`](tables/opensystemsproxylogs-cl.md) | [Open Systems](solutions/open-systems.md) | [Open Systems Data Connector](connectors/opensystems.md) |
| [`OpenSystemsZtnaLogs_CL`](tables/opensystemsztnalogs-cl.md) | [Open Systems](solutions/open-systems.md) | [Open Systems Data Connector](connectors/opensystems.md) |
| [`Open_Ports_Data_CL`](tables/open-ports-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`Operation`](tables/operation.md) | [Azure SQL Database solution for sentinel](solutions/azure-sql-database-solution-for-sentinel.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[GDPR Compliance & Data Security](solutions/gdpr-compliance-&-data-security.md)<br>[+11 more](tables/operation.md) |  |
| [`OracleWebLogicServer_CL`](tables/oracleweblogicserver-cl.md) | [CustomLogsAma](solutions/customlogsama.md)<br>[OracleWebLogicServer](solutions/oracleweblogicserver.md) | [Custom logs via AMA](connectors/customlogsviaama.md)<br>[[Deprecated] Oracle WebLogic Server](connectors/oracleweblogicserver.md) |
| [`OrcaAlerts_CL`](tables/orcaalerts-cl.md) | [Orca Security Alerts](solutions/orca-security-alerts.md) | [Orca Security Alerts](connectors/orcasecurityalerts.md) |
| [`operation`](tables/operation.md) | [MicrosoftPurviewInsiderRiskManagement](solutions/microsoftpurviewinsiderriskmanagement.md) |  |

## P

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`PDNSBlockData_CL`](tables/pdnsblockdata-cl.md) | [PDNS Block Data Connector](solutions/pdns-block-data-connector.md) | [PDNS Block Data Connector](connectors/pdnsblockdataconnector.md) |
| [`PDNS_Data_CL`](tables/pdns-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`PaloAltoCortexXDR_Alerts_CL`](tables/paloaltocortexxdr-alerts-cl.md) | [Cortex XDR](solutions/cortex-xdr.md)<br>[Palo Alto Cortex XDR CCP](solutions/palo-alto-cortex-xdr-ccp.md) | [Palo Alto Cortex XDR](connectors/cortexxdrdataconnector.md) |
| [`PaloAltoCortexXDR_Audit_Agent_CL`](tables/paloaltocortexxdr-audit-agent-cl.md) | [Cortex XDR](solutions/cortex-xdr.md)<br>[Palo Alto Cortex XDR CCP](solutions/palo-alto-cortex-xdr-ccp.md) | [Palo Alto Cortex XDR](connectors/cortexxdrdataconnector.md) |
| [`PaloAltoCortexXDR_Audit_Management_CL`](tables/paloaltocortexxdr-audit-management-cl.md) | [Cortex XDR](solutions/cortex-xdr.md)<br>[Palo Alto Cortex XDR CCP](solutions/palo-alto-cortex-xdr-ccp.md) | [Palo Alto Cortex XDR](connectors/cortexxdrdataconnector.md) |
| [`PaloAltoCortexXDR_Endpoints_CL`](tables/paloaltocortexxdr-endpoints-cl.md) | [Cortex XDR](solutions/cortex-xdr.md)<br>[Palo Alto Cortex XDR CCP](solutions/palo-alto-cortex-xdr-ccp.md) | [Palo Alto Cortex XDR](connectors/cortexxdrdataconnector.md) |
| [`PaloAltoCortexXDR_Incidents_CL`](tables/paloaltocortexxdr-incidents-cl.md) | [Cortex XDR](solutions/cortex-xdr.md)<br>[Palo Alto Cortex XDR CCP](solutions/palo-alto-cortex-xdr-ccp.md) | [Palo Alto Cortex XDR](connectors/cortexxdrdataconnector.md)<br>[Cortex XDR - Incidents](connectors/cortexxdrincidents.md) |
| [`PaloAltoPrismaCloudAlertV2_CL`](tables/paloaltoprismacloudalertv2-cl.md) | [PaloAltoPrismaCloud](solutions/paloaltoprismacloud.md) | [Palo Alto Prisma Cloud CSPM (via Codeless Connector Framework)](connectors/paloaltoprismacloudcspmccpdefinition.md) |
| [`PaloAltoPrismaCloudAlert_CL`](tables/paloaltoprismacloudalert-cl.md) | [PaloAltoPrismaCloud](solutions/paloaltoprismacloud.md) | [[DEPRECATED] Palo Alto Prisma Cloud CSPM](connectors/paloaltoprismacloud.md) |
| [`PaloAltoPrismaCloudAuditV2_CL`](tables/paloaltoprismacloudauditv2-cl.md) | [PaloAltoPrismaCloud](solutions/paloaltoprismacloud.md) | [Palo Alto Prisma Cloud CSPM (via Codeless Connector Framework)](connectors/paloaltoprismacloudcspmccpdefinition.md) |
| [`PaloAltoPrismaCloudAudit_CL`](tables/paloaltoprismacloudaudit-cl.md) | [PaloAltoPrismaCloud](solutions/paloaltoprismacloud.md) | [[DEPRECATED] Palo Alto Prisma Cloud CSPM](connectors/paloaltoprismacloud.md) |
| [`Pathlock_TDnR_CL`](tables/pathlock-tdnr-cl.md) | [Pathlock_TDnR](solutions/pathlock-tdnr.md) | [Pathlock Inc.: Threat Detection and Response for SAP](connectors/pathlock-tdnr.md)<br>[Pathlock Threat Detection and Response Integration](connectors/pathlock-tdnr.md) |
| [`Perf`](tables/perf.md) | [Barracuda CloudGen Firewall](solutions/barracuda-cloudgen-firewall.md)<br>[Forcepoint NGFW](solutions/forcepoint-ngfw.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[+1 more](tables/perf.md) |  |
| [`Perimeter81_CL`](tables/perimeter81-cl.md) | [Perimeter 81](solutions/perimeter-81.md) | [Perimeter 81 Activity Logs](connectors/perimeter81activitylogs.md) |
| [`Phosphorus_CL`](tables/phosphorus-cl.md) | [Phosphorus](solutions/phosphorus.md) | [Phosphorus Devices](connectors/phosphorus-polling.md) |
| [`PingOne_AuditActivitiesV2_CL`](tables/pingone-auditactivitiesv2-cl.md) | [PingOne](solutions/pingone.md) | [Ping One (via Codeless Connector Framework)](connectors/pingoneauditlogsccpdefinition.md) |
| [`PostgreSQL_CL`](tables/postgresql-cl.md) | [CustomLogsAma](solutions/customlogsama.md)<br>[PostgreSQL](solutions/postgresql.md) | [Custom logs via AMA](connectors/customlogsviaama.md)<br>[[Deprecated] PostgreSQL Events](connectors/postgresql.md) |
| [`PowerAutomateActivity`](tables/powerautomateactivity.md) | [Microsoft Business Applications](solutions/microsoft-business-applications.md) |  |
| [`PowerBIActivity`](tables/powerbiactivity.md) | [Microsoft PowerBI](solutions/microsoft-powerbi.md) | [Microsoft PowerBI](connectors/officepowerbi.md) |
| [`PowerPlatformAdminActivity`](tables/powerplatformadminactivity.md) | [Microsoft Business Applications](solutions/microsoft-business-applications.md) |  |
| [`PrismaCloudCompute_CL`](tables/prismacloudcompute-cl.md) | [Palo Alto Prisma Cloud CWPP](solutions/palo-alto-prisma-cloud-cwpp.md) | [Palo Alto Prisma Cloud CWPP (using REST API)](connectors/paloaltoprismacloudcwpp.md)<br>[Palo Alto Prisma Cloud CWPP (using REST API)](connectors/prismacloudcomputenativepoller.md) |
| [`ProjectActivity`](tables/projectactivity.md) | [Microsoft Project](solutions/microsoft-project.md) | [Microsoft Project](connectors/office365project.md) |
| [`ProofPointData_CL`](tables/proofpointdata-cl.md) | [ProofPointTap](solutions/proofpointtap.md) |  |
| [`ProofPointTAPClicksBlockedV2_CL`](tables/proofpointtapclicksblockedv2-cl.md) | [ProofPointTap](solutions/proofpointtap.md) | [Proofpoint TAP (via Codeless Connector Platform)](connectors/proofpointtapv2.md) |
| [`ProofPointTAPClicksBlocked_CL`](tables/proofpointtapclicksblocked-cl.md) | [ProofPointTap](solutions/proofpointtap.md) | [[Deprecated] Proofpoint TAP](connectors/proofpointtap.md) |
| [`ProofPointTAPClicksPermittedV2_CL`](tables/proofpointtapclickspermittedv2-cl.md) | [ProofPointTap](solutions/proofpointtap.md) | [Proofpoint TAP (via Codeless Connector Platform)](connectors/proofpointtapv2.md) |
| [`ProofPointTAPClicksPermitted_CL`](tables/proofpointtapclickspermitted-cl.md) | [ProofPointTap](solutions/proofpointtap.md) | [[Deprecated] Proofpoint TAP](connectors/proofpointtap.md) |
| [`ProofPointTAPMessagesBlockedV2_CL`](tables/proofpointtapmessagesblockedv2-cl.md) | [ProofPointTap](solutions/proofpointtap.md) | [Proofpoint TAP (via Codeless Connector Platform)](connectors/proofpointtapv2.md) |
| [`ProofPointTAPMessagesBlocked_CL`](tables/proofpointtapmessagesblocked-cl.md) | [ProofPointTap](solutions/proofpointtap.md) | [[Deprecated] Proofpoint TAP](connectors/proofpointtap.md) |
| [`ProofPointTAPMessagesDeliveredV2_CL`](tables/proofpointtapmessagesdeliveredv2-cl.md) | [ProofPointTap](solutions/proofpointtap.md) | [Proofpoint TAP (via Codeless Connector Platform)](connectors/proofpointtapv2.md) |
| [`ProofPointTAPMessagesDelivered_CL`](tables/proofpointtapmessagesdelivered-cl.md) | [ProofPointTap](solutions/proofpointtap.md) | [[Deprecated] Proofpoint TAP](connectors/proofpointtap.md) |
| [`ProofpointPODMailLog_CL`](tables/proofpointpodmaillog-cl.md) | [Proofpoint On demand(POD) Email Security](solutions/proofpoint-on-demand-pod-email-security.md) | [Proofpoint On Demand Email Security (via Codeless Connector Platform)](connectors/proofpointccpdefinition.md) |
| [`ProofpointPODMessage_CL`](tables/proofpointpodmessage-cl.md) | [Proofpoint On demand(POD) Email Security](solutions/proofpoint-on-demand-pod-email-security.md) | [Proofpoint On Demand Email Security (via Codeless Connector Platform)](connectors/proofpointccpdefinition.md) |
| [`ProofpointPOD_maillog_CL`](tables/proofpointpod-maillog-cl.md) | [Proofpoint On demand(POD) Email Security](solutions/proofpoint-on-demand-pod-email-security.md) | [[Deprecated] Proofpoint On Demand Email Security](connectors/proofpointpod.md) |
| [`ProofpointPOD_message_CL`](tables/proofpointpod-message-cl.md) | [Proofpoint On demand(POD) Email Security](solutions/proofpoint-on-demand-pod-email-security.md) | [[Deprecated] Proofpoint On Demand Email Security](connectors/proofpointpod.md) |
| [`ProtectionStatus`](tables/protectionstatus.md) | [AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[SOC Handbook](solutions/soc-handbook.md) |  |
| [`Proto_By_IP_Data_CL`](tables/proto-by-ip-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`PurviewDataSensitivityLogs`](tables/purviewdatasensitivitylogs.md) | [GDPR Compliance & Data Security](solutions/gdpr-compliance-&-data-security.md)<br>[Microsoft Purview](solutions/microsoft-purview.md) | [Microsoft Purview](connectors/microsoftazurepurview.md) |
| [`prancer_CL`](tables/prancer-cl.md) | [Prancer PenSuiteAI Integration](solutions/prancer-pensuiteai-integration.md) | [Prancer Data Connector](connectors/prancerlogdata.md) |

## Q

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`QscoutAppEvents_CL`](tables/qscoutappevents-cl.md) | [Quokka](solutions/quokka.md) | [QscoutAppEventsConnector](connectors/qscoutappeventsccfdefinition.md) |
| [`QualysHostDetectionV2_CL`](tables/qualyshostdetectionv2-cl.md) | [QualysVM](solutions/qualysvm.md) | [[DEPRECATED] Qualys Vulnerability Management](connectors/qualysvulnerabilitymanagement.md) |
| [`QualysHostDetectionV3_CL`](tables/qualyshostdetectionv3-cl.md) | [ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[NISTSP80053](solutions/nistsp80053.md)<br>[+2 more](tables/qualyshostdetectionv3-cl.md) | [Qualys Vulnerability Management (via Codeless Connector Framework)](connectors/qualysvmlogsccpdefinition.md) |
| [`QualysHostDetection_CL`](tables/qualyshostdetection-cl.md) | [QualysVM](solutions/qualysvm.md) | [[DEPRECATED] Qualys Vulnerability Management](connectors/qualysvulnerabilitymanagement.md) |
| [`QualysKB_CL`](tables/qualyskb-cl.md) | [Qualys VM Knowledgebase](solutions/qualys-vm-knowledgebase.md) | [Qualys VM KnowledgeBase](connectors/qualyskb.md) |

## R

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`RLTiCloudQuotas_CL`](tables/rlticloudquotas-cl.md) | [ReversingLabs](solutions/reversinglabs.md) |  |
| [`RSAIDPlus_AdminLogs_CL`](tables/rsaidplus-adminlogs-cl.md) | [RSAIDPlus_AdminLogs_Connector](solutions/rsaidplus-adminlogs-connector.md) | [RSA ID Plus Admin Logs Connector](connectors/rsaidplus-adminglogs-connector.md) |
| [`RecordedFuturePlaybookAlerts_CL`](tables/recordedfutureplaybookalerts-cl.md) | [Recorded Future](solutions/recorded-future.md) |  |
| [`RecordedFuturePortalAlerts_CL`](tables/recordedfutureportalalerts-cl.md) | [Recorded Future](solutions/recorded-future.md) |  |
| [`RecordedFutureThreatMapMalware_CL`](tables/recordedfuturethreatmapmalware-cl.md) | [Recorded Future](solutions/recorded-future.md) |  |
| [`RecordedFutureThreatMap_CL`](tables/recordedfuturethreatmap-cl.md) | [Recorded Future](solutions/recorded-future.md) |  |
| [`RedCanaryDetections_CL`](tables/redcanarydetections-cl.md) | [Red Canary](solutions/red-canary.md) | [Red Canary Threat Detection](connectors/redcanarydataconnector.md) |
| [`Report_links_data_CL`](tables/report-links-data-cl.md) | [CofenseTriage](solutions/cofensetriage.md) | [Cofense Triage Threat Indicators Ingestion](connectors/cofensetriage.md) |
| [`Rubrik_Anomaly_Data_CL`](tables/rubrik-anomaly-data-cl.md) | [RubrikSecurityCloud](solutions/rubriksecuritycloud.md) | [Rubrik Security Cloud data connector](connectors/rubriksecuritycloudazurefunctions.md) |
| [`Rubrik_Events_Data_CL`](tables/rubrik-events-data-cl.md) | [RubrikSecurityCloud](solutions/rubriksecuritycloud.md) | [Rubrik Security Cloud data connector](connectors/rubriksecuritycloudazurefunctions.md) |
| [`Rubrik_Ransomware_Data_CL`](tables/rubrik-ransomware-data-cl.md) | [RubrikSecurityCloud](solutions/rubriksecuritycloud.md) | [Rubrik Security Cloud data connector](connectors/rubriksecuritycloudazurefunctions.md) |
| [`Rubrik_ThreatHunt_Data_CL`](tables/rubrik-threathunt-data-cl.md) | [RubrikSecurityCloud](solutions/rubriksecuritycloud.md) | [Rubrik Security Cloud data connector](connectors/rubriksecuritycloudazurefunctions.md) |

## S

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`SAPBTPAuditLog_CL`](tables/sapbtpauditlog-cl.md) | [SAP BTP](solutions/sap-btp.md) | [SAP BTP](connectors/sapbtpauditevents.md) |
| [`SAPETDAlerts_CL`](tables/sapetdalerts-cl.md) | [SAP ETD Cloud](solutions/sap-etd-cloud.md) | [SAP Enterprise Threat Detection, cloud edition](connectors/sapetdalerts.md) |
| [`SAPETDInvestigations_CL`](tables/sapetdinvestigations-cl.md) | [SAP ETD Cloud](solutions/sap-etd-cloud.md) | [SAP Enterprise Threat Detection, cloud edition](connectors/sapetdalerts.md) |
| [`SAPLogServ_CL`](tables/saplogserv-cl.md) | [SAP LogServ](solutions/sap-logserv.md) | [SAP LogServ (RISE), S/4HANA Cloud private edition](connectors/saplogserv.md) |
| [`SIGNL4_CL`](tables/signl4-cl.md) | [SIGNL4](solutions/signl4.md) | [Derdack SIGNL4](connectors/derdacksignl4.md) |
| [`SINECSecurityGuard_CL`](tables/sinecsecurityguard-cl.md) | [SINEC Security Guard](solutions/sinec-security-guard.md) | [SINEC Security Guard](connectors/ssg.md) |
| [`SOCPrimeAuditLogs_CL`](tables/socprimeauditlogs-cl.md) | [SOC Prime CCF](solutions/soc-prime-ccf.md) | [SOC Prime Platform Audit Logs Data Connector](connectors/socprimeauditlogsdataconnector.md) |
| [`SQLSecurityAuditEvents`](tables/sqlsecurityauditevents.md) | [Azure SQL Database solution for sentinel](solutions/azure-sql-database-solution-for-sentinel.md)<br>[GDPR Compliance & Data Security](solutions/gdpr-compliance-&-data-security.md)<br>[HIPAA Compliance](solutions/hipaa-compliance.md) |  |
| [`SailPointIDN_Events_CL`](tables/sailpointidn-events-cl.md) | [SailPointIdentityNow](solutions/sailpointidentitynow.md) | [SailPoint IdentityNow](connectors/sailpointidentitynow.md) |
| [`SailPointIDN_Triggers_CL`](tables/sailpointidn-triggers-cl.md) | [SailPointIdentityNow](solutions/sailpointidentitynow.md) | [SailPoint IdentityNow](connectors/sailpointidentitynow.md) |
| [`SalemAlerts_CL`](tables/salemalerts-cl.md) | [SalemCyber](solutions/salemcyber.md) |  |
| [`SalesforceServiceCloudV2_CL`](tables/salesforceservicecloudv2-cl.md) | [Salesforce Service Cloud](solutions/salesforce-service-cloud.md) | [Salesforce Service Cloud (via Codeless Connector Framework)](connectors/salesforceservicecloudccpdefinition.md) |
| [`SalesforceServiceCloud_CL`](tables/salesforceservicecloud-cl.md) | [Salesforce Service Cloud](solutions/salesforce-service-cloud.md) | [[DEPRECATED] Salesforce Service Cloud](connectors/salesforceservicecloud.md) |
| [`Samsung_Knox_Application_CL`](tables/samsung-knox-application-cl.md) | [Samsung Knox Asset Intelligence](solutions/samsung-knox-asset-intelligence.md) | [Samsung Knox Asset Intelligence](connectors/samsungdcdefinition.md) |
| [`Samsung_Knox_Audit_CL`](tables/samsung-knox-audit-cl.md) | [Samsung Knox Asset Intelligence](solutions/samsung-knox-asset-intelligence.md) | [Samsung Knox Asset Intelligence](connectors/samsungdcdefinition.md) |
| [`Samsung_Knox_Network_CL`](tables/samsung-knox-network-cl.md) | [Samsung Knox Asset Intelligence](solutions/samsung-knox-asset-intelligence.md) | [Samsung Knox Asset Intelligence](connectors/samsungdcdefinition.md) |
| [`Samsung_Knox_Process_CL`](tables/samsung-knox-process-cl.md) | [Samsung Knox Asset Intelligence](solutions/samsung-knox-asset-intelligence.md) | [Samsung Knox Asset Intelligence](connectors/samsungdcdefinition.md) |
| [`Samsung_Knox_System_CL`](tables/samsung-knox-system-cl.md) | [Samsung Knox Asset Intelligence](solutions/samsung-knox-asset-intelligence.md) | [Samsung Knox Asset Intelligence](connectors/samsungdcdefinition.md) |
| [`Samsung_Knox_User_CL`](tables/samsung-knox-user-cl.md) | [Samsung Knox Asset Intelligence](solutions/samsung-knox-asset-intelligence.md) | [Samsung Knox Asset Intelligence](connectors/samsungdcdefinition.md) |
| [`SecureScoreControls`](tables/securescorecontrols.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`SecureScores`](tables/securescores.md) | [NISTSP80053](solutions/nistsp80053.md)<br>[SOC Handbook](solutions/soc-handbook.md) |  |
| [`SecurityAlert`](tables/securityalert.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[Azure Key Vault](solutions/azure-key-vault.md)<br>[Azure SQL Database solution for sentinel](solutions/azure-sql-database-solution-for-sentinel.md)<br>[+46 more](tables/securityalert.md) | [Microsoft Entra ID Protection](connectors/azureactivedirectoryidentityprotection.md)<br>[Microsoft Defender for Identity](connectors/azureadvancedthreatprotection.md)<br>[Subscription-based Microsoft Defender for Cloud (Legacy)](connectors/azuresecuritycenter.md)<br>[Microsoft Defender for IoT](connectors/iot.md)<br>[Microsoft Defender for Cloud Apps](connectors/microsoftcloudappsecurity.md)<br>[+5 more](tables/securityalert.md) |
| [`SecurityBaseline`](tables/securitybaseline.md) | [AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[CybersecurityMaturityModelCertification(CMMC)2.0](solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)<br>[+4 more](tables/securitybaseline.md) |  |
| [`SecurityBaselineSummary`](tables/securitybaselinesummary.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`SecurityBridgeLogs_CL`](tables/securitybridgelogs-cl.md) | [CustomLogsAma](solutions/customlogsama.md)<br>[SecurityBridge App](solutions/securitybridge-app.md) | [Custom logs via AMA](connectors/customlogsviaama.md)<br>[SecurityBridge Threat Detection for SAP](connectors/securitybridgesap.md) |
| [`SecurityBridge_CL`](tables/securitybridge-cl.md) | [SecurityBridge App](solutions/securitybridge-app.md) | [SecurityBridge Solution for SAP](connectors/securitybridge.md) |
| [`SecurityDetection`](tables/securitydetection.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`SecurityEvent`](tables/securityevent.md) | [Attacker Tools Threat Protection Essentials](solutions/attacker-tools-threat-protection-essentials.md)<br>[AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[+26 more](tables/securityevent.md) | [Cyborg Security HUNTER Hunt Packages](connectors/cyborgsecurity-hunter.md)<br>[[Deprecated] Microsoft Exchange Logs and Events](connectors/esi-exchangeadminauditlogevents.md)<br>[ Microsoft Active-Directory Domain Controllers Security Event Logs](connectors/esi-opt34domaincontrollerssecurityeventlogs.md)<br>[Security Events via Legacy Agent](connectors/securityevents.md)<br>[Windows Security Events via AMA](connectors/windowssecurityevents.md) |
| [`SecurityIncident`](tables/securityincident.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[Azure Key Vault](solutions/azure-key-vault.md)<br>[Azure SQL Database solution for sentinel](solutions/azure-sql-database-solution-for-sentinel.md)<br>[+27 more](tables/securityincident.md) | [Derdack SIGNL4](connectors/derdacksignl4.md)<br>[Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`SecurityIoTRawEvent`](tables/securityiotrawevent.md) | [Dataminr Pulse](solutions/dataminr-pulse.md)<br>[SOC Handbook](solutions/soc-handbook.md) |  |
| [`SecurityNestedRecommendation`](tables/securitynestedrecommendation.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[+2 more](tables/securitynestedrecommendation.md) |  |
| [`SecurityRecommendation`](tables/securityrecommendation.md) | [AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[CybersecurityMaturityModelCertification(CMMC)2.0](solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)<br>[+4 more](tables/securityrecommendation.md) |  |
| [`SecurityRegulatoryCompliance`](tables/securityregulatorycompliance.md) | [AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[CybersecurityMaturityModelCertification(CMMC)2.0](solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)<br>[+4 more](tables/securityregulatorycompliance.md) |  |
| [`SecurityScorecardFactor_CL`](tables/securityscorecardfactor-cl.md) | [SecurityScorecard Cybersecurity Ratings](solutions/securityscorecard-cybersecurity-ratings.md) | [SecurityScorecard Factor](connectors/securityscorecardfactorazurefunctions.md) |
| [`SecurityScorecardIssues_CL`](tables/securityscorecardissues-cl.md) | [SecurityScorecard Cybersecurity Ratings](solutions/securityscorecard-cybersecurity-ratings.md) | [SecurityScorecard Issue](connectors/securityscorecardissueazurefunctions.md) |
| [`SecurityScorecardRatings_CL`](tables/securityscorecardratings-cl.md) | [SecurityScorecard Cybersecurity Ratings](solutions/securityscorecard-cybersecurity-ratings.md) | [SecurityScorecard Cybersecurity Ratings](connectors/securityscorecardratingsazurefunctions.md) |
| [`Seg_Cg_CL`](tables/seg-cg-cl.md) | [Mimecast](solutions/mimecast.md) | [Mimecast Secure Email Gateway](connectors/mimecastsegapi.md) |
| [`Seg_Dlp_CL`](tables/seg-dlp-cl.md) | [Mimecast](solutions/mimecast.md) | [Mimecast Secure Email Gateway](connectors/mimecastsegapi.md) |
| [`SenservaPro_CL`](tables/senservapro-cl.md) | [SenservaPro](solutions/senservapro.md) | [SenservaPro (Preview)](connectors/senservapro.md) |
| [`SentinelAudit`](tables/sentinelaudit.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`SentinelHealth`](tables/sentinelhealth.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[SOC Handbook](solutions/soc-handbook.md)<br>[SentinelSOARessentials](solutions/sentinelsoaressentials.md) |  |
| [`SentinelOneActivities_CL`](tables/sentineloneactivities-cl.md) | [SentinelOne](solutions/sentinelone.md) | [SentinelOne](connectors/sentineloneccp.md) |
| [`SentinelOneAgents_CL`](tables/sentineloneagents-cl.md) | [SentinelOne](solutions/sentinelone.md) | [SentinelOne](connectors/sentineloneccp.md) |
| [`SentinelOneAlerts_CL`](tables/sentinelonealerts-cl.md) | [SentinelOne](solutions/sentinelone.md) | [SentinelOne](connectors/sentineloneccp.md) |
| [`SentinelOneGroups_CL`](tables/sentinelonegroups-cl.md) | [SentinelOne](solutions/sentinelone.md) | [SentinelOne](connectors/sentineloneccp.md) |
| [`SentinelOneThreats_CL`](tables/sentinelonethreats-cl.md) | [SentinelOne](solutions/sentinelone.md) | [SentinelOne](connectors/sentineloneccp.md) |
| [`SentinelOne_CL`](tables/sentinelone-cl.md) | [Dataminr Pulse](solutions/dataminr-pulse.md)<br>[SentinelOne](solutions/sentinelone.md) | [SentinelOne](connectors/sentinelone.md) |
| [`SeraphicWebSecurity_CL`](tables/seraphicwebsecurity-cl.md) | [SeraphicSecurity](solutions/seraphicsecurity.md) | [Seraphic Web Security](connectors/seraphicwebsecurity.md) |
| [`Service_Name_Info_CL`](tables/service-name-info-cl.md) | [Infoblox](solutions/infoblox.md) |  |
| [`Sevco_Devices_CL`](tables/sevco-devices-cl.md) | [SevcoSecurity](solutions/sevcosecurity.md) | [Sevco Platform - Devices](connectors/sevcodevices.md) |
| [`ShadowByteAriaForums_CL`](tables/shadowbyteariaforums-cl.md) | [ShadowByte Aria](solutions/shadowbyte-aria.md) |  |
| [`SignInLogs`](tables/signinlogs.md) | [Microsoft Entra ID](solutions/microsoft-entra-id.md) | [Microsoft Entra ID](connectors/azureactivedirectory.md) |
| [`SigninLogs`](tables/signinlogs.md) | [1Password](solutions/1password.md)<br>[Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[+32 more](tables/signinlogs.md) | [Microsoft Entra ID](connectors/azureactivedirectory.md) |
| [`SlackAuditNativePoller_CL`](tables/slackauditnativepoller-cl.md) | [SlackAudit](solutions/slackaudit.md) | [Slack](connectors/slackaudit.md) |
| [`SlackAuditV2_CL`](tables/slackauditv2-cl.md) | [SlackAudit](solutions/slackaudit.md) | [SlackAudit (via Codeless Connector Framework)](connectors/slackauditlogsccpdefinition.md) |
| [`SlackAudit_CL`](tables/slackaudit-cl.md) | [SlackAudit](solutions/slackaudit.md) | [[DEPRECATED] Slack Audit](connectors/slackauditapi.md) |
| [`SlashNext_CL`](tables/slashnext-cl.md) | [SlashNext SIEM](solutions/slashnext-siem.md) |  |
| [`SnowflakeLoad_CL`](tables/snowflakeload-cl.md) | [Snowflake](solutions/snowflake.md) | [Snowflake (via Codeless Connector Framework)](connectors/snowflakelogsccpdefinition.md) |
| [`SnowflakeLogin_CL`](tables/snowflakelogin-cl.md) | [Snowflake](solutions/snowflake.md) | [Snowflake (via Codeless Connector Framework)](connectors/snowflakelogsccpdefinition.md) |
| [`SnowflakeMaterializedView_CL`](tables/snowflakematerializedview-cl.md) | [Snowflake](solutions/snowflake.md) | [Snowflake (via Codeless Connector Framework)](connectors/snowflakelogsccpdefinition.md) |
| [`SnowflakeQuery_CL`](tables/snowflakequery-cl.md) | [Snowflake](solutions/snowflake.md) | [Snowflake (via Codeless Connector Framework)](connectors/snowflakelogsccpdefinition.md) |
| [`SnowflakeRoleGrant_CL`](tables/snowflakerolegrant-cl.md) | [Snowflake](solutions/snowflake.md) | [Snowflake (via Codeless Connector Framework)](connectors/snowflakelogsccpdefinition.md) |
| [`SnowflakeRoles_CL`](tables/snowflakeroles-cl.md) | [Snowflake](solutions/snowflake.md) | [Snowflake (via Codeless Connector Framework)](connectors/snowflakelogsccpdefinition.md) |
| [`SnowflakeTableStorageMetrics_CL`](tables/snowflaketablestoragemetrics-cl.md) | [Snowflake](solutions/snowflake.md) | [Snowflake (via Codeless Connector Framework)](connectors/snowflakelogsccpdefinition.md) |
| [`SnowflakeTables_CL`](tables/snowflaketables-cl.md) | [Snowflake](solutions/snowflake.md) | [Snowflake (via Codeless Connector Framework)](connectors/snowflakelogsccpdefinition.md) |
| [`SnowflakeUserGrant_CL`](tables/snowflakeusergrant-cl.md) | [Snowflake](solutions/snowflake.md) | [Snowflake (via Codeless Connector Framework)](connectors/snowflakelogsccpdefinition.md) |
| [`SnowflakeUsers_CL`](tables/snowflakeusers-cl.md) | [Snowflake](solutions/snowflake.md) | [Snowflake (via Codeless Connector Framework)](connectors/snowflakelogsccpdefinition.md) |
| [`Snowflake_CL`](tables/snowflake-cl.md) | [Snowflake](solutions/snowflake.md) | [[DEPRECATED] Snowflake](connectors/snowflakedataconnector.md) |
| [`Sonrai_Tickets_CL`](tables/sonrai-tickets-cl.md) | [SonraiSecurity](solutions/sonraisecurity.md) | [Sonrai Data Connector](connectors/sonraidataconnector.md) |
| [`SophosCloudOptix_CL`](tables/sophoscloudoptix-cl.md) | [Sophos Cloud Optix](solutions/sophos-cloud-optix.md) | [Sophos Cloud Optix](connectors/sophoscloudoptix.md) |
| [`SophosEPAlerts_CL`](tables/sophosepalerts-cl.md) | [Sophos Endpoint Protection](solutions/sophos-endpoint-protection.md) | [Sophos Endpoint Protection (using REST API)](connectors/sophosendpointprotectionccpdefinition.md) |
| [`SophosEPEvents_CL`](tables/sophosepevents-cl.md) | [Sophos Endpoint Protection](solutions/sophos-endpoint-protection.md) | [Sophos Endpoint Protection (using REST API)](connectors/sophosendpointprotectionccpdefinition.md) |
| [`SophosEP_CL`](tables/sophosep-cl.md) | [Sophos Endpoint Protection](solutions/sophos-endpoint-protection.md) | [Sophos Endpoint Protection](connectors/sophosep.md) |
| [`SpyCloudBreachDataWatchlist_CL`](tables/spycloudbreachdatawatchlist-cl.md) | [SpyCloud Enterprise Protection](solutions/spycloud-enterprise-protection.md) |  |
| [`SqlAtpStatus`](tables/sqlatpstatus.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md) |  |
| [`SquidProxy_CL`](tables/squidproxy-cl.md) | [CustomLogsAma](solutions/customlogsama.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[SquidProxy](solutions/squidproxy.md) | [Custom logs via AMA](connectors/customlogsviaama.md)<br>[[Deprecated] Squid Proxy](connectors/squidproxy.md) |
| [`StorageBlobLogs`](tables/storagebloblogs.md) | [Azure Storage](solutions/azure-storage.md)<br>[ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[+3 more](tables/storagebloblogs.md) | [Azure Storage Account](connectors/azurestorageaccount.md) |
| [`StorageFileLogs`](tables/storagefilelogs.md) | [Azure Storage](solutions/azure-storage.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[Microsoft Defender for Cloud Apps](solutions/microsoft-defender-for-cloud-apps.md)<br>[+1 more](tables/storagefilelogs.md) | [Azure Storage Account](connectors/azurestorageaccount.md) |
| [`StorageQueueLogs`](tables/storagequeuelogs.md) | [Azure Storage](solutions/azure-storage.md)<br>[SOC Handbook](solutions/soc-handbook.md) | [Azure Storage Account](connectors/azurestorageaccount.md) |
| [`StorageTableLogs`](tables/storagetablelogs.md) | [Azure Storage](solutions/azure-storage.md)<br>[SOC Handbook](solutions/soc-handbook.md)<br>[ZeroTrust(TIC3.0)](solutions/zerotrust-tic3.0.md) | [Azure Storage Account](connectors/azurestorageaccount.md) |
| [`StyxViewAlerts_CL`](tables/styxviewalerts-cl.md) | [Styx Intelligence](solutions/styx-intelligence.md) | [StyxView Alerts (via Codeless Connector Platform)](connectors/styxviewendpointconnectordefinition.md) |
| [`Summary_Details_CL`](tables/summary-details-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`Summary_Details_Top_Certs_Data_CL`](tables/summary-details-top-certs-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`Summary_Details_Top_Fingerprints_Data_CL`](tables/summary-details-top-fingerprints-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`Summary_Details_Top_Open_Ports_Data_CL`](tables/summary-details-top-open-ports-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`Summary_Details_Top_Pdns_Data_CL`](tables/summary-details-top-pdns-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`SymantecICDx_CL`](tables/symantecicdx-cl.md) | [Symantec Integrated Cyber Defense](solutions/symantec-integrated-cyber-defense.md) | [Symantec Integrated Cyber Defense Exchange](connectors/symantec.md) |
| [`Syslog`](tables/syslog.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[Barracuda CloudGen Firewall](solutions/barracuda-cloudgen-firewall.md)<br>[CTERA](solutions/ctera.md)<br>[+37 more](tables/syslog.md) | [CTERA Syslog](connectors/ctera.md)<br>[Cisco Software Defined WAN](connectors/ciscosdwan.md)<br>[[Deprecated] Microsoft Sysmon For Linux](connectors/microsoftsysmonforlinux.md)<br>[[Deprecated] Nasuni Edge Appliance](connectors/nasuniedgeappliance.md)<br>[Syslog via Legacy Agent](connectors/syslog.md)<br>[+1 more](tables/syslog.md) |
| [`secRMM_CL`](tables/secrmm-cl.md) | [Squadra Technologies SecRmm](solutions/squadra-technologies-secrmm.md) | [Squadra Technologies secRMM](connectors/squadratechnologiessecrmm.md) |
| [`securescorecontrols`](tables/securescorecontrols.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md) |  |
| [`securescores`](tables/securescores.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md) |  |
| [`syslog`](tables/syslog.md) | [SOX IT Compliance](solutions/sox-it-compliance.md) |  |

## T

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`Talon_CL`](tables/talon-cl.md) | [Talon](solutions/talon.md) | [Talon Insights](connectors/talonlogs.md) |
| [`TaniumComplyCompliance_CL`](tables/taniumcomplycompliance-cl.md) | [Tanium](solutions/tanium.md) |  |
| [`TaniumComplyVulnerabilities_CL`](tables/taniumcomplyvulnerabilities-cl.md) | [Tanium](solutions/tanium.md) |  |
| [`TaniumDefenderHealth_CL`](tables/taniumdefenderhealth-cl.md) | [Tanium](solutions/tanium.md) |  |
| [`TaniumDiscoverUnmanagedAssets_CL`](tables/taniumdiscoverunmanagedassets-cl.md) | [Tanium](solutions/tanium.md) |  |
| [`TaniumHighUptime_CL`](tables/taniumhighuptime-cl.md) | [Tanium](solutions/tanium.md) |  |
| [`TaniumPatchCoverageStatus_CL`](tables/taniumpatchcoveragestatus-cl.md) | [Tanium](solutions/tanium.md) |  |
| [`TaniumPatchListApplicability_CL`](tables/taniumpatchlistapplicability-cl.md) | [Tanium](solutions/tanium.md) |  |
| [`TaniumPatchListCompliance_CL`](tables/taniumpatchlistcompliance-cl.md) | [Tanium](solutions/tanium.md) |  |
| [`TaniumSCCMClientHealth_CL`](tables/taniumsccmclienthealth-cl.md) | [Tanium](solutions/tanium.md) |  |
| [`TaniumThreatResponse_CL`](tables/taniumthreatresponse-cl.md) | [Tanium](solutions/tanium.md) |  |
| [`Tenable_IE_CL`](tables/tenable-ie-cl.md) | [Alsid For AD](solutions/alsid-for-ad.md)<br>[Tenable App](solutions/tenable-app.md)<br>[TenableAD](solutions/tenablead.md) | [Tenable Identity Exposure](connectors/tenableie.md) |
| [`Tenable_IO_Assets_CL`](tables/tenable-io-assets-cl.md) | [TenableIO](solutions/tenableio.md) | [Tenable.io Vulnerability Management](connectors/tenableioapi.md) |
| [`Tenable_IO_Vuln_CL`](tables/tenable-io-vuln-cl.md) | [TenableIO](solutions/tenableio.md) | [Tenable.io Vulnerability Management](connectors/tenableioapi.md) |
| [`Tenable_VM_Asset_CL`](tables/tenable-vm-asset-cl.md) | [Tenable App](solutions/tenable-app.md) | [Tenable Vulnerability Management](connectors/tenablevm.md) |
| [`Tenable_VM_Compliance_CL`](tables/tenable-vm-compliance-cl.md) | [Tenable App](solutions/tenable-app.md) | [Tenable Vulnerability Management](connectors/tenablevm.md) |
| [`Tenable_VM_Vuln_CL`](tables/tenable-vm-vuln-cl.md) | [Tenable App](solutions/tenable-app.md) | [Tenable Vulnerability Management](connectors/tenablevm.md) |
| [`Tenable_WAS_Asset_CL`](tables/tenable-was-asset-cl.md) | [Tenable App](solutions/tenable-app.md) | [Tenable Vulnerability Management](connectors/tenablevm.md) |
| [`Tenable_WAS_Vuln_CL`](tables/tenable-was-vuln-cl.md) | [Tenable App](solutions/tenable-app.md) | [Tenable Vulnerability Management](connectors/tenablevm.md) |
| [`Tenable_ad_CL`](tables/tenable-ad-cl.md) | [Alsid For AD](solutions/alsid-for-ad.md)<br>[Tenable App](solutions/tenable-app.md)<br>[TenableAD](solutions/tenablead.md) | [Tenable.ad](connectors/tenable.ad.md) |
| [`TheHive_CL`](tables/thehive-cl.md) | [TheHive](solutions/thehive.md) | [TheHive Project - TheHive](connectors/thehiveprojectthehive.md) |
| [`TheomAlerts_CL`](tables/theomalerts-cl.md) | [Theom](solutions/theom.md) | [Theom](connectors/theom.md) |
| [`ThreatIntelExportOperation`](tables/threatintelexportoperation.md) | [Threat Intelligence (NEW)](solutions/threat-intelligence-new.md) | [Threat intelligence - TAXII Export (Preview)](connectors/threatintelligencetaxiiexport.md) |
| [`ThreatIntelIndicators`](tables/threatintelindicators.md) | [CiscoMeraki](solutions/ciscomeraki.md)<br>[CofenseTriage](solutions/cofensetriage.md)<br>[DNS Essentials](solutions/dns-essentials.md)<br>[+9 more](tables/threatintelindicators.md) | [Lumen Defender Threat Feed Data Connector](connectors/lumenthreatfeedconnector.md)<br>[Microsoft Defender Threat Intelligence](connectors/microsoftdefenderthreatintelligence.md)<br>[Premium Microsoft Defender Threat Intelligence](connectors/premiummicrosoftdefenderforthreatintelligence.md)<br>[Threat Intelligence Platforms](connectors/threatintelligence.md)<br>[Threat intelligence - TAXII](connectors/threatintelligencetaxii.md)<br>[+1 more](tables/threatintelindicators.md) |
| [`ThreatIntelObjects`](tables/threatintelobjects.md) | [Threat Intelligence (NEW)](solutions/threat-intelligence-new.md) | [Microsoft Defender Threat Intelligence](connectors/microsoftdefenderthreatintelligence.md)<br>[Premium Microsoft Defender Threat Intelligence](connectors/premiummicrosoftdefenderforthreatintelligence.md)<br>[Threat Intelligence Platforms](connectors/threatintelligence.md)<br>[Threat intelligence - TAXII](connectors/threatintelligencetaxii.md)<br>[Threat Intelligence Upload API (Preview)](connectors/threatintelligenceuploadindicatorsapi.md) |
| [`ThreatIntelligenceIndicator`](tables/threatintelligenceindicator.md) | [CofenseIntelligence](solutions/cofenseintelligence.md)<br>[CofenseTriage](solutions/cofensetriage.md)<br>[CognyteLuminar](solutions/cognyteluminar.md)<br>[+25 more](tables/threatintelligenceindicator.md) | [Cofense Intelligence Threat Indicators Ingestion](connectors/cofenseintelligence.md)<br>[Cofense Triage Threat Indicators Ingestion](connectors/cofensetriage.md)<br>[Luminar IOCs and Leaked Credentials](connectors/cognyteluminar.md)<br>[CrowdStrike Falcon Adversary Intelligence ](connectors/crowdstrikefalconadversaryintelligence.md)<br>[Datalake2Sentinel](connectors/datalake2sentinelconnector.md)<br>[+9 more](tables/threatintelligenceindicator.md) |
| [`Tomcat_CL`](tables/tomcat-cl.md) | [CustomLogsAma](solutions/customlogsama.md)<br>[OracleWebLogicServer](solutions/oracleweblogicserver.md)<br>[Tomcat](solutions/tomcat.md) | [[Deprecated] Apache Tomcat](connectors/apachetomcat.md)<br>[Custom logs via AMA](connectors/customlogsviaama.md) |
| [`Top_Asns_By_IP_Data_CL`](tables/top-asns-by-ip-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`Top_Country_Codes_By_IP_Data_CL`](tables/top-country-codes-by-ip-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`Top_Services_By_IP_Data_CL`](tables/top-services-by-ip-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`Top_Tags_By_IP_Data_CL`](tables/top-tags-by-ip-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`TransmitSecurityActivity_CL`](tables/transmitsecurityactivity-cl.md) | [TransmitSecurity](solutions/transmitsecurity.md) | [Transmit Security Connector](connectors/transmitsecurity.md) |
| [`TrendMicroCAS_CL`](tables/trendmicrocas-cl.md) | [Trend Micro Cloud App Security](solutions/trend-micro-cloud-app-security.md) | [Trend Micro Cloud App Security](connectors/trendmicrocas.md) |
| [`TrendMicro_XDR_OAT_CL`](tables/trendmicro-xdr-oat-cl.md) | [Dataminr Pulse](solutions/dataminr-pulse.md)<br>[Trend Micro Vision One](solutions/trend-micro-vision-one.md) | [Trend Vision One](connectors/trendmicroxdr.md) |
| [`TrendMicro_XDR_RCA_Result_CL`](tables/trendmicro-xdr-rca-result-cl.md) | [Trend Micro Vision One](solutions/trend-micro-vision-one.md) | [Trend Vision One](connectors/trendmicroxdr.md) |
| [`TrendMicro_XDR_RCA_Task_CL`](tables/trendmicro-xdr-rca-task-cl.md) | [Trend Micro Vision One](solutions/trend-micro-vision-one.md) | [Trend Vision One](connectors/trendmicroxdr.md) |
| [`TrendMicro_XDR_WORKBENCH_CL`](tables/trendmicro-xdr-workbench-cl.md) | [Trend Micro Vision One](solutions/trend-micro-vision-one.md) | [Trend Vision One](connectors/trendmicroxdr.md) |
| [`Tropico_Alerts_CL`](tables/tropico-alerts-cl.md) | [Tropico](solutions/tropico.md) | [Tropico Security - Alerts](connectors/tropicoalertsdefinition.md) |
| [`Tropico_Events_CL`](tables/tropico-events-cl.md) | [Tropico](solutions/tropico.md) | [Tropico Security - Events](connectors/tropicoeventsdefinition.md) |
| [`Tropico_Incidents_CL`](tables/tropico-incidents-cl.md) | [Tropico](solutions/tropico.md) | [Tropico Security - Incidents](connectors/tropicoincidentsdefinition.md) |
| [`Ttp_Attachment_CL`](tables/ttp-attachment-cl.md) | [Mimecast](solutions/mimecast.md) | [Mimecast Targeted Threat Protection](connectors/mimecastttpapi.md) |
| [`Ttp_Impersonation_CL`](tables/ttp-impersonation-cl.md) | [Mimecast](solutions/mimecast.md) | [Mimecast Targeted Threat Protection](connectors/mimecastttpapi.md) |
| [`Ttp_Url_CL`](tables/ttp-url-cl.md) | [Mimecast](solutions/mimecast.md) | [Mimecast Targeted Threat Protection](connectors/mimecastttpapi.md) |
| [`tide_lookup_data_CL`](tables/tide-lookup-data-cl.md) | [Infoblox](solutions/infoblox.md) |  |

## U

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`UPDATE`](tables/update.md) | [Infoblox](solutions/infoblox.md)<br>[Infoblox Cloud Data Connector](solutions/infoblox-cloud-data-connector.md)<br>[SAP BTP](solutions/sap-btp.md) |  |
| [`USAGE`](tables/usage.md) | [Alsid For AD](solutions/alsid-for-ad.md)<br>[Tenable App](solutions/tenable-app.md)<br>[TenableAD](solutions/tenablead.md) |  |
| [`Ubiquiti_CL`](tables/ubiquiti-cl.md) | [CustomLogsAma](solutions/customlogsama.md)<br>[Ubiquiti UniFi](solutions/ubiquiti-unifi.md) | [Custom logs via AMA](connectors/customlogsviaama.md)<br>[[Deprecated] Ubiquiti UniFi](connectors/ubiquitiunifi.md) |
| [`Update`](tables/update.md) | [Azure Activity](solutions/azure-activity.md)<br>[AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[CybersecurityMaturityModelCertification(CMMC)2.0](solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)<br>[+10 more](tables/update.md) |  |
| [`UpdateSummary`](tables/updatesummary.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`UrlClickEvents`](tables/urlclickevents.md) | [Microsoft Business Applications](solutions/microsoft-business-applications.md)<br>[Microsoft Defender XDR](solutions/microsoft-defender-xdr.md)<br>[SOC Handbook](solutions/soc-handbook.md)<br>[+2 more](tables/urlclickevents.md) | [Microsoft Defender XDR](connectors/microsoftthreatprotection.md) |
| [`Usage`](tables/usage.md) | [Corelight](solutions/corelight.md)<br>[CybersecurityMaturityModelCertification(CMMC)2.0](solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[+6 more](tables/usage.md) |  |
| [`UserAccessAnalytics`](tables/useraccessanalytics.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`UserPeerAnalytics`](tables/userpeeranalytics.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`update`](tables/update.md) | [AzureSecurityBenchmark](solutions/azuresecuritybenchmark.md)<br>[CybersecurityMaturityModelCertification(CMMC)2.0](solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[+3 more](tables/update.md) |  |
| [`usage`](tables/usage.md) | [Corelight](solutions/corelight.md) |  |

## V

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`VMBoundPort`](tables/vmboundport.md) | [SOC Handbook](solutions/soc-handbook.md) |  |
| [`VMComputer`](tables/vmcomputer.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[SOC Handbook](solutions/soc-handbook.md) |  |
| [`VMConnection`](tables/vmconnection.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[Attacker Tools Threat Protection Essentials](solutions/attacker-tools-threat-protection-essentials.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[+8 more](tables/vmconnection.md) |  |
| [`VMProcess`](tables/vmprocess.md) | [MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[SOC Handbook](solutions/soc-handbook.md) |  |
| [`VMware_CWS_DLPLogs_CL`](tables/vmware-cws-dlplogs-cl.md) | [VMware SASE](solutions/vmware-sase.md) | [VMware SD-WAN and SASE Connector](connectors/vmwaresdwan.md) |
| [`VMware_CWS_Health_CL`](tables/vmware-cws-health-cl.md) | [VMware SASE](solutions/vmware-sase.md) | [VMware SD-WAN and SASE Connector](connectors/vmwaresdwan.md) |
| [`VMware_CWS_Weblogs_CL`](tables/vmware-cws-weblogs-cl.md) | [VMware SASE](solutions/vmware-sase.md) | [VMware SD-WAN and SASE Connector](connectors/vmwaresdwan.md) |
| [`VMware_SDWAN_FirewallLogs_CL`](tables/vmware-sdwan-firewalllogs-cl.md) | [VMware SASE](solutions/vmware-sase.md) |  |
| [`VMware_VECO_EventLogs_CL`](tables/vmware-veco-eventlogs-cl.md) | [VMware SASE](solutions/vmware-sase.md) | [VMware SD-WAN and SASE Connector](connectors/vmwaresdwan.md) |
| [`VTDomainReport_CL`](tables/vtdomainreport-cl.md) | [VirusTotal](solutions/virustotal.md) |  |
| [`VTFileReport_CL`](tables/vtfilereport-cl.md) | [VirusTotal](solutions/virustotal.md) |  |
| [`VTIPReport_CL`](tables/vtipreport-cl.md) | [VirusTotal](solutions/virustotal.md) |  |
| [`VTURLReport_CL`](tables/vturlreport-cl.md) | [VirusTotal](solutions/virustotal.md) |  |
| [`ValenceAlert_CL`](tables/valencealert-cl.md) | [Valence Security](solutions/valence-security.md) | [SaaS Security](connectors/valencesecurity.md) |
| [`VaronisAlerts_CL`](tables/varonisalerts-cl.md) | [VaronisSaaS](solutions/varonissaas.md) | [Varonis SaaS](connectors/varonissaas.md) |
| [`VectraStream_CL`](tables/vectrastream-cl.md) | [CustomLogsAma](solutions/customlogsama.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[Vectra AI Stream](solutions/vectra-ai-stream.md) | [AI Vectra Stream via Legacy Agent](connectors/aivectrastream.md)<br>[Custom logs via AMA](connectors/customlogsviaama.md) |
| [`VeeamAuthorizationEvents_CL`](tables/veeamauthorizationevents-cl.md) | [Veeam](solutions/veeam.md) | [Veeam Data Connector (using Azure Functions)](connectors/veeamcustomtablesdataconnector.md) |
| [`VeeamCovewareFindings_CL`](tables/veeamcovewarefindings-cl.md) | [Veeam](solutions/veeam.md) | [Veeam Data Connector (using Azure Functions)](connectors/veeamcustomtablesdataconnector.md) |
| [`VeeamMalwareEvents_CL`](tables/veeammalwareevents-cl.md) | [Veeam](solutions/veeam.md) | [Veeam Data Connector (using Azure Functions)](connectors/veeamcustomtablesdataconnector.md) |
| [`VeeamOneTriggeredAlarms_CL`](tables/veeamonetriggeredalarms-cl.md) | [Veeam](solutions/veeam.md) | [Veeam Data Connector (using Azure Functions)](connectors/veeamcustomtablesdataconnector.md) |
| [`VeeamSecurityComplianceAnalyzer_CL`](tables/veeamsecuritycomplianceanalyzer-cl.md) | [Veeam](solutions/veeam.md) | [Veeam Data Connector (using Azure Functions)](connectors/veeamcustomtablesdataconnector.md) |
| [`VeeamSessions_CL`](tables/veeamsessions-cl.md) | [Veeam](solutions/veeam.md) | [Veeam Data Connector (using Azure Functions)](connectors/veeamcustomtablesdataconnector.md) |
| [`varonisresources_CL`](tables/varonisresources-cl.md) | [Varonis Purview](solutions/varonis-purview.md) | [Varonis Purview Push Connector](connectors/varonispurviewpush.md) |
| [`vcenter_CL`](tables/vcenter-cl.md) | [CustomLogsAma](solutions/customlogsama.md)<br>[VMware vCenter](solutions/vmware-vcenter.md) | [Custom logs via AMA](connectors/customlogsviaama.md)<br>[[Deprecated] VMware vCenter](connectors/vmwarevcenter.md) |
| [`vectra_dns_CL`](tables/vectra-dns-cl.md) | [Vectra AI Stream](solutions/vectra-ai-stream.md) | [[Recommended] Vectra AI Stream via AMA](connectors/vectrastreamama.md) |
| [`vectra_isession_CL`](tables/vectra-isession-cl.md) | [Vectra AI Stream](solutions/vectra-ai-stream.md) | [[Recommended] Vectra AI Stream via AMA](connectors/vectrastreamama.md) |
| [`vectra_ssl_CL`](tables/vectra-ssl-cl.md) | [Vectra AI Stream](solutions/vectra-ai-stream.md) | [[Recommended] Vectra AI Stream via AMA](connectors/vectrastreamama.md) |

## W

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`W3CIISLog`](tables/w3ciislog.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[Microsoft Exchange Security - Exchange On-Premises](solutions/microsoft-exchange-security-exchange-on-premises.md)<br>[+5 more](tables/w3ciislog.md) | [[Deprecated] Microsoft Exchange Logs and Events](connectors/esi-exchangeadminauditlogevents.md)<br>[IIS Logs of Microsoft Exchange Servers](connectors/esi-opt5exchangeiislogs.md) |
| [`Watchlist`](tables/watchlist.md) | [Apache Log4j Vulnerability Detection](solutions/apache-log4j-vulnerability-detection.md)<br>[MicrosoftPurviewInsiderRiskManagement](solutions/microsoftpurviewinsiderriskmanagement.md)<br>[SOC Handbook](solutions/soc-handbook.md)<br>[+1 more](tables/watchlist.md) |  |
| [`WebSession_Summarized_DstIP_CL`](tables/websession-summarized-dstip-cl.md) | [Web Session Essentials](solutions/web-session-essentials.md) |  |
| [`WebSession_Summarized_SrcIP_CL`](tables/websession-summarized-srcip-cl.md) | [Web Session Essentials](solutions/web-session-essentials.md) |  |
| [`WebSession_Summarized_SrcInfo_CL`](tables/websession-summarized-srcinfo-cl.md) | [Web Session Essentials](solutions/web-session-essentials.md) |  |
| [`WebSession_Summarized_ThreatInfo_CL`](tables/websession-summarized-threatinfo-cl.md) | [Web Session Essentials](solutions/web-session-essentials.md) |  |
| [`Whois_Data_CL`](tables/whois-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |
| [`WindowsEvent`](tables/windowsevent.md) | [Attacker Tools Threat Protection Essentials](solutions/attacker-tools-threat-protection-essentials.md)<br>[Dataminr Pulse](solutions/dataminr-pulse.md)<br>[Endpoint Threat Protection Essentials](solutions/endpoint-threat-protection-essentials.md)<br>[+7 more](tables/windowsevent.md) | [Windows Forwarded Events](connectors/windowsforwardedevents.md) |
| [`WindowsFirewall`](tables/windowsfirewall.md) | [ContinuousDiagnostics&Mitigation](solutions/continuousdiagnostics&mitigation.md)<br>[Malware Protection Essentials](solutions/malware-protection-essentials.md)<br>[MaturityModelForEventLogManagementM2131](solutions/maturitymodelforeventlogmanagementm2131.md)<br>[+4 more](tables/windowsfirewall.md) | [Windows Firewall](connectors/windowsfirewall.md) |
| [`WireData`](tables/wiredata.md) | [SOC Handbook](solutions/soc-handbook.md)<br>[Threat Intelligence](solutions/threat-intelligence.md) |  |
| [`WizAuditLogsV2_CL`](tables/wizauditlogsv2-cl.md) | [Wiz](solutions/wiz.md) | [Wiz](connectors/wiz.md) |
| [`WizAuditLogs_CL`](tables/wizauditlogs-cl.md) | [Wiz](solutions/wiz.md) | [Wiz](connectors/wiz.md) |
| [`WizIssuesV2_CL`](tables/wizissuesv2-cl.md) | [Wiz](solutions/wiz.md) | [Wiz](connectors/wiz.md) |
| [`WizIssues_CL`](tables/wizissues-cl.md) | [Wiz](solutions/wiz.md) | [Wiz](connectors/wiz.md) |
| [`WizVulnerabilitiesV2_CL`](tables/wizvulnerabilitiesv2-cl.md) | [Wiz](solutions/wiz.md) | [Wiz](connectors/wiz.md) |
| [`WizVulnerabilities_CL`](tables/wizvulnerabilities-cl.md) | [Wiz](solutions/wiz.md) | [Wiz](connectors/wiz.md) |
| [`Workplace_Facebook_CL`](tables/workplace-facebook-cl.md) | [Workplace from Facebook](solutions/workplace-from-facebook.md) | [Workplace from Facebook](connectors/workplacefacebook.md) |
| [`WsSecurityEvents_CL`](tables/wssecurityevents-cl.md) | [WithSecureElementsViaFunction](solutions/withsecureelementsviafunction.md) | [WithSecure Elements API (Azure Function)](connectors/withsecureelementsviafunction.md) |
| [`watchlist`](tables/watchlist.md) | [Dataminr Pulse](solutions/dataminr-pulse.md)<br>[HIPAA Compliance](solutions/hipaa-compliance.md)<br>[PCI DSS Compliance](solutions/pci-dss-compliance.md) |  |
| [`web_assets_CL`](tables/web-assets-cl.md) | [HolmSecurity](solutions/holmsecurity.md) | [Holm Security Asset Data](connectors/holmsecurityassets.md) |

## X

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`X509_Data_CL`](tables/x509-data-cl.md) | [Team Cymru Scout](solutions/team-cymru-scout.md) |  |

## Z

| Table | Solutions | Connectors |
|-------|-----------|------------|
| [`ZNSegmentAuditNativePoller_CL`](tables/znsegmentauditnativepoller-cl.md) | [ZeroNetworks](solutions/zeronetworks.md) | [Zero Networks Segment Audit](connectors/zeronetworkssegmentauditnativepoller.md) |
| [`ZNSegmentAudit_CL`](tables/znsegmentaudit-cl.md) | [ZeroNetworks](solutions/zeronetworks.md) |  |
| [`ZPA_CL`](tables/zpa-cl.md) | [CustomLogsAma](solutions/customlogsama.md)<br>[Zscaler Private Access (ZPA)](solutions/zscaler-private-access-zpa.md) | [Custom logs via AMA](connectors/customlogsviaama.md)<br>[[Deprecated] Zscaler Private Access](connectors/zscalerprivateaccess.md) |
| [`ZeroFoxAlertPoller_CL`](tables/zerofoxalertpoller-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox Enterprise - Alerts (Polling CCF)](connectors/zerofoxalertsdefinition.md) |
| [`ZeroFox_CTI_C2_CL`](tables/zerofox-cti-c2-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_advanced_dark_web_CL`](tables/zerofox-cti-advanced-dark-web-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_botnet_CL`](tables/zerofox-cti-botnet-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_breaches_CL`](tables/zerofox-cti-breaches-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_compromised_credentials_CL`](tables/zerofox-cti-compromised-credentials-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_credit_cards_CL`](tables/zerofox-cti-credit-cards-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_dark_web_CL`](tables/zerofox-cti-dark-web-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_discord_CL`](tables/zerofox-cti-discord-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_disruption_CL`](tables/zerofox-cti-disruption-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_email_addresses_CL`](tables/zerofox-cti-email-addresses-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_exploits_CL`](tables/zerofox-cti-exploits-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_irc_CL`](tables/zerofox-cti-irc-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_malware_CL`](tables/zerofox-cti-malware-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_national_ids_CL`](tables/zerofox-cti-national-ids-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_phishing_CL`](tables/zerofox-cti-phishing-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_phone_numbers_CL`](tables/zerofox-cti-phone-numbers-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_ransomware_CL`](tables/zerofox-cti-ransomware-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_telegram_CL`](tables/zerofox-cti-telegram-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_threat_actors_CL`](tables/zerofox-cti-threat-actors-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZeroFox_CTI_vulnerabilities_CL`](tables/zerofox-cti-vulnerabilities-cl.md) | [ZeroFox](solutions/zerofox.md) | [ZeroFox CTI](connectors/zerofoxctidataconnector.md) |
| [`ZimperiumMitigationLog_CL`](tables/zimperiummitigationlog-cl.md) | [Zimperium Mobile Threat Defense](solutions/zimperium-mobile-threat-defense.md) | [Zimperium Mobile Threat Defense](connectors/zimperiummtdalerts.md) |
| [`ZimperiumThreatLog_CL`](tables/zimperiumthreatlog-cl.md) | [Zimperium Mobile Threat Defense](solutions/zimperium-mobile-threat-defense.md) | [Zimperium Mobile Threat Defense](connectors/zimperiummtdalerts.md) |
| [`Zoom_CL`](tables/zoom-cl.md) | [ZeroTrust(TIC3.0)](solutions/zerotrust-tic3.0.md)<br>[ZoomReports](solutions/zoomreports.md) | [Zoom Reports](connectors/zoom.md) |

---

**Browse:** [🏠](readme.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · **Tables** · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md)

