# ⚠️ 42Crunch API Protection (Push Connector via Codeless Connector Framework)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/42CrunchLogo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `FortyTwoCrunchAPIProtection` |
| **Publisher** | Microsoft Corporation |
| **Source Vendor** | Microsoft *(basis: publisher_fallback — low confidence)* |
| **Used in Solutions** | [42Crunch API Protection](../solutions/42crunch-api-protection.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [42CrunchAPIProtection.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/42Crunch%20API%20Protection/Data%20Connectors/42Crunch_CCF/42CrunchAPIProtection.json) |
| **DCR Definition Files** | [DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/42Crunch%20API%20Protection/Data%20Connectors/42Crunch_CCF/DCR.json) |
| **CCF Configuration** | [PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/42Crunch%20API%20Protection/Data%20Connectors/42Crunch_CCF/PollingConfig.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |

Connects the 42Crunch API protection to Microsoft Sentinel via the Azure Monitor DCE/DCR REST API interface. The integration uses Docker containers (API Firewall and Log Forwarder) to forward API traffic logs to Microsoft Sentinel for threat detection and analysis.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`FortyTwoCrunchAPIProtectionV2_CL`](../tables/fortytwocrunchapiprotectionv2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Microsoft.Insights/dataCollectionEndpoints**: Data Collection Endpoint is required for the modern push connector to receive data from the external security system.
- **Microsoft.Insights/dataCollectionRules**: Data Collection Rule is required to define the schema and transformations for incoming data.
- **Microsoft.Authorization/roleAssignments**: Role assignment is required to grant the Entra application permissions to send data to the Data Collection Rule.
- **42Crunch API Firewall requirement**: The 42Crunch API Firewall and Log Forwarder Docker containers must be deployed and running. Obtain your API Firewall token (42C_FIREWALL_TOKEN) and platform URL (42C_PLATFORM_URL) from the 42Crunch platform at https://platform.42crunch.com. Full deployment instructions are available at https://github.com/42Crunch/azure-sentinel-integration.

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
Deploy 42Crunch API Protection connector resources
### Configuration Values

After deployment, copy the following values to configure your external security system:
- **Tenant ID (Directory ID)**: `{0}`
- **Entra App Registration Application ID**: `{0}`
- **Entra App Registration Secret**: `{0}`
- **Data Collection Endpoint Url**: `{0}`
- **Data Collection Rule Immutable ID**: `{0}`
- **Stream Name (FortyTwoCrunchAPIProtectionV2)**: `Custom-FortyTwoCrunchAPIProtectionV2_CL`

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

> **Note**: Data will appear in the **FortyTwoCrunchAPIProtectionV2** table in your Log Analytics workspace within a few minutes.

To verify data is being received, run the following query in your Log Analytics workspace:

```kusto
FortyTwoCrunchAPIProtectionV2
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
After deploying the Azure resources, configure the **42Crunch Log Forwarder** Docker container to send data to the deployed DCE/DCR endpoints instead of the legacy HTTP Data Collector API.
### Update Docker Compose / Helm Chart Environment Variables

Replace the legacy `WORKSPACE_ID` and `WORKSPACE_KEY` environment variables with the new DCE/DCR configuration:

```yaml
environment:
  # Legacy (remove these):
  # - WORKSPACE_ID=<workspace-id>
  # - WORKSPACE_KEY=<primary-key>

  # New CCF Push Connector configuration:
  - DCE_ENDPOINT=<data-collection-endpoint-url>
  - DCR_IMMUTABLE_ID=<data-collection-rule-immutable-id>
  - DCR_STREAM_NAME=Custom-FortyTwoCrunchAPIProtectionV2_CL

  # 42Crunch platform credentials (unchanged):
  - 42C_FIREWALL_TOKEN=<your-firewall-token>
  - 42C_PLATFORM_URL=<your-platform-url>
```
The DCE endpoint URL and DCR immutable ID are displayed after deploying the ARM resources in Step 1. For full configuration details, refer to the [42Crunch Microsoft Sentinel Integration](https://github.com/42Crunch/azure-sentinel-integration) documentation.
### Important: Connection Status

This is a **push-based connector** - it receives data from the 42Crunch Log Forwarder and does not maintain an active polling connection. The connector shows as **Connected** when data has been received within the last 7 days.

**1. Uninstall connector**

Use this PowerShell script to delete the connector instance.
### Delete the Connector Instance
Run the following PowerShell commands to remove the data connector instance:

```powershell
$sub = "<subscription-id>"
$rg  = "<resource-group-name>"
$ws  = "<workspace-name>"
$connectorName = "FortyTwoCrunchAPIProtection"
$armEndpoint = (az cloud show --query endpoints.resourceManager -o tsv).TrimEnd('/')

Write-Host "Deleting $connectorName..." -NoNewline
az rest --method DELETE --uri "$armEndpoint/subscriptions/$sub/resourceGroups/$rg/providers/Microsoft.OperationalInsights/workspaces/$ws/providers/Microsoft.SecurityInsights/dataConnectors/$connectorName`?api-version=2024-09-01"
Write-Host " Done" -ForegroundColor Green
```
> NOTE: Replace `<subscription-id>`, `<resource-group-name>`, and `<workspace-name>` with your actual Azure values before running the script.
This removes the push connector instance. Historical data in your Log Analytics workspace will be retained.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

