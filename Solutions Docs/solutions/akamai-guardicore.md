# ⚠️ Akamai Guardicore

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/akamai-guardicore.svg" alt="Akamai Guardicore Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Akamai Guardicore Support |
| **Support Tier** | Partner |
| **Support Link** | [https://www.akamai.com/global-services/support/guardicore-support](https://www.akamai.com/global-services/support/guardicore-support) |
| **Categories** | Security - Cloud Security,Security - Network |
| **Version** | 3.0.0 |
| **Author** | Akamai Guardicore - specialist@akamai.com |
| **First Published** | 2025-04-23 |
| **Solution Folder** | [Akamai Guardicore](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Akamai%20Guardicore) |

The [Akamai Guardicore](https://www.akamai.com/products/akamai-guardicore-segmentation) solution for Microsoft Sentinel imports Agents, Assets, Applications, Policy Rules, and incident-related connection enrichment data from a Guardicore Centra instance. The data is ingested via the Codeless Connector Framework (CCF) and Data Collection Rules, with no Azure Function App dependency.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Codeless Connector Framework (CCF)](https://learn.microsoft.com/azure/sentinel/create-codeless-connector)

b. [Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview)

c. [Data Collection Rules](https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview)

d. [Azure Logic Apps (Consumption)](https://azure.microsoft.com/services/logic-apps/)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Akamai Guardicore](../connectors/akamaiguardicore.md)

## Tables Used

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GuardicoreAgents_CL`](../tables/guardicoreagents-cl.md) | [Akamai Guardicore](../connectors/akamaiguardicore.md) | Workbooks |
| [`GuardicoreApplications_CL`](../tables/guardicoreapplications-cl.md) | [Akamai Guardicore](../connectors/akamaiguardicore.md) | Workbooks |
| [`GuardicoreAssets_CL`](../tables/guardicoreassets-cl.md) | [Akamai Guardicore](../connectors/akamaiguardicore.md) | - |
| [`GuardicoreEnrichingConnections_CL`](../tables/guardicoreenrichingconnections-cl.md) | - | Workbooks |
| [`GuardicorePolicyRules_CL`](../tables/guardicorepolicyrules-cl.md) | [Akamai Guardicore](../connectors/akamaiguardicore.md) | Workbooks |
| [`GuardicoreProcessedIncidents_CL`](../tables/guardicoreprocessedincidents-cl.md) | - | Workbooks |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |
| Workbooks | 2 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [GuardicoreIncident](../content/akamai-guardicore-guardicoreincident-eaef0237.md) | [`GuardicoreEnrichingConnections_CL`](../tables/guardicoreenrichingconnections-cl.md)<br>[`GuardicoreProcessedIncidents_CL`](../tables/guardicoreprocessedincidents-cl.md) |
| [GuardicoreInfo](../content/akamai-guardicore-guardicoreinfo-922f455f.md) | [`GuardicoreAgents_CL`](../tables/guardicoreagents-cl.md)<br>[`GuardicoreApplications_CL`](../tables/guardicoreapplications-cl.md)<br>[`GuardicorePolicyRules_CL`](../tables/guardicorepolicyrules-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Akamai Guardicore Incident-Enrichment — one-click bootstrap](../content/akamai-guardicore-akamai-guardicore-incident-enrichment-—-one-click-bootstrap-397b7ee6.md) | Deploys the entire Akamai Guardicore incident-enrichment stack in one shot: Storage Account + Guardi... | - |
| [Guardicore-EnrichmentRunner](../content/akamai-guardicore-guardicore-enrichmentrunner-8c6a3647.md) | Recurrence-triggered Logic App that drains the GuardicoreConnectionSlots Azure Table work queue, fet... | - |
| [Guardicore-ProcessIncidentEnrichment](../content/akamai-guardicore-guardicore-processincidentenrichment-185057ea.md) | This playbook reacts to a Microsoft Sentinel incident, computes the 3-slot fan-out over the incident... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                     |
|------------|--------------------------------|----------------------------------------|
| 3.0.0      | 27-04-2026                     | Initial release of the Akamai Guardicore solution as a Codeless Connector Framework (CCF/CCP) solution. Polls Agents, Assets, Applications, and Policy Rules from Guardicore Centra via DCR-based ingestion (no Azure Function App). Includes the `Guardicore-ProcessIncidentEnrichment` Microsoft Sentinel incident-creation playbook and the `Guardicore-EnrichmentRunner` recurrence-triggered companion playbook, both implemented natively in Logic Apps. They write to `GuardicoreProcessedIncidents_CL` and `GuardicoreEnrichingConnections_CL` via the Logs Ingestion API to a Data Collection Rule using system-assigned managed identity (no workspace shared key required). Two workbooks: Workload Protection Dashboard and Incident Analysis Dashboard. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

