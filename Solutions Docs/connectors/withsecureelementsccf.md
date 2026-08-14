# WithSecure Elements (CCF)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/WithSecure.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `WithSecureElementsCCF` |
| **Publisher** | WithSecure |
| **Used in Solutions** | [WithSecureElementsCCF](../solutions/withsecureelementsccf.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [WithSecureElements_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WithSecureElementsCCF/Data%20Connectors/WithSecureElementsCCP/WithSecureElements_ConnectorDefinition.json) |
| **DCR Definition Files** | [WithSecureElements_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WithSecureElementsCCF/Data%20Connectors/WithSecureElementsCCP/WithSecureElements_DCR.json) |
| **CCF Configuration** | [WithSecureElements_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WithSecureElementsCCF/Data%20Connectors/WithSecureElementsCCP/WithSecureElements_PollerConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging`, `POST` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#withsecure-elements-ccf) |

WithSecure Elements security events ingested via Microsoft Sentinel's Codeless Connector Framework (CCF) — a fully SaaS deployment with no Azure Function, Storage Account or Key Vault to manage.



The connector polls the [WithSecure Elements security-events API](https://connect.withsecure.com/api-reference/elements#post-/security-events/v1/security-events) and stores normalized events in the `WsSecurityEvents_CL` Log Analytics table.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WsSecurityEvents_CL`](../tables/wssecurityevents-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.

**Custom Permissions:**
- **WithSecure Elements API client credentials**: Client credentials are required. See the [user guide](https://connect.withsecure.com/getting-started/elements#getting-client-credentials) for details.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create WithSecure Elements API credentials**

Follow the [user guide](https://connect.withsecure.com/getting-started/elements#getting-client-credentials) to create Elements API credentials. Save the client id and client secret in a safe place.

**2. Connect WithSecure Elements to Microsoft Sentinel**

Provide the Elements API URL together with the client id and client secret you created in the previous step, then click **Connect** to start ingesting events.
- **Elements API URL**: https://api.connect.withsecure.com
- **Engine (optional)**: default
- **Engine Group (optional)**: default
- **OAuth Configuration**:
  - Elements API Client Id
  - Elements API Client Secret
  - Click 'Connect' to authenticate

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

