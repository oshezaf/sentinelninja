# Event

Reference for Event table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Windows |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/event) |

## Solutions (17)

This table is used by the following solutions:

- [ALC-WebCTRL](../solutions/alc-webctrl.md)
- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)
- [Mimecast](../solutions/mimecast.md)
- [MimecastTIRegional](../solutions/mimecasttiregional.md)
- [PCI DSS Compliance](../solutions/pci-dss-compliance.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Vectra XDR](../solutions/vectra-xdr.md)
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

## Content Items Using This Table (35)

### Analytic Rules (16)

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

**In solution [Windows Forwarded Events](../solutions/windows-forwarded-events.md):**
- [Progress MOVEIt File transfer above threshold](../content/windows-forwarded-events-progress-moveit-file-transfer-above-threshold-9bd18b63-f1ca-4375-95db-39fda00bfe20-ab42fd6b.md)
- [Progress MOVEIt File transfer folder count above threshold](../content/windows-forwarded-events-progress-moveit-file-transfer-folder-count-above-threshold-26a993ca-0a96-45a0-8405-05a210fb98f8-c970d686.md)

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [AD FS Remote HTTP Network Connection](../content/windows-security-events-ad-fs-remote-http-network-connection-d57c33a9-76b9-40e0-9dfa-ff0404546410-3555cd57.md)
- [ADFS Database Named Pipe Connection](../content/windows-security-events-adfs-database-named-pipe-connection-dcdf9bfc-c239-4764-a9f9-3612e6dff49c-29ef627a.md)

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**
- [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md)
- [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md)

### Hunting Queries (11)

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

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [KrbRelayUp Local Privilege Escalation Service Creation](../content/windows-security-events-krbrelayup-local-privilege-escalation-service-creation-ccbc73a1-d303-4613-aed4-478e996f454e-0d6549ff.md)
- [Service installation from user writable directory](../content/windows-security-events-service-installation-from-user-writable-directory-5a9ccb48-1316-46e1-89d1-aca0355c305e-81f8a107.md)
- [Windows System Shutdown/Reboot(Sysmon)](../content/windows-security-events-windows-system-shutdown-reboot-sysmon-14fab7a3-cb11-41d6-a19a-b55a4a0ef3b1-e2599fa5.md)

### Workbooks (8)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**
- [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md)

**In solution [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md):**
- [Microsoft Exchange Admin Activity](../content/microsoft-exchange-security-exchange-on-premises-microsoft-exchange-admin-activity-dd1fad82.md)

**In solution [Mimecast](../solutions/mimecast.md):**
- [Mimecast_TTP_Workbook](../content/mimecast-mimecast-ttp-workbook-c40cabd0.md)

**In solution [PCI DSS Compliance](../solutions/pci-dss-compliance.md):**
- [PCIDSSCompliance](../content/pci-dss-compliance-pcidsscompliance-b201eb3d.md)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**
- [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md)

**In solution [Vectra XDR](../solutions/vectra-xdr.md):**
- [VectraXDR](../content/vectra-xdr-vectraxdr-67eeec96.md)

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

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

