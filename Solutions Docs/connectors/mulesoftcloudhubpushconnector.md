# MuleSoft CloudHub Logs (Push Connector via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `MulesoftCloudhubPushConnector` |
| **Publisher** | Microsoft |
| **Source Vendor** | MuleSoft *(basis: title)* |
| **Source Product** | CloudHub *(basis: title)* |
| **Event Type** | Logs |
| **Used in Solutions** | [Mulesoft](../solutions/mulesoft.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [MulesoftLogs_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Mulesoft/Data%20Connectors/MulesoftLogs_CCF/MulesoftLogs_ConnectorDefinition.json) |
| **DCR Definition Files** | [MulesoftLogs_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Mulesoft/Data%20Connectors/MulesoftLogs_CCF/MulesoftLogs_DCR.json) |
| **CCF Configuration** | [MulesoftLogs_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Mulesoft/Data%20Connectors/MulesoftLogs_CCF/MulesoftLogs_PollerConfig.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |

MuleSoft CloudHub Log4j push-based connector for receiving application logs directly from MuleSoft CloudHub via Log4j HTTP appender. This connector allows customers to stream logs in real-time as recommended by MuleSoft, avoiding API rate limiting and duplicate data issues. Configure your MuleSoft applications with the provided Log4j HTTP appender configuration to stream logs to Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`MuleSoftCloudhubLogs_CL`](../tables/mulesoftcloudhublogs-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Microsoft.Insights/dataCollectionEndpoints**: Data Collection Endpoint is required for the modern push connector to receive data from the external security system.
- **Microsoft.Insights/dataCollectionRules**: Data Collection Rule is required to define the schema and transformations for incoming data.
- **Microsoft.Authorization/roleAssignments**: Role assignment is required to grant the Entra application permissions to send data to the Data Collection Rule.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create ARM Resources and Provide the Required Permissions**

This connector receives data from external security systems that push logs to Microsoft Sentinel. The external system must be configured to send raw event data to the Microsoft Sentinel Ingestion API. Clicking on **Deploy** will trigger the creation of Log Analytics tables and a Data Collection Rule (DCR). It will then create an Entra application, link the DCR to it, and set the entered secret in the application. This setup enables data to be sent securely to the DCR using an Entra token.

[Learn more about the connector setup process](https://review.learn.microsoft.com/azure/sentinel/create-push-codeless-connector)
## Azure Resource Deployment

The deployment process will create the following resources:
- Log Analytics custom table(s)
- Data Collection Endpoint (DCE)
- Data Collection Rule (DCR)
- Entra ID Application Registration
- Role assignments for data ingestion
Deploy MuleSoft CloudHub Log4j connector resources
### Configuration Values

After deployment, copy the following values to configure your external security system:
- **Tenant ID (Directory ID)**: `{0}`
- **Entra App Registration Application ID**: `{0}`
- **Entra App Registration Secret**: `{0}`
- **Data Collection Endpoint Url**: `{0}`
- **Data Collection Rule Immutable ID**: `{0}`
- **Stream Name (MuleSoftCloudhubLogs)**: `Custom-MuleSoftCloudhubLogs_CL`

ℹ️ Keep these values secure. You will need them to configure your external security system.

**2. Configure your external system to push logs**

Use the following parameters to configure your external security system to send logs to the workspace.

### Configuration Steps

1. Access your external security system's configuration interface.
2. Navigate to the data forwarding, integration, or SIEM settings.
3. Select **Azure Monitor** or **Microsoft Sentinel** as the destination.
4. Select **Data Collection Endpoint** as the authentication method.
5. Configure the required fields using the values from the previous step:
   - **Tenant ID**: Copy from above
   - **Application (Client) ID**: Copy from above
   - **Client Secret**: Copy from above
   - **Data Collection Endpoint**: Copy from above
   - **Data Collection Rule Immutable ID**: Copy from above
   - **Stream Name**: Copy the appropriate stream name from above
6. Save the configuration and enable/start the forwarder.

### Validation

> **Note**: Data will appear in the **MuleSoftCloudhubLogs** table in your Log Analytics workspace within a few minutes.

To verify data is being received, run the following query in your Log Analytics workspace:

```kusto
MuleSoftCloudhubLogs
| where TimeGenerated > ago(1h)
| take 10
```

### Troubleshooting

If data is not appearing:
- Verify the configuration values are correct
- Check that the forwarder/integration is enabled and running
- Review logs in your external security system for any errors
- Ensure network connectivity from your system to Azure
- Verify the Entra application has the correct permissions

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

