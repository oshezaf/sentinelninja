# Vaikora AI Agent Signals for Microsoft Defender for Cloud

*Solution: VaikoraSecurityCenter*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/vaikora_logo.svg" alt="VaikoraSecurityCenter Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Data443 Risk Mitigation, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.data443.com](https://www.data443.com) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.1 |
| **Author** | Data443 Risk Mitigation, Inc. - support@data443.com |
| **First Published** | 2026-04-02 |
| **Last Updated** | 2026-06-23 |
| **Solution Folder** | [Vaikora-AzureSecurityCenter](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-AzureSecurityCenter) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/data443riskmitigationinc1761580347231.vaikora-security-center-connector) · Popularity: ⚪ Very Low (0%) |

The Vaikora Microsoft Defender for Cloud solution integrates [Vaikora](https://vaikora.com) AI-driven security signal detection with Microsoft Sentinel and Microsoft Defender for Cloud. A Logic App playbook polls the Vaikora API every 6 hours, filters high-severity actions and behavioral anomalies, and writes them to a custom Log Analytics table (Vaikora_AgentSignals_CL). Analytic rules then surface these signals in Sentinel for investigation.

## Contents

- [Data Connectors](#data-connectors)
- [Internal Tables](#internal-tables)
- [Content Items](#content-items)

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`Vaikora_AgentSignals_CL`](../tables/vaikora-agentsignals-cl.md) | Analytics, Playbooks (writes) |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Vaikora - Behavioral anomaly detected](../content/vaikorasecuritycenter-vaikora-behavioral-anomaly-detected-c0984707-0855-430e-9c36-5e2d0d0ce56f-89d50910.md) | Medium | Discovery, LateralMovement, Collection, Exfiltration | *Internal use:*<br>[`Vaikora_AgentSignals_CL`](../tables/vaikora-agentsignals-cl.md) |
| [Vaikora - Feed outage detection](../content/vaikorasecuritycenter-vaikora-feed-outage-detection-5f7789fa-0a6b-4dff-a2da-dfa4b682f3af-c7fc740b.md) | Low | - | *Internal use:*<br>[`Vaikora_AgentSignals_CL`](../tables/vaikora-agentsignals-cl.md) |
| [Vaikora - High severity AI agent action](../content/vaikorasecuritycenter-vaikora-high-severity-ai-agent-action-ac3ec787-fd49-4e93-88cc-aaa9b31061ac-31cd3c0a.md) | High | InitialAccess, Execution, Persistence, DefenseEvasion, CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact | *Internal use:*<br>[`Vaikora_AgentSignals_CL`](../tables/vaikora-agentsignals-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Vaikora to Microsoft Defender for Cloud](../content/vaikorasecuritycenter-vaikora-to-microsoft-defender-for-cloud-deb83906.md) | This playbook polls the Vaikora AI signal exchange API every 6 hours, filters actions with high/crit... | *Internal use:*<br>[`Vaikora_AgentSignals_CL`](../tables/vaikora-agentsignals-cl.md) *(write)* |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

