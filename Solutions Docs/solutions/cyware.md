# Cyware

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cyware-logo.svg" alt="Cyware Logo" width="75" height="75">

The Cyware solution for Microsoft Sentinel allows users to integrate Cyware and Microsoft Sentinel. Users can send events from Microsoft Sentinel to Cyware for further analysis. This solution also enables users to implement hunting queries that match events that are sent to Microsoft Sentinel from Cyware's Intel Exchange.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cyware |
| **Support Tier** | Partner |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Cyware - support@cyware.com |
| **First Published** | 2024-03-18 |
| **Last Updated** | 2024-03-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyware](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyware) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **3 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Hunting |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | Hunting |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | Hunting |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 3 |
| Playbooks | 1 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Detecting Suspicious PowerShell Command Executions](../content/cyware-detecting-suspicious-powershell-command-executions-47559078-dc4c-4de3-96fe-270d4ca95446-741c48d3.md) | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detecting Suspicious PowerShell Command Executions](../content/cyware-detecting-suspicious-powershell-command-executions-deb99c6f-1903-455b-bb2c-0036614110bc-ec55d474.md) | CommandAndControl | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |
| [Match Cyware Intel Watchlist Items With Common Logs](../content/cyware-match-cyware-intel-watchlist-items-with-common-logs-61c99147-b749-4164-80b1-c4bfa4efa704-8cd42456.md) | CommandAndControl, Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Send Microsoft Sentinel Incident To Cyware Orchestrate](../content/cyware-send-microsoft-sentinel-incident-to-cyware-orchestrate-f7091a2c.md) | Send Microsoft Sentinel Incident To Cyware Orchestrate | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 06-03-2024                     | Initial Solution Release |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
