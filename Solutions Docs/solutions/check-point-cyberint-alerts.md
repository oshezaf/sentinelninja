# Check Point External Risk Management for Microsoft Sentinel - Alerts

*Solution: Check Point Cyberint Alerts*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/checkpoint.svg" alt="Check Point Cyberint Alerts Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Check Point |
| **Support Tier** | Partner |
| **Support Link** | [https://cyberint.com/customer-support/](https://cyberint.com/customer-support/) |
| **Categories** | domains |
| **Version** | 3.1.0 |
| **Author** | Check Point - support@checkpoint.com |
| **First Published** | 2025-03-18 |
| **Last Updated** | 2026-04-17 |
| **Solution Folder** | [Check Point Cyberint Alerts](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20Alerts) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/checkpoint.checkpoint-cyberint-solutions-alerts) · Popularity: ⚪ Very Low (8%) |

Check Point provides Microsoft Sentinel integration to streamline critical Alerts and bring enriched threat intelligence from the Infinity External Risk Management solution into Microsoft Sentinel. This simplifies the process of tracking the status of tickets with automatic sync updates across systems. Using this new integration for Microsoft Sentinel, existing Check Point Exposure Management and Microsoft Sentinel customers can easily pull logs based on Check Point Exposure Management findings into Microsoft Sentinel platform.<p><span style='color:red; font-weight:bold;'>NOTE</span>: Microsoft recommends installation of Check Point Exposure Management Alerts Connector (via Codeless Connector Platform). This connector is build on the Codeless Connector Platform (CCP), which uses the Log Ingestion API, which replaces ingestion via the <a href='https://learn.microsoft.com/en-us/azure/azure-monitor/logs/custom-logs-migrate' style='color:#1890F1;'>deprecated HTTP Data Collector API</a>. CCP-based data connectors also support <a href='https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-collection-rule-overview' style='color:#1890F1;'>Data Collection Rules</a> (DCRs) offering transformations and enrichment.</p>

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Check Point Cyberint Alerts Connector (via Codeless Connector Platform)](../connectors/checkpointcyberintalerts.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`argsentdc_CL`](../tables/argsentdc-cl.md) | [Check Point Cyberint Alerts Connector (via Codeless Connector Platform)](../connectors/checkpointcyberintalerts.md) | Analytics, Playbooks, Workbooks |

## Content Items

This solution includes **11 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 8 |
| Analytic Rules | 1 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Check Point Exposure Management - Alert Ingestion Anomaly](../content/check-point-cyberint-alerts-check-point-exposure-management-alert-ingestion-anomaly-8d3b9c7e-5a2f-4e1d-b6c8-3f9a7e2d1b4c-1545e994.md) | Medium | DefenseEvasion | [`argsentdc_CL`](../tables/argsentdc-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CPEMAlertOverview](../content/check-point-cyberint-alerts-cpemalertoverview-1fe40da5.md) | [`argsentdc_CL`](../tables/argsentdc-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Check Point EM - Importer (Alerts → Sentinel Incidents)](../content/check-point-cyberint-alerts-check-point-em-importer-alerts-→-sentinel-incidents-16ebefeb.md) | Queries the argsentdc_CL custom table (populated by the CCP data connector) for recent alerts and cr... | [`argsentdc_CL`](../tables/argsentdc-cl.md) *(read)* |
| [Check Point Exposure Management - Credential Leak Validation and Response](../content/check-point-cyberint-alerts-check-point-exposure-management-credential-leak-validation-and-response-9bd4cdc5.md) | When a new Microsoft Sentinel incident is created for leaked credentials, this playbook queries the ... | - |
| [Check Point Exposure Management - Exporter (Sentinel → Argos)](../content/check-point-cyberint-alerts-check-point-exposure-management-exporter-sentinel-→-argos-980b2f1d.md) | When a Sentinel incident status changes, this playbook pushes the update to the corresponding alert(... | - |
| [Check Point Exposure Management - Fetch Attachments On-Demand](../content/check-point-cyberint-alerts-check-point-exposure-management-fetch-attachments-on-demand-08c67669.md) | On-demand playbook that fetches alert attachments and analysis report for a Sentinel incident, surfa... | - |
| [Check Point Exposure Management - IOC Enrichment and Triage](../content/check-point-cyberint-alerts-check-point-exposure-management-ioc-enrichment-and-triage-64607c13.md) | When a new Microsoft Sentinel incident is created, this playbook enriches IOC entities (IPs, domains... | - |
| [Check Point Exposure Management - Manual Status Update (Sentinel → Argos)](../content/check-point-cyberint-alerts-check-point-exposure-management-manual-status-update-sentinel-→-argos-6353fe22.md) | On-demand playbook that reads the current Sentinel incident status and pushes it to the correspondin... | - |
| [Check Point Exposure Management - Phishing Takedown](../content/check-point-cyberint-alerts-check-point-exposure-management-phishing-takedown-92d79290.md) | When a new Microsoft Sentinel incident is created for a phishing website alert, this playbook extrac... | - |
| [Check Point Exposure Management - Vulnerability Exploitation Monitoring](../content/check-point-cyberint-alerts-check-point-exposure-management-vulnerability-exploitation-monitoring-4b89e280.md) | When a new Microsoft Sentinel incident is created containing CVE identifiers, this playbook enriches... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CPEMAlerts](../parsers/cpemalerts.md) | - | [`TacitRed_Findings_CL`](../tables/tacitred-findings-cl.md) *(read)*<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) *(read)* |

