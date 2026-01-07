# SecurityAlert

Reference for SecurityAlert table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityalert) |

## Additional Information

📖 **Related Documentation:** [Security alert schema reference](https://learn.microsoft.com/en-us/azure/sentinel/security-alert-schema) - Describes the SecurityAlert table schema and field definitions

## Solutions (38)

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

## Content Items Using This Table (80)

### Analytic Rules (33)

**In solution [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md):**
- [Azure DevOps Pipeline modified by a new user](../content/azuredevopsauditing-azure-devops-pipeline-modified-by-a-new-user-155e9134-d5ad-4a6f-88f3-99c220040b66.md)

**In solution [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md):**
- [Denial of Service (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-denial-of-service-%28microsoft-defender-for-iot%29-e068187a-01f5-4737-bc13-25db4027b7ea.md)
- [Excessive Login Attempts (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-excessive-login-attempts-%28microsoft-defender-for-iot%29-f5217b4c-3f1f-4d89-b4f3-5d7581da1c1c.md)
- [Firmware Updates (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-firmware-updates-%28microsoft-defender-for-iot%29-7cad4b66-5e83-4756-8de4-f21315ab1e77.md)
- [High bandwidth in the network (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-high-bandwidth-in-the-network-%28microsoft-defender-for-iot%29-caa4665f-21fa-462d-bb31-92226e746c68.md)
- [Illegal Function Codes for ICS traffic (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-illegal-function-codes-for-ics-traffic-%28microsoft-defender-for-iot%29-70be4a31-9d2b-433b-bdc7-da8928988069.md)
- [Internet Access (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-internet-access-%28microsoft-defender-for-iot%29-9ff3b13b-287a-4ed0-8f6b-7e7b66cbbcbd.md)
- [Multiple scans in the network (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-multiple-scans-in-the-network-%28microsoft-defender-for-iot%29-493916d5-a094-4bfa-bdd1-d983a063ea3d.md)
- [No traffic on Sensor Detected (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-no-traffic-on-sensor-detected-%28microsoft-defender-for-iot%29-208c3f5b-3ba2-49b5-9bca-c44e58cd5fd3.md)
- [PLC Stop Command (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-plc-stop-command-%28microsoft-defender-for-iot%29-a7d3f642-15d8-4e83-99ee-83ca3352525d.md)
- [PLC unsecure key state (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-plc-unsecure-key-state-%28microsoft-defender-for-iot%29-f9df500a-e2a4-4104-a517-dc1d85bb654f.md)
- [Suspicious malware found in the network (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-suspicious-malware-found-in-the-network-%28microsoft-defender-for-iot%29-6fb1acd5-356d-40f7-9b97-78d993c6a183.md)
- [Unauthorized DHCP configuration in the network (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-unauthorized-dhcp-configuration-in-the-network-%28microsoft-defender-for-iot%29-c52ec521-9188-4a9e-a4cd-34a3dfbc3d27.md)
- [Unauthorized PLC changes (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-unauthorized-plc-changes-%28microsoft-defender-for-iot%29-c2fb27c7-5f67-49c4-aaf3-d82934234a69.md)
- [Unauthorized device in the network (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-unauthorized-device-in-the-network-%28microsoft-defender-for-iot%29-f4c71e55-6192-47ca-92e2-0856ae502a46.md)
- [Unauthorized remote access to the network (Microsoft Defender for IoT)](../content/iototthreatmonitoringwithdefenderforiot-unauthorized-remote-access-to-the-network-%28microsoft-defender-for-iot%29-1ff4fa3d-150b-4c87-b733-26c289af0d49.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - Suspicious use of TDS endpoint](../content/microsoft-business-applications-dataverse---suspicious-use-of-tds-endpoint-d875af10-6bb9-4d6a-a6e4-78439a98bf4b.md)
- [Dataverse - Terminated employee exfiltration over email](../content/microsoft-business-applications-dataverse---terminated-employee-exfiltration-over-email-de039242-47e0-43fa-84d7-b6be24305349.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [AV detections related to Ukraine threats](../content/microsoft-defender-xdr-av-detections-related-to-ukraine-threats-b6685757-3ed1-4b05-a5bd-2cacadc86c2a.md)

**In solution [Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md):**
- [Detect CoreBackUp Deletion Activity from related Security Alerts](../content/microsoft-defender-for-cloud-detect-corebackup-deletion-activity-from-related-security-alerts-011c84d8-85f0-4370-b864-24c13455aa94.md)

**In solution [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md):**
- [Linked Malicious Storage Artifacts](../content/microsoft-defender-for-cloud-apps-linked-malicious-storage-artifacts-b9e3b9f8-a406-4151-9891-e5ff1ddd8c1d.md)

**In solution [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md):**
- [Correlate Unfamiliar sign-in properties & atypical travel alerts](../content/microsoft-entra-id-protection-correlate-unfamiliar-sign-in-properties-&-atypical-travel-alerts-a3df4a32-4805-4c6d-8699-f3c888af2f67.md)

**In solution [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md):**
- [Aqua Blizzard AV hits - Feb 2022](../content/microsoftdefenderforendpoint-aqua-blizzard-av-hits---feb-2022-18dbdc22-b69f-4109-9e39-723d9465f45f.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [Insider Risk_High User Security Alert Correlations](../content/microsoftpurviewinsiderriskmanagement-insider-risk-high-user-security-alert-correlations-a4fb4255-f55b-4c24-b396-976ee075d406.md)
- [Insider Risk_Microsoft Purview Insider Risk Management Alert Observed](../content/microsoftpurviewinsiderriskmanagement-insider-risk-microsoft-purview-insider-risk-management-alert-observed-69660e65-0e5c-4700-8b99-5caf59786606.md)

**In solution [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials---resource-abuse.md):**
- [Cross-Cloud Suspicious user activity observed in GCP Envourment](../content/multi-cloud-attack-coverage-essentials---resource-abuse-cross-cloud-suspicious-user-activity-observed-in-gcp-envourment-58e306fe-1c49-4b8f-9b0e-15f25e8f0cd7.md)
- [Successful AWS Console Login from IP Address Observed Conducting Password Spray](../content/multi-cloud-attack-coverage-essentials---resource-abuse-successful-aws-console-login-from-ip-address-observed-conducting-password-spray-188db479-d50a-4a9c-a041-644bae347d1f.md)
- [Suspicious AWS console logins by credential access alerts](../content/multi-cloud-attack-coverage-essentials---resource-abuse-suspicious-aws-console-logins-by-credential-access-alerts-b51fe620-62ad-4ed2-9d40-5c97c0a8231f.md)
- [User impersonation by Identity Protection alerts](../content/multi-cloud-attack-coverage-essentials---resource-abuse-user-impersonation-by-identity-protection-alerts-11c3d541-5fa5-49df-8218-d1c98584473b.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map Domain entity to SecurityAlert](../content/threat-intelligence-ti-map-domain-entity-to-securityalert-87890d78-3e05-43ec-9ab9-ba32f4e01250.md)
- [TI map Email entity to SecurityAlert](../content/threat-intelligence-ti-map-email-entity-to-securityalert-a2e36ce0-da4d-4b6e-88c6-4e40161c5bfc.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI map Domain entity to SecurityAlert](../content/threat-intelligence-%28new%29-ti-map-domain-entity-to-securityalert-df88b403-1cb9-49ea-a43d-b6613051cf7f.md)
- [TI map Email entity to SecurityAlert](../content/threat-intelligence-%28new%29-ti-map-email-entity-to-securityalert-4b451ade-ed28-48e2-8fe7-60ae83ab2fa5.md)

### Hunting Queries (6)

**In solution [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md):**
- [Azure DevOps - New Package Feed Created](../content/azuredevopsauditing-azure-devops---new-package-feed-created-3d1aa540-b4c7-4789-8c4c-4174b3c2371f.md)
- [Azure DevOps - New Release Pipeline Created](../content/azuredevopsauditing-azure-devops---new-release-pipeline-created-2dfa9c23-1590-4589-995a-d1486be66028.md)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**
- [Nylon Typhoon Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-nylon-typhoon-command-line-activity-november-2021-bb30abbc-9af6-4a37-9536-e9207e023989.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - Activity after Microsoft Entra alerts](../content/microsoft-business-applications-dataverse---activity-after-microsoft-entra-alerts-428c3d41-e441-4244-994e-b059d6316bc4.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [Insider Risk_Entity Anomaly Followed by IRM Alert](../content/microsoftpurviewinsiderriskmanagement-insider-risk-entity-anomaly-followed-by-irm-alert-ea5d043f-80ef-452c-a31a-b584e485b2be.md)
- [Insider Risk_ISP Anomaly to Exfil](../content/microsoftpurviewinsiderriskmanagement-insider-risk-isp-anomaly-to-exfil-12b6582f-b715-4f91-98e1-1582ebad348a.md)

### Workbooks (33)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Log4jImpactAssessment](../content/apache-log4j-vulnerability-detection-log4jimpactassessment.md)

**In solution [Azure Key Vault](../solutions/azure-key-vault.md):**
- [AzureKeyVaultWorkbook](../content/azure-key-vault-azurekeyvaultworkbook.md)

**In solution [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md):**
- [Workbook-AzureSQLSecurity](../content/azure-sql-database-solution-for-sentinel-workbook-azuresqlsecurity.md)

**In solution [Azure kubernetes Service](../solutions/azure-kubernetes-service.md):**
- [AksSecurity](../content/azure-kubernetes-service-akssecurity.md)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**
- [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark.md)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation.md)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification%28cmmc%292.0-cybersecuritymaturitymodelcertification-cmmcv2.md)

**In solution [DORA Compliance](../solutions/dora-compliance.md):**
- [DORACompliance](../content/dora-compliance-doracompliance.md)

**In solution [ExtraHop](../solutions/extrahop.md):**
- [ExtraHopDetectionsOverview](../content/extrahop-extrahopdetectionsoverview.md)

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**
- [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity.md)

**In solution [Infoblox](../solutions/infoblox.md):**
- [Infoblox_Lookup_Workbook](../content/infoblox-infoblox-lookup-workbook.md)
- [Infoblox_Workbook](../content/infoblox-infoblox-workbook.md)

**In solution [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md):**
- [InfobloxSOCInsightsWorkbook](../content/infoblox-soc-insights-infobloxsocinsightsworkbook.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForIdentity](../content/microsoft-defender-xdr-microsoftdefenderforidentity.md)
- [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoft-defender-xdr-microsoftdefenderforoffice365detectionsandinsights.md)

**In solution [Microsoft Defender for Cloud Apps](../solutions/microsoft-defender-for-cloud-apps.md):**
- [MicrosoftCloudAppSecurity](../content/microsoft-defender-for-cloud-apps-microsoftcloudappsecurity.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [NetworkSessionEssentials](../content/network-session-essentials-networksessionessentials.md)
- [NetworkSessionEssentialsV2](../content/network-session-essentials-networksessionessentialsv2.md)

**In solution [ReversingLabs](../solutions/reversinglabs.md):**
- [ReversingLabs-CapabilitiesOverview](../content/reversinglabs-reversinglabs-capabilitiesoverview.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AnalyticsEfficiency](../content/soc-handbook-analyticsefficiency.md)
- [AzureSentinelSecurityAlerts](../content/soc-handbook-azuresentinelsecurityalerts.md)
- [IncidentOverview](../content/soc-handbook-incidentoverview.md)
- [InvestigationInsights](../content/soc-handbook-investigationinsights.md)
- [MITREAttack](../content/soc-handbook-mitreattack.md)
- [SentinelCentral](../content/soc-handbook-sentinelcentral.md)

**In solution [SentinelSOARessentials](../solutions/sentinelsoaressentials.md):**
- [IncidentOverview](../content/sentinelsoaressentials-incidentoverview.md)

**In solution [ThreatAnalysis&Response](../solutions/threatanalysis&response.md):**
- [DynamicThreatModeling&Response](../content/threatanalysis&response-dynamicthreatmodeling&response.md)
- [ThreatAnalysis&Response](../content/threatanalysis&response-threatanalysis&response.md)

**In solution [Web Session Essentials](../solutions/web-session-essentials.md):**
- [WebSessionEssentials](../content/web-session-essentials-websessionessentials.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md):**
- [ZeroTrustTIC3](../content/zerotrust%28tic3.0%29-zerotrusttic3.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/securityinsights`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
