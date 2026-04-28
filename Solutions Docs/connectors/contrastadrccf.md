# Contrast ADR Push Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ContrastADR.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ContrastADRCCF` |
| **Publisher** | Contrast Security |
| **Used in Solutions** | [ContrastADR](../solutions/contrastadr.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContrastADR/Data%20Connectors/ContrastADRCCF/connectorDefinition.json) |
| **CCF Configuration** | [dataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContrastADR/Data%20Connectors/ContrastADRCCF/dataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |

The [Contrast Security](https://www.contrastsecurity.com/) connector provides the capability to ingest attack events and incidents from Contrast Application Detection and Response (ADR) into Microsoft Sentinel. This connector receives data via webhook push mechanism using OAuth authentication.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ContrastADRAttackEvents_CL`](../tables/contrastadrattackevents-cl.md) | ? | ✓ | ? |
| [`ContrastADRIncidents_CL`](../tables/contrastadrincidents-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID (if using auto-created app). Typically requires Application Developer role or higher.
- **Microsoft Azure**: Permission to create and configure Azure resources (DCE, DCR, Tables) and assign RBAC roles. Typically requires Contributor and User Access Administrator roles.
- **Contrast ADR Webhook Access**: Access to Contrast ADR platform to configure webhook with OAuth authentication settings.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Deploy Connector Resources**

Deploy the required Azure resources for Contrast ADR data ingestion.
#### Choose Your Deployment Option

Select one of the following deployment options based on requirements:

---

### Option A: Auto-Create Microsoft Entra Application (Recommended)

Clicking **Deploy Contrast ADR CCF Connector** will automatically create:
- Data Collection Endpoint (DCE)
- Data Collection Rule (DCR) with streams for attack events and incidents
- Log Analytics tables (ContrastADRAttackEvents_CL and ContrastADRIncidents_CL)
- Microsoft Entra Application with OAuth credentials
- Role assignment (Monitoring Metrics Publisher) on the DCR

**After deployment:** All configuration values (Tenant ID, Client ID, Client Secret, DCE URI, DCR Immutable ID) will be auto-populated below for easy copy-paste into Contrast platform.

---

### Option B: Use Pre-Existing Microsoft Entra Application (BYOA)

Clicking **Deploy Contrast ADR CCF Connector** will create:
- Data Collection Endpoint (DCE)
- Data Collection Rule (DCR) with streams for attack events and incidents
- Log Analytics tables (ContrastADRAttackEvents_CL and ContrastADRIncidents_CL)
- Microsoft Entra Application (you can ignore this)

**When to use:** If you have an existing Entra App that you want to reuse for security or compliance reasons.

**Additional steps required:**
1. After deployment, manually assign your pre-existing Entra App's Service Principal the **Monitoring Metrics Publisher** role on the created DCR
2. Use your own Entra App's Client ID and Client Secret (ignore the auto-generated ones below)
3. Use the DCE URI and DCR Immutable ID from below in your Contrast webhook configuration

---

**Click Deploy to begin:**
Deploy Contrast ADR CCF Connector

**2. Configure Contrast ADR Webhook**

Copy the following values to configure the Microsoft Sentinel integration in Contrast ADR platform.
**For Option A (Auto-Created Entra App):** Use all the auto-populated values below.

**For Option B (Pre-Existing Entra App):** Use the DCE URI, DCR Immutable ID, and Stream Names from below, but use your own Entra App's Tenant ID, Client ID, and Client Secret.

---

#### Azure Configuration Values:

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
- **Attack Events Stream Name**: `Custom-ContrastADRAttackEvents`
- **Incidents Stream Name**: `Custom-ContrastADRIncidents`
---

#### Configure in Contrast ADR Platform

1. Log in to your **Contrast ADR platform**
2. Navigate to **Administration > Integrations > Microsoft Sentinel**
3. Copy and paste all the configuration values from above:
   - Tenant ID
   - Application (Client) ID
   - Client Secret
   - Data Collection Endpoint (DCE) URI
   - Data Collection Rule (DCR) Immutable ID
   - Attack Events Stream Name
   - Incidents Stream Name
4. Click **Save** to complete the integration

The Contrast platform will automatically configure the OAuth authentication and data endpoints using these values.

**3. Verify Data Ingestion**

Verify that data is flowing from Contrast ADR to Microsoft Sentinel.
#### Verification Steps

1. Trigger a test attack event in Contrast ADR
2. Wait 5-10 minutes for data to appear in Microsoft Sentinel
3. Run the following query to verify attack events:

```kusto
ContrastADRAttackEvents_CL
| take 10
```

4. Verify incidents data:

```kusto
ContrastADRIncidents_CL
| take 10
```

5. Check for connectivity:

```kusto
ContrastADRAttackEvents_CL
| summarize LastLogReceived = max(TimeGenerated)
| project IsConnected = LastLogReceived > ago(7d)
```

If data appears and IsConnected returns true, your connector is configured correctly!

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

