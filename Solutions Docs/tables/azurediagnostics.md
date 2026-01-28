# AzureDiagnostics

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AzureDiagnostics table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Various |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azurediagnostics) |

## Solutions (36)

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
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [PCI DSS Compliance](../solutions/pci-dss-compliance.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SentinelSOARessentials](../solutions/sentinelsoaressentials.md)
- [SlashNext](../solutions/slashnext.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [ThreatAnalysis&Response](../solutions/threatanalysis&response.md)
- [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (15)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Azure Batch Account](../connectors/azurebatchaccount-ccp.md) |  |
| [Azure Cognitive Search](../connectors/azurecognitivesearch-ccp.md) |  |
| [Azure Data Lake Storage Gen1](../connectors/azuredatalakestoragegen1-ccp.md) |  |
| [Azure Event Hub](../connectors/azureeventhub-ccp.md) |  |
| [Azure Firewall](../connectors/azurefirewall.md) | `ResourceType == "AZUREFIREWALLS"` |
| [Azure Key Vault](../connectors/azurekeyvault.md) |  |
| [Azure Kubernetes Service (AKS)](../connectors/azurekubernetes.md) | `Category in "cluster-autoscaler,guard,kube-apiserver,kube-audit,kube-audit-admin,kube-controller-manager,kube-scheduler"` |
| [Azure Logic Apps](../connectors/azurelogicapps-ccp.md) |  |
| [Network Security Groups](../connectors/azurensg.md) | `Category in "NetworkSecurityGroupEvent,NetworkSecurityGroupRuleCounter"` |
| [Azure Service Bus](../connectors/azureservicebus-ccp.md) |  |
| [Azure SQL Databases](../connectors/azuresql.md) | `Category in "AutomaticTuning,Basic,Blocks,DatabaseWaitStatistics,Deadlocks,DevOpsOperationsAudit,Errors,InstanceAndAppAdvanced,QueryStoreWaitStatistics,SQLInsights,SQLSecurityAuditEvents,Timeouts,WorkloadManagement"`<br>`Category contains "SQLSecurityAuditEvents"`<br>`ResourceType == "SERVERS/DATABASES"` |
| [Azure Stream Analytics](../connectors/azurestreamanalytics-ccp.md) |  |
| [Azure DDoS Protection](../connectors/ddos.md) | `Category == "DDoSMitigationReports"`<br>`ResourceType == "PUBLICIPADDRESSES"` |
| [SlashNext Function App](../connectors/slashnextfunctionapp.md) |  |
| [Azure Web Application Firewall (WAF)](../connectors/waf.md) | `ResourceType in "APPLICATIONGATEWAYS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS"` |

---

## Content Items Using This Table (107)

### Analytic Rules (42)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Azure WAF matching for Log4j vuln(CVE-2021-44228)](../content/apache-log4j-vulnerability-detection-azure-waf-matching-for-log4j-vuln-cve-2021-44228-2de8abd6-a613-450e-95ed-08e503369fb3-2f37c37a.md) | `Category in "ApplicationGatewayFirewallLog,FrontdoorWebApplicationFirewallLog"` |
| [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md) | `Category in "AzureFirewallApplicationRule,AzureFirewallNetworkRule"`<br>`ResourceType == "AZUREFIREWALLS"` |
| [User agent search for log4j exploitation attempt](../content/apache-log4j-vulnerability-detection-user-agent-search-for-log4j-exploitation-attempt-29283b22-a1c0-4d16-b0a9-3460b655a46a-d67cde36.md) |  |

**In solution [Azure DDoS Protection](../solutions/azure-ddos-protection.md):** `Category == "DDoSMitigationFlowLogs"`<br>`ResourceType == "PUBLICIPADDRESSES"`

| Content Item |
|:-------------|
| [DDoS Attack IP Addresses - PPS Threshold](../content/azure-ddos-protection-ddos-attack-ip-addresses-pps-threshold-6e76fd9d-8104-41eb-bad3-26054a3ad5f0-19898f82.md) |
| [DDoS Attack IP Addresses - Percent Threshold](../content/azure-ddos-protection-ddos-attack-ip-addresses-percent-threshold-402a42ad-f31c-48d1-8f80-0200846b7f25-45798bda.md) |

**In solution [Azure Firewall](../solutions/azure-firewall.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Abnormal Deny Rate for Source IP](../content/azure-firewall-abnormal-deny-rate-for-source-ip-d36bb1e3-5abc-4037-ad9a-24ba3469819e-bcaa208f.md) |  |
| [Abnormal Port to Protocol](../content/azure-firewall-abnormal-port-to-protocol-826f930c-2f25-4508-8e75-a95b809a4e15-f673b591.md) |  |
| [Multiple Sources Affected by the Same TI Destination](../content/azure-firewall-multiple-sources-affected-by-the-same-ti-destination-4644baf7-3464-45dd-bd9d-e07687e25f81-c5003c22.md) |  |
| [Port Scan](../content/azure-firewall-port-scan-b2c5907b-1040-4692-9802-9946031017e8-a6887f4e.md) |  |
| [Port Sweep](../content/azure-firewall-port-sweep-720335f4-ee8c-4270-9424-d0859222168c-d77c9cf0.md) |  |
| [Several deny actions registered](../content/azure-firewall-several-deny-actions-registered-f8dad4e9-3f19-4d70-ab7f-8f19ccd43a3e-e192f460.md) |  |

**In solution [Azure Key Vault](../solutions/azure-key-vault.md):** `ResourceType == "VAULTS"`

| Content Item |
|:-------------|
| [Azure Key Vault access TimeSeries anomaly](../content/azure-key-vault-azure-key-vault-access-timeseries-anomaly-0914adab-90b5-47a3-a79f-7cdcac843aa7-3cd8ede1.md) |
| [Mass secret retrieval from Azure Key Vault](../content/azure-key-vault-mass-secret-retrieval-from-azure-key-vault-24f8c234-d1ff-40ec-8b73-96b17a3a9c1c-f69dcdc4.md) |
| [NRT Sensitive Azure Key Vault operations](../content/azure-key-vault-nrt-sensitive-azure-key-vault-operations-884ead54-cb3f-4676-a1eb-b26532d6cbfd-6787446f.md) |
| [Sensitive Azure Key Vault operations](../content/azure-key-vault-sensitive-azure-key-vault-operations-d6491be0-ab2d-439d-95d6-ad8ea39277c5-6dc5e1cc.md) |

**In solution [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md):** `Category == "SQLSecurityAuditEvents"`

| Content Item |
|:-------------|
| [Affected rows stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-affected-rows-stateful-anomaly-on-database-2a632013-379d-4993-956f-615063d31e10-11212897.md) |
| [Credential errors stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-credential-errors-stateful-anomaly-on-database-daa32afa-b5b6-427d-93e9-e32f3f359dd7-ce884545.md) |
| [Drop attempts stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-drop-attempts-stateful-anomaly-on-database-237c3855-138c-4588-a68f-b870abd3bfc9-7ce4340f.md) |
| [Execution attempts stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-execution-attempts-stateful-anomaly-on-database-3367fd5e-44b3-4746-a9a5-dc15c8202490-1b031009.md) |
| [Firewall errors stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-firewall-errors-stateful-anomaly-on-database-20f87813-3de0-4a9f-a8c0-6aaa3187be08-b973d4ce.md) |
| [Firewall rule manipulation attempts stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-firewall-rule-manipulation-attempts-stateful-anomaly-on-databas-05030ca6-ef66-42ca-b672-2e84d4aaf5d7-c6bd8fb4.md) |
| [OLE object manipulation attempts stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-ole-object-manipulation-attempts-stateful-anomaly-on-database-dabd7284-004b-4237-b5ee-a22acab19eb2-08386257.md) |
| [Outgoing connection attempts stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-outgoing-connection-attempts-stateful-anomaly-on-database-c105513d-e398-4a02-bd91-54b9b2d6fa7d-be32ef2f.md) |
| [Response rows stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-response-rows-stateful-anomaly-on-database-9851c360-5fd5-4bae-a117-b66d8476bf5e-50984d5e.md) |
| [Syntax errors stateful anomaly on database](../content/azure-sql-database-solution-for-sentinel-syntax-errors-stateful-anomaly-on-database-c815008d-f4d1-4645-b13b-8b4bc188d5de-75deac2f.md) |

**In solution [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md):** `Category == "FrontDoorWebApplicationFirewallLog"`

| Content Item |
|:-------------|
| [AFD WAF - Code Injection](../content/azure-web-application-firewall-waf-afd-waf-code-injection-ded8168e-c806-4772-af30-10576e0a7529-19ad7bff.md) |
| [AFD WAF - Path Traversal Attack](../content/azure-web-application-firewall-waf-afd-waf-path-traversal-attack-a4d99328-e4e6-493d-b0d5-57e6f9ddae77-2344821e.md) |
| [Front Door Premium WAF - SQLi Detection](../content/azure-web-application-firewall-waf-front-door-premium-waf-sqli-detection-16da3a2a-af29-48a0-8606-d467c180fe18-3acd0e4e.md) |
| [Front Door Premium WAF - XSS Detection](../content/azure-web-application-firewall-waf-front-door-premium-waf-xss-detection-b7643904-5081-4920-917e-a559ddc3448f-f46a8943.md) |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to Azure SQL Security Audit Events](../content/threat-intelligence-ti-map-ip-entity-to-azure-sql-security-audit-events-d0aa8969-1bbe-4da3-9e76-09e5f67c9d85-cbef7484.md) | `Category == "SQLSecurityAuditEvents"` |
| [TI map IP entity to Azure Key Vault logs](../content/threat-intelligence-ti-map-ip-entity-to-azure-key-vault-logs-57c7e832-64eb-411f-8928-4133f01f4a25-7c3f7a41.md) | `ResourceType == "VAULTS"` |
| [TI map IP entity to AzureFirewall](../content/threat-intelligence-ti-map-ip-entity-to-azurefirewall-0b904747-1336-4363-8d84-df2710bfe5e7-30fad35b.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to Azure SQL Security Audit Events](../content/threat-intelligence-new-ti-map-ip-entity-to-azure-sql-security-audit-events-239d987e-ee1b-4c49-b146-e88d682930a4-fb7a1cf3.md) | `Category == "SQLSecurityAuditEvents"` |
| [TI map IP entity to Azure Key Vault logs](../content/threat-intelligence-new-ti-map-ip-entity-to-azure-key-vault-logs-7c8051a7-3d29-4c0d-a340-893423f7b0a5-565bd210.md) | `ResourceType == "VAULTS"` |
| [TI map IP entity to AzureFirewall](../content/threat-intelligence-new-ti-map-ip-entity-to-azurefirewall-4992d2f3-d6c0-4271-adac-b23532ba4492-965a60e9.md) |  |

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Application Gateway WAF - SQLi Detection](../content/standalone-content-application-gateway-waf-sqli-detection-68c0b6bb-6bd9-4ef4-9011-08998c8ef90f-165d539a.md) | `Category == "ApplicationGatewayFirewallLog"` |
| [Application Gateway WAF - XSS Detection](../content/standalone-content-application-gateway-waf-xss-detection-d2bc08fa-030a-4eea-931a-762d27c6a042-fddb41a1.md) | `Category == "ApplicationGatewayFirewallLog"` |
| [Known Forest Blizzard group domains - July 2019](../content/standalone-content-known-forest-blizzard-group-domains-july-2019-074ce265-f684-41cd-af07-613c5f3e6d0d-a6ae8c57.md) |  |
| [Malformed user agent](../content/standalone-content-malformed-user-agent-a357535e-f722-4afe-b375-cff362b2b376-cf52b023.md) |  |
| [Mercury - Domain, Hash and IP IOCs - August 2022](../content/standalone-content-mercury-domain,-hash-and-ip-iocs-august-2022-ae10c588-7ff7-486c-9920-ab8b0bdb6ede-8b4a9fab.md) |  |
| [Star Blizzard C2 Domains August 2022](../content/standalone-content-star-blizzard-c2-domains-august-2022-2149d9bb-8298-444c-8f99-f7bf0274dd05-bf017854.md) |  |

