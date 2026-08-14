# ⚠️ TrendAI Vision One™ - OAT Detections (via Codeless Connector Framework)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

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
> When your API token expires or needs rotation, you must disconnect and reconnect this connector with the new token. **Events generated during the disconnected period will NOT be automatically collected.**
>
> **To minimize data loss:**
> 1. Generate a new API token **before** the current one expires
> 2. Minimize the disconnect/reconnect window (seconds, not hours)
> 3. After reconnection, if needed, manually query the TrendAI Vision One API for events during the gap period using the [OAT Detections API](https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-oat-detections-list_001)
#### 1. Retrieve your TrendAI Vision One™ API Token
1. Log in to the TrendAI Vision One™ Console
2. Navigate to **Administration → API Keys**
3. Click **Add API Key**, select the **SIEM** role, and copy the token
- **API Domain (Select your region)** (select)
  - United States (api.xdr.trendmicro.com)
  - Europe (api.eu.xdr.trendmicro.com)
  - Singapore (api.sg.xdr.trendmicro.com)
  - Japan (api.xdr.trendmicro.co.jp)
  - Australia (api.au.xdr.trendmicro.com)
  - ... and 5 more options
- **API Token**: (password field)
- **TMV1-Filter (Optional)**: (riskLevel eq 'high') and (endpointName eq 'my-computer')
- **Exclude third-party OAT detections (productCode = 'tlc')** (select)
  - Yes - Exclude third-party detections (Recommended)
  - No - Include all detections
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

