# Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel Logo" width="75" height="75">

Gain insight into your organization's network and improve your security operation capabilities with the [Fortinet FortiGate Next-generation Firewall](https://www.fortinet.com/products/next-generation-firewall) Solution for Microsoft Sentinel. It allows you to easily connect your FortiGate logs with Microsoft Sentinel. This enables you to view dashboards, create custom alerts, and improve investigation. 

 Playbooks are included to help in automated remediation 

 For questions about [FortiGate](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/fortinet.fortinet_fortigate-vm_v5?tab=Overview), please contact Fortinet at [azuresales@fortinet.com](mailto:azuresales@fortinet.com).

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors were deprecated on **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.8 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-08-13 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiGate%20Next-Generation%20Firewall%20connector%20for%20Microsoft%20Sentinel](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiGate%20Next-Generation%20Firewall%20connector%20for%20Microsoft%20Sentinel) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Fortinet via Legacy Agent](../connectors/fortinet.md) ⚠️
- [[Deprecated] Fortinet via AMA](../connectors/fortinetama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Fortinet via AMA](../connectors/fortinetama.md), [[Deprecated] Fortinet via Legacy Agent](../connectors/fortinet.md) | Workbooks |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Fortigate](../content/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel-fortigate-2cb10dce.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Fortinet-FortiGate-IPEnrichment](../content/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel-fortinet-fortigate-ipenrichment-6c7428bc.md) | This playbook enriches the incident with address object and address group. | - |
| [Fortinet-FortiGate-ResponseOnBlockIP](../content/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel-fortinet-fortigate-responseonblockip-4d2b4811.md) | This playbook allows the SOC users to automatically response to Microsoft Sentinel incidents which i... | - |
| [Fortinet-FortiGate-ResponseOnBlockURL](../content/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel-fortinet-fortigate-responseonblockurl-35d12496.md) | This playbook allows the SOC users to automatically response to Microsoft Sentinel incidents which i... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                      |
|-------------|--------------------------------|-----------------------------------------------------------------------------------------|
| 3.0.9       | 02-09-2025                     |Update Fortinetfortigate **Playbook**  fix                                               |
| 3.0.8       | 26-02-2025                     |**Playbook** functionApp code change                                                     |
| 3.0.7       | 11-11-2024                     |Removed Deprecated data connectors                                                       |
| 3.0.6       | 22-08-2024                     |Deprecated data connectors                                                    			 |
| 3.0.5       | 05-04-2024                     |Workbook queries are optimized to fix timeout issues  									 |
| 3.0.4       | 29-01-2024                     |Classic app insights to Log analytics                                                    |
|             |                                |Addition of new Fortinet FortiGate AMA Data Connector                                    | 
| 3.0.3       | 07-11-2023                     |Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.  |
| 3.0.2       | 10-08-2023                     |Added the missing userAssignedIdentities field for UserAssigned type in the **Playbooks**|
| 3.0.1       | 21-07-2023                     |Updated the description in the solution                                                  |
| 3.0.0       | 11-07-2023                     |Updated the title, logo and the description in the solution                              |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