### Hunting Queries (21)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):** `Category in "ApplicationGatewayAccessLog,ApplicationGatewayFirewallLog,FrontdoorAccessLog,FrontdoorWebApplicationFirewallLog"`

| Content Item |
|:-------------|
| [Azure WAF Log4j CVE-2021-44228 hunting](../content/apache-log4j-vulnerability-detection-azure-waf-log4j-cve-2021-44228-hunting-1d4d383e-0ca6-4d3a-a861-8f37aeef18cb-dcfb1bb2.md) |

**In solution [Azure Firewall](../solutions/azure-firewall.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [First Time Source IP to Destination](../content/azure-firewall-first-time-source-ip-to-destination-f055e82b-5ef6-4395-bc9e-99f7e451343a-b6cf8086.md) |  |
| [First Time Source IP to Destination Using Port](../content/azure-firewall-first-time-source-ip-to-destination-using-port-932fe71a-7a8c-4f35-bf88-321ab68ff562-850b4356.md) |  |
| [Source IP Abnormally Connects to Multiple Destinations](../content/azure-firewall-source-ip-abnormally-connects-to-multiple-destinations-d006f4f8-86bb-4c9d-9826-837762ddad6b-ec41bab6.md) |  |
| [Uncommon Port for Organization](../content/azure-firewall-uncommon-port-for-organization-8812a547-13e6-4d0c-b38d-476fb7351c52-f68ddc3e.md) |  |
| [Uncommon Port to IP](../content/azure-firewall-uncommon-port-to-ip-3d93fa57-53e5-4d5e-96d4-ad734a8df3a4-582e485f.md) |  |

**In solution [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Affected rows stateful anomaly on database - hunting query](../content/azure-sql-database-solution-for-sentinel-affected-rows-stateful-anomaly-on-database-hunting-query-9670ac84-e035-47f5-8eb5-9d863a8a7893-66ffcc6c.md) | `Category == "SQLSecurityAuditEvents"` |
| [Anomalous Query Execution Time](../content/azure-sql-database-solution-for-sentinel-anomalous-query-execution-time-724c7010-0afe-4d46-95ab-32f6737e658b-6f211c62.md) | `Category == "SQLSecurityAuditEvents"` |
| [Anomalous Query Execution Time](../content/azure-sql-database-solution-for-sentinel-anomalous-query-execution-time-af55d5b0-6b4a-4874-8299-9d845bf7c1fd-21c7b493.md) | `Category == "SQLSecurityAuditEvents"` |
| [Boolean Blind SQL Injection](../content/azure-sql-database-solution-for-sentinel-boolean-blind-sql-injection-4cda0673-37f9-4765-af1f-556de2295cd7-513f1aae.md) | `Category == "SQLSecurityAuditEvents"` |
| [Prevalence Based SQL Query Size Anomaly](../content/azure-sql-database-solution-for-sentinel-prevalence-based-sql-query-size-anomaly-2a21303e-be48-404f-a6f6-883a6acfe5ad-c554d854.md) | `Category == "SQLSecurityAuditEvents"` |
| [Response rows stateful anomaly on database - hunting query](../content/azure-sql-database-solution-for-sentinel-response-rows-stateful-anomaly-on-database-hunting-query-137tyi7c-7225-434b-8bfc-fea28v95ebd8-78e08eb9.md) | `Category == "SQLSecurityAuditEvents"` |
| [Suspicious SQL Stored Procedures](../content/azure-sql-database-solution-for-sentinel-suspicious-sql-stored-procedures-db5b0a77-1b1d-4a31-8ebb-c508ebc3bb38-4ec8f8ae.md) | `Category == "SQLSecurityAuditEvents"` |
| [Time Based SQL Query Size Anomaly](../content/azure-sql-database-solution-for-sentinel-time-based-sql-query-size-anomaly-e0944dec-3c92-4b2d-8e81-a950afeaba69-50b245a5.md) | `Category == "SQLSecurityAuditEvents"` |

**In solution [Azure kubernetes Service](../solutions/azure-kubernetes-service.md):** `Category == "kube-audit"`

| Content Item |
|:-------------|
| [Azure RBAC AKS created role details](../content/azure-kubernetes-service-azure-rbac-aks-created-role-details-765dce51-689a-44b5-9b38-c9ae9441c7fc-9390272f.md) |
| [Determine users with cluster admin role](../content/azure-kubernetes-service-determine-users-with-cluster-admin-role-c3ac03d5-dbf2-49ab-a2de-83396a20a5fb-006175f6.md) |

**In solution [Cloud Service Threat Protection Essentials](../solutions/cloud-service-threat-protection-essentials.md):** `ResourceType == "VAULTS"`

| Content Item |
|:-------------|
| [Azure Key Vault Access Policy Manipulation](../content/cloud-service-threat-protection-essentials-azure-key-vault-access-policy-manipulation-8eff7055-9138-4edc-b8f0-48ea27e23c3c-8858b5d6.md) |

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):** `Category == "AzureFirewallNetworkRule"`

