# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Endpoint Threat Protection Essentials

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Endpoint Threat Protection Essentials Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The **Endpoint Threat Protection Essentials** solution provides content to monitor, detect and investigate threats related to windows machines. The solution looks for things like suspicious commandlines, PowerShell based attacks, LOLBins, registry manipulation, scheduled tasks etc. which are some of the most commonly used techniques by attackers when targeting endpoints.  
 
 **Pre-requisites:** 
 
 This is a [domain solution](https://learn.microsoft.com/en-us/azure/sentinel/sentinel-solutions-catalog#domain-solutions) and does not include any data connectors. The content in this solution supports the connectors listed below. Install one or more of the listed solutions, to unlock the value provided by this solution. 
 
 1. Windows Security Events 

 2. Microsoft Defender XDR 

 3. Windows Forwarded Events 

 **Keywords:** LOLBins, PowerShell, Registry, Lsass, Commandline, scheduled tasks, Malware. 

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.4 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-11-16 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Endpoint%20Threat%20Protection%20Essentials](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Endpoint%20Threat%20Protection%20Essentials) |
| **Dependencies** | [Windows Security Events](windows-security-events.md), [Microsoft Defender XDR](microsoft-defender-xdr.md), [Windows Forwarded Events](windows-forwarded-events.md) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> Supported Products

This solution uses ASIM parsers and supports the following products:

