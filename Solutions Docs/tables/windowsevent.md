# WindowsEvent

Reference for WindowsEvent table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Windows |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/windowsevent) |

## Solutions (19)

This table is used by the following solutions:

- [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [DNS Essentials](../solutions/dns-essentials.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Malware Protection Essentials](../solutions/malware-protection-essentials.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Network Session Essentials](../solutions/network-session-essentials.md)
- [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md)
- [Recorded Future](../solutions/recorded-future.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [ThreatConnect](../solutions/threatconnect.md)
- [Windows Forwarded Events](../solutions/windows-forwarded-events.md)
- [Windows Security Events](../solutions/windows-security-events.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Windows Forwarded Events](../connectors/windowsforwardedevents.md)

---

## Content Items Using This Table (100)

### Analytic Rules (52)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**
- [Powershell Empire Cmdlets Executed in Command Line](../content/attacker-tools-threat-protection-essentials-powershell-empire-cmdlets-executed-in-command-line-ef88eb96-861c-43a0-ab16-f3835a97c928-001fa98c.md)

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

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Base64 encoded Windows process command-lines](../content/endpoint-threat-protection-essentials-base64-encoded-windows-process-command-lines-ca67c83e-7fff-4127-a3e3-1af66d6d4cad-01f53023.md)
- [Malware in the recycle bin](../content/endpoint-threat-protection-essentials-malware-in-the-recycle-bin-75bf9902-0789-47c1-a5d8-f57046aa72df-2b92e7a9.md)
- [Process executed from binary hidden in Base64 encoded file](../content/endpoint-threat-protection-essentials-process-executed-from-binary-hidden-in-base64-encoded-file-d6190dde-8fd2-456a-ac5b-0a32400b0464-f2c6e93c.md)
- [Security Event log cleared](../content/endpoint-threat-protection-essentials-security-event-log-cleared-80da0a8f-cfe1-4cd0-a895-8bc1771a720e-2f5b4cb9.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-domain-d9e1646c-dc17-4150-ac85-581f5c9cb41f-473cd3b4.md)
- [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-hash-8f9cd0e5-b4ab-4821-95e2-1082fcd784c7-681b75ff.md)
- [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-ip-7edb2abb-7ef7-4685-92eb-a628703ccf9f-694732dc.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoise TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-network-session-events-asim-network-session-sc-536e8e5c-ce0e-575e-bcc9-aba8e7bf9316-294d0914.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI IPAddress in WindowsEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-windowsevents-4776281c-6c49-46ac-8444-4dd8ba2f4565-915cc28f.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect Malicious Usage of Recovery Tools to Delete Backup Files](../content/malware-protection-essentials-detect-malicious-usage-of-recovery-tools-to-delete-backup-files-259de2c1-c546-4c6d-a17c-df639722f4d7-f1d64838.md)
- [Detect Print Processors Registry Driver Key Creation/Modification](../content/malware-protection-essentials-detect-print-processors-registry-driver-key-creation-modification-7edde3d4-9859-4a00-b93c-b19ddda55320-f9f0f5d0.md)
- [Detect Registry Run Key Creation/Modification](../content/malware-protection-essentials-detect-registry-run-key-creation-modification-dd041e4e-1ee2-41ec-ba4e-82a71d628260-bcf60f87.md)
- [Detect Windows Allow Firewall Rule Addition/Modification](../content/malware-protection-essentials-detect-windows-allow-firewall-rule-addition-modification-056593d4-ca3b-47a7-be9d-d1d0884a1d36-0da604bb.md)
- [Detect Windows Update Disabled from Registry](../content/malware-protection-essentials-detect-windows-update-disabled-from-registry-f1443a87-78d5-40c3-b051-f468f0f2def0-9957e6e8.md)
- [Process Creation with Suspicious CommandLine Arguments](../content/malware-protection-essentials-process-creation-with-suspicious-commandline-arguments-fdbcc0eb-44fb-467e-a51d-a91df0780a81-fc1c4a27.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Imminent Ransomware](../content/microsoft-defender-xdr-imminent-ransomware-bb46dd86-e642-48a4-975c-44f5ac2b5033-87169ff1.md)
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

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**
- [Network endpoint to host executable correlation](../content/network-threat-protection-essentials-network-endpoint-to-host-executable-correlation-01f64465-b1ef-41ea-a7f5-31553a11ad43-f4ed06da.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting Domain All Actors](../content/recorded-future-recordedfuture-threat-hunting-domain-all-actors-acbf7ef6-f964-44c3-9031-7834ec68175f-9002c0d5.md)
- [RecordedFuture Threat Hunting IP All Actors](../content/recorded-future-recordedfuture-threat-hunting-ip-all-actors-e31bc14e-2b4c-42a4-af34-5bfd7d768aea-57f811e9.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/threat-intelligence-ti-map-domain-entity-to-dns-events-asim-dns-schema-999e9f5d-db4a-4b07-a206-29c4e667b7e8-820c58df.md)
- [TI map Email entity to SecurityEvent](../content/threat-intelligence-ti-map-email-entity-to-securityevent-2fc5d810-c9cc-491a-b564-841427ae0e50-9cb621b7.md)
- [TI map File Hash to Security Event](../content/threat-intelligence-ti-map-file-hash-to-security-event-a7427ed7-04b4-4e3b-b323-08b981b9b4bf-a0646697.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/threat-intelligence-ti-map-ip-entity-to-dns-events-asim-dns-schema-67775878-7f8b-4380-ac54-115e1e828901-a15c3e60.md)
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threat-intelligence-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-e2399891-383c-4caf-ae67-68a008b9f89e-f1153622.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/threat-intelligence-new-ti-map-domain-entity-to-dns-events-asim-dns-schema-7c1ea2e6-6210-412c-92e4-180803a741b4-d24ac70c.md)
- [TI map Email entity to SecurityEvent](../content/threat-intelligence-new-ti-map-email-entity-to-securityevent-0a59051d-aed4-4fb6-bf84-bc80534482b2-60b9192e.md)
- [TI map File Hash to Security Event](../content/threat-intelligence-new-ti-map-file-hash-to-security-event-9f7dc779-1e51-4925-ae4a-db1db933077f-d8ffe445.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/threat-intelligence-new-ti-map-ip-entity-to-dns-events-asim-dns-schema-b306fba8-1a28-449f-aa24-30362e16d4f5-613a3814.md)
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threat-intelligence-new-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-54f4ceb4-fd83-4633-b5b0-c0de9feb8890-4e169efc.md)

