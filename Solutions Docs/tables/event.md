# Event

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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

## Solutions (18)

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
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Veeam](../solutions/veeam.md)
- [Windows Forwarded Events](../solutions/windows-forwarded-events.md)
- [Windows Security Events](../solutions/windows-security-events.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (5)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Automated Logic WebCTRL ](../connectors/automatedlogicwebctrl.md) | `Source == "ALCWebCTRL"` |
| [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) | `EventLog in "Application,MSExchange Management,System"` |
| [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md) | `EventLog == "MSExchange Management"` |
| [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md) | `EventLog == "Application"` |
| [Mimecast Intelligence for Microsoft - Microsoft Sentinel](../connectors/mimecasttiregionalconnectorazurefunctions.md) |  |

---

## Content Items Using This Table (39)

### Analytic Rules (18)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):** `EventID == "3"`<br>`Source == "Microsoft-Windows-Sysmon"`

| Content Item |
|:-------------|
| [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md) |

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Credential Dumping Tools - File Artifacts](../content/attacker-tools-threat-protection-essentials-credential-dumping-tools-file-artifacts-32ffb19e-8ed8-40ed-87a0-1adb4746b7c4-38277ddb.md) | `EventID == "11"`<br>`EventLog == "Microsoft-Windows-Sysmon/Operational"` |
| [Credential Dumping Tools - Service Installation](../content/attacker-tools-threat-protection-essentials-credential-dumping-tools-service-installation-4ebbb5c2-8802-11ec-a8a3-0242ac120002-507654df.md) | `EventID == "7045"`<br>`Source == "Service Control Manager"` |

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detecting Macro Invoking ShellBrowserWindow COM Objects](../content/endpoint-threat-protection-essentials-detecting-macro-invoking-shellbrowserwindow-com-objects-e7470b35-0128-4508-bfc9-e01cfb3c2eb7-54d0e1c8.md) | `EventID == "1"`<br>`EventLog == "Microsoft-Windows-Sysmon/Operational"` |
| [Dumping LSASS Process Into a File](../content/endpoint-threat-protection-essentials-dumping-lsass-process-into-a-file-a7b9df32-1367-402d-b385-882daf6e3020-8e3af60d.md) | `EventID == "10"`<br>`EventLog == "Microsoft-Windows-Sysmon/Operational"` |
| [Lateral Movement via DCOM](../content/endpoint-threat-protection-essentials-lateral-movement-via-dcom-50cbf34a-4cdd-45d7-b3f5-8b53a1d0d14f-eb377b6e.md) | `EventID == "1"`<br>`EventLog == "Microsoft-Windows-Sysmon/Operational"` |
| [Registry Persistence via AppCert DLL Modification](../content/endpoint-threat-protection-essentials-registry-persistence-via-appcert-dll-modification-c61ad0ac-ad68-4ebb-b41a-74296d3e0044-b5180a51.md) | `EventID == "13"`<br>`EventLog == "Microsoft-Windows-Sysmon/Operational"` |
| [Registry Persistence via AppInit DLLs Modification](../content/endpoint-threat-protection-essentials-registry-persistence-via-appinit-dlls-modification-9367dff0-941d-44e2-8875-cb48570c7add-7d4d4858.md) | `EventID == "13"`<br>`EventLog == "Microsoft-Windows-Sysmon/Operational"` |
| [WDigest downgrade attack](../content/endpoint-threat-protection-essentials-wdigest-downgrade-attack-f6502545-ae3a-4232-a8b0-79d87e5c98d7-c50de150.md) | `EventID == "13"`<br>`EventLog == "Microsoft-Windows-Sysmon/Operational"` |
| [Windows Binaries Lolbins Renamed](../content/endpoint-threat-protection-essentials-windows-binaries-lolbins-renamed-cbf6ad48-fa5c-4bf7-b205-28dbadb91255-7714bcc6.md) | `EventID == "1"`<br>`EventLog == "Microsoft-Windows-Sysmon/Operational"` |

**In solution [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md):** `EventID in "1,6"`<br>`EventLog == "MSExchange Management"`

