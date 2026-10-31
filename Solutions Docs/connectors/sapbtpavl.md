# Application Vulnerability Report for SAP BTP

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SAPBTP.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SAPBTPAVL` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [SAP BTP](../solutions/sap-btp.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [SAPBTPAVL_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20BTP/Data%20Connectors/SAPBTPAVLPollerConnector/SAPBTPAVL_DataConnectorDefinition.json) |
| **DCR Definition Files** | [SAPBTPAVL_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20BTP/Data%20Connectors/SAPBTPAVLPollerConnector/SAPBTPAVL_DCR.json) |
| **CCF Configuration** | [SAPBTPAVL_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20BTP/Data%20Connectors/SAPBTPAVLPollerConnector/SAPBTPAVL_PollingConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#application-vulnerability-report-for-sap-btp) |

The SAP Application Vulnerability Report Service connector ingests vulnerability findings in custom apps deployed on SAP BTP into Microsoft Sentinel. The findings can be correlated with SAP BTP audit activity to identify risky applications and investigate related security events.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SAPBTPAVL_CL`](../tables/sapbtpavl-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.
- **Keys** (Workspace): Read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key)

**Custom Permissions:**
- **Client Id and Client Secret for Application Vulnerability Report Service**: Enable API access in BTP.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**Step 1 - Configuration steps for the SAP Application Vulnerability Report Service**

Configure SAP Application Vulnerability Report Service and create a dedicated service key for this connector [see Finding Provider Service API](https://api.sap.com/api/sap-FindingProviderService-v1/resource/get_Findings). Take a note of the **url** (Finding Provider API URL), **uaa.url** (User Account and Authentication Server url) and the associated **uaa.clientid**.

>**NOTE:** This connector uses separate credentials and does not share the service key used by the SAP BTP audit log connector.

**2. Connect SAP BTP AVL findings to Microsoft Sentinel**

Connect using OAuth client credentials
**SAP BTP AVL connection**

When you click the "Add account" button in the portal, a configuration form will open. You'll need to provide:

*Account Details*

- **Subaccount name (e.g. Contoso).** (optional): no space or special character allowed!
- **Subaccount ID (GUID)** (optional): SubaccountId property from the BTP service key JSON
- **SAP BTP AVL Client ID** (optional): Client ID
- **SAP BTP AVL Client Secret** (optional): Client Secret
- **Authorization server URL (UAA server)** (optional): https://your-tenant.authentication.region.hana.ondemand.com
- **Finding Provider API URL** (optional): https://application-vulnerability-report.cfapps.region.hana.ondemand.com
*Advanced*

- **Polling Frequency (minutes, 60-120)** (optional): 60
- **Log Ingest Delay (minutes, 120-300)** (optional): 300

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.


**3. Connections**

Each row represents a connected subaccount
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Subaccount Name**
- **Subaccount ID**
- **Polling Frequency (minutes)**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

