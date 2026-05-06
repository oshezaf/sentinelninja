# Infoblox-Config-Insight-Details

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The playbook retrieves Config Insight Details Data and ingests it into a custom table within the Log Analytics Workspace on an on-demand basis from the Workbook.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Infoblox](../solutions/infoblox.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/InfoBlox%20Config%20Insight%20Details/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureloganalyticsdatacollector` | Managed | 1 | 0 |
| `azureloganalyticsdatacollector_11` | Managed | 0 | 1 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureloganalyticsdatacollector_11`** (managedApi):
- *Send_Data_to_Sentinel*: method=`post`, path=`/api/logs`

**`http`** (builtin):
- *GET_Config_Insight_Details*: method=`GET`, uri=`@variables('config_insight_details_url')`

</details>

## Additional Documentation

> 📄 *Source: [InfoBlox Config Insight Details/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/InfoBlox%20Config%20Insight%20Details/readme.md)*

# Infoblox Config Insight Details

* [Summary](#Summary)
* [Prerequisites](#Prerequisites)
* [Deployment instructions](#Deployment-instructions)
* [Post-Deployment instructions](#Post-Deployment-instructions)

## Summary<a name="Summary"></a>

The playbook fetches Config Insight Details Data and Ingest it in custom table of Log Analytics Workspace on demand bases from Workbook.

### Prerequisites<a name="Prerequisites"></a>

1. User must have a valid Infoblox API Key.

### Deployment instructions<a name="Deployment-instructions"></a>

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   - Playbook Name: Please keep the 'Playbook Name' parameter unchanged. Otherwise, you will need to manually adjust the 'Playbook Name' in the 'Infoblox Workbook - Infoblox Config Insights' Panel in edit mode
   - Infoblox API Key: Enter valid value for API Key
   - Infoblox Base Url: Enter baseurl for your Infoblox instance.(e.g. https://csp.infoblox.com)

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https%3A%2F%2Fportal.azure.com%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20Config%20Insight%20Details%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https%3A%2F%2Fportal.azure.us%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20Config%20Insight%20Details%2Fazuredeploy.json)

### Post-Deployment instructions<a name="Post-Deployment-instructions"></a>

#### a. Authorize connections

1. Go to your logic app -> API connections -> Select connection resource
2. Go to General -> edit API connection
3. Click Authorize
4. Sign in
5. Click Save
6. Repeat steps for other connections

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Infoblox](../solutions/infoblox.md)