| Content Item |
|:-------------|
| [Connection from external IP to OMI related Ports](../content/legacy-ioc-based-threat-protection-connection-from-external-ip-to-omi-related-ports-767b8f6d-8029-4c92-afe1-282167d9d49a-0ad0779a.md) |

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):** `Category in "ApplicationGatewayAccessLog,ApplicationGatewayFirewallLog,FrontdoorAccessLog,FrontdoorWebApplicationFirewallLog"`

| Content Item |
|:-------------|
| [Possible Webshell usage attempt related to SpringShell(CVE-2022-22965)](../content/web-shells-threat-protection-possible-webshell-usage-attempt-related-to-springshell-cve-2022-22965-6911d1df-4204-43b2-a64c-3cb102551ddd-8605b97e.md) |

**Standalone Content:** `Category == "NetworkSecurityGroupEvent"`

| Content Item |
|:-------------|
| [Check critical ports opened to the entire internet](../content/standalone-content-check-critical-ports-opened-to-the-entire-internet-66d494c0-233c-438a-9b1b-5fe839790d38-7cf5a163.md) |

**GitHub Only:** `Category in "ApplicationGatewayAccessLog,ApplicationGatewayFirewallLog,FrontdoorAccessLog,FrontdoorWebApplicationFirewallLog"`

