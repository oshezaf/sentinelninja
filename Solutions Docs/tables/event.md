# Event

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for Event table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Windows |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/event) |

## Solutions (19)

This table is used by the following solutions:

- [ALC-WebCTRL](../solutions/alc-webctrl.md)
- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [DORA Compliance](../solutions/dora-compliance.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)
- [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md)
- [MimecastTIRegional](../solutions/mimecasttiregional.md)
- [PCI DSS Compliance](../solutions/pci-dss-compliance.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Veeam](../solutions/veeam.md)
- [Windows Forwarded Events](../solutions/windows-forwarded-events.md)
- [Windows Security Events](../solutions/windows-security-events.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (5)

This table is ingested by the following connectors:

- [Automated Logic WebCTRL ](../connectors/automatedlogicwebctrl.md)
- [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md)
- [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md)
- [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md)
- [Mimecast Intelligence for Microsoft - Microsoft Sentinel](../connectors/mimecasttiregionalconnectorazurefunctions.md)

---

## Content Items Using This Table (62)

### Analytic Rules (29)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**
- [Credential Dumping Tools - File Artifacts](../content/attacker-tools-threat-protection-essentials-credential-dumping-tools-file-artifacts-32ffb19e-8ed8-40ed-87a0-1adb4746b7c4-38277ddb.md)
- [Credential Dumping Tools - Service Installation](../content/attacker-tools-threat-protection-essentials-credential-dumping-tools-service-installation-4ebbb5c2-8802-11ec-a8a3-0242ac120002-507654df.md)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Detecting Macro Invoking ShellBrowserWindow COM Objects](../content/endpoint-threat-protection-essentials-detecting-macro-invoking-shellbrowserwindow-com-objects-e7470b35-0128-4508-bfc9-e01cfb3c2eb7-54d0e1c8.md)
- [Dumping LSASS Process Into a File](../content/endpoint-threat-protection-essentials-dumping-lsass-process-into-a-file-a7b9df32-1367-402d-b385-882daf6e3020-8e3af60d.md)
- [Lateral Movement via DCOM](../content/endpoint-threat-protection-essentials-lateral-movement-via-dcom-50cbf34a-4cdd-45d7-b3f5-8b53a1d0d14f-eb377b6e.md)
- [Registry Persistence via AppCert DLL Modification](../content/endpoint-threat-protection-essentials-registry-persistence-via-appcert-dll-modification-c61ad0ac-ad68-4ebb-b41a-74296d3e0044-b5180a51.md)
- [Registry Persistence via AppInit DLLs Modification](../content/endpoint-threat-protection-essentials-registry-persistence-via-appinit-dlls-modification-9367dff0-941d-44e2-8875-cb48570c7add-7d4d4858.md)
- [WDigest downgrade attack](../content/endpoint-threat-protection-essentials-wdigest-downgrade-attack-f6502545-ae3a-4232-a8b0-79d87e5c98d7-c50de150.md)
- [Windows Binaries Lolbins Renamed](../content/endpoint-threat-protection-essentials-windows-binaries-lolbins-renamed-cbf6ad48-fa5c-4bf7-b205-28dbadb91255-7714bcc6.md)