## Additional Documentation

> 📄 *Source: [Check Point Cyberint Alerts/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20Alerts/README.md)*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/checkpoint.svg" width="75px" height="75px">

## Overview

This solution integrates **Check Point Exposure Management** with **Microsoft Sentinel**, providing bi-directional synchronization of alerts and incidents. It enables SOC teams to manage Argos external risk alerts directly from Sentinel while keeping both platforms in sync.

### What's Included

| Component | Description |
|-----------|-------------|
| **Data Connector** (CCP) | Ingests new alerts every 5 minutes via the Codeless Connector Platform |
| **10 Playbooks** | Bi-directional sync, enrichment, and response automation |
| **1 Analytic Rule** | Detects ingestion gaps (connector or sync failures) |
| **1 Workbook** | Alert overview, status distribution, and sync health monitoring |
| **1 Automation Rule** | Triggers outbound sync on incident updates |

## Architecture

```
                    ┌──────────────────────┐
                    │   Check Point Exposure Management      │
                    │   (External Risk Mgmt)│
                    └──────┬───────▲───────┘
                           │       │
              ┌────────────┘       └────────────┐
              │ (new alerts)        (status PUT) │
              ▼                                  │
    ┌─────────────────┐              ┌───────────┴───────┐
    │ CCP Data        │              │ Exporter     │
    │ Connector       │              │ Playbook          │
    │ (created_date)  │              │ (Sentinel → Argos)│
    └────────┬────────┘              └───────────▲───────┘
             │                                   │
             ▼                                   │
    ┌─────────────────┐              ┌───────────┴───────┐
    │ argsentdc_CL    │◄─────────────│ Importer      │
    │ (Custom Table)  │              │ Playbook           │
    └────────┬────────┘              │ (modification_date)│
             │                       └───────────────────┘
             ▼
    ┌─────────────────┐
    │ Microsoft        │
    │ Sentinel         │
    │ (Incidents)      │
    └──────────────────┘
```

**Two ingestion paths:**
- **CCP Connector** — polls for **new** alerts using `created_date` filter (every 5 min)
- **Importer** — polls for **modified** alerts using `modification_date` filter (every 10 min)

**Loop prevention:** Importer tags incidents with `argos-importer-synced`. Exporter checks for this tag and skips if present, preventing circular updates.

## Prerequisites

1. **Microsoft Sentinel** enabled on a Log Analytics workspace.
2. A **Check Point Exposure Management API token** and your environment's **Check Point Exposure Management API base URL** (e.g., `https://app.cyberint.io`).
3. **Contributor** role on the target resource group (for deploying Logic Apps, Key Vault, and role assignments).

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**       |
| ----------- |--------------------------------| ------------------------ |
| 3.1.0       | 10-03-2026                     | Update **Data Connector**, add bi-directional sync playbooks, analytic rule (ingestion anomaly), workbook (alert overview & sync health), and automation rules. |
| 3.0.0       | 17-06-2025                     | Initial Solution release. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

