# ⚠️ Egress Iris Connector

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Egress-logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `EgressSiemPolling` |
| **Publisher** | Egress Software Technologies |
| **Used in Solutions** | [Egress Iris](../solutions/egress-iris.md) |
| **Collection Method** | CCF |
| **Connector Definition Files** | [EgressDataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Egress%20Iris/Data%20Connectors/EgressDataConnector.json) |

The Egress Iris connector will allow you to ingest Egress data into Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Supports Transformations | Ingestion API Supported |
|-------|:------------------------:|:-----------------------:|
| [`EgressDefend_CL`](../tables/egressdefend-cl.md) | — | — |
| [`EgressEvents_CL`](../tables/egressevents-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions on the Log Analytics workspace are required to enable the data connector.

**Custom Permissions:**
- **Egress API Token**: An Egress API token is required to ingest audit records to Microsoft Sentinel.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Egress Data with Microsoft Sentinel**

Enter your Egress API Hostname and secret.
> 📋 **Additional Configuration Step**: This connector includes a configuration step of type `APIKey`. Please refer to the Microsoft Sentinel portal for detailed configuration options for this step.

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Connectors Index](../connectors-index.md)

