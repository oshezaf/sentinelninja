# Perimeter 81 Activity Logs

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Perimeter81_Logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `Perimeter81ActivityLogs` |
| **Publisher** | Perimeter 81 |
| **Used in Solutions** | [Perimeter 81](../solutions/perimeter-81.md) |
| **Collection Method** | [Unknown (Custom Log)](../methods/unknown-custom-log.md) |
| **Connector Definition Files** | [Perimeter81ActivityLogs.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Perimeter%2081/Data%20Connectors/Perimeter81ActivityLogs.json) |

The Perimeter 81 Activity Logs connector allows you to easily connect your Perimeter 81 activity logs with Microsoft Sentinel, to view dashboards, create custom alerts, and improve investigation.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Perimeter81_CL`](../tables/perimeter81-cl.md) | — | ✗ | ✗ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

Please note the values below and follow the instructions <a href='https://support.perimeter81.com/hc/en-us/articles/360012680780'>here</a> to connect your Perimeter 81 activity logs with Microsoft Sentinel.
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Primary Key**: `PrimaryKey`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

