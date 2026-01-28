# ⚠️ 🔍 StyxView Alerts (via Codeless Connector Platform)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/styx-logo-black.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `StyxViewEndpointConnectorDefinition` |
| **Publisher** | Styx Intelligence |
| **Used in Solutions** | [Styx Intelligence](../solutions/styx-intelligence.md) |
| **Collection Method** | CCF |
| **Connector Definition Files** | [StyxView%20Alerts_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Styx%20Intelligence/Data%20Connectors/Alerts/StyxView%20Alerts_ConnectorDefinition.json) |

The [StyxView Alerts](https://styxintel.com/) data connector enables seamless integration between the StyxView Alerts platform and Microsoft Sentinel. This connector ingests alert data from the StyxView Alerts API, allowing organizations to centralize and correlate actionable threat intelligence directly within their Microsoft Sentinel workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`StyxViewAlerts_CL`](../tables/styxviewalerts-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **StyxView Alert API access**: Access to the StyxView Alerts API through an API key is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect to StyxView Alerts API to start collecting alert logs in Microsoft Sentinel**

Contact Styx Intelligence Support (support.team@styxintel.com) to get access to an API key.
- **API Token**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

