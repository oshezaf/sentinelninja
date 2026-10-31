# Miro for Microsoft Sentinel

*Solution: Miro*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Miro.svg" alt="Miro Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Miro |
| **Support Tier** | Partner |
| **Support Link** | [https://help.miro.com](https://help.miro.com) |
| **Categories** | Security - Automation (SOAR),Security - Insider Threat,Security - Information Protection,Security - Threat Protection,Security - Cloud Security,Compliance,User Behavior (UEBA),Application |
| **Version** | 3.1.1 |
| **Author** | Miro - enterprise_integrations@miro.com |
| **First Published** | 2025-12-05 |
| **Last Updated** | 2026-10-29 |
| **Solution Folder** | [Miro](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Miro) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/realtimeboardincdbamiro1645117589045.azure-sentinel-solution-miro) · Popularity: 🔵 Medium (73%) |

The [Miro](https://miro.com/) solution for Microsoft Sentinel provides the capability to ingest audit logs, content activity logs, and AI interaction logs from [Miro REST APIs](https://developers.miro.com/reference) into Microsoft Sentinel using the Codeless Connector Framework (CCF). This connector enables organizations to monitor and analyze activities within their Miro workspaces. For detailed instructions, refer to the [documentation](https://help.miro.com/hc/en-us/articles/31325908249362).

**Underlying Microsoft technology used:**

This solution is dependent on the following technology and this dependency may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

• [Codeless Connector Framework (CCF)](https://learn.microsoft.com/azure/sentinel/create-codeless-connector)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **3 data connector(s)**:

- [Miro AI Interaction Logs (Beta) (Enterprise Plan + Enterprise Guard)](../connectors/miroaiinteractionlogsdataconnector.md)
- [Miro Audit Logs (Enterprise Plan)](../connectors/miroauditlogsdataconnector.md)
- [Miro Content Logs (Enterprise Plan + Enterprise Guard)](../connectors/mirocontentlogsdataconnector.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`MiroAIInteractionLogs_CL`](../tables/miroaiinteractionlogs-cl.md) | [Miro AI Interaction Logs (Beta) (Enterprise Plan + Enterprise Guard)](../connectors/miroaiinteractionlogsdataconnector.md) | - |
| [`MiroAuditLogs_CL`](../tables/miroauditlogs-cl.md) | [Miro Audit Logs (Enterprise Plan)](../connectors/miroauditlogsdataconnector.md) | - |
| [`MiroContentLogs_CL`](../tables/mirocontentlogs-cl.md) | [Miro Content Logs (Enterprise Plan + Enterprise Guard)](../connectors/mirocontentlogsdataconnector.md) | - |

## Additional Documentation

> 📄 *Source: [Miro/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Miro/README.md)*

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Miro/../../Logos/Miro.svg" alt="Miro" width="20%"/><br>

## Overview

The [Miro](https://miro.com/) connector ingests audit logs, content activity logs and AI interaction logs from [Miro REST APIs](https://developers.miro.com/reference) into Microsoft Sentinel using the Codeless Connector Framework (CCF). This centralizes Miro workspace activity monitoring in Microsoft Sentinel for security threat detection, incident investigation, and compliance reporting.

## Data connectors

This solution includes three data connectors:

1. **Miro Audit Logs (Enterprise Plan)**: Organization-wide audit events including user authentication, content access, team changes, and administrative actions. [API documentation](https://developers.miro.com/reference/enterprise-get-audit-logs) | [Audit logs overview](https://developers.miro.com/reference/audit-logs).
2. **Miro Content Logs (Enterprise Plan + Enterprise Guard)**: Content activity tracking including item creation, updates, and deletions for compliance and eDiscovery. [API documentation](https://developers.miro.com/reference/enterprise-board-content-item-logs-fetch) | [Content logs overview](https://developers.miro.com/reference/board-content-logs).
3. **Miro AI Interaction Logs (Beta) (Enterprise Plan + Enterprise Guard)**: User interactions with AI features in Miro: the prompt received from the user, the response returned to them, and the model and tool calls made in between. [API documentation](https://developers.miro.com/reference/enterprise-get-ai-interaction-logs) | [AI interaction logs overview](https://help.miro.com/hc/en-us/articles/34049604547858). This connector is in Beta: the AI interaction logs API may change before general availability.

## Prerequisites

### General requirements

- Active Microsoft Sentinel workspace.
- Company Admin role in your Miro organization.
- Miro OAuth access token (non-expiring).

### Connector-specific requirements

**For audit logs connector:**

- Miro Enterprise Plan.
- OAuth scope: `auditlogs:read`.
- Access token.

**For content logs connector:**

- Miro Enterprise Plan + Enterprise Guard add-on.
- OAuth scope: `contentlogs:export`.
- Access token.
- Miro organization ID.

**For AI interaction logs connector:**

- Miro Enterprise Plan + Enterprise Guard add-on.
- A Miro admin turns on **Collect AI interaction logs** in Admin console > Security > Audit logs > Settings. Only interactions after that are recorded. If the setting is not visible, contact your Miro account manager.
- OAuth scope: `aiinteractionlogs:read`.
- Access token.
- Miro organization ID.

## Installation

There are two ways to set up the Miro connectors.

- **Option 1 (recommended):** Use enterprise integrations. Simplest setup with automatic token generation.
- **Option 2 (alternative):** Create custom OAuth application. More control over OAuth app configuration.


*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                                                                                                                                                                                                                                                     |
|-------------|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.1.1       | 26-10-2026                     | Renamed the AI Interaction Logs table from `MiroAILogs_CL` to `MiroAIInteractionLogs_CL` and every AI Interaction Logs connector resource to `MiroAIInteractionLogs*`; queries that read the old table name must use the new one.                                                                                                                                                                         |
| 3.1.0       | 20-10-2026                     | Added the AI Interaction Logs **CCF connector** (Beta) and the `ai`, `ai_assisted` and `actor` columns to Content Logs; the Content Logs and AI Interaction Logs pollers now throttle paged requests. Setup steps explain that the SIEM toggle creates one token with every log scope the organization is entitled to. |
| 3.0.0       | 05-12-2025                     | Initial release of the Miro solution with two **CCF connectors** (Audit Logs and Content Logs).                                                                                                                                                                                                                        |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