| Content Item |
|:-------------|
| [Possible SpringShell Exploitation Attempt (CVE-2022-22965)](../content/github-only-possible-springshell-exploitation-attempt-cve-2022-22965-1bb4a007-7d1d-4506-ada9-222604f54ec6-5008368c.md) |

### Workbooks (44)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):** `Category in "ApplicationGatewayAccessLog,ApplicationGatewayFirewallLog,FrontdoorAccessLog,FrontdoorWebApplicationFirewallLog"`

| Content Item |
|:-------------|
| [Log4jPostCompromiseHunting](../content/apache-log4j-vulnerability-detection-log4jpostcompromisehunting-8811d292.md) |

**In solution [Azure DDoS Protection](../solutions/azure-ddos-protection.md):** `Category in "DDoSMitigationFlowLogs,DDoSMitigationReports,DDoSProtectionNotifications"`

| Content Item |
|:-------------|
| [AzDDoSStandardWorkbook](../content/azure-ddos-protection-azddosstandardworkbook-5256dfab.md) |

**In solution [Azure Firewall](../solutions/azure-firewall.md):** `Category in "AzureFirewallApplicationRule,AzureFirewallDnsProxy,AzureFirewallNetworkRule"`<br>`ResourceType == "AZUREFIREWALLS"`

