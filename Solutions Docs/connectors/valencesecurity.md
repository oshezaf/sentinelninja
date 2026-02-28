# SaaS Security

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ValenceSecurityLogo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ValenceSecurity` |
| **Publisher** | Valence Security |
| **Used in Solutions** | [Valence Security](../solutions/valence-security.md) |
| **Collection Method** | [REST API](../methods/rest-api.md) |
| **Connector Definition Files** | [ValenceSecurity.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Valence%20Security/Data%20Connectors/ValenceSecurity.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Connector definition requires workspace key (SharedKey pattern)* |

Connects the Valence SaaS security platform Azure Log Analytics via the REST API interface.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ValenceAlert_CL`](../tables/valencealert-cl.md) | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Step 1 : Read the detailed documentation**

The installation process is documented in great detail in [Valence Security's knowledge base](https://support.valencesecurity.com). The user should consult this documentation further to understand installation and debug of the integration.

**2. Step 2: Retrieve the workspace access credentials**

The first installation step is to retrieve both your **Workspace ID** and **Primary Key** from the Microsoft Sentinel platform.
Copy the values shown below and save them for configuration of the API log forwarder integration.
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Primary Key**: `PrimaryKey`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

**3. Step 3: Configure Sentinel integration on the Valence Security Platform**

As a Valence Security Platform admin, go to the [configuration screen](https://app.valencesecurity.com/settings/configuration), click Connect in the SIEM Integration card, and choose Microsoft Sentinel. Paste the values from the previous step and click Connect. Valence will test the connection so when success is reported, the connection worked.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

