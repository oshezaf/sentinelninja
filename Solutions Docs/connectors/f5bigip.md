# F5 BIG-IP

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/F5%20BIG-IP/Workbooks/Images/Logo/f5_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `F5BigIp` |
| **Publisher** | F5 Networks |
| **Used in Solutions** | [F5 Big-IP](../solutions/f5-big-ip.md) |
| **Collection Method** | [REST API](../methods/rest-api.md) |
| **Connector Definition Files** | [F5BigIp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/F5%20BIG-IP/Data%20Connectors/F5BigIp.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Connector definition requires workspace key (SharedKey pattern)* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

The F5 firewall connector allows you to easily connect your F5 logs with Microsoft Sentinel, to view dashboards, create custom alerts, and improve investigation. This gives you more insight into your organization's network and improves your security operation capabilities.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`F5Telemetry_ASM_CL`](../tables/f5telemetry-asm-cl.md) 🔶 | ✗ | ✓ | ✗ |
| [`F5Telemetry_LTM_CL`](../tables/f5telemetry-ltm-cl.md) 🔶 | ✗ | ✓ | ✗ |
| [`F5Telemetry_system_CL`](../tables/f5telemetry-system-cl.md) 🔶 | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configure and connect F5 BIGIP**

To connect your F5 BIGIP, you have to post a JSON declaration to the system’s API endpoint. For instructions on how to do this, see [Integrating the F5 BGIP with Microsoft Sentinel](https://aka.ms/F5BigIp-Integrate).
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Primary Key**: `PrimaryKey`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

