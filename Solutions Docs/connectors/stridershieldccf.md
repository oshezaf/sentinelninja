# Strider Shield

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/StriderShield.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `StriderShieldCCF` |
| **Publisher / Vendor** | NVISO |
| **Used in Solutions** | [Strider Shield](../solutions/strider-shield.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [StriderShield_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Strider%20Shield/Data%20Connectors/StriderShieldCCF/StriderShield_ConnectorDefinition.json) |
| **DCR Definition Files** | [StriderShield_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Strider%20Shield/Data%20Connectors/StriderShieldCCF/StriderShield_DCR.json) |
| **CCF Configuration** | [StriderShield_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Strider%20Shield/Data%20Connectors/StriderShieldCCF/StriderShield_PollingConfig.json) |
| **CCF Capabilities** | `OAuth2` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#strider-shield) |

The Strider Shield connector allows the user to ingest Strider Shield EmailAddresses, EmailDomains, RiskSignals, RiskSignalsDefinitions and Terms events into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`StriderShieldEmailAddresses_CL`](../tables/stridershieldemailaddresses-cl.md) | ✓ | ✓ | ✓ |
| [`StriderShieldEmailDomains_CL`](../tables/stridershieldemaildomains-cl.md) | ? | ✓ | ? |
| [`StriderShieldRiskSignalsDefinitions_CL`](../tables/stridershieldrisksignalsdefinitions-cl.md) | ? | ✓ | ? |
| [`StriderShieldRiskSignals_CL`](../tables/stridershieldrisksignals-cl.md) | ? | ✓ | ? |
| [`StriderShieldTerms_CL`](../tables/stridershieldterms-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Strider Shield API token**: A Strider Shield API Token is required. See the Strider Shield documentation on how to create an API token.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. STEP 1 - Use an Authentication Strider Shield API endpoint**

Follow the Strider Shield documentation for guidance on this step.

**2. STEP 2 - Choose the correct base URL**

There are multiple Strider Shield servers which might host your events. The correct server depends on your license and region.Input the base URL as displayed by the documentation (including 'https://' and without a trailing '/').

**3. STEP 3 - Enter your Strider Shield Details**

Enter the Strider Shield Authentication API endpoint, Base URL, Client ID & Client Secret below:
- **Authentication API endpoint**: Enter your Authentication API endpoint
- **Base Url**: Enter your Base Url
- **Client ID**: Enter your Client ID
- **Client Secret**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

