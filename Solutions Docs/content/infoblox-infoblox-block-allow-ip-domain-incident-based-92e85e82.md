# Infoblox-Block-Allow-IP-Domain-Incident-Based

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The playbook will add / remove IP or Domain values in Named List that available in incidents of Infoblox.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Infoblox](../solutions/infoblox.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20Block%20Allow%20IP%20Domain%20Incident%20Based/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Infoblox Block Allow IP Domain Incident Based/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20Block%20Allow%20IP%20Domain%20Incident%20Based/readme.md)*

# Infoblox Block and Allow IP Domain Incident Based

* [Summary](#Summary)
* [Prerequisites](#Prerequisites)
* [Deployment instructions](#Deployment-instructions)
* [Post-Deployment instructions](#Post-Deployment-instructions)

## Summary<a name="Summary"></a>

The playbook will add / remove IP or Domain values in Named List that available in incidents of Infoblox.

### Prerequisites<a name="Prerequisites"></a>

1. User must have a valid Infoblox API Key.
2. Obtain Teams GroupId and ChannelId
    * Create a Team with public channel.
    * Click on three dots (...) present on right side of the your newly created teams channel and Get link to the channel.
    * Copy the text from the link between /channel and /, decode it using online url decoder and copy it to use as channelId.
    * Copy the text of groupId parameter from link to use as groupId.

### Deployment instructions<a name="Deployment-instructions"></a>

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here
    * Infoblox API Key: Enter valid value for API Key
    * Infoblox Base Url: Enter baseurl for your Infoblox instance (e.g. https://csp.infoblox.com)
    * TeamsGroupId: Enter Id of the Teams Group where the adaptive card will be posted
    * TeamsChannelId: Enter Id of the Teams Channel where the adaptive card will be posted

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https%3A%2F%2Fportal.azure.com%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20Block%20Allow%20IP%20Domain%20Incident%20Based%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https%3A%2F%2Fportal.azure.us%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20Block%20Allow%20IP%20Domain%20Incident%20Based%2Fazuredeploy.json)

### Post-Deployment instructions<a name="Post-Deployment-instructions"></a>

#### a. Authorize connections

Once deployment is complete, authorize connection.

1. Go to your logic app → API connections → Select teams connection resource
2. Go to General → edit API connection
3. Click Authorize
4. Sign in
5. Click Save

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Infoblox](../solutions/infoblox.md)

