# Infoblox-Get-Host-Name

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The playbook will fetch the data from 'Hosts' API and ingest it into custom table

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Infoblox](../solutions/infoblox.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20Get%20Host%20Name/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Infoblox Get Host Name/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20Get%20Host%20Name/readme.md)*

# Infoblox Get Host Name

* [Summary](#Summary)
* [Prerequisites](#Prerequisites)
* [Deployment instructions](#Deployment-instructions)
* [Post-Deployment instructions](#Post-Deployment-instructions)

## Summary<a name="Summary"></a>

The playbook will retrieve data from the 'Hosts' API and import it into a custom table within the Azure Log Analytics Workspace.

### Prerequisites<a name="Prerequisites"></a>

1. User must have a valid Infoblox API Key.

### Deployment instructions<a name="Deployment-instructions"></a>

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here
    * Infoblox API Key: Enter valid value for API Key
    * Infoblox Base Url: Enter baseurl for your Infoblox instance.(e.g. https://csp.infoblox.com)

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https%3A%2F%2Fportal.azure.com%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20Get%20Host%20Name%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https%3A%2F%2Fportal.azure.us%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20Get%20Host%20Name%2Fazuredeploy.json)

### Post-Deployment instructions<a name="Post-Deployment-instructions"></a>

#### a. Authorize connections

Once deployment is complete, authorize each connection.

1. Go to your logic app -> API connections -> Select connection resource
2. Go to General -> edit API connection
3. Provide Workspace Id and Workspace Key of Log Analytics Workspace where Table will be created
4. Click Save

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Infoblox](../solutions/infoblox.md)

