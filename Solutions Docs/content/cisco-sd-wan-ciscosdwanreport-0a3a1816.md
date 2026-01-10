# CiscoSDWANReport

This playbook provides an end-to-end example of sending an email for suspicious activity found in the data.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Cisco SD-WAN](../solutions/cisco-sd-wan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20SD-WAN/Playbooks/CiscoSDWANReport/azuredeploy.json) |

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

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Cisco SD-WAN](../solutions/cisco-sd-wan.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

