# Zimperium Mobile Threat Defense CCF

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ZIMPERIUM-logo_orange.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ZimperiumMTDPush` |
| **Publisher** | Zimperium |
| **Source Vendor** | Zimperium *(basis: publisher)* |
| **Used in Solutions** | [Zimperium Mobile Threat Defense](../solutions/zimperium-mobile-threat-defense.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [ZimperiumMTD_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zimperium%20Mobile%20Threat%20Defense/Data%20Connectors/ZimperiumMTD_CCF/ZimperiumMTD_connectorDefinition.json) |
| **DCR Definition Files** | [ZimperiumMTD_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zimperium%20Mobile%20Threat%20Defense/Data%20Connectors/ZimperiumMTD_CCF/ZimperiumMTD_DCR.json) |
| **CCF Configuration** | [ZimperiumMTD_dataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zimperium%20Mobile%20Threat%20Defense/Data%20Connectors/ZimperiumMTD_CCF/ZimperiumMTD_dataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#zimperium-mobile-threat-defense) |

Zimperium Mobile Threat Defense connector gives you the ability to connect the Zimperium threat log with Microsoft Sentinel to view dashboards, create custom alerts, and improve investigation. This gives you more insight into your organization's mobile threat landscape and enhances your security operation capabilities.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ZimperiumIncidentLog_CL`](../tables/zimperiumincidentlog-cl.md) | ? | ✓ | ? |
| [`ZimperiumIncidentMitigationLog_CL`](../tables/zimperiumincidentmitigationlog-cl.md) | ? | ✓ | ? |
| [`ZimperiumMitigationLogV2_CL`](../tables/zimperiummitigationlogv2-cl.md) | ? | ✓ | ? |
| [`ZimperiumThreatLogV2_CL`](../tables/zimperiumthreatlogv2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires Entra ID Application Developer role or higher.
- **Microsoft Azure**: Permission to assign Monitoring Metrics Publisher role on data collection rule (DCR). Typically requires Azure RBAC Owner or User Access Administrator role.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create ARM Resources and Provide the Required Permissions**

This connector enables your Zimperium MTD application to push device threats directly to Microsoft Sentinel via the Azure Monitor Ingestion API.
#### Automated Configuration and Secure Data Ingestion with Entra Application 
Clicking on "Deploy" will trigger the creation of a Log Analytics table and a Data Collection Rule (DCR). 
It will then create an Entra application, link the DCR to it, and set the entered secret in the application. This setup enables data to be sent securely to the DCR using an Entra token.
Deploy Zimperium MTD Push connector resources

**2. Configure and connect Zimperium MTD**

1. In zConsole, click **Account Management** on the navigation bar.
2. Click the **Data Export** side tab.
3. Click the **Add Data Export Configuration** button.
4. Create the Configuration:
    - **Name:** Name to describe this configuration.
    - **Description:** Description to describe this configuration.
    - **Data Type:** Select datatype as _Threats_ or _Incidents_ depending on the data you want to export.
    - **Destination Type:** From the available destination types, select Microsoft Sentinel.
    - **Severity Criteria:** Select a Filter Level for the threat data you wish to push to Microsoft Sentinel.(**Note:** This field is applicable only for _threats_ datatype)
    - **Team Criteria:** This is an optional criterion to filter data based on teams.
   - **External Tracking Id 1:** This is an optional criterion to match for exported data.
    - **External Tracking Id 2:** This is an optional criterion to match for exported data.
    - **Tenant Id:** Enter from the fields below.
    - **Entra App Registration Application ID:** Enter from the fields below.
    - **Entra App Registration Secret:** Enter from the fields below.
    - **Data Collection Endpoint Uri:** Enter from the fields below.
    - **Data Collection Rule Immutable ID:** Enter from the fields below.
    - Click **Save Configuration**.
5. For additional instructions, please refer to the [Zimperium customer support portal](https://support.zimperium.com).
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

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

