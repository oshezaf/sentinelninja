# TrendAI Vision One™ - OAT Detections (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/TrendAI_Logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `TrendAIVisionOneOAT` |
| **Publisher** | TrendAI |
| **Used in Solutions** | [TrendAI Vision One(CCF)](../solutions/trendai-vision-one-ccf.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [TrendAIVisionOneOAT_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TrendAI%20Vision%20One%28CCF%29/Data%20Connectors/TrendAIVisionOneOAT_ccp/TrendAIVisionOneOAT_ConnectorDefinition.json) |
| **DCR Definition Files** | [TrendAIVisionOneOAT_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TrendAI%20Vision%20One%28CCF%29/Data%20Connectors/TrendAIVisionOneOAT_ccp/TrendAIVisionOneOAT_DCR.json) |
| **CCF Configuration** | [TrendAIVisionOneOAT_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TrendAI%20Vision%20One%28CCF%29/Data%20Connectors/TrendAIVisionOneOAT_ccp/TrendAIVisionOneOAT_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#trendai-vision-one---oat-detections-via-codeless-connector-framework) |

The [TrendAI Vision One™](https://www.trendmicro.com/en_us/business/products/detection-response/xdr.html) OAT data connector ingests Observed Attack Techniques (OAT) detections from TrendAI Vision One™ into Microsoft Sentinel. Detections include full process trees, file hashes, network indicators, and MITRE ATT&CK mappings.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`TrendAI_XDR_OAT_V2_CL`](../tables/trendai-xdr-oat-v2-cl.md) 🔶 | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**⚠️ IMPORTANT: Token Rotation & Data Loss**
>
> Each Vision One tenant is configured as an independent connection. Existing connections cannot be edited from this page. To rotate a token or change a connection setting, delete that connection and select **Add Connection** to create it again. Events generated during a disconnected period will not be collected automatically. Existing data in the shared Sentinel table is not deleted.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connection Alias**
- **Vision One Business ID**
- **API Domain**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add TrendAI Vision One OAT Connection**

*Connect a Vision One tenant to Microsoft Sentinel*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

#### Retrieve your TrendAI Vision One™ API Token
1. Log in to the TrendAI Vision One™ Console.
2. Navigate to **Administration → API Keys**.
3. Click **Add API Key**, select the **SIEM** role, and copy the token.

- **Connection Alias** (required): Production UK or Customer A
- **API Domain (Select your Vision One region)** (required): Select from available options
  - United States (api.xdr.trendmicro.com)
  - Europe (api.eu.xdr.trendmicro.com)
  - Singapore (api.sg.xdr.trendmicro.com)
  - Japan (api.xdr.trendmicro.co.jp)
  - Australia (api.au.xdr.trendmicro.com)
  - ... and 5 more options
- **Vision One Business ID** (required): The cid value from the Vision One API token
- **API Token** (required): Paste your TrendAI Vision One™ API token here
- **TMV1-Filter (Optional)** (optional): (riskLevel eq 'high') and (endpointName eq 'my-computer')
- **Exclude third-party OAT detections (productCode = 'tlc')** (required): Select from available options
  - Yes - Exclude third-party detections (Recommended)
  - No - Include all detections

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

