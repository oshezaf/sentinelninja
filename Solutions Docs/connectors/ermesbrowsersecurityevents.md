# Ermes Browser Security Events

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Ermes_Browser_Security_Logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ErmesBrowserSecurityEvents` |
| **Publisher** | Ermes Cyber Security S.p.A. |
| **Used in Solutions** | [Ermes Browser Security](../solutions/ermes-browser-security.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [ErmesBrowserSecurityEvents_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Ermes%20Browser%20Security/Data%20Connectors/ErmesBrowserSecurityEvents_CCF/ErmesBrowserSecurityEvents_ConnectorDefinition.json) |
| **CCF Configuration** | [ErmesBrowserSecurityEvents_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Ermes%20Browser%20Security/Data%20Connectors/ErmesBrowserSecurityEvents_CCF/ErmesBrowserSecurityEvents_PollerConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging` |

Ermes Browser Security Events

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ErmesBrowserSecurityEvents_CL`](../tables/ermesbrowsersecurityevents-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.
- **Keys** (Workspace): Read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key)

**Custom Permissions:**
- **Ermes Client Id and Client Secret**: Enable API access in Ermes. Please contact [Ermes Cyber Security](https://www.ermes.company) support for more information.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Ermes Browser Security Events to Microsoft Sentinel**

Connect using OAuth2 credentials
- **API URL (optional)**: https://api.shield.ermessecurity.com
- **OAuth Configuration**:
  - Client ID
  - Client Secret
  - Click 'Connect' to authenticate

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Connectors Index](../connectors-index.md)

