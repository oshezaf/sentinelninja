# DeviceNetworkEvents

Network connection and related events

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicenetworkevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicenetworkevents-table) |

## Solutions (18)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [Cyware](../solutions/cyware.md)
- [DORA Compliance](../solutions/dora-compliance.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [FalconFriday](../solutions/falconfriday.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Network Session Essentials](../solutions/network-session-essentials.md)
- [Recorded Future](../solutions/recorded-future.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [ThreatConnect](../solutions/threatconnect.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (58)

### Analytic Rules (32)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [DCOM Lateral Movement](../content/falconfriday-dcom-lateral-movement-d58035ff-0bac-4c61-a7f4-f58939ff9764-9dd841b7.md)
- [SMB/Windows Admin Shares](../content/falconfriday-smb-windows-admin-shares-9da25366-2c77-41a5-a159-0da5e2f5fb90-2e2330d9.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-ip-7edb2abb-7ef7-4685-92eb-a628703ccf9f-694732dc.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoise TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-network-session-events-asim-network-session-sc-536e8e5c-ce0e-575e-bcc9-aba8e7bf9316-294d0914.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Execution of software vulnerable to webp buffer overflow of CVE-2023-4863](../content/microsoft-defender-xdr-execution-of-software-vulnerable-to-webp-buffer-overflow-of-cve-2023-4863-26e81021-2de6-4442-a74a-a77885e96911-15de3ea9.md)
- [Possible Phishing with CSL and Network Sessions](../content/microsoft-defender-xdr-possible-phishing-with-csl-and-network-sessions-6c3a1258-bcdd-4fcd-b753-1a9bc826ce12-631549a4.md)
- [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-91a451e3-178f-41b2-9e5d-da97d75b9971-365d2f3a.md)
- [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/microsoft-defender-xdr-regsvr32-rundll32-image-loads-abnormal-extension-36fbd4e7-5630-4414-aa42-702a7fdded21-4cc759a2.md)
- [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-2624fc55-0998-4897-bb48-1c6422befce4-d1e3cdd5.md)
- [SUNBURST network beacons](../content/microsoft-defender-xdr-sunburst-network-beacons-ce1e7025-866c-41f3-9b08-ec170e05e73e-b0c0854f.md)

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
- [RecordedFuture Threat Hunting IP All Actors](../content/recorded-future-recordedfuture-threat-hunting-ip-all-actors-e31bc14e-2b4c-42a4-af34-5bfd7d768aea-57f811e9.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map Domain Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-domain-entity-to-devicenetworkevents-c308b2f3-eebe-4a20-905c-cb8293b062db-1b8b91ec.md)
- [TI Map IP Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-ip-entity-to-devicenetworkevents-b2df4979-d34a-48b3-a7d9-f473a4bf8058-1cf5dff4.md)
- [TI Map URL Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-url-entity-to-devicenetworkevents-6ddbd892-a9be-47be-bab7-521241695bd6-16a87b1d.md)
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threat-intelligence-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-e2399891-383c-4caf-ae67-68a008b9f89e-f1153622.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI Map Domain Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-domain-entity-to-devicenetworkevents-1546f3b3-de8a-4e62-bfea-815422154981-be5129ac.md)
- [TI Map IP Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-ip-entity-to-devicenetworkevents-2474343c-9135-42ec-9c40-a1bace43da5c-3e3eda3e.md)
- [TI Map URL Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-url-entity-to-devicenetworkevents-4f0356b2-d344-4c19-9375-31b9575d80cb-edd30654.md)
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threat-intelligence-new-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-54f4ceb4-fd83-4633-b5b0-c0de9feb8890-4e169efc.md)

**In solution [ThreatConnect](../solutions/threatconnect.md):**
- [ThreatConnect TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threatconnect-threatconnect-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-ee1fd303-2081-47b7-8f02-e38bfd0868e6-1359f109.md)

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**
- [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md)
- [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md)

### Hunting Queries (17)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Malicious Connection to LDAP port for CVE-2021-44228 vulnerability](../content/apache-log4j-vulnerability-detection-malicious-connection-to-ldap-port-for-cve-2021-44228-vulnerability-19abc034-139e-4e64-a05d-cb07ce8b003b-ea04e1a2.md)

**In solution [Cyware](../solutions/cyware.md):**
- [Detecting Suspicious PowerShell Command Executions](../content/cyware-detecting-suspicious-powershell-command-executions-deb99c6f-1903-455b-bb2c-0036614110bc-ec55d474.md)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Download of New File Using Curl](../content/endpoint-threat-protection-essentials-download-of-new-file-using-curl-7108c86b-a3ef-42d0-b50b-3e251fb1f84c-09e03acc.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-ip-faa83502-2763-49ae-9216-e576fa1fdccb-c11a3364.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-96976bb1-1993-45b8-a477-8236ee93976b-cf1c1157.md)
- [Recon with Rundll](../content/microsoft-defender-xdr-recon-with-rundll-76c14475-9a22-4cc1-922c-437d7f614a36-e593fe5e.md)
- [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/microsoft-defender-xdr-regsvr32-rundll32-image-loads-abnormal-extension-b1f8aac2-766d-47ec-8787-84bc7692ff77-8be87cf1.md)
- [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-54ea2379-28e7-48e1-8dfd-aaf8fb1331ba-f2e2f8cf.md)
- [Snip3 Malicious Network Connectivity](../content/microsoft-defender-xdr-snip3-malicious-network-connectivity-b3470e40-39ae-4c28-9282-440038f6f964-47add26a.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [Detect Outbound LDAP Traffic(ASIM Network Session schema)](../content/network-session-essentials-detect-outbound-ldap-traffic-asim-network-session-schema-5dca6047-24ed-4eb7-b44e-ec7f1bf42621-c96df1ab.md)
- [Detect port misuse by anomaly (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-anomaly-asim-network-session-schema-906c20c6-b62c-4af7-be91-d7300e3bded2-d8a6fcbc.md)
- [Detect port misuse by static threshold (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-static-threshold-asim-network-session-schema-70e2a349-87f0-4266-809c-e92fc71e0830-c23666f7.md)
- [Detects several users with the same MAC address (ASIM Network Session schema)](../content/network-session-essentials-detects-several-users-with-the-same-mac-address-asim-network-session-schema-cbe10c58-e96b-4827-853e-5c1f22fdcc74-aa0b75c3.md)
- [Mismatch between Destination App name and Destination Port (ASIM Network Session schema)](../content/network-session-essentials-mismatch-between-destination-app-name-and-destination-port-asim-network-sessi-a61e9fc1-dd9e-4588-a497-2a34a1d811bf-f510f729.md)
- [Protocols passing authentication in cleartext (ASIM Network Session schema)](../content/network-session-essentials-protocols-passing-authentication-in-cleartext-asim-network-session-schema-96f9fdd1-bb5b-4d32-8790-666457dc00c0-81fda166.md)
- [Remote Desktop Network Traffic(ASIM Network Session schema)](../content/network-session-essentials-remote-desktop-network-traffic-asim-network-session-schema-6fd69768-fdf1-4cfd-805f-b243be3f0c6d-7fef6a2e.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting IP All Actors](../content/recorded-future-recordedfuture-threat-hunting-ip-all-actors-7b5eb44d-3533-440e-9774-73a4d99bc2b2-0bac2271.md)

### Workbooks (8)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**
- [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md)

**In solution [DORA Compliance](../solutions/dora-compliance.md):**
- [DORACompliance](../content/dora-compliance-doracompliance-21bcc12f.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [NetworkSessionEssentials](../content/network-session-essentials-networksessionessentials-5de17c97.md)
- [NetworkSessionEssentialsV2](../content/network-session-essentials-networksessionessentialsv2-9408ac84.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