| Content Item |
|:-------------|
| [Server Oriented Cmdlet And User Oriented Cmdlet used](../content/microsoft-exchange-security-exchange-on-premises-server-oriented-cmdlet-and-user-oriented-cmdlet-used-7bce901b-9bc8-4948-8dfc-8f68878092d5-0bb5de2e.md) |
| [VIP Mailbox manipulation](../content/microsoft-exchange-security-exchange-on-premises-vip-mailbox-manipulation-5170c3c4-b8c9-485c-910d-a21d965ee181-521c4b8b.md) |

**In solution [Windows Forwarded Events](../solutions/windows-forwarded-events.md):** `EventID == "0"`<br>`EventLog == "Application"`<br>`Source == "MOVEit DMZ Audit"`

| Content Item |
|:-------------|
| [Progress MOVEIt File transfer above threshold](../content/windows-forwarded-events-progress-moveit-file-transfer-above-threshold-9bd18b63-f1ca-4375-95db-39fda00bfe20-ab42fd6b.md) |
| [Progress MOVEIt File transfer folder count above threshold](../content/windows-forwarded-events-progress-moveit-file-transfer-folder-count-above-threshold-26a993ca-0a96-45a0-8405-05a210fb98f8-c970d686.md) |

**In solution [Windows Security Events](../solutions/windows-security-events.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AD FS Remote HTTP Network Connection](../content/windows-security-events-ad-fs-remote-http-network-connection-d57c33a9-76b9-40e0-9dfa-ff0404546410-3555cd57.md) | `EventID in "18,3"`<br>`Source == "Microsoft-Windows-Sysmon"` |
| [ADFS Database Named Pipe Connection](../content/windows-security-events-adfs-database-named-pipe-connection-dcdf9bfc-c239-4764-a9f9-3612e6dff49c-29ef627a.md) | `EventID == "18"`<br>`Source == "Microsoft-Windows-Sysmon"` |

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md) |  |
| [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md) |  |

### Hunting Queries (11)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detect Certutil (LOLBins and LOLScripts) Usage](../content/endpoint-threat-protection-essentials-detect-certutil-lolbins-and-lolscripts-usage-0e429446-2798-49e4-924d-c37338f24e23-bc9b437b.md) | `EventID == "1"`<br>`Source == "Microsoft-Windows-Sysmon"` |
| [Execution of File with One Character in the Name](../content/endpoint-threat-protection-essentials-execution-of-file-with-one-character-in-the-name-299472c4-8382-4c5b-82d9-718cda193393-14ba3a7f.md) | `EventID == "1"`<br>`EventLog == "Microsoft-Windows-Sysmon/Operational"` |
| [Persisting via IFEO Registry Key](../content/endpoint-threat-protection-essentials-persisting-via-ifeo-registry-key-f82c89fa-c969-4d12-832f-04d55d14522c-6020db66.md) | `Source == "Microsoft-Windows-Sysmon"` |
| [Potential Microsoft Security Services Tampering](../content/endpoint-threat-protection-essentials-potential-microsoft-security-services-tampering-e10e1d2f-265d-4d90-9037-7f3a6ed8a91e-8c1dc76e.md) | `Source == "Microsoft-Windows-SENSE"` |
| [Rare Windows Firewall Rule updates using Netsh](../content/endpoint-threat-protection-essentials-rare-windows-firewall-rule-updates-using-netsh-e3e8c913-e5e9-4517-b4f7-dd1ec071888f-d0fef21e.md) | `Source == "Microsoft-Windows-Sysmon"` |
| [Rundll32 (LOLBins and LOLScripts)](../content/endpoint-threat-protection-essentials-rundll32-lolbins-and-lolscripts-c2074fce-b5ba-4c0a-9332-d08b8fc43c53-1b1739b4.md) | `EventID == "1"`<br>`Source == "Microsoft-Windows-Sysmon"` |

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):** `Source == "Microsoft-Windows-Sysmon"`

| Content Item |
|:-------------|
| [Known Nylon Typhoon Registry modifications patterns](../content/legacy-ioc-based-threat-protection-known-nylon-typhoon-registry-modifications-patterns-f090f8f4a-b986-42d2-b536-e0795c723e25-f442d105.md) |
| [SolarWinds Inventory](../content/legacy-ioc-based-threat-protection-solarwinds-inventory-278592b5-612b-48a4-bb38-4c01ff8ee2a5-c7f23741.md) |

