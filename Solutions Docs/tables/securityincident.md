# SecurityIncident

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SecurityIncident table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityincident) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (33 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityincident)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AdditionalData | dynamic | Additional data on the incident |
| AlertIds | dynamic | The IDs of the alerts related to the incident |
| BookmarkIds | dynamic | The IDs of the bookmarks related to the incident |
| Classification | string | The classification the incident was given when closed |
| ClassificationComment | string | Description of the reason the incident was closed |
| ClassificationReason | string | The classification reason the incident was given when closed |
| ClosedTime | datetime | Timestamp (UTC) of when the incident was last closed |
| Comments | dynamic | The comments added to the incident |
| CreatedTime | datetime | Timestamp (UTC) of when the incident was created |
| Description | string | The description of the incident |
| FirstActivityTime | datetime | Timestamp (UTC) of when the first activity in the incident occurred |
| FirstModifiedTime | datetime | Timestamp (UTC) of when the incident was first modified |
| IncidentName | string | The resource name of the incident |
| IncidentNumber | int | The sequential number of the incident |
| IncidentUrl | string | The URI to open the incident in Azure Sentinel portal |
| Labels | dynamic | The labels added to the incident |
| LastActivityTime | datetime | Timestamp (UTC) of when the last activity in the incident occurred |
| LastModifiedTime | datetime | Timestamp (UTC) of when the incident was last modified |
| ModifiedBy | string | The source of the change in the incident |
| Owner | dynamic | The user the incident is assigned to |
| ProviderIncidentId | string | The incident ID assigned by the incident provider |
| ProviderName | string | The name of the source provider that generated the incident |
| RelatedAnalyticRuleIds | dynamic | The IDs of the Analytic rules associated with the incident |
| Severity | string | The severity of the incident |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| Status | string | The status of the incident |
| Tasks | dynamic | The tasks added to the incident |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (UTC) of when the incident was ingested |
| Title | string | The title of the incident |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [SecurityIncident Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityincident)

