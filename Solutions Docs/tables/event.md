# Event

Reference for Event table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Windows |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/event) |

## Solutions (21)

This table is used by the following solutions:

- [ALC-WebCTRL](../solutions/alc-webctrl.md)
- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md)
- [DNS Essentials](../solutions/dns-essentials.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Malware Protection Essentials](../solutions/malware-protection-essentials.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security---exchange-on-premises.md)
- [MimecastTIRegional](../solutions/mimecasttiregional.md)
- [Network Session Essentials](../solutions/network-session-essentials.md)
- [Recorded Future](../solutions/recorded-future.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md)
- [ThreatConnect](../solutions/threatconnect.md)
- [Windows Forwarded Events](../solutions/windows-forwarded-events.md)
- [Windows Security Events](../solutions/windows-security-events.md)

## Connectors (5)

This table is ingested by the following connectors:

- [Automated Logic WebCTRL ](../connectors/automatedlogicwebctrl.md)
- [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md)
- [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md)
- [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md)
- [Mimecast Intelligence for Microsoft - Microsoft Sentinel](../connectors/mimecasttiregionalconnectorazurefunctions.md)

---

## Content Items Using This Table (101)

### Analytic Rules (54)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/6e575295-a7e6-464c-8192-3e1d8fd6a990.md)

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**
- [Credential Dumping Tools - File Artifacts](../content/32ffb19e-8ed8-40ed-87a0-1adb4746b7c4.md)
- [Credential Dumping Tools - Service Installation](../content/4ebbb5c2-8802-11ec-a8a3-0242ac120002.md)

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

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Detecting Macro Invoking ShellBrowserWindow COM Objects](../content/e7470b35-0128-4508-bfc9-e01cfb3c2eb7.md)
- [Dumping LSASS Process Into a File](../content/a7b9df32-1367-402d-b385-882daf6e3020.md)
- [Lateral Movement via DCOM](../content/50cbf34a-4cdd-45d7-b3f5-8b53a1d0d14f.md)
- [Registry Persistence via AppCert DLL Modification](../content/c61ad0ac-ad68-4ebb-b41a-74296d3e0044.md)
- [Registry Persistence via AppInit DLLs Modification](../content/9367dff0-941d-44e2-8875-cb48570c7add.md)
- [WDigest downgrade attack](../content/f6502545-ae3a-4232-a8b0-79d87e5c98d7.md)
- [Windows Binaries Lolbins Renamed](../content/cbf6ad48-fa5c-4bf7-b205-28dbadb91255.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/d9e1646c-dc17-4150-ac85-581f5c9cb41f.md)
- [Google Threat Intelligence - Threat Hunting Hash](../content/8f9cd0e5-b4ab-4821-95e2-1082fcd784c7.md)
- [Google Threat Intelligence - Threat Hunting IP](../content/7edb2abb-7ef7-4685-92eb-a628703ccf9f.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoise TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/536e8e5c-ce0e-575e-bcc9-aba8e7bf9316.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect Malicious Usage of Recovery Tools to Delete Backup Files](../content/259de2c1-c546-4c6d-a17c-df639722f4d7.md)
- [Detect Print Processors Registry Driver Key Creation/Modification](../content/7edde3d4-9859-4a00-b93c-b19ddda55320.md)
- [Detect Registry Run Key Creation/Modification](../content/dd041e4e-1ee2-41ec-ba4e-82a71d628260.md)
- [Detect Windows Allow Firewall Rule Addition/Modification](../content/056593d4-ca3b-47a7-be9d-d1d0884a1d36.md)
- [Detect Windows Update Disabled from Registry](../content/f1443a87-78d5-40c3-b051-f468f0f2def0.md)
- [Process Creation with Suspicious CommandLine Arguments](../content/fdbcc0eb-44fb-467e-a51d-a91df0780a81.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Imminent Ransomware](../content/bb46dd86-e642-48a4-975c-44f5ac2b5033.md)
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
- [RecordedFuture Threat Hunting Hash All Actors](../content/6db6a8e6-2959-440b-ba57-a505875fcb37.md)
- [RecordedFuture Threat Hunting IP All Actors](../content/e31bc14e-2b4c-42a4-af34-5bfd7d768aea.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/999e9f5d-db4a-4b07-a206-29c4e667b7e8.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/67775878-7f8b-4380-ac54-115e1e828901.md)
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/e2399891-383c-4caf-ae67-68a008b9f89e.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/7c1ea2e6-6210-412c-92e4-180803a741b4.md)
- [TI map IP entity to DNS Events (ASIM DNS schema)](../content/b306fba8-1a28-449f-aa24-30362e16d4f5.md)
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/54f4ceb4-fd83-4633-b5b0-c0de9feb8890.md)

