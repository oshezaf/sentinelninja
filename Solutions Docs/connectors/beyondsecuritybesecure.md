# ⚠️ 🔍 Beyond Security beSECURE

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Beyond%20Security%20Logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `BeyondSecuritybeSECURE` |
| **Publisher** | Beyond Security |
| **Used in Solutions** | [Beyond Security beSECURE](../solutions/beyond-security-besecure.md) |
| **Collection Method** | [REST API](../methods/rest-api.md) |
| **Connector Definition Files** | [Beyond%20Security%20beSECURE.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Beyond%20Security%20beSECURE/Data%20Connectors/Beyond%20Security%20beSECURE.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Connector definition requires workspace key (SharedKey pattern)* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

The [Beyond Security beSECURE](https://beyondsecurity.com/) connector allows you to easily connect your Beyond Security beSECURE scan events, scan results and audit trail with Azure Sentinel, to view dashboards, create custom alerts, and improve investigation. This gives you more insight into your organization's network and improves your security operation capabilities.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`beSECURE_Audit_CL`](../tables/besecure-audit-cl.md) 🔶 | ? | ✓ | ? |
| [`beSECURE_ScanEvent_CL`](../tables/besecure-scanevent-cl.md) 🔶 | ? | ✓ | ? |
| [`beSECURE_ScanResults_CL`](../tables/besecure-scanresults-cl.md) 🔶 | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configure beSECURE**

Follow the steps below to configure your beSECURE solution to send out scan results, scan status and audit trail to Azure Sentinel.
**1. Access the Integration menu**

  1.1 Click on the 'More' menu option

1.2 Select Server

1.3 Select Integration

1.4 Enable Azure Sentinel

  **2. Provide Azure Sentinel settings**

  Fill in the Workspace ID and Primary Key values, click 'Modify'
  - **Workspace ID**: `WorkspaceId`
    > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
  - **Primary Key**: `PrimaryKey`
    > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