| Content Item |
|:-------------|
| [AzureFirewallWorkbook](../content/azure-firewall-azurefirewallworkbook-b4bb528f.md) |

**In solution [Azure Key Vault](../solutions/azure-key-vault.md):** `Category == "AuditEvent"`<br>`ResourceType == "VAULTS"`

| Content Item |
|:-------------|
| [AzureKeyVaultWorkbook](../content/azure-key-vault-azurekeyvaultworkbook-72b1692d.md) |

**In solution [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md):** `Category == "SQLSecurityAuditEvents"`<br>`ResourceType == "SERVERS/DATABASES"`

| Content Item |
|:-------------|
| [Workbook-AzureSQLSecurity](../content/azure-sql-database-solution-for-sentinel-workbook-azuresqlsecurity-2448278c.md) |

**In solution [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [WebApplicationFirewallFirewallEvents](../content/azure-web-application-firewall-waf-webapplicationfirewallfirewallevents-fffe3907.md) | `ResourceType == "APPLICATIONGATEWAYS"` |
| [WebApplicationFirewallGatewayAccessEvents](../content/azure-web-application-firewall-waf-webapplicationfirewallgatewayaccessevents-3b2791d0.md) | `ResourceType == "APPLICATIONGATEWAYS"` |
| [WebApplicationFirewallOverview](../content/azure-web-application-firewall-waf-webapplicationfirewalloverview-724b5122.md) | `ResourceType == "APPLICATIONGATEWAYS"` |
| [WebApplicationFirewallWAFTypeEvents](../content/azure-web-application-firewall-waf-webapplicationfirewallwaftypeevents-bc7c447b.md) |  |

**In solution [Azure kubernetes Service](../solutions/azure-kubernetes-service.md):** `Category == "kube-audit"`

| Content Item |
|:-------------|
| [AksSecurity](../content/azure-kubernetes-service-akssecurity-51e44b54.md) |

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):** `Category in "All,AzureFirewallNetworkRule,NetworkSecurityGroupRuleCounter"`<br>`ResourceType == "AZUREFIREWALLS"`

| Content Item |
|:-------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):** `Category in "NetworkSecurityGroupEvent,kube-audit"`<br>`Category contains "SQL"`<br>`ResourceType in "APPLICATIONGATEWAYS,AZUREFIREWALLS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS,PROFILES,PUBLICIPADDRESSES"`

| Content Item |
|:-------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):** `Category == "AzureFirewallApplicationRule"`

| Content Item |
|:-------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):** `Category == "SQLSecurityAuditEvents"`<br>`ResourceType == "SERVERS/DATABASES"`

| Content Item |
|:-------------|
| [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md) |

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):** `Category == "AzureFirewallNetworkRule"`<br>`Category == "SQLSecurityAuditEvents"`

| Content Item |
|:-------------|
| [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md) |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):** `Category in "AzureFirewallApplicationRule,AzureFirewallNetworkRule,EntitlementManagement,FrontdoorWebApplicationFirewallLog,GatewayDiagnosticLog,GroupManagement,IKEDiagnosticLog,NetworkSecurityGroupEvent,RouteDiagnosticLog,TunnelDiagnosticLog,UserManagement,WebApplicationFirewallLogs,kube-audit"`<br>`Category contains "SQL"`<br>`ResourceType in "APPLICATIONGATEWAYS,AZUREFIREWALLS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS,PROFILES,PUBLICIPADDRESSES,SERVERS/DATABASES"`

| Content Item |
|:-------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |

**In solution [NISTSP80053](../solutions/nistsp80053.md):** `Category in "NetworkSecurityGroupEvent,kube-audit"`<br>`Category contains "SQL"`<br>`ResourceType in "APPLICATIONGATEWAYS,AZUREFIREWALLS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS,PROFILES,PUBLICIPADDRESSES"`

| Content Item |
|:-------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |

