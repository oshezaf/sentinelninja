# ⚠️ BV-ClaudeCompliance (via Codeless Connector Framework)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/BlueVoyant.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `BV-ClaudeCompliance` |
| **Publisher** | BlueVoyant |
| **Used in Solutions** | [BlueVoyant Anthropic ClaudeCompliance](../solutions/bluevoyant-anthropic-claudecompliance.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [BlueVoyantAnthropicClaudeCompliance_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BlueVoyant%20Anthropic%20ClaudeCompliance/Data%20Connectors/BlueVoyantAnthropicClaudeCompliance_CCF/BlueVoyantAnthropicClaudeCompliance_ConnectorDefinition.json) |
| **DCR Definition Files** | [BlueVoyantAnthropicClaudeCompliance_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BlueVoyant%20Anthropic%20ClaudeCompliance/Data%20Connectors/BlueVoyantAnthropicClaudeCompliance_CCF/BlueVoyantAnthropicClaudeCompliance_DCR.json) |
| **CCF Configuration** | [BlueVoyantAnthropicClaudeCompliance_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BlueVoyant%20Anthropic%20ClaudeCompliance/Data%20Connectors/BlueVoyantAnthropicClaudeCompliance_CCF/BlueVoyantAnthropicClaudeCompliance_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

## BV-ClaudeCompliance (via Codeless Connector Framework)



This connector ingests **ClaudeCompliance** API data into Microsoft Sentinel using RestApiPoller.



### Data Collection

- Base API URL: `https://api.anthropic.com/`

- Authentication: `APIKey`

- Endpoint count: `1`



### Tables

- `ComplianceActivities` -> `BV_ClaudeCompliance_ComplianceActivities_CL`



### Sample Query

```kusto

BV_ClaudeCompliance_ComplianceActivities_CL

| take 10

```

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`BV_ClaudeCompliance_ComplianceActivities_CL`](../tables/bv-claudecompliance-complianceactivities-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect BV-ClaudeCompliance (via Codeless Connector Framework) to Microsoft Sentinel**

To obtain a Claude Compliance API key, follow the instructions found here:
[Access the Compliance API](https://support.claude.com/en/articles/13015708-access-the-compliance-api).

The API key must include the **`read:compliance_activities`** scope.

Paste the key below and select **Connect**.
- **API Key**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