**In solution [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md):**
- [Server Oriented Cmdlet And User Oriented Cmdlet used](../content/microsoft-exchange-security-exchange-on-premises-server-oriented-cmdlet-and-user-oriented-cmdlet-used-7bce901b-9bc8-4948-8dfc-8f68878092d5-0bb5de2e.md)
- [VIP Mailbox manipulation](../content/microsoft-exchange-security-exchange-on-premises-vip-mailbox-manipulation-5170c3c4-b8c9-485c-910d-a21d965ee181-521c4b8b.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [Audit policy manipulation using auditpol utility](../content/standalone-content-audit-policy-manipulation-using-auditpol-utility-66276b14-32c5-4226-88e3-080dacc31ce1-c1e75d10.md)
- [COM Event System Loading New DLL](../content/standalone-content-com-event-system-loading-new-dll-02f6c2e5-219d-4426-a0bf-ad67abc63d53-d3c38f00.md)
- [DSRM Account Abuse](../content/standalone-content-dsrm-account-abuse-979c42dd-533e-4ede-b18b-31a84ba8b3d6-7eba24fb.md)
- [Email access via active sync](../content/standalone-content-email-access-via-active-sync-2f561e20-d97b-4b13-b02d-18b34af6e87c-db926024.md)
- [Europium - Hash and IP IOCs - September 2022](../content/standalone-content-europium-hash-and-ip-iocs-september-2022-9d8b5a18-b7db-4c23-84a6-95febaf7e1e4-24b34350.md)
- [Gain Code Execution on ADFS Server via Remote WMI Execution](../content/standalone-content-gain-code-execution-on-adfs-server-via-remote-wmi-execution-0bd65651-1404-438b-8f63-eecddcec87b4-d7675a11.md)
- [Mercury - Domain, Hash and IP IOCs - August 2022](../content/standalone-content-mercury-domain,-hash-and-ip-iocs-august-2022-ae10c588-7ff7-486c-9920-ab8b0bdb6ede-8b4a9fab.md)
- [Modification of Accessibility Features](../content/standalone-content-modification-of-accessibility-features-d714ef62-1a56-4779-804f-91c4158e528d-44b1d2cd.md)
- [Prestige ransomware IOCs Oct 2022](../content/standalone-content-prestige-ransomware-iocs-oct-2022-bca9c877-2afc-4246-a26d-087ab1cdcd5f-ab904866.md)
- [Silk Typhoon Suspicious UM Service Error](../content/standalone-content-silk-typhoon-suspicious-um-service-error-0625fcce-6d52-491e-8c68-1d9b801d25b9-6787e2f2.md)
- [Solorigate Named Pipe](../content/standalone-content-solorigate-named-pipe-11b4c19d-2a79-4da3-af38-b067e1273dee-7c9da0a1.md)

**In solution [Windows Forwarded Events](../solutions/windows-forwarded-events.md):**
- [Progress MOVEIt File transfer above threshold](../content/windows-forwarded-events-progress-moveit-file-transfer-above-threshold-9bd18b63-f1ca-4375-95db-39fda00bfe20-ab42fd6b.md)
- [Progress MOVEIt File transfer folder count above threshold](../content/windows-forwarded-events-progress-moveit-file-transfer-folder-count-above-threshold-26a993ca-0a96-45a0-8405-05a210fb98f8-c970d686.md)

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [AD FS Remote HTTP Network Connection](../content/windows-security-events-ad-fs-remote-http-network-connection-d57c33a9-76b9-40e0-9dfa-ff0404546410-3555cd57.md)
- [ADFS Database Named Pipe Connection](../content/windows-security-events-adfs-database-named-pipe-connection-dcdf9bfc-c239-4764-a9f9-3612e6dff49c-29ef627a.md)

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**
- [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md)
- [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md)

### Hunting Queries (16)

**In solution [](../solutions/.md):**
- [AD FS Database Local SQL Statements](../content/-ad-fs-database-local-sql-statements-81fab62b-ef92-487a-9c35-a91a116309e6-71f9ce9d.md)
- [Potential Local Exploitation for Privilege Escalation](../content/-potential-local-exploitation-for-privilege-escalation-a78b826e-f2d1-42f9-b21b-20cf3bc2d391-75da84ea.md)
- [Rare firewall rule changes using netsh](../content/-rare-firewall-rule-changes-using-netsh-3dc5dc8b-160b-407e-9925-24a91e3599df-b7eb240d.md)
- [Windows System Shutdown/Reboot(Sysmon)](../content/-windows-system-shutdown-reboot-sysmon-024b3726-add7-4e06-842d-932034ba21f7-9a5469b5.md)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Detect Certutil (LOLBins and LOLScripts) Usage](../content/endpoint-threat-protection-essentials-detect-certutil-lolbins-and-lolscripts-usage-0e429446-2798-49e4-924d-c37338f24e23-bc9b437b.md)
- [Execution of File with One Character in the Name](../content/endpoint-threat-protection-essentials-execution-of-file-with-one-character-in-the-name-299472c4-8382-4c5b-82d9-718cda193393-14ba3a7f.md)
- [Persisting via IFEO Registry Key](../content/endpoint-threat-protection-essentials-persisting-via-ifeo-registry-key-f82c89fa-c969-4d12-832f-04d55d14522c-6020db66.md)
- [Potential Microsoft Security Services Tampering](../content/endpoint-threat-protection-essentials-potential-microsoft-security-services-tampering-e10e1d2f-265d-4d90-9037-7f3a6ed8a91e-8c1dc76e.md)
- [Rare Windows Firewall Rule updates using Netsh](../content/endpoint-threat-protection-essentials-rare-windows-firewall-rule-updates-using-netsh-e3e8c913-e5e9-4517-b4f7-dd1ec071888f-d0fef21e.md)
- [Rundll32 (LOLBins and LOLScripts)](../content/endpoint-threat-protection-essentials-rundll32-lolbins-and-lolscripts-c2074fce-b5ba-4c0a-9332-d08b8fc43c53-1b1739b4.md)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**
- [Known Nylon Typhoon Registry modifications patterns](../content/legacy-ioc-based-threat-protection-known-nylon-typhoon-registry-modifications-patterns-f090f8f4a-b986-42d2-b536-e0795c723e25-f442d105.md)
- [SolarWinds Inventory](../content/legacy-ioc-based-threat-protection-solarwinds-inventory-278592b5-612b-48a4-bb38-4c01ff8ee2a5-c7f23741.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [Tracking Privileged Account Rare Activity](../content/standalone-content-tracking-privileged-account-rare-activity-431cccd3-2dff-46ee-b34b-61933e45f556-2c02c0bd.md)

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [KrbRelayUp Local Privilege Escalation Service Creation](../content/windows-security-events-krbrelayup-local-privilege-escalation-service-creation-ccbc73a1-d303-4613-aed4-478e996f454e-0d6549ff.md)
- [Service installation from user writable directory](../content/windows-security-events-service-installation-from-user-writable-directory-5a9ccb48-1316-46e1-89d1-aca0355c305e-81f8a107.md)
- [Windows System Shutdown/Reboot(Sysmon)](../content/windows-security-events-windows-system-shutdown-reboot-sysmon-14fab7a3-cb11-41d6-a19a-b55a4a0ef3b1-e2599fa5.md)

### Workbooks (17)

**In solution [](../solutions/.md):**
- [ExchangeCompromiseHunting](../content/-exchangecompromisehunting-4a1075bf.md)
- [InsecureProtocols](../content/-insecureprotocols-ae7d5c76.md)
- [SentinelWorkspaceReconTools](../content/-sentinelworkspacerecontools-3f6cdf50.md)
- [SolarWindsPostCompromiseHunting](../content/-solarwindspostcompromisehunting-ff2e76bc.md)
- [VeeamSecurityActivities](../content/-veeamsecurityactivities-088632cd.md)
- [WebApplicationFirewallWAFTypeEvents](../content/-webapplicationfirewallwaftypeevents-3904f88e.md)
- [WorkspaceUsage](../content/-workspaceusage-0da12cea.md)

**In solution [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md):**
- [WebApplicationFirewallWAFTypeEvents](../content/azure-web-application-firewall-waf-webapplicationfirewallwaftypeevents-bc7c447b.md)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**
- [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md)

**In solution [DORA Compliance](../solutions/dora-compliance.md):**
- [DORACompliance](../content/dora-compliance-doracompliance-21bcc12f.md)

**In solution [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md):**
- [Microsoft Exchange Admin Activity](../content/microsoft-exchange-security-exchange-on-premises-microsoft-exchange-admin-activity-dd1fad82.md)
- [Microsoft Exchange Search AdminAuditLog](../content/microsoft-exchange-security-exchange-on-premises-microsoft-exchange-search-adminauditlog-fcf38c03.md)

**In solution [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md):**
- [Microsoft Exchange Least Privilege with RBAC - Online](../content/microsoft-exchange-security-exchange-online-microsoft-exchange-least-privilege-with-rbac-online-e1522c02.md)

**In solution [PCI DSS Compliance](../solutions/pci-dss-compliance.md):**
- [PCIDSSCompliance](../content/pci-dss-compliance-pcidsscompliance-b201eb3d.md)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**
- [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md)

**In solution [Veeam](../solutions/veeam.md):**
- [VeeamSecurityActivities](../content/veeam-veeamsecurityactivities-f559a349.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.operationalinsights/workspaces`
- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`
- `microsoft.azurestackhci/clusters`

## Parsers Using This Table (13)

### ASIM Parsers (6)

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimDnsMicrosoftSysmon](../asim/asimdnsmicrosoftsysmon.md) | Dns |  |
| [ASimFileEventMicrosoftSysmon](../asim/asimfileeventmicrosoftsysmon.md) | FileEvent |  |
| [ASimNetworkSessionMicrosoftSysmon](../asim/asimnetworksessionmicrosoftsysmon.md) | NetworkSession |  |
| [ASimProcessEventCreateMicrosoftSysmon](../asim/asimprocesseventcreatemicrosoftsysmon.md) | ProcessEvent |  |
| [ASimProcessEventTerminateMicrosoftSysmon](../asim/asimprocesseventterminatemicrosoftsysmon.md) | ProcessEvent |  |
| [ASimRegistryEventMicrosoftSysmon](../asim/asimregistryeventmicrosoftsysmon.md) | RegistryEvent |  |

### Other Parsers (7)

| Parser | Solution | Location |
|:-------|:---------|:---------|
| [ExchangeAdminAuditLogs](../parsers/exchangeadminauditlogs.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) | Solution |
| [SQLServer_Parser](../parsers/sqlserver-parser.md) | *(Legacy)* | Legacy |
| [Sysmon-AllVersions_Parser](../parsers/sysmon-allversions-parser.md) | *(Legacy)* | Legacy |
| [Sysmon-v10.42-Parser](../parsers/sysmon-v10.42-parser.md) | *(Legacy)* | Legacy |
| [Sysmon-v11.0](../parsers/sysmon-v11.0.md) | *(Legacy)* | Legacy |
| [Sysmon-v12.0](../parsers/sysmon-v12.0.md) | *(Legacy)* | Legacy |
| [Sysmon-v9.10-Parser](../parsers/sysmon-v9.10-parser.md) | *(Legacy)* | Legacy |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

