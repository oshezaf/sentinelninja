# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Microsoft Defender XDR

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Microsoft Defender XDR Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Microsoft Defender XDR](https://www.microsoft.com/security/business/threat-protection/microsoft-365-defender) solution for Microsoft Sentinel enables you to ingest Security Alerts/Incidents and raw logs from the products within Microsoft Defender XDR suite into Microsoft Sentinel.

Additional Hunting Queries to support proactive and reactive hunting for the Microsoft Defender XDR solution can be found on [GitHub](https://github.com/Azure/Azure-Sentinel/tree/master/Hunting%20Queries/Microsoft%20365%20Defender). This repository has a collection of queries developed by Microsoft Security Research and Microsoft Sentinel community contributions.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.11 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [Microsoft Defender XDR](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> Supported Products

This solution uses ASIM parsers and supports the following products:

| Product |
|:--------|
| [Microsoft 365 Defender for endpoint](../asim/asim-products-index.md#microsoft-365-defender-for-endpoint) |
| [Microsoft Defender for IoT](../asim/asim-products-index.md#microsoft-defender-for-iot) |
| [Microsoft Windows Events Sysmon](../asim/asim-products-index.md#microsoft-windows-events-sysmon) |
| [Native](../asim/asim-products-index.md#native) |
| [Security Events](../asim/asim-products-index.md#security-events) |
| [SentinelOne](../asim/asim-products-index.md#sentinelone) |
| [Sysmon](../asim/asim-products-index.md#sysmon) |
| [Sysmon for Linux](../asim/asim-products-index.md#sysmon-for-linux) |
| [Trend Micro Vision One](../asim/asim-products-index.md#trend-micro-vision-one) |
| [VMware Carbon Black Cloud](../asim/asim-products-index.md#vmware-carbon-black-cloud) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This solution uses **2 ASIM parser(s)** for normalized data:

| Parser | Used By Content |
|--------|----------------|
| [`_ASim_ProcessEvent`](../asim/asimprocessevent.md) | Analytics |
| [`_Im_NetworkSession`](../asim/imnetworksession.md) | Analytics |

## Tables Used

This solution uses **27 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AADSignInEventsBeta`](../tables/aadsignineventsbeta.md) | - | Hunting |
| [`CloudAppEvents`](../tables/cloudappevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting, Workbooks |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | - | Analytics |
| [`DeviceEvents`](../tables/deviceevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting, Workbooks |
| [`DeviceFileCertificateInfo`](../tables/devicefilecertificateinfo.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Workbooks |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting, Workbooks |
| [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting, Workbooks |
| [`DeviceInfo`](../tables/deviceinfo.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Workbooks |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Hunting, Workbooks |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting, Workbooks |
| [`DeviceNetworkInfo`](../tables/devicenetworkinfo.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Workbooks |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting, Workbooks |
| [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting, Workbooks |
| [`DeviceTvmSoftwareVulnerabilities`](../tables/devicetvmsoftwarevulnerabilities.md) | - | Analytics |
| [`DeviceTvmSoftwareVulnerabilitiesKB`](../tables/devicetvmsoftwarevulnerabilitieskb.md) | - | Hunting |
| [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Hunting |
| [`EmailEvents`](../tables/emailevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Hunting, Workbooks |
| [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Hunting, Workbooks |
| [`EmailUrlInfo`](../tables/emailurlinfo.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Hunting, Workbooks |
| [`IdentityDirectoryEvents`](../tables/identitydirectoryevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Hunting, Workbooks |
| [`IdentityLogonEvents`](../tables/identitylogonevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting, Workbooks |
| [`IdentityQueryEvents`](../tables/identityqueryevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Workbooks |
| [`MessageEvents`](../tables/messageevents.md) | - | Hunting |
| [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) | - | Hunting |
| [`MessageUrlInfo`](../tables/messageurlinfo.md) | - | Hunting |
| [`SigninLogs`](../tables/signinlogs.md) | - | Analytics, Hunting |
| [`UrlClickEvents`](../tables/urlclickevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Hunting, Workbooks |

### Internal Tables

The following **5 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AlertEvidence`](../tables/alertevidence.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting, Workbooks |
| [`AlertInfo`](../tables/alertinfo.md) | - | Analytics, Hunting |
| [`IdentityInfo`](../tables/identityinfo.md) | - | Analytics, Hunting |
| [`SecurityAlert`](../tables/securityalert.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Workbooks |

## Content Items

This solution includes **373 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 329 |
| Analytic Rules | 40 |
| Workbooks | 3 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [AV detections related to SpringShell Vulnerability](../content/microsoft-defender-xdr-av-detections-related-to-springshell-vulnerability-3bd33158-3f0b-47e3-a50f-7c20a1b88038-091061ce.md) | High | InitialAccess | [`DeviceInfo`](../tables/deviceinfo.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [AV detections related to Tarrask malware](../content/microsoft-defender-xdr-av-detections-related-to-tarrask-malware-1785d372-b9fe-4283-96a6-3a1d83cabfd1-8b612d87.md) | High | Persistence | [`DeviceInfo`](../tables/deviceinfo.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [AV detections related to Ukraine threats](../content/microsoft-defender-xdr-av-detections-related-to-ukraine-threats-b6685757-3ed1-4b05-a5bd-2cacadc86c2a-396e651e.md) | High | Impact | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Account Creation](../content/microsoft-defender-xdr-account-creation-450f4e56-5bba-4070-b9d9-9204ba9d777d-b3cc4be4.md) | Medium | Persistence | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Bitsadmin Activity](../content/microsoft-defender-xdr-bitsadmin-activity-2a1dc4c2-a8d6-4a0e-8539-9b971c851195-44faa570.md) | Medium | Persistence, CommandAndControl, Exfiltration | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [C2-NamedPipe](../content/microsoft-defender-xdr-c2-namedpipe-7ce00cba-f76f-4026-ab7f-7e4f1b67bd18-5ae9733b.md) | High | CommandAndControl | [`DeviceEvents`](../tables/deviceevents.md) |
| [Clearing of forensic evidence from event logs using wevtutil](../content/microsoft-defender-xdr-clearing-of-forensic-evidence-from-event-logs-using-wevtutil-515d0bba-b297-4f83-8280-20ff7f27ecb1-b91bc0f3.md) | High | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Deimos Component Execution](../content/microsoft-defender-xdr-deimos-component-execution-c25a8cd4-5b4a-45a8-9ba0-3b753a652f6b-a4a127b5.md) | High | Execution, Collection, Exfiltration | [`DeviceEvents`](../tables/deviceevents.md) |
| [Deletion of data on multiple drives using cipher exe](../content/microsoft-defender-xdr-deletion-of-data-on-multiple-drives-using-cipher-exe-03caa992-477f-4b19-8e2a-8cd58f8f9652-a1302600.md) | Medium | Impact | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detect Potential Kerberoast Activities](../content/microsoft-defender-xdr-detect-potential-kerberoast-activities-12134de5-361b-427c-a1a0-d43f40a593c4-880800c1.md) | Medium | CredentialAccess | [`IdentityLogonEvents`](../tables/identitylogonevents.md) |
| [Detect Suspicious Commands Initiated by Webserver Processes](../content/microsoft-defender-xdr-detect-suspicious-commands-initiated-by-webserver-processes-fa2f7d8a-6726-465a-aa72-6f6e3d4c99d7-6071b885.md) | High | Execution, DefenseEvasion, Discovery | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Disabling Security Services via Registry](../content/microsoft-defender-xdr-disabling-security-services-via-registry-32b29155-3fd3-4a9e-a0ca-a67e2593b60b-e9f38271.md) | Medium | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Doppelpaymer Stop Services](../content/microsoft-defender-xdr-doppelpaymer-stop-services-5bdc1504-880c-4b30-a39c-7c746535928d-6df3ea36.md) | High | Execution, DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [DopplePaymer Procdump](../content/microsoft-defender-xdr-dopplepaymer-procdump-1be34fb9-f81b-47ae-84fb-465e6686d76c-cc25e831.md) | High | CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Execution of software vulnerable to webp buffer overflow of CVE-2023-4863](../content/microsoft-defender-xdr-execution-of-software-vulnerable-to-webp-buffer-overflow-of-cve-2023-4863-26e81021-2de6-4442-a74a-a77885e96911-15de3ea9.md) | Informational | Execution | [`DeviceEvents`](../tables/deviceevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`DeviceTvmSoftwareVulnerabilities`](../tables/devicetvmsoftwarevulnerabilities.md) |
| [Files Copied to USB Drives](../content/microsoft-defender-xdr-files-copied-to-usb-drives-3ab04acf-e0e7-4f7c-8995-748ab4c848c2-7d23d298.md) | High | Exfiltration | [`DeviceEvents`](../tables/deviceevents.md)<br>[`DeviceFileEvents`](../tables/devicefileevents.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Imminent Ransomware](../content/microsoft-defender-xdr-imminent-ransomware-bb46dd86-e642-48a4-975c-44f5ac2b5033-87169ff1.md) | High | DefenseEvasion, Persistence | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_ASim_ProcessEvent`](../asim/asimprocessevent.md) |
| [Java Executing cmd to run Powershell](../content/microsoft-defender-xdr-java-executing-cmd-to-run-powershell-2c81c0a0-9823-4a14-b21a-2b4acd3335d2-106ea66a.md) | High | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [LSASS Credential Dumping with Procdump](../content/microsoft-defender-xdr-lsass-credential-dumping-with-procdump-c332b840-61e4-462e-a201-0e2d69bad45d-36f7eb44.md) | High | CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [LaZagne Credential Theft](../content/microsoft-defender-xdr-lazagne-credential-theft-7d0d3050-8dac-4b83-bfae-902f7dc0c21c-2a344765.md) | Medium | CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Local Admin Group Changes](../content/microsoft-defender-xdr-local-admin-group-changes-63aa43c2-e88e-4102-aea5-0432851c541a-92e9a57c.md) | High | Persistence | [`DeviceEvents`](../tables/deviceevents.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [MosaicLoader](../content/microsoft-defender-xdr-mosaicloader-506f4d6b-3864-4bb1-8f75-a13fb066f97a-66639731.md) | High | DefenseEvasion | [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) |
| [Office Apps Launching Wscipt](../content/microsoft-defender-xdr-office-apps-launching-wscipt-174de33b-107b-4cd8-a85d-b4025a35453f-49a22465.md) | Medium | Execution, Collection, CommandAndControl | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Possible Phishing with CSL and Network Sessions](../content/microsoft-defender-xdr-possible-phishing-with-csl-and-network-sessions-6c3a1258-bcdd-4fcd-b753-1a9bc826ce12-631549a4.md) | Medium | InitialAccess, CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession`](../asim/imnetworksession.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`DeviceEvents`](../tables/deviceevents.md)<br>*Internal use:*<br>[`AlertEvidence`](../tables/alertevidence.md) |
| [Potential Build Process Compromise - MDE](../content/microsoft-defender-xdr-potential-build-process-compromise-mde-1bf6e165-5e32-420e-ab4f-0da8558a8be2-c676927e.md) | Medium | Persistence | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Potential Ransomware activity related to Cobalt Strike](../content/microsoft-defender-xdr-potential-ransomware-activity-related-to-cobalt-strike-4bd9ce9d-8586-4beb-8fdb-bd018cacbe7d-af20888f.md) | High | Execution, Persistence, DefenseEvasion, Impact | *Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Qakbot Campaign Self Deletion](../content/microsoft-defender-xdr-qakbot-campaign-self-deletion-47c02e21-3949-4e05-a28e-576cd75ff6f6-a7a7167c.md) | Medium | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Qakbot Discovery Activies](../content/microsoft-defender-xdr-qakbot-discovery-activies-ba9db6b2-3d05-42ae-8aee-3a15bbe29f27-5676e3c6.md) | Medium | DefenseEvasion, Discovery, Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-91a451e3-178f-41b2-9e5d-da97d75b9971-365d2f3a.md) | Medium | Persistence | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/microsoft-defender-xdr-regsvr32-rundll32-image-loads-abnormal-extension-36fbd4e7-5630-4414-aa42-702a7fdded21-4cc759a2.md) | High | DefenseEvasion | [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |
| [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-2624fc55-0998-4897-bb48-1c6422befce4-d1e3cdd5.md) | High | DefenseEvasion | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Remote File Creation with PsExec](../content/microsoft-defender-xdr-remote-file-creation-with-psexec-35ab0d58-baab-4154-87ed-fa2f69797e9e-384e377c.md) | High | LateralMovement | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [SUNBURST and SUPERNOVA backdoor hashes](../content/microsoft-defender-xdr-sunburst-and-supernova-backdoor-hashes-a3c144f9-8051-47d4-ac29-ffb0c312c910-6f0d9998.md) | High | Execution, Persistence, InitialAccess | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [SUNBURST network beacons](../content/microsoft-defender-xdr-sunburst-network-beacons-ce1e7025-866c-41f3-9b08-ec170e05e73e-b0c0854f.md) | Medium | Execution, Persistence, InitialAccess | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |
| [SUNSPOT malware hashes](../content/microsoft-defender-xdr-sunspot-malware-hashes-53e936c6-6c30-4d12-8343-b8a0456e8429-b7f28a72.md) | Medium | Persistence | [`DeviceEvents`](../tables/deviceevents.md)<br>[`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) |
| [Service Accounts Performing Remote PS](../content/microsoft-defender-xdr-service-accounts-performing-remote-ps-d29cc957-0ddb-4d00-8d6f-ad1bb345ff9a-4449216c.md) | High | LateralMovement | - |
| [Shadow Copy Deletions](../content/microsoft-defender-xdr-shadow-copy-deletions-28c63a44-2d35-48b7-831b-3ed24af17c7e-dcc95706.md) | Medium | Impact | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Stopping multiple processes using taskkill](../content/microsoft-defender-xdr-stopping-multiple-processes-using-taskkill-4dd31bd5-11a3-4b9c-a7c5-4927ab4f2a77-6e396de6.md) | Medium | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [TEARDROP memory-only dropper](../content/microsoft-defender-xdr-teardrop-memory-only-dropper-738702fd-0a66-42c7-8586-e30f0583f8fe-9b854574.md) | High | Execution, Persistence, DefenseEvasion | [`DeviceEvents`](../tables/deviceevents.md) |
| [Unusual Volume of file deletion by users](../content/microsoft-defender-xdr-unusual-volume-of-file-deletion-by-users-e5f8e196-3544-4a8b-96a9-17c1b6a49710-7af46276.md) | High | Impact | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`SigninLogs`](../tables/signinlogs.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [AIR investigation actions insight](../content/microsoft-defender-xdr-air-investigation-actions-insight-77104824-b41e-412d-8e50-26971fe97ab0-128f9b33.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [ATP policy status check](../content/microsoft-defender-xdr-atp-policy-status-check-518e6938-10ef-4165-af19-82f1287141bc-99dce879.md) | DefenseEvasion | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Account Brute Force](../content/microsoft-defender-xdr-account-brute-force-4095e430-d3f4-426f-92c5-aa5c5e137ca0-7ac90fd9.md) | - | [`DeviceLogonEvents`](../tables/devicelogonevents.md) |
| [Account Creation](../content/microsoft-defender-xdr-account-creation-d0585c34-1b03-473c-938d-11fe73f7e053-4486ca7f.md) | - | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Admin Submission Trend (FN)](../content/microsoft-defender-xdr-admin-submission-trend-fn-c51b0367-573a-42c3-a4a2-2d8b1ef6bea9-9d96e671.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submission Trend (FP)](../content/microsoft-defender-xdr-admin-submission-trend-fp-e3a11181-3ff9-4ba0-908d-3e229b476ce3-73bd2293.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by Detection Type](../content/microsoft-defender-xdr-admin-submissions-by-detection-type-8f82894a-1b18-4d1e-a580-1dcaff739a32-822ef034.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by DetectionMethod (Phish FP)](../content/microsoft-defender-xdr-admin-submissions-by-detectionmethod-phish-fp-515a98db-49a5-4592-80b7-8227998da9ed-c6d9e1ae.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by DetectionMethod (Spam FP)](../content/microsoft-defender-xdr-admin-submissions-by-detectionmethod-spam-fp-5cb9399f-e4d7-46c1-bdfa-d66eec278bf2-63e16950.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by Grading verdict (FN-FP)](../content/microsoft-defender-xdr-admin-submissions-by-grading-verdict-fn-fp-8425234b-f09d-490e-be3d-a7ecf081c5d0-817c2b20.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by Submission State (FN)](../content/microsoft-defender-xdr-admin-submissions-by-submission-state-fn-60cddbbb-2244-4a61-ad73-b20b1c6f5027-c4812a5b.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by Submission State (FP)](../content/microsoft-defender-xdr-admin-submissions-by-submission-state-fp-354d78b3-91b7-4219-9079-57e63e281077-741b14a3.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by Submission Type (FN)](../content/microsoft-defender-xdr-admin-submissions-by-submission-type-fn-a7f2dae2-2e33-4744-b013-37dc5628d939-377d80db.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by Submission Type (FP)](../content/microsoft-defender-xdr-admin-submissions-by-submission-type-fp-de074419-2ec5-4c7f-a7f6-0a49178b314c-c5fac397.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Alerts Related to Log4j Vulnerability](../content/microsoft-defender-xdr-alerts-related-to-log4j-vulnerability-e7791695-c103-4d20-a75a-53e90788616b-ae157950.md) | InitialAccess | *Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Anomalous Payload Delivered from ISO files](../content/microsoft-defender-xdr-anomalous-payload-delivered-from-iso-files-14694b88-a6e9-4cd1-9c4a-e382bdd82d8d-9bc45897.md) | Execution | [`DeviceEvents`](../tables/deviceevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Appspot Phishing Abuse](../content/microsoft-defender-xdr-appspot-phishing-abuse-cdac93ef-56c0-45bf-9e7f-9cbf0ad06808-efbaa02a.md) | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Appspot Phishing Abuse](../content/microsoft-defender-xdr-appspot-phishing-abuse-cdac93ef-56c0-45bf-9e7f-9cbf0ad06808-6602e025.md) | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Attacked more than x times average](../content/microsoft-defender-xdr-attacked-more-than-x-times-average-de480ca4-4095-4fef-b3e7-2a3f17f24e78-ec4cee0f.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Audit Email Preview-Download action](../content/microsoft-defender-xdr-audit-email-preview-download-action-ba1a91ad-1f99-4386-b191-06a76ef213f8-334fb71d.md) | PrivilegeEscalation | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Authentication failures by time and authentication type](../content/microsoft-defender-xdr-authentication-failures-by-time-and-authentication-type-7fbf7687-5ded-4c39-9fe9-f4f6aa6fc422-a410ff8f.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Automated email notifications and suspicious sign-in activity](../content/microsoft-defender-xdr-automated-email-notifications-and-suspicious-sign-in-activity-0955f477-6471-468a-9b13-fc5fa96d7db2-7722bd78.md) | InitialAccess | [`AADSignInEventsBeta`](../tables/aadsignineventsbeta.md)<br>[`EmailEvents`](../tables/emailevents.md) |
| [BEC - File sharing tactics - Dropbox](../content/microsoft-defender-xdr-bec-file-sharing-tactics-dropbox-85dea577-1c76-44ff-8cad-b47182874ddb-d6e15c9c.md) | LateralMovement | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [BEC - File sharing tactics - OneDrive or SharePoint](../content/microsoft-defender-xdr-bec-file-sharing-tactics-onedrive-or-sharepoint-da745698-da8a-40c5-b527-2e9328c2cefe-dcd744e3.md) | LateralMovement | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Bad email percentage of Inbound emails](../content/microsoft-defender-xdr-bad-email-percentage-of-inbound-emails-242561f3-568a-4864-be15-fbc85b2e77f9-3b521ce0.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Bitsadmin Activity](../content/microsoft-defender-xdr-bitsadmin-activity-bba7bbbe-5aa3-4c08-bd23-dd6cd8ccaf20-7a642ef6.md) | Persistence, CommandAndControl, Exfiltration | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Blocked Clicks Trend](../content/microsoft-defender-xdr-blocked-clicks-trend-ac738108-451b-4341-ba38-021a00665415-f9fdc910.md) ⚠️ | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Bulk Emails by Sender Bulk Complaint level](../content/microsoft-defender-xdr-bulk-emails-by-sender-bulk-complaint-level-2e903da3-32fe-46b0-8df7-5f39e55db17e-a6bce306.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [C2-NamedPipe](../content/microsoft-defender-xdr-c2-namedpipe-f78255b6-8f91-4cf3-a25c-e1144b7b5425-80263449.md) | CommandAndControl | [`DeviceEvents`](../tables/deviceevents.md) |
| [Calculate overall MDO efficacy](../content/microsoft-defender-xdr-calculate-overall-mdo-efficacy-ff56a21d-fc95-4c11-8f9d-cc59c48cd4e6-2e8ef8fb.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`EmailEvents`](../tables/emailevents.md)<br>[`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [Campaign with randomly named attachments](../content/microsoft-defender-xdr-campaign-with-randomly-named-attachments-25150085-015a-4673-9b67-bc6ad9475500-8c3fd9dd.md) | InitialAccess | [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) |
| [Campaign with suspicious keywords](../content/microsoft-defender-xdr-campaign-with-suspicious-keywords-9b086a51-e396-4718-90d7-f7b3646e6581-cc3c8c2c.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Check for multiple signs of Ransomware Activity](../content/microsoft-defender-xdr-check-for-multiple-signs-of-ransomware-activity-4f669adc-2c00-4bc8-896b-e59f068dcb18-164f406c.md) | Execution, Impact, Exfiltration | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Clear System Logs](../content/microsoft-defender-xdr-clear-system-logs-6284b962-ab0d-46d8-a47f-1eb1ac1be463-c8af8f2d.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Clearing of forensic evidence from event logs using wevtutil](../content/microsoft-defender-xdr-clearing-of-forensic-evidence-from-event-logs-using-wevtutil-3dd9ab09-0ea3-4f47-ba10-f84045ab52c3-f7cf440c.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [CompAuth Failure Trend](../content/microsoft-defender-xdr-compauth-failure-trend-eb560458-d96f-4c68-acbb-14b3c706ebe7-1841f166.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Credential Harvesting Using LaZagne](../content/microsoft-defender-xdr-credential-harvesting-using-lazagne-79f9bb6b-6d31-412e-b3bc-6e5ad1303112-a9fbb57d.md) | CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Custom detection-Emails with QR from non-prevalent senders](../content/microsoft-defender-xdr-custom-detection-emails-with-qr-from-non-prevalent-senders-516046e8-a460-4f7b-86eb-421d3a9cdff1-81600dc7.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md)<br>[`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [DKIM Failure Trend](../content/microsoft-defender-xdr-dkim-failure-trend-14d47b2a-62b3-4c7b-819c-699e264c581d-01837526.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [DLLHost.exe WMIC domain discovery](../content/microsoft-defender-xdr-dllhost.exe-wmic-domain-discovery-f086d58b-c44b-4fae-903b-f65ad042a4ee-83b2c14e.md) | Reconnaissance | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [DMARC Failure Trend](../content/microsoft-defender-xdr-dmarc-failure-trend-62d6a2e6-4583-4538-a476-a5b3c672657b-ff4453e5.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Deimos Component Execution](../content/microsoft-defender-xdr-deimos-component-execution-fe9edc77-1b6c-4f1e-a223-64b580b50187-8ca8263a.md) | Execution, Collection, Exfiltration, Impact | [`DeviceEvents`](../tables/deviceevents.md) |
| [Deletion of data on multiple drives using cipher exe](../content/microsoft-defender-xdr-deletion-of-data-on-multiple-drives-using-cipher-exe-cb2fb8f9-89bd-485e-8422-da8cb6c7bc23-f8c40db4.md) | Impact | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detect CISA Alert (AA22-117A) 2021 Top Routinely Exploited Vulnerabilities](../content/microsoft-defender-xdr-detect-cisa-alert-aa22-117a-2021-top-routinely-exploited-vulnerabilities-180bacfd-18de-450a-8e0c-7d2fa399ca49-875b2843.md) | Execution | [`DeviceTvmSoftwareVulnerabilitiesKB`](../tables/devicetvmsoftwarevulnerabilitieskb.md) |
| [Detect MaiSniper](../content/microsoft-defender-xdr-detect-maisniper-e17ddfc6-7478-443b-99ff-286f3d09b8aa-ab6dfb83.md) | InitialAccess, CredentialAccess, Collection, Exfiltration | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detect Malicious use of MSIExec](../content/microsoft-defender-xdr-detect-malicious-use-of-msiexec-7a5597de-7e99-470d-944f-acb163b9cb14-a76d8af7.md) | Execution, PrivilegeEscalation, CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detect Malicious use of Msiexec Mimikatz](../content/microsoft-defender-xdr-detect-malicious-use-of-msiexec-mimikatz-58e6170e-0512-4485-9638-463fdde85b0e-0de34535.md) | Execution, CredentialAccess, PrivilegeEscalation | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detect Potential kerberoast Activities](../content/microsoft-defender-xdr-detect-potential-kerberoast-activities-35ca729c-04b4-4f6c-b383-caed1b85226e-9755135a.md) | LateralMovement | [`IdentityLogonEvents`](../tables/identitylogonevents.md) |
| [Detect Suspicious Commands Initiated by Webserver Processes](../content/microsoft-defender-xdr-detect-suspicious-commands-initiated-by-webserver-processes-fa2f7d8a-6726-465a-aa72-6f6e3d4c99d7-f6d9e7c9.md) | Execution, DefenseEvasion, Discovery | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detect Suspicious Mshta Usage](../content/microsoft-defender-xdr-detect-suspicious-mshta-usage-81f02314-2ff5-45cb-a35d-0deb546a0104-6bc93255.md) | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detections by detection methods](../content/microsoft-defender-xdr-detections-by-detection-methods-1c51e10e-7f77-40bc-bd37-6aa55cdf94d6-21b75b24.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Determine Successfully Delivered Phishing Emails by top IP Addresses](../content/microsoft-defender-xdr-determine-successfully-delivered-phishing-emails-by-top-ip-addresses-cdac93ef-56c0-45bf-9e7f-9cbf0ad06567-4ea19d0e.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Determine Successfully Delivered Phishing Emails to Inbox/Junk folder.](../content/microsoft-defender-xdr-determine-successfully-delivered-phishing-emails-to-inbox-junk-folder.-cdac93ef-56c0-45bf-9e7f-9cbf0ad06123-2bab1379.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Devices with Log4j vulnerability alerts and additional other alert related context](../content/microsoft-defender-xdr-devices-with-log4j-vulnerability-alerts-and-additional-other-alert-related-contex-8fe88892-3a55-4220-9141-939a8e7a15c5-0d5237c7.md) | InitialAccess, Execution | *Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Disabling Services via Registry](../content/microsoft-defender-xdr-disabling-services-via-registry-06ea5081-cdea-40c8-b829-240ece951243-b119d09b.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Display Name - Spoof and Impersonation](../content/microsoft-defender-xdr-display-name-spoof-and-impersonation-6a570927-8638-4a6f-ac09-72a7d51ffa3c-d274f21b.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Doppelpaymer Stop Services](../content/microsoft-defender-xdr-doppelpaymer-stop-services-abf42310-51c7-4d7f-98d2-e5af09859aab-837c2062.md) | Execution, DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [DopplePaymer Procdump](../content/microsoft-defender-xdr-dopplepaymer-procdump-89b31213-4350-4730-8d27-26667ce53894-14013cca.md) | CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Dropping Payload via certutil](../content/microsoft-defender-xdr-dropping-payload-via-certutil-4d11f63f-5b64-416e-8d77-266e4c6d382e-5c641ea8.md) | InitialAccess, DefenseEvasion | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Email Top 10 Domains sending Spam](../content/microsoft-defender-xdr-email-top-10-domains-sending-spam-6fe463ca-4cd3-4d97-a099-6b736f28a128-bdb32e31.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Email Top 10 Targeted Users (Spam)](../content/microsoft-defender-xdr-email-top-10-targeted-users-spam-9e4b7553-1113-4d40-bb6b-7daca7d7d255-448bdc2d.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Email Top 15 Domains sending Spam with Additional Details](../content/microsoft-defender-xdr-email-top-15-domains-sending-spam-with-additional-details-c03e13ee-0e7a-4d05-b3f4-790b01bb30a5-d9218166.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Email Top 15 Targeted Users (Spam) with Additional Details](../content/microsoft-defender-xdr-email-top-15-targeted-users-spam-with-additional-details-86f2b124-8caf-4b53-845a-87de3ffccbdf-22e01ae8.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Email Top Domains sending Malware](../content/microsoft-defender-xdr-email-top-domains-sending-malware-a2a7bede-cf55-47ed-9aeb-7b4c97079f4f-512f33b8.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Email Top Domains sending Phish](../content/microsoft-defender-xdr-email-top-domains-sending-phish-0b197e26-7899-47ff-9be9-f7ba6dc949ea-f793c65e.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Email bombing attacks](../content/microsoft-defender-xdr-email-bombing-attacks-c1cac5ad-7aaa-40de-89aa-954f5a33a578-84420089.md) | Initial access | [`EmailEvents`](../tables/emailevents.md) |
| [Email containing malware accessed on a unmanaged device](../content/microsoft-defender-xdr-email-containing-malware-accessed-on-a-unmanaged-device-439f817c-845c-4dda-a8d9-5c1f6831cee9-3e8d09b8.md) | Execution | [`AADSignInEventsBeta`](../tables/aadsignineventsbeta.md)<br>[`CloudAppEvents`](../tables/cloudappevents.md)<br>[`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [Email containing malware sent by an internal sender](../content/microsoft-defender-xdr-email-containing-malware-sent-by-an-internal-sender-07c85687-6dee-4266-9345-1e34de85d989-56ad4103.md) | LateralMovement | [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md)<br>[`EmailEvents`](../tables/emailevents.md) |
| [Email malware detection report](../content/microsoft-defender-xdr-email-malware-detection-report-23dbd58b-23ce-42ae-b4d1-0dfdd35871ea-8e5c7329.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Email sender IP address Geo location information](../content/microsoft-defender-xdr-email-sender-ip-address-geo-location-information-0d5ae69d-bdb2-404d-8c8c-50ebe68b6a5b-ee4c8459.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Emails containing links to IP addresses](../content/microsoft-defender-xdr-emails-containing-links-to-ip-addresses-8e9a96dd-f85d-4f5e-a65f-dcc55d6d9935-e07d1933.md) | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Emails delivered having URLs from QR codes](../content/microsoft-defender-xdr-emails-delivered-having-urls-from-qr-codes-594fe5a1-53b6-466b-86df-028366c3994e-8eabe795.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Emails with QR codes and suspicious keywords in subject](../content/microsoft-defender-xdr-emails-with-qr-codes-and-suspicious-keywords-in-subject-706b711a-7622-40f1-9ebb-331d1a0ff697-e2945df9.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Emails with QR codes from non-prevalent sender](../content/microsoft-defender-xdr-emails-with-qr-codes-from-non-prevalent-sender-f708c866-073a-4107-a60b-ba6f86e54caa-755a4381.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [End user malicious clicks](../content/microsoft-defender-xdr-end-user-malicious-clicks-d24e9c4a-b72a-4a85-89cd-83760ae61155-9c8f1743.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Enumeration of Users & Groups for Lateral Movement](../content/microsoft-defender-xdr-enumeration-of-users-&-groups-for-lateral-movement-29683151-e15d-4c0c-845b-892be89bf080-776e21b6.md) | - | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Expanding recipients into separate rows](../content/microsoft-defender-xdr-expanding-recipients-into-separate-rows-18fee342-8209-4270-9198-711646867e71-6a409deb.md) ⚠️ | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [External malicious Teams messages sent from internal senders](../content/microsoft-defender-xdr-external-malicious-teams-messages-sent-from-internal-senders-9cb4a6eb-c7ae-44ac-b12b-c16ec63da385-04ef94f1.md) ⚠️ | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [File Malware Detection Trend](../content/microsoft-defender-xdr-file-malware-detection-trend-817043be-4b30-4e66-a742-8f601a78b08f-46ed5e59.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [File Malware by Top Malware Families (Anti Virus)](../content/microsoft-defender-xdr-file-malware-by-top-malware-families-anti-virus-a924de5a-89ce-43c7-8adc-b130e5f1924c-678bcc36.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [File Malware by Top Malware Families (Safe Attachments)](../content/microsoft-defender-xdr-file-malware-by-top-malware-families-safe-attachments-2de2de5d-87a3-4e13-9b97-5f42e44d0954-11fa443b.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Files Copied to USB Drives](../content/microsoft-defender-xdr-files-copied-to-usb-drives-f350f0e7-0e52-434c-a113-197883219f00-69c4055e.md) | Exfiltration | [`DeviceEvents`](../tables/deviceevents.md)<br>[`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Files share contents and suspicious sign-in activity](../content/microsoft-defender-xdr-files-share-contents-and-suspicious-sign-in-activity-11cc0e3f-9718-4ab5-be7b-d9c036ed6b0a-233ec5bb.md) | InitialAccess | [`AADSignInEventsBeta`](../tables/aadsignineventsbeta.md)<br>[`EmailEvents`](../tables/emailevents.md) |
| [Good emails from senders with bad patterns](../content/microsoft-defender-xdr-good-emails-from-senders-with-bad-patterns-e6259b03-622e-4e11-9c54-94987dad7c14-7456ce2d.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Group quarantine release](../content/microsoft-defender-xdr-group-quarantine-release-a12cac64-ea6d-46d4-91a6-262b165fb9ad-e8d4ae12.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [High Confidence Phish Released](../content/microsoft-defender-xdr-high-confidence-phish-released-9e8faa62-7222-48a5-a78f-ef2d22f866dc-1957e796.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`EmailEvents`](../tables/emailevents.md) |
| [Hunt for Admin email access](../content/microsoft-defender-xdr-hunt-for-admin-email-access-e55e178e-48ba-4313-918a-2d3e16a95441-f6af219e.md) ⚠️ | PrivilegeEscalation | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Hunt for TABL changes](../content/microsoft-defender-xdr-hunt-for-tabl-changes-bc2d8214-afb6-4876-b210-25b69325b9b2-61da6233.md) | DefenseEvasion | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Hunt for email bombing attacks](../content/microsoft-defender-xdr-hunt-for-email-bombing-attacks-dd4a480b-aa24-4b62-b1f3-f538d8abbdfb-5261bafb.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Hunt for email conversation take over attempts](../content/microsoft-defender-xdr-hunt-for-email-conversation-take-over-attempts-fb46ca1b-0b46-4d9c-b3b3-2f8f807e9f72-2af16c6e.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Hunt for malicious URLs using external IOC source](../content/microsoft-defender-xdr-hunt-for-malicious-urls-using-external-ioc-source-57f95ba7-938d-4a76-b411-c01034c0d167-96846dc9.md) | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Hunt for malicious attachments using external IOC source](../content/microsoft-defender-xdr-hunt-for-malicious-attachments-using-external-ioc-source-0da830c3-5d0e-4b98-bfa1-d5131a8d0ebe-4ace8da6.md) | InitialAccess | [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) |
| [Hunt for malicious messages using External Threat Intelligence](../content/microsoft-defender-xdr-hunt-for-malicious-messages-using-external-threat-intelligence-28c79831-120c-4028-8a2b-4e4ae3082148-7fefb5f5.md) ⚠️ | InitialAccess | [`MessageUrlInfo`](../tables/messageurlinfo.md) |
| [Hunting for sender patterns](../content/microsoft-defender-xdr-hunting-for-sender-patterns-68aa199c-259b-4bb0-8e7a-8ed6f96c5525-4214a903.md) | InitialAccess | [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md)<br>[`EmailEvents`](../tables/emailevents.md) |
| [Hunting for user signals-clusters](../content/microsoft-defender-xdr-hunting-for-user-signals-clusters-8c852f12-499f-499b-afc1-25c50aa9b462-97023f5f.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Imminent Ransomware](../content/microsoft-defender-xdr-imminent-ransomware-846bf25e-3d2d-4122-9b60-adfadd2fc616-8ac809d0.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Impersonation Detections Trend](../content/microsoft-defender-xdr-impersonation-detections-trend-416cd270-6327-441a-9304-940c832cf361-79ee8cd4.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Impersonation Detections by Detection Technology](../content/microsoft-defender-xdr-impersonation-detections-by-detection-technology-15a17150-811d-4829-a3d6-489139c9ff5e-b3543837.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Impersonation Detections by Detection Technology Trend](../content/microsoft-defender-xdr-impersonation-detections-by-detection-technology-trend-418e8859-b22a-4fd4-b273-5433e054cdc7-b6bf2fd7.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Inbound Teams messages by sender domains](../content/microsoft-defender-xdr-inbound-teams-messages-by-sender-domains-f304b75a-a2a0-45fb-814c-40b6e08211f0-46960408.md) ⚠️ | DefenseEvasion | [`MessageEvents`](../tables/messageevents.md) |
| [Inbound emails with QR code URLs](../content/microsoft-defender-xdr-inbound-emails-with-qr-code-urls-f6354c94-3a95-4235-8530-414f016a7bf6-b653a9db.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Inbox rule changes which forward-redirect email](../content/microsoft-defender-xdr-inbox-rule-changes-which-forward-redirect-email-54569b06-47fc-41ae-9b00-f7d9b61337b6-8075b72d.md) | Persistence | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [JNLP-File-Attachment](../content/microsoft-defender-xdr-jnlp-file-attachment-b6392f39-a1f4-4ec8-8689-4cb9d28c295a-a5972f2c.md) | InitialAccess | [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) |
| [Java Executing cmd to run Powershell](../content/microsoft-defender-xdr-java-executing-cmd-to-run-powershell-a18e8bcf-e05d-4e45-bc6e-2c5004729fbd-5f3d8e5c.md) | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Judgement Panda Exfil Activity](../content/microsoft-defender-xdr-judgement-panda-exfil-activity-d7b7dcad-d806-4a61-b8fc-0d7c9c45bdec-328fcbc7.md) | Collection | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [LSASS Credential Dumping with Procdump](../content/microsoft-defender-xdr-lsass-credential-dumping-with-procdump-0b985ed8-aacd-41ba-9b17-489be9224159-bfd6b1c4.md) | CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [LaZagne Credential Theft](../content/microsoft-defender-xdr-lazagne-credential-theft-829cf5ba-39d5-4986-814e-d46f8437c27b-582ee4d3.md) | CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [LemonDuck Registration Function](../content/microsoft-defender-xdr-lemonduck-registration-function-147c4c0a-7241-4ce9-9b71-0aecb8a2b59f-ddd37db7.md) | Execution, Persistence, LateralMovement, CommandAndControl | [`DeviceEvents`](../tables/deviceevents.md) |
| [Listing Email Remediation Actions via Explorer](../content/microsoft-defender-xdr-listing-email-remediation-actions-via-explorer-99713387-9d61-49eb-8edc-f51153d8bb01-83aba0f4.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Local Admin Group Changes](../content/microsoft-defender-xdr-local-admin-group-changes-63142c12-5d8b-48cf-a0f6-b523c855497c-cbc59b70.md) | Persistence | [`DeviceEvents`](../tables/deviceevents.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Local time to UTC time conversion](../content/microsoft-defender-xdr-local-time-to-utc-time-conversion-712ffdd8-ddce-4372-85dd-063029b418cf-7ff7492c.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [MDO Threat Protection Detections trend over time](../content/microsoft-defender-xdr-mdo-threat-protection-detections-trend-over-time-eb0e4edb-f423-49f8-a02a-4ededdd30dd5-227c1309.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`EmailEvents`](../tables/emailevents.md)<br>[`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [MDO daily detection summary report](../content/microsoft-defender-xdr-mdo-daily-detection-summary-report-deb4b2c6-c10e-4044-8cf4-84243e40db73-ce48d397.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`EmailEvents`](../tables/emailevents.md)<br>[`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md)<br>*Internal use:*<br>[`AlertEvidence`](../tables/alertevidence.md) |
| [MDO_CountOfRecipientsEmailaddressbySubject](../content/microsoft-defender-xdr-mdo-countofrecipientsemailaddressbysubject-430a9c0d-f3ce-46a3-a994-92b3ada0d1b2-813e0447.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [MDO_CountOfSendersEmailaddressbySubject](../content/microsoft-defender-xdr-mdo-countofsendersemailaddressbysubject-b95994d1-1008-4c42-a74f-9f2967e39ed6-c65932d4.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [MDO_Countofrecipientsemailaddressesbysubject](../content/microsoft-defender-xdr-mdo-countofrecipientsemailaddressesbysubject-f840db5b-87c9-43c8-a8c3-5b6b83838cd4-bb7d95e8.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [MDO_SummaryOfSenders](../content/microsoft-defender-xdr-mdo-summaryofsenders-a96c1571-1f7d-48dc-8287-7df5a5f0d987-62a8cab2.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [MDO_URLClickedinEmail](../content/microsoft-defender-xdr-mdo-urlclickedinemail-2c6e7f75-d83c-4344-afdc-83335fe550e6-75ab3207.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [MITRE - Suspicious Events](../content/microsoft-defender-xdr-mitre-suspicious-events-8722489a-d6f1-4b66-98e9-e3dfda902019-d9aac0e5.md) | - | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Mail item accessed](../content/microsoft-defender-xdr-mail-item-accessed-81ede5df-2ec3-40a5-9dff-1fe6a841079d-2af7c70a.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Mail reply to new domain](../content/microsoft-defender-xdr-mail-reply-to-new-domain-da7b973a-0045-4fd6-9161-269369336d24-1557177d.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Mailflow by directionality](../content/microsoft-defender-xdr-mailflow-by-directionality-6b478186-da3b-4d71-beaa-aa5b42908499-591b76c4.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malicious Clicks allowed (click-through)](../content/microsoft-defender-xdr-malicious-clicks-allowed-click-through-ba4f7e56-a2f8-4a30-b848-200fdc7fc3a2-d64cdc32.md) ⚠️ | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Malicious Emails with QR code Urls](../content/microsoft-defender-xdr-malicious-emails-with-qr-code-urls-13260191-fb10-4a36-9ca1-2bbc0aaf77d0-bb5decee.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md)<br>[`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Malicious Teams messages by URL detection methods](../content/microsoft-defender-xdr-malicious-teams-messages-by-url-detection-methods-b3470167-2608-44a2-bd2f-8ebad88a27d5-1e9e7e62.md) ⚠️ | DefenseEvasion | [`MessageEvents`](../tables/messageevents.md) |
| [Malicious Teams messages received from external senders](../content/microsoft-defender-xdr-malicious-teams-messages-received-from-external-senders-3cb281a9-34e5-4864-8303-6c07e096818b-7bf50244.md) ⚠️ | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Malicious URL Clicks by workload](../content/microsoft-defender-xdr-malicious-url-clicks-by-workload-c2b4ef3a-216d-4506-8b35-6a1b0f2a3bf7-d5719131.md) ⚠️ | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Malicious Use of MSBuild as LOLBin](../content/microsoft-defender-xdr-malicious-use-of-msbuild-as-lolbin-1850a459-b009-43d0-a575-8284b737eef8-536fff50.md) | CommandAndControl | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Malicious email senders](../content/microsoft-defender-xdr-malicious-email-senders-63c799bc-7567-4e4d-97be-e143fcfaa333-61f140c0.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malicious emails detected per day](../content/microsoft-defender-xdr-malicious-emails-detected-per-day-da932998-81dd-4be4-963c-f4890cb4192e-36e0d54a.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malicious mails by sender IPs](../content/microsoft-defender-xdr-malicious-mails-by-sender-ips-a8ccbf35-4c6d-4a8f-8c42-04fd9b000a27-b1c02a72.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malware Detections Trend](../content/microsoft-defender-xdr-malware-detections-trend-e1dbe1d2-785a-4ecd-a1c0-233fc0e990bc-43903146.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malware Detections by Detection technology](../content/microsoft-defender-xdr-malware-detections-by-detection-technology-15d255f7-57a6-4b23-bd89-376930d3a305-149bc998.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malware Detections by Detection technology Trend](../content/microsoft-defender-xdr-malware-detections-by-detection-technology-trend-db79eb5a-785a-400a-a7ef-7285dde8e116-0c62c2fd.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malware Detections by delivery location](../content/microsoft-defender-xdr-malware-detections-by-delivery-location-b3a4b803-06f6-46d8-9220-b3a53e85ce4f-d52dc5b0.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malware detections by Workload Locations](../content/microsoft-defender-xdr-malware-detections-by-workload-locations-ef29d6b6-9192-46aa-b16a-082c2da2f78f-1fe5ecb9.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Malware detections by Workload Type](../content/microsoft-defender-xdr-malware-detections-by-workload-type-af541ae2-9bb4-4737-a8ea-4fa261bc3866-14585ca9.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Message from an Accepted Domain with DMARC TempError](../content/microsoft-defender-xdr-message-from-an-accepted-domain-with-dmarc-temperror-4c021477-38f0-409e-869b-11056fcd47f1-d9274983.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Message with URL listed on OpenPhish delivered into Inbox](../content/microsoft-defender-xdr-message-with-url-listed-on-openphish-delivered-into-inbox-a8c66aec-2000-45d8-8481-36aaa17f1033-65f2779d.md) ⚠️ | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Microsoft Teams chat initiated by a suspicious external user](../content/microsoft-defender-xdr-microsoft-teams-chat-initiated-by-a-suspicious-external-user-b8eb3e2e-0f95-458e-b6d1-fe36a0ee8310-2a289095.md) ⚠️ | InitialAccess | *Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [MosaicLoader](../content/microsoft-defender-xdr-mosaicloader-0efbcea0-1dc0-4844-8a9c-3a1d98fc1697-1d4d4510.md) | CommandAndControl | [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) |
| [New TABL Items](../content/microsoft-defender-xdr-new-tabl-items-92b76a34-502e-4a53-93ec-9fc37c3b358c-979994c7.md) | DefenseEvasion | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Number of unique accounts performing Teams message Admin submissions](../content/microsoft-defender-xdr-number-of-unique-accounts-performing-teams-message-admin-submissions-dc230eec-acc2-482f-8601-25125c8ff122-d6ba0e2a.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Number of unique accounts performing Teams message User  submissions](../content/microsoft-defender-xdr-number-of-unique-accounts-performing-teams-message-user-submissions-489ad959-48eb-4c34-bed6-764cfd39214d-5f3551da.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Office Apps Launching Wscipt](../content/microsoft-defender-xdr-office-apps-launching-wscipt-fe912310-32f5-4256-933b-d4b45e7e6e54-b7198749.md) | LateralMovement, Collection, CommandAndControl | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Personalized campaigns based on the first few keywords](../content/microsoft-defender-xdr-personalized-campaigns-based-on-the-first-few-keywords-dc7e1eb5-16f5-4ad5-96a1-794970f4b310-f89f40bb.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Personalized campaigns based on the last few keywords](../content/microsoft-defender-xdr-personalized-campaigns-based-on-the-last-few-keywords-54d3455d-27e0-4ceb-99f9-375abd620151-91a07d51.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Phish Detections (High) by delivery location](../content/microsoft-defender-xdr-phish-detections-high-by-delivery-location-76c77c8a-bd2a-489a-af52-97291211e4e4-3e94b5c1.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Phish Detections (Normal) by delivery location](../content/microsoft-defender-xdr-phish-detections-normal-by-delivery-location-4d86021c-cad7-489b-a8c8-dddecb87a2ef-ba0f6a21.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Phish Detections Trend](../content/microsoft-defender-xdr-phish-detections-trend-fbe7a9d2-507e-4974-9e9a-d1cba3907f67-9ce7f42d.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Phish Detections by Detection technology](../content/microsoft-defender-xdr-phish-detections-by-detection-technology-4c30fab1-db4f-4a64-b66b-51478e43a477-bb67d7c0.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Phish Detections by Detection technology Trend](../content/microsoft-defender-xdr-phish-detections-by-detection-technology-trend-dd6efecd-7fe5-41b1-a122-8e0a15de9451-12c632c4.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Phish Detections by delivery location trend](../content/microsoft-defender-xdr-phish-detections-by-delivery-location-trend-b20e56b8-e335-43d9-b7b3-43c034c43aea-304b06c0.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [PhishingEmailUrlRedirector (1)](../content/microsoft-defender-xdr-phishingemailurlredirector-1-08aff8c6-b983-43a3-be95-68a10c3d35e6-edcd3f18.md) | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Possible Teams phishing activity](../content/microsoft-defender-xdr-possible-teams-phishing-activity-01cf63bd-debd-4d03-847c-d19c31844501-3b0f03e4.md) ⚠️ | InitialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Possible device code phishing attempts](../content/microsoft-defender-xdr-possible-device-code-phishing-attempts-ad76e484-f159-4d23-99ee-e734f0b8b60b-1166f1fb.md) ⚠️ | InitialAccess | [`AADSignInEventsBeta`](../tables/aadsignineventsbeta.md)<br>[`UrlClickEvents`](../tables/urlclickevents.md) |
| [Possible partner impersonation in external Team messages](../content/microsoft-defender-xdr-possible-partner-impersonation-in-external-team-messages-f094e9f1-2d55-450d-af1a-0fdcd290f8c4-38f8b481.md) ⚠️ | DefenseEvasion | [`MessageEvents`](../tables/messageevents.md) |
| [Post Delivery Events by Admin](../content/microsoft-defender-xdr-post-delivery-events-by-admin-21bafecb-ae8f-4667-b7d6-144e047cb602-48001463.md) ⚠️ | InitialAccess | [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [Post Delivery Events by Location](../content/microsoft-defender-xdr-post-delivery-events-by-location-5e8d5202-ffdc-4d16-ad33-d56eb319c175-052dc420.md) ⚠️ | InitialAccess | [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [Post Delivery Events by ZAP type](../content/microsoft-defender-xdr-post-delivery-events-by-zap-type-dbc25434-bbe7-4517-bf4b-48ad9cb4e980-df5b298c.md) ⚠️ | InitialAccess | [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [Post Delivery Events over time](../content/microsoft-defender-xdr-post-delivery-events-over-time-dd9df55e-79b7-48e0-9d19-965fcadae5e9-3388eb0e.md) ⚠️ | InitialAccess | [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [Potential OAuth phishing email delivered into Inbox](../content/microsoft-defender-xdr-potential-oauth-phishing-email-delivered-into-inbox-08113d6f-3c95-45ba-94df-4fdd7f35d944-29c878e2.md) ⚠️ | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Potential Ransomware activity related to Cobalt Strike](../content/microsoft-defender-xdr-potential-ransomware-activity-related-to-cobalt-strike-74cc0176-3900-440e-b179-45d6a957145a-62723a0f.md) | Execution, Persistence | *Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Potentially malicious URL click in Teams](../content/microsoft-defender-xdr-potentially-malicious-url-click-in-teams-8d25156b-2ac4-4528-b1b1-f8427267f9f2-e9efebeb.md) ⚠️ | InitialAccess | [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) |
| [Potentially malicious svg file delivered to Inbox](../content/microsoft-defender-xdr-potentially-malicious-svg-file-delivered-to-inbox-1b56831b-3713-4c9c-ac75-a7e330623076-ce5f2d67.md) ⚠️ | InitialAccess | [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) |
| [PowerShell Downloads](../content/microsoft-defender-xdr-powershell-downloads-3842e70d-45be-43b1-8206-4ebc4c305f34-740af97e.md) | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [PowerShell adding exclusion path for Microsoft Defender of ProgramData](../content/microsoft-defender-xdr-powershell-adding-exclusion-path-for-microsoft-defender-of-programdata-88707168-d4a4-4ca7-a516-b2ee0310af1b-015fc198.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [PrintNightmare CVE-2021-1675 usage Detection](../content/microsoft-defender-xdr-printnightmare-cve-2021-1675-usage-detection-8f404352-c4ff-44d1-8d70-c50ee2fad8f8-b52df162.md) | PrivilegeEscalation, LateralMovement, Execution | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Qakbot Campaign Self Deletion](../content/microsoft-defender-xdr-qakbot-campaign-self-deletion-63ecff0f-3a86-468b-8c9e-a7a88fe33ebb-060f18ee.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Qakbot Discovery Activies](../content/microsoft-defender-xdr-qakbot-discovery-activies-e18109aa-f252-48ec-b115-1b7c16e1174f-741aed07.md) | DefenseEvasion, Discovery, Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Qakbot Reconnaissance Activities](../content/microsoft-defender-xdr-qakbot-reconnaissance-activities-d6991ef1-b225-4780-b6a6-cfe9b5278f5e-9d2f618d.md) | Discovery | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Quarantine Phish Reason](../content/microsoft-defender-xdr-quarantine-phish-reason-36cf7ce5-7264-46d9-9f47-57b59049b44f-2c7a4748.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Quarantine Phish Reason trend](../content/microsoft-defender-xdr-quarantine-phish-reason-trend-79bed402-09bc-453b-ab92-8b1411e683fa-9b772a7d.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Quarantine Release Email Details](../content/microsoft-defender-xdr-quarantine-release-email-details-6f96f6d7-d972-421e-a59f-6b9a8de81324-190bb1b5.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`EmailEvents`](../tables/emailevents.md) |
| [Quarantine Spam Reason](../content/microsoft-defender-xdr-quarantine-spam-reason-bde9d9fc-e166-4628-91f7-fb86ace93af0-47e9e0b8.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Quarantine Spam Reason trend](../content/microsoft-defender-xdr-quarantine-spam-reason-trend-32a981ad-cd5a-4d80-8c6c-d59b9893c019-af7b470d.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Quarantine release trend](../content/microsoft-defender-xdr-quarantine-release-trend-9f135aef-ad25-4df2-bdab-8399978a36a2-1547d717.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Quarantine releases by Detection Types](../content/microsoft-defender-xdr-quarantine-releases-by-detection-types-23e6d66b-511a-43fd-9863-6924da60319a-0411faf3.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md)<br>[`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [Rare Domains in External Teams Messages](../content/microsoft-defender-xdr-rare-domains-in-external-teams-messages-b2a36ca5-b6a4-4f27-a7d8-7f044885cccf-6bbf2e28.md) ⚠️ | InitialAccess, Execution | [`MessageEvents`](../tables/messageevents.md)<br>[`MessageUrlInfo`](../tables/messageurlinfo.md)<br>[`UrlClickEvents`](../tables/urlclickevents.md) |
| [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-96976bb1-1993-45b8-a477-8236ee93976b-cf1c1157.md) | Persistence | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Recon with Rundll](../content/microsoft-defender-xdr-recon-with-rundll-76c14475-9a22-4cc1-922c-437d7f614a36-e593fe5e.md) | Discovery, Collection, CommandAndControl | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |
| [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/microsoft-defender-xdr-regsvr32-rundll32-image-loads-abnormal-extension-b1f8aac2-766d-47ec-8787-84bc7692ff77-8be87cf1.md) | DefenseEvasion | [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |
| [Regsvr32 Rundll32 with Anomalous Parent Process](../content/microsoft-defender-xdr-regsvr32-rundll32-with-anomalous-parent-process-54ea2379-28e7-48e1-8dfd-aaf8fb1331ba-f2e2f8cf.md) | DefenseEvasion | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Remote File Creation with PsExec](../content/microsoft-defender-xdr-remote-file-creation-with-psexec-a7214393-9da7-432e-9b41-fb02b4f740bd-db6b196f.md) | LateralMovement | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Risky sign-in attempt from a non-managed device](../content/microsoft-defender-xdr-risky-sign-in-attempt-from-a-non-managed-device-8d298b5c-feca-4add-bd42-e43e0a317a88-e5e2a978.md) | InitialAccess | [`AADSignInEventsBeta`](../tables/aadsignineventsbeta.md) |
| [Robbinhood Driver](../content/microsoft-defender-xdr-robbinhood-driver-4713d763-122d-419c-bf6f-bdef111cd8e2-6f03bc00.md) | Execution, DefenseEvasion | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [SAM Name Change CVE-2021-42278](../content/microsoft-defender-xdr-sam-name-change-cve-2021-42278-1299962c-804e-459a-8d3d-41d68bc45ba2-fdacc34d.md) | PrivilegeEscalation, Vulnerability | [`IdentityDirectoryEvents`](../tables/identitydirectoryevents.md) |
| [SPF Failure Trend](../content/microsoft-defender-xdr-spf-failure-trend-79755078-7be8-4f13-a8e7-1ce87cb7d5c0-c89e8f51.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Safe Attachments detections](../content/microsoft-defender-xdr-safe-attachments-detections-16eda414-1550-4cdc-8512-0769901d3f05-5b330159.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [SafeLinks URL detections](../content/microsoft-defender-xdr-safelinks-url-detections-492f1ea1-37c3-410a-a2f2-4e4eae2ff7f9-bb043a0c.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Scheduled Task Creation](../content/microsoft-defender-xdr-scheduled-task-creation-1ddee78f-7508-4f4a-9b6b-d2927724217d-545713ce.md) | Persistence | [`DeviceEvents`](../tables/deviceevents.md) |
| [Sender recipient contact establishment](../content/microsoft-defender-xdr-sender-recipient-contact-establishment-b2beec6a-2c1c-4319-a191-e70c2ee42857-9e7a5fbe.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Service Accounts Performing Remote PS](../content/microsoft-defender-xdr-service-accounts-performing-remote-ps-cedc5bfa-01f6-4e54-b87b-1edbe430e27a-710fd8d7.md) | LateralMovement | - |
| [Shadow Copy Deletions](../content/microsoft-defender-xdr-shadow-copy-deletions-aa3a8508-c0ff-404d-8d5c-4e7f548b0d86-2314d5da.md) | Impact | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Snip3 Malicious Network Connectivity](../content/microsoft-defender-xdr-snip3-malicious-network-connectivity-b3470e40-39ae-4c28-9282-440038f6f964-47add26a.md) | CommandAndControl, Exfiltration | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |
| [Spam Detections (High) by delivery location](../content/microsoft-defender-xdr-spam-detections-high-by-delivery-location-45c47684-6650-44b6-81c0-951522d0c435-82785140.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam Detections (Normal) by delivery location](../content/microsoft-defender-xdr-spam-detections-normal-by-delivery-location-99e1246e-c1a9-4794-8e96-eb906c73c529-4b13c7ce.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam Detections by Detection technology](../content/microsoft-defender-xdr-spam-detections-by-detection-technology-16cfa413-238f-4355-9f8a-4b97ce7572ac-c675f0ec.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam and Phish allowed to inbox by Admin Overrides](../content/microsoft-defender-xdr-spam-and-phish-allowed-to-inbox-by-admin-overrides-02e237ed-f7b5-49dd-92e6-1b340d5e37fb-84bc507a.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam and Phish allowed to inbox by User Overrides](../content/microsoft-defender-xdr-spam-and-phish-allowed-to-inbox-by-user-overrides-b1f797d1-6ea4-4f8f-b663-6c8a1c1018e9-d96be501.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam detection by IP and its location](../content/microsoft-defender-xdr-spam-detection-by-ip-and-its-location-316f8777-09fd-480b-a726-21f521fa990f-34018dfd.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam detection by delivery location](../content/microsoft-defender-xdr-spam-detection-by-delivery-location-7e93ce37-0cc5-4aa9-b30a-07772affa481-8260769b.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam detection technologies](../content/microsoft-defender-xdr-spam-detection-technologies-f290d544-c499-4b23-8a7e-c4cbb7ab6316-9fee5e01.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam detection trend](../content/microsoft-defender-xdr-spam-detection-trend-ae690d6f-0ea5-4617-95cf-1ed9a5fcb329-5bd812f5.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoof Detections Trend](../content/microsoft-defender-xdr-spoof-detections-trend-09b263e1-9c73-4585-a55c-bc209e148e14-7f536fde.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoof Detections by Detection Technology](../content/microsoft-defender-xdr-spoof-detections-by-detection-technology-53139a92-eb64-46d2-be97-e752a71e7021-49e840ae.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoof Detections by Detection Technology Trend](../content/microsoft-defender-xdr-spoof-detections-by-detection-technology-trend-1dce39ec-8a64-4e49-9d6e-926ee6f04c39-579ed4a9.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoof and impersonation detections by sender IP](../content/microsoft-defender-xdr-spoof-and-impersonation-detections-by-sender-ip-b3180ac0-6d94-494a-8b8c-fcc84319ea6e-0ef4810c.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoof and impersonation phish detections](../content/microsoft-defender-xdr-spoof-and-impersonation-phish-detections-011c3d48-f6ca-405f-9763-66c7856ad2ba-144e44e2.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoof attempts with auth failure](../content/microsoft-defender-xdr-spoof-attempts-with-auth-failure-5971f2e7-1bb2-4170-aa7a-577ed8a45c72-0d3eee89.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoofing attempts from Specific Domains](../content/microsoft-defender-xdr-spoofing-attempts-from-specific-domains-cdac93ef-56c0-45bf-9e7f-9cbf0ad034234-76a0c095.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoolsv Spawning Rundll32](../content/microsoft-defender-xdr-spoolsv-spawning-rundll32-3cc2127f-d9ca-46a0-9628-89f702be82b3-a70aa85d.md) | PrivilegeEscalation, Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Stopping multiple processes using taskkill](../content/microsoft-defender-xdr-stopping-multiple-processes-using-taskkill-4dd31bd5-11a3-4b9c-a7c5-4927ab4f2a77-452d3cd2.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Suspicious DLLs in spool Folder](../content/microsoft-defender-xdr-suspicious-dlls-in-spool-folder-0b5b076b-9a1c-440c-a11f-8471a75f46fd-160d1915.md) | PrivilegeEscalation, Execution | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Suspicious Files in spool Folder](../content/microsoft-defender-xdr-suspicious-files-in-spool-folder-2d16b6fc-eb63-491c-a2c2-1160e2e41dcf-ac7a0cd6.md) | PrivilegeEscalation, Execution | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Suspicious Image Load related to IcedId](../content/microsoft-defender-xdr-suspicious-image-load-related-to-icedid-853bacff-45cf-42f2-b2a6-6727fcf183ef-560dbc47.md) | Execution, DefenseEvasion | [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) |
| [Suspicious Spoolsv Child Process](../content/microsoft-defender-xdr-suspicious-spoolsv-child-process-084a6349-b3d6-4528-91e4-4de5d52424e5-f5f0ac34.md) | PrivilegeEscalation, Execution | [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) |
| [Suspicious Teams Display Name](../content/microsoft-defender-xdr-suspicious-teams-display-name-02bdbd93-02b7-40e4-9468-d501463e57af-e0e082e9.md) ⚠️ | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Suspicious Tomcat Confluence Process Launch](../content/microsoft-defender-xdr-suspicious-tomcat-confluence-process-launch-c5b3e559-7c44-442c-9e73-c753abb02c13-64887431.md) | Execution, PrivilegeEscalation | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Suspicious sign-in attempts from QR code phishing campaigns](../content/microsoft-defender-xdr-suspicious-sign-in-attempts-from-qr-code-phishing-campaigns-3131d0ba-32c9-483e-a25c-82e26a07e116-b0a8170e.md) | InitialAccess | [`AADSignInEventsBeta`](../tables/aadsignineventsbeta.md)<br>[`CloudAppEvents`](../tables/cloudappevents.md) |
| [Teams Admin submission of Malware and Phish daily trend](../content/microsoft-defender-xdr-teams-admin-submission-of-malware-and-phish-daily-trend-fc47e222-c348-43ca-ba11-b4628fe243cd-821a40de.md) ⚠️ | DefenseEvasion | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Teams Admin submission of No Threats daily trend](../content/microsoft-defender-xdr-teams-admin-submission-of-no-threats-daily-trend-b2a6440b-6ebd-4d86-aa33-cfe11f9defcf-321ed5ca.md) ⚠️ | DefenseEvasion | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Teams Admin-User Submissions Grading Verdicts](../content/microsoft-defender-xdr-teams-admin-user-submissions-grading-verdicts-20c9d89a-ad65-48f4-ba14-605715af640a-11968695.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Teams Malware ZAP](../content/microsoft-defender-xdr-teams-malware-zap-4684afc7-3d05-4ec1-8fb0-342707d0ac5d-cc928c54.md) ⚠️ | InitialAccess | [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) |
| [Teams Message with URL listed on OpenPhish](../content/microsoft-defender-xdr-teams-message-with-url-listed-on-openphish-45d955e0-0e34-4ce7-833d-c14b43d69677-620b3f77.md) ⚠️ | InitialAccess | [`MessageUrlInfo`](../tables/messageurlinfo.md) |
| [Teams Phish ZAP](../content/microsoft-defender-xdr-teams-phish-zap-abd7e757-7737-4c9f-af7a-92e87172ff4f-1c12f41b.md) ⚠️ | InitialAccess | [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) |
| [Teams Spam ZAP](../content/microsoft-defender-xdr-teams-spam-zap-008ff55b-0588-4d39-af03-c08f1bb519d7-03330511.md) ⚠️ | InitialAccess | [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) |
| [Teams URL clicks actions summarized by URLs clicked on](../content/microsoft-defender-xdr-teams-url-clicks-actions-summarized-by-urls-clicked-on-161b163c-0805-46fd-abda-2fe5f0a5185e-7bcc6c0b.md) ⚠️ | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Teams URL clicks through actions on Phish or Malware URLs summarized by URLs](../content/microsoft-defender-xdr-teams-url-clicks-through-actions-on-phish-or-malware-urls-summarized-by-urls-68aaf2af-83ac-4f9e-9680-4050700b93f9-071f451c.md) ⚠️ | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Teams User submissions daily trend](../content/microsoft-defender-xdr-teams-user-submissions-daily-trend-ace8e98a-660b-4fa9-a877-60644eb83344-25981de9.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Teams blocked URL clicks daily trend](../content/microsoft-defender-xdr-teams-blocked-url-clicks-daily-trend-71117505-5a71-431e-8605-8896960affe5-fa61dd17.md) ⚠️ | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Teams communication from suspicious external users](../content/microsoft-defender-xdr-teams-communication-from-suspicious-external-users-c3a6f568-8200-4f2f-88b8-a4df5eb54ba9-dc8df746.md) ⚠️ | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Teams communication to suspicious external users](../content/microsoft-defender-xdr-teams-communication-to-suspicious-external-users-12eeae9e-8f0a-4b8c-b437-31c998f15af8-dd66d010.md) ⚠️ | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Teams message ZAPed with the same URL in Email](../content/microsoft-defender-xdr-teams-message-zaped-with-the-same-url-in-email-8b7a84e9-5831-4e90-9b98-bd57493c6cc9-c563797b.md) ⚠️ | InitialAccess | [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) |
| [Teams messages from a specific sender by ThreadType](../content/microsoft-defender-xdr-teams-messages-from-a-specific-sender-by-threadtype-f6f317c4-8ebe-4f93-9068-720705a75c65-f2ea159e.md) ⚠️ | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Teams messages with suspicious URL domains](../content/microsoft-defender-xdr-teams-messages-with-suspicious-url-domains-5515296b-8f4c-42f1-a5ad-0574fbf99f23-5b0d7b3b.md) ⚠️ | InitialAccess | [`MessageUrlInfo`](../tables/messageurlinfo.md) |
| [Teams post delivery events daily trend](../content/microsoft-defender-xdr-teams-post-delivery-events-daily-trend-fea3f03b-0723-4f3e-9f6a-c8a6a67fbde0-0852a1b1.md) ⚠️ | InitialAccess | [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) |
| [Teams users clicking on suspicious URL domains](../content/microsoft-defender-xdr-teams-users-clicking-on-suspicious-url-domains-b1fa5bb7-9c4e-4d4f-826a-afc1fbe8c2cf-e1beec3a.md) ⚠️ | InitialAccess | [`MessageUrlInfo`](../tables/messageurlinfo.md) |
| [Top 10 Attacked user by Phish messages](../content/microsoft-defender-xdr-top-10-attacked-user-by-phish-messages-8b3bd5c3-1f37-4131-8b3a-a0f6d540e56d-bdaa7c04.md) ⚠️ | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Top 10 Detection Overrides - Admin Email Submissions (FN)](../content/microsoft-defender-xdr-top-10-detection-overrides-admin-email-submissions-fn-72f939fe-c77b-4c25-91b4-3f784c9c58c3-3cb89584.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10 Domains sending Malicious Emails (Malware+Phish+Spam)](../content/microsoft-defender-xdr-top-10-domains-sending-malicious-emails-malware+phish+spam-af183f01-6d98-4fca-8ca4-63577b78a26e-6e78546a.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 External Senders (Malware)](../content/microsoft-defender-xdr-top-10-external-senders-malware-530ef5e4-7ee4-4d70-a8e2-a06459605c02-7df27ceb.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 External Senders (Phish)](../content/microsoft-defender-xdr-top-10-external-senders-phish-db9789ab-0636-4ea6-b779-1b72b4b64aac-01861b5b.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 External Senders (Spam)](../content/microsoft-defender-xdr-top-10-external-senders-spam-86c7d21b-2081-419d-bc2e-7bc909d61eef-cc6c9e75.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 External Senders (Spam)](../content/microsoft-defender-xdr-top-10-external-senders-spam-6f606826-b995-4a8d-8c2c-ee08e3d1194a-395cb836.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 External senders sending Teams phishing messsages](../content/microsoft-defender-xdr-top-10-external-senders-sending-teams-phishing-messsages-0bd46e27-9d5a-4abd-889b-829a8b4d29a4-edd7c5d4.md) ⚠️ | DefenseEvasion | [`MessageEvents`](../tables/messageevents.md) |
| [Top 10 Targeted Users (Malware+Phish+Spam)](../content/microsoft-defender-xdr-top-10-targeted-users-malware+phish+spam-b8330f6e-fc47-40ce-b225-5d3b055c6446-7217646a.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 URL domains attacking organization](../content/microsoft-defender-xdr-top-10-url-domains-attacking-organization-27ee28e7-423b-48c9-a410-cbc6c8e21d25-23e12672.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 Users clicking on Malicious URLs (Malware)](../content/microsoft-defender-xdr-top-10-users-clicking-on-malicious-urls-malware-5a84e13a-bb17-4124-9564-d74cdb84c124-a53e7a94.md) ⚠️ | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Top 10 Users clicking on Malicious URLs (Malware+Phish+Spam)](../content/microsoft-defender-xdr-top-10-users-clicking-on-malicious-urls-malware+phish+spam-7d7a3d3f-22db-4cdf-ba67-c57215777a3c-614dd301.md) ⚠️ | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Top 10 Users clicking on Malicious URLs (Phish)](../content/microsoft-defender-xdr-top-10-users-clicking-on-malicious-urls-phish-a937905e-ee5c-406c-ab86-8e2581240112-e5164406.md) ⚠️ | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Top 10 Users clicking on Malicious URLs (Spam)](../content/microsoft-defender-xdr-top-10-users-clicking-on-malicious-urls-spam-3a2fdf32-ebe7-4f65-a1c3-fc7faf23ae90-97cba5f5.md) ⚠️ | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Top 10 Users clicking on malicious URLs in Teams](../content/microsoft-defender-xdr-top-10-users-clicking-on-malicious-urls-in-teams-b3b507e9-9f92-4751-8463-fc77394fed91-9d43f369.md) ⚠️ | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Top 10 domains sending Bulk email](../content/microsoft-defender-xdr-top-10-domains-sending-bulk-email-147131b3-8b57-4c50-b981-5a951ed82272-a450386e.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 external senders sending Teams messages](../content/microsoft-defender-xdr-top-10-external-senders-sending-teams-messages-511406e2-2bdf-4b4d-a436-17dadbf4829f-13d808aa.md) ⚠️ | DefenseEvasion | [`MessageEvents`](../tables/messageevents.md) |
| [Top 10 sender domains - Admin Teams message submissions FN](../content/microsoft-defender-xdr-top-10-sender-domains-admin-teams-message-submissions-fn-132dffdf-3ee0-4748-8509-fbd3a92e5c9f-45ad68b4.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10 sender domains - Admin email submissions (FN)](../content/microsoft-defender-xdr-top-10-sender-domains-admin-email-submissions-fn-da7eecca-ecb8-4b8e-a111-62d2b48e2e69-9ba81930.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10 sender domains - Admin email submissions (FP)](../content/microsoft-defender-xdr-top-10-sender-domains-admin-email-submissions-fp-4c786e9a-b570-47bc-877f-7f3da87a4673-70144cae.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10 sender domains - Teams user submissions FN or FP](../content/microsoft-defender-xdr-top-10-sender-domains-teams-user-submissions-fn-or-fp-bebb6652-3c52-4358-a946-ecd63cddf082-b18626f1.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10 senders - Teams users submissions FN or FP](../content/microsoft-defender-xdr-top-10-senders-teams-users-submissions-fn-or-fp-2d8448f5-c0a2-46d7-a004-e062970ccb7b-7b2596a2.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10 senders of  Admin Teams message submissions FN](../content/microsoft-defender-xdr-top-10-senders-of-admin-teams-message-submissions-fn-49071a21-fbb6-472f-932f-5b6ca1a25883-bcf9b4fd.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10 senders of  Admin Teams message submissions FP](../content/microsoft-defender-xdr-top-10-senders-of-admin-teams-message-submissions-fp-f82f3d63-b7f2-494d-8254-612405702dd4-4652dba3.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10% of most attacked users](../content/microsoft-defender-xdr-top-10-of-most-attacked-users-e3b7b5c1-0e50-4dfb-b73a-c226636eaf58-d90b786a.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 100 malicious email senders](../content/microsoft-defender-xdr-top-100-malicious-email-senders-12225f50-9d41-4b78-8269-cc127d98654c-68a99898.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 100 senders](../content/microsoft-defender-xdr-top-100-senders-cadf6e78-2a9a-4fb5-b788-30a592d699d3-c5aa90ea.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top Domains Outbound with Emails with Threats Inbound (Partner BEC)](../content/microsoft-defender-xdr-top-domains-outbound-with-emails-with-threats-inbound-partner-bec-f9442d20-eff8-4751-9a75-6451aeace687-a1d5fba8.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top External Sender domains - Malware](../content/microsoft-defender-xdr-top-external-sender-domains-malware-90cd91d1-7b90-421c-a5c9-0479b6b7e6a2-2c37f8c2.md) ⚠️ | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Top External Sender domains - Phish](../content/microsoft-defender-xdr-top-external-sender-domains-phish-0c68250b-44b5-46f4-8cac-f3e7149e8c61-1bbf5dbd.md) ⚠️ | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Top External Sender domains - Spam](../content/microsoft-defender-xdr-top-external-sender-domains-spam-0c829a3c-ead1-4ebc-92c9-2e85abb1edeb-01dc2bd1.md) ⚠️ | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Top External malicious Senders](../content/microsoft-defender-xdr-top-external-malicious-senders-74b581fc-e8cb-4b50-9d82-7b91d3a88a08-a3bfa117.md) | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Top Malware Families](../content/microsoft-defender-xdr-top-malware-families-0d16e85e-82ec-460a-bf48-e90164464f7c-4786cd56.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top Spoof DMARC detections by Sender domain (P1/P2)](../content/microsoft-defender-xdr-top-spoof-dmarc-detections-by-sender-domain-p1-p2-23b646e8-b885-4cde-a9ab-1e35fa5e37a7-dacbea0f.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top Spoof external domain detections by Sender domain (P1/P2)](../content/microsoft-defender-xdr-top-spoof-external-domain-detections-by-sender-domain-p1-p2-3dbaa9c1-5e69-40a9-bacb-8cbdb4a0e6cb-d618b7cb.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top Spoof intra-org detections by Sender domain (P1/P2)](../content/microsoft-defender-xdr-top-spoof-intra-org-detections-by-sender-domain-p1-p2-ba97d6b9-f82e-4917-9c07-4c0028bbd32d-d66e5db5.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top Users receiving Malware](../content/microsoft-defender-xdr-top-users-receiving-malware-c6bbcac2-a6b8-4537-a32a-6f1367e6aa44-6b839b20.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top Users receiving Phish](../content/microsoft-defender-xdr-top-users-receiving-phish-87846aad-624c-4e18-b963-81bedd7123a2-f8f93dee.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top accounts performing Teams admin submissions FN or FP](../content/microsoft-defender-xdr-top-accounts-performing-teams-admin-submissions-fn-or-fp-0a29c9f0-e8d4-4339-a196-52bb3a090a79-83e0c9bf.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top accounts performing Teams user submissions FN or FP](../content/microsoft-defender-xdr-top-accounts-performing-teams-user-submissions-fn-or-fp-9ffbd78f-c87c-4fd2-96ec-fd46e27bbd21-dfe1925c.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top accounts performing admin submissions (FN)](../content/microsoft-defender-xdr-top-accounts-performing-admin-submissions-fn-d236f728-8b0f-4b4f-acf7-e4707993b841-6d85f0eb.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top accounts performing admin submissions (FP)](../content/microsoft-defender-xdr-top-accounts-performing-admin-submissions-fp-8b0bae20-687f-47ca-bc2e-8dabbed9cbae-ce0b898d.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top accounts performing user submissions](../content/microsoft-defender-xdr-top-accounts-performing-user-submissions-47506508-dee4-4d4d-93a8-1c78d63cd2eb-ed374abf.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top domains outbound sending Malicious Teams messages inbound](../content/microsoft-defender-xdr-top-domains-outbound-sending-malicious-teams-messages-inbound-ab2f1fd6-1023-425e-a429-ff74db5709be-6fb6bb25.md) ⚠️ | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Top external malicious senders](../content/microsoft-defender-xdr-top-external-malicious-senders-9d6c8c17-06b0-4044-b18e-35eb3dfc5cf2-77fcee60.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top malicious URLs clicked by users in Teams](../content/microsoft-defender-xdr-top-malicious-urls-clicked-by-users-in-teams-6610945e-9496-4ef4-9bc4-a511a3f2a477-af2d72cc.md) ⚠️ | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Top outbound recipient domains sending inbound emails with threats](../content/microsoft-defender-xdr-top-outbound-recipient-domains-sending-inbound-emails-with-threats-38d6e2fb-a804-4170-8d32-d251ecd6bcd2-b8b1fe75.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top policies performing admin overrides](../content/microsoft-defender-xdr-top-policies-performing-admin-overrides-c73ae295-d120-4f79-aaed-de005f766ad2-01151692.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top policies performing user overrides](../content/microsoft-defender-xdr-top-policies-performing-user-overrides-fe2cb53e-4eb3-4676-87c1-f80d2813f542-d2ceefd0.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top targeted users](../content/microsoft-defender-xdr-top-targeted-users-a1664330-810a-473b-b354-acbaa751a294-26d74c53.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Total Emails with Admin Overrides (Allow)](../content/microsoft-defender-xdr-total-emails-with-admin-overrides-allow-8f8fd7c8-277a-48c3-ad67-c80b3037c5af-b3b2f80d.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Total Emails with Admin Overrides (Block)](../content/microsoft-defender-xdr-total-emails-with-admin-overrides-block-bd6aae91-6233-430b-a5af-15c6406a7770-72f52ec6.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Total Emails with User Overrides (Allow)](../content/microsoft-defender-xdr-total-emails-with-user-overrides-allow-e6b3edc5-ec6f-44ae-9bb4-60c9ea49154e-7cec0f95.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Total Emails with User Overrides (Block)](../content/microsoft-defender-xdr-total-emails-with-user-overrides-block-74e076da-58e8-436d-b7bc-68888dbb6091-e2ae9087.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Total Submissions by Submission Type](../content/microsoft-defender-xdr-total-submissions-by-submission-type-53c58a33-668d-46e1-9714-5892c87650d9-17869076.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Total Submissions by Submission Type](../content/microsoft-defender-xdr-total-submissions-by-submission-type-8cde246b-7ed1-429c-933a-f7d0363dbbc0-38a58290.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Total number of MDO Teams protection detections daily](../content/microsoft-defender-xdr-total-number-of-mdo-teams-protection-detections-daily-75ade06c-7326-4e0d-9dfb-27e05043525b-3af53022.md) ⚠️ | DefenseEvasion | [`MessageEvents`](../tables/messageevents.md) |
| [Total number of detections by MDO](../content/microsoft-defender-xdr-total-number-of-detections-by-mdo-0717b136-a1ef-4af0-a911-e189d0064099-8ced6caf.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`EmailEvents`](../tables/emailevents.md)<br>[`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [Turning off services using sc exe](../content/microsoft-defender-xdr-turning-off-services-using-sc-exe-9674f529-f0e9-4305-862d-479ccc9e28f1-0bc91883.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [URL Click attempts by threat type](../content/microsoft-defender-xdr-url-click-attempts-by-threat-type-3eef362d-3aee-4950-9208-4afa6f7afbe9-0804ea5b.md) ⚠️ | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [URL Clicks by Action](../content/microsoft-defender-xdr-url-clicks-by-action-4620ece3-dceb-4151-8621-5a56351c97cd-71c178c3.md) ⚠️ | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [URL click count by click action](../content/microsoft-defender-xdr-url-click-count-by-click-action-3f007cdc-86bf-4657-9015-05101a3e54f5-9ff7257a.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [URL click on URLs in ZAP-d Teams messages](../content/microsoft-defender-xdr-url-click-on-urls-in-zap-d-teams-messages-2ae448b1-b27d-4043-a92f-ef10202cdb7a-f825e6d2.md) ⚠️ | InitialAccess | [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) |
| [URL click on ZAP email](../content/microsoft-defender-xdr-url-click-on-zap-email-efe27064-6d35-4720-b7f5-e0326695613d-1ef7f440.md) | InitialAccess | *Internal use:*<br>[`AlertEvidence`](../tables/alertevidence.md)<br>[`AlertInfo`](../tables/alertinfo.md) |
| [URL clicks actions by URL](../content/microsoft-defender-xdr-url-clicks-actions-by-url-bc46e331-3cb0-483d-9c90-989d2a59457f-bd855644.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [URLClick details based on malicious URL click alert](../content/microsoft-defender-xdr-urlclick-details-based-on-malicious-url-click-alert-03e61096-20d0-46eb-b8e0-a507dd00a19f-7d8998d0.md) | InitialAccess | *Internal use:*<br>[`AlertEvidence`](../tables/alertevidence.md)<br>[`AlertInfo`](../tables/alertinfo.md) |
| [URLs by location](../content/microsoft-defender-xdr-urls-by-location-ab006655-d723-4844-9d5d-91cb3b020555-d023be7f.md) ⚠️ | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Unusual Volume of file deletion by users](../content/microsoft-defender-xdr-unusual-volume-of-file-deletion-by-users-2bdd260c-c687-4cb2-9992-87e5ce677678-3b144d45.md) | Impact | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [User Email Submission Trend (FN)](../content/microsoft-defender-xdr-user-email-submission-trend-fn-9c4359a1-0bf9-45b3-9a1a-f333c437a061-6ae2a9dd.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions (FN) - Top Detection Overrides by Admins](../content/microsoft-defender-xdr-user-email-submissions-fn-top-detection-overrides-by-admins-58acf93f-27de-4af4-8a5f-d87ee59326f9-fef2e72b.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions (FN) - Top Detection Overrides by Users](../content/microsoft-defender-xdr-user-email-submissions-fn-top-detection-overrides-by-users-0a9385bc-2ef9-4b0e-8834-12f796b08ca8-531a183e.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions (FN) - Top Inbound P2 Senders](../content/microsoft-defender-xdr-user-email-submissions-fn-top-inbound-p2-senders-12798858-1916-4b59-a85e-8a7a4f7b43cf-ab8f972e.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [User Email Submissions (FN) - Top Inbound P2 Senders domains](../content/microsoft-defender-xdr-user-email-submissions-fn-top-inbound-p2-senders-domains-385aca1d-2135-40c6-af8e-030c9e086cf5-8ef092ad.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [User Email Submissions (FN) - Top Intra-Org P2 Senders](../content/microsoft-defender-xdr-user-email-submissions-fn-top-intra-org-p2-senders-b78eddd9-ebe5-42ab-95b4-928a782b52b5-886ff278.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions (FN) - Top Intra-Org Subjects](../content/microsoft-defender-xdr-user-email-submissions-fn-top-intra-org-subjects-cbf3abc0-2b2d-4852-ab7a-9f7a1231997e-735b38b9.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions (FN) by Submission Type](../content/microsoft-defender-xdr-user-email-submissions-fn-by-submission-type-289283e9-9f63-488c-8d62-fe9c598f3cd5-fe9e0c5a.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions (FN-FP) by Grading verdict](../content/microsoft-defender-xdr-user-email-submissions-fn-fp-by-grading-verdict-abdca3e6-c198-404a-b95c-f09ddfed2027-d1a3df7e.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions accuracy vs Admin review verdict](../content/microsoft-defender-xdr-user-email-submissions-accuracy-vs-admin-review-verdict-d78bad8c-3d94-4a73-bdbe-1c567e3d6d62-56fcb8ae.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions by Admin review status (Mark and Notify)](../content/microsoft-defender-xdr-user-email-submissions-by-admin-review-status-mark-and-notify-201cb524-b4b4-479a-9637-da35cfa1e30a-695a9a27.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User clicked through events](../content/microsoft-defender-xdr-user-clicked-through-events-f075d4c4-cf76-4e5d-9c2d-9ed524286316-66cc46a9.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [User clicks on malicious inbound emails](../content/microsoft-defender-xdr-user-clicks-on-malicious-inbound-emails-891f4865-75e5-4d40-bc24-ebf97da3ca9a-a5ebfb84.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md)<br>[`UrlClickEvents`](../tables/urlclickevents.md) |
| [User clicks on phishing URLs in emails](../content/microsoft-defender-xdr-user-clicks-on-phishing-urls-in-emails-d823da0e-1334-4a66-8ff4-2c2c40d26295-36e1eb38.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [User email submissions (FN) from Junk Folder](../content/microsoft-defender-xdr-user-email-submissions-fn-from-junk-folder-300b0d05-e99e-4349-ab2b-ec12ff5c2da1-b559b01f.md) ⚠️ | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User not covered under display name impersonation](../content/microsoft-defender-xdr-user-not-covered-under-display-name-impersonation-e90345b3-439c-44e1-a85d-8ae84ad9c65b-78c1a989.md) | InitialAccess | *Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [User reported submissions](../content/microsoft-defender-xdr-user-reported-submissions-0bd33643-c517-48b1-8211-25a7fbd15a50-18ee082b.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Webserver Executing Suspicious Applications](../content/microsoft-defender-xdr-webserver-executing-suspicious-applications-761230a3-71ad-4522-bfbc-1dca698ffc42-109b5a61.md) | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Windows Print Spooler Service Suspicious File Creation](../content/microsoft-defender-xdr-windows-print-spooler-service-suspicious-file-creation-daa347a4-8251-43a7-9730-32f22aa741ab-21c8edf9.md) | PrivilegeEscalation, LateralMovement | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Zero day threats](../content/microsoft-defender-xdr-zero-day-threats-95b0c7ed-2853-4343-80a9-ab076cf31e51-9681a016.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Zero-day Malware Detections Trend](../content/microsoft-defender-xdr-zero-day-malware-detections-trend-a370ad6f-e7fa-4740-ab9e-cb5560e3599f-205be975.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Zero-day Phish Detections Trend](../content/microsoft-defender-xdr-zero-day-phish-detections-trend-80f357a6-6bb4-4b2b-a88c-265fccafc794-6ffd9b22.md) ⚠️ | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [referral-phish-emails](../content/microsoft-defender-xdr-referral-phish-emails-cdc4da1c-64a1-4941-be59-1f5cc85481ab-d35aa01d.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) | [`DeviceEvents`](../tables/deviceevents.md)<br>[`DeviceFileCertificateInfo`](../tables/devicefilecertificateinfo.md)<br>[`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md)<br>[`DeviceInfo`](../tables/deviceinfo.md)<br>[`DeviceLogonEvents`](../tables/devicelogonevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceNetworkInfo`](../tables/devicenetworkinfo.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`DeviceRegistryEvents`](../tables/deviceregistryevents.md) |
| [MicrosoftDefenderForIdentity](../content/microsoft-defender-xdr-microsoftdefenderforidentity-19dcc30d.md) | [`IdentityDirectoryEvents`](../tables/identitydirectoryevents.md)<br>[`IdentityLogonEvents`](../tables/identitylogonevents.md)<br>[`IdentityQueryEvents`](../tables/identityqueryevents.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoft-defender-xdr-microsoftdefenderforoffice365detectionsandinsights-c34bc8fb.md) | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`EmailEvents`](../tables/emailevents.md)<br>[`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md)<br>[`EmailUrlInfo`](../tables/emailurlinfo.md)<br>[`UrlClickEvents`](../tables/urlclickevents.md)<br>*Internal use:*<br>[`AlertEvidence`](../tables/alertevidence.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Create an Attack Simulator training simulation for users who did not report a phishing attempt](../content/microsoft-defender-xdr-create-an-attack-simulator-training-simulation-for-users-who-did-not-report-a-phishing-attempt-3caa7964.md) ⚠️ | This playbook creates an educational Attack Simulator 'How-To Guide' simulation for end-users who fa... | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                    |
|-------------|--------------------------------|---------------------------------------------------------------------------------------|
| 3.0.12      | 07-04-2025                     | Updated ConnectivityCriteria Type in **Data Connector**.				   |
| 3.0.11      | 16-12-2024                     | Updated **Analytic Rule** LocalAdminGroupChanges.yaml.<br> Updated **Workbook**.				   |
| 3.0.10      | 25-10-2024                     | Added New **Hunting Queries**.				   |
| 3.0.9       | 20-09-2024                     | Added New **Hunting Queries**.				   |
| 3.0.8       | 10-06-2024                     | Added missing AMA **Data Connector** reference in **Analytic rules**.				   | 
| 3.0.7       | 29-05-2024                     | Updated **Analytic Rule** PossiblePhishingwithCSL&NetworkSession.yaml.				   | 
| 3.0.6       | 13-05-2024                     | Updated queried to use Signinlogs table.                               				   | 
| 3.0.5       | 06-05-2024                     | To correct erroneous entity mapping.                                 				   |  
| 3.0.4       | 08-04-2024                     | Added in FullName and IPAddress mappings where needed.                                 |  
| 3.0.3       | 21-03-2024                     | Increased **Analytic rule** coverage.                                          		   |
| 3.0.2       | 04-12-2023                     | Added UrlClickEvents datatype to the solution.                                         |
| 3.0.1       | 12-10-2023                     | Solution name changed from **Microsoft 365 Defender** to  **Microsoft Defender XDR**. |
| 3.0.0       | 26-07-2023                     | Updated **Workbook** template to remove unused variables.                             |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

