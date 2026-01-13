# Syslog

Reference for Syslog table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Syslog/CEF |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/syslog) |

## Solutions (21)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [CTERA](../solutions/ctera.md)
- [Cisco SD-WAN](../solutions/cisco-sd-wan.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [IllumioSaaS](../solutions/illumiosaas.md)
- [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Sysmon For Linux](../solutions/microsoft-sysmon-for-linux.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Nasuni](../solutions/nasuni.md)
- [PCI DSS Compliance](../solutions/pci-dss-compliance.md)
- [Pure Storage](../solutions/pure-storage.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [Syslog](../solutions/syslog.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [VMware SASE](../solutions/vmware-sase.md)
- [Veeam](../solutions/veeam.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (6)

This table is ingested by the following connectors:

- [CTERA Syslog](../connectors/ctera.md)
- [Cisco Software Defined WAN](../connectors/ciscosdwan.md)
- [[Deprecated] Microsoft Sysmon For Linux](../connectors/microsoftsysmonforlinux.md)
- [[Deprecated] Nasuni Edge Appliance](../connectors/nasuniedgeappliance.md)
- [Syslog via Legacy Agent](../connectors/syslog.md)
- [Syslog via AMA](../connectors/syslogama.md)

---

## Content Items Using This Table (62)

### Analytic Rules (26)

**In solution [CTERA](../solutions/ctera.md):**
- [Antivirus Detected an Infected File](../content/ctera-antivirus-detected-an-infected-file-4f767afa-d666-4ed4-b453-a4f5ad35181b-5bf89171.md)
- [CTERA Mass Access Denied Detection Analytic](../content/ctera-ctera-mass-access-denied-detection-analytic-88341fc3-38e1-46db-8bb1-6c052e749991-0ac24cd2.md)
- [CTERA Mass Deletions Detection Analytic](../content/ctera-ctera-mass-deletions-detection-analytic-5365f294-0c67-432a-bacf-b1282a3b6c46-6fc626fe.md)
- [CTERA Mass Permissions Changes Detection Analytic](../content/ctera-ctera-mass-permissions-changes-detection-analytic-90502ac9-19a2-41f0-ba81-e352de90b61b-15e26af2.md)
- [Ransom Protect Detected a Ransomware Attack](../content/ctera-ransom-protect-detected-a-ransomware-attack-7a075edf-1cf2-4038-ba9c-c354db6409de-549c8616.md)
- [Ransom Protect User Blocked](../content/ctera-ransom-protect-user-blocked-d5d4766b-e547-44da-9d85-48ff393db201-202e085b.md)

**In solution [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md):**
- [Infoblox - TI - Syslog Match Found - URL](../content/infoblox-cloud-data-connector-infoblox-ti-syslog-match-found-url-28ee3c2b-eb4b-44de-a71e-e462843fea72-5ddcadfd.md)

**In solution [Nasuni](../solutions/nasuni.md):**
- [Ransomware Attack Detected](../content/nasuni-ransomware-attack-detected-6c8770fb-c854-403e-a64d-0293ba344d5f-009250d8.md)
- [Ransomware Client Blocked](../content/nasuni-ransomware-client-blocked-0c96a5a2-d60d-427d-8399-8df7fe8e6536-b5c61929.md)

**In solution [Pure Storage](../solutions/pure-storage.md):**
- [External Fabric Module XFM1 is unhealthy](../content/pure-storage-external-fabric-module-xfm1-is-unhealthy-a8130dcc-3617-41c0-a7ac-5f352bcfffaf-9171f737.md)
- [Pure Controller Failed](../content/pure-storage-pure-controller-failed-c317b007-84e7-4449-93f4-4444f6638fd0-857a505b.md)
- [Pure Failed Login](../content/pure-storage-pure-failed-login-ed32b115-5001-43a7-a2bb-f53026db4d97-7948e1d0.md)

**In solution [Syslog](../solutions/syslog.md):**
- [Failed logon attempts in authpriv](../content/syslog-failed-logon-attempts-in-authpriv-e7ec9fa6-e7f7-41ed-a34b-b956837a3ee6-eb207cad.md)
- [NRT Squid proxy events related to mining pools](../content/syslog-nrt-squid-proxy-events-related-to-mining-pools-dd03057e-4347-4853-bf1e-2b2d21eb4e59-bc48dba2.md)
- [SFTP File transfer above threshold](../content/syslog-sftp-file-transfer-above-threshold-bb6a74c8-889d-4c6e-8412-7d5efe33f4ed-7f06d2d2.md)
- [SFTP File transfer folder count above threshold](../content/syslog-sftp-file-transfer-folder-count-above-threshold-7355434e-09d5-4401-b56d-e03e9379dfb1-648b0cfd.md)
- [SSH - Potential Brute Force](../content/syslog-ssh-potential-brute-force-e1ce0eab-10d1-4aae-863f-9a383345ba88-08e1a5a9.md)
- [Squid proxy events for ToR proxies](../content/syslog-squid-proxy-events-for-tor-proxies-90d3f6ec-80fb-48e0-9937-2c70c9df9bad-1bd82f05.md)
- [Squid proxy events related to mining pools](../content/syslog-squid-proxy-events-related-to-mining-pools-80733eb7-35b2-45b6-b2b8-3c51df258206-05fb1303.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map URL Entity to Syslog Data](../content/threat-intelligence-ti-map-url-entity-to-syslog-data-b31037ea-6f68-4fbd-bab2-d0d0f44c2fcf-b70131e6.md)
- [TI map Domain entity to Syslog](../content/threat-intelligence-ti-map-domain-entity-to-syslog-532f62c1-fba6-4baa-bbb6-4a32a4ef32fa-afa2706f.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI Map URL Entity to Syslog Data](../content/threat-intelligence-new-ti-map-url-entity-to-syslog-data-4de24a28-dcd0-4a0d-bf14-96d8483dc05a-607492d9.md)
- [TI map Domain entity to Syslog](../content/threat-intelligence-new-ti-map-domain-entity-to-syslog-cd19434e-10f2-4e2f-b3c1-ce6f08ac5357-10e0f11d.md)

**In solution [VMware SASE](../solutions/vmware-sase.md):**
- [VMware SD-WAN Edge - IDS/IPS Alert triggered (Syslog)](../content/vmware-sase-vmware-sd-wan-edge-ids-ips-alert-triggered-syslog-a8e2bfd2-5d9c-4acc-aa55-30029e50d574-87cc70c3.md)
- [VMware SD-WAN Edge - Network Anomaly Detection - Potential Fragmentation Attack](../content/vmware-sase-vmware-sd-wan-edge-network-anomaly-detection-potential-fragmentation-attack-ce207901-ed7b-49ae-ada7-033e1fbb1240-9e11c9d7.md)
- [VMware SD-WAN Edge - Network Anomaly Detection - RPF Check Failure](../content/vmware-sase-vmware-sd-wan-edge-network-anomaly-detection-rpf-check-failure-840b050f-842b-4264-8973-d4f9b65facb5-9ddc97bd.md)

### Hunting Queries (22)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Linux security related process termination activity detected](../content/apache-log4j-vulnerability-detection-linux-security-related-process-termination-activity-detected-020b05d3-6447-402c-87b6-f8faff7c7e19-e5bfe56c.md)
- [Possible Container Miner related artifacts detected](../content/apache-log4j-vulnerability-detection-possible-container-miner-related-artifacts-detected-6fee32b3-3271-4a3f-9b01-dbd9432a1707-c7bdf860.md)
- [Possible Linux attack toolkit detected via Syslog data](../content/apache-log4j-vulnerability-detection-possible-linux-attack-toolkit-detected-via-syslog-data-09e45ec6-ac42-4b5a-be69-54623c4aa062-48341e65.md)
- [Possible exploitation of Apache log4j component detected](../content/apache-log4j-vulnerability-detection-possible-exploitation-of-apache-log4j-component-detected-38cc38c3-bd6c-470e-ae1a-3136a9ded97f-aa82fa46.md)
- [Suspicious Base64 download activity detected](../content/apache-log4j-vulnerability-detection-suspicious-base64-download-activity-detected-78882f9a-f3ef-4010-973c-3f6336f5bef7-90a64218.md)
- [Suspicious Shell script detected](../content/apache-log4j-vulnerability-detection-suspicious-shell-script-detected-3e43fe23-c6c0-45ca-b680-263e8afada95-d9c4f52e.md)
- [Suspicious manipulation of firewall detected via Syslog data](../content/apache-log4j-vulnerability-detection-suspicious-manipulation-of-firewall-detected-via-syslog-data-e178baf5-3cf3-4960-8ca4-8da6d90d8206-be0d2edd.md)

**In solution [CTERA](../solutions/ctera.md):**
- [CTERA Batch Access Denied Detection](../content/ctera-ctera-batch-access-denied-detection-26f7d89a-b7b7-47cb-ad11-281f66c17c3d-8e6c5c0a.md)
- [CTERA Batch File Deletions Detection](../content/ctera-ctera-batch-file-deletions-detection-23206903-0c36-4d68-ba4b-169c67355b53-1167ebd9.md)
- [CTERA Permission Change Detection](../content/ctera-ctera-permission-change-detection-694ce74e-968b-4ca0-ae24-53bcfd87bf0a-8a5d3bf9.md)

**In solution [Nasuni](../solutions/nasuni.md):**
- [Nasuni File Delete Activity](../content/nasuni-nasuni-file-delete-activity-64a3477e-d06f-4491-86a5-6f99702e267f-9caf20b1.md)

**In solution [Syslog](../solutions/syslog.md):**
- [Crypto currency miners EXECVE](../content/syslog-crypto-currency-miners-execve-1ef1c38f-26dd-4e28-b884-5b3665352648-c1378546.md)
- [Editing Linux scheduled tasks through Crontab](../content/syslog-editing-linux-scheduled-tasks-through-crontab-6f0f1821-5981-408a-930b-8b2ca60e9e6c-5de4e857.md)
- [Linux scheduled task Aggregation](../content/syslog-linux-scheduled-task-aggregation-eb09da09-6f6c-4502-bf74-f7b9f1343539-ae42cc38.md)
- [Rare process running on a Linux host](../content/syslog-rare-process-running-on-a-linux-host-d0ae35df-0eaf-491f-b23e-8190e4f3ffe9-bece04a6.md)
- [SCX Execute RunAs Providers](../content/syslog-scx-execute-runas-providers-0d298a1d-1a08-4f4b-8b28-687bfe0012e8-bc82896d.md)
- [Squid commonly abused TLDs](../content/syslog-squid-commonly-abused-tlds-7aaa7675-1580-47d8-a404-039cb7284279-58ed2cc3.md)
- [Squid data volume timeseries anomalies](../content/syslog-squid-data-volume-timeseries-anomalies-e472c490-4792-4f12-8b6b-6ab3e0404d35-8dc40325.md)
- [Squid malformed requests](../content/syslog-squid-malformed-requests-edbeec9f-86b9-475d-8a42-cc7b95ad2baa-73064f82.md)
- [Suspicious crytocurrency mining related threat activity detected](../content/syslog-suspicious-crytocurrency-mining-related-threat-activity-detected-005d6e3c-7453-46f6-aef3-f59695594545-4f6cf014.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map File Entity to Syslog Event](../content/threat-intelligence-ti-map-file-entity-to-syslog-event-18f7de84-de55-4983-aca3-a18bc846b4e0-26e4aa14.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI Map File Entity to Syslog Event](../content/threat-intelligence-new-ti-map-file-entity-to-syslog-event-f624417d-9e4e-462e-93e7-53ab7686a479-b72d3476.md)

### Workbooks (14)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Log4jPostCompromiseHunting](../content/apache-log4j-vulnerability-detection-log4jpostcompromisehunting-8811d292.md)

**In solution [CTERA](../solutions/ctera.md):**
- [CTERA_Workbook](../content/ctera-ctera-workbook-5bba0e18.md)

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**
- [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md)

**In solution [IllumioSaaS](../solutions/illumiosaas.md):**
- [IllumioOnPremHealth](../content/illumiosaas-illumioonpremhealth-4cde69e6.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md)

**In solution [PCI DSS Compliance](../solutions/pci-dss-compliance.md):**
- [PCIDSSCompliance](../content/pci-dss-compliance-pcidsscompliance-b201eb3d.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md)

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):**
- [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md)

**In solution [Syslog](../solutions/syslog.md):**
- [LinuxMachines](../content/syslog-linuxmachines-b765d65a.md)

**In solution [VMware SASE](../solutions/vmware-sase.md):**
- [VMwareSASESOCDashboard](../content/vmware-sase-vmwaresasesocdashboard-36b12705.md)

**In solution [Veeam](../solutions/veeam.md):**
- [VeeamSecurityActivities](../content/veeam-veeamsecurityactivities-f559a349.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**
- [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.operationalinsights/workspaces`
- `microsoft.containerservice/managedclusters`
- `microsoft.kubernetes/connectedclusters`
- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`
- `microsoft.hybridcontainerservice/provisionedclusters`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

