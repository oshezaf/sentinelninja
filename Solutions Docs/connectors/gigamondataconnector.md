# Gigamon AMX Data Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/gigamon.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `GigamonDataConnector` |
| **Publisher** | Gigamon |
| **Used in Solutions** | [Gigamon Connector](../solutions/gigamon-connector.md) |
| **Collection Method** | [REST API](../methods/rest-api.md) |
| **Connector Definition Files** | [Connector_Analytics_Gigamon.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Gigamon%20Connector/Data%20Connectors/Connector_Analytics_Gigamon.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Connector definition requires workspace key (SharedKey pattern)* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

Use this data connector to integrate with Gigamon Application Metadata Exporter (AMX) and get data sent directly to Microsoft Sentinel. 

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Gigamon_CL`](../tables/gigamon-cl.md) 🔶 | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Gigamon Data Connector**

1. Application Metadata Exporter (AMX) application converts the output from the Application Metadata Intelligence (AMI) in CEF format into JSON format and sends it to the cloud tools and Kafka.
 2. The AMX application can be deployed only on a V Series Node and can be connected to Application Metadata Intelligence running on a physical node or a virtual machine.
 3. The AMX application and the AMI are managed by GigaVUE-FM. This application is supported on VMware ESXi, VMware NSX-T, AWS and Azure.
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Primary Key**: `PrimaryKey`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

