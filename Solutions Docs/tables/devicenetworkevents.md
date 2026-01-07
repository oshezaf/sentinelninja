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

## Solutions (13)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Cyware](../solutions/cyware.md)
- [DORA Compliance](../solutions/dora-compliance.md)
- [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Network Session Essentials](../solutions/network-session-essentials.md)
- [Recorded Future](../solutions/recorded-future.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md)
- [ThreatConnect](../solutions/threatconnect.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (49)

### Analytic Rules (27)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence---threat-hunting-ip-7edb2abb-7ef7-4685-92eb-a628703ccf9f.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoise TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-network-session-events-%28asim-network-session-schema%29-536e8e5c-ce0e-575e-bcc9-aba8e7bf9316.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Possible Phishing with CSL and Network Sessions](../content/microsoft-defender-xdr-possible-phishing-with-csl-and-network-sessions-6c3a1258-bcdd-4fcd-b753-1a9bc826ce12.md)
- [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-91a451e3-178f-41b2-9e5d-da97d75b9971.md)
- [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/microsoft-defender-xdr-regsvr32-rundll32-image-loads-abnormal-extension-36fbd4e7-5630-4414-aa42-702a7fdded21.md)
- [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-2624fc55-0998-4897-bb48-1c6422befce4.md)
- [SUNBURST network beacons](../content/microsoft-defender-xdr-sunburst-network-beacons-ce1e7025-866c-41f3-9b08-ec170e05e73e.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [Anomaly found in Network Session Traffic (ASIM Network Session schema)](../content/network-session-essentials-anomaly-found-in-network-session-traffic-%28asim-network-session-schema%29-cd6def0d-3ef0-4d55-a7e3-faa96c46ba12.md)
- [Anomaly in SMB Traffic(ASIM Network Session schema)](../content/network-session-essentials-anomaly-in-smb-traffic%28asim-network-session-schema%29-8717e498-7b5d-4e23-9e7c-fa4913dbfd79.md)
- [Detect port misuse by anomaly based detection (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-anomaly-based-detection-%28asim-network-session-schema%29-cbf07406-fa2a-48b0-82b8-efad58db14ec.md)
- [Detect port misuse by static threshold (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-static-threshold-%28asim-network-session-schema%29-156997bd-da0f-4729-b47a-0a3e02dd50c8.md)
- [Excessive number of failed connections from a single source (ASIM Network Session schema)](../content/network-session-essentials-excessive-number-of-failed-connections-from-a-single-source-%28asim-network-session-schema%29-4902eddb-34f7-44a8-ac94-8486366e9494.md)
- [Network Port Sweep from External Network (ASIM Network Session schema)](../content/network-session-essentials-network-port-sweep-from-external-network-%28asim-network-session-schema%29-cd8faa84-4464-4b4e-96dc-b22f50c27541.md)
- [Port scan detected  (ASIM Network Session schema)](../content/network-session-essentials-port-scan-detected--%28asim-network-session-schema%29-1da9853f-3dea-4ea9-b7e5-26730da3d537.md)
- [Potential beaconing activity (ASIM Network Session schema)](../content/network-session-essentials-potential-beaconing-activity-%28asim-network-session-schema%29-fcb9d75c-c3c1-4910-8697-f136bfef2363.md)
- [Remote Desktop Network Brute force (ASIM Network Session schema)](../content/network-session-essentials-remote-desktop-network-brute-force-%28asim-network-session-schema%29-b7dc801e-1e79-48bb-91e8-2229a8e6d40b.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting IP All Actors](../content/recorded-future-recordedfuture-threat-hunting-ip-all-actors-e31bc14e-2b4c-42a4-af34-5bfd7d768aea.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map Domain Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-domain-entity-to-devicenetworkevents-c308b2f3-eebe-4a20-905c-cb8293b062db.md)
- [TI Map IP Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-ip-entity-to-devicenetworkevents-b2df4979-d34a-48b3-a7d9-f473a4bf8058.md)
- [TI Map URL Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-url-entity-to-devicenetworkevents-6ddbd892-a9be-47be-bab7-521241695bd6.md)
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threat-intelligence-ti-map-ip-entity-to-network-session-events-%28asim-network-session-schema%29-e2399891-383c-4caf-ae67-68a008b9f89e.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI Map Domain Entity to DeviceNetworkEvents](../content/threat-intelligence-%28new%29-ti-map-domain-entity-to-devicenetworkevents-1546f3b3-de8a-4e62-bfea-815422154981.md)
- [TI Map IP Entity to DeviceNetworkEvents](../content/threat-intelligence-%28new%29-ti-map-ip-entity-to-devicenetworkevents-2474343c-9135-42ec-9c40-a1bace43da5c.md)
- [TI Map URL Entity to DeviceNetworkEvents](../content/threat-intelligence-%28new%29-ti-map-url-entity-to-devicenetworkevents-4f0356b2-d344-4c19-9375-31b9575d80cb.md)
- [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threat-intelligence-%28new%29-ti-map-ip-entity-to-network-session-events-%28asim-network-session-schema%29-54f4ceb4-fd83-4633-b5b0-c0de9feb8890.md)

**In solution [ThreatConnect](../solutions/threatconnect.md):**
- [ThreatConnect TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threatconnect-threatconnect-ti-map-ip-entity-to-network-session-events-%28asim-network-session-schema%29-ee1fd303-2081-47b7-8f02-e38bfd0868e6.md)

### Hunting Queries (16)

**In solution [Cyware](../solutions/cyware.md):**
- [Detecting Suspicious PowerShell Command Executions](../content/cyware-detecting-suspicious-powershell-command-executions-deb99c6f-1903-455b-bb2c-0036614110bc.md)

**In solution [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md):**
- [Download of New File Using Curl](../content/endpoint-threat-protection-essentials-download-of-new-file-using-curl-7108c86b-a3ef-42d0-b50b-3e251fb1f84c.md)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**
- [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence---threat-hunting-ip-faa83502-2763-49ae-9216-e576fa1fdccb.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-96976bb1-1993-45b8-a477-8236ee93976b.md)
- [Recon with Rundll](../content/microsoft-defender-xdr-recon-with-rundll-76c14475-9a22-4cc1-922c-437d7f614a36.md)
- [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/microsoft-defender-xdr-regsvr32-rundll32-image-loads-abnormal-extension-b1f8aac2-766d-47ec-8787-84bc7692ff77.md)
- [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-54ea2379-28e7-48e1-8dfd-aaf8fb1331ba.md)
- [Snip3 Malicious Network Connectivity](../content/microsoft-defender-xdr-snip3-malicious-network-connectivity-b3470e40-39ae-4c28-9282-440038f6f964.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [Detect Outbound LDAP Traffic(ASIM Network Session schema)](../content/network-session-essentials-detect-outbound-ldap-traffic%28asim-network-session-schema%29-5dca6047-24ed-4eb7-b44e-ec7f1bf42621.md)
- [Detect port misuse by anomaly (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-anomaly-%28asim-network-session-schema%29-906c20c6-b62c-4af7-be91-d7300e3bded2.md)
- [Detect port misuse by static threshold (ASIM Network Session schema)](../content/network-session-essentials-detect-port-misuse-by-static-threshold-%28asim-network-session-schema%29-70e2a349-87f0-4266-809c-e92fc71e0830.md)
- [Detects several users with the same MAC address (ASIM Network Session schema)](../content/network-session-essentials-detects-several-users-with-the-same-mac-address-%28asim-network-session-schema%29-cbe10c58-e96b-4827-853e-5c1f22fdcc74.md)
- [Mismatch between Destination App name and Destination Port (ASIM Network Session schema)](../content/network-session-essentials-mismatch-between-destination-app-name-and-destination-port-%28asim-network-session-schema%29-a61e9fc1-dd9e-4588-a497-2a34a1d811bf.md)
- [Protocols passing authentication in cleartext (ASIM Network Session schema)](../content/network-session-essentials-protocols-passing-authentication-in-cleartext-%28asim-network-session-schema%29-96f9fdd1-bb5b-4d32-8790-666457dc00c0.md)
- [Remote Desktop Network Traffic(ASIM Network Session schema)](../content/network-session-essentials-remote-desktop-network-traffic%28asim-network-session-schema%29-6fd69768-fdf1-4cfd-805f-b243be3f0c6d.md)

**In solution [Recorded Future](../solutions/recorded-future.md):**
- [RecordedFuture Threat Hunting IP All Actors](../content/recorded-future-recordedfuture-threat-hunting-ip-all-actors-7b5eb44d-3533-440e-9774-73a4d99bc2b2.md)

### Workbooks (5)

**In solution [DORA Compliance](../solutions/dora-compliance.md):**
- [DORACompliance](../content/dora-compliance-doracompliance.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint.md)

**In solution [Network Session Essentials](../solutions/network-session-essentials.md):**
- [NetworkSessionEssentials](../content/network-session-essentials-networksessionessentials.md)
- [NetworkSessionEssentialsV2](../content/network-session-essentials-networksessionessentialsv2.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
