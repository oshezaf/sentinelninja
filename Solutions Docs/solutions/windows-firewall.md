# Windows Firewall

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Windows Firewall Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Windows Firewall solution for Microsoft Sentinel allows you to ingest Windows Firewall Events into Microsoft Sentinel using the Log Analytics agent for Windows.

Installing this solution will deploy two data connectors,

1. Windows Firewall Events via AMA - This data connector helps in ingesting Windows Firewall Events into your Log Analytics Workspace using the new Azure Monitor Agent. Learn more about ingesting using the new Azure Monitor Agent [here](https://learn.microsoft.com/azure/sentinel/connect-cef-ama). Microsoft recommends using this Data Connector
2. Windows Firewall - This solution installs the data connector to ingest Windows Firewall events using the Windows Firewall solution for Azure. After installing the solution, configure and enable this data connector by following guidance in Manage solution view.

<P style="color:red">**NOTE**: Microsoft recommends Installation of Windows Firewall via AMA. Legacy connector uses the Log Analytics agent which is about to be deprecated by **Aug 31, 2024,** and thus should only be installed where AMA is not supported.</p>

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Agent based logs collection from Windows and Linux machines](https://learn.microsoft.com/azure/azure-monitor/agents/data-sources-custom-logs?WT.mc_id=Portal-fx)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [Windows Firewall](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Firewall) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Windows Firewall](../connectors/windowsfirewall.md) ⚠️
- [Windows Firewall Events via AMA](../connectors/windowsfirewallama.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | [Windows Firewall Events via AMA](../connectors/windowsfirewallama.md) | - |
| [`Heartbeat`](../tables/heartbeat.md) | - | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | - | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | - | Workbooks |
| [`WindowsFirewall`](../tables/windowsfirewall.md) | [Windows Firewall](../connectors/windowsfirewall.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [WindowsFirewall](../content/windows-firewall-windowsfirewall-6cfebfa8.md) | [`Heartbeat`](../tables/heartbeat.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`WindowsFirewall`](../tables/windowsfirewall.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                 |
|-------------|--------------------------------|--------------------------------------------------- |
| 3.0.3       | 16-07-2025                     | Changed **Data Connector** template_WindowsFirewallAma.json to GA  |
| 3.0.2       | 07-06-2024                     | Changed **Data Connector** description template_WindowsFirewallAma.json  |
| 3.0.1       | 27-10-2023                     | New **Data Connector** added WindowsFirewallAma    |
| 3.0.0       | 19-07-2023                     | Initial Solution Release                           |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

