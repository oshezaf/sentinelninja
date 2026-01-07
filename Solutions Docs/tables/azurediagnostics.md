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
- [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md)
- [Azure kubernetes Service](../solutions/azure-kubernetes-service.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [Cloud Service Threat Protection Essentials](../solutions/cloud-service-threat-protection-essentials.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
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
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [ThreatAnalysis&Response](../solutions/threatanalysis&response.md)
- [ThreatConnect](../solutions/threatconnect.md)
- [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

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
- [Azure WAF matching for Log4j vuln(CVE-2021-44228)](../content/apache-log4j-vulnerability-detection-azure-waf-matching-for-log4j-vuln-cve-2021-44228-2de8abd6-a613-450e-95ed-08e503369fb3-2f37c37a.md)
- [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md)

**In solution [Azure DDoS Protection](../solutions/azure-ddos-protection.md):**
- [DDoS Attack IP Addresses - PPS Threshold](../content/azure-ddos-protection-ddos-attack-ip-addresses-pps-threshold-6e76fd9d-8104-41eb-bad3-26054a3ad5f0-19898f82.md)
- [DDoS Attack IP Addresses - Percent Threshold](../content/azure-ddos-protection-ddos-attack-ip-addresses-percent-threshold-402a42ad-f31c-48d1-8f80-0200846b7f25-45798bda.md)

**In solution [Azure Key Vault](../solutions/azure-key-vault.md):**
- [Azure Key Vault access TimeSeries anomaly](../content/azure-key-vault-azure-key-vault-access-timeseries-anomaly-0914adab-90b5-47a3-a79f-7cdcac843aa7-3cd8ede1.md)
- [Mass secret retrieval from Azure Key Vault](../content/azure-key-vault-mass-secret-retrieval-from-azure-key-vault-24f8c234-d1ff-40ec-8b73-96b17a3a9c1c-f69dcdc4.md)
- [NRT Sensitive Azure Key Vault operations](../content/azure-key-vault-nrt-sensitive-azure-key-vault-operations-884ead54-cb3f-4676-a1eb-b26532d6cbfd-6787446f.md)
- [Sensitive Azure Key Vault operations](../content/azure-key-vault-sensitive-azure-key-vault-operations-d6491be0-ab2d-439d-95d6-ad8ea39277c5-6dc5e1cc.md)

**In solution [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md):**
- [Affected rows stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-affected-rows-stateful-anomaly-on-database-2a632013-379d-4993-956f-615063d31e10-11212897.md)
- [Credential errors stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-credential-errors-stateful-anomaly-on-database-daa32afa-b5b6-427d-93e9-e32f3f359dd7-ce884545.md)
- [Drop attempts stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-drop-attempts-stateful-anomaly-on-database-237c3855-138c-4588-a68f-b870abd3bfc9-7ce4340f.md)
- [Execution attempts stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-execution-attempts-stateful-anomaly-on-database-3367fd5e-44b3-4746-a9a5-dc15c8202490-1b031009.md)
- [Firewall errors stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-firewall-errors-stateful-anomaly-on-database-20f87813-3de0-4a9f-a8c0-6aaa3187be08-b973d4ce.md)
- [Firewall rule manipulation attempts stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-firewall-rule-manipulation-attempts-stateful-anomaly-on-databas-05030ca6-ef66-42ca-b672-2e84d4aaf5d7-c6bd8fb4.md)
- [OLE object manipulation attempts stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-ole-object-manipulation-attempts-stateful-anomaly-on-database-dabd7284-004b-4237-b5ee-a22acab19eb2-08386257.md)
- [Outgoing connection attempts stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-outgoing-connection-attempts-stateful-anomaly-on-database-c105513d-e398-4a02-bd91-54b9b2d6fa7d-be32ef2f.md)
- [Response rows stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-response-rows-stateful-anomaly-on-database-9851c360-5fd5-4bae-a117-b66d8476bf5e-50984d5e.md)
- [Syntax errors stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-syntax-errors-stateful-anomaly-on-database-c815008d-f4d1-4645-b13b-8b4bc188d5de-75deac2f.md)

**In solution [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md):**
- [AFD WAF - Code Injection](../content/azure-web-application-firewall-waf-afd-waf-code-injection-ded8168e-c806-4772-af30-10576e0a7529-19ad7bff.md)
- [AFD WAF - Path Traversal Attack](../content/azure-web-application-firewall-waf-afd-waf-path-traversal-attack-a4d99328-e4e6-493d-b0d5-57e6f9ddae77-2344821e.md)
- [Front Door Premium WAF - SQLi Detection](../content/azure-web-application-firewall-waf-front-door-premium-waf-sqli-detection-16da3a2a-af29-48a0-8606-d467c180fe18-3acd0e4e.md)
- [Front Door Premium WAF - XSS Detection](../content/azure-web-application-firewall-waf-front-door-premium-waf-xss-detection-b7643904-5081-4920-917e-a559ddc3448f-f46a8943.md)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [Detect DNS queries reporting multiple errors from different clients - Anomaly Based (ASIM DNS Solution)](../content/dns-essentials-detect-dns-queries-reporting-multiple-errors-from-different-clients-anomaly-based-asim-dn-cf687598-5a2c-46f8-81c8-06b15ed489b1-e7ae2b7d.md)
- [Detect DNS queries reporting multiple errors from different clients - Static threshold based (ASIM DNS Solution)](../content/dns-essentials-detect-dns-queries-reporting-multiple-errors-from-different-clients-static-threshold-base-5b8344eb-fa28-4ac3-bcff-bc19d5d63089-d16106dc.md)
- [Detect excessive NXDOMAIN DNS queries - Anomaly based (ASIM DNS Solution)](../content/dns-essentials-detect-excessive-nxdomain-dns-queries-anomaly-based-asim-dns-solution-02f23312-1a33-4390-8b80-f7cd4df4dea0-980141b9.md)
- [Detect excessive NXDOMAIN DNS queries - Static threshold based (ASIM DNS Solution)](../content/dns-essentials-detect-excessive-nxdomain-dns-queries-static-threshold-based-asim-dns-solution-4ab8b09e-3c23-4974-afbe-7e653779eb2b-b0da6e00.md)
- [Ngrok Reverse Proxy on Network (ASIM DNS Solution)](../content/dns-essentials-ngrok-reverse-proxy-on-network-asim-dns-solution-50b0dfb7-2c94-4eaf-a332-a5936d78c263-4a9c6d43.md)
- [Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Anomaly based (ASIM DNS Solution)](../content/dns-essentials-potential-dga-domain-generation-algorithm-detected-via-repetitive-failures-anomaly-based--01191239-274e-43c9-b154-3a042692af06-1a7b8167.md)
- [Potential DGA(Domain Generation Algorithm) detected via Repetitive Failures - Static threshold based (ASIM DNS Solution)](../content/dns-essentials-potential-dga-domain-generation-algorithm-detected-via-repetitive-failures-static-thresho-89ba52fa-96a7-4653-829a-ca49bb13336c-71c9371c.md)
- [Rare client observed with high reverse DNS lookup count - Anomaly based (ASIM DNS Solution)](../content/dns-essentials-rare-client-observed-with-high-reverse-dns-lookup-count-anomaly-based-asim-dns-solution-0fe6bde4-b215-480c-99b4-84a96edcdbd7-c30ddd41.md)
- [Rare client observed with high reverse DNS lookup count - Static threshold based (ASIM DNS Solution)](../content/dns-essentials-rare-client-observed-with-high-reverse-dns-lookup-count-static-threshold-based-asim-dns-s-77b7c820-5f60-4779-8bdb-f06e21add5f1-4a01cdd0.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-domain-d9e1646c-dc17-4150-ac85-581f5c9cb41f-473cd3b4.md)
- [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-ip-7edb2abb-7ef7-4685-92eb-a628703ccf9f-694732dc.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoise TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-network-session-events-asim-network-session-sc-536e8e5c-ce0e-575e-bcc9-aba8e7bf9316-294d0914.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Possible Phishing with CSL and Network Sessions](../content/microsoft-defender-xdr-possible-phishing-with-csl-and-network-sessions-6c3a1258-bcdd-4fcd-b753-1a9bc826ce12-631549a4.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [Anomaly found in Network Session Traffic (ASIM Network Session schema)](../content/network-session-essentials-anomaly-found-in-network-session-traffic-asim-network-session-schema-cd6def0d-3ef0-4d55-a7e3-faa96c46ba12-0317d139.md)
- [Anomaly in SMB Traffic(ASIM Network Session schema)](../content/network-session-essentials-anomaly-in-smb-traffic-asim-network-session-schema-8717e498-7b5d-4e23-9e7c-fa4913dbfd79-5689a38d.md)
- [Detect port misuse by anomaly based detection (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-anomaly-based-detection-asim-network-session-schema-cbf07406-fa2a-48b0-82b8-efad58db14ec-0bc6af2a.md)
- [Detect port misuse by static threshold (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-static-threshold-asim-network-session-schema-156997bd-da0f-4729-b47a-0a3e02dd50c8-8ef7d8bb.md)
- [Excessive number of failed connections from a single source (ASIM Network Session schema)](../content/network-session-essentials-excessive-number-of-failed-connections-from-a-single-source-asim-network-sess-4902eddb-34f7-44a8-ac94-8486366e9494-210dc868.md)
- [Network Port Sweep from External Network (ASIM Network Session schema)](../content/network-session-essentials-network-port-sweep-from-external-network-asim-network-session-schema-cd8faa84-4464-4b4e-96dc-b22f50c27541-330ca527.md)
- [Port scan detected  (ASIM Network Session schema)](../content/network-session-essentials-port-scan-detected-asim-network-session-schema-1da9853f-3dea-4ea9-b7e5-26730da3d537-7c6a0649.md)
- [Potential beaconing activity (ASIM Network Session schema)](../content/network-session-essentials-potential-beaconing-activity-asim-network-session-schema-fcb9d75c-c3c1-4910-8697-f136bfef2363-a9186e67.md)
- [Remote Desktop Network Brute force (ASIM Network Session schema)](../content/network-session-essentials-remote-desktop-network-brute-force-asim-network-session-schema-b7dc801e-1e79-48bb-91e8-2229a8e6d40b-c413aad1.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Domain All Actors](../content/recorded-future-recordedfuture-threat-hunting-domain-all-actors-acbf7ef6-f964-44c3-9031-7834ec68175f-9002c0d5.md)
- [RecordedFuture Threat Hunting IP All Actors](../content/recorded-future-recordedfuture-threat-hunting-ip-all-actors-e31bc14e-2b4c-42a4-af34-5bfd7d768aea-57f811e9.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map IP Entity to Azure SQL Security Audit Events](../content/threat-intelligence-ti-map-ip-entity-to-azure-sql-security-audit-events-d0aa8969-1bbe-4da3-9e76-09e5f67c9d85-cbef7484.md)
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/threat-intelligence-ti-map-domain-entity-to-dns-events-asim-dns-schema-999e9f5d-db4a-4b07-a206-29c4e667b7e8-820c58df.md)
- [TI map IP entity to Azure Key Vault logs](../content/threat-intelligence-ti-map-ip-entity-to-azure-key-vault-logs-57c7e832-64eb-411f-8928-4133f01f4a25-7c3f7a41.md)
- [TI map IP entity to AzureFirewall](../content/threat-intelligence-ti-map-ip-entity-to-azurefirewall-0b904747-1336-4363-8d84-df2710bfe5e7-30fad35b.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/threat-intelligence-ti-map-ip-entity-to-dns-events-asim-dns-schema-67775878-7f8b-4380-ac54-115e1e828901-a15c3e60.md)
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threat-intelligence-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-e2399891-383c-4caf-ae67-68a008b9f89e-f1153622.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI Map IP Entity to Azure SQL Security Audit Events](../content/threat-intelligence-new-ti-map-ip-entity-to-azure-sql-security-audit-events-239d987e-ee1b-4c49-b146-e88d682930a4-fb7a1cf3.md)
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/threat-intelligence-new-ti-map-domain-entity-to-dns-events-asim-dns-schema-7c1ea2e6-6210-412c-92e4-180803a741b4-d24ac70c.md)
- [TI map IP entity to Azure Key Vault logs](../content/threat-intelligence-new-ti-map-ip-entity-to-azure-key-vault-logs-7c8051a7-3d29-4c0d-a340-893423f7b0a5-565bd210.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/threat-intelligence-new-ti-map-ip-entity-to-dns-events-asim-dns-schema-b306fba8-1a28-449f-aa24-30362e16d4f5-613a3814.md)
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threat-intelligence-new-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-54f4ceb4-fd83-4633-b5b0-c0de9feb8890-4e169efc.md)

**In solution [ThreatConnect](../solutions/threatconnect.md):**
- [ThreatConnect TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threatconnect-threatconnect-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-ee1fd303-2081-47b7-8f02-e38bfd0868e6-1359f109.md)

### Hunting Queries (34)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Azure WAF Log4j CVE-2021-44228 hunting](../content/apache-log4j-vulnerability-detection-azure-waf-log4j-cve-2021-44228-hunting-1d4d383e-0ca6-4d3a-a861-8f37aeef18cb-dcfb1bb2.md)

**In solution [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md):**
- [Affected rows stateful anomaly on database - hunting query](../content/azure-sql-database-solution-for-sentinel-affected-rows-stateful-anomaly-on-database-hunting-query-9670ac84-e035-47f5-8eb5-9d863a8a7893-66ffcc6c.md)
- [Anomalous Query Execution Time](../content/azure-sql-database-solution-for-sentinel-anomalous-query-execution-time-724c7010-0afe-4d46-95ab-32f6737e658b-6f211c62.md)
- [Anomalous Query Execution Time](../content/azure-sql-database-solution-for-sentinel-anomalous-query-execution-time-af55d5b0-6b4a-4874-8299-9d845bf7c1fd-21c7b493.md)
- [Boolean Blind SQL Injection](../content/azure-sql-database-solution-for-sentinel-boolean-blind-sql-injection-4cda0673-37f9-4765-af1f-556de2295cd7-513f1aae.md)
- [Prevalence Based SQL Query Size Anomaly](../content/azure-sql-database-solution-for-sentinel-prevalence-based-sql-query-size-anomaly-2a21303e-be48-404f-a6f6-883a6acfe5ad-c554d854.md)
- [Response rows stateful anomaly on database - hunting query](../content/azure-sql-database-solution-for-sentinel-response-rows-stateful-anomaly-on-database-hunting-query-137tyi7c-7225-434b-8bfc-fea28v95ebd8-78e08eb9.md)
- [Suspicious SQL Stored Procedures](../content/azure-sql-database-solution-for-sentinel-suspicious-sql-stored-procedures-db5b0a77-1b1d-4a31-8ebb-c508ebc3bb38-4ec8f8ae.md)
- [Time Based SQL Query Size Anomaly](../content/azure-sql-database-solution-for-sentinel-time-based-sql-query-size-anomaly-e0944dec-3c92-4b2d-8e81-a950afeaba69-50b245a5.md)

**In solution [Azure kubernetes Service](../solutions/azure-kubernetes-service.md):**
- [Azure RBAC AKS created role details](../content/azure-kubernetes-service-azure-rbac-aks-created-role-details-765dce51-689a-44b5-9b38-c9ae9441c7fc-9390272f.md)
- [Determine users with cluster admin role](../content/azure-kubernetes-service-determine-users-with-cluster-admin-role-c3ac03d5-dbf2-49ab-a2de-83396a20a5fb-006175f6.md)

**In solution [Cloud Service Threat Protection Essentials](../solutions/cloud-service-threat-protection-essentials.md):**
- [Azure Key Vault Access Policy Manipulation](../content/cloud-service-threat-protection-essentials-azure-key-vault-access-policy-manipulation-8eff7055-9138-4edc-b8f0-48ea27e23c3c-8858b5d6.md)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [CVE-2020-1350 (SIGRED) exploitation pattern (ASIM DNS Solution)](../content/dns-essentials-cve-2020-1350-sigred-exploitation-pattern-asim-dns-solution-0a8f5777-f38a-4c37-b531-411bdecef976-beaf980e.md)
- [Connection to Unpopular Website Detected (ASIM DNS Solution)](../content/dns-essentials-connection-to-unpopular-website-detected-asim-dns-solution-83e70a34-d96f-419d-815b-43d1499e88ed-193019cc.md)
- [Increase in DNS Requests by client than the daily average count (ASIM DNS Solution)](../content/dns-essentials-increase-in-dns-requests-by-client-than-the-daily-average-count-asim-dns-solution-b31b5d70-4c75-4a5f-8af7-6a83f6eb372c-150365d8.md)
- [Possible DNS Tunneling or Data Exfiltration Activity (ASIM DNS Solution)](../content/dns-essentials-possible-dns-tunneling-or-data-exfiltration-activity-asim-dns-solution-74e8773c-dfa9-45ca-bb60-5d767303e5b3-4f04fe19.md)
- [Potential beaconing activity (ASIM DNS Solution)](../content/dns-essentials-potential-beaconing-activity-asim-dns-solution-c4956c0b-4527-406c-b135-ef44002e1e70-2cb4ba7f.md)
- [Top 25 DNS queries with most failures in last 24 hours (ASIM DNS Solution)](../content/dns-essentials-top-25-dns-queries-with-most-failures-in-last-24-hours-asim-dns-solution-4717929b-121d-4d90-b7ba-e3259ef16aca-f88092fc.md)
- [Top 25 Domains with large number of Subdomains (ASIM DNS Solution)](../content/dns-essentials-top-25-domains-with-large-number-of-subdomains-asim-dns-solution-5366b848-0886-439f-b312-0b94bb687d06-95f74336.md)
- [Top 25 Sources(Clients) with high number of errors in last 24hours (ASIM DNS Solution)](../content/dns-essentials-top-25-sources-clients-with-high-number-of-errors-in-last-24hours-asim-dns-solution-b35f6633-0d18-494c-a5e4-2828daf442bf-dd4cdd6a.md)
- [Unexpected top level domains (ASIM DNS Solution)](../content/dns-essentials-unexpected-top-level-domains-asim-dns-solution-4c8d6412-5a48-42c3-8b5e-1f29fb15c749-c748185b.md)
- [[Anomaly] Anomalous Increase in DNS activity by clients (ASIM DNS Solution)](../content/dns-essentials-[anomaly]-anomalous-increase-in-dns-activity-by-clients-asim-dns-solution-50f0cdfb-8b01-4eca-823d-2bbe6b8a5b95-eb2b2313.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-domain-34288e97-5194-4f2e-abf2-c2783189f6ae-2dfdacdc.md)
- [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-ip-faa83502-2763-49ae-9216-e576fa1fdccb-c11a3364.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [Detect Outbound LDAP Traffic(ASIM Network Session schema)](../content/network-session-essentials-detect-outbound-ldap-traffic-asim-network-session-schema-5dca6047-24ed-4eb7-b44e-ec7f1bf42621-c96df1ab.md)
- [Detect port misuse by anomaly (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-anomaly-asim-network-session-schema-906c20c6-b62c-4af7-be91-d7300e3bded2-d8a6fcbc.md)
- [Detect port misuse by static threshold (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-static-threshold-asim-network-session-schema-70e2a349-87f0-4266-809c-e92fc71e0830-c23666f7.md)
- [Detects several users with the same MAC address (ASIM Network Session schema)](../content/network-session-essentials-detects-several-users-with-the-same-mac-address-asim-network-session-schema-cbe10c58-e96b-4827-853e-5c1f22fdcc74-aa0b75c3.md)
- [Mismatch between Destination App name and Destination Port (ASIM Network Session schema)](../content/network-session-essentials-mismatch-between-destination-app-name-and-destination-port-asim-network-sessi-a61e9fc1-dd9e-4588-a497-2a34a1d811bf-f510f729.md)
- [Protocols passing authentication in cleartext (ASIM Network Session schema)](../content/network-session-essentials-protocols-passing-authentication-in-cleartext-asim-network-session-schema-96f9fdd1-bb5b-4d32-8790-666457dc00c0-81fda166.md)
- [Remote Desktop Network Traffic(ASIM Network Session schema)](../content/network-session-essentials-remote-desktop-network-traffic-asim-network-session-schema-6fd69768-fdf1-4cfd-805f-b243be3f0c6d-7fef6a2e.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Domain All Actors](../content/recorded-future-recordedfuture-threat-hunting-domain-all-actors-d641a534-ead8-41aa-a7c8-2b35e6b64c9f-095de712.md)
- [RecordedFuture Threat Hunting IP All Actors](../content/recorded-future-recordedfuture-threat-hunting-ip-all-actors-7b5eb44d-3533-440e-9774-73a4d99bc2b2-0bac2271.md)

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**
- [Possible Webshell usage attempt related to SpringShell(CVE-2022-22965)](../content/web-shells-threat-protection-possible-webshell-usage-attempt-related-to-springshell-cve-2022-22965-6911d1df-4204-43b2-a64c-3cb102551ddd-8605b97e.md)

### Workbooks (20)

**In solution [Azure DDoS Protection](../solutions/azure-ddos-protection.md):**
- [AzDDoSStandardWorkbook](../content/azure-ddos-protection-azddosstandardworkbook-5256dfab.md)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**
- [AzureFirewallWorkbook](../content/azure-firewall-azurefirewallworkbook-b4bb528f.md)

**In solution [Azure Key Vault](../solutions/azure-key-vault.md):**
- [AzureKeyVaultWorkbook](../content/azure-key-vault-azurekeyvaultworkbook-72b1692d.md)

**In solution [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md):**
- [Workbook-AzureSQLSecurity](../content/azure-sql-database-solution-for-sentinel-workbook-azuresqlsecurity-2448278c.md)

**In solution [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md):**
- [WebApplicationFirewallFirewallEvents](../content/azure-web-application-firewall-waf-webapplicationfirewallfirewallevents-fffe3907.md)
- [WebApplicationFirewallGatewayAccessEvents](../content/azure-web-application-firewall-waf-webapplicationfirewallgatewayaccessevents-3b2791d0.md)
- [WebApplicationFirewallOverview](../content/azure-web-application-firewall-waf-webapplicationfirewalloverview-724b5122.md)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**
- [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [DNSSolutionWorkbook](../content/dns-essentials-dnssolutionworkbook-9b8ac8e7.md)

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**
- [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md)

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**
- [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [NetworkSessionEssentials](../content/network-session-essentials-networksessionessentials-5de17c97.md)
- [NetworkSessionEssentialsV2](../content/network-session-essentials-networksessionessentialsv2-9408ac84.md)

**In solution [SentinelSOARessentials](../solutions/sentinelsoaressentials.md):**
- [AutomationHealth](../content/sentinelsoaressentials-automationhealth-09dce6f5.md)

**In solution [ThreatAnalysis&Response](../solutions/threatanalysis&response.md):**
- [DynamicThreatModeling&Response](../content/threatanalysis&response-dynamicthreatmodeling&response-54123c47.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**
- [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
