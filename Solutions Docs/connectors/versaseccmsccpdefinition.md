# ⚠️ VersasecCms

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Logos/versasec-logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `VersasecCmsCCPDefinition` |
| **Publisher** | Versasec AB |
| **Used in Solutions** | [VersasecCMS](../solutions/versaseccms.md) |
| **Collection Method** | CCF |
| **Connector Definition Files** | [VersasecCMS_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VersasecCMS/Data%20Connectors/VersasecCMS_CCF/VersasecCMS_ConnectorDefinition.json) |

The VersasecCms data connector allows ingesting logs into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`VersasecCmsErrorLogs_CL`](../tables/versaseccmserrorlogs-cl.md) | — | — |
| [`VersasecCmsSysLogs_CL`](../tables/versaseccmssyslogs-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configuration**

Enter credentials for VersasecCms.
- **Management URL**
- **API Base Path**
- **API Token**
- **Polling Interval (Minutes)**
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

