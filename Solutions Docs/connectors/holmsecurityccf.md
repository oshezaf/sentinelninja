# Holm Security Data Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/HolmSecurity.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `HolmSecurityCCF` |
| **Publisher** | Holm Security |
| **Used in Solutions** | [HolmSecurity](../solutions/holmsecurity.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [HolmSecurityAssetLogs_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HolmSecurity/Data%20Connectors/HolmSecurityAssetLogs_ccf/HolmSecurityAssetLogs_connectorDefinition.json) |
| **DCR Definition Files** | [HolmSecurityAssetLogs_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HolmSecurity/Data%20Connectors/HolmSecurityAssetLogs_ccf/HolmSecurityAssetLogs_DCR.json) |
| **CCF Configuration** | [HolmSecurityAssetLogs_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HolmSecurity/Data%20Connectors/HolmSecurityAssetLogs_ccf/HolmSecurityAssetLogs_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

The Holm Security data connector provides the capability to ingest [Holm Security](https://www.holmsecurity.com/) asset data into Microsoft Sentinel through the REST API. The connector provides the ability to get web and network assets data from Holm Security.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`net_assets_CL`](../tables/net-assets-cl.md) 🔶 | ✗ | ✓ | ✗ |
| [`web_assets_CL`](../tables/web-assets-cl.md) 🔶 | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Holm Security API access**: A Holm Security API token is required. [See how to set up an API token](https://support.holmsecurity.com/knowledge/how-do-i-set-up-an-api-token).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configuration**

Acquire your token from your Holm Security user profile. For details, visit https://se-api.holmsecurity.com/docs/v2/#section/Authentication
- **API Key**: (password field)
- **Holm Security API Base URL**: e.g. https://se-api.holmsecurity.com/v2

**2. Connect**

Enable the Holm Security connector.
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

