# ⚠️ CheckPoint Harmony Email and Collaboration

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CloudGuardLogo.svg" alt="CheckPoint Harmony Email and Collaboration Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Harmony Email and Collaboration |
| **Support Tier** | Partner |
| **Support Link** | [https://supportcenter.checkpoint.com/product/495](https://supportcenter.checkpoint.com/product/495) |
| **Categories** | Security - Threat Intelligence |
| **Version** | 3.0.0 |
| **Author** | Checkpoint - support@checkpoint.com |
| **First Published** | 2025-04-29 |
| **Solution Folder** | [Checkpoint Harmony Email and Collaboration](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Checkpoint%20Harmony%20Email%20and%20Collaboration) |

The [Check Point Harmony Email and Collaboration](https://www.checkpoint.com/harmony/email-collaboration/) solution for Microsoft Sentinel enables ingestion of security events from the Check Point Harmony Email and Collaboration API into Microsoft Sentinel using Microsoft Sentinel’s Codeless Connector Platform. The connector supports DCR-based [ingestion-time transformations](https://learn.microsoft.com/azure/azure-monitor/logs/custom-logs-overview) to parse incoming security event data into custom columns, reducing the need for query-time parsing and improving query performance.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following Microsoft technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Microsoft Sentinel](https://learn.microsoft.com/azure/sentinel/overview)

b. [Microsoft Sentinel Codeless Connector Platform (CCP)](https://learn.microsoft.com/azure/sentinel/create-codeless-connector)

c. [Azure Monitor Logs custom logs and Data Collection Rules (DCR)](https://learn.microsoft.com/azure/azure-monitor/data-collection/data-collection-rule-overview)

d. [Data Collection Rule ingestion-time transformations](https://learn.microsoft.com/azure/azure-monitor/logs/custom-logs-overview)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [CheckpointHEC_CL On Demand Email Security (via Codeless Connector Platform)](../connectors/checkpointhecconnectordefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CheckpointHEC_CL`](../tables/checkpointhec-cl.md) | [CheckpointHEC_CL On Demand Email Security (via Codeless Connector Platform)](../connectors/checkpointhecconnectordefinition.md) | Analytics, Hunting |

## Content Items

This solution includes **7 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 5 |
| Analytic Rules | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Checkpoint - Pending Phishing emails](../content/checkpoint-harmony-email-and-collaboration-checkpoint-pending-phishing-emails-a97e2333-b7de-4c14-9700-e652a1dbef26-bbcae6ab.md) | High | InitialAccess | [`CheckpointHEC_CL`](../tables/checkpointhec-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [DLP Detections](../content/checkpoint-harmony-email-and-collaboration-dlp-detections-0794a162-8635-43fd-81ed-2cf260457541-c0ebc1a6.md) | InitialAccess | [`CheckpointHEC_CL`](../tables/checkpointhec-cl.md) |
| [Event breakdown per user](../content/checkpoint-harmony-email-and-collaboration-event-breakdown-per-user-0794a162-8635-43fd-81ed-2cf260457542-e82d07e1.md) | InitialAccess | [`CheckpointHEC_CL`](../tables/checkpointhec-cl.md) |
| [Event count last 24 hours](../content/checkpoint-harmony-email-and-collaboration-event-count-last-24-hours-0794a162-8635-43fd-81ed-2cf260457543-d2f16ddb.md) | InitialAccess | [`CheckpointHEC_CL`](../tables/checkpointhec-cl.md) |
| [Phishing emails per internal user](../content/checkpoint-harmony-email-and-collaboration-phishing-emails-per-internal-user-0794a162-8635-43fd-81ed-2cf260457545-65d18bbf.md) | InitialAccess | [`CheckpointHEC_CL`](../tables/checkpointhec-cl.md) |
| [Spam emails](../content/checkpoint-harmony-email-and-collaboration-spam-emails-0794a162-8635-43fd-81ed-2cf260457544-80b750a7.md) | InitialAccess | [`CheckpointHEC_CL`](../tables/checkpointhec-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Quarantine-Email](../content/checkpoint-harmony-email-and-collaboration-quarantine-email-83dd4f94.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.0 | 11-03-2026 | Initial Solution Release — includes **Data Connector** (CCP/Push), **Analytic Rule**, **Hunting Queries** (5), and **Playbook** (Quarantine) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