## Solutions (34)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Azure Key Vault](../solutions/azure-key-vault.md)
- [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [Censys](../solutions/censys.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [DORA Compliance](../solutions/dora-compliance.md)
- [DPDP Compliance](../solutions/dpdp-compliance.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [Infoblox](../solutions/infoblox.md)
- [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md)
- [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender Threat Intelligence](../solutions/microsoft-defender-threat-intelligence.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [ReversingLabs](../solutions/reversinglabs.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SOC-Process-Framework](../solutions/soc-process-framework.md)
- [SOCRadar](../solutions/socradar.md)
- [SentinelSOARessentials](../solutions/sentinelsoaressentials.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [ThreatAnalysis&Response](../solutions/threatanalysis&response.md)
- [ThreatConnect](../solutions/threatconnect.md)
- [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md)
- [Vectra XDR](../solutions/vectra-xdr.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

---

## Content Items Using This Table (70)

### Analytic Rules (3)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Insider Risk_High User Security Alert Correlations](../content/microsoftpurviewinsiderriskmanagement-insider-risk-high-user-security-alert-correlations-a4fb4255-f55b-4c24-b396-976ee075d406-d76ca4d2.md) |  |
| [Insider Risk_High User Security Incidents Correlation](../content/microsoftpurviewinsiderriskmanagement-insider-risk-high-user-security-incidents-correlation-28a75d10-9b75-4192-9863-e452c3ad24db-6bbae8c7.md) |  |

**In solution [SOCRadar](../solutions/socradar.md):** `Labels has "SOCRadar"`<br>`Labels has "Synced"`

| Analytic Rule |
|:-------------|
| [SOCRadar Unsynced Closed Incident](../content/socradar-socradar-unsynced-closed-incident-6e2f8d4b-5a71-4c9e-b3f6-8a1c9d4e7b2a-ea970a79.md) |

### Hunting Queries (1)

**In solution [SOCRadar](../solutions/socradar.md):** `Labels has "SOCRadar"`

| Hunting Query |
|:-------------|
| [SOCRadar Incident Correlation](../content/socradar-socradar-incident-correlation-3a665ce4-b824-4a79-861b-c9f80ab4daba-143cdc23.md) |

### Workbooks (58)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Log4jImpactAssessment](../content/apache-log4j-vulnerability-detection-log4jimpactassessment-68e9e1d6.md) |  |

**In solution [Azure Key Vault](../solutions/azure-key-vault.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [AzureKeyVaultWorkbook](../content/azure-key-vault-azurekeyvaultworkbook-72b1692d.md) |  |

**In solution [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Workbook-AzureSQLSecurity](../content/azure-sql-database-solution-for-sentinel-workbook-azuresqlsecurity-2448278c.md) |  |

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):** `Severity == "High"`<br>`Title !contains "URL"`<br>`Title !contains "net"`<br>`Title !contains "normalization"`<br>`Title !contains "web"`<br>`Title contains "AAD"`<br>`Title contains "Account"`<br>`Title contains "Identity"`<br>`Title contains "Login"`<br>`Title contains "Sign"`<br>`Title contains "User"`<br>`Title contains "WAF"`<br>`Title contains "access"`<br>`Title contains "anti"`<br>`Title contains "app"`<br>`Title contains "auth"`<br>`Title contains "cert"`<br>`Title contains "certificate"`<br>`Title contains "cred"`<br>`Title contains "data"`<br>`Title contains "dns"`<br>`Title contains "dos"`<br>`Title contains "exploit"`<br>`Title contains "impersonate"`<br>`Title contains "inject"`<br>`Title contains "intrusion"`<br>`Title contains "key"`<br>`Title contains "mal"`<br>`Title contains "mining"`<br>`Title contains "password"`<br>`Title contains "program"`<br>`Title contains "secret"`<br>`Title contains "sensitive"`<br>`Title contains "service principal"`<br>`Title contains "tool"`<br>`Title contains "travel"`<br>`Title contains "virus"`<br>`Title contains "ware"`<br>`Title contains "worm"`

| Workbook |
|:-------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |

**In solution [Censys](../solutions/censys.md):** `ModifiedBy contains "playbook - censys"`

| Workbook |
|:-------------|
| [Censys](../content/censys-censys-21c23ffd.md) |

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):** `Classification in "BenignPositive,FalsePositive,TruePositive,Undetermined"`<br>`Severity == "High"`<br>`Title contains "PII"`<br>`Title contains "USB"`<br>`Title contains "access"`<br>`Title contains "account"`<br>`Title contains "backdoor"`<br>`Title contains "beacon"`<br>`Title contains "brute"`<br>`Title contains "c2"`<br>`Title contains "confidential"`<br>`Title contains "cred"`<br>`Title contains "data"`<br>`Title contains "deny"`<br>`Title contains "drive"`<br>`Title contains "execution"`<br>`Title contains "exfil"`<br>`Title contains "exploit"`<br>`Title contains "file"`<br>`Title contains "intellectual"`<br>`Title contains "leak"`<br>`Title contains "logon"`<br>`Title contains "loss"`<br>`Title contains "media"`<br>`Title contains "removable"`<br>`Title contains "restricted"`<br>`Title contains "sensitive"`<br>`Title contains "shared"`<br>`Title contains "sign"`<br>`Title contains "software"`<br>`Title contains "spill"`<br>`Title contains "storage"`<br>`Title contains "test"`<br>`Title contains "tool"`<br>`Title contains "trojan"`<br>`Title contains "usb"`<br>`Title contains "virus"`<br>`Title contains "ware"`

| Workbook |
|:-------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |

**In solution [DORA Compliance](../solutions/dora-compliance.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DORACompliance](../content/dora-compliance-doracompliance-21bcc12f.md) |  |

**In solution [DPDP Compliance](../solutions/dpdp-compliance.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DPDPCompliance](../content/dpdp-compliance-dpdpcompliance-18571e87.md) |  |

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md) |  |

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [GreyNoiseOverview](../content/greynoisethreatintelligence-greynoiseoverview-879c7a2d.md) |  |

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md) |  |

**In solution [Infoblox](../solutions/infoblox.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox_Lookup_Workbook](../content/infoblox-infoblox-lookup-workbook-5d6a67bf.md) |  |
| [Infoblox_Workbook](../content/infoblox-infoblox-workbook-0b2c239e.md) |  |

**In solution [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [InfobloxSOCInsightsWorkbook](../content/infoblox-soc-insights-infobloxsocinsightsworkbook-004063d9.md) |  |

**In solution [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md):** `AdditionalData contains "T0801"`<br>`AdditionalData contains "T0803"`<br>`AdditionalData contains "T0806"`<br>`AdditionalData contains "T0807"`<br>`AdditionalData contains "T0809"`<br>`AdditionalData contains "T0811"`<br>`AdditionalData contains "T0814"`<br>`AdditionalData contains "T0816"`<br>`AdditionalData contains "T0817"`<br>`AdditionalData contains "T0821"`<br>`AdditionalData contains "T0822"`<br>`AdditionalData contains "T0826"`<br>`AdditionalData contains "T0828"`<br>`AdditionalData contains "T0831"`<br>`AdditionalData contains "T0836"`<br>`AdditionalData contains "T0838"`<br>`AdditionalData contains "T0839"`<br>`AdditionalData contains "T0842"`<br>`AdditionalData contains "T0843"`<br>`AdditionalData contains "T0845"`<br>`AdditionalData contains "T0846"`<br>`AdditionalData contains "T0847"`<br>`AdditionalData contains "T0848"`<br>`AdditionalData contains "T0849"`<br>`AdditionalData contains "T0851"`<br>`AdditionalData contains "T0855"`<br>`AdditionalData contains "T0857"`<br>`AdditionalData contains "T0858"`<br>`AdditionalData contains "T0859"`<br>`AdditionalData contains "T0861"`<br>`AdditionalData contains "T0863"`<br>`AdditionalData contains "T0865"`<br>`AdditionalData contains "T0866"`<br>`AdditionalData contains "T0867"`<br>`AdditionalData contains "T0869"`<br>`AdditionalData contains "T0871"`<br>`AdditionalData contains "T0874"`<br>`AdditionalData contains "T0874T0812"`<br>`AdditionalData contains "T0881"`<br>`AdditionalData contains "T0882"`<br>`AdditionalData contains "T0883"`<br>`AdditionalData contains "T0884"`<br>`AdditionalData contains "T0885"`<br>`AdditionalData contains "T0886"`<br>`AdditionalData contains "T0889"`<br>`Severity in "High,Low,Medium"`<br>`Title contains "(MDIoT)"`

| Workbook |
|:-------------|
| [IoTOTThreatMonitoringwithDefenderforIoT](../content/iototthreatmonitoringwithdefenderforiot-iototthreatmonitoringwithdefenderforiot-d8edfecb.md) |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [Microsoft Defender Threat Intelligence](../solutions/microsoft-defender-threat-intelligence.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftThreatIntelligence](../content/microsoft-defender-threat-intelligence-microsoftthreatintelligence-e224017f.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `Classification == "TruePositive"`

| Workbook |
|:-------------|
| [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoft-defender-xdr-microsoftdefenderforoffice365detectionsandinsights-c34bc8fb.md) |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [ReversingLabs](../solutions/reversinglabs.md):** `Comments !contains "Comment created from playbook"`

| Workbook |
|:-------------|
| [ReversingLabs-CapabilitiesOverview](../content/reversinglabs-reversinglabs-capabilitiesoverview-cf6695da.md) |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [AnalyticsEfficiency](../content/soc-handbook-analyticsefficiency-ba1ee629.md) |  |
| [AnomaliesVisualization](../content/soc-handbook-anomaliesvisualization-8cb75567.md) |  |
| [AnomalyData](../content/soc-handbook-anomalydata-44d72d0f.md) |  |
| [IncidentOverview](../content/soc-handbook-incidentoverview-c120b199.md) | `ModifiedBy != "Incident created from alert"` |
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) |  |
| [SecurityOperationsEfficiency](../content/soc-handbook-securityoperationsefficiency-d083776e.md) | `ModifiedBy !in "Alert Grouping,Fusion,Incident created from alert"` |
| [SentinelCentral](../content/soc-handbook-sentinelcentral-27b23efc.md) |  |

**In solution [SOC-Process-Framework](../solutions/soc-process-framework.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SOCProcessFramework](../content/soc-process-framework-socprocessframework-5c770df0.md) |  |

**In solution [SentinelSOARessentials](../solutions/sentinelsoaressentials.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [IncidentTasksWorkbook](../content/sentinelsoaressentials-incidenttasksworkbook-37a89581.md) | `Owner == "Unassigned"`<br>`Owner != "Unassigned"`<br>`Tasks != "[]"` |
| [SecurityOperationsEfficiency](../content/sentinelsoaressentials-securityoperationsefficiency-4e91f3d3.md) | `ModifiedBy !in "Alert Grouping,Fusion,Incident created from alert"` |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ThreatIntelligence](../content/threat-intelligence-threatintelligence-3dd5d2b4.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ThreatIntelligenceNew](../content/threat-intelligence-new-threatintelligencenew-535206c7.md) |  |

**In solution [ThreatAnalysis&Response](../solutions/threatanalysis&response.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DynamicThreatModeling&Response](../content/threatanalysis&response-dynamicthreatmodeling&response-54123c47.md) |  |

**In solution [ThreatConnect](../solutions/threatconnect.md):** `SourceSystem startswith "ThreatConnect-"`

| Workbook |
|:-------------|
| [ThreatConnectOverview](../content/threatconnect-threatconnectoverview-c70716b8.md) |

**In solution [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md):** `Title contains "Critical"`<br>`Title contains "IPS"`<br>`Title contains "adopted"`<br>`Title contains "data connector"`<br>`Title contains "log shipping"`<br>`Title startswith "UniFi Site Manager"`

| Workbook |
|:-------------|
| [UnifiSiteManager](../content/unifi-site-manager-ccf-unifisitemanager-eafe5588.md) |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):** `AdditionalData contains "Microsoft Defender for Endpoint"`

| Workbook |
|:-------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [AMAmigrationTracker](../content/github-only-amamigrationtracker-7a7462f4.md) |  |
| [AdvancedWorkbookConcepts](../content/github-only-advancedworkbookconcepts-3495e806.md) |  |
| [AnalyticsEfficiency](../content/github-only-analyticsefficiency-b881d5ae.md) |  |
| [AnalyticsHealthAudit](../content/github-only-analyticshealthaudit-cb1c8682.md) |  |
| [AnomaliesVisualization](../content/github-only-anomaliesvisualization-9d418617.md) |  |
| [AnomalyData](../content/github-only-anomalydata-27a3f7c6.md) |  |
| [AzureKeyVaultWorkbook](../content/github-only-azurekeyvaultworkbook-81485e59.md) |  |
| [DoDZeroTrustWorkbook](../content/github-only-dodzerotrustworkbook-844294c8.md) |  |
| [IncidentTasksWorkbook](../content/github-only-incidenttasksworkbook-b100c180.md) | `Owner == "Unassigned"`<br>`Owner != "Unassigned"`<br>`Tasks != "[]"` |
| [InvestigationInsights](../content/github-only-investigationinsights-8694eaf8.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) | `Classification in "BenignPositive,FalsePositive,TruePositive,Undetermined"` |
| [OptimizationWorkbook](../content/github-only-optimizationworkbook-7387c8bb.md) | `ModifiedBy !has "automation"`<br>`ModifiedBy !has "automation rule"`<br>`ModifiedBy !has "playbook"`<br>`ModifiedBy has "automation"`<br>`ModifiedBy has_any "playbook"`<br>`Tasks != "[]"` |
| [SecurityOperationsEfficiency](../content/github-only-securityoperationsefficiency-84293023.md) | `ModifiedBy !in "Alert Grouping,Fusion,Incident created from alert"` |
| [SentinelWorkspaceReconTools](../content/github-only-sentinelworkspacerecontools-74b07e4a.md) |  |
| [Sentinel_Central](../content/github-only-sentinel-central-2a36f7ae.md) |  |
| [ThreatIntelligence](../content/github-only-threatintelligence-250cda74.md) |  |
| [UserEntityBehaviorAnalytics](../content/github-only-userentitybehavioranalytics-2c986bb5.md) |  |
| [User_Analytics_Workbook](../content/github-only-user-analytics-workbook-b95f3e5a.md) |  |
| [ZeroTrustStrategyWorkbook](../content/github-only-zerotruststrategyworkbook-cd80dc2b.md) |  |

## Selection Criteria Summary (14 criteria, 15 total references)

References by type: 0 connectors, 15 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ModifiedBy !in "Alert Grouping,Fusion,Incident created from alert"` | - | 2 | - | - | **2** |
| `Labels has "SOCRadar"`<br>`Labels has "Synced"` | - | 1 | - | - | **1** |
| `Labels has "SOCRadar"` | - | 1 | - | - | **1** |
| `Severity == "High"`<br>`Title !contains "URL"`<br>`Title !contains "net"`<br>`Title !contains "normalization"`<br>`Title !contains "web"`<br>`Title contains "AAD"`<br>`Title contains "Account"`<br>`Title contains "Identity"`<br>`Title contains "Login"`<br>`Title contains "Sign"`<br>`Title contains "User"`<br>`Title contains "WAF"`<br>`Title contains "access"`<br>`Title contains "anti"`<br>`Title contains "app"`<br>`Title contains "auth"`<br>`Title contains "cert"`<br>`Title contains "certificate"`<br>`Title contains "cred"`<br>`Title contains "data"`<br>`Title contains "dns"`<br>`Title contains "dos"`<br>`Title contains "exploit"`<br>`Title contains "impersonate"`<br>`Title contains "inject"`<br>`Title contains "intrusion"`<br>`Title contains "key"`<br>`Title contains "mal"`<br>`Title contains "mining"`<br>`Title contains "password"`<br>`Title contains "program"`<br>`Title contains "secret"`<br>`Title contains "sensitive"`<br>`Title contains "service principal"`<br>`Title contains "tool"`<br>`Title contains "travel"`<br>`Title contains "virus"`<br>`Title contains "ware"`<br>`Title contains "worm"` | - | 1 | - | - | **1** |
| `ModifiedBy contains "playbook - censys"` | - | 1 | - | - | **1** |
| `Classification in "BenignPositive,FalsePositive,TruePositive,Undetermined"`<br>`Severity == "High"`<br>`Title contains "PII"`<br>`Title contains "USB"`<br>`Title contains "access"`<br>`Title contains "account"`<br>`Title contains "backdoor"`<br>`Title contains "beacon"`<br>`Title contains "brute"`<br>`Title contains "c2"`<br>`Title contains "confidential"`<br>`Title contains "cred"`<br>`Title contains "data"`<br>`Title contains "deny"`<br>`Title contains "drive"`<br>`Title contains "execution"`<br>`Title contains "exfil"`<br>`Title contains "exploit"`<br>`Title contains "file"`<br>`Title contains "intellectual"`<br>`Title contains "leak"`<br>`Title contains "logon"`<br>`Title contains "loss"`<br>`Title contains "media"`<br>`Title contains "removable"`<br>`Title contains "restricted"`<br>`Title contains "sensitive"`<br>`Title contains "shared"`<br>`Title contains "sign"`<br>`Title contains "software"`<br>`Title contains "spill"`<br>`Title contains "storage"`<br>`Title contains "test"`<br>`Title contains "tool"`<br>`Title contains "trojan"`<br>`Title contains "usb"`<br>`Title contains "virus"`<br>`Title contains "ware"` | - | 1 | - | - | **1** |
| `AdditionalData contains "T0801"`<br>`AdditionalData contains "T0803"`<br>`AdditionalData contains "T0806"`<br>`AdditionalData contains "T0807"`<br>`AdditionalData contains "T0809"`<br>`AdditionalData contains "T0811"`<br>`AdditionalData contains "T0814"`<br>`AdditionalData contains "T0816"`<br>`AdditionalData contains "T0817"`<br>`AdditionalData contains "T0821"`<br>`AdditionalData contains "T0822"`<br>`AdditionalData contains "T0826"`<br>`AdditionalData contains "T0828"`<br>`AdditionalData contains "T0831"`<br>`AdditionalData contains "T0836"`<br>`AdditionalData contains "T0838"`<br>`AdditionalData contains "T0839"`<br>`AdditionalData contains "T0842"`<br>`AdditionalData contains "T0843"`<br>`AdditionalData contains "T0845"`<br>`AdditionalData contains "T0846"`<br>`AdditionalData contains "T0847"`<br>`AdditionalData contains "T0848"`<br>`AdditionalData contains "T0849"`<br>`AdditionalData contains "T0851"`<br>`AdditionalData contains "T0855"`<br>`AdditionalData contains "T0857"`<br>`AdditionalData contains "T0858"`<br>`AdditionalData contains "T0859"`<br>`AdditionalData contains "T0861"`<br>`AdditionalData contains "T0863"`<br>`AdditionalData contains "T0865"`<br>`AdditionalData contains "T0866"`<br>`AdditionalData contains "T0867"`<br>`AdditionalData contains "T0869"`<br>`AdditionalData contains "T0871"`<br>`AdditionalData contains "T0874"`<br>`AdditionalData contains "T0874T0812"`<br>`AdditionalData contains "T0881"`<br>`AdditionalData contains "T0882"`<br>`AdditionalData contains "T0883"`<br>`AdditionalData contains "T0884"`<br>`AdditionalData contains "T0885"`<br>`AdditionalData contains "T0886"`<br>`AdditionalData contains "T0889"`<br>`Severity in "High,Low,Medium"`<br>`Title contains "(MDIoT)"` | - | 1 | - | - | **1** |
| `Classification == "TruePositive"` | - | 1 | - | - | **1** |
| `Comments !contains "Comment created from playbook"` | - | 1 | - | - | **1** |
| `Owner == "Unassigned"`<br>`Owner != "Unassigned"`<br>`Tasks != "[]"` | - | 1 | - | - | **1** |
| `ModifiedBy != "Incident created from alert"` | - | 1 | - | - | **1** |
| `SourceSystem startswith "ThreatConnect-"` | - | 1 | - | - | **1** |
| `Title contains "Critical"`<br>`Title contains "IPS"`<br>`Title contains "adopted"`<br>`Title contains "data connector"`<br>`Title contains "log shipping"`<br>`Title startswith "UniFi Site Manager"` | - | 1 | - | - | **1** |
| `AdditionalData contains "Microsoft Defender for Endpoint"` | - | 1 | - | - | **1** |
| **Total** | **0** | **15** | **0** | **0** | **15** |

### AdditionalData

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains T0801` | - | 1 | - | - | **1** |
| `contains T0803` | - | 1 | - | - | **1** |
| `contains T0806` | - | 1 | - | - | **1** |
| `contains T0807` | - | 1 | - | - | **1** |
| `contains T0809` | - | 1 | - | - | **1** |
| `contains T0811` | - | 1 | - | - | **1** |
| `contains T0814` | - | 1 | - | - | **1** |
| `contains T0816` | - | 1 | - | - | **1** |
| `contains T0817` | - | 1 | - | - | **1** |
| `contains T0821` | - | 1 | - | - | **1** |
| `contains T0822` | - | 1 | - | - | **1** |
| `contains T0826` | - | 1 | - | - | **1** |
| `contains T0828` | - | 1 | - | - | **1** |
| `contains T0831` | - | 1 | - | - | **1** |
| `contains T0836` | - | 1 | - | - | **1** |
| `contains T0838` | - | 1 | - | - | **1** |
| `contains T0839` | - | 1 | - | - | **1** |
| `contains T0842` | - | 1 | - | - | **1** |
| `contains T0843` | - | 1 | - | - | **1** |
| `contains T0845` | - | 1 | - | - | **1** |
| `contains T0846` | - | 1 | - | - | **1** |
| `contains T0847` | - | 1 | - | - | **1** |
| `contains T0848` | - | 1 | - | - | **1** |
| `contains T0849` | - | 1 | - | - | **1** |
| `contains T0851` | - | 1 | - | - | **1** |
| `contains T0855` | - | 1 | - | - | **1** |
| `contains T0857` | - | 1 | - | - | **1** |
| `contains T0858` | - | 1 | - | - | **1** |
| `contains T0859` | - | 1 | - | - | **1** |
| `contains T0861` | - | 1 | - | - | **1** |
| `contains T0863` | - | 1 | - | - | **1** |
| `contains T0865` | - | 1 | - | - | **1** |
| `contains T0866` | - | 1 | - | - | **1** |
| `contains T0867` | - | 1 | - | - | **1** |
| `contains T0869` | - | 1 | - | - | **1** |
| `contains T0871` | - | 1 | - | - | **1** |
| `contains T0874` | - | 1 | - | - | **1** |
| `contains T0874T0812` | - | 1 | - | - | **1** |
| `contains T0881` | - | 1 | - | - | **1** |
| `contains T0882` | - | 1 | - | - | **1** |
| `contains T0883` | - | 1 | - | - | **1** |
| `contains T0884` | - | 1 | - | - | **1** |
| `contains T0885` | - | 1 | - | - | **1** |
| `contains T0886` | - | 1 | - | - | **1** |
| `contains T0889` | - | 1 | - | - | **1** |
| `contains Microsoft Defender for Endpoint` | - | 1 | - | - | **1** |

### Classification

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `TruePositive` | - | 2 | - | - | **2** |
| `BenignPositive` | - | 1 | - | - | **1** |
| `FalsePositive` | - | 1 | - | - | **1** |
| `Undetermined` | - | 1 | - | - | **1** |

### Comments

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!contains Comment created from playbook` | - | 1 | - | - | **1** |

### Labels

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `has SOCRadar` | - | 2 | - | - | **2** |
| `has Synced` | - | 1 | - | - | **1** |

### ModifiedBy

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= Incident created from alert` | - | 3 | - | - | **3** |
| `!= Alert Grouping` | - | 2 | - | - | **2** |
| `!= Fusion` | - | 2 | - | - | **2** |
| `contains playbook - censys` | - | 1 | - | - | **1** |

### Owner

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Unassigned` | - | 1 | - | - | **1** |
| `!= Unassigned` | - | 1 | - | - | **1** |

### Severity

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `High` | - | 3 | - | - | **3** |
| `Low` | - | 1 | - | - | **1** |
| `Medium` | - | 1 | - | - | **1** |

### SourceSystem

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `startswith ThreatConnect-` | - | 1 | - | - | **1** |

### Tasks

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= []` | - | 1 | - | - | **1** |

### Title

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains access` | - | 2 | - | - | **2** |
| `contains cred` | - | 2 | - | - | **2** |
| `contains data` | - | 2 | - | - | **2** |
| `contains exploit` | - | 2 | - | - | **2** |
| `contains sensitive` | - | 2 | - | - | **2** |
| `contains tool` | - | 2 | - | - | **2** |
| `contains virus` | - | 2 | - | - | **2** |
| `contains ware` | - | 2 | - | - | **2** |
| `!contains URL` | - | 1 | - | - | **1** |
| `!contains net` | - | 1 | - | - | **1** |
| `!contains normalization` | - | 1 | - | - | **1** |
| `!contains web` | - | 1 | - | - | **1** |
| `contains AAD` | - | 1 | - | - | **1** |
| `contains Account` | - | 1 | - | - | **1** |
| `contains Identity` | - | 1 | - | - | **1** |
| `contains Login` | - | 1 | - | - | **1** |
| `contains Sign` | - | 1 | - | - | **1** |
| `contains User` | - | 1 | - | - | **1** |
| `contains WAF` | - | 1 | - | - | **1** |
| `contains anti` | - | 1 | - | - | **1** |
| `contains app` | - | 1 | - | - | **1** |
| `contains auth` | - | 1 | - | - | **1** |
| `contains cert` | - | 1 | - | - | **1** |
| `contains certificate` | - | 1 | - | - | **1** |
| `contains dns` | - | 1 | - | - | **1** |
| `contains dos` | - | 1 | - | - | **1** |
| `contains impersonate` | - | 1 | - | - | **1** |
| `contains inject` | - | 1 | - | - | **1** |
| `contains intrusion` | - | 1 | - | - | **1** |
| `contains key` | - | 1 | - | - | **1** |
| `contains mal` | - | 1 | - | - | **1** |
| `contains mining` | - | 1 | - | - | **1** |
| `contains password` | - | 1 | - | - | **1** |
| `contains program` | - | 1 | - | - | **1** |
| `contains secret` | - | 1 | - | - | **1** |
| `contains service principal` | - | 1 | - | - | **1** |
| `contains travel` | - | 1 | - | - | **1** |
| `contains worm` | - | 1 | - | - | **1** |
| `contains PII` | - | 1 | - | - | **1** |
| `contains USB` | - | 1 | - | - | **1** |
| `contains account` | - | 1 | - | - | **1** |
| `contains backdoor` | - | 1 | - | - | **1** |
| `contains beacon` | - | 1 | - | - | **1** |
| `contains brute` | - | 1 | - | - | **1** |
| `contains c2` | - | 1 | - | - | **1** |
| `contains confidential` | - | 1 | - | - | **1** |
| `contains deny` | - | 1 | - | - | **1** |
| `contains drive` | - | 1 | - | - | **1** |
| `contains execution` | - | 1 | - | - | **1** |
| `contains exfil` | - | 1 | - | - | **1** |
| `contains file` | - | 1 | - | - | **1** |
| `contains intellectual` | - | 1 | - | - | **1** |
| `contains leak` | - | 1 | - | - | **1** |
| `contains logon` | - | 1 | - | - | **1** |
| `contains loss` | - | 1 | - | - | **1** |
| `contains media` | - | 1 | - | - | **1** |
| `contains removable` | - | 1 | - | - | **1** |
| `contains restricted` | - | 1 | - | - | **1** |
| `contains shared` | - | 1 | - | - | **1** |
| `contains sign` | - | 1 | - | - | **1** |
| `contains software` | - | 1 | - | - | **1** |
| `contains spill` | - | 1 | - | - | **1** |
| `contains storage` | - | 1 | - | - | **1** |
| `contains test` | - | 1 | - | - | **1** |
| `contains trojan` | - | 1 | - | - | **1** |
| `contains usb` | - | 1 | - | - | **1** |
| `contains (MDIoT)` | - | 1 | - | - | **1** |
| `contains Critical` | - | 1 | - | - | **1** |
| `contains IPS` | - | 1 | - | - | **1** |
| `contains adopted` | - | 1 | - | - | **1** |
| `contains data connector` | - | 1 | - | - | **1** |
| `contains log shipping` | - | 1 | - | - | **1** |
| `startswith UniFi Site Manager` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