**In solution [PCI DSS Compliance](../solutions/pci-dss-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [PCIDSSCompliance](../content/pci-dss-compliance-pcidsscompliance-b201eb3d.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md) |  |

**In solution [SentinelSOARessentials](../solutions/sentinelsoaressentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AutomationHealth](../content/sentinelsoaressentials-automationhealth-09dce6f5.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

**In solution [ThreatAnalysis&Response](../solutions/threatanalysis&response.md):** `ResourceType == "PUBLICIPADDRESSES"`

| Content Item |
|:-------------|
| [DynamicThreatModeling&Response](../content/threatanalysis&response-dynamicthreatmodeling&response-54123c47.md) |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):** `Category in "ApplicationGatewayFirewallLog,AzureFirewallApplicationRule,AzureFirewallDnsProxy,AzureFirewallNetworkRule,DDoSMitigationReports,FrontdoorWebApplicationFirewallLog,NetworkSecurityGroupEvent,WebApplicationFirewallLogs,kube-audit"`<br>`Category contains "SQL"`<br>`ResourceType in "APPLICATIONGATEWAYS,AZUREFIREWALLS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS,PROFILES,PUBLICIPADDRESSES"`

| Content Item |
|:-------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AksSecurity](../content/github-only-akssecurity-918bcecd.md) | `Category == "kube-audit"` |
| [AutomationHealth](../content/github-only-automationhealth-5e9d0998.md) |  |
| [AzDDoSStandardWorkbook](../content/github-only-azddosstandardworkbook-d0f23e11.md) | `Category in "DDoSMitigationFlowLogs,DDoSMitigationReports,DDoSProtectionNotifications"` |
| [AzureFirewall](../content/github-only-azurefirewall-cc14a54b.md) | `Category in "AzureFirewallApplicationRule,AzureFirewallNetworkRule"`<br>`ResourceType == "AZUREFIREWALLS"` |
| [AzureFirewallWorkbook](../content/github-only-azurefirewallworkbook-50a98c04.md) | `Category in "AzureFirewallApplicationRule,AzureFirewallDnsProxy,AzureFirewallNetworkRule"`<br>`ResourceType == "AZUREFIREWALLS"` |
| [AzureKeyVaultWorkbook](../content/github-only-azurekeyvaultworkbook-81485e59.md) | `Category == "AuditEvent"`<br>`ResourceType == "VAULTS"` |
| [AzureLogCoverage](../content/github-only-azurelogcoverage-05245bb5.md) |  |
| [AzureOpenAIMonitoring](../content/github-only-azureopenaimonitoring-99c696c7.md) | `Category == "RequestResponse"` |
| [AzureSentinelCost](../content/github-only-azuresentinelcost-2ae05990.md) |  |
| [DataCollectionHealthMonitoring](../content/github-only-datacollectionhealthmonitoring-360bf8be.md) |  |
| [DoDZeroTrustWorkbook](../content/github-only-dodzerotrustworkbook-844294c8.md) | `Category in "Device,NetworkSecurityGroupEvent,kube-audit"`<br>`Category contains "Device"`<br>`Category contains "SQL"`<br>`ResourceType in "APPLICATIONGATEWAYS,AZUREFIREWALLS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS,PROFILES,PUBLICIPADDRESSES"` |
| [Log4jPostCompromiseHunting](../content/github-only-log4jpostcompromisehunting-7193cd47.md) | `Category in "ApplicationGatewayAccessLog,ApplicationGatewayFirewallLog,FrontdoorAccessLog,FrontdoorWebApplicationFirewallLog"` |
| [MicrosoftSentinelCostEUR](../content/github-only-microsoftsentinelcosteur-f339a745.md) |  |
| [MicrosoftSentinelCostGBP](../content/github-only-microsoftsentinelcostgbp-451ae793.md) |  |
| [PlaybookHealth](../content/github-only-playbookhealth-6ce06262.md) |  |
| [UserMap](../content/github-only-usermap-db59dcfa.md) | `Category in "ApplicationGatewayFirewallLog,FrontdoorWebApplicationFirewallLog"`<br>`ResourceType == "FRONTDOORS"` |
| [WebApplicationFirewallFirewallEvents](../content/github-only-webapplicationfirewallfirewallevents-0d536af9.md) | `ResourceType == "APPLICATIONGATEWAYS"` |
| [WebApplicationFirewallGatewayAccessEvents](../content/github-only-webapplicationfirewallgatewayaccessevents-1f17b42e.md) | `ResourceType == "APPLICATIONGATEWAYS"` |
| [WebApplicationFirewallOverview](../content/github-only-webapplicationfirewalloverview-d139fc4e.md) | `ResourceType == "APPLICATIONGATEWAYS"` |
| [WebApplicationFirewallWAFTypeEvents](../content/github-only-webapplicationfirewallwaftypeevents-96b07e7c.md) |  |
| [ZeroTrustStrategyWorkbook](../content/github-only-zerotruststrategyworkbook-cd80dc2b.md) | `Category in "Device,NetworkSecurityGroupEvent,kube-audit"`<br>`Category contains "Device"`<br>`Category contains "SQL"`<br>`ResourceType in "APPLICATIONGATEWAYS,AZUREFIREWALLS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS,PROFILES,PUBLICIPADDRESSES"` |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AzureFirewallApplicationRule](../parsers/azurefirewallapplicationrule.md) | *(Legacy)* |  |
| [AzureFirewallNetworkRule](../parsers/azurefirewallnetworkrule.md) | *(Legacy)* | `Category == "AzureFirewallNetworkRule"` |

