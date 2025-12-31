# Microsoft Defender XDR

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

## Tables Reference

This solution uses **57 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AADSignInEventsBeta`](../tables/aadsignineventsbeta.md) | - | Hunting |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | - | Analytics |
| [`ASimProcessEventLogs`](../tables/asimprocesseventlogs.md) | - | Analytics |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | - | Analytics |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | - | Analytics |
| [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md) | - | Analytics |
| [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) | - | Analytics |
| [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md) | - | Analytics |
| [`CloudAppEvents`](../tables/cloudappevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Hunting, Workbooks |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | - | Analytics |
| [`Corelight_CL`](../tables/corelight-cl.md) | - | Analytics |
| [`DefenderIoTRawEvent`](../tables/defenderiotrawevent.md) | - | Analytics |
| [`DeviceEvents`](../tables/deviceevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting, Workbooks |
| [`DeviceFileCertificateInfo`](../tables/devicefilecertificateinfo.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | - |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting, Workbooks |
| [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting |
| [`DeviceInfo`](../tables/deviceinfo.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Hunting |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting, Workbooks |
| [`DeviceNetworkInfo`](../tables/devicenetworkinfo.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Workbooks |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting |
| [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting |
| [`DeviceTvmSoftwareVulnerabilities`](../tables/devicetvmsoftwarevulnerabilities.md) | - | Analytics |
| [`DeviceTvmSoftwareVulnerabilitiesKB`](../tables/devicetvmsoftwarevulnerabilitieskb.md) | - | Hunting |
| [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Hunting |
| [`EmailEvents`](../tables/emailevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Hunting, Workbooks |
| [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Hunting, Workbooks |
| [`EmailUrlInfo`](../tables/emailurlinfo.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Hunting |
| [`Event`](../tables/event.md) | - | Analytics |
| [`EventsData`](../tables/eventsdata.md) | - | Analytics |
| [`FileCreation`](../tables/filecreation.md) | - | Analytics, Hunting, Workbooks |
| [`IdentityDirectoryEvents`](../tables/identitydirectoryevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Hunting, Workbooks |
| [`IdentityLogonEvents`](../tables/identitylogonevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics, Hunting, Workbooks |
| [`IdentityQueryEvents`](../tables/identityqueryevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Workbooks |
| [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md) | - | Analytics |
| [`MessageEvents`](../tables/messageevents.md) | - | Hunting |
| [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) | - | Hunting |
| [`MessageUrlInfo`](../tables/messageurlinfo.md) | - | Hunting |
| [`NTANetAnalytics`](../tables/ntanetanalytics.md) | - | Analytics |
| [`RawNetworkEvents`](../tables/rawnetworkevents.md) | - | Analytics |
| [`SecurityEvent`](../tables/securityevent.md) | - | Analytics |
| [`SecurityIoTRawEvent`](../tables/securityiotrawevent.md) | - | Analytics |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) | - | Analytics |
| [`SigninLogs`](../tables/signinlogs.md) | - | Analytics, Hunting |
| [`Syslog`](../tables/syslog.md) | - | Analytics |
| [`TrendMicro_XDR_OAT_CL`](../tables/trendmicro-xdr-oat-cl.md) | - | Analytics |
| [`UrlClickEvents`](../tables/urlclickevents.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Hunting, Workbooks |
| [`VMConnection`](../tables/vmconnection.md) | - | Analytics |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) | - | Analytics |
| [`WindowsEvent`](../tables/windowsevent.md) | - | Analytics |
| [`avDetections`](../tables/avdetections.md) | - | Workbooks |
| [`barracuda_CL`](../tables/barracuda-cl.md) | - | Analytics |
| [`baseQuery`](../tables/basequery.md) | - | Workbooks |
| [`meraki_CL`](../tables/meraki-cl.md) | - | Analytics |
| [`parsedData`](../tables/parseddata.md) | - | Analytics |
| [`rareDomains`](../tables/raredomains.md) | - | Hunting |
| [`usbDetections`](../tables/usbdetections.md) | - | Workbooks |

### Internal Tables

The following **5 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AlertEvidence`](../tables/alertevidence.md) | [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) | Analytics |
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
| [AV detections related to SpringShell Vulnerability](../content/3bd33158-3f0b-47e3-a50f-7c20a1b88038.md) | High | InitialAccess | [`DeviceInfo`](../tables/deviceinfo.md) |
| [AV detections related to Tarrask malware](../content/1785d372-b9fe-4283-96a6-3a1d83cabfd1.md) | High | Persistence | [`DeviceInfo`](../tables/deviceinfo.md) |
| [AV detections related to Ukraine threats](../content/b6685757-3ed1-4b05-a5bd-2cacadc86c2a.md) | High | Impact | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Account Creation](../content/450f4e56-5bba-4070-b9d9-9204ba9d777d.md) | Medium | Persistence | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Bitsadmin Activity](../content/2a1dc4c2-a8d6-4a0e-8539-9b971c851195.md) | Medium | Persistence, CommandAndControl, Exfiltration | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [C2-NamedPipe](../content/7ce00cba-f76f-4026-ab7f-7e4f1b67bd18.md) | High | CommandAndControl | [`DeviceEvents`](../tables/deviceevents.md) |
| [Clearing of forensic evidence from event logs using wevtutil](../content/515d0bba-b297-4f83-8280-20ff7f27ecb1.md) | High | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Deimos Component Execution](../content/c25a8cd4-5b4a-45a8-9ba0-3b753a652f6b.md) | High | Execution, Collection, Exfiltration | [`DeviceEvents`](../tables/deviceevents.md) |
| [Deletion of data on multiple drives using cipher exe](../content/03caa992-477f-4b19-8e2a-8cd58f8f9652.md) | Medium | Impact | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detect Potential Kerberoast Activities](../content/12134de5-361b-427c-a1a0-d43f40a593c4.md) | Medium | CredentialAccess | [`IdentityLogonEvents`](../tables/identitylogonevents.md) |
| [Detect Suspicious Commands Initiated by Webserver Processes](../content/fa2f7d8a-6726-465a-aa72-6f6e3d4c99d7.md) | High | Execution, DefenseEvasion, Discovery | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Disabling Security Services via Registry](../content/32b29155-3fd3-4a9e-a0ca-a67e2593b60b.md) | Medium | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Doppelpaymer Stop Services](../content/5bdc1504-880c-4b30-a39c-7c746535928d.md) | High | Execution, DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [DopplePaymer Procdump](../content/1be34fb9-f81b-47ae-84fb-465e6686d76c.md) | High | CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Execution of software vulnerable to webp buffer overflow of CVE-2023-4863](../content/26e81021-2de6-4442-a74a-a77885e96911.md) | Informational | Execution | [`DeviceTvmSoftwareVulnerabilities`](../tables/devicetvmsoftwarevulnerabilities.md) |
| [Files Copied to USB Drives](../content/3ab04acf-e0e7-4f7c-8995-748ab4c848c2.md) | High | Exfiltration | [`DeviceEvents`](../tables/deviceevents.md)<br>[`FileCreation`](../tables/filecreation.md) |
| [Imminent Ransomware](../content/bb46dd86-e642-48a4-975c-44f5ac2b5033.md) | High | DefenseEvasion, Persistence | [`ASimProcessEventLogs`](../tables/asimprocesseventlogs.md)<br>[`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)<br>[`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`Event`](../tables/event.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SecurityIoTRawEvent`](../tables/securityiotrawevent.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`TrendMicro_XDR_OAT_CL`](../tables/trendmicro-xdr-oat-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Java Executing cmd to run Powershell](../content/2c81c0a0-9823-4a14-b21a-2b4acd3335d2.md) | High | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [LSASS Credential Dumping with Procdump](../content/c332b840-61e4-462e-a201-0e2d69bad45d.md) | High | CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [LaZagne Credential Theft](../content/7d0d3050-8dac-4b83-bfae-902f7dc0c21c.md) | Medium | CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Local Admin Group Changes](../content/63aa43c2-e88e-4102-aea5-0432851c541a.md) | High | Persistence | [`DeviceEvents`](../tables/deviceevents.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [MosaicLoader](../content/506f4d6b-3864-4bb1-8f75-a13fb066f97a.md) | High | DefenseEvasion | [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) |
| [Office Apps Launching Wscipt](../content/174de33b-107b-4cd8-a85d-b4025a35453f.md) | Medium | Execution, Collection, CommandAndControl | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Possible Phishing with CSL and Network Sessions](../content/6c3a1258-bcdd-4fcd-b753-1a9bc826ce12.md) | Medium | InitialAccess, CommandAndControl | [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md)<br>[`AWSVPCFlow`](../tables/awsvpcflow.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)<br>[`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)<br>[`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DefenderIoTRawEvent`](../tables/defenderiotrawevent.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`Event`](../tables/event.md)<br>[`EventsData`](../tables/eventsdata.md)<br>[`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md)<br>[`NTANetAnalytics`](../tables/ntanetanalytics.md)<br>[`RawNetworkEvents`](../tables/rawnetworkevents.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SecurityIoTRawEvent`](../tables/securityiotrawevent.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VMConnection`](../tables/vmconnection.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>[`barracuda_CL`](../tables/barracuda-cl.md)<br>[`meraki_CL`](../tables/meraki-cl.md)<br>[`parsedData`](../tables/parseddata.md)<br>*Internal use:*<br>[`AlertEvidence`](../tables/alertevidence.md) |
| [Potential Build Process Compromise - MDE](../content/1bf6e165-5e32-420e-ab4f-0da8558a8be2.md) | Medium | Persistence | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Potential Ransomware activity related to Cobalt Strike](../content/4bd9ce9d-8586-4beb-8fdb-bd018cacbe7d.md) | High | Execution, Persistence, DefenseEvasion, Impact | *Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Qakbot Campaign Self Deletion](../content/47c02e21-3949-4e05-a28e-576cd75ff6f6.md) | Medium | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Qakbot Discovery Activies](../content/ba9db6b2-3d05-42ae-8aee-3a15bbe29f27.md) | Medium | DefenseEvasion, Discovery, Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Rare Process as a Service](../content/91a451e3-178f-41b2-9e5d-da97d75b9971.md) | Medium | Persistence | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/36fbd4e7-5630-4414-aa42-702a7fdded21.md) | High | DefenseEvasion | [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |
| [Regsvr32 Rundll32 with Anomalous Parent Process](../content/2624fc55-0998-4897-bb48-1c6422befce4.md) | High | DefenseEvasion | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Remote File Creation with PsExec](../content/35ab0d58-baab-4154-87ed-fa2f69797e9e.md) | High | LateralMovement | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [SUNBURST and SUPERNOVA backdoor hashes](../content/a3c144f9-8051-47d4-ac29-ffb0c312c910.md) | High | Execution, Persistence, InitialAccess | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [SUNBURST network beacons](../content/ce1e7025-866c-41f3-9b08-ec170e05e73e.md) | Medium | Execution, Persistence, InitialAccess | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |
| [SUNSPOT malware hashes](../content/53e936c6-6c30-4d12-8343-b8a0456e8429.md) | Medium | Persistence | [`DeviceEvents`](../tables/deviceevents.md) |
| [Service Accounts Performing Remote PS](../content/d29cc957-0ddb-4d00-8d6f-ad1bb345ff9a.md) | High | LateralMovement | - |
| [Shadow Copy Deletions](../content/28c63a44-2d35-48b7-831b-3ed24af17c7e.md) | Medium | Impact | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Stopping multiple processes using taskkill](../content/4dd31bd5-11a3-4b9c-a7c5-4927ab4f2a77.md) | Medium | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [TEARDROP memory-only dropper](../content/738702fd-0a66-42c7-8586-e30f0583f8fe.md) | High | Execution, Persistence, DefenseEvasion | [`DeviceEvents`](../tables/deviceevents.md) |
| [Unusual Volume of file deletion by users](../content/e5f8e196-3544-4a8b-96a9-17c1b6a49710.md) | High | Impact | [`SigninLogs`](../tables/signinlogs.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [AIR investigation actions insight](../content/77104824-b41e-412d-8e50-26971fe97ab0.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [ATP policy status check](../content/518e6938-10ef-4165-af19-82f1287141bc.md) | DefenseEvasion | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Account Brute Force](../content/4095e430-d3f4-426f-92c5-aa5c5e137ca0.md) | - | [`DeviceLogonEvents`](../tables/devicelogonevents.md) |
| [Account Creation](../content/d0585c34-1b03-473c-938d-11fe73f7e053.md) | - | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Admin Submission Trend (FN)](../content/c51b0367-573a-42c3-a4a2-2d8b1ef6bea9.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submission Trend (FP)](../content/e3a11181-3ff9-4ba0-908d-3e229b476ce3.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by Detection Type](../content/8f82894a-1b18-4d1e-a580-1dcaff739a32.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by DetectionMethod (Phish FP)](../content/515a98db-49a5-4592-80b7-8227998da9ed.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by DetectionMethod (Spam FP)](../content/5cb9399f-e4d7-46c1-bdfa-d66eec278bf2.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by Grading verdict (FN-FP)](../content/8425234b-f09d-490e-be3d-a7ecf081c5d0.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by Submission State (FN)](../content/60cddbbb-2244-4a61-ad73-b20b1c6f5027.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by Submission State (FP)](../content/354d78b3-91b7-4219-9079-57e63e281077.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by Submission Type (FN)](../content/a7f2dae2-2e33-4744-b013-37dc5628d939.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Admin Submissions by Submission Type (FP)](../content/de074419-2ec5-4c7f-a7f6-0a49178b314c.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Alerts Related to Log4j Vulnerability](../content/e7791695-c103-4d20-a75a-53e90788616b.md) | InitialAccess | *Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Anomalous Payload Delivered from ISO files](../content/14694b88-a6e9-4cd1-9c4a-e382bdd82d8d.md) | Execution | [`DeviceEvents`](../tables/deviceevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Appspot Phishing Abuse](../content/cdac93ef-56c0-45bf-9e7f-9cbf0ad06808.md) | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Appspot Phishing Abuse](../content/cdac93ef-56c0-45bf-9e7f-9cbf0ad06808.md) | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Attacked more than x times average](../content/de480ca4-4095-4fef-b3e7-2a3f17f24e78.md) | InitialAccess | - |
| [Audit Email Preview-Download action](../content/ba1a91ad-1f99-4386-b191-06a76ef213f8.md) | PrivilegeEscalation | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Authentication failures by time and authentication type](../content/7fbf7687-5ded-4c39-9fe9-f4f6aa6fc422.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Automated email notifications and suspicious sign-in activity](../content/0955f477-6471-468a-9b13-fc5fa96d7db2.md) | InitialAccess | [`AADSignInEventsBeta`](../tables/aadsignineventsbeta.md)<br>[`EmailEvents`](../tables/emailevents.md) |
| [BEC - File sharing tactics - Dropbox](../content/85dea577-1c76-44ff-8cad-b47182874ddb.md) | LateralMovement | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [BEC - File sharing tactics - OneDrive or SharePoint](../content/da745698-da8a-40c5-b527-2e9328c2cefe.md) | LateralMovement | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Bad email percentage of Inbound emails](../content/242561f3-568a-4864-be15-fbc85b2e77f9.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Bitsadmin Activity](../content/bba7bbbe-5aa3-4c08-bd23-dd6cd8ccaf20.md) | Persistence, CommandAndControl, Exfiltration | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Blocked Clicks Trend](../content/ac738108-451b-4341-ba38-021a00665415.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Bulk Emails by Sender Bulk Complaint level](../content/2e903da3-32fe-46b0-8df7-5f39e55db17e.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [C2-NamedPipe](../content/f78255b6-8f91-4cf3-a25c-e1144b7b5425.md) | CommandAndControl | [`DeviceEvents`](../tables/deviceevents.md) |
| [Calculate overall MDO efficacy](../content/ff56a21d-fc95-4c11-8f9d-cc59c48cd4e6.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`EmailEvents`](../tables/emailevents.md)<br>[`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [Campaign with randomly named attachments](../content/25150085-015a-4673-9b67-bc6ad9475500.md) | InitialAccess | [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) |
| [Campaign with suspicious keywords](../content/9b086a51-e396-4718-90d7-f7b3646e6581.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Check for multiple signs of Ransomware Activity](../content/4f669adc-2c00-4bc8-896b-e59f068dcb18.md) | Execution, Impact, Exfiltration | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Clear System Logs](../content/6284b962-ab0d-46d8-a47f-1eb1ac1be463.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Clearing of forensic evidence from event logs using wevtutil](../content/3dd9ab09-0ea3-4f47-ba10-f84045ab52c3.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [CompAuth Failure Trend](../content/eb560458-d96f-4c68-acbb-14b3c706ebe7.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Credential Harvesting Using LaZagne](../content/79f9bb6b-6d31-412e-b3bc-6e5ad1303112.md) | CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Custom detection-Emails with QR from non-prevalent senders](../content/516046e8-a460-4f7b-86eb-421d3a9cdff1.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md)<br>[`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [DKIM Failure Trend](../content/14d47b2a-62b3-4c7b-819c-699e264c581d.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [DLLHost.exe WMIC domain discovery](../content/f086d58b-c44b-4fae-903b-f65ad042a4ee.md) | Reconnaissance | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [DMARC Failure Trend](../content/62d6a2e6-4583-4538-a476-a5b3c672657b.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Deimos Component Execution](../content/fe9edc77-1b6c-4f1e-a223-64b580b50187.md) | Execution, Collection, Exfiltration, Impact | [`DeviceEvents`](../tables/deviceevents.md) |
| [Deletion of data on multiple drives using cipher exe](../content/cb2fb8f9-89bd-485e-8422-da8cb6c7bc23.md) | Impact | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detect CISA Alert (AA22-117A) 2021 Top Routinely Exploited Vulnerabilities](../content/180bacfd-18de-450a-8e0c-7d2fa399ca49.md) | Execution | [`DeviceTvmSoftwareVulnerabilitiesKB`](../tables/devicetvmsoftwarevulnerabilitieskb.md) |
| [Detect MaiSniper](../content/e17ddfc6-7478-443b-99ff-286f3d09b8aa.md) | InitialAccess, CredentialAccess, Collection, Exfiltration | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detect Malicious use of MSIExec](../content/7a5597de-7e99-470d-944f-acb163b9cb14.md) | Execution, PrivilegeEscalation, CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detect Malicious use of Msiexec Mimikatz](../content/58e6170e-0512-4485-9638-463fdde85b0e.md) | Execution, CredentialAccess, PrivilegeEscalation | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detect Potential kerberoast Activities](../content/35ca729c-04b4-4f6c-b383-caed1b85226e.md) | LateralMovement | [`IdentityLogonEvents`](../tables/identitylogonevents.md) |
| [Detect Suspicious Commands Initiated by Webserver Processes](../content/fa2f7d8a-6726-465a-aa72-6f6e3d4c99d7.md) | Execution, DefenseEvasion, Discovery | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detect Suspicious Mshta Usage](../content/81f02314-2ff5-45cb-a35d-0deb546a0104.md) | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detections by detection methods](../content/1c51e10e-7f77-40bc-bd37-6aa55cdf94d6.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Determine Successfully Delivered Phishing Emails by top IP Addresses](../content/cdac93ef-56c0-45bf-9e7f-9cbf0ad06567.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Determine Successfully Delivered Phishing Emails to Inbox/Junk folder.](../content/cdac93ef-56c0-45bf-9e7f-9cbf0ad06123.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Devices with Log4j vulnerability alerts and additional other alert related context](../content/8fe88892-3a55-4220-9141-939a8e7a15c5.md) | InitialAccess, Execution | *Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Disabling Services via Registry](../content/06ea5081-cdea-40c8-b829-240ece951243.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Display Name - Spoof and Impersonation](../content/6a570927-8638-4a6f-ac09-72a7d51ffa3c.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Doppelpaymer Stop Services](../content/abf42310-51c7-4d7f-98d2-e5af09859aab.md) | Execution, DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [DopplePaymer Procdump](../content/89b31213-4350-4730-8d27-26667ce53894.md) | CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Dropping Payload via certutil](../content/4d11f63f-5b64-416e-8d77-266e4c6d382e.md) | InitialAccess, DefenseEvasion | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Email Top 10 Domains sending Spam](../content/6fe463ca-4cd3-4d97-a099-6b736f28a128.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Email Top 10 Targeted Users (Spam)](../content/9e4b7553-1113-4d40-bb6b-7daca7d7d255.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Email Top 15 Domains sending Spam with Additional Details](../content/c03e13ee-0e7a-4d05-b3f4-790b01bb30a5.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Email Top 15 Targeted Users (Spam) with Additional Details](../content/86f2b124-8caf-4b53-845a-87de3ffccbdf.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Email Top Domains sending Malware](../content/a2a7bede-cf55-47ed-9aeb-7b4c97079f4f.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Email Top Domains sending Phish](../content/0b197e26-7899-47ff-9be9-f7ba6dc949ea.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Email bombing attacks](../content/c1cac5ad-7aaa-40de-89aa-954f5a33a578.md) | Initial access | [`EmailEvents`](../tables/emailevents.md) |
| [Email containing malware accessed on a unmanaged device](../content/439f817c-845c-4dda-a8d9-5c1f6831cee9.md) | Execution | [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [Email containing malware sent by an internal sender](../content/07c85687-6dee-4266-9345-1e34de85d989.md) | LateralMovement | [`EmailEvents`](../tables/emailevents.md) |
| [Email malware detection report](../content/23dbd58b-23ce-42ae-b4d1-0dfdd35871ea.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Email sender IP address Geo location information](../content/0d5ae69d-bdb2-404d-8c8c-50ebe68b6a5b.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Emails containing links to IP addresses](../content/8e9a96dd-f85d-4f5e-a65f-dcc55d6d9935.md) | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Emails delivered having URLs from QR codes](../content/594fe5a1-53b6-466b-86df-028366c3994e.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Emails with QR codes and suspicious keywords in subject](../content/706b711a-7622-40f1-9ebb-331d1a0ff697.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Emails with QR codes from non-prevalent sender](../content/f708c866-073a-4107-a60b-ba6f86e54caa.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [End user malicious clicks](../content/d24e9c4a-b72a-4a85-89cd-83760ae61155.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Enumeration of Users & Groups for Lateral Movement](../content/29683151-e15d-4c0c-845b-892be89bf080.md) | - | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Expanding recipients into separate rows](../content/18fee342-8209-4270-9198-711646867e71.md) | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [External malicious Teams messages sent from internal senders](../content/9cb4a6eb-c7ae-44ac-b12b-c16ec63da385.md) | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [File Malware Detection Trend](../content/817043be-4b30-4e66-a742-8f601a78b08f.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [File Malware by Top Malware Families (Anti Virus)](../content/a924de5a-89ce-43c7-8adc-b130e5f1924c.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [File Malware by Top Malware Families (Safe Attachments)](../content/2de2de5d-87a3-4e13-9b97-5f42e44d0954.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Files Copied to USB Drives](../content/f350f0e7-0e52-434c-a113-197883219f00.md) | Exfiltration | [`DeviceEvents`](../tables/deviceevents.md)<br>[`FileCreation`](../tables/filecreation.md) |
| [Files share contents and suspicious sign-in activity](../content/11cc0e3f-9718-4ab5-be7b-d9c036ed6b0a.md) | InitialAccess | [`AADSignInEventsBeta`](../tables/aadsignineventsbeta.md)<br>[`EmailEvents`](../tables/emailevents.md) |
| [Good emails from senders with bad patterns](../content/e6259b03-622e-4e11-9c54-94987dad7c14.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Group quarantine release](../content/a12cac64-ea6d-46d4-91a6-262b165fb9ad.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [High Confidence Phish Released](../content/9e8faa62-7222-48a5-a78f-ef2d22f866dc.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`EmailEvents`](../tables/emailevents.md) |
| [Hunt for Admin email access](../content/e55e178e-48ba-4313-918a-2d3e16a95441.md) | PrivilegeEscalation | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Hunt for TABL changes](../content/bc2d8214-afb6-4876-b210-25b69325b9b2.md) | DefenseEvasion | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Hunt for email bombing attacks](../content/dd4a480b-aa24-4b62-b1f3-f538d8abbdfb.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Hunt for email conversation take over attempts](../content/fb46ca1b-0b46-4d9c-b3b3-2f8f807e9f72.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Hunt for malicious URLs using external IOC source](../content/57f95ba7-938d-4a76-b411-c01034c0d167.md) | InitialAccess | - |
| [Hunt for malicious attachments using external IOC source](../content/0da830c3-5d0e-4b98-bfa1-d5131a8d0ebe.md) | InitialAccess | - |
| [Hunt for malicious messages using External Threat Intelligence](../content/28c79831-120c-4028-8a2b-4e4ae3082148.md) | InitialAccess | - |
| [Hunting for sender patterns](../content/68aa199c-259b-4bb0-8e7a-8ed6f96c5525.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Hunting for user signals-clusters](../content/8c852f12-499f-499b-afc1-25c50aa9b462.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Imminent Ransomware](../content/846bf25e-3d2d-4122-9b60-adfadd2fc616.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Impersonation Detections Trend](../content/416cd270-6327-441a-9304-940c832cf361.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Impersonation Detections by Detection Technology](../content/15a17150-811d-4829-a3d6-489139c9ff5e.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Impersonation Detections by Detection Technology Trend](../content/418e8859-b22a-4fd4-b273-5433e054cdc7.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Inbound Teams messages by sender domains](../content/f304b75a-a2a0-45fb-814c-40b6e08211f0.md) | DefenseEvasion | [`MessageEvents`](../tables/messageevents.md) |
| [Inbound emails with QR code URLs](../content/f6354c94-3a95-4235-8530-414f016a7bf6.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Inbox rule changes which forward-redirect email](../content/54569b06-47fc-41ae-9b00-f7d9b61337b6.md) | Persistence | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [JNLP-File-Attachment](../content/b6392f39-a1f4-4ec8-8689-4cb9d28c295a.md) | InitialAccess | [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) |
| [Java Executing cmd to run Powershell](../content/a18e8bcf-e05d-4e45-bc6e-2c5004729fbd.md) | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Judgement Panda Exfil Activity](../content/d7b7dcad-d806-4a61-b8fc-0d7c9c45bdec.md) | Collection | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [LSASS Credential Dumping with Procdump](../content/0b985ed8-aacd-41ba-9b17-489be9224159.md) | CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [LaZagne Credential Theft](../content/829cf5ba-39d5-4986-814e-d46f8437c27b.md) | CredentialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [LemonDuck Registration Function](../content/147c4c0a-7241-4ce9-9b71-0aecb8a2b59f.md) | Execution, Persistence, LateralMovement, CommandAndControl | [`DeviceEvents`](../tables/deviceevents.md) |
| [Listing Email Remediation Actions via Explorer](../content/99713387-9d61-49eb-8edc-f51153d8bb01.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Local Admin Group Changes](../content/63142c12-5d8b-48cf-a0f6-b523c855497c.md) | Persistence | [`DeviceEvents`](../tables/deviceevents.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Local time to UTC time conversion](../content/712ffdd8-ddce-4372-85dd-063029b418cf.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [MDO Threat Protection Detections trend over time](../content/eb0e4edb-f423-49f8-a02a-4ededdd30dd5.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [MDO daily detection summary report](../content/deb4b2c6-c10e-4044-8cf4-84243e40db73.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [MDO_CountOfRecipientsEmailaddressbySubject](../content/430a9c0d-f3ce-46a3-a994-92b3ada0d1b2.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [MDO_CountOfSendersEmailaddressbySubject](../content/b95994d1-1008-4c42-a74f-9f2967e39ed6.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [MDO_Countofrecipientsemailaddressesbysubject](../content/f840db5b-87c9-43c8-a8c3-5b6b83838cd4.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [MDO_SummaryOfSenders](../content/a96c1571-1f7d-48dc-8287-7df5a5f0d987.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [MDO_URLClickedinEmail](../content/2c6e7f75-d83c-4344-afdc-83335fe550e6.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [MITRE - Suspicious Events](../content/8722489a-d6f1-4b66-98e9-e3dfda902019.md) | - | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Mail item accessed](../content/81ede5df-2ec3-40a5-9dff-1fe6a841079d.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Mail reply to new domain](../content/da7b973a-0045-4fd6-9161-269369336d24.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Mailflow by directionality](../content/6b478186-da3b-4d71-beaa-aa5b42908499.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malicious Clicks allowed (click-through)](../content/ba4f7e56-a2f8-4a30-b848-200fdc7fc3a2.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Malicious Emails with QR code Urls](../content/13260191-fb10-4a36-9ca1-2bbc0aaf77d0.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md)<br>[`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Malicious Teams messages by URL detection methods](../content/b3470167-2608-44a2-bd2f-8ebad88a27d5.md) | DefenseEvasion | [`MessageEvents`](../tables/messageevents.md) |
| [Malicious Teams messages received from external senders](../content/3cb281a9-34e5-4864-8303-6c07e096818b.md) | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Malicious URL Clicks by workload](../content/c2b4ef3a-216d-4506-8b35-6a1b0f2a3bf7.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Malicious Use of MSBuild as LOLBin](../content/1850a459-b009-43d0-a575-8284b737eef8.md) | CommandAndControl | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Malicious email senders](../content/63c799bc-7567-4e4d-97be-e143fcfaa333.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malicious emails detected per day](../content/da932998-81dd-4be4-963c-f4890cb4192e.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malicious mails by sender IPs](../content/a8ccbf35-4c6d-4a8f-8c42-04fd9b000a27.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malware Detections Trend](../content/e1dbe1d2-785a-4ecd-a1c0-233fc0e990bc.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malware Detections by Detection technology](../content/15d255f7-57a6-4b23-bd89-376930d3a305.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malware Detections by Detection technology Trend](../content/db79eb5a-785a-400a-a7ef-7285dde8e116.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malware Detections by delivery location](../content/b3a4b803-06f6-46d8-9220-b3a53e85ce4f.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Malware detections by Workload Locations](../content/ef29d6b6-9192-46aa-b16a-082c2da2f78f.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Malware detections by Workload Type](../content/af541ae2-9bb4-4737-a8ea-4fa261bc3866.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Message from an Accepted Domain with DMARC TempError](../content/4c021477-38f0-409e-869b-11056fcd47f1.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Message with URL listed on OpenPhish delivered into Inbox](../content/a8c66aec-2000-45d8-8481-36aaa17f1033.md) | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Microsoft Teams chat initiated by a suspicious external user](../content/b8eb3e2e-0f95-458e-b6d1-fe36a0ee8310.md) | InitialAccess | *Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [MosaicLoader](../content/0efbcea0-1dc0-4844-8a9c-3a1d98fc1697.md) | CommandAndControl | [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) |
| [New TABL Items](../content/92b76a34-502e-4a53-93ec-9fc37c3b358c.md) | DefenseEvasion | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Number of unique accounts performing Teams message Admin submissions](../content/dc230eec-acc2-482f-8601-25125c8ff122.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Number of unique accounts performing Teams message User  submissions](../content/489ad959-48eb-4c34-bed6-764cfd39214d.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Office Apps Launching Wscipt](../content/fe912310-32f5-4256-933b-d4b45e7e6e54.md) | LateralMovement, Collection, CommandAndControl | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Personalized campaigns based on the first few keywords](../content/dc7e1eb5-16f5-4ad5-96a1-794970f4b310.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Personalized campaigns based on the last few keywords](../content/54d3455d-27e0-4ceb-99f9-375abd620151.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Phish Detections (High) by delivery location](../content/76c77c8a-bd2a-489a-af52-97291211e4e4.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Phish Detections (Normal) by delivery location](../content/4d86021c-cad7-489b-a8c8-dddecb87a2ef.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Phish Detections Trend](../content/fbe7a9d2-507e-4974-9e9a-d1cba3907f67.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Phish Detections by Detection technology](../content/4c30fab1-db4f-4a64-b66b-51478e43a477.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Phish Detections by Detection technology Trend](../content/dd6efecd-7fe5-41b1-a122-8e0a15de9451.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Phish Detections by delivery location trend](../content/b20e56b8-e335-43d9-b7b3-43c034c43aea.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [PhishingEmailUrlRedirector (1)](../content/08aff8c6-b983-43a3-be95-68a10c3d35e6.md) | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Possible Teams phishing activity](../content/01cf63bd-debd-4d03-847c-d19c31844501.md) | InitialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Possible device code phishing attempts](../content/ad76e484-f159-4d23-99ee-e734f0b8b60b.md) | InitialAccess | - |
| [Possible partner impersonation in external Team messages](../content/f094e9f1-2d55-450d-af1a-0fdcd290f8c4.md) | DefenseEvasion | [`MessageEvents`](../tables/messageevents.md) |
| [Post Delivery Events by Admin](../content/21bafecb-ae8f-4667-b7d6-144e047cb602.md) | InitialAccess | [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [Post Delivery Events by Location](../content/5e8d5202-ffdc-4d16-ad33-d56eb319c175.md) | InitialAccess | [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [Post Delivery Events by ZAP type](../content/dbc25434-bbe7-4517-bf4b-48ad9cb4e980.md) | InitialAccess | [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [Post Delivery Events over time](../content/dd9df55e-79b7-48e0-9d19-965fcadae5e9.md) | InitialAccess | [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [Potential OAuth phishing email delivered into Inbox](../content/08113d6f-3c95-45ba-94df-4fdd7f35d944.md) | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Potential Ransomware activity related to Cobalt Strike](../content/74cc0176-3900-440e-b179-45d6a957145a.md) | Execution, Persistence | *Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Potentially malicious URL click in Teams](../content/8d25156b-2ac4-4528-b1b1-f8427267f9f2.md) | InitialAccess | [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) |
| [Potentially malicious svg file delivered to Inbox](../content/1b56831b-3713-4c9c-ac75-a7e330623076.md) | InitialAccess | [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) |
| [PowerShell Downloads](../content/3842e70d-45be-43b1-8206-4ebc4c305f34.md) | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [PowerShell adding exclusion path for Microsoft Defender of ProgramData](../content/88707168-d4a4-4ca7-a516-b2ee0310af1b.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [PrintNightmare CVE-2021-1675 usage Detection](../content/8f404352-c4ff-44d1-8d70-c50ee2fad8f8.md) | PrivilegeEscalation, LateralMovement, Execution | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Qakbot Campaign Self Deletion](../content/63ecff0f-3a86-468b-8c9e-a7a88fe33ebb.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Qakbot Discovery Activies](../content/e18109aa-f252-48ec-b115-1b7c16e1174f.md) | DefenseEvasion, Discovery, Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Qakbot Reconnaissance Activities](../content/d6991ef1-b225-4780-b6a6-cfe9b5278f5e.md) | Discovery | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Quarantine Phish Reason](../content/36cf7ce5-7264-46d9-9f47-57b59049b44f.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Quarantine Phish Reason trend](../content/79bed402-09bc-453b-ab92-8b1411e683fa.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Quarantine Release Email Details](../content/6f96f6d7-d972-421e-a59f-6b9a8de81324.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`EmailEvents`](../tables/emailevents.md) |
| [Quarantine Spam Reason](../content/bde9d9fc-e166-4628-91f7-fb86ace93af0.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Quarantine Spam Reason trend](../content/32a981ad-cd5a-4d80-8c6c-d59b9893c019.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Quarantine release trend](../content/9f135aef-ad25-4df2-bdab-8399978a36a2.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Quarantine releases by Detection Types](../content/23e6d66b-511a-43fd-9863-6924da60319a.md) | InitialAccess | [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |
| [Rare Domains in External Teams Messages](../content/b2a36ca5-b6a4-4f27-a7d8-7f044885cccf.md) | InitialAccess, Execution | [`MessageEvents`](../tables/messageevents.md)<br>[`rareDomains`](../tables/raredomains.md) |
| [Rare Process as a Service](../content/96976bb1-1993-45b8-a477-8236ee93976b.md) | Persistence | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Recon with Rundll](../content/76c14475-9a22-4cc1-922c-437d7f614a36.md) | Discovery, Collection, CommandAndControl | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |
| [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/b1f8aac2-766d-47ec-8787-84bc7692ff77.md) | DefenseEvasion | [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |
| [Regsvr32 Rundll32 with Anomalous Parent Process](../content/54ea2379-28e7-48e1-8dfd-aaf8fb1331ba.md) | DefenseEvasion | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Remote File Creation with PsExec](../content/a7214393-9da7-432e-9b41-fb02b4f740bd.md) | LateralMovement | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Risky sign-in attempt from a non-managed device](../content/8d298b5c-feca-4add-bd42-e43e0a317a88.md) | InitialAccess | [`AADSignInEventsBeta`](../tables/aadsignineventsbeta.md) |
| [Robbinhood Driver](../content/4713d763-122d-419c-bf6f-bdef111cd8e2.md) | Execution, DefenseEvasion | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [SAM Name Change CVE-2021-42278](../content/1299962c-804e-459a-8d3d-41d68bc45ba2.md) | PrivilegeEscalation, Vulnerability | [`IdentityDirectoryEvents`](../tables/identitydirectoryevents.md) |
| [SPF Failure Trend](../content/79755078-7be8-4f13-a8e7-1ce87cb7d5c0.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Safe Attachments detections](../content/16eda414-1550-4cdc-8512-0769901d3f05.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [SafeLinks URL detections](../content/492f1ea1-37c3-410a-a2f2-4e4eae2ff7f9.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Scheduled Task Creation](../content/1ddee78f-7508-4f4a-9b6b-d2927724217d.md) | Persistence | [`DeviceEvents`](../tables/deviceevents.md) |
| [Sender recipient contact establishment](../content/b2beec6a-2c1c-4319-a191-e70c2ee42857.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Service Accounts Performing Remote PS](../content/cedc5bfa-01f6-4e54-b87b-1edbe430e27a.md) | LateralMovement | - |
| [Shadow Copy Deletions](../content/aa3a8508-c0ff-404d-8d5c-4e7f548b0d86.md) | Impact | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Snip3 Malicious Network Connectivity](../content/b3470e40-39ae-4c28-9282-440038f6f964.md) | CommandAndControl, Exfiltration | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |
| [Spam Detections (High) by delivery location](../content/45c47684-6650-44b6-81c0-951522d0c435.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam Detections (Normal) by delivery location](../content/99e1246e-c1a9-4794-8e96-eb906c73c529.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam Detections by Detection technology](../content/16cfa413-238f-4355-9f8a-4b97ce7572ac.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam and Phish allowed to inbox by Admin Overrides](../content/02e237ed-f7b5-49dd-92e6-1b340d5e37fb.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam and Phish allowed to inbox by User Overrides](../content/b1f797d1-6ea4-4f8f-b663-6c8a1c1018e9.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam detection by IP and its location](../content/316f8777-09fd-480b-a726-21f521fa990f.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam detection by delivery location](../content/7e93ce37-0cc5-4aa9-b30a-07772affa481.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam detection technologies](../content/f290d544-c499-4b23-8a7e-c4cbb7ab6316.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spam detection trend](../content/ae690d6f-0ea5-4617-95cf-1ed9a5fcb329.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoof Detections Trend](../content/09b263e1-9c73-4585-a55c-bc209e148e14.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoof Detections by Detection Technology](../content/53139a92-eb64-46d2-be97-e752a71e7021.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoof Detections by Detection Technology Trend](../content/1dce39ec-8a64-4e49-9d6e-926ee6f04c39.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoof and impersonation detections by sender IP](../content/b3180ac0-6d94-494a-8b8c-fcc84319ea6e.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoof and impersonation phish detections](../content/011c3d48-f6ca-405f-9763-66c7856ad2ba.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoof attempts with auth failure](../content/5971f2e7-1bb2-4170-aa7a-577ed8a45c72.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoofing attempts from Specific Domains](../content/cdac93ef-56c0-45bf-9e7f-9cbf0ad034234.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Spoolsv Spawning Rundll32](../content/3cc2127f-d9ca-46a0-9628-89f702be82b3.md) | PrivilegeEscalation, Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Stopping multiple processes using taskkill](../content/4dd31bd5-11a3-4b9c-a7c5-4927ab4f2a77.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Suspicious DLLs in spool Folder](../content/0b5b076b-9a1c-440c-a11f-8471a75f46fd.md) | PrivilegeEscalation, Execution | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Suspicious Files in spool Folder](../content/2d16b6fc-eb63-491c-a2c2-1160e2e41dcf.md) | PrivilegeEscalation, Execution | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Suspicious Image Load related to IcedId](../content/853bacff-45cf-42f2-b2a6-6727fcf183ef.md) | Execution, DefenseEvasion | [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) |
| [Suspicious Spoolsv Child Process](../content/084a6349-b3d6-4528-91e4-4de5d52424e5.md) | PrivilegeEscalation, Execution | [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) |
| [Suspicious Teams Display Name](../content/02bdbd93-02b7-40e4-9468-d501463e57af.md) | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Suspicious Tomcat Confluence Process Launch](../content/c5b3e559-7c44-442c-9e73-c753abb02c13.md) | Execution, PrivilegeEscalation | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Suspicious sign-in attempts from QR code phishing campaigns](../content/3131d0ba-32c9-483e-a25c-82e26a07e116.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Teams Admin submission of Malware and Phish daily trend](../content/fc47e222-c348-43ca-ba11-b4628fe243cd.md) | DefenseEvasion | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Teams Admin submission of No Threats daily trend](../content/b2a6440b-6ebd-4d86-aa33-cfe11f9defcf.md) | DefenseEvasion | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Teams Admin-User Submissions Grading Verdicts](../content/20c9d89a-ad65-48f4-ba14-605715af640a.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Teams Malware ZAP](../content/4684afc7-3d05-4ec1-8fb0-342707d0ac5d.md) | InitialAccess | [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) |
| [Teams Message with URL listed on OpenPhish](../content/45d955e0-0e34-4ce7-833d-c14b43d69677.md) | InitialAccess | [`MessageUrlInfo`](../tables/messageurlinfo.md) |
| [Teams Phish ZAP](../content/abd7e757-7737-4c9f-af7a-92e87172ff4f.md) | InitialAccess | [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) |
| [Teams Spam ZAP](../content/008ff55b-0588-4d39-af03-c08f1bb519d7.md) | InitialAccess | [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) |
| [Teams URL clicks actions summarized by URLs clicked on](../content/161b163c-0805-46fd-abda-2fe5f0a5185e.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Teams URL clicks through actions on Phish or Malware URLs summarized by URLs](../content/68aaf2af-83ac-4f9e-9680-4050700b93f9.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Teams User submissions daily trend](../content/ace8e98a-660b-4fa9-a877-60644eb83344.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Teams blocked URL clicks daily trend](../content/71117505-5a71-431e-8605-8896960affe5.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Teams communication from suspicious external users](../content/c3a6f568-8200-4f2f-88b8-a4df5eb54ba9.md) | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Teams communication to suspicious external users](../content/12eeae9e-8f0a-4b8c-b437-31c998f15af8.md) | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Teams message ZAPed with the same URL in Email](../content/8b7a84e9-5831-4e90-9b98-bd57493c6cc9.md) | InitialAccess | [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) |
| [Teams messages from a specific sender by ThreadType](../content/f6f317c4-8ebe-4f93-9068-720705a75c65.md) | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Teams messages with suspicious URL domains](../content/5515296b-8f4c-42f1-a5ad-0574fbf99f23.md) | InitialAccess | [`MessageUrlInfo`](../tables/messageurlinfo.md) |
| [Teams post delivery events daily trend](../content/fea3f03b-0723-4f3e-9f6a-c8a6a67fbde0.md) | InitialAccess | [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) |
| [Teams users clicking on suspicious URL domains](../content/b1fa5bb7-9c4e-4d4f-826a-afc1fbe8c2cf.md) | InitialAccess | [`MessageUrlInfo`](../tables/messageurlinfo.md) |
| [Top 10 Attacked user by Phish messages](../content/8b3bd5c3-1f37-4131-8b3a-a0f6d540e56d.md) | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Top 10 Detection Overrides - Admin Email Submissions (FN)](../content/72f939fe-c77b-4c25-91b4-3f784c9c58c3.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10 Domains sending Malicious Emails (Malware+Phish+Spam)](../content/af183f01-6d98-4fca-8ca4-63577b78a26e.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 External Senders (Malware)](../content/530ef5e4-7ee4-4d70-a8e2-a06459605c02.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 External Senders (Phish)](../content/db9789ab-0636-4ea6-b779-1b72b4b64aac.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 External Senders (Spam)](../content/86c7d21b-2081-419d-bc2e-7bc909d61eef.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 External Senders (Spam)](../content/6f606826-b995-4a8d-8c2c-ee08e3d1194a.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 External senders sending Teams phishing messsages](../content/0bd46e27-9d5a-4abd-889b-829a8b4d29a4.md) | DefenseEvasion | [`MessageEvents`](../tables/messageevents.md) |
| [Top 10 Targeted Users (Malware+Phish+Spam)](../content/b8330f6e-fc47-40ce-b225-5d3b055c6446.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 URL domains attacking organization](../content/27ee28e7-423b-48c9-a410-cbc6c8e21d25.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 Users clicking on Malicious URLs (Malware)](../content/5a84e13a-bb17-4124-9564-d74cdb84c124.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Top 10 Users clicking on Malicious URLs (Malware+Phish+Spam)](../content/7d7a3d3f-22db-4cdf-ba67-c57215777a3c.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Top 10 Users clicking on Malicious URLs (Phish)](../content/a937905e-ee5c-406c-ab86-8e2581240112.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Top 10 Users clicking on Malicious URLs (Spam)](../content/3a2fdf32-ebe7-4f65-a1c3-fc7faf23ae90.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Top 10 Users clicking on malicious URLs in Teams](../content/b3b507e9-9f92-4751-8463-fc77394fed91.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Top 10 domains sending Bulk email](../content/147131b3-8b57-4c50-b981-5a951ed82272.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 10 external senders sending Teams messages](../content/511406e2-2bdf-4b4d-a436-17dadbf4829f.md) | DefenseEvasion | [`MessageEvents`](../tables/messageevents.md) |
| [Top 10 sender domains - Admin Teams message submissions FN](../content/132dffdf-3ee0-4748-8509-fbd3a92e5c9f.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10 sender domains - Admin email submissions (FN)](../content/da7eecca-ecb8-4b8e-a111-62d2b48e2e69.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10 sender domains - Admin email submissions (FP)](../content/4c786e9a-b570-47bc-877f-7f3da87a4673.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10 sender domains - Teams user submissions FN or FP](../content/bebb6652-3c52-4358-a946-ecd63cddf082.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10 senders - Teams users submissions FN or FP](../content/2d8448f5-c0a2-46d7-a004-e062970ccb7b.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10 senders of  Admin Teams message submissions FN](../content/49071a21-fbb6-472f-932f-5b6ca1a25883.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10 senders of  Admin Teams message submissions FP](../content/f82f3d63-b7f2-494d-8254-612405702dd4.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top 10% of most attacked users](../content/e3b7b5c1-0e50-4dfb-b73a-c226636eaf58.md) | InitialAccess | - |
| [Top 100 malicious email senders](../content/12225f50-9d41-4b78-8269-cc127d98654c.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top 100 senders](../content/cadf6e78-2a9a-4fb5-b788-30a592d699d3.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top Domains Outbound with Emails with Threats Inbound (Partner BEC)](../content/f9442d20-eff8-4751-9a75-6451aeace687.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top External Sender domains - Malware](../content/90cd91d1-7b90-421c-a5c9-0479b6b7e6a2.md) | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Top External Sender domains - Phish](../content/0c68250b-44b5-46f4-8cac-f3e7149e8c61.md) | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Top External Sender domains - Spam](../content/0c829a3c-ead1-4ebc-92c9-2e85abb1edeb.md) | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Top External malicious Senders](../content/74b581fc-e8cb-4b50-9d82-7b91d3a88a08.md) | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Top Malware Families](../content/0d16e85e-82ec-460a-bf48-e90164464f7c.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top Spoof DMARC detections by Sender domain (P1/P2)](../content/23b646e8-b885-4cde-a9ab-1e35fa5e37a7.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top Spoof external domain detections by Sender domain (P1/P2)](../content/3dbaa9c1-5e69-40a9-bacb-8cbdb4a0e6cb.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top Spoof intra-org detections by Sender domain (P1/P2)](../content/ba97d6b9-f82e-4917-9c07-4c0028bbd32d.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top Users receiving Malware](../content/c6bbcac2-a6b8-4537-a32a-6f1367e6aa44.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top Users receiving Phish](../content/87846aad-624c-4e18-b963-81bedd7123a2.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top accounts performing Teams admin submissions FN or FP](../content/0a29c9f0-e8d4-4339-a196-52bb3a090a79.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top accounts performing Teams user submissions FN or FP](../content/9ffbd78f-c87c-4fd2-96ec-fd46e27bbd21.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top accounts performing admin submissions (FN)](../content/d236f728-8b0f-4b4f-acf7-e4707993b841.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top accounts performing admin submissions (FP)](../content/8b0bae20-687f-47ca-bc2e-8dabbed9cbae.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top accounts performing user submissions](../content/47506508-dee4-4d4d-93a8-1c78d63cd2eb.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Top domains outbound sending Malicious Teams messages inbound](../content/ab2f1fd6-1023-425e-a429-ff74db5709be.md) | InitialAccess | [`MessageEvents`](../tables/messageevents.md) |
| [Top external malicious senders](../content/9d6c8c17-06b0-4044-b18e-35eb3dfc5cf2.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top malicious URLs clicked by users in Teams](../content/6610945e-9496-4ef4-9bc4-a511a3f2a477.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [Top outbound recipient domains sending inbound emails with threats](../content/38d6e2fb-a804-4170-8d32-d251ecd6bcd2.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top policies performing admin overrides](../content/c73ae295-d120-4f79-aaed-de005f766ad2.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top policies performing user overrides](../content/fe2cb53e-4eb3-4676-87c1-f80d2813f542.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Top targeted users](../content/a1664330-810a-473b-b354-acbaa751a294.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Total Emails with Admin Overrides (Allow)](../content/8f8fd7c8-277a-48c3-ad67-c80b3037c5af.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Total Emails with Admin Overrides (Block)](../content/bd6aae91-6233-430b-a5af-15c6406a7770.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Total Emails with User Overrides (Allow)](../content/e6b3edc5-ec6f-44ae-9bb4-60c9ea49154e.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Total Emails with User Overrides (Block)](../content/74e076da-58e8-436d-b7bc-68888dbb6091.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Total Submissions by Submission Type](../content/53c58a33-668d-46e1-9714-5892c87650d9.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Total Submissions by Submission Type](../content/8cde246b-7ed1-429c-933a-f7d0363dbbc0.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Total number of MDO Teams protection detections daily](../content/75ade06c-7326-4e0d-9dfb-27e05043525b.md) | DefenseEvasion | [`MessageEvents`](../tables/messageevents.md) |
| [Total number of detections by MDO](../content/0717b136-a1ef-4af0-a911-e189d0064099.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Turning off services using sc exe](../content/9674f529-f0e9-4305-862d-479ccc9e28f1.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [URL Click attempts by threat type](../content/3eef362d-3aee-4950-9208-4afa6f7afbe9.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [URL Clicks by Action](../content/4620ece3-dceb-4151-8621-5a56351c97cd.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [URL click count by click action](../content/3f007cdc-86bf-4657-9015-05101a3e54f5.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [URL click on URLs in ZAP-d Teams messages](../content/2ae448b1-b27d-4043-a92f-ef10202cdb7a.md) | InitialAccess | [`MessagePostDeliveryEvents`](../tables/messagepostdeliveryevents.md) |
| [URL click on ZAP email](../content/efe27064-6d35-4720-b7f5-e0326695613d.md) | InitialAccess | *Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [URL clicks actions by URL](../content/bc46e331-3cb0-483d-9c90-989d2a59457f.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [URLClick details based on malicious URL click alert](../content/03e61096-20d0-46eb-b8e0-a507dd00a19f.md) | InitialAccess | *Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [URLs by location](../content/ab006655-d723-4844-9d5d-91cb3b020555.md) | InitialAccess | [`EmailUrlInfo`](../tables/emailurlinfo.md) |
| [Unusual Volume of file deletion by users](../content/2bdd260c-c687-4cb2-9992-87e5ce677678.md) | Impact | [`SigninLogs`](../tables/signinlogs.md) |
| [User Email Submission Trend (FN)](../content/9c4359a1-0bf9-45b3-9a1a-f333c437a061.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions (FN) - Top Detection Overrides by Admins](../content/58acf93f-27de-4af4-8a5f-d87ee59326f9.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions (FN) - Top Detection Overrides by Users](../content/0a9385bc-2ef9-4b0e-8834-12f796b08ca8.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions (FN) - Top Inbound P2 Senders](../content/12798858-1916-4b59-a85e-8a7a4f7b43cf.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [User Email Submissions (FN) - Top Inbound P2 Senders domains](../content/385aca1d-2135-40c6-af8e-030c9e086cf5.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [User Email Submissions (FN) - Top Intra-Org P2 Senders](../content/b78eddd9-ebe5-42ab-95b4-928a782b52b5.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions (FN) - Top Intra-Org Subjects](../content/cbf3abc0-2b2d-4852-ab7a-9f7a1231997e.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions (FN) by Submission Type](../content/289283e9-9f63-488c-8d62-fe9c598f3cd5.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions (FN-FP) by Grading verdict](../content/abdca3e6-c198-404a-b95c-f09ddfed2027.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions accuracy vs Admin review verdict](../content/d78bad8c-3d94-4a73-bdbe-1c567e3d6d62.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User Email Submissions by Admin review status (Mark and Notify)](../content/201cb524-b4b4-479a-9637-da35cfa1e30a.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User clicked through events](../content/f075d4c4-cf76-4e5d-9c2d-9ed524286316.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [User clicks on malicious inbound emails](../content/891f4865-75e5-4d40-bc24-ebf97da3ca9a.md) | InitialAccess | - |
| [User clicks on phishing URLs in emails](../content/d823da0e-1334-4a66-8ff4-2c2c40d26295.md) | InitialAccess | [`UrlClickEvents`](../tables/urlclickevents.md) |
| [User email submissions (FN) from Junk Folder](../content/300b0d05-e99e-4349-ab2b-ec12ff5c2da1.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [User not covered under display name impersonation](../content/e90345b3-439c-44e1-a85d-8ae84ad9c65b.md) | InitialAccess | *Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [User reported submissions](../content/0bd33643-c517-48b1-8211-25a7fbd15a50.md) | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Webserver Executing Suspicious Applications](../content/761230a3-71ad-4522-bfbc-1dca698ffc42.md) | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Windows Print Spooler Service Suspicious File Creation](../content/daa347a4-8251-43a7-9730-32f22aa741ab.md) | PrivilegeEscalation, LateralMovement | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Zero day threats](../content/95b0c7ed-2853-4343-80a9-ab076cf31e51.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Zero-day Malware Detections Trend](../content/a370ad6f-e7fa-4740-ab9e-cb5560e3599f.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [Zero-day Phish Detections Trend](../content/80f357a6-6bb4-4b2b-a88c-265fccafc794.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |
| [referral-phish-emails](../content/cdc4da1c-64a1-4941-be59-1f5cc85481ab.md) | InitialAccess | [`EmailEvents`](../tables/emailevents.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MicrosoftDefenderForEndPoint](../content/microsoftdefenderforendpoint-microsoft-defender-xdr.md) | [`DeviceEvents`](../tables/deviceevents.md)<br>[`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceNetworkInfo`](../tables/devicenetworkinfo.md)<br>[`FileCreation`](../tables/filecreation.md)<br>[`avDetections`](../tables/avdetections.md)<br>[`usbDetections`](../tables/usbdetections.md) |
| [MicrosoftDefenderForIdentity](../content/microsoftdefenderforidentity-microsoft-defender-xdr.md) | [`IdentityDirectoryEvents`](../tables/identitydirectoryevents.md)<br>[`IdentityLogonEvents`](../tables/identitylogonevents.md)<br>[`IdentityQueryEvents`](../tables/identityqueryevents.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoftdefenderforoffice365detectionsandinsights-microsoft-defender-xdr.md) | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`EmailEvents`](../tables/emailevents.md)<br>[`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md)<br>[`UrlClickEvents`](../tables/urlclickevents.md)<br>[`baseQuery`](../tables/basequery.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Create an Attack Simulator training simulation for users who did not report a phishing attempt](../content/create-an-attack-simulator-training-simulation-for-users-who-did-not-report-a-phishing-attempt-microsoft-defender-xdr.md) | This playbook creates an educational Attack Simulator 'How-To Guide' simulation for end-users who fa... | - |

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

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