**In solution [ThreatConnect](../solutions/threatconnect.md):**
- [ThreatConnect TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/ee1fd303-2081-47b7-8f02-e38bfd0868e6.md)

**In solution [Windows Forwarded Events](../solutions/windows-forwarded-events.md):**
- [Progress MOVEIt File transfer above threshold](../content/9bd18b63-f1ca-4375-95db-39fda00bfe20.md)
- [Progress MOVEIt File transfer folder count above threshold](../content/26a993ca-0a96-45a0-8405-05a210fb98f8.md)

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [AD FS Remote HTTP Network Connection](../content/d57c33a9-76b9-40e0-9dfa-ff0404546410.md)
- [ADFS Database Named Pipe Connection](../content/dcdf9bfc-c239-4764-a9f9-3612e6dff49c.md)

### Hunting Queries (39)

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

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Certutil (LOLBins and LOLScripts, Normalized Process Events)](../content/eb022863-9ae2-41d4-b633-29e4d024b76f.md)
- [Detect Certutil (LOLBins and LOLScripts) Usage](../content/0e429446-2798-49e4-924d-c37338f24e23.md)
- [Execution of File with One Character in the Name](../content/299472c4-8382-4c5b-82d9-718cda193393.md)
- [Rare Windows Firewall Rule updates using Netsh](../content/e3e8c913-e5e9-4517-b4f7-dd1ec071888f.md)
- [Rundll32 (LOLBins and LOLScripts)](../content/c2074fce-b5ba-4c0a-9332-d08b8fc43c53.md)
- [Windows System Shutdown/Reboot (Normalized Process Events)](../content/5db1f6f9-9de9-43a9-b7cc-357486b42fc6.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting Domain](../content/34288e97-5194-4f2e-abf2-c2783189f6ae.md)
- [Google Threat Intelligence - Threat Hunting Hash](../content/0051a0d9-684f-4317-abbd-c1e5c24b39cb.md)
- [Google Threat Intelligence - Threat Hunting IP](../content/faa83502-2763-49ae-9216-e576fa1fdccb.md)

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**
- [Dev-0322 File Drop Activity November 2021 (ASIM Version)](../content/9b72769e-6ab1-4736-988b-018d92dc5e62.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect File Creation in Startup Folder](../content/64e199a8-b26c-462f-a65c-09ed9b53a47b.md)
- [Detect Files with Ramsomware Extensions](../content/595aea5c-74c7-415b-8b12-10af1a338cdf.md)
- [Detect Modification to System Files or Directories by User Accounts](../content/54b222c4-0149-421e-9d6d-da66da50495a.md)
- [Detect New Scheduled Task Creation that Run Executables From Non-Standard Location](../content/b43394b9-fa91-4d98-b331-619926a933bb.md)
- [Detect New Scheduled Task Entry Creations](../content/4dc0aae4-6375-4670-b138-8c42490ba206.md)
- [Executable Files Created in Uncommon Locations](../content/ab8ddb26-050c-40aa-aaf0-bfb7e3eeb05f.md)

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
- [RecordedFuture Threat Hunting Hash All Actors](../content/905da21a-c7d2-4f5b-b8fc-c8321da3ee83.md)
- [RecordedFuture Threat Hunting IP All Actors](../content/7b5eb44d-3533-440e-9774-73a4d99bc2b2.md)

**In solution [Windows Security Events](../solutions/windows-security-events.md):**
- [KrbRelayUp Local Privilege Escalation Service Creation](../content/ccbc73a1-d303-4613-aed4-478e996f454e.md)
- [Service installation from user writable directory](../content/5a9ccb48-1316-46e1-89d1-aca0355c305e.md)
- [Windows System Shutdown/Reboot(Sysmon)](../content/14fab7a3-cb11-41d6-a19a-b55a4a0ef3b1.md)

### Workbooks (6)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmcv2-cybersecuritymaturitymodelcertification%28cmmc%292.0.md)

**In solution [DNS Essentials](../solutions/dns-essentials.md):**
- [DNSSolutionWorkbook](../content/dnssolutionworkbook-dns-essentials.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [MalwareProtectionEssentialsWorkbook](../content/malwareprotectionessentialsworkbook-malware-protection-essentials.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagement-m2131-maturitymodelforeventlogmanagementm2131.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [NetworkSessionEssentials](../content/networksessionessentials-network-session-essentials.md)
- [NetworkSessionEssentialsV2](../content/networksessionessentialsv2-network-session-essentials.md)

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
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
