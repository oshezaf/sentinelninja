# PRODAFT USTA - Account Takeover Prevention (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/PRODAFTUstaATP.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `PRODAFTUstaATPCCPDefinition` |
| **Publisher** | PRODAFT |
| **Used in Solutions** | [PRODAFT USTA - Account Takeover Prevention](../solutions/prodaft-usta-account-takeover-prevention.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [PRODAFTUstaATP_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20Account%20Takeover%20Prevention/Data%20Connectors/PRODAFTUstaATP_ccp/PRODAFTUstaATP_ConnectorDefinition.json) |
| **DCR Definition Files** | [PRODAFTUstaATP_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20Account%20Takeover%20Prevention/Data%20Connectors/PRODAFTUstaATP_ccp/PRODAFTUstaATP_DCR.json) |
| **CCF Configuration** | [PRODAFTUstaATP_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20Account%20Takeover%20Prevention/Data%20Connectors/PRODAFTUstaATP_ccp/PRODAFTUstaATP_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

The PRODAFT USTA Account Takeover Prevention data connector ingests compromised-credential tickets from the PRODAFT USTA platform into Microsoft Sentinel. Sensitive values are redacted at ingestion: plaintext passwords are never stored — only password strength signals (score and length) are retained for triage.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PRODAFTUstaCompromisedCredentials_CL`](../tables/prodaftustacompromisedcredentials-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **PRODAFT USTA API key**: A long-lived PRODAFT USTA API key with access to the Account Takeover Prevention endpoint is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect PRODAFT USTA Account Takeover Prevention to Microsoft Sentinel**

Enter your USTA base URL and a long-lived API key, then select Connect. The connector authenticates to USTA with the `Authorization: Bearer <api-key>` header and polls every minute. To load history from before the connection time, deploy the **PRODAFTUstaATP-Backfill** playbook shipped with this solution.
- **USTA Base URL**: https://usta.prodaft.com
- **API Key**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

