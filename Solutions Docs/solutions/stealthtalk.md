# StealthTalk Anomalous Authentication

*Solution: StealthTalk*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/StealthTalk/Workbooks/Images/Logo/st-ms-def-hub.svg" alt="StealthTalk Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | StealthTalk Support |
| **Support Tier** | Partner |
| **Support Link** | [https://stealthtalk.com/support](https://stealthtalk.com/support) |
| **Categories** | Security - Threat Protection,Identity,Security - Insider Threat |
| **Source Vendor** | StealthTalk *(basis: event)* |
| **Version** | 3.0.0 |
| **Author** | StealthTalk - support@stealthtalk.com |
| **First Published** | 2026-05-01 |
| **Last Updated** | 2026-06-19 |
| **Solution Folder** | [StealthTalk](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StealthTalk) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/stealthtalkinc.stealthtalk-sentinel-solution) · Popularity: 🟡 Low (37%) |

The **StealthTalk Anomalous Authentication** solution ingests StealthTalk Enterprise sign-in anomaly data into Microsoft Sentinel so SOC teams can investigate anomalous authentication activity alongside Microsoft security telemetry. The solution includes a Logs Ingestion API data connector, scheduled analytic rules, hunting queries, ASIM authentication parsers, a workbook, and a Microsoft Teams playbook. It depends on [Microsoft Sentinel](https://learn.microsoft.com/azure/sentinel/overview), [Azure Monitor Logs Ingestion](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), [custom tables](https://learn.microsoft.com/azure/azure-monitor/logs/create-custom-table), [Logic Apps](https://learn.microsoft.com/azure/logic-apps/logic-apps-overview), and [ASIM](https://learn.microsoft.com/azure/sentinel/normalization).

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [StealthTalk Anomalous Authentication](../connectors/stealthtalkanomalousauth.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`StealthTalkAnomalousAuth_CL`](../tables/stealthtalkanomalousauth-cl.md) | [StealthTalk Anomalous Authentication](../connectors/stealthtalkanomalousauth.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **9 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |
| Hunting Queries | 3 |
| Workbooks | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [StealthTalk - After hours work](../content/stealthtalk-stealthtalk-after-hours-work-e3a8b2f1-5c7d-4d89-9b6e-0f1a2c3d4e5f-f70b1be5.md) | Low | InitialAccess, DefenseEvasion, Persistence | [`StealthTalkAnomalousAuth_CL`](../tables/stealthtalkanomalousauth-cl.md) |
| [StealthTalk - Login outside work zone](../content/stealthtalk-stealthtalk-login-outside-work-zone-a7c3e9b1-4f5d-4e2a-9b8c-1d2e3f4a5b6c-f2762d8d.md) | High | InitialAccess, DefenseEvasion, CredentialAccess | [`StealthTalkAnomalousAuth_CL`](../tables/stealthtalkanomalousauth-cl.md) |
| [StealthTalk - Multi new devices registration](../content/stealthtalk-stealthtalk-multi-new-devices-registration-f9d4c2a8-1b6e-4a3f-9c7d-8e2b1a3c5d7e-8e98d5a7.md) | Medium | Persistence, InitialAccess, DefenseEvasion | [`StealthTalkAnomalousAuth_CL`](../tables/stealthtalkanomalousauth-cl.md) |
| [StealthTalk - Password brute force](../content/stealthtalk-stealthtalk-password-brute-force-b8e5f3a2-9c4d-4d1f-8a7b-3c2d1e0f9a8b-057ae82f.md) | High | CredentialAccess, InitialAccess | [`StealthTalkAnomalousAuth_CL`](../tables/stealthtalkanomalousauth-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [StealthTalk - Account takeover sequence](../content/stealthtalk-stealthtalk-account-takeover-sequence-d2e5f8a3-9c4b-4d7e-8f6a-3b2c4d5e6f7a-412a3fc8.md) | InitialAccess, Persistence, CredentialAccess, DefenseEvasion | [`StealthTalkAnomalousAuth_CL`](../tables/stealthtalkanomalousauth-cl.md) |
| [StealthTalk - Brute force followed by suspicious access](../content/stealthtalk-stealthtalk-brute-force-followed-by-suspicious-access-e3f6a9b4-ad5c-4e8f-9a7b-4c3d5e6f7a8b-13cf45fe.md) | CredentialAccess, InitialAccess | [`StealthTalkAnomalousAuth_CL`](../tables/stealthtalkanomalousauth-cl.md) |
| [StealthTalk - Impossible travel](../content/stealthtalk-stealthtalk-impossible-travel-c1d4e7f2-8b3a-4c6d-9e5f-2a1b3c4d5e6f-22aa12ef.md) | InitialAccess, CredentialAccess | [`StealthTalkAnomalousAuth_CL`](../tables/stealthtalkanomalousauth-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [StealthTalkAnomalousAuthMonitor](../content/stealthtalk-stealthtalkanomalousauthmonitor-66e563fa.md) | [`StealthTalkAnomalousAuth_CL`](../tables/stealthtalkanomalousauth-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [StealthTalk - Alert to Microsoft Teams](../content/stealthtalk-stealthtalk-alert-to-microsoft-teams-a29da8d6.md) | When a Microsoft Sentinel incident is created, post a formatted Adaptive Card with the incident summ... | - |

## Additional Documentation

> 📄 *Source: [StealthTalk/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StealthTalk/README.md)*

The StealthTalk Anomalous Authentication solution surfaces suspicious user-authentication events from the StealthTalk private business messenger inside Microsoft Sentinel, providing a normalised ASIM-compliant view, four scheduled detections, three hunting queries, an interactive workbook, and a Teams-notification playbook. It is intended for organisations running StealthTalk Enterprise on Microsoft Azure and wanting their SOC to operate StealthTalk anomalies through standard Microsoft Sentinel workflows.

## What's inside

| Artefact | Count | Notes |
| ------------------------------------ | ----- | --------------------------------------------------------------------------------------------------------------------- |
| Data Connector (Logs Ingestion API) | 1 | Custom log table + DCE + DCR. Stream `Custom-StealthTalkAnomalousAuth_CL`. 21 fields covering 4 anomaly classes. |
| Scheduled Analytic Rules | 4 | After-Hours Work (Low), Multi New Devices Registration (Medium), Login Outside Work Zone (High), Password Brute Force (High). MITRE-mapped. |
| Hunting Queries | 3 | Impossible Travel, Account Takeover Sequence, Brute Force followed by Suspicious Access. |
| ASIM Parsers (Authentication 0.1.3) | 3 | `vimAuthenticationStealthTalk` (filtering), `ASimAuthenticationStealthTalk` (non-filtering), and an `imAuthentication` union extension that registers the StealthTalk source. |
| Workbook | 1 | 17 panels across Overview, Off-Hours, New Devices, Geo Anomaly, Brute Force. Includes a User Risk Leaderboard, Multi-Vector Correlation, and a World Map. |
| Playbook | 1 | Logic App that posts incident details into a Microsoft Teams channel via webhook. |

## Prerequisites

1. A Microsoft Sentinel-enabled Log Analytics workspace.
2. A deployed StealthTalk Enterprise instance configured to send anomalous-auth events to the Log Analytics workspace via the Logs Ingestion API. StealthTalk authenticates to Azure with a service principal granted the **Monitoring Metrics Publisher** role on the deployed Data Collection Rule.
3. Workspace ASIM Authentication parsers (Microsoft's `FullDeploymentAuthentication.json`) deployed in the workspace before this Solution is installed. The Solution's `imAuthentication` extension parser overrides the union so that StealthTalk events are returned by `imAuthentication()` alongside Microsoft-built-in sources.
4. For the Teams playbook: a Microsoft Teams channel with an incoming-webhook workflow already created. The webhook URL is configured as a deployment parameter.

## Installation

This solution is published as a partner Microsoft Sentinel Solution to the **Microsoft Sentinel Content Hub**. To install:

1. Open Microsoft Defender -> Microsoft Sentinel -> your workspace -> **Content management** -> **Content hub**.
2. Search for **StealthTalk Anomalous Authentication** and click **Install**.
3. After install, configure each artefact under **Content management -> Content hub -> StealthTalk -> Manage**:

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                                                                                          |
|-------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.0.0       | 13-05-2026                     | Initial public release with the StealthTalk data connector, 4 analytic rules, 3 hunting queries, ASIM Authentication parsers, workbook, and Teams playbook. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

