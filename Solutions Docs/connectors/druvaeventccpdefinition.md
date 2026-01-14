# Druva Events Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Druva_Logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `DruvaEventCCPDefinition` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [DruvaDataSecurityCloud](../solutions/druvadatasecuritycloud.md) |
| **Collection Method** | CCF |
| **Connector Definition Files** | [Druva_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DruvaDataSecurityCloud/Data%20Connectors/Druva_ccp/Druva_DataConnectorDefinition.json) |

Provides capability to ingest the Druva events from Druva APIs

## Tables Ingested

This connector ingests data into the following tables:

| Table | Supports Transformations | Ingestion API Supported |
|-------|:------------------------:|:-----------------------:|
| [`DruvaInsyncEvents_CL`](../tables/druvainsyncevents-cl.md) | — | — |
| [`DruvaPlatformEvents_CL`](../tables/druvaplatformevents-cl.md) | — | — |
| [`DruvaSecurityEvents_CL`](../tables/druvasecurityevents-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permission are required

**Custom Permissions:**
- **Druva API Access**: Druva API requires a client id and client secret to authenticate

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>Note: Configurations to connect to Druva Rest API

Step 1: Create credentials from Druva console. Refer this doc for steps:- https://help.druva.com/en/articles/8580838-create-and-manage-api-credentials

Step 2: Enter the hostname. For public cloud its apis.druva.com

Step 3: Enter client id and client secret key

**4. Connect to Druva API to start collecting logs in Microsoft Sentinel**

Provide required values:
- **Hostname**: Example: apis.druva.com
- **OAuth Configuration**:
  - Client ID
  - Client Secret
  - Click 'Connect' to authenticate

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Connectors Index](../connectors-index.md)

