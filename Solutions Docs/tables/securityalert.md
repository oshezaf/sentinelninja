# SecurityAlert

Reference for SecurityAlert table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityalert) |

## Solutions (39)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Azure Key Vault](../solutions/azure-key-vault.md)
- [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md)
- [Azure kubernetes Service](../solutions/azure-kubernetes-service.md)
- [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md)
- [DORA Compliance](../solutions/dora-compliance.md)
- [Dragos](../solutions/dragos.md)
- [Dynatrace](../solutions/dynatrace.md)
- [ExtraHop](../solutions/extrahop.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [Infoblox](../solutions/infoblox.md)
- [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md)
- [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender For Identity](../solutions/microsoft-defender-for-identity.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md)
- [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md)
- [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md)
- [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md)
- [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials---resource-abuse.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Network Session Essentials](../solutions/network-session-essentials.md)
- [ReversingLabs](../solutions/reversinglabs.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SentinelSOARessentials](../solutions/sentinelsoaressentials.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md)
- [ThreatAnalysis&Response](../solutions/threatanalysis&response.md)
- [Vectra XDR](../solutions/vectra-xdr.md)
- [Web Session Essentials](../solutions/web-session-essentials.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md)

## Connectors (10)

This table is ingested by the following connectors:

- [Microsoft Entra ID Protection](../connectors/azureactivedirectoryidentityprotection.md)
- [Microsoft Defender for Identity](../connectors/azureadvancedthreatprotection.md)
- [Subscription-based Microsoft Defender for Cloud (Legacy)](../connectors/azuresecuritycenter.md)
- [Microsoft Defender for IoT](../connectors/iot.md)
- [Microsoft Defender for Cloud Apps](../connectors/microsoftcloudappsecurity.md)
- [Microsoft Defender for Endpoint](../connectors/microsoftdefenderadvancedthreatprotection.md)
- [Tenant-based Microsoft Defender for Cloud](../connectors/microsoftdefenderforcloudtenantbased.md)
- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)
- [Microsoft Defender for Office 365 (Preview)](../connectors/officeatp.md)
- [Microsoft 365 Insider Risk Management](../connectors/officeirm.md)

---

## Content Items Using This Table (81)

### Analytic Rules (34)

**In solution [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md):**
- [Azure DevOps Pipeline modified by a new user](../content/155e9134-d5ad-4a6f-88f3-99c220040b66.md)

**In solution [Dragos](../solutions/dragos.md):**
- [Dragos Notifications](../content/9a74fe72-4c21-4ac5-80d9-37434e809721.md)

