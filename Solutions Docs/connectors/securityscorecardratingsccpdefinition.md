# SecurityScorecard Ratings (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SecurityScorecard-Cybersecurity-Ratings.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SecurityScorecardRatingsCCPDefinition` |
| **Publisher** | SecurityScorecard |
| **Used in Solutions** | [SecurityScorecard Cybersecurity Ratings](../solutions/securityscorecard-cybersecurity-ratings.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [SecurityScorecardRatings_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SecurityScorecard%20Cybersecurity%20Ratings/Data%20Connectors/SecurityScorecardRatings_ccp/SecurityScorecardRatings_DataConnectorDefinition.json) |
| **DCR Definition Files** | [SecurityScorecardRatings_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SecurityScorecard%20Cybersecurity%20Ratings/Data%20Connectors/SecurityScorecardRatings_ccp/SecurityScorecardRatings_DCR.json) |
| **CCF Configuration** | [SecurityScorecardRatings_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SecurityScorecard%20Cybersecurity%20Ratings/Data%20Connectors/SecurityScorecardRatings_ccp/SecurityScorecardRatings_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Nested` |

The SecurityScorecard Ratings (via Codeless Connector Framework) connector ingests overall company score history into Microsoft Sentinel. Add one connection per SecurityScorecard portfolio you want to monitor — each connection is managed independently in the grid below. Raw daily score rows land in `SecurityScorecardRatingsHistory_CL`; query via the `SecurityScorecardRatings` parser for day-over-day deltas matching the legacy Function App schema.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SecurityScorecardRatingsHistory_CL`](../tables/securityscorecardratingshistory-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **SecurityScorecard API token**: A SecurityScorecard API token is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. STEP 1 - Create a SecurityScorecard API token**

As an administrator in SecurityScorecard, navigate to My Settings then Users, create a bot user with Read Only permission, and generate the API token.

**2. STEP 2 - Add a portfolio connection**

Add one connection per SecurityScorecard portfolio. Each connection ingests the overall company scores for a single portfolio and is listed, managed, and deleted independently below. To also ingest your own company's scorecard (My Scorecard), enter your company domain in the optional field on one connection.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Portfolio Name**
- **Portfolio ID**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add a SecurityScorecard portfolio**

*Connect one SecurityScorecard portfolio*

When you click the "Add portfolio" button in the portal, a configuration form will open. You'll need to provide:

- **Base URL** (required): https://api.securityscorecard.io
- **API Token** (required): Enter your SecurityScorecard API token
- **Portfolio ID** (required): Enter the SecurityScorecard portfolio ID
- **Portfolio Name** (required): A friendly name for this portfolio (shown in reports and the workbook)
- **Your Company Domain (optional - My Scorecard)** (optional): e.g. yourcompany.com - leave blank if not needed

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

