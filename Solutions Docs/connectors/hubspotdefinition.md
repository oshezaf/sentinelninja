# ⚠️ Hubspot (via Codeless Connector Framework)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Hubspot.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `HubspotDefinition` |
| **Publisher** | Community |
| **Used in Solutions** | [Hubspot](../solutions/hubspot.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Hubspot_Definition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hubspot/Data%20Connectors/Hubspot_CCF/Hubspot_Definition.json) |
| **DCR Definition Files** | [Hubspot_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hubspot/Data%20Connectors/Hubspot_CCF/Hubspot_DCR.json) |
| **CCF Configuration** | [Hubspot_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hubspot/Data%20Connectors/Hubspot_CCF/Hubspot_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

The community [HubSpot](https://www.hubspot.com/) solution provides the capability to ingest [Hubspot account activity](https://developers.hubspot.com/docs/api-reference/account-audit-logs-v3/guide) into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`HubspotAuditLogs_CL`](../tables/hubspotauditlogs-cl.md) | ? | ✓ | ? |
| [`HubspotSecurityActivity_CL`](../tables/hubspotsecurityactivity-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Hubspot account-info.security.read API scope**: https://developers.hubspot.com/docs/api-reference/account-audit-logs-v3/guide#scope-requirements

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Hubspot to Microsoft Sentinel**

Connect using Hubspot Private App. Learn more: https://developers.hubspot.com/docs/apps/legacy-apps/private-apps/overview#create-a-private-app
- **Access token**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

