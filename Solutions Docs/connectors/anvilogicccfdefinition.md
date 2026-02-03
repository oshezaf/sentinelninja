# Anvilogic

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Anvilogic.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AnvilogicCCFDefinition` |
| **Publisher** | Anvilogic |
| **Used in Solutions** | [Anvilogic](../solutions/anvilogic.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Anvilogic_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Anvilogic/Data%20Connectors/AnviLogic_CCF/Anvilogic_DataConnectorDefinition.json) |

The Anvilogic data connector allows you to pull events of interest generated in the Anvilogic ADX cluster into your Microsoft Sentinel

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`Anvilogic_Alerts_CL`](../tables/anvilogic-alerts-cl.md) | — | ✗ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Anvilogic Application Registration Client ID and Client Secret**: To access the Anvilogic ADX we require the client id and client secret from the Anvilogic app registration

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect to Anvilogic to start collecting events of interest in Microsoft Sentinel**

Complete the form to ingest Anvilogic Alerts into your Microsoft Sentinel
- **Token Endpoint**: https://login[.]microsoftonline[.]com/<tenant_id>/oauth2/v2.0/token
- **Anvilogic ADX Scope**: <avl_adx_uri>/.default
- **Anvilogic ADX Request URI**: <avl_adx_uri>/v2/rest/query
- **OAuth Configuration**:
  - Client ID
  - Client Secret
  - Click 'Connect' to authenticate

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

