# Wiz for Microsoft Sentinel

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Wiz.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `WizSentinel` |
| **Publisher** | Wiz |
| **Used in Solutions** | [Wiz](../solutions/wiz.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [WizSentinel.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Wiz/Data%20Connectors/WizSentinel.json) |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) \| [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Sibling ARM template declares DCR / Log Ingestion API resources; Connector definition requires workspace key (SharedKey pattern)* |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#wiz-for-microsoft-sentinel) |

The Wiz integration pushes Wiz **Issues**, **Detections**, and **Audit Logs** into Microsoft Sentinel in real time. Wiz sends data to a Data Collection Endpoint using the Wiz service principal, so there is no Azure Function to host and no shared keys to manage. This connector grants that service principal the least-privilege RBAC it needs; Wiz then creates the data collection rule and tables and begins pushing once you configure the integration in the Wiz portal.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WizAuditLogsV3_CL`](../tables/wizauditlogsv3-cl.md) | ? | ✓ | ? |
| [`WizDetectionsV3_CL`](../tables/wizdetectionsv3-cl.md) | ? | ✓ | ? |
| [`WizIssuesV3_CL`](../tables/wizissuesv3-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Subscription permissions**: **Owner** or **User Access Administrator** at the subscription is required to create the custom role definition (Microsoft.Authorization/roleDefinitions/write).
- **Microsoft Entra permissions**: Permission to read (and, if the Wiz enterprise application is not yet consented, create) the Wiz service principal in Microsoft Entra ID.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. STEP 1 - Get the Wiz service principal object ID**

ARM cannot resolve a Microsoft Entra object, so you supply the Wiz service principal **object ID**. In Azure Cloud Shell (no local install required; creating the service principal needs permission to register enterprise applications in Microsoft Entra ID) run the line below — it prints the object ID, creating the service principal first if it does not yet exist in your tenant:

```bash
az ad sp show --id ae69b94b-e367-4660-9b35-cfb4b5966728 --query id -o tsv 2>/dev/null \
  || az ad sp create --id ae69b94b-e367-4660-9b35-cfb4b5966728 --query id -o tsv
```

**2. STEP 2 - Grant Wiz the RBAC**

Deploy the custom role and assignment into the resource group that hosts this workspace. Paste the object ID from Step 1 (and, optionally, a Data Collection Endpoint resource ID).

1. Click **Deploy the Wiz RBAC role**: 

	[![Deploy the Wiz RBAC role](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FWiz%2FData%20Connectors%2Fazuredeploy_WizSentinelIntegration.json) 
2. Select the **Subscription** and the **Resource group** that hosts this workspace. 
3. Enter **wizPrincipalObjectId** (from Step 1); optionally **dataCollectionEndpointId**. 
4. **Review + create**.
- **Workspace Resource ID**: `WorkspaceResourceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

**3. STEP 3 - Configure the integration in Wiz**

In Wiz, go to **Settings > Integrations > Add > Microsoft Sentinel**. Paste your **Tenant ID**, **Workspace Resource ID**, and **Data Collection Endpoint Resource ID**, tick *Deployment completed*, and save. Wiz then creates the data collection rule and tables and begins pushing Issues, Detections, and Audit Logs into this workspace.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

