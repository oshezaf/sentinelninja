# AzureDiagnostics

Reference for AzureDiagnostics table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Various |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azurediagnostics) |

## Solutions (37)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Azure Batch Account](../solutions/azure-batch-account.md)
- [Azure Cognitive Search](../solutions/azure-cognitive-search.md)
- [Azure DDoS Protection](../solutions/azure-ddos-protection.md)
- [Azure Data Lake Storage Gen1](../solutions/azure-data-lake-storage-gen1.md)
- [Azure Event Hubs](../solutions/azure-event-hubs.md)
- [Azure Firewall](../solutions/azure-firewall.md)
- [Azure Key Vault](../solutions/azure-key-vault.md)
- [Azure Logic Apps](../solutions/azure-logic-apps.md)
- [Azure Network Security Groups](../solutions/azure-network-security-groups.md)
- [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md)
- [Azure Service Bus](../solutions/azure-service-bus.md)
- [Azure Stream Analytics](../solutions/azure-stream-analytics.md)
- [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-%28waf%29.md)
- [Azure kubernetes Service](../solutions/azure-kubernetes-service.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [Cloud Service Threat Protection Essentials](../solutions/cloud-service-threat-protection-essentials.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md)
- [DNS Essentials](../solutions/dns-essentials.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Network Session Essentials](../solutions/network-session-essentials.md)
- [Recorded Future](../solutions/recorded-future.md)
- [SentinelSOARessentials](../solutions/sentinelsoaressentials.md)
- [SlashNext](../solutions/slashnext.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md)
- [ThreatAnalysis&Response](../solutions/threatanalysis&response.md)
- [ThreatConnect](../solutions/threatconnect.md)
- [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md)

## Connectors (15)

This table is ingested by the following connectors:

- [Azure Batch Account](../connectors/azurebatchaccount-ccp.md)
- [Azure Cognitive Search](../connectors/azurecognitivesearch-ccp.md)
- [Azure Data Lake Storage Gen1](../connectors/azuredatalakestoragegen1-ccp.md)
- [Azure Event Hub](../connectors/azureeventhub-ccp.md)
- [Azure Firewall](../connectors/azurefirewall.md)
- [Azure Key Vault](../connectors/azurekeyvault.md)
- [Azure Kubernetes Service (AKS)](../connectors/azurekubernetes.md)
- [Azure Logic Apps](../connectors/azurelogicapps-ccp.md)
- [Network Security Groups](../connectors/azurensg.md)
- [Azure Service Bus](../connectors/azureservicebus-ccp.md)
- [Azure SQL Databases](../connectors/azuresql.md)
- [Azure Stream Analytics](../connectors/azurestreamanalytics-ccp.md)
- [Azure DDoS Protection](../connectors/ddos.md)
- [SlashNext Function App](../connectors/slashnextfunctionapp.md)
- [Azure Web Application Firewall (WAF)](../connectors/waf.md)

---

## Content Items Using This Table (114)

### Analytic Rules (58)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Azure WAF matching for Log4j vuln(CVE-2021-44228)](../content/2de8abd6-a613-450e-95ed-08e503369fb3.md)
- [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/6e575295-a7e6-464c-8192-3e1d8fd6a990.md)

**In solution [Azure DDoS Protection](../solutions/azure-ddos-protection.md):**
- [DDoS Attack IP Addresses - PPS Threshold](../content/6e76fd9d-8104-41eb-bad3-26054a3ad5f0.md)
- [DDoS Attack IP Addresses - Percent Threshold](../content/402a42ad-f31c-48d1-8f80-0200846b7f25.md)

**In solution [Azure Key Vault](../solutions/azure-key-vault.md):**
- [Azure Key Vault access TimeSeries anomaly](../content/0914adab-90b5-47a3-a79f-7cdcac843aa7.md)
- [Mass secret retrieval from Azure Key Vault](../content/24f8c234-d1ff-40ec-8b73-96b17a3a9c1c.md)
- [NRT Sensitive Azure Key Vault operations](../content/884ead54-cb3f-4676-a1eb-b26532d6cbfd.md)
- [Sensitive Azure Key Vault operations](../content/d6491be0-ab2d-439d-95d6-ad8ea39277c5.md)

**In solution [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md):**
- [Affected rows stateful anomaly on database](../content/2a632013-379d-4993-956f-615063d31e10.md)
- [Credential errors stateful anomaly on database](../content/daa32afa-b5b6-427d-93e9-e32f3f359dd7.md)
- [Drop attempts stateful anomaly on database](../content/237c3855-138c-4588-a68f-b870abd3bfc9.md)
- [Execution attempts stateful anomaly on database](../content/3367fd5e-44b3-4746-a9a5-dc15c8202490.md)
- [Firewall errors stateful anomaly on database](../content/20f87813-3de0-4a9f-a8c0-6aaa3187be08.md)
- [Firewall rule manipulation attempts stateful anomaly on database](../content/05030ca6-ef66-42ca-b672-2e84d4aaf5d7.md)
- [OLE object manipulation attempts stateful anomaly on database](../content/dabd7284-004b-4237-b5ee-a22acab19eb2.md)
- [Outgoing connection attempts stateful anomaly on database](../content/c105513d-e398-4a02-bd91-54b9b2d6fa7d.md)
- [Response rows stateful anomaly on database](../content/9851c360-5fd5-4bae-a117-b66d8476bf5e.md)
- [Syntax errors stateful anomaly on database](../content/c815008d-f4d1-4645-b13b-8b4bc188d5de.md)

**In solution [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-%28waf%29.md):**
- [AFD WAF - Code Injection](../content/ded8168e-c806-4772-af30-10576e0a7529.md)
- [AFD WAF - Path Traversal Attack](../content/a4d99328-e4e6-493d-b0d5-57e6f9ddae77.md)
- [Front Door Premium WAF - SQLi Detection](../content/16da3a2a-af29-48a0-8606-d467c180fe18.md)
- [Front Door Premium WAF - XSS Detection](../content/b7643904-5081-4920-917e-a559ddc3448f.md)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [Detect DNS queries reporting multiple errors from different clients - Anomaly Based (ASIM DNS Solution)](../content/cf687598-5a2c-46f8-81c8-06b15ed489b1.md)
- [Detect DNS queries reporting multiple errors from different clients - Static threshold based (ASIM DNS Solution)](../content/5b8344eb-fa28-4ac3-bcff-bc19d5d63089.md)
- [Detect excessive NXDOMAIN DNS queries - Anomaly based (ASIM DNS Solution)](../content/02f23312-1a33-4390-8b80-f7cd4df4dea0.md)
- [Detect excessive NXDOMAIN DNS queries - Static threshold based (ASIM DNS Solution)](../content/4ab8b09e-3c23-4974-afbe-7e653779eb2b.md)
- [Ngrok Reverse Proxy on Network (ASIM DNS Solution)](../content/50b0dfb7-2c94-4eaf-a332-a5936d78c263.md)
- [Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Anomaly based (ASIM DNS Solution)](../content/01191239-274e-43c9-b154-3a042692af06.md)
- [Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Static threshold based (ASIM DNS Solution)](../content/89ba52fa-96a7-4653-829a-ca49bb13336c.md)
- [Rare client observed with high reverse DNS lookup count - Anomaly based (ASIM DNS Solution)](../content/0fe6bde4-b215-480c-99b4-84a96edcdbd7.md)
- [Rare client observed with high reverse DNS lookup count - Static threshold based (ASIM DNS Solution)](../content/77b7c820-5f60-4779-8bdb-f06e21add5f1.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/d9e1646c-dc17-4150-ac85-581f5c9cb41f.md)
- [Google Threat Intelligence - Threat Hunting IP](../content/7edb2abb-7ef7-4685-92eb-a628703ccf9f.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoise TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/536e8e5c-ce0e-575e-bcc9-aba8e7bf9316.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Possible Phishing with CSL and Network Sessions](../content/6c3a1258-bcdd-4fcd-b753-1a9bc826ce12.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [Anomaly found in Network Session Traffic (ASIM Network Session schema)](../content/cd6def0d-3ef0-4d55-a7e3-faa96c46ba12.md)
- [Anomaly in SMB Traffic(ASIM Network Session schema)](../content/8717e498-7b5d-4e23-9e7c-fa4913dbfd79.md)
- [Detect port misuse by anomaly based detection (ASIM Network Session schema)](../content/cbf07406-fa2a-48b0-82b8-efad58db14ec.md)
- [Detect port misuse by static threshold (ASIM Network Session schema)](../content/156997bd-da0f-4729-b47a-0a3e02dd50c8.md)
- [Excessive number of failed connections from a single source (ASIM Network Session schema)](../content/4902eddb-34f7-44a8-ac94-8486366e9494.md)
- [Network Port Sweep from External Network (ASIM Network Session schema)](../content/cd8faa84-4464-4b4e-96dc-b22f50c27541.md)
- [Port scan detected  (ASIM Network Session schema)](../content/1da9853f-3dea-4ea9-b7e5-26730da3d537.md)
- [Potential beaconing activity (ASIM Network Session schema)](../content/fcb9d75c-c3c1-4910-8697-f136bfef2363.md)
- [Remote Desktop Network Brute force (ASIM Network Session schema)](../content/b7dc801e-1e79-48bb-91e8-2229a8e6d40b.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Domain All Actors](../content/acbf7ef6-f964-44c3-9031-7834ec68175f.md)
- [RecordedFuture Threat Hunting IP All Actors](../content/e31bc14e-2b4c-42a4-af34-5bfd7d768aea.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map IP Entity to Azure SQL Security Audit Events](../content/d0aa8969-1bbe-4da3-9e76-09e5f67c9d85.md)
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/999e9f5d-db4a-4b07-a206-29c4e667b7e8.md)
- [TI map IP entity to Azure Key Vault logs](../content/57c7e832-64eb-411f-8928-4133f01f4a25.md)
- [TI map IP entity to AzureFirewall](../content/0b904747-1336-4363-8d84-df2710bfe5e7.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/67775878-7f8b-4380-ac54-115e1e828901.md)
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/e2399891-383c-4caf-ae67-68a008b9f89e.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI Map IP Entity to Azure SQL Security Audit Events](../content/239d987e-ee1b-4c49-b146-e88d682930a4.md)
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/7c1ea2e6-6210-412c-92e4-180803a741b4.md)
- [TI map IP entity to Azure Key Vault logs](../content/7c8051a7-3d29-4c0d-a340-893423f7b0a5.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/b306fba8-1a28-449f-aa24-30362e16d4f5.md)
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/54f4ceb4-fd83-4633-b5b0-c0de9feb8890.md)

