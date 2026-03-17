# BigID DSPM connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/bigid.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `BigIDDSPMLogsConnectorDefinition` |
| **Publisher** | BigID |
| **Used in Solutions** | [BigID](../solutions/bigid.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [BigIDDSPMLogs_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BigID/Data%20Connectors/BigIDDSPMLogs_ccp/BigIDDSPMLogs_connectorDefinition.json) |
| **CCF Configuration** | [BigIDDSPMLogs_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BigID/Data%20Connectors/BigIDDSPMLogs_ccp/BigIDDSPMLogs_PollerConfig.json) |
| **CCF Capabilities** | `JwtToken`, `Paging`, `MvExpand`, `Nested` |

The [BigID DSPM](https://bigid.com/data-security-posture-management/) data connector provides the capability to ingest BigID DSPM cases with affected objects and datasource information into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`BigIDDSPMAssetStore_CL`](../tables/bigiddspmassetstore-cl.md) | ? | ✓ | ? |
| [`BigIDDSPMCatalog_CL`](../tables/bigiddspmcatalog-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **BigID DSPM API access**: Access to the BigID DSPM API through a BigID Token is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect to BigID DSPM API to start collecting BigID DSPM cases and affected Objects in Microsoft Sentinel**

Provide your BigID domain name like 'customer.bigid.cloud' and your BigID token. Generate a token in the BigID console via Settings -> Access Management -> Users -> Select User and generate a token.
- **BigID FQDN**: BigID FQDN
- **BigID Token**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

