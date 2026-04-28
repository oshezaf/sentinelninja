# D3 Smart SOAR Incidents

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/D3SOAR.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `D3SOARConnectorDefinition` |
| **Publisher** | D3 Security |
| **Used in Solutions** | [D3SmartSOAR](../solutions/d3smartsoar.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [D3SOAR_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/D3SmartSOAR/Data%20Connectors/D3SOAR_CCF/D3SOAR_DataConnectorDefinition.json) |
| **CCF Configuration** | [D3SOAR_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/D3SmartSOAR/Data%20Connectors/D3SOAR_CCF/D3SOAR_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging`, `POST` |

The D3 Smart SOAR data connector pulls incidents from D3 Smart SOAR into Microsoft Sentinel using the D3 codeless REST API command endpoint.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`D3SOARIncidents_CL`](../tables/d3soarincidents-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect D3 Smart SOAR to Microsoft Sentinel**

**Prerequisite:** In D3 Smart SOAR, navigate to **Organization Management → Sites**, select the site you are connecting, and set its **Time Zone** to **(UTC+00:00) Coordinated Universal Time**. This ensures incident timestamps are correctly aligned with Microsoft Sentinel.

Enter your D3 Smart SOAR connection details below. Incidents will be polled every 5 minutes and written to the **D3SOARIncidents_CL** table.

**Server URL** — The base URL of your D3 Smart SOAR deployment, up to and including the site path. Do not include the API path.

**Username** — Your D3 Smart SOAR account username (same as your portal login).

**Site** — The D3 Smart SOAR site name your account belongs to (e.g. `Security Operations`).

**D3 JWT** — A JSON Web Token issued by D3 Smart SOAR for API authentication.
- **Server URL**: https://poc.bemimo.com/ce_site/VSOC
- **Username**: admin
- **Site**: Security Operations
- **D3 JWT**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