**In solution [ThreatConnect](../solutions/threatconnect.md):**
- [ThreatConnect TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/ee1fd303-2081-47b7-8f02-e38bfd0868e6.md)

### Hunting Queries (34)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Azure WAF Log4j CVE-2021-44228 hunting](../content/1d4d383e-0ca6-4d3a-a861-8f37aeef18cb.md)

**In solution [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md):**
- [Affected rows stateful anomaly on database - hunting query](../content/9670ac84-e035-47f5-8eb5-9d863a8a7893.md)
- [Anomalous Query Execution Time](../content/724c7010-0afe-4d46-95ab-32f6737e658b.md)
- [Anomalous Query Execution Time](../content/af55d5b0-6b4a-4874-8299-9d845bf7c1fd.md)
- [Boolean Blind SQL Injection](../content/4cda0673-37f9-4765-af1f-556de2295cd7.md)
- [Prevalence Based SQL Query Size Anomaly](../content/2a21303e-be48-404f-a6f6-883a6acfe5ad.md)
- [Response rows stateful anomaly on database - hunting query](../content/137tyi7c-7225-434b-8bfc-fea28v95ebd8.md)
- [Suspicious SQL Stored Procedures](../content/db5b0a77-1b1d-4a31-8ebb-c508ebc3bb38.md)
- [Time Based SQL Query Size Anomaly](../content/e0944dec-3c92-4b2d-8e81-a950afeaba69.md)

