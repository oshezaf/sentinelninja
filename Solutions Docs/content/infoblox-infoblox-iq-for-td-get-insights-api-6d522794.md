# Infoblox-IQ-for-TD-Get-Insights-API

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Leverages the Infoblox IQ for Threat Defense Insights API to ingest IQ for TD Insights at time of run into the custom InfobloxInsight table. This playbook is scheduled to run on a daily basis.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Infoblox](../solutions/infoblox.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20SOC%20Get%20Open%20Insights%20API/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Infoblox_Customer_Id | GET | `https://csp.infoblox.com/api/atcfw/v1/account` | — |
| Get_All_Insights | GET | `https://csp.infoblox.com/api/v2/insights` | — |
| Ingest_Insights_to_Log_Analytics | POST | `@parameters('DCEIngestionEndpoint')` | — |

</details>

## Additional Documentation

> 📄 *Source: [Infoblox SOC Get Open Insights API/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20SOC%20Get%20Open%20Insights%20API/readme.md)*

* [Summary](#Summary)
* [Prerequisites](#Prerequisites)
* [Deployment instructions](#Deployment-instructions)
* [Post-Deployment instructions](#Post-Deployment-instructions)

## Summary<a name="Summary"></a>

This playbook uses the Infoblox IQ for Threat Defense Insights API to ingest all IQ for TD Insights at time of run into the custom ```InfobloxInsight``` table using the **Log Ingestion API**.

This playbook is an alternative to using the **Infoblox SOC Insight Data Connectors via the Microsoft forwarding agent**, which require the **Infoblox Cloud Data Connector (CDC)**. Instead, this playbook **ingests the same type of data via REST API**. This way, you do not need to set up and deploy an Infoblox CDC in your environment.

You can use both methods in the same workspace, but **beware of duplicate data**.

Simply input your **Infoblox API Key** into the playbook parameters and it will ingest every open SOC Insight at runtime.

The Analytic Query **Infoblox - SOC Insight Detected - API Source** will read this data for insights and create an Incident when one is found. It is OK to run the playbook multiple times, as the Analytic Queries will group SOC Insight Incidents into one that have the same Infoblox Insight ID in the underlying data tables.

This playbook is scheduled to run on a daily basis. You can increase or decrease recurrence.

![Infoblox IQ for TD Get Insights API](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20SOC%20Get%20Open%20Insights%20API/Images/InfobloxSOCGetOpenInsightsAPI.png)

### Prerequisites<a name="Prerequisites"></a>

1. User must have a valid Infoblox IQ for Threat Defense API Key.
2. An existing Log Analytics Workspace where the ```InfobloxInsight``` table will be created.

### Deployment instructions<a name="Deployment-instructions"></a>

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here
    * Infoblox API Key: Enter valid value for Infoblox IQ for Threat Defense API Key
    * Workspace Name: Name of the Log Analytics workspace where the ```InfobloxInsight``` table will be created

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20SOC%20Get%20Open%20Insights%20API%2Fazuredeploy.json) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20SOC%20Get%20Open%20Insights%20API%2Fazuredeploy.json)

### Post-Deployment instructions<a name="Post-Deployment-instructions"></a>

#### a. No manual authorization needed

This playbook uses **Managed Identity** for authentication with the Log Ingestion API. The deployment automatically:

1. Creates a Data Collection Endpoint (DCE) and Data Collection Rule (DCR)
2. Creates or updates the custom ```InfobloxInsight``` table in the Log Analytics Workspace
3. Assigns the Logic App's Managed Identity the 'Monitoring Metrics Publisher' role on the DCR

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Infoblox](../solutions/infoblox.md)

