# ⚠️ Red Canary Threat Detection (via Codeless Connector Framework)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/red_canary_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `RedCanary_ConnectorDefinition` |
| **Publisher** | Red Canary |
| **Used in Solutions** | [Red Canary](../solutions/red-canary.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [RedCanary_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Red%20Canary/Data%20Connectors/RedCanary_ccf/RedCanary_ConnectorDefinition.json) |
| **DCR Definition Files** | [RedCanary_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Red%20Canary/Data%20Connectors/RedCanary_ccf/RedCanary_DCR.json) |
| **CCF Configuration** | [RedCanary_dataconnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Red%20Canary/Data%20Connectors/RedCanary_ccf/RedCanary_dataconnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

The [Red Canary](https://www.redcanary.com/) data connector enables Red Canary to publish detections into Microsoft Sentinel using the Codeless Connector Framework push pattern and the Azure Monitor Logs Ingestion API.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`RedCanaryDetections_CL`](../tables/redcanarydetections-cl.md) 🔶 | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires the Application Developer role or higher.
- **Microsoft Azure**: Permission to assign the Monitoring Metrics Publisher role on the data collection rule. Typically requires Azure RBAC Owner or User Access Administrator.
- **Red Canary**: Access to configure the Microsoft Sentinel response action in Red Canary.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create connector resources**

Deploy the CCF push resources required for Red Canary detection ingestion.
#### Automated configuration and secure data ingestion
Clicking **Deploy** creates the Log Analytics table, Data Collection Rule (DCR), Data Collection Endpoint (DCE), Microsoft Entra application, application secret, and role assignment required to ingest Red Canary detections through the Azure Monitor Logs Ingestion API.
Deploy Red Canary connector resources

**2. Configure Red Canary**

Use the generated values to configure Red Canary to send detections to this Microsoft Sentinel workspace.
- **Tenant ID (Directory ID)**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra App Registration Application ID**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra App Registration Secret**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Endpoint URI**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Rule Immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Detections Stream Name**: `Custom-RedCanaryDetections`
Configure the Red Canary Microsoft Sentinel response action with the values above. Red Canary should post detection records to the Logs Ingestion API endpoint using the stream name `Custom-RedCanaryDetections`.

## Additional Documentation

> 📄 *Source: [Red Canary\Data Connectors\README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Red Canary\Data Connectors\README.md)*

# Red Canary Data Connector for Microsoft Sentinel

## Introduction

This folder contains the Red Canary Codeless Connector Framework (CCF) push connector for Microsoft Sentinel. The connector creates the resources required for Red Canary to send detections to the `RedCanaryDetections_CL` table through the Azure Monitor Logs Ingestion API.

## Folders

1. `RedCanary_ccf/` - Connector definition, push connector resource, DCR, and table schema.

## Installing for users

After the solution is published, the connector is available in the Microsoft Sentinel data connectors gallery.

1. Go to **Microsoft Sentinel** > **Data connectors**.
2. Select **Red Canary Threat Detection (via Codeless Connector Framework)**.
3. Select **Deploy Red Canary connector resources**.
4. Copy the generated tenant, application, secret, data collection endpoint, data collection rule, and stream values from the connector page.
5. Configure the Red Canary Microsoft Sentinel response action with those values.

The connector shows data after Red Canary successfully posts detection records to the Logs Ingestion API.

## Installing for testing

For package validation, deploy the Red Canary solution package to a Microsoft Sentinel workspace and open the installed connector page. After deploying the connector resources, post a test JSON array to the `Custom-RedCanaryDetections` stream. The solution README includes the expected payload shape.

Confirm that:

- Records appear in `RedCanaryDetections_CL`.
- The connector graph shows recent data.
- One new `detection_id_s` creates one alert and one incident.
- Re-sending the same `detection_id_s` creates another raw row while the analytic rule continues to evaluate one representative record per detection ID in its query window.
- Matching alerts group into the same open incident by `detection_id` for up to seven days.

Useful ingestion check:

```kusto
RedCanaryDetections_CL
| where detection_id_s == "rc-detection-12345"
| summarize Rows=count(), FirstSeen=min(TimeGenerated), LastSeen=max(TimeGenerated) by detection_id_s
```

The solution README includes the payload contract, alert behavior, and validation queries.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