## Selection Criteria Summary (29 criteria, 69 total references)

References by type: 6 connectors, 62 content items, 0 ASIM parsers, 1 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Category == "SQLSecurityAuditEvents"` | - | 20 | - | - | **20** |
| `ResourceType == "VAULTS"` | - | 7 | - | - | **7** |
| `Category == "FrontDoorWebApplicationFirewallLog"` | - | 4 | - | - | **4** |
| `Category in "ApplicationGatewayAccessLog,ApplicationGatewayFirewallLog,FrontdoorAccessLog,FrontdoorWebApplicationFirewallLog"` | - | 4 | - | - | **4** |
| `Category == "kube-audit"` | - | 3 | - | - | **3** |
| `ResourceType == "APPLICATIONGATEWAYS"` | - | 3 | - | - | **3** |
| `Category == "DDoSMitigationFlowLogs"`<br>`ResourceType == "PUBLICIPADDRESSES"` | - | 2 | - | - | **2** |
| `Category == "ApplicationGatewayFirewallLog"` | - | 2 | - | - | **2** |
| `Category == "AzureFirewallNetworkRule"` | - | 1 | - | 1 | **2** |
| `Category == "SQLSecurityAuditEvents"`<br>`ResourceType == "SERVERS/DATABASES"` | - | 2 | - | - | **2** |
| `Category in "NetworkSecurityGroupEvent,kube-audit"`<br>`Category contains "SQL"`<br>`ResourceType in "APPLICATIONGATEWAYS,AZUREFIREWALLS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS,PROFILES,PUBLICIPADDRESSES"` | - | 2 | - | - | **2** |
| `Category in "AutomaticTuning,Basic,Blocks,DatabaseWaitStatistics,Deadlocks,DevOpsOperationsAudit,Errors,InstanceAndAppAdvanced,QueryStoreWaitStatistics,SQLInsights,SQLSecurityAuditEvents,Timeouts,WorkloadManagement"`<br>`Category contains "SQLSecurityAuditEvents"`<br>`ResourceType == "SERVERS/DATABASES"` | 1 | - | - | - | **1** |
| `Category in "NetworkSecurityGroupEvent,NetworkSecurityGroupRuleCounter"` | 1 | - | - | - | **1** |
| `Category == "DDoSMitigationReports"`<br>`ResourceType == "PUBLICIPADDRESSES"` | 1 | - | - | - | **1** |
| `Category in "cluster-autoscaler,guard,kube-apiserver,kube-audit,kube-audit-admin,kube-controller-manager,kube-scheduler"` | 1 | - | - | - | **1** |
| `ResourceType in "APPLICATIONGATEWAYS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS"` | 1 | - | - | - | **1** |
| `ResourceType == "AZUREFIREWALLS"` | 1 | - | - | - | **1** |
| `Category in "ApplicationGatewayFirewallLog,FrontdoorWebApplicationFirewallLog"` | - | 1 | - | - | **1** |
| `Category in "AzureFirewallApplicationRule,AzureFirewallNetworkRule"`<br>`ResourceType == "AZUREFIREWALLS"` | - | 1 | - | - | **1** |
| `Category == "NetworkSecurityGroupEvent"` | - | 1 | - | - | **1** |
| `Category in "DDoSMitigationFlowLogs,DDoSMitigationReports,DDoSProtectionNotifications"` | - | 1 | - | - | **1** |
| `Category in "AzureFirewallApplicationRule,AzureFirewallDnsProxy,AzureFirewallNetworkRule"`<br>`ResourceType == "AZUREFIREWALLS"` | - | 1 | - | - | **1** |
| `Category == "AuditEvent"`<br>`ResourceType == "VAULTS"` | - | 1 | - | - | **1** |
| `Category in "All,AzureFirewallNetworkRule,NetworkSecurityGroupRuleCounter"`<br>`ResourceType == "AZUREFIREWALLS"` | - | 1 | - | - | **1** |
| `Category == "AzureFirewallApplicationRule"` | - | 1 | - | - | **1** |
| `Category == "AzureFirewallNetworkRule"`<br>`Category == "SQLSecurityAuditEvents"` | - | 1 | - | - | **1** |
| `Category in "AzureFirewallApplicationRule,AzureFirewallNetworkRule,EntitlementManagement,FrontdoorWebApplicationFirewallLog,GatewayDiagnosticLog,GroupManagement,IKEDiagnosticLog,NetworkSecurityGroupEvent,RouteDiagnosticLog,TunnelDiagnosticLog,UserManagement,WebApplicationFirewallLogs,kube-audit"`<br>`Category contains "SQL"`<br>`ResourceType in "APPLICATIONGATEWAYS,AZUREFIREWALLS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS,PROFILES,PUBLICIPADDRESSES,SERVERS/DATABASES"` | - | 1 | - | - | **1** |
| `ResourceType == "PUBLICIPADDRESSES"` | - | 1 | - | - | **1** |
| `Category in "ApplicationGatewayFirewallLog,AzureFirewallApplicationRule,AzureFirewallDnsProxy,AzureFirewallNetworkRule,DDoSMitigationReports,FrontdoorWebApplicationFirewallLog,NetworkSecurityGroupEvent,WebApplicationFirewallLogs,kube-audit"`<br>`Category contains "SQL"`<br>`ResourceType in "APPLICATIONGATEWAYS,AZUREFIREWALLS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS,PROFILES,PUBLICIPADDRESSES"` | - | 1 | - | - | **1** |
| **Total** | **6** | **62** | **0** | **1** | **69** |

### Category

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `SQLSecurityAuditEvents` | 1 | 23 | - | - | **24** |
| `kube-audit` | 1 | 7 | - | - | **8** |
| `ApplicationGatewayFirewallLog` | - | 8 | - | - | **8** |
| `AzureFirewallNetworkRule` | - | 7 | - | 1 | **8** |
| `FrontdoorWebApplicationFirewallLog` | - | 7 | - | - | **7** |
| `NetworkSecurityGroupEvent` | 1 | 5 | - | - | **6** |
| `AzureFirewallApplicationRule` | - | 5 | - | - | **5** |
| `FrontDoorWebApplicationFirewallLog` | - | 4 | - | - | **4** |
| `ApplicationGatewayAccessLog` | - | 4 | - | - | **4** |
| `FrontdoorAccessLog` | - | 4 | - | - | **4** |
| `contains SQL` | - | 4 | - | - | **4** |
| `DDoSMitigationReports` | 1 | 2 | - | - | **3** |
| `DDoSMitigationFlowLogs` | - | 3 | - | - | **3** |
| `NetworkSecurityGroupRuleCounter` | 1 | 1 | - | - | **2** |
| `AzureFirewallDnsProxy` | - | 2 | - | - | **2** |
| `WebApplicationFirewallLogs` | - | 2 | - | - | **2** |
| `AutomaticTuning` | 1 | - | - | - | **1** |
| `Basic` | 1 | - | - | - | **1** |
| `Blocks` | 1 | - | - | - | **1** |
| `DatabaseWaitStatistics` | 1 | - | - | - | **1** |
| `Deadlocks` | 1 | - | - | - | **1** |
| `DevOpsOperationsAudit` | 1 | - | - | - | **1** |
| `Errors` | 1 | - | - | - | **1** |
| `InstanceAndAppAdvanced` | 1 | - | - | - | **1** |
| `QueryStoreWaitStatistics` | 1 | - | - | - | **1** |
| `SQLInsights` | 1 | - | - | - | **1** |
| `Timeouts` | 1 | - | - | - | **1** |
| `WorkloadManagement` | 1 | - | - | - | **1** |
| `contains SQLSecurityAuditEvents` | 1 | - | - | - | **1** |
| `cluster-autoscaler` | 1 | - | - | - | **1** |
| `guard` | 1 | - | - | - | **1** |
| `kube-apiserver` | 1 | - | - | - | **1** |
| `kube-audit-admin` | 1 | - | - | - | **1** |
| `kube-controller-manager` | 1 | - | - | - | **1** |
| `kube-scheduler` | 1 | - | - | - | **1** |
| `DDoSProtectionNotifications` | - | 1 | - | - | **1** |
| `AuditEvent` | - | 1 | - | - | **1** |
| `All` | - | 1 | - | - | **1** |
| `EntitlementManagement` | - | 1 | - | - | **1** |
| `GatewayDiagnosticLog` | - | 1 | - | - | **1** |
| `GroupManagement` | - | 1 | - | - | **1** |
| `IKEDiagnosticLog` | - | 1 | - | - | **1** |
| `RouteDiagnosticLog` | - | 1 | - | - | **1** |
| `TunnelDiagnosticLog` | - | 1 | - | - | **1** |
| `UserManagement` | - | 1 | - | - | **1** |

### ResourceType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `PUBLICIPADDRESSES` | 1 | 7 | - | - | **8** |
| `APPLICATIONGATEWAYS` | 1 | 7 | - | - | **8** |
| `AZUREFIREWALLS` | 1 | 7 | - | - | **8** |
| `VAULTS` | - | 8 | - | - | **8** |
| `CDNWEBAPPLICATIONFIREWALLPOLICIES` | 1 | 4 | - | - | **5** |
| `FRONTDOORS` | 1 | 4 | - | - | **5** |
| `SERVERS/DATABASES` | 1 | 3 | - | - | **4** |
| `PROFILES` | - | 4 | - | - | **4** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

