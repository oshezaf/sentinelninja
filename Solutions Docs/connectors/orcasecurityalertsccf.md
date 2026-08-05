# Orca Security Alerts (via Microsoft Entra ID)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/OrcaSecurityLogo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `OrcaSecurityAlertsCCF` |
| **Publisher** | Orca Security |
| **Used in Solutions** | [Orca Security Alerts](../solutions/orca-security-alerts.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [OrcaSecurityAlerts_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Orca%20Security%20Alerts/Data%20Connectors/OrcaSecurityAlertsCCF/OrcaSecurityAlerts_ConnectorDefinition.json) |
| **DCR Definition Files** | [OrcaSecurityAlerts_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Orca%20Security%20Alerts/Data%20Connectors/OrcaSecurityAlertsCCF/OrcaSecurityAlerts_DCR.json) |
| **CCF Configuration** | [OrcaSecurityAlerts_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Orca%20Security%20Alerts/Data%20Connectors/OrcaSecurityAlertsCCF/OrcaSecurityAlerts_PollerConfig.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#orca-security-alerts) |

The [Orca Security](https://orca.security/) Alerts connector lets you stream Orca cloud security alerts into Microsoft Sentinel. Orca pushes alerts to the Logs Ingestion API of a Data Collection Endpoint using a Microsoft Entra ID application, replacing the legacy Log Analytics Shared Key authentication.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`OrcaAlerts_CL`](../tables/orcaalerts-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Microsoft Entra ID**: Permission to create an app registration in Microsoft Entra ID (if using the auto-created app). Typically requires the Application Developer role or higher.
- **Microsoft Azure**: Permission to create and configure Azure resources (DCE, DCR, table) and assign RBAC roles. Typically requires the Contributor and User Access Administrator roles.
- **Orca Security**: Access to the Orca Security platform to configure the Microsoft Sentinel integration.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Deploy connector resources**

Deploy the Azure resources required to ingest Orca Security alerts via the Logs Ingestion API using Microsoft Entra ID authentication.
#### Choose your deployment option

---

### Option A: Auto-create a Microsoft Entra application (Recommended)

Clicking **Deploy Orca Security Alerts Connector** automatically creates:
- A Data Collection Endpoint (DCE)
- A Data Collection Rule (DCR) with the Orca alerts stream
- The Log Analytics table (OrcaAlerts_CL)
- A Microsoft Entra application with a client secret
- The role assignment (Monitoring Metrics Publisher) on the DCR

**After deployment:** the Tenant ID, Client ID, Client Secret, DCE URI and DCR Immutable ID are auto-populated below for copy-paste into the Orca platform.

---

### Option B: Use a pre-existing Microsoft Entra application (BYOA)

Clicking **Deploy Orca Security Alerts Connector** creates the DCE, DCR and table, plus an Entra application you can ignore.

**Additional steps required:**
1. Assign your existing Entra application's service principal the **Monitoring Metrics Publisher** role on the created DCR.
2. Use your own application's Client ID and Client Secret (ignore the auto-generated ones below).
3. Use the DCE URI, DCR Immutable ID and Stream Name from below.

---

**Click Deploy to begin:**
Deploy Orca Security Alerts Connector

**2. Configure the Orca Security integration**

Copy the following values into the Microsoft Sentinel integration settings in the Orca Security platform.
**For Option A (auto-created app):** use all the auto-populated values below.

**For Option B (pre-existing app):** use the DCE URI, DCR Immutable ID and Stream Name below, but use your own application's Tenant ID, Client ID and Client Secret.

---

#### Azure configuration values:

- **Tenant ID**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Application (Client) ID**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Client Secret**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Endpoint (DCE) URI**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Rule (DCR) Immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Stream Name**: `Custom-OrcaSecurityAlerts`
---

#### Configure in the Orca Security platform

1. Log in to your **Orca Security** console.
2. Navigate to **Settings > Integrations > Microsoft Sentinel**.
3. Paste the configuration values from above (Tenant ID, Application (Client) ID, Client Secret, DCE URI, DCR Immutable ID and Stream Name).
4. Click **Save** to complete the integration.

**3. Verify data ingestion**

Confirm that alerts are flowing from Orca Security into Microsoft Sentinel.
#### Verification steps

1. Trigger or wait for an alert in Orca Security.
2. Wait 5-10 minutes for the data to appear in Microsoft Sentinel.
3. Run the following query to verify alerts:

```kusto
OrcaAlerts_CL
| take 10
```

4. Check connectivity:

```kusto
OrcaAlerts_CL
| summarize LastLogReceived = max(TimeGenerated)
| project IsConnected = LastLogReceived > ago(30d)
```

If data appears and IsConnected returns true, the connector is configured correctly.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

