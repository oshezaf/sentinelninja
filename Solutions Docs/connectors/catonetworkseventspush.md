# ⚠️ Cato Networks Events (Push)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/catonetworks.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CatoNetworksEventsPush` |
| **Publisher** | Cato Networks |
| **Used in Solutions** | [CatoNetworks](../solutions/catonetworks.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [CatoNetworks_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CatoNetworks/Data%20Connectors/CatoNetworks_PUSH_CCP/CatoNetworks_ConnectorDefinition.json) |
| **DCR Definition Files** | [CatoNetworks_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CatoNetworks/Data%20Connectors/CatoNetworks_PUSH_CCP/CatoNetworks_DCR.json) |
| **CCF Configuration** | [CatoNetworks_dataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CatoNetworks/Data%20Connectors/CatoNetworks_PUSH_CCP/CatoNetworks_dataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |

The [Cato Networks](https://www.catonetworks.com/) connector pushes security and networking telemetry from the Cato Management Application into Microsoft Sentinel in near real time, using the Codeless Connector Framework (CCF) Push pattern. Data lands in a custom Log Analytics table, ready for hunting, analytics, and visualization. See the [Cato Event Schema](https://knowledge.catonetworks.com/docs/cato-event-schema) for the fields carried on each record.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CatoNetworksEvents_CL`](../tables/catonetworksevents-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires Entra ID Application Developer role or higher.
- **Microsoft Azure**: Permission to assign Monitoring Metrics Publisher role on data collection rule (DCR). Typically requires Azure RBAC Owner or User Access Administrator role.
- **Cato Management Application**: An administrator account on the Cato Management Application with permission to create a Microsoft Sentinel data-out connector.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create ARM Resources and Provide the Required Permissions**

This connector enables the Cato Cloud to push events directly to Microsoft Sentinel via the Azure Monitor Logs Ingestion API.
#### Automated Configuration and Secure Data Ingestion with Entra Application
Clicking on "Deploy" will trigger the creation of a Log Analytics table and a Data Collection Rule (DCR).
It will then create an Entra application, link the DCR to it, and set the entered secret in the application. This setup enables data to be sent securely to the DCR using an Entra token.

#### One connector per workspace

The Data Collection Rule and the `CatoNetworksEvents_CL` table are named from this workspace, so deploying the connector again in the same Log Analytics workspace reuses them rather than creating a second set. A workspace holds one Cato connector.

Events from more than one Cato account can be sent to the same connector; they share the table and are distinguished by `account_id` and `account_name`. To keep feeds in separate tables, with their own retention or access control, use a separate Log Analytics workspace for each.
Deploy Cato Networks connector resources

**2. Configure the connector in the Cato Management Application**

In the Cato Management Application, go to Resources > Integrations > Configured Integrations, click New, select Microsoft Sentinel, and enter the values below. For full setup instructions, see [Integrating Cato Events with Microsoft Sentinel](https://knowledge.catonetworks.com/docs/integrating-cato-events-with-microsoft-sentinel).
- **Tenant ID (Directory ID)**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra App Registration Application ID**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra App Registration Secret**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Endpoint Uri**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Rule Immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Events Stream Name**: `Custom-CatoNetworksEvents`

**3. Keeping the schema up to date**

Cato periodically adds fields to its event schema. Because upgrading this solution leaves your connector's existing custom table and Data Collection Rule unchanged, new fields must be applied separately using the dedicated schema update template.
#### Apply the current schema

[Deploy the schema update](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fcatonetworks%2Fcato-sentinel-ccf%2Fmain%2FupdateTemplate.json)

Select the subscription and the resource group holding this workspace, then enter the workspace name. That is the only value you supply.

Your ingestion URL, Entra application and client secret are unchanged, and nothing has to be re-entered in the Cato Management Application. Ingestion continues throughout.

Allow up to 30 minutes for new fields to start arriving. Events are still accepted during that window and the new fields are simply empty, so confirm with a query rather than assuming a failure.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

