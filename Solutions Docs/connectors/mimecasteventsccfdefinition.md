# ⚠️ Mimecast Security Events (via Codeless Connector Framework)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Mimecast.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `MimecastEventsCCFDefinition` |
| **Publisher** | Obrela |
| **Used in Solutions** | [MimecastEvents-CCF](../solutions/mimecastevents-ccf.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [MimecastEvents_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastEvents-CCF/Data%20Connectors/MimecastEvents_ccf/MimecastEvents_ConnectorDefinition.json) |
| **DCR Definition Files** | [MimecastEvents_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastEvents-CCF/Data%20Connectors/MimecastEvents_ccf/MimecastEvents_DCR.json) |
| **CCF Configuration** | [MimecastEvents_DataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastEvents-CCF/Data%20Connectors/MimecastEvents_ccf/MimecastEvents_DataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |

Ingests Mimecast Secure Email Gateway, Targeted Threat Protection, DLP and Audit events into Microsoft Sentinel using Mimecast **Event Push** and the Codeless Connector Framework (Push). Mimecast posts events directly to the Azure Monitor Logs Ingestion API — no Mimecast credentials are stored in Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`MimecastEvents_CL`](../tables/mimecastevents-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions are required.

**Custom Permissions:**
- **Mimecast Event Push**: Access to the Mimecast Administration Console (Integrations Hub) to configure an Event Push integration with OAuth 2.0 client credentials.
- **Microsoft Entra ID**: Permission to create an application registration (performed automatically by the Deploy button below).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Deploy the ingestion resources**

This creates the Data Collection Endpoint, Data Collection Rule, custom table, and a Microsoft Entra application (with client secret) scoped to ingest into this connector's table only.
Deploy

**2. Configure Mimecast Event Push**

In the Mimecast Administration Console, open **Integrations Hub -> Event Push** and create a destination with format **JSON** and OAuth 2.0 client credentials. Enter the values below.

- **Token endpoint**: the Microsoft Entra (v2.0) token endpoint for the Tenant ID below - the path is `/{Tenant ID}/oauth2/v2.0/token` on the Microsoft identity platform login endpoint ([documentation](https://learn.microsoft.com/entra/identity-platform/v2-oauth2-client-creds-grant-flow))
- **Scope**: https://monitor.azure.com/.default
- **Destination URL**: {Data Collection Endpoint}/dataCollectionRules/{DCR Immutable ID}/streams/Custom-MimecastEvents_CL?api-version=2023-01-01
- **Tenant ID (Directory ID)**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Client ID (Application ID)**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Client secret**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Endpoint**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **DCR Immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

