# ThreatIntelligenceIndicator

Reference for ThreatIntelligenceIndicator table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/threatintelligenceindicator) |

## Solutions (27)

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
- [LastPass](../solutions/lastpass.md)
- [MISP2Sentinel](../solutions/misp2sentinel.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender Threat Intelligence](../solutions/microsoft-defender-threat-intelligence.md)
- [MimecastTIRegional](../solutions/mimecasttiregional.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Network Session Essentials](../solutions/network-session-essentials.md)
- [Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand%28pod%29-email-security.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [ThreatConnect](../solutions/threatconnect.md)
- [Ubiquiti UniFi](../solutions/ubiquiti-unifi.md)
- [VMRay](../solutions/vmray.md)
- [Web Session Essentials](../solutions/web-session-essentials.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md)

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

## Content Items Using This Table (79)

### Analytic Rules (58)

**In solution [GitLab](../solutions/gitlab.md):**
- [GitLab - TI - Connection from Malicious IP](../content/7241740a-5280-4b74-820a-862312d721a8.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoise TI Map IP Entity to CommonSecurityLog](../content/e50657d7-8bca-43ff-a647-d407fae440d6.md)
- [GreyNoise TI Map IP Entity to DnsEvents](../content/ddf47b6f-870c-5712-a296-1383acb13c82.md)
- [GreyNoise TI Map IP Entity to SigninLogs](../content/f6c76cc9-218c-5b76-9b82-8607f09ea1b4.md)
- [GreyNoise TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/536e8e5c-ce0e-575e-bcc9-aba8e7bf9316.md)
- [GreyNoise TI map IP entity to OfficeActivity](../content/c51628fe-999c-5150-9fd7-660fc4f58ed2.md)

**In solution [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md):**
- [Infoblox - TI - CommonSecurityLog Match Found - MalwareC2](../content/5b0864a9-4577-4087-b9fa-de3e14a8a999.md)
- [Infoblox - TI - InfobloxCDC Match Found - Lookalike Domains](../content/568730be-b39d-45e3-a392-941e00837d52.md)
- [Infoblox - TI - Syslog Match Found - URL](../content/28ee3c2b-eb4b-44de-a71e-e462843fea72.md)

**In solution [LastPass](../solutions/lastpass.md):**
- [TI map IP entity to LastPass data](../content/2a723664-22c2-4d3e-bbec-5843b90166f3.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - TI map IP to DataverseActivity](../content/56d5aa0c-d871-4167-ba13-61c2f0fd17bf.md)
- [Dataverse - TI map URL to DataverseActivity](../content/d88a0e22-3b6a-40c2-af28-c064b44d03b7.md)

**In solution [Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand%28pod%29-email-security.md):**
- [ProofpointPOD - Email sender IP in TI list](../content/78979d32-e63f-4740-b206-cfb300c735e0.md)
- [ProofpointPOD - Email sender in TI list](../content/35a0792a-1269-431e-ac93-7ae2980d4dde.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [Preview - TI map Domain entity to Cloud App Events](../content/b97e118c-b7fa-42a6-84de-2e13443fbb8f.md)
- [Preview - TI map Email entity to Cloud App Events](../content/47b9bb10-d216-4359-8cef-08ca2c67e5be.md)
- [Preview - TI map IP entity to Cloud App Events](../content/4e0a6fc8-697e-4455-be47-831b41ea91ac.md)
- [Preview - TI map URL entity to Cloud App Events](../content/e8ae92dd-1d41-4530-8be8-85c5014c7b47.md)
- [TI Map IP Entity to Azure SQL Security Audit Events](../content/d0aa8969-1bbe-4da3-9e76-09e5f67c9d85.md)
- [TI Map IP Entity to AzureActivity](../content/2441bce9-02e4-407b-8cc7-7d597f38b8b0.md)
- [TI Map IP Entity to CommonSecurityLog](../content/66c81ae2-1f89-4433-be00-2fbbd9ba5ebe.md)
- [TI Map IP Entity to DeviceNetworkEvents](../content/b2df4979-d34a-48b3-a7d9-f473a4bf8058.md)
- [TI Map IP Entity to DnsEvents](../content/69b7723c-2889-469f-8b55-a2d355ed9c87.md)
- [TI Map IP Entity to Duo Security](../content/d23ed927-5be3-4902-a9c1-85f841eb4fa1.md)
- [TI Map IP Entity to VMConnection](../content/9713e3c0-1410-468d-b79e-383448434b2d.md)
- [TI Map IP Entity to W3CIISLog](../content/5e45930c-09b1-4430-b2d1-cc75ada0dc0f.md)
- [TI Map URL Entity to PaloAlto Data](../content/106813db-679e-4382-a51b-1bfc463befc3.md)
- [TI Map URL Entity to Syslog Data](../content/b31037ea-6f68-4fbd-bab2-d0d0f44c2fcf.md)
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/999e9f5d-db4a-4b07-a206-29c4e667b7e8.md)
- [TI map Domain entity to DnsEvents](../content/85aca4d1-5d15-4001-abd9-acb86ca1786a.md)
- [TI map Domain entity to EmailUrlInfo](../content/87cc75df-d7b2-44f1-b064-ee924edfc879.md)
- [TI map Domain entity to PaloAlto](../content/ec21493c-2684-4acd-9bc2-696dbad72426.md)
- [TI map Domain entity to PaloAlto CommonSecurityLog](../content/dd0a6029-ecef-4507-89c4-fc355ac52111.md)
- [TI map Domain entity to Syslog](../content/532f62c1-fba6-4baa-bbb6-4a32a4ef32fa.md)
- [TI map Domain entity to Web Session Events (ASIM Web Session schema)](../content/b1832f60-6c3d-4722-a0a5-3d564ee61a63.md)
- [TI map Email entity to AzureActivity](../content/cca3b4d9-ac39-4109-8b93-65bb284003e6.md)
- [TI map Email entity to PaloAlto CommonSecurityLog](../content/ffcd575b-3d54-482a-a6d8-d0de13b6ac63.md)
- [TI map Email entity to SecurityAlert](../content/a2e36ce0-da4d-4b6e-88c6-4e40161c5bfc.md)
- [TI map Email entity to SecurityEvent](../content/2fc5d810-c9cc-491a-b564-841427ae0e50.md)
- [TI map File Hash to CommonSecurityLog Event](../content/5d33fc63-b83b-4913-b95e-94d13f0d379f.md)
- [TI map File Hash to DeviceFileEvents Event](../content/bc0eca2e-db50-44e6-8fa3-b85f91ff5ee7.md)
- [TI map File Hash to Security Event](../content/a7427ed7-04b4-4e3b-b323-08b981b9b4bf.md)
- [TI map IP entity to AWSCloudTrail](../content/f110287e-1358-490d-8147-ed804b328514.md)
- [TI map IP entity to AppServiceHTTPLogs](../content/f9949656-473f-4503-bf43-a9d9890f7d08.md)
- [TI map IP entity to Azure Key Vault logs](../content/57c7e832-64eb-411f-8928-4133f01f4a25.md)
- [TI map IP entity to AzureFirewall](../content/0b904747-1336-4363-8d84-df2710bfe5e7.md)
- [TI map IP entity to AzureNetworkAnalytics_CL (NSG Flow Logs)](../content/a4025a76-6490-4e6b-bb69-d02be4b03f07.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/67775878-7f8b-4380-ac54-115e1e828901.md)
- [TI map IP entity to GitHub_CL](../content/aac495a9-feb1-446d-b08e-a1164a539452.md)
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/e2399891-383c-4caf-ae67-68a008b9f89e.md)
- [TI map IP entity to Web Session Events (ASIM Web Session schema)](../content/e2559891-383c-4caf-ae67-55a008b9f89e.md)
- [TI map IP entity to Workday(ASimAuditEventLogs)](../content/a924d317-03d2-4420-a71f-4d347bda4bd8.md)

