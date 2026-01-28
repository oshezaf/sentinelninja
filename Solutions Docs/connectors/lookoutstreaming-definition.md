# Lookout Mobile Threat Detection Connector (via Codeless Connector Framework) (Preview)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Lookout/Workbooks/Images/Logo/lookout.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `LookoutStreaming_Definition` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Lookout](../solutions/lookout.md) |
| **Collection Method** | CCF |
| **Connector Definition Files** | [LookoutStreaming_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Lookout/Data%20Connectors/LookoutStreamingConnector_ccp/LookoutStreaming_DataConnectorDefinition.json) |

The [Lookout Mobile Threat Detection](https://lookout.com) data connector provides the capability to ingest events related to mobile security risks into Microsoft Sentinel through the Mobile Risk API. Refer to [API documentation](https://esupport.lookout.com/s/article/Mobile-Risk-API-V2-Guide) for more information. This connector helps you examine potential security risks detected in mobile devices.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`LookoutMtdV2_CL`](../tables/lookoutmtdv2-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions on the workspace are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Lookout Mobile Threat Defence connector to Microsoft Sentinel**
Before connecting to Lookout, ensure the following prerequisites are completed.
#### 1.  **ApiKey** is required for Mobile Threat Detection API. See the [documentation](https://esupport.lookout.com/s/article/Mobile-Risk-API-V2-Guide) to learn more about API. Check all requirements and follow  the [instructions](https://esupport.lookout.com/s/article/Mobile-Risk-API-V2-Guide#authenticatingwiththemobileriskapi) for obtaining credentials.
- **API key**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

