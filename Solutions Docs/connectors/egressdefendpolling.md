# ⚠️ Egress Defend

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Egress-logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `EgressDefendPolling` |
| **Publisher** | Egress Software Technologies |
| **Used in Solutions** | [Egress Defend](../solutions/egress-defend.md) |
| **Collection Method** | [CCF (Legacy)](../methods/ccf-legacy.md) |
| **Connector Definition Files** | [DefendAPIConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Egress%20Defend/Data%20Connectors/DefendAPIConnector.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

The Egress Defend audit connector provides the capability to ingest Egress Defend Data into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`EgressDefend_CL`](../tables/egressdefend-cl.md) 🔶 | ? | ✓ | ? |
| [`KnowBe4Defend_CL`](../tables/knowbe4defend-cl.md) 🔶 | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions on the Log Analytics workspace are required to enable the data connector.

**Custom Permissions:**
- **Egress API Token**: An Egress API token is required to ingest audit records to Microsoft Sentinel.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Egress Defend with Microsoft Sentinel**

Enter your Egress Defend API URl, Egress Domain and API token.
> 📋 **Additional Configuration Step**: This connector includes a configuration step of type `APIKey`. Please refer to the Microsoft Sentinel portal for detailed configuration options for this step.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

