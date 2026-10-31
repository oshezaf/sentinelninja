# Menlo Security

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/MenloSecurity.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `MenloSecurityConnector` |
| **Publisher** | Menlo Security |
| **Used in Solutions** | [MenloSecurity](../solutions/menlosecurity.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [MenloSecurity.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MenloSecurity/Data%20Connectors/MenloSecurity.json) |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) \| [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Sibling ARM template declares DCR / Log Ingestion API resources; Connector definition requires workspace key (SharedKey pattern)* |

The [Menlo Security](https://www.menlosecurity.com) connector uses the Menlo Security Logs API to ingest Audit, Bandwidth, and Web proxy logs into Microsoft Sentinel. It runs as three timer-triggered Azure Functions, each polling the API every 3 minutes and writing events to custom Log Analytics tables (`MenloAudit_CL`, `MenloBandwidth_CL`, `MenloWeb_CL`).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`MenloAudit_CL`](../tables/menloaudit-cl.md) | ? | ✓ | ? |
| [`MenloBandwidth_CL`](../tables/menlobandwidth-cl.md) | ? | ✓ | ? |
| [`MenloWeb_CL`](../tables/menloweb-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).
- **Menlo Security API Token**: A valid Menlo Security API token with permission to access the `/api/rep/v2/fetch/client_select` endpoint. Obtain this from the Menlo Security admin console.
- **Azure permissions for connector deployment**: Deploying the connector's Azure resources (via the **Deploy to Azure** button in the steps below) requires **Owner**, or **Contributor + User Access Administrator**, on the target resource group — the template creates role assignments that grant the Function App's managed identity access to Key Vault, Storage, and the Data Collection Rule (Contributor alone is not sufficient). Creating the custom tables also requires write access to the Log Analytics workspace's resource group.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Step 1 — Deploy the connector infrastructure**

Click **Deploy to Azure** below. On the deployment page:
- For **Resource group**, choose **Create new** and name it `MenloSecurityLogs` so all connector resources stay together and can be removed in one step later.
- Enter your **Log Analytics Workspace Resource Group**, then select your **workspace** from the dropdown. Connector resources are deployed automatically in the **same region as the selected workspace** — no manual region matching is required.
- Enter your **Menlo Security API token**.

The template deploys the Function App, Key Vault, Storage Account, Data Collection Endpoint, and Data Collection Rule, and creates the `MenloAudit_CL`, `MenloBandwidth_CL`, and `MenloWeb_CL` custom tables in your Log Analytics workspace.

[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-MenloSecurityDataConnector-azuredeploy)

_To remove the connector later, delete the `MenloSecurityLogs` resource group and the three `Menlo*_CL` custom tables from the workspace._

**2. Step 2 — Enable log collection**

All log-collection functions are **disabled by default**. After deployment, navigate to the Function App in the Azure Portal and enable the log types you want to collect:

1. Open the **Function App** created by this solution (named `menlo-logs-func-<suffix>`).
2. Go to **Configuration** → **Application settings**.
3. For each log type you want to enable, set the corresponding app setting value to `0`:

| Log type | App setting name | Enable value |
|---|---|---|
| Audit logs | `AzureWebJobs.TimerTriggerAuditLogs.Disabled` | `0` |
| Bandwidth logs | `AzureWebJobs.TimerTriggerBandwidthLogs.Disabled` | `0` |
| Web logs | `AzureWebJobs.TimerTriggerWebLogs.Disabled` | `0` |

4. Click **Save**. Each enabled function will begin polling the Menlo Security API on a 3-minute interval.

**3. Step 3 — Verify data ingestion**

After enabling at least one log type, wait approximately 5–10 minutes for the first data to appear. Verify by running the following queries in Microsoft Sentinel **Logs**:

```kusto
MenloAudit_CL | take 10
MenloBandwidth_CL | take 10
MenloWeb_CL | take 10
```

If no data appears after 15 minutes, check the Function App's **Monitor** tab for invocation errors.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

