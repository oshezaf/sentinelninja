# SINEC Security Guard

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SSG.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SSG` |
| **Publisher** | Siemens AG |
| **Used in Solutions** | [SINEC Security Guard](../solutions/sinec-security-guard.md) |
| **Collection Method** | [Unknown (Custom Log)](../methods/unknown-custom-log.md) |
| **Connector Definition Files** | [data_connector_GenericUI.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SINEC%20Security%20Guard/Data%20Connectors/data_connector_GenericUI.json) |

The SINEC Security Guard solution for Microsoft Sentinel allows you to ingest security events of your industrial networks from the [SINEC Security Guard](https://siemens.com/sinec-security-guard) into Microsoft Sentinel

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SINECSecurityGuard_CL`](../tables/sinecsecurityguard-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

This Data Connector relies on the SINEC Security Guard Sensor Package to be able to receive Sensor events in Microsoft Sentinel. The Sensor Package can be purchased in the Siemens Xcelerator Marketplace.
**1. Please follow the steps to configure the data connector**

**Set up the SINEC Security Guard Sensor**

  Detailed step for setting up the sensor.

  **Create the Data Connector and configure it in the SINEC Security Guard web interface**

  Instructions on configuring the data connector.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

