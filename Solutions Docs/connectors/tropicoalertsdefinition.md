# Tropico Security - Alerts

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `TropicoAlertsDefinition` |
| **Publisher** | Tropico Security |
| **Used in Solutions** | [Tropico](../solutions/tropico.md) |
| **Collection Method** | CCF |
| **Connector Definition Files** | [TropicoAlerts_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tropico/Data%20Connectors/TropicoAlerts_CCF/TropicoAlerts_ConnectorDefinition.json) |

Ingest security alerts from Tropico Security Platform in OCSF Security Finding format.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Supports Transformations | Ingestion API Supported |
|-------|:------------------------:|:-----------------------:|
| [`Tropico_Alerts_CL`](../tables/tropico-alerts-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions required

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Tropico Security Platform**

Enter your read-only API key from Tropico Settings.
- **API Key**: (password field)
- Click 'Connect' to establish connection

---

**Browse:**

- [← Back to Connectors Index](../connectors-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

