# Check Point Exposure Management Alerts for Microsoft Sentinel

*Solution: Check Point Cyberint Alerts*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/checkpoint.svg" alt="Check Point Cyberint Alerts Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Check Point |
| **Support Tier** | Partner |
| **Support Link** | [https://www.checkpoint.com/support-services/contact-support/](https://www.checkpoint.com/support-services/contact-support/) |
| **Categories** | Security - Threat Intelligence |
| **Version** | 3.2.0 |
| **Author** | Check Point - support@checkpoint.com |
| **First Published** | 2025-03-18 |
| **Last Updated** | 2026-09-24 |
| **Solution Folder** | [Check Point Cyberint Alerts](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20Alerts) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/checkpoint.checkpoint-cyberint-solutions-alerts) · Popularity: 🔵 Medium (63%) |

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
| [`argsentdc_CL`](../tables/argsentdc-cl.md) | [Check Point Cyberint Alerts Connector (via Codeless Connector Platform)](../connectors/checkpointcyberintalerts.md) | Analytics, Workbooks |

## Content Items

This solution includes **12 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 8 |
| Analytic Rules | 2 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Check Point Exposure Management - Alert Ingestion Anomaly](../content/check-point-cyberint-alerts-check-point-exposure-management-alert-ingestion-anomaly-8d3b9c7e-5a2f-4e1d-b6c8-3f9a7e2d1b4c-1545e994.md) | Medium | DefenseEvasion | [`argsentdc_CL`](../tables/argsentdc-cl.md) |
| [Check Point Exposure Management - Argos alerts to incidents](../content/check-point-cyberint-alerts-check-point-exposure-management-argos-alerts-to-incidents-2f7c4e91-6b8d-4a3f-9e15-c0d84b7a2f36-770efb05.md) | Medium | InitialAccess, DefenseEvasion | [`argsentdc_CL`](../tables/argsentdc-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CPEMAlertOverview](../content/check-point-cyberint-alerts-cpemalertoverview-1fe40da5.md) | [`argsentdc_CL`](../tables/argsentdc-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Check Point Exposure Management - Credential Leak Validation and Response](../content/check-point-cyberint-alerts-check-point-exposure-management-credential-leak-validation-and-response-9bd4cdc5.md) | When a new Microsoft Sentinel incident is created for leaked credentials, this playbook queries the ... | - |
| [Check Point Exposure Management - Exporter (Microsoft Sentinel → Argos)](../content/check-point-cyberint-alerts-check-point-exposure-management-exporter-microsoft-sentinel-→-argos-1931ff3d.md) | When a Microsoft Sentinel incident status changes, this playbook pushes the new status to the corres... | - |
| [Check Point Exposure Management - Fetch Attachments On-Demand](../content/check-point-cyberint-alerts-check-point-exposure-management-fetch-attachments-on-demand-08c67669.md) | On-demand playbook that fetches alert attachments and analysis report for a Microsoft Sentinel incid... | - |
| [Check Point Exposure Management - IOC Enrichment and Triage](../content/check-point-cyberint-alerts-check-point-exposure-management-ioc-enrichment-and-triage-64607c13.md) | When a new Microsoft Sentinel incident is created, this playbook enriches IOC entities (IPs, domains... | - |
| [Check Point Exposure Management - Inbound Status Sync (Argos → Microsoft Sentinel)](../content/check-point-cyberint-alerts-check-point-exposure-management-inbound-status-sync-argos-→-microsoft-sentinel-c1921fff.md) | Runs on a schedule and mirrors Argos alert status changes onto the Microsoft Sentinel incidents crea... | - |
| [Check Point Exposure Management - Manual Status Update (Microsoft Sentinel → Argos)](../content/check-point-cyberint-alerts-check-point-exposure-management-manual-status-update-microsoft-sentinel-→-argos-e0c710a5.md) | On-demand playbook that reads the current Microsoft Sentinel incident status and pushes it to the co... | - |
| [Check Point Exposure Management - Phishing Takedown](../content/check-point-cyberint-alerts-check-point-exposure-management-phishing-takedown-92d79290.md) | When a new Microsoft Sentinel incident is created for a phishing website alert, this playbook extrac... | - |
| [Check Point Exposure Management - Vulnerability Exploitation Monitoring](../content/check-point-cyberint-alerts-check-point-exposure-management-vulnerability-exploitation-monitoring-4b89e280.md) | When a new Microsoft Sentinel incident is created containing CVE identifiers, this playbook enriches... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CPEMAlerts](../parsers/cpemalerts.md) | - | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) *(read)*<br>[`SigninLogs`](../tables/signinlogs.md) *(read)*<br>[`TacitRed_Findings_CL`](../tables/tacitred-findings-cl.md) *(read)*<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) *(read)* |

## Additional Documentation

> 📄 *Source: [Check Point Cyberint Alerts/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20Alerts/README.md)*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/checkpoint.svg" width="75px" height="75px">