**In solution [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md):**
- [Denial of Service (Microsoft Defender for IoT)](../content/e068187a-01f5-4737-bc13-25db4027b7ea.md)
- [Excessive Login Attempts (Microsoft Defender for IoT)](../content/f5217b4c-3f1f-4d89-b4f3-5d7581da1c1c.md)
- [Firmware Updates (Microsoft Defender for IoT)](../content/7cad4b66-5e83-4756-8de4-f21315ab1e77.md)
- [High bandwidth in the network (Microsoft Defender for IoT)](../content/caa4665f-21fa-462d-bb31-92226e746c68.md)
- [Illegal Function Codes for ICS traffic (Microsoft Defender for IoT)](../content/70be4a31-9d2b-433b-bdc7-da8928988069.md)
- [Internet Access (Microsoft Defender for IoT)](../content/9ff3b13b-287a-4ed0-8f6b-7e7b66cbbcbd.md)
- [Multiple scans in the network (Microsoft Defender for IoT)](../content/493916d5-a094-4bfa-bdd1-d983a063ea3d.md)
- [No traffic on Sensor Detected (Microsoft Defender for IoT)](../content/208c3f5b-3ba2-49b5-9bca-c44e58cd5fd3.md)
- [PLC Stop Command (Microsoft Defender for IoT)](../content/a7d3f642-15d8-4e83-99ee-83ca3352525d.md)
- [PLC unsecure key state (Microsoft Defender for IoT)](../content/f9df500a-e2a4-4104-a517-dc1d85bb654f.md)
- [Suspicious malware found in the network (Microsoft Defender for IoT)](../content/6fb1acd5-356d-40f7-9b97-78d993c6a183.md)
- [Unauthorized DHCP configuration in the network (Microsoft Defender for IoT)](../content/c52ec521-9188-4a9e-a4cd-34a3dfbc3d27.md)
- [Unauthorized PLC changes (Microsoft Defender for IoT)](../content/c2fb27c7-5f67-49c4-aaf3-d82934234a69.md)
- [Unauthorized device in the network (Microsoft Defender for IoT)](../content/f4c71e55-6192-47ca-92e2-0856ae502a46.md)
- [Unauthorized remote access to the network (Microsoft Defender for IoT)](../content/1ff4fa3d-150b-4c87-b733-26c289af0d49.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - Suspicious use of TDS endpoint](../content/d875af10-6bb9-4d6a-a6e4-78439a98bf4b.md)
- [Dataverse - Terminated employee exfiltration over email](../content/de039242-47e0-43fa-84d7-b6be24305349.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [AV detections related to Ukraine threats](../content/b6685757-3ed1-4b05-a5bd-2cacadc86c2a.md)

**In solution [Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md):**
- [Detect CoreBackUp Deletion Activity from related Security Alerts](../content/011c84d8-85f0-4370-b864-24c13455aa94.md)

**In solution [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md):**
- [Linked Malicious Storage Artifacts](../content/b9e3b9f8-a406-4151-9891-e5ff1ddd8c1d.md)

**In solution [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md):**
- [Correlate Unfamiliar sign-in properties & atypical travel alerts](../content/a3df4a32-4805-4c6d-8699-f3c888af2f67.md)

**In solution [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md):**
- [Aqua Blizzard AV hits - Feb 2022](../content/18dbdc22-b69f-4109-9e39-723d9465f45f.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [Insider Risk_High User Security Alert Correlations](../content/a4fb4255-f55b-4c24-b396-976ee075d406.md)
- [Insider Risk_Microsoft Purview Insider Risk Management Alert Observed](../content/69660e65-0e5c-4700-8b99-5caf59786606.md)

**In solution [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials---resource-abuse.md):**
- [Cross-Cloud Suspicious user activity observed in GCP Envourment](../content/58e306fe-1c49-4b8f-9b0e-15f25e8f0cd7.md)
- [Successful AWS Console Login from IP Address Observed Conducting Password Spray](../content/188db479-d50a-4a9c-a041-644bae347d1f.md)
- [Suspicious AWS console logins by credential access alerts](../content/b51fe620-62ad-4ed2-9d40-5c97c0a8231f.md)
- [User impersonation by Identity Protection alerts](../content/11c3d541-5fa5-49df-8218-d1c98584473b.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map Domain entity to SecurityAlert](../content/87890d78-3e05-43ec-9ab9-ba32f4e01250.md)
- [TI map Email entity to SecurityAlert](../content/a2e36ce0-da4d-4b6e-88c6-4e40161c5bfc.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI map Domain entity to SecurityAlert](../content/df88b403-1cb9-49ea-a43d-b6613051cf7f.md)
- [TI map Email entity to SecurityAlert](../content/4b451ade-ed28-48e2-8fe7-60ae83ab2fa5.md)

### Hunting Queries (6)

**In solution [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md):**
- [Azure DevOps - New Package Feed Created](../content/3d1aa540-b4c7-4789-8c4c-4174b3c2371f.md)
- [Azure DevOps - New Release Pipeline Created](../content/2dfa9c23-1590-4589-995a-d1486be66028.md)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**
- [Nylon Typhoon Command Line Activity November 2021](../content/bb30abbc-9af6-4a37-9536-e9207e023989.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - Activity after Microsoft Entra alerts](../content/428c3d41-e441-4244-994e-b059d6316bc4.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [Insider Risk_Entity Anomaly Followed by IRM Alert](../content/ea5d043f-80ef-452c-a31a-b584e485b2be.md)
- [Insider Risk_ISP Anomaly to Exfil](../content/12b6582f-b715-4f91-98e1-1582ebad348a.md)

### Workbooks (33)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Log4jImpactAssessment](../content/log4jimpactassessment-apache-log4j-vulnerability-detection.md)

**In solution [Azure Key Vault](../solutions/azure-key-vault.md):**
- [AzureKeyVaultWorkbook](../content/azurekeyvaultworkbook-azure-key-vault.md)

**In solution [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md):**
- [Workbook-AzureSQLSecurity](../content/workbook-azuresqlsecurity-azure-sql-database-solution-for-sentinel.md)

**In solution [Azure kubernetes Service](../solutions/azure-kubernetes-service.md):**
- [AksSecurity](../content/akssecurity-azure-kubernetes-service.md)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**
- [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark.md)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation.md)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmcv2-cybersecuritymaturitymodelcertification%28cmmc%292.0.md)

**In solution [DORA Compliance](../solutions/dora-compliance.md):**
- [DORACompliance](../content/doracompliance-dora-compliance.md)

**In solution [ExtraHop](../solutions/extrahop.md):**
- [ExtraHopDetectionsOverview](../content/extrahopdetectionsoverview-extrahop.md)

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**
- [GDPRComplianceAndDataSecurity](../content/gdprcomplianceanddatasecurity-gdpr-compliance-&-data-security.md)

**In solution [Infoblox](../solutions/infoblox.md):**
- [Infoblox_Lookup_Workbook](../content/infoblox-lookup-workbook-infoblox.md)
- [Infoblox_Workbook](../content/infoblox-workbook-infoblox.md)

**In solution [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md):**
- [InfobloxSOCInsightsWorkbook](../content/infobloxsocinsightsworkbook-infoblox-soc-insights.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagement-m2131-maturitymodelforeventlogmanagementm2131.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForIdentity](../content/microsoftdefenderforidentity-microsoft-defender-xdr.md)
- [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoftdefenderforoffice365detectionsandinsights-microsoft-defender-xdr.md)

**In solution [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md):**
- [MicrosoftCloudAppSecurity](../content/microsoftcloudappsecurity-microsoft-defender-for-cloud-apps.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [InsiderRiskManagement](../content/insiderriskmanagement-microsoftpurviewinsiderriskmanagement.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [NetworkSessionEssentials](../content/networksessionessentials-network-session-essentials.md)
- [NetworkSessionEssentialsV2](../content/networksessionessentialsv2-network-session-essentials.md)

**In solution [ReversingLabs](../solutions/reversinglabs.md):**
- [ReversingLabs-CapabilitiesOverview](../content/reversinglabs-capabilitiesoverview-reversinglabs.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AnalyticsEfficiency](../content/analyticsefficiency-soc-handbook.md)
- [AzureSentinelSecurityAlerts](../content/azuresentinelsecurityalerts-soc-handbook.md)
- [IncidentOverview](../content/incidentoverview-soc-handbook.md)
- [InvestigationInsights](../content/investigationinsights-soc-handbook.md)
- [MITREAttack](../content/mitreattack-soc-handbook.md)
- [SentinelCentral](../content/sentinelcentral-soc-handbook.md)

**In solution [SentinelSOARessentials](../solutions/sentinelsoaressentials.md):**
- [IncidentOverview](../content/incidentoverview-sentinelsoaressentials.md)

**In solution [ThreatAnalysis&Response](../solutions/threatanalysis&response.md):**
- [DynamicThreatModeling&Response](../content/dynamicthreatmodeling&response-threatanalysis&response.md)
- [ThreatAnalysis&Response](../content/threatanalysis&response-threatanalysis&response.md)

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**
- [WebSessionEssentials](../content/websessionessentials-web-session-essentials.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md):**
- [ZeroTrustTIC3](../content/zerotrusttic3-zerotrust%28tic3.0%29.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/securityinsights`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content-index.md)