| Product |
|:--------|
| [Microsoft 365 Defender for endpoint](../asim/asim-products-index.md#microsoft-365-defender-for-endpoint) |
| [Microsoft Defender for IoT](../asim/asim-products-index.md#microsoft-defender-for-iot) |
| [Native](../asim/asim-products-index.md#native) |
| [Security Events](../asim/asim-products-index.md#security-events) |
| [SentinelOne](../asim/asim-products-index.md#sentinelone) |
| [Sysmon](../asim/asim-products-index.md#sysmon) |
| [Sysmon for Linux](../asim/asim-products-index.md#sysmon-for-linux) |
| [Trend Micro Vision One](../asim/asim-products-index.md#trend-micro-vision-one) |
| [VMware Carbon Black Cloud](../asim/asim-products-index.md#vmware-carbon-black-cloud) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This solution uses **3 ASIM parser(s)** for normalized data:

| Table | Used By Content |
|-------|----------------|
| [`_ASim_ProcessEvent_Create`](../asim/asimprocesseventcreate.md) | Hunting |
| [`imProcessCreate`](../asim/improcesscreate.md) | Hunting |
| [`imRegistry`](../asim/imregistry.md) | Hunting |

## Tables Used

This solution queries **7 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`DeviceEvents`](../tables/deviceevents.md) | Analytics, Hunting |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | Hunting |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | Hunting |
| [`Event`](../tables/event.md) | Analytics, Hunting |
| [`Image`](../tables/image.md) | Hunting |
| [`SecurityEvent`](../tables/securityevent.md) | Analytics, Hunting |
| [`WindowsEvent`](../tables/windowsevent.md) | Analytics, Hunting |

## Content Items

This solution includes **29 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 15 |
| Analytic Rules | 14 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Base64 encoded Windows process command-lines](../content/endpoint-threat-protection-essentials-base64-encoded-windows-process-command-lines-ca67c83e-7fff-4127-a3e3-1af66d6d4cad-01f53023.md) | Medium | Execution, DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Detecting Macro Invoking ShellBrowserWindow COM Objects](../content/endpoint-threat-protection-essentials-detecting-macro-invoking-shellbrowserwindow-com-objects-e7470b35-0128-4508-bfc9-e01cfb3c2eb7-54d0e1c8.md) | Medium | LateralMovement | [`Event`](../tables/event.md) |
| [Dumping LSASS Process Into a File](../content/endpoint-threat-protection-essentials-dumping-lsass-process-into-a-file-a7b9df32-1367-402d-b385-882daf6e3020-8e3af60d.md) | High | CredentialAccess | [`Event`](../tables/event.md) |
| [Lateral Movement via DCOM](../content/endpoint-threat-protection-essentials-lateral-movement-via-dcom-50cbf34a-4cdd-45d7-b3f5-8b53a1d0d14f-eb377b6e.md) | Medium | LateralMovement | [`Event`](../tables/event.md) |
| [Malware in the recycle bin](../content/endpoint-threat-protection-essentials-malware-in-the-recycle-bin-75bf9902-0789-47c1-a5d8-f57046aa72df-2b92e7a9.md) | Medium | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Potential Remote Desktop Tunneling](../content/endpoint-threat-protection-essentials-potential-remote-desktop-tunneling-d2e8fd50-8d66-11ec-b909-0242ac120002-811dbf83.md) | Medium | CommandAndControl | [`SecurityEvent`](../tables/securityevent.md) |
| [Process executed from binary hidden in Base64 encoded file](../content/endpoint-threat-protection-essentials-process-executed-from-binary-hidden-in-base64-encoded-file-d6190dde-8fd2-456a-ac5b-0a32400b0464-f2c6e93c.md) | Medium | Execution, DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Registry Persistence via AppCert DLL Modification](../content/endpoint-threat-protection-essentials-registry-persistence-via-appcert-dll-modification-c61ad0ac-ad68-4ebb-b41a-74296d3e0044-b5180a51.md) | Medium | Persistence | [`Event`](../tables/event.md) |
| [Registry Persistence via AppInit DLLs Modification](../content/endpoint-threat-protection-essentials-registry-persistence-via-appinit-dlls-modification-9367dff0-941d-44e2-8875-cb48570c7add-7d4d4858.md) | Medium | Persistence | [`Event`](../tables/event.md) |
| [Security Event log cleared](../content/endpoint-threat-protection-essentials-security-event-log-cleared-80da0a8f-cfe1-4cd0-a895-8bc1771a720e-2f5b4cb9.md) | Medium | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Suspicious Powershell Commandlet Executed](../content/endpoint-threat-protection-essentials-suspicious-powershell-commandlet-executed-b5153fb3-ada9-4ce4-9131-79c771efb50d-34e7bcf0.md) | Medium | Execution | [`DeviceEvents`](../tables/deviceevents.md) |
| [WDigest downgrade attack](../content/endpoint-threat-protection-essentials-wdigest-downgrade-attack-f6502545-ae3a-4232-a8b0-79d87e5c98d7-c50de150.md) | Medium | CredentialAccess | [`Event`](../tables/event.md) |
| [Windows Binaries Executed from Non-Default Directory](../content/endpoint-threat-protection-essentials-windows-binaries-executed-from-non-default-directory-15049017-527f-4d3b-b011-b0e99e68ef45-75e820c5.md) | Medium | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Windows Binaries Lolbins Renamed](../content/endpoint-threat-protection-essentials-windows-binaries-lolbins-renamed-cbf6ad48-fa5c-4bf7-b205-28dbadb91255-7714bcc6.md) | Medium | Execution | [`Event`](../tables/event.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Backup Deletion](../content/endpoint-threat-protection-essentials-backup-deletion-56ebae61-89cf-42d9-99f4-3dff8ba33885-e1c87558.md) | Impact | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`imProcessCreate`](../asim/improcesscreate.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Certutil (LOLBins and LOLScripts, Normalized Process Events)](../content/endpoint-threat-protection-essentials-certutil-lolbins-and-lolscripts,-normalized-process-events-eb022863-9ae2-41d4-b633-29e4d024b76f-bf894765.md) | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_ASim_ProcessEvent_Create`](../asim/asimprocesseventcreate.md) |
| [Detect Certutil (LOLBins and LOLScripts) Usage](../content/endpoint-threat-protection-essentials-detect-certutil-lolbins-and-lolscripts-usage-0e429446-2798-49e4-924d-c37338f24e23-bc9b437b.md) | CommandAndControl | [`Event`](../tables/event.md) |
| [Download of New File Using Curl](../content/endpoint-threat-protection-essentials-download-of-new-file-using-curl-7108c86b-a3ef-42d0-b50b-3e251fb1f84c-09e03acc.md) | CommandAndControl | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [Execution of File with One Character in the Name](../content/endpoint-threat-protection-essentials-execution-of-file-with-one-character-in-the-name-299472c4-8382-4c5b-82d9-718cda193393-14ba3a7f.md) | Execution | [`Event`](../tables/event.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Persisting via IFEO Registry Key](../content/endpoint-threat-protection-essentials-persisting-via-ifeo-registry-key-f82c89fa-c969-4d12-832f-04d55d14522c-6020db66.md) | Persistence | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`imRegistry`](../asim/imregistry.md)<br>[`Event`](../tables/event.md)<br>[`Image`](../tables/image.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Potential Microsoft Security Services Tampering](../content/endpoint-threat-protection-essentials-potential-microsoft-security-services-tampering-e10e1d2f-265d-4d90-9037-7f3a6ed8a91e-8c1dc76e.md) | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`Event`](../tables/event.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Rare Windows Firewall Rule updates using Netsh](../content/endpoint-threat-protection-essentials-rare-windows-firewall-rule-updates-using-netsh-e3e8c913-e5e9-4517-b4f7-dd1ec071888f-d0fef21e.md) | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`Event`](../tables/event.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [Remote Login Performed with WMI](../content/endpoint-threat-protection-essentials-remote-login-performed-with-wmi-8f658a80-7fa9-4524-a95b-d9ab608e8850-57d50f63.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Remote Scheduled Task Creation or Update using ATSVC Named Pipe](../content/endpoint-threat-protection-essentials-remote-scheduled-task-creation-or-update-using-atsvc-named-pipe-7aad876a-a6fe-4c11-879e-8b29d35ff739-f9a3a936.md) | Persistence | [`SecurityEvent`](../tables/securityevent.md) |
| [Rundll32 (LOLBins and LOLScripts)](../content/endpoint-threat-protection-essentials-rundll32-lolbins-and-lolscripts-c2074fce-b5ba-4c0a-9332-d08b8fc43c53-1b1739b4.md) | DefenseEvasion | [`Event`](../tables/event.md) |
| [Scheduled Task Creation or Update from User Writable Directory](../content/endpoint-threat-protection-essentials-scheduled-task-creation-or-update-from-user-writable-directory-0b827a49-427e-4721-b05e-b151a8af524e-f6c2b013.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |
| [Suspicious Powershell Commandlet Execution](../content/endpoint-threat-protection-essentials-suspicious-powershell-commandlet-execution-8f424a4c-0487-45a3-92b8-00a7a8745b69-41451793.md) | Execution | [`DeviceEvents`](../tables/deviceevents.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Unicode Obfuscation in Command Line](../content/endpoint-threat-protection-essentials-unicode-obfuscation-in-command-line-a953f304-12e4-48ae-bedc-d58fb1b0c6a6-25c755ef.md) | DefenseEvasion | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`imProcessCreate`](../asim/improcesscreate.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Windows System Shutdown/Reboot (Normalized Process Events)](../content/endpoint-threat-protection-essentials-windows-system-shutdown-reboot-normalized-process-events-5db1f6f9-9de9-43a9-b7cc-357486b42fc6-4a6147b7.md) | Impact | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_ASim_ProcessEvent_Create`](../asim/asimprocesseventcreate.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                           |
|-------------|--------------------------------|------------------------------------------------------------------------------|
| 3.0.5       |     18-11-2024                 | Removed the broken URL in **Analytic Rule**                                      |
| 3.0.4       |     10-06-2024                 | Added entityMappings and added missing AMA DC reference in **Analytical Rules** and **Hunting Queries**  |
| 3.0.3       |     11-03-2024                 | Added few **Hunting Queries** to detect Endpoint Threats                     |
| 3.0.2       |     21-02-2024                 | Tagged for dependent solutions for deployment                                |
|             |                                | Added New rules to detect Suspicious PowerShell Commandlet Exceutions        | 
| 3.0.1       |     29-01-2024                 | Added subTechniques in Template                                              |
| 3.0.0       |     25-10-2023                 | Changes for rebranding from Microsoft 365 Defender to Microsoft Defender XDR |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

