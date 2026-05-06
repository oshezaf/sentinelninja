# CiscoSDWANReport

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook provides an end-to-end example of sending an email for suspicious activity found in the data.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Cisco SD-WAN](../solutions/cisco-sd-wan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20SD-WAN/Playbooks/CiscoSDWANReport/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 6 |
| `outlook` | Managed | 1 | 0 |
| `outlook_1` | Managed | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Chart_for_AMP_Events*: method=`post`, path=`/visualizeQueryV2`
- *Chart_for_IPS_Events*: method=`post`, path=`/visualizeQueryV2`
- *Table_for_AMP_Events*: method=`post`, path=`/visualizeQueryV2`
- *Table_for_Application_Used*: method=`post`, path=`/visualizeQueryV2`
- *Table_for_IPS_Events*: method=`post`, path=`/visualizeQueryV2`
- *Table_for_Internet_Browsing*: method=`post`, path=`/visualizeQueryV2`

**`outlook_1`** (managedApi):
- *Send_an_email_(V2)*: method=`post`, path=`/v2/Mail`

</details>

## Additional Documentation

> 📄 *Source: [CiscoSDWANReport/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20SD-WAN/Playbooks/CiscoSDWANReport/readme.md)*

# Cisco SDWAN Report

* [Summary](#Summary)
* [Deployment instructions](#Deployment-instructions)
* [Post-Deployment instructions](#Post-Deployment-instructions)


## Summary<a name="Summary"></a>

This playbook provides an end-to-end example of sending an email for suspicious activity found in the data.

### Deployment instructions<a name="Deployment-instructions"></a>

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here
    * Azure Resource Group: The Azure Resource Group name in which you want to deploy the Logic App.
    * Azure Subscription ID: Azure Subscription ID which is present in the subscription tab in Microsoft Sentinel.
    * Azure Workspace Name: Microsoft Sentinel Workspace Name of Log Analytics workspace.
    * Email: Enter comma-separated email addresses on which reports will be sent.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https%3A%2F%2Fportal.azure.com%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCisco%20SD-WAN%2FPlaybooks%2FCiscoSDWANReport%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https%3A%2F%2Fportal.azure.com%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCisco%20SD-WAN%2FPlaybooks%2FCiscoSDWANReport%2Fazuredeploy.json)

### Post-Deployment instructions<a name="Post-Deployment-instructions"></a>

##### a. Authorize connections

Once deployment is complete, authorize each connection like AzureMonitorLogs.

1. Click the connection resource
2. Click edit API connection
3. Click Authorize
4. Sign in
5. Click Save

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Cisco SD-WAN](../solutions/cisco-sd-wan.md)