## Overview

This solution integrates **Check Point Exposure Management** with **Microsoft Sentinel** and keeps alert status in sync in both directions. Argos alerts become Microsoft Sentinel incidents, status changes made in either system are mirrored to the other, and SOC teams can enrich and respond to alerts from Microsoft Sentinel.

### What's Included

| Component | Description |
|-----------|-------------|
| **Data Connector** (CCP) | Polls the Argos Alerts API every 5 minutes for alerts created or changed in that window |
| **2 Analytic Rules** | Creates an incident per Argos alert; detects ingestion gaps |
| **9 Playbook templates** | Status sync in both directions, enrichment, response, and the automation rule that wires outbound sync |
| **1 Parser** | `CPEMAlerts`: latest state of each alert with category metadata |
| **1 Workbook** | Alert overview, status distribution, and sync health monitoring |

## Architecture

```
            ┌──────────────────────────────────────┐
            │  Check Point Exposure Management     │
            │  (Argos Alerts API)                  │
            └───────┬──────────────────────▲───────┘
                    │ POST /alerts          │ GET /alerts/{ref_id}
                    │ (update_date window)  │ PUT /alerts/status
                    ▼                       │
          ┌───────────────────┐   ┌─────────┴──────────┐
          │ CCP data connector│   │ Exporter           │
          └─────────┬─────────┘   │ (Sentinel → Argos) │
                    ▼             └─────────▲──────────┘
          ┌───────────────────┐             │ Automation rule:
          │ argsentdc_CL      │             │ status changed
          │ one row per change│             │
          └──┬─────────────┬──┘   ┌─────────┴──────────┐
             │             │      │ Microsoft Sentinel │
   first seen│             │later │ incidents          │
             ▼             ▼      └──▲──────────────▲──┘
  ┌────────────────┐ ┌──────────────┴────┐          │
  │ Analytic rule  │ │ InboundStatusSync │          │
  │ Argos alerts   │ │ (Argos → Sentinel)│          │
  │ to incidents   ├─┼───────────────────┼──────────┘
  └────────────────┘ └───────────────────┘  creates incident + alert
                                            with ref_id Custom Detail
```

**How the sync works:**
- **Ingestion.** The CCP connector filters on `update_date`, so every change to an Argos alert (new, acknowledged, closed, reopened) adds a row to `argsentdc_CL`. The latest row per `ref_id` is the current Argos state.
- **Incident creation.** The **Argos alerts to incidents** rule creates one incident the first time an alert appears as `open` or `acknowledged`, with `ref_id` as a Custom Detail. Later rows for the same alert never create another incident.

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**       |
| ----------- |--------------------------------| ------------------------ |
| 3.2.0       | 18-09-2026                     | • **Two-way status sync** between Argos and Microsoft Sentinel; the newest change wins. New **Check_Point_EM_InboundStatusSync** playbook, and **Check_Point_EM_AutomationRules** is now part of the package.<br>• **New analytic rule, Argos alerts to incidents**, replaces the **Check_Point_EM_Importer** playbook, which could not ingest because the Logs Ingestion API does not support the `SecurityAlert` table.<br>• **Data connector** polls on `update_date` and requests 100 alerts per page.<br>• **Fixed** Argos calls failing with HTTP 401, the status update endpoint, `ref_id` extraction, and the status and closure reason mapping.<br>• **Upgrading from 3.1.x** requires reconnecting the data connector and recreating the sync playbooks; see the solution README. |
| 3.1.4       | 08-09-2026                     | Fixed **Check_Point_EM_Importer** playbook creation failing with `InvalidTemplate: Unable to parse language expression '': expected token 'Identifier' and actual 'EndOfData'`. The empty `Entities` JSON array literal in the SecurityAlert ingestion body was interpreted by ARM as an empty template expression; it is now emitted via `string(createArray())` in both the solution package and the standalone playbook template. |
| 3.1.3       | 21-08-2026                     | Fixed ARM template expression escaping in nested content templates (stray `]` in dcrConfig and playbook expressions) that caused data connector **Connect** deployment to fail with a template language expression parse error.<br>Fixed alerts polling request body to send strict JSON (double-quoted): the Argos API now rejects single-quoted bodies with 422 Unprocessable Entity.<br>Fixed connection template parameter defaults: placeholder values (e.g. `"severity"`) leaked into the API request body when optional connector fields were left empty, failing the connectivity check with 422 (invalid severity enum). Optional filters now default to empty and are omitted from the request. |
| 3.1.2       | 02-06-2026                     | Updated support contact information and documentation links. |
| 3.1.0       | 10-03-2026                     | Update **Data Connector**, add bi-directional sync playbooks, analytic rule (ingestion anomaly), workbook (alert overview & sync health), and automation rules. |
| 3.0.0       | 17-06-2025                     | Initial Solution release. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

