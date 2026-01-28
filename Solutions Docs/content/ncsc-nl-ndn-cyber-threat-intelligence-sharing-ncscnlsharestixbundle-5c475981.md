# NCSCNLShareSTIXBundle

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook gets triggered every hour and perform the following actions: 1. Get all the threat intelligence indicators from Microsoft Sentinel Workspace with given tag. 2. Filter all the indicators whose export in not completed. 3. Share the STIX Bundle, that includes the 'Indicator, corresponding Identities, Markings and optional Sighting' with the to provided TAXII server.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [NCSC-NL NDN Cyber Threat Intelligence Sharing](../solutions/ncsc-nl-ndn-cyber-threat-intelligence-sharing.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NCSC-NL%20NDN%20Cyber%20Threat%20Intelligence%20Sharing/Playbooks/NCSCNLShareSTIXBundle/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [NCSCNLShareSTIXBundle/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NCSC-NL%20NDN%20Cyber%20Threat%20Intelligence%20Sharing/Playbooks/NCSCNLShareSTIXBundle/readme.md)*

# NCSC-NL NDN Cyber Threat Intelligence Sharing

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NCSC-NL%20NDN%20Cyber%20Threat%20Intelligence%20Sharing/Playbooks/NCSCNLShareSTIXBundle/images/ncsc-nl-header.png" width="50%"/><br>

## Summary

This playbook is inspired on the previous *ACSC* codecase and is enhanced with an additional Sighting feature and API key support. It gets triggered every day and perform the following actions:

1. Get all the threat intelligence indicators from Microsoft Sentinel Workspace with given tag.
2. Filter all the indicators whose export in not completed.
3. Optional wil include a sighting object to report.
4. Verify/Add TLP labels to indicators.
5. Add Grouping and Identity Objects to indicators.
6. Export the bundle to provided TAXII server.

### Prerequisites

1. Have TAXII Server Url, Collection ID, your Organization STIX Identity and API Key available before the deployment of the Playbook.

### Deployment instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Playbook Name
    * TAXII Server Url
    * TAXII Server API Key
    * Collection ID
    * Organization Name
    * Organization ID (UUID)
    * Microsoft Sentinel Workspace
    * Tag for indicators to be exported
    * Tag for indicators after export completion
    * Default TLP Label
3. Optional you can set the following parameters:
    * Include Sighting Object (default is yes)
    * TAXII Server Username (default is using API Key)
    * TAXII Server Password (default is using API Key)

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FNCSC-NL%2520NDN%2520Cyber%2520Threat%2520Intelligence%2520Sharing%2FPlaybooks%2FNCSCNLShareSTIXBundle%2Fazuredeploy.json)

### Post-Deployment instructions

#### a. Authorize Playbook to access Log Analytics Workspace

Once deployment is complete, assign playbook Log Analytics contributor role.

1. Go to Log Analytics Workspace resource
2. Select Access control (IAM) tab
3. Add role assignments
4. Select Contributor role
5. In the Members tab choose "Assign access to" Managed Identity
6. Click on "Select members"
8. Provide correct Subscription and Managed Identity 
7. Provide the playbook name in "Search by name" textbox
8. Select the correct identity and click on Select
9. Click on "Review + assign" 


#  References
* [NCSC-NL](https://www.ncsc.nl/aansluiten-en-samenwerken/)
* [NDN](https://www.ncsc.nl/aansluiten-en-samenwerken/aansluiting-bij-het-ndn)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to NCSC-NL NDN Cyber Threat Intelligence Sharing](../solutions/ncsc-nl-ndn-cyber-threat-intelligence-sharing.md)

