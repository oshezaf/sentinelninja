# Dataminr Pulse

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Dataminr Support |
| **Support Tier** | Partner |
| **Support Link** | [https://www.dataminr.com/dataminr-support#support](https://www.dataminr.com/dataminr-support#support) |
| **Categories** | domains |
| **First Published** | 2023-04-12 |
| **Last Updated** | 2023-04-12 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dataminr%20Pulse](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dataminr%20Pulse) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Dataminr Pulse Alerts Data Connector](../connectors/dataminrpulsealerts.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DataminrPulse_Alerts_CL`](../tables/dataminrpulse-alerts-cl.md) | [Dataminr Pulse Alerts Data Connector](../connectors/dataminrpulsealerts.md) | Analytics, Workbooks |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Watchlists | 5 |
| Parsers | 2 |
| Analytic Rules | 1 |
| Workbooks | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Dataminr - urgent alerts detected](../content/64a46029-3236-4d03-b5df-207366a623f1.md) | Medium | Persistence | [`DataminrPulse_Alerts_CL`](../tables/dataminrpulse-alerts-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DataminrPulseAlerts](../content/dataminrpulsealerts-dataminr-pulse.md) | [`DataminrPulse_Alerts_CL`](../tables/dataminrpulse-alerts-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DataminrPulseAlertEnrichment](../content/dataminrpulsealertenrichment-dataminr-pulse.md) | This playbook provides an end-to-end example of how alert enrichment works. This will extract the IP... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DataminrPulseAlerts](../content/a4fddd3e-9993-4c86-b5e8-8e36d8ce1197.md) | - | - |
| [DataminrPulseCyberAlerts](../content/922c64bb-819b-4e3f-811a-0dfbff8eb667.md) | - | - |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DataminrPulseAsset](../content/dataminrpulseasset-dataminr-pulse.md) | - | - |
| [DataminrPulseVulnerableDomain](../content/dataminrpulsevulnerabledomain-dataminr-pulse.md) | - | - |
| [DataminrPulseVulnerableHash](../content/dataminrpulsevulnerablehash-dataminr-pulse.md) | - | - |
| [DataminrPulseVulnerableIp](../content/dataminrpulsevulnerableip-dataminr-pulse.md) | - | - |
| [DataminrPulseVulnerableMalware](../content/dataminrpulsevulnerablemalware-dataminr-pulse.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.5       |     16-09-2025                 | Updated Python version to 3.12 and Added Log Ingestion API support             |
| 3.0.4       |     12-09-2025                 | Added support for Azure GovCloud |
| 3.0.3       |     03-05-2024                 | Repackaged for parser issue fix on reinstall |
| 3.0.2       |     14-12-2023                 | Updated **Data Connector** code                    |
| 3.0.1       |     06-12-2023                 | Updated steps in **DataConnector** UI and **README.md** file.                     |
| 3.0.0       |     14-07-2023                 | Initial Solution Release                     |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
