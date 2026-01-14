# Squadra Technologies secRMM

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SquadraTechnologiesSecRMM` |
| **Publisher** | Squadra Technologies |
| **Used in Solutions** | [Squadra Technologies SecRmm](../solutions/squadra-technologies-secrmm.md) |
| **Collection Method** | Unknown (Custom Log) |
| **Connector Definition Files** | [SquadraTechnologiesSecRMM.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Squadra%20Technologies%20SecRmm/Data%20Connectors/SquadraTechnologiesSecRMM.json) |

Use the Squadra Technologies secRMM Data Connector to push USB removable storage security event data into Microsoft Sentinel Log Analytics.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Supports Transformations | Ingestion API Supported |
|-------|:------------------------:|:-----------------------:|
| [`secRMM_CL`](../tables/secrmm-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

Follow the step-by-step instructions provided in the [Squadra Technologies configuration guide for Azure Sentinel](https://www.squadratechnologies.com/StaticContent/ProductDownload/secRMM/9.11.0.0/secRMMAzureSentinelAdministratorGuide.pdf)
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Primary Key**: `PrimaryKey`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Connectors Index](../connectors-index.md)

