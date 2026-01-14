# ThreatIntelligenceIndicator

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ThreatIntelligenceIndicator table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/threatintelligenceindicator) |

## Solutions (28)

This table is used by the following solutions:

- [CofenseIntelligence](../solutions/cofenseintelligence.md)
- [CofenseTriage](../solutions/cofensetriage.md)
- [CognyteLuminar](../solutions/cognyteluminar.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)
- [Datalake2Sentinel](../solutions/datalake2sentinel.md)
- [Forcepoint NGFW](../solutions/forcepoint-ngfw.md)
- [GitLab](../solutions/gitlab.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [Infoblox](../solutions/infoblox.md)
- [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md)
- [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md)
- [MISP2Sentinel](../solutions/misp2sentinel.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender Threat Intelligence](../solutions/microsoft-defender-threat-intelligence.md)
- [MimecastTIRegional](../solutions/mimecasttiregional.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Network Session Essentials](../solutions/network-session-essentials.md)
- [Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [ThreatConnect](../solutions/threatconnect.md)
- [Ubiquiti UniFi](../solutions/ubiquiti-unifi.md)
- [VMRay](../solutions/vmray.md)
- [Web Session Essentials](../solutions/web-session-essentials.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (14)

This table is ingested by the following connectors:

- [Cofense Intelligence Threat Indicators Ingestion](../connectors/cofenseintelligence.md)
- [Cofense Triage Threat Indicators Ingestion](../connectors/cofensetriage.md)
- [Luminar IOCs and Leaked Credentials](../connectors/cognyteluminar.md)
- [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md)
- [Datalake2Sentinel](../connectors/datalake2sentinelconnector.md)
- [GreyNoise Threat Intelligence](../connectors/greynoise2sentinelapi.md)
- [MISP2Sentinel](../connectors/misp2sentinelconnector.md)
- [Microsoft Defender Threat Intelligence](../connectors/microsoftdefenderthreatintelligence.md)
- [Mimecast Intelligence for Microsoft - Microsoft Sentinel](../connectors/mimecasttiregionalconnectorazurefunctions.md)
- [Premium Microsoft Defender Threat Intelligence](../connectors/premiummicrosoftdefenderforthreatintelligence.md)
- [Threat Intelligence Platforms](../connectors/threatintelligence.md)
- [Threat intelligence - TAXII](../connectors/threatintelligencetaxii.md)
- [Threat Intelligence Upload API (Preview)](../connectors/threatintelligenceuploadindicatorsapi.md)
- [VMRayThreatIntelligence](../connectors/vmray.md)

---

## Content Items Using This Table (95)

### Analytic Rules (72)

**In solution [GitLab](../solutions/gitlab.md):**
- [GitLab - TI - Connection from Malicious IP](../content/gitlab-gitlab-ti-connection-from-malicious-ip-7241740a-5280-4b74-820a-862312d721a8-aca76b78.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoise TI Map IP Entity to CommonSecurityLog](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-commonsecuritylog-e50657d7-8bca-43ff-a647-d407fae440d6-31126886.md)
- [GreyNoise TI Map IP Entity to DnsEvents](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-dnsevents-ddf47b6f-870c-5712-a296-1383acb13c82-ac046e7e.md)
- [GreyNoise TI Map IP Entity to SigninLogs](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-signinlogs-f6c76cc9-218c-5b76-9b82-8607f09ea1b4-318921fb.md)
- [GreyNoise TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-network-session-events-asim-network-session-sc-536e8e5c-ce0e-575e-bcc9-aba8e7bf9316-294d0914.md)
- [GreyNoise TI map IP entity to OfficeActivity](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-officeactivity-c51628fe-999c-5150-9fd7-660fc4f58ed2-a0b3d699.md)

**In solution [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md):**
- [Infoblox - TI - CommonSecurityLog Match Found - MalwareC2](../content/infoblox-cloud-data-connector-infoblox-ti-commonsecuritylog-match-found-malwarec2-5b0864a9-4577-4087-b9fa-de3e14a8a999-339e0057.md)
- [Infoblox - TI - InfobloxCDC Match Found - Lookalike Domains](../content/infoblox-cloud-data-connector-infoblox-ti-infobloxcdc-match-found-lookalike-domains-568730be-b39d-45e3-a392-941e00837d52-07dc8d1e.md)
- [Infoblox - TI - Syslog Match Found - URL](../content/infoblox-cloud-data-connector-infoblox-ti-syslog-match-found-url-28ee3c2b-eb4b-44de-a71e-e462843fea72-5ddcadfd.md)

**In solution [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md):**
- [TI map IP entity to LastPass data](../content/lastpass-enterprise-activity-monitoring-ti-map-ip-entity-to-lastpass-data-2a723664-22c2-4d3e-bbec-5843b90166f3-0a2d4dc2.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - TI map IP to DataverseActivity](../content/microsoft-business-applications-dataverse-ti-map-ip-to-dataverseactivity-56d5aa0c-d871-4167-ba13-61c2f0fd17bf-cc32474f.md)
- [Dataverse - TI map URL to DataverseActivity](../content/microsoft-business-applications-dataverse-ti-map-url-to-dataverseactivity-d88a0e22-3b6a-40c2-af28-c064b44d03b7-bcfd5ea3.md)
- [Power Apps - Multiple users access a malicious link after launching new app](../content/microsoft-business-applications-power-apps-multiple-users-access-a-malicious-link-after-launching-new-ap-4bd7e93a-0646-4e02-8dcb-aa16d16618f4-45705870.md)

**In solution [Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md):**
- [ProofpointPOD - Email sender IP in TI list](../content/proofpoint-on-demand-pod-email-security-proofpointpod-email-sender-ip-in-ti-list-78979d32-e63f-4740-b206-cfb300c735e0-63420dc8.md)
- [ProofpointPOD - Email sender in TI list](../content/proofpoint-on-demand-pod-email-security-proofpointpod-email-sender-in-ti-list-35a0792a-1269-431e-ac93-7ae2980d4dde-f2f02f35.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [Preview - TI map Domain entity to Cloud App Events](../content/threat-intelligence-preview-ti-map-domain-entity-to-cloud-app-events-b97e118c-b7fa-42a6-84de-2e13443fbb8f-9a4d26f1.md)
- [Preview - TI map Email entity to Cloud App Events](../content/threat-intelligence-preview-ti-map-email-entity-to-cloud-app-events-47b9bb10-d216-4359-8cef-08ca2c67e5be-e757d151.md)
- [Preview - TI map IP entity to Cloud App Events](../content/threat-intelligence-preview-ti-map-ip-entity-to-cloud-app-events-4e0a6fc8-697e-4455-be47-831b41ea91ac-e0fcbf3b.md)
- [Preview - TI map URL entity to Cloud App Events](../content/threat-intelligence-preview-ti-map-url-entity-to-cloud-app-events-e8ae92dd-1d41-4530-8be8-85c5014c7b47-7067e6da.md)
- [TI Map Domain Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-domain-entity-to-devicenetworkevents-c308b2f3-eebe-4a20-905c-cb8293b062db-1b8b91ec.md)
- [TI Map IP Entity to Azure SQL Security Audit Events](../content/threat-intelligence-ti-map-ip-entity-to-azure-sql-security-audit-events-d0aa8969-1bbe-4da3-9e76-09e5f67c9d85-cbef7484.md)
- [TI Map IP Entity to AzureActivity](../content/threat-intelligence-ti-map-ip-entity-to-azureactivity-2441bce9-02e4-407b-8cc7-7d597f38b8b0-eefa9066.md)
- [TI Map IP Entity to CommonSecurityLog](../content/threat-intelligence-ti-map-ip-entity-to-commonsecuritylog-66c81ae2-1f89-4433-be00-2fbbd9ba5ebe-1afb299b.md)
- [TI Map IP Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-ip-entity-to-devicenetworkevents-b2df4979-d34a-48b3-a7d9-f473a4bf8058-1cf5dff4.md)
- [TI Map IP Entity to DnsEvents](../content/threat-intelligence-ti-map-ip-entity-to-dnsevents-69b7723c-2889-469f-8b55-a2d355ed9c87-bb4a4c77.md)
- [TI Map IP Entity to Duo Security](../content/threat-intelligence-ti-map-ip-entity-to-duo-security-d23ed927-5be3-4902-a9c1-85f841eb4fa1-cf610585.md)
- [TI Map IP Entity to SigninLogs](../content/threat-intelligence-ti-map-ip-entity-to-signinlogs-f2eb15bd-8a88-4b24-9281-e133edfba315-bfc1548d.md)
- [TI Map IP Entity to VMConnection](../content/threat-intelligence-ti-map-ip-entity-to-vmconnection-9713e3c0-1410-468d-b79e-383448434b2d-c87f4032.md)
- [TI Map IP Entity to W3CIISLog](../content/threat-intelligence-ti-map-ip-entity-to-w3ciislog-5e45930c-09b1-4430-b2d1-cc75ada0dc0f-b8687c20.md)
- [TI Map URL Entity to AuditLogs](../content/threat-intelligence-ti-map-url-entity-to-auditlogs-712fab52-2a7d-401e-a08c-ff939cc7c25e-fa07e25e.md)
- [TI Map URL Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-url-entity-to-devicenetworkevents-6ddbd892-a9be-47be-bab7-521241695bd6-16a87b1d.md)
- [TI Map URL Entity to EmailUrlInfo](../content/threat-intelligence-ti-map-url-entity-to-emailurlinfo-a0038239-72f4-4f7b-90ff-37f89f7881e0-2ee2a116.md)
- [TI Map URL Entity to PaloAlto Data](../content/threat-intelligence-ti-map-url-entity-to-paloalto-data-106813db-679e-4382-a51b-1bfc463befc3-df95f41e.md)
- [TI Map URL Entity to SecurityAlert Data](../content/threat-intelligence-ti-map-url-entity-to-securityalert-data-f30a47c1-65fb-42b1-a7f4-00941c12550b-d5b8e27a.md)
- [TI Map URL Entity to Syslog Data](../content/threat-intelligence-ti-map-url-entity-to-syslog-data-b31037ea-6f68-4fbd-bab2-d0d0f44c2fcf-b70131e6.md)
- [TI Map URL Entity to UrlClickEvents](../content/threat-intelligence-ti-map-url-entity-to-urlclickevents-23391c84-87d8-452f-a84c-47a62f01e115-1f8657e0.md)
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/threat-intelligence-ti-map-domain-entity-to-dns-events-asim-dns-schema-999e9f5d-db4a-4b07-a206-29c4e667b7e8-820c58df.md)
- [TI map Domain entity to DnsEvents](../content/threat-intelligence-ti-map-domain-entity-to-dnsevents-85aca4d1-5d15-4001-abd9-acb86ca1786a-1658942e.md)
- [TI map Domain entity to EmailEvents](../content/threat-intelligence-ti-map-domain-entity-to-emailevents-96307710-8bb9-4b45-8363-a90c72ebf86f-5727bb74.md)
- [TI map Domain entity to EmailUrlInfo](../content/threat-intelligence-ti-map-domain-entity-to-emailurlinfo-87cc75df-d7b2-44f1-b064-ee924edfc879-da6a50ae.md)
- [TI map Domain entity to PaloAlto](../content/threat-intelligence-ti-map-domain-entity-to-paloalto-ec21493c-2684-4acd-9bc2-696dbad72426-30f0e4c8.md)
- [TI map Domain entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-ti-map-domain-entity-to-paloalto-commonsecuritylog-dd0a6029-ecef-4507-89c4-fc355ac52111-78fcc05f.md)
- [TI map Domain entity to SecurityAlert](../content/threat-intelligence-ti-map-domain-entity-to-securityalert-87890d78-3e05-43ec-9ab9-ba32f4e01250-cbcbd86c.md)
- [TI map Domain entity to Syslog](../content/threat-intelligence-ti-map-domain-entity-to-syslog-532f62c1-fba6-4baa-bbb6-4a32a4ef32fa-afa2706f.md)
- [TI map Domain entity to Web Session Events (ASIM Web Session schema)](../content/threat-intelligence-ti-map-domain-entity-to-web-session-events-asim-web-session-schema-b1832f60-6c3d-4722-a0a5-3d564ee61a63-56583a86.md)
- [TI map Email entity to AzureActivity](../content/threat-intelligence-ti-map-email-entity-to-azureactivity-cca3b4d9-ac39-4109-8b93-65bb284003e6-d3038f92.md)
- [TI map Email entity to EmailEvents](../content/threat-intelligence-ti-map-email-entity-to-emailevents-11f7c6e3-f066-4b3c-9a81-b487ec0a6873-db576d3c.md)
- [TI map Email entity to OfficeActivity](../content/threat-intelligence-ti-map-email-entity-to-officeactivity-4a3f5ed7-8da5-4ce2-af6f-c9ada45060f2-5a438de0.md)
- [TI map Email entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-ti-map-email-entity-to-paloalto-commonsecuritylog-ffcd575b-3d54-482a-a6d8-d0de13b6ac63-7a9927d1.md)
- [TI map Email entity to SecurityAlert](../content/threat-intelligence-ti-map-email-entity-to-securityalert-a2e36ce0-da4d-4b6e-88c6-4e40161c5bfc-2cc60265.md)
- [TI map Email entity to SecurityEvent](../content/threat-intelligence-ti-map-email-entity-to-securityevent-2fc5d810-c9cc-491a-b564-841427ae0e50-9cb621b7.md)
- [TI map Email entity to SigninLogs](../content/threat-intelligence-ti-map-email-entity-to-signinlogs-30fa312c-31eb-43d8-b0cc-bcbdfb360822-7878c95a.md)
- [TI map File Hash to CommonSecurityLog Event](../content/threat-intelligence-ti-map-file-hash-to-commonsecuritylog-event-5d33fc63-b83b-4913-b95e-94d13f0d379f-27089def.md)
- [TI map File Hash to DeviceFileEvents Event](../content/threat-intelligence-ti-map-file-hash-to-devicefileevents-event-bc0eca2e-db50-44e6-8fa3-b85f91ff5ee7-89fca104.md)
- [TI map File Hash to Security Event](../content/threat-intelligence-ti-map-file-hash-to-security-event-a7427ed7-04b4-4e3b-b323-08b981b9b4bf-a0646697.md)
- [TI map IP entity to AWSCloudTrail](../content/threat-intelligence-ti-map-ip-entity-to-awscloudtrail-f110287e-1358-490d-8147-ed804b328514-010bee9c.md)
- [TI map IP entity to AppServiceHTTPLogs](../content/threat-intelligence-ti-map-ip-entity-to-appservicehttplogs-f9949656-473f-4503-bf43-a9d9890f7d08-106c6a94.md)
- [TI map IP entity to Azure Key Vault logs](../content/threat-intelligence-ti-map-ip-entity-to-azure-key-vault-logs-57c7e832-64eb-411f-8928-4133f01f4a25-7c3f7a41.md)
- [TI map IP entity to AzureFirewall](../content/threat-intelligence-ti-map-ip-entity-to-azurefirewall-0b904747-1336-4363-8d84-df2710bfe5e7-30fad35b.md)
- [TI map IP entity to AzureNetworkAnalytics_CL (NSG Flow Logs)](../content/threat-intelligence-ti-map-ip-entity-to-azurenetworkanalytics-cl-nsg-flow-logs-a4025a76-6490-4e6b-bb69-d02be4b03f07-8964f465.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/threat-intelligence-ti-map-ip-entity-to-dns-events-asim-dns-schema-67775878-7f8b-4380-ac54-115e1e828901-a15c3e60.md)
- [TI map IP entity to GitHub_CL](../content/threat-intelligence-ti-map-ip-entity-to-github-cl-aac495a9-feb1-446d-b08e-a1164a539452-00a98102.md)
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threat-intelligence-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-e2399891-383c-4caf-ae67-68a008b9f89e-f1153622.md)
- [TI map IP entity to OfficeActivity](../content/threat-intelligence-ti-map-ip-entity-to-officeactivity-f15370f4-c6fa-42c5-9be4-1d308f40284e-72906e4b.md)
- [TI map IP entity to Web Session Events (ASIM Web Session schema)](../content/threat-intelligence-ti-map-ip-entity-to-web-session-events-asim-web-session-schema-e2559891-383c-4caf-ae67-55a008b9f89e-289eb7c1.md)
- [TI map IP entity to Workday(ASimAuditEventLogs)](../content/threat-intelligence-ti-map-ip-entity-to-workday-asimauditeventlogs-a924d317-03d2-4420-a71f-4d347bda4bd8-7032e2e7.md)

**In solution [ThreatConnect](../solutions/threatconnect.md):**
- [Threat Connect TI map Domain entity to DnsEvents](../content/threatconnect-threat-connect-ti-map-domain-entity-to-dnsevents-f8960f1c-07d2-512b-9c41-952772d40c84-e3919e52.md)
- [ThreatConnect TI Map URL Entity to OfficeActivity Data](../content/threatconnect-threatconnect-ti-map-url-entity-to-officeactivity-data-12c3b31b-66a6-53ff-b6ab-6ae45e56dc92-426bca4a.md)
- [ThreatConnect TI map Email entity to OfficeActivity](../content/threatconnect-threatconnect-ti-map-email-entity-to-officeactivity-4f7ade3e-7121-5274-83ea-d7ed22a01fea-d74546e3.md)
- [ThreatConnect TI map Email entity to SigninLogs](../content/threatconnect-threatconnect-ti-map-email-entity-to-signinlogs-ecb68ce7-c309-59a7-a8de-07ccf2a0ea4f-22788640.md)
- [ThreatConnect TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threatconnect-threatconnect-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-ee1fd303-2081-47b7-8f02-e38bfd0868e6-1359f109.md)

**In solution [Ubiquiti UniFi](../solutions/ubiquiti-unifi.md):**
- [Ubiquiti - Connection to known malicious IP or C2](../content/ubiquiti-unifi-ubiquiti-connection-to-known-malicious-ip-or-c2-db60ca0b-b668-439b-b889-b63b57ef20fb-badbf4fb.md)

### Hunting Queries (5)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map File Entity to OfficeActivity Event](../content/threat-intelligence-ti-map-file-entity-to-officeactivity-event-410da56d-4a63-4d22-b68c-9fb1a303be6d-69933815.md)
- [TI Map File Entity to Security Event](../content/threat-intelligence-ti-map-file-entity-to-security-event-233441b9-cc92-4c9b-87fa-73b855fcd4b8-14557cf7.md)
- [TI Map File Entity to Syslog Event](../content/threat-intelligence-ti-map-file-entity-to-syslog-event-18f7de84-de55-4983-aca3-a18bc846b4e0-26e4aa14.md)
- [TI Map File Entity to VMConnection Event](../content/threat-intelligence-ti-map-file-entity-to-vmconnection-event-172a321b-c46b-4508-87c6-e2691c778107-debef4d0.md)
- [TI Map File Entity to WireData Event](../content/threat-intelligence-ti-map-file-entity-to-wiredata-event-689a9475-440b-4e69-8ab1-a5e241685f39-12f328f6.md)

### Workbooks (18)

**In solution [CofenseIntelligence](../solutions/cofenseintelligence.md):**
- [CofenseIntelligenceThreatIndicators](../content/cofenseintelligence-cofenseintelligencethreatindicators-d6be930b.md)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md)

**In solution [Forcepoint NGFW](../solutions/forcepoint-ngfw.md):**
- [ForcepointNGFWAdvanced](../content/forcepoint-ngfw-forcepointngfwadvanced-b6a3422e.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoiseOverview](../content/greynoisethreatintelligence-greynoiseoverview-879c7a2d.md)

**In solution [Infoblox](../solutions/infoblox.md):**
- [Infoblox_Workbook](../content/infoblox-infoblox-workbook-0b2c239e.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [Microsoft Defender Threat Intelligence](../solutions/microsoft-defender-threat-intelligence.md):**
- [MicrosoftThreatIntelligence](../content/microsoft-defender-threat-intelligence-microsoftthreatintelligence-e224017f.md)

**In solution [MimecastTIRegional](../solutions/mimecasttiregional.md):**
- [MimecastTIRegional](../content/mimecasttiregional-mimecasttiregional-91528c77.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [NetworkSessionEssentials](../content/network-session-essentials-networksessionessentials-5de17c97.md)
- [NetworkSessionEssentialsV2](../content/network-session-essentials-networksessionessentialsv2-9408ac84.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)
- [IntsightsIOCWorkbook](../content/soc-handbook-intsightsiocworkbook-5df8c818.md)
- [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**
- [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [ThreatIntelligence](../content/threat-intelligence-threatintelligence-3dd5d2b4.md)

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**
- [WebSessionEssentials](../content/web-session-essentials-websessionessentials-73073115.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**
- [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md)

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Location |
|:-------|:---------|:---------|
| [CymruScoutCorrelate](../parsers/cymruscoutcorrelate.md) | [Team Cymru Scout](../solutions/team-cymru-scout.md) | Solution |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

