# 🚫 [DEPRECATED] IONIX Security Logs (Push)

> 🚫 **Deprecated:** This connector has been deprecated and may be removed in future versions.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ionix-logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CyberpionSecurityLogs` |
| **Publisher** | IONIX |
| **Used in Solutions** | [IONIX](../solutions/ionix.md) |
| **Collection Method** | [REST Pull API](../methods/rest-pull-api.md) |
| **Connector Definition Files** | [IONIXSecurityLogs.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IONIX/Data%20Connectors/IONIXSecurityLogs.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Connector definition requires workspace key (SharedKey pattern)* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

⚠️ **This connector is deprecated and will be removed in June 2026.** Please use the new 'IONIX Security Logs (via Codeless Connector Framework)' connector instead, which provides automatic daily polling without requiring manual configuration in the IONIX portal.



---



The IONIX Security Logs data connector ingests logs from the IONIX system directly into Sentinel. The connector allows users to visualize their data, create alerts and incidents and improve security investigations.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CyberpionActionItems_CL`](../tables/cyberpionactionitems-cl.md) 🔶 | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **IONIX Subscription**: a subscription and account is required for IONIX logs. [One can be acquired here.](https://azuremarketplace.microsoft.com/en/marketplace/apps/cyberpion1597832716616.cyberpion)

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

Follow the [instructions](https://www.ionix.io/integrations/azure-sentinel/) to integrate IONIX Security Alerts into Sentinel.
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Primary Key**: `PrimaryKey`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

