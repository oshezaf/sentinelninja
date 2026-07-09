# NordStellar (Push)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/NordStellar.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `NordStellarPush` |
| **Publisher** | Nord Security Inc. |
| **Source Vendor** | Nord Security *(basis: publisher)* |
| **Used in Solutions** | [NordStellar](../solutions/nordstellar.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordStellar/Data%20Connectors/NordStellar_ccf/connectorDefinition.json) |
| **DCR Definition Files** | [DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordStellar/Data%20Connectors/NordStellar_ccf/DCR.json) |
| **CCF Configuration** | [dataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordStellar/Data%20Connectors/NordStellar_ccf/dataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#nordstellar-push) |

The [NordStellar](https://nordstellar.com) connector pushes real-time threat intelligence and exposure events from the NordStellar platform into Microsoft Sentinel using the Codeless Connector Framework (CCF) Push pattern. All event types are routed to a single unified `NordStellar_CL` table with common columns (`EventId`, `EventType`, `Module`, `RiskLevel`, `AssetType`, `AssetValue`, `Tags`) extracted by the DCR's KQL transform, while type-specific payload is preserved in a dynamic `Details` column.



**Supported event types:**



- **Leaked Data** (`module: LEAKED_DATA`): `DATA_BREACH`, `COMBO_LIST`, `MALWARE_INFECTION`, `CONSUMER_CREDENTIAL`

- **Dark Web Monitoring** (`module: DARK_WEB_MONITORING`): `DARK_WEB_FORUM_POST`, `DARK_WEB_TELEGRAM_POST`, `DARK_WEB_RANSOMWARE_POST`, `DARK_WEB_MARKETPLACE_POST`

- **Domain Squatting** (`module: DOMAIN_SQUATTING`): `DOMAIN_PERMUTATION`

- **Attack Surface** (`module: ATTACK_SURFACE`): `ATTACK_SURFACE_WEB_APPLICATION_VULNERABILITY`, `ATTACK_SURFACE_NETWORK_SERVICE_VULNERABILITY`, `ATTACK_SURFACE_DNS_VULNERABILITY`

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NordStellar_CL`](../tables/nordstellar-cl.md) | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires Entra ID Application Developer role or higher.
- **Microsoft Azure**: Permission to assign Monitoring Metrics Publisher role on data collection rule (DCR). Typically requires Azure RBAC Owner or User Access Administrator role.
- **NordStellar**: Active NordStellar tenant with permission to configure outbound webhooks for the integration.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Deploy connector resources**

This connector enables NordStellar to push real-time threat intelligence and exposure events directly to Microsoft Sentinel via the Azure Monitor Ingestion API.
#### Automated configuration
Clicking **Deploy** will create:
- A custom Log Analytics table `NordStellar_CL`
- A Data Collection Rule (DCR) with a single stream `Custom-NordStellar` and a KQL transform that promotes common fields and preserves the type-specific payload in `Details`
- The Data Collection Endpoint (DCE) used for ingestion
- A Microsoft Entra application with OAuth 2.0 client credentials
- The required `Monitoring Metrics Publisher` role assignment on the DCR

The credentials returned below are then configured in the NordStellar portal so events can be pushed securely.
Deploy NordStellar Push connector resources

**2. Configure NordStellar**

Use the following parameters to configure the Microsoft Sentinel integration in the NordStellar portal.
- **Tenant ID (Directory ID)**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Application (Client) ID**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Client Secret**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Endpoint URI**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Rule Immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Stream Name**: `Custom-NordStellar`
#### On-the-wire envelope
NordStellar must POST a JSON array to `{DCE URI}/dataCollectionRules/{DCR Immutable ID}/streams/Custom-NordStellar?api-version=2023-01-01` with an OAuth bearer token for the scope `https://monitor.azure.com//.default`.

Each element wraps the original webhook event in a thin envelope:

```json
[
  {
    "time": "2026-04-27T10:30:00Z",
    "event": {
      "id": "...",
      "type": "DATA_BREACH",
      "module": "LEAKED_DATA",
      "risk_level": "HIGH",
      "date_added": "...",
      "tags": ["NAME"],
      "asset": { "type": "EMAIL", "value": "user@company.com" }
    }
  }
]
```

The DCR's KQL transform promotes `id`, `type`, `module`, `risk_level`, `asset.type`/`source_type`, `asset.value`/`asset_value`, `tags`, and the appropriate timestamp (`date_added` for leaked-data/dark-web/domain-permutation, `detected_at` for attack-surface) into typed columns. Everything else is preserved in the dynamic `Details` column.

**3. Verify data ingestion**

Confirm events are flowing from NordStellar to Sentinel.
Wait 5-10 minutes after enabling the integration, then run this KQL query in your Microsoft Sentinel workspace:

```kql
NordStellar_CL
| where TimeGenerated > ago(1h)
| summarize count() by EventType, Module
| order by count_ desc
```

If no data appears after 15 minutes, verify the credentials in the NordStellar portal and check Azure Monitor for ingestion errors on the DCR.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