**In solution [ThreatConnect](../solutions/threatconnect.md):**
- [ThreatConnect TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threatconnect-threatconnect-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-ee1fd303-2081-47b7-8f02-e38bfd0868e6-1359f109.md)

**In solution [Windows Forwarded Events](../solutions/windows-forwarded-events.md):**
- [Caramel Tsunami Actor IOC - July 2021](../content/windows-forwarded-events-caramel-tsunami-actor-ioc-july-2021-066395ac-ef91-4993-8bf6-25c61ab0ca5a-e6c825f2.md)
- [Chia_Crypto_Mining IOC - June 2021](../content/windows-forwarded-events-chia-crypto-mining-ioc-june-2021-4d173248-439b-4741-8b37-f63ad0c896ae-e48dccbd.md)

### Hunting Queries (40)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**
- [Potential Impacket Execution](../content/attacker-tools-threat-protection-essentials-potential-impacket-execution-24ae555c-5e33-4b5d-827a-44206e39f6b4-04d0f42f.md)

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

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Backup Deletion](../content/endpoint-threat-protection-essentials-backup-deletion-56ebae61-89cf-42d9-99f4-3dff8ba33885-e1c87558.md)
- [Certutil (LOLBins and LOLScripts, Normalized Process Events)](../content/endpoint-threat-protection-essentials-certutil-lolbins-and-lolscripts,-normalized-process-events-eb022863-9ae2-41d4-b633-29e4d024b76f-bf894765.md)
- [Persisting via IFEO Registry Key](../content/endpoint-threat-protection-essentials-persisting-via-ifeo-registry-key-f82c89fa-c969-4d12-832f-04d55d14522c-6020db66.md)
- [Potential Microsoft Security Services Tampering](../content/endpoint-threat-protection-essentials-potential-microsoft-security-services-tampering-e10e1d2f-265d-4d90-9037-7f3a6ed8a91e-8c1dc76e.md)
- [Windows System Shutdown/Reboot (Normalized Process Events)](../content/endpoint-threat-protection-essentials-windows-system-shutdown-reboot-normalized-process-events-5db1f6f9-9de9-43a9-b7cc-357486b42fc6-4a6147b7.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-domain-34288e97-5194-4f2e-abf2-c2783189f6ae-2dfdacdc.md)
- [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-hash-0051a0d9-684f-4317-abbd-c1e5c24b39cb-5660b61d.md)
- [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-ip-faa83502-2763-49ae-9216-e576fa1fdccb-c11a3364.md)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**
- [Dev-0056 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0056-command-line-activity-november-2021-e2629949-2043-4421-8064-bca23c8491dd-1cdb73c2.md)
- [Known Nylon Typhoon Registry modifications patterns](../content/legacy-ioc-based-threat-protection-known-nylon-typhoon-registry-modifications-patterns-f090f8f4a-b986-42d2-b536-e0795c723e25-f442d105.md)
- [Nylon Typhoon Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-nylon-typhoon-command-line-activity-november-2021-bb30abbc-9af6-4a37-9536-e9207e023989-bdd1efea.md)
- [SolarWinds Inventory](../content/legacy-ioc-based-threat-protection-solarwinds-inventory-278592b5-612b-48a4-bb38-4c01ff8ee2a5-c7f23741.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect File Creation in Startup Folder](../content/malware-protection-essentials-detect-file-creation-in-startup-folder-64e199a8-b26c-462f-a65c-09ed9b53a47b-2d1178e6.md)
- [Detect Files with Ramsomware Extensions](../content/malware-protection-essentials-detect-files-with-ramsomware-extensions-595aea5c-74c7-415b-8b12-10af1a338cdf-d88185c4.md)
- [Detect Modification to System Files or Directories by User Accounts](../content/malware-protection-essentials-detect-modification-to-system-files-or-directories-by-user-accounts-54b222c4-0149-421e-9d6d-da66da50495a-78cf8ebf.md)
- [Detect New Scheduled Task Creation that Run Executables From Non-Standard Location](../content/malware-protection-essentials-detect-new-scheduled-task-creation-that-run-executables-from-non-standard--b43394b9-fa91-4d98-b331-619926a933bb-d0df99aa.md)
- [Detect New Scheduled Task Entry Creations](../content/malware-protection-essentials-detect-new-scheduled-task-entry-creations-4dc0aae4-6375-4670-b138-8c42490ba206-84bcf125.md)
- [Executable Files Created in Uncommon Locations](../content/malware-protection-essentials-executable-files-created-in-uncommon-locations-ab8ddb26-050c-40aa-aaf0-bfb7e3eeb05f-1af678b6.md)

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

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [Domain controller installation media creation](../content/windows-security-events-domain-controller-installation-media-creation-7e5f3a9a-542c-417a-a429-4ed500c5c4d8-fec25b2e.md)
- [Establishing internal proxies](../content/windows-security-events-establishing-internal-proxies-ce38c16c-a560-46c0-88d6-7757b88f08e9-e3cde3e0.md)

### Workbooks (6)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**
- [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [DNSSolutionWorkbook](../content/dns-essentials-dnssolutionworkbook-9b8ac8e7.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [MalwareProtectionEssentialsWorkbook](../content/malware-protection-essentials-malwareprotectionessentialsworkbook-df9a8a0a.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [NetworkSessionEssentials](../content/network-session-essentials-networksessionessentials-5de17c97.md)
- [NetworkSessionEssentialsV2](../content/network-session-essentials-networksessionessentialsv2-9408ac84.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/securityinsights`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
