# Cyware

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cyware |
| **Support Tier** | Partner |
| **Categories** | domains |
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

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 3 |
| Playbooks | 2 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Detecting Suspicious PowerShell Command Executions](../content/47559078-dc4c-4de3-96fe-270d4ca95446.md) | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detecting Suspicious PowerShell Command Executions](../content/deb99c6f-1903-455b-bb2c-0036614110bc.md) | CommandAndControl | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |
| [Match Cyware Intel Watchlist Items With Common Logs](../content/61c99147-b749-4164-80b1-c4bfa4efa704.md) | CommandAndControl, Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Send Microsoft Sentinel Incident To Cyware Orchestrate](../content/send-microsoft-sentinel-incident-to-cyware-orchestrate-cyware.md) | Send Microsoft Sentinel Incident To Cyware Orchestrate | - |
| [azuredeploy.parameters](../content/azuredeploy.parameters-cyware.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 06-03-2024                     | Initial Solution Release |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
