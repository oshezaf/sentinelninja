# StyxView Alerts (via Codeless Connector Platform)

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `StyxViewEndpointConnectorDefinition` |
| **Publisher** | Styx Intelligence |
| **Used in Solutions** | [Styx Intelligence](../solutions/styx-intelligence.md) |
| **Collection Method** | CCF |
| **Connector Definition Files** | [StyxView%20Alerts_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Styx%20Intelligence/Data%20Connectors/Alerts/StyxView%20Alerts_ConnectorDefinition.json) |

> ⚠️ **Not listed in Solution JSON:** This connector was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

The [StyxView Alerts](https://styxintel.com/) data connector enables seamless integration between the StyxView Alerts platform and Microsoft Sentinel. This connector ingests alert data from the StyxView Alerts API, allowing organizations to centralize and correlate actionable threat intelligence directly within their Microsoft Sentinel workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Supports Transformations | Ingestion API Supported |
|-------|:------------------------:|:-----------------------:|
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

**Browse:**

- [← Back to Connectors Index](../connectors-index.md)
- [Solutions Index](../solutions-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
