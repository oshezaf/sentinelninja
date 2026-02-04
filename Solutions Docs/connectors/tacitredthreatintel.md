# ⚠️ TacitRed Compromised Credentials

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/tacitred_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `TacitRedThreatIntel` |
| **Publisher** | TacitRed |
| **Used in Solutions** | [TacitRedThreatIntelligence](../solutions/tacitredthreatintelligence.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [TacitRed_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TacitRedThreatIntelligence/Data%20Connectors/TacitRed_CCF/TacitRed_ConnectorDefinition.json) |

Ingest compromised credential findings from TacitRed using the Common Connector Framework (CCF).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`TacitRed_Findings_CL`](../tables/tacitred-findings-cl.md) | — | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions required

**Custom Permissions:**
- **TacitRed API Key**: API key stored in Azure Key Vault or provided at deployment time.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect TacitRed Compromised Credentials**

To enable the TacitRed connector, provide your API key below and click Connect.

>For enhanced security, you can enable Key Vault integration to store and retrieve the API key.
- **TacitRed API Key**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

