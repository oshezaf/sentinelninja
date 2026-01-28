# Sonrai Data Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/SonraiSecurity/Workbooks/Images/Logo/Sonrai.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SonraiDataConnector` |
| **Publisher** | Sonrai |
| **Used in Solutions** | [SonraiSecurity](../solutions/sonraisecurity.md) |
| **Collection Method** | Unknown (Custom Log) |
| **Connector Definition Files** | [Connector_REST_API_Sonrai.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SonraiSecurity/Data%20Connectors/Connector_REST_API_Sonrai.json) |

Use this data connector to integrate with Sonrai Security and get Sonrai tickets sent directly to Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Sonrai Security Data Connector**

1. Navigate to Sonrai Security dashboard.
2. On the bottom left panel, click on integrations.
3. Select Microsoft Sentinel from the list of available Integrations.
4. Fill in the form using the information provided below.
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Primary Key**: `PrimaryKey`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

