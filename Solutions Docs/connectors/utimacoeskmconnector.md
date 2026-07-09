# Utimaco Enterprise Secure Key Manager (ESKM)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/UtimacoLogoSVG.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `UtimacoESKMConnector` |
| **Publisher / Vendor** | Utimaco |
| **Used in Solutions** | [Utimaco Enterprise Secure Key Manager](../solutions/utimaco-enterprise-secure-key-manager.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [UtimacoESKM_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Utimaco%20Enterprise%20Secure%20Key%20Manager/Data%20Connectors/sentinel-connectors/UtimacoESKM_CCF/UtimacoESKM_ConnectorDefinition.json) |
| **DCR Definition Files** | [UtimacoESKM_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Utimaco%20Enterprise%20Secure%20Key%20Manager/Data%20Connectors/sentinel-connectors/UtimacoESKM_CCF/UtimacoESKM_DCR.json) |
| **CCF Configuration** | [UtimacoESKM_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Utimaco%20Enterprise%20Secure%20Key%20Manager/Data%20Connectors/sentinel-connectors/UtimacoESKM_CCF/UtimacoESKM_PollingConfig.json) |
| **CCF Capabilities** | `Basic`, `Paging` |

The Utimaco ESKM connector ingests KMIP server logs from Utimaco Enterprise Secure Key Manager (ESKM) into Microsoft Sentinel.



Supports Basic authentication (username/password).



For more information, visit [Utimaco ESKM Documentation](https://utimaco.com/key-management/enterprise-secure-key-manager).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`UtimacoESKMKmipServerLogs_CL`](../tables/utimacoeskmkmipserverlogs-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions are required.

**Custom Permissions:**
- **Utimaco ESKM Account Credentials**: Utimaco ESKM account credentials (username and password) are required to authenticate to the ESKM management API. See [Utimaco ESKM Documentation](https://utimaco.com/key-management/enterprise-secure-key-manager).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Step 1 - Prerequisites**

Ensure you have a Utimaco ESKM management account with permissions to access the management API. Note the base URL of your ESKM appliance (typically `https://<eskm-host>:8443`).

**2. Step 2 - Connect to Utimaco ESKM**

Provide your Utimaco ESKM management API base URL and account credentials below, then click Connect.
- **API Base URL**: https://<eskm-host>:8443
- **Username**: Enter username
- **Password**: (password field)
- Click 'connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

