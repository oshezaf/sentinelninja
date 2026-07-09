# ⚠️ Field Effect MDR Data Connector (via Codeless Connector Framework)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/FieldEffect_Logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `FieldEffectCCF` |
| **Publisher** | Field Effect |
| **Source Vendor** | Field Effect *(basis: publisher)* |
| **Used in Solutions** | [FieldEffectMDR](../solutions/fieldeffectmdr.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [FieldEffect_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FieldEffectMDR/Data%20Connectors/FieldEffect_ConnectorDefinition.json) |
| **DCR Definition Files** | [FieldEffect_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FieldEffectMDR/Data%20Connectors/FieldEffect_DCR.json) |
| **CCF Configuration** | [FieldEffect_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FieldEffectMDR/Data%20Connectors/FieldEffect_PollerConfig.json) |
| **CCF Capabilities** | `APIKey` |

This solution enables Microsoft Sentinel to ingest Field Effect MDR data using the Codeless Connector Framework (CCF). The connector polls the Field Effect ARO API and sends results to a Log Analytics custom table for hunting, correlation, and alerting within Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`FieldEffectAROAlerts_CL`](../tables/fieldeffectaroalerts-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configure Field Effect Connector**

1. In the Field Effect MDR portal, generate an API Key. 
2. Copy your Organization ID from the portal. 
3. Enter both values below and connect.
- **API Key**: (password field)
- **Organization ID**: Enter your Field Effect Organization ID
- Click 'Connect to Field Effect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