**In solution [Windows Security Events](../solutions/windows-security-events.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [KrbRelayUp Local Privilege Escalation Service Creation](../content/windows-security-events-krbrelayup-local-privilege-escalation-service-creation-ccbc73a1-d303-4613-aed4-478e996f454e-0d6549ff.md) | `EventID == "7045"`<br>`Source == "Service Control Manager"` |
| [Service installation from user writable directory](../content/windows-security-events-service-installation-from-user-writable-directory-5a9ccb48-1316-46e1-89d1-aca0355c305e-81f8a107.md) | `EventID == "7045"`<br>`Source == "Service Control Manager"` |
| [Windows System Shutdown/Reboot(Sysmon)](../content/windows-security-events-windows-system-shutdown-reboot-sysmon-14fab7a3-cb11-41d6-a19a-b55a4a0ef3b1-e2599fa5.md) | `EventID == "1"`<br>`EventLog has "shutdown.exe"`<br>`Source == "Microsoft-Windows-Sysmon"` |

### Workbooks (10)

**In solution [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [WebApplicationFirewallWAFTypeEvents](../content/azure-web-application-firewall-waf-webapplicationfirewallwaftypeevents-bc7c447b.md) |  |

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |  |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |  |

**In solution [DORA Compliance](../solutions/dora-compliance.md):** `EventID in "1001,1069,1205"`

| Content Item |
|:-------------|
| [DORACompliance](../content/dora-compliance-doracompliance-21bcc12f.md) |

**In solution [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md):** `EventID in "1,6"`<br>`EventLog == "MSExchange Management"`

| Content Item |
|:-------------|
| [Microsoft Exchange Admin Activity](../content/microsoft-exchange-security-exchange-on-premises-microsoft-exchange-admin-activity-dd1fad82.md) |
| [Microsoft Exchange Search AdminAuditLog](../content/microsoft-exchange-security-exchange-on-premises-microsoft-exchange-search-adminauditlog-fcf38c03.md) |

**In solution [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md):** `EventID in "1,6"`<br>`EventLog == "MSExchange Management"`

| Content Item |
|:-------------|
| [Microsoft Exchange Least Privilege with RBAC - Online](../content/microsoft-exchange-security-exchange-online-microsoft-exchange-least-privilege-with-rbac-online-e1522c02.md) |

**In solution [PCI DSS Compliance](../solutions/pci-dss-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [PCIDSSCompliance](../content/pci-dss-compliance-pcidsscompliance-b201eb3d.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

**In solution [Veeam](../solutions/veeam.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [VeeamSecurityActivities](../content/veeam-veeamsecurityactivities-f559a349.md) |  |

## Parsers Using This Table (14)

### ASIM Parsers (7)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuditEventMicrosoftEvent](../asim/asimauditeventmicrosoftevent.md) | AuditEvent | Microsoft Windows |  |
| [ASimDnsMicrosoftSysmon](../asim/asimdnsmicrosoftsysmon.md) | Dns | Microsoft Windows Events Sysmon | `EventID == "22"`<br>`Source == "Microsoft-Windows-Sysmon"` |
| [ASimFileEventMicrosoftSysmon](../asim/asimfileeventmicrosoftsysmon.md) | FileEvent | Windows Sysmon | `EventID in "11,23,26"`<br>`Source == "Microsoft-Windows-Sysmon"` |
| [ASimNetworkSessionMicrosoftSysmon](../asim/asimnetworksessionmicrosoftsysmon.md) | NetworkSession | Windows Sysmon | `EventID == "3"`<br>`Source == "Microsoft-Windows-Sysmon"` |
| [ASimProcessEventCreateMicrosoftSysmon](../asim/asimprocesseventcreatemicrosoftsysmon.md) | ProcessEvent | Sysmon | `EventID == "1"`<br>`Source == "Microsoft-Windows-Sysmon"` |
| [ASimProcessEventTerminateMicrosoftSysmon](../asim/asimprocesseventterminatemicrosoftsysmon.md) | ProcessEvent | Microsoft Windows Events Sysmon | `EventID == "5"`<br>`Source == "Microsoft-Windows-Sysmon"` |
| [ASimRegistryEventMicrosoftSysmon](../asim/asimregistryeventmicrosoftsysmon.md) | RegistryEvent | Microsoft Sysmon | `EventID in "12,13,14"`<br>`Source == "Microsoft-Windows-Sysmon"` |

### Other Parsers (7)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ExchangeAdminAuditLogs](../parsers/exchangeadminauditlogs.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) | `EventID in "1,6"`<br>`EventLog == "MSExchange Management"` |
| [SQLServer_Parser](../parsers/sqlserver-parser.md) | *(Legacy)* | `Source contains "MSSQL"` |
| [Sysmon-AllVersions_Parser](../parsers/sysmon-allversions-parser.md) | *(Legacy)* | `Source == "Microsoft-Windows-Sysmon"` |
| [Sysmon-v10.42-Parser](../parsers/sysmon-v10.42-parser.md) | *(Legacy)* | `EventID in "1,10,11,12,13,14,15,16,17,18,19,2,20,21,22,3,4,5,6,7,8,9"`<br>`Source == "Microsoft-Windows-Sysmon"` |
| [Sysmon-v11.0](../parsers/sysmon-v11.0.md) | *(Legacy)* | `EventID in "1,10,11,12,13,14,15,16,17,18,19,2,20,21,22,23,3,4,5,6,7,8,9"`<br>`Source == "Microsoft-Windows-Sysmon"` |
| [Sysmon-v12.0](../parsers/sysmon-v12.0.md) | *(Legacy)* | `EventID in "1,10,11,12,13,14,15,16,17,18,19,2,20,21,22,23,24,255,3,4,5,6,7,8,9"`<br>`Source == "Microsoft-Windows-Sysmon"` |
| [Sysmon-v9.10-Parser](../parsers/sysmon-v9.10-parser.md) | *(Legacy)* | `EventID in "1,10,11,12,13,14,15,16,17,18,19,2,20,21,3,4,5,6,7,8,9"`<br>`Source == "Microsoft-Windows-Sysmon"` |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.operationalinsights/workspaces`
- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`
- `microsoft.azurestackhci/clusters`

## Selection Criteria Summary (28 criteria, 48 total references)

References by type: 4 connectors, 31 content items, 6 ASIM parsers, 7 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `EventID in "1,6"`<br>`EventLog == "MSExchange Management"` | - | 5 | - | 1 | **6** |
| `Source == "Microsoft-Windows-Sysmon"` | - | 4 | - | 1 | **5** |
| `EventID == "1"`<br>`EventLog == "Microsoft-Windows-Sysmon/Operational"` | - | 4 | - | - | **4** |
| `EventID == "7045"`<br>`Source == "Service Control Manager"` | - | 3 | - | - | **3** |
| `EventID == "13"`<br>`EventLog == "Microsoft-Windows-Sysmon/Operational"` | - | 3 | - | - | **3** |
| `EventID == "1"`<br>`Source == "Microsoft-Windows-Sysmon"` | - | 2 | 1 | - | **3** |
| `EventID == "3"`<br>`Source == "Microsoft-Windows-Sysmon"` | - | 1 | 1 | - | **2** |
| `EventID == "0"`<br>`EventLog == "Application"`<br>`Source == "MOVEit DMZ Audit"` | - | 2 | - | - | **2** |
| `EventLog == "Application"` | 1 | - | - | - | **1** |
| `EventLog in "Application,MSExchange Management,System"` | 1 | - | - | - | **1** |
| `Source == "ALCWebCTRL"` | 1 | - | - | - | **1** |
| `EventLog == "MSExchange Management"` | 1 | - | - | - | **1** |
| `EventID == "11"`<br>`EventLog == "Microsoft-Windows-Sysmon/Operational"` | - | 1 | - | - | **1** |
| `EventID == "10"`<br>`EventLog == "Microsoft-Windows-Sysmon/Operational"` | - | 1 | - | - | **1** |
| `EventID == "18"`<br>`Source == "Microsoft-Windows-Sysmon"` | - | 1 | - | - | **1** |
| `EventID in "18,3"`<br>`Source == "Microsoft-Windows-Sysmon"` | - | 1 | - | - | **1** |
| `Source == "Microsoft-Windows-SENSE"` | - | 1 | - | - | **1** |
| `EventID == "1"`<br>`EventLog has "shutdown.exe"`<br>`Source == "Microsoft-Windows-Sysmon"` | - | 1 | - | - | **1** |
| `EventID in "1001,1069,1205"` | - | 1 | - | - | **1** |
| `EventID == "22"`<br>`Source == "Microsoft-Windows-Sysmon"` | - | - | 1 | - | **1** |
| `EventID in "11,23,26"`<br>`Source == "Microsoft-Windows-Sysmon"` | - | - | 1 | - | **1** |
| `EventID == "5"`<br>`Source == "Microsoft-Windows-Sysmon"` | - | - | 1 | - | **1** |
| `EventID in "12,13,14"`<br>`Source == "Microsoft-Windows-Sysmon"` | - | - | 1 | - | **1** |
| `Source contains "MSSQL"` | - | - | - | 1 | **1** |
| `EventID in "1,10,11,12,13,14,15,16,17,18,19,2,20,21,22,3,4,5,6,7,8,9"`<br>`Source == "Microsoft-Windows-Sysmon"` | - | - | - | 1 | **1** |
| `EventID in "1,10,11,12,13,14,15,16,17,18,19,2,20,21,22,23,3,4,5,6,7,8,9"`<br>`Source == "Microsoft-Windows-Sysmon"` | - | - | - | 1 | **1** |
| `EventID in "1,10,11,12,13,14,15,16,17,18,19,2,20,21,22,23,24,255,3,4,5,6,7,8,9"`<br>`Source == "Microsoft-Windows-Sysmon"` | - | - | - | 1 | **1** |
| `EventID in "1,10,11,12,13,14,15,16,17,18,19,2,20,21,3,4,5,6,7,8,9"`<br>`Source == "Microsoft-Windows-Sysmon"` | - | - | - | 1 | **1** |
| **Total** | **4** | **31** | **6** | **7** | **48** |

### EventID

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `1` | - | 12 | 1 | 5 | **18** |
| `6` | - | 5 | - | 5 | **10** |
| `13` | - | 3 | 1 | 4 | **8** |
| `3` | - | 2 | 1 | 4 | **7** |
| `11` | - | 1 | 1 | 4 | **6** |
| `18` | - | 2 | - | 4 | **6** |
| `10` | - | 1 | - | 4 | **5** |
| `5` | - | - | 1 | 4 | **5** |
| `12` | - | - | 1 | 4 | **5** |
| `14` | - | - | 1 | 4 | **5** |
| `22` | - | - | 1 | 3 | **4** |
| `15` | - | - | - | 4 | **4** |
| `16` | - | - | - | 4 | **4** |
| `17` | - | - | - | 4 | **4** |
| `19` | - | - | - | 4 | **4** |
| `2` | - | - | - | 4 | **4** |
| `20` | - | - | - | 4 | **4** |
| `21` | - | - | - | 4 | **4** |
| `4` | - | - | - | 4 | **4** |
| `7` | - | - | - | 4 | **4** |
| `8` | - | - | - | 4 | **4** |
| `9` | - | - | - | 4 | **4** |
| `7045` | - | 3 | - | - | **3** |
| `23` | - | - | 1 | 2 | **3** |
| `0` | - | 2 | - | - | **2** |
| `1001` | - | 1 | - | - | **1** |
| `1069` | - | 1 | - | - | **1** |
| `1205` | - | 1 | - | - | **1** |
| `26` | - | - | 1 | - | **1** |
| `24` | - | - | - | 1 | **1** |
| `255` | - | - | - | 1 | **1** |

### EventLog

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Microsoft-Windows-Sysmon/Operational` | - | 9 | - | - | **9** |
| `MSExchange Management` | 2 | 5 | - | 1 | **8** |
| `Application` | 2 | 2 | - | - | **4** |
| `System` | 1 | - | - | - | **1** |
| `has shutdown.exe` | - | 1 | - | - | **1** |

### Source

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Microsoft-Windows-Sysmon` | - | 10 | 6 | 5 | **21** |
| `Service Control Manager` | - | 3 | - | - | **3** |
| `MOVEit DMZ Audit` | - | 2 | - | - | **2** |
| `ALCWebCTRL` | 1 | - | - | - | **1** |
| `Microsoft-Windows-SENSE` | - | 1 | - | - | **1** |
| `contains MSSQL` | - | - | - | 1 | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