**In solution [ThreatConnect](../solutions/threatconnect.md):**
- [Threat Connect TI map Domain entity to DnsEvents](../content/f8960f1c-07d2-512b-9c41-952772d40c84.md)
- [ThreatConnect TI Map URL Entity to OfficeActivity Data](../content/12c3b31b-66a6-53ff-b6ab-6ae45e56dc92.md)
- [ThreatConnect TI map Email entity to OfficeActivity](../content/4f7ade3e-7121-5274-83ea-d7ed22a01fea.md)
- [ThreatConnect TI map Email entity to SigninLogs](../content/ecb68ce7-c309-59a7-a8de-07ccf2a0ea4f.md)
- [ThreatConnect TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/ee1fd303-2081-47b7-8f02-e38bfd0868e6.md)

**In solution [Ubiquiti UniFi](../solutions/ubiquiti-unifi.md):**
- [Ubiquiti - Connection to known malicious IP or C2](../content/db60ca0b-b668-439b-b889-b63b57ef20fb.md)

### Hunting Queries (5)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map File Entity to OfficeActivity Event](../content/410da56d-4a63-4d22-b68c-9fb1a303be6d.md)
- [TI Map File Entity to Security Event](../content/233441b9-cc92-4c9b-87fa-73b855fcd4b8.md)
- [TI Map File Entity to Syslog Event](../content/18f7de84-de55-4983-aca3-a18bc846b4e0.md)
- [TI Map File Entity to VMConnection Event](../content/172a321b-c46b-4508-87c6-e2691c778107.md)
- [TI Map File Entity to WireData Event](../content/689a9475-440b-4e69-8ab1-a5e241685f39.md)

### Workbooks (16)

**In solution [CofenseIntelligence](../solutions/cofenseintelligence.md):**
- [CofenseIntelligenceThreatIndicators](../content/cofenseintelligencethreatindicators-cofenseintelligence.md)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation.md)

**In solution [Forcepoint NGFW](../solutions/forcepoint-ngfw.md):**
- [ForcepointNGFWAdvanced](../content/forcepointngfwadvanced-forcepoint-ngfw.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoiseOverview](../content/greynoiseoverview-greynoisethreatintelligence.md)

**In solution [Infoblox](../solutions/infoblox.md):**
- [Infoblox_Workbook](../content/infoblox-workbook-infoblox.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagement-m2131-maturitymodelforeventlogmanagementm2131.md)

**In solution [Microsoft Defender Threat Intelligence](../solutions/microsoft-defender-threat-intelligence.md):**
- [MicrosoftThreatIntelligence](../content/microsoftthreatintelligence-microsoft-defender-threat-intelligence.md)

**In solution [MimecastTIRegional](../solutions/mimecasttiregional.md):**
- [MimecastTIRegional](../content/mimecasttiregional-mimecasttiregional.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [NetworkSessionEssentials](../content/networksessionessentials-network-session-essentials.md)
- [NetworkSessionEssentialsV2](../content/networksessionessentialsv2-network-session-essentials.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [IntsightsIOCWorkbook](../content/intsightsiocworkbook-soc-handbook.md)
- [InvestigationInsights](../content/investigationinsights-soc-handbook.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [ThreatIntelligence](../content/threatintelligence-threat-intelligence.md)

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**
- [WebSessionEssentials](../content/websessionessentials-web-session-essentials.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md):**
- [ZeroTrustTIC3](../content/zerotrusttic3-zerotrust%28tic3.0%29.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
