# Island Enterprise Browser Admin Audit (Polling CCP)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/island.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `Island_Admin_Polling` |
| **Publisher** | Island |
| **Used in Solutions** | [Island](../solutions/island.md) |
| **Collection Method** | [CCF (Legacy)](../methods/ccf-legacy.md) |
| **Connector Definition Files** | [IslandAdminAPIConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Island/Data%20Connectors/IslandAdminAPIConnector.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF connectors use DCR-based Log Ingestion API* |

The [Island](https://www.island.io) Admin connector provides the capability to ingest Island Admin Audit logs into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Island_Admin_CL`](../tables/island-admin-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Island API Key**: An Island API key is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Island to Microsoft Sentinel**

Provide the Island API URL and Key.  API URL is https://management.island.io/api/external/v1/adminActions for US or https://eu.management.island.io/api/external/v1/adminActions for EU.
  Generate the API Key in the Management Console under Settings > API.
> 📋 **Additional Configuration Step**: This connector includes a configuration step of type `APIKey`. Please refer to the Microsoft Sentinel portal for detailed configuration options for this step.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

