# The Hive - Create alert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Parses alert extended properties. 2. Parses alert custom details. 3. Creates alert in TheHive with description, source, sourceRef, title and type passed.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [TheHive](../solutions/thehive.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TheHive/Playbooks/TheHive-CreateAlert/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [TheHive-CreateAlert/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TheHive/Playbooks/TheHive-CreateAlert/readme.md)*

# TheHive-CreateAlert

## Summary

When a new sentinel alerts is created, this playbook gets triggered and performs the following actions:

1. Parse alert extended properties 
2. Parse alert custom details
3. Creates alert in TheHive with description, source, sourceRef, title and type passed.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TheHive/Playbooks/TheHive-CreateAlert/playbook_screenshot.png" width="50%"/><br>

### Prerequisites

1. Prior to the deployment of this playbook, TheHive API Connector needs to be deployed under the same subscription.
2. Obtain TheHive API credentials. Refer to TheHive API Custom Connector documentation.


### Deployment instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here
    * Connector Name: Enter the Logic App connector name for TheHive here
    * onPremiseGatewayName: Provide the On-premises data gateway that will be used with The Hive connector. Data gateway should be deployed under the same subscription and resource group as playbook.


[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTheHive%2FPlaybooks%2FPlaybooks%2FTheHive-CreateAlert%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTheHive%2FPlaybooks%2FPlaybooks%2FTheHive-CreateAlert%2Fazuredeploy.json)

### Post-Deployment instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.

1. Click the Microsoft Sentinel connection resource
2. Click edit API connection
3. Click Authorize
4. Sign in
5. Click Save
6. Repeat steps for other connections

#### b. Configurations in Sentinel

1. In Microsoft Sentinel, analytical rules should be configured to trigger an alert. An alert should contain *source* and *sourceRef* custom entities. [Docomentation about custom entities values](https://docs.thehive-project.org/thehive/legacy/thehive3/api/alert/)
2. Configure the automation rules to trigger the playbook.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to TheHive](../solutions/thehive.md)

