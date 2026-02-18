# Cyren Threat Intelligence

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cyren_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CyrenThreatIntel` |
| **Publisher** | Cyren |
| **Used in Solutions** | [CyrenThreatIntelligence](../solutions/cyrenthreatintelligence.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Cyren_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyrenThreatIntelligence/Data%20Connectors/CyrenThreatIntel_CCF/Cyren_ConnectorDefinition.json) |

Ingest IP reputation and malware URL indicators from Cyren using the Common Connector Framework (CCF).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Cyren_Indicators_CL`](../tables/cyren-indicators-cl.md) | ✗ | ✗ | ✗ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions required

**Custom Permissions:**
- **Cyren JWT Tokens**: JWT tokens stored in Azure Key Vault or provided at deployment time.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Cyren Threat Intelligence**

To enable the Cyren Threat Intelligence connector, provide your JWT tokens below and click Connect.

>For enhanced security, you can enable Key Vault integration to store and retrieve the JWT tokens.
- **IP Reputation JWT Token**: (password field)
- **Malware URL JWT Token**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

