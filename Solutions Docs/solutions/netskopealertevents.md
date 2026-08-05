# ⚠️ NetskopeAlertEvents

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Netskope.svg" alt="NetskopeAlertEvents Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Netskope |
| **Support Tier** | Partner |
| **Support Link** | [https://www.netskope.com/services#support](https://www.netskope.com/services#support) |
| **Categories** | Security - Cloud Security,Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | Netskope |
| **First Published** | 2026-06-17 |
| **Last Updated** | 2026-06-17 |
| **Solution Folder** | [NetskopeAlertEvents](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeAlertEvents) |

The Netskope Alerts & Events solution enables streaming of alert and event logs from Netskope to Microsoft Sentinel via Azure Blob Storage and Event Grid. It provides visibility into DLP incidents, malware and threat detections, policy violations, anomalous behavior, and cloud application activity across the Netskope Security Cloud.

**Included Content:**
- 1 Data Connector (CCF-based Blob Storage connector)
- 1 Workbook (Alerts & Events Dashboard)
- 3 Analytics Rules

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Netskope Alerts & Events (via Log Streaming)](../connectors/netskopealerteventsconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`NetskopeAlertEvents_CL`](../tables/netskopealertevents-cl.md) | [Netskope Alerts & Events (via Log Streaming)](../connectors/netskopealerteventsconnector.md) | Analytics, Workbooks |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Netskope - DLP Incident Spike](../content/netskopealertevents-netskope-dlp-incident-spike-c3f8e4d6-0d57-4a3b-9e2c-4f6a8b0d3e52-1e2b0092.md) | High | Exfiltration, Collection | [`NetskopeAlertEvents_CL`](../tables/netskopealertevents-cl.md) |
| [Netskope - High Severity Alert](../content/netskopealertevents-netskope-high-severity-alert-a1f6c2d4-8b35-4e19-9c7a-2d4e6f8a1b30-dd52ea1e.md) | High | InitialAccess, Exfiltration | [`NetskopeAlertEvents_CL`](../tables/netskopealertevents-cl.md) |
| [Netskope - Suspicious Application Activity (Low Confidence / Risky App)](../content/netskopealertevents-netskope-suspicious-application-activity-low-confidence-risky-app-b2e7d3c5-9c46-4f2a-8d1b-3e5f7a9c2d41-f7dd180b.md) | Medium | Exfiltration, CommandAndControl | [`NetskopeAlertEvents_CL`](../tables/netskopealertevents-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [NetskopeAlertEvents_Workbook](../content/netskopealertevents-netskopealertevents-workbook-9d0c49b9.md) | [`NetskopeAlertEvents_CL`](../tables/netskopealertevents-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [NetskopeAlertEvents](../parsers/netskopealertevents.md) | - | [`NetskopeAlertEvents_CL`](../tables/netskopealertevents-cl.md) *(read)* |

## Additional Documentation

> 📄 *Source: [NetskopeAlertEvents/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeAlertEvents/README.md)*

## Overview

The **Netskope Alerts & Events** solution streams alert and event logs from the
Netskope Security Cloud into Microsoft Sentinel using **Netskope Log Streaming (NLS)**.
Logs are delivered to an Azure Blob Storage container as **gzip-compressed,
positional CSV** and ingested by Sentinel's **Codeless Connector Framework (CCF)**
Blob Storage connector into the custom Log Analytics table
**`NetskopeAlertEvents_CL`**. The DCR stream declares **254 columns in a fixed
order**; NLS must emit fields in that same order because values are mapped by
position.

The solution provides visibility into:

- DLP incidents and sensitive-data movement
- Malware and threat detections
- Policy violations and enforcement actions
- Anomalous user and application behavior (Shadow IT, risky apps)
- Geographic distribution of activity

**Included content**

| Content        | Count | Notes                                              |
|----------------|-------|----------------------------------------------------|
| Data Connector | 1     | CCF Blob Storage connector (`NetskopeAlertEventsConnector`) |
| Custom Table   | 1     | `NetskopeAlertEvents_CL`                           |
| Parser         | 1     | `NetskopeAlertEvents` (saved function)             |
| Workbook       | 1     | Netskope Alerts & Events Dashboard                 |
| Analytic Rules | 3     | High Severity Alert, Suspicious Application Activity, DLP Incident Spike |

## Architecture

```
        Netskope Log Streaming
                 |
                 v
        Azure Blob Storage            (gzip-compressed CSV)
                 |
                 v
           Event Grid                 (Blob Created notifications)
                 |
                 v
         Storage Queue                (notification queue + dead-letter queue)
                 |
                 v
   Sentinel CCF Connector             (Service Principal auth + DCR transform)
                 |
                 v
      NetskopeAlertEvents_CL          (Log Analytics custom table)
```

## Prerequisites

- A Microsoft Sentinel-enabled Log Analytics workspace.
- Permissions to install solutions from Content Hub and to create:
  - Data Collection Endpoint (DCE) and Data Collection Rule (DCR)
  - Storage queues (notification + dead-letter)
  - Event Grid system topic and subscription
  - Role assignments on the storage account / blob container
- An Azure Storage account + blob container that Netskope NLS streams to.
- A Netskope tenant with administrator access to configure Log Streaming.
- The Service Principal (object) ID of the Microsoft Sentinel CCF storage app
  (`appId 4f05ce56-95b6-4612-9d98-a45c8cc33f9f`) in your tenant.

## Deployment Steps

### 1. Configure Netskope Log Streaming
In the Netskope admin console, create a **Log Streaming** configuration that streams
**Alerts** and **Events** to your Azure Blob Storage container as **gzip-compressed CSV**.

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                  |
|-------------|--------------------------------|-----------------------------------------------------|
| 3.0.0       | 17-06-2026                     | Initial solution release. Netskope Alerts & Events CCF (Blob Storage) connector, custom table `NetskopeAlertEvents_CL`, parser, 1 workbook, and 3 analytic rules. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

