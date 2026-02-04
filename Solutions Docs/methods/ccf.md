# Codeless Connector Framework (CCF)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Methods Index](../methods-index.md)

---

The Codeless Connector Framework (CCF) enables creating data connectors using a declarative JSON configuration without writing code. CCF connectors can poll REST APIs, process responses, and ingest data into custom log tables. This framework is used for many modern Microsoft Sentinel connectors.

## Documentation

- [📖 Create a codeless connector](https://learn.microsoft.com/azure/sentinel/create-codeless-connector)
- [📖 Codeless Connector Platform reference](https://learn.microsoft.com/azure/sentinel/data-connector-connection-rules-reference)
- [📖 Connector definition reference](https://learn.microsoft.com/azure/sentinel/data-connector-ui-definitions-reference)

## Statistics

| Metric | Count |
|:-------|------:|
| Total Connectors | **132** |
| Active | 124 |
| Deprecated 🚫 | 1 |
| Unpublished ⚠️ | 7 |

## Connectors Using This Method

### Active Connectors

| Connector | Publisher | Tables | Solution |
|:----------|:----------|:------:|:---------|
| [ Atlassian Confluence Audit (via Codeless Connector Framework)](../connectors/confluenceauditccpdefinition.md) | Microsoft | 1 | [AtlassianConfluenceAudit](../solutions/atlassianconfluenceaudit.md) |
| [ Dragos Notifications via Cloud Sitestore](../connectors/dragossitestoreccp.md) | Dragos | 1 | [Dragos](../solutions/dragos.md) |
| [1Password (Serverless)](../connectors/1password-serverless.md) | Unknown (ARM variable) | 1 | [1Password](../solutions/1password.md) |
| [1Password (Serverless)](../connectors/1passwordccpdefinition.md) | 1Password | 1 | [1Password](../solutions/1password.md) |
| [Alibaba Cloud ActionTrail (via Codeless Connector Framework)](../connectors/alicloudactiontrailccpdefinition.md) | Microsoft | 1 | [Alibaba Cloud ActionTrail](../solutions/alibaba-cloud-actiontrail.md) |
| [Amazon Web Services CloudFront (via Codeless Connector Framework) (Preview)](../connectors/awscloudfrontccpdefinition.md) ➕ | Microsoft | 1 | [AWS CloudFront](../solutions/aws-cloudfront.md) |
| [Amazon Web Services NetworkFirewall (via Codeless Connector Framework)](../connectors/awsnetworkfirewallccpdefinition.md) ➕ | Microsoft | 3 | [Amazon Web Services NetworkFirewall](../solutions/amazon-web-services-networkfirewall.md) |
| [Amazon Web Services S3 DNS Route53 (via Codeless Connector Framework)](../connectors/awsroute53resolverccpdefinition.md) ➕ | Microsoft | 1 | [Amazon Web Services Route 53](../solutions/amazon-web-services-route-53.md) |
| [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md) ⚠️ ➕ | Microsoft | 1 | [AWS VPC Flow Logs](../solutions/aws-vpc-flow-logs.md) |
| [Amazon Web Services S3 WAF](../connectors/awss3wafccpdefinition.md) ➕ | Microsoft | 1 | [Amazon Web Services](../solutions/amazon-web-services.md) |
| [Anvilogic](../connectors/anvilogicccfdefinition.md) | Anvilogic | 1 | [Anvilogic](../solutions/anvilogic.md) |
| [Atlassian Confluence](../connectors/atlassianconfluence.md) | Atlassian | 1 | [AtlassianConfluenceAudit](../solutions/atlassianconfluenceaudit.md) |
| [Atlassian Jira Audit (using REST API)](../connectors/jiraauditccpdefinition.md) | Microsoft | 1 | [AtlassianJiraAudit](../solutions/atlassianjiraaudit.md) |
| [Auth0 Logs](../connectors/auth0connectorccpdefinition.md) | Microsoft | 1 | [Auth0](../solutions/auth0.md) |
| [AWS S3 Server Access Logs (via Codeless Connector Framework)](../connectors/awss3serveraccesslogsdefinition.md) ➕ | Microsoft | 1 | [AWS_AccessLogs](../solutions/aws-accesslogs.md) |
| [AWS Security Hub Findings (via Codeless Connector Framework)](../connectors/awssecurityhubfindingsccpdefinition.md) ➕ | Microsoft | 1 | [AWS Security Hub](../solutions/aws-security-hub.md) |
| [Azure DevOps Audit Logs (via Codeless Connector Platform)](../connectors/azuredevopsauditlogs.md) | Microsoft | 1 | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| [BigID DSPM connector](../connectors/bigiddspmlogsconnectordefinition.md) ⚠️ | BigID | 2 | [BigID](../solutions/bigid.md) |
| [Bitwarden Event Logs](../connectors/bitwardeneventlogs.md) | Bitwarden Inc | 3 | [Bitwarden](../solutions/bitwarden.md) |
| [Box Events (CCP)](../connectors/boxeventsccpdefinition.md) | Microsoft | 2 | [Box](../solutions/box.md) |
| [Check Point CloudGuard CNAPP Connector for Microsoft Sentinel](../connectors/cloudguardccpdefinition.md) | CheckPoint | 1 | [Check Point CloudGuard CNAPP](../solutions/check-point-cloudguard-cnapp.md) |
| [Check Point Cyberint Alerts Connector (via Codeless Connector Platform)](../connectors/checkpointcyberintalerts.md) | Checkpoint Cyberint | 1 | [Check Point Cyberint Alerts](../solutions/check-point-cyberint-alerts.md) |
| [Check Point Cyberint IOC Connector](../connectors/checkpointcyberintioc.md) | Checkpoint Cyberint | 1 | [Check Point Cyberint IOC](../solutions/check-point-cyberint-ioc.md) |
| [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) ➕ | Microsoft | 3 | [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md) |
| [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) | Microsoft | 3 | [CiscoMeraki](../solutions/ciscomeraki.md) |
| [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) ➕ | Microsoft | 3 | [CiscoMeraki](../solutions/ciscomeraki.md) |
| [Cisco Secure Endpoint (via Codeless Connector Framework)](../connectors/ciscosecureendpointlogsccpdefinition.md) | Microsoft | 2 | [Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md) |
| [Cloudflare (Using Blob Container) (via Codeless Connector Framework)](../connectors/cloudflaredefinition.md) | Microsoft | 1 | [Cloudflare](../solutions/cloudflare.md) |
| [Cortex XDR - Incidents](../connectors/cortexxdrincidents.md) | DEFEND Ltd. | 1 | [Cortex XDR](../solutions/cortex-xdr.md) |
| [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) | Microsoft | 4 | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |
| [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) | Microsoft | 10 | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |
| [Cyble Vision Alerts](../connectors/cyblevisionalerts.md) | Cyble | 1 | [Cyble Vision](../solutions/cyble-vision.md) |
| [Cyera DSPM Microsoft Sentinel Data Connector](../connectors/cyeradspmccf.md) ⚠️ | Cyera Inc | 5 | [CyeraDSPM](../solutions/cyeradspm.md) |
| [CYFIRMA Attack Surface](../connectors/cyfirmaattacksurfacealertsconnector.md) | Microsoft | 6 | [Cyfirma Attack Surface](../solutions/cyfirma-attack-surface.md) |
| [CYFIRMA Brand Intelligence](../connectors/cyfirmabrandintelligencealertsdc.md) | Microsoft | 5 | [Cyfirma Brand Intelligence](../solutions/cyfirma-brand-intelligence.md) |
| [CYFIRMA Compromised Accounts](../connectors/cyfirmacompromisedaccountsdataconnector.md) | Microsoft | 1 | [Cyfirma Compromised Accounts](../solutions/cyfirma-compromised-accounts.md) |
| [CYFIRMA Cyber Intelligence](../connectors/cyfirmacyberintelligencedc.md) | Microsoft | 4 | [Cyfirma Cyber Intelligence](../solutions/cyfirma-cyber-intelligence.md) |
| [CYFIRMA Digital Risk](../connectors/cyfirmadigitalriskalertsconnector.md) | Microsoft | 7 | [Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md) |
| [CYFIRMA Vulnerabilities Intelligence](../connectors/cyfirmavulnerabilitiesinteldc.md) | Microsoft | 1 | [Cyfirma Vulnerabilities Intel](../solutions/cyfirma-vulnerabilities-intel.md) |
| [Cyren Threat Intelligence](../connectors/cyrenthreatintel.md) ⚠️ | Cyren | 1 | [CyrenThreatIntelligence](../solutions/cyrenthreatintelligence.md) |
| [Druva Events Connector](../connectors/druvaeventccpdefinition.md) | Microsoft | 3 | [DruvaDataSecurityCloud](../solutions/druvadatasecuritycloud.md) |
| [Dynamics 365 Finance and Operations](../connectors/dynamics365finance.md) | Microsoft | 1 | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| [Dynatrace Attacks](../connectors/dynatraceattacks.md) | Dynatrace | 1 | [Dynatrace](../solutions/dynatrace.md) |
| [Dynatrace Audit Logs](../connectors/dynatraceauditlogs.md) | Dynatrace | 1 | [Dynatrace](../solutions/dynatrace.md) |
| [Dynatrace Problems](../connectors/dynatraceproblems.md) | Dynatrace | 1 | [Dynatrace](../solutions/dynatrace.md) |
| [Dynatrace Runtime Vulnerabilities](../connectors/dynatraceruntimevulnerabilities.md) | Dynatrace | 1 | [Dynatrace](../solutions/dynatrace.md) |
| [Egress Defend](../connectors/egressdefendpolling.md) ⚠️ | Egress Software Technologies | 1 | [Egress Defend](../solutions/egress-defend.md) |
| [Egress Iris Connector](../connectors/egresssiempolling.md) | Egress Software Technologies | 2 | [Egress Iris](../solutions/egress-iris.md) |
| [Ermes Browser Security Events](../connectors/ermesbrowsersecurityevents.md) | Ermes Cyber Security S.p.A. | 1 | [Ermes Browser Security](../solutions/ermes-browser-security.md) |
| [Flare Push Connector](../connectors/fireworkpush.md) | Flare Systems | 1 | [Flare](../solutions/flare.md) |
| [GCP Cloud Run (via Codeless Connector Framework)](../connectors/gcpcloudrunlogs-connectordefinition.md) | Microsoft | 1 | [Google Cloud Platform Cloud Run](../solutions/google-cloud-platform-cloud-run.md) |
| [GCP Cloud SQL (via Codeless Connector Framework)](../connectors/gcpcloudsqlccfdefinition.md) | Microsoft | 1 | [GoogleCloudPlatformSQL](../solutions/googlecloudplatformsql.md) |
| [GCP Pub/Sub Audit Logs](../connectors/gcpauditlogsdefinition.md) ➕ | Microsoft | 1 | [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md) |
| [GCP Pub/Sub Audit Logs](../connectors/gcppub-subauditlogs.md) ➕ | Microsoft | 1 | [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md) |
| [GCP Pub/Sub Firewall Logs](../connectors/gcpfirewalllogsccpdefinition.md) | Microsoft | 1 | [Google Cloud Platform Firewall Logs](../solutions/google-cloud-platform-firewall-logs.md) |
| [GCP Pub/Sub Load Balancer Logs (via Codeless Connector Platform).](../connectors/gcpfloadbalancerlogsccpdefinition.md) | Microsoft | 1 | [Google Cloud Platform Load Balancer Logs](../solutions/google-cloud-platform-load-balancer-logs.md) |
| [GCP Pub/Sub VPC Flow Logs (via Codeless Connector Framework)](../connectors/gcpvpcflowlogsccpdefinition.md) | Microsoft | 1 | [Google Cloud Platform VPC Flow Logs](../solutions/google-cloud-platform-vpc-flow-logs.md) |
| [GitHub Enterprise Audit Log (via Codeless Connector Framework)](../connectors/githubauditdefinitionv2.md) | Microsoft | 1 | [GitHub](../solutions/github.md) |
| [Google ApigeeX (via Codeless Connector Framework)](../connectors/googleapigeexlogsccpdefinition.md) | Microsoft | 1 | [Google Apigee](../solutions/google-apigee.md) |
| [Google Cloud Platform CDN (via Codeless Connector Framework)](../connectors/gcpcdnlogsccpdefinition.md) | Microsoft | 1 | [GoogleCloudPlatformCDN](../solutions/googlecloudplatformcdn.md) |
| [Google Cloud Platform Cloud IDS (via Codeless Connector Framework)](../connectors/gcpcloudidslogsccpdefinition.md) | Microsoft | 1 | [GoogleCloudPlatformIDS](../solutions/googlecloudplatformids.md) |
| [Google Cloud Platform Cloud Monitoring (via Codeless Connector Framework)](../connectors/gcpmonitorccpdefinition.md) | Microsoft | 1 | [Google Cloud Platform Cloud Monitoring](../solutions/google-cloud-platform-cloud-monitoring.md) |
| [Google Cloud Platform Compute Engine (via Codeless Connector Framework)](../connectors/gcpcomputeenginelogsccpdefinition.md) | Microsoft | 1 | [Google Cloud Platform Compute Engine](../solutions/google-cloud-platform-compute-engine.md) |
| [Google Cloud Platform DNS (via Codeless Connector Framework)](../connectors/gcpdnslogsccpdefinition.md) | Microsoft | 1 | [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md) |
| [Google Cloud Platform IAM (via Codeless Connector Framework)](../connectors/gcpiamccpdefinition.md) | Microsoft | 1 | [GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md) |
| [Google Cloud Platform NAT (via Codeless Connector Framework)](../connectors/gcpnatlogsccpdefinition.md) | Microsoft | 2 | [GoogleCloudPlatformNAT](../solutions/googlecloudplatformnat.md) |
| [Google Cloud Platform Resource Manager (via Codeless Connector Framework)](../connectors/gcpresourcemanagerlogsccfdefinition.md) | Microsoft | 1 | [GoogleCloudPlatformResourceManager](../solutions/googlecloudplatformresourcemanager.md) |
| [Google Kubernetes Engine (via Codeless Connector Framework)](../connectors/gkeccpdefinition.md) | Microsoft | 6 | [Google Kubernetes Engine](../solutions/google-kubernetes-engine.md) |
| [Google Workspace Activities (via Codeless Connector Framework)](../connectors/googleworkspaceccpdefinition.md) | Microsoft | 1 | [GoogleWorkspaceReports](../solutions/googleworkspacereports.md) |
| [Halcyon Connector](../connectors/halcyonpush.md) | Halcyon | 5 | [Halcyon](../solutions/halcyon.md) |
| [Illumio Insights](../connectors/illumioinsightsdefinition.md) | Microsoft | 1 | [Illumio Insight](../solutions/illumio-insight.md) |
| [Illumio Insights Summary](../connectors/illumioinsightssummaryccp.md) | Illumio | 1 | [Illumio Insight](../solutions/illumio-insight.md) |
| [Illumio Saas](../connectors/illumiosaasccfdefinition.md) | Microsoft | 1 | [IllumioSaaS](../solutions/illumiosaas.md) |
| [Imperva Cloud WAF](../connectors/impervacloudwaflogsccfdefinition.md) | Microsoft | 1 | [ImpervaCloudWAF](../solutions/impervacloudwaf.md) |
| [Island Enterprise Browser Admin Audit (Polling CCP)](../connectors/island-admin-polling.md) | Island | 1 | [Island](../solutions/island.md) |
| [Island Enterprise Browser User Activity (Polling CCP)](../connectors/island-user-polling.md) | Island | 1 | [Island](../solutions/island.md) |
| [Jamf Protect Push Connector](../connectors/jamfprotectpush.md) | Jamf | 3 | [Jamf Protect](../solutions/jamf-protect.md) |
| [Keeper Security Push Connector](../connectors/keepersecuritypush2.md) | Keeper Security | 1 | [Keeper Security](../solutions/keeper-security.md) |
| [LastPass Enterprise - Reporting (Polling CCP)](../connectors/lastpass-polling.md) | The Collective Consulting BV | 1 | [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md) |
| [Lookout Mobile Threat Detection Connector (via Codeless Connector Framework) (Preview)](../connectors/lookoutstreaming-definition.md) | Microsoft | 1 | [Lookout](../solutions/lookout.md) |
| [MailRisk by Secure Practice](../connectors/securepracticemailriskconnector.md) | Secure Practice | 1 | [MailRisk](../solutions/mailrisk.md) |
| [Microsoft Copilot](../connectors/microsoftcopilot.md) | Microsoft | 1 | [Microsoft Copilot](../solutions/microsoft-copilot.md) |
| [Miro Audit Logs (Enterprise Plan)](../connectors/miroauditlogsdataconnector.md) | Miro | 1 | [Miro](../solutions/miro.md) |
| [Miro Content Logs (Enterprise Plan + Enterprise Guard)](../connectors/mirocontentlogsdataconnector.md) | Miro | 1 | [Miro](../solutions/miro.md) |
| [Morphisec API Data Connector (via Codeless Connector Framework)](../connectors/morphisecccf.md) | Morphisec | 1 | [Morphisec](../solutions/morphisec.md) |
| [Netskope Alerts and Events](../connectors/netskopealertsevents.md) | Netskope | 9 | [Netskopev2](../solutions/netskopev2.md) |
| [Obsidian Datasharing Connector](../connectors/obsidiandatasharing.md) | Obsidian Security | 2 | [Obsidian Datasharing](../solutions/obsidian-datasharing.md) |
| [Okta Single Sign-On](../connectors/oktassov2.md) | Microsoft | 2 | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| [Okta Single Sign-On (Polling CCP)](../connectors/oktasso-polling.md) | Okta | 1 | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| [Okta Single Sign-On (using Azure Functions)](../connectors/oktasinglesignon-usingazurefunctions.md) | Okta | 2 | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| [Onapsis Defend Integration](../connectors/onapsis.md) | Onapsis Platform | 2 | [Onapsis Defend](../solutions/onapsis-defend.md) |
| [OneLogin IAM Platform (via Codeless Connector Framework)](../connectors/oneloginiamlogsccpdefinition.md) | Microsoft | 2 | [OneLoginIAM](../solutions/oneloginiam.md) |
| [OneTrust](../connectors/onetrustpush.md) | OneTrust | 1 | [OneTrust](../solutions/onetrust.md) |
| [Oracle Cloud Infrastructure (via CCP) – Preview](../connectors/oci-connector-ccp-definition.md) | Microsoft | 1 | [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md) |
| [Oracle Cloud Infrastructure (via Codeless Connector Framework)](../connectors/oraclecloudinfraconnector.md) | Microsoft | 1 | [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md) |
| [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | Microsoft | 5 | [Cortex XDR](../solutions/cortex-xdr.md) |
| [Palo Alto Cortex Xpanse (via Codeless Connector Framework)](../connectors/paloaltoexpanseccpdefinition.md) | Microsoft | 1 | [Palo Alto Cortex Xpanse CCF](../solutions/palo-alto-cortex-xpanse-ccf.md) |
| [Palo Alto Prisma Cloud CSPM (via Codeless Connector Framework)](../connectors/paloaltoprismacloudcspmccpdefinition.md) | Microsoft | 2 | [PaloAltoPrismaCloud](../solutions/paloaltoprismacloud.md) |
| [Palo Alto Prisma Cloud CWPP (using REST API)](../connectors/paloaltoprismacloudcwpp.md) | Microsoft | 1 | [Palo Alto Prisma Cloud CWPP](../solutions/palo-alto-prisma-cloud-cwpp.md) |
| [Pathlock Inc.: Threat Detection and Response for SAP](../connectors/pathlock-tdnr.md) | Pathlock Inc. | 2 | [Pathlock_TDnR](../solutions/pathlock-tdnr.md) |
| [Phosphorus Devices](../connectors/phosphorus-polling.md) | Phosphorus Inc. | 1 | [Phosphorus](../solutions/phosphorus.md) |
| [Ping One (via Codeless Connector Framework)](../connectors/pingoneauditlogsccpdefinition.md) | Microsoft | 1 | [PingOne](../solutions/pingone.md) |
| [Proofpoint On Demand Email Security (via Codeless Connector Platform)](../connectors/proofpointccpdefinition.md) | Proofpoint | 2 | [Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md) |
| [Proofpoint TAP (via Codeless Connector Platform)](../connectors/proofpointtapv2.md) | Proofpoint | 4 | [ProofPointTap](../solutions/proofpointtap.md) |
| [QscoutAppEventsConnector (via Codeless Connector Framework)](../connectors/qscoutappeventsccfdefinition.md) | Quokka | 1 | [Quokka](../solutions/quokka.md) |
| [Qualys Vulnerability Management (via Codeless Connector Framework)](../connectors/qualysvmlogsccpdefinition.md) | Microsoft | 1 | [QualysVM](../solutions/qualysvm.md) |
| [RSA ID Plus Admin Logs Connector](../connectors/rsaidplus-adminglogs-connector.md) | RSA | 1 | [RSAIDPlus_AdminLogs_Connector](../solutions/rsaidplus-adminlogs-connector.md) |
| [Salesforce Service Cloud (via Codeless Connector Framework)](../connectors/salesforceservicecloudccpdefinition.md) | Microsoft | 1 | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |
| [SAP BTP](../connectors/sapbtpauditevents.md) | Microsoft | 1 | [SAP BTP](../solutions/sap-btp.md) |
| [SAP Enterprise Threat Detection, cloud edition](../connectors/sapetdalerts.md) | SAP | 2 | [SAP ETD Cloud](../solutions/sap-etd-cloud.md) |
| [SAP LogServ (RISE), S/4HANA Cloud private edition](../connectors/saplogserv.md) | SAP SE | 1 | [SAP LogServ](../solutions/sap-logserv.md) |
| [SAP S/4HANA Cloud Public Edition](../connectors/saps4publicalerts.md) | SAP | 1 | [SAP S4 Cloud Public Edition](../solutions/sap-s4-cloud-public-edition.md) |
| [SecurityBridge Solution for SAP](../connectors/securitybridge.md) ➕ | SecurityBridge Group GmbH | 2 | [SecurityBridge App](../solutions/securitybridge-app.md) |
| [SentinelOne](../connectors/sentineloneccp.md) | Microsoft | 5 | [SentinelOne](../solutions/sentinelone.md) |
| [Seraphic Web Security](../connectors/seraphicwebsecurity.md) | Seraphic | 1 | [SeraphicSecurity](../solutions/seraphicsecurity.md) |
| [Slack](../connectors/slackaudit.md) | Slack | 1 | [SlackAudit](../solutions/slackaudit.md) |
| [SlackAudit (via Codeless Connector Framework)](../connectors/slackauditlogsccpdefinition.md) | Microsoft | 1 | [SlackAudit](../solutions/slackaudit.md) |
| [Snowflake (via Codeless Connector Framework)](../connectors/snowflakelogsccpdefinition.md) | Microsoft | 10 | [Snowflake](../solutions/snowflake.md) |
| [SOC Prime Platform Audit Logs Data Connector](../connectors/socprimeauditlogsdataconnector.md) | Microsoft | 1 | [SOC Prime CCF](../solutions/soc-prime-ccf.md) |
| [Sophos Endpoint Protection (using REST API)](../connectors/sophosendpointprotectionccpdefinition.md) | Microsoft | 2 | [Sophos Endpoint Protection](../solutions/sophos-endpoint-protection.md) |
| [StyxView Alerts (via Codeless Connector Platform)](../connectors/styxviewendpointconnectordefinition.md) ⚠️ | Styx Intelligence | 1 | [Styx Intelligence](../solutions/styx-intelligence.md) |
| [TacitRed Compromised Credentials](../connectors/tacitredthreatintel.md) ⚠️ | TacitRed | 1 | [TacitRedThreatIntelligence](../solutions/tacitredthreatintelligence.md) |
| [Tropico Security - Alerts](../connectors/tropicoalertsdefinition.md) | Tropico Security | 1 | [Tropico](../solutions/tropico.md) |
| [Tropico Security - Events](../connectors/tropicoeventsdefinition.md) | Tropico Security | 1 | [Tropico](../solutions/tropico.md) |
| [Tropico Security - Incidents](../connectors/tropicoincidentsdefinition.md) | Tropico Security | 1 | [Tropico](../solutions/tropico.md) |
| [Varonis Purview Push Connector](../connectors/varonispurviewpush.md) | Varonis | 1 | [Varonis Purview](../solutions/varonis-purview.md) |
| [VersasecCms](../connectors/versaseccmsccpdefinition.md) | Versasec AB | 2 | [VersasecCMS](../solutions/versaseccms.md) |
| [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) | Microsoft | 7 | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| [Workday User Activity](../connectors/workdayccpdefinition.md) | Microsoft | 1 | [Workday](../solutions/workday.md) |
| [Zero Networks Segment Audit](../connectors/zeronetworkssegmentauditnativepoller.md) | Zero Networks | 1 | [ZeroNetworks](../solutions/zeronetworks.md) |
| [ZeroFox Enterprise - Alerts (Polling CCF)](../connectors/zerofoxalertsdefinition.md) | ZeroFox Enterprise | 1 | [ZeroFox](../solutions/zerofox.md) |

### Deprecated Connectors 🚫

| Connector | Publisher | Tables | Solution |
|:----------|:----------|:------:|:---------|
| 🚫 [[Deprecated] GitHub Enterprise Audit Log](../connectors/githubecauditlogpolling.md) | GitHub | 3 | [GitHub](../solutions/github.md) |

---

> 🚫 **Deprecated:** This connector has been deprecated and may be removed in future versions.

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Methods Index](../methods-index.md)