**In solution [Azure kubernetes Service](../solutions/azure-kubernetes-service.md):**
- [Azure RBAC AKS created role details](../content/765dce51-689a-44b5-9b38-c9ae9441c7fc.md)
- [Determine users with cluster admin role](../content/c3ac03d5-dbf2-49ab-a2de-83396a20a5fb.md)

**In solution [Cloud Service Threat Protection Essentials](../solutions/cloud-service-threat-protection-essentials.md):**
- [Azure Key Vault Access Policy Manipulation](../content/8eff7055-9138-4edc-b8f0-48ea27e23c3c.md)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [CVE-2020-1350 (SIGRED) exploitation pattern (ASIM DNS Solution)](../content/0a8f5777-f38a-4c37-b531-411bdecef976.md)
- [Connection to Unpopular Website Detected (ASIM DNS Solution)](../content/83e70a34-d96f-419d-815b-43d1499e88ed.md)
- [Increase in DNS Requests by client than the daily average count (ASIM DNS Solution)](../content/b31b5d70-4c75-4a5f-8af7-6a83f6eb372c.md)
- [Possible DNS Tunneling or Data Exfiltration Activity (ASIM DNS Solution)](../content/74e8773c-dfa9-45ca-bb60-5d767303e5b3.md)
- [Potential beaconing activity (ASIM DNS Solution)](../content/c4956c0b-4527-406c-b135-ef44002e1e70.md)
- [Top 25 DNS queries with most failures in last 24 hours (ASIM DNS Solution)](../content/4717929b-121d-4d90-b7ba-e3259ef16aca.md)
- [Top 25 Domains with large number of Subdomains (ASIM DNS Solution)](../content/5366b848-0886-439f-b312-0b94bb687d06.md)
- [Top 25 Sources(Clients) with high number of errors in last 24hours (ASIM DNS Solution)](../content/b35f6633-0d18-494c-a5e4-2828daf442bf.md)
- [Unexpected top level domains (ASIM DNS Solution)](../content/4c8d6412-5a48-42c3-8b5e-1f29fb15c749.md)
- [[Anomaly] Anomalous Increase in DNS activity by clients (ASIM DNS Solution)](../content/50f0cdfb-8b01-4eca-823d-2bbe6b8a5b95.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/34288e97-5194-4f2e-abf2-c2783189f6ae.md)
- [Google Threat Intelligence - Threat Hunting IP](../content/faa83502-2763-49ae-9216-e576fa1fdccb.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [Detect Outbound LDAP Traffic(ASIM Network Session schema)](../content/5dca6047-24ed-4eb7-b44e-ec7f1bf42621.md)
- [Detect port misuse by anomaly (ASIM Network Session schema)](../content/906c20c6-b62c-4af7-be91-d7300e3bded2.md)
- [Detect port misuse by static threshold (ASIM Network Session schema)](../content/70e2a349-87f0-4266-809c-e92fc71e0830.md)
- [Detects several users with the same MAC address (ASIM Network Session schema)](../content/cbe10c58-e96b-4827-853e-5c1f22fdcc74.md)
- [Mismatch between Destination App name and Destination Port (ASIM Network Session schema)](../content/a61e9fc1-dd9e-4588-a497-2a34a1d811bf.md)
- [Protocols passing authentication in cleartext (ASIM Network Session schema)](../content/96f9fdd1-bb5b-4d32-8790-666457dc00c0.md)
- [Remote Desktop Network Traffic(ASIM Network Session schema)](../content/6fd69768-fdf1-4cfd-805f-b243be3f0c6d.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Domain All Actors](../content/d641a534-ead8-41aa-a7c8-2b35e6b64c9f.md)
- [RecordedFuture Threat Hunting IP All Actors](../content/7b5eb44d-3533-440e-9774-73a4d99bc2b2.md)

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**
- [Possible Webshell usage attempt related to SpringShell(CVE-2022-22965)](../content/6911d1df-4204-43b2-a64c-3cb102551ddd.md)

### Workbooks (20)

**In solution [Azure DDoS Protection](../solutions/azure-ddos-protection.md):**
- [AzDDoSStandardWorkbook](../content/azddosstandardworkbook-azure-ddos-protection.md)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**
- [AzureFirewallWorkbook](../content/azurefirewallworkbook-azure-firewall.md)

**In solution [Azure Key Vault](../solutions/azure-key-vault.md):**
- [AzureKeyVaultWorkbook](../content/azurekeyvaultworkbook-azure-key-vault.md)

**In solution [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md):**
- [Workbook-AzureSQLSecurity](../content/workbook-azuresqlsecurity-azure-sql-database-solution-for-sentinel.md)

**In solution [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-%28waf%29.md):**
- [WebApplicationFirewallFirewallEvents](../content/webapplicationfirewallfirewallevents-azure-web-application-firewall-%28waf%29.md)
- [WebApplicationFirewallGatewayAccessEvents](../content/webapplicationfirewallgatewayaccessevents-azure-web-application-firewall-%28waf%29.md)
- [WebApplicationFirewallOverview](../content/webapplicationfirewalloverview-azure-web-application-firewall-%28waf%29.md)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**
- [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark.md)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation.md)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmcv2-cybersecuritymaturitymodelcertification%28cmmc%292.0.md)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [DNSSolutionWorkbook](../content/dnssolutionworkbook-dns-essentials.md)

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**
- [GDPRComplianceAndDataSecurity](../content/gdprcomplianceanddatasecurity-gdpr-compliance-&-data-security.md)

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**
- [HIPAACompliance](../content/hipaacompliance-hipaa-compliance.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagement-m2131-maturitymodelforeventlogmanagementm2131.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [NetworkSessionEssentials](../content/networksessionessentials-network-session-essentials.md)
- [NetworkSessionEssentialsV2](../content/networksessionessentialsv2-network-session-essentials.md)

**In solution [SentinelSOARessentials](../solutions/sentinelsoaressentials.md):**
- [AutomationHealth](../content/automationhealth-sentinelsoaressentials.md)

**In solution [ThreatAnalysis&Response](../solutions/threatanalysis&response.md):**
- [DynamicThreatModeling&Response](../content/dynamicthreatmodeling&response-threatanalysis&response.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md):**
- [ZeroTrustTIC3](../content/zerotrusttic3-zerotrust%28tic3.0%29.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content-index.md)
