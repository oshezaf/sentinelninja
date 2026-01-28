# ⚠️ Datawiza DAP

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/datawiza_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `DatawizaDapSolution` |
| **Publisher** | Datawiza |
| **Used in Solutions** | [Datawiza](../solutions/datawiza.md) |
| **Collection Method** | REST API |
| **Connector Definition Files** | [Datawiza_DAP.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Datawiza/Data%20Connectors/Datawiza_DAP.json) |

Connects the Datawiza DAP logs to Azure Log Analytics via the REST API interface

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`datawizaserveraccess_CL`](../tables/datawizaserveraccess-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Step 1 : Read the detailed documentation**

The installation process is documented in great detail in the documentation site [Microsoft Sentinel integration](https://docs.datawiza.com/tutorial/integrate-with-microsoft-sentinel.html). The user should consult our support (support@datawiza.com) further to understand installation and debug of the integration.

**2. Step 2: Install the Datawiza Sentinel Connector**

The next step is to install the Datawiza log forwarder to send logs to Microsoft Sentinel. The exact installation will depend on your environment, consult the [Microsoft Sentinel integration](https://docs.datawiza.com/tutorial/integrate-with-microsoft-sentinel.html) for full details.

**3. Step 3: Test the data ingestion**

After approximately 20 minutes access the Log Analytics workspace on your Microsoft Sentinel installation, and locate the *Custom Logs* section verify that a *datawizaserveraccess_CL* table exists. Use the sample queries to examine the data.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

