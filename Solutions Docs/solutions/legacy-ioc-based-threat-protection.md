# Legacy IOC based Threat Protection

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Legacy IOC based Threat Protection Logo" width="75" height="75">

Microsoft Security Research, based on ongoing trends and exploits creates content that help identify existence of known IOCs based on known prevalent attacks and threat actor tactics/techniques, such as Nobelium, Gallium, Solorigate, etc. This solution contains packaged content written on some legacy IOCs that have been prevalent in the past but may still be relevant.

**Pre-requisites:**

This is a [domain solution](https://learn.microsoft.com/azure/sentinel/sentinel-solutions-catalog#domain-solutions) and does not include any data connectors. The content in this solution supports the connectors listed below. Install one or more of the listed solutions, to unlock the value provided by this solution.

1. Squid Proxy

2. Windows Server DNS

3. Cisco ASA

4. Palo Alto Networks

5. Microsoft Defender XDR

6. Azure Firewall

7. ZScaler Internet Access

8. Infoblox NIOS

9. Google Cloud Platform DNS

10. NXLog DNS

11. Cisco Umbrella

12. Corelight 

13. Amazon Web Services

14. Windows Forwarded Events

15. Sysmon for Linux

16. Microsoft 365

17. Windows Security Events

18. Microsoft Entra ID

19. Azure Activity

20. F5 Advanced WAF

21. Fortinet FortiGate

22. Check Point

23. Common Event Format

24. Windows Firewall

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.5 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-12-19 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Legacy%20IOC%20based%20Threat%20Protection](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Legacy%20IOC%20based%20Threat%20Protection) |
| **Dependencies** | azuresentinel.azure-sentinel-solution-squidproxy, azuresentinel.azure-sentinel-solution-dns, azuresentinel.azure-sentinel-solution-ciscoasa, azuresentinel.azure-sentinel-solution-paloaltopanos, azuresentinel.azure-sentinel-solution-microsoft365defender, sentinel4azurefirewall.sentinel4azurefirewall, zscaler1579058425289.zscaler_internet_access_mss, azuresentinel.azure-sentinel-solution-infobloxnios, azuresentinel.azure-sentinel-solution-gcpdns, nxlogltd1589381969261.nxlog_dns_logs, azuresentinel.azure-sentinel-solution-ciscoumbrella, corelightinc1584998267292.corelight-for-azure-sentinel, azuresentinel.azure-sentinel-solution-amazonwebservices, azuresentinel.azure-sentinel-solution-windowsforwardedevents, azuresentinel.azure-sentinel-solution-sysmonforlinux, azuresentinel.azure-sentinel-solution-office365, azuresentinel.azure-sentinel-solution-securityevents, azuresentinel.azure-sentinel-solution-azureactivedirectory, azuresentinel.azure-sentinel-solution-azureactivity, f5-networks.f5_bigip_mss, azuresentinel.azure-sentinel-solution-fortinetfortigate, checkpoint.checkpoint-sentinel-solutions, azuresentinel.azure-sentinel-solution-commoneventformat, azuresentinel.azure-sentinel-solution-windowsfirewall |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **9 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Hunting |
| [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md) | Hunting |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Hunting |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Hunting |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | Hunting |
| [`Event`](../tables/event.md) | Hunting |
| [`SecurityEvent`](../tables/securityevent.md) | Hunting |
| [`VMConnection`](../tables/vmconnection.md) | Hunting |
| [`WindowsEvent`](../tables/windowsevent.md) | Hunting |

### Internal Tables

The following **1 table(s)** are used internally by this solution's playbooks:

| Table | Used By Content |
|-------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | Hunting |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 10 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Connection from external IP to OMI related Ports](../content/legacy-ioc-based-threat-protection-connection-from-external-ip-to-omi-related-ports-767b8f6d-8029-4c92-afe1-282167d9d49a-0ad0779a.md) | Reconnaissance, InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)<br>[`VMConnection`](../tables/vmconnection.md) |
| [Dev-0056 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0056-command-line-activity-november-2021-e2629949-2043-4421-8064-bca23c8491dd-1cdb73c2.md) | CommandAndControl | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dev-0322 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-command-line-activity-november-2021-78fa22f9-0c13-4847-bbe6-6a7aa1b47547-84856956.md) | Persistence, LateralMovement, CommandAndControl | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dev-0322 Command Line Activity November 2021 (ASIM Version)](../content/legacy-ioc-based-threat-protection-dev-0322-command-line-activity-november-2021-asim-version-6bfea14f-2122-46b3-8f8b-3947e0fb6d92-de921320.md) | Persistence, LateralMovement, CommandAndControl | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dev-0322 File Drop Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-file-drop-activity-november-2021-5bf2d4d8-ea03-4673-aaf8-716a61446022-414e8f6c.md) | Persistence, CommandAndControl | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dev-0322 File Drop Activity November 2021 (ASIM Version)](../content/legacy-ioc-based-threat-protection-dev-0322-file-drop-activity-november-2021-asim-version-9b72769e-6ab1-4736-988b-018d92dc5e62-87c81fe1.md) | Persistence, CommandAndControl | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Known Nylon Typhoon Registry modifications patterns](../content/legacy-ioc-based-threat-protection-known-nylon-typhoon-registry-modifications-patterns-f090f8f4a-b986-42d2-b536-e0795c723e25-f442d105.md) | Persistence | [`Event`](../tables/event.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Nylon Typhoon Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-nylon-typhoon-command-line-activity-november-2021-bb30abbc-9af6-4a37-9536-e9207e023989-bdd1efea.md) | Collection | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Retrospective hunt for Forest Blizzard IP IOCs](../content/legacy-ioc-based-threat-protection-retrospective-hunt-for-forest-blizzard-ip-iocs-b8b7574f-1cd6-4308-822a-ab07256106f8-95c2528a.md) | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [SolarWinds Inventory](../content/legacy-ioc-based-threat-protection-solarwinds-inventory-278592b5-612b-48a4-bb38-4c01ff8ee2a5-c7f23741.md) | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`Event`](../tables/event.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.5       | 03-06-2024                     | Added missing AMA **Data Connector** reference in **Hunting Query**     |
| 3.0.4       | 22-02-2024                     | Tagged for dependent solutions for deployment                                  |
| 3.0.3       | 19-12-2023                     | Corrected typo mistake *Microsoft Windows DNS* to *Windows Server DNS*         |                           
| 3.0.2       | 12-12-2023                     | Removed deprecated **Analytical Rules**                                        |
| 3.0.1       | 07-11-2023                     | Changes for rebranding from Azure Active Directory to Microsoft Entra ID & Microsoft 365 Defender to Microsoft Defender XDR   |
| 3.0.0       | 19-05-2023                     | Deprecating outdated IOC Based **Analytic Rules** 		                        |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
