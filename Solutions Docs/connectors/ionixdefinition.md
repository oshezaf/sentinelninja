# IONIX Security Logs (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ionix-logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `IONIXDefinition` |
| **Publisher** | IONIX |
| **Used in Solutions** | [IONIX](../solutions/ionix.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [IONIX_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IONIX/Data%20Connectors/IONIXActionItems_CCF/IONIX_ConnectorDefinition.json) |
| **CCF Configuration** | [IONIX_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IONIX/Data%20Connectors/IONIXActionItems_CCF/IONIX_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

The IONIX connector allows you to ingest action items from your IONIX Attack Surface Management platform into Microsoft Sentinel using the Codeless Connector Framework (CCF). Action items represent security findings and vulnerabilities that require remediation.



**This connector automatically polls the IONIX API and writes data to the CyberpionActionItems_CL table.**

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CyberpionActionItems_CL`](../tables/cyberpionactionitems-cl.md) 🔶 | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **IONIX API Token**: An API token from IONIX Portal is required. Create one in **Settings > API** in your [IONIX Portal](https://portal.ionix.io/).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect IONIX to Microsoft Sentinel**

This connector uses the IONIX API to automatically poll for action items and ingest them into Microsoft Sentinel. You need an API token from your IONIX Portal.
>
- **IONIX API Token**: (password field)
- **IONIX Account Name**: cyberpion
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

