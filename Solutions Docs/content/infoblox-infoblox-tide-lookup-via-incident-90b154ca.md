# Infoblox-TIDE-Lookup-Via-Incident

The playbook takes entity type and value from incident available in Workbook and ingests TIDE Lookup data for that entity into Log table.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Infoblox](../solutions/infoblox.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20TIDE%20Lookup%20Incident%20Based/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Infoblox TIDE Lookup Incident Based/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20TIDE%20Lookup%20Incident%20Based/readme.md)*

# Infoblox TIDE Lookup Via Incident

* [Summary](#Summary)
* [Prerequisites](#Prerequisites)
* [Deployment instructions](#Deployment-instructions)
* [Post-Deployment instructions](#Post-Deployment-instructions)

## Summary<a name="Summary"></a>

The playbook takes entity type and value from incident available in Workbook and ingests TIDE Lookup data for that entity into Log table.

### Prerequisites<a name="Prerequisites"></a>

1. Make sure that Infoblox-TIDE-Lookup playbook is deployed before deploying Infoblox-TIDE-Lookup-Via-Incident playbook.

### Deployment instructions<a name="Deployment-instructions"></a>

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here 

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https%3A%2F%2Fportal.azure.com%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20TIDE%20Lookup%20Incident%20Based%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https%3A%2F%2Fportal.azure.us%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20TIDE%20Lookup%20Incident%20Based%2Fazuredeploy.json)

### Post-Deployment instructions<a name="Post-Deployment-instructions"></a>

1. In Microsoft sentinel, analytical rules should be configured to trigger an incident which has Entities Mapping.

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Infoblox](../solutions/infoblox.md)

