# Check Point Cyberint Alerts

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/checkpoint-cyberint.svg" alt="Check Point Cyberint Alerts Logo" width="75" height="75">

Cyberint, a Check Point company, provides Microsoft Sentinel integration to streamline critical Alerts and bring enriched threat intelligence from the Infinity External Risk Management solution into Microsoft Sentinel. This simplifies the process of tracking the status of tickets with automatic sync updates across systems. Using this new integration for Microsoft Sentinel, existing Cyberint and Microsoft Sentinel customers can easily pull logs based on Cyberint's findings into Microsoft Sentinel platform.<p><span style='color:red; font-weight:bold;'>NOTE</span>: Microsoft recommends installation of Check Point Cyberint Alerts Connector (via Codeless Connector Platform). This connector is build on the Codeless Connector Platform (CCP), which uses the Log Ingestion API, which replaces ingestion via the <a href='https://learn.microsoft.com/en-us/azure/azure-monitor/logs/custom-logs-migrate' style='color:#1890F1;'>deprecated HTTP Data Collector API</a>. CCP-based data connectors also support <a href='https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-collection-rule-overview' style='color:#1890F1;'>Data Collection Rules</a> (DCRs) offering transformations and enrichment.</p>

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cyberint |
| **Support Tier** | Partner |
| **Support Link** | [https://cyberint.com/customer-support/](https://cyberint.com/customer-support/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Cyberint - support@checkpoint.com |
| **First Published** | 2025-03-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20Alerts](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20Alerts) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Check Point Cyberint Alerts Connector (via Codeless Connector Platform)](../connectors/checkpointcyberintalerts.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`argsentdc_CL`](../tables/argsentdc-cl.md) | [Check Point Cyberint Alerts Connector (via Codeless Connector Platform)](../connectors/checkpointcyberintalerts.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**        |
| ----------- | ------------------------------ | ------------------------- |
| 3.0.1       | 05-11-2025                     | Update **Data Connector** |
| 3.0.0       | 17-06-2025                     | Initial Solution release. |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
